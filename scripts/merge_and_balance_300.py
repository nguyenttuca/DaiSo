import json, re, random

# 1. Load existing 200 questions
with open("data/questions.json", "r", encoding="utf-8") as f:
    existing_qs = json.load(f)

assert len(existing_qs) == 200, f"Expected 200 questions, found {len(existing_qs)}"

# 2. Load extra 100 questions
extra_files = [
    "scripts/topic1_extra.json",
    "scripts/topic2_extra.json",
    "scripts/topic3_extra.json",
    "scripts/topic4_extra.json",
    "scripts/topic5_6_extra.json"
]

all_extras = []
for p in extra_files:
    with open(p, "r", encoding="utf-8") as f:
        qs = json.load(f)
        all_extras.extend(qs)

assert len(all_extras) == 100, f"Expected 100 extra questions, found {len(all_extras)}"

# 3. Target distribution for the 100 new questions: exactly 25 A, 25 B, 25 C, 25 D
# Topic 1 (20 qs): 5 A, 5 B, 5 C, 5 D
# Topic 2 (15 qs): 4 A, 4 B, 4 C, 3 D
# Topic 3 (20 qs): 5 A, 5 B, 5 C, 5 D
# Topic 4 (15 qs): 4 A, 4 B, 4 C, 3 D
# Topic 5 (15 qs): 4 A, 4 B, 3 C, 4 D
# Topic 6 (15 qs): 3 A, 3 B, 4 C, 5 D

targets_per_topic = {
    1: ['A']*5 + ['B']*5 + ['C']*5 + ['D']*5,
    2: ['A']*4 + ['B']*4 + ['C']*4 + ['D']*3,
    3: ['A']*5 + ['B']*5 + ['C']*5 + ['D']*5,
    4: ['A']*4 + ['B']*4 + ['C']*4 + ['D']*3,
    5: ['A']*4 + ['B']*4 + ['C']*3 + ['D']*4,
    6: ['A']*3 + ['B']*3 + ['C']*4 + ['D']*5,
}

# Verify sum of targets:
total_a = sum(t.count('A') for t in targets_per_topic.values())
total_b = sum(t.count('B') for t in targets_per_topic.values())
total_c = sum(t.count('C') for t in targets_per_topic.values())
total_d = sum(t.count('D') for t in targets_per_topic.values())
assert total_a == 25 and total_b == 25 and total_c == 25 and total_d == 25, "Target counts mismatch!"

random.seed(2026)

for tid in range(1, 7):
    t_targets = targets_per_topic[tid]
    random.shuffle(t_targets)
    
    t_new_qs = [q for q in all_extras if q["topicId"] == tid]
    assert len(t_new_qs) == len(t_targets), f"Topic {tid}: {len(t_new_qs)} != {len(t_targets)}"
    
    for q, target_key in zip(t_new_qs, t_targets):
        old_corr = q["correct"]
        corr_opt = next(o for o in q["options"] if o["key"] == old_corr)
        corr_text = corr_opt["text"]
        distractors = [o["text"] for o in q["options"] if o["key"] != old_corr]
        
        all_keys = ["A", "B", "C", "D"]
        other_keys = [k for k in all_keys if k != target_key]
        
        new_opts = {}
        new_opts[target_key] = corr_text
        for k, dist_text in zip(other_keys, distractors):
            new_opts[k] = dist_text
            
        q["options"] = [{"key": k, "text": new_opts[k]} for k in all_keys]
        q["correct"] = target_key
        
        exp = q["explanation"]
        if re.search(r'Chọn đáp án:\s*[A-D]', exp):
            exp = re.sub(r'Chọn đáp án:\s*[A-D]', f'Chọn đáp án: {target_key}', exp)
        else:
            exp = exp.rstrip() + f"\n* **Chọn đáp án: {target_key}.**"
        q["explanation"] = exp

# 4. Merge existing and extra
full_bank = existing_qs + all_extras
assert len(full_bank) == 300, f"Expected 300, got {len(full_bank)}"

# Ensure IDs are continuous 1 to 300
for idx, q in enumerate(full_bank, 1):
    q["id"] = idx

# 5. Verification
errors = []
counts = {"A": 0, "B": 0, "C": 0, "D": 0}

for q in full_bank:
    qid = q["id"]
    counts[q["correct"]] += 1
    
    opts = q["options"]
    if len(opts) != 4:
        errors.append(f"Q{qid}: does not have 4 options")
    keys = [o["key"] for o in opts]
    if keys != ["A", "B", "C", "D"]:
        errors.append(f"Q{qid}: invalid keys {keys}")
    texts = [o["text"].strip() for o in opts]
    if len(set(texts)) != 4:
        errors.append(f"Q{qid}: duplicate options {texts}")
        
    exp = q["explanation"]
    match = re.search(r'Chọn đáp án:\s*([A-D])', exp)
    if not match:
        errors.append(f"Q{qid}: no 'Chọn đáp án' in explanation")
    elif match.group(1) != q["correct"]:
        errors.append(f"Q{qid}: exp says {match.group(1)} != correct {q['correct']}")
        
    all_text = q["question"] + " " + " ".join(texts) + " " + exp
    clean_text = all_text.replace(r"\$", "")
    if clean_text.count("$$") % 2 != 0:
        errors.append(f"Q{qid}: unbalanced $$")
    without_double = clean_text.replace("$$", "")
    if without_double.count("$") % 2 != 0:
        errors.append(f"Q{qid}: unbalanced $")

if errors:
    print(f"FAILED WITH {len(errors)} ERRORS:")
    for e in errors[:15]:
        print(" -", e)
    exit(1)

print("SUCCESS: 300 questions passed all checks!")
print("Overall Bank Key Distribution (300 questions):", counts)

for tid in range(1, 7):
    t_qs = [q for q in full_bank if q["topicId"] == tid]
    t_counts = {"A": 0, "B": 0, "C": 0, "D": 0}
    for q in t_qs:
        t_counts[q["correct"]] += 1
    print(f"Topic {tid}: {len(t_qs)} questions -> {t_counts}")

# Save to data/questions.json
with open("data/questions.json", "w", encoding="utf-8") as f:
    json.dump(full_bank, f, ensure_ascii=False, indent=2)

# Save to data/questions.js
with open("data/questions.js", "w", encoding="utf-8") as f:
    f.write("// Ngân hàng 300 câu hỏi Đại số tuyến tính & Toán rời rạc (Bản mở rộng chuẩn hóa)\n")
    f.write("window.QUESTIONS_BANK = window.QUESTIONS_DATA = ")
    json.dump(full_bank, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Saved data/questions.json and data/questions.js successfully!")
