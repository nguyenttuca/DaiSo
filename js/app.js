/**
 * APP LOGIC - ÔN THI TRẮC NGHIỆM TOÁN PTIT (GIẢI TÍCH 1, GIẢI TÍCH 2, ĐẠI SỐ TUYẾN TÍNH, TOÁN RỜI RẠC)
 * Tuân thủ Quyết định số 292/QĐ-HV về đánh giá Chuẩn đầu ra CLO1, CLO2, CLO3 theo Thang Rubric 5 mức.
 * Features:
 * 1. Multi-Subject Switcher (Giải tích 1, Giải tích 2, Đại số, Toán rời rạc)
 * 2. Smart Exam Generation: 20-40 câu, 20-60 phút, Spaced Repetition chống lặp, phân bổ tỷ lệ CLO
 * 3. Đánh giá Chuẩn đầu ra CLO & Bảng điểm Rubric 5 mức theo Quyết định 292/QĐ-HV của PTIT
 * 4. Luyện tập theo từng Chương & Dạng bài (kèm Doc Lý thuyết & Mẹo giải nhanh)
 * 5. Sổ tay câu sai (Mistakes Notebook) để ôn tập trọng tâm
 * 6. Quản lý Ngân hàng đề & Import/Export (File JSON, Dán Text/Markdown tự động phân tích, Thêm thủ công có Live KaTeX)
 * 7. 100% Pure Frontend - GitHub Pages Ready
 */

(function () {
  'use strict';

  const px = (name, size = 15, cls = '') =>
    (typeof window !== 'undefined' && typeof window.pxIcon === 'function')
      ? window.pxIcon(name, size, cls)
      : '';

  // ===================================================================
  // 1. SUBJECTS DEFINITION & METADATA (PTIT STANDARDS)
  // ===================================================================
  const SUBJECTS = {
    dai_so: {
      id: "dai_so",
      code: "BAS1201",
      name: "Đại số tuyến tính",
      fullName: "Đại số / Đại số tuyến tính (BAS1201)",
      icon: "ruler",
      desc: "Logic & Tập hợp, Ma trận, Định thức, Hệ PTTT, Không gian véc tơ, Ánh xạ tuyến tính & Dạng toàn phương",
      cloDesc: {
        CLO1: "Hiểu khái niệm cơ bản về logic, tập hợp, ánh xạ, số phức, ma trận, định thức, hệ PTTT, không gian véc tơ, ánh xạ tuyến tính và không gian Euclid.",
        CLO2: "Kỹ năng tính toán cơ bản: thực hiện phép toán ma trận; tính định thức, tìm hạng ma trận, giải hệ PTTT, tìm cơ sở và số chiều không gian véc tơ.",
        CLO3: "Kỹ năng phân tích, vận dụng nâng cao: xác định trị riêng, véc tơ riêng, chéo hóa ma trận, trực giao hóa Gram-Schmidt, đưa dạng toàn phương về chính tắc."
      },
      chapters: [
        { id: 1, name: "Logic mệnh đề, Tập hợp, Ánh xạ & Boole", short: "Chương 1" },
        { id: 2, name: "Không gian véc tơ", short: "Chương 2" },
        { id: 3, name: "Ma trận và Định thức", short: "Chương 3" },
        { id: 4, name: "Hệ phương trình tuyến tính", short: "Chương 4" },
        { id: 5, name: "Ánh xạ tuyến tính", short: "Chương 5" },
        { id: 6, name: "Không gian véc tơ Euclide, Dạng toàn phương", short: "Chương 6" }
      ]
    },
    giai_tich_1: {
      id: "giai_tich_1",
      code: "BAS1203",
      name: "Giải tích 1",
      fullName: "Giải tích 1 (BAS1203)",
      icon: "chart-up",
      desc: "Giới hạn dãy số, hàm số 1 biến, vi phân, tích phân & lý thuyết chuỗi",
      cloDesc: {
        CLO1: "Hiểu kiến thức nền tảng: giới hạn dãy số, tính liên tục hàm 1 biến, đạo hàm, vi phân, nguyên hàm, tích phân, chuỗi số & chuỗi lũy thừa.",
        CLO2: "Kỹ năng tính toán cơ bản: tính giới hạn, đạo hàm, vi phân, tích phân đổi biến/từng phần, bán kính hội tụ chuỗi lũy thừa.",
        CLO3: "Kỹ năng phân tích, vận dụng nâng cao: khảo sát hội tụ chuỗi số phức tạp, tích phân suy rộng có tham số, chuỗi Fourier, khai triển Taylor/Maclaurin."
      },
      chapters: [
        { id: 1, name: "Giới hạn của dãy số", short: "Chương 1" },
        { id: 2, name: "Hàm số 1 biến", short: "Chương 2" },
        { id: 3, name: "Đạo hàm và vi phân", short: "Chương 3" },
        { id: 4, name: "Phép tính tích phân", short: "Chương 4" },
        { id: 5, name: "Lý thuyết chuỗi", short: "Chương 5" }
      ]
    },
    giai_tich_2: {
      id: "giai_tich_2",
      code: "BAS1204",
      name: "Giải tích 2",
      fullName: "Giải tích 2 (BAS1204)",
      icon: "wave",
      desc: "Hàm nhiều biến, tích phân bội, tích phân đường, tích phân mặt & phương trình vi phân",
      cloDesc: {
        CLO1: "Hiểu kiến thức nền tảng: hàm nhiều biến (giới hạn, liên tục, đạo hàm riêng, vi phân), tích phân bội, tích phân đường, mặt và PTVP.",
        CLO2: "Kỹ năng tính toán cơ bản: tính đạo hàm riêng, vi phân, cực trị hàm nhiều biến; tính tích phân bội, đường, mặt, giải PTVP cấp 1, cấp 2 cơ bản.",
        CLO3: "Kỹ năng phân tích, vận dụng nâng cao: vận dụng tích phân bội, đường, mặt và PTVP giải bài toán hình học, vật lý, tham số phức tạp."
      },
      chapters: [
        { id: 1, name: "Phép tính vi phân hàm nhiều biến", short: "Chương 1" },
        { id: 2, name: "Tích phân bội", short: "Chương 2" },
        { id: 3, name: "Tích phân đường và Tích phân mặt", short: "Chương 3" },
        { id: 4, name: "Phương trình vi phân", short: "Chương 4" }
      ]
    },
    toan_roi_rac: {
      id: "toan_roi_rac",
      code: "INT1358",
      name: "Toán rời rạc",
      fullName: "Toán rời rạc (INT1358 / INT1359)",
      icon: "dice",
      desc: "Bài toán đếm, Đại số Boole, Thuật toán sinh & quay lui, Lý thuyết đồ thị & cây khung",
      cloDesc: {
        CLO1: "Hiểu kiến thức nền tảng: bài toán đếm, tồn tại, liệt kê, tối ưu tổ hợp, lý thuyết đồ thị (vô hướng, có hướng, cây) và đại số Boole.",
        CLO2: "Kỹ năng tính toán & mô phỏng thuật toán: phương pháp đếm, mô phỏng thuật toán sinh kế tiếp, quay lui, nhánh cận, BFS, DFS, cây khung, Dijkstra.",
        CLO3: "Kỹ năng phân tích & thiết kế giải thuật: phân tích, mô hình hóa bài toán thực tế tổ hợp/đồ thị; thiết kế và cài đặt thuật toán tối ưu."
      },
      chapters: [
        { id: 1, name: "Bài toán đếm & Đại số Boole", short: "Chương 1" },
        { id: 2, name: "Thuật toán sinh & Quay lui", short: "Chương 2" },
        { id: 3, name: "Lý thuyết đồ thị cơ bản", short: "Chương 3" },
        { id: 4, name: "Các thuật toán trên đồ thị", short: "Chương 4" }
      ]
    }
  };

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

  // --- Format Markdown & Clean LaTeX Math ---
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

  function getCloBadgeHtml(clo) {
    const c = clo || 'CLO2';
    if (c === 'CLO1') {
      return `<span class="clo-tag clo1" title="CLO1: Hiểu kiến thức nền tảng">${px('book-blue', 13)} CLO1: Nền tảng</span>`;
    } else if (c === 'CLO3') {
      return `<span class="clo-tag clo3" title="CLO3: Kỹ năng phân tích & vận dụng cao">${px('sparkles', 13)} CLO3: Vận dụng cao</span>`;
    }
    return `<span class="clo-tag clo2" title="CLO2: Kỹ năng tính toán cơ bản">${px('bolt', 13)} CLO2: Tính toán</span>`;
  }

  // --- Rubric 5 Mức theo Quyết định 292/QĐ-HV (Học viện CNBCVT) ---
  function evaluateCloRubric(scoreOutOf10) {
    const s = Math.max(0, Math.min(10, scoreOutOf10));
    if (s < 4.0) {
      return {
        level: 1,
        name: "Mức 1: Chưa đạt",
        desc: "Chưa đáp ứng yêu cầu tối thiểu của chuẩn đầu ra CLO",
        cssClass: "rubric-level-1",
        barColor: "var(--error-solid)",
        pass: false
      };
    } else if (s < 5.5) {
      return {
        level: 2,
        name: "Mức 2: Đạt mức thấp",
        desc: "Đáp ứng một phần yêu cầu chuẩn đầu ra (Ngưỡng tối thiểu qua môn)",
        cssClass: "rubric-level-2",
        barColor: "var(--warn-solid)",
        pass: true
      };
    } else if (s < 7.0) {
      return {
        level: 3,
        name: "Mức 3: Đạt yêu cầu",
        desc: "Đáp ứng đầy đủ yêu cầu chuẩn đầu ra (Mức chuẩn theo quy định PTIT)",
        cssClass: "rubric-level-3",
        barColor: "#0284c7",
        pass: true
      };
    } else if (s < 8.5) {
      return {
        level: 4,
        name: "Mức 4: Đạt tốt",
        desc: "Vận dụng tốt kiến thức, kỹ năng tính toán chuẩn xác, ít sai sót",
        cssClass: "rubric-level-4",
        barColor: "#10b981",
        pass: true
      };
    } else {
      return {
        level: 5,
        name: "Mức 5: Đạt xuất sắc",
        desc: "Vận dụng thành thạo, tư duy phân tích sâu sắc, vượt chuẩn học phần",
        cssClass: "rubric-level-5",
        barColor: "#8b5cf6",
        pass: true
      };
    }
  }

  // --- Data Provider & Custom Bank Persistence ---
  function getQuestionsBank() {
    let builtIn = [];
    if (typeof window !== 'undefined') {
      if (Array.isArray(window.QUESTIONS_BANK) && window.QUESTIONS_BANK.length > 0) builtIn = window.QUESTIONS_BANK;
      else if (Array.isArray(window.QUESTIONS_DATA) && window.QUESTIONS_DATA.length > 0) builtIn = window.QUESTIONS_DATA;
    }

    let custom = [];
    try {
      custom = JSON.parse(localStorage.getItem('toancc_custom_bank') || '[]');
    } catch (e) {
      custom = [];
    }

    const combined = [...builtIn];
    const existingIds = new Set(combined.map(q => q.id));

    custom.forEach(cq => {
      if (!existingIds.has(cq.id)) {
        combined.push(cq);
        existingIds.add(cq.id);
      }
    });

    // Ensure all items have standard fields
    combined.forEach(q => {
      if (!q.subjectId) q.subjectId = 'dai_so';
      if (!q.chapterId && q.topicId) q.chapterId = q.topicId;
      if (!q.clo) {
        q.clo = q.difficulty === 'easy' ? 'CLO1' : (q.difficulty === 'hard' ? 'CLO3' : 'CLO2');
      }
    });

    return combined;
  }

  // --- Question History & Smart Spaced Repetition ---
  function initQuestionHistory() {
    let hist = {};
    try {
      hist = JSON.parse(localStorage.getItem('toancc_question_history') || '{}');
    } catch (e) {
      hist = {};
    }
    return hist;
  }

  function getQuestionHistory(qid) {
    if (!state || !state.history) return null;
    return state.history[qid] || null;
  }

  function recordQuestionAttempt(qid, chosenKey, isCorrect) {
    if (!state.history) state.history = {};
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

  /**
   * Thuật toán xếp thứ tự ưu tiên câu hỏi (Priority Score)
   * Score thấp hơn = Ưu tiên được bốc vào đề trước!
   */
  function computeQuestionPriorityScore(q) {
    const h = getQuestionHistory(q.id);
    const now = Date.now();

    // Priority Tier 1: Câu chưa từng làm (New Questions) -> Ưu tiên số 1 (Score: 0 - 99)
    if (!h || !h.attempts) {
      return Math.random() * 99;
    }

    // Priority Tier 2: Câu đã từng làm nhưng lần gần nhất bị SAI -> Ưu tiên số 2 để ôn lại (Score: 7,000 - 10,000)
    if (!h.lastResult) {
      const wrongBonus = Math.min((h.wrongCount || 1) * 350, 3000);
      const hoursSince = Math.max(0, (now - (h.lastAttempt || 0)) / (1000 * 3600));
      const ageBonus = Math.min(hoursSince * 25, 2000);
      const cooldownPenalty = (hoursSince < 0.25) ? 2500 : 0;
      return 10000 - wrongBonus - ageBonus + cooldownPenalty + (Math.random() * 500);
    }

    // Priority Tier 3: Câu đã từng làm ĐÚNG -> Áp dụng Spaced Repetition (Score: 100,000+)
    const hoursSince = Math.max(0, (now - (h.lastAttempt || 0)) / (1000 * 3600));
    let recencyPenalty = 0;
    if (hoursSince < 1) {
      recencyPenalty = 1000000; // Vừa làm xong trong 1 giờ -> KHÔNG lặp lại
    } else if (hoursSince < 6) {
      recencyPenalty = 500000;
    } else if (hoursSince < 24) {
      recencyPenalty = 150000;
    } else if (hoursSince < 72) {
      recencyPenalty = 40000;
    }

    const spacedDecay = Math.min(hoursSince * 60, 50000);
    return 100000 + recencyPenalty - spacedDecay + (Math.random() * 1000);
  }

  function sampleSmartQuestionsFromChapter(chapterQuestions, count) {
    if (!Array.isArray(chapterQuestions) || chapterQuestions.length <= count) {
      return [...(chapterQuestions || [])];
    }

    // Phân nhóm theo dạng bài (subTypeId hoặc typeName)
    const subGroups = {};
    chapterQuestions.forEach(q => {
      const subKey = q.subTypeId || q.typeName || '1';
      if (!subGroups[subKey]) subGroups[subKey] = [];
      subGroups[subKey].push(q);
    });

    const subKeys = Object.keys(subGroups);
    shuffleArray(subKeys);

    const sortedSubGroups = {};
    subKeys.forEach(k => {
      sortedSubGroups[k] = [...subGroups[k]].sort((a, b) => {
        return computeQuestionPriorityScore(a) - computeQuestionPriorityScore(b);
      });
    });

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

    // Bù số lượng nếu round-robin chưa đủ
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

  // ===================================================================
  // APP STATE
  // ===================================================================
  const state = {
    activeSubject: localStorage.getItem('toancc_active_subject') || 'dai_so',
    allQuestions: getQuestionsBank(),
    history: initQuestionHistory(),
    currentTab: 'quiz', // 'quiz' | 'review' | 'typePractice' | 'practice' | 'mistakes' | 'bankManager' | 'solo'
    
    // Quiz State
    quiz: {
      started: false,
      questions: [],
      currentIndex: 0,
      answers: {}, // questionId -> 'A' | 'B' | 'C' | 'D'
      flags: new Set(),
      durationSeconds: 25 * 60,
      timeLeft: 25 * 60,
      timerInterval: null,
      submitted: false,
      score: 0,
      timeSpent: 0
    },

    // Review Filter State
    reviewFilter: 'all', // 'all' | 'wrong' | 'right' | 'unanswered' | 'clo1' | 'clo2' | 'clo3'

    // Practice State
    practice: {
      answers: JSON.parse(localStorage.getItem('practice_answers') || '{}'),
      bookmarks: new Set(JSON.parse(localStorage.getItem('practice_bookmarks') || '[]')),
      topicFilter: 'all',
      originFilter: 'all',
      difficultyFilter: 'all',
      statusFilter: 'all',
      searchQuery: '',
      viewMode: 'focus',
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

  // Ensure active subject exists
  if (!SUBJECTS[state.activeSubject]) {
    state.activeSubject = 'dai_so';
  }

  // --- DOM Elements ---
  const el = {
    themeToggle: document.getElementById('themeToggle'),
    brandTotalBadge: document.getElementById('brandTotalBadge'),
    subjectSwitcherContainer: document.querySelector('.subject-switcher-container'),
    subjectChipsGrid: document.getElementById('subjectChipsGrid'),
    subjectCloInfoBox: document.getElementById('subjectCloInfoBox'),

    // Nav Tabs
    tabQuiz: document.getElementById('tabQuiz'),
    tabTypePractice: document.getElementById('tabTypePractice'),
    tabPractice: document.getElementById('tabPractice'),
    tabMistakes: document.getElementById('tabMistakes'),
    tabBankManager: document.getElementById('tabBankManager'),
    tabSolo: document.getElementById('tabSolo'),

    // Views
    quizView: document.getElementById('quizView'),
    reviewView: document.getElementById('reviewView'),
    typePracticeView: document.getElementById('typePracticeView'),
    practiceView: document.getElementById('practiceView'),
    mistakesView: document.getElementById('mistakesView'),
    bankManagerView: document.getElementById('bankManagerView'),
    soloView: document.getElementById('soloView'),
    modalContainer: document.getElementById('modalContainer'),

    // Quiz Start Screen Elements
    quizStartScreen: document.getElementById('quizStartScreen'),
    startExamBadge: document.getElementById('startExamBadge'),
    startExamTitle: document.getElementById('startExamTitle'),
    startExamSubtitle: document.getElementById('startExamSubtitle'),
    matrixChaptersGrid: document.getElementById('matrixChaptersGrid'),
    btnStartExam: document.getElementById('btnStartExam'),

    // Custom slider elements
    customRangeWrapper: document.getElementById('customRangeWrapper'),
    sliderQuestionCount: document.getElementById('sliderQuestionCount'),
    sliderDuration: document.getElementById('sliderDuration'),
    sliderCountVal: document.getElementById('sliderCountVal'),
    sliderDurationVal: document.getElementById('sliderDurationVal'),

    // Quiz Active Elements
    quizActiveScreen: document.getElementById('quizActiveScreen'),
    quizTimer: document.getElementById('quizTimer'),
    quizProgressText: document.getElementById('quizProgressText'),
    quizProgressBarFill: document.getElementById('quizProgressBarFill'),
    quizNavGrid: document.getElementById('quizNavGrid'),
    quizQuestionContainer: document.getElementById('quizQuestionContainer'),
    btnQuizPrev: document.getElementById('btnQuizPrev'),
    btnQuizNext: document.getElementById('btnQuizNext'),
    btnQuizSubmit: document.getElementById('btnQuizSubmit'),
    btnQuizFlag: document.getElementById('btnQuizFlag'),
    btnQuizCancel: document.getElementById('btnQuizCancel'),

    // Review Elements
    reviewScoreBadge: document.getElementById('reviewScoreBadge'),
    reviewScoreValue: document.getElementById('reviewScoreValue'),
    reviewScoreSub: document.getElementById('reviewScoreSub'),
    btnRetryTest: document.getElementById('btnRetryTest'),
    btnNewTest: document.getElementById('btnNewTest'),
    cloAssessmentContainer: document.getElementById('cloAssessmentContainer'),
    reviewQuestionsList: document.getElementById('reviewQuestionsList'),
    reviewFilterChips: document.querySelectorAll('.review-filter-chip'),

    // Type Practice Elements
    tpChapterButtons: document.getElementById('tpChapterButtons'),
    tpSubtypeButtons: document.getElementById('tpSubtypeButtons'),
    tpTheoryDocWrapper: document.getElementById('tpTheoryDocWrapper'),
    tpQuestionsBanner: document.getElementById('tpQuestionsBanner'),
    tpQuestionsList: document.getElementById('tpQuestionsList'),

    // Practice Elements
    practiceTopicSelect: document.getElementById('practiceTopicSelect'),
    practiceOriginSelect: document.getElementById('practiceOriginSelect'),
    practiceDifficultySelect: document.getElementById('practiceDifficultySelect'),
    practiceStatusSelect: document.getElementById('practiceStatusSelect'),
    practiceSearchInput: document.getElementById('practiceSearchInput'),
    btnToggleViewMode: document.getElementById('btnToggleViewMode'),
    btnResetPractice: document.getElementById('btnResetPractice'),
    practiceStatsText: document.getElementById('practiceStatsText'),
    practiceProgressFill: document.getElementById('practiceProgressFill'),
    practiceContentArea: document.getElementById('practiceContentArea')
  };

  // --- Theme Management ---
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme_mode', theme);
    if (el.themeToggle) {
      el.themeToggle.innerHTML = theme === 'dark' ? px('sun', 18) : px('moon', 18);
    }
  }

  // --- Tab Management ---
  function switchTab(tab) {
    state.currentTab = tab;

    el.tabQuiz.classList.toggle('active', tab === 'quiz' || tab === 'review');
    if (el.tabTypePractice) el.tabTypePractice.classList.toggle('active', tab === 'typePractice');
    el.tabPractice.classList.toggle('active', tab === 'practice');
    if (el.tabMistakes) el.tabMistakes.classList.toggle('active', tab === 'mistakes');
    if (el.tabBankManager) el.tabBankManager.classList.toggle('active', tab === 'bankManager');
    if (el.tabSolo) el.tabSolo.classList.toggle('active', tab === 'solo');

    el.quizView.style.display = tab === 'quiz' ? 'block' : 'none';
    el.reviewView.style.display = tab === 'review' ? 'block' : 'none';
    if (el.typePracticeView) el.typePracticeView.style.display = tab === 'typePractice' ? 'block' : 'none';
    el.practiceView.style.display = tab === 'practice' ? 'block' : 'none';
    if (el.mistakesView) el.mistakesView.style.display = tab === 'mistakes' ? 'block' : 'none';
    if (el.bankManagerView) el.bankManagerView.style.display = tab === 'bankManager' ? 'block' : 'none';
    if (el.soloView) el.soloView.style.display = tab === 'solo' ? 'block' : 'none';

    if (tab === 'quiz') {
      if (!state.quiz.started) {
        if (el.subjectSwitcherContainer) el.subjectSwitcherContainer.style.display = 'block';
        el.quizStartScreen.style.display = 'block';
        el.quizActiveScreen.style.display = 'none';
        updateMatrixSummary();
      } else {
        if (el.subjectSwitcherContainer) el.subjectSwitcherContainer.style.display = 'none';
        el.quizStartScreen.style.display = 'none';
        el.quizActiveScreen.style.display = 'block';
        renderQuizNav();
        renderQuizQuestion();
      }
    } else if (tab === 'review') {
      if (el.subjectSwitcherContainer) el.subjectSwitcherContainer.style.display = 'none';
      renderReviewView();
    } else if (tab === 'typePractice') {
      if (el.subjectSwitcherContainer) el.subjectSwitcherContainer.style.display = 'block';
      renderTypePracticeView();
    } else if (tab === 'practice') {
      if (el.subjectSwitcherContainer) el.subjectSwitcherContainer.style.display = 'block';
      renderPracticeView();
    } else if (tab === 'mistakes') {
      if (el.subjectSwitcherContainer) el.subjectSwitcherContainer.style.display = 'block';
      renderMistakesView();
    } else if (tab === 'bankManager') {
      if (el.subjectSwitcherContainer) el.subjectSwitcherContainer.style.display = 'block';
      renderBankManagerView();
    } else if (tab === 'solo') {
      if (el.subjectSwitcherContainer) el.subjectSwitcherContainer.style.display = 'block';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  window.switchAppTab = switchTab;

  // ===================================================================
  // 2. SUBJECT SWITCHER LOGIC
  // ===================================================================
  function renderSubjectSwitcher() {
    if (!el.subjectChipsGrid) return;

    const currentSubKey = state.activeSubject;
    const allQuestions = state.allQuestions || [];

    // Calculate count per subject
    const counts = {};
    Object.keys(SUBJECTS).forEach(k => { counts[k] = 0; });
    allQuestions.forEach(q => {
      const s = q.subjectId || 'dai_so';
      if (counts[s] !== undefined) counts[s]++;
    });

    el.subjectChipsGrid.innerHTML = Object.keys(SUBJECTS).map(k => {
      const sub = SUBJECTS[k];
      const isActive = (k === currentSubKey);
      return `
        <div class="subject-chip ${isActive ? 'active' : ''}" data-subject="${sub.id}">
          <div class="subject-chip-icon">${px(sub.icon, 24)}</div>
          <div class="subject-chip-info">
            <div class="subject-chip-name">${escapeHtml(sub.name)}</div>
            <div class="subject-chip-meta">
              <span class="subject-chip-code">${sub.code}</span>
              <span>•</span>
              <span class="subject-chip-count">${counts[k] || 0} câu</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach click events
    el.subjectChipsGrid.querySelectorAll('.subject-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const targetSub = chip.dataset.subject;
        if (targetSub && targetSub !== state.activeSubject) {
          switchSubject(targetSub);
        }
      });
    });

    // Render CLO Description Box
    renderSubjectCloBanner();

    // Update global badge
    if (el.brandTotalBadge) {
      el.brandTotalBadge.textContent = `${allQuestions.length} Câu (Chuẩn CLO PTIT)`;
    }
  }

  function renderSubjectCloBanner() {
    if (!el.subjectCloInfoBox) return;
    const sub = SUBJECTS[state.activeSubject] || SUBJECTS.dai_so;

    el.subjectCloInfoBox.innerHTML = `
      <div class="clo-info-title">
        <span>${px('clipboard', 15)}</span> <strong>Chuẩn đầu ra (CLO) môn ${escapeHtml(sub.name)} (${sub.code}) theo Đề cương PTIT & Quyết định 292/QĐ-HV:</strong>
      </div>
      <div class="clo-info-list">
        <div class="clo-info-item">
          <div><span class="clo-tag clo1">CLO1</span></div>
          <div><strong>Hiểu kiến thức nền tảng:</strong> ${escapeHtml(sub.cloDesc.CLO1)}</div>
        </div>
        <div class="clo-info-item">
          <div><span class="clo-tag clo2">CLO2</span></div>
          <div><strong>Kỹ năng tính toán cơ bản:</strong> ${escapeHtml(sub.cloDesc.CLO2)}</div>
        </div>
        <div class="clo-info-item">
          <div><span class="clo-tag clo3">CLO3</span></div>
          <div><strong>Vận dụng nâng cao:</strong> ${escapeHtml(sub.cloDesc.CLO3)}</div>
        </div>
      </div>
    `;
    renderMath(el.subjectCloInfoBox);
  }

  function switchSubject(subjectId) {
    if (!SUBJECTS[subjectId]) return;
    state.activeSubject = subjectId;
    localStorage.setItem('toancc_active_subject', subjectId);

    // Update UI headers
    const sub = SUBJECTS[subjectId];
    if (el.startExamBadge) {
      el.startExamBadge.innerHTML = `${px(sub.icon, 13)} ${escapeHtml(sub.fullName)} • Chuẩn CLO PTIT`;
    }
    if (el.startExamTitle) {
      el.startExamTitle.textContent = `Thi Thử ${sub.name} PTIT`;
    }

    renderSubjectSwitcher();
    renderSubjectChapters();
    updateMatrixSummary();

    // Reset type practice to chapter 1 of new subject
    state.typePractice.chapterId = 1;
    state.typePractice.subTypeId = 1;

    // Reset practice filters
    state.practice.currentIndex = 0;
    state.practice.topicFilter = 'all';

    if (state.currentTab === 'typePractice') {
      renderTypePracticeView();
    } else if (state.currentTab === 'practice') {
      renderPracticeView();
    } else if (state.currentTab === 'mistakes') {
      renderMistakesView();
    } else if (state.currentTab === 'bankManager') {
      renderBankManagerView();
    }

    showToast(`Đã chuyển sang môn: ${sub.fullName}`);
  }

  function renderSubjectChapters() {
    if (!el.matrixChaptersGrid) return;
    const sub = SUBJECTS[state.activeSubject] || SUBJECTS.dai_so;
    const subjectQuestions = (state.allQuestions || []).filter(q => (q.subjectId || 'dai_so') === state.activeSubject);

    el.matrixChaptersGrid.innerHTML = sub.chapters.map(ch => {
      const chQuestions = subjectQuestions.filter(q => (q.chapterId || q.topicId) === ch.id);
      const clo1Count = chQuestions.filter(q => q.clo === 'CLO1').length;
      const clo2Count = chQuestions.filter(q => q.clo === 'CLO2').length;
      const clo3Count = chQuestions.filter(q => q.clo === 'CLO3').length;

      return `
        <label class="chapter-check-card active" data-ch="${ch.id}">
          <input type="checkbox" class="chapter-cb" name="quizChapter" value="${ch.id}" checked>
          <div class="ch-card-body">
            <div class="ch-top">
              <span class="ch-badge">${ch.short || ('Chương ' + ch.id)}</span>
              <span class="ch-tag-count">${chQuestions.length} câu</span>
            </div>
            <div class="ch-name">${escapeHtml(ch.name)}</div>
            <div class="ch-sub">${clo1Count} câu CLO1 • ${clo2Count} câu CLO2 • ${clo3Count} câu CLO3</div>
          </div>
        </label>
      `;
    }).join('');

    // Reattach listeners to new checkboxes
    el.matrixChaptersGrid.querySelectorAll('input[name="quizChapter"]').forEach(cb => {
      cb.addEventListener('change', updateMatrixSummary);
    });
  }

  // ===================================================================
  // 3. MATRIX CONFIGURATION & LIVE SUMMARY
  // ===================================================================
  function updateMatrixSummary() {
    const summaryLiveEl = document.getElementById('matrixLiveSummary');
    if (!summaryLiveEl) return;

    if (!state.allQuestions || state.allQuestions.length === 0) {
      state.allQuestions = getQuestionsBank();
    }

    const sub = SUBJECTS[state.activeSubject] || SUBJECTS.dai_so;
    const checkedChapterEls = document.querySelectorAll('input[name="quizChapter"]:checked');
    const selectedChapters = Array.from(checkedChapterEls).map(el => parseInt(el.value, 10));

    // Update active class on chapter cards
    document.querySelectorAll('.chapter-check-card').forEach(card => {
      const chVal = parseInt(card.dataset.ch, 10);
      card.classList.toggle('active', selectedChapters.includes(chVal));
    });

    // Check size selection
    const countRadio = document.querySelector('input[name="quizQuestionCount"]:checked');
    const isCustom = countRadio && countRadio.value === 'custom';
    if (el.customRangeWrapper) {
      el.customRangeWrapper.style.display = isCustom ? 'block' : 'none';
    }

    let reqCount = 20;
    let reqDur = 25;

    if (isCustom) {
      reqCount = parseInt(el.sliderQuestionCount ? el.sliderQuestionCount.value : '25', 10) || 25;
      reqDur = parseInt(el.sliderDuration ? el.sliderDuration.value : '30', 10) || 30;
      if (el.sliderCountVal) el.sliderCountVal.textContent = `${reqCount} câu`;
      if (el.sliderDurationVal) el.sliderDurationVal.textContent = `${reqDur} phút`;
    } else if (countRadio) {
      reqCount = parseInt(countRadio.value, 10) || 20;
      const durVal = (countRadio.dataset && countRadio.dataset.duration) || '25';
      reqDur = parseInt(durVal, 10) || 25;
    }

    // Update active class on size pill cards & quick-select chapter pills
    document.querySelectorAll('.size-pill-card').forEach(card => {
      const r = card.querySelector('input[type="radio"]');
      card.classList.toggle('active', !!(r && r.checked));
    });
    const btnAll = document.getElementById('btnSelectAllChapters');
    const btnHalf = document.getElementById('btnSelectHalfChapters');
    const btnClear = document.getElementById('btnClearChapters');
    const halfCount = Math.ceil(sub.chapters.length / 2);
    if (btnAll) btnAll.classList.toggle('active', selectedChapters.length === sub.chapters.length);
    if (btnClear) btnClear.classList.toggle('active', selectedChapters.length === 0);
    if (btnHalf) btnHalf.classList.toggle('active', selectedChapters.length === halfCount && selectedChapters.every(c => c <= halfCount));

    // Source selection
    const sourceRadio = document.querySelector('input[name="quizSourceOption"]:checked');
    const source = sourceRadio ? sourceRadio.value : 'all';
    document.querySelectorAll('.source-radio-card').forEach(card => {
      const r = card.querySelector('input[type="radio"]');
      card.classList.toggle('active', r && r.checked);
    });

    // Difficulty / CLO preset
    const diffRadio = document.querySelector('input[name="quizDifficulty"]:checked');
    const selectedDifficulty = diffRadio ? diffRadio.value : 'medium';
    document.querySelectorAll('.diff-card').forEach(card => {
      const r = card.querySelector('input[type="radio"]');
      card.classList.toggle('active', r && r.checked);
    });

    // Filter available pool for active subject & selected chapters
    const pool = (state.allQuestions || []).filter(q => {
      if ((q.subjectId || 'dai_so') !== state.activeSubject) return false;
      const ch = q.chapterId || q.topicId;
      if (!selectedChapters.includes(ch)) return false;
      if (source === 'original') return q.isOriginal === true;
      if (source === 'extra') return q.isOriginal === false;
      return true;
    });

    const chText = selectedChapters.length === sub.chapters.length
      ? `Tất cả ${sub.chapters.length} chương môn ${sub.name}`
      : selectedChapters.length === 0
        ? `${px('warn', 13)} Chưa chọn chương nào`
        : `Chương ${selectedChapters.sort((a,b)=>a-b).join(', ')} (${selectedChapters.length}/${sub.chapters.length} chương)`;

    const actualCount = Math.min(reqCount, pool.length);
    const examText = `${actualCount} câu hỏi • ${reqDur}:00 phút`;

    // Presets theo chuẩn PTIT:
    const CLO_RATIOS = {
      medium: { clo1: 0.40, clo2: 0.40, clo3: 0.20, name: 'Chuẩn PTIT (40% CLO1 • 40% CLO2 • 20% CLO3)' },
      easy:   { clo1: 0.50, clo2: 0.40, clo3: 0.10, name: 'Đề Nền tảng (50% CLO1 • 40% CLO2 • 10% CLO3)' },
      hard:   { clo1: 0.25, clo2: 0.45, clo3: 0.30, name: 'Đề Khó (25% CLO1 • 45% CLO2 • 30% CLO3)' }
    };
    const ratios = CLO_RATIOS[selectedDifficulty] || CLO_RATIOS.medium;
    const expClo1 = Math.round(actualCount * ratios.clo1);
    const expClo2 = Math.round(actualCount * ratios.clo2);
    const expClo3 = actualCount - expClo1 - expClo2;

    const summaryDifficultyText = document.getElementById('summaryDifficultyText');
    if (summaryDifficultyText) {
      summaryDifficultyText.textContent = `${expClo1} câu CLO1 • ${expClo2} câu CLO2 • ${expClo3} câu CLO3`;
    }

    // Smart Pool Stats
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
        summaryDistributionText.innerHTML = `${px('sparkles', 14)} <strong>100% câu mới (${newInPool} câu chưa làm)</strong>`;
      } else {
        const takeNew = newInPool;
        const takeWrong = Math.min(wrongInPool, actualCount - takeNew);
        const takeOld = Math.max(0, actualCount - takeNew - takeWrong);
        summaryDistributionText.innerHTML = `${px('sparkles', 14)} <strong>${takeNew} câu mới</strong> + ${px('target', 14)} <strong>${takeWrong} câu sai</strong> + ${px('refresh', 14)} <strong>${takeOld} câu ôn lại</strong>`;
      }
    }

    const summaryChaptersText = document.getElementById('summaryChaptersText');
    const summarySourceText = document.getElementById('summarySourceText');
    const summaryExamText = document.getElementById('summaryExamText');

    if (summaryChaptersText) summaryChaptersText.innerHTML = chText;
    if (summarySourceText) summarySourceText.textContent = `${pool.length} câu khả dụng (${newInPool} mới • ${wrongInPool} cần ôn • ${doneInPool} đã làm)`;
    if (summaryExamText) summaryExamText.textContent = examText;

    const btnStart = document.getElementById('btnStartExam');
    if (btnStart) {
      if (selectedChapters.length === 0) {
        btnStart.innerHTML = `${px('warn', 15)} Vui lòng chọn ít nhất 1 chương`;
        btnStart.disabled = true;
      } else if (pool.length === 0) {
        btnStart.innerHTML = `${px('warn', 15)} Không có câu hỏi phù hợp`;
        btnStart.disabled = true;
      } else {
        btnStart.innerHTML = `${px('bolt', 15)} Bắt đầu làm bài thi (${actualCount} câu • ${reqDur} phút)`;
        btnStart.disabled = false;
      }
    }
  }

  function initMatrixUI() {
    renderSubjectSwitcher();
    renderSubjectChapters();

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
    document.querySelectorAll('input[name="quizDifficulty"]').forEach(r => {
      r.addEventListener('change', updateMatrixSummary);
    });

    // Custom slider listeners
    if (el.sliderQuestionCount) {
      el.sliderQuestionCount.addEventListener('input', updateMatrixSummary);
    }
    if (el.sliderDuration) {
      el.sliderDuration.addEventListener('input', updateMatrixSummary);
    }

    document.querySelectorAll('.diff-card').forEach(card => {
      card.addEventListener('click', () => {
        const r = card.querySelector('input[type="radio"]');
        if (r && !r.checked) {
          r.checked = true;
          updateMatrixSummary();
        }
      });
    });

    // Quick selection pills
    const btnAll = document.getElementById('btnSelectAllChapters');
    const btnHalf = document.getElementById('btnSelectHalfChapters');
    const btnClear = document.getElementById('btnClearChapters');

    if (btnAll) {
      btnAll.addEventListener('click', () => {
        document.querySelectorAll('input[name="quizChapter"]').forEach(cb => { cb.checked = true; });
        updateMatrixSummary();
      });
    }

    if (btnHalf) {
      btnHalf.addEventListener('click', () => {
        const sub = SUBJECTS[state.activeSubject] || SUBJECTS.dai_so;
        const halfCount = Math.ceil(sub.chapters.length / 2);
        document.querySelectorAll('input[name="quizChapter"]').forEach(cb => {
          const val = parseInt(cb.value, 10);
          cb.checked = (val <= halfCount);
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

  // ===================================================================
  // 4. SMART EXAM SAMPLING & CREATION
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

    // 1. Get Selected Chapters
    const checkedChapterEls = document.querySelectorAll('input[name="quizChapter"]:checked');
    const selectedChapters = Array.from(checkedChapterEls).map(el => parseInt(el.value, 10));
    if (selectedChapters.length === 0) {
      alert("Vui lòng chọn ít nhất một chương để tạo đề thi!");
      return;
    }

    // 2. Get Selected Source
    const sourceRadio = document.querySelector('input[name="quizSourceOption"]:checked');
    const source = sourceRadio ? sourceRadio.value : 'all';

    // 3. Question Count & Duration (20 - 40 questions, 20 - 60 minutes)
    const countRadio = document.querySelector('input[name="quizQuestionCount"]:checked');
    const isCustom = countRadio && countRadio.value === 'custom';
    let requestedCount = 20;
    let requestedDuration = 25;

    if (isCustom) {
      requestedCount = parseInt(el.sliderQuestionCount ? el.sliderQuestionCount.value : '25', 10) || 25;
      requestedDuration = parseInt(el.sliderDuration ? el.sliderDuration.value : '30', 10) || 30;
    } else if (countRadio) {
      requestedCount = parseInt(countRadio.value, 10) || 20;
      const durVal = (countRadio.dataset && countRadio.dataset.duration) || '25';
      requestedDuration = parseInt(durVal, 10) || 25;
    }

    requestedCount = Math.max(20, Math.min(40, requestedCount));
    requestedDuration = Math.max(20, Math.min(60, requestedDuration));

    // 4. Get Selected Difficulty / CLO Preset
    const diffRadio = document.querySelector('input[name="quizDifficulty"]:checked');
    const selectedDifficulty = diffRadio ? diffRadio.value : 'medium';

    // 5. Filter Available Pool for active subject
    const pool = state.allQuestions.filter(q => {
      if ((q.subjectId || 'dai_so') !== state.activeSubject) return false;
      const ch = q.chapterId || q.topicId;
      if (!selectedChapters.includes(ch)) return false;
      if (source === 'original') return q.isOriginal === true;
      if (source === 'extra') return q.isOriginal === false;
      return true;
    });

    if (pool.length === 0) {
      alert("Không tìm thấy câu hỏi nào phù hợp với ma trận đã chọn. Vui lòng chọn thêm chương hoặc đổi nguồn câu hỏi!");
      return;
    }

    // 6. Target CLO Distribution
    const targetTotal = Math.min(requestedCount, pool.length);
    const CLO_RATIOS = {
      medium: { clo1: 0.40, clo2: 0.40, clo3: 0.20 },
      easy:   { clo1: 0.50, clo2: 0.40, clo3: 0.10 },
      hard:   { clo1: 0.25, clo2: 0.45, clo3: 0.30 }
    };
    const ratios = CLO_RATIOS[selectedDifficulty] || CLO_RATIOS.medium;

    let targetClo1 = Math.round(targetTotal * ratios.clo1);
    let targetClo2 = Math.round(targetTotal * ratios.clo2);
    let targetClo3 = targetTotal - targetClo1 - targetClo2;

    // Sub-pools by CLO
    const poolClo1 = pool.filter(q => q.clo === 'CLO1');
    const poolClo2 = pool.filter(q => q.clo === 'CLO2');
    const poolClo3 = pool.filter(q => q.clo === 'CLO3');

    // Dynamic redistribution if a CLO bucket has fewer available questions (Limited Bank Fallback)
    if (poolClo1.length < targetClo1) {
      const def = targetClo1 - poolClo1.length;
      targetClo1 = poolClo1.length;
      targetClo2 += Math.round(def * 0.7);
      targetClo3 = targetTotal - targetClo1 - targetClo2;
    }
    if (poolClo3.length < targetClo3) {
      const def = targetClo3 - poolClo3.length;
      targetClo3 = poolClo3.length;
      targetClo2 += def;
    }
    if (poolClo2.length < targetClo2) {
      const def = targetClo2 - poolClo2.length;
      targetClo2 = poolClo2.length;
      targetClo1 = targetTotal - targetClo2 - targetClo3;
    }

    // Helper: sample questions for a CLO tier distributed across chapters with priority score
    function sampleCloTierQuestions(tierPool, countNeeded, chapters, chosenSet) {
      if (countNeeded <= 0 || !tierPool || tierPool.length === 0) return [];
      const available = tierPool.filter(q => !chosenSet.has(q.id));
      if (available.length <= countNeeded) {
        available.forEach(q => chosenSet.add(q.id));
        return available;
      }

      const byCh = {};
      chapters.forEach(ch => {
        byCh[ch] = available.filter(q => (q.chapterId || q.topicId) === ch);
      });

      const base = Math.floor(countNeeded / chapters.length);
      let rem = countNeeded % chapters.length;
      const tierSelected = [];

      chapters.forEach(ch => {
        const take = base + (rem > 0 ? 1 : 0);
        if (rem > 0) rem--;
        const chQuestions = byCh[ch] || [];
        const fromCh = sampleSmartQuestionsFromChapter(chQuestions, Math.min(take, chQuestions.length));
        fromCh.forEach(q => {
          if (!chosenSet.has(q.id)) {
            chosenSet.add(q.id);
            tierSelected.push(q);
          }
        });
      });

      if (tierSelected.length < countNeeded) {
        const leftovers = available.filter(q => !chosenSet.has(q.id));
        leftovers.sort((a, b) => computeQuestionPriorityScore(a) - computeQuestionPriorityScore(b));
        const needed = countNeeded - tierSelected.length;
        leftovers.slice(0, needed).forEach(q => {
          chosenSet.add(q.id);
          tierSelected.push(q);
        });
      }

      return tierSelected;
    }

    const chosenIds = new Set();
    const selected = [];

    // Sample from each CLO bucket
    const pickedClo1 = sampleCloTierQuestions(poolClo1, targetClo1, selectedChapters, chosenIds);
    selected.push(...pickedClo1);

    const pickedClo2 = sampleCloTierQuestions(poolClo2, targetClo2, selectedChapters, chosenIds);
    selected.push(...pickedClo2);

    const pickedClo3 = sampleCloTierQuestions(poolClo3, targetClo3, selectedChapters, chosenIds);
    selected.push(...pickedClo3);

    // If still below targetTotal, fill remaining from pool with priority
    if (selected.length < targetTotal) {
      const leftovers = pool.filter(q => !chosenIds.has(q.id));
      leftovers.sort((a, b) => computeQuestionPriorityScore(a) - computeQuestionPriorityScore(b));
      const needed = targetTotal - selected.length;
      leftovers.slice(0, needed).forEach(q => {
        chosenIds.add(q.id);
        selected.push(q);
      });
    }

    // Interweave questions naturally
    shuffleArray(selected);
    state.quiz.questions = (selected || []).filter(q => q && q.id);

    if (state.quiz.questions.length === 0) {
      alert("Không thể khởi tạo danh sách câu hỏi thi. Vui lòng chọn lại ma trận!");
      return;
    }

    // Reset Quiz State
    state.quiz.started = true;
    state.quiz.submitted = false;
    state.quiz.currentIndex = 0;
    state.quiz.answers = {};
    state.quiz.flags = new Set();
    state.quiz.durationSeconds = requestedDuration * 60;
    state.quiz.timeLeft = state.quiz.durationSeconds;
    state.quiz.score = 0;
    state.quiz.timeSpent = 0;

    // Switch view
    if (el.subjectSwitcherContainer) el.subjectSwitcherContainer.style.display = 'none';
    el.quizStartScreen.style.display = 'none';
    el.quizActiveScreen.style.display = 'block';

    startQuizTimer();
    renderQuizNav();
    renderQuizQuestion();

    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast(`Đã tạo đề thi ${state.quiz.questions.length} câu • ${requestedDuration} phút thành công!`);
  }

  // ===================================================================
  // 5. QUIZ ACTIVE RUNNER & TIMER
  // ===================================================================
  function startQuizTimer() {
    clearInterval(state.quiz.timerInterval);
    updateTimerDisplay();

    state.quiz.timerInterval = setInterval(() => {
      state.quiz.timeLeft--;
      state.quiz.timeSpent++;
      updateTimerDisplay();

      if (state.quiz.timeLeft <= 0) {
        clearInterval(state.quiz.timerInterval);
        submitQuiz(true); // Auto submit on timeout
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const mins = Math.floor(state.quiz.timeLeft / 60);
    const secs = state.quiz.timeLeft % 60;
    const str = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    if (el.quizTimer) el.quizTimer.textContent = str;

    const timerBox = document.querySelector('.timer-box');
    if (timerBox) {
      if (state.quiz.timeLeft < 60) {
        timerBox.style.color = 'var(--error-solid)';
        timerBox.style.borderColor = 'var(--error-solid)';
      } else if (state.quiz.timeLeft < 300) {
        timerBox.style.color = 'var(--warn-solid)';
        timerBox.style.borderColor = 'var(--warn-solid)';
      } else {
        timerBox.style.color = '';
        timerBox.style.borderColor = '';
      }
    }
  }

  function renderQuizNav() {
    if (!el.quizNavGrid) return;
    el.quizNavGrid.innerHTML = '';

    const questions = state.quiz.questions;
    const total = questions.length;
    let answeredCount = 0;

    questions.forEach((q, idx) => {
      const isAnswered = state.quiz.answers[q.id] !== undefined;
      const isFlagged = state.quiz.flags.has(q.id);
      const isCurrent = idx === state.quiz.currentIndex;

      if (isAnswered) answeredCount++;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'nav-dot';
      if (isAnswered) btn.classList.add('answered');
      if (isFlagged) btn.classList.add('flagged');
      if (isCurrent) btn.classList.add('current');

      btn.textContent = idx + 1;
      btn.title = `Câu ${idx + 1} (${q.clo || 'CLO2'})${isFlagged ? ' • Đã đánh dấu xem lại' : ''}`;

      btn.addEventListener('click', () => {
        state.quiz.currentIndex = idx;
        renderQuizNav();
        renderQuizQuestion();
      });

      el.quizNavGrid.appendChild(btn);
    });

    if (el.quizProgressText) {
      el.quizProgressText.textContent = `Đã làm ${answeredCount}/${total} câu`;
    }
    if (el.quizProgressBarFill) {
      const pct = total > 0 ? Math.round((answeredCount / total) * 100) : 0;
      el.quizProgressBarFill.style.width = `${pct}%`;
    }

    if (el.btnQuizFlag) {
      const currentQ = questions[state.quiz.currentIndex];
      const isFlagged = currentQ && state.quiz.flags.has(currentQ.id);
      el.btnQuizFlag.classList.toggle('active', isFlagged);
      el.btnQuizFlag.innerHTML = isFlagged
        ? `${px('star-full', 14)} Bỏ đánh dấu <span class="kbd-hint">F</span>`
        : `${px('star-empty', 14)} Đánh dấu xem lại <span class="kbd-hint">F</span>`;
    }

    if (el.btnQuizPrev) el.btnQuizPrev.disabled = state.quiz.currentIndex === 0;
    if (el.btnQuizNext) {
      if (state.quiz.currentIndex === total - 1) {
        el.btnQuizNext.innerHTML = `Hoàn thành đề thi ${px('check', 14)}`;
      } else {
        el.btnQuizNext.innerHTML = 'Câu sau <span class="kbd-hint">→</span>';
      }
    }
  }

  function renderQuizQuestion() {
    const q = state.quiz.questions[state.quiz.currentIndex];
    if (!q || !el.quizQuestionContainer) return;

    const sub = SUBJECTS[q.subjectId || state.activeSubject] || SUBJECTS.dai_so;
    const currentAns = state.quiz.answers[q.id];
    const diffBadge = getDifficultyBadgeHtml(q.difficulty);
    const cloBadge = getCloBadgeHtml(q.clo);

    let html = `
      <div class="q-meta-row" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:12px;">
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
          <span style="font-weight:700; font-size:1.05rem;">Câu ${state.quiz.currentIndex + 1} / ${state.quiz.questions.length}</span>
          ${cloBadge}
          ${diffBadge}
        </div>
        <span style="font-size:0.82rem; color:var(--text-muted);">${escapeHtml(sub.name)} • ${escapeHtml(q.chapterName || 'Chương')}</span>
      </div>

      <div class="q-text" style="font-size:1.05rem; line-height:1.6; margin-bottom:18px;">
        ${formatContent(q.question)}
      </div>

      <div class="options-grid">
    `;

    q.options.forEach(opt => {
      const isSelected = (currentAns === opt.key);
      html += `
        <button type="button" class="option-btn ${isSelected ? 'selected' : ''}" data-key="${opt.key}">
          <span class="opt-badge">${opt.key}</span>
          <span class="opt-text">${formatContent(opt.text)}</span>
        </button>
      `;
    });

    html += `</div>`;

    el.quizQuestionContainer.innerHTML = html;

    // Attach option listeners
    el.quizQuestionContainer.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        selectQuizOption(btn.dataset.key);
      });
    });

    renderMath(el.quizQuestionContainer);
  }

  function selectQuizOption(key) {
    const q = state.quiz.questions[state.quiz.currentIndex];
    if (!q) return;

    state.quiz.answers[q.id] = key;
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
  }

  function promptSubmitQuiz() {
    const total = state.quiz.questions.length;
    const answered = Object.keys(state.quiz.answers).length;
    const unanswered = total - answered;

    let msg = `Bạn đã hoàn thành ${answered}/${total} câu hỏi.`;
    if (unanswered > 0) {
      msg += `\nLưu ý: Còn ${unanswered} câu chưa trả lời!`;
    }
    msg += `\n\nBạn có chắc chắn muốn nộp bài để chấm điểm và đánh giá chuẩn CLO?`;

    if (confirm(msg)) {
      submitQuiz(false);
    }
  }

  function promptCancelQuiz() {
    if (confirm("Bạn có chắc chắn muốn hủy lượt thi này? Mọi kết quả bài làm sẽ không được lưu.")) {
      clearInterval(state.quiz.timerInterval);
      state.quiz.started = false;
      state.quiz.submitted = false;
      switchTab('quiz');
    }
  }

  function submitQuiz(isAuto = false) {
    clearInterval(state.quiz.timerInterval);
    state.quiz.submitted = true;
    state.quiz.started = false;

    let correctCount = 0;
    state.quiz.questions.forEach(q => {
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
  // 6. REVIEW MODE & PTIT DECISION 292/QĐ-HV CLO EVALUATION
  // ===================================================================
  function renderReviewView() {
    const score = state.quiz.score;
    const total = state.quiz.questions.length || 20;
    const point = (score / total * 10).toFixed(1);
    const percent = Math.round((score / total) * 100);

    const mins = Math.floor(state.quiz.timeSpent / 60);
    const secs = state.quiz.timeSpent % 60;
    const timeSpentStr = `${mins} phút ${secs} giây`;

    if (el.reviewScoreValue) el.reviewScoreValue.textContent = `${score}/${total}`;

    let badgeClass = 'high';
    let badgeText = `${px('party', 14)} Xuất sắc`;
    if (percent < 50) {
      badgeClass = 'low';
      badgeText = `${px('books', 14)} Cần ôn tập thêm`;
    } else if (percent < 80) {
      badgeClass = 'mid';
      badgeText = `${px('clap', 14)} Khá tốt`;
    }

    if (el.reviewScoreBadge) {
      el.reviewScoreBadge.className = `score-badge ${badgeClass}`;
      el.reviewScoreBadge.innerHTML = badgeText;
    }
    if (el.reviewScoreSub) {
      el.reviewScoreSub.innerHTML = `Điểm tổng: <strong>${point}/10</strong> (${percent}%) • Thời gian làm: <strong>${timeSpentStr}</strong>`;
    }

    // CLO Assessment Evaluation
    renderCloRubricReport();
    renderReviewQuestions();
  }

  function renderCloRubricReport() {
    if (!el.cloAssessmentContainer) return;

    const sub = SUBJECTS[state.activeSubject] || SUBJECTS.dai_so;
    const questions = state.quiz.questions || [];

    // Calculate per CLO
    const cloStats = {
      CLO1: { total: 0, correct: 0 },
      CLO2: { total: 0, correct: 0 },
      CLO3: { total: 0, correct: 0 }
    };

    questions.forEach(q => {
      const cloKey = q.clo || 'CLO2';
      if (!cloStats[cloKey]) cloStats[cloKey] = { total: 0, correct: 0 };
      cloStats[cloKey].total++;
      if (state.quiz.answers[q.id] === q.correct) {
        cloStats[cloKey].correct++;
      }
    });

    const s1 = cloStats.CLO1.total > 0 ? (cloStats.CLO1.correct / cloStats.CLO1.total * 10) : 0;
    const s2 = cloStats.CLO2.total > 0 ? (cloStats.CLO2.correct / cloStats.CLO2.total * 10) : 0;
    const s3 = cloStats.CLO3.total > 0 ? (cloStats.CLO3.correct / cloStats.CLO3.total * 10) : 0;

    const r1 = evaluateCloRubric(s1);
    const r2 = evaluateCloRubric(s2);
    const r3 = evaluateCloRubric(s3);

    // Tính điểm trung bình môn học phần CLOHP theo công thức Điều 8 QĐ 292
    const cloHP = ((s1 + s2 + s3) / 3).toFixed(1);
    const isHpPassed = parseFloat(cloHP) >= 4.0; // Điều kiện đạt học phần: CLOHP >= 4.0 (Mức 2 trở lên)

    // Lời khuyên của Cố vấn học tập (CVHT) theo Phụ lục IV
    let advice = "";
    if (s1 < 5.5) {
      advice += `${px('warn', 14)} <strong>Cảnh báo CLO1 (${s1.toFixed(1)}/10):</strong> Bạn đang bị hổng kiến thức lý thuyết nền tảng và các định nghĩa/tính chất cốt lõi. Hãy xem lại kỹ tài liệu lý thuyết và cẩm nang công thức trước khi làm bài tính toán.<br>`;
    }
    if (s2 < 5.5) {
      advice += `${px('warn', 14)} <strong>Cảnh báo CLO2 (${s2.toFixed(1)}/10):</strong> Kỹ năng tính toán cơ bản của bạn chưa đủ vững. Đây là phần chiếm 70%–80% đề thi kết thúc học phần PTIT để qua môn. Hãy rèn luyện thêm các dạng bài tính toán mẫu và công thức bấm máy Casio.<br>`;
    }
    if (s3 < 5.5) {
      advice += `${px('bulb', 14)} <strong>Gợi ý CLO3 (${s3.toFixed(1)}/10):</strong> Các câu phân loại điểm 8–10 (chứa tham số $m$, bài toán mô hình) còn sai sót. Sau khi làm chắc chắn CLO1 & CLO2, hãy tập trung giải các bài toán nâng cao này.`;
    }
    if (!advice) {
      advice = `${px('party', 14)} <strong>Tuyệt vời!</strong> Bạn đạt mức tốt đến xuất sắc ở cả 3 chuẩn CLO của môn ${sub.name}. Hãy tiếp tục duy trì phong độ này trong kỳ thi chính thức!`;
    }

    el.cloAssessmentContainer.innerHTML = `
      <div class="clo-assessment-header">
        <div class="clo-assessment-title">
          <span>${px('chart', 16)}</span> Đánh Giá Mức Độ Đạt Chuẩn Đầu Ra Học Phần (CLO)
        </div>
        <div>
          <span class="clo-status-badge ${isHpPassed ? 'clo-status-pass' : 'clo-status-fail'}">
            ${isHpPassed ? `${px('check', 13)} ĐẠT CHUẨN ĐẦU RA HỌC PHẦN` : `${px('cross', 13)} CHƯA ĐẠT (CẦN ÔN TẬP LẠI)`} • CLO_HP = ${cloHP}/10
          </span>
        </div>
      </div>

      <div style="font-size:0.86rem; color:var(--text-muted); margin-bottom:16px;">
        Căn cứ theo <strong>Quyết định 292/QĐ-HV (Học viện CNBCVT)</strong>: Sinh viên được công nhận đạt học phần khi điểm trung bình các chuẩn đạt từ Mức 2 trở lên (tương ứng từ <strong>4.0/10</strong> trở lên).
      </div>

      <div class="rubric-grid">
        <!-- CLO 1 Card -->
        <div class="rubric-item-card">
          <div class="rubric-item-top">
            <span class="clo-tag clo1">CLO1</span>
            <span class="rubric-level-tag ${r1.cssClass}">${r1.name}</span>
          </div>
          <div><strong>Hiểu kiến thức nền tảng</strong></div>
          <div class="rubric-score-display">
            <span class="rubric-score-val">${s1.toFixed(1)}</span>
            <span class="rubric-score-max">/ 10 (${cloStats.CLO1.correct}/${cloStats.CLO1.total} câu)</span>
          </div>
          <div class="rubric-bar-track">
            <div class="rubric-bar-fill" style="width: ${Math.round(s1 * 10)}%; background: ${r1.barColor};"></div>
          </div>
          <div style="font-size:0.8rem; color:var(--text-muted);">${escapeHtml(r1.desc)}</div>
        </div>

        <!-- CLO 2 Card -->
        <div class="rubric-item-card">
          <div class="rubric-item-top">
            <span class="clo-tag clo2">CLO2</span>
            <span class="rubric-level-tag ${r2.cssClass}">${r2.name}</span>
          </div>
          <div><strong>Kỹ năng tính toán cơ bản</strong></div>
          <div class="rubric-score-display">
            <span class="rubric-score-val">${s2.toFixed(1)}</span>
            <span class="rubric-score-max">/ 10 (${cloStats.CLO2.correct}/${cloStats.CLO2.total} câu)</span>
          </div>
          <div class="rubric-bar-track">
            <div class="rubric-bar-fill" style="width: ${Math.round(s2 * 10)}%; background: ${r2.barColor};"></div>
          </div>
          <div style="font-size:0.8rem; color:var(--text-muted);">${escapeHtml(r2.desc)}</div>
        </div>

        <!-- CLO 3 Card -->
        <div class="rubric-item-card">
          <div class="rubric-item-top">
            <span class="clo-tag clo3">CLO3</span>
            <span class="rubric-level-tag ${r3.cssClass}">${r3.name}</span>
          </div>
          <div><strong>Kỹ năng phân tích & vận dụng cao</strong></div>
          <div class="rubric-score-display">
            <span class="rubric-score-val">${s3.toFixed(1)}</span>
            <span class="rubric-score-max">/ 10 (${cloStats.CLO3.correct}/${cloStats.CLO3.total} câu)</span>
          </div>
          <div class="rubric-bar-track">
            <div class="rubric-bar-fill" style="width: ${Math.round(s3 * 10)}%; background: ${r3.barColor};"></div>
          </div>
          <div style="font-size:0.8rem; color:var(--text-muted);">${escapeHtml(r3.desc)}</div>
        </div>
      </div>

      <div class="rubric-advisor-note">
        <div style="font-weight:700; color:var(--warn-text); margin-bottom:4px;">
          ${px('teacher', 16)} Nhận xét & Tư vấn chiến thuật ôn thi (CVHT PTIT):
        </div>
        <div>${advice}</div>
      </div>
    `;

    renderMath(el.cloAssessmentContainer);
  }

  function renderReviewQuestions() {
    if (!el.reviewQuestionsList) return;
    el.reviewQuestionsList.innerHTML = '';

    const filter = state.reviewFilter;
    const filteredQuestions = state.quiz.questions.filter((q) => {
      const userAns = state.quiz.answers[q.id];
      const isRight = userAns === q.correct;
      const isUnanswered = !userAns;

      if (filter === 'right') return isRight;
      if (filter === 'wrong') return !isRight && !isUnanswered;
      if (filter === 'unanswered') return isUnanswered;
      if (filter === 'clo1') return q.clo === 'CLO1';
      if (filter === 'clo2') return q.clo === 'CLO2';
      if (filter === 'clo3') return q.clo === 'CLO3';
      return true; // 'all'
    });

    if (filteredQuestions.length === 0) {
      el.reviewQuestionsList.innerHTML = `<div style="text-align:center; padding: 40px; color:var(--text-muted)">Không có câu hỏi nào thỏa mãn bộ lọc này.</div>`;
      return;
    }

    filteredQuestions.forEach((q) => {
      const userAns = state.quiz.answers[q.id];
      const isCorrect = userAns === q.correct;
      const cloBadge = getCloBadgeHtml(q.clo);
      const diffBadge = getDifficultyBadgeHtml(q.difficulty);

      const card = document.createElement('div');
      card.className = `practice-item ${userAns ? (isCorrect ? 'answered-correct' : 'answered-incorrect') : ''}`;

      const optionsHtml = q.options.map(opt => {
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

      card.innerHTML = `
        <div class="practice-header">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <span class="practice-index" style="font-weight:700;">Câu hỏi ${q.id}</span>
            ${cloBadge}
            ${diffBadge}
          </div>
          <span style="font-size:0.8rem; color:var(--text-muted);">${escapeHtml(q.chapterName || '')}</span>
        </div>

        <div class="practice-body">
          <div class="q-text" style="font-size:1.02rem; line-height:1.6; margin-bottom:14px;">
            ${formatContent(q.question)}
          </div>
          <div class="options-grid">
            ${optionsHtml}
          </div>
        </div>

        <div class="solution-box visible">
          <div class="sol-title">
            <span>${px('bulb', 15)} Lời giải chi tiết & Phương pháp giải</span>
            <span class="badge-ans">Đáp án đúng: ${q.correct}</span>
          </div>
          <div class="sol-text">
            ${formatContent(q.explanation)}
          </div>
        </div>
      `;

      el.reviewQuestionsList.appendChild(card);
    });

    renderMath(el.reviewQuestionsList);
  }

  // ===================================================================
  // 7. TYPE PRACTICE BY CHAPTER & SUB-TOPIC
  // ===================================================================
  function renderTypePracticeView() {
    if (!el.typePracticeView) return;
    const sub = SUBJECTS[state.activeSubject] || SUBJECTS.dai_so;
    const introBadge = document.getElementById('tpIntroBadge');
    const introTitle = document.getElementById('tpIntroTitle');
    if (introBadge) introBadge.innerHTML = `${px('target', 13)} ÔN TẬP CHUYÊN SÂU • MÔN ${escapeHtml(sub.name.toUpperCase())} (${sub.code})`;
    if (introTitle) introTitle.textContent = `Luyện Tập Theo Dạng Bài • ${sub.name} PTIT`;

    renderTpChapterSelector();
    renderTpSubtypeSelector();
    renderTpQuestions();
  }

  function renderTpChapterSelector() {
    if (!el.tpChapterButtons) return;
    const sub = SUBJECTS[state.activeSubject] || SUBJECTS.dai_so;
    const subjectQuestions = (state.allQuestions || []).filter(q => (q.subjectId || 'dai_so') === state.activeSubject);

    el.tpChapterButtons.innerHTML = sub.chapters.map(ch => {
      const isActive = ch.id === state.typePractice.chapterId;
      const count = subjectQuestions.filter(q => (q.chapterId || q.topicId) === ch.id).length;
      return `
        <button type="button" class="tp-ch-btn ${isActive ? 'active' : ''}" data-ch="${ch.id}">
          <div style="font-weight:700;">${ch.short || ('Chương ' + ch.id)}</div>
          <div style="font-size:0.75rem; color:var(--text-muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
            ${count} câu • ${escapeHtml(ch.name)}
          </div>
        </button>
      `;
    }).join('');

    el.tpChapterButtons.querySelectorAll('.tp-ch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.typePractice.chapterId = parseInt(btn.dataset.ch, 10);
        state.typePractice.subTypeId = 1;
        renderTypePracticeView();
      });
    });
  }

  function renderTpSubtypeSelector() {
    if (!el.tpSubtypeButtons) return;
    const chId = state.typePractice.chapterId;
    const subjectQuestions = (state.allQuestions || []).filter(q => 
      (q.subjectId || 'dai_so') === state.activeSubject && (q.chapterId || q.topicId) === chId
    );

    // Extract unique types in this chapter
    const typeMap = new Map();
    subjectQuestions.forEach(q => {
      const subId = q.subTypeId || 1;
      if (!typeMap.has(subId)) {
        typeMap.set(subId, {
          id: subId,
          name: q.typeName || `Dạng ${subId}`,
          count: 0
        });
      }
      typeMap.get(subId).count++;
    });

    const types = Array.from(typeMap.values());
    if (types.length === 0) {
      el.tpSubtypeButtons.innerHTML = `<span style="color:var(--text-muted);">Không có dạng bài nào trong chương này.</span>`;
      return;
    }

    if (!types.some(t => t.id === state.typePractice.subTypeId)) {
      state.typePractice.subTypeId = types[0].id;
    }

    el.tpSubtypeButtons.innerHTML = types.map(t => {
      const isActive = (t.id === state.typePractice.subTypeId);
      return `
        <button type="button" class="tp-sub-btn ${isActive ? 'active' : ''}" data-sub="${t.id}">
          <span class="tp-sub-name">${escapeHtml(t.name)}</span>
          <span class="tp-sub-count">(${t.count} câu)</span>
        </button>
      `;
    }).join('');

    el.tpSubtypeButtons.querySelectorAll('.tp-sub-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.typePractice.subTypeId = parseInt(btn.dataset.sub, 10);
        renderTpSubtypeSelector();
        renderTpQuestions();
      });
    });
  }

  function renderTpQuestions() {
    if (!el.tpQuestionsList) return;
    const chId = state.typePractice.chapterId;
    const subId = state.typePractice.subTypeId;

    const questions = (state.allQuestions || []).filter(q => 
      (q.subjectId || 'dai_so') === state.activeSubject &&
      (q.chapterId || q.topicId) === chId &&
      (q.subTypeId || 1) === subId
    );

    if (el.tpQuestionsBanner) {
      const firstQ = questions[0];
      const typeTitle = firstQ ? (firstQ.typeName || `Dạng bài ${subId}`) : `Dạng bài ${subId}`;
      el.tpQuestionsBanner.innerHTML = `
        <div style="font-weight:700; font-size:1.1rem; color:var(--text-main); margin-bottom:4px;">
          ${px('target', 16)} ${escapeHtml(typeTitle)}
        </div>
        <div style="font-size:0.86rem; color:var(--text-muted);">
          Tổng số ${questions.length} câu hỏi luyện tập trực tiếp • Chấm điểm tức thì & Xem lời giải chi tiết
        </div>
      `;
    }

    el.tpQuestionsList.innerHTML = '';
    if (questions.length === 0) {
      el.tpQuestionsList.innerHTML = `<div style="text-align:center; padding:30px; color:var(--text-muted);">Không tìm thấy câu hỏi nào cho dạng bài này.</div>`;
      return;
    }

    questions.forEach((q, idx) => {
      const savedAns = state.typePractice.answers[q.id];
      const isAnswered = !!savedAns;
      const isCorrect = savedAns === q.correct;
      const cloBadge = getCloBadgeHtml(q.clo);
      const diffBadge = getDifficultyBadgeHtml(q.difficulty);

      const card = document.createElement('div');
      card.className = `practice-item ${isAnswered ? (isCorrect ? 'answered-correct' : 'answered-incorrect') : ''}`;

      const optionsHtml = q.options.map(opt => {
        let optClass = '';
        let badgeIcon = opt.key;

        if (isAnswered) {
          if (opt.key === q.correct) {
            optClass = 'correct';
            badgeIcon = px('check', 13);
          } else if (opt.key === savedAns && !isCorrect) {
            optClass = 'incorrect';
            badgeIcon = px('cross', 13);
          }
        }

        return `
          <button type="button" class="option-btn ${optClass}" data-qid="${q.id}" data-key="${opt.key}">
            <span class="opt-badge">${badgeIcon}</span>
            <span class="opt-text">${formatContent(opt.text)}</span>
          </button>
        `;
      }).join('');

      card.innerHTML = `
        <div class="practice-header">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <span class="practice-index" style="font-weight:700;">Câu ${idx + 1}</span>
            ${cloBadge}
            ${diffBadge}
          </div>
          <span style="font-size:0.8rem; color:var(--text-muted);">Mã câu: #${q.id}</span>
        </div>

        <div class="practice-body">
          <div class="q-text" style="font-size:1.02rem; line-height:1.6; margin-bottom:14px;">
            ${formatContent(q.question)}
          </div>
          <div class="options-grid">
            ${optionsHtml}
          </div>
        </div>

        <div class="solution-box ${isAnswered ? 'visible' : ''}" id="sol_tp_${q.id}">
          <div class="sol-title">
            <span>${px('bulb', 15)} Lời giải chi tiết & Phương pháp giải</span>
            <span class="badge-ans">Đáp án đúng: ${q.correct}</span>
          </div>
          <div class="sol-text">
            ${formatContent(q.explanation)}
          </div>
        </div>
      `;

      card.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const key = btn.dataset.key;
          const qid = parseInt(btn.dataset.qid, 10);
          state.typePractice.answers[qid] = key;
          localStorage.setItem('tp_answers', JSON.stringify(state.typePractice.answers));
          recordQuestionAttempt(qid, key, key === q.correct);
          renderTpQuestions();
        });
      });

      el.tpQuestionsList.appendChild(card);
    });

    renderMath(el.tpQuestionsList);
  }

  // ===================================================================
  // 8. PRACTICE VIEW (NGÂN HÀNG CÂU HỎI MÔN HỌC)
  // ===================================================================
  function getFilteredPracticeQuestions() {
    const all = state.allQuestions || [];
    const p = state.practice;

    return all.filter(q => {
      // Must match active subject
      if ((q.subjectId || 'dai_so') !== state.activeSubject) return false;

      // Topic filter
      if (p.topicFilter !== 'all') {
        const ch = q.chapterId || q.topicId;
        if (ch !== parseInt(p.topicFilter, 10)) return false;
      }

      // Origin filter
      if (p.originFilter === 'original' && !q.isOriginal) return false;
      if (p.originFilter === 'extra' && q.isOriginal) return false;

      // Difficulty filter
      if (p.difficultyFilter !== 'all' && q.difficulty !== p.difficultyFilter) return false;

      // Status filter
      const userAns = p.answers[q.id];
      if (p.statusFilter === 'unanswered' && userAns) return false;
      if (p.statusFilter === 'correct' && userAns !== q.correct) return false;
      if (p.statusFilter === 'incorrect' && (userAns === undefined || userAns === q.correct)) return false;
      if (p.statusFilter === 'bookmarked' && !p.bookmarks.has(q.id)) return false;

      // Search query
      if (p.searchQuery.trim()) {
        const term = p.searchQuery.toLowerCase();
        const inQ = (q.question || '').toLowerCase().includes(term);
        const inExpl = (q.explanation || '').toLowerCase().includes(term);
        const inType = (q.typeName || '').toLowerCase().includes(term);
        if (!inQ && !inExpl && !inType) return false;
      }

      return true;
    });
  }

  function renderPracticeView() {
    if (!el.practiceContentArea) return;

    // Update topic options based on active subject chapters
    const sub = SUBJECTS[state.activeSubject] || SUBJECTS.dai_so;
    if (el.practiceTopicSelect) {
      const prevVal = el.practiceTopicSelect.value;
      el.practiceTopicSelect.innerHTML = `<option value="all">Tất cả các chương môn ${sub.name}</option>` +
        sub.chapters.map(ch => `<option value="${ch.id}">${ch.short || ('Chương ' + ch.id)}: ${escapeHtml(ch.name)}</option>`).join('');
      if (prevVal && (prevVal === 'all' || sub.chapters.some(c => c.id === parseInt(prevVal, 10)))) {
        el.practiceTopicSelect.value = prevVal;
      }
    }

    const filtered = getFilteredPracticeQuestions();
    const totalSubjectQuestions = (state.allQuestions || []).filter(q => (q.subjectId || 'dai_so') === state.activeSubject).length;

    let answeredCount = 0;
    let correctCount = 0;
    (state.allQuestions || []).forEach(q => {
      if ((q.subjectId || 'dai_so') === state.activeSubject) {
        const a = state.practice.answers[q.id];
        if (a) {
          answeredCount++;
          if (a === q.correct) correctCount++;
        }
      }
    });

    const percent = totalSubjectQuestions > 0 ? Math.round((answeredCount / totalSubjectQuestions) * 100) : 0;
    if (el.practiceStatsText) {
      el.practiceStatsText.innerHTML = `
        <strong>${sub.name}:</strong> Đã làm <strong>${answeredCount}/${totalSubjectQuestions}</strong> câu (${percent}%) • 
        Đúng: <strong>${correctCount}</strong> • Tìm thấy <strong>${filtered.length}</strong> câu phù hợp
      `;
    }
    if (el.practiceProgressFill) {
      el.practiceProgressFill.style.width = `${percent}%`;
    }

    el.practiceContentArea.innerHTML = '';
    if (filtered.length === 0) {
      el.practiceContentArea.innerHTML = `<div style="text-align:center; padding: 40px; color:var(--text-muted)">Không tìm thấy câu hỏi nào phù hợp với bộ lọc hiện tại.</div>`;
      return;
    }

    if (state.practice.viewMode === 'focus') {
      // Focus 1-by-1 mode
      if (state.practice.currentIndex >= filtered.length) state.practice.currentIndex = 0;
      const q = filtered[state.practice.currentIndex];
      const isAnswered = !!state.practice.answers[q.id];
      const userAns = state.practice.answers[q.id];
      const isCorrect = userAns === q.correct;
      const isBookmarked = state.practice.bookmarks.has(q.id);

      const card = document.createElement('div');
      card.className = `practice-item ${isAnswered ? (isCorrect ? 'answered-correct' : 'answered-incorrect') : ''}`;

      const optionsHtml = q.options.map(opt => {
        let optClass = '';
        let badgeIcon = opt.key;

        if (isAnswered) {
          if (opt.key === q.correct) {
            optClass = 'correct';
            badgeIcon = px('check', 13);
          } else if (opt.key === userAns && !isCorrect) {
            optClass = 'incorrect';
            badgeIcon = px('cross', 13);
          }
        }

        return `
          <button type="button" class="option-btn ${optClass}" data-qid="${q.id}" data-key="${opt.key}">
            <span class="opt-badge">${badgeIcon}</span>
            <span class="opt-text">${formatContent(opt.text)}</span>
          </button>
        `;
      }).join('');

      card.innerHTML = `
        <div class="practice-header">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <span class="practice-index" style="font-weight:700;">Câu ${state.practice.currentIndex + 1} / ${filtered.length}</span>
            ${getCloBadgeHtml(q.clo)}
            ${getDifficultyBadgeHtml(q.difficulty)}
          </div>
          <button class="btn btn-star ${isBookmarked ? 'active' : ''}" id="btnBookmarkQ" title="Đánh dấu câu hỏi này">
            ${isBookmarked ? `${px('star-full', 14)} Đã lưu` : `${px('star-empty', 14)} Lưu câu hỏi`}
          </button>
        </div>

        <div class="practice-body">
          <div class="q-text" style="font-size:1.05rem; line-height:1.6; margin-bottom:14px;">
            ${formatContent(q.question)}
          </div>
          <div class="options-grid">
            ${optionsHtml}
          </div>
        </div>

        <div class="solution-box ${isAnswered ? 'visible' : ''}">
          <div class="sol-title">
            <span>${px('bulb', 15)} Lời giải chi tiết & Phương pháp giải</span>
            <span class="badge-ans">Đáp án đúng: ${q.correct}</span>
          </div>
          <div class="sol-text">
            ${formatContent(q.explanation)}
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:20px; padding-top:14px; border-top:1px solid var(--border);">
          <button class="btn" id="btnPracPrev" ${state.practice.currentIndex === 0 ? 'disabled' : ''}>← Câu trước</button>
          <span style="font-size:0.85rem; color:var(--text-muted);">${state.practice.currentIndex + 1} / ${filtered.length}</span>
          <button class="btn btn-primary" id="btnPracNext" ${state.practice.currentIndex === filtered.length - 1 ? 'disabled' : ''}>Câu sau →</button>
        </div>
      `;

      card.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          handlePracticeAnswer(parseInt(btn.dataset.qid, 10), btn.dataset.key);
        });
      });

      const btnBm = card.querySelector('#btnBookmarkQ');
      if (btnBm) {
        btnBm.addEventListener('click', () => {
          if (state.practice.bookmarks.has(q.id)) {
            state.practice.bookmarks.delete(q.id);
          } else {
            state.practice.bookmarks.add(q.id);
          }
          localStorage.setItem('practice_bookmarks', JSON.stringify(Array.from(state.practice.bookmarks)));
          renderPracticeView();
        });
      }

      const btnPrev = card.querySelector('#btnPracPrev');
      if (btnPrev) {
        btnPrev.addEventListener('click', () => {
          if (state.practice.currentIndex > 0) {
            state.practice.currentIndex--;
            renderPracticeView();
          }
        });
      }

      const btnNext = card.querySelector('#btnPracNext');
      if (btnNext) {
        btnNext.addEventListener('click', () => {
          if (state.practice.currentIndex < filtered.length - 1) {
            state.practice.currentIndex++;
            renderPracticeView();
          }
        });
      }

      el.practiceContentArea.appendChild(card);
    } else {
      // List Mode
      filtered.forEach((q, idx) => {
        const isAnswered = !!state.practice.answers[q.id];
        const userAns = state.practice.answers[q.id];
        const isCorrect = userAns === q.correct;

        const card = document.createElement('div');
        card.className = `practice-item ${isAnswered ? (isCorrect ? 'answered-correct' : 'answered-incorrect') : ''}`;

        const optionsHtml = q.options.map(opt => {
          let optClass = '';
          let badgeIcon = opt.key;

          if (isAnswered) {
            if (opt.key === q.correct) {
              optClass = 'correct';
              badgeIcon = px('check', 13);
            } else if (opt.key === userAns && !isCorrect) {
              optClass = 'incorrect';
              badgeIcon = px('cross', 13);
            }
          }

          return `
            <button type="button" class="option-btn ${optClass}" data-qid="${q.id}" data-key="${opt.key}">
              <span class="opt-badge">${badgeIcon}</span>
              <span class="opt-text">${formatContent(opt.text)}</span>
            </button>
          `;
        }).join('');

        card.innerHTML = `
          <div class="practice-header">
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
              <span class="practice-index" style="font-weight:700;">Câu ${idx + 1} (Mã #${q.id})</span>
              ${getCloBadgeHtml(q.clo)}
              ${getDifficultyBadgeHtml(q.difficulty)}
            </div>
            <span style="font-size:0.8rem; color:var(--text-muted);">${escapeHtml(q.chapterName || '')}</span>
          </div>

          <div class="practice-body">
            <div class="q-text" style="font-size:1.02rem; line-height:1.6; margin-bottom:14px;">
              ${formatContent(q.question)}
            </div>
            <div class="options-grid">
              ${optionsHtml}
            </div>
          </div>

          <div class="solution-box ${isAnswered ? 'visible' : ''}">
            <div class="sol-title">
              <span>${px('bulb', 15)} Lời giải chi tiết & Phương pháp giải</span>
              <span class="badge-ans">Đáp án đúng: ${q.correct}</span>
            </div>
            <div class="sol-text">
              ${formatContent(q.explanation)}
            </div>
          </div>
        `;

        card.querySelectorAll('.option-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            handlePracticeAnswer(parseInt(btn.dataset.qid, 10), btn.dataset.key);
          });
        });

        el.practiceContentArea.appendChild(card);
      });
    }

    renderMath(el.practiceContentArea);
  }

  function handlePracticeAnswer(qid, key) {
    const all = state.allQuestions || [];
    const q = all.find(item => item.id === qid);
    if (!q) return;

    state.practice.answers[qid] = key;
    localStorage.setItem('practice_answers', JSON.stringify(state.practice.answers));
    recordQuestionAttempt(qid, key, key === q.correct);
    renderPracticeView();
  }

  function promptResetPractice() {
    if (confirm("Bạn có chắc chắn muốn xóa toàn bộ lịch sử làm bài ôn tập của môn này để làm lại từ đầu?")) {
      const subjectQuestions = (state.allQuestions || []).filter(q => (q.subjectId || 'dai_so') === state.activeSubject);
      subjectQuestions.forEach(q => {
        delete state.practice.answers[q.id];
      });
      localStorage.setItem('practice_answers', JSON.stringify(state.practice.answers));
      state.practice.currentIndex = 0;
      renderPracticeView();
      showToast("Đã thiết lập lại lịch sử làm bài.");
    }
  }

  // ===================================================================
  // 9. MISTAKES NOTEBOOK (SỔ TAY CÂU SAI)
  // ===================================================================
  function renderMistakesView() {
    if (!el.mistakesView) return;
    const sub = SUBJECTS[state.activeSubject] || SUBJECTS.dai_so;
    const titleEl = document.getElementById('mistakesTitle');
    if (titleEl) titleEl.textContent = `Sổ Tay Câu Sai • Môn ${sub.name}`;

    const subjectQuestions = (state.allQuestions || []).filter(q => (q.subjectId || 'dai_so') === state.activeSubject);
    const mistakes = subjectQuestions.filter(q => {
      const h = getQuestionHistory(q.id);
      return h && (!h.lastResult || (h.wrongCount && h.wrongCount > 0));
    });

    const statsEl = document.getElementById('mistakesStatsText');
    if (statsEl) {
      statsEl.innerHTML = `Môn <strong>${sub.name}</strong> hiện có <strong>${mistakes.length} câu hỏi</strong> cần củng cố lại`;
    }

    const container = document.getElementById('mistakesListContainer');
    if (!container) return;
    container.innerHTML = '';

    if (mistakes.length === 0) {
      container.innerHTML = `
        <div style="text-align:center; padding: 48px 20px; color:var(--text-muted); background:var(--bg-subtle); border-radius:var(--radius-lg);">
          <div style="margin-bottom:12px;">${px('party', 38)}</div>
          <div style="font-size:1.15rem; font-weight:700; color:var(--text-main); margin-bottom:6px;">Chưa có câu sai nào trong môn ${sub.name}!</div>
          <div>Bạn đã làm đúng tất cả các câu đã thử sức. Hãy tiếp tục làm bài thi thử để kiểm tra toàn diện!</div>
        </div>
      `;
      return;
    }

    mistakes.forEach((q, idx) => {
      const h = getQuestionHistory(q.id);
      const card = document.createElement('div');
      card.className = 'mistake-card-item';

      const optionsHtml = q.options.map(opt => {
        let optClass = '';
        if (opt.key === q.correct) optClass = 'correct';
        else if (h && h.lastAnswer === opt.key && !h.lastResult) optClass = 'incorrect';

        return `
          <div class="option-btn ${optClass}" style="cursor:default">
            <span class="opt-badge">${opt.key}</span>
            <span class="opt-text">${formatContent(opt.text)}</span>
          </div>
        `;
      }).join('');

      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:8px;">
          <div style="display:flex; align-items:center; gap:8px;">
            <strong style="color:var(--error-text);">Câu ${idx + 1} (Sai ${h ? h.wrongCount : 1} lần)</strong>
            ${getCloBadgeHtml(q.clo)}
            ${getDifficultyBadgeHtml(q.difficulty)}
          </div>
          <span style="font-size:0.8rem; color:var(--text-muted);">${escapeHtml(q.chapterName || '')}</span>
        </div>

        <div class="q-text" style="font-size:1rem; line-height:1.55; margin-bottom:12px;">
          ${formatContent(q.question)}
        </div>

        <div class="options-grid" style="margin-bottom:12px;">
          ${optionsHtml}
        </div>

        <div class="solution-box visible">
          <div class="sol-title">
            <span>${px('bulb', 15)} Lời giải chi tiết</span>
            <span class="badge-ans">Đáp án đúng: ${q.correct}</span>
          </div>
          <div class="sol-text">
            ${formatContent(q.explanation)}
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    renderMath(container);

    // Practice mistakes button
    const btnPractice = document.getElementById('btnPracticeMistakes');
    if (btnPractice) {
      btnPractice.onclick = () => {
        if (mistakes.length === 0) return;
        state.quiz.questions = [...mistakes];
        shuffleArray(state.quiz.questions);
        state.quiz.started = true;
        state.quiz.submitted = false;
        state.quiz.currentIndex = 0;
        state.quiz.answers = {};
        state.quiz.flags = new Set();
        state.quiz.durationSeconds = Math.max(15, mistakes.length * 2) * 60;
        state.quiz.timeLeft = state.quiz.durationSeconds;
        state.quiz.score = 0;
        state.quiz.timeSpent = 0;

        el.quizStartScreen.style.display = 'none';
        el.quizActiveScreen.style.display = 'block';
        startQuizTimer();
        renderQuizNav();
        renderQuizQuestion();
        switchTab('quiz');
      };
    }

    const btnClear = document.getElementById('btnClearMistakes');
    if (btnClear) {
      btnClear.onclick = () => {
        if (confirm(`Bạn có chắc chắn muốn xóa lịch sử câu sai của môn ${sub.name}?`)) {
          mistakes.forEach(q => {
            if (state.history[q.id]) {
              delete state.history[q.id];
            }
          });
          localStorage.setItem('toancc_question_history', JSON.stringify(state.history));
          renderMistakesView();
          showToast("Đã xóa danh sách câu sai.");
        }
      };
    }
  }

  // ===================================================================
  // 10. QUESTION BANK MANAGER (IMPORT / EXPORT / ADD QUESTION)
  // ===================================================================
  function initBankManager() {
    // Sub tabs
    document.querySelectorAll('.bank-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.bank-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.bank-pane').forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const targetPane = document.getElementById(`pane${btn.dataset.bankPane.charAt(0).toUpperCase() + btn.dataset.bankPane.slice(1)}`);
        if (targetPane) targetPane.classList.add('active');

        if (btn.dataset.bankPane === 'bankStats') renderBankStats();
      });
    });

    // Populate manual question chapter dropdown
    const manualSub = document.getElementById('manualSubjectSelect');
    const manualCh = document.getElementById('manualChapterSelect');
    function updateManualChapters() {
      if (!manualSub || !manualCh) return;
      const sKey = manualSub.value;
      const s = SUBJECTS[sKey] || SUBJECTS.dai_so;
      manualCh.innerHTML = s.chapters.map(c => `<option value="${c.id}">${c.short || ('Chương ' + c.id)}: ${escapeHtml(c.name)}</option>`).join('');
    }
    if (manualSub) manualSub.addEventListener('change', updateManualChapters);
    updateManualChapters();

    // Live preview manual question
    const btnPrev = document.getElementById('btnPreviewManualQuestion');
    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        const qText = document.getElementById('manualQuestionText').value;
        const optA = document.getElementById('manualOptA').value;
        const optB = document.getElementById('manualOptB').value;
        const optC = document.getElementById('manualOptC').value;
        const optD = document.getElementById('manualOptD').value;
        const correct = document.getElementById('manualCorrectSelect').value;
        const expl = document.getElementById('manualExplanationText').value;

        const box = document.getElementById('manualPreviewBox');
        if (!box) return;

        box.innerHTML = `
          <div style="font-weight:700; margin-bottom:8px;">[Xem trước hiển thị]</div>
          <div class="q-text" style="font-size:1.02rem; margin-bottom:12px;">${formatContent(qText || '(Chưa nhập nội dung câu hỏi)')}</div>
          <div class="options-grid">
            <div class="option-btn ${correct === 'A' ? 'correct' : ''}"><span class="opt-badge">A</span><span class="opt-text">${formatContent(optA || 'Phương án A')}</span></div>
            <div class="option-btn ${correct === 'B' ? 'correct' : ''}"><span class="opt-badge">B</span><span class="opt-text">${formatContent(optB || 'Phương án B')}</span></div>
            <div class="option-btn ${correct === 'C' ? 'correct' : ''}"><span class="opt-badge">C</span><span class="opt-text">${formatContent(optC || 'Phương án C')}</span></div>
            <div class="option-btn ${correct === 'D' ? 'correct' : ''}"><span class="opt-badge">D</span><span class="opt-text">${formatContent(optD || 'Phương án D')}</span></div>
          </div>
          <div class="solution-box visible" style="margin-top:12px;">
            <div class="sol-title"><span>Lời giải chi tiết:</span><span class="badge-ans">Đáp án: ${correct}</span></div>
            <div class="sol-text">${formatContent(expl || 'Chưa nhập lời giải')}</div>
          </div>
        `;
        renderMath(box);
      });
    }

    // Save manual question
    const btnSaveManual = document.getElementById('btnSaveManualQuestion');
    if (btnSaveManual) {
      btnSaveManual.addEventListener('click', () => {
        const subId = document.getElementById('manualSubjectSelect').value;
        const chId = parseInt(document.getElementById('manualChapterSelect').value, 10);
        const clo = document.getElementById('manualCloSelect').value;
        const diff = document.getElementById('manualDiffSelect').value;
        const qText = document.getElementById('manualQuestionText').value.trim();
        const optA = document.getElementById('manualOptA').value.trim();
        const optB = document.getElementById('manualOptB').value.trim();
        const optC = document.getElementById('manualOptC').value.trim();
        const optD = document.getElementById('manualOptD').value.trim();
        const correct = document.getElementById('manualCorrectSelect').value;
        const expl = document.getElementById('manualExplanationText').value.trim();

        if (!qText || !optA || !optB || !optC || !optD) {
          alert("Vui lòng điền đầy đủ câu hỏi và 4 phương án A, B, C, D!");
          return;
        }

        const sub = SUBJECTS[subId];
        const chObj = sub.chapters.find(c => c.id === chId);

        const newId = 10000 + Math.floor(Math.random() * 89999);
        const newQ = {
          id: newId,
          subjectId: subId,
          subjectName: sub.fullName,
          chapterId: chId,
          chapterName: chObj ? chObj.name : `Chương ${chId}`,
          topicId: chId,
          topicName: chObj ? chObj.name : `Chương ${chId}`,
          subTypeId: 1,
          typeId: `${chId}.1`,
          typeName: "Câu hỏi tự nhập",
          clo: clo,
          difficulty: diff,
          examId: "custom_import",
          examName: "Đề tự nhập",
          question: qText,
          options: [
            { key: "A", text: optA },
            { key: "B", text: optB },
            { key: "C", text: optC },
            { key: "D", text: optD }
          ],
          correct: correct,
          explanation: expl || "Đã lưu thành công vào ngân hàng đề.",
          isOriginal: false,
          origin: "custom"
        };

        saveCustomQuestions([newQ]);
        document.getElementById('manualSaveStatus').innerHTML = `${px('check', 14)} Đã thêm câu #${newId} thành công!`;
        setTimeout(() => { document.getElementById('manualSaveStatus').textContent = ''; }, 3000);

        // Clear fields
        document.getElementById('manualQuestionText').value = '';
        document.getElementById('manualOptA').value = '';
        document.getElementById('manualOptB').value = '';
        document.getElementById('manualOptC').value = '';
        document.getElementById('manualOptD').value = '';
        document.getElementById('manualExplanationText').value = '';
      });
    }

    // JSON file dropzone
    const dropzone = document.getElementById('bankJsonDropzone');
    const fileInput = document.getElementById('bankFileInput');
    if (dropzone && fileInput) {
      dropzone.addEventListener('click', () => fileInput.click());
      dropzone.addEventListener('dragover', (e) => { e.preventDefault(); dropzone.style.borderColor = 'var(--primary)'; });
      dropzone.addEventListener('dragleave', () => { dropzone.style.borderColor = ''; });
      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.style.borderColor = '';
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          handleJsonFile(e.dataTransfer.files[0]);
        }
      });
      fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) {
          handleJsonFile(e.target.files[0]);
        }
      });
    }

    function handleJsonFile(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        const textarea = document.getElementById('bankJsonTextarea');
        if (textarea) textarea.value = text;
        showToast(`Đã nạp file ${file.name}. Bấm nút "Nạp câu hỏi" để hoàn tất.`);
      };
      reader.readAsText(file);
    }

    // Execute Import JSON
    const btnExecuteJson = document.getElementById('btnExecuteImportJson');
    if (btnExecuteJson) {
      btnExecuteJson.addEventListener('click', () => {
        const textarea = document.getElementById('bankJsonTextarea');
        const statusEl = document.getElementById('bankJsonStatus');
        const targetSub = document.getElementById('bankImportTargetSubject').value;

        if (!textarea || !textarea.value.trim()) {
          alert("Vui lòng dán mã JSON hoặc chọn file câu hỏi!");
          return;
        }

        try {
          let parsed = JSON.parse(textarea.value.trim());
          if (!Array.isArray(parsed)) {
            parsed = [parsed];
          }

          let added = 0;
          const questionsToAdd = [];

          parsed.forEach((item, i) => {
            if (!item.question || !item.options || !item.correct) {
              return;
            }

            const id = item.id || (20000 + Math.floor(Math.random() * 79999));
            const subId = (targetSub !== 'auto') ? targetSub : (item.subjectId || state.activeSubject);
            const sub = SUBJECTS[subId] || SUBJECTS.dai_so;

            questionsToAdd.push({
              id: id,
              subjectId: subId,
              subjectName: sub.fullName,
              chapterId: item.chapterId || 1,
              chapterName: item.chapterName || `Chương ${item.chapterId || 1}`,
              topicId: item.topicId || item.chapterId || 1,
              topicName: item.topicName || item.chapterName || 'Chương',
              subTypeId: item.subTypeId || 1,
              typeId: item.typeId || `${item.chapterId || 1}.1`,
              typeName: item.typeName || "Dạng bài mở rộng",
              clo: item.clo || (item.difficulty === 'easy' ? 'CLO1' : (item.difficulty === 'hard' ? 'CLO3' : 'CLO2')),
              difficulty: item.difficulty || 'medium',
              examId: item.examId || "imported",
              examName: item.examName || "Đề import",
              question: item.question,
              options: Array.isArray(item.options) ? item.options : [],
              correct: item.correct,
              explanation: item.explanation || "Không có lời giải chi tiết.",
              isOriginal: false,
              origin: "custom"
            });
            added++;
          });

          if (added === 0) {
            alert("Không tìm thấy câu hỏi hợp lệ trong JSON. Hãy kiểm tra định dạng (cần có question, options, correct).");
            return;
          }

          saveCustomQuestions(questionsToAdd);
          if (statusEl) {
            statusEl.style.color = 'var(--success-solid)';
            statusEl.innerHTML = `${px('check', 14)} Đã nạp thành công ${added} câu hỏi vào ngân hàng!`;
          }
          showToast(`Đã nạp ${added} câu hỏi vào ngân hàng thành công!`);
          textarea.value = '';
        } catch (err) {
          alert(`Lỗi cú pháp JSON: ${err.message}`);
        }
      });
    }

    // Fill sample text
    const btnFillSample = document.getElementById('btnFillSampleText');
    if (btnFillSample) {
      btnFillSample.addEventListener('click', () => {
        const textarea = document.getElementById('bankRawTextarea');
        if (!textarea) return;
        textarea.value = `[Câu 1] [Chương 1] [CLO1] [Dễ]
Tính giới hạn $\\lim_{x \\to 0} \\frac{\\tan(3x)}{x}$.
A. $3$
B. $0$
C. $1$
D. $1/3$
Đáp án: A
Lời giải: Khi $x \\to 0$, ta có $\\tan(3x) \\sim 3x$, do đó giới hạn bằng $3$.

[Câu 2] [Chương 1] [CLO2] [Trung bình]
Đạo hàm của hàm số $f(x) = x \\ln(x)$ tại điểm $x = e$ là:
A. $2$
B. $1$
C. $e$
D. $0$
Đáp án: A
Lời giải: Áp dụng công thức $(uv)' = u'v + uv'$, ta có $f'(x) = \\ln(x) + x \\cdot (1/x) = \\ln(x) + 1$. Tại $x = e$, $f'(e) = 1 + 1 = 2$.`;
      });
    }

    // Parse Raw Text Button
    const btnParseText = document.getElementById('btnParseRawText');
    if (btnParseText) {
      btnParseText.addEventListener('click', () => {
        const textarea = document.getElementById('bankRawTextarea');
        const statusEl = document.getElementById('bankTextStatus');
        const targetSub = document.getElementById('bankTextTargetSubject').value;

        if (!textarea || !textarea.value.trim()) {
          alert("Vui lòng dán văn bản câu hỏi!");
          return;
        }

        const raw = textarea.value.trim();
        const parsed = parseRawQuestionsText(raw, targetSub);

        if (parsed.length === 0) {
          alert("Không phân tích được câu hỏi nào. Vui lòng kiểm tra định dạng các phương án A., B., C., D. và Đáp án: [A-D].");
          return;
        }

        saveCustomQuestions(parsed);
        if (statusEl) {
          statusEl.style.color = 'var(--success-solid)';
          statusEl.innerHTML = `${px('check', 14)} Đã tự động phân tích và nạp ${parsed.length} câu hỏi thành công!`;
        }
        showToast(`Đã nhận dạng thành công ${parsed.length} câu hỏi!`);
        textarea.value = '';
      });
    }

    // Export All JSON
    const btnExpAll = document.getElementById('btnExportAllJson');
    if (btnExpAll) {
      btnExpAll.addEventListener('click', () => {
        downloadJsonFile(state.allQuestions, `ngan_hang_toan_ptit_full_${Date.now()}.json`);
      });
    }

    // Export Current Subject JSON
    const btnExpSub = document.getElementById('btnExportCurrentSubjectJson');
    if (btnExpSub) {
      btnExpSub.addEventListener('click', () => {
        const subQuestions = (state.allQuestions || []).filter(q => (q.subjectId || 'dai_so') === state.activeSubject);
        downloadJsonFile(subQuestions, `ngan_hang_${state.activeSubject}_ptit_${Date.now()}.json`);
      });
    }

    // Reset default bank
    const btnResetBank = document.getElementById('btnResetToDefaultBank');
    if (btnResetBank) {
      btnResetBank.addEventListener('click', () => {
        if (confirm("Bạn có chắc chắn muốn xóa tất cả câu hỏi tự thêm/import và khôi phục lại ngân hàng câu hỏi gốc mặc định?")) {
          localStorage.removeItem('toancc_custom_bank');
          state.allQuestions = getQuestionsBank();
          renderSubjectSwitcher();
          renderSubjectChapters();
          updateMatrixSummary();
          renderBankStats();
          showToast("Đã khôi phục về ngân hàng câu hỏi gốc mặc định.");
        }
      });
    }
  }

  function renderBankManagerView() {
    renderBankStats();
  }

  function renderBankStats() {
    const container = document.getElementById('bankStatsContent');
    if (!container) return;

    const all = state.allQuestions || [];
    let customCount = 0;
    try {
      customCount = JSON.parse(localStorage.getItem('toancc_custom_bank') || '[]').length;
    } catch(e) {}

    let html = `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:14px;">
        <div>
          <strong>Tổng cộng: ${all.length} câu hỏi</strong> (${all.length - customCount} câu gốc hệ thống + ${customCount} câu tự thêm)
        </div>
        <div style="font-size:0.85rem; color:var(--text-muted);">
          Đồng bộ tự động qua LocalStorage
        </div>
      </div>

      <div style="overflow-x:auto;">
        <table class="bank-stats-table">
          <thead>
            <tr>
              <th>Môn học</th>
              <th>Mã học phần</th>
              <th>Số chương</th>
              <th>Tổng câu</th>
              <th>CLO1 (Nền tảng)</th>
              <th>CLO2 (Tính toán)</th>
              <th>CLO3 (Vận dụng)</th>
            </tr>
          </thead>
          <tbody>
    `;

    Object.keys(SUBJECTS).forEach(sKey => {
      const s = SUBJECTS[sKey];
      const qs = all.filter(q => (q.subjectId || 'dai_so') === sKey);
      const clo1 = qs.filter(q => q.clo === 'CLO1').length;
      const clo2 = qs.filter(q => q.clo === 'CLO2').length;
      const clo3 = qs.filter(q => q.clo === 'CLO3').length;

      html += `
        <tr>
          <td><strong>${px(s.icon, 15)} ${escapeHtml(s.name)}</strong></td>
          <td><code>${s.code}</code></td>
          <td>${s.chapters.length} chương</td>
          <td><strong style="color:var(--primary);">${qs.length}</strong></td>
          <td><span class="clo-tag clo1">${clo1}</span></td>
          <td><span class="clo-tag clo2">${clo2}</span></td>
          <td><span class="clo-tag clo3">${clo3}</span></td>
        </tr>
      `;
    });

    html += `
          </tbody>
        </table>
      </div>
    `;

    container.innerHTML = html;
  }

  function saveCustomQuestions(newQuestions) {
    let custom = [];
    try {
      custom = JSON.parse(localStorage.getItem('toancc_custom_bank') || '[]');
    } catch(e) { custom = []; }

    custom.push(...newQuestions);
    localStorage.setItem('toancc_custom_bank', JSON.stringify(custom));

    // Refresh state
    state.allQuestions = getQuestionsBank();
    renderSubjectSwitcher();
    renderSubjectChapters();
    updateMatrixSummary();
    renderBankStats();
  }

  function parseRawQuestionsText(text, subjectId) {
    const sub = SUBJECTS[subjectId] || SUBJECTS.dai_so;
    // Split into question blocks
    const rawBlocks = text.split(/(?=\[(?:Câu|CÂU)\s*\d+\]|^(?:Câu|CÂU)\s*\d+[:.])/gm);
    const results = [];

    rawBlocks.forEach((block, idx) => {
      const b = block.trim();
      if (!b) return;

      // Extract chapter if specified: [Chương X] or Chương X
      let chId = 1;
      const chMatch = b.match(/(?:\[Chương\s*(\d+)\]|Chương\s*(\d+))/i);
      if (chMatch) chId = parseInt(chMatch[1] || chMatch[2], 10);

      // Extract CLO: [CLO1], [CLO2], [CLO3]
      let clo = 'CLO2';
      const cloMatch = b.match(/\[(CLO[123])\]/i);
      if (cloMatch) clo = cloMatch[1].toUpperCase();

      // Extract difficulty: [Dễ], [Trung bình], [Khó]
      let diff = 'medium';
      if (/\[(?:Dễ|De|easy)\]/i.test(b)) diff = 'easy';
      else if (/\[(?:Khó|Kho|hard)\]/i.test(b)) diff = 'hard';

      // Extract correct answer
      let correct = 'A';
      const ansMatch = b.match(/(?:Đáp án|Đáp án đúng|Key|Answer)\s*[:=]?\s*([A-D])/i);
      if (ansMatch) correct = ansMatch[1].toUpperCase();

      // Extract explanation
      let expl = 'Lời giải chi tiết cho câu hỏi này.';
      const explMatch = b.match(/(?:Lời giải|Giải thích|Explanation)\s*[:=]?\s*([\s\S]*?)$/i);
      if (explMatch) expl = explMatch[1].trim();

      // Extract options A, B, C, D
      const optA = b.match(/(?:^|\n)\s*A\s*[\.:\)]\s*([\s\S]*?)(?=(?:^|\n)\s*B\s*[\.:\)]|$)/m);
      const optB = b.match(/(?:^|\n)\s*B\s*[\.:\)]\s*([\s\S]*?)(?=(?:^|\n)\s*C\s*[\.:\)]|$)/m);
      const optC = b.match(/(?:^|\n)\s*C\s*[\.:\)]\s*([\s\S]*?)(?=(?:^|\n)\s*D\s*[\.:\)]|$)/m);
      const optD = b.match(/(?:^|\n)\s*D\s*[\.:\)]\s*([\s\S]*?)(?=(?:^|\n)\s*(?:Đáp án|Lời giải)|$)/m);

      if (!optA || !optB || !optC || !optD) return;

      // Extract question text: from start to option A
      let qText = b.split(/(?:^|\n)\s*A\s*[\.:\)]/m)[0].trim();
      // Remove header tags like [Câu 1] [Chương 1] [CLO1] [Dễ]
      qText = qText.replace(/^\[(?:Câu|CÂU)\s*\d+\]/i, '').replace(/\[(?:Chương\s*\d+|CLO[123]|Dễ|Trung bình|Khó|De|Kho)\]/gi, '').trim();

      const newId = 30000 + Math.floor(Math.random() * 69999);
      const chObj = sub.chapters.find(c => c.id === chId);

      results.push({
        id: newId,
        subjectId: subjectId,
        subjectName: sub.fullName,
        chapterId: chId,
        chapterName: chObj ? chObj.name : `Chương ${chId}`,
        topicId: chId,
        topicName: chObj ? chObj.name : `Chương ${chId}`,
        subTypeId: 1,
        typeId: `${chId}.1`,
        typeName: "Câu nhập văn bản",
        clo: clo,
        difficulty: diff,
        examId: "text_import",
        examName: "Đề text import",
        question: qText,
        options: [
          { key: "A", text: optA[1].trim() },
          { key: "B", text: optB[1].trim() },
          { key: "C", text: optC[1].trim() },
          { key: "D", text: optD[1].trim() }
        ],
        correct: correct,
        explanation: expl,
        isOriginal: false,
        origin: "custom"
      });
    });

    return results;
  }

  function downloadJsonFile(data, filename) {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 200);
  }

  // --- Utility Helpers ---
  function showToast(message, iconName = 'check') {
    let toast = document.querySelector('.toast-notification');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast-notification';
      toast.style.cssText = `
        position: fixed;
        bottom: 18px;
        left: 50%;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: var(--text-main);
        color: var(--bg-card);
        padding: 10px 18px;
        border-radius: var(--radius-full);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.25);
        font-size: 0.86rem;
        font-weight: 600;
        z-index: 9999;
        pointer-events: none;
        white-space: nowrap;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        transform: translate(-50%, 16px);
        opacity: 0;
      `;
      document.body.appendChild(toast);
    }

    toast.innerHTML = iconName
      ? `${px(iconName, 14)} <span>${escapeHtml(message)}</span>`
      : escapeHtml(message);
    setTimeout(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translate(-50%, 0)';
    }, 10);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translate(-50%, 10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
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
  // 11. KEYBOARD SHORTCUTS & EVENT LISTENERS
  // ===================================================================
  window.addEventListener('keydown', (e) => {
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

  // --- Bootstrap Event Listeners ---
  el.themeToggle.addEventListener('click', () => {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  });

  el.tabQuiz.addEventListener('click', () => {
    if (state.quiz.submitted) switchTab('review');
    else switchTab('quiz');
  });
  if (el.tabTypePractice) el.tabTypePractice.addEventListener('click', () => switchTab('typePractice'));
  el.tabPractice.addEventListener('click', () => switchTab('practice'));
  if (el.tabMistakes) el.tabMistakes.addEventListener('click', () => switchTab('mistakes'));
  if (el.tabBankManager) el.tabBankManager.addEventListener('click', () => switchTab('bankManager'));
  if (el.tabSolo) el.tabSolo.addEventListener('click', () => switchTab('solo'));

  el.btnStartExam.addEventListener('click', startExam);

  el.btnQuizPrev.addEventListener('click', () => {
    if (state.quiz.currentIndex > 0) {
      state.quiz.currentIndex--;
      renderQuizNav();
      renderQuizQuestion();
    }
  });
  el.btnQuizNext.addEventListener('click', () => {
    const total = state.quiz.questions.length;
    if (total === 0) return;
    if (state.quiz.currentIndex >= total - 1) {
      promptSubmitQuiz();
    } else {
      state.quiz.currentIndex++;
      renderQuizNav();
      renderQuizQuestion();
    }
  });
  el.btnQuizSubmit.addEventListener('click', promptSubmitQuiz);
  el.btnQuizFlag.addEventListener('click', toggleFlagCurrentQuestion);
  el.btnQuizCancel.addEventListener('click', promptCancelQuiz);

  el.btnRetryTest.addEventListener('click', () => {
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
  if (el.practiceDifficultySelect) {
    el.practiceDifficultySelect.addEventListener('change', (e) => {
      state.practice.difficultyFilter = e.target.value;
      state.practice.currentIndex = 0;
      renderPracticeView();
    });
  }
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
    el.btnToggleViewMode.innerHTML = state.practice.viewMode === 'focus'
      ? `${px('scroll', 14)} Chuyển xem dạng danh sách`
      : `${px('target', 14)} Chuyển xem từng câu`;
    renderPracticeView();
  });

  // --- Bootstrap Application ---
  applyTheme(state.theme);
  el.quizStartScreen.style.display = 'block';
  el.quizActiveScreen.style.display = 'none';

  initMatrixUI();
  const initSub = SUBJECTS[state.activeSubject] || SUBJECTS.dai_so;
  if (el.startExamBadge) {
    el.startExamBadge.innerHTML = `${px(initSub.icon, 13)} ${escapeHtml(initSub.fullName)} • Chuẩn CLO PTIT`;
  }
  if (el.startExamTitle) {
    el.startExamTitle.textContent = `Thi Thử ${initSub.name} PTIT`;
  }
  renderMath(el.quizStartScreen);
  initBankManager();

  console.log(`PTIT Math Exam Prep App initialized with ${state.allQuestions.length} questions across 4 subjects.`);

  if (typeof window !== 'undefined' && window.location) {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('subject')) {
      const s = urlParams.get('subject');
      if (SUBJECTS[s]) switchSubject(s);
    }
    if (urlParams.has('solo') || urlParams.has('room')) {
      setTimeout(() => switchTab('solo'), 100);
    }
  }
})();
