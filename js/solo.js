// js/solo.js
// Frontend Logic for Real-time Solo PvP Battle via WebSocket
(function() {
  'use strict';

  const px = (name, size = 15, cls = '') =>
    (typeof window !== 'undefined' && typeof window.pxIcon === 'function')
      ? window.pxIcon(name, size, cls)
      : '';

  // --- KaTeX Helper ---
  function renderMath(container) {
    if (!container) return;
    if (typeof window.renderMathInElement === 'function') {
      try {
        window.renderMathInElement(container, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\[", right: "\\]", display: true },
            { left: "\\(", right: "\\)", display: false }
          ],
          throwOnError: false,
          ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"]
        });
      } catch (err) {
        console.warn("KaTeX render error in solo:", err);
      }
    } else {
      setTimeout(() => renderMath(container), 200);
    }
  }

  function formatContent(text) {
    if (text === null || text === undefined) return '';
    let str = String(text);
    // Sanitize accidental double-closing brace in LaTeX \{... \}} -> \{... \}
    str = str.replace(/\\\}\s*\}/g, '\\}');
    // Sanitize double minus -- -> +
    str = str.replace(/-\s*-\s*/g, '+ ');
    // Sanitize plus minus + - -> -
    str = str.replace(/\+\s*-\s*/g, '- ');
    // Sanitize + (-num)var -> - num var
    str = str.replace(/\+\s*\(\s*-\s*(\d+)\s*\)\s*([a-zA-Z])/g, '- $1$2');
    str = str.replace(/\+\s*\(\s*(\d+)\s*\)\s*([a-zA-Z])/g, '+ $1$2');
    str = str.replace(/\(\s*-\s*(\d+)\s*\)\s*([a-zA-Z])/g, '-$1$2');
    str = str.replace(/\(\s*(\d+)\s*\)\s*([a-zA-Z])/g, '$1$2');
    str = str.replace(/\+\s*\(\s*-\s*(\d+)\s*\)/g, '- $1');
    return str
      .replace(/^(\s*)\*\s+/gm, '$1• ')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }

  function getDifficultyBadgeHtml(diff) {
    if (diff === 'easy') {
      return `<span class="diff-tag diff-easy" title="Mức độ Dễ">${px('dot-green', 12)} Dễ</span>`;
    } else if (diff === 'hard') {
      return `<span class="diff-tag diff-hard" title="Mức độ Khó">${px('dot-red', 12)} Khó</span>`;
    }
    return `<span class="diff-tag diff-medium" title="Mức độ Trung bình">${px('dot-yellow', 12)} Trung bình</span>`;
  }

  function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // --- Solo State ---
  const soloState = {
    ws: null,
    connected: false,
    reconnectAttempts: 0,
    currentScreen: 'hub', // 'hub' | 'waiting' | 'battle' | 'result'

    profile: {
      nickname: localStorage.getItem('solo_nickname') || '',
      avatarColor: localStorage.getItem('solo_avatar_color') || '#4f46e5'
    },

    room: null,
    player: null,
    players: [],
    questions: [],
    currentIndex: 0,
    answers: {}, // questionId -> 'A' | 'B' | 'C' | 'D'
    flags: new Set(),
    durationSeconds: 1500,
    timeLeft: 1500,
    timerInterval: null,
    timeSpent: 0,
    leaderboard: []
  };

  // --- DOM Elements ---
  const soloEl = {
    // Screens
    hubScreen: document.getElementById('soloHubScreen'),
    waitingScreen: document.getElementById('soloWaitingScreen'),
    battleScreen: document.getElementById('soloBattleScreen'),
    resultScreen: document.getElementById('soloResultScreen'),

    // Hub Elements
    nicknameInput: document.getElementById('soloNicknameInput'),
    colorPicker: document.getElementById('soloColorPicker'),
    numQuestionsSelect: document.getElementById('soloNumQuestions'),
    durationSelect: document.getElementById('soloDuration'),
    sourceOptionSelect: document.getElementById('soloSourceOption'),
    btnCreateRoom: document.getElementById('btnCreateRoom'),
    joinCodeInput: document.getElementById('soloJoinCodeInput'),
    btnJoinRoom: document.getElementById('btnJoinRoom'),
    joinError: document.getElementById('soloJoinError'),
    activeRoomsList: document.getElementById('soloActiveRoomsList'),
    historyList: document.getElementById('soloHistoryList'),

    // Waiting Elements
    waitingRoomCode: document.getElementById('waitingRoomCode'),
    waitingRoomConfig: document.getElementById('waitingRoomConfig'),
    waitingPlayerCount: document.getElementById('waitingPlayerCount'),
    waitingPlayersList: document.getElementById('waitingPlayersList'),
    waitingHostControls: document.getElementById('waitingHostControls'),
    waitingPlayerStatusHint: document.getElementById('waitingPlayerStatusHint'),
    btnStartSoloGame: document.getElementById('btnStartSoloGame'),
    btnLeaveWaitingRoom: document.getElementById('btnLeaveWaitingRoom'),
    btnCopyRoomCode: document.getElementById('btnCopyRoomCode'),
    btnCopyRoomLink: document.getElementById('btnCopyRoomLink'),

    // Battle Elements
    battlePlayersProgressContainer: document.getElementById('battlePlayersProgressContainer'),
    battleTimer: document.getElementById('soloBattleTimer'),
    battleProgressText: document.getElementById('soloBattleProgressText'),
    btnSoloFlag: document.getElementById('btnSoloFlag'),
    btnSoloSubmit: document.getElementById('btnSoloSubmit'),
    soloNavGrid: document.getElementById('soloNavGrid'),
    soloQuestionContainer: document.getElementById('soloQuestionContainer'),
    btnSoloPrev: document.getElementById('btnSoloPrev'),
    btnSoloNext: document.getElementById('btnSoloNext'),

    // Result Elements
    winnerAnnouncement: document.getElementById('soloWinnerAnnouncement'),
    matchSummarySub: document.getElementById('soloMatchSummarySub'),
    podiumContainer: document.getElementById('soloPodiumContainer'),
    leaderboardTbody: document.getElementById('soloLeaderboardTbody'),
    reviewQuestionsList: document.getElementById('soloReviewQuestionsList'),
    btnSoloRematch: document.getElementById('btnSoloRematch'),
    btnSoloBackHub: document.getElementById('btnSoloBackHub')
  };

  // --- Screen Switching ---
  function switchSoloScreen(screen) {
    soloState.currentScreen = screen;
    if (soloEl.hubScreen) soloEl.hubScreen.style.display = screen === 'hub' ? 'block' : 'none';
    if (soloEl.waitingScreen) soloEl.waitingScreen.style.display = screen === 'waiting' ? 'block' : 'none';
    if (soloEl.battleScreen) soloEl.battleScreen.style.display = screen === 'battle' ? 'block' : 'none';
    if (soloEl.resultScreen) soloEl.resultScreen.style.display = screen === 'result' ? 'block' : 'none';

    if (screen === 'hub') {
      fetchActiveRooms();
      fetchMatchHistory();
    }
    if (window.MipoDogs && window.MipoDogs.syncExamState) {
      window.MipoDogs.syncExamState();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- WebSocket Setup ---
  function connectWebSocket(callback) {
    if (window.location.protocol === 'file:' || window.location.hostname.endsWith('github.io')) {
      // GitHub Pages / Static hosting doesn't run WebSocket backend
      return;
    }
    if (soloState.ws && (soloState.ws.readyState === WebSocket.OPEN || soloState.ws.readyState === WebSocket.CONNECTING)) {
      if (callback) callback();
      return;
    }

    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const host = window.location.host;
    const wsUrl = `${protocol}//${host}/ws`;

    try {
      soloState.ws = new WebSocket(wsUrl);

      soloState.ws.onopen = () => {
        soloState.connected = true;
        soloState.reconnectAttempts = 0;
        console.log('Connected to Solo WebSocket Server.');

        // Reconnect session if player and room already exist in sessionStorage
        const savedPlayerId = sessionStorage.getItem('solo_playerId');
        const savedRoomId = sessionStorage.getItem('solo_roomId');
        if (savedPlayerId && savedRoomId) {
          sendWsMessage({
            type: 'RECONNECT',
            playerId: savedPlayerId,
            roomId: savedRoomId
          });
        }

        if (callback) callback();
      };

      soloState.ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          handleServerMessage(data);
        } catch (e) {
          console.error('Failed to parse server message:', e);
        }
      };

      soloState.ws.onclose = () => {
        soloState.connected = false;
        console.warn('Solo WebSocket closed. Will attempt reconnect...');
        setTimeout(() => {
          if (soloState.currentScreen !== 'hub') {
            connectWebSocket();
          }
        }, 2000);
      };

      soloState.ws.onerror = (err) => {
        console.error('Solo WebSocket error:', err);
      };
    } catch (e) {
      console.error('Failed to init WebSocket:', e);
    }
  }

  function sendWsMessage(data) {
    if (window.location.protocol === 'file:' || window.location.hostname.endsWith('github.io')) {
      showToast('Chế độ Đấu Solo PvP trực tiếp cần WebSocket server (chạy local qua "npm start"). Trên GitHub Pages, bạn hãy dùng các chế độ Thi thử & Luyện tập!', 'warn');
      return;
    }
    if (soloState.ws && soloState.ws.readyState === WebSocket.OPEN) {
      soloState.ws.send(JSON.stringify(data));
    } else {
      connectWebSocket(() => {
        if (soloState.ws && soloState.ws.readyState === WebSocket.OPEN) {
          soloState.ws.send(JSON.stringify(data));
        }
      });
    }
  }

  // --- Handle Server Messages ---
  function handleServerMessage(data) {
    console.log('[Solo WS Recv]', data.type, data);

    switch (data.type) {
      case 'ERROR': {
        if (soloEl.joinError) {
          soloEl.joinError.textContent = data.message;
          soloEl.joinError.style.display = 'block';
        }
        alert(data.message);
        break;
      }

      case 'ROOM_CREATED': {
        soloState.room = data.room;
        soloState.player = data.player;
        soloState.players = data.players || [data.player];

        sessionStorage.setItem('solo_roomId', data.room.id);
        sessionStorage.setItem('solo_playerId', data.player.id);
        sessionStorage.setItem('solo_roomCode', data.room.code);

        renderWaitingRoom();
        switchSoloScreen('waiting');
        break;
      }

      case 'ROOM_JOINED': {
        soloState.room = data.room;
        soloState.player = data.player;
        soloState.players = data.players || [];

        sessionStorage.setItem('solo_roomId', data.room.id);
        sessionStorage.setItem('solo_playerId', data.player.id);
        sessionStorage.setItem('solo_roomCode', data.room.code);

        renderWaitingRoom();
        switchSoloScreen('waiting');
        break;
      }

      case 'PLAYER_JOINED': {
        soloState.players = data.players;
        renderWaitingRoom();
        showToast(`${data.player.nickname} vừa vào phòng!`, 'wavehand');
        break;
      }

      case 'PLAYER_LEFT': {
        soloState.players = data.players;
        if (soloState.currentScreen === 'waiting') {
          renderWaitingRoom();
        } else if (soloState.currentScreen === 'battle') {
          renderBattleProgressTracker();
        }
        break;
      }

      case 'HOST_CHANGED': {
        if (soloState.room) soloState.room.host_player_id = data.newHostId;
        if (soloState.player) {
          soloState.player.is_host = (soloState.player.id === data.newHostId);
        }
        soloState.players = data.players;
        renderWaitingRoom();
        showToast('Quyền chủ phòng đã được chuyển giao!', 'crown');
        break;
      }

      case 'RECONNECTED_SUCCESS': {
        soloState.room = data.room;
        soloState.player = data.player;
        soloState.players = data.players;

        if (data.room.status === 'waiting') {
          renderWaitingRoom();
          switchSoloScreen('waiting');
        } else if (data.room.status === 'playing') {
          soloState.questions = data.questions || [];
          soloState.durationSeconds = data.room.duration_seconds;
          const elapsed = Math.floor((Date.now() - data.room.started_at) / 1000);
          soloState.timeLeft = Math.max(0, data.room.duration_seconds - elapsed);
          soloState.answers = soloState.player.answers || {};

          startBattleTimer();
          renderBattleProgressTracker();
          renderSoloNav();
          renderSoloQuestion();
          switchSoloScreen('battle');
        } else if (data.room.status === 'finished') {
          switchSoloScreen('hub');
        }
        break;
      }

      case 'GAME_STARTED': {
        soloState.room = data.room;
        soloState.questions = data.questions || [];
        soloState.players = data.players || soloState.players;
        soloState.durationSeconds = data.durationSeconds;
        soloState.timeLeft = data.durationSeconds;
        soloState.timeSpent = 0;
        soloState.currentIndex = 0;
        soloState.answers = {};
        soloState.flags.clear();

        // Initialize answered counts
        soloState.players.forEach(p => {
          p.answered_count = 0;
          p.submitted = false;
        });

        startBattleTimer();
        renderBattleProgressTracker();
        renderSoloNav();
        renderSoloQuestion();
        switchSoloScreen('battle');
        break;
      }

      case 'PLAYER_PROGRESS_UPDATE': {
        // Real-time opponent progress update!
        const p = soloState.players.find(x => x.id === data.playerId);
        if (p) {
          p.answered_count = data.answeredCount;
        }
        renderBattleProgressTracker();
        break;
      }

      case 'PLAYER_SUBMITTED': {
        const p = soloState.players.find(x => x.id === data.playerId);
        if (p) {
          p.submitted = true;
          p.score = data.score;
          p.correct_count = data.correctCount;
          p.total_time = data.totalTime;
          p.answered_count = data.answeredCount;
        }
        renderBattleProgressTracker();
        showToast(`${data.nickname || (p ? p.nickname : 'Đấu thủ')} đã nộp bài (${data.score}đ)!`, 'flag');
        break;
      }

      case 'GAME_FINISHED': {
        clearInterval(soloState.timerInterval);
        soloState.leaderboard = data.leaderboard || [];
        renderMatchResults(data.leaderboard);
        switchSoloScreen('result');
        break;
      }

      case 'REMATCH_READY': {
        soloState.room = data.room;
        soloState.players = data.players;
        renderWaitingRoom();
        switchSoloScreen('waiting');
        showToast('Trận đấu mới đã sẵn sàng tại phòng chờ!', 'refresh');
        break;
      }
    }
  }

  // --- Profile & Hub Actions ---
  function getNickname() {
    let name = soloEl.nicknameInput.value.trim();
    if (!name) {
      name = 'Đấu Thủ ' + Math.floor(Math.random() * 900 + 100);
      soloEl.nicknameInput.value = name;
    }
    soloState.profile.nickname = name;
    localStorage.setItem('solo_nickname', name);
    return name;
  }

  function getAvatarColor() {
    return soloState.profile.avatarColor;
  }

  function initProfileColorPicker() {
    if (!soloEl.colorPicker) return;
    const dots = soloEl.colorPicker.querySelectorAll('.color-dot');
    dots.forEach(dot => {
      const color = dot.dataset.color;
      if (color === soloState.profile.avatarColor) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }

      dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        soloState.profile.avatarColor = color;
        localStorage.setItem('solo_avatar_color', color);
      });
    });
  }

  function fetchActiveRooms() {
    if (!soloEl.activeRoomsList) return;
    if (window.location.protocol === 'file:' || window.location.hostname.endsWith('github.io')) {
      soloEl.activeRoomsList.innerHTML = `<div style="padding: 10px 0; color: var(--text-muted); font-size: 0.85rem;">ℹ️ GitHub Pages là máy chủ tĩnh. Để thi đấu PvP nhiều người chơi qua WebSocket, bạn có thể khởi chạy server local bằng lệnh <code>npm start</code>.</div>`;
      return;
    }
    fetch('/api/rooms/active')
      .then(res => res.json())
      .then(rooms => {
        if (!Array.isArray(rooms) || rooms.length === 0) {
          soloEl.activeRoomsList.innerHTML = `<div style="padding: 10px 0; color: var(--text-muted);">Hiện không có phòng nào đang mở. Hãy tạo phòng mới ngay bên trên!</div>`;
          return;
        }
        soloEl.activeRoomsList.innerHTML = rooms.map(r => `
          <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid var(--border-light);">
            <div>
              <strong>Phòng ${escapeHtml(r.code)}</strong>
              <div style="font-size:0.75rem; color:var(--text-muted);">${r.num_questions} câu • ${Math.round(r.duration_seconds / 60)} phút • ${r.player_count || 1} người</div>
            </div>
            <button class="btn btn-primary btn-join-quick" data-code="${r.code}" style="padding:4px 12px; font-size:0.8rem;">
              Tham gia
            </button>
          </div>
        `).join('');

        soloEl.activeRoomsList.querySelectorAll('.btn-join-quick').forEach(b => {
          b.addEventListener('click', () => {
            const code = b.dataset.code;
            if (soloEl.joinCodeInput) soloEl.joinCodeInput.value = code;
            joinRoom(code);
          });
        });
      })
      .catch(err => {
        console.warn('Failed to fetch active rooms:', err);
      });
  }

  function fetchMatchHistory() {
    if (!soloEl.historyList) return;
    if (window.location.protocol === 'file:' || window.location.hostname.endsWith('github.io')) {
      soloEl.historyList.innerHTML = `<div style="padding: 10px 0; color: var(--text-muted); font-size: 0.85rem;">Chưa có lịch sử đấu trên server.</div>`;
      return;
    }
    fetch('/api/history')
      .then(res => res.json())
      .then(history => {
        if (!Array.isArray(history) || history.length === 0) {
          soloEl.historyList.innerHTML = `<div style="padding: 10px 0; color: var(--text-muted);">Chưa có trận đấu nào trong cơ sở dữ liệu SQLite.</div>`;
          return;
        }
        soloEl.historyList.innerHTML = history.slice(0, 5).map(m => `
          <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid var(--border-light);">
            <div>
              <strong>${px('trophy', 14)} ${escapeHtml(m.winner_name)}</strong> <span style="color:var(--primary); font-weight:700;">(${m.winner_score}đ)</span>
              <div style="font-size:0.75rem; color:var(--text-muted);">Phòng ${m.room_code} • ${m.player_count} người đấu • ${m.config_summary}</div>
            </div>
            <span style="font-size:0.75rem; color:var(--text-muted);">${new Date(m.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        `).join('');
      })
      .catch(err => {
        console.warn('Failed to fetch history:', err);
      });
  }

  function createRoom() {
    const nickname = getNickname();
    const avatarColor = getAvatarColor();
    const numQuestions = parseInt(soloEl.numQuestionsSelect.value, 10) || 20;
    const durationSeconds = parseInt(soloEl.durationSelect.value, 10) || 1500;
    const sourceOption = soloEl.sourceOptionSelect.value || 'all';

    sendWsMessage({
      type: 'CREATE_ROOM',
      nickname,
      avatarColor,
      numQuestions,
      durationSeconds,
      sourceOption
    });
  }

  function joinRoom(code) {
    if (soloEl.joinError) soloEl.joinError.style.display = 'none';
    const cleanCode = (code || (soloEl.joinCodeInput ? soloEl.joinCodeInput.value : '')).trim().toUpperCase();

    if (!cleanCode || cleanCode.length < 4) {
      if (soloEl.joinError) {
        soloEl.joinError.textContent = 'Vui lòng nhập mã phòng hợp lệ.';
        soloEl.joinError.style.display = 'block';
      }
      return;
    }

    const nickname = getNickname();
    const avatarColor = getAvatarColor();

    sendWsMessage({
      type: 'JOIN_ROOM',
      code: cleanCode,
      nickname,
      avatarColor
    });
  }

  // --- Waiting Room UI ---
  function renderWaitingRoom() {
    if (!soloState.room) return;
    const room = soloState.room;
    const isHost = soloState.player && (soloState.player.id === room.host_player_id || soloState.player.is_host);

    if (soloEl.waitingRoomCode) soloEl.waitingRoomCode.textContent = room.code;
    if (soloEl.waitingRoomConfig) {
      const sourceName = room.source_option === 'de101' ? 'Đề 101' : (room.source_option === 'de_ontap' ? 'Đề ôn tập' : 'Toàn bộ 81 câu đề gốc');
      soloEl.waitingRoomConfig.textContent = `${room.num_questions} câu • ${Math.round(room.duration_seconds / 60)} phút • ${sourceName}`;
    }
    if (soloEl.waitingPlayerCount) soloEl.waitingPlayerCount.textContent = soloState.players.length;

    // Render Players
    if (soloEl.waitingPlayersList) {
      soloEl.waitingPlayersList.innerHTML = soloState.players.map(p => {
        const isSelf = soloState.player && p.id === soloState.player.id;
        const isPlayerHost = p.id === room.host_player_id || p.is_host;
        const initial = (p.nickname || 'U').charAt(0).toUpperCase();

        return `
          <div class="lobby-player-card ${isSelf ? 'is-self' : ''}">
            <div class="player-avatar-circle" style="background-color: ${p.avatar_color || '#4f46e5'}">
              ${initial}
            </div>
            <div class="player-info-text">
              <div class="player-name-line">
                ${escapeHtml(p.nickname)} ${isSelf ? '<span style="color:var(--primary); font-size:0.75rem;">(Bạn)</span>' : ''}
              </div>
              <div class="player-tag-line">
                ${isPlayerHost ? `<span class="host-crown-badge" title="Chủ phòng">${px('crown', 13)} Chủ phòng</span>` : `<span style="color:var(--success-solid); display:inline-flex; align-items:center; gap:4px;">${px('dot-green', 11)} Sẵn sàng</span>`}
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    // Host Controls vs Waiting status
    if (soloEl.waitingHostControls) {
      if (isHost) {
        soloEl.btnStartSoloGame.style.display = 'inline-block';
        soloEl.waitingPlayerStatusHint.textContent = soloState.players.length >= 2 
          ? 'Đã sẵn sàng! Bạn có thể bấm bắt đầu.' 
          : 'Có thể bấm bắt đầu ngay hoặc đợi thêm người chơi khác.';
      } else {
        soloEl.btnStartSoloGame.style.display = 'none';
        soloEl.waitingPlayerStatusHint.innerHTML = `${px('hourglass', 14)} Đang đợi chủ phòng bấm bắt đầu trận đấu...`;
      }
    }
  }

  // --- Real-time Battle Progress Tracker ---
  function renderBattleProgressTracker() {
    if (!soloEl.battlePlayersProgressContainer) return;
    const total = soloState.questions.length || 20;

    soloEl.battlePlayersProgressContainer.innerHTML = soloState.players.map(p => {
      const isSelf = soloState.player && p.id === soloState.player.id;
      const count = isSelf ? Object.keys(soloState.answers).length : (p.answered_count || 0);
      const percent = Math.min(100, Math.round((count / total) * 100));
      const initial = (p.nickname || 'U').charAt(0).toUpperCase();
      const isFinished = !!p.submitted;

      return `
        <div class="battle-player-row ${isSelf ? 'is-current-user' : ''}">
          <div class="battle-player-avatar-sm" style="background-color: ${p.avatar_color || '#4f46e5'}">
            ${initial}
          </div>
          <div class="battle-player-name" title="${escapeHtml(p.nickname)}">
            ${escapeHtml(p.nickname)} ${isSelf ? '<strong>(Bạn)</strong>' : ''}
          </div>
          <div class="battle-progress-wrapper">
            <div class="battle-progress-bar-bg">
              <div class="battle-progress-bar-fill" style="width: ${percent}%; background-color: ${p.avatar_color || 'var(--primary)'};"></div>
            </div>
          </div>
          <div class="battle-player-stat ${isFinished ? 'finished' : ''}">
            ${isFinished ? `${px('check', 13)} Đã nộp (${count}/${total})` : `Đã làm: ${count}/${total} (${percent}%)`}
          </div>
        </div>
      `;
    }).join('');

    const answeredSelf = Object.keys(soloState.answers).length;
    if (soloEl.battleProgressText) {
      soloEl.battleProgressText.textContent = `Đã làm ${answeredSelf}/${total} câu`;
    }
  }

  // --- Battle Question & Navigation UI ---
  function renderSoloNav() {
    if (!soloEl.soloNavGrid) return;
    soloEl.soloNavGrid.innerHTML = '';

    soloState.questions.forEach((q, idx) => {
      if (!q || !q.id) return;
      const dot = document.createElement('button');
      dot.className = 'nav-dot';
      dot.textContent = idx + 1;

      if (idx === soloState.currentIndex) dot.classList.add('current');
      if (soloState.answers[q.id]) dot.classList.add('answered');
      if (soloState.flags.has(q.id)) dot.classList.add('flagged');

      dot.addEventListener('click', () => {
        soloState.currentIndex = idx;
        renderSoloNav();
        renderSoloQuestion();
      });

      soloEl.soloNavGrid.appendChild(dot);
    });
  }

  function renderSoloQuestion() {
    if (!soloEl.soloQuestionContainer) return;
    const q = soloState.questions[soloState.currentIndex];
    if (!q) return;

    const isFlagged = soloState.flags.has(q.id);
    if (soloEl.btnSoloFlag) {
      soloEl.btnSoloFlag.classList.toggle('active', isFlagged);
      soloEl.btnSoloFlag.innerHTML = isFlagged
        ? `${px('star-full', 14)} Đã đánh dấu <span class="kbd-hint">F</span>`
        : `${px('star-empty', 14)} Đánh dấu <span class="kbd-hint">F</span>`;
    }

    const selectedKey = soloState.answers[q.id];

    let optionsHtml = (q.options || []).map(opt => {
      const isSelected = selectedKey === opt.key;
      return `
        <button class="option-btn ${isSelected ? 'selected' : ''}" data-key="${opt.key}">
          <span class="opt-badge">${opt.key}</span>
          <span class="opt-text">${formatContent(opt.text)}</span>
        </button>
      `;
    }).join('');

    const examBadgeText = q.examName ? `${q.examName} • Câu ${q.originalId}` : `Đề gốc • Câu ${q.originalId}`;
    const diffBadgeHtml = getDifficultyBadgeHtml(q.difficulty);

    soloEl.soloQuestionContainer.innerHTML = `
      <div class="question-meta">
        <span class="topic-tag">${escapeHtml(q.topicName)}</span>
        <div style="display:flex; gap:6px; align-items:center;">
          ${diffBadgeHtml}
          <span class="orig-tag highlight">${escapeHtml(examBadgeText)}</span>
        </div>
      </div>
      <div class="question-title">
        <strong>Câu ${soloState.currentIndex + 1} / ${soloState.questions.length}.</strong> ${formatContent(q.question)}
      </div>
      <div class="options-list">
        ${optionsHtml}
      </div>
    `;

    // Option clicks
    soloEl.soloQuestionContainer.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.key;
        selectSoloOption(key);
      });
    });

    if (soloEl.btnSoloPrev) soloEl.btnSoloPrev.disabled = soloState.currentIndex === 0;
    if (soloEl.btnSoloNext) soloEl.btnSoloNext.disabled = soloState.currentIndex === soloState.questions.length - 1;

    renderSoloNav();
    renderMath(soloEl.soloQuestionContainer);
  }

  function selectSoloOption(key) {
    const q = soloState.questions[soloState.currentIndex];
    if (!q) return;

    if (soloState.answers[q.id] === key) {
      delete soloState.answers[q.id];
    } else {
      soloState.answers[q.id] = key;
    }

    const answeredCount = Object.keys(soloState.answers).length;

    // Send instant real-time progress update to opponent!
    sendWsMessage({
      type: 'PROGRESS_UPDATE',
      answeredCount,
      answers: soloState.answers
    });

    renderSoloNav();
    renderSoloQuestion();
    renderBattleProgressTracker();
  }

  function startBattleTimer() {
    clearInterval(soloState.timerInterval);
    updateBattleTimerDisplay();

    soloState.timerInterval = setInterval(() => {
      soloState.timeLeft--;
      soloState.timeSpent++;
      updateBattleTimerDisplay();

      if (soloState.timeLeft <= 0) {
        clearInterval(soloState.timerInterval);
        submitSoloExam(true);
      }
    }, 1000);
  }

  function updateBattleTimerDisplay() {
    if (!soloEl.battleTimer) return;
    const mins = Math.floor(soloState.timeLeft / 60);
    const secs = soloState.timeLeft % 60;
    soloEl.battleTimer.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (soloEl.battleTimer.parentElement) {
      if (soloState.timeLeft < 180) {
        soloEl.battleTimer.parentElement.classList.add('warning');
      } else {
        soloEl.battleTimer.parentElement.classList.remove('warning');
      }
    }
  }

  function submitSoloExam(isAuto = false) {
    if (!isAuto) {
      const answered = Object.keys(soloState.answers).length;
      const total = soloState.questions.length;
      const confirmMsg = answered < total 
        ? `Bạn mới trả lời ${answered}/${total} câu hỏi. Bạn có chắc chắn muốn nộp bài thi đấu ngay không?`
        : `Bạn đã hoàn thành đủ ${total}/${total} câu. Bạn có muốn nộp bài ngay để đối chiếu kết quả không?`;
      if (!confirm(confirmMsg)) return;
    }

    clearInterval(soloState.timerInterval);

    sendWsMessage({
      type: 'SUBMIT_EXAM',
      answers: soloState.answers,
      totalTime: soloState.timeSpent
    });

    showToast('Đã gửi bài thi của bạn lên máy chủ! Đang chờ đối thủ nộp bài...', 'flag');
    renderBattleProgressTracker();
  }

  // --- Leaderboard & Match Results ---
  function renderMatchResults(leaderboard) {
    if (!leaderboard || leaderboard.length === 0) return;

    const winner = leaderboard[0];
    if (soloEl.winnerAnnouncement) {
      soloEl.winnerAnnouncement.innerHTML = `${px('crown', 16)} Quán Quân: <span style="color:var(--primary);">${escapeHtml(winner.nickname)}</span> (${winner.score}đ • ${winner.correctCount}/${winner.totalQuestions} đúng)`;
    }
    if (soloEl.matchSummarySub && soloState.room) {
      soloEl.matchSummarySub.textContent = `Phòng: ${soloState.room.code} • Số người đấu: ${leaderboard.length} • Thời gian giới hạn: ${Math.round(soloState.room.duration_seconds / 60)} phút`;
    }

    // Podium
    if (soloEl.podiumContainer) {
      let podiumHtml = '';
      // Rank 2 (Silver)
      if (leaderboard[1]) {
        const p2 = leaderboard[1];
        podiumHtml += `
          <div class="podium-slot second">
            <div class="podium-crown">${px('medal-2', 24)}</div>
            <div class="podium-avatar" style="background-color: ${p2.avatarColor || '#6b7280'}">${(p2.nickname || 'U').charAt(0)}</div>
            <div class="podium-name">${escapeHtml(p2.nickname)}</div>
            <div class="podium-score">${p2.score} điểm</div>
            <div class="podium-pillar">2</div>
          </div>
        `;
      }
      // Rank 1 (Gold)
      podiumHtml += `
        <div class="podium-slot first">
          <div class="podium-crown">${px('crown', 20)} ${px('medal-1', 24)}</div>
          <div class="podium-avatar" style="background-color: ${winner.avatarColor || '#d97706'}">${(winner.nickname || 'U').charAt(0)}</div>
          <div class="podium-name" style="font-size:1.05rem;">${escapeHtml(winner.nickname)}</div>
          <div class="podium-score" style="font-weight:700; color:var(--primary);">${winner.score} điểm (${winner.correctCount}/${winner.totalQuestions})</div>
          <div class="podium-pillar">1</div>
        </div>
      `;
      // Rank 3 (Bronze)
      if (leaderboard[2]) {
        const p3 = leaderboard[2];
        podiumHtml += `
          <div class="podium-slot third">
            <div class="podium-crown">${px('medal-3', 24)}</div>
            <div class="podium-avatar" style="background-color: ${p3.avatarColor || '#b45309'}">${(p3.nickname || 'U').charAt(0)}</div>
            <div class="podium-name">${escapeHtml(p3.nickname)}</div>
            <div class="podium-score">${p3.score} điểm</div>
            <div class="podium-pillar">3</div>
          </div>
        `;
      }
      soloEl.podiumContainer.innerHTML = podiumHtml;
    }

    // Table
    if (soloEl.leaderboardTbody) {
      soloEl.leaderboardTbody.innerHTML = leaderboard.map(p => {
        const isSelf = soloState.player && p.id === soloState.player.id;
        const mins = Math.floor((p.totalTime || 0) / 60);
        const secs = (p.totalTime || 0) % 60;
        const timeStr = `${mins}m ${secs}s`;
        const rankMedal = p.rank === 1 ? px('medal-1', 18) : (p.rank === 2 ? px('medal-2', 18) : (p.rank === 3 ? px('medal-3', 18) : `#${p.rank}`));

        return `
          <tr class="${isSelf ? 'is-user-row' : ''}">
            <td style="font-weight:700; font-size:1.1rem;">${rankMedal}</td>
            <td>
              <div style="display:flex; align-items:center; gap:8px;">
                <span style="display:inline-block; width:12px; height:12px; border-radius:50%; background-color:${p.avatarColor || '#4f46e5'}"></span>
                <strong>${escapeHtml(p.nickname)}</strong>
                ${isSelf ? '<span style="color:var(--primary); font-size:0.75rem;">(Bạn)</span>' : ''}
              </div>
            </td>
            <td><strong>${p.correctCount}</strong> / ${p.totalQuestions}</td>
            <td><strong style="color:var(--primary); font-size:1.05rem;">${p.score}</strong> / 10</td>
            <td>${timeStr}</td>
            <td><span style="color:var(--success-solid); font-weight:600; display:inline-flex; align-items:center; gap:4px;">${px('check', 13)} Hoàn thành</span></td>
          </tr>
        `;
      }).join('');
    }

    // Question Review
    if (soloEl.reviewQuestionsList) {
      soloEl.reviewQuestionsList.innerHTML = soloState.questions.map((q, idx) => {
        const userAns = soloState.answers[q.id];
        const isCorrect = userAns === q.correct;

        const optionsHtml = (q.options || []).map(opt => {
          let optClass = '';
          let badgeIcon = opt.key;

          if (opt.key === q.correct) {
            optClass = 'correct';
            badgeIcon = px('check', 13);
          } else if (opt.key === userAns && !isCorrect) {
            optClass = 'incorrect';
            badgeIcon = px('cross', 13);
          }

          return `
            <div class="option-btn ${optClass}" style="cursor:default">
              <span class="opt-badge">${badgeIcon}</span>
              <span class="opt-text">${formatContent(opt.text)}</span>
            </div>
          `;
        }).join('');

        return `
          <div class="practice-item ${userAns ? (isCorrect ? 'answered-correct' : 'answered-incorrect') : ''}" style="margin-bottom:18px;">
            <div class="question-meta">
              <span class="topic-tag">${escapeHtml(q.topicName)}</span>
              <div style="display:flex; gap:6px; align-items:center; flex-wrap:wrap;">
                ${getDifficultyBadgeHtml(q.difficulty)}
                ${userAns ? (isCorrect ? `<span style="color:var(--success-solid); font-weight:700; display:inline-flex; align-items:center; gap:4px;">${px('check', 13)} Bạn làm đúng</span>` : `<span style="color:var(--error-solid); font-weight:700; display:inline-flex; align-items:center; gap:4px;">${px('cross', 13)} Bạn chọn ${userAns} (Đáp án: ${q.correct})</span>`) : `<span style="color:var(--warn-solid); font-weight:700">Chưa làm</span>`}
                <span class="orig-tag highlight">${escapeHtml(q.examName)} • C${q.originalId}</span>
              </div>
            </div>
            <div class="question-title">
              <strong>Câu ${idx + 1}.</strong> ${formatContent(q.question)}
            </div>
            <div class="options-list">
              ${optionsHtml}
            </div>
            <div class="explanation-card">
              <div class="explanation-header">
                Lời giải chi tiết • Đáp án: ${q.correct}
              </div>
              <div class="explanation-content">${formatContent(q.explanation)}</div>
            </div>
          </div>
        `;
      }).join('');

      renderMath(soloEl.reviewQuestionsList);
    }
  }

  // Toast Notification
  function showToast(msg, iconName = null) {
    const existing = document.getElementById('soloToast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'soloToast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background-color: var(--text-main);
      color: var(--bg-main);
      padding: 12px 20px;
      border-radius: var(--radius-md);
      font-size: 0.9rem;
      font-weight: 600;
      box-shadow: var(--shadow-md);
      z-index: 9999;
      transition: opacity 0.3s ease, transform 0.3s ease;
      animation: toastIn 0.3s ease;
    `;
    toast.innerHTML = iconName
      ? `${px(iconName, 14)} <span>${escapeHtml(msg)}</span>`
      : escapeHtml(msg);
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // --- Event Listeners Setup ---
  function setupEventListeners() {
    // Nickname input persistence
    if (soloEl.nicknameInput) {
      if (soloState.profile.nickname) soloEl.nicknameInput.value = soloState.profile.nickname;
      soloEl.nicknameInput.addEventListener('blur', getNickname);
    }

    // Create Room
    if (soloEl.btnCreateRoom) {
      soloEl.btnCreateRoom.addEventListener('click', () => {
        createRoom();
      });
    }

    // Join Room
    if (soloEl.btnJoinRoom) {
      soloEl.btnJoinRoom.addEventListener('click', () => {
        joinRoom();
      });
    }

    if (soloEl.joinCodeInput) {
      soloEl.joinCodeInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') joinRoom();
      });
    }

    // Copy Code / Link
    if (soloEl.btnCopyRoomCode) {
      soloEl.btnCopyRoomCode.addEventListener('click', () => {
        if (soloState.room && soloState.room.code) {
          navigator.clipboard.writeText(soloState.room.code);
          showToast(`Đã sao chép mã phòng: ${soloState.room.code}`, 'clipboard');
        }
      });
    }

    if (soloEl.btnCopyRoomLink) {
      soloEl.btnCopyRoomLink.addEventListener('click', () => {
        if (soloState.room && soloState.room.code) {
          const url = `${window.location.origin}?room=${soloState.room.code}`;
          navigator.clipboard.writeText(url);
          showToast(`Đã sao chép link mời: ${url}`, 'link');
        }
      });
    }

    // Leave Waiting Room
    if (soloEl.btnLeaveWaitingRoom) {
      soloEl.btnLeaveWaitingRoom.addEventListener('click', () => {
        if (confirm('Bạn có chắc chắn muốn rời phòng không?')) {
          sendWsMessage({ type: 'LEAVE_ROOM' });
          sessionStorage.removeItem('solo_roomId');
          sessionStorage.removeItem('solo_playerId');
          sessionStorage.removeItem('solo_roomCode');
          soloState.room = null;
          soloState.player = null;
          soloState.players = [];
          switchSoloScreen('hub');
        }
      });
    }

    // Start Game (Host only)
    if (soloEl.btnStartSoloGame) {
      soloEl.btnStartSoloGame.addEventListener('click', () => {
        sendWsMessage({ type: 'START_GAME' });
      });
    }

    // Battle Submit
    if (soloEl.btnSoloSubmit) {
      soloEl.btnSoloSubmit.addEventListener('click', () => {
        submitSoloExam(false);
      });
    }

    // Flag Question
    if (soloEl.btnSoloFlag) {
      soloEl.btnSoloFlag.addEventListener('click', () => {
        const q = soloState.questions[soloState.currentIndex];
        if (!q) return;
        if (soloState.flags.has(q.id)) {
          soloState.flags.delete(q.id);
        } else {
          soloState.flags.add(q.id);
        }
        renderSoloNav();
        renderSoloQuestion();
      });
    }

    // Navigation Buttons
    if (soloEl.btnSoloPrev) {
      soloEl.btnSoloPrev.addEventListener('click', () => {
        if (soloState.currentIndex > 0) {
          soloState.currentIndex--;
          renderSoloNav();
          renderSoloQuestion();
        }
      });
    }

    if (soloEl.btnSoloNext) {
      soloEl.btnSoloNext.addEventListener('click', () => {
        if (soloState.currentIndex < soloState.questions.length - 1) {
          soloState.currentIndex++;
          renderSoloNav();
          renderSoloQuestion();
        }
      });
    }

    // Rematch
    if (soloEl.btnSoloRematch) {
      soloEl.btnSoloRematch.addEventListener('click', () => {
        const isHost = soloState.player && (soloState.player.id === soloState.room.host_player_id || soloState.player.is_host);
        if (isHost) {
          sendWsMessage({ type: 'REMATCH_REQUEST' });
        } else {
          alert('Chỉ chủ phòng mới có thể bắt đầu trận đấu mới. Vui lòng nhắn chủ phòng bấm nút!');
        }
      });
    }

    // Back to Hub
    if (soloEl.btnSoloBackHub) {
      soloEl.btnSoloBackHub.addEventListener('click', () => {
        sessionStorage.removeItem('solo_roomId');
        sessionStorage.removeItem('solo_playerId');
        sessionStorage.removeItem('solo_roomCode');
        soloState.room = null;
        soloState.player = null;
        soloState.players = [];
        switchSoloScreen('hub');
      });
    }

    // Keyboard Shortcuts in Battle
    window.addEventListener('keydown', (e) => {
      if (soloState.currentScreen !== 'battle') return;
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D'].includes(key)) {
        selectSoloOption(key);
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        const map = { '1': 'A', '2': 'B', '3': 'C', '4': 'D' };
        selectSoloOption(map[e.key]);
      } else if (e.key === 'ArrowLeft') {
        if (soloState.currentIndex > 0) {
          soloState.currentIndex--;
          renderSoloNav();
          renderSoloQuestion();
        }
      } else if (e.key === 'ArrowRight') {
        if (soloState.currentIndex < soloState.questions.length - 1) {
          soloState.currentIndex++;
          renderSoloNav();
          renderSoloQuestion();
        }
      } else if (key === 'F') {
        const q = soloState.questions[soloState.currentIndex];
        if (q) {
          if (soloState.flags.has(q.id)) soloState.flags.delete(q.id);
          else soloState.flags.add(q.id);
          renderSoloNav();
          renderSoloQuestion();
        }
      }
    });

    // Check URL parameters for direct room joining
    const urlParams = new URLSearchParams(window.location.search);
    const roomParam = urlParams.get('room') || urlParams.get('solo');
    if (roomParam) {
      const code = roomParam.trim().toUpperCase();
      if (soloEl.joinCodeInput) soloEl.joinCodeInput.value = code;
      if (window.switchAppTab) window.switchAppTab('solo');
      setTimeout(() => {
        joinRoom(code);
      }, 350);
    }
  }

  // --- Expose for App Controller ---
  window.SOLO_APP = {
    onTabActivated() {
      connectWebSocket();
      if (soloState.currentScreen === 'hub') {
        fetchActiveRooms();
        fetchMatchHistory();
      }
    }
  };

  // --- Init on DOM Load ---
  document.addEventListener('DOMContentLoaded', () => {
    initProfileColorPicker();
    setupEventListeners();
    connectWebSocket();
    fetchActiveRooms();
    fetchMatchHistory();
  });
})();
