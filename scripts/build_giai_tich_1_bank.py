#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json
import re
import os

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT_DIR, "data")
C1_PATH = '/Users/nguyenttuca/Documents/c_u_h_i_n_t_p_tr_c_nghi_m_gi_i_t_ch_1_c_p_n_l_i_gi_i_chi_ti_t.md'
M102_PATH = '/Users/nguyenttuca/Documents/minh_h_a_gi_i_t_ch_1_ptit_m_102_k_m_p_n_v_l_i_gi_i_chi_ti_t.md'

CHAPTER_INFO = {
    1: {"name": "Giới hạn của dãy số", "short": "Chương 1"},
    2: {"name": "Hàm số 1 biến", "short": "Chương 2"},
    3: {"name": "Đạo hàm và vi phân", "short": "Chương 3"},
    4: {"name": "Phép tính tích phân", "short": "Chương 4"},
    5: {"name": "Lý thuyết chuỗi", "short": "Chương 5"}
}

def sanitize_katex(text):
    if not text:
        return ""
    s = text
    # Fix double closing braces in LaTeX
    s = re.sub(r'\\\}\s*\}', r'\\}', s)
    # Fix common math notation
    s = re.sub(r'O\(\s*E\s*\\\s*log\s*V\s*\)', r'O(E \\log V)', s)
    return s.strip()

def parse_c1_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    main_text = text.split('## BẢNG TỔNG HỢP')[0]
    raw_chapters = re.split(r'##\s+CHƯƠNG\s+(\d+):\s*([^\n]+)', main_text)
    
    questions = []
    
    # In c1 file:
    # Chapter 1 in file -> Chapter 1 (Giới hạn của dãy số)
    # Chapter 2 in file -> split into Chapter 2 (Hàm số 1 biến) and Chapter 3 (Đạo hàm và vi phân)
    # Chapter 3 in file -> Chapter 4 (Phép tính tích phân)
    # Chapter 4 in file -> Chapter 5 (Lý thuyết chuỗi)
    
    ch2_to_ch2_qnums = {1, 2, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 28, 33, 38}

    for i in range(1, len(raw_chapters), 3):
        file_ch_num = int(raw_chapters[i])
        ch_body = raw_chapters[i+2]
        raw_qs = re.split(r'\n(?=\*\*Câu\s+\d+[\.:])', ch_body)
        
        for block in raw_qs:
            block = block.strip()
            if not block.startswith('**Câu'):
                continue
            m_num = re.match(r'\*\*Câu\s+(\d+)[\.:]\*\*\s*(.*)', block, re.S)
            if not m_num:
                continue
            qnum = int(m_num.group(1))
            rest = m_num.group(2).strip()

            m_ans = re.search(r'>\s*\*\*Đáp án:\*\*\s*\*{0,2}([A-D])\*{0,2}', rest)
            correct_ans = m_ans.group(1) if m_ans else None

            m_exp = re.search(r'>\s*\*\*Lời giải chi tiết:\*\*\s*(.*)', rest, re.S)
            explanation = ''
            if m_exp:
                raw_exp = m_exp.group(1)
                exp_lines = [re.sub(r'^\s*>\s?', '', l) for l in raw_exp.split('\n')]
                explanation = '\n'.join(exp_lines).strip()

            options = []
            opt_matches = list(re.finditer(r'^[-\*]\s*\*{0,2}([A-D])[\.:]\*{0,2}\s*(.*?)(?=\n[-\*]\s*\*{0,2}[A-D][\.:]|\n>|\Z)', rest, re.M | re.S))
            for om in opt_matches:
                k = om.group(1)
                t = sanitize_katex(re.sub(r'\s+', ' ', om.group(2).strip()))
                options.append({'key': k, 'text': t})

            q_text_match = re.search(r'^(.*?)(?=\n[-\*]\s*\*{0,2}[A-D][\.:])', rest, re.S)
            q_text = sanitize_katex(q_text_match.group(1).strip() if q_text_match else '')

            # Determine Target Chapter
            if file_ch_num == 1:
                target_ch = 1
            elif file_ch_num == 2:
                if qnum in ch2_to_ch2_qnums:
                    target_ch = 2
                else:
                    target_ch = 3
            elif file_ch_num == 3:
                target_ch = 4
            elif file_ch_num == 4:
                target_ch = 5
            else:
                target_ch = 1

            # Determine CLO and Difficulty
            clo = "CLO2"
            diff = "medium"

            # Specific rules for file_ch_num == 1
            if file_ch_num == 1:
                if qnum in {1, 3, 4, 8, 9, 10, 16, 17}:
                    clo, diff = "CLO1", "easy"
                elif qnum in {5, 27, 29}:
                    clo, diff = "CLO3", "hard"
                elif qnum in {2, 6, 7, 11, 12, 13, 14, 15, 18, 19, 21, 23}:
                    clo, diff = "CLO2", "easy"
                else:
                    clo, diff = "CLO2", "medium"
            
            # Specific rules for file_ch_num == 2 (Target 2 or 3)
            elif file_ch_num == 2:
                if target_ch == 2:
                    if qnum in {11, 12, 18, 33}:
                        clo, diff = "CLO1", "easy"
                    elif qnum in {23}:
                        clo, diff = "CLO3", "hard"
                    elif qnum in {13, 14, 17, 19, 21}:
                        clo, diff = "CLO2", "easy"
                    else:
                        clo, diff = "CLO2", "medium"
                else: # target_ch == 3
                    if qnum in {4, 30, 31, 32, 35}:
                        clo, diff = "CLO1", "easy"
                    elif qnum in {25, 29, 34, 40}:
                        clo, diff = "CLO3", "hard"
                    elif qnum in {3, 5, 6, 26, 27}:
                        clo, diff = "CLO2", "easy"
                    else:
                        clo, diff = "CLO2", "medium"

            # Specific rules for file_ch_num == 3 (Target 4 - Tích phân)
            elif file_ch_num == 3:
                if qnum in {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}:
                    clo, diff = "CLO2", "easy"
                elif qnum in {31, 32, 33, 34, 35, 36, 37, 38, 39, 40}:
                    clo, diff = "CLO3", "hard"
                else:
                    clo, diff = "CLO2", "medium"

            # Specific rules for file_ch_num == 4 (Target 5 - Chuỗi)
            elif file_ch_num == 4:
                if qnum in {1, 2, 5, 6, 11, 12}:
                    clo, diff = "CLO2", "easy"
                elif qnum in {3, 27, 28, 31, 32, 33, 34, 37, 38, 39, 40}:
                    clo, diff = "CLO3", "hard"
                elif qnum in {16, 17, 21}:
                    clo, diff = "CLO1", "easy"
                else:
                    clo, diff = "CLO2", "medium"

            questions.append({
                "originFile": "c_u_h_i_n_t_p_tr_c_nghi_m_gi_i_t_ch_1",
                "originalId": qnum,
                "fileChapter": file_ch_num,
                "chapterId": target_ch,
                "chapterName": CHAPTER_INFO[target_ch]["name"],
                "topicName": CHAPTER_INFO[target_ch]["name"],
                "examId": "on_tap_gt1",
                "examName": "Ngân hàng Ôn tập Giải tích 1 PTIT",
                "question": q_text,
                "options": options,
                "correct": correct_ans,
                "explanation": sanitize_katex(explanation),
                "clo": clo,
                "difficulty": diff,
                "isOriginal": True,
                "origin": "ptit_standard"
            })
    return questions

def parse_m102_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    p1 = text.split('## PHẦN II')[0]
    p3 = text.split('## PHẦN III')[1]

    sol_matches = re.findall(r'###\s+Câu\s+(\d+)[\.:]\s*Chọn\s+([A-D])\s*\n(.*?)(?=###\s+Câu|\Z)', p3, re.S)
    sol_dict = {}
    for qnum_str, ans, sol in sol_matches:
        sol_dict[int(qnum_str)] = {
            'ans': ans,
            'explanation': sanitize_katex(sol.strip())
        }

    m102_meta = {
        1: {'ch': 3, 'clo': 'CLO2', 'diff': 'medium'},
        2: {'ch': 3, 'clo': 'CLO3', 'diff': 'hard'},
        3: {'ch': 1, 'clo': 'CLO3', 'diff': 'hard'},
        4: {'ch': 3, 'clo': 'CLO3', 'diff': 'hard'},
        5: {'ch': 3, 'clo': 'CLO1', 'diff': 'easy'},
        6: {'ch': 4, 'clo': 'CLO2', 'diff': 'easy'},
        7: {'ch': 4, 'clo': 'CLO2', 'diff': 'medium'},
        8: {'ch': 5, 'clo': 'CLO3', 'diff': 'hard'},
        9: {'ch': 5, 'clo': 'CLO2', 'diff': 'medium'},
        10: {'ch': 1, 'clo': 'CLO2', 'diff': 'medium'},
        11: {'ch': 3, 'clo': 'CLO2', 'diff': 'medium'},
        12: {'ch': 2, 'clo': 'CLO2', 'diff': 'medium'},
        13: {'ch': 2, 'clo': 'CLO1', 'diff': 'easy'},
        14: {'ch': 4, 'clo': 'CLO3', 'diff': 'hard'},
        15: {'ch': 3, 'clo': 'CLO2', 'diff': 'medium'},
        16: {'ch': 3, 'clo': 'CLO2', 'diff': 'medium'},
        17: {'ch': 4, 'clo': 'CLO3', 'diff': 'hard'},
        18: {'ch': 4, 'clo': 'CLO2', 'diff': 'medium'},
        19: {'ch': 5, 'clo': 'CLO1', 'diff': 'easy'},
        20: {'ch': 2, 'clo': 'CLO2', 'diff': 'medium'},
        21: {'ch': 2, 'clo': 'CLO1', 'diff': 'easy'},
        22: {'ch': 3, 'clo': 'CLO2', 'diff': 'medium'},
        23: None, # Skip duplicate of Q6 in Ôn tập
        24: {'ch': 4, 'clo': 'CLO1', 'diff': 'easy'},
        25: {'ch': 4, 'clo': 'CLO2', 'diff': 'medium'},
        26: {'ch': 3, 'clo': 'CLO1', 'diff': 'easy'},
        27: {'ch': 4, 'clo': 'CLO3', 'diff': 'hard'},
        28: {'ch': 3, 'clo': 'CLO2', 'diff': 'medium'},
        29: {'ch': 1, 'clo': 'CLO1', 'diff': 'easy'},
        30: {'ch': 3, 'clo': 'CLO2', 'diff': 'medium'},
        31: {'ch': 4, 'clo': 'CLO2', 'diff': 'medium'},
        32: {'ch': 5, 'clo': 'CLO2', 'diff': 'medium'},
        33: {'ch': 1, 'clo': 'CLO3', 'diff': 'hard'},
        34: {'ch': 2, 'clo': 'CLO1', 'diff': 'easy'},
        35: {'ch': 4, 'clo': 'CLO1', 'diff': 'easy'},
        36: {'ch': 5, 'clo': 'CLO2', 'diff': 'medium'},
        37: {'ch': 5, 'clo': 'CLO3', 'diff': 'hard'},
        38: {'ch': 5, 'clo': 'CLO2', 'diff': 'medium'},
        39: {'ch': 1, 'clo': 'CLO3', 'diff': 'hard'},
        40: {'ch': 5, 'clo': 'CLO2', 'diff': 'medium'},
    }

    raw_qs = re.split(r'\n(?=\*\*Câu\s+\d+[\.:])', p1)
    questions = []

    for block in raw_qs:
        block = block.strip()
        if not block.startswith('**Câu'):
            continue
        m_num = re.match(r'\*\*Câu\s+(\d+)[\.:]\*\*\s*(.*)', block, re.S)
        if not m_num:
            continue
        qnum = int(m_num.group(1))
        if qnum not in m102_meta or m102_meta[qnum] is None:
            continue # skip duplicate or excluded
        
        meta = m102_meta[qnum]
        target_ch = meta['ch']
        clo = meta['clo']
        diff = meta['diff']

        rest = m_num.group(2).strip()

        options = []
        opt_matches = list(re.finditer(r'^[-\*]\s*\*{0,2}([A-D])[\.:]\*{0,2}\s*(.*?)(?=\n[-\*]\s*\*{0,2}[A-D][\.:]|\n---|\Z)', rest, re.M | re.S))
        for om in opt_matches:
            k = om.group(1)
            t = sanitize_katex(re.sub(r'\s+', ' ', om.group(2).strip()))
            options.append({'key': k, 'text': t})

        q_text_match = re.search(r'^(.*?)(?=\n[-\*]\s*\*{0,2}[A-D][\.:])', rest, re.S)
        q_text = sanitize_katex(q_text_match.group(1).strip() if q_text_match else '')

        sol_info = sol_dict.get(qnum, {})
        ans = sol_info.get('ans', 'A')
        explanation = sol_info.get('explanation', '')

        questions.append({
            "originFile": "minh_h_a_gi_i_t_ch_1_ptit_m_102",
            "originalId": qnum,
            "chapterId": target_ch,
            "chapterName": CHAPTER_INFO[target_ch]["name"],
            "topicName": CHAPTER_INFO[target_ch]["name"],
            "examId": "de102_gt1",
            "examName": "Đề minh họa 102 • PTIT Giải tích 1",
            "question": q_text,
            "options": options,
            "correct": ans,
            "explanation": explanation,
            "clo": clo,
            "difficulty": diff,
            "isOriginal": True,
            "origin": "ptit_standard"
        })
    return questions

c1_qs = parse_c1_file(C1_PATH)
m102_qs = parse_m102_file(M102_PATH)

print(f'Parsed {len(c1_qs)} questions from Ôn tập GT1.')
print(f'Parsed {len(m102_qs)} questions from Mã đề 102 GT1.')
all_gt1 = c1_qs + m102_qs
print(f'Total GT1 questions: {len(all_gt1)}')

by_chapter = {}
by_clo = {'CLO1': 0, 'CLO2': 0, 'CLO3': 0}
by_diff = {'easy': 0, 'medium': 0, 'hard': 0}

for q in all_gt1:
    ch = q['chapterId']
    by_chapter[ch] = by_chapter.get(ch, 0) + 1
    by_clo[q['clo']] += 1
    by_diff[q['difficulty']] += 1

print('By chapter:', by_chapter)
print('By CLO:', by_clo)
print('By diff:', by_diff)
