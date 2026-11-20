# build_full_bank.py
import json
import re

# Load original questions
from load_orig import original_map

# Load new questions from generators
from gen_topic1 import questions_topic1
from gen_topic2 import questions_topic2
from gen_topic3 import questions_topic3
from gen_topic4 import questions_topic4
from gen_topic5 import questions_topic5
from gen_topic6 import questions_topic6

topic_meta = {
    1: {"name": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ", "orig_range": range(1, 7), "new_qs": questions_topic1},
    2: {"name": "MA TRẬN VÀ ĐỊNH THỨC", "orig_range": range(7, 16), "new_qs": questions_topic2},
    3: {"name": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH", "orig_range": range(16, 21), "new_qs": questions_topic3},
    4: {"name": "KHÔNG GIAN VÉC TƠ", "orig_range": range(21, 26), "new_qs": questions_topic4},
    5: {"name": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG", "orig_range": range(26, 36), "new_qs": questions_topic5},
    6: {"name": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG", "orig_range": range(36, 43), "new_qs": questions_topic6},
}

all_questions = []
current_id = 1

for t_id in range(1, 7):
    meta = topic_meta[t_id]
    # First add original questions for this topic
    for orig_id in meta["orig_range"]:
        if orig_id in original_map:
            q_data = original_map[orig_id].copy()
            q_data["id"] = current_id
            q_data["topicId"] = t_id
            q_data["topicName"] = meta["name"]
            all_questions.append(q_data)
            current_id += 1
            
    # Then add new questions
    for new_q in meta["new_qs"]:
        q_copy = new_q.copy()
        q_copy["id"] = current_id
        q_copy["topicId"] = t_id
        q_copy["topicName"] = meta["name"]
        q_copy["isOriginal"] = False
        all_questions.append(q_copy)
        current_id += 1

print(f"Total questions compiled: {len(all_questions)}")

# Validation
for q in all_questions:
    assert len(q["options"]) == 4, f"Question {q['id']} does not have 4 options"
    assert q["correct"] in ["A", "B", "C", "D"], f"Question {q['id']} invalid correct answer: {q['correct']}"
    assert len(q["question"]) > 5, f"Question {q['id']} question too short"
    assert len(q["explanation"]) > 5, f"Question {q['id']} explanation too short"

# Save JSON
with open("data/questions.json", "w", encoding="utf-8") as f:
    json.dump(all_questions, f, ensure_ascii=False, indent=2)

# Save JS
with open("data/questions.js", "w", encoding="utf-8") as f:
    f.write("// Ngân hàng 200 câu hỏi Đại số tuyến tính & Toán rời rạc\n")
    f.write("window.QUESTIONS_BANK = ")
    json.dump(all_questions, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Successfully written data/questions.json and data/questions.js")
