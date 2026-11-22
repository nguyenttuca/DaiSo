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

  // --- Data Provider Helper ---
  function getQuestionsBank() {
    if (typeof window !== 'undefined') {
      if (Array.isArray(window.QUESTIONS_BANK) && window.QUESTIONS_BANK.length > 0) return window.QUESTIONS_BANK;
      if (Array.isArray(window.QUESTIONS_DATA) && window.QUESTIONS_DATA.length > 0) return window.QUESTIONS_DATA;
    }
    return [];
  }

  // --- Question History & Smart Sampling Helpers ---
  function initQuestionHistory() {
    let hist = {};
    try {
      hist = JSON.parse(localStorage.getItem('toancc_question_history') || '{}');
    } catch (e) {
      hist = {};
    }

    // Auto-migrate from past practice or type-practice answers if any
    try {
      const practiceAnswers = JSON.parse(localStorage.getItem('practice_answers') || '{}');
      const tpAnswers = JSON.parse(localStorage.getItem('tp_answers') || '{}');
      const allQ = getQuestionsBank();
      const qMap = new Map(allQ.map(q => [q.id, q]));
      let changed = false;

      Object.keys(practiceAnswers).forEach(idStr => {
        const id = parseInt(idStr, 10);
        if (!hist[id] && qMap.has(id)) {
          const q = qMap.get(id);
          const ans = practiceAnswers[idStr];
          const isRight = (ans === q.correct);
          hist[id] = {
            attempts: 1,
            correctCount: isRight ? 1 : 0,
            wrongCount: isRight ? 0 : 1,
            lastResult: isRight,
            lastAttempt: Date.now() - 3600000 * 24,
            lastAnswer: ans
          };
          changed = true;
        }
      });

      Object.keys(tpAnswers).forEach(idStr => {
        const id = parseInt(idStr, 10);
        if (!hist[id] && qMap.has(id)) {
          const q = qMap.get(id);
          const ans = tpAnswers[idStr];
          const isRight = (ans === q.correct);
          hist[id] = {
            attempts: 1,
            correctCount: isRight ? 1 : 0,
            wrongCount: isRight ? 0 : 1,
            lastResult: isRight,
            lastAttempt: Date.now() - 3600000 * 12,
            lastAnswer: ans
          };
          changed = true;
        }
      });

      if (changed) {
        localStorage.setItem('toancc_question_history', JSON.stringify(hist));
      }
    } catch (e) {}

    return hist;
  }

  function getQuestionHistory(qid) {
    if (!state || !state.history) {
      return null;
    }
    return state.history[qid] || null;
  }

  function recordQuestionAttempt(qid, chosenKey, isCorrect) {
    if (!state.history) {
      state.history = {};
    }
    const id = parseInt(qid, 10);
    const prev = state.history[id] || { attempts: 0, correctCount: 0, wrongCount: 0 };
    
    state.history[id] = {
      attempts: (prev.attempts || 0) + 1,
      correctCount: (prev.correctCount || 0) + (isCorrect ? 1 : 0),
      wrongCount: (prev.wrongCount || 0) + (isCorrect ? 0 : 1),
      lastResult: !!isCorrect,
      lastAttempt: Date.now(),
      lastAnswer: chosenKey
    };

    try {
      localStorage.setItem('toancc_question_history', JSON.stringify(state.history));
    } catch (e) {
      console.warn('Lỗi lưu toancc_question_history:', e);
    }
  }

  function computeQuestionPriorityScore(q) {
    const h = getQuestionHistory(q.id);
    const now = Date.now();

    // Priority Tier 1: Câu chưa từng làm (New Questions)
    // Ưu tiên cao nhất: Score từ 0 đến 99
    if (!h || !h.attempts) {
      return Math.random() * 99;
    }

    // Priority Tier 2: Câu đã từng làm nhưng lần gần nhất bị SAI (Wrong Questions to reinforce)
    // Ưu tiên thứ hai: Score từ 10,000 đến 49,999
    if (!h.lastResult) {
      const wrongBonus = Math.min((h.wrongCount || 1) * 300, 3000);
      const hoursSince = Math.max(0, (now - (h.lastAttempt || 0)) / (1000 * 3600));
      const ageBonus = Math.min(hoursSince * 20, 2000);
      const cooldownPenalty = (hoursSince < 0.2) ? 3000 : 0;
      return 10000 - wrongBonus - ageBonus + cooldownPenalty + (Math.random() * 500);
    }

    // Priority Tier 3: Câu đã làm và lần gần nhất ĐÚNG (Correct Questions - Spaced Repetition)
    // Ưu tiên thứ ba: Score từ 100,000 trở lên
    const hoursSince = Math.max(0, (now - (h.lastAttempt || 0)) / (1000 * 3600));
    let recencyPenalty = 0;
    if (hoursSince < 1) {
      recencyPenalty = 1000000; // Vừa làm xong trong 1 giờ -> KHÔNG lặp lại
    } else if (hoursSince < 6) {
      recencyPenalty = 500000;
    } else if (hoursSince < 24) {
      recencyPenalty = 100000;
    } else if (hoursSince < 72) {
      recencyPenalty = 30000;
    }

    const spacedDecay = Math.min(hoursSince * 50, 60000);
    return 100000 + recencyPenalty - spacedDecay + (Math.random() * 1000);
  }

  function sampleSmartQuestionsFromChapter(chapterQuestions, count) {
    if (!Array.isArray(chapterQuestions) || chapterQuestions.length <= count) {
      return [...(chapterQuestions || [])];
    }

    // 1. Phân nhóm câu hỏi theo subTypeId để đảm bảo dàn trải đủ các dạng bài
    const subGroups = {};
    chapterQuestions.forEach(q => {
      const subId = q.subTypeId || 1;
      if (!subGroups[subId]) subGroups[subId] = [];
      subGroups[subId].push(q);
    });

    // 2. Sắp xếp các câu trong từng dạng bài theo Priority Score (thấp nhất = ưu tiên nhất)
    const subKeys = Object.keys(subGroups);
    shuffleArray(subKeys); // Khởi đầu xoay vòng công bằng

    const sortedSubGroups = {};
    subKeys.forEach(k => {
      sortedSubGroups[k] = [...subGroups[k]].sort((a, b) => {
        return computeQuestionPriorityScore(a) - computeQuestionPriorityScore(b);
      });
    });

    // 3. Round-Robin xoay vòng giữa các dạng bài
    const selected = [];
    const usedIds = new Set();
    const indexPointers = {};
    subKeys.forEach(k => { indexPointers[k] = 0; });

    while (selected.length < count) {
      let addedInRound = false;
      for (const k of subKeys) {
        if (selected.length >= count) break;
        const list = sortedSubGroups[k];
        while (indexPointers[k] < list.length) {
          const candidate = list[indexPointers[k]];
          indexPointers[k]++;
          if (!usedIds.has(candidate.id)) {
            usedIds.add(candidate.id);
            selected.push(candidate);
            addedInRound = true;
            break;
          }
        }
      }
      if (!addedInRound) break;
    }

    // 4. Bù số lượng nếu round-robin chưa đủ
    if (selected.length < count) {
      const leftovers = chapterQuestions.filter(q => !usedIds.has(q.id));
      leftovers.sort((a, b) => computeQuestionPriorityScore(a) - computeQuestionPriorityScore(b));
      for (const q of leftovers) {
        if (selected.length >= count) break;
        usedIds.add(q.id);
        selected.push(q);
      }
    }

    return selected;
  }

  // --- App State ---
  const state = {
    allQuestions: getQuestionsBank(),
    history: initQuestionHistory(),
    currentTab: 'quiz', // 'quiz' | 'review' | 'practice'
    
    // Quiz State
    quiz: {
      started: false,
      questions: [],
      currentIndex: 0,
      answers: {}, // questionId -> 'A' | 'B' | 'C' | 'D'
      flags: new Set(), // questionIds
      durationSeconds: 25 * 60, // 25 minutes
      timeLeft: 25 * 60,
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

    // Type Practice State
    typePractice: {
      chapterId: 1,
      subTypeId: 1,
      docExpanded: true,
      answers: JSON.parse(localStorage.getItem('tp_answers') || '{}')
    },

    theme: localStorage.getItem('theme_mode') || 
           (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  };

  // --- DOM Elements ---
  const el = {
    themeToggle: document.getElementById('themeToggle'),
    tabQuiz: document.getElementById('tabQuiz'),
    tabTypePractice: document.getElementById('tabTypePractice'),
    tabPractice: document.getElementById('tabPractice'),
    tabSolo: document.getElementById('tabSolo'),
    quizView: document.getElementById('quizView'),
    reviewView: document.getElementById('reviewView'),
    typePracticeView: document.getElementById('typePracticeView'),
    practiceView: document.getElementById('practiceView'),
    soloView: document.getElementById('soloView'),
    modalContainer: document.getElementById('modalContainer'),

    // Type Practice Elements
    tpChapterButtons: document.getElementById('tpChapterButtons'),
    tpSubtypeButtons: document.getElementById('tpSubtypeButtons'),
    tpTheoryDocWrapper: document.getElementById('tpTheoryDocWrapper'),
    tpQuestionsBanner: document.getElementById('tpQuestionsBanner'),
    tpQuestionsList: document.getElementById('tpQuestionsList'),

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
    if (el.tabTypePractice) el.tabTypePractice.classList.toggle('active', tab === 'typePractice');
    el.tabPractice.classList.toggle('active', tab === 'practice');
    if (el.tabSolo) el.tabSolo.classList.toggle('active', tab === 'solo');

    el.quizView.style.display = tab === 'quiz' ? 'block' : 'none';
    el.reviewView.style.display = tab === 'review' ? 'block' : 'none';
    if (el.typePracticeView) el.typePracticeView.style.display = tab === 'typePractice' ? 'block' : 'none';
    el.practiceView.style.display = tab === 'practice' ? 'block' : 'none';
    if (el.soloView) el.soloView.style.display = tab === 'solo' ? 'block' : 'none';

    if (tab === 'quiz') {
      if (state.quiz.started && !state.quiz.submitted) {
        el.quizStartScreen.style.display = 'none';
        el.quizActiveScreen.style.display = 'block';
        renderQuizQuestion();
      } else {
        el.quizStartScreen.style.display = 'block';
        el.quizActiveScreen.style.display = 'none';
      }
    } else if (tab === 'typePractice') {
      renderTypePracticeView();
    } else if (tab === 'review') {
      renderReviewView();
    } else if (tab === 'practice') {
      renderPracticeView();
    } else if (tab === 'solo') {
      if (window.SOLO_APP && typeof window.SOLO_APP.onTabActivated === 'function') {
        window.SOLO_APP.onTabActivated();
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.switchAppTab = switchTab;

  // ===================================================================
  // CUSTOM EXAM MATRIX & QUIZ LOGIC
  // ===================================================================

  function updateMatrixSummary() {
    const summaryLiveEl = document.getElementById('matrixLiveSummary');
    if (!summaryLiveEl) return;

    if (!state.allQuestions || state.allQuestions.length === 0) {
      state.allQuestions = getQuestionsBank();
    }

    const checkedChapterEls = document.querySelectorAll('input[name="quizChapter"]:checked');
    const selectedChapters = Array.from(checkedChapterEls).map(el => parseInt(el.value, 10));

    // Update active class on chapter cards
    document.querySelectorAll('.chapter-check-card').forEach(card => {
      const chVal = parseInt(card.dataset.ch, 10);
      card.classList.toggle('active', selectedChapters.includes(chVal));
    });

    // Update active class on quick pills
    const btnAll = document.getElementById('btnSelectAllChapters');
    const btn123 = document.getElementById('btnSelectCh123');
    const btn456 = document.getElementById('btnSelectCh456');
    if (btnAll) btnAll.classList.toggle('active', selectedChapters.length === 6);
    if (btn123) btn123.classList.toggle('active', selectedChapters.length === 3 && [1, 2, 3].every(c => selectedChapters.includes(c)));
    if (btn456) btn456.classList.toggle('active', selectedChapters.length === 3 && [4, 5, 6].every(c => selectedChapters.includes(c)));

    // Update active class on source radios
    const sourceRadio = document.querySelector('input[name="quizSourceOption"]:checked');
    const source = sourceRadio ? sourceRadio.value : 'all';
    document.querySelectorAll('.source-radio-card').forEach(card => {
      const r = card.querySelector('input[type="radio"]');
      card.classList.toggle('active', r && r.checked);
    });

    // Update active class on size cards
    const countRadio = document.querySelector('input[name="quizQuestionCount"]:checked');
    const reqCount = countRadio ? parseInt(countRadio.value, 10) : 20;
    const durVal = countRadio ? ((countRadio.dataset && countRadio.dataset.duration) || (countRadio.getAttribute ? countRadio.getAttribute('data-duration') : null) || '25') : '25';
    const reqDur = parseInt(durVal, 10) || 25;
    document.querySelectorAll('.size-pill-card').forEach(card => {
      const r = card.querySelector('input[type="radio"]');
      card.classList.toggle('active', r && r.checked);
    });

    // Calculate pool
    const pool = (state.allQuestions || []).filter(q => {
      if (!selectedChapters.includes(q.topicId)) return false;
      if (source === 'original') return q.isOriginal === true;
      if (source === 'extra') return q.isOriginal === false;
      return true;
    });

    const chText = selectedChapters.length === 6 
      ? 'Tất cả 6 chương' 
      : selectedChapters.length === 0 
        ? 'Chưa chọn chương nào ⚠️' 
        : `Chương ${selectedChapters.sort((a,b)=>a-b).join(', ')} (${selectedChapters.length} chương)`;

    let srcText = `Toàn bộ ${state.allQuestions.length} câu`;
    if (source === 'original') srcText = 'Chỉ Đề thi gốc PTIT';
    if (source === 'extra') srcText = 'Chỉ Luyện tập mở rộng';

    const actualCount = Math.min(reqCount, pool.length);
    const examText = `${actualCount} câu hỏi • ${reqDur}:00 phút`;

    // Calculate smart stats in pool
    let newInPool = 0;
    let wrongInPool = 0;
    let doneInPool = 0;
    pool.forEach(q => {
      const h = getQuestionHistory(q.id);
      if (!h || !h.attempts) newInPool++;
      else if (!h.lastResult) wrongInPool++;
      else doneInPool++;
    });

    const summaryDistributionText = document.getElementById('summaryDistributionText');
    if (summaryDistributionText) {
      if (newInPool >= actualCount) {
        summaryDistributionText.innerHTML = `✨ <strong>100% câu mới (${newInPool} câu chưa làm)</strong>`;
      } else {
        const takeNew = newInPool;
        const takeWrong = Math.min(wrongInPool, actualCount - takeNew);
        const takeOld = Math.max(0, actualCount - takeNew - takeWrong);
        summaryDistributionText.innerHTML = `✨ <strong>${takeNew} câu mới</strong> + 🎯 <strong>${takeWrong} câu sai</strong> + 🔄 <strong>${takeOld} câu ôn lại</strong>`;
      }
    }

    const summaryChaptersText = document.getElementById('summaryChaptersText');
    const summarySourceText = document.getElementById('summarySourceText');
    const summaryExamText = document.getElementById('summaryExamText');

    if (summaryChaptersText) summaryChaptersText.textContent = chText;
    if (summarySourceText) summarySourceText.textContent = `${pool.length} câu khả dụng (${newInPool} mới • ${wrongInPool} cần ôn • ${doneInPool} đã làm)`;
    if (summaryExamText) summaryExamText.textContent = examText;

    const btnStart = document.getElementById('btnStartExam');
    if (btnStart) {
      if (selectedChapters.length === 0) {
        btnStart.textContent = '⚠️ Vui lòng chọn ít nhất 1 chương';
        btnStart.disabled = true;
      } else if (pool.length === 0) {
        btnStart.textContent = '⚠️ Không có câu hỏi phù hợp';
        btnStart.disabled = true;
      } else {
        btnStart.textContent = `⚡ Bắt đầu làm bài thi (${actualCount} câu • ${reqDur} phút)`;
        btnStart.disabled = false;
      }
    }
  }

  function initMatrixUI() {
    // Checkbox events
    document.querySelectorAll('input[name="quizChapter"]').forEach(cb => {
      cb.addEventListener('change', updateMatrixSummary);
    });

    // Radio events
    document.querySelectorAll('input[name="quizSourceOption"]').forEach(r => {
      r.addEventListener('change', updateMatrixSummary);
    });
    document.querySelectorAll('input[name="quizQuestionCount"]').forEach(r => {
      r.addEventListener('change', updateMatrixSummary);
    });

    // Quick selection pills
    const btnAll = document.getElementById('btnSelectAllChapters');
    const btn123 = document.getElementById('btnSelectCh123');
    const btn456 = document.getElementById('btnSelectCh456');
    const btnClear = document.getElementById('btnClearChapters');

    if (btnAll) {
      btnAll.addEventListener('click', () => {
        document.querySelectorAll('input[name="quizChapter"]').forEach(cb => { cb.checked = true; });
        updateMatrixSummary();
      });
    }

    if (btn123) {
      btn123.addEventListener('click', () => {
        document.querySelectorAll('input[name="quizChapter"]').forEach(cb => {
          const val = parseInt(cb.value, 10);
          cb.checked = (val === 1 || val === 2 || val === 3);
        });
        updateMatrixSummary();
      });
    }

    if (btn456) {
      btn456.addEventListener('click', () => {
        document.querySelectorAll('input[name="quizChapter"]').forEach(cb => {
          const val = parseInt(cb.value, 10);
          cb.checked = (val === 4 || val === 5 || val === 6);
        });
        updateMatrixSummary();
      });
    }

    if (btnClear) {
      btnClear.addEventListener('click', () => {
        document.querySelectorAll('input[name="quizChapter"]').forEach(cb => { cb.checked = false; });
        updateMatrixSummary();
      });
    }

    updateMatrixSummary();
  }

  function startExam() {
    clearInterval(state.quiz.timerInterval);

    if (!state.allQuestions || state.allQuestions.length === 0) {
      state.allQuestions = getQuestionsBank();
    }
    if (!state.allQuestions || state.allQuestions.length === 0) {
      alert("Đang tải dữ liệu câu hỏi hoặc chưa tìm thấy ngân hàng đề. Vui lòng làm mới trang (F5).");
      return;
    }

    // 1. Get Selected Chapters (1 to 6)
    const checkedChapterEls = document.querySelectorAll('input[name="quizChapter"]:checked');
    const selectedChapters = Array.from(checkedChapterEls).map(el => parseInt(el.value, 10));
    if (selectedChapters.length === 0) {
      alert("Vui lòng chọn ít nhất một chương để tạo đề thi!");
      return;
    }

    // 2. Get Selected Source
    const sourceRadio = document.querySelector('input[name="quizSourceOption"]:checked');
    const source = sourceRadio ? sourceRadio.value : 'all';

    // 3. Get Selected Question Count & Duration
    const countRadio = document.querySelector('input[name="quizQuestionCount"]:checked');
    const requestedCount = countRadio ? parseInt(countRadio.value, 10) : 20;
    const durVal = countRadio ? ((countRadio.dataset && countRadio.dataset.duration) || (countRadio.getAttribute ? countRadio.getAttribute('data-duration') : null) || '25') : '25';
    const requestedDuration = parseInt(durVal, 10) || 25;

    // 4. Filter Available Pool
    const pool = state.allQuestions.filter(q => {
      if (!selectedChapters.includes(q.topicId)) return false;
      if (source === 'original') return q.isOriginal === true;
      if (source === 'extra') return q.isOriginal === false;
      return true;
    });

    if (pool.length === 0) {
      alert("Không tìm thấy câu hỏi nào phù hợp với ma trận đã chọn. Vui lòng chọn thêm chương hoặc nguồn câu hỏi!");
      return;
    }

    // 5. Intelligent Balanced & Spaced Sampling across selected chapters
    // Priorities:
    //  1. Never attempted questions (New)
    //  2. Previously answered incorrectly (Mistakes to reinforce)
    //  3. Answered correctly long ago (Spaced repetition)
    //  4. Avoid recently answered correct questions (Anti-repetition)
    //  5. Subtype round-robin distribution to prevent topical clustering
    const targetTotal = Math.min(requestedCount, pool.length);
    const byChapter = {};
    selectedChapters.forEach(ch => {
      byChapter[ch] = pool.filter(q => q.topicId === ch);
    });

    const basePerChapter = Math.floor(targetTotal / selectedChapters.length);
    let remainder = targetTotal % selectedChapters.length;
    const selected = [];
    const chosenIds = new Set();

    // Distribute among selected chapters using smart sampling
    selectedChapters.forEach(ch => {
      const take = basePerChapter + (remainder > 0 ? 1 : 0);
      if (remainder > 0) remainder--;
      const chQuestions = byChapter[ch] || [];
      const fromChapter = sampleSmartQuestionsFromChapter(chQuestions, Math.min(take, chQuestions.length));
      fromChapter.forEach(q => {
        if (!chosenIds.has(q.id)) {
          chosenIds.add(q.id);
          selected.push(q);
        }
      });
    });

    // If some chapter had fewer questions than its quota, fill remainder from remaining pool
    if (selected.length < targetTotal) {
      const leftovers = pool.filter(q => !chosenIds.has(q.id));
      leftovers.sort((a, b) => computeQuestionPriorityScore(a) - computeQuestionPriorityScore(b));
      const needed = targetTotal - selected.length;
      leftovers.slice(0, needed).forEach(q => {
        chosenIds.add(q.id);
        selected.push(q);
      });
    }

    // Shuffle final selected questions so chapters are naturally interwoven
    shuffleArray(selected);
    state.quiz.questions = (selected || []).filter(q => q && q.id);

    if (state.quiz.questions.length === 0) {
      alert("Không thể khởi tạo danh sách câu hỏi thi. Vui lòng chọn lại ma trận!");
      return;
    }

    state.quiz.started = true;
    state.quiz.submitted = false;
    state.quiz.currentIndex = 0;
    state.quiz.answers = {};
    state.quiz.flags = new Set();
    state.quiz.durationSeconds = requestedDuration * 60;
    state.quiz.timeLeft = requestedDuration * 60;
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
    if (!el.quizTimer) return;
    const mins = Math.floor(state.quiz.timeLeft / 60);
    const secs = state.quiz.timeLeft % 60;
    const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    el.quizTimer.textContent = timeStr;

    if (el.quizTimer.parentElement) {
      if (state.quiz.timeLeft < 300) { // under 5 mins
        el.quizTimer.parentElement.classList.add('warning');
      } else {
        el.quizTimer.parentElement.classList.remove('warning');
      }
    }
  }

  function renderQuizNav() {
    if (!el.quizNavGrid) return;
    el.quizNavGrid.innerHTML = '';
    const totalCount = state.quiz.questions.length || 20;

    (state.quiz.questions || []).forEach((q, idx) => {
      if (!q || !q.id) return;
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
    if (el.quizProgressText) {
      el.quizProgressText.textContent = `Đã làm ${answeredCount}/${totalCount} câu`;
    }
  }

  function renderQuizQuestion() {
    if (!el.quizQuestionContainer) return;
    try {
      const questions = state.quiz.questions || [];
      const q = questions[state.quiz.currentIndex];
      if (!q || !q.id) {
        el.quizQuestionContainer.innerHTML = `
          <div style="padding: 40px 20px; text-align: center; color: var(--text-muted);">
            <p style="font-size: 1.05rem; margin-bottom: 12px;">Đang tải nội dung câu hỏi hoặc chưa tìm thấy dữ liệu.</p>
            <button class="btn btn-primary" onclick="location.reload()">Tải lại trang (F5)</button>
          </div>
        `;
        return;
      }

      const isFlagged = state.quiz.flags.has(q.id);
      if (el.btnQuizFlag) {
        el.btnQuizFlag.classList.toggle('active', isFlagged);
        el.btnQuizFlag.innerHTML = isFlagged 
          ? `★ Đã đánh dấu <span class="kbd-hint">F</span>`
          : `☆ Đánh dấu xem lại <span class="kbd-hint">F</span>`;
      }

      const selectedKey = state.quiz.answers[q.id];

      let optionsHtml = (q.options || []).map(opt => {
        const isSelected = selectedKey === opt.key;
        return `
          <button class="option-btn ${isSelected ? 'selected' : ''}" data-key="${opt.key}">
            <span class="opt-badge">${opt.key}</span>
            <span class="opt-text">${formatContent(opt.text)}</span>
          </button>
        `;
      }).join('');

      const isOrig = q.isOriginal === true;
      const originBadgeHtml = isOrig
        ? `<span class="orig-tag orig-authentic">⭐️ Đề gốc PTIT • ${escapeHtml(q.examName || 'Đề gốc')}</span>`
        : `<span class="orig-tag orig-extra">📚 Luyện tập mở rộng PTIT</span>`;

      // Smart Learning Status Tag
      const h = getQuestionHistory(q.id);
      let statusTagHtml = '';
      if (!h || !h.attempts) {
        statusTagHtml = `<span class="orig-tag" style="background: rgba(16, 185, 129, 0.12); color: #059669; border-color: rgba(16, 185, 129, 0.25);">✨ Câu mới</span>`;
      } else if (!h.lastResult) {
        statusTagHtml = `<span class="orig-tag" style="background: rgba(239, 68, 68, 0.12); color: #dc2626; border-color: rgba(239, 68, 68, 0.25);">🎯 Ôn lại (từng làm sai)</span>`;
      } else {
        const days = Math.floor((Date.now() - (h.lastAttempt || 0)) / (1000 * 3600 * 24));
        const timeText = days > 0 ? `${days} ngày trước` : 'Đã làm đúng';
        statusTagHtml = `<span class="orig-tag" style="background: rgba(59, 130, 246, 0.12); color: #2563eb; border-color: rgba(59, 130, 246, 0.25);">🔄 Ôn tập định kỳ (${timeText})</span>`;
      }

      el.quizQuestionContainer.innerHTML = `
        <div class="question-meta">
          <span class="topic-tag">${escapeHtml(q.topicName || q.chapterName || ('Chương ' + q.topicId))}</span>
          <div style="display:flex; gap:6px; align-items:center; flex-wrap:wrap;">
            ${statusTagHtml}
            ${originBadgeHtml}
          </div>
        </div>
        <div class="question-title">
          <strong>Câu ${state.quiz.currentIndex + 1} / ${questions.length}.</strong> ${formatContent(q.question)}
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
      if (el.btnQuizPrev) el.btnQuizPrev.disabled = state.quiz.currentIndex === 0;
      if (el.btnQuizNext) el.btnQuizNext.disabled = state.quiz.currentIndex === questions.length - 1;

      renderQuizNav();
      renderMath(el.quizQuestionContainer);
    } catch (err) {
      console.error("Lỗi hiển thị câu hỏi:", err);
      el.quizQuestionContainer.innerHTML = `
        <div style="padding: 30px 20px; text-align: center; color: var(--error-text);">
          <p style="font-weight: 600; margin-bottom: 8px;">Đã xảy ra lỗi khi kết xuất câu hỏi này:</p>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 16px;">${escapeHtml(err.message)}</p>
          <button class="btn btn-primary" onclick="location.reload()">Làm mới trang (F5)</button>
        </div>
      `;
    }
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
    const total = state.quiz.questions.length || 20;
    const answered = Object.keys(state.quiz.answers).length;
    const unanswered = total - answered;
    const flagged = state.quiz.flags.size;

    showModal({
      title: 'Xác nhận nộp bài thi',
      message: `Bạn đã hoàn thành <strong>${answered}/${total}</strong> câu.${unanswered > 0 ? ` Còn <strong style="color:var(--error-solid)">${unanswered} câu chưa trả lời</strong>.` : ''} ${flagged > 0 ? ` Có <strong>${flagged} câu đã đánh dấu xem lại</strong>.` : ''}<br><br>Bạn có chắc chắn muốn nộp bài để xem kết quả và lời giải chi tiết?`,
      confirmText: 'Nộp bài ngay',
      cancelText: 'Làm tiếp',
      onConfirm: () => submitQuiz(false)
    });
  }

  function submitQuiz(isAuto) {
    clearInterval(state.quiz.timerInterval);
    state.quiz.submitted = true;
    state.quiz.started = false;
    const totalDuration = state.quiz.durationSeconds || (25 * 60);
    state.quiz.timeSpent = totalDuration - Math.max(0, state.quiz.timeLeft);

    // Calculate score & record attempt into question history
    let correctCount = 0;
    (state.quiz.questions || []).forEach(q => {
      const userAns = state.quiz.answers[q.id];
      if (userAns) {
        const isRight = (userAns === q.correct);
        if (isRight) correctCount++;
        recordQuestionAttempt(q.id, userAns, isRight);
      }
    });
    state.quiz.score = correctCount;

    if (isAuto) {
      showToast('Đã hết thời gian làm bài! Hệ thống đã tự động thu bài.');
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

      const isOrig = q.isOriginal === true;
      const originBadgeHtml = isOrig
        ? `<span class="orig-tag orig-authentic">⭐️ Đề gốc PTIT • ${escapeHtml(q.examName || 'Đề gốc')} • Câu ${q.originalId}</span>`
        : `<span class="orig-tag orig-extra">📚 Luyện tập mở rộng • Câu ${q.originalId}</span>`;

      card.innerHTML = `
        <div class="question-meta">
          <span class="topic-tag">${escapeHtml(q.topicName)}</span>
          <div style="display:flex; gap:6px; align-items:center;">
            ${userAns ? (isCorrect ? `<span style="color:var(--success-solid); font-weight:700">✓ Làm đúng</span>` : `<span style="color:var(--error-solid); font-weight:700">✗ Làm sai (Bạn chọn ${userAns})</span>`) : `<span style="color:var(--warn-solid); font-weight:700">Chưa làm</span>`}
            ${originBadgeHtml}
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
  // TYPE PRACTICE VIEW & THEORY DOCS (24 Dạng bài có Doc Lý thuyết)
  // ===================================================================

  const CHAPTER_CONFIG = [
    { id: 1, name: "Logic mệnh đề, Tập hợp, Ánh xạ & Boole", short: "Chương 1", count: 102, orig: 8, ext: 94 },
    { id: 2, name: "Không gian véc tơ", short: "Chương 2", count: 102, orig: 13, ext: 89 },
    { id: 3, name: "Ma trận và Định thức", short: "Chương 3", count: 102, orig: 28, ext: 74 },
    { id: 4, name: "Hệ phương trình tuyến tính", short: "Chương 4", count: 102, orig: 14, ext: 88 },
    { id: 5, name: "Ánh xạ tuyến tính", short: "Chương 5", count: 102, orig: 11, ext: 91 },
    { id: 6, name: "Không gian véc tơ Euclide, Dạng toàn phương", short: "Chương 6", count: 102, orig: 7, ext: 95 }
  ];

  function getTheoryDocs() {
    if (typeof window !== 'undefined' && window.THEORY_DOCS) {
      return window.THEORY_DOCS;
    }
    return {};
  }

  function renderTypePracticeView() {
    if (!el.typePracticeView) return;
    
    if (!state.allQuestions || state.allQuestions.length === 0) {
      state.allQuestions = getQuestionsBank();
    }

    renderTpChapterSelector();
    renderTpSubtypeSelector();
    renderTpTheoryDoc();
    renderTpQuestions();
  }

  function renderTpChapterSelector() {
    if (!el.tpChapterButtons) return;
    el.tpChapterButtons.innerHTML = '';

    CHAPTER_CONFIG.forEach(ch => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `tp-chapter-btn ${ch.id === state.typePractice.chapterId ? 'active' : ''}`;
      btn.innerHTML = `
        <span class="tp-ch-badge">${ch.short}</span>
        <span class="tp-ch-title">${escapeHtml(ch.name)}</span>
        <span class="tp-ch-count">${ch.count} câu (${ch.orig} gốc • ${ch.ext} mở rộng)</span>
      `;
      btn.addEventListener('click', () => {
        state.typePractice.chapterId = ch.id;
        state.typePractice.subTypeId = 1;
        renderTypePracticeView();
      });
      el.tpChapterButtons.appendChild(btn);
    });
  }

  function renderTpSubtypeSelector() {
    if (!el.tpSubtypeButtons) return;
    el.tpSubtypeButtons.innerHTML = '';

    const chId = state.typePractice.chapterId;
    const allDocs = getTheoryDocs();
    const chDoc = allDocs[String(chId)] || { types: [] };
    const types = chDoc.types || [];

    types.forEach((t, idx) => {
      const subId = idx + 1;
      const count = (state.allQuestions || []).filter(q => q.topicId === chId && q.subTypeId === subId).length;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `tp-subtype-btn ${subId === state.typePractice.subTypeId ? 'active' : ''}`;
      btn.innerHTML = `
        <div class="tp-sub-left">
          <span class="tp-sub-id">Dạng ${t.id}</span>
          <span class="tp-sub-name">${escapeHtml(t.name)}</span>
        </div>
        <span class="tp-sub-count">${count} câu</span>
      `;
      btn.addEventListener('click', () => {
        state.typePractice.subTypeId = subId;
        renderTpSubtypeSelector();
        renderTpTheoryDoc();
        renderTpQuestions();
      });
      el.tpSubtypeButtons.appendChild(btn);
    });
  }

  function formatDocText(text) {
    if (!text) return '';
    return text
      .replace(/^(\s*)\*\s+/gm, '$1• ')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\n\n/g, '<div style="margin-bottom: 8px;"></div>')
      .replace(/\n/g, '<br>');
  }

  function renderTpTheoryDoc() {
    if (!el.tpTheoryDocWrapper) return;
    const chId = state.typePractice.chapterId;
    const subId = state.typePractice.subTypeId;
    const allDocs = getTheoryDocs();
    const chDoc = allDocs[String(chId)];
    const t = (chDoc && chDoc.types) ? chDoc.types[subId - 1] : null;

    if (!t) {
      el.tpTheoryDocWrapper.innerHTML = '';
      return;
    }

    const isExpanded = state.typePractice.docExpanded;
    const toggleIcon = isExpanded ? '▲' : '▼';
    const toggleText = isExpanded ? 'Thu gọn lý thuyết & mẹo' : 'Mở rộng lý thuyết & mẹo giải';

    let bodyHtml = '';
    if (isExpanded) {
      bodyHtml = `
        <div class="doc-body">
          <div class="doc-box doc-box-theory">
            <div class="doc-box-title">📌 1. LÝ THUYẾT CỐT LÕI CẦN ĐỂ GIẢI</div>
            <div>${formatDocText(t.theory)}</div>
          </div>

          <div class="doc-box doc-box-formulas">
            <div class="doc-box-title">⚡ 2. CÔNG THỨC & TÍNH CHẤT NỀN TẢNG</div>
            <div>${formatDocText(t.formulas)}</div>
          </div>

          <div class="doc-box doc-box-tips">
            <div class="doc-box-title">💡 3. PHƯƠNG PHÁP & MẸO GIẢI NHANH 30S</div>
            <div>${formatDocText(t.quickTips)}</div>
          </div>

          <div class="doc-box doc-box-casio">
            <div class="doc-box-title">📱 4. BẤM MÁY TÍNH CASIO FX 580VNX / 880BTG</div>
            <div>${formatDocText(t.casioTricks)}</div>
          </div>

          <div class="doc-box doc-box-traps">
            <div class="doc-box-title">⚠️ 5. CÁC BẪY ĐỀ THI HAY GẶP & LƯU Ý ĐẶC BIỆT</div>
            <div>${formatDocText(t.traps)}</div>
          </div>
        </div>
      `;
    }

    el.tpTheoryDocWrapper.innerHTML = `
      <div class="doc-card">
        <div class="doc-header">
          <div class="doc-header-title">
            <span class="tp-sub-id" style="background:#3b82f6; color:#fff;">Dạng ${t.id}</span>
            <div>
              <h3 style="margin-bottom: 2px;">${escapeHtml(t.name)}</h3>
              <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted);">${escapeHtml(t.summary)}</p>
            </div>
          </div>
          <button type="button" class="doc-toggle-btn" id="btnToggleTpDoc">
            <span>${toggleIcon}</span> ${toggleText}
          </button>
        </div>
        ${bodyHtml}
      </div>
    `;

    const btnToggle = document.getElementById('btnToggleTpDoc');
    if (btnToggle) {
      btnToggle.addEventListener('click', () => {
        state.typePractice.docExpanded = !state.typePractice.docExpanded;
        renderTpTheoryDoc();
      });
    }

    if (isExpanded) {
      renderMath(el.tpTheoryDocWrapper);
    }
  }

  function renderTpQuestions() {
    if (!el.tpQuestionsList) return;
    const chId = state.typePractice.chapterId;
    const subId = state.typePractice.subTypeId;

    const questions = (state.allQuestions || []).filter(q => q.topicId === chId && q.subTypeId === subId);
    
    // Calculate stats for this sub-type
    let answeredCount = 0;
    let correctCount = 0;
    questions.forEach(q => {
      const ans = state.typePractice.answers[q.id];
      if (ans) {
        answeredCount++;
        if (ans === q.correct) correctCount++;
      }
    });

    if (el.tpQuestionsBanner) {
      const pct = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
      el.tpQuestionsBanner.innerHTML = `
        <div class="tp-banner-stats">
          <span>📝 <strong>${questions.length} câu hỏi</strong> Dạng ${chId}.${subId}</span>
          <span style="color: var(--text-muted);">•</span>
          <span>Đã làm: <strong>${answeredCount}/${questions.length}</strong> câu</span>
          <span style="color: var(--text-muted);">•</span>
          <span style="color: var(--success-solid);">Đúng: <strong>${correctCount}</strong> (${pct}%)</span>
        </div>
        <div>
          <button type="button" class="btn" id="btnResetTpSubtype" style="font-size: 0.82rem; padding: 6px 12px; color: var(--error-text);">
            Làm lại dạng này 🔄
          </button>
        </div>
      `;

      const btnReset = document.getElementById('btnResetTpSubtype');
      if (btnReset) {
        btnReset.addEventListener('click', () => {
          if (confirm(`Bạn có chắc muốn xóa lịch sử làm bài của Dạng ${chId}.${subId} để luyện tập lại từ đầu?`)) {
            questions.forEach(q => {
              delete state.typePractice.answers[q.id];
            });
            localStorage.setItem('tp_answers', JSON.stringify(state.typePractice.answers));
            renderTpQuestions();
          }
        });
      }
    }

    el.tpQuestionsList.innerHTML = '';

    if (questions.length === 0) {
      el.tpQuestionsList.innerHTML = `
        <div style="padding: 40px 20px; text-align: center; color: var(--text-muted);">
          <p>Chưa có câu hỏi nào trong dạng bài này.</p>
        </div>
      `;
      return;
    }

    questions.forEach((q, idx) => {
      const card = document.createElement('div');
      card.className = 'tp-q-card';
      card.id = `tp-card-${q.id}`;

      const userAns = state.typePractice.answers[q.id];
      const isAnswered = !!userAns;

      const isOrig = q.isOriginal === true;
      const originTag = isOrig
        ? `<span class="orig-tag orig-authentic">⭐️ Đề gốc PTIT • ${escapeHtml(q.examName || 'Đề gốc')}</span>`
        : `<span class="orig-tag orig-extra">📚 Luyện tập mở rộng PTIT</span>`;

      let optionsHtml = (q.options || []).map(opt => {
        let optClass = 'tp-option-btn';
        if (isAnswered) {
          if (opt.key === q.correct) {
            optClass += ' opt-correct';
          } else if (opt.key === userAns) {
            optClass += ' opt-wrong';
          }
        }
        return `
          <button type="button" class="${optClass}" data-qid="${q.id}" data-key="${opt.key}" ${isAnswered ? 'disabled' : ''}>
            <span class="tp-opt-key">${opt.key}</span>
            <span class="tp-opt-text">${formatContent(opt.text)}</span>
          </button>
        `;
      }).join('');

      let explanationHtml = '';
      if (isAnswered) {
        const isRight = userAns === q.correct;
        const statusBadge = isRight 
          ? `<span style="color: var(--success-solid); font-weight: 700;">✅ Bạn đã trả lời ĐÚNG</span>`
          : `<span style="color: var(--error-solid); font-weight: 700;">❌ Bạn trả lời SAI (Đáp án đúng: ${q.correct})</span>`;

        explanationHtml = `
          <div class="tp-explanation-box">
            <div class="tp-exp-header">
              ${statusBadge}
            </div>
            <div class="tp-exp-content">
              ${formatContent(q.explanation)}
            </div>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="tp-q-header">
          <span class="tp-q-number">Câu ${idx + 1} / ${questions.length} (ID #${q.id})</span>
          <div>${originTag}</div>
        </div>
        <div class="tp-q-body">
          ${formatContent(q.question)}
        </div>
        <div class="tp-options-grid">
          ${optionsHtml}
        </div>
        ${explanationHtml}
      `;

      // Bind option clicks
      if (!isAnswered) {
        card.querySelectorAll('.tp-option-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const chosenKey = btn.dataset.key;
            state.typePractice.answers[q.id] = chosenKey;
            localStorage.setItem('tp_answers', JSON.stringify(state.typePractice.answers));
            const isRight = (chosenKey === q.correct);
            recordQuestionAttempt(q.id, chosenKey, isRight);
            renderTpQuestions();
          });
        });
      }

      el.tpQuestionsList.appendChild(card);
    });

    renderMath(el.tpQuestionsList);
  }

  // ===================================================================
  // PRACTICE MODE (Ngân hàng 612 câu - Làm câu nào chấm câu đó)
  // ===================================================================

  function getFilteredPracticeQuestions() {
    const { topicFilter, originFilter, statusFilter, searchQuery } = state.practice;

    return state.allQuestions.filter(q => {
      // Topic
      if (topicFilter !== 'all' && q.topicId !== parseInt(topicFilter, 10)) return false;

      // Origin / Exam
      if (originFilter === 'de101' && q.examId !== 'de101') return false;
      if (originFilter === 'de_ontap' && q.examId !== 'de_ontap') return false;
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
        const inQ = (q.question || '').toLowerCase().includes(query);
        const inExp = (q.explanation || '').toLowerCase().includes(query);
        const inExam = (q.examName || '').toLowerCase().includes(query);
        const inOpts = (q.options || []).some(o => (o.text || '').toLowerCase().includes(query));
        if (!inQ && !inExp && !inExam && !inOpts) return false;
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
    const percentOverall = total > 0 ? Math.round((answeredCount / total) * 100) : 0;
    const origCount = state.allQuestions.filter(q => q.isOriginal).length;
    const extraCount = state.allQuestions.filter(q => !q.isOriginal).length;

    el.practiceStatsText.innerHTML = `
      <div class="stats-item">Tổng ngân hàng: <strong>${total} câu</strong> (${origCount} gốc • ${extraCount} mở rộng)</div>
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
      const originTag = item.isOriginal ? `[⭐️ Gốc C${item.originalId}]` : `[📚 Mở rộng C${item.originalId}]`;
      return `<option value="${idx}" ${idx === state.practice.currentIndex ? 'selected' : ''}>Câu ${item.id} ${originTag} (${statusSymbol}) - ${item.topicName.slice(0, 18)}...</option>`;
    }).join('');

    const originBadgeHtml = q.isOriginal 
      ? `<span class="orig-tag orig-authentic">⭐️ Đề gốc PTIT • ${escapeHtml(q.examName || 'Đề gốc')} • Câu ${q.originalId}</span>`
      : `<span class="orig-tag orig-extra">📚 Luyện tập mở rộng • Câu ${q.originalId}</span>`;

    el.practiceContentArea.innerHTML = `
      <div class="question-card" style="margin-bottom:16px;">
        <div class="question-meta">
          <span class="topic-tag">${escapeHtml(q.topicName)}</span>
          <div style="display:flex; gap:8px; align-items:center;">
            ${originBadgeHtml}
            <button class="btn-flag ${isBookmarked ? 'active' : ''}" id="btnPracticeBookmark">
              ${isBookmarked ? '★ Đã lưu' : '☆ Lưu câu này'}
            </button>
          </div>
        </div>

        <div class="question-title">
          <strong>Câu ${q.id} / ${state.allQuestions.length}.</strong> ${formatContent(q.question)}
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

      const isOrig = q.isOriginal === true;
      const originBadgeHtml = isOrig 
        ? `<span class="orig-tag orig-authentic">⭐️ Đề gốc PTIT • ${escapeHtml(q.examName || 'Đề gốc')} • Câu ${q.originalId}</span>`
        : `<span class="orig-tag orig-extra">📚 Luyện tập mở rộng • Câu ${q.originalId}</span>`;

      return `
        <div class="practice-item ${isAnswered ? (isCorrect ? 'answered-correct' : 'answered-incorrect') : ''}" id="p-item-${q.id}">
          <div class="question-meta">
            <span class="topic-tag">${escapeHtml(q.topicName)}</span>
            <div style="display:flex; gap:8px; align-items:center;">
              ${originBadgeHtml}
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

    const q = (state.allQuestions || []).find(item => item.id === parseInt(qid, 10));
    if (q) {
      const isRight = (key === q.correct);
      recordQuestionAttempt(qid, key, isRight);
    }

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
      message: 'Thao tác này sẽ xóa toàn bộ lịch sử trả lời và các câu đã làm trong chế độ ôn tập. Các câu đã đánh dấu sao vẫn được giữ lại.',
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
    const targetParent = document.body || document.documentElement;
    if (targetParent) {
      targetParent.appendChild(toast);
    } else {
      return;
    }

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
    if (str === null || str === undefined) return '';
    return String(str)
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
  if (el.tabTypePractice) el.tabTypePractice.addEventListener('click', () => switchTab('typePractice'));
  el.tabPractice.addEventListener('click', () => switchTab('practice'));
  if (el.tabSolo) el.tabSolo.addEventListener('click', () => switchTab('solo'));

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
    state.quiz.timeLeft = (state.quiz.durationSeconds || 25 * 60);
    state.quiz.submitted = false;
    state.quiz.started = true;
    startQuizTimer();
    renderQuizNav();
    renderQuizQuestion();
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
  initMatrixUI();

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
          updateMatrixSummary();
          console.log(`Async loaded ${data.length} questions from questions.json fallback.`);
        }
      })
      .catch(err => console.warn('Fallback fetch questions.json error:', err));
  }

  console.log(`Initialized app with ${state.allQuestions.length} questions. Waiting for user to start.`);

  // Auto-switch to Solo if room query parameter is present in URL
  if (typeof window !== 'undefined' && window.location) {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('solo') || urlParams.has('room')) {
      setTimeout(() => switchTab('solo'), 100);
    }
  }
})();
