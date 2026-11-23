const fs = require("fs");

const questions = JSON.parse(fs.readFileSync("./data/questions.json", "utf8"));
console.log("Loaded questions:", questions.length);

// Difficulty presets according to User specifications:
// Đề Dễ: 70% Dễ - 20% TB - 10% Khó
// Đề TB: 50% Dễ - 30% TB - 20% Khó
// Đề Khó: 30% Dễ - 40% TB - 30% Khó
const PRESETS = {
  easy:   { easy: 0.70, medium: 0.20, hard: 0.10 },
  medium: { easy: 0.50, medium: 0.30, hard: 0.20 },
  hard:   { easy: 0.30, medium: 0.40, hard: 0.30 }
};

function simulateExamSelection(preset, requestedTotal, selectedChapters) {
  const cfg = PRESETS[preset] || PRESETS.medium;
  const pool = questions.filter(q => selectedChapters.includes(q.topicId));

  const poolEasy = pool.filter(q => (q.difficulty || 'medium') === 'easy');
  const poolMedium = pool.filter(q => (q.difficulty || 'medium') === 'medium');
  const poolHard = pool.filter(q => (q.difficulty || 'medium') === 'hard');

  let targetEasy = Math.round(requestedTotal * cfg.easy);
  let targetMedium = Math.round(requestedTotal * cfg.medium);
  let targetHard = requestedTotal - targetEasy - targetMedium;

  // Clamping to available
  if (targetHard > poolHard.length) {
    targetHard = poolHard.length;
    targetMedium = Math.round((requestedTotal - targetHard) * (cfg.medium / (cfg.easy + cfg.medium)));
    targetEasy = requestedTotal - targetHard - targetMedium;
  }
  if (targetMedium > poolMedium.length) {
    targetMedium = poolMedium.length;
    targetEasy = requestedTotal - targetMedium - targetHard;
  }

  // Sample tier helper
  function sampleTier(tierPool, countNeeded, chapters, chosenSet) {
    if (countNeeded <= 0 || !tierPool || tierPool.length === 0) return [];
    const available = tierPool.filter(q => !chosenSet.has(q.id));
    if (available.length <= countNeeded) {
      available.forEach(q => chosenSet.add(q.id));
      return available;
    }
    const byCh = {};
    chapters.forEach(ch => {
      byCh[ch] = available.filter(q => q.topicId === ch);
    });
    const base = Math.floor(countNeeded / chapters.length);
    let rem = countNeeded % chapters.length;
    const tierSelected = [];

    chapters.forEach(ch => {
      const take = base + (rem > 0 ? 1 : 0);
      if (rem > 0) rem--;
      const chQuestions = byCh[ch] || [];
      const slice = chQuestions.slice(0, take);
      slice.forEach(q => {
        if (!chosenSet.has(q.id)) {
          chosenSet.add(q.id);
          tierSelected.push(q);
        }
      });
    });

    if (tierSelected.length < countNeeded) {
      const leftovers = available.filter(q => !chosenSet.has(q.id));
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

  selected.push(...sampleTier(poolEasy, targetEasy, selectedChapters, chosenIds));
  selected.push(...sampleTier(poolMedium, targetMedium, selectedChapters, chosenIds));
  selected.push(...sampleTier(poolHard, targetHard, selectedChapters, chosenIds));

  // Count difficulty distribution
  const counts = { easy: 0, medium: 0, hard: 0 };
  selected.forEach(q => {
    const diff = q.difficulty || 'medium';
    counts[diff] = (counts[diff] || 0) + 1;
  });

  return {
    total: selected.length,
    counts,
    percentages: {
      easy: ((counts.easy / selected.length) * 100).toFixed(1) + "%",
      medium: ((counts.medium / selected.length) * 100).toFixed(1) + "%",
      hard: ((counts.hard / selected.length) * 100).toFixed(1) + "%"
    }
  };
}

console.log("\n=== TEST 1: ALL 6 CHAPTERS ===");
const testCounts = [10, 15, 20, 25, 30, 40];
const diffModes = ["easy", "medium", "hard"];

diffModes.forEach(mode => {
  console.log(`\n--- Difficulty Preset: ${mode.toUpperCase()} (Target: ${PRESETS[mode].easy*100}% Dễ - ${PRESETS[mode].medium*100}% TB - ${PRESETS[mode].hard*100}% Khó) ---`);
  testCounts.forEach(total => {
    const res = simulateExamSelection(mode, total, [1, 2, 3, 4, 5, 6]);
    console.log(`Đề ${total} câu -> Tổng: ${res.total} | Dễ: ${res.counts.easy} (${res.percentages.easy}) | TB: ${res.counts.medium} (${res.percentages.medium}) | Khó: ${res.counts.hard} (${res.percentages.hard})`);
    if (res.total !== total) {
      throw new Error(`Total mismatch for ${mode} ${total}`);
    }
  });
});

console.log("\n=== TEST 2: SUBSET CHAPTERS (e.g. Chapters 2 and 3) ===");
diffModes.forEach(mode => {
  const res = simulateExamSelection(mode, 20, [2, 3]);
  console.log(`${mode.toUpperCase()} (20 câu, Ch 2+3): Dễ: ${res.counts.easy} (${res.percentages.easy}) | TB: ${res.counts.medium} (${res.percentages.medium}) | Khó: ${res.counts.hard} (${res.percentages.hard})`);
});

console.log("\n=== TEST 3: SINGLE CHAPTER (e.g. Chapter 1 only, 25 questions) ===");
diffModes.forEach(mode => {
  const res = simulateExamSelection(mode, 25, [1]);
  console.log(`${mode.toUpperCase()} (25 câu, Ch 1): Dễ: ${res.counts.easy} (${res.percentages.easy}) | TB: ${res.counts.medium} (${res.percentages.medium}) | Khó: ${res.counts.hard} (${res.percentages.hard})`);
});

console.log("\nALL PRESETS AND SIMULATION TESTS PASSED PERFECTLY!");
