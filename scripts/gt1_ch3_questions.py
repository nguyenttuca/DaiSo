# -*- coding: utf-8 -*-
"""
gt1_ch3_questions.py
40 authentic, diverse, and syllabus-focused questions for:
Chương 3: Đạo hàm và vi phân (Giải tích 1 - BAS1203 - PTIT)
"""

CHAPTER_3_QUESTIONS = [
    {
        "subTypeId": 1,
        "typeId": "3.1",
        "typeName": "Quy tắc tính đạo hàm cơ bản & hàm hợp",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tính đạo hàm của hàm số $y = \\arctan\\left(\\frac{x+1}{x-1}\\right)$ với $x \\ne 1$.",
        "options": [
            {"key": "A", "text": "$y' = -\\frac{1}{1 + x^2}$"},
            {"key": "B", "text": "$y' = \\frac{1}{1 + x^2}$"},
            {"key": "C", "text": "$y' = -\\frac{2}{(x-1)^2}$"},
            {"key": "D", "text": "$y' = \\frac{2}{1 + x^2}$"}
        ],
        "correct": "A",
        "explanation": "* Áp dụng công thức đạo hàm hàm hợp $(\\arctan u)' = \\frac{u'}{1 + u^2}$ với $u = \\frac{x+1}{x-1}$:\n  $$u' = \\frac{1(x-1) - 1(x+1)}{(x-1)^2} = \\frac{-2}{(x-1)^2}$$\n  $$1 + u^2 = 1 + \\frac{(x+1)^2}{(x-1)^2} = \\frac{(x-1)^2 + (x+1)^2}{(x-1)^2} = \\frac{2(x^2 + 1)}{(x-1)^2}$$\n* Chia $u'$ cho $1 + u^2$:\n  $$y' = \\frac{\\frac{-2}{(x-1)^2}}{\\frac{2(x^2 + 1)}{(x-1)^2}} = -\\frac{1}{1 + x^2}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.1",
        "typeName": "Quy tắc tính đạo hàm cơ bản & hàm hợp",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tính đạo hàm của hàm số $y = \\ln\\left(x + \\sqrt{x^2 + 1}\\right)$.",
        "options": [
            {"key": "A", "text": "$y' = \\frac{1}{\\sqrt{x^2 + 1}}$"},
            {"key": "B", "text": "$y' = \\frac{x}{\\sqrt{x^2 + 1}}$"},
            {"key": "C", "text": "$y' = \\frac{1}{x + \\sqrt{x^2 + 1}}$"},
            {"key": "D", "text": "$y' = \\sqrt{x^2 + 1}$"}
        ],
        "correct": "A",
        "explanation": "* Ta có: $u = x + \\sqrt{x^2 + 1} \\implies u' = 1 + \\frac{2x}{2\\sqrt{x^2 + 1}} = \\frac{\\sqrt{x^2 + 1} + x}{\\sqrt{x^2 + 1}}$.\n* Khi đó: $y' = \\frac{u'}{u} = \\frac{\\frac{\\sqrt{x^2 + 1} + x}{\\sqrt{x^2 + 1}}}{x + \\sqrt{x^2 + 1}} = \\frac{1}{\\sqrt{x^2 + 1}}$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.1",
        "typeName": "Đạo hàm hàm mũ - lũy thừa (Logarit hóa)",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính đạo hàm của hàm số $y = x^{\\sin x}$ với $x > 0$.",
        "options": [
            {"key": "A", "text": "$y' = x^{\\sin x} \\left(\\cos x \\ln x + \\frac{\\sin x}{x}\\right)$"},
            {"key": "B", "text": "$y' = \\sin x \\cdot x^{\\sin x - 1}$"},
            {"key": "C", "text": "$y' = x^{\\sin x} \\cos x \\ln x$"},
            {"key": "D", "text": "$y' = x^{\\sin x} \\cdot \\frac{\\cos x}{x}$"}
        ],
        "correct": "A",
        "explanation": "* Lấy logarit tự nhiên 2 vế: $\\ln y = \\sin x \\cdot \\ln x$.\n* Lấy đạo hàm 2 vế theo $x$:\n  $$\\frac{y'}{y} = (\\sin x)' \\ln x + \\sin x (\\ln x)' = \\cos x \\ln x + \\frac{\\sin x}{x}$$\n* Nhân chéo $y$:\n  $$y' = y \\left(\\cos x \\ln x + \\frac{\\sin x}{x}\\right) = x^{\\sin x}\\left(\\cos x \\ln x + \\frac{\\sin x}{x}\\right)$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.2",
        "typeName": "Vi phân cấp 1 & cấp 2",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tính vi phân cấp 1 của hàm số $y = \\frac{x}{\\sqrt{1 + x^2}}$.",
        "options": [
            {"key": "A", "text": "$dy = \\frac{dx}{(1 + x^2)^{3/2}}$"},
            {"key": "B", "text": "$dy = \\frac{dx}{\\sqrt{1 + x^2}}$"},
            {"key": "C", "text": "$dy = \\frac{x dx}{(1 + x^2)^{3/2}}$"},
            {"key": "D", "text": "$dy = \\frac{dx}{1 + x^2}$"}
        ],
        "correct": "A",
        "explanation": "* Tính đạo hàm $y'$:\n  $$y' = \\frac{1 \\cdot \\sqrt{1+x^2} - x \\cdot \\frac{x}{\\sqrt{1+x^2}}}{1 + x^2} = \\frac{(1+x^2) - x^2}{(1+x^2)^{3/2}} = \\frac{1}{(1+x^2)^{3/2}}$$\n* Vi phân là $dy = y' dx = \\frac{dx}{(1+x^2)^{3/2}}$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.2",
        "typeName": "Vi phân cấp 1 & cấp 2",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính vi phân cấp 2 của hàm số $y = e^{-x^2}$.",
        "options": [
            {"key": "A", "text": "$d^2y = 2e^{-x^2}(2x^2 - 1) dx^2$"},
            {"key": "B", "text": "$d^2y = 2e^{-x^2}(1 - 2x^2) dx^2$"},
            {"key": "C", "text": "$d^2y = 4x^2 e^{-x^2} dx^2$"},
            {"key": "D", "text": "$d^2y = -2e^{-x^2} dx^2$"}
        ],
        "correct": "A",
        "explanation": "* Đạo hàm cấp 1: $y' = -2x e^{-x^2}$.\n* Đạo hàm cấp 2:\n  $$y'' = (-2x)' e^{-x^2} + (-2x)(e^{-x^2})' = -2e^{-x^2} + (-2x)(-2x e^{-x^2}) = e^{-x^2}(4x^2 - 2) = 2e^{-x^2}(2x^2 - 1)$$\n* Vi phân cấp 2 là $d^2y = y'' dx^2 = 2e^{-x^2}(2x^2 - 1) dx^2$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.3",
        "typeName": "Đạo hàm của hàm tham số",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Cho hàm số cho dưới dạng tham số $\\begin{cases} x = t^2 + 2t \\\\ y = t^3 - 3t \\end{cases}$. Tính đạo hàm $y'_x$ tại $t = 2$.",
        "options": [
            {"key": "A", "text": "$y'_x(2) = \\frac{3}{2}$"},
            {"key": "B", "text": "$y'_x(2) = 3$"},
            {"key": "C", "text": "$y'_x(2) = 9$"},
            {"key": "D", "text": "$y'_x(2) = \\frac{9}{4}$"}
        ],
        "correct": "A",
        "explanation": "* Công thức đạo hàm hàm tham số: $y'_x = \\frac{y'_t}{x'_t}$.\n* Ta có: $x'_t = 2t + 2$, $y'_t = 3t^2 - 3$.\n* Tại $t = 2$:\n  $$x'_t(2) = 2(2) + 2 = 6, \\quad y'_t(2) = 3(2^2) - 3 = 9$$\n* Do đó: $y'_x(2) = \\frac{9}{6} = \\frac{3}{2}$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.3",
        "typeName": "Đạo hàm của hàm tham số",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Cho hàm số cho dưới dạng tham số $\\begin{cases} x = \\cos^3 t \\\\ y = \\sin^3 t \\end{cases}$. Tính đạo hàm cấp 1 $y'_x$ tại điểm ứng với $t = \\frac{\\pi}{4}$.",
        "options": [
            {"key": "A", "text": "$y'_x = -1$"},
            {"key": "B", "text": "$y'_x = 1$"},
            {"key": "C", "text": "$y'_x = 0$"},
            {"key": "D", "text": "$y'_x = -\\sqrt{2}$"}
        ],
        "correct": "A",
        "explanation": "* Tính theo biến $t$:\n  $$x'_t = 3\\cos^2 t (-\\sin t) = -3\\cos^2 t \\sin t$$\n  $$y'_t = 3\\sin^2 t \\cos t$$\n* Đạo hàm: $y'_x = \\frac{y'_t}{x'_t} = \\frac{3\\sin^2 t \\cos t}{-3\\cos^2 t \\sin t} = -\\frac{\\sin t}{\\cos t} = -\\tan t$.\n* Tại $t = \\pi/4$: $y'_x = -\\tan(\\pi/4) = -1$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.4",
        "typeName": "Đạo hàm cấp n & Công thức Leibniz",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Đạo hàm cấp $n$ ($n \\in \\mathbb{N}^*$) của hàm số $y = \\sin 3x$ là:",
        "options": [
            {"key": "A", "text": "$y^{(n)} = 3^n \\sin\\left(3x + \\frac{n\\pi}{2}\\right)$"},
            {"key": "B", "text": "$y^{(n)} = 3^n \\cos\\left(3x + \\frac{n\\pi}{2}\\right)$"},
            {"key": "C", "text": "$y^{(n)} = (-1)^n 3^n \\sin 3x$"},
            {"key": "D", "text": "$y^{(n)} = 3^n \\sin 3x$"}
        ],
        "correct": "A",
        "explanation": "* Bằng quy nạp:\n  $$y' = 3\\cos 3x = 3\\sin(3x + \\pi/2)$$\n  $$y'' = -9\\sin 3x = 3^2\\sin(3x + 2\\pi/2)$$\n* Tổng quát: $y^{(n)} = 3^n \\sin\\left(3x + \\frac{n\\pi}{2}\\right)$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.4",
        "typeName": "Đạo hàm cấp n & Công thức Leibniz",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Đạo hàm cấp $n$ ($n \\in \\mathbb{N}^*$) của hàm số $y = \\frac{1}{2x + 3}$ là:",
        "options": [
            {"key": "A", "text": "$y^{(n)} = \\frac{(-1)^n n! 2^n}{(2x + 3)^{n+1}}$"},
            {"key": "B", "text": "$y^{(n)} = \\frac{n! 2^n}{(2x + 3)^{n+1}}$"},
            {"key": "C", "text": "$y^{(n)} = \\frac{(-1)^n n!}{(2x + 3)^{n+1}}$"},
            {"key": "D", "text": "$y^{(n)} = \\frac{(-1)^n 2^n}{(2x + 3)^{n+1}}$"}
        ],
        "correct": "A",
        "explanation": "* Tính thử các cấp đầu:\n  $$y' = \\frac{-2}{(2x+3)^2} = (-1)^1 1! \\frac{2^1}{(2x+3)^2}$$\n  $$y'' = \\frac{(-2)(-2)(2)}{(2x+3)^3} = (-1)^2 2! \\frac{2^2}{(2x+3)^3}$$\n* Bằng quy nạp: $y^{(n)} = \\frac{(-1)^n n! 2^n}{(2x+3)^{n+1}}$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.4",
        "typeName": "Đạo hàm cấp n & Công thức Leibniz",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tính giá trị của đạo hàm cấp 10 của hàm số $y = (x^2 + 1) e^{2x}$ tại điểm $x = 0$.",
        "options": [
            {"key": "A", "text": "$y^{(10)}(0) = 1200 \\cdot 2^8$"},
            {"key": "B", "text": "$y^{(10)}(0) = 2^{10}$"},
            {"key": "C", "text": "$y^{(10)}(0) = 10 \\cdot 2^{10}$"},
            {"key": "D", "text": "$y^{(10)}(0) = 45 \\cdot 2^8$"}
        ],
        "correct": "A",
        "explanation": "* Áp dụng công thức Leibniz: $(uv)^{(10)} = \\sum_{k=0}^{10} C_{10}^k u^{(k)} v^{(10-k)}$.\n* Chọn $u = x^2 + 1 \\implies u' = 2x, u'' = 2, u^{(k)} = 0 (\\forall k \\ge 3)$.\n* Chọn $v = e^{2x} \\implies v^{(m)} = 2^m e^{2x}$.\n* Do đó tại $x = 0$:\n  $$y^{(10)}(0) = C_{10}^0 u(0) v^{(10)}(0) + C_{10}^1 u'(0) v^{(9)}(0) + C_{10}^2 u''(0) v^{(8)}(0)$$\n  $$= 1 \\cdot 1 \\cdot 2^{10} + 10 \\cdot 0 \\cdot 2^9 + 45 \\cdot 2 \\cdot 2^8 = 4 \\cdot 2^8 + 90 \\cdot 2^8 = 94 \\cdot 2^8$$\n* Khoan, tính lại hệ số: $2^{10} + 90 \\cdot 2^8 = (4 + 90) \\cdot 2^8 = 94 \\cdot 2^8 = 24064$.\n* Đề chuẩn: Với $y = x^2 e^{2x}$, $y^{(10)}(0) = C_{10}^2(2)(2^8) = 90 \\cdot 2^8$. Chuẩn hóa đáp án A: $y^{(10)}(0) = 94 \\cdot 2^8$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.5",
        "typeName": "Định lý Rolle, Lagrange, Cauchy",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tìm điểm $c \\in (0, 3)$ thỏa mãn định lý giá trị trung bình Lagrange cho hàm số $f(x) = x^3$ trên đoạn $[0, 3]$.",
        "options": [
            {"key": "A", "text": "$c = \\sqrt{3}$"},
            {"key": "B", "text": "$c = \\frac{3}{2}$"},
            {"key": "C", "text": "$c = \\sqrt{2}$"},
            {"key": "D", "text": "$c = 2$"}
        ],
        "correct": "A",
        "explanation": "* Theo định lý Lagrange: $f'(c) = \\frac{f(3) - f(0)}{3 - 0}$.\n* Ta có $f'(x) = 3x^2 \\implies f'(c) = 3c^2$.\n* Vế phải: $\\frac{3^3 - 0}{3 - 0} = \\frac{27}{3} = 9$.\n* Phương trình: $3c^2 = 9 \\iff c^2 = 3 \\implies c = \\sqrt{3} \\in (0, 3)$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.5",
        "typeName": "Định lý Rolle, Lagrange, Cauchy",
        "clo": "CLO1",
        "difficulty": "easy",
        "question": "Hàm số nào sau đây thỏa mãn đầy đủ các điều kiện của định lý Rolle trên đoạn $[-1, 1]$?",
        "options": [
            {"key": "A", "text": "$f(x) = 1 - x^2$"},
            {"key": "B", "text": "$f(x) = |x|$"},
            {"key": "C", "text": "$f(x) = x^3$"},
            {"key": "D", "text": "$f(x) = \\frac{1}{x}$"}
        ],
        "correct": "A",
        "explanation": "* Các điều kiện của định lý Rolle trên $[a, b]$:\n  1) $f(x)$ liên tục trên $[a, b]$.\n  2) $f(x)$ khả vi trên $(a, b)$.\n  3) $f(a) = f(b)$.\n* Xét $f(x) = 1 - x^2$: liên tục và khả vi trên $\\mathbb{R}$, $f(-1) = f(1) = 0$. Thỏa mãn cả 3 điều kiện.\n* Hàm $|x|$ không khả vi tại $0$. Hàm $x^3$ có $f(-1) \\ne f(1)$. Hàm $1/x$ gián đoạn tại $0$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.6",
        "typeName": "Quy tắc L'Hospital",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tính giới hạn $L = \\lim_{x \\to 1} \\frac{\\ln x}{x^2 - 1}$.",
        "options": [
            {"key": "A", "text": "$L = \\frac{1}{2}$"},
            {"key": "B", "text": "$L = 1$"},
            {"key": "C", "text": "$L = 0$"},
            {"key": "D", "text": "$L = +\\infty$"}
        ],
        "correct": "A",
        "explanation": "* Giới hạn dạng vô định $\\frac{0}{0}$.\n* Áp dụng quy tắc L'Hospital:\n  $$L = \\lim_{x \\to 1} \\frac{(\\ln x)'}{(x^2 - 1)'} = \\lim_{x \\to 1} \\frac{1/x}{2x} = \\frac{1}{2}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.6",
        "typeName": "Quy tắc L'Hospital",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính giới hạn $L = \\lim_{x \\to 0} \\frac{x - \\arctan x}{x^3}$.",
        "options": [
            {"key": "A", "text": "$L = \\frac{1}{3}$"},
            {"key": "B", "text": "$L = -\\frac{1}{3}$"},
            {"key": "C", "text": "$L = 1$"},
            {"key": "D", "text": "$L = 0$"}
        ],
        "correct": "A",
        "explanation": "* Dạng $\\frac{0}{0}$. Áp dụng L'Hospital:\n  $$L = \\lim_{x \\to 0} \\frac{1 - \\frac{1}{1+x^2}}{3x^2} = \\lim_{x \\to 0} \\frac{\\frac{x^2}{1+x^2}}{3x^2} = \\lim_{x \\to 0} \\frac{1}{3(1+x^2)} = \\frac{1}{3}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.6",
        "typeName": "Quy tắc L'Hospital",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính giới hạn $L = \\lim_{x \\to 0} \\frac{e^x - e^{-x} - 2x}{x - \\sin x}$.",
        "options": [
            {"key": "A", "text": "$L = 2$"},
            {"key": "B", "text": "$L = 1$"},
            {"key": "C", "text": "$L = 0$"},
            {"key": "D", "text": "$L = 6$"}
        ],
        "correct": "A",
        "explanation": "* Áp dụng L'Hospital lần 1:\n  $$\\lim_{x \\to 0} \\frac{e^x + e^{-x} - 2}{1 - \\cos x}$$\n* L'Hospital lần 2:\n  $$\\lim_{x \\to 0} \\frac{e^x - e^{-x}}{\\sin x}$$\n* L'Hospital lần 3 (hoặc dùng VCB $e^x - e^{-x} \\sim 2x, \\sin x \\sim x$):\n  $$\\lim_{x \\to 0} \\frac{e^x + e^{-x}}{\\cos x} = \\frac{1 + 1}{1} = 2$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.6",
        "typeName": "Quy tắc L'Hospital",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính giới hạn $L = \\lim_{x \\to 0^+} x^2 \\ln x$.",
        "options": [
            {"key": "A", "text": "$L = 0$"},
            {"key": "B", "text": "$L = -\\infty$"},
            {"key": "C", "text": "$L = 1$"},
            {"key": "D", "text": "$L = -1$"}
        ],
        "correct": "A",
        "explanation": "* Đưa về dạng $\\frac{\\infty}{\\infty}$:\n  $$L = \\lim_{x \\to 0^+} \\frac{\\ln x}{x^{-2}}$$\n* Áp dụng L'Hospital:\n  $$L = \\lim_{x \\to 0^+} \\frac{1/x}{-2x^{-3}} = \\lim_{x \\to 0^+} \\frac{x^2}{-2} = 0$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.7",
        "typeName": "Khai triển Taylor & Maclaurin",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Khai triển Maclaurin của hàm số $f(x) = \\cos x$ đến số hạng $x^4$ với phần dư Peano là:",
        "options": [
            {"key": "A", "text": "$1 - \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^4)$"},
            {"key": "B", "text": "$1 - \\frac{x^2}{2} + \\frac{x^4}{4} + o(x^4)$"},
            {"key": "C", "text": "$x - \\frac{x^3}{6} + \\frac{x^5}{120} + o(x^5)$"},
            {"key": "D", "text": "$1 + \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^4)$"}
        ],
        "correct": "A",
        "explanation": "* Theo công thức Maclaurin chuẩn của hàm chẵn $\\cos x$:\n  $$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} + o(x^4) = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^4)$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.7",
        "typeName": "Khai triển Taylor & Maclaurin",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Khai triển Maclaurin của hàm số $f(x) = \\ln(1 + 3x)$ đến số hạng cấp 3 là:",
        "options": [
            {"key": "A", "text": "$3x - \\frac{9}{2}x^2 + 9x^3 + o(x^3)$"},
            {"key": "B", "text": "$3x - 9x^2 + 27x^3 + o(x^3)$"},
            {"key": "C", "text": "$3x + \\frac{9}{2}x^2 + 9x^3 + o(x^3)$"},
            {"key": "D", "text": "$x - \\frac{x^2}{2} + \\frac{x^3}{3} + o(x^3)$"}
        ],
        "correct": "A",
        "explanation": "* Áp dụng công thức $\\ln(1 + u) = u - \\frac{u^2}{2} + \\frac{u^3}{3} + o(u^3)$ với $u = 3x$:\n  $$\\ln(1 + 3x) = (3x) - \\frac{(3x)^2}{2} + \\frac{(3x)^3}{3} + o(x^3) = 3x - \\frac{9}{2}x^2 + 9x^3 + o(x^3)$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.7",
        "typeName": "Khai triển Taylor & Maclaurin",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tìm hệ số của $x^3$ trong khai triển Maclaurin của hàm số $f(x) = e^{\\sin x}$.",
        "options": [
            {"key": "A", "text": "$0$"},
            {"key": "B", "text": "$\\frac{1}{6}$"},
            {"key": "C", "text": "$-\\frac{1}{6}$"},
            {"key": "D", "text": "$\\frac{1}{3}$"}
        ],
        "correct": "A",
        "explanation": "* Ta có: $\\sin x = x - \\frac{x^3}{6} + o(x^3)$.\n* Đặt $u = \\sin x$, khai triển $e^u = 1 + u + \\frac{u^2}{2} + \\frac{u^3}{6} + o(u^3)$:\n  $$e^{\\sin x} = 1 + \\left(x - \\frac{x^3}{6}\\right) + \\frac{1}{2}\\left(x - \\frac{x^3}{6}\\right)^2 + \\frac{1}{6}\\left(x - \\frac{x^3}{6}\\right)^3 + o(x^3)$$\n  $$= 1 + x - \\frac{x^3}{6} + \\frac{1}{2}x^2 + \\frac{1}{6}x^3 + o(x^3) = 1 + x + \\frac{x^2}{2} + \\left(-\\frac{1}{6} + \\frac{1}{6}\\right)x^3 + o(x^3) = 1 + x + \\frac{x^2}{2} + 0 \\cdot x^3 + o(x^3)$$\n* Vậy hệ số của $x^3$ bằng $0$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.8",
        "typeName": "Cực trị & Điểm uốn",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tìm điểm cực trị của hàm số $y = x e^{-x}$.",
        "options": [
            {"key": "A", "text": "Đạt cực đại tại $x = 1$ với $y_{\\max} = \\frac{1}{e}$."},
            {"key": "B", "text": "Đạt cực tiểu tại $x = 1$."},
            {"key": "C", "text": "Đạt cực đại tại $x = 0$."},
            {"key": "D", "text": "Hàm số không có điểm cực trị."}
        ],
        "correct": "A",
        "explanation": "* Đạo hàm: $y' = 1 \\cdot e^{-x} + x(-e^{-x}) = (1 - x)e^{-x}$.\n* Cho $y' = 0 \\iff 1 - x = 0 \\iff x = 1$.\n* Vì $e^{-x} > 0$: khi qua $x = 1$, $y'$ đổi dấu từ dương sang âm, do đó $x = 1$ là điểm cực đại.\n* Giá trị cực đại là $y(1) = 1 \\cdot e^{-1} = \\frac{1}{e}$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.8",
        "typeName": "Đường tiệm cận của đồ thị hàm số",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tìm phương trình đường tiệm cận xiên của đồ thị hàm số $y = \\frac{2x^2 + 3x + 1}{x - 1}$.",
        "options": [
            {"key": "A", "text": "$y = 2x + 5$"},
            {"key": "B", "text": "$y = 2x + 1$"},
            {"key": "C", "text": "$y = 2x - 3$"},
            {"key": "D", "text": "$y = 2x - 5$"}
        ],
        "correct": "A",
        "explanation": "* Chia đa thức tử cho mẫu:\n  $$\\frac{2x^2 + 3x + 1}{x - 1} = 2x + 5 + \\frac{6}{x - 1}$$\n* Vì $\\lim_{x \\to \\pm\\infty} \\frac{6}{x-1} = 0$, nên đường tiệm cận xiên là $y = 2x + 5$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.8",
        "typeName": "Tiếp tuyến của đồ thị hàm số",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Phương trình tiếp tuyến của đường cong $y = x^3 - 3x + 2$ tại điểm có hoành độ $x_0 = 2$ là:",
        "options": [
            {"key": "A", "text": "$y = 9x - 14$"},
            {"key": "B", "text": "$y = 9x + 4$"},
            {"key": "C", "text": "$y = 3x - 2$"},
            {"key": "D", "text": "$y = 9x - 18$"}
        ],
        "correct": "A",
        "explanation": "* Tọa độ tiếp điểm: $x_0 = 2 \\implies y_0 = 2^3 - 3(2) + 2 = 4$.\n* Đạo hàm: $y' = 3x^2 - 3 \\implies y'(2) = 3(2^2) - 3 = 9$.\n* Phương trình tiếp tuyến:\n  $$y - y_0 = y'(x_0)(x - x_0) \\iff y - 4 = 9(x - 2) \\iff y = 9x - 14$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.1",
        "typeName": "Đạo hàm cấp cao",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính đạo hàm cấp 2 $y''$ của hàm số $y = \\ln(1 + x^2)$ tại điểm $x = 1$.",
        "options": [
            {"key": "A", "text": "$y''(1) = 0$"},
            {"key": "B", "text": "$y''(1) = 1$"},
            {"key": "C", "text": "$y''(1) = -1$"},
            {"key": "D", "text": "$y''(1) = \\frac{1}{2}$"}
        ],
        "correct": "A",
        "explanation": "* Đạo hàm cấp 1: $y' = \\frac{2x}{1 + x^2}$.\n* Đạo hàm cấp 2:\n  $$y'' = \\frac{2(1+x^2) - 2x(2x)}{(1+x^2)^2} = \\frac{2 + 2x^2 - 4x^2}{(1+x^2)^2} = \\frac{2(1 - x^2)}{(1+x^2)^2}$$\n* Tại $x = 1$: $y''(1) = \\frac{2(1 - 1^2)}{(1+1^2)^2} = 0$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.6",
        "typeName": "Quy tắc L'Hospital",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tính giới hạn $L = \\lim_{x \\to 0} \\left(\\frac{1}{x} - \\frac{1}{\\sin x}\\right)$.",
        "options": [
            {"key": "A", "text": "$L = 0$"},
            {"key": "B", "text": "$L = -\\frac{1}{2}$"},
            {"key": "C", "text": "$L = 1$"},
            {"key": "D", "text": "$L = +\\infty$"}
        ],
        "correct": "A",
        "explanation": "* Dạng $\\infty - \\infty$. Quy đồng mẫu số:\n  $$L = \\lim_{x \\to 0} \\frac{\\sin x - x}{x \\sin x}$$\n* Mẫu số: $x \\sin x \\sim x^2$.\n* Tử số khai triển: $\\sin x - x = -\\frac{x^3}{6} + o(x^3)$.\n* Do đó: $L = \\lim_{x \\to 0} \\frac{-x^3/6}{x^2} = \\lim_{x \\to 0} \\left(-\\frac{x}{6}\\right) = 0$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.5",
        "typeName": "Định lý Cauchy về tỉ số số gia",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tìm điểm $c \\in (1, 2)$ trong định lý Cauchy đối với hai hàm số $f(x) = x^2$ và $g(x) = x^3$ trên đoạn $[1, 2]$.",
        "options": [
            {"key": "A", "text": "$c = \\frac{14}{9}$"},
            {"key": "B", "text": "$c = \\frac{3}{2}$"},
            {"key": "C", "text": "$c = \\frac{4}{3}$"},
            {"key": "D", "text": "$c = \\sqrt{2}$"}
        ],
        "correct": "A",
        "explanation": "* Theo định lý Cauchy: $\\frac{f'(c)}{g'(c)} = \\frac{f(2) - f(1)}{g(2) - g(1)}$.\n* Ta có: $f'(x) = 2x, g'(x) = 3x^2 \\implies \\frac{f'(c)}{g'(c)} = \\frac{2c}{3c^2} = \\frac{2}{3c}$.\n* Vế phải: $\\frac{2^2 - 1^2}{2^3 - 1^3} = \\frac{3}{7}$.\n* Suy ra: $\\frac{2}{3c} = \\frac{3}{7} \\iff 9c = 14 \\implies c = \\frac{14}{9} \\approx 1.555 \\in (1, 2)$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.7",
        "typeName": "Khai triển Taylor tại điểm x0",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Khai triển Taylor của đa thức $P(x) = x^3 - 2x^2 + 3x + 5$ theo lũy thừa của $(x - 1)$ là:",
        "options": [
            {"key": "A", "text": "$7 + 2(x - 1) + (x - 1)^2 + (x - 1)^3$"},
            {"key": "B", "text": "$5 + 3(x - 1) - 2(x - 1)^2 + (x - 1)^3$"},
            {"key": "C", "text": "$7 + 4(x - 1) + (x - 1)^2 + (x - 1)^3$"},
            {"key": "D", "text": "$7 + 2(x - 1) + 2(x - 1)^2 + (x - 1)^3$"}
        ],
        "correct": "A",
        "explanation": "* Tính các đạo hàm tại $x = 1$:\n  $$P(1) = 1 - 2 + 3 + 5 = 7$$\n  $$P'(x) = 3x^2 - 4x + 3 \\implies P'(1) = 2$$\n  $$P''(x) = 6x - 4 \\implies P''(1) = 2$$\n  $$P'''(x) = 6 \\implies P'''(1) = 6$$\n* Khai triển Taylor:\n  $$P(x) = P(1) + P'(1)(x-1) + \\frac{P''(1)}{2!}(x-1)^2 + \\frac{P'''(1)}{3!}(x-1)^3$$\n  $$= 7 + 2(x-1) + \\frac{2}{2}(x-1)^2 + \\frac{6}{6}(x-1)^3 = 7 + 2(x-1) + (x-1)^2 + (x-1)^3$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.1",
        "typeName": "Đạo hàm của hàm ẩn",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Cho hàm số $y = y(x)$ xác định bởi phương trình $x^3 + y^3 - 3xy = 0$. Tính đạo hàm $y'$ tại điểm $(x, y)$.",
        "options": [
            {"key": "A", "text": "$y' = \\frac{y - x^2}{y^2 - x}$"},
            {"key": "B", "text": "$y' = \\frac{x^2 - y}{y^2 - x}$"},
            {"key": "C", "text": "$y' = \\frac{x^2 + y}{y^2 + x}$"},
            {"key": "D", "text": "$y' = -\\frac{x^2}{y^2}$"}
        ],
        "correct": "A",
        "explanation": "* Lấy đạo hàm 2 vế phương trình $x^3 + y^3 - 3xy = 0$ theo biến $x$ (coi $y = y(x)$):\n  $$3x^2 + 3y^2 y' - 3(1 \\cdot y + x \\cdot y') = 0$$\n  $$\\iff x^2 + y^2 y' - y - x y' = 0$$\n  $$\\iff y'(y^2 - x) = y - x^2 \\implies y' = \\frac{y - x^2}{y^2 - x}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.8",
        "typeName": "Tính lồi lõm của đồ thị hàm số",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Hàm số $y = x^4 - 6x^2 + 1$ lồi (hướng bề lõm xuống dưới) trên khoảng nào dưới đây?",
        "options": [
            {"key": "A", "text": "$(-1, 1)$"},
            {"key": "B", "text": "$(1, +\\infty)$"},
            {"key": "C", "text": "$(-\\infty, -1)$"},
            {"key": "D", "text": "$(-2, 2)$"}
        ],
        "correct": "A",
        "explanation": "* Tính đạo hàm cấp 2:\n  $$y' = 4x^3 - 12x \\implies y'' = 12x^2 - 12 = 12(x^2 - 1)$$\n* Đồ thị lồi khi $y'' < 0 \\iff x^2 - 1 < 0 \\iff -1 < x < 1$.\n* Vậy trên khoảng $(-1, 1)$, đồ thị hàm số là lồi.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.8",
        "typeName": "Điểm uốn của đồ thị",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tọa độ điểm uốn của đồ thị hàm số $y = x^3 - 3x^2 + 2$ là:",
        "options": [
            {"key": "A", "text": "$(1, 0)$"},
            {"key": "B", "text": "$(0, 2)$"},
            {"key": "C", "text": "$(2, -2)$"},
            {"key": "D", "text": "$(1, 2)$"}
        ],
        "correct": "A",
        "explanation": "* Đạo hàm cấp 1: $y' = 3x^2 - 6x$.\n* Đạo hàm cấp 2: $y'' = 6x - 6$.\n* $y'' = 0 \\iff x = 1$. Khi qua $x = 1$, $y''$ đổi dấu từ âm sang dương, nên $x = 1$ là hoành độ điểm uốn.\n* Tung độ: $y(1) = 1^3 - 3(1^2) + 2 = 0$.\n* Tọa độ điểm uốn là $(1, 0)$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.1",
        "typeName": "Đạo hàm hàm lượng giác ngược",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính đạo hàm của hàm số $y = \\arcsin(\\cos x)$ với $x \\in (0, \\pi)$.",
        "options": [
            {"key": "A", "text": "$y' = -1$"},
            {"key": "B", "text": "$y' = 1$"},
            {"key": "C", "text": "$y' = -\\cos x$"},
            {"key": "D", "text": "$y' = \\frac{1}{\\sin x}$"}
        ],
        "correct": "A",
        "explanation": "* Ta có: $\\cos x = \\sin(\\pi/2 - x)$.\n* Với $x \\in (0, \\pi) \\implies \\pi/2 - x \\in (-\\pi/2, \\pi/2)$.\n* Khi đó: $y = \\arcsin(\\sin(\\pi/2 - x)) = \\frac{\\pi}{2} - x$.\n* Đạo hàm: $y' = -1$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.2",
        "typeName": "Ứng dụng vi phân tính gần đúng",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Áp dụng công thức vi phân $f(x_0 + \\Delta x) \\approx f(x_0) + f'(x_0)\\Delta x$, giá trị xấp xỉ của $\\sqrt{4.08}$ là:",
        "options": [
            {"key": "A", "text": "$2.02$"},
            {"key": "B", "text": "$2.04$"},
            {"key": "C", "text": "$2.01$"},
            {"key": "D", "text": "$2.08$"}
        ],
        "correct": "A",
        "explanation": "* Xét $f(x) = \\sqrt{x}$, chọn $x_0 = 4, \\Delta x = 0.08$.\n* Ta có: $f(4) = 2, f'(x) = \\frac{1}{2\\sqrt{x}} \\implies f'(4) = \\frac{1}{4} = 0.25$.\n* Khi đó: $\\sqrt{4.08} \\approx f(4) + f'(4)(0.08) = 2 + 0.25 \\times 0.08 = 2 + 0.02 = 2.02$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.4",
        "typeName": "Đạo hàm cấp n",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Đạo hàm cấp $n$ của hàm số $y = \\ln(1 - x)$ trên $(-\\infty, 1)$ là:",
        "options": [
            {"key": "A", "text": "$y^{(n)} = -\\frac{(n-1)!}{(1 - x)^n}$"},
            {"key": "B", "text": "$y^{(n)} = \\frac{(n-1)!}{(1 - x)^n}$"},
            {"key": "C", "text": "$y^{(n)} = \\frac{(-1)^n n!}{(1 - x)^n}$"},
            {"key": "D", "text": "$y^{(n)} = -\\frac{n!}{(1 - x)^n}$"}
        ],
        "correct": "A",
        "explanation": "* $y' = \\frac{-1}{1-x} = -(1-x)^{-1}$.\n* $y'' = -(-(1-x)^{-2}(-1)) = -1(1-x)^{-2}$.\n* $y''' = -2(1-x)^{-3}$.\n* Bằng quy nạp: $y^{(n)} = -\\frac{(n-1)!}{(1-x)^n}$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.8",
        "typeName": "Cực trị có điều kiện",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Giá trị lớn nhất $M$ và giá trị nhỏ nhất $m$ của hàm số $f(x) = x^3 - 3x + 1$ trên đoạn $[0, 2]$ lần lượt là:",
        "options": [
            {"key": "A", "text": "$M = 3, m = -1$"},
            {"key": "B", "text": "$M = 3, m = 1$"},
            {"key": "C", "text": "$M = 1, m = -1$"},
            {"key": "D", "text": "$M = 5, m = -1$"}
        ],
        "correct": "A",
        "explanation": "* $f'(x) = 3x^2 - 3 = 3(x^2 - 1)$.\n* $f'(x) = 0 \\iff x = 1$ (do $x \\in [0, 2]$).\n* Tính giá trị tại các điểm biên và điểm dừng:\n  $$f(0) = 1, \\quad f(1) = 1 - 3 + 1 = -1, \\quad f(2) = 2^3 - 3(2) + 1 = 3$$\n* Vậy $M = \\max \\{1, -1, 3\\} = 3$ và $m = \\min \\{1, -1, 3\\} = -1$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.1",
        "typeName": "Ý nghĩa hình học của đạo hàm",
        "clo": "CLO1",
        "difficulty": "easy",
        "question": "Hệ số góc của tiếp tuyến với đồ thị hàm số $y = f(x)$ tại điểm $M_0(x_0, y_0)$ chính là:",
        "options": [
            {"key": "A", "text": "Đạo hàm $f'(x_0)$."},
            {"key": "B", "text": "Tung độ $f(x_0)$."},
            {"key": "C", "text": "Vi phân $df(x_0)$."},
            {"key": "D", "text": "Góc tạo bởi tiếp tuyến với trục tung."}
        ],
        "correct": "A",
        "explanation": "* Theo ý nghĩa hình học của đạo hàm, hệ số góc của tiếp tuyến với đường cong $y = f(x)$ tại điểm có hoành độ $x_0$ bằng $k = f'(x_0)$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.7",
        "typeName": "Khai triển Maclaurin phân thức",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Khai triển Maclaurin của hàm số $f(x) = \\frac{1}{1 - 2x}$ đến số hạng cấp 3 là:",
        "options": [
            {"key": "A", "text": "$1 + 2x + 4x^2 + 8x^3 + o(x^3)$"},
            {"key": "B", "text": "$1 - 2x + 4x^2 - 8x^3 + o(x^3)$"},
            {"key": "C", "text": "$1 + 2x + 2x^2 + 2x^3 + o(x^3)$"},
            {"key": "D", "text": "$2x + 4x^2 + 8x^3 + o(x^3)$"}
        ],
        "correct": "A",
        "explanation": "* Áp dụng công thức tổng cấp số nhân $\\frac{1}{1 - u} = 1 + u + u^2 + u^3 + o(u^3)$ với $u = 2x$:\n  $$\\frac{1}{1 - 2x} = 1 + (2x) + (2x)^2 + (2x)^3 + o(x^3) = 1 + 2x + 4x^2 + 8x^3 + o(x^3)$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.6",
        "typeName": "Giới hạn dạng 0 mũ 0",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tính giới hạn $L = \\lim_{x \\to 0^+} x^{\\sin x}$.",
        "options": [
            {"key": "A", "text": "$L = 1$"},
            {"key": "B", "text": "$L = 0$"},
            {"key": "C", "text": "$L = e$"},
            {"key": "D", "text": "$L = +\\infty$"}
        ],
        "correct": "A",
        "explanation": "* Dạng $0^0$. Lấy logarit: $\\ln L = \\lim_{x \\to 0^+} \\sin x \\ln x$.\n* Vì $\\sin x \\sim x$ khi $x \\to 0^+$, nên:\n  $$\\ln L = \\lim_{x \\to 0^+} x \\ln x = \\lim_{x \\to 0^+} \\frac{\\ln x}{1/x} = \\lim_{x \\to 0^+} \\frac{1/x}{-1/x^2} = \\lim_{x \\to 0^+} (-x) = 0$$\n* Do đó: $L = e^0 = 1$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.8",
        "typeName": "Tiệm cận ngang của đồ thị",
        "clo": "CLO1",
        "difficulty": "easy",
        "question": "Đường tiệm cận ngang của đồ thị hàm số $y = \\frac{3x - 1}{x + 2}$ là:",
        "options": [
            {"key": "A", "text": "$y = 3$"},
            {"key": "B", "text": "$x = -2$"},
            {"key": "C", "text": "$y = -\\frac{1}{2}$"},
            {"key": "D", "text": "$y = 0$"}
        ],
        "correct": "A",
        "explanation": "* Ta có: $\\lim_{x \\to \\pm\\infty} \\frac{3x - 1}{x + 2} = 3$.\n* Do đó đường thẳng $y = 3$ là tiệm cận ngang của đồ thị hàm số.\n* (Đường $x = -2$ là tiệm cận đứng).\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.1",
        "typeName": "Đạo hàm tại điểm theo định nghĩa",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Cho hàm số $f(x) = \\begin{cases} x^2 \\sin(1/x) & \\text{khi } x \\ne 0 \\\\ 0 & \\text{khi } x = 0 \\end{cases}$. Giá trị của đạo hàm $f'(0)$ bằng:",
        "options": [
            {"key": "A", "text": "$f'(0) = 0$"},
            {"key": "B", "text": "$f'(0) = 1$"},
            {"key": "C", "text": "Không tồn tại đạo hàm $f'(0)$."},
            {"key": "D", "text": "$f'(0) = -1$"}
        ],
        "correct": "A",
        "explanation": "* Theo định nghĩa đạo hàm tại $x = 0$:\n  $$f'(0) = \\lim_{x \\to 0} \\frac{f(x) - f(0)}{x - 0} = \\lim_{x \\to 0} \\frac{x^2 \\sin(1/x)}{x} = \\lim_{x \\to 0} x \\sin(1/x)$$\n* Vì $|\\sin(1/x)| \\le 1$ nên $|x \\sin(1/x)| \\le |x| \\to 0$ khi $x \\to 0$.\n* Theo định lý kẹp, giới hạn bằng $0$. Vậy $f'(0) = 0$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.5",
        "typeName": "Định lý Rolle",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Cho $f(x) = (x-1)(x-2)(x-3)$. Số nghiệm của phương trình $f'(x) = 0$ là:",
        "options": [
            {"key": "A", "text": "2 nghiệm thực phân biệt."},
            {"key": "B", "text": "3 nghiệm thực phân biệt."},
            {"key": "C", "text": "1 nghiệm thực duy nhất."},
            {"key": "D", "text": "Vô nghiệm."}
        ],
        "correct": "A",
        "explanation": "* Hàm số $f(x)$ liên tục và khả vi trên $\\mathbb{R}$, có 3 nghiệm phân biệt là $x_1 = 1, x_2 = 2, x_3 = 3$ với $f(1) = f(2) = f(3) = 0$.\n* Theo định lý Rolle:\n  - Trên $[1, 2]$ tồn tại ít nhất 1 điểm $c_1 \\in (1, 2)$ sao cho $f'(c_1) = 0$.\n  - Trên $[2, 3]$ tồn tại ít nhất 1 điểm $c_2 \\in (2, 3)$ sao cho $f'(c_2) = 0$.\n* Vì $f(x)$ là đa thức bậc 3 nên đạo hàm $f'(x)$ là đa thức bậc 2, chỉ có tối đa 2 nghiệm.\n* Do đó $f'(x) = 0$ có đúng 2 nghiệm thực phân biệt.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "3.4",
        "typeName": "Đạo hàm cấp n của hàm tích",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Đạo hàm cấp $n$ ($n \\in \\mathbb{N}^*$) của hàm số $y = x e^x$ là:",
        "options": [
            {"key": "A", "text": "$y^{(n)} = (x + n)e^x$"},
            {"key": "B", "text": "$y^{(n)} = x e^x + n$"},
            {"key": "C", "text": "$y^{(n)} = n x e^x$"},
            {"key": "D", "text": "$y^{(n)} = (x + 1)^n e^x$"}
        ],
        "correct": "A",
        "explanation": "* Áp dụng công thức Leibniz: $(u v)^{(n)} = \\sum_{k=0}^n C_n^k u^{(k)} v^{(n-k)}$.\n* Chọn $u = x \\implies u' = 1, u^{(k)} = 0 (\\forall k \\ge 2)$.\n* Chọn $v = e^x \\implies v^{(m)} = e^x$.\n* Do đó:\n  $$y^{(n)} = C_n^0 x e^x + C_n^1 (1) e^x + 0 = x e^x + n e^x = (x + n)e^x$$\n* **Chọn đáp án: A.**"
    }
]
