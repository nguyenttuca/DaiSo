#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json
import os
import sys

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT_DIR, "data")
SCRIPTS_DIR = os.path.join(ROOT_DIR, "scripts")
sys.path.append(SCRIPTS_DIR)

from gt1_ch1_questions import CHAPTER_1_QUESTIONS
from gt1_ch2_questions import CHAPTER_2_QUESTIONS
from gt1_ch3_questions import CHAPTER_3_QUESTIONS
from gt1_ch4_questions import CHAPTER_4_QUESTIONS
from gt1_ch5_questions import CHAPTER_5_QUESTIONS

CHAPTER_INFO = {
    1: {"name": "Giới hạn của dãy số", "short": "Chương 1"},
    2: {"name": "Hàm số 1 biến", "short": "Chương 2"},
    3: {"name": "Đạo hàm và vi phân", "short": "Chương 3"},
    4: {"name": "Phép tính tích phân", "short": "Chương 4"},
    5: {"name": "Lý thuyết chuỗi", "short": "Chương 5"}
}

# 1. Read existing questions.json
qfile = os.path.join(DATA_DIR, "questions.json")
with open(qfile, 'r', encoding='utf-8') as f:
    existing_all = json.load(f)

dai_so_qs = [q for q in existing_all if q.get('subjectId', 'dai_so') == 'dai_so']
gt1_existing = [q for q in existing_all if q.get('subjectId') == 'giai_tich_1']
giai_tich_2_qs = [q for q in existing_all if q.get('subjectId') == 'giai_tich_2']
toan_roi_rac_qs = [q for q in existing_all if q.get('subjectId') == 'toan_roi_rac']

print(f'Existing: dai_so={len(dai_so_qs)}, gt1={len(gt1_existing)}, gt2={len(giai_tich_2_qs)}, toan_roi_rac={len(toan_roi_rac_qs)}')

# 2. Package 200 new GT1 questions
new_chapters = [
    (1, CHAPTER_1_QUESTIONS),
    (2, CHAPTER_2_QUESTIONS),
    (3, CHAPTER_3_QUESTIONS),
    (4, CHAPTER_4_QUESTIONS),
    (5, CHAPTER_5_QUESTIONS)
]

new_gt1_list = []
start_id = 1001 + len(gt1_existing)

for ch_id, qs in new_chapters:
    for idx, q in enumerate(qs):
        current_id = start_id + len(new_gt1_list)
        formatted_q = {
            "id": current_id,
            "subjectId": "giai_tich_1",
            "subjectName": "Giải tích 1 (BAS1203)",
            "chapterId": ch_id,
            "chapterName": f"Chương {ch_id}: {CHAPTER_INFO[ch_id]['name']}",
            "topicId": ch_id,
            "topicName": CHAPTER_INFO[ch_id]["name"],
            "subTypeId": q.get("subTypeId", 1),
            "typeId": q.get("typeId", f"{ch_id}.1"),
            "typeName": q.get("typeName", CHAPTER_INFO[ch_id]["name"]),
            "clo": q["clo"],
            "difficulty": q["difficulty"],
            "examId": "ptit_standard",
            "examName": "Ngân hàng chuẩn PTIT mở rộng",
            "question": q["question"],
            "options": q["options"],
            "correct": q["correct"],
            "explanation": q["explanation"],
            "isOriginal": True,
            "origin": "ptit_standard"
        }
        new_gt1_list.append(formatted_q)

print(f'Prepared {len(new_gt1_list)} new GT1 questions!')
combined_gt1 = gt1_existing + new_gt1_list
print(f'Total GT1 questions now: {len(combined_gt1)}')

# Re-index all GT1 from 1001 to 1000 + len(combined_gt1)
for idx, q in enumerate(combined_gt1):
    q["id"] = 1001 + idx

# Re-index GT2 starting at 2001
for idx, q in enumerate(giai_tich_2_qs):
    q["id"] = 2001 + idx

# Re-index toan_roi_rac starting at 3001
for idx, q in enumerate(toan_roi_rac_qs):
    q["id"] = 3001 + idx

# Combine all
all_final = dai_so_qs + combined_gt1 + giai_tich_2_qs + toan_roi_rac_qs
print(f'Total all questions in bank: {len(all_final)}')

# Validate
seen_ids = set()
for q in all_final:
    assert q["id"] not in seen_ids, f"Duplicate ID: {q['id']}"
    seen_ids.add(q["id"])
    assert len(q["options"]) == 4, f"Options len != 4 for ID {q['id']}"
    assert q["correct"] in {"A", "B", "C", "D"}, f"Invalid answer for ID {q['id']}"
    assert q["clo"] in {"CLO1", "CLO2", "CLO3"}, f"Invalid CLO for ID {q['id']}"
    assert q["difficulty"] in {"easy", "medium", "hard"}, f"Invalid diff for ID {q['id']}"

# Write data/questions.json
with open(qfile, 'w', encoding='utf-8') as f:
    json.dump(all_final, f, ensure_ascii=False, indent=2)
print(f'Wrote data/questions.json ({len(all_final)} questions)')

# Write data/questions.js
js_file = os.path.join(DATA_DIR, "questions.js")
with open(js_file, 'w', encoding='utf-8') as f:
    f.write('// NGÂN HÀNG ĐỀ TOÁN PTIT\n')
    f.write('(function (global) {\n')
    f.write('  const questions = ')
    json.dump(all_final, f, ensure_ascii=False, indent=2)
    f.write(';\n')
    f.write("  if (typeof window !== 'undefined') window.QUESTIONS_BANK = window.QUESTIONS_DATA = questions;\n")
    f.write("  if (typeof module !== 'undefined' && module.exports) module.exports = questions;\n")
    f.write("  global.QUESTIONS_BANK = global.QUESTIONS_DATA = questions;\n")
    f.write("})(typeof window !== 'undefined' ? window : global);\n")
print(f'Wrote data/questions.js ({len(all_final)} questions)')
