# -*- coding: utf-8 -*-
import json

with open("data/de101.json", "r", encoding="utf-8") as f:
    de101 = json.load(f)

with open("data/de_ontap.json", "r", encoding="utf-8") as f:
    de_ontap = json.load(f)

print(f"De 101 count: {len(de101)}")
print(f"De On Tap count: {len(de_ontap)}")

authentic_bank = []
current_id = 1

# Process De 101
for item in de101:
    q = {
        "id": current_id,
        "originalId": item["examQuestionNo"],
        "examId": "de101",
        "examName": "Đề minh họa 101 • PTIT",
        "examQuestionNo": item["examQuestionNo"],
        "topicId": item["topicId"],
        "topicName": item["topicName"],
        "question": item["question"].strip(),
        "options": item["options"],
        "correct": item["correct"].strip().upper(),
        "explanation": item["explanation"].strip(),
        "isOriginal": True
    }
    # Validate
    assert len(q["options"]) == 4, f"Options count error in De 101 Q{item['examQuestionNo']}"
    assert q["correct"] in ["A", "B", "C", "D"], f"Correct key invalid in De 101 Q{item['examQuestionNo']}"
    authentic_bank.append(q)
    current_id += 1

# Process De On Tap
for item in de_ontap:
    q = {
        "id": current_id,
        "originalId": item["examQuestionNo"],
        "examId": "de_ontap",
        "examName": "Đề ôn tập PTIT • 80 phút",
        "examQuestionNo": item["examQuestionNo"],
        "topicId": item["topicId"],
        "topicName": item["topicName"],
        "question": item["question"].strip(),
        "options": item["options"],
        "correct": item["correct"].strip().upper(),
        "explanation": item["explanation"].strip(),
        "isOriginal": True
    }
    # Validate
    assert len(q["options"]) == 4, f"Options count error in De On Tap Q{item['examQuestionNo']}"
    assert q["correct"] in ["A", "B", "C", "D"], f"Correct key invalid in De On Tap Q{item['examQuestionNo']}"
    authentic_bank.append(q)
    current_id += 1

print(f"Total authentic questions built: {len(authentic_bank)}")

# Save to data/questions.json
with open("data/questions.json", "w", encoding="utf-8") as f:
    json.dump(authentic_bank, f, ensure_ascii=False, indent=2)

# Save to data/questions.js
js_content = "// Ngân hàng 81 câu hỏi ĐỀ THI GỐC ĐẠI SỐ TUYẾN TÍNH & TOÁN RỜI RẠC PTIT\n"
js_content += "// Nguồn tài liệu chính thức: Đề minh họa 101 (40 câu) & Đề ôn tập 80 phút (41 câu)\n"
js_content += "window.QUESTIONS_BANK = window.QUESTIONS_DATA = "
js_content += json.dumps(authentic_bank, ensure_ascii=False, indent=2)
js_content += ";\n"

with open("data/questions.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Saved data/questions.json and data/questions.js successfully!")
