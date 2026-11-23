# -*- coding: utf-8 -*-
"""
procedural_generators.py
Bộ sinh câu hỏi trắc nghiệm Toán rời rạc & Đại số tuyến tính chuẩn PTIT.
24 dạng bài (sub 1..4 của 6 chương), mỗi dạng bài sở hữu 10 mô hình toán học (modes)
độc lập, đa dạng, sâu sắc về bản chất, bẫy trắc nghiệm, bài toán tham số và các không gian khác nhau.
"""

import random
import math
import re
import os
import sys

sys.path.insert(0, os.path.dirname(__file__))

from generators_ch1 import gen_ch1
from generators_ch2 import gen_ch2
from generators_ch3 import gen_ch3
from generators_ch4 import gen_ch4
from generators_ch5 import gen_ch5
from generators_ch6 import gen_ch6

def make_unique_options(cor, wrong_candidates):
    cor_str = str(cor).strip()
    seen = {cor_str}
    distractors = []
    
    for w in wrong_candidates:
        w_str = str(w).strip()
        if w_str and w_str not in seen:
            seen.add(w_str)
            distractors.append(w_str)
            if len(distractors) == 3:
                break
                
    if len(distractors) < 3:
        # Check if variable assignment like $x = 2$ or $m = -1$
        m_var = re.match(r"^\$([a-zA-Z\\]+)\s*=\s*(-?\d+)\$$", cor_str)
        if m_var:
            var_name = m_var.group(1)
            base_val = int(m_var.group(2))
            for delta in [1, -1, 2, -2, 3, -3, 4]:
                cand = f"${var_name} = {base_val + delta}$"
                if cand not in seen:
                    seen.add(cand)
                    distractors.append(cand)
                    if len(distractors) == 3:
                        break

        # Check pure integer like $5$
        m = re.match(r"^\$(-?\d+)\$(\s*.*)$", cor_str)
        if m and len(distractors) < 3:
            base_num = int(m.group(1))
            suffix = m.group(2)
            deltas = [1, -1, 2, -2, 3, -3, 4, -4, 5, 6, 7]
            for d in deltas:
                cand = f"${base_num + d}${suffix}"
                if cand not in seen:
                    seen.add(cand)
                    distractors.append(cand)
                    if len(distractors) == 3:
                        break
        elif "(" in cor_str and ")" in cor_str and len(distractors) < 3:
            nums = [int(x) for x in re.findall(r"-?\d+", cor_str)]
            if len(nums) >= 2:
                c1, c2 = nums[0], nums[1]
                cand_coords = [
                    f"({c2}, {c1})",
                    f"({c1 + 1}, {c2})",
                    f"({c1}, {c2 + 1})",
                    f"({c1 + 2}, {c2 - 1})",
                    f"({c1 - 1}, {c2 + 2})"
                ]
                for cand in cand_coords:
                    if cand not in seen:
                        seen.add(cand)
                        distractors.append(cand)
                        if len(distractors) == 3:
                            break

        math_fallbacks = [
            "Không xác định được giá trị",
            "Không tồn tại phương án thỏa mãn",
            "Luôn đúng với mọi giá trị của tham số",
            "Chỉ thỏa mãn khi hệ số bằng 0"
        ]
        for fb in math_fallbacks:
            if len(distractors) >= 3:
                break
            if fb not in seen:
                seen.add(fb)
                distractors.append(fb)

    final_opts = [
        {"key": "A", "text": cor_str},
        {"key": "B", "text": distractors[0]},
        {"key": "C", "text": distractors[1]},
        {"key": "D", "text": distractors[2]}
    ]
    return final_opts

def shuffle_options_balanced(options, target_key):
    correct_opt = options[0]
    wrong_opts = options[1:]
    random.shuffle(wrong_opts)
    
    target_idx = {'A': 0, 'B': 1, 'C': 2, 'D': 3}[target_key]
    new_opts = [None] * 4
    new_opts[target_idx] = {'key': target_key, 'text': correct_opt['text']}
    
    w_idx = 0
    for i in range(4):
        if i != target_idx:
            k = ['A', 'B', 'C', 'D'][i]
            new_opts[i] = {'key': k, 'text': wrong_opts[w_idx]['text']}
            w_idx += 1
            
    return new_opts, target_key

# ==============================================================================
# MAIN GENERATOR FUNCTION
# ==============================================================================
TOPIC_NAMES = {
    1: "CHƯƠNG 1: LOGIC MỆNH ĐỀ, TẬP HỢP, ÁNH XẠ & BOOLE",
    2: "CHƯƠNG 2: KHÔNG GIAN VÉC TƠ",
    3: "CHƯƠNG 3: MA TRẬN VÀ ĐỊNH THỨC",
    4: "CHƯƠNG 4: HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    5: "CHƯƠNG 5: ÁNH XẠ TUYẾN TÍNH",
    6: "CHƯƠNG 6: KHÔNG GIAN VÉC TƠ EUCLIDE, DẠNG TOÀN PHƯƠNG"
}

DISPATCHERS = {
    1: gen_ch1,
    2: gen_ch2,
    3: gen_ch3,
    4: gen_ch4,
    5: gen_ch5,
    6: gen_ch6
}

def generate_additional_questions(topic_id, sub_type_id, count, seen_texts):
    results = []
    target_keys = ['A', 'B', 'C', 'D']
    attempts = 0
    fn = DISPATCHERS[topic_id]

    while len(results) < count and attempts < 4000:
        attempts += 1
        seed = attempts * 17 + len(results) * 31 + sub_type_id * 101
        q_raw = fn(sub_type_id, seed, make_unique_options)
        if q_raw["question"] in seen_texts:
            continue

        seen_texts.add(q_raw["question"])
        target_key = target_keys[len(results) % 4]
        shuffled_opts, final_correct = shuffle_options_balanced(q_raw["options"], target_key)

        exp = q_raw["explanation"]
        exp = exp.replace("**Chọn đáp án: A.**", f"**Chọn đáp án: {final_correct}.**")

        mode = seed % 10
        raw_diff = q_raw.get("difficulty")
        if not raw_diff:
            if mode in [0, 1, 2]:
                raw_diff = "easy"
            elif mode in [3, 4, 5, 6]:
                raw_diff = "medium"
            else:
                raw_diff = "hard"

        new_q = {
            "topicId": topic_id,
            "topicName": TOPIC_NAMES[topic_id],
            "subTypeId": sub_type_id,
            "question": q_raw["question"],
            "options": shuffled_opts,
            "correct": final_correct,
            "explanation": exp,
            "difficulty": raw_diff,
            "isOriginal": False,
            "origin": "extra"
        }
        results.append(new_q)

    return results
