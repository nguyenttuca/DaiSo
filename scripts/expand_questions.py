#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
expand_questions.py
Adds comprehensive, authentic questions for:
- Giải tích 1 (BAS1203): to reach 45+ questions
- Giải tích 2 (BAS1204): to reach 45+ questions
- Toán rời rạc (INT1358): to reach 45+ questions
All with detailed step-by-step KaTeX explanations and strict PTIT CLO1/2/3 tags.
"""

import json
import os

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT_DIR, "data")

with open(os.path.join(DATA_DIR, "questions.json"), "r", encoding="utf-8") as f:
    all_questions = json.load(f)

# Find max ID
max_id = max(q["id"] for q in all_questions)

new_questions = []

def add_q(subjectId, subjectName, chapterId, chapterName, topicId, topicName, subTypeId, typeName, clo, difficulty, question, options, correct, explanation):
    global max_id
    max_id += 1
    new_questions.append({
        "id": max_id,
        "subjectId": subjectId,
        "subjectName": subjectName,
        "chapterId": chapterId,
        "chapterName": chapterName,
        "topicId": topicId,
        "topicName": topicName,
        "subTypeId": subTypeId,
        "typeId": f"{chapterId}.{subTypeId}",
        "typeName": typeName,
        "clo": clo,
        "difficulty": difficulty,
        "examId": "ptit_standard",
        "examName": "Đề chuẩn PTIT",
        "question": question,
        "options": options,
        "correct": correct,
        "explanation": explanation,
        "isOriginal": True,
        "origin": "ptit_standard"
    })

# =========================================================================
# BỔ SUNG GIẢI TÍCH 1 (BAS1203)
# =========================================================================
gt1_id = "giai_tich_1"
gt1_name = "Giải tích 1 (BAS1203)"

# Chương 1
add_q(gt1_id, gt1_name, 1, "Chương 1: Phép tính vi phân hàm một biến", 1, "Giới hạn & Tính liên tục", 1, "Giới hạn lượng giác cơ bản", "CLO1", "easy",
      "Tính giới hạn $L = \\lim_{x \\to 0} \\frac{\\sin(5x)}{\\sin(2x)}$.",
      [{"key": "A", "text": "$\\frac{5}{2}$"}, {"key": "B", "text": "$\\frac{2}{5}$"}, {"key": "C", "text": "$1$"}, {"key": "D", "text": "$0$"}],
      "A", "* Khi $x \\to 0$, ta có $\\sin(5x) \\sim 5x$ và $\\sin(2x) \\sim 2x$.\n* Do đó: $L = \\lim_{x \\to 0} \\frac{5x}{2x} = \\frac{5}{2}$.\n* **Chọn đáp án: A.**")

add_q(gt1_id, gt1_name, 1, "Chương 1: Phép tính vi phân hàm một biến", 1, "Giới hạn & Tính liên tục", 2, "Điểm gián đoạn của hàm số", "CLO1", "easy",
      "Điểm $x = 0$ là điểm gián đoạn loại mấy của hàm số $f(x) = \\frac{\\sin x}{|x|}$?",
      [{"key": "A", "text": "Gián đoạn loại 1 (bước nhảy)"}, {"key": "B", "text": "Gián đoạn loại 2"}, {"key": "C", "text": "Gián đoạn bỏ được"}, {"key": "D", "text": "Hàm số liên tục"}],
      "A", "* Xét giới hạn một phía:\n  $$\\lim_{x \\to 0^+} \\frac{\\sin x}{x} = 1$$\n  $$\\lim_{x \\to 0^-} \\frac{\\sin x}{-x} = -1$$\n* Cả hai giới hạn một phía tồn tại hữu hạn nhưng khác nhau $\\implies$ điểm gián đoạn loại 1 có bước nhảy $h = 1 - (-1) = 2$.\n* **Chọn đáp án: A.**")

add_q(gt1_id, gt1_name, 1, "Chương 1: Phép tính vi phân hàm một biến", 2, "Đạo hàm & Vi phân", 3, "Đạo hàm của hàm lượng giác ngược", "CLO1", "easy",
      "Đạo hàm của hàm số $y = \\arctan(2x)$ là:",
      [{"key": "A", "text": "$y' = \\frac{2}{1 + 4x^2}$"}, {"key": "B", "text": "$y' = \\frac{1}{1 + 4x^2}$"}, {"key": "C", "text": "$y' = \\frac{2}{\\sqrt{1 - 4x^2}}$"}, {"key": "D", "text": "$y' = \\frac{1}{1 + 2x^2}$"}],
      "A", "* Áp dụng công thức đạo hàm hàm hợp $(\\arctan u)' = \\frac{u'}{1 + u^2}$ với $u = 2x, u' = 2$:\n  $$y' = \\frac{2}{1 + (2x)^2} = \\frac{2}{1 + 4x^2}$$\n* **Chọn đáp án: A.**")

add_q(gt1_id, gt1_name, 1, "Chương 1: Phép tính vi phân hàm một biến", 3, "Cực trị & Tiệm cận", 5, "Tìm tiệm cận xiên của đồ thị", "CLO2", "medium",
      "Tìm phương trình đường tiệm cận xiên của đồ thị hàm số $y = \\frac{2x^2 + 3x + 1}{x - 1}$ khi $x \\to +\\infty$.",
      [{"key": "A", "text": "$y = 2x + 5$"}, {"key": "B", "text": "$y = 2x + 3$"}, {"key": "C", "text": "$y = 2x - 1$"}, {"key": "D", "text": "$y = x + 5$"}],
      "A", "* Chia đa thức tử cho mẫu:\n  $$\\frac{2x^2 + 3x + 1}{x - 1} = 2x + 5 + \\frac{6}{x - 1}$$\n* Khi $x \\to +\\infty$, phần dư $\\frac{6}{x - 1} \\to 0$.\n* Vậy đường tiệm cận xiên là $y = 2x + 5$.\n* **Chọn đáp án: A.**")

add_q(gt1_id, gt1_name, 1, "Chương 1: Phép tính vi phân hàm một biến", 2, "Đạo hàm & Vi phân", 3, "Đạo hàm cấp cao theo công thức Leibniz", "CLO2", "medium",
      "Tính đạo hàm cấp 2 của hàm số $y = x^2 e^x$ tại $x = 0$.",
      [{"key": "A", "text": "$2$"}, {"key": "B", "text": "$0$"}, {"key": "C", "text": "$1$"}, {"key": "D", "text": "$4$"}],
      "A", "* Sử dụng công thức Leibniz $(uv)'' = u''v + 2u'v' + uv''$:\n  $$y'' = (x^2)'' e^x + 2(x^2)'(e^x)' + x^2(e^x)'' = 2e^x + 4x e^x + x^2 e^x$$\n* Tại $x = 0$:\n  $$y''(0) = 2e^0 + 0 + 0 = 2$$\n* **Chọn đáp án: A.**")

add_q(gt1_id, gt1_name, 1, "Chương 1: Phép tính vi phân hàm một biến", 1, "Giới hạn & Tính liên tục", 1, "Giới hạn vô cùng trừ vô cùng $\\infty - \\infty$", "CLO2", "medium",
      "Tính giới hạn $L = \\lim_{x \\to +\\infty} (\\sqrt{x^2 + 4x} - x)$.",
      [{"key": "A", "text": "$2$"}, {"key": "B", "text": "$4$"}, {"key": "C", "text": "$0$"}, {"key": "D", "text": "$+\\infty$"}],
      "A", "* Nhân lượng liên hợp:\n  $$\\sqrt{x^2 + 4x} - x = \\frac{(x^2 + 4x) - x^2}{\\sqrt{x^2 + 4x} + x} = \\frac{4x}{\\sqrt{x^2 + 4x} + x}$$\n* Chia cả tử và mẫu cho $x$ ($x > 0$):\n  $$L = \\lim_{x \\to +\\infty} \\frac{4}{\\sqrt{1 + 4/x} + 1} = \\frac{4}{1 + 1} = 2$$\n* **Chọn đáp án: A.**")

add_q(gt1_id, gt1_name, 1, "Chương 1: Phép tính vi phân hàm một biến", 2, "Đạo hàm & Vi phân", 6, "Khai triển Taylor quanh điểm $x_0$", "CLO3", "hard",
      "Tìm đa thức Taylor bậc 2 của hàm số $f(x) = \\sqrt{x}$ tại lân cận điểm $x_0 = 1$.",
      [{"key": "A", "text": "$P_2(x) = 1 + \\frac{1}{2}(x - 1) - \\frac{1}{8}(x - 1)^2$"},
       {"key": "B", "text": "$P_2(x) = 1 + \\frac{1}{2}(x - 1) + \\frac{1}{4}(x - 1)^2$"},
       {"key": "C", "text": "$P_2(x) = 1 + (x - 1) - \\frac{1}{2}(x - 1)^2$"},
       {"key": "D", "text": "$P_2(x) = 1 + \\frac{1}{2}(x - 1) - \\frac{1}{4}(x - 1)^2$"}],
      "A", "* Tính đạo hàm tại $x_0 = 1$:\n  - $f(1) = 1$\n  - $f'(x) = \\frac{1}{2\\sqrt{x}} \\implies f'(1) = \\frac{1}{2}$\n  - $f''(x) = -\\frac{1}{4}x^{-3/2} \\implies f''(1) = -\\frac{1}{4}$\n* Theo công thức Taylor bậc 2:\n  $$P_2(x) = f(1) + f'(1)(x - 1) + \\frac{f''(1)}{2!}(x - 1)^2 = 1 + \\frac{1}{2}(x - 1) - \\frac{1}{8}(x - 1)^2$$\n* **Chọn đáp án: A.**")

add_q(gt1_id, gt1_name, 1, "Chương 1: Phép tính vi phân hàm một biến", 3, "Cực trị & Tiệm cận", 4, "Biện luận số cực trị theo tham số m", "CLO3", "hard",
      "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = \\frac{1}{3}x^3 - m x^2 + (m^2 - 4)x + 1$ có 2 điểm cực trị trái dấu.",
      [{"key": "A", "text": "$-2 < m < 2$"}, {"key": "B", "text": "$m > 2$"}, {"key": "C", "text": "$m < -2$"}, {"key": "D", "text": "$m \\neq \\pm 2$"}],
      "A", "* Đạo hàm $y' = x^2 - 2mx + (m^2 - 4)$.\n* Hàm số có 2 cực trị trái dấu $\\iff$ phương trình $y' = 0$ có 2 nghiệm phân biệt trái dấu:\n  $$a \\cdot c < 1 \\cdot (m^2 - 4) < 0 \\iff m^2 < 4 \\iff -2 < m < 2$$\n* **Chọn đáp án: A.**")

# Chương 2
add_q(gt1_id, gt1_name, 2, "Chương 2: Phép tính tích phân hàm một biến", 4, "Nguyên hàm & Tích phân xác định", 7, "Tích phân hàm phân thức hữu tỉ", "CLO2", "medium",
      "Tính tích phân $I = \\int_{2}^{3} \\frac{dx}{x^2 - 1}$.",
      [{"key": "A", "text": "$\\frac{1}{2}\\ln\\left(\\frac{3}{2}\\right)$"}, {"key": "B", "text": "$\\ln\\left(\\frac{3}{2}\\right)$"}, {"key": "C", "text": "$\\frac{1}{2}\\ln(2)$"}, {"key": "D", "text": "$\\frac{1}{4}\\ln(3)$"}],
      "A", "* Tách phân thức:\n  $$\\frac{1}{x^2 - 1} = \\frac{1}{2}\\left(\\frac{1}{x - 1} - \\frac{1}{x + 1}\\right)$$\n* Nguyên hàm: $F(x) = \\frac{1}{2}\\ln\\left|\\frac{x - 1}{x + 1}\\right|$.\n* Thay cận từ 2 đến 3:\n  $$I = \\frac{1}{2}\\left(\\ln\\left|\\frac{2}{4}\\right| - \\ln\\left|\\frac{1}{3}\\right|\\right) = \\frac{1}{2}\\left(\\ln\\frac{1}{2} - \\ln\\frac{1}{3}\\right) = \\frac{1}{2}\\ln\\left(\\frac{3}{2}\\right)$$\n* **Chọn đáp án: A.**")

add_q(gt1_id, gt1_name, 2, "Chương 2: Phép tính tích phân hàm một biến", 4, "Nguyên hàm & Tích phân xác định", 9, "Tích phân từng phần hàm lượng giác", "CLO2", "medium",
      "Tính tích phân $I = \\int_{0}^{\\pi/2} x \\cos(x) dx$.",
      [{"key": "A", "text": "$\\frac{\\pi}{2} - 1$"}, {"key": "B", "text": "$\\frac{\\pi}{2} + 1$"}, {"key": "C", "text": "$1$"}, {"key": "D", "text": "$\\frac{\\pi}{4}$"}],
      "A", "* Đặt $\\begin{cases} u = x \\implies du = dx \\\\ dv = \\cos(x)dx \\implies v = \\sin(x) \\end{cases}$\n* Áp dụng công thức tích phân từng phần:\n  $$I = [x \\sin(x)]_{0}^{\\pi/2} - \\int_{0}^{\\pi/2} \\sin(x)dx = \\frac{\\pi}{2} - [-\\cos(x)]_{0}^{\\pi/2} = \\frac{\\pi}{2} - (0 - (-1)) = \\frac{\\pi}{2} - 1$$\n* **Chọn đáp án: A.**")

add_q(gt1_id, gt1_name, 2, "Chương 2: Phép tính tích phân hàm một biến", 5, "Tích phân suy rộng", 8, "Tích phân suy rộng loại 2", "CLO2", "medium",
      "Tính tích phân suy rộng loại 2: $I = \\int_{0}^{1} \\frac{dx}{\\sqrt{1 - x^2}}$.",
      [{"key": "A", "text": "$\\frac{\\pi}{2}$"}, {"key": "B", "text": "$\\pi$"}, {"key": "C", "text": "$1$"}, {"key": "D", "text": "Phân kỳ"}],
      "A", "* Điểm kỳ dị là $x = 1$. Nguyên hàm của $\\frac{1}{\\sqrt{1 - x^2}}$ là $\\arcsin(x)$:\n  $$I = \\lim_{t \\to 1^-} [\\arcsin(x)]_{0}^{t} = \\arcsin(1) - \\arcsin(0) = \\frac{\\pi}{2} - 0 = \\frac{\\pi}{2}$$\n* **Chọn đáp án: A.**")

add_q(gt1_id, gt1_name, 2, "Chương 2: Phép tính tích phân hàm một biến", 6, "Ứng dụng hình học của tích phân", 12, "Thể tích khối tròn xoay quanh Ox", "CLO3", "hard",
      "Tính thể tích $V$ của khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y = \\sqrt{x}$, trục hoành và đường thẳng $x = 4$ quanh trục hoành $Ox$.",
      [{"key": "A", "text": "$8\\pi$"}, {"key": "B", "text": "$4\\pi$"}, {"key": "C", "text": "$16\\pi$"}, {"key": "D", "text": "$\\frac{16\\pi}{3}$"}],
      "A", "* Áp dụng công thức thể tích khối tròn xoay quanh trục $Ox$:\n  $$V = \\pi \\int_{a}^{b} y^2 dx = \\pi \\int_{0}^{4} (\\sqrt{x})^2 dx = \\pi \\int_{0}^{4} x dx = \\pi \\left[ \\frac{x^2}{2} \\right]_{0}^{4} = \\pi \\cdot \\frac{16}{2} = 8\\pi$$\n* **Chọn đáp án: A.**")

# Chương 3
add_q(gt1_id, gt1_name, 3, "Chương 3: Chuỗi số và Chuỗi lũy thừa", 7, "Chuỗi số dương", 13, "Tiêu chuẩn căn Cauchy", "CLO2", "medium",
      "Khảo sát sự hội tụ của chuỗi số $\\sum_{n=1}^{\\infty} \\left( \\frac{2n + 1}{3n + 5} \\right)^n$.",
      [{"key": "A", "text": "Hội tụ vì $C = \\frac{2}{3} < 1$"}, {"key": "B", "text": "Phân kỳ vì $C = \\frac{3}{2} > 1$"}, {"key": "C", "text": "Phân kỳ vì $\\lim a_n = 1$"}, {"key": "D", "text": "Chuỗi đan dấu"}],
      "A", "* Áp dụng tiêu chuẩn căn Cauchy:\n  $$C = \\lim_{n \\to \\infty} \\sqrt[n]{a_n} = \\lim_{n \\to \\infty} \\frac{2n + 1}{3n + 5} = \\frac{2}{3}$$\n* Vì $C = \\frac{2}{3} < 1$, chuỗi số đã cho **hội tụ**.\n* **Chọn đáp án: A.**")

add_q(gt1_id, gt1_name, 3, "Chương 3: Chuỗi số và Chuỗi lũy thừa", 7, "Chuỗi số dương", 13, "Tính tổng của chuỗi số phân thức", "CLO2", "medium",
      "Tính tổng của chuỗi số $S = \\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)}$.",
      [{"key": "A", "text": "$1$"}, {"key": "B", "text": "$\\frac{1}{2}$"}, {"key": "C", "text": "$2$"}, {"key": "D", "text": "$+\\infty$"}],
      "A", "* Phân tích số hạng tổng quát:\n  $$a_n = \\frac{1}{n} - \\frac{1}{n+1}$$\n* Tổng riêng thứ $N$:\n  $$S_N = \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + ... + \\left(\\frac{1}{N} - \\frac{1}{N+1}\\right) = 1 - \\frac{1}{N+1}$$\n* Lấy giới hạn: $S = \\lim_{N \\to \\infty} S_N = 1 - 0 = 1$.\n* **Chọn đáp án: A.**")

add_q(gt1_id, gt1_name, 3, "Chương 3: Chuỗi số và Chuỗi lũy thừa", 8, "Chuỗi đan dấu & Chuỗi lũy thừa", 17, "Bán kính hội tụ chuỗi lũy thừa phức tạp", "CLO3", "hard",
      "Tìm bán kính hội tụ $R$ của chuỗi lũy thừa $\\sum_{n=1}^{\\infty} \\frac{n!}{n^n} x^n$.",
      [{"key": "A", "text": "$R = e$"}, {"key": "B", "text": "$R = \\frac{1}{e}$"}, {"key": "C", "text": "$R = 1$"}, {"key": "D", "text": "$R = +\\infty$"}],
      "A", "* Hệ số $c_n = \\frac{n!}{n^n}$:\n  $$\\rho = \\lim_{n \\to \\infty} \\frac{c_{n+1}}{c_n} = \\lim_{n \\to \\infty} \\frac{(n+1)!}{(n+1)^{n+1}} \\cdot \\frac{n^n}{n!} = \\lim_{n \\to \\infty} \\frac{(n+1) n^n}{(n+1) (n+1)^n} = \\lim_{n \\to \\infty} \\left( \\frac{n}{n+1} \\right)^n = \\lim_{n \\to \\infty} \\frac{1}{\\left(1 + \\frac{1}{n}\\right)^n} = \\frac{1}{e}$$\n* Bán kính hội tụ $R = \\frac{1}{\\rho} = e$.\n* **Chọn đáp án: A.**")


# =========================================================================
# BỔ SUNG GIẢI TÍCH 2 (BAS1204)
# =========================================================================
gt2_id = "giai_tich_2"
gt2_name = "Giải tích 2 (BAS1204)"

# Chương 1
add_q(gt2_id, gt2_name, 1, "Chương 1: Phép tính vi phân hàm nhiều biến", 1, "Đạo hàm riêng & Vi phân", 1, "Giới hạn hàm 2 biến tại (0,0)", "CLO1", "easy",
      "Khảo sát giới hạn $L = \\lim_{(x, y) \\to (0, 0)} \\frac{xy}{x^2 + y^2}$.",
      [{"key": "A", "text": "Giới hạn không tồn tại"}, {"key": "B", "text": "$L = 0$"}, {"key": "C", "text": "$L = 1$"}, {"key": "D", "text": "$L = \\frac{1}{2}$"}],
      "A", "* Cho $(x, y) \\to (0, 0)$ theo đường thẳng $y = kx$:\n  $$L = \\lim_{x \\to 0} \\frac{x(kx)}{x^2 + k^2 x^2} = \\frac{k}{1 + k^2}$$\n* Vì giới hạn phụ thuộc vào hệ số góc $k$ (với $k = 1 \\implies 1/2$, với $k = 0 \\implies 0$) nên giới hạn **không tồn tại**.\n* **Chọn đáp án: A.**")

add_q(gt2_id, gt2_name, 1, "Chương 1: Phép tính vi phân hàm nhiều biến", 1, "Đạo hàm riêng & Vi phân", 1, "Tính vi phân toàn phần tại một điểm", "CLO2", "medium",
      "Cho hàm số $z = x^2 y + 3y^2$. Tính vi phân toàn phần $dz$ tại điểm $(1, 2)$.",
      [{"key": "A", "text": "$dz = 4 dx + 13 dy$"}, {"key": "B", "text": "$dz = 2 dx + 12 dy$"}, {"key": "C", "text": "$dz = 4 dx + 7 dy$"}, {"key": "D", "text": "$dz = 13 dx + 4 dy$"}],
      "A", "* Tính đạo hàm riêng:\n  $$z'_x = 2xy \\implies z'_x(1, 2) = 2(1)(2) = 4$$\n  $$z'_y = x^2 + 6y \\implies z'_y(1, 2) = 1^2 + 6(2) = 13$$\n* Vi phân toàn phần: $dz = z'_x dx + z'_y dy = 4 dx + 13 dy$.\n* **Chọn đáp án: A.**")

add_q(gt2_id, gt2_name, 1, "Chương 1: Phép tính vi phân hàm nhiều biến", 2, "Cực trị hàm nhiều biến", 2, "Tìm điểm yên ngựa", "CLO2", "medium",
      "Cho hàm số $z = x^2 - y^2 + 4x - 6y$. Điểm dừng $(-2, -3)$ là loại điểm nào?",
      [{"key": "A", "text": "Điểm yên ngựa (không là cực trị)"}, {"key": "B", "text": "Điểm cực tiểu địa phương"}, {"key": "C", "text": "Điểm cực đại địa phương"}, {"key": "D", "text": "Điểm kỳ dị"}],
      "A", "* Tính các đạo hàm riêng cấp 2:\n  $$A = z''_{xx} = 2, \\quad B = z''_{xy} = 0, \\quad C = z''_{yy} = -2$$\n* Biệt thức $\\Delta = AC - B^2 = 2(-2) - 0^2 = -4 < 0$.\n* Vì $\\Delta < 0$ nên điểm dừng $(-2, -3)$ là **điểm yên ngựa** (hàm không đạt cực trị).\n* **Chọn đáp án: A.**")

add_q(gt2_id, gt2_name, 1, "Chương 1: Phép tính vi phân hàm nhiều biến", 2, "Cực trị hàm nhiều biến", 3, "Cực trị tự do hàm $x^3 + y^3 - 3xy$", "CLO3", "hard",
      "Hàm số $z = x^3 + y^3 - 3xy$ đạt cực tiểu tại điểm nào?",
      [{"key": "A", "text": "$(1, 1)$"}, {"key": "B", "text": "$(0, 0)$"}, {"key": "C", "text": "$(-1, -1)$"}, {"key": "D", "text": "$(1, -1)$"}],
      "A", "* Giải hệ điểm dừng:\n  $$\\begin{cases} z'_x = 3x^2 - 3y = 0 \\implies y = x^2 \\\\ z'_y = 3y^2 - 3x = 0 \\implies x^4 - x = 0 \\implies x(x^3 - 1) = 0 \\end{cases}$$\n  Ta có 2 điểm dừng: $M_1(0, 0)$ và $M_2(1, 1)$.\n* Đạo hàm cấp 2: $A = 6x, B = -3, C = 6y$.\n  - Tại $(0, 0)$: $\\Delta = 0 - (-3)^2 = -9 < 0 \\implies$ điểm yên ngựa.\n  - Tại $(1, 1)$: $A = 6 > 0, B = -3, C = 6 \\implies \\Delta = 36 - 9 = 27 > 0$. Vì $A > 0$ nên $(1, 1)$ là **điểm cực tiểu**.\n* **Chọn đáp án: A.**")

# Chương 2
add_q(gt2_id, gt2_name, 2, "Chương 2: Tích phân bội", 3, "Tích phân kép", 4, "Tích phân kép trên miền tam giác", "CLO2", "medium",
      "Tính tích phân kép $I = \\iint_{D} (x + 2y) dx dy$ với $D$ là tam giác giới hạn bởi $x = 0, y = 0, x + y = 1$.",
      [{"key": "A", "text": "$\\frac{1}{2}$"}, {"key": "B", "text": "$\\frac{1}{3}$"}, {"key": "C", "text": "$\\frac{1}{6}$"}, {"key": "D", "text": "$1$"}],
      "A", "* Cận lấy tích phân: $0 \\le x \\le 1, 0 \\le y \\le 1 - x$.\n  $$I = \\int_{0}^{1} dx \\int_{0}^{1 - x} (x + 2y) dy = \\int_{0}^{1} [xy + y^2]_{0}^{1-x} dx$$\n  $$I = \\int_{0}^{1} [x(1 - x) + (1 - x)^2] dx = \\int_{0}^{1} (1 - x)[x + 1 - x] dx = \\int_{0}^{1} (1 - x) dx = \\left[ x - \\frac{x^2}{2} \\right]_{0}^{1} = \\frac{1}{2}$$\n* **Chọn đáp án: A.**")

add_q(gt2_id, gt2_name, 2, "Chương 2: Tích phân bội", 4, "Tích phân bội ba", 6, "Tọa độ trụ trong tích phân bội ba", "CLO2", "medium",
      "Định thức Jacobi của phép đổi biến sang tọa độ trụ $\\begin{cases} x = r \\cos\\varphi \\\\ y = r \\sin\\varphi \\\\ z = z \\end{cases}$ bằng:",
      [{"key": "A", "text": "$J = r$"}, {"key": "B", "text": "$J = r^2$"}, {"key": "C", "text": "$J = 1$"}, {"key": "D", "text": "$J = r \\sin\\theta$"}],
      "A", "* Trong tọa độ trụ, định thức Jacobi là $J = r$ và phần tử thể tích là $dV = r dr d\\varphi dz$.\n* **Chọn đáp án: A.**")

add_q(gt2_id, gt2_name, 2, "Chương 2: Tích phân bội", 3, "Tích phân kép", 5, "Tính thể tích vật thể dưới mặt paraboloid", "CLO3", "hard",
      "Tính thể tích vật thể nằm dưới mặt paraboloid $z = 4 - x^2 - y^2$ và nằm trên mặt phẳng $Oxy$ ($z = 0$).",
      [{"key": "A", "text": "$8\\pi$"}, {"key": "B", "text": "$4\\pi$"}, {"key": "C", "text": "$16\\pi$"}, {"key": "D", "text": "$2\\pi$"}],
      "A", "* Miền chiếu lên mặt phẳng $Oxy$ là hình tròn $x^2 + y^2 \\le 4$ (bán kính $R = 2$).\n* Thể tích $V = \\iint_{D} (4 - x^2 - y^2) dx dy$.\n* Chuyển sang tọa độ cực: $0 \\le \\varphi \\le 2\\pi, 0 \\le r \\le 2$.\n  $$V = \\int_{0}^{2\\pi} d\\varphi \\int_{0}^{2} (4 - r^2) r dr = 2\\pi \\left[ 2r^2 - \\frac{r^4}{4} \\right]_{0}^{2} = 2\\pi (8 - 4) = 8\\pi$$\n* **Chọn đáp án: A.**")

# Chương 3
add_q(gt2_id, gt2_name, 3, "Chương 3: Tích phân đường và Tích phân mặt", 5, "Tích phân đường loại 1", 7, "Tích phân đường loại 1 theo độ dài cung", "CLO2", "medium",
      "Tính tích phân đường loại 1: $I = \\int_{C} (x + y) ds$, trong đó $C$ là đoạn thẳng nối gốc tọa độ $O(0, 0)$ đến điểm $A(1, 1)$.",
      [{"key": "A", "text": "$\\sqrt{2}$"}, {"key": "B", "text": "$2\\sqrt{2}$"}, {"key": "C", "text": "$1$"}, {"key": "D", "text": "$\\frac{\\sqrt{2}}{2}$"}],
      "A", "* Phương trình tham số của đoạn $OA$: $x = t, y = t$ với $0 \\le t \\le 1$.\n* Vi phân cung: $ds = \\sqrt{(x'_t)^2 + (y'_t)^2} dt = \\sqrt{1^2 + 1^2} dt = \\sqrt{2} dt$.\n* Tích phân:\n  $$I = \\int_{0}^{1} (t + t) \\sqrt{2} dt = 2\\sqrt{2} \\int_{0}^{1} t dt = 2\\sqrt{2} \\left[ \\frac{t^2}{2} \\right]_{0}^{1} = \\sqrt{2}$$\n* **Chọn đáp án: A.**")

add_q(gt2_id, gt2_name, 3, "Chương 3: Tích phân đường và Tích phân mặt", 5, "Tích phân đường loại 2 & Công thức Green", 8, "Tìm hàm thế vị $U(x, y)$", "CLO3", "hard",
      "Biết biểu thức $(2xy + 3) dx + (x^2 - 4y) dy$ là vi phân toàn phần của hàm $U(x, y)$. Tìm hàm $U(x, y)$ thỏa mãn $U(0, 0) = 0$.",
      [{"key": "A", "text": "$U(x, y) = x^2 y + 3x - 2y^2$"}, {"key": "B", "text": "$U(x, y) = x^2 y + 3x + 2y^2$"}, {"key": "C", "text": "$U(x, y) = 2xy + 3x - 4y$"}, {"key": "D", "text": "$U(x, y) = x^2 y - 2y^2$"}],
      "A", "* Kiểm tra: $P'_y = 2x, Q'_x = 2x \\implies P'_y = Q'_x$ (thỏa mãn vi phân toàn phần).\n* Tích phân lấy theo đường gấp khúc từ $(0, 0) \\to (x, 0) \\to (x, y)$:\n  $$U(x, y) = \\int_{0}^{x} P(t, 0) dt + \\int_{0}^{y} Q(x, t) dt = \\int_{0}^{x} 3 dt + \\int_{0}^{y} (x^2 - 4t) dt = 3x + x^2 y - 2y^2$$\n* **Chọn đáp án: A.**")

# Chương 4
add_q(gt2_id, gt2_name, 4, "Chương 4: Phương trình vi phân", 7, "Phương trình vi phân cấp 1 & cấp 2", 12, "Phương trình vi phân tuyến tính cấp 1 tổng quát", "CLO2", "medium",
      "Tìm nghiệm của phương trình vi phân tuyến tính cấp 1: $y' - \\frac{1}{x} y = x$ với $x > 0$.",
      [{"key": "A", "text": "$y = x^2 + C x$"}, {"key": "B", "text": "$y = x^2 + C$"}, {"key": "C", "text": "$y = \\frac{1}{2}x^2 + C$"}, {"key": "D", "text": "$y = x \\ln(x) + C x$"}],
      "A", "* Thừa số tích phân: $\\mu(x) = e^{\\int -\\frac{1}{x} dx} = e^{-\\ln x} = \\frac{1}{x}$.\n* Nhân hai vế với $\\frac{1}{x}$:\n  $$\\left( \\frac{y}{x} \\right)' = 1 \\implies \\frac{y}{x} = x + C \\implies y = x^2 + C x$$\n* **Chọn đáp án: A.**")

add_q(gt2_id, gt2_name, 4, "Chương 4: Phương trình vi phân", 7, "Phương trình vi phân cấp 1 & cấp 2", 11, "Phương trình vi phân có nghiệm phức đặc trưng", "CLO2", "medium",
      "Nghiệm tổng quát của phương trình vi phân $y'' + 4y = 0$ là:",
      [{"key": "A", "text": "$y = C_1 \\cos(2x) + C_2 \\sin(2x)$"}, {"key": "B", "text": "$y = C_1 e^{2x} + C_2 e^{-2x}$"}, {"key": "C", "text": "$y = (C_1 + C_2 x) e^{2x}$"}, {"key": "D", "text": "$y = C_1 \\cos(4x) + C_2 \\sin(4x)$"}],
      "A", "* Phương trình đặc trưng $k^2 + 4 = 0 \\iff k = \\pm 2i$ (nghiệm phức thuần ảo $\\alpha = 0, \\beta = 2$).\n* Nghiệm tổng quát là:\n  $$y = e^{0x}(C_1 \\cos(2x) + C_2 \\sin(2x)) = C_1 \\cos(2x) + C_2 \\sin(2x)$$\n* **Chọn đáp án: A.**")

add_q(gt2_id, gt2_name, 4, "Chương 4: Phương trình vi phân", 7, "Phương trình vi phân cấp 1 & cấp 2", 13, "Biện luận nghiệm PTVP cấp 2", "CLO3", "hard",
      "Tìm nghiệm của phương trình vi phân $y'' - 2y' + 5y = 0$ thỏa mãn điều kiện $y(0) = 1, y'(0) = 1$.",
      [{"key": "A", "text": "$y = e^x \\cos(2x)$"}, {"key": "B", "text": "$y = e^x \\sin(2x)$"}, {"key": "C", "text": "$y = e^x(\\cos(2x) + \\sin(2x))$"}, {"key": "D", "text": "$y = e^{2x} \\cos(x)$"}],
      "A", "* Phương trình đặc trưng $k^2 - 2k + 5 = 0 \\iff (k - 1)^2 + 4 = 0 \\iff k = 1 \\pm 2i$.\n* Nghiệm tổng quát: $y = e^x (C_1 \\cos(2x) + C_2 \\sin(2x))$.\n* Điều kiện $y(0) = 1 \\implies e^0 (C_1 (1) + 0) = 1 \\implies C_1 = 1$.\n* Đạo hàm: $y' = e^x (\\cos(2x) + C_2 \\sin(2x)) + e^x (-2\\sin(2x) + 2C_2 \\cos(2x))$.\n* Tại $x = 0$: $y'(0) = 1 + 2C_2 = 1 \\implies C_2 = 0$.\n* Vậy nghiệm là $y = e^x \\cos(2x)$.\n* **Chọn đáp án: A.**")


# =========================================================================
# BỔ SUNG TOÁN RỜI RẠC (INT1358)
# =========================================================================
trr_id = "toan_roi_rac"
trr_name = "Toán rời rạc (INT1358 / INT1359)"

# Chương 1
add_q(trr_id, trr_name, 1, "Chương 1: Bài toán đếm & Đại số Boole", 1, "Nguyên lý đếm cơ bản", 3, "Hoán vị lặp", "CLO2", "medium",
      "Có bao nhiêu hoán vị khác nhau từ các chữ cái của từ 'BANANA'?",
      [{"key": "A", "text": "$60$ cách"}, {"key": "B", "text": "$120$ cách"}, {"key": "C", "text": "$720$ cách"}, {"key": "D", "text": "$360$ cách"}],
      "A", "* Từ 'BANANA' có 6 chữ cái: 1 chữ B, 3 chữ A, 2 chữ N.\n* Số hoán vị lặp:\n  $$P(6; 1, 3, 2) = \\frac{6!}{1! \\times 3! \\times 2!} = \\frac{720}{1 \\times 6 \\times 2} = 60$$\n* **Chọn đáp án: A.**")

add_q(trr_id, trr_name, 1, "Chương 1: Bài toán đếm & Đại số Boole", 1, "Nguyên lý đếm cơ bản", 4, "Nguyên lý Dirichlet (Nguyên lý lồng chim)", "CLO1", "easy",
      "Cần chọn ngẫu nhiên ít nhất bao nhiêu sinh viên để chắc chắn có ít nhất 2 sinh viên có cùng tháng sinh?",
      [{"key": "A", "text": "$13$ sinh viên"}, {"key": "B", "text": "$12$ sinh viên"}, {"key": "C", "text": "$24$ sinh viên"}, {"key": "D", "text": "$14$ sinh viên"}],
      "A", "* Có 12 tháng sinh trong một năm (12 lồng chim).\n* Theo nguyên lý Dirichlet, nếu chọn $12 + 1 = 13$ sinh viên (13 con thỏ) thì chắc chắn có ít nhất $\\lceil 13/12 \\rceil = 2$ sinh viên sinh cùng một tháng.\n* **Chọn đáp án: A.**")

add_q(trr_id, trr_name, 1, "Chương 1: Bài toán đếm & Đại số Boole", 2, "Đại số Boole", 2, "Dạng chuẩn tắc tuyển (SOP)", "CLO2", "medium",
      "Biểu thức Boole $f(x, y) = x \\oplus y$ (phép XOR) có dạng chuẩn tắc tuyển hoàn toàn (minterm) là:",
      [{"key": "A", "text": "$x y' \\vee x' y$"}, {"key": "B", "text": "$x y \\vee x' y'$"}, {"key": "C", "text": "$(x \\vee y)(x' \\vee y')$"}, {"key": "D", "text": "$x' y'"}],
      "A", "* Bảng chân trị phép XOR:\n  - $f(1, 0) = 1 \\implies$ minterm $x y'$\n  - $f(0, 1) = 1 \\implies$ minterm $x' y$\n* Dạng chuẩn tắc tuyển là $f = x y' \\vee x' y$.\n* **Chọn đáp án: A.**")

# Chương 2
add_q(trr_id, trr_name, 2, "Chương 2: Thuật toán sinh & Quay lui", 3, "Thuật toán sinh kế tiếp", 6, "Sinh tập con k phần tử kế tiếp", "CLO2", "medium",
      "Cho tập con $k = 3$ phần tử của tập $\\{1, 2, 3, 4, 5, 6\\}$ là $\\{1, 4, 6\\}$. Tập con kế tiếp theo thứ tự từ điển là:",
      [{"key": "A", "text": "$\\{1, 5, 6\\}$"}, {"key": "B", "text": "$\\{2, 3, 4\\}$"}, {"key": "C", "text": "$\\{1, 4, 5\\}$"}, {"key": "D", "text": "$\\{2, 5, 6\\}$"}],
      "A", "* Quy tắc sinh tổ hợp $C_n^k$ kế tiếp:\n  - Vị trí lớn nhất của $a[i]$ là $n - k + i$.\n  - Với $n=6, k=3$: giới hạn cho $a[1]=4, a[2]=5, a[3]=6$.\n  - Tập $\\{1, 4, 6\\}$ có $a[3] = 6$ đã đạt cực đại. Lùi sang $a[2] = 4 < 5 \\implies$ tăng $a[2]$ lên 5.\n  - Cập nhật các phần tử phía sau: $a[3] = a[2] + 1 = 6$.\n  - Tập kế tiếp là $\\{1, 5, 6\\}$.\n* **Chọn đáp án: A.**")

add_q(trr_id, trr_name, 2, "Chương 2: Thuật toán sinh & Quay lui", 4, "Thuật toán quay lui", 7, "Hệ thức truy hồi tuyến tính thuần nhất", "CLO3", "hard",
      "Giải hệ thức truy hồi $a_n = 5a_{n-1} - 6a_{n-2}$ với điều kiện ban đầu $a_0 = 1, a_1 = 4$.",
      [{"key": "A", "text": "$a_n = 2 \\cdot 3^n - 2^n$"}, {"key": "B", "text": "$a_n = 3^n + 2^n$"}, {"key": "C", "text": "$a_n = 3 \\cdot 2^n - 3^n$"}, {"key": "D", "text": "$a_n = 4 \\cdot 2^n - 3$"}],
      "A", "* Phương trình đặc trưng: $r^2 - 5r + 6 = 0 \\iff (r - 2)(r - 3) = 0 \\implies r_1 = 2, r_2 = 3$.\n* Nghiệm tổng quát: $a_n = c_1 \\cdot 2^n + c_2 \\cdot 3^n$.\n* Thay điều kiện ban đầu:\n  $$\\begin{cases} a_0 = c_1 + c_2 = 1 \\\\ a_1 = 2c_1 + 3c_2 = 4 \\end{cases} \\implies \\begin{cases} c_1 = -1 \\\\ c_2 = 2 \\end{cases}$$\n* Vậy nghiệm là $a_n = 2 \\cdot 3^n - 2^n$.\n* **Chọn đáp án: A.**")

# Chương 3
add_q(trr_id, trr_name, 3, "Chương 3: Lý thuyết đồ thị cơ bản", 5, "Khái niệm đồ thị cơ bản", 8, "Số cạnh của đồ thị đầy đủ", "CLO1", "easy",
      "Đồ thị đầy đủ $K_n$ với $n$ đỉnh có số cạnh bằng bao nhiêu?",
      [{"key": "A", "text": "$\\frac{n(n - 1)}{2}$"}, {"key": "B", "text": "$n(n - 1)$"}, {"key": "C", "text": "$n^2$"}, {"key": "D", "text": "$n - 1$"}],
      "A", "* Trong đồ thị đầy đủ $K_n$, mỗi cặp đỉnh bất kỳ đều được nối bằng đúng một cạnh, do đó số cạnh là số tổ hợp chập 2 của $n$ đỉnh:\n  $$|E| = C_n^2 = \\frac{n(n - 1)}{2}$$\n* **Chọn đáp án: A.**")

add_q(trr_id, trr_name, 3, "Chương 3: Lý thuyết đồ thị cơ bản", 6, "Đồ thị Euler & Hamilton", 9, "Điều kiện đồ thị nửa Euler (đường đi Euler)", "CLO1", "easy",
      "Đồ thị vô hướng liên thông có một đường đi Euler (nhưng không có chu trình Euler) khi và chỉ khi:",
      [{"key": "A", "text": "Có đúng 2 đỉnh bậc lẻ"}, {"key": "B", "text": "Mọi đỉnh đều bậc lẻ"}, {"key": "C", "text": "Có đúng 1 đỉnh bậc lẻ"}, {"key": "D", "text": "Có 4 đỉnh bậc lẻ"}],
      "A", "* Định lý Euler: Đồ thị vô hướng liên thông có đường đi Euler khi và chỉ khi có đúng 2 đỉnh bậc lẻ. Khi đó đường đi Euler bắt đầu từ một đỉnh bậc lẻ và kết thúc tại đỉnh bậc lẻ còn lại.\n* **Chọn đáp án: A.**")

add_q(trr_id, trr_name, 3, "Chương 3: Lý thuyết đồ thị cơ bản", 5, "Khái niệm đồ thị cơ bản", 8, "Công thức Euler cho đồ thị phẳng", "CLO3", "hard",
      "Một đồ thị phẳng liên thông có 10 đỉnh và 15 cạnh. Hỏi đồ thị này chia mặt phẳng thành bao nhiêu miền mặt (faces)?",
      [{"key": "A", "text": "$7$ miền mặt"}, {"key": "B", "text": "$6$ miền mặt"}, {"key": "C", "text": "$8$ miền mặt"}, {"key": "D", "text": "$5$ miền mặt"}],
      "A", "* Áp dụng công thức Euler cho đồ thị phẳng liên thông:\n  $$V - E + F = 2$$\n* Thay số $V = 10, E = 15$:\n  $$10 - 15 + F = 2 \\implies -5 + F = 2 \\implies F = 7$$\n* **Chọn đáp án: A.**")

# Chương 4
add_q(trr_id, trr_name, 4, "Chương 4: Các thuật toán trên đồ thị", 8, "Thuật toán tìm kiếm DFS & BFS", 11, "Độ phức tạp thuật toán BFS/DFS", "CLO2", "medium",
      "Độ phức tạp thời gian của thuật toán duyệt đồ thị BFS hoặc DFS khi đồ thị được biểu diễn bằng danh sách kề là:",
      [{"key": "A", "text": "$O(V + E)$"}, {"key": "B", "text": "$O(V^2)$"}, {"key": "C", "text": "$O(V \\log V)$"}, {"key": "D", "text": "$O(E \\log V)$"}],
      "A", "* Khi biểu diễn đồ thị bằng danh sách kề (adjacency list), mỗi đỉnh được duyệt một lần và mỗi cạnh được xét tối đa hai lần $\\implies$ độ phức tạp thời gian là $O(|V| + |E|)$.\n* (Lưu ý: Nếu dùng ma trận kề thì độ phức tạp là $O(|V|^2)$).\n* **Chọn đáp án: A.**")

add_q(trr_id, trr_name, 4, "Chương 4: Các thuật toán trên đồ thị", 9, "Thuật toán Cây khung & Đường đi ngắn nhất", 12, "Thuật toán Floyd-Warshall", "CLO3", "hard",
      "Thuật toán Floyd-Warshall được sử dụng để giải quyết bài toán nào và có độ phức tạp là bao nhiêu?",
      [{"key": "A", "text": "Tìm đường đi ngắn nhất giữa mọi cặp đỉnh với độ phức tạp $O(V^3)$"},
       {"key": "B", "text": "Tìm đường đi ngắn nhất từ 1 nguồn với độ phức tạp $O(E \\log V)$"},
       {"key": "C", "text": "Tìm cây khung nhỏ nhất với độ phức tạp $O(E \\log E)$"},
       {"key": "D", "text": "Tìm luồng cực đại với độ phức tạp $O(V^2 E)$"}],
      "A", "* Thuật toán quy hoạch động Floyd-Warshall tìm khoảng cách ngắn nhất giữa tất cả các cặp đỉnh (All-Pairs Shortest Path) trong đồ thị có trọng số (cho phép trọng số âm nhưng không có chu trình âm) với 3 vòng lặp lồng nhau $\\implies O(|V|^3)$.\n* **Chọn đáp án: A.**")

# Thêm tất cả câu mới vào all_questions
all_questions.extend(new_questions)

print(f"Added {len(new_questions)} new comprehensive questions.")
print(f"New total: {len(all_questions)}")

# Ghi lại questions.json và questions.js
with open(os.path.join(DATA_DIR, "questions.json"), "w", encoding="utf-8") as f:
    json.dump(all_questions, f, ensure_ascii=False, indent=2)

with open(os.path.join(DATA_DIR, "questions.js"), "w", encoding="utf-8") as f:
    f.write("// NGÂN HÀNG ĐỀ TOÁN PTIT (GIẢI TÍCH 1, GIẢI TÍCH 2, ĐẠI SỐ TUYẾN TÍNH, TOÁN RỜI RẠC)\n")
    f.write("// Chuẩn hóa CLO1, CLO2, CLO3 theo Quyết định 292/QĐ-HV\n")
    f.write("(function (global) {\n")
    f.write("  const questions = ")
    f.write(json.dumps(all_questions, ensure_ascii=False, indent=2))
    f.write(";\n")
    f.write("  if (typeof window !== 'undefined') {\n")
    f.write("    window.QUESTIONS_BANK = window.QUESTIONS_DATA = questions;\n")
    f.write("  }\n")
    f.write("  if (typeof module !== 'undefined' && module.exports) {\n")
    f.write("    module.exports = questions;\n")
    f.write("  }\n")
    f.write("  global.QUESTIONS_BANK = global.QUESTIONS_DATA = questions;\n")
    f.write("})(typeof window !== 'undefined' ? window : global);\n")

print("Updated data/questions.json and data/questions.js successfully!")
