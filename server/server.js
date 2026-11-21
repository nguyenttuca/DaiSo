// server/server.js
// Express + WebSocket Server for Solo / Multiplayer Real-time Battle
const express = require('express');
const http = require('http');
const path = require('path');
const os = require('os');
const { WebSocketServer, WebSocket } = require('ws');
const DB = require('./db.js');

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server, path: '/ws' });

const PORT = process.env.PORT || 3000;
const rootDir = path.join(__dirname, '..');

// Load Questions Bank once into memory
let questionsBank = [];
try {
  const questionsPath = path.join(rootDir, 'data', 'questions.json');
  questionsBank = require(questionsPath);
  console.log(`Loaded ${questionsBank.length} authentic exam questions into memory.`);
} catch (err) {
  console.error('Error loading questions.json:', err);
}

// Question Lookup Map for O(1) scoring
const questionMap = new Map();
questionsBank.forEach(q => questionMap.set(q.id, q));

// Middleware
app.use(express.json());
app.use(express.static(rootDir));

// Helpers
function generateRoomCode() {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

function getLocalIPs() {
  const ips = [];
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        ips.push(iface.address);
      }
    }
  }
  return ips;
}

function selectQuestionsForRoom(sourceOption, count) {
  let pool = [];
  if (sourceOption === 'de101') {
    pool = questionsBank.filter(q => q.examId === 'de101');
  } else if (sourceOption === 'de_ontap') {
    pool = questionsBank.filter(q => q.examId === 'de_ontap');
  } else {
    // Balanced from all 81 questions
    const byTopic = {};
    for (let t = 1; t <= 6; t++) {
      byTopic[t] = questionsBank.filter(q => q.topicId === t);
    }
    // Distribution for count
    const ratios = [0.15, 0.35, 0.15, 0.15, 0.10, 0.10];
    const selected = [];
    for (let t = 1; t <= 6; t++) {
      const take = Math.max(1, Math.round(count * ratios[t - 1]));
      const topicQs = [...byTopic[t]].sort(() => 0.5 - Math.random());
      selected.push(...topicQs.slice(0, take));
    }
    const selectedIds = new Set(selected.map(q => q.id));
    const remaining = questionsBank.filter(q => !selectedIds.has(q.id)).sort(() => 0.5 - Math.random());
    while (selected.length < count && remaining.length > 0) {
      selected.push(remaining.pop());
    }
    return selected.slice(0, count).sort(() => 0.5 - Math.random());
  }

  // Shuffle and slice for specific pool
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// REST APIs
app.get('/api/status', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    port: PORT,
    localIPs: getLocalIPs(),
    totalQuestions: questionsBank.length
  });
});

app.get('/api/history', (req, res) => {
  const history = DB.getMatchHistory(20);
  res.json(history);
});

app.get('/api/rooms/active', (req, res) => {
  const rooms = DB.getActiveRooms();
  res.json(rooms);
});

// Fallback to index.html for client-side routing
app.use((req, res) => {
  res.sendFile(path.join(rootDir, 'index.html'));
});

// WebSocket Server & Room Management
const roomSockets = new Map(); // roomId -> Set of WebSocket clients
const clientInfo = new Map();  // WebSocket -> { playerId, roomId }
const roomTimers = new Map();  // roomId -> timer timeout

function broadcastToRoom(roomId, message, excludeWs = null) {
  const sockets = roomSockets.get(roomId);
  if (!sockets) return;
  const data = JSON.stringify(message);
  for (const client of sockets) {
    if (client !== excludeWs && client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  }
}

function calculateLeaderboard(roomId, totalQuestions) {
  const players = DB.getPlayersInRoom(roomId);
  // Sort: highest score first, then fastest totalTime, then joined_at
  players.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.submitted && b.submitted) {
      if (a.total_time !== b.total_time) return a.total_time - b.total_time;
    }
    return a.joined_at - b.joined_at;
  });

  return players.map((p, index) => ({
    rank: index + 1,
    id: p.id,
    nickname: p.nickname,
    avatarColor: p.avatar_color,
    isHost: !!p.is_host,
    score: p.score,
    correctCount: p.correct_count,
    answeredCount: p.answered_count,
    totalQuestions,
    totalTime: p.total_time,
    submitted: !!p.submitted,
    connected: !!p.connected
  }));
}

function checkAndFinishMatch(roomId, totalQuestions) {
  const room = DB.getRoomById(roomId);
  if (!room || room.status !== 'playing') return;

  const players = DB.getPlayersInRoom(roomId);
  const activePlayers = players.filter(p => p.connected);
  const allSubmitted = activePlayers.length > 0 && activePlayers.every(p => p.submitted);

  if (allSubmitted) {
    if (roomTimers.has(roomId)) {
      clearTimeout(roomTimers.get(roomId));
      roomTimers.delete(roomId);
    }
    const leaderboard = calculateLeaderboard(roomId, totalQuestions);
    DB.finishRoom(roomId, leaderboard);
    broadcastToRoom(roomId, {
      type: 'GAME_FINISHED',
      roomId,
      leaderboard,
      finishedAt: Date.now()
    });
  }
}

wss.on('connection', (ws) => {
  ws.isAlive = true;
  ws.on('pong', () => { ws.isAlive = true; });

  ws.on('message', (raw) => {
    try {
      const data = JSON.parse(raw);
      handleClientMessage(ws, data);
    } catch (err) {
      console.error('Error parsing client message:', err);
    }
  });

  ws.on('close', () => {
    handleClientDisconnect(ws);
  });
});

function handleClientMessage(ws, data) {
  const { type } = data;

  switch (type) {
    case 'CREATE_ROOM': {
      const { nickname, avatarColor, numQuestions, durationSeconds, sourceOption } = data;
      const roomId = 'r_' + Math.random().toString(36).substring(2, 10);
      const playerId = 'p_' + Math.random().toString(36).substring(2, 10);

      let code = generateRoomCode();
      // Ensure code uniqueness
      while (DB.getRoomByCode(code)) {
        code = generateRoomCode();
      }

      const room = DB.createRoom({
        id: roomId,
        code,
        hostPlayerId: playerId,
        numQuestions: numQuestions || 20,
        durationSeconds: durationSeconds || 1500,
        sourceOption: sourceOption || 'all'
      });

      const player = DB.addPlayer({
        id: playerId,
        roomId,
        nickname: nickname || 'Chủ phòng',
        avatarColor: avatarColor || '#4f46e5',
        isHost: 1
      });

      // Bind socket
      clientInfo.set(ws, { playerId, roomId });
      if (!roomSockets.has(roomId)) roomSockets.set(roomId, new Set());
      roomSockets.get(roomId).add(ws);

      ws.send(JSON.stringify({
        type: 'ROOM_CREATED',
        room,
        player,
        players: [player]
      }));
      break;
    }

    case 'JOIN_ROOM': {
      const { code, nickname, avatarColor } = data;
      const room = DB.getRoomByCode(code);

      if (!room) {
        ws.send(JSON.stringify({ type: 'ERROR', message: `Không tìm thấy phòng với mã "${code}". Vui lòng kiểm tra lại.` }));
        return;
      }

      if (room.status === 'playing') {
        ws.send(JSON.stringify({ type: 'ERROR', message: `Phòng "${code}" đang trong trận đấu. Không thể tham gia lúc này.` }));
        return;
      }

      if (room.status === 'finished') {
        ws.send(JSON.stringify({ type: 'ERROR', message: `Trận đấu của phòng "${code}" đã kết thúc.` }));
        return;
      }

      const playerId = 'p_' + Math.random().toString(36).substring(2, 10);
      const player = DB.addPlayer({
        id: playerId,
        roomId: room.id,
        nickname: nickname || `Người chơi ${Math.floor(Math.random() * 900 + 100)}`,
        avatarColor: avatarColor || '#10b981',
        isHost: 0
      });

      // Bind socket
      clientInfo.set(ws, { playerId, roomId: room.id });
      if (!roomSockets.has(room.id)) roomSockets.set(room.id, new Set());
      roomSockets.get(room.id).add(ws);

      const allPlayers = DB.getPlayersInRoom(room.id);

      // Reply to joining client
      ws.send(JSON.stringify({
        type: 'ROOM_JOINED',
        room,
        player,
        players: allPlayers
      }));

      // Broadcast to other players in room
      broadcastToRoom(room.id, {
        type: 'PLAYER_JOINED',
        player,
        players: allPlayers
      }, ws);
      break;
    }

    case 'RECONNECT': {
      const { playerId, roomId } = data;
      const room = DB.getRoomById(roomId);
      const player = DB.getPlayerById(playerId);

      if (room && player) {
        DB.setPlayerConnected(playerId, true);
        clientInfo.set(ws, { playerId, roomId });
        if (!roomSockets.has(roomId)) roomSockets.set(roomId, new Set());
        roomSockets.get(roomId).add(ws);

        const players = DB.getPlayersInRoom(roomId);
        let questions = null;
        if (room.status === 'playing' || room.status === 'finished') {
          questions = room.question_ids.map(id => questionMap.get(id)).filter(Boolean);
        }

        ws.send(JSON.stringify({
          type: 'RECONNECTED_SUCCESS',
          room,
          player,
          players,
          questions
        }));

        broadcastToRoom(roomId, {
          type: 'PLAYER_STATUS_CHANGED',
          playerId,
          connected: true,
          players
        }, ws);
      } else {
        ws.send(JSON.stringify({ type: 'ERROR', message: 'Phiên phòng đấu đã hết hạn.' }));
      }
      break;
    }

    case 'START_GAME': {
      const info = clientInfo.get(ws);
      if (!info) return;

      const room = DB.getRoomById(info.roomId);
      if (!room) return;

      if (room.host_player_id !== info.playerId) {
        ws.send(JSON.stringify({ type: 'ERROR', message: 'Chỉ chủ phòng mới có quyền bắt đầu trận đấu!' }));
        return;
      }

      if (room.status !== 'waiting') {
        ws.send(JSON.stringify({ type: 'ERROR', message: 'Trận đấu đã bắt đầu hoặc đã kết thúc.' }));
        return;
      }

      // Pick questions
      const selectedQs = selectQuestionsForRoom(room.source_option, room.num_questions);
      const questionIds = selectedQs.map(q => q.id);

      const startedRoom = DB.startRoom(room.id, questionIds);
      const players = DB.getPlayersInRoom(room.id);

      // Start server-side timeout fail-safe
      if (roomTimers.has(room.id)) clearTimeout(roomTimers.get(room.id));
      const timeoutMs = (room.duration_seconds + 8) * 1000;
      const timer = setTimeout(() => {
        // Auto-finish room when time expires
        const currentRoom = DB.getRoomById(room.id);
        if (currentRoom && currentRoom.status === 'playing') {
          // Auto submit any remaining players with their current answers
          const curPlayers = DB.getPlayersInRoom(room.id);
          curPlayers.forEach(p => {
            if (!p.submitted) {
              let correct = 0;
              questionIds.forEach(qid => {
                const q = questionMap.get(qid);
                if (q && p.answers && p.answers[qid] === q.correct) correct++;
              });
              const score = Math.round((correct / questionIds.length) * 100) / 10;
              DB.submitPlayer(p.id, {
                answeredCount: p.answered_count,
                answers: p.answers,
                score,
                correctCount: correct,
                totalTime: room.duration_seconds
              });
            }
          });

          const leaderboard = calculateLeaderboard(room.id, questionIds.length);
          DB.finishRoom(room.id, leaderboard);
          broadcastToRoom(room.id, {
            type: 'GAME_FINISHED',
            roomId: room.id,
            leaderboard,
            finishedAt: Date.now(),
            reason: 'time_up'
          });
        }
      }, timeoutMs);
      roomTimers.set(room.id, timer);

      // Broadcast Game Started to all players
      broadcastToRoom(room.id, {
        type: 'GAME_STARTED',
        room: startedRoom,
        questions: selectedQs,
        durationSeconds: room.duration_seconds,
        startedAt: startedRoom.started_at,
        players
      });
      break;
    }

    case 'PROGRESS_UPDATE': {
      const info = clientInfo.get(ws);
      if (!info) return;

      const { answeredCount, answers } = data;
      DB.updatePlayerProgress(info.playerId, answeredCount, answers);

      // Instant real-time progress broadcast to all players in the room!
      const player = DB.getPlayerById(info.playerId);
      broadcastToRoom(info.roomId, {
        type: 'PLAYER_PROGRESS_UPDATE',
        playerId: info.playerId,
        nickname: player ? player.nickname : 'Người chơi',
        answeredCount,
        avatarColor: player ? player.avatar_color : '#4f46e5'
      });
      break;
    }

    case 'SUBMIT_EXAM': {
      const info = clientInfo.get(ws);
      if (!info) return;

      const room = DB.getRoomById(info.roomId);
      if (!room) return;

      const { answers, totalTime } = data;
      const questionIds = room.question_ids || [];

      let correctCount = 0;
      questionIds.forEach(qid => {
        const q = questionMap.get(qid);
        if (q && answers && answers[qid] === q.correct) {
          correctCount++;
        }
      });

      const totalQs = questionIds.length || room.num_questions || 20;
      const score = Math.round((correctCount / totalQs) * 100) / 10;
      const answeredCount = Object.keys(answers || {}).length;

      const updatedPlayer = DB.submitPlayer(info.playerId, {
        answeredCount,
        answers,
        score,
        correctCount,
        totalTime: totalTime || 0
      });

      // Notify room of submission
      broadcastToRoom(info.roomId, {
        type: 'PLAYER_SUBMITTED',
        player: updatedPlayer,
        playerId: info.playerId,
        score,
        correctCount,
        totalTime,
        answeredCount
      });

      // Check if match is completely finished
      checkAndFinishMatch(info.roomId, totalQs);
      break;
    }

    case 'REMATCH_REQUEST': {
      const info = clientInfo.get(ws);
      if (!info) return;

      const room = DB.getRoomById(info.roomId);
      if (!room || room.host_player_id !== info.playerId) return;

      // Reset players in DB for rematch
      const players = DB.getPlayersInRoom(room.id);
      players.forEach(p => {
        DB.updatePlayerProgress(p.id, 0, {});
        // Reset submitted status
        const resetStmt = require('./db.js');
      });

      // Reset room to waiting
      const resetSql = `UPDATE rooms SET status = 'waiting', question_ids = '[]', started_at = NULL, finished_at = NULL WHERE id = ?`;
      const { DatabaseSync } = require('node:sqlite');
      const dbInstance = new DatabaseSync(path.join(rootDir, 'data', 'solo.db'));
      dbInstance.exec(`
        UPDATE rooms SET status = 'waiting', question_ids = '[]', started_at = NULL, finished_at = NULL WHERE id = '${room.id}';
        UPDATE players SET answered_count = 0, answers = '{}', score = 0, correct_count = 0, total_time = 0, submitted = 0, submitted_at = NULL WHERE room_id = '${room.id}';
      `);

      const updatedRoom = DB.getRoomById(room.id);
      const updatedPlayers = DB.getPlayersInRoom(room.id);

      broadcastToRoom(room.id, {
        type: 'REMATCH_READY',
        room: updatedRoom,
        players: updatedPlayers
      });
      break;
    }

    case 'LEAVE_ROOM': {
      handleClientDisconnect(ws, true);
      break;
    }

    case 'PING': {
      ws.send(JSON.stringify({ type: 'PONG' }));
      break;
    }
  }
}

function handleClientDisconnect(ws, isExplicitLeave = false) {
  const info = clientInfo.get(ws);
  if (!info) return;

  const { playerId, roomId } = info;
  clientInfo.delete(ws);

  const sockets = roomSockets.get(roomId);
  if (sockets) {
    sockets.delete(ws);
    if (sockets.size === 0) {
      roomSockets.delete(roomId);
    }
  }

  DB.setPlayerConnected(playerId, false);

  const room = DB.getRoomById(roomId);
  if (!room) return;

  const players = DB.getPlayersInRoom(roomId);
  const remainingActive = players.filter(p => p.connected);

  // If host left and other active players remain, promote next player to host
  if (room.host_player_id === playerId && remainingActive.length > 0) {
    const newHost = remainingActive[0];
    DB.updateRoomHost(roomId, newHost.id);
    broadcastToRoom(roomId, {
      type: 'HOST_CHANGED',
      newHostId: newHost.id,
      players: DB.getPlayersInRoom(roomId)
    });
  }

  broadcastToRoom(roomId, {
    type: 'PLAYER_LEFT',
    playerId,
    isExplicitLeave,
    players: DB.getPlayersInRoom(roomId)
  });

  // If match was playing, check if all remaining active players finished
  if (room.status === 'playing') {
    checkAndFinishMatch(roomId, room.question_ids ? room.question_ids.length : 20);
  }
}

// Heartbeat interval
const interval = setInterval(() => {
  wss.clients.forEach((ws) => {
    if (ws.isAlive === false) return ws.terminate();
    ws.isAlive = false;
    ws.ping();
  });
}, 30000);

wss.on('close', () => {
  clearInterval(interval);
});

// Start Server
server.listen(PORT, '0.0.0.0', () => {
  console.log('\n======================================================');
  console.log(`🚀 ĐẠI SỐ TUYẾN TÍNH & TOÁN RỜI RẠC - SOLO PVP SERVER`);
  console.log(`📡 Local Web:  http://localhost:${PORT}`);
  const ips = getLocalIPs();
  ips.forEach(ip => {
    console.log(`🌐 LAN Network: http://${ip}:${PORT} (Dùng chung WiFi/Mạng LAN)`);
  });
  console.log(`🗄️ Database:    ./data/solo.db (SQLite)`);
  console.log(`📚 Questions:   ${questionsBank.length} Authentic PTIT Questions`);
  console.log('======================================================\n');
});
