/**
 * APP LOGIC - ĐẠI SỐ TUYẾN TÍNH & TOÁN RỜI RẠC
 * Pure Frontend - GitHub Pages Ready
 * Features:
 * 1. Mock Exam (35 mins / 20 questions) with Start Screen, Timer & Submission
 * 2. Post-exam Review with score & step-by-step KaTeX solutions
 * 3. Practice / General Review (200 questions) with instant grading & progress
 * 4. Keyboard shortcuts & Dark Mode
 */

(function () {
  'use strict';

  // --- KaTeX Helper & Fallback ---
  function renderMath(container) {
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(container || document.body, {
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
        console.warn("KaTeX render error:", err);
      }
    } else {
      setTimeout(() => renderMath(container), 250);
    }
  }

  // --- Format Markdown Text Helper ---
  function formatContent(text) {
    if (!text) return '';
    return text
      .replace(/^(\s*)\*\s+/gm, '$1• ')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }

  // --- Data Provider Helper ---
  function getQuestionsBank() {
    if (typeof window !== 'undefined') {
      if (Array.isArray(window.QUESTIONS_BANK) && window.QUESTIONS_BANK.length > 0) return window.QUESTIONS_BANK;
      if (Array.isArray(window.QUESTIONS_DATA) && window.QUESTIONS_DATA.length > 0) return window.QUESTIONS_DATA;
    }
    return [];
  }

  // --- App State ---
  const state = {
    allQuestions: getQuestionsBank(),
    currentTab: 'quiz', // 'quiz' | 'review' | 'practice'
    
    // Quiz State
    quiz: {
      started: false,
      questions: [],
      currentIndex: 0,
      answers: {}, // questionId -> 'A' | 'B' | 'C' | 'D'
      flags: new Set(), // questionIds
      durationSeconds: 35 * 60, // 35 minutes
      timeLeft: 35 * 60,
      timerInterval: null,
      submitted: false,
      score: 0,
      timeSpent: 0
    },

    // Review Filter State
    reviewFilter: 'all', // 'all' | 'wrong' | 'right' | 'unanswered'

    // Practice State
    practice: {
      answers: JSON.parse(localStorage.getItem('practice_answers') || '{}'),
      bookmarks: new Set(JSON.parse(localStorage.getItem('practice_bookmarks') || '[]')),
      topicFilter: 'all',
      originFilter: 'all',
      statusFilter: 'all',
      searchQuery: '',
      viewMode: 'focus', // 'focus' (1-by-1) | 'list' (all filtered)
      currentIndex: 0
    },

    theme: localStorage.getItem('theme_mode') || 
           (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  };

  // --- DOM Elements ---
  const el = {
    themeToggle: document.getElementById('themeToggle'),
    tabQuiz: document.getElementById('tabQuiz'),
    tabPractice: document.getElementById('tabPractice'),
    quizView: document.getElementById('quizView'),
    reviewView: document.getElementById('reviewView'),
    practiceView: document.getElementById('practiceView'),
    modalContainer: document.getElementById('modalContainer'),

    // Quiz Start Screen
    quizStartScreen: document.getElementById('quizStartScreen'),
    btnStartExam: document.getElementById('btnStartExam'),

    // Quiz Active Elements
    quizActiveScreen: document.getElementById('quizActiveScreen'),
    quizTimer: document.getElementById('quizTimer'),
    quizProgressText: document.getElementById('quizProgressText'),
    quizNavGrid: document.getElementById('quizNavGrid'),
    quizQuestionContainer: document.getElementById('quizQuestionContainer'),
    btnQuizPrev: document.getElementById('btnQuizPrev'),
    btnQuizNext: document.getElementById('btnQuizNext'),
    btnQuizSubmit: document.getElementById('btnQuizSubmit'),
    btnQuizFlag: document.getElementById('btnQuizFlag'),
    btnQuizCancel: document.getElementById('btnQuizCancel'),

    // Review Elements
    reviewScoreValue: document.getElementById('reviewScoreValue'),
    reviewScoreBadge: document.getElementById('reviewScoreBadge'),
    reviewScoreSub: document.getElementById('reviewScoreSub'),
    btnRetryTest: document.getElementById('btnRetryTest'),
    btnNewTest: document.getElementById('btnNewTest'),
    reviewQuestionsList: document.getElementById('reviewQuestionsList'),
    reviewFilterChips: document.querySelectorAll('.review-filter-chip'),

    // Practice Elements
    practiceStatsText: document.getElementById('practiceStatsText'),
    practiceProgressFill: document.getElementById('practiceProgressFill'),
    practiceTopicSelect: document.getElementById('practiceTopicSelect'),
    practiceOriginSelect: document.getElementById('practiceOriginSelect'),
    practiceStatusSelect: document.getElementById('practiceStatusSelect'),
    practiceSearchInput: document.getElementById('practiceSearchInput'),
    practiceContentArea: document.getElementById('practiceContentArea'),
    btnResetPractice: document.getElementById('btnResetPractice'),
    btnToggleViewMode: document.getElementById('btnToggleViewMode')
  };

  // --- Theme Controller ---
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme_mode', theme);
    if (el.themeToggle) {
      el.themeToggle.innerHTML = theme === 'dark' 
        ? `<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`
        : `<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>`;
    }
  }

  // --- Tab Navigation ---
  function switchTab(tab) {
    state.currentTab = tab;
    el.tabQuiz.classList.toggle('active', tab === 'quiz' || tab === 'review');
    el.tabPractice.classList.toggle('active', tab === 'practice');

    el.quizView.style.display = tab === 'quiz' ? 'block' : 'none';
    el.reviewView.style.display = tab === 'review' ? 'block' : 'none';
    el.practiceView.style.display = tab === 'practice' ? 'block' : 'none';

    if (tab === 'quiz') {
      if (state.quiz.started && !state.quiz.submitted) {
        el.quizStartScreen.style.display = 'none';
        el.quizActiveScreen.style.display = 'block';
        renderQuizQuestion();
      } else {
        el.quizStartScreen.style.display = 'block';
        el.quizActiveScreen.style.display = 'none';
      }
    } else if (tab === 'review') {
      renderReviewView();
    } else if (tab === 'practice') {
      renderPracticeView();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ===================================================================
  // QUIZ LOGIC (Chỉ thi khi bấm Bắt đầu)
  // ===================================================================

  function startExam() {
    clearInterval(state.quiz.timerInterval);

    if (!state.allQuestions || state.allQuestions.length === 0) {
      state.allQuestions = getQuestionsBank();
    }
    if (!state.allQuestions || state.allQuestions.length === 0) {
      alert("Đang tải dữ liệu câu hỏi hoặc chưa tìm thấy ngân hàng đề. Vui lòng làm mới trang (F5).");
      return;
    }

    // Get source preference
    const sourceRadio = document.querySelector('input[name="quizSourceOption"]:checked');
    const source = sourceRadio ? sourceRadio.value : 'all';

    let pool = [];
    if (source === 'original') {
      pool = state.allQuestions.filter(q => q.isOriginal);
      shuffleArray(pool);
      state.quiz.questions = pool.slice(0, 20);
    } else {
      // Pick 20 questions balanced across 6 topics
      const questionsByTopic = {};
      for (let t = 1; t <= 6; t++) {
        questionsByTopic[t] = state.allQuestions.filter(q => q.topicId === t);
      }

      const selected = [];
      const counts = [4, 4, 3, 3, 3, 3]; // sum = 20
      for (let t = 1; t <= 6; t++) {
        const topicQs = [...questionsByTopic[t]];
        shuffleArray(topicQs);
        selected.push(...topicQs.slice(0, counts[t - 1]));
      }
      shuffleArray(selected);
      state.quiz.questions = selected;
    }

    if (!state.quiz.questions || state.quiz.questions.length === 0) {
      alert("Không thể khởi tạo danh sách câu hỏi thi. Vui lòng tải lại trang.");
      return;
    }

    state.quiz.started = true;
    state.quiz.submitted = false;
    state.quiz.currentIndex = 0;
    state.quiz.answers = {};
    state.quiz.flags = new Set();
    state.quiz.durationSeconds = 35 * 60;
    state.quiz.timeLeft = 35 * 60;
    state.quiz.score = 0;
    state.quiz.timeSpent = 0;

    // Switch screen from Start Screen to Active Quiz Screen
    el.quizStartScreen.style.display = 'none';
    el.quizActiveScreen.style.display = 'block';

    startQuizTimer();
    renderQuizNav();
    renderQuizQuestion();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function startQuizTimer() {
    clearInterval(state.quiz.timerInterval);
    updateTimerDisplay();

    state.quiz.timerInterval = setInterval(() => {
      state.quiz.timeLeft--;
      updateTimerDisplay();

      if (state.quiz.timeLeft <= 0) {
        clearInterval(state.quiz.timerInterval);
        submitQuiz(true); // auto submit
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const mins = Math.floor(state.quiz.timeLeft / 60);
    const secs = state.quiz.timeLeft % 60;
    const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    el.quizTimer.textContent = timeStr;

    if (state.quiz.timeLeft < 300) { // under 5 mins
      el.quizTimer.parentElement.classList.add('warning');
    } else {
      el.quizTimer.parentElement.classList.remove('warning');
    }
  }

  function renderQuizNav() {
    el.quizNavGrid.innerHTML = '';
    state.quiz.questions.forEach((q, idx) => {
      const dot = document.createElement('button');
      dot.className = 'nav-dot';
      dot.textContent = idx + 1;

      if (idx === state.quiz.currentIndex) dot.classList.add('current');
      if (state.quiz.answers[q.id]) dot.classList.add('answered');
      if (state.quiz.flags.has(q.id)) dot.classList.add('flagged');

      dot.addEventListener('click', () => {
        state.quiz.currentIndex = idx;
        renderQuizNav();
        renderQuizQuestion();
      });

      el.quizNavGrid.appendChild(dot);
    });

    const answeredCount = Object.keys(state.quiz.answers).length;
    el.quizProgressText.textContent = `Đã làm ${answeredCount}/20 câu`;
  }

  function renderQuizQuestion() {
    const q = state.quiz.questions[state.quiz.currentIndex];
    if (!q) {
      el.quizQuestionContainer.innerHTML = `
        <div style="padding: 40px 20px; text-align: center; color: var(--text-muted);">
          <p style="font-size: 1.05rem; margin-bottom: 12px;">Đang tải nội dung câu hỏi hoặc chưa tìm thấy dữ liệu.</p>
          <button class="btn btn-primary" onclick="location.reload()">Tải lại trang (F5)</button>
        </div>
      `;
      return;
    }

    const isFlagged = state.quiz.flags.has(q.id);
    el.btnQuizFlag.classList.toggle('active', isFlagged);
    el.btnQuizFlag.innerHTML = isFlagged 
      ? `★ Đã đánh dấu <span class="kbd-hint">F</span>`
      : `☆ Đánh dấu xem lại <span class="kbd-hint">F</span>`;

    const selectedKey = state.quiz.answers[q.id];

    let optionsHtml = q.options.map(opt => {
      const isSelected = selectedKey === opt.key;
      return `
        <button class="option-btn ${isSelected ? 'selected' : ''}" data-key="${opt.key}">
          <span class="opt-badge">${opt.key}</span>
          <span class="opt-text">${formatContent(opt.text)}</span>
        </button>
      `;
    }).join('');

    el.quizQuestionContainer.innerHTML = `
      <div class="question-meta">
        <span class="topic-tag">${escapeHtml(q.topicName)}</span>
        <div>
          ${q.isOriginal ? `<span class="orig-tag highlight">Câu ${q.originalId} • Đề gốc</span>` : `<span class="orig-tag">Ngân hàng đề</span>`}
        </div>
      </div>
      <div class="question-title">
        <strong>Câu ${state.quiz.currentIndex + 1}.</strong> ${formatContent(q.question)}
      </div>
      <div class="options-list">
        ${optionsHtml}
      </div>
    `;

    // Bind option click
    el.quizQuestionContainer.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.key;
        selectQuizOption(key);
      });
    });

    // Prev / Next button states
    el.btnQuizPrev.disabled = state.quiz.currentIndex === 0;
    el.btnQuizNext.disabled = state.quiz.currentIndex === state.quiz.questions.length - 1;

    renderQuizNav();
    renderMath(el.quizQuestionContainer);
  }

  function selectQuizOption(key) {
    const q = state.quiz.questions[state.quiz.currentIndex];
    if (!q) return;

    if (state.quiz.answers[q.id] === key) {
      delete state.quiz.answers[q.id]; // toggle off
    } else {
      state.quiz.answers[q.id] = key;
    }

    renderQuizNav();
    renderQuizQuestion();
  }

  function toggleFlagCurrentQuestion() {
    const q = state.quiz.questions[state.quiz.currentIndex];
    if (!q) return;

    if (state.quiz.flags.has(q.id)) {
      state.quiz.flags.delete(q.id);
    } else {
      state.quiz.flags.add(q.id);
    }
    renderQuizNav();
    renderQuizQuestion();
  }

  function promptCancelQuiz() {
    showModal({
      title: 'Hủy lượt thi này?',
      message: 'Bạn có chắc chắn muốn hủy lượt thi hiện tại? Thời gian làm bài và kết quả chưa nộp sẽ không được lưu.',
      confirmText: 'Xác nhận hủy',
      cancelText: 'Làm tiếp',
      onConfirm: () => {
        clearInterval(state.quiz.timerInterval);
        state.quiz.started = false;
        state.quiz.submitted = false;
        el.quizActiveScreen.style.display = 'none';
        el.quizStartScreen.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showToast('Đã hủy lượt thi.');
      }
    });
  }

  function promptSubmitQuiz() {
    const answered = Object.keys(state.quiz.answers).length;
    const unanswered = 20 - answered;
    const flagged = state.quiz.flags.size;

    showModal({
      title: 'Xác nhận nộp bài thi',
      message: `Bạn đã hoàn thành <strong>${answered}/20</strong> câu.${unanswered > 0 ? ` Còn <strong style="color:var(--error-solid)">${unanswered} câu chưa trả lời</strong>.` : ''} ${flagged > 0 ? ` Có <strong>${flagged} câu đã đánh dấu xem lại</strong>.` : ''}<br><br>Bạn có chắc chắn muốn nộp bài để xem kết quả và lời giải chi tiết?`,
      confirmText: 'Nộp bài ngay',
      cancelText: 'Làm tiếp',
      onConfirm: () => submitQuiz(false)
    });
  }

  function submitQuiz(isAuto) {
    clearInterval(state.quiz.timerInterval);
    state.quiz.submitted = true;
    state.quiz.started = false;
    state.quiz.timeSpent = (35 * 60) - Math.max(0, state.quiz.timeLeft);

    // Calculate score
    let correctCount = 0;
    state.quiz.questions.forEach(q => {
      if (state.quiz.answers[q.id] === q.correct) {
        correctCount++;
      }
    });
    state.quiz.score = correctCount;

    if (isAuto) {
      showToast('Đã hết thời gian 35 phút! Hệ thống đã tự động thu bài.');
    }

    switchTab('review');
  }

  // ===================================================================
  // REVIEW MODE (Xem lại bài thi & Lời giải chi tiết)
  // ===================================================================

  function renderReviewView() {
    const score = state.quiz.score;
    const total = state.quiz.questions.length || 20;
    const point = (score / total * 10).toFixed(1);
    const percent = Math.round((score / total) * 100);

    const mins = Math.floor(state.quiz.timeSpent / 60);
    const secs = state.quiz.timeSpent % 60;
    const timeSpentStr = `${mins} phút ${secs} giây`;

    el.reviewScoreValue.textContent = `${score}/${total}`;
    
    let badgeClass = 'high';
    let badgeText = 'Xuất sắc 🎉';
    if (percent < 50) {
      badgeClass = 'low';
      badgeText = 'Cần ôn tập thêm 📚';
    } else if (percent < 80) {
      badgeClass = 'mid';
      badgeText = 'Khá tốt 👏';
    }

    el.reviewScoreBadge.className = `score-badge ${badgeClass}`;
    el.reviewScoreBadge.textContent = badgeText;
    el.reviewScoreSub.innerHTML = `Điểm: <strong>${point}/10</strong> (${percent}%) • Thời gian làm: <strong>${timeSpentStr}</strong>`;

    renderReviewQuestions();
  }

  function renderReviewQuestions() {
    el.reviewQuestionsList.innerHTML = '';

    const filter = state.reviewFilter;
    const filteredQuestions = state.quiz.questions.filter((q) => {
      const userAns = state.quiz.answers[q.id];
      const isRight = userAns === q.correct;
      const isUnanswered = !userAns;

      if (filter === 'right') return isRight;
      if (filter === 'wrong') return !isRight && !isUnanswered;
      if (filter === 'unanswered') return isUnanswered;
      return true; // 'all'
    });

    if (filteredQuestions.length === 0) {
      el.reviewQuestionsList.innerHTML = `<div style="text-align:center; padding: 40px; color:var(--text-muted)">Không có câu hỏi nào thỏa mãn bộ lọc này.</div>`;
      return;
    }

    filteredQuestions.forEach((q) => {
      const quizIndex = state.quiz.questions.findIndex(item => item.id === q.id);
      const userAns = state.quiz.answers[q.id];
      const isCorrect = userAns === q.correct;

      const card = document.createElement('div');
      card.className = `practice-item ${userAns ? (isCorrect ? 'answered-correct' : 'answered-incorrect') : ''}`;

      const optionsHtml = q.options.map(opt => {
        let optClass = '';
        let badgeIcon = opt.key;

        if (opt.key === q.correct) {
          optClass = 'correct';
          badgeIcon = '✓';
        } else if (opt.key === userAns && !isCorrect) {
          optClass = 'incorrect';
          badgeIcon = '✗';
        }

        return `
          <div class="option-btn ${optClass}" style="cursor:default">
            <span class="opt-badge">${badgeIcon}</span>
            <span class="opt-text">${formatContent(opt.text)}</span>
          </div>
        `;
      }).join('');

      card.innerHTML = `
        <div class="question-meta">
          <span class="topic-tag">${escapeHtml(q.topicName)}</span>
          <div style="display:flex; gap:6px; align-items:center;">
            ${userAns ? (isCorrect ? `<span style="color:var(--success-solid); font-weight:700">✓ Làm đúng</span>` : `<span style="color:var(--error-solid); font-weight:700">✗ Làm sai (Bạn chọn ${userAns})</span>`) : `<span style="color:var(--warn-solid); font-weight:700">Chưa làm</span>`}
            ${q.isOriginal ? `<span class="orig-tag highlight">Đề gốc C${q.originalId}</span>` : `<span class="orig-tag">Ngân hàng</span>`}
          </div>
        </div>
        <div class="question-title">
          <strong>Câu ${quizIndex + 1}.</strong> ${formatContent(q.question)}
        </div>
        <div class="options-list">
          ${optionsHtml}
        </div>
        <div class="explanation-card">
          <div class="explanation-header">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Lời giải chi tiết • Đáp án: ${q.correct}
          </div>
          <div class="explanation-content">${formatContent(q.explanation)}</div>
        </div>
      `;

      el.reviewQuestionsList.appendChild(card);
    });

    renderMath(el.reviewQuestionsList);
  }

  // ===================================================================
  // PRACTICE MODE (Ôn tổng quát 200 câu - Làm câu nào chấm câu đó)
  // ===================================================================

  function getFilteredPracticeQuestions() {
    const { topicFilter, originFilter, statusFilter, searchQuery } = state.practice;

    return state.allQuestions.filter(q => {
      // Topic
      if (topicFilter !== 'all' && q.topicId !== parseInt(topicFilter, 10)) return false;

      // Origin
      if (originFilter === 'original' && !q.isOriginal) return false;
      if (originFilter === 'extra' && q.isOriginal) return false;

      // Status
      const userAns = state.practice.answers[q.id];
      const isBookmarked = state.practice.bookmarks.has(q.id);

      if (statusFilter === 'unanswered' && userAns) return false;
      if (statusFilter === 'correct' && userAns !== q.correct) return false;
      if (statusFilter === 'incorrect' && (!userAns || userAns === q.correct)) return false;
      if (statusFilter === 'bookmarked' && !isBookmarked) return false;

      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const inQ = q.question.toLowerCase().includes(query);
        const inExp = q.explanation.toLowerCase().includes(query);
        const inOpts = q.options.some(o => o.text.toLowerCase().includes(query));
        if (!inQ && !inExp && !inOpts) return false;
      }

      return true;
    });
  }

  function renderPracticeView() {
    if (!state.allQuestions || state.allQuestions.length === 0) {
      state.allQuestions = getQuestionsBank();
    }
    updatePracticeStats();

    const filtered = getFilteredPracticeQuestions();

    if (state.practice.viewMode === 'focus') {
      renderPracticeFocusMode(filtered);
    } else {
      renderPracticeListMode(filtered);
    }
  }

  function updatePracticeStats() {
    const total = state.allQuestions.length;
    const answeredIds = Object.keys(state.practice.answers);
    const answeredCount = answeredIds.length;

    let correctCount = 0;
    answeredIds.forEach(id => {
      const q = state.allQuestions.find(item => item.id === parseInt(id, 10));
      if (q && state.practice.answers[id] === q.correct) {
        correctCount++;
      }
    });
    const wrongCount = answeredCount - correctCount;
    const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
    const percentOverall = Math.round((answeredCount / total) * 100);

    el.practiceStatsText.innerHTML = `
      <div class="stats-item">Tiến độ: <strong>${answeredCount}/${total}</strong> (${percentOverall}%)</div>
      <div class="stats-item">Đúng: <strong style="color:var(--success-solid)">${correctCount}</strong></div>
      <div class="stats-item">Sai: <strong style="color:var(--error-solid)">${wrongCount}</strong></div>
      <div class="stats-item">Độ chính xác: <strong>${accuracy}%</strong></div>
      <div class="stats-item">Đã lưu: <strong>${state.practice.bookmarks.size} ★</strong></div>
    `;

    el.practiceProgressFill.style.width = `${percentOverall}%`;
  }

  function renderPracticeFocusMode(filtered) {
    if (filtered.length === 0) {
      el.practiceContentArea.innerHTML = `
        <div style="text-align:center; padding: 60px 20px; color:var(--text-muted)">
          <p style="font-size: 1.1rem; margin-bottom: 8px;">Không tìm thấy câu hỏi nào phù hợp với bộ lọc hiện tại.</p>
          <button class="btn" id="btnResetFilters">Xóa bộ lọc để xem tất cả</button>
        </div>
      `;
      const btn = document.getElementById('btnResetFilters');
      if (btn) btn.addEventListener('click', resetPracticeFilters);
      return;
    }

    if (state.practice.currentIndex >= filtered.length) {
      state.practice.currentIndex = 0;
    }

    const q = filtered[state.practice.currentIndex];
    const userAns = state.practice.answers[q.id];
    const isAnswered = !!userAns;
    const isCorrect = userAns === q.correct;
    const isBookmarked = state.practice.bookmarks.has(q.id);

    // Build options
    const optionsHtml = q.options.map(opt => {
      let optClass = '';
      let badgeIcon = opt.key;

      if (isAnswered) {
        if (opt.key === q.correct) {
          optClass = 'correct';
          badgeIcon = '✓';
        } else if (opt.key === userAns) {
          optClass = 'incorrect';
          badgeIcon = '✗';
        }
      }

      return `
        <button class="option-btn ${optClass}" data-key="${opt.key}">
          <span class="opt-badge">${badgeIcon}</span>
          <span class="opt-text">${formatContent(opt.text)}</span>
        </button>
      `;
    }).join('');

    // Jump select options
    let jumpOptions = filtered.map((item, idx) => {
      const isAns = !!state.practice.answers[item.id];
      const isRight = state.practice.answers[item.id] === item.correct;
      const statusSymbol = isAns ? (isRight ? '✓' : '✗') : '•';
      return `<option value="${idx}" ${idx === state.practice.currentIndex ? 'selected' : ''}>Câu ${item.id} (${statusSymbol}) - ${item.topicName.slice(0, 22)}...</option>`;
    }).join('');

    el.practiceContentArea.innerHTML = `
      <div class="question-card" style="margin-bottom:16px;">
        <div class="question-meta">
          <span class="topic-tag">${escapeHtml(q.topicName)}</span>
          <div style="display:flex; gap:8px; align-items:center;">
            ${q.isOriginal ? `<span class="orig-tag highlight">Đề gốc C${q.originalId}</span>` : `<span class="orig-tag">Ngân hàng</span>`}
            <button class="btn-flag ${isBookmarked ? 'active' : ''}" id="btnPracticeBookmark">
              ${isBookmarked ? '★ Đã lưu' : '☆ Lưu câu này'}
            </button>
          </div>
        </div>

        <div class="question-title">
          <strong>Câu ${q.id} / 200.</strong> ${formatContent(q.question)}
        </div>

        <div class="options-list">
          ${optionsHtml}
        </div>

        ${isAnswered ? `
          <div class="explanation-card">
            <div class="explanation-header" style="justify-content:space-between">
              <span style="display:flex; align-items:center; gap:6px;">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Lời giải chi tiết • Đáp án đúng: <strong>${q.correct}</strong>
              </span>
              <button class="btn" id="btnRetryQuestion" style="padding:4px 10px; font-size:0.75rem;">Làm lại câu này</button>
            </div>
            <div class="explanation-content">${formatContent(q.explanation)}</div>
          </div>
        ` : `
          <div style="margin-top:16px; font-size:0.82rem; color:var(--text-muted); display:flex; align-items:center; gap:6px;">
            <span>💡 Chọn một phương án (hoặc bấm phím 1,2,3,4 / A,B,C,D) để xem ngay đáp án & lời giải.</span>
          </div>
        `}
      </div>

      <!-- Practice Navigation Controls -->
      <div class="quiz-controls" style="background-color:var(--bg-card); padding:12px 16px; border:1px solid var(--border); border-radius:var(--radius-md);">
        <button class="btn" id="btnPracticePrev" ${state.practice.currentIndex === 0 ? 'disabled' : ''}>
          ← Câu trước
        </button>

        <div style="display:flex; align-items:center; gap:8px;">
          <select id="practiceJumpSelect" class="select-filter" style="font-weight:600; max-width:240px;">
            ${jumpOptions}
          </select>
          <span style="font-size:0.82rem; color:var(--text-muted)">(${state.practice.currentIndex + 1}/${filtered.length})</span>
        </div>

        <button class="btn" id="btnPracticeNext" ${state.practice.currentIndex === filtered.length - 1 ? 'disabled' : ''}>
          Câu sau →
        </button>
      </div>
    `;

    // Bind Option Clicks
    el.practiceContentArea.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.key;
        handlePracticeAnswer(q.id, key);
      });
    });

    // Bookmark button
    const btnBookmark = document.getElementById('btnPracticeBookmark');
    if (btnBookmark) {
      btnBookmark.addEventListener('click', () => {
        togglePracticeBookmark(q.id);
      });
    }

    // Retry question
    const btnRetry = document.getElementById('btnRetryQuestion');
    if (btnRetry) {
      btnRetry.addEventListener('click', () => {
        delete state.practice.answers[q.id];
        savePracticeState();
        renderPracticeView();
      });
    }

    // Prev / Next / Jump
    const btnPrev = document.getElementById('btnPracticePrev');
    const btnNext = document.getElementById('btnPracticeNext');
    const jumpSelect = document.getElementById('practiceJumpSelect');

    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        if (state.practice.currentIndex > 0) {
          state.practice.currentIndex--;
          renderPracticeView();
        }
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        if (state.practice.currentIndex < filtered.length - 1) {
          state.practice.currentIndex++;
          renderPracticeView();
        }
      });
    }

    if (jumpSelect) {
      jumpSelect.addEventListener('change', (e) => {
        state.practice.currentIndex = parseInt(e.target.value, 10);
        renderPracticeView();
      });
    }

    renderMath(el.practiceContentArea);
  }

  function renderPracticeListMode(filtered) {
    if (filtered.length === 0) {
      el.practiceContentArea.innerHTML = `
        <div style="text-align:center; padding: 60px 20px; color:var(--text-muted)">
          <p style="font-size: 1.1rem; margin-bottom: 8px;">Không tìm thấy câu hỏi nào phù hợp với bộ lọc hiện tại.</p>
        </div>
      `;
      return;
    }

    const listHtml = filtered.map((q) => {
      const userAns = state.practice.answers[q.id];
      const isAnswered = !!userAns;
      const isCorrect = userAns === q.correct;
      const isBookmarked = state.practice.bookmarks.has(q.id);

      const optionsHtml = q.options.map(opt => {
        let optClass = '';
        let badgeIcon = opt.key;

        if (isAnswered) {
          if (opt.key === q.correct) {
            optClass = 'correct';
            badgeIcon = '✓';
          } else if (opt.key === userAns) {
            optClass = 'incorrect';
            badgeIcon = '✗';
          }
        }

        return `
          <button class="option-btn ${optClass}" data-qid="${q.id}" data-key="${opt.key}">
            <span class="opt-badge">${badgeIcon}</span>
            <span class="opt-text">${formatContent(opt.text)}</span>
          </button>
        `;
      }).join('');

      return `
        <div class="practice-item ${isAnswered ? (isCorrect ? 'answered-correct' : 'answered-incorrect') : ''}" id="p-item-${q.id}">
          <div class="question-meta">
            <span class="topic-tag">${escapeHtml(q.topicName)}</span>
            <div style="display:flex; gap:8px; align-items:center;">
              ${q.isOriginal ? `<span class="orig-tag highlight">Đề gốc C${q.originalId}</span>` : `<span class="orig-tag">Ngân hàng</span>`}
              <button class="btn-flag ${isBookmarked ? 'active' : ''}" data-bookmark-qid="${q.id}">
                ${isBookmarked ? '★ Đã lưu' : '☆ Lưu'}
              </button>
            </div>
          </div>
          <div class="question-title">
            <strong>Câu ${q.id}.</strong> ${formatContent(q.question)}
          </div>
          <div class="options-list">
            ${optionsHtml}
          </div>
          ${isAnswered ? `
            <div class="explanation-card">
              <div class="explanation-header" style="justify-content:space-between">
                <span>Lời giải chi tiết • Đáp án: ${q.correct}</span>
                <button class="btn btn-retry-single" data-qid="${q.id}" style="padding:2px 8px; font-size:0.75rem;">Làm lại</button>
              </div>
              <div class="explanation-content">${formatContent(q.explanation)}</div>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    el.practiceContentArea.innerHTML = `
      <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">
        Đang hiển thị <strong>${filtered.length}</strong> câu hỏi ở chế độ cuộn trang:
      </div>
      ${listHtml}
    `;

    // Bind option clicks
    el.practiceContentArea.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = parseInt(btn.dataset.qid, 10);
        const key = btn.dataset.key;
        handlePracticeAnswer(qid, key);
      });
    });

    // Bind Bookmark clicks
    el.practiceContentArea.querySelectorAll('[data-bookmark-qid]').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = parseInt(btn.dataset.bookmarkQid, 10);
        togglePracticeBookmark(qid);
      });
    });

    // Bind Retry clicks
    el.practiceContentArea.querySelectorAll('.btn-retry-single').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = parseInt(btn.dataset.qid, 10);
        delete state.practice.answers[qid];
        savePracticeState();
        renderPracticeView();
      });
    });

    renderMath(el.practiceContentArea);
  }

  function handlePracticeAnswer(qid, key) {
    state.practice.answers[qid] = key;
    savePracticeState();
    renderPracticeView();
  }

  function togglePracticeBookmark(qid) {
    if (state.practice.bookmarks.has(qid)) {
      state.practice.bookmarks.delete(qid);
    } else {
      state.practice.bookmarks.add(qid);
    }
    savePracticeState();
    renderPracticeView();
  }

  function savePracticeState() {
    localStorage.setItem('practice_answers', JSON.stringify(state.practice.answers));
    localStorage.setItem('practice_bookmarks', JSON.stringify(Array.from(state.practice.bookmarks)));
    updatePracticeStats();
  }

  function resetPracticeFilters() {
    state.practice.topicFilter = 'all';
    state.practice.originFilter = 'all';
    state.practice.statusFilter = 'all';
    state.practice.searchQuery = '';
    state.practice.currentIndex = 0;

    el.practiceTopicSelect.value = 'all';
    el.practiceOriginSelect.value = 'all';
    el.practiceStatusSelect.value = 'all';
    el.practiceSearchInput.value = '';

    renderPracticeView();
  }

  function promptResetPractice() {
    showModal({
      title: 'Xóa kết quả ôn tập?',
      message: 'Thao tác này sẽ xóa toàn bộ lịch sử trả lời và các câu đã làm trong chế độ ôn tập 200 câu. Các câu đã đánh dấu sao vẫn được giữ lại.',
      confirmText: 'Xác nhận xóa',
      cancelText: 'Hủy',
      onConfirm: () => {
        state.practice.answers = {};
        savePracticeState();
        renderPracticeView();
        showToast('Đã xóa lịch sử làm bài ôn tập!');
      }
    });
  }

  // ===================================================================
  // MODAL & TOAST UTILITIES
  // ===================================================================

  function showModal({ title, message, confirmText, cancelText, onConfirm }) {
    el.modalContainer.innerHTML = `
      <div class="modal-overlay">
        <div class="modal-card">
          <div class="modal-title">${escapeHtml(title)}</div>
          <div class="modal-desc">${message}</div>
          <div class="modal-actions">
            <button class="btn" id="modalCancel">${escapeHtml(cancelText || 'Hủy')}</button>
            <button class="btn btn-primary" id="modalConfirm">${escapeHtml(confirmText || 'Xác nhận')}</button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('modalCancel').addEventListener('click', closeModal);
    document.getElementById('modalConfirm').addEventListener('click', () => {
      closeModal();
      if (onConfirm) onConfirm();
    });
  }

  function closeModal() {
    el.modalContainer.innerHTML = '';
  }

  function showToast(msg) {
    const toast = document.createElement('div');
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 1000;
      background-color: var(--accent);
      color: var(--accent-text);
      padding: 10px 18px;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-md);
      font-size: 0.88rem;
      font-weight: 500;
      opacity: 0;
      transform: translateY(10px);
      transition: all 0.25s ease;
    `;
    toast.textContent = msg;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    }, 10);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // ===================================================================
  // KEYBOARD SHORTCUTS
  // ===================================================================

  window.addEventListener('keydown', (e) => {
    // Avoid interfering when typing in search input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
      return;
    }

    const key = e.key.toUpperCase();

    // In Quiz Active Mode
    if (state.currentTab === 'quiz' && state.quiz.started && !state.quiz.submitted) {
      if (['A', 'B', 'C', 'D'].includes(key)) {
        selectQuizOption(key);
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        const map = { '1': 'A', '2': 'B', '3': 'C', '4': 'D' };
        selectQuizOption(map[e.key]);
      } else if (e.key === 'ArrowLeft' || e.key === 'j') {
        if (state.quiz.currentIndex > 0) {
          state.quiz.currentIndex--;
          renderQuizNav();
          renderQuizQuestion();
        }
      } else if (e.key === 'ArrowRight' || e.key === 'k') {
        if (state.quiz.currentIndex < state.quiz.questions.length - 1) {
          state.quiz.currentIndex++;
          renderQuizNav();
          renderQuizQuestion();
        }
      } else if (key === 'F') {
        toggleFlagCurrentQuestion();
      }
    }

    // In Practice Focus Mode
    if (state.currentTab === 'practice' && state.practice.viewMode === 'focus') {
      const filtered = getFilteredPracticeQuestions();
      const q = filtered[state.practice.currentIndex];
      if (q) {
        if (['A', 'B', 'C', 'D'].includes(key)) {
          handlePracticeAnswer(q.id, key);
        } else if (['1', '2', '3', '4'].includes(e.key)) {
          const map = { '1': 'A', '2': 'B', '3': 'C', '4': 'D' };
          handlePracticeAnswer(q.id, map[e.key]);
        } else if (e.key === 'ArrowLeft') {
          if (state.practice.currentIndex > 0) {
            state.practice.currentIndex--;
            renderPracticeView();
          }
        } else if (e.key === 'ArrowRight') {
          if (state.practice.currentIndex < filtered.length - 1) {
            state.practice.currentIndex++;
            renderPracticeView();
          }
        }
      }
    }
  });

  // ===================================================================
  // EVENT LISTENERS INITIALIZATION
  // ===================================================================

  // Theme Toggle
  el.themeToggle.addEventListener('click', () => {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  });

  // Tab Switching
  el.tabQuiz.addEventListener('click', () => {
    if (state.quiz.submitted) {
      switchTab('review');
    } else {
      switchTab('quiz');
    }
  });
  el.tabPractice.addEventListener('click', () => switchTab('practice'));

  // Start Exam Button
  el.btnStartExam.addEventListener('click', startExam);

  // Quiz Navigation & Control Buttons
  el.btnQuizPrev.addEventListener('click', () => {
    if (state.quiz.currentIndex > 0) {
      state.quiz.currentIndex--;
      renderQuizNav();
      renderQuizQuestion();
    }
  });
  el.btnQuizNext.addEventListener('click', () => {
    if (state.quiz.currentIndex < state.quiz.questions.length - 1) {
      state.quiz.currentIndex++;
      renderQuizNav();
      renderQuizQuestion();
    }
  });
  el.btnQuizSubmit.addEventListener('click', promptSubmitQuiz);
  el.btnQuizFlag.addEventListener('click', toggleFlagCurrentQuestion);
  el.btnQuizCancel.addEventListener('click', promptCancelQuiz);

  // Review Actions
  el.btnRetryTest.addEventListener('click', () => {
    // Retry same 20 questions
    state.quiz.answers = {};
    state.quiz.flags = new Set();
    state.quiz.currentIndex = 0;
    state.quiz.timeLeft = 35 * 60;
    state.quiz.submitted = false;
    state.quiz.started = true;
    startQuizTimer();
    switchTab('quiz');
  });

  el.btnNewTest.addEventListener('click', () => {
    state.quiz.started = false;
    state.quiz.submitted = false;
    switchTab('quiz');
  });

  el.reviewFilterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      el.reviewFilterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.reviewFilter = chip.dataset.filter;
      renderReviewQuestions();
    });
  });

  // Practice Filters
  el.practiceTopicSelect.addEventListener('change', (e) => {
    state.practice.topicFilter = e.target.value;
    state.practice.currentIndex = 0;
    renderPracticeView();
  });
  el.practiceOriginSelect.addEventListener('change', (e) => {
    state.practice.originFilter = e.target.value;
    state.practice.currentIndex = 0;
    renderPracticeView();
  });
  el.practiceStatusSelect.addEventListener('change', (e) => {
    state.practice.statusFilter = e.target.value;
    state.practice.currentIndex = 0;
    renderPracticeView();
  });
  el.practiceSearchInput.addEventListener('input', (e) => {
    state.practice.searchQuery = e.target.value;
    state.practice.currentIndex = 0;
    renderPracticeView();
  });

  el.btnResetPractice.addEventListener('click', promptResetPractice);

  el.btnToggleViewMode.addEventListener('click', () => {
    state.practice.viewMode = state.practice.viewMode === 'focus' ? 'list' : 'focus';
    el.btnToggleViewMode.textContent = state.practice.viewMode === 'focus' 
      ? 'Chuyển xem dạng danh sách 📜' 
      : 'Chuyển xem từng câu 🎯';
    renderPracticeView();
  });

  // --- Bootstrap App ---
  applyTheme(state.theme);
  // Do NOT start exam automatically! Show start screen:
  el.quizStartScreen.style.display = 'block';
  el.quizActiveScreen.style.display = 'none';
  renderPracticeView();

  // Asynchronous fallback if questions weren't loaded synchronously
  if (state.allQuestions.length === 0 && typeof fetch === 'function') {
    fetch('./data/questions.json')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          window.QUESTIONS_BANK = window.QUESTIONS_DATA = data;
          state.allQuestions = data;
          if (state.currentTab === 'practice') {
            renderPracticeView();
          }
          console.log(`Async loaded ${data.length} questions from questions.json fallback.`);
        }
      })
      .catch(err => console.warn('Fallback fetch questions.json error:', err));
  }

  console.log(`Initialized app with ${state.allQuestions.length} questions. Waiting for user to start.`);
})();
