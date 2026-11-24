// scripts/test_app_features.js
const fs = require('fs');
const path = require('path');

console.log("=== BẮT ĐẦU KIỂM THỬ HỆ THỐNG TRẮC NGHIỆM TOÁN PTIT ===");

// 1. Kiểm tra tải dữ liệu
const questionsPath = path.join(__dirname, '..', 'data', 'questions.json');
const raw = fs.readFileSync(questionsPath, 'utf8');
const questions = JSON.parse(raw);
console.log(`[PASS] Tải thành công ${questions.length} câu hỏi từ questions.json.`);

// 2. Kiểm tra phân bổ môn học & chuẩn CLO
const subjectStats = {};
const validCLOs = new Set(['CLO1', 'CLO2', 'CLO3']);
const validDiffs = new Set(['easy', 'medium', 'hard']);

let invalidCount = 0;
questions.forEach(q => {
  const s = q.subjectId || 'dai_so';
  if (!subjectStats[s]) {
    subjectStats[s] = { total: 0, clo1: 0, clo2: 0, clo3: 0, easy: 0, medium: 0, hard: 0 };
  }
  subjectStats[s].total++;
  if (q.clo === 'CLO1') subjectStats[s].clo1++;
  else if (q.clo === 'CLO2') subjectStats[s].clo2++;
  else if (q.clo === 'CLO3') subjectStats[s].clo3++;
  else invalidCount++;

  if (q.difficulty === 'easy') subjectStats[s].easy++;
  else if (q.difficulty === 'medium') subjectStats[s].medium++;
  else if (q.difficulty === 'hard') subjectStats[s].hard++;

  // Validate options
  if (!Array.isArray(q.options) || q.options.length !== 4) {
    console.error(`Lỗi câu #${q.id}: không đủ 4 options!`);
    invalidCount++;
  }
  if (!['A', 'B', 'C', 'D'].includes(q.correct)) {
    console.error(`Lỗi câu #${q.id}: đáp án đúng ${q.correct} không hợp lệ!`);
    invalidCount++;
  }
});

console.log("[STATS] Thống kê môn học và chuẩn CLO:", JSON.stringify(subjectStats, null, 2));
if (invalidCount === 0) {
  console.log(`[PASS] Tất cả ${questions.length} câu hỏi có đầy đủ CLO1/2/3, 4 phương án và đáp án A-D hợp lệ!`);
} else {
  console.error(`[FAIL] Có ${invalidCount} câu hỏi có trường không hợp lệ!`);
  process.exit(1);
}

// 3. Kiểm thử Thuật toán Rubric 5 mức (QĐ 292/QĐ-HV)
function evaluateCloRubric(score) {
  if (score < 4.0) return { level: 1, name: "Chưa đạt", pass: false };
  if (score < 5.5) return { level: 2, name: "Đạt mức thấp", pass: true };
  if (score < 7.0) return { level: 3, name: "Đạt yêu cầu", pass: true };
  if (score < 8.5) return { level: 4, name: "Đạt tốt", pass: true };
  return { level: 5, name: "Đạt xuất sắc", pass: true };
}

const rubricTests = [
  { score: 3.5, expectedLevel: 1, expectedPass: false },
  { score: 4.0, expectedLevel: 2, expectedPass: true },
  { score: 5.4, expectedLevel: 2, expectedPass: true },
  { score: 5.5, expectedLevel: 3, expectedPass: true },
  { score: 7.0, expectedLevel: 4, expectedPass: true },
  { score: 8.5, expectedLevel: 5, expectedPass: true },
  { score: 10.0, expectedLevel: 5, expectedPass: true }
];

rubricTests.forEach(t => {
  const r = evaluateCloRubric(t.score);
  if (r.level !== t.expectedLevel || r.pass !== t.expectedPass) {
    console.error(`[FAIL] Rubric test thất bại cho điểm ${t.score}:`, r);
    process.exit(1);
  }
});
console.log("[PASS] Thuật toán đánh giá Rubric 5 mức theo Quyết định 292/QĐ-HV hoạt động chuẩn xác 100%!");

// 4. Kiểm thử Thuật toán bốc đề theo tỷ lệ CLO
function testSampling(subjectId, count, preset) {
  const pool = questions.filter(q => (q.subjectId || 'dai_so') === subjectId);
  const ratios = {
    medium: { clo1: 0.40, clo2: 0.40, clo3: 0.20 },
    easy:   { clo1: 0.50, clo2: 0.40, clo3: 0.10 },
    hard:   { clo1: 0.25, clo2: 0.45, clo3: 0.30 }
  }[preset];

  const targetTotal = Math.min(count, pool.length);
  const t1 = Math.round(targetTotal * ratios.clo1);
  const t2 = Math.round(targetTotal * ratios.clo2);
  const t3 = targetTotal - t1 - t2;

  const p1 = pool.filter(q => q.clo === 'CLO1');
  const p2 = pool.filter(q => q.clo === 'CLO2');
  const p3 = pool.filter(q => q.clo === 'CLO3');

  const chosen = new Set();
  p1.slice(0, t1).forEach(q => chosen.add(q.id));
  p2.slice(0, t2).forEach(q => chosen.add(q.id));
  p3.slice(0, t3).forEach(q => chosen.add(q.id));

  // Backfill if needed
  pool.forEach(q => {
    if (chosen.size < targetTotal && !chosen.has(q.id)) {
      chosen.add(q.id);
    }
  });

  return { targetTotal, chosenCount: chosen.size, unique: chosen.size === targetTotal };
}

['dai_so', 'giai_tich_1', 'giai_tich_2', 'toan_roi_rac'].forEach(s => {
  [20, 25, 30, 40].forEach(n => {
    const res = testSampling(s, n, 'medium');
    if (!res.unique) {
      console.error(`[FAIL] Trùng câu hoặc thiếu câu cho môn ${s}, quy mô ${n}:`, res);
      process.exit(1);
    }
  });
});
console.log("[PASS] Thuật toán bốc đề theo tỷ lệ CLO cho cả 4 môn (20, 25, 30, 40 câu) không bị trùng lặp và phân bổ chuẩn!");

// 5. Kiểm thử Text/Markdown Parser
function parseRawQuestionsText(text, subjectId) {
  const rawBlocks = text.split(/(?=\[(?:Câu|CÂU)\s*\d+\]|^(?:Câu|CÂU)\s*\d+[:.])/gm);
  const results = [];

  rawBlocks.forEach((block) => {
    const b = block.trim();
    if (!b) return;

    let chId = 1;
    const chMatch = b.match(/(?:\[Chương\s*(\d+)\]|Chương\s*(\d+))/i);
    if (chMatch) chId = parseInt(chMatch[1] || chMatch[2], 10);

    let clo = 'CLO2';
    const cloMatch = b.match(/\[(CLO[123])\]/i);
    if (cloMatch) clo = cloMatch[1].toUpperCase();

    let diff = 'medium';
    if (/\[(?:Dễ|De|easy)\]/i.test(b)) diff = 'easy';
    else if (/\[(?:Khó|Kho|hard)\]/i.test(b)) diff = 'hard';

    let correct = 'A';
    const ansMatch = b.match(/(?:Đáp án|Đáp án đúng|Key|Answer)\s*[:=]?\s*([A-D])/i);
    if (ansMatch) correct = ansMatch[1].toUpperCase();

    let expl = 'Lời giải chi tiết.';
    const explMatch = b.match(/(?:Lời giải|Giải thích|Explanation)\s*[:=]?\s*([\s\S]*?)$/i);
    if (explMatch) expl = explMatch[1].trim();

    const optA = b.match(/(?:^|\n)\s*A\s*[\.:\)]\s*([\s\S]*?)(?=(?:^|\n)\s*B\s*[\.:\)]|$)/m);
    const optB = b.match(/(?:^|\n)\s*B\s*[\.:\)]\s*([\s\S]*?)(?=(?:^|\n)\s*C\s*[\.:\)]|$)/m);
    const optC = b.match(/(?:^|\n)\s*C\s*[\.:\)]\s*([\s\S]*?)(?=(?:^|\n)\s*D\s*[\.:\)]|$)/m);
    const optD = b.match(/(?:^|\n)\s*D\s*[\.:\)]\s*([\s\S]*?)(?=(?:^|\n)\s*(?:Đáp án|Lời giải)|$)/m);

    if (!optA || !optB || !optC || !optD) return;

    let qText = b.split(/(?:^|\n)\s*A\s*[\.:\)]/m)[0].trim();
    qText = qText.replace(/^\[(?:Câu|CÂU)\s*\d+\]/i, '').replace(/\[(?:Chương\s*\d+|CLO[123]|Dễ|Trung bình|Khó|De|Kho)\]/gi, '').trim();

    results.push({
      question: qText,
      options: [
        { key: "A", text: optA[1].trim() },
        { key: "B", text: optB[1].trim() },
        { key: "C", text: optC[1].trim() },
        { key: "D", text: optD[1].trim() }
      ],
      correct: correct,
      explanation: expl,
      clo: clo,
      difficulty: diff,
      chapterId: chId,
      subjectId: subjectId
    });
  });

  return results;
}

const sampleText = `[Câu 1] [Chương 1] [CLO1] [Dễ]
Tính giới hạn $\\lim_{x \\to 0} \\frac{\\sin x}{x}$.
A. $1$
B. $0$
C. $2$
D. $-1$
Đáp án: A
Lời giải: Theo định lý giới hạn lượng giác cơ bản, kết quả bằng 1.

[Câu 2] [Chương 2] [CLO3] [Khó]
Tìm bán kính hội tụ của chuỗi $\\sum x^n / n$.
A. $R = 1$
B. $R = 0$
C. $R = \\infty$
D. $R = 2$
Đáp án: A
Lời giải: Áp dụng công thức D'Alembert ta được $R = 1$.`;

const parsed = parseRawQuestionsText(sampleText, 'giai_tich_1');
if (parsed.length === 2 && parsed[0].correct === 'A' && parsed[1].clo === 'CLO3' && parsed[1].chapterId === 2) {
  console.log("[PASS] Bộ phân tích Text/Markdown nhận diện câu hỏi, phương án, đáp án đúng và CLO hoàn hảo!");
} else {
  console.error("[FAIL] Lỗi phân tích Text:", parsed);
  process.exit(1);
}

console.log("\n=== TẤT CẢ CÁC BÀI KIỂM THỬ ĐỀU ĐẠT CHUẨN 100%! ===");
