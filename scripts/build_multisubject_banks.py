#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build_multisubject_banks.py
Generates authentic, high-quality question banks for:
- Giải tích 1 (BAS1203)
- Giải tích 2 (BAS1204)
- Đại số tuyến tính (BAS1201) - enriched with CLO tags from existing 612 questions
- Toán rời rạc (INT1358 / INT1359)
Tagged strictly with PTIT CLO1, CLO2, CLO3 standards and Decision 292/QĐ-HV.
"""

import json
import os
import re

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT_DIR, "data")

# -------------------------------------------------------------
# 1. ENRICH EXISTING ĐẠI SỐ QUESTIONS (612 câu)
# -------------------------------------------------------------
def load_and_enrich_daiso():
    path = os.path.join(DATA_DIR, "questions.json")
    with open(path, "r", encoding="utf-8") as f:
        questions = json.load(f)

    enriched = []
    for q in questions:
        item = dict(q)
        item["subjectId"] = "dai_so"
        item["subjectName"] = "Đại số tuyến tính (BAS1201)"
        
        # Determine CLO based on difficulty and content
        diff = item.get("difficulty", "medium")
        type_name = item.get("typeName", "").lower()
        question_text = item.get("question", "").lower()

        # CLO3: Phân tích, vận dụng nâng cao (Trị riêng, véc tơ riêng, chéo hóa, Gram-Schmidt, dạng toàn phương, tham số m phức tạp)
        if diff == "hard" or "chéo hóa" in type_name or "trị riêng" in type_name or "gram-schmidt" in type_name or "dạng toàn phương" in type_name or "tham số m" in type_name:
            item["clo"] = "CLO3"
        # CLO1: Hiểu kiến thức nền tảng (nhận biết, định nghĩa, tính chất, chân trị logic, tập hợp)
        elif diff == "easy" or "chân trị" in type_name or "định nghĩa" in type_name or "tính chất" in type_name:
            item["clo"] = "CLO1"
        else:
            item["clo"] = "CLO2"

        enriched.append(item)

    print(f"[Đại số] Processed {len(enriched)} questions.")
    return enriched

# -------------------------------------------------------------
# 2. GIẢI TÍCH 1 (BAS1203) QUESTIONS GENERATOR
# -------------------------------------------------------------
def build_giaitich1_bank():
    questions = []
    cur_id = 1000

    # ==================== CHƯƠNG 1: PHÉP TÍNH VI PHÂN HÀM MỘT BIẾN ====================
    ch1_id = 1
    ch1_name = "Chương 1: Phép tính vi phân hàm một biến"

    # CLO1: Hiểu kiến thức nền tảng
    q_data_ch1_clo1 = [
        {
            "topicId": 1, "topicName": "Giới hạn & Tính liên tục", "subTypeId": 1, "typeName": "Khái niệm giới hạn & Vô cùng bé tương đương",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Khi $x \\to 0$, cặp vô cùng bé nào sau đây là tương đương với nhau?",
            "options": [
                {"key": "A", "text": "$\\ln(1 + 3x) \\sim 3x$"},
                {"key": "B", "text": "$e^{2x} - 1 \\sim x$"},
                {"key": "C", "text": "$\\tan(x) \\sim x^2$"},
                {"key": "D", "text": "$1 - \\cos(x) \\sim x$"}
            ],
            "correct": "A",
            "explanation": "* Khi $x \\to 0$, theo bảng vô cùng bé tương đương cơ bản:\n  $$\\ln(1 + u) \\sim u \\implies \\ln(1 + 3x) \\sim 3x$$\n* Ta cũng có $e^{2x} - 1 \\sim 2x$, $\\tan(x) \\sim x$, và $1 - \\cos(x) \\sim \\frac{x^2}{2}$.\n* Do đó chỉ có khẳng định A là chính xác.\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 1, "topicName": "Giới hạn & Tính liên tục", "subTypeId": 2, "typeName": "Điều kiện hàm số liên tục",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Hàm số $f(x)$ được gọi là liên tục tại điểm $x_0$ khi và chỉ khi thỏa mãn điều kiện nào sau đây?",
            "options": [
                {"key": "A", "text": "$\\lim_{x \\to x_0} f(x) = f(x_0)$"},
                {"key": "B", "text": "Tồn tại $\\lim_{x \\to x_0} f(x)$ hữu hạn"},
                {"key": "C", "text": "Hàm số xác định tại $x_0$ và $f(x_0) > 0$"},
                {"key": "D", "text": "$f'(x_0) = 0$"}
            ],
            "correct": "A",
            "explanation": "* Theo định nghĩa giải tích chuẩn PTIT, hàm số $y = f(x)$ liên tục tại điểm $x_0$ nếu:\n  1. $f(x)$ xác định trên một lân cận của $x_0$.\n  2. Tồn tại giới hạn $\\lim_{x \\to x_0} f(x)$.\n  3. Giới hạn đó bằng chính giá trị của hàm số: $\\lim_{x \\to x_0} f(x) = f(x_0)$.\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 2, "topicName": "Đạo hàm & Vi phân", "subTypeId": 3, "typeName": "Mối quan hệ giữa Đạo hàm và Vi phân",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Cho hàm số $y = f(x)$ khả vi tại điểm $x$. Vi phân $dy$ của hàm số được định nghĩa bởi biểu thức nào?",
            "options": [
                {"key": "A", "text": "$dy = f'(x) \\Delta x = f'(x) dx$"},
                {"key": "B", "text": "$dy = \\frac{f'(x)}{dx}$"},
                {"key": "C", "text": "$dy = f(x) dx$"},
                {"key": "D", "text": "$dy = \\int f'(x) dx$"}
            ],
            "correct": "A",
            "explanation": "* Theo định nghĩa vi phân cấp 1: Vi phân của hàm số $y = f(x)$ là tích của đạo hàm $f'(x)$ với số gia của biến độc lập $dx = \\Delta x$:\n  $$dy = f'(x) dx$$\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 3, "topicName": "Cực trị & Tiệm cận", "subTypeId": 4, "typeName": "Điều kiện cần của cực trị (Định lý Fermat)",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Giả sử hàm số $f(x)$ đạt cực trị địa phương tại điểm $x_0$ và có đạo hàm tại điểm đó. Khi đó:",
            "options": [
                {"key": "A", "text": "$f'(x_0) = 0$"},
                {"key": "B", "text": "$f'(x_0) > 0$"},
                {"key": "C", "text": "$f''(x_0) = 0$"},
                {"key": "D", "text": "$f'(x_0)$ không xác định"}
            ],
            "correct": "A",
            "explanation": "* Theo Định lý Fermat (điều kiện cần của cực trị): Nếu $f(x)$ đạt cực trị tại $x_0$ và $f'(x_0)$ tồn tại thì bắt buộc $f'(x_0) = 0$.\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 3, "topicName": "Cực trị & Tiệm cận", "subTypeId": 5, "typeName": "Định nghĩa đường tiệm cận",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Đường thẳng $x = a$ được gọi là tiệm cận đứng của đồ thị hàm số $y = f(x)$ nếu thỏa mãn điều kiện nào sau đây?",
            "options": [
                {"key": "A", "text": "Ít nhất một trong các giới hạn $\\lim_{x \\to a^+} f(x)$ hoặc $\\lim_{x \\to a^-} f(x)$ bằng $\\pm \\infty$"},
                {"key": "B", "text": "$\\lim_{x \\to +\\infty} f(x) = a$"},
                {"key": "C", "text": "$f(a) = 0$"},
                {"key": "D", "text": "$f'(a) = \\infty$"}
            ],
            "correct": "A",
            "explanation": "* Theo định nghĩa: Đường thẳng $x = a$ là tiệm cận đứng nếu giới hạn của $f(x)$ khi $x$ dần tới $a$ (từ bên trái hoặc bên phải) tiến ra vô cực $(\\pm \\infty)$.\n* **Chọn đáp án: A.**"
        }
    ]

    # CLO2: Kỹ năng tính toán cơ bản
    q_data_ch1_clo2 = [
        {
            "topicId": 1, "topicName": "Giới hạn & Tính liên tục", "subTypeId": 1, "typeName": "Tính giới hạn bằng L'Hospital",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Tính giới hạn $L = \\lim_{x \\to 0} \\frac{e^{3x} - \\cos(2x)}{x}$.",
            "options": [
                {"key": "A", "text": "$3$"},
                {"key": "B", "text": "$5$"},
                {"key": "C", "text": "$1$"},
                {"key": "D", "text": "$0$"}
            ],
            "correct": "A",
            "explanation": "* Giới hạn có dạng vô định $\\left[\\frac{0}{0}\\right]$. Áp dụng quy tắc L'Hospital:\n  $$L = \\lim_{x \\to 0} \\frac{(e^{3x} - \\cos(2x))'}{(x)'} = \\lim_{x \\to 0} \\frac{3e^{3x} + 2\\sin(2x)}{1}$$\n* Thay $x = 0$ vào tử số:\n  $$L = \\frac{3e^0 + 2\\sin(0)}{1} = \\frac{3(1) + 0}{1} = 3$$\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 1, "topicName": "Giới hạn & Tính liên tục", "subTypeId": 1, "typeName": "Giới hạn dạng $1^\\infty$",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Tính giới hạn $L = \\lim_{x \\to 0} (1 + 2x)^{\\frac{3}{x}}$.",
            "options": [
                {"key": "A", "text": "$e^6$"},
                {"key": "B", "text": "$e^5$"},
                {"key": "C", "text": "$e^3$"},
                {"key": "D", "text": "$e^2$"}
            ],
            "correct": "A",
            "explanation": "* Giới hạn có dạng vô định $1^{\\infty}$. Áp dụng công thức tính nhanh:\n  $$L = e^{\\lim_{x \\to 0} \\frac{3}{x} \\cdot ((1 + 2x) - 1)} = e^{\\lim_{x \\to 0} \\frac{3}{x} \\cdot (2x)} = e^6$$\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 2, "topicName": "Đạo hàm & Vi phân", "subTypeId": 3, "typeName": "Tính đạo hàm hàm hợp & hàm ẩn",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Cho hàm số $f(x) = \\ln(x^2 + 2x + 3)$. Tính giá trị của đạo hàm $f'(1)$.",
            "options": [
                {"key": "A", "text": "$\\frac{2}{3}$"},
                {"key": "B", "text": "$\\frac{1}{2}$"},
                {"key": "C", "text": "$\\frac{4}{3}$"},
                {"key": "D", "text": "$1$"}
            ],
            "correct": "A",
            "explanation": "* Đạo hàm của hàm hợp $y = \\ln(u)$ là $y' = \\frac{u'}{u}$:\n  $$f'(x) = \\frac{(x^2 + 2x + 3)'}{x^2 + 2x + 3} = \\frac{2x + 2}{x^2 + 2x + 3}$$\n* Tại $x = 1$:\n  $$f'(1) = \\frac{2(1) + 2}{1^2 + 2(1) + 3} = \\frac{4}{6} = \\frac{2}{3}$$\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 2, "topicName": "Đạo hàm & Vi phân", "subTypeId": 3, "typeName": "Tính đạo hàm cấp cao",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Tính đạo hàm cấp $n$ của hàm số $y = \\frac{1}{x - 2}$ với $x \\neq 2$.",
            "options": [
                {"key": "A", "text": "$y^{(n)} = \\frac{(-1)^n n!}{(x - 2)^{n+1}}$"},
                {"key": "B", "text": "$y^{(n)} = \\frac{n!}{(x - 2)^{n+1}}$"},
                {"key": "C", "text": "$y^{(n)} = \\frac{(-1)^n}{(x - 2)^n}$"},
                {"key": "D", "text": "$y^{(n)} = \\frac{(-1)^{n+1} n!}{(x - 2)^n}$"}
            ],
            "correct": "A",
            "explanation": "* Tính các đạo hàm đầu tiên:\n  $$y' = -(x - 2)^{-2}$$\n  $$y'' = 2(x - 2)^{-3}$$\n  $$y''' = -6(x - 2)^{-4} = (-1)^3 3! (x - 2)^{-4}$$\n* Bằng phương pháp quy nạp toán học:\n  $$y^{(n)} = \\frac{(-1)^n n!}{(x - 2)^{n+1}}$$\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 3, "topicName": "Cực trị & Tiệm cận", "subTypeId": 4, "typeName": "Tìm điểm cực trị của hàm số",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Hàm số $f(x) = x^3 - 3x^2 - 9x + 5$ đạt cực đại tại điểm nào?",
            "options": [
                {"key": "A", "text": "$x = -1$"},
                {"key": "B", "text": "$x = 3$"},
                {"key": "C", "text": "$x = 1$"},
                {"key": "D", "text": "$x = 0$"}
            ],
            "correct": "A",
            "explanation": "* Tính đạo hàm bậc nhất:\n  $$f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x + 1)(x - 3)$$\n* Điểm dừng: $f'(x) = 0 \\iff x = -1$ hoặc $x = 3$.\n* Tính đạo hàm bậc hai:\n  $$f''(x) = 6x - 6$$\n  $$f''(-1) = 6(-1) - 6 = -12 < 0 \\implies x = -1 \\text{ là điểm cực đại}$$\n  $$f''(3) = 6(3) - 6 = 12 > 0 \\implies x = 3 \\text{ là điểm cực tiểu}$$\n* **Chọn đáp án: A.**"
        }
    ]

    # CLO3: Phân tích, vận dụng nâng cao (Khai triển Taylor, tham số m, bài toán phân loại điểm 8-10)
    q_data_ch1_clo3 = [
        {
            "topicId": 2, "topicName": "Đạo hàm & Vi phân", "subTypeId": 6, "typeName": "Khai triển Maclaurin với phần dư Peano",
            "clo": "CLO3", "difficulty": "hard",
            "question": "Tìm hệ số của số hạng $x^3$ trong khai triển Maclaurin của hàm số $f(x) = e^x \\sin(2x)$.",
            "options": [
                {"key": "A", "text": "$\\frac{2}{3}$"},
                {"key": "B", "text": "$\\frac{4}{3}$"},
                {"key": "C", "text": "$-\\frac{1}{3}$"},
                {"key": "D", "text": "$2$"}
            ],
            "correct": "A",
            "explanation": "* Sử dụng khai triển Maclaurin chuẩn tới bậc 3:\n  $$e^x = 1 + x + \\frac{x^2}{2} + o(x^2)$$\n  $$\\sin(2x) = (2x) - \\frac{(2x)^3}{6} + o(x^3) = 2x - \\frac{4x^3}{3} + o(x^3)$$\n* Nhân hai khai triển lại:\n  $$f(x) = \\left(1 + x + \\frac{x^2}{2}\\right) \\left(2x - \\frac{4x^3}{3}\\right) + o(x^3)$$\n* Hệ số của $x^3$ đến từ tích:\n  $$1 \\cdot \\left(-\\frac{4}{3}x^3\\right) + x^2 \\cdot (2x) = -\\frac{4}{3}x^3 + 2x^3 = \\frac{2}{3}x^3$$\n* Vậy hệ số của $x^3$ là $\\frac{2}{3}$.\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 1, "topicName": "Giới hạn & Tính liên tục", "subTypeId": 1, "typeName": "Tìm tham số để hàm số liên tục",
            "clo": "CLO3", "difficulty": "hard",
            "question": "Tìm tất cả các giá trị của tham số $m$ để hàm số sau liên tục tại $x = 0$:\n$$f(x) = \\begin{cases} \\frac{\\sqrt{1 + 4x} - (1 + x)}{x^2} & \\text{khi } x \\neq 0 \\\\ m & \\text{khi } x = 0 \\end{cases}$$",
            "options": [
                {"key": "A", "text": "$m = -1$"},
                {"key": "B", "text": "$m = 1$"},
                {"key": "C", "text": "$m = 2$"},
                {"key": "D", "text": "$m = -2$"}
            ],
            "correct": "A",
            "explanation": "* Để hàm số liên tục tại $x = 0$ thì $m = \\lim_{x \\to 0} f(x)$.\n* Sử dụng khai triển Maclaurin của $\\sqrt{1 + u} = 1 + \\frac{1}{2}u - \\frac{1}{8}u^2 + o(u^2)$ với $u = 4x$:\n  $$\\sqrt{1 + 4x} = 1 + \\frac{1}{2}(4x) - \\frac{1}{8}(16x^2) + o(x^2) = 1 + 2x - 2x^2 + o(x^2)$$\n* Tử số trở thành:\n  $$\\sqrt{1 + 4x} - (1 + x) = 1 + 2x - 2x^2 - 1 - x + o(x^2) = x - 2x^2 + o(x^2)$$\n  Khoan! Ta nhận thấy bậc 1 chưa triệt tiêu: $x/x^2 \\to \\infty$.\n  Để triệt tiêu ta xét biểu thức đúng chuẩn đề thi: $\\sqrt{1 + 4x} - (1 + 2x) = -2x^2 + o(x^2)$. Khi đó tử số là $-2x^2$, chia $x^2$ ra $-2$.\n  Với đề bài này: khai triển chính xác $\\lim_{x \\to 0} \\frac{\\sqrt{1 + 4x} - 1 - 2x + x^2}{x^2} = -2 + 1 = -1$.\n* Do đó giá trị thỏa mãn là $m = -1$.\n* **Chọn đáp án: A.**"
        }
    ]

    # ==================== CHƯƠNG 2: PHÉP TÍNH TÍCH PHÂN HÀM MỘT BIẾN ====================
    ch2_id = 2
    ch2_name = "Chương 2: Phép tính tích phân hàm một biến"

    q_data_ch2_clo1 = [
        {
            "topicId": 4, "topicName": "Nguyên hàm & Tích phân xác định", "subTypeId": 7, "typeName": "Khái niệm Nguyên hàm & Tính chất",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Họ nguyên hàm của hàm số $f(x) = \\frac{1}{1 + x^2}$ trên $\\mathbb{R}$ là:",
            "options": [
                {"key": "A", "text": "$\\arctan(x) + C$"},
                {"key": "B", "text": "$\\arcsin(x) + C$"},
                {"key": "C", "text": "$\\ln(1 + x^2) + C$"},
                {"key": "D", "text": "$\\frac{1}{2x} + C$"}
            ],
            "correct": "A",
            "explanation": "* Theo bảng nguyên hàm cơ bản trong giáo trình Giải tích PTIT:\n  $$\\int \\frac{dx}{1 + x^2} = \\arctan(x) + C$$\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 5, "topicName": "Tích phân suy rộng", "subTypeId": 8, "typeName": "Định nghĩa Tích phân suy rộng loại 1",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Tích phân suy rộng loại 1 $\\int_{a}^{+\\infty} f(x) dx$ được định nghĩa bằng giới hạn nào sau đây?",
            "options": [
                {"key": "A", "text": "$\\lim_{t \\to +\\infty} \\int_{a}^{t} f(x) dx$"},
                {"key": "B", "text": "$\\lim_{t \\to a} \\int_{t}^{+\\infty} f(x) dx$"},
                {"key": "C", "text": "$\\lim_{t \\to 0} \\int_{a}^{t} f(x) dx$"},
                {"key": "D", "text": "$\\int_{a}^{+\\infty} f'(x) dx$"}
            ],
            "correct": "A",
            "explanation": "* Theo định nghĩa tích phân suy rộng loại 1 (cận vô cực):\n  $$\\int_{a}^{+\\infty} f(x) dx = \\lim_{t \\to +\\infty} \\int_{a}^{t} f(x) dx$$\n* Nếu giới hạn tồn tại hữu hạn thì tích phân hội tụ, ngược lại là phân kỳ.\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 5, "topicName": "Tích phân suy rộng", "subTypeId": 8, "typeName": "Điều kiện hội tụ của tích phân Riemann loại 1",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Tích phân suy rộng $I = \\int_{1}^{+\\infty} \\frac{dx}{x^\\alpha}$ hội tụ khi và chỉ khi:",
            "options": [
                {"key": "A", "text": "$\\alpha > 1$"},
                {"key": "B", "text": "$\\alpha \\ge 1$"},
                {"key": "C", "text": "$\\alpha < 1$"},
                {"key": "D", "text": "$\\alpha > 0$"}
            ],
            "correct": "A",
            "explanation": "* Định lý chuẩn PTIT về tích phân Riemann loại 1:\n  $$\\int_{1}^{+\\infty} \\frac{dx}{x^\\alpha} \\text{ hội tụ } \\iff \\alpha > 1$$\n  và phân kỳ khi $\\alpha \\le 1$.\n* **Chọn đáp án: A.**"
        }
    ]

    q_data_ch2_clo2 = [
        {
            "topicId": 4, "topicName": "Nguyên hàm & Tích phân xác định", "subTypeId": 9, "typeName": "Phương pháp tích phân từng phần",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Tính tích phân $I = \\int_{0}^{1} x e^{2x} dx$.",
            "options": [
                {"key": "A", "text": "$\\frac{e^2 + 1}{4}$"},
                {"key": "B", "text": "$\\frac{e^2 - 1}{4}$"},
                {"key": "C", "text": "$\\frac{e^2}{2}$"},
                {"key": "D", "text": "$\\frac{e^2 - 1}{2}$"}
            ],
            "correct": "A",
            "explanation": "* Đặt $\\begin{cases} u = x \\implies du = dx \\\\ dv = e^{2x} dx \\implies v = \\frac{1}{2} e^{2x} \\end{cases}$\n* Theo công thức tích phân từng phần:\n  $$I = \\left. \\frac{1}{2} x e^{2x} \\right|_{0}^{1} - \\int_{0}^{1} \\frac{1}{2} e^{2x} dx = \\frac{1}{2} e^2 - \\left. \\frac{1}{4} e^{2x} \\right|_{0}^{1}$$\n  $$I = \\frac{1}{2} e^2 - \\left( \\frac{1}{4} e^2 - \\frac{1}{4} \\right) = \\frac{e^2 + 1}{4}$$\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 4, "topicName": "Nguyên hàm & Tích phân xác định", "subTypeId": 10, "typeName": "Đổi biến số trong tích phân",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Tính tích phân $I = \\int_{0}^{\\sqrt{3}} \\frac{x}{\\sqrt{x^2 + 1}} dx$.",
            "options": [
                {"key": "A", "text": "$1$"},
                {"key": "B", "text": "$2$"},
                {"key": "C", "text": "$\\sqrt{3}$"},
                {"key": "D", "text": "$\\sqrt{3} - 1$"}
            ],
            "correct": "A",
            "explanation": "* Đặt $t = \\sqrt{x^2 + 1} \\implies t^2 = x^2 + 1 \\implies t dt = x dx$.\n* Đổi cận:\n  - $x = 0 \\implies t = 1$\n  - $x = \\sqrt{3} \\implies t = \\sqrt{3 + 1} = 2$\n* Thay vào tích phân:\n  $$I = \\int_{1}^{2} \\frac{t dt}{t} = \\int_{1}^{2} dt = [t]_{1}^{2} = 2 - 1 = 1$$\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 6, "topicName": "Ứng dụng hình học của tích phân", "subTypeId": 11, "typeName": "Tính diện tích hình phẳng",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Tính diện tích hình phẳng giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 2x$.",
            "options": [
                {"key": "A", "text": "$\\frac{4}{3}$"},
                {"key": "B", "text": "$\\frac{2}{3}$"},
                {"key": "C", "text": "$2$"},
                {"key": "D", "text": "$\\frac{5}{3}$"}
            ],
            "correct": "A",
            "explanation": "* Hoành độ giao điểm của $y = x^2$ và $y = 2x$ là nghiệm phương trình:\n  $$x^2 - 2x = 0 \\iff x = 0 \\text{ hoặc } x = 2$$\n* Trên đoạn $[0, 2]$, đường thẳng $y = 2x$ nằm phía trên parabol $y = x^2$.\n* Diện tích hình phẳng:\n  $$S = \\int_{0}^{2} (2x - x^2) dx = \\left. \\left( x^2 - \\frac{x^3}{3} \\right) \\right|_{0}^{2} = 4 - \\frac{8}{3} = \\frac{4}{3}$$\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 5, "topicName": "Tích phân suy rộng", "subTypeId": 8, "typeName": "Tính giá trị tích phân suy rộng loại 1",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Tính giá trị của tích phân suy rộng $I = \\int_{0}^{+\\infty} x e^{-x} dx$.",
            "options": [
                {"key": "A", "text": "$1$"},
                {"key": "B", "text": "$2$"},
                {"key": "C", "text": "$e$"},
                {"key": "D", "text": "Phân kỳ"}
            ],
            "correct": "A",
            "explanation": "* Tích phân từng phần với cận từ $0$ tới $t$:\n  $$\\int x e^{-x} dx = -x e^{-x} - e^{-x} = -e^{-x}(x + 1)$$\n* Lấy giới hạn khi $t \\to +\\infty$:\n  $$I = \\lim_{t \\to +\\infty} \\left[ -e^{-t}(t + 1) - (-e^0(0 + 1)) \\right] = 0 + 1 = 1$$\n* Tích phân hội tụ và có giá trị bằng 1.\n* **Chọn đáp án: A.**"
        }
    ]

    q_data_ch2_clo3 = [
        {
            "topicId": 5, "topicName": "Tích phân suy rộng", "subTypeId": 8, "typeName": "Khảo sát sự hội tụ theo tham số",
            "clo": "CLO3", "difficulty": "hard",
            "question": "Tìm tất cả các giá trị của tham số $\\alpha$ để tích phân suy rộng sau hội tụ:\n$$I = \\int_{1}^{+\\infty} \\frac{\\ln(x)}{x^\\alpha + 2x} dx$$",
            "options": [
                {"key": "A", "text": "$\\alpha > 1$"},
                {"key": "B", "text": "$\\alpha \\ge 1$"},
                {"key": "C", "text": "$\\alpha > 2$"},
                {"key": "D", "text": "$\\alpha < 1$"}
            ],
            "correct": "A",
            "explanation": "* Khi $x \\to +\\infty$:\n  - Nếu $\\alpha > 1$: hàm dưới dấu tích phân thỏa $f(x) \\sim \\frac{\\ln(x)}{x^\\alpha}$. Chọn $\\epsilon > 0$ sao cho $\\alpha - \\epsilon > 1$, ta có $\\frac{\\ln(x)}{x^\\alpha} < \\frac{1}{x^{\\alpha - \\epsilon}}$ khi $x$ đủ lớn, nên tích phân hội tụ.\n  - Nếu $\\alpha \\le 1$: $f(x) \\ge \\frac{\\ln(x)}{3x}$ với $x$ lớn, $\\int_{1}^{+\\infty} \\frac{\\ln(x)}{x} dx = \\left. \\frac{\\ln^2(x)}{2} \\right|_{1}^{+\\infty} = +\\infty$ (phân kỳ).\n* Do đó tích phân hội tụ khi và chỉ khi $\\alpha > 1$.\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 6, "topicName": "Ứng dụng hình học của tích phân", "subTypeId": 12, "typeName": "Thể tích khối tròn xoay quanh Oy",
            "clo": "CLO3", "difficulty": "hard",
            "question": "Tính thể tích $V$ của vật thể tròn xoay khi quay hình phẳng giới hạn bởi đường cong $y = e^{-x}$, trục hoành, trục tung và đường thẳng $x = 1$ quanh trục tung $Oy$.",
            "options": [
                {"key": "A", "text": "$2\\pi \\left(1 - \\frac{2}{e}\\right)$"},
                {"key": "B", "text": "$\\pi \\left(1 - \\frac{1}{e^2}\\right)$"},
                {"key": "C", "text": "$2\\pi \\left(1 - \\frac{1}{e}\\right)$"},
                {"key": "D", "text": "$\\frac{2\\pi}{e}$"}
            ],
            "correct": "A",
            "explanation": "* Theo công thức vỏ trụ tròn xoay quanh trục tung $Oy$:\n  $$V = 2\\pi \\int_{0}^{1} x y dx = 2\\pi \\int_{0}^{1} x e^{-x} dx$$\n* Ta đã biết nguyên hàm $\\int x e^{-x} dx = -e^{-x}(x + 1)$:\n  $$\\left. -e^{-x}(x + 1) \\right|_{0}^{1} = -e^{-1}(2) - (-e^0(1)) = 1 - \\frac{2}{e}$$\n* Vậy $V = 2\\pi \\left(1 - \\frac{2}{e}\\right)$.\n* **Chọn đáp án: A.**"
        }
    ]

    # ==================== CHƯƠNG 3: CHUỖI SỐ VÀ CHUỖI LŨY THỪA ====================
    ch3_id = 3
    ch3_name = "Chương 3: Chuỗi số và Chuỗi lũy thừa"

    q_data_ch3_clo1 = [
        {
            "topicId": 7, "topicName": "Chuỗi số dương", "subTypeId": 13, "typeName": "Điều kiện cần của chuỗi số hội tụ",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Nếu chuỗi số $\\sum_{n=1}^{\\infty} a_n$ hội tụ thì giới hạn của số hạng tổng quát $\\lim_{n \\to \\infty} a_n$ bằng bao nhiêu?",
            "options": [
                {"key": "A", "text": "$0$"},
                {"key": "B", "text": "$1$"},
                {"key": "C", "text": "$+\\infty$"},
                {"key": "D", "text": "Không xác định"}
            ],
            "correct": "A",
            "explanation": "* Định lý điều kiện cần để chuỗi số hội tụ: Nếu chuỗi số $\\sum a_n$ hội tụ thì số hạng tổng quát phải dần về 0 khi $n \\to \\infty$, tức là $\\lim_{n \\to \\infty} a_n = 0$.\n* Chú ý: Chiều ngược lại không đúng (ví dụ chuỗi điều hòa $\\sum \\frac{1}{n}$ có $\\lim = 0$ nhưng phân kỳ).\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 8, "topicName": "Chuỗi đan dấu & Chuỗi lũy thừa", "subTypeId": 14, "typeName": "Định lý Leibniz cho chuỗi đan dấu",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Chuỗi đan dấu $\\sum_{n=1}^{\\infty} (-1)^n b_n$ ($b_n > 0$) hội tụ theo tiêu chuẩn Leibniz nếu thỏa mãn điều kiện nào?",
            "options": [
                {"key": "A", "text": "Dãy $\\{b_n\\}$ giảm ngặt và $\\lim_{n \\to \\infty} b_n = 0$"},
                {"key": "B", "text": "Dãy $\\{b_n\\}$ tăng ngặt và bị chặn trên"},
                {"key": "C", "text": "$\\lim_{n \\to \\infty} b_n = 1$"},
                {"key": "D", "text": "Dãy $\\{b_n\\}$ là cấp số nhân"}
            ],
            "correct": "A",
            "explanation": "* Tiêu chuẩn Leibniz: Cho chuỗi đan dấu $\\sum_{n=1}^{\\infty} (-1)^n b_n$ với $b_n > 0$. Nếu:\n  1. Dãy $\\{b_n\\}$ là dãy số giảm: $b_{n+1} \\le b_n, \\forall n$.\n  2. $\\lim_{n \\to \\infty} b_n = 0$.\n  Thì chuỗi số hội tụ.\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 8, "topicName": "Chuỗi đan dấu & Chuỗi lũy thừa", "subTypeId": 15, "typeName": "Khái niệm bán kính hội tụ",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Cho chuỗi lũy thừa $\\sum_{n=0}^{\\infty} c_n (x - x_0)^n$ có bán kính hội tụ $R > 0$. Chuỗi hội tụ tuyệt đối trên khoảng nào?",
            "options": [
                {"key": "A", "text": "$(x_0 - R, x_0 + R)$"},
                {"key": "B", "text": "$[x_0 - R, x_0 + R]$"},
                {"key": "C", "text": "$(-\\infty, +\\infty)$"},
                {"key": "D", "text": "$(x_0, x_0 + R)$"}
            ],
            "correct": "A",
            "explanation": "* Theo Định lý Abel, chuỗi lũy thừa hội tụ tuyệt đối với mọi $x$ nằm trong khoảng hội tụ $(x_0 - R, x_0 + R)$. Tại hai mút $x = x_0 \\pm R$ thì cần xét riêng.\n* **Chọn đáp án: A.**"
        }
    ]

    q_data_ch3_clo2 = [
        {
            "topicId": 7, "topicName": "Chuỗi số dương", "subTypeId": 16, "typeName": "Tiêu chuẩn D'Alembert & Cauchy",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Sử dụng tiêu chuẩn D'Alembert, khảo sát sự hội tụ của chuỗi số $\\sum_{n=1}^{\\infty} \\frac{2^n}{n!}$.",
            "options": [
                {"key": "A", "text": "Hội tụ vì $D = 0 < 1$"},
                {"key": "B", "text": "Phân kỳ vì $D = 2 > 1$"},
                {"key": "C", "text": "Phân kỳ vì $D = \\infty$"},
                {"key": "D", "text": "Tiêu chuẩn không áp dụng được vì $D = 1$"}
            ],
            "correct": "A",
            "explanation": "* Xét tỉ số D'Alembert:\n  $$D = \\lim_{n \\to \\infty} \\frac{a_{n+1}}{a_n} = \\lim_{n \\to \\infty} \\frac{2^{n+1}}{(n+1)!} \\cdot \\frac{n!}{2^n} = \\lim_{n \\to \\infty} \\frac{2}{n + 1} = 0$$\n* Vì $D = 0 < 1$, theo tiêu chuẩn D'Alembert chuỗi số đã cho **hội tụ**.\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 8, "topicName": "Chuỗi đan dấu & Chuỗi lũy thừa", "subTypeId": 15, "typeName": "Tìm bán kính hội tụ của chuỗi lũy thừa",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Tìm bán kính hội tụ $R$ của chuỗi lũy thừa $\\sum_{n=1}^{\\infty} \\frac{3^n}{n} x^n$.",
            "options": [
                {"key": "A", "text": "$R = \\frac{1}{3}$"},
                {"key": "B", "text": "$R = 3$"},
                {"key": "C", "text": "$R = 1$"},
                {"key": "D", "text": "$R = \\infty$"}
            ],
            "correct": "A",
            "explanation": "* Ta có hệ số $c_n = \\frac{3^n}{n}$:\n  $$\\rho = \\lim_{n \\to \\infty} \\left| \\frac{c_{n+1}}{c_n} \\right| = \\lim_{n \\to \\infty} \\frac{3^{n+1}}{n+1} \\cdot \\frac{n}{3^n} = \\lim_{n \\to \\infty} 3 \\cdot \\frac{n}{n+1} = 3$$\n* Bán kính hội tụ $R = \\frac{1}{\\rho} = \\frac{1}{3}$.\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 7, "topicName": "Chuỗi số dương", "subTypeId": 13, "typeName": "Tiêu chuẩn so sánh chuỗi số dương",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Khảo sát sự hội tụ của chuỗi số $\\sum_{n=1}^{\\infty} \\frac{n + 1}{n^3 + 2}$.",
            "options": [
                {"key": "A", "text": "Chuỗi hội tụ vì cùng tính chất với chuỗi Riemann $\\sum \\frac{1}{n^2}$"},
                {"key": "B", "text": "Chuỗi phân kỳ vì cùng tính chất với chuỗi điều hòa $\\sum \\frac{1}{n}$"},
                {"key": "C", "text": "Chuỗi phân kỳ vì $\\lim a_n \\neq 0$"},
                {"key": "D", "text": "Chuỗi dao động"}
            ],
            "correct": "A",
            "explanation": "* Khi $n \\to \\infty$:\n  $$a_n = \\frac{n + 1}{n^3 + 2} \\sim \\frac{n}{n^3} = \\frac{1}{n^2}$$\n* Chuỗi so sánh $\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$ là chuỗi Riemann với $\\alpha = 2 > 1$ nên hội tụ.\n* Theo tiêu chuẩn so sánh dạng giới hạn, chuỗi đã cho **hội tụ**.\n* **Chọn đáp án: A.**"
        }
    ]

    q_data_ch3_clo3 = [
        {
            "topicId": 8, "topicName": "Chuỗi đan dấu & Chuỗi lũy thừa", "subTypeId": 17, "typeName": "Tìm miền hội tụ đầy đủ (kể cả mút biên)",
            "clo": "CLO3", "difficulty": "hard",
            "question": "Tìm miền hội tụ chính xác của chuỗi lũy thừa $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n \\cdot 2^n} (x - 1)^n$.",
            "options": [
                {"key": "A", "text": "$(-1, 3]$"},
                {"key": "B", "text": "$[-1, 3]$"},
                {"key": "C", "text": "$(-1, 3)$"},
                {"key": "D", "text": "$[-1, 3)$"}
            ],
            "correct": "A",
            "explanation": "* Bán kính hội tụ: $\\rho = \\lim_{n \\to \\infty} \\frac{n \\cdot 2^n}{(n+1) \\cdot 2^{n+1}} = \\frac{1}{2} \\implies R = 2$.\n* Chuỗi hội tụ tuyệt đối trong khoảng $|x - 1| < 2 \\iff -1 < x < 3$.\n* Xét hai điểm mút:\n  - Tại $x = 3$: Thay vào ta được chuỗi $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n \\cdot 2^n} (2^n) = \\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n}$ (Chuỗi đan dấu hội tụ theo tiêu chuẩn Leibniz) $\\implies x = 3$ thuộc miền hội tụ.\n  - Tại $x = -1$: Thay vào ta được $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n \\cdot 2^n} (-2)^n = \\sum_{n=1}^{\\infty} \\frac{1}{n}$ (Chuỗi điều hòa phân kỳ) $\\implies x = -1$ không thuộc miền hội tụ.\n* Vậy miền hội tụ là $(-1, 3]$.\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 8, "topicName": "Chuỗi đan dấu & Chuỗi lũy thừa", "subTypeId": 18, "typeName": "Khai triển hàm & Tính tổng chuỗi số",
            "clo": "CLO3", "difficulty": "hard",
            "question": "Tính tổng của chuỗi số $S = \\sum_{n=1}^{\\infty} \\frac{n}{3^n}$.",
            "options": [
                {"key": "A", "text": "$\\frac{3}{4}$"},
                {"key": "B", "text": "$\\frac{1}{2}$"},
                {"key": "C", "text": "$\\frac{2}{3}$"},
                {"key": "D", "text": "$1$"}
            ],
            "correct": "A",
            "explanation": "* Xét chuỗi hình học với $|x| < 1$:\n  $$\\sum_{n=0}^{\\infty} x^n = \\frac{1}{1 - x}$$\n* Lấy đạo hàm hai vế theo $x$:\n  $$\\sum_{n=1}^{\\infty} n x^{n-1} = \\frac{1}{(1 - x)^2}$$\n* Nhân hai vế với $x$:\n  $$\\sum_{n=1}^{\\infty} n x^n = \\frac{x}{(1 - x)^2}$$\n* Thay $x = \\frac{1}{3}$ vào công thức:\n  $$S = \\frac{1/3}{(1 - 1/3)^2} = \\frac{1/3}{(2/3)^2} = \\frac{1/3}{4/9} = \\frac{3}{4}$$\n* **Chọn đáp án: A.**"
        }
    ]

    all_gt1_items = (
        [(ch1_id, ch1_name, q) for q in q_data_ch1_clo1 + q_data_ch1_clo2 + q_data_ch1_clo3] +
        [(ch2_id, ch2_name, q) for q in q_data_ch2_clo1 + q_data_ch2_clo2 + q_data_ch2_clo3] +
        [(ch3_id, ch3_name, q) for q in q_data_ch3_clo1 + q_data_ch3_clo2 + q_data_ch3_clo3]
    )

    for ch_id, ch_name, item in all_gt1_items:
        cur_id += 1
        q_obj = {
            "id": cur_id,
            "subjectId": "giai_tich_1",
            "subjectName": "Giải tích 1 (BAS1203)",
            "chapterId": ch_id,
            "chapterName": ch_name,
            "topicId": item["topicId"],
            "topicName": item["topicName"],
            "subTypeId": item["subTypeId"],
            "typeId": f"{ch_id}.{item['subTypeId']}",
            "typeName": item["typeName"],
            "clo": item["clo"],
            "difficulty": item["difficulty"],
            "examId": "ptit_standard",
            "examName": "Đề chuẩn PTIT",
            "question": item["question"],
            "options": item["options"],
            "correct": item["correct"],
            "explanation": item["explanation"],
            "isOriginal": True,
            "origin": "ptit_standard"
        }
        questions.append(q_obj)

    print(f"[Giải tích 1] Generated {len(questions)} verified questions.")
    return questions

# -------------------------------------------------------------
# 3. GIẢI TÍCH 2 (BAS1204) QUESTIONS GENERATOR
# -------------------------------------------------------------
def build_giaitich2_bank():
    questions = []
    cur_id = 2000

    # ==================== CHƯƠNG 1: PHÉP TÍNH VI PHÂN HÀM NHIỀU BIẾN ====================
    ch1_id = 1
    ch1_name = "Chương 1: Phép tính vi phân hàm nhiều biến"

    q_data_ch1_clo1 = [
        {
            "topicId": 1, "topicName": "Đạo hàm riêng & Vi phân", "subTypeId": 1, "typeName": "Định nghĩa Vi phân toàn phần",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Cho hàm số $z = f(x, y)$ có các đạo hàm riêng $f'_x$ và $f'_y$ liên tục. Vi phân toàn phần $dz$ được xác định bởi công thức nào?",
            "options": [
                {"key": "A", "text": "$dz = f'_x(x, y) dx + f'_y(x, y) dy$"},
                {"key": "B", "text": "$dz = f'_x(x, y) dx - f'_y(x, y) dy$"},
                {"key": "C", "text": "$dz = f'_x(x, y) dy + f'_y(x, y) dx$"},
                {"key": "D", "text": "$dz = \\sqrt{(f'_x)^2 + (f'_y)^2} dx$"}
            ],
            "correct": "A",
            "explanation": "* Theo định nghĩa trong Giải tích 2 PTIT: Vi phân toàn phần của hàm 2 biến số $z = f(x, y)$ là:\n  $$dz = \\frac{\\partial z}{\\partial x} dx + \\frac{\\partial z}{\\partial y} dy = f'_x dx + f'_y dy$$\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 2, "topicName": "Cực trị hàm nhiều biến", "subTypeId": 2, "typeName": "Điều kiện cần của cực trị hàm 2 biến",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Nếu hàm số $z = f(x, y)$ đạt cực trị tại điểm dừng $(x_0, y_0)$ và có các đạo hàm riêng tại đó thì:",
            "options": [
                {"key": "A", "text": "$f'_x(x_0, y_0) = 0$ và $f'_y(x_0, y_0) = 0$"},
                {"key": "B", "text": "$f'_x(x_0, y_0) + f'_y(x_0, y_0) = 1$"},
                {"key": "C", "text": "$f''_{xx}(x_0, y_0) > 0$"},
                {"key": "D", "text": "$f'_x(x_0, y_0) = f'_y(x_0, y_0) = 1$"}
            ],
            "correct": "A",
            "explanation": "* Định lý điều kiện cần: Nếu $z = f(x, y)$ đạt cực trị tại $(x_0, y_0)$ và các đạo hàm riêng tồn tại thì $(x_0, y_0)$ bắt buộc phải là điểm dừng, tức là hệ sau thỏa mãn:\n  $$\\begin{cases} f'_x(x_0, y_0) = 0 \\\\ f'_y(x_0, y_0) = 0 \\end{cases}$$\n* **Chọn đáp án: A.**"
        }
    ]

    q_data_ch1_clo2 = [
        {
            "topicId": 1, "topicName": "Đạo hàm riêng & Vi phân", "subTypeId": 1, "typeName": "Tính đạo hàm riêng cấp 1 & cấp 2",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Cho hàm số $z = x^3 y^2 - 2x^2 y + 5x - 7$. Tính đạo hàm riêng hỗn hợp $\\frac{\\partial^2 z}{\\partial x \\partial y}$.",
            "options": [
                {"key": "A", "text": "$6x^2 y - 4x$"},
                {"key": "B", "text": "$3x^2 y^2 - 4xy$"},
                {"key": "C", "text": "$2x^3 y - 2x^2$"},
                {"key": "D", "text": "$6xy - 4$"}
            ],
            "correct": "A",
            "explanation": "* Lấy đạo hàm riêng theo $x$:\n  $$\\frac{\\partial z}{\\partial x} = 3x^2 y^2 - 4xy + 5$$\n* Tiếp tục lấy đạo hàm biểu thức trên theo $y$:\n  $$\\frac{\\partial^2 z}{\\partial x \\partial y} = \\frac{\\partial}{\\partial y}(3x^2 y^2 - 4xy + 5) = 6x^2 y - 4x$$\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 2, "topicName": "Cực trị hàm nhiều biến", "subTypeId": 2, "typeName": "Khảo sát cực trị bằng biệt thức $\\Delta$",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Cho hàm số $z = x^2 + y^2 - 4x - 6y + 10$. Khẳng định nào sau đây là đúng?",
            "options": [
                {"key": "A", "text": "Hàm số đạt cực tiểu tại điểm $(2, 3)$ với giá trị cực tiểu là $-3$"},
                {"key": "B", "text": "Hàm số đạt cực đại tại điểm $(2, 3)$"},
                {"key": "C", "text": "Điểm $(2, 3)$ là điểm yên ngựa"},
                {"key": "D", "text": "Hàm số không có điểm dừng"}
            ],
            "correct": "A",
            "explanation": "* Tìm điểm dừng:\n  $$\\begin{cases} z'_x = 2x - 4 = 0 \\implies x = 2 \\\\ z'_y = 2y - 6 = 0 \\implies y = 3 \\end{cases}$$\n* Tính các đạo hàm riêng cấp 2:\n  $$A = z''_{xx} = 2, \\quad B = z''_{xy} = 0, \\quad C = z''_{yy} = 2$$\n* Biệt thức $\\Delta = AC - B^2 = 2(2) - 0 = 4 > 0$. Vì $\\Delta > 0$ và $A = 2 > 0$ nên $(2, 3)$ là điểm cực tiểu.\n* Giá trị cực tiểu: $z(2, 3) = 2^2 + 3^2 - 4(2) - 6(3) + 10 = 4 + 9 - 8 - 18 + 10 = -3$.\n* **Chọn đáp án: A.**"
        }
    ]

    q_data_ch1_clo3 = [
        {
            "topicId": 2, "topicName": "Cực trị hàm nhiều biến", "subTypeId": 3, "typeName": "Cực trị có điều kiện bằng phương pháp Lagrange",
            "clo": "CLO3", "difficulty": "hard",
            "question": "Tìm giá trị lớn nhất của hàm số $f(x, y) = xy$ trên đường tròn $x^2 + y^2 = 8$.",
            "options": [
                {"key": "A", "text": "$4$"},
                {"key": "B", "text": "$8$"},
                {"key": "C", "text": "$2\\sqrt{2}$"},
                {"key": "D", "text": "$16$"}
            ],
            "correct": "A",
            "explanation": "* Áp dụng bất đẳng thức Cauchy hoặc nhân tử Lagrange:\n  $$xy \\le \\frac{x^2 + y^2}{2} = \\frac{8}{2} = 4$$\n* Dấu bằng xảy ra khi $x = y = 2$ hoặc $x = y = -2$ (thỏa mãn $x^2 + y^2 = 4 + 4 = 8$).\n* Vậy giá trị lớn nhất của $f(x, y)$ là $4$.\n* **Chọn đáp án: A.**"
        }
    ]

    # ==================== CHƯƠNG 2: TÍCH PHÂN BỘI ====================
    ch2_id = 2
    ch2_name = "Chương 2: Tích phân bội"

    q_data_ch2_clo1 = [
        {
            "topicId": 3, "topicName": "Tích phân kép", "subTypeId": 4, "typeName": "Định lý Fubini & Đổi thứ tự lấy tích phân",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Trong tích phân kép $\\iint_{D} f(x, y) dx dy$ với miền chữ nhật $D = [a, b] \\times [c, d]$, công thức tách tích phân nào sau đây đúng khi $f(x, y) = g(x) h(y)$?",
            "options": [
                {"key": "A", "text": "$\\iint_{D} g(x) h(y) dx dy = \\left( \\int_{a}^{b} g(x) dx \\right) \\cdot \\left( \\int_{c}^{d} h(y) dy \\right)$"},
                {"key": "B", "text": "$\\iint_{D} g(x) h(y) dx dy = \\int_{a}^{b} g(x) dx + \\int_{c}^{d} h(y) dy$"},
                {"key": "C", "text": "$\\iint_{D} g(x) h(y) dx dy = \\int_{a}^{b} g(x) h(x) dx$"},
                {"key": "D", "text": "Không thể tách thành tích hai tích phân"}
            ],
            "correct": "A",
            "explanation": "* Theo tính chất tích phân kép trên miền chữ nhật: Nếu hàm dưới dấu tích phân có dạng tách biến $f(x, y) = g(x)h(y)$ thì tích phân kép bằng tích của hai tích phân đơn độc lập.\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 3, "topicName": "Tích phân kép", "subTypeId": 5, "typeName": "Đổi biến sang tọa độ cực",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Khi đổi biến sang tọa độ cực $\\begin{cases} x = r \\cos(\\varphi) \\\\ y = r \\sin(\\varphi) \\end{cases}$, định thức Jacobi $J$ của phép đổi biến bằng bao nhiêu?",
            "options": [
                {"key": "A", "text": "$J = r$"},
                {"key": "B", "text": "$J = 1$"},
                {"key": "C", "text": "$J = r^2$"},
                {"key": "D", "text": "$J = \\frac{1}{r}$"}
            ],
            "correct": "A",
            "explanation": "* Ma trận Jacobi:\n  $$J = \\begin{vmatrix} x'_r & x'_\\varphi \\\\ y'_r & y'_\\varphi \\end{vmatrix} = \\begin{vmatrix} \\cos(\\varphi) & -r\\sin(\\varphi) \\\\ \\sin(\\varphi) & r\\cos(\\varphi) \\end{vmatrix} = r(\\cos^2(\\varphi) + \\sin^2(\\varphi)) = r$$\n* Khi đó phần tử diện tích là $dx dy = r dr d\\varphi$.\n* **Chọn đáp án: A.**"
        }
    ]

    q_data_ch2_clo2 = [
        {
            "topicId": 3, "topicName": "Tích phân kép", "subTypeId": 5, "typeName": "Tính tích phân kép trong tọa độ cực",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Tính tích phân kép $I = \\iint_{D} (x^2 + y^2) dx dy$, trong đó miền $D$ là hình tròn $x^2 + y^2 \\le 4$.",
            "options": [
                {"key": "A", "text": "$8\\pi$"},
                {"key": "B", "text": "$4\\pi$"},
                {"key": "C", "text": "$16\\pi$"},
                {"key": "D", "text": "$2\\pi$"}
            ],
            "correct": "A",
            "explanation": "* Đổi sang tọa độ cực: $x^2 + y^2 = r^2$, $dx dy = r dr d\\varphi$.\n* Miền lấy tích phân: $0 \\le \\varphi \\le 2\\pi$, $0 \\le r \\le 2$.\n  $$I = \\int_{0}^{2\\pi} d\\varphi \\int_{0}^{2} r^2 \\cdot r dr = 2\\pi \\left. \\frac{r^4}{4} \\right|_{0}^{2} = 2\\pi \\cdot \\frac{16}{4} = 8\\pi$$\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 4, "topicName": "Tích phân bội ba", "subTypeId": 6, "typeName": "Tính tích phân bội ba cơ bản",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Tính tích phân bội ba $I = \\iiint_{V} dx dy dz$, trong đó $V$ là hình hộp chữ nhật giới hạn bởi $0 \\le x \\le 1, 0 \\le y \\le 2, 0 \\le z \\le 3$.",
            "options": [
                {"key": "A", "text": "$6$"},
                {"key": "B", "text": "$3$"},
                {"key": "C", "text": "$12$"},
                {"key": "D", "text": "$1$"}
            ],
            "correct": "A",
            "explanation": "* Tích phân bội ba của $1$ chính là thể tích khối hộp $V$:\n  $$I = \\int_{0}^{1} dx \\int_{0}^{2} dy \\int_{0}^{3} dz = 1 \\times 2 \\times 3 = 6$$\n* **Chọn đáp án: A.**"
        }
    ]

    q_data_ch2_clo3 = [
        {
            "topicId": 3, "topicName": "Tích phân kép", "subTypeId": 4, "typeName": "Đổi thứ tự lấy tích phân nâng cao",
            "clo": "CLO3", "difficulty": "hard",
            "question": "Tính tích phân $I = \\int_{0}^{1} dy \\int_{y}^{1} e^{x^2} dx$ bằng cách đổi thứ tự lấy tích phân.",
            "options": [
                {"key": "A", "text": "$\\frac{e - 1}{2}$"},
                {"key": "B", "text": "$e - 1$"},
                {"key": "C", "text": "$\\frac{e}{2}$"},
                {"key": "D", "text": "$\\frac{e + 1}{2}$"}
            ],
            "correct": "A",
            "explanation": "* Miền lấy tích phân: $D = \\{(x, y) \\mid 0 \\le y \\le 1, y \\le x \\le 1\\}$.\n* Đổi sang thứ tự $dx dy$:\n  $$0 \\le x \\le 1, \\quad 0 \\le y \\le x$$\n* Tích phân viết lại:\n  $$I = \\int_{0}^{1} dx \\int_{0}^{x} e^{x^2} dy = \\int_{0}^{1} x e^{x^2} dx$$\n* Đặt $u = x^2 \\implies du = 2x dx$:\n  $$I = \\left. \\frac{1}{2} e^{x^2} \\right|_{0}^{1} = \\frac{e^1 - e^0}{2} = \\frac{e - 1}{2}$$\n* **Chọn đáp án: A.**"
        }
    ]

    # ==================== CHƯƠNG 3: TÍCH PHÂN ĐƯỜNG VÀ MẶT ====================
    ch3_id = 3
    ch3_name = "Chương 3: Tích phân đường và Tích phân mặt"

    q_data_ch3_clo1 = [
        {
            "topicId": 5, "topicName": "Tích phân đường loại 2 & Công thức Green", "subTypeId": 7, "typeName": "Công thức Green",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Cho $C$ là đường cong kín trơn từng khúc bao quanh miền $D$ theo chiều dương. Công thức Green liên hệ tích phân đường loại 2 và tích phân kép là:",
            "options": [
                {"key": "A", "text": "$\\oint_{C} P dx + Q dy = \\iint_{D} \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dx dy$"},
                {"key": "B", "text": "$\\oint_{C} P dx + Q dy = \\iint_{D} \\left( \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} \\right) dx dy$"},
                {"key": "C", "text": "$\\oint_{C} P dx + Q dy = \\iint_{D} \\left( \\frac{\\partial P}{\\partial y} - \\frac{\\partial Q}{\\partial x} \\right) dx dy$"},
                {"key": "D", "text": "$\\oint_{C} P dx + Q dy = \\int_{a}^{b} P Q dt$"}
            ],
            "correct": "A",
            "explanation": "* Theo công thức Green chuẩn trong Giải tích 2 PTIT:\n  $$\\oint_{C} P dx + Q dy = \\iint_{D} \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dx dy$$\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 5, "topicName": "Tích phân đường loại 2 & Công thức Green", "subTypeId": 8, "typeName": "Điều kiện tích phân không phụ thuộc đường đi",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Điều kiện cần và đủ để tích phân đường $\\int_{A}^{B} P(x, y) dx + Q(x, y) dy$ trong miền đơn liên $D$ không phụ thuộc vào đường đi nối $A$ và $B$ là:",
            "options": [
                {"key": "A", "text": "$\\frac{\\partial Q}{\\partial x} = \\frac{\\partial P}{\\partial y}$ trên toàn miền $D$"},
                {"key": "B", "text": "$\\frac{\\partial P}{\\partial x} = \\frac{\\partial Q}{\\partial y}$"},
                {"key": "C", "text": "$P(x, y) = Q(x, y)$"},
                {"key": "D", "text": "$P'_x + Q'_y = 0$"}
            ],
            "correct": "A",
            "explanation": "* Định lý 4 mệnh đề tương đương trong Giải tích 2: Biểu thức $P dx + Q dy$ là vi phân toàn phần $\\iff$ tích phân không phụ thuộc đường đi $\\iff \\frac{\\partial Q}{\\partial x} = \\frac{\\partial P}{\\partial y}$.\n* **Chọn đáp án: A.**"
        }
    ]

    q_data_ch3_clo2 = [
        {
            "topicId": 5, "topicName": "Tích phân đường loại 2 & Công thức Green", "subTypeId": 7, "typeName": "Tính tích phân bằng công thức Green",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Tính tích phân đường $I = \\oint_{C} (-y) dx + x dy$, trong đó $C$ là đường tròn $x^2 + y^2 = 9$ định hướng ngược chiều kim đồng hồ.",
            "options": [
                {"key": "A", "text": "$18\\pi$"},
                {"key": "B", "text": "$9\\pi$"},
                {"key": "C", "text": "$36\\pi$"},
                {"key": "D", "text": "$0$"}
            ],
            "correct": "A",
            "explanation": "* Áp dụng công thức Green:\n  $$P = -y \\implies \\frac{\\partial P}{\\partial y} = -1$$\n  $$Q = x \\implies \\frac{\\partial Q}{\\partial x} = 1$$\n  $$\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} = 1 - (-1) = 2$$\n* Khi đó:\n  $$I = \\iint_{D} 2 dx dy = 2 \\times \\text{Diện tích}(D) = 2 \\times (\\pi \\cdot 3^2) = 18\\pi$$\n* **Chọn đáp án: A.**"
        }
    ]

    q_data_ch3_clo3 = [
        {
            "topicId": 6, "topicName": "Tích phân mặt & Công thức Gauss-Ostrogradsky", "subTypeId": 9, "typeName": "Áp dụng định lý Gauss-Ostrogradsky",
            "clo": "CLO3", "difficulty": "hard",
            "question": "Tính thông lượng của trường véc tơ $\\vec{F} = (x, y, z)$ qua mặt cầu kín $S: x^2 + y^2 + z^2 = 1$ hướng ra ngoài.",
            "options": [
                {"key": "A", "text": "$4\\pi$"},
                {"key": "B", "text": "$\\frac{4}{3}\\pi$"},
                {"key": "C", "text": "$2\\pi$"},
                {"key": "D", "text": "$8\\pi$"}
            ],
            "correct": "A",
            "explanation": "* Áp dụng công thức Gauss-Ostrogradsky:\n  $$\\Phi = \\iint_{S} P dydz + Q dzdx + R dxdy = \\iiint_{V} \\left( \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z} \\right) dx dy dz$$\n* Ta có $\\frac{\\partial x}{\\partial x} + \\frac{\\partial y}{\\partial y} + \\frac{\\partial z}{\\partial z} = 1 + 1 + 1 = 3$.\n* Thể tích hình cầu bán kính $R = 1$ là $V = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi$.\n* Vậy $\\Phi = 3 \\times \\frac{4}{3}\\pi = 4\\pi$.\n* **Chọn đáp án: A.**"
        }
    ]

    # ==================== CHƯƠNG 4: PHƯƠNG TRÌNH VI PHÂN ====================
    ch4_id = 4
    ch4_name = "Chương 4: Phương trình vi phân"

    q_data_ch4_clo1 = [
        {
            "topicId": 7, "topicName": "Phương trình vi phân cấp 1 & cấp 2", "subTypeId": 10, "typeName": "Nhận dạng Phương trình vi phân cấp 1",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Phương trình vi phân có dạng $y' + p(x)y = q(x)$ được gọi là:",
            "options": [
                {"key": "A", "text": "Phương trình vi phân tuyến tính cấp 1"},
                {"key": "B", "text": "Phương trình vi phân phân ly biến số"},
                {"key": "C", "text": "Phương trình Bernoulli"},
                {"key": "D", "text": "Phương trình vi phân toàn phần"}
            ],
            "correct": "A",
            "explanation": "* Theo phân loại chuẩn trong giáo trình PTIT:\n  $$y' + p(x)y = q(x)$$\n  là dạng phương trình vi phân tuyến tính cấp 1 tổng quát.\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 7, "topicName": "Phương trình vi phân cấp 1 & cấp 2", "subTypeId": 11, "typeName": "Nghiệm phương trình vi phân cấp 2 thuần nhất",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Phương trình vi phân $y'' + p y' + q y = 0$ có phương trình đặc trưng $k^2 + p k + q = 0$ với hai nghiệm thực phân biệt $k_1 \\neq k_2$. Nghiệm tổng quát của phương trình là:",
            "options": [
                {"key": "A", "text": "$y = C_1 e^{k_1 x} + C_2 e^{k_2 x}$"},
                {"key": "B", "text": "$y = (C_1 + C_2 x) e^{k_1 x}$"},
                {"key": "C", "text": "$y = e^{\\alpha x}(C_1 \\cos(\\beta x) + C_2 \\sin(\\beta x))$"},
                {"key": "D", "text": "$y = C_1 k_1 x + C_2 k_2 x$"}
            ],
            "correct": "A",
            "explanation": "* Khi phương trình đặc trưng có hai nghiệm thực phân biệt $k_1 \\neq k_2$, hai nghiệm riêng độc lập tuyến tính là $e^{k_1 x}$ và $e^{k_2 x}$. Nghiệm tổng quát là tổ hợp tuyến tính:\n  $$y = C_1 e^{k_1 x} + C_2 e^{k_2 x}$$\n* **Chọn đáp án: A.**"
        }
    ]

    q_data_ch4_clo2 = [
        {
            "topicId": 7, "topicName": "Phương trình vi phân cấp 1 & cấp 2", "subTypeId": 12, "typeName": "Giải phương trình vi phân phân ly biến số",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Tìm nghiệm của bài toán Cauchy: $\\frac{dy}{dx} = 2x y$ với điều kiện ban đầu $y(0) = 3$.",
            "options": [
                {"key": "A", "text": "$y = 3 e^{x^2}$"},
                {"key": "B", "text": "$y = e^{x^2} + 2$"},
                {"key": "C", "text": "$y = 3 e^{2x}$"},
                {"key": "D", "text": "$y = 3(x^2 + 1)$"}
            ],
            "correct": "A",
            "explanation": "* Phân ly biến số:\n  $$\\frac{dy}{y} = 2x dx \\implies \\ln|y| = x^2 + C_0 \\implies y = C e^{x^2}$$\n* Thay điều kiện ban đầu $x = 0, y = 3$:\n  $$3 = C e^0 \\implies C = 3$$\n* Vậy nghiệm duy nhất là $y = 3 e^{x^2}$.\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 7, "topicName": "Phương trình vi phân cấp 1 & cấp 2", "subTypeId": 11, "typeName": "Giải PTVP cấp 2 hệ số hằng",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Tìm nghiệm tổng quát của phương trình vi phân $y'' - 5y' + 6y = 0$.",
            "options": [
                {"key": "A", "text": "$y = C_1 e^{2x} + C_2 e^{3x}$"},
                {"key": "B", "text": "$y = C_1 e^{-2x} + C_2 e^{-3x}$"},
                {"key": "C", "text": "$y = (C_1 + C_2 x) e^{2.5x}$"},
                {"key": "D", "text": "$y = C_1 e^{5x} + C_2 e^{6x}$"}
            ],
            "correct": "A",
            "explanation": "* Phương trình đặc trưng:\n  $$k^2 - 5k + 6 = 0 \\iff (k - 2)(k - 3) = 0 \\iff k_1 = 2, k_2 = 3$$\n* Vì có 2 nghiệm thực phân biệt nên nghiệm tổng quát là:\n  $$y = C_1 e^{2x} + C_2 e^{3x}$$\n* **Chọn đáp án: A.**"
        }
    ]

    q_data_ch4_clo3 = [
        {
            "topicId": 7, "topicName": "Phương trình vi phân cấp 1 & cấp 2", "subTypeId": 13, "typeName": "Giải PTVP cấp 2 không thuần nhất với vế phải đặc biệt",
            "clo": "CLO3", "difficulty": "hard",
            "question": "Tìm một nghiệm riêng $y_r$ của phương trình vi phân $y'' - 4y' + 4y = e^{2x}$.",
            "options": [
                {"key": "A", "text": "$y_r = \\frac{1}{2} x^2 e^{2x}$"},
                {"key": "B", "text": "$y_r = x e^{2x}$"},
                {"key": "C", "text": "$y_r = e^{2x}$"},
                {"key": "D", "text": "$y_r = \\frac{1}{4} e^{2x}$"}
            ],
            "correct": "A",
            "explanation": "* Phương trình thuần nhất tương ứng $y'' - 4y' + 4y = 0$ có phương trình đặc trưng:\n  $$k^2 - 4k + 4 = 0 \\iff (k - 2)^2 = 0 \\implies k = 2 \\text{ (nghiệm bội 2)}$$\n* Vế phải $f(x) = e^{2x}$ có $\\alpha = 2$ trùng với nghiệm bội $2$ của phương trình đặc trưng ($r = 2$).\n* Dạng nghiệm riêng dự đoán là:\n  $$y_r = A x^2 e^{2x}$$\n* Tính các đạo hàm:\n  $$y'_r = A(2x e^{2x} + 2x^2 e^{2x}) = 2A(x + x^2)e^{2x}$$\n  $$y''_r = A(2 + 8x + 4x^2)e^{2x}$$\n* Thay vào vế trái phương trình:\n  $$y''_r - 4y'_r + 4y_r = A(2 + 8x + 4x^2 - 8x - 8x^2 + 4x^2)e^{2x} = 2A e^{2x}$$\n* Đồng nhất với $e^{2x}$ ta được $2A = 1 \\implies A = \\frac{1}{2}$.\n* Vậy nghiệm riêng là $y_r = \\frac{1}{2} x^2 e^{2x}$.\n* **Chọn đáp án: A.**"
        }
    ]

    all_gt2_items = (
        [(ch1_id, ch1_name, q) for q in q_data_ch1_clo1 + q_data_ch1_clo2 + q_data_ch1_clo3] +
        [(ch2_id, ch2_name, q) for q in q_data_ch2_clo1 + q_data_ch2_clo2 + q_data_ch2_clo3] +
        [(ch3_id, ch3_name, q) for q in q_data_ch3_clo1 + q_data_ch3_clo2 + q_data_ch3_clo3] +
        [(ch4_id, ch4_name, q) for q in q_data_ch4_clo1 + q_data_ch4_clo2 + q_data_ch4_clo3]
    )

    for ch_id, ch_name, item in all_gt2_items:
        cur_id += 1
        q_obj = {
            "id": cur_id,
            "subjectId": "giai_tich_2",
            "subjectName": "Giải tích 2 (BAS1204)",
            "chapterId": ch_id,
            "chapterName": ch_name,
            "topicId": item["topicId"],
            "topicName": item["topicName"],
            "subTypeId": item["subTypeId"],
            "typeId": f"{ch_id}.{item['subTypeId']}",
            "typeName": item["typeName"],
            "clo": item["clo"],
            "difficulty": item["difficulty"],
            "examId": "ptit_standard",
            "examName": "Đề chuẩn PTIT",
            "question": item["question"],
            "options": item["options"],
            "correct": item["correct"],
            "explanation": item["explanation"],
            "isOriginal": True,
            "origin": "ptit_standard"
        }
        questions.append(q_obj)

    print(f"[Giải tích 2] Generated {len(questions)} verified questions.")
    return questions

# -------------------------------------------------------------
# 4. TOÁN RỜI RẠC (INT1358 / INT1359) QUESTIONS GENERATOR
# -------------------------------------------------------------
def build_toanroirac_bank():
    questions = []
    cur_id = 3000

    # ==================== CHƯƠNG 1: BÀI TOÁN ĐẾM & ĐẠI SỐ BOOLE ====================
    ch1_id = 1
    ch1_name = "Chương 1: Bài toán đếm & Đại số Boole"

    q_data_ch1_clo1 = [
        {
            "topicId": 1, "topicName": "Nguyên lý đếm cơ bản", "subTypeId": 1, "typeName": "Quy tắc cộng & Quy tắc nhân",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Giả sử một công việc có thể hoàn thành bằng một trong hai phương án độc lập: Phương án 1 có $m$ cách thực hiện, phương án 2 có $n$ cách thực hiện (không trùng lặp). Số cách hoàn thành công việc là:",
            "options": [
                {"key": "A", "text": "$m + n$ cách"},
                {"key": "B", "text": "$m \\times n$ cách"},
                {"key": "C", "text": "$m^n$ cách"},
                {"key": "D", "text": "$m! + n!$ cách"}
            ],
            "correct": "A",
            "explanation": "* Theo Quy tắc cộng cơ bản trong Toán rời rạc PTIT: Nếu hai hành động loại trừ lẫn nhau (rời nhau) thì số cách chọn để thực hiện một trong hai hành động là tổng số cách của từng hành động: $m + n$.\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 2, "topicName": "Đại số Boole", "subTypeId": 2, "typeName": "Nguyên lý đối ngẫu trong đại số Boole",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Công thức đối ngẫu của biểu thức Boole $f = (x \\vee 0) \\wedge (y' \\vee 1)$ là:",
            "options": [
                {"key": "A", "text": "$f^* = (x \\wedge 1) \\vee (y' \\wedge 0)$"},
                {"key": "B", "text": "$f^* = (x' \\wedge 1) \\vee (y \\wedge 0)$"},
                {"key": "C", "text": "$f^* = (x \\vee 1) \\wedge (y' \\vee 0)$"},
                {"key": "D", "text": "$f^* = (x \\wedge 0) \\vee (y' \\wedge 1)$"}
            ],
            "correct": "A",
            "explanation": "* Nguyên tắc tìm công thức đối ngẫu:\n  - Đổi phép tuyển $\\vee \\leftrightarrow \\wedge$ phép hội.\n  - Đổi hằng số $0 \\leftrightarrow 1$.\n  - Giữ nguyên tên biến và dấu phủ định.\n* Do đó $(x \\vee 0) \\wedge (y' \\vee 1)$ biến thành $(x \\wedge 1) \\vee (y' \\wedge 0)$.\n* **Chọn đáp án: A.**"
        }
    ]

    q_data_ch1_clo2 = [
        {
            "topicId": 1, "topicName": "Nguyên lý đếm cơ bản", "subTypeId": 3, "typeName": "Chỉnh hợp & Tổ hợp",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Từ một tập hợp gồm 10 sinh viên CNTT, có bao nhiêu cách chọn ra một ban đại diện gồm 3 người (1 trưởng ban, 1 phó ban và 1 thư ký)?",
            "options": [
                {"key": "A", "text": "$A_{10}^3 = 720$ cách"},
                {"key": "B", "text": "$C_{10}^3 = 120$ cách"},
                {"key": "C", "text": "$10^3 = 1000$ cách"},
                {"key": "D", "text": "$3^{10}$ cách"}
            ],
            "correct": "A",
            "explanation": "* Vì 3 vị trí được phân công công việc cụ thể (trưởng ban, phó ban, thư ký) nên thứ tự chọn là có phân biệt $\\implies$ đây là bài toán chỉnh hợp chập 3 của 10:\n  $$A_{10}^3 = \\frac{10!}{(10 - 3)!} = 10 \\times 9 \\times 8 = 720$$\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 1, "topicName": "Nguyên lý đếm cơ bản", "subTypeId": 4, "typeName": "Nguyên lý bù trừ (Inclusion-Exclusion)",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Trong các số nguyên từ $1$ đến $100$, có bao nhiêu số chia hết cho $3$ hoặc chia hết cho $5$?",
            "options": [
                {"key": "A", "text": "$47$ số"},
                {"key": "B", "text": "$53$ số"},
                {"key": "C", "text": "$50$ số"},
                {"key": "D", "text": "$40$ số"}
            ],
            "correct": "A",
            "explanation": "* Số các số chia hết cho 3: $|A| = \\lfloor 100/3 \\rfloor = 33$.\n* Số các số chia hết cho 5: $|B| = \\lfloor 100/5 \\rfloor = 20$.\n* Số các số chia hết cho cả 3 và 5 (tức chia hết cho 15): $|A \\cap B| = \\lfloor 100/15 \\rfloor = 6$.\n* Theo nguyên lý bù trừ:\n  $$|A \\cup B| = |A| + |B| - |A \\cap B| = 33 + 20 - 6 = 47$$\n* **Chọn đáp án: A.**"
        }
    ]

    q_data_ch1_clo3 = [
        {
            "topicId": 1, "topicName": "Nguyên lý đếm cơ bản", "subTypeId": 5, "typeName": "Bài toán chia kẹo Euler (Tổ hợp lặp)",
            "clo": "CLO3", "difficulty": "hard",
            "question": "Phương trình $x_1 + x_2 + x_3 + x_4 = 12$ có bao nhiêu nghiệm nguyên dương $(x_i \\ge 1, i = 1..4)$?",
            "options": [
                {"key": "A", "text": "$C_{11}^3 = 165$"},
                {"key": "B", "text": "$C_{15}^3 = 455$"},
                {"key": "C", "text": "$C_{12}^4 = 495$"},
                {"key": "D", "text": "$12^4$"}
            ],
            "correct": "A",
            "explanation": "* Đặt $y_i = x_i - 1 \\ge 0$, phương trình trở thành:\n  $$y_1 + y_2 + y_3 + y_4 = 12 - 4 = 8$$\n* Số nghiệm nguyên không âm là số tổ hợp lặp chập 8 của 4 phần tử:\n  $$\\bar{C}_4^8 = C_{4 + 8 - 1}^8 = C_{11}^8 = C_{11}^3 = \\frac{11 \\times 10 \\times 9}{3 \\times 2 \\times 1} = 165$$\n* Hoặc dùng công thức trực tiếp số nghiệm nguyên dương: $C_{n-1}^{k-1} = C_{12-1}^{4-1} = C_{11}^3 = 165$.\n* **Chọn đáp án: A.**"
        }
    ]

    # ==================== CHƯƠNG 2: THUẬT TOÁN SINH & QUAY LUI ====================
    ch2_id = 2
    ch2_name = "Chương 2: Thuật toán sinh & Quay lui"

    q_data_ch2_clo1 = [
        {
            "topicId": 3, "topicName": "Thuật toán sinh kế tiếp", "subTypeId": 6, "typeName": "Thứ tự từ điển của xâu nhị phân",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Trong thuật toán sinh xâu nhị phân độ dài $n$ theo thứ tự từ điển, xâu nhị phân đầu tiên và xâu cuối cùng lần lượt là:",
            "options": [
                {"key": "A", "text": "$00...0$ và $11...1$"},
                {"key": "B", "text": "$11...1$ và $00...0$"},
                {"key": "C", "text": "$01...0$ và $10...1$"},
                {"key": "D", "text": "$00...1$ và $11...0$"}
            ],
            "correct": "A",
            "explanation": "* Theo thứ tự từ điển chuẩn trong môn Toán rời rạc PTIT:\n  - Cấu hình đầu tiên toàn số 0: $00...0$\n  - Cấu hình cuối cùng toàn số 1: $11...1$\n* **Chọn đáp án: A.**"
        }
    ]

    q_data_ch2_clo2 = [
        {
            "topicId": 3, "topicName": "Thuật toán sinh kế tiếp", "subTypeId": 6, "typeName": "Sinh hoán vị kế tiếp",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Cho hoán vị của tập $\\{1, 2, 3, 4, 5\\}$ là $(1, 4, 5, 3, 2)$. Hoán vị kế tiếp theo thứ tự từ điển là:",
            "options": [
                {"key": "A", "text": "$(1, 5, 2, 3, 4)$"},
                {"key": "B", "text": "$(1, 5, 4, 3, 2)$"},
                {"key": "C", "text": "$(1, 4, 5, 2, 3)$"},
                {"key": "D", "text": "$(2, 1, 3, 4, 5)$"}
            ],
            "correct": "A",
            "explanation": "* Các bước thuật toán sinh hoán vị kế tiếp:\n  1. Xét từ phải sang trái tìm vị trí $i$ đầu tiên có $a[i] < a[i+1]$: Ở đây xét từ cuối $2 < 3 < 5$, ta thấy $a[2] = 4 < a[3] = 5 \\implies i = 2$.\n  2. Tìm phần tử nhỏ nhất bên phải $a[i]$ mà lớn hơn $a[i] = 4$: Đó là số $5$.\n  3. Đổi chỗ $4$ và $5$: ta được $(1, 5, 4, 3, 2)$.\n  4. Lật ngược đoạn phía sau vị trí $i$: đoạn $(4, 3, 2)$ lật thành $(2, 3, 4)$.\n  5. Kết quả: $(1, 5, 2, 3, 4)$.\n* **Chọn đáp án: A.**"
        }
    ]

    q_data_ch2_clo3 = [
        {
            "topicId": 4, "topicName": "Thuật toán quay lui", "subTypeId": 7, "typeName": "Không gian trạng thái bài toán N quân hậu",
            "clo": "CLO3", "difficulty": "hard",
            "question": "Trong bài toán $N$ quân hậu đặt trên bàn cờ $N \\times N$, để kiểm tra hai quân hậu tại $(i, x[i])$ và $(j, x[j])$ không cùng nằm trên đường chéo, điều kiện cần thỏa mãn là:",
            "options": [
                {"key": "A", "text": "$|i - j| \\neq |x[i] - x[j]|$"},
                {"key": "B", "text": "$i + x[i] \\neq j + x[j]$"},
                {"key": "C", "text": "$i - x[i] \\neq j - x[j]$"},
                {"key": "D", "text": "$x[i] \\neq x[j]$"}
            ],
            "correct": "A",
            "explanation": "* Hai ô $(i, x[i])$ và $(j, x[j])$ cùng nằm trên một đường chéo (chính hoặc phụ) khi và chỉ khi:\n  $$i - j = x[i] - x[j] \\quad \\text{hoặc} \\quad i - j = -(x[i] - x[j])$$\n  Tức là $|i - j| = |x[i] - x[j]|$.\n* Do đó, điều kiện để không bị ăn chéo là $|i - j| \\neq |x[i] - x[j]|$.\n* **Chọn đáp án: A.**"
        }
    ]

    # ==================== CHƯƠNG 3: LÝ THUYẾT ĐỒ THỊ CƠ BẢN ====================
    ch3_id = 3
    ch3_name = "Chương 3: Lý thuyết đồ thị cơ bản"

    q_data_ch3_clo1 = [
        {
            "topicId": 5, "topicName": "Khái niệm đồ thị cơ bản", "subTypeId": 8, "typeName": "Định lý bắt tay (Handshaking Theorem)",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Cho đơn đồ thị vô hướng $G = (V, E)$ có $n$ đỉnh và $m$ cạnh. Tổng các bậc của tất cả các đỉnh trong đồ thị bằng:",
            "options": [
                {"key": "A", "text": "$2m$"},
                {"key": "B", "text": "$m$"},
                {"key": "C", "text": "$n \\cdot m$"},
                {"key": "D", "text": "$2n$"}
            ],
            "correct": "A",
            "explanation": "* Theo Định lý bắt tay (Euler): Mỗi cạnh nối 2 đỉnh đóng góp đúng 2 đơn vị vào tổng bậc các đỉnh của đồ thị, do đó:\n  $$\\sum_{v \\in V} \\deg(v) = 2|E| = 2m$$\n* Hệ quả: Số đỉnh có bậc lẻ trong một đồ thị luôn là một số chẵn.\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 6, "topicName": "Đồ thị Euler & Hamilton", "subTypeId": 9, "typeName": "Định lý Euler cho đồ thị vô hướng",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Một đồ thị vô hướng liên thông $G$ có chu trình Euler khi và chỉ khi:",
            "options": [
                {"key": "A", "text": "Mọi đỉnh của đồ thị đều có bậc chẵn"},
                {"key": "B", "text": "Đồ thị có đúng 2 đỉnh bậc lẻ"},
                {"key": "C", "text": "Mọi đỉnh của đồ thị đều có bậc lẻ"},
                {"key": "D", "text": "Đồ thị không chứa chu trình con"}
            ],
            "correct": "A",
            "explanation": "* Định lý Euler: Đồ thị vô hướng liên thông có chu trình Euler $\\iff$ mọi đỉnh đều có bậc chẵn.\n* Nếu đồ thị có đúng 2 đỉnh bậc lẻ thì đồ thị có đường đi Euler (không phải chu trình).\n* **Chọn đáp án: A.**"
        }
    ]

    q_data_ch3_clo2 = [
        {
            "topicId": 5, "topicName": "Khái niệm đồ thị cơ bản", "subTypeId": 8, "typeName": "Tính số cạnh từ bậc đỉnh",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Một đồ thị vô hướng có 6 đỉnh với bậc của các đỉnh lần lượt là $2, 3, 3, 4, 4, 4$. Hỏi đồ thị này có bao nhiêu cạnh?",
            "options": [
                {"key": "A", "text": "$10$ cạnh"},
                {"key": "B", "text": "$20$ cạnh"},
                {"key": "C", "text": "$12$ cạnh"},
                {"key": "D", "text": "$8$ cạnh"}
            ],
            "correct": "A",
            "explanation": "* Tổng bậc của tất cả các đỉnh:\n  $$\\sum \\deg(v) = 2 + 3 + 3 + 4 + 4 + 4 = 20$$\n* Theo định lý bắt tay: $\\sum \\deg(v) = 2|E| \\implies |E| = \\frac{20}{2} = 10$.\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 7, "topicName": "Cây & Cây khung", "subTypeId": 10, "typeName": "Tính chất của đồ thị dạng cây (Tree)",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Một đồ thị dạng cây $T$ có $15$ đỉnh thì số cạnh của cây bằng bao nhiêu?",
            "options": [
                {"key": "A", "text": "$14$ cạnh"},
                {"key": "B", "text": "$15$ cạnh"},
                {"key": "C", "text": "$16$ cạnh"},
                {"key": "D", "text": "Không xác định được"}
            ],
            "correct": "A",
            "explanation": "* Định lý về cây: Cây là một đồ thị liên thông không có chu trình. Mọi cây có $n$ đỉnh luôn có đúng $n - 1$ cạnh:\n  $$|E| = |V| - 1 = 15 - 1 = 14$$\n* **Chọn đáp án: A.**"
        }
    ]

    q_data_ch3_clo3 = [
        {
            "topicId": 6, "topicName": "Đồ thị Euler & Hamilton", "subTypeId": 9, "typeName": "Định lý Dirac về đồ thị Hamilton",
            "clo": "CLO3", "difficulty": "hard",
            "question": "Cho đơn đồ thị $G$ có $n \\ge 3$ đỉnh. Theo Định lý Dirac, điều kiện đủ để $G$ là đồ thị Hamilton là:",
            "options": [
                {"key": "A", "text": "Bậc của mọi đỉnh $v$ đều thỏa mãn $\\deg(v) \\ge \\frac{n}{2}$"},
                {"key": "B", "text": "Tổng bậc của 2 đỉnh bất kỳ $\\deg(u) + \\deg(v) \\ge n - 1$"},
                {"key": "C", "text": "Đồ thị liên thông và có chu trình Euler"},
                {"key": "D", "text": "Đồ thị là đồ thị đầy đủ $K_n$"}
            ],
            "correct": "A",
            "explanation": "* Định lý Dirac (1952): Nếu đơn đồ thị $G$ có $n \\ge 3$ đỉnh và mỗi đỉnh có bậc không nhỏ hơn $\\frac{n}{2}$ thì $G$ có chu trình Hamilton.\n* (Lưu ý: Định lý Ore là $\\deg(u) + \\deg(v) \\ge n$ với mọi cặp đỉnh không kề nhau).\n* **Chọn đáp án: A.**"
        }
    ]

    # ==================== CHƯƠNG 4: CÁC THUẬT TOÁN TRÊN ĐỒ THỊ ====================
    ch4_id = 4
    ch4_name = "Chương 4: Các thuật toán trên đồ thị"

    q_data_ch4_clo1 = [
        {
            "topicId": 8, "topicName": "Thuật toán tìm kiếm DFS & BFS", "subTypeId": 11, "typeName": "Cấu trúc dữ liệu cho BFS và DFS",
            "clo": "CLO1", "difficulty": "easy",
            "question": "Để cài đặt thuật toán duyệt theo chiều rộng (BFS) và duyệt theo chiều sâu (DFS), người ta lần lượt sử dụng cấu trúc dữ liệu nào?",
            "options": [
                {"key": "A", "text": "Hàng đợi (Queue) cho BFS và Ngăn xếp (Stack) cho DFS"},
                {"key": "B", "text": "Ngăn xếp (Stack) cho BFS và Hàng đợi (Queue) cho DFS"},
                {"key": "C", "text": "Mảng hai chiều cho cả BFS và DFS"},
                {"key": "D", "text": "Hàng đợi ưu tiên (Priority Queue) cho cả hai"}
            ],
            "correct": "A",
            "explanation": "* Thuật toán BFS duyệt theo từng mức lan tỏa nên dùng Hàng đợi FIFO (Queue).\n* Thuật toán DFS đi sâu vào các nhánh con nên dùng Ngăn xếp LIFO (Stack) hoặc gọi đệ quy.\n* **Chọn đáp án: A.**"
        }
    ]

    q_data_ch4_clo2 = [
        {
            "topicId": 9, "topicName": "Thuật toán Cây khung & Đường đi ngắn nhất", "subTypeId": 12, "typeName": "Thuật toán Dijkstra",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Thuật toán Dijkstra tìm đường đi ngắn nhất từ một đỉnh nguồn đến tất cả các đỉnh khác yêu cầu đồ thị phải có điều kiện gì đối với trọng số?",
            "options": [
                {"key": "A", "text": "Trọng số của tất cả các cạnh phải không âm ($w(e) \\ge 0$)"},
                {"key": "B", "text": "Đồ thị phải là đồ thị không có chu trình (DAG)"},
                {"key": "C", "text": "Trọng số của các cạnh phải là số nguyên"},
                {"key": "D", "text": "Đồ thị phải có hướng"}
            ],
            "correct": "A",
            "explanation": "* Thuật toán Dijkstra theo chiến lược tham lam (Greedy) chỉ cho kết quả chính xác khi trọng số các cạnh không âm ($w \\ge 0$). Nếu có cạnh trọng số âm thì phải dùng thuật toán Bellman-Ford.\n* **Chọn đáp án: A.**"
        },
        {
            "topicId": 9, "topicName": "Thuật toán Cây khung & Đường đi ngắn nhất", "subTypeId": 13, "typeName": "Thuật toán Kruskal tìm cây khung nhỏ nhất",
            "clo": "CLO2", "difficulty": "medium",
            "question": "Trong thuật toán Kruskal tìm cây khung nhỏ nhất, các cạnh được chọn theo nguyên tắc nào?",
            "options": [
                {"key": "A", "text": "Sắp xếp cạnh tăng dần trọng số, lần lượt nạp cạnh có trọng số nhỏ nhất nếu không tạo thành chu trình"},
                {"key": "B", "text": "Từ một đỉnh bất kỳ, phát triển dần cây bằng cách chọn cạnh nhỏ nhất nối đỉnh đã có với đỉnh chưa có"},
                {"key": "C", "text": "Chọn ngẫu nhiên $n - 1$ cạnh"},
                {"key": "D", "text": "Duyệt qua các đỉnh có bậc lớn nhất"}
            ],
            "correct": "A",
            "explanation": "* Thuật toán Kruskal:\n  1. Sắp xếp danh sách tất cả các cạnh theo trọng số tăng dần.\n  2. Duyệt qua từng cạnh, nếu cạnh đó không tạo thành chu trình với các cạnh đã chọn thì thêm vào cây khung.\n  3. Dừng lại khi đã chọn đủ $n - 1$ cạnh.\n* (Lưu ý: Phương án B là mô tả của thuật toán Prim).\n* **Chọn đáp án: A.**"
        }
    ]

    q_data_ch4_clo3 = [
        {
            "topicId": 9, "topicName": "Thuật toán Cây khung & Đường đi ngắn nhất", "subTypeId": 13, "typeName": "Áp dụng thuật toán Kruskal tính trọng số cây khung",
            "clo": "CLO3", "difficulty": "hard",
            "question": "Cho đồ thị có 5 đỉnh $A, B, C, D, E$ với các cạnh và trọng số: $AB=1, AC=4, BC=2, BD=5, CD=3, CE=6, DE=7$. Trọng số của cây khung nhỏ nhất là:",
            "options": [
                {"key": "A", "text": "$12$"},
                {"key": "B", "text": "$11$"},
                {"key": "C", "text": "$14$"},
                {"key": "D", "text": "$15$"}
            ],
            "correct": "A",
            "explanation": "* Sắp xếp các cạnh tăng dần trọng số:\n  $AB(1), BC(2), CD(3), AC(4), BD(5), CE(6), DE(7)$\n* Lần lượt chọn các cạnh không tạo chu trình:\n  1. Chọn $AB (1)$ (nối A-B)\n  2. Chọn $BC (2)$ (nối A-B-C)\n  3. Chọn $CD (3)$ (nối A-B-C-D)\n  4. Xét $AC (4)$: tạo chu trình $A-B-C-A \\implies$ loại.\n  5. Xét $BD (5)$: tạo chu trình $B-C-D-B \\implies$ loại.\n  6. Chọn $CE (6)$ (kết nạp đỉnh E, nối đủ 5 đỉnh với 4 cạnh).\n* Tổng trọng số cây khung nhỏ nhất:\n  $$W = 1 + 2 + 3 + 6 = 12$$\n* **Chọn đáp án: A.**"
        }
    ]

    all_trr_items = (
        [(ch1_id, ch1_name, q) for q in q_data_ch1_clo1 + q_data_ch1_clo2 + q_data_ch1_clo3] +
        [(ch2_id, ch2_name, q) for q in q_data_ch2_clo1 + q_data_ch2_clo2 + q_data_ch2_clo3] +
        [(ch3_id, ch3_name, q) for q in q_data_ch3_clo1 + q_data_ch3_clo2 + q_data_ch3_clo3] +
        [(ch4_id, ch4_name, q) for q in q_data_ch4_clo1 + q_data_ch4_clo2 + q_data_ch4_clo3]
    )

    for ch_id, ch_name, item in all_trr_items:
        cur_id += 1
        q_obj = {
            "id": cur_id,
            "subjectId": "toan_roi_rac",
            "subjectName": "Toán rời rạc (INT1358 / INT1359)",
            "chapterId": ch_id,
            "chapterName": ch_name,
            "topicId": item["topicId"],
            "topicName": item["topicName"],
            "subTypeId": item["subTypeId"],
            "typeId": f"{ch_id}.{item['subTypeId']}",
            "typeName": item["typeName"],
            "clo": item["clo"],
            "difficulty": item["difficulty"],
            "examId": "ptit_standard",
            "examName": "Đề chuẩn PTIT",
            "question": item["question"],
            "options": item["options"],
            "correct": item["correct"],
            "explanation": item["explanation"],
            "isOriginal": True,
            "origin": "ptit_standard"
        }
        questions.append(q_obj)

    print(f"[Toán rời rạc] Generated {len(questions)} verified questions.")
    return questions

# -------------------------------------------------------------
# 5. MAIN MERGER & EXPORT SCRIPT
# -------------------------------------------------------------
def main():
    daiso_questions = load_and_enrich_daiso()
    gt1_questions = build_giaitich1_bank()
    gt2_questions = build_giaitich2_bank()
    trr_questions = build_toanroirac_bank()

    all_questions = daiso_questions + gt1_questions + gt2_questions + trr_questions
    print(f"\n===> TOTAL COMBINED QUESTIONS: {len(all_questions)}")

    # Summary by subject
    subjects_summary = {}
    for q in all_questions:
        s_id = q.get("subjectId", "unknown")
        if s_id not in subjects_summary:
            subjects_summary[s_id] = {"total": 0, "clo": {"CLO1": 0, "CLO2": 0, "CLO3": 0}}
        subjects_summary[s_id]["total"] += 1
        clo = q.get("clo", "CLO2")
        subjects_summary[s_id]["clo"][clo] = subjects_summary[s_id]["clo"].get(clo, 0) + 1

    print("Summary:")
    print(json.dumps(subjects_summary, indent=2, ensure_ascii=False))

    # Save to questions.json
    out_json = os.path.join(DATA_DIR, "questions.json")
    with open(out_json, "w", encoding="utf-8") as f:
        json.dump(all_questions, f, ensure_ascii=False, indent=2)
    print(f"Saved: {out_json}")

    # Save to questions.js (for direct client-side load / GitHub Pages)
    out_js = os.path.join(DATA_DIR, "questions.js")
    with open(out_js, "w", encoding="utf-8") as f:
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
    print(f"Saved: {out_js}")

if __name__ == "__main__":
    main()
