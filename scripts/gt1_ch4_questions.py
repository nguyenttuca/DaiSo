# -*- coding: utf-8 -*-
"""
gt1_ch4_questions.py
40 authentic, diverse, and syllabus-focused questions for:
Chương 4: Phép tính tích phân (Giải tích 1 - BAS1203 - PTIT)
"""

CHAPTER_4_QUESTIONS = [
    {
        "subTypeId": 1,
        "typeId": "4.1",
        "typeName": "Nguyên hàm cơ bản & đổi biến vi phân",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tìm nguyên hàm $I = \\int \\frac{x}{\\sqrt{x^2 + 4}} dx$.",
        "options": [
            {"key": "A", "text": "$\\sqrt{x^2 + 4} + C$"},
            {"key": "B", "text": "$\\frac{1}{2}\\sqrt{x^2 + 4} + C$"},
            {"key": "C", "text": "$\\ln(x + \\sqrt{x^2 + 4}) + C$"},
            {"key": "D", "text": "$\\frac{x}{\\sqrt{x^2 + 4}} + C$"}
        ],
        "correct": "A",
        "explanation": "* Đổi biến $u = x^2 + 4 \\implies du = 2x dx \\implies x dx = \\frac{du}{2}$.\n* Khi đó: $I = \\int \\frac{du}{2\\sqrt{u}} = \\sqrt{u} + C = \\sqrt{x^2 + 4} + C$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.1",
        "typeName": "Nguyên hàm cơ bản & đổi biến vi phân",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tìm nguyên hàm $I = \\int \\frac{\\ln x}{x} dx$.",
        "options": [
            {"key": "A", "text": "$\\frac{1}{2}\\ln^2 x + C$"},
            {"key": "B", "text": "$\\ln(\\ln x) + C$"},
            {"key": "C", "text": "$\\frac{1}{x^2} + C$"},
            {"key": "D", "text": "$\\ln x + C$"}
        ],
        "correct": "A",
        "explanation": "* Đưa vào vi phân: $\\frac{dx}{x} = d(\\ln x)$.\n* Khi đó: $I = \\int \\ln x \\, d(\\ln x) = \\frac{\\ln^2 x}{2} + C$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.1",
        "typeName": "Nguyên hàm cơ bản & đổi biến vi phân",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tìm nguyên hàm $I = \\int \\frac{e^x}{1 + e^{2x}} dx$.",
        "options": [
            {"key": "A", "text": "$\\arctan(e^x) + C$"},
            {"key": "B", "text": "$\\ln(1 + e^{2x}) + C$"},
            {"key": "C", "text": "$\\frac{1}{2}\\arctan(e^x) + C$"},
            {"key": "D", "text": "$\\frac{e^x}{1 + e^{2x}} + C$"}
        ],
        "correct": "A",
        "explanation": "* Đặt $u = e^x \\implies du = e^x dx$.\n* Khi đó: $I = \\int \\frac{du}{1 + u^2} = \\arctan(u) + C = \\arctan(e^x) + C$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.1",
        "typeName": "Nguyên hàm cơ bản & đổi biến vi phân",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tìm nguyên hàm $I = \\int \\frac{dx}{x^2 - 9}$.",
        "options": [
            {"key": "A", "text": "$\\frac{1}{6}\\ln\\left|\\frac{x - 3}{x + 3}\\right| + C$"},
            {"key": "B", "text": "$\\frac{1}{3}\\ln\\left|\\frac{x - 3}{x + 3}\\right| + C$"},
            {"key": "C", "text": "$\\frac{1}{3}\\arctan\\left(\\frac{x}{3}\\right) + C$"},
            {"key": "D", "text": "$\\frac{1}{6}\\ln(x^2 - 9) + C$"}
        ],
        "correct": "A",
        "explanation": "* Phân tích: $\\frac{1}{x^2 - 9} = \\frac{1}{(x-3)(x+3)} = \\frac{1}{6}\\left(\\frac{1}{x-3} - \\frac{1}{x+3}\\right)$.\n* Lấy nguyên hàm: $I = \\frac{1}{6}(\\ln|x-3| - \\ln|x+3|) + C = \\frac{1}{6}\\ln\\left|\\frac{x-3}{x+3}\\right| + C$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.1",
        "typeName": "Nguyên hàm hàm hữu tỉ",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tìm nguyên hàm $I = \\int \\frac{2x + 5}{x^2 + 5x + 6} dx$.",
        "options": [
            {"key": "A", "text": "$\\ln|x^2 + 5x + 6| + C$"},
            {"key": "B", "text": "$\\frac{1}{2}\\ln|x^2 + 5x + 6| + C$"},
            {"key": "C", "text": "$\\ln|x + 2| + \\ln|x + 3| + C$"},
            {"key": "D", "text": "$\\frac{1}{x+2} + \\frac{1}{x+3} + C$"}
        ],
        "correct": "A",
        "explanation": "* Nhận thấy tử số $(2x + 5)$ chính là đạo hàm của mẫu số: $(x^2 + 5x + 6)' = 2x + 5$.\n* Do đó: $I = \\int \\frac{d(x^2 + 5x + 6)}{x^2 + 5x + 6} = \\ln|x^2 + 5x + 6| + C$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.1",
        "typeName": "Nguyên hàm hàm hữu tỉ",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tìm nguyên hàm $I = \\int \\frac{dx}{x(x^2 + 1)}$.",
        "options": [
            {"key": "A", "text": "$\\ln|x| - \\frac{1}{2}\\ln(x^2 + 1) + C$"},
            {"key": "B", "text": "$\\ln|x| + \\arctan x + C$"},
            {"key": "C", "text": "$\\ln|x| - \\ln(x^2 + 1) + C$"},
            {"key": "D", "text": "$\\frac{1}{2}\\ln|x| - \\frac{1}{2}\\ln(x^2 + 1) + C$"}
        ],
        "correct": "A",
        "explanation": "* Tách phân thức:\n  $$\\frac{1}{x(x^2+1)} = \\frac{1}{x} - \\frac{x}{x^2+1}$$\n* Lấy nguyên hàm từng phần:\n  $$I = \\int \\frac{dx}{x} - \\int \\frac{x dx}{x^2+1} = \\ln|x| - \\frac{1}{2}\\ln(x^2+1) + C$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.2",
        "typeName": "Phương pháp tích phân từng phần",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính nguyên hàm $I = \\int x e^{2x} dx$.",
        "options": [
            {"key": "A", "text": "$\\frac{1}{2}x e^{2x} - \\frac{1}{4}e^{2x} + C$"},
            {"key": "B", "text": "$\\frac{1}{2}x e^{2x} - \\frac{1}{2}e^{2x} + C$"},
            {"key": "C", "text": "$x e^{2x} - e^{2x} + C$"},
            {"key": "D", "text": "$\\frac{1}{2}x^2 e^{2x} + C$"}
        ],
        "correct": "A",
        "explanation": "* Đặt $\\begin{cases} u = x \\\\ dv = e^{2x}dx \\end{cases} \\implies \\begin{cases} du = dx \\\\ v = \\frac{1}{2}e^{2x} \\end{cases}$.\n* Áp dụng công thức tích phân từng phần $\\int u dv = uv - \\int v du$:\n  $$I = \\frac{1}{2}x e^{2x} - \\int \\frac{1}{2}e^{2x} dx = \\frac{1}{2}x e^{2x} - \\frac{1}{4}e^{2x} + C$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.2",
        "typeName": "Phương pháp tích phân từng phần",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính nguyên hàm $I = \\int x \\sin 3x dx$.",
        "options": [
            {"key": "A", "text": "$-\\frac{1}{3}x \\cos 3x + \\frac{1}{9}\\sin 3x + C$"},
            {"key": "B", "text": "$\\frac{1}{3}x \\cos 3x - \\frac{1}{9}\\sin 3x + C$"},
            {"key": "C", "text": "$-\\frac{1}{3}x \\cos 3x + \\frac{1}{3}\\sin 3x + C$"},
            {"key": "D", "text": "$-x \\cos 3x + \\sin 3x + C$"}
        ],
        "correct": "A",
        "explanation": "* Đặt $\\begin{cases} u = x \\\\ dv = \\sin 3x dx \\end{cases} \\implies \\begin{cases} du = dx \\\\ v = -\\frac{1}{3}\\cos 3x \\end{cases}$.\n* Khi đó:\n  $$I = -\\frac{1}{3}x \\cos 3x - \\int \\left(-\\frac{1}{3}\\cos 3x\\right) dx = -\\frac{1}{3}x \\cos 3x + \\frac{1}{9}\\sin 3x + C$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.2",
        "typeName": "Phương pháp tích phân từng phần",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính nguyên hàm $I = \\int \\arctan x dx$.",
        "options": [
            {"key": "A", "text": "$x \\arctan x - \\frac{1}{2}\\ln(1 + x^2) + C$"},
            {"key": "B", "text": "$x \\arctan x - \\ln(1 + x^2) + C$"},
            {"key": "C", "text": "$\\frac{1}{1 + x^2} + C$"},
            {"key": "D", "text": "$x \\arctan x + \\frac{1}{2}\\ln(1 + x^2) + C$"}
        ],
        "correct": "A",
        "explanation": "* Đặt $\\begin{cases} u = \\arctan x \\\\ dv = dx \\end{cases} \\implies \\begin{cases} du = \\frac{dx}{1 + x^2} \\\\ v = x \\end{cases}$.\n* Từng phần:\n  $$I = x \\arctan x - \\int \\frac{x dx}{1 + x^2} = x \\arctan x - \\frac{1}{2}\\ln(1 + x^2) + C$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.2",
        "typeName": "Tích phân xác định từng phần",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính tích phân xác định $I = \\int_0^1 x e^x dx$.",
        "options": [
            {"key": "A", "text": "$I = 1$"},
            {"key": "B", "text": "$I = e - 1$"},
            {"key": "C", "text": "$I = e$"},
            {"key": "D", "text": "$I = 2$"}
        ],
        "correct": "A",
        "explanation": "* Đặt $u = x, dv = e^x dx \\implies du = dx, v = e^x$.\n* Áp dụng công thức Newton-Leibniz:\n  $$I = [x e^x]_0^1 - \\int_0^1 e^x dx = (1 \\cdot e - 0) - [e^x]_0^1 = e - (e - 1) = 1$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.2",
        "typeName": "Tích phân xác định từng phần",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính tích phân $I = \\int_1^e x \\ln x dx$.",
        "options": [
            {"key": "A", "text": "$I = \\frac{e^2 + 1}{4}$"},
            {"key": "B", "text": "$I = \\frac{e^2 - 1}{4}$"},
            {"key": "C", "text": "$I = \\frac{e^2}{2}$"},
            {"key": "D", "text": "$I = \\frac{e^2 - 1}{2}$"}
        ],
        "correct": "A",
        "explanation": "* Đặt $u = \\ln x, dv = x dx \\implies du = \\frac{dx}{x}, v = \\frac{x^2}{2}$.\n* Khi đó:\n  $$I = \\left[\\frac{x^2}{2}\\ln x\\right]_1^e - \\int_1^e \\frac{x^2}{2} \\cdot \\frac{dx}{x} = \\left(\\frac{e^2}{2} - 0\\right) - \\left[\\frac{x^2}{4}\\right]_1^e = \\frac{e^2}{2} - \\left(\\frac{e^2}{4} - \\frac{1}{4}\\right) = \\frac{e^2 + 1}{4}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.2",
        "typeName": "Tích phân xác định từng phần",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính tích phân $I = \\int_0^{\\pi/2} x \\cos x dx$.",
        "options": [
            {"key": "A", "text": "$I = \\frac{\\pi}{2} - 1$"},
            {"key": "B", "text": "$I = \\frac{\\pi}{2}$"},
            {"key": "C", "text": "$I = 1$"},
            {"key": "D", "text": "$I = \\frac{\\pi}{2} + 1$"}
        ],
        "correct": "A",
        "explanation": "* Đặt $u = x, dv = \\cos x dx \\implies du = dx, v = \\sin x$.\n* Áp dụng công thức:\n  $$I = [x \\sin x]_0^{\\pi/2} - \\int_0^{\\pi/2} \\sin x dx = \\left(\\frac{\\pi}{2} \\cdot 1 - 0\\right) - [-\\cos x]_0^{\\pi/2} = \\frac{\\pi}{2} - (0 - (-1)) = \\frac{\\pi}{2} - 1$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.3",
        "typeName": "Tính chất tích phân hàm chẵn, lẻ",
        "clo": "CLO1",
        "difficulty": "easy",
        "question": "Tính tích phân $I = \\int_{-1}^1 \\frac{x^3 + \\sin x}{1 + x^4} dx$.",
        "options": [
            {"key": "A", "text": "$I = 0$"},
            {"key": "B", "text": "$I = 1$"},
            {"key": "C", "text": "$I = 2$"},
            {"key": "D", "text": "$I = \\frac{\\pi}{4}$"}
        ],
        "correct": "A",
        "explanation": "* Hàm số dưới dấu tích phân $f(x) = \\frac{x^3 + \\sin x}{1 + x^4}$ thỏa mãn:\n  $$f(-x) = \\frac{(-x)^3 + \\sin(-x)}{1 + (-x)^4} = \\frac{-x^3 - \\sin x}{1 + x^4} = -f(x)$$\n* Do $f(x)$ là hàm số lẻ trên đoạn đối xứng $[-1, 1]$, tích phân bằng $0$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.3",
        "typeName": "Tích phân hàm lượng giác",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tính tích phân $I = \\int_0^{\\pi/2} \\sin^2 x dx$.",
        "options": [
            {"key": "A", "text": "$I = \\frac{\\pi}{4}$"},
            {"key": "B", "text": "$I = \\frac{\\pi}{2}$"},
            {"key": "C", "text": "$I = 1$"},
            {"key": "D", "text": "$I = \\frac{1}{2}$"}
        ],
        "correct": "A",
        "explanation": "* Hạ bậc: $\\sin^2 x = \\frac{1 - \\cos 2x}{2}$.\n* Do đó:\n  $$I = \\int_0^{\\pi/2} \\frac{1 - \\cos 2x}{2} dx = \\left[ \\frac{x}{2} - \\frac{\\sin 2x}{4} \\right]_0^{\\pi/2} = \\left(\\frac{\\pi}{4} - 0\\right) - (0 - 0) = \\frac{\\pi}{4}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.4",
        "typeName": "Đạo hàm theo cận của tích phân",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính đạo hàm $\\frac{d}{dx} \\left( \\int_0^{x^2} \\sin(t^2) dt \\right)$.",
        "options": [
            {"key": "A", "text": "$2x \\sin(x^4)$"},
            {"key": "B", "text": "$\\sin(x^4)$"},
            {"key": "C", "text": "$2x \\sin(x^2)$"},
            {"key": "D", "text": "$x^2 \\sin(x^4)$"}
        ],
        "correct": "A",
        "explanation": "* Theo công thức Leibniz về đạo hàm theo cận tích phân: $\\frac{d}{dx} \\int_{a}^{u(x)} f(t) dt = f(u(x)) \\cdot u'(x)$.\n* Ở đây $u(x) = x^2 \\implies u'(x) = 2x$, và $f(t) = \\sin(t^2)$.\n* Do đó: $\\frac{d}{dx} = \\sin((x^2)^2) \\cdot (x^2)' = 2x \\sin(x^4)$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.4",
        "typeName": "Đạo hàm theo cận của tích phân",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tính giới hạn $L = \\lim_{x \\to 0} \\frac{\\int_0^x \\sin(2t) dt}{x^2}$.",
        "options": [
            {"key": "A", "text": "$L = 1$"},
            {"key": "B", "text": "$L = 2$"},
            {"key": "C", "text": "$L = 0$"},
            {"key": "D", "text": "$L = \\frac{1}{2}$"}
        ],
        "correct": "A",
        "explanation": "* Dạng $\\frac{0}{0}$. Áp dụng quy tắc L'Hospital:\n  $$L = \\lim_{x \\to 0} \\frac{\\frac{d}{dx} \\left( \\int_0^x \\sin(2t) dt \\right)}{\\frac{d}{dx}(x^2)} = \\lim_{x \\to 0} \\frac{\\sin 2x}{2x} = 1$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.5",
        "typeName": "Tích phân suy rộng loại 1 (cận vô hạn)",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tính tích phân suy rộng $I = \\int_1^{+\\infty} \\frac{dx}{x^2}$.",
        "options": [
            {"key": "A", "text": "$I = 1$"},
            {"key": "B", "text": "$I = +\\infty$"},
            {"key": "C", "text": "$I = 2$"},
            {"key": "D", "text": "$I = \\frac{1}{2}$"}
        ],
        "correct": "A",
        "explanation": "* Theo định nghĩa tích phân suy rộng:\n  $$I = \\lim_{A \\to +\\infty} \\int_1^A \\frac{dx}{x^2} = \\lim_{A \\to +\\infty} \\left[ -\\frac{1}{x} \\right]_1^A = \\lim_{A \\to +\\infty} \\left( -\\frac{1}{A} - (-1) \\right) = 0 + 1 = 1$$\n* Tích phân hội tụ và có giá trị bằng $1$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.5",
        "typeName": "Tích phân suy rộng loại 1 (cận vô hạn)",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tính tích phân suy rộng $I = \\int_0^{+\\infty} e^{-2x} dx$.",
        "options": [
            {"key": "A", "text": "$I = \\frac{1}{2}$"},
            {"key": "B", "text": "$I = 2$"},
            {"key": "C", "text": "$I = 1$"},
            {"key": "D", "text": "$I = +\\infty$"}
        ],
        "correct": "A",
        "explanation": "* Ta có:\n  $$I = \\lim_{A \\to +\\infty} \\left[ -\\frac{1}{2} e^{-2x} \\right]_0^A = \\lim_{A \\to +\\infty} \\left( -\\frac{1}{2}e^{-2A} - \\left(-\\frac{1}{2}\\right) \\right) = 0 + \\frac{1}{2} = \\frac{1}{2}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.5",
        "typeName": "Tích phân suy rộng loại 1 (cận vô hạn)",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tính tích phân suy rộng $I = \\int_0^{+\\infty} \\frac{dx}{1 + x^2}$.",
        "options": [
            {"key": "A", "text": "$I = \\frac{\\pi}{2}$"},
            {"key": "B", "text": "$I = \\pi$"},
            {"key": "C", "text": "$I = 1$"},
            {"key": "D", "text": "$I = +\\infty$"}
        ],
        "correct": "A",
        "explanation": "* Ta có:\n  $$I = \\lim_{A \\to +\\infty} [\\arctan x]_0^A = \\lim_{A \\to +\\infty} (\\arctan A - \\arctan 0) = \\frac{\\pi}{2} - 0 = \\frac{\\pi}{2}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.5",
        "typeName": "Khảo sát sự hội tụ của tích phân suy rộng loại 1",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tích phân suy rộng $I = \\int_1^{+\\infty} \\frac{dx}{x^\\alpha}$ hội tụ khi và chỉ khi:",
        "options": [
            {"key": "A", "text": "$\\alpha > 1$"},
            {"key": "B", "text": "$\\alpha \\ge 1$"},
            {"key": "C", "text": "$\\alpha < 1$"},
            {"key": "D", "text": "$\\alpha > 0$"}
        ],
        "correct": "A",
        "explanation": "* Đây là tích phân chuẩn Riemann loại 1:\n  $$\\int_1^{+\\infty} \\frac{dx}{x^\\alpha} \\text{ hội tụ } \\iff \\alpha > 1, \\quad \\text{phân kỳ } \\iff \\alpha \\le 1$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.5",
        "typeName": "Khảo sát sự hội tụ của tích phân suy rộng loại 1",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Khảo sát sự hội tụ của tích phân suy rộng $I = \\int_1^{+\\infty} \\frac{\\sqrt{x} + 2}{x^2 + 3x} dx$.",
        "options": [
            {"key": "A", "text": "Tích phân $I$ hội tụ."},
            {"key": "B", "text": "Tích phân $I$ phân kỳ."},
            {"key": "C", "text": "Tích phân $I$ dao động không xác định."},
            {"key": "D", "text": "Không thể so sánh."}
        ],
        "correct": "A",
        "explanation": "* Khi $x \\to +\\infty$:\n  $$\\frac{\\sqrt{x} + 2}{x^2 + 3x} \\sim \\frac{\\sqrt{x}}{x^2} = \\frac{1}{x^{3/2}}$$\n* Tích phân $\\int_1^{+\\infty} \\frac{dx}{x^{3/2}}$ hội tụ vì số mũ $\\alpha = 3/2 > 1$.\n* Theo tiêu chuẩn so sánh 2, tích phân $I$ hội tụ.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.5",
        "typeName": "Tích phân suy rộng có tham số",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tìm điều kiện của tham số $\\alpha$ để tích phân suy rộng $I = \\int_1^{+\\infty} \\frac{dx}{x^\\alpha \\sqrt{x + 1}}$ hội tụ.",
        "options": [
            {"key": "A", "text": "$\\alpha > \\frac{1}{2}$"},
            {"key": "B", "text": "$\\alpha > 1$"},
            {"key": "C", "text": "$\\alpha \\ge \\frac{1}{2}$"},
            {"key": "D", "text": "$\\alpha > 0$"}
        ],
        "correct": "A",
        "explanation": "* Khi $x \\to +\\infty$, $\\sqrt{x+1} \\sim x^{1/2}$.\n* Do đó: $f(x) = \\frac{1}{x^\\alpha \\sqrt{x+1}} \\sim \\frac{1}{x^{\\alpha + 1/2}}$.\n* Tích phân hội tụ khi và chỉ khi số mũ $\\alpha + 1/2 > 1 \\iff \\alpha > 1/2$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.5",
        "typeName": "Tích phân suy rộng loại 1",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính tích phân suy rộng $I = \\int_2^{+\\infty} \\frac{dx}{x \\ln^2 x}$.",
        "options": [
            {"key": "A", "text": "$I = \\frac{1}{\\ln 2}$"},
            {"key": "B", "text": "$I = \\ln 2$"},
            {"key": "C", "text": "$I = +\\infty$"},
            {"key": "D", "text": "$I = \\frac{1}{2\\ln 2}$"}
        ],
        "correct": "A",
        "explanation": "* Đặt $u = \\ln x \\implies du = \\frac{dx}{x}$.\n* Đổi cận: $x = 2 \\implies u = \\ln 2$; $x \\to +\\infty \\implies u \\to +\\infty$.\n* Tích phân trở thành:\n  $$I = \\int_{\\ln 2}^{+\\infty} \\frac{du}{u^2} = \\left[ -\\frac{1}{u} \\right]_{\\ln 2}^{+\\infty} = 0 - \\left(-\\frac{1}{\\ln 2}\\right) = \\frac{1}{\\ln 2}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.6",
        "typeName": "Tích phân suy rộng loại 2 (hàm không bị chặn)",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tính tích phân suy rộng $I = \\int_0^1 \\frac{dx}{\\sqrt{x}}$.",
        "options": [
            {"key": "A", "text": "$I = 2$"},
            {"key": "B", "text": "$I = 1$"},
            {"key": "C", "text": "$I = +\\infty$"},
            {"key": "D", "text": "$I = \\frac{1}{2}$"}
        ],
        "correct": "A",
        "explanation": "* Điểm kỳ dị là $x = 0$ (mẫu số bằng 0).\n* Theo định nghĩa:\n  $$I = \\lim_{\\epsilon \\to 0^+} \\int_\\epsilon^1 x^{-1/2} dx = \\lim_{\\epsilon \\to 0^+} [2\\sqrt{x}]_\\epsilon^1 = \\lim_{\\epsilon \\to 0^+} (2 - 2\\sqrt{\\epsilon}) = 2$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.6",
        "typeName": "Tích phân suy rộng loại 2 (hàm không bị chặn)",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tính tích phân suy rộng $I = \\int_0^1 \\frac{dx}{\\sqrt{1 - x^2}}$.",
        "options": [
            {"key": "A", "text": "$I = \\frac{\\pi}{2}$"},
            {"key": "B", "text": "$I = \\pi$"},
            {"key": "C", "text": "$I = 1$"},
            {"key": "D", "text": "$I = +\\infty$"}
        ],
        "correct": "A",
        "explanation": "* Điểm kỳ dị tại $x = 1$.\n* Ta có:\n  $$I = \\lim_{t \\to 1^-} \\int_0^t \\frac{dx}{\\sqrt{1 - x^2}} = \\lim_{t \\to 1^-} [\\arcsin x]_0^t = \\arcsin(1) - \\arcsin(0) = \\frac{\\pi}{2}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.6",
        "typeName": "Tích phân suy rộng loại 2 (hàm không bị chặn)",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tích phân suy rộng loại 2 dạng $I = \\int_a^b \\frac{dx}{(b - x)^\\alpha}$ hội tụ khi và chỉ khi:",
        "options": [
            {"key": "A", "text": "$\\alpha < 1$"},
            {"key": "B", "text": "$\\alpha > 1$"},
            {"key": "C", "text": "$\\alpha \\le 1$"},
            {"key": "D", "text": "$\\alpha > 0$"}
        ],
        "correct": "A",
        "explanation": "* Đây là tích phân chuẩn Riemann loại 2 (kỳ dị tại cận trên $b$):\n  $$\\int_a^b \\frac{dx}{(b-x)^\\alpha} \\text{ hội tụ } \\iff \\alpha < 1, \\quad \\text{phân kỳ } \\iff \\alpha \\ge 1$$\n* (Ngược lại với loại 1 cận vô hạn hội tụ khi $\\alpha > 1$).\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.6",
        "typeName": "Tích phân suy rộng có tham số loại 2",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tìm điều kiện của tham số $\\alpha$ để tích phân $I = \\int_0^1 \\frac{e^x - 1}{x^\\alpha} dx$ hội tụ.",
        "options": [
            {"key": "A", "text": "$\\alpha < 2$"},
            {"key": "B", "text": "$\\alpha < 1$"},
            {"key": "C", "text": "$\\alpha > 1$"},
            {"key": "D", "text": "$\\alpha \\le 2$"}
        ],
        "correct": "A",
        "explanation": "* Điểm kỳ dị tại $x = 0$.\n* Khi $x \\to 0^+$, theo VCB: $e^x - 1 \\sim x$.\n* Do đó: $f(x) = \\frac{e^x - 1}{x^\\alpha} \\sim \\frac{x}{x^\\alpha} = \\frac{1}{x^{\\alpha - 1}}$.\n* Tích phân loại 2 tại $0$ hội tụ khi số mũ $\\alpha - 1 < 1 \\iff \\alpha < 2$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.7",
        "typeName": "Ứng dụng hình học: Tính diện tích hình phẳng",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính diện tích $S$ của hình phẳng giới hạn bởi đường parabol $y = x^2$ và đường thẳng $y = 2x$.",
        "options": [
            {"key": "A", "text": "$S = \\frac{4}{3}$"},
            {"key": "B", "text": "$S = \\frac{2}{3}$"},
            {"key": "C", "text": "$S = 2$"},
            {"key": "D", "text": "$S = \\frac{8}{3}$"}
        ],
        "correct": "A",
        "explanation": "* Hoành độ giao điểm: $x^2 = 2x \\iff x^2 - 2x = 0 \\iff x = 0$ hoặc $x = 2$.\n* Trên đoạn $[0, 2]$, đường thẳng $y = 2x$ nằm phía trên parabol $y = x^2$.\n* Diện tích hình phẳng:\n  $$S = \\int_0^2 (2x - x^2) dx = \\left[ x^2 - \\frac{x^3}{3} \\right]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.7",
        "typeName": "Ứng dụng hình học: Tính diện tích hình phẳng",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tính diện tích $S$ của hình phẳng giới hạn bởi đường cong $y = \\sin x$, trục hoành $y = 0$, $x = 0$ và $x = \\pi$.",
        "options": [
            {"key": "A", "text": "$S = 2$"},
            {"key": "B", "text": "$S = 1$"},
            {"key": "C", "text": "$S = \\pi$"},
            {"key": "D", "text": "$S = 0$"}
        ],
        "correct": "A",
        "explanation": "* Trên đoạn $[0, \\pi]$, $\\sin x \\ge 0$.\n* Diện tích là:\n  $$S = \\int_0^\\pi \\sin x dx = [-\\cos x]_0^\\pi = -\\cos\\pi - (-\\cos 0) = -(-1) + 1 = 2$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.7",
        "typeName": "Ứng dụng hình học: Thể tích khối tròn xoay",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính thể tích $V$ của khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi $y = \\sqrt{x}$, trục $Ox$, và đường thẳng $x = 4$ quanh trục $Ox$.",
        "options": [
            {"key": "A", "text": "$V = 8\\pi$"},
            {"key": "B", "text": "$V = 16\\pi$"},
            {"key": "C", "text": "$V = 4\\pi$"},
            {"key": "D", "text": "$V = \\frac{8\\pi}{3}$"}
        ],
        "correct": "A",
        "explanation": "* Công thức thể tích quay quanh $Ox$: $V = \\pi \\int_a^b y^2 dx$.\n* Cận từ $x = 0$ đến $x = 4$.\n* Khi đó:\n  $$V = \\pi \\int_0^4 (\\sqrt{x})^2 dx = \\pi \\int_0^4 x dx = \\pi \\left[ \\frac{x^2}{2} \\right]_0^4 = \\pi \\cdot \\frac{16}{2} = 8\\pi$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.1",
        "typeName": "Nguyên hàm lượng giác",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tìm nguyên hàm $I = \\int \\tan x dx$.",
        "options": [
            {"key": "A", "text": "$-\\ln|\\cos x| + C$"},
            {"key": "B", "text": "$\\ln|\\cos x| + C$"},
            {"key": "C", "text": "$\\ln|\\sin x| + C$"},
            {"key": "D", "text": "$\\frac{1}{\\cos^2 x} + C$"}
        ],
        "correct": "A",
        "explanation": "* Viết $\\tan x = \\frac{\\sin x}{\\cos x} = -\\frac{(\\cos x)'}{\\cos x}$.\n* Do đó: $I = -\\int \\frac{d(\\cos x)}{\\cos x} = -\\ln|\\cos x| + C$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.1",
        "typeName": "Nguyên hàm cơ bản",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tìm nguyên hàm $I = \\int \\frac{dx}{\\sqrt{4 - x^2}}$.",
        "options": [
            {"key": "A", "text": "$\\arcsin\\left(\\frac{x}{2}\\right) + C$"},
            {"key": "B", "text": "$\\frac{1}{2}\\arcsin\\left(\\frac{x}{2}\\right) + C$"},
            {"key": "C", "text": "$\\ln(x + \\sqrt{4 - x^2}) + C$"},
            {"key": "D", "text": "$\\arctan\\left(\\frac{x}{2}\\right) + C$"}
        ],
        "correct": "A",
        "explanation": "* Áp dụng công thức nguyên hàm mở rộng: $\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C$ với $a = 2$:\n  $$I = \\arcsin\\left(\\frac{x}{2}\\right) + C$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.1",
        "typeName": "Nguyên hàm đổi biến lượng giác",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tìm nguyên hàm $I = \\int \\frac{\\cos x}{1 + \\sin^2 x} dx$.",
        "options": [
            {"key": "A", "text": "$\\arctan(\\sin x) + C$"},
            {"key": "B", "text": "$\\ln(1 + \\sin^2 x) + C$"},
            {"key": "C", "text": "$\\arcsin(\\sin x) + C$"},
            {"key": "D", "text": "$\\frac{\\sin x}{1 + \\sin^2 x} + C$"}
        ],
        "correct": "A",
        "explanation": "* Đặt $u = \\sin x \\implies du = \\cos x dx$.\n* Khi đó: $I = \\int \\frac{du}{1 + u^2} = \\arctan(u) + C = \\arctan(\\sin x) + C$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.3",
        "typeName": "Đổi biến đối xứng trong tích phân xác định",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tính tích phân $I = \\int_0^{\\pi/2} \\frac{\\sin x}{\\sin x + \\cos x} dx$.",
        "options": [
            {"key": "A", "text": "$I = \\frac{\\pi}{4}$"},
            {"key": "B", "text": "$I = \\frac{\\pi}{2}$"},
            {"key": "C", "text": "$I = 1$"},
            {"key": "D", "text": "$I = \\frac{\\pi}{8}$"}
        ],
        "correct": "A",
        "explanation": "* Đổi biến $t = \\pi/2 - x \\implies dx = -dt$. Cận đổi thành $\\pi/2$ về $0$.\n* Ta có: $I = \\int_0^{\\pi/2} \\frac{\\cos t}{\\cos t + \\sin t} dt$.\n* Cộng hai tích phân:\n  $$2I = \\int_0^{\\pi/2} \\frac{\\sin x + \\cos x}{\\sin x + \\cos x} dx = \\int_0^{\\pi/2} 1 dx = \\frac{\\pi}{2}$$\n* Suy ra $I = \\frac{\\pi}{4}$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.2",
        "typeName": "Tích phân từng phần lặp",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tính tích phân $I = \\int_0^1 x^2 e^x dx$.",
        "options": [
            {"key": "A", "text": "$I = e - 2$"},
            {"key": "B", "text": "$I = e - 1$"},
            {"key": "C", "text": "$I = 2e - 3$"},
            {"key": "D", "text": "$I = e$"}
        ],
        "correct": "A",
        "explanation": "* Từng phần lần 1: $u = x^2, dv = e^x dx \\implies du = 2x dx, v = e^x$.\n  $$I = [x^2 e^x]_0^1 - 2\\int_0^1 x e^x dx = e - 2(1) = e - 2$$\n* (Do $\\int_0^1 x e^x dx = 1$ đã tính ở bài trước).\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.7",
        "typeName": "Ứng dụng hình học: Độ dài đường cong",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tính độ dài $L$ của đường cong $y = \\frac{2}{3}x^{3/2}$ từ $x = 0$ đến $x = 3$.",
        "options": [
            {"key": "A", "text": "$L = \\frac{14}{3}$"},
            {"key": "B", "text": "$L = 4$"},
            {"key": "C", "text": "$L = \\frac{16}{3}$"},
            {"key": "D", "text": "$L = 6$"}
        ],
        "correct": "A",
        "explanation": "* Đạo hàm: $y' = \\frac{2}{3} \\cdot \\frac{3}{2}x^{1/2} = \\sqrt{x}$.\n* Công thức độ dài cung: $L = \\int_a^b \\sqrt{1 + (y')^2} dx = \\int_0^3 \\sqrt{1 + x} dx$.\n* Tính tích phân:\n  $$L = \\left[ \\frac{2}{3}(1+x)^{3/2} \\right]_0^3 = \\frac{2}{3}(4^{3/2} - 1^{3/2}) = \\frac{2}{3}(8 - 1) = \\frac{14}{3}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.1",
        "typeName": "Định lý cơ bản của phép tính vi tích phân",
        "clo": "CLO1",
        "difficulty": "easy",
        "question": "Nếu $f(x)$ là hàm liên tục trên $[a, b]$ và $F(x)$ là một nguyên hàm của $f(x)$ thì khẳng định nào sau đây là công thức Newton-Leibniz?",
        "options": [
            {"key": "A", "text": "$\\int_a^b f(x) dx = F(b) - F(a)$"},
            {"key": "B", "text": "$\\int_a^b f(x) dx = f(b) - f(a)$"},
            {"key": "C", "text": "$\\int_a^b f(x) dx = F'(b) - F'(a)$"},
            {"key": "D", "text": "$\\int_a^b f(x) dx = F(a) - F(b)$"}
        ],
        "correct": "A",
        "explanation": "* Công thức Newton-Leibniz là nền tảng của giải tích tích phân:\n  $$\\int_a^b f(x) dx = [F(x)]_a^b = F(b) - F(a)$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.6",
        "typeName": "Tích phân suy rộng loại 2",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính tích phân suy rộng $I = \\int_0^1 \\ln x dx$.",
        "options": [
            {"key": "A", "text": "$I = -1$"},
            {"key": "B", "text": "$I = 1$"},
            {"key": "C", "text": "$I = -\\infty$"},
            {"key": "D", "text": "$I = 0$"}
        ],
        "correct": "A",
        "explanation": "* Tích phân từng phần: $\\int \\ln x dx = x\\ln x - x$.\n* Áp dụng cận suy rộng tại $0$:\n  $$I = \\lim_{\\epsilon \\to 0^+} [x\\ln x - x]_\\epsilon^1 = (1\\ln 1 - 1) - \\lim_{\\epsilon \\to 0^+} (\\epsilon \\ln \\epsilon - \\epsilon) = -1 - (0 - 0) = -1$$\n* (Do $\\lim_{\\epsilon \\to 0^+} \\epsilon \\ln \\epsilon = 0$).\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.5",
        "typeName": "Tích phân suy rộng Poisson (Gauss)",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tích phân suy rộng $\\int_0^{+\\infty} e^{-x^2} dx$ có tính chất nào dưới đây?",
        "options": [
            {"key": "A", "text": "Hội tụ và có giá trị bằng $\\frac{\\sqrt{\\pi}}{2}$."},
            {"key": "B", "text": "Phân kỳ ra $+\\infty$."},
            {"key": "C", "text": "Hội tụ và có giá trị bằng $1$."},
            {"key": "D", "text": "Hội tụ và có giá trị bằng $\\sqrt{\\pi}$."}
        ],
        "correct": "A",
        "explanation": "* Đây là tích phân Euler-Poisson kinh điển. Vì $e^{-x^2} \\le e^{-x}$ với mọi $x \\ge 1$ nên tích phân hội tụ.\n* Giá trị chính xác của nó bằng $\\int_0^{+\\infty} e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "4.1",
        "typeName": "Định lý giá trị trung bình tích phân",
        "clo": "CLO1",
        "difficulty": "easy",
        "question": "Giá trị trung bình $\\mu$ của hàm số $f(x) = 3x^2$ trên đoạn $[0, 2]$ bằng:",
        "options": [
            {"key": "A", "text": "$\\mu = 4$"},
            {"key": "B", "text": "$\\mu = 8$"},
            {"key": "C", "text": "$\\mu = 2$"},
            {"key": "D", "text": "$\\mu = 6$"}
        ],
        "correct": "A",
        "explanation": "* Công thức giá trị trung bình: $\\mu = \\frac{1}{b-a} \\int_a^b f(x) dx$.\n* Ta có: $\\mu = \\frac{1}{2 - 0} \\int_0^2 3x^2 dx = \\frac{1}{2} [x^3]_0^2 = \\frac{1}{2} (8 - 0) = 4$.\n* **Chọn đáp án: A.**"
    }
]
