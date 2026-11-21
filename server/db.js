// server/db.js
// SQLite database management using built-in node:sqlite (Node.js 22.5+)
const { DatabaseSync } = require('node:sqlite');
const path = require('path');
const fs = require('fs');

const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'solo.db');
const db = new DatabaseSync(dbPath);

// Initialize schema
db.exec(`
  PRAGMA journal_mode = WAL;

  CREATE TABLE IF NOT EXISTS rooms (
    id TEXT PRIMARY KEY,
    code TEXT UNIQUE NOT NULL,
    host_player_id TEXT,
    num_questions INTEGER DEFAULT 20,
    duration_seconds INTEGER DEFAULT 1500,
    source_option TEXT DEFAULT 'all',
    status TEXT DEFAULT 'waiting', -- 'waiting', 'playing', 'finished'
    question_ids TEXT DEFAULT '[]',
    created_at INTEGER NOT NULL,
    started_at INTEGER,
    finished_at INTEGER
  );

  CREATE TABLE IF NOT EXISTS players (
    id TEXT PRIMARY KEY,
    room_id TEXT NOT NULL,
    nickname TEXT NOT NULL,
    avatar_color TEXT DEFAULT '#4f46e5',
    is_host INTEGER DEFAULT 0,
    answered_count INTEGER DEFAULT 0,
    answers TEXT DEFAULT '{}',
    score REAL DEFAULT 0,
    correct_count INTEGER DEFAULT 0,
    total_time INTEGER DEFAULT 0,
    submitted INTEGER DEFAULT 0,
    connected INTEGER DEFAULT 1,
    joined_at INTEGER NOT NULL,
    submitted_at INTEGER,
    FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS match_history (
    id TEXT PRIMARY KEY,
    room_code TEXT NOT NULL,
    player_count INTEGER DEFAULT 2,
    winner_name TEXT NOT NULL,
    winner_score REAL DEFAULT 0,
    config_summary TEXT NOT NULL,
    leaderboard_json TEXT NOT NULL,
    created_at INTEGER NOT NULL
  );
`);

// Prepared statements for high performance
const stmts = {
  createRoom: db.prepare(`
    INSERT INTO rooms (id, code, host_player_id, num_questions, duration_seconds, source_option, status, question_ids, created_at)
    VALUES (?, ?, ?, ?, ?, ?, 'waiting', '[]', ?)
  `),

  getRoomByCode: db.prepare(`
    SELECT * FROM rooms WHERE code = ?
  `),

  getRoomById: db.prepare(`
    SELECT * FROM rooms WHERE id = ?
  `),

  getActiveRooms: db.prepare(`
    SELECT r.*, COUNT(p.id) as player_count 
    FROM rooms r 
    LEFT JOIN players p ON p.room_id = r.id AND p.connected = 1
    WHERE r.status = 'waiting'
    GROUP BY r.id
    ORDER BY r.created_at DESC
    LIMIT 10
  `),

  updateRoomHost: db.prepare(`
    UPDATE rooms SET host_player_id = ? WHERE id = ?
  `),

  startRoom: db.prepare(`
    UPDATE rooms SET status = 'playing', question_ids = ?, started_at = ? WHERE id = ?
  `),

  finishRoom: db.prepare(`
    UPDATE rooms SET status = 'finished', finished_at = ? WHERE id = ?
  `),

  addPlayer: db.prepare(`
    INSERT INTO players (id, room_id, nickname, avatar_color, is_host, answered_count, answers, score, correct_count, total_time, submitted, connected, joined_at)
    VALUES (?, ?, ?, ?, ?, 0, '{}', 0, 0, 0, 0, 1, ?)
  `),

  getPlayerById: db.prepare(`
    SELECT * FROM players WHERE id = ?
  `),

  getPlayersInRoom: db.prepare(`
    SELECT * FROM players WHERE room_id = ? ORDER BY joined_at ASC
  `),

  updatePlayerProgress: db.prepare(`
    UPDATE players 
    SET answered_count = ?, answers = ?
    WHERE id = ?
  `),

  submitPlayer: db.prepare(`
    UPDATE players
    SET submitted = 1, answered_count = ?, answers = ?, score = ?, correct_count = ?, total_time = ?, submitted_at = ?
    WHERE id = ?
  `),

  updatePlayerConnection: db.prepare(`
    UPDATE players SET connected = ? WHERE id = ?
  `),

  setPlayerHost: db.prepare(`
    UPDATE players SET is_host = ? WHERE id = ?
  `),

  recordMatchHistory: db.prepare(`
    INSERT INTO match_history (id, room_code, player_count, winner_name, winner_score, config_summary, leaderboard_json, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `),

  getMatchHistory: db.prepare(`
    SELECT * FROM match_history ORDER BY created_at DESC LIMIT ?
  `)
};

const DB = {
  createRoom({ id, code, hostPlayerId, numQuestions = 20, durationSeconds = 1500, sourceOption = 'all' }) {
    const now = Date.now();
    stmts.createRoom.run(id, code, hostPlayerId, numQuestions, durationSeconds, sourceOption, now);
    return this.getRoomById(id);
  },

  getRoomByCode(code) {
    const r = stmts.getRoomByCode.get(code.toUpperCase().trim());
    if (r) {
      r.question_ids = JSON.parse(r.question_ids || '[]');
    }
    return r;
  },

  getRoomById(id) {
    const r = stmts.getRoomById.get(id);
    if (r) {
      r.question_ids = JSON.parse(r.question_ids || '[]');
    }
    return r;
  },

  getActiveRooms() {
    return stmts.getActiveRooms.all();
  },

  addPlayer({ id, roomId, nickname, avatarColor = '#4f46e5', isHost = 0 }) {
    const now = Date.now();
    stmts.addPlayer.run(id, roomId, nickname.trim(), avatarColor, isHost ? 1 : 0, now);
    return this.getPlayerById(id);
  },

  getPlayerById(id) {
    const p = stmts.getPlayerById.get(id);
    if (p) {
      p.answers = JSON.parse(p.answers || '{}');
    }
    return p;
  },

  getPlayersInRoom(roomId) {
    const rows = stmts.getPlayersInRoom.all(roomId);
    return rows.map(p => {
      p.answers = JSON.parse(p.answers || '{}');
      return p;
    });
  },

  updatePlayerProgress(playerId, answeredCount, answers) {
    stmts.updatePlayerProgress.run(answeredCount, JSON.stringify(answers || {}), playerId);
  },

  submitPlayer(playerId, { answeredCount, answers, score, correctCount, totalTime }) {
    const now = Date.now();
    stmts.submitPlayer.run(
      answeredCount,
      JSON.stringify(answers || {}),
      score,
      correctCount,
      totalTime,
      now,
      playerId
    );
    return this.getPlayerById(playerId);
  },

  setPlayerConnected(playerId, connected) {
    stmts.updatePlayerConnection.run(connected ? 1 : 0, playerId);
  },

  setPlayerHost(playerId, isHost) {
    stmts.setPlayerHost.run(isHost ? 1 : 0, playerId);
  },

  updateRoomHost(roomId, newHostId) {
    stmts.updateRoomHost.run(newHostId, roomId);
    stmts.setPlayerHost.run(1, newHostId);
  },

  startRoom(roomId, questionIds) {
    const now = Date.now();
    stmts.startRoom.run(JSON.stringify(questionIds), now, roomId);
    return this.getRoomById(roomId);
  },

  finishRoom(roomId, leaderboard) {
    const now = Date.now();
    stmts.finishRoom.run(now, roomId);

    // Save match to history
    const room = this.getRoomById(roomId);
    if (room && leaderboard && leaderboard.length > 0) {
      const winner = leaderboard[0];
      const matchId = 'm_' + Math.random().toString(36).substring(2, 10);
      const configSummary = `${room.num_questions} câu • ${Math.round(room.duration_seconds / 60)} phút`;
      stmts.recordMatchHistory.run(
        matchId,
        room.code,
        leaderboard.length,
        winner.nickname,
        winner.score,
        configSummary,
        JSON.stringify(leaderboard),
        now
      );
    }
    return this.getRoomById(roomId);
  },

  getMatchHistory(limit = 10) {
    const rows = stmts.getMatchHistory.all(limit);
    return rows.map(r => {
      r.leaderboard = JSON.parse(r.leaderboard_json || '[]');
      return r;
    });
  }
};

module.exports = DB;
