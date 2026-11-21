import json
import random
import re
import sys
import os

sys.path.append('scripts')
import gen_topic1, gen_topic2, gen_topic3, gen_topic4, gen_topic5, gen_topic6

# 1. Load authentic 81 questions
with open('data/questions.json', 'r', encoding='utf-8') as f:
    authentic_list = json.load(f)

for q in authentic_list:
    q['isOriginal'] = True
    q['origin'] = 'original'

# Topic name map
TOPIC_NAMES = {
    1: "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    2: "MA TRẬN VÀ ĐỊNH THỨC",
    3: "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    4: "KHÔNG GIAN VÉC TƠ",
    5: "ÁNH XẠ TUYẾN TÍNH",
    6: "DẠNG TOÀN PHƯƠNG VÀ KHÔNG GIAN EUCLIDE"
}

# 2. Load extra candidate pools
with open('scripts/topic1_extra.json', 'r', encoding='utf-8') as f: extra1 = json.load(f)
with open('scripts/topic2_extra.json', 'r', encoding='utf-8') as f: extra2 = json.load(f)
with open('scripts/topic3_extra.json', 'r', encoding='utf-8') as f: extra3 = json.load(f)
with open('scripts/topic4_extra.json', 'r', encoding='utf-8') as f: extra4 = json.load(f)
with open('scripts/topic5_6_extra.json', 'r', encoding='utf-8') as f: extra5_6 = json.load(f)

extra5 = [q for q in extra5_6 if q['topicId'] == 5]
extra6 = [q for q in extra5_6 if q['topicId'] == 6]

t_pools = {
    1: gen_topic1.questions_topic1 + extra1,
    2: gen_topic2.questions_topic2 + extra2,
    3: gen_topic3.questions_topic3 + extra3,
    4: gen_topic4.questions_topic4 + extra4,
    5: gen_topic5.questions_topic5 + extra5,
    6: gen_topic6.questions_topic6 + extra6,
}

# Target counts per topic for the 200 extra questions
target_counts = {1: 34, 2: 34, 3: 33, 4: 33, 5: 33, 6: 33}

selected_extra = []
seen_questions = set()
for q in authentic_list:
    norm_q = re.sub(r'\s+', ' ', q['question']).strip().lower()
    seen_questions.add(norm_q)

for t in range(1, 7):
    pool = t_pools[t]
    unique_pool = []
    for q in pool:
        norm_q = re.sub(r'\s+', ' ', q['question']).strip().lower()
        if norm_q not in seen_questions:
            seen_questions.add(norm_q)
            q_copy = dict(q)
            q_copy['topicId'] = t
            unique_pool.append(q_copy)
    
    need = target_counts[t]
    if len(unique_pool) < need:
        raise ValueError(f"Topic {t} has only {len(unique_pool)} unique questions, need {need}")
    
    selected_topic_qs = unique_pool[:need]
    selected_extra.extend(selected_topic_qs)

assert len(selected_extra) == 200, f"Expected 200 extra questions, got {len(selected_extra)}"

# 3. Clean and balance options A, B, C, D across the 200 extra questions
# Desired distribution: exactly 50 A, 50 B, 50 C, 50 D
target_keys = ['A'] * 50 + ['B'] * 50 + ['C'] * 50 + ['D'] * 50
random.seed(42)  # deterministic
random.shuffle(target_keys)

processed_extra = []
for idx, q in enumerate(selected_extra):
    desired_key = target_keys[idx]
    
    # Original correct option text
    curr_correct = q.get('correct', 'A')
    options_map = {opt['key']: opt['text'] for opt in q['options']}
    correct_text = options_map.get(curr_correct, options_map['A'])
    
    # Other option texts
    other_texts = [opt['text'] for opt in q['options'] if opt['key'] != curr_correct]
    while len(other_texts) < 3:
        other_texts.append("Không có đáp án phù hợp")
    random.shuffle(other_texts)
    
    # Construct new options with correct_text at desired_key
    new_options = []
    keys = ['A', 'B', 'C', 'D']
    other_idx = 0
    for k in keys:
        if k == desired_key:
            new_options.append({'key': k, 'text': correct_text})
        else:
            new_options.append({'key': k, 'text': other_texts[other_idx]})
            other_idx += 1
            
    # Update explanation if it ends with "Chọn đáp án: X"
    explanation = q.get('explanation', '')
    explanation = re.sub(r'\*?\*?Chọn đáp án:\s*([A-D])\.?\*?\*?', f'**Chọn đáp án: {desired_key}.**', explanation)
    if f'**Chọn đáp án: {desired_key}.**' not in explanation:
        explanation += f'\n\n* **Chọn đáp án: {desired_key}.**'

    new_q = {
        'id': 81 + idx + 1,
        'originalId': idx + 1,
        'examId': 'extra',
        'examName': 'Luyện tập mở rộng PTIT',
        'examQuestionNo': idx + 1,
        'topicId': q['topicId'],
        'topicName': TOPIC_NAMES[q['topicId']],
        'question': q['question'],
        'options': new_options,
        'correct': desired_key,
        'explanation': explanation,
        'isOriginal': False,
        'origin': 'extra'
    }
    processed_extra.append(new_q)

# Check distribution of processed_extra
counts = {}
for q in processed_extra:
    counts[q['correct']] = counts.get(q['correct'], 0) + 1
print("Extra questions correct answer distribution:", counts)

# Combined 281 questions
combined = authentic_list + processed_extra
print(f"Total combined questions: {len(combined)} (81 authentic + {len(processed_extra)} extra)")

# Save to data/questions.json
with open('data/questions.json', 'w', encoding='utf-8') as f:
    json.dump(combined, f, ensure_ascii=False, indent=2)

# Save to data/questions.js
js_content = f"""// NGÂN HÀNG CÂU HỎI ĐẠI SỐ TUYẾN TÍNH & TOÁN RỜI RẠC PTIT
// Tổng hợp 281 câu hỏi:
// - 81 câu ĐỀ THI GỐC CHÍNH THỨC PTIT (isOriginal: true, origin: 'original')
// - 200 câu BỘ LUYỆN TẬP MỞ RỘNG PTIT (isOriginal: false, origin: 'extra')
window.QUESTIONS_BANK = window.QUESTIONS_DATA = {json.dumps(combined, ensure_ascii=False, indent=2)};
"""

with open('data/questions.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Successfully written to data/questions.json and data/questions.js!")
