# -*- coding: utf-8 -*-
"""
gt1_ch1_questions.py
40 authentic, diverse, and syllabus-focused questions for:
Chương 1: Giới hạn của dãy số (Giải tích 1 - BAS1203 - PTIT)
"""

CHAPTER_1_QUESTIONS = [
    {
        "subTypeId": 1,
        "typeId": "1.1",
        "typeName": "Tính đơn điệu & Bị chặn của dãy số",
        "clo": "CLO1",
        "difficulty": "easy",
        "question": "Cho dãy số $(u_n)$ với số hạng tổng quát $u_n = \\frac{3n - 1}{2n + 5}, \\forall n \\ge 1$. Khẳng định nào sau đây là đúng?",
        "options": [
            {"key": "A", "text": "Dãy số $(u_n)$ tăng và bị chặn."},
            {"key": "B", "text": "Dãy số $(u_n)$ giảm và bị chặn."},
            {"key": "C", "text": "Dãy số $(u_n)$ tăng và không bị chặn."},
            {"key": "D", "text": "Dãy số $(u_n)$ là dãy không đơn điệu."}
        ],
        "correct": "A",
        "explanation": "* Xét hiệu $u_{n+1} - u_n = \\frac{3(n+1)-1}{2(n+1)+5} - \\frac{3n-1}{2n+5} = \\frac{3n+2}{2n+7} - \\frac{3n-1}{2n+5} = \\frac{(3n+2)(2n+5) - (3n-1)(2n+7)}{(2n+7)(2n+5)} = \\frac{17}{(2n+7)(2n+5)} > 0, \\forall n \\ge 1$.\n* Do đó $(u_n)$ là dãy số tăng.\n* Mặt khác: $0 < u_n = \\frac{3n-1}{2n+5} < \\frac{3n+7.5}{2n+5} = \\frac{3}{2}, \\forall n \\ge 1$, nên dãy số bị chặn.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.1",
        "typeName": "Tính đơn điệu & Bị chặn của dãy số",
        "clo": "CLO1",
        "difficulty": "easy",
        "question": "Cho dãy số $(u_n)$ với $u_n = \\frac{(-1)^n \\cdot n}{n^2 + 1}, \\forall n \\ge 1$. Khẳng định nào sau đây là đúng?",
        "options": [
            {"key": "A", "text": "Dãy số $(u_n)$ là dãy đan dấu và bị chặn."},
            {"key": "B", "text": "Dãy số $(u_n)$ là dãy tăng ngặt."},
            {"key": "C", "text": "Dãy số $(u_n)$ là dãy giảm ngặt."},
            {"key": "D", "text": "Dãy số $(u_n)$ không bị chặn cả trên và dưới."}
        ],
        "correct": "A",
        "explanation": "* Do có nhân tử $(-1)^n$ nên dấu của các số hạng luân phiên thay đổi: $u_1 = -1/2, u_2 = 2/5, u_3 = -3/10,...$ do đó dãy không tăng không giảm mà đan dấu.\n* Mặt khác theo bất đẳng thức Cauchy: $n^2 + 1 \\ge 2n \\implies |u_n| = \\frac{n}{n^2 + 1} \\le \\frac{1}{2} \\implies -\\frac{1}{2} \\le u_n \\le \\frac{1}{2}, \\forall n \\ge 1$. Dãy bị chặn.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.1",
        "typeName": "Tính đơn điệu & Bị chặn của dãy số",
        "clo": "CLO1",
        "difficulty": "easy",
        "question": "Dãy số nào dưới đây là dãy số giảm?",
        "options": [
            {"key": "A", "text": "$u_n = \\frac{n+2}{3n-1}$"},
            {"key": "B", "text": "$u_n = \\frac{2n-1}{n+1}$"},
            {"key": "C", "text": "$u_n = n^2 - 3n$"},
            {"key": "D", "text": "$u_n = 2^n - n$"}
        ],
        "correct": "A",
        "explanation": "* Xét $u_n = \\frac{n+2}{3n-1}$: $u_{n+1} - u_n = \\frac{n+3}{3n+2} - \\frac{n+2}{3n-1} = \\frac{(n+3)(3n-1) - (n+2)(3n+2)}{(3n+2)(3n-1)} = \\frac{-7}{(3n+2)(3n-1)} < 0, \\forall n \\ge 1$.\n* Do đó $u_n = \\frac{n+2}{3n-1}$ là dãy số giảm.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.1",
        "typeName": "Định lý Weierstrass & Dãy truy hồi",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Cho dãy số $(u_n)$ xác định bởi $u_1 = \\sqrt{6}$ và $u_{n+1} = \\sqrt{6 + u_n}, \\forall n \\ge 1$. Giới hạn $L = \\lim_{n \\to \\infty} u_n$ bằng:",
        "options": [
            {"key": "A", "text": "$L = 3$"},
            {"key": "B", "text": "$L = 2$"},
            {"key": "C", "text": "$L = \\sqrt{6}$"},
            {"key": "D", "text": "$L = +\\infty$"}
        ],
        "correct": "A",
        "explanation": "* Bằng quy nạp, ta dễ dàng chứng minh được $0 < u_n < 3, \\forall n \\ge 1$ (bị chặn trên bởi 3).\n* Xét hiệu $u_{n+1}^2 - u_n^2 = 6 + u_n - u_n^2 = (3 - u_n)(u_n + 2) > 0 \\implies u_{n+1} > u_n$ (dãy tăng).\n* Theo định lý Weierstrass, dãy tăng và bị chặn trên thì có giới hạn hữu hạn $L$.\n* Chuyển qua giới hạn ở hệ thức truy hồi: $L = \\sqrt{6 + L} \\iff L^2 - L - 6 = 0 \\implies L = 3$ (loại nghiệm $L = -2 < 0$).\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.1",
        "typeName": "Định lý Weierstrass & Dãy truy hồi",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Cho dãy số $(u_n)$ xác định bởi $u_1 = 4$ và $u_{n+1} = \\frac{1}{2}\\left(u_n + \\frac{9}{u_n}\\right), \\forall n \\ge 1$. Giới hạn $L = \\lim_{n \\to \\infty} u_n$ bằng:",
        "options": [
            {"key": "A", "text": "$L = 3$"},
            {"key": "B", "text": "$L = \\frac{9}{2}$"},
            {"key": "C", "text": "$L = 2$"},
            {"key": "D", "text": "$L = \\sqrt{3}$"}
        ],
        "correct": "A",
        "explanation": "* Theo bất đẳng thức Cauchy: $u_{n+1} = \\frac{1}{2}\\left(u_n + \\frac{9}{u_n}\\right) \\ge \\sqrt{u_n \\cdot \\frac{9}{u_n}} = 3, \\forall n \\ge 1$.\n* Xét hiệu: $u_{n+1} - u_n = \\frac{9 - u_n^2}{2u_n} \\le 0$ (vì $u_n \\ge 3$). Vậy $(u_n)$ giảm từ $n=2$ và bị chặn dưới bởi 3.\n* Theo định lý Weierstrass, tồn tại giới hạn $L = \\lim u_n$. Khi đó: $L = \\frac{1}{2}(L + 9/L) \\implies 2L^2 = L^2 + 9 \\implies L^2 = 9 \\implies L = 3$ (do $L \\ge 3$).\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.2",
        "typeName": "Giới hạn hữu tỉ & vô căn",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\frac{4n^3 - 2n + 5}{5n^3 + 7n^2 - 1}$.",
        "options": [
            {"key": "A", "text": "$L = \\frac{4}{5}$"},
            {"key": "B", "text": "$L = 0$"},
            {"key": "C", "text": "$L = +\\infty$"},
            {"key": "D", "text": "$L = -\\frac{2}{7}$"}
        ],
        "correct": "A",
        "explanation": "* Chia cả tử và mẫu cho lũy thừa cao nhất $n^3$:\n  $$L = \\lim_{n \\to \\infty} \\frac{4 - \\frac{2}{n^2} + \\frac{5}{n^3}}{5 + \\frac{7}{n} - \\frac{1}{n^3}} = \\frac{4 - 0 + 0}{5 + 0 - 0} = \\frac{4}{5}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.2",
        "typeName": "Giới hạn hữu tỉ & vô căn",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\frac{n^2 + \\sqrt{n^4 + 3n}}{2n^2 - 5}$.",
        "options": [
            {"key": "A", "text": "$L = 1$"},
            {"key": "B", "text": "$L = \\frac{1}{2}$"},
            {"key": "C", "text": "$L = 2$"},
            {"key": "D", "text": "$L = +\\infty$"}
        ],
        "correct": "A",
        "explanation": "* Rút bậc cao nhất $n^2$ ở tử và mẫu:\n  $$\\sqrt{n^4 + 3n} = n^2 \\sqrt{1 + \\frac{3}{n^3}}$$\n* Tử số tiến về: $n^2(1 + 1) = 2n^2$. Mẫu số là $2n^2 - 5$.\n* Vậy $L = \\lim_{n \\to \\infty} \\frac{n^2(1 + \\sqrt{1 + 3/n^3})}{n^2(2 - 5/n^2)} = \\frac{1 + 1}{2} = 1$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.2",
        "typeName": "Giới hạn hữu tỉ & vô căn",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} (\\sqrt{n^2 + 4n} - n)$.",
        "options": [
            {"key": "A", "text": "$L = 2$"},
            {"key": "B", "text": "$L = 4$"},
            {"key": "C", "text": "$L = 0$"},
            {"key": "D", "text": "$L = +\\infty$"}
        ],
        "correct": "A",
        "explanation": "* Nhân lượng liên hợp:\n  $$\\sqrt{n^2 + 4n} - n = \\frac{(\\sqrt{n^2 + 4n} - n)(\\sqrt{n^2 + 4n} + n)}{\\sqrt{n^2 + 4n} + n} = \\frac{4n}{\\sqrt{n^2 + 4n} + n}$$\n* Chia cả tử và mẫu cho $n$:\n  $$L = \\lim_{n \\to \\infty} \\frac{4}{\\sqrt{1 + \\frac{4}{n}} + 1} = \\frac{4}{1 + 1} = 2$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.2",
        "typeName": "Giới hạn hữu tỉ & vô căn",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} (\\sqrt{4n^2 + 6n + 1} - 2n)$.",
        "options": [
            {"key": "A", "text": "$L = \\frac{3}{2}$"},
            {"key": "B", "text": "$L = 3$"},
            {"key": "C", "text": "$L = 6$"},
            {"key": "D", "text": "$L = 0$"}
        ],
        "correct": "A",
        "explanation": "* Nhân liên hợp dạng $\\sqrt{A} - B = \\frac{A - B^2}{\\sqrt{A} + B}$ với $A = 4n^2 + 6n + 1$ và $B = 2n$:\n  $$L = \\lim_{n \\to \\infty} \\frac{(4n^2 + 6n + 1) - 4n^2}{\\sqrt{4n^2 + 6n + 1} + 2n} = \\lim_{n \\to \\infty} \\frac{6n + 1}{\\sqrt{4n^2 + 6n + 1} + 2n} = \\frac{6}{\\sqrt{4} + 2} = \\frac{6}{4} = \\frac{3}{2}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.2",
        "typeName": "Giới hạn hữu tỉ & vô căn",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} (\\sqrt[3]{n^3 + 6n^2} - n)$.",
        "options": [
            {"key": "A", "text": "$L = 2$"},
            {"key": "B", "text": "$L = 6$"},
            {"key": "C", "text": "$L = 0$"},
            {"key": "D", "text": "$L = 3$"}
        ],
        "correct": "A",
        "explanation": "* Nhân liên hợp bậc 3 theo hằng đẳng thức $a - b = \\frac{a^3 - b^3}{a^2 + ab + b^2}$:\n  $$L = \\lim_{n \\to \\infty} \\frac{(n^3 + 6n^2) - n^3}{\\sqrt[3]{(n^3 + 6n^2)^2} + n\\sqrt[3]{n^3 + 6n^2} + n^2} = \\lim_{n \\to \\infty} \\frac{6n^2}{n^2 + n^2 + n^2} = \\frac{6}{3} = 2$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.2",
        "typeName": "Giới hạn hữu tỉ & vô căn",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} (\\sqrt{n^2 + 2n} - \\sqrt{n^2 - 4n})$.",
        "options": [
            {"key": "A", "text": "$L = 3$"},
            {"key": "B", "text": "$L = 6$"},
            {"key": "C", "text": "$L = 1$"},
            {"key": "D", "text": "$L = -2$"}
        ],
        "correct": "A",
        "explanation": "* Nhân liên hợp:\n  $$L = \\lim_{n \\to \\infty} \\frac{(n^2 + 2n) - (n^2 - 4n)}{\\sqrt{n^2 + 2n} + \\sqrt{n^2 - 4n}} = \\lim_{n \\to \\infty} \\frac{6n}{n\\sqrt{1 + 2/n} + n\\sqrt{1 - 4/n}} = \\frac{6}{1 + 1} = 3$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.2",
        "typeName": "Giới hạn hữu tỉ & vô căn",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\frac{\\sqrt{n^3 + 2n} - \\sqrt[3]{n^4 + 1}}{n\\sqrt{n} + 5}$.",
        "options": [
            {"key": "A", "text": "$L = 1$"},
            {"key": "B", "text": "$L = 0$"},
            {"key": "C", "text": "$L = -1$"},
            {"key": "D", "text": "$L = +\\infty$"}
        ],
        "correct": "A",
        "explanation": "* Bậc cao nhất ở tử và mẫu là $n^{3/2} = n\\sqrt{n}$.\n* Ta có $\\sqrt{n^3 + 2n} = n^{3/2}\\sqrt{1 + 2/n^2}$, trong khi $\\sqrt[3]{n^4 + 1} = n^{4/3} = o(n^{3/2})$.\n* Mẫu số là $n^{3/2} + 5$.\n* Vậy $L = \\lim_{n \\to \\infty} \\frac{n^{3/2}\\sqrt{1 + 2/n^2} - n^{4/3}}{n^{3/2}(1 + 5/n^{3/2})} = \\frac{1 - 0}{1 + 0} = 1$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.3",
        "typeName": "Giới hạn dạng vô định 1 mũ vô cùng (số e)",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\left(\\frac{n+3}{n+1}\\right)^{2n}$.",
        "options": [
            {"key": "A", "text": "$L = e^4$"},
            {"key": "B", "text": "$L = e^2$"},
            {"key": "C", "text": "$L = e^6$"},
            {"key": "D", "text": "$L = 1$"}
        ],
        "correct": "A",
        "explanation": "* Biến đổi về dạng chuẩn số $e$: $\\frac{n+3}{n+1} = 1 + \\frac{2}{n+1}$.\n* Áp dụng công thức $\\lim_{n \\to \\infty} u_n^{v_n} = e^{\\lim v_n(u_n - 1)}$ với $u_n - 1 = \\frac{2}{n+1}$:\n  $$L = \\exp\\left(\\lim_{n \\to \\infty} 2n \\cdot \\frac{2}{n+1}\\right) = \\exp\\left(\\lim_{n \\to \\infty} \\frac{4n}{n+1}\\right) = e^4$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.3",
        "typeName": "Giới hạn dạng vô định 1 mũ vô cùng (số e)",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\left(\\frac{2n+1}{2n-3}\\right)^{n+2}$.",
        "options": [
            {"key": "A", "text": "$L = e^2$"},
            {"key": "B", "text": "$L = e^4$"},
            {"key": "C", "text": "$L = e$"},
            {"key": "D", "text": "$L = e^{-2}$"}
        ],
        "correct": "A",
        "explanation": "* Ta có: $u_n - 1 = \\frac{2n+1}{2n-3} - 1 = \\frac{4}{2n-3}$.\n* Khi đó: $v_n(u_n - 1) = (n+2) \\cdot \\frac{4}{2n-3} = \\frac{4n+8}{2n-3} \\to 2$ khi $n \\to \\infty$.\n* Do đó: $L = e^2$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.3",
        "typeName": "Giới hạn dạng vô định 1 mũ vô cùng (số e)",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\left(1 - \\frac{3}{n}\\right)^{4n - 1}$.",
        "options": [
            {"key": "A", "text": "$L = e^{-12}$"},
            {"key": "B", "text": "$L = e^{-3}$"},
            {"key": "C", "text": "$L = e^{12}$"},
            {"key": "D", "text": "$L = 1$"}
        ],
        "correct": "A",
        "explanation": "* Ta có: $u_n - 1 = -\\frac{3}{n}$.\n* Khi đó: $v_n(u_n - 1) = (4n - 1)\\left(-\\frac{3}{n}\\right) = -12 + \\frac{3}{n} \\to -12$ khi $n \\to \\infty$.\n* Vậy $L = e^{-12}$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.3",
        "typeName": "Giới hạn dạng vô định 1 mũ vô cùng (số e)",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\left(\\frac{n^2 + 2}{n^2 - 1}\\right)^{3n^2}$.",
        "options": [
            {"key": "A", "text": "$L = e^9$"},
            {"key": "B", "text": "$L = e^3$"},
            {"key": "C", "text": "$L = e^6$"},
            {"key": "D", "text": "$L = 1$"}
        ],
        "correct": "A",
        "explanation": "* Ta có: $u_n - 1 = \\frac{n^2 + 2}{n^2 - 1} - 1 = \\frac{3}{n^2 - 1}$.\n* Khi đó: $v_n(u_n - 1) = 3n^2 \\cdot \\frac{3}{n^2 - 1} = \\frac{9n^2}{n^2 - 1} \\to 9$ khi $n \\to \\infty$.\n* Vậy $L = e^9$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.3",
        "typeName": "Giới hạn dạng vô định 1 mũ vô cùng (số e)",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\left(1 + \\frac{5}{2n}\\right)^{3n}$.",
        "options": [
            {"key": "A", "text": "$L = e^{15/2}$"},
            {"key": "B", "text": "$L = e^{15}$"},
            {"key": "C", "text": "$L = e^{5/2}$"},
            {"key": "D", "text": "$L = e^6$"}
        ],
        "correct": "A",
        "explanation": "* Ta có: $u_n - 1 = \\frac{5}{2n}$.\n* Số mũ nhân với $(u_n - 1)$ là: $3n \\cdot \\frac{5}{2n} = \\frac{15}{2}$.\n* Vậy $L = e^{15/2}$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.4",
        "typeName": "Định lý kẹp & Giới hạn tổng hữu hạn",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\left(\\frac{1}{n^2+1} + \\frac{1}{n^2+2} + \\cdots + \\frac{1}{n^2+n}\\right)$.",
        "options": [
            {"key": "A", "text": "$L = 0$"},
            {"key": "B", "text": "$L = 1$"},
            {"key": "C", "text": "$L = +\\infty$"},
            {"key": "D", "text": "$L = \\frac{1}{2}$"}
        ],
        "correct": "A",
        "explanation": "* Tổng có $n$ số hạng. Đánh giá hai đầu:\n  $$\\frac{n}{n^2+n} \\le \\sum_{k=1}^n \\frac{1}{n^2+k} \\le \\frac{n}{n^2+1}$$\n* Khi $n \\to \\infty$, ta có $\\lim \\frac{n}{n^2+n} = 0$ và $\\lim \\frac{n}{n^2+1} = 0$.\n* Theo định lý kẹp, giới hạn $L = 0$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.4",
        "typeName": "Định lý kẹp & Giới hạn tổng hữu hạn",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\left(\\frac{1}{\\sqrt{n^2+1}} + \\frac{1}{\\sqrt{n^2+2}} + \\cdots + \\frac{1}{\\sqrt{n^2+n}}\\right)$.",
        "options": [
            {"key": "A", "text": "$L = 1$"},
            {"key": "B", "text": "$L = 0$"},
            {"key": "C", "text": "$L = 2$"},
            {"key": "D", "text": "$L = \\frac{1}{2}$"}
        ],
        "correct": "A",
        "explanation": "* Tổng gồm $n$ số hạng. Đánh giá số hạng nhỏ nhất và lớn nhất:\n  $$\\frac{n}{\\sqrt{n^2+n}} \\le \\sum_{k=1}^n \\frac{1}{\\sqrt{n^2+k}} \\le \\frac{n}{\\sqrt{n^2+1}}$$\n* Khi $n \\to \\infty$:\n  $$\\lim_{n \\to \\infty} \\frac{n}{\\sqrt{n^2+n}} = 1, \\quad \\lim_{n \\to \\infty} \\frac{n}{\\sqrt{n^2+1}} = 1$$\n* Theo định lý kẹp, giới hạn bằng $1$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.4",
        "typeName": "Định lý kẹp & Giới hạn tổng hữu hạn",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\left(\\frac{1}{\\sqrt{n^2+1}} + \\frac{1}{\\sqrt{n^2+2}} + \\cdots + \\frac{1}{\\sqrt{n^2+2n}}\\right)$.",
        "options": [
            {"key": "A", "text": "$L = 2$"},
            {"key": "B", "text": "$L = 1$"},
            {"key": "C", "text": "$L = \\frac{1}{2}$"},
            {"key": "D", "text": "$L = +\\infty$"}
        ],
        "correct": "A",
        "explanation": "* Tổng gồm $2n$ số hạng:\n  $$\\frac{2n}{\\sqrt{n^2+2n}} \\le \\sum_{k=1}^{2n} \\frac{1}{\\sqrt{n^2+k}} \\le \\frac{2n}{\\sqrt{n^2+1}}$$\n* Hai đầu đều có giới hạn $\\lim \\frac{2n}{n} = 2$.\n* Theo định lý kẹp, giới hạn $L = 2$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.4",
        "typeName": "Định lý kẹp & Giới hạn tổng hữu hạn",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\frac{1^2 + 2^2 + 3^2 + \\cdots + n^2}{n^3}$.",
        "options": [
            {"key": "A", "text": "$L = \\frac{1}{3}$"},
            {"key": "B", "text": "$L = \\frac{1}{2}$"},
            {"key": "C", "text": "$L = 1$"},
            {"key": "D", "text": "$L = \\frac{1}{6}$"}
        ],
        "correct": "A",
        "explanation": "* Áp dụng công thức tổng bình phương: $1^2 + 2^2 + \\cdots + n^2 = \\frac{n(n+1)(2n+1)}{6} = \\frac{2n^3 + 3n^2 + n}{6}$.\n* Do đó:\n  $$L = \\lim_{n \\to \\infty} \\frac{2n^3 + 3n^2 + n}{6n^3} = \\frac{2}{6} = \\frac{1}{3}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.4",
        "typeName": "Định lý kẹp & Giới hạn tổng hữu hạn",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\frac{1^3 + 2^3 + 3^3 + \\cdots + n^3}{n^4}$.",
        "options": [
            {"key": "A", "text": "$L = \\frac{1}{4}$"},
            {"key": "B", "text": "$L = \\frac{1}{3}$"},
            {"key": "C", "text": "$L = \\frac{1}{2}$"},
            {"key": "D", "text": "$L = 1$"}
        ],
        "correct": "A",
        "explanation": "* Áp dụng công thức tổng lập phương: $1^3 + 2^3 + \\cdots + n^3 = \\left(\\frac{n(n+1)}{2}\\right)^2 = \\frac{n^4 + 2n^3 + n^2}{4}$.\n* Do đó:\n  $$L = \\lim_{n \\to \\infty} \\frac{n^4 + 2n^3 + n^2}{4n^4} = \\frac{1}{4}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.5",
        "typeName": "Giới hạn dạng tổng tích phân Riemann",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\sum_{k=1}^n \\frac{n}{n^2 + k^2}$.",
        "options": [
            {"key": "A", "text": "$L = \\frac{\\pi}{4}$"},
            {"key": "B", "text": "$L = \\frac{\\pi}{2}$"},
            {"key": "C", "text": "$L = 1$"},
            {"key": "D", "text": "$L = \\ln 2$"}
        ],
        "correct": "A",
        "explanation": "* Biến đổi về dạng tổng tích phân Riemann bằng cách đưa $1/n$ ra ngoài:\n  $$\\sum_{k=1}^n \\frac{n}{n^2 + k^2} = \\frac{1}{n} \\sum_{k=1}^n \\frac{1}{1 + (k/n)^2}$$\n* Khi $n \\to \\infty$, tổng tích phân tiến về:\n  $$L = \\int_0^1 \\frac{1}{1 + x^2} dx = [\\arctan x]_0^1 = \\arctan(1) - \\arctan(0) = \\frac{\\pi}{4}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.5",
        "typeName": "Giới hạn dạng tổng tích phân Riemann",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\left(\\frac{1}{n+1} + \\frac{1}{n+2} + \\cdots + \\frac{1}{n+n}\\right)$.",
        "options": [
            {"key": "A", "text": "$L = \\ln 2$"},
            {"key": "B", "text": "$L = 1$"},
            {"key": "C", "text": "$L = \\frac{1}{2}$"},
            {"key": "D", "text": "$L = \\ln 3$"}
        ],
        "correct": "A",
        "explanation": "* Đưa $1/n$ ra ngoài để đưa về tổng Riemann:\n  $$\\sum_{k=1}^n \\frac{1}{n+k} = \\frac{1}{n} \\sum_{k=1}^n \\frac{1}{1 + \\frac{k}{n}}$$\n* Khi $n \\to \\infty$, giới hạn là:\n  $$L = \\int_0^1 \\frac{1}{1 + x} dx = [\\ln(1+x)]_0^1 = \\ln 2 - \\ln 1 = \\ln 2$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.5",
        "typeName": "Giới hạn dạng tổng tích phân Riemann",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{k=1}^n \\sqrt{\\frac{k}{n}}$.",
        "options": [
            {"key": "A", "text": "$L = \\frac{2}{3}$"},
            {"key": "B", "text": "$L = \\frac{1}{2}$"},
            {"key": "C", "text": "$L = \\frac{3}{2}$"},
            {"key": "D", "text": "$L = 1$"}
        ],
        "correct": "A",
        "explanation": "* Đây là tổng tích phân Riemann của hàm $f(x) = \\sqrt{x}$ trên đoạn $[0, 1]$:\n  $$L = \\int_0^1 \\sqrt{x} dx = \\left[ \\frac{2}{3}x^{3/2} \\right]_0^1 = \\frac{2}{3}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.5",
        "typeName": "Giới hạn dạng tổng tích phân Riemann",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{k=1}^n e^{2k/n}$.",
        "options": [
            {"key": "A", "text": "$L = \\frac{e^2 - 1}{2}$"},
            {"key": "B", "text": "$L = e^2 - 1$"},
            {"key": "C", "text": "$L = \\frac{e^2}{2}$"},
            {"key": "D", "text": "$L = 2(e^2 - 1)$"}
        ],
        "correct": "A",
        "explanation": "* Theo định nghĩa tích phân Riemann của hàm $f(x) = e^{2x}$ trên đoạn $[0, 1]$:\n  $$L = \\int_0^1 e^{2x} dx = \\left[ \\frac{1}{2} e^{2x} \\right]_0^1 = \\frac{e^2 - 1}{2}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.5",
        "typeName": "Giới hạn dạng tổng tích phân Riemann",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\sum_{k=1}^n \\frac{1}{n + 2k}$.",
        "options": [
            {"key": "A", "text": "$L = \\frac{1}{2}\\ln 3$"},
            {"key": "B", "text": "$L = \\ln 3$"},
            {"key": "C", "text": "$L = \\frac{1}{2}\\ln 2$"},
            {"key": "D", "text": "$L = \\ln 2$"}
        ],
        "correct": "A",
        "explanation": "* Biến đổi:\n  $$\\sum_{k=1}^n \\frac{1}{n+2k} = \\frac{1}{n} \\sum_{k=1}^n \\frac{1}{1 + 2(k/n)}$$\n* Khi $n \\to \\infty$, giới hạn tương đương:\n  $$L = \\int_0^1 \\frac{1}{1 + 2x} dx = \\left[ \\frac{1}{2} \\ln(1 + 2x) \\right]_0^1 = \\frac{1}{2}\\ln 3$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.5",
        "typeName": "Giới hạn dạng tổng tích phân Riemann",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{k=1}^n \\sin\\left(\\frac{k\\pi}{n}\\right)$.",
        "options": [
            {"key": "A", "text": "$L = \\frac{2}{\\pi}$"},
            {"key": "B", "text": "$L = \\frac{1}{\\pi}$"},
            {"key": "C", "text": "$L = 0$"},
            {"key": "D", "text": "$L = \\frac{\\pi}{2}$"}
        ],
        "correct": "A",
        "explanation": "* Đưa về tích phân Riemann của hàm $f(x) = \\sin(\\pi x)$ trên $[0, 1]$:\n  $$L = \\int_0^1 \\sin(\\pi x) dx = \\left[ -\\frac{1}{\\pi}\\cos(\\pi x) \\right]_0^1 = -\\frac{1}{\\pi}(\\cos \\pi - \\cos 0) = -\\frac{1}{\\pi}(-1 - 1) = \\frac{2}{\\pi}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.6",
        "typeName": "Dãy số lũy thừa & giai thừa",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\frac{3^n + 4^n}{2^n + 4^{n+1}}$.",
        "options": [
            {"key": "A", "text": "$L = \\frac{1}{4}$"},
            {"key": "B", "text": "$L = 1$"},
            {"key": "C", "text": "$L = 0$"},
            {"key": "D", "text": "$L = +\\infty$"}
        ],
        "correct": "A",
        "explanation": "* Cơ số lớn nhất là $4^n$. Chia cả tử và mẫu cho $4^n$:\n  $$L = \\lim_{n \\to \\infty} \\frac{(3/4)^n + 1}{(2/4)^n + 4} = \\frac{0 + 1}{0 + 4} = \\frac{1}{4}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.6",
        "typeName": "Dãy số lũy thừa & giai thừa",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\frac{2^n}{n!}$.",
        "options": [
            {"key": "A", "text": "$L = 0$"},
            {"key": "B", "text": "$L = +\\infty$"},
            {"key": "C", "text": "$L = 2$"},
            {"key": "D", "text": "$L = 1$"}
        ],
        "correct": "A",
        "explanation": "* Xét tỉ số $\\frac{u_{n+1}}{u_n} = \\frac{2^{n+1}}{(n+1)!} \\cdot \\frac{n!}{2^n} = \\frac{2}{n+1} \\to 0 < 1$.\n* Theo tiêu chuẩn tỉ số cho dãy số dương, khi $\\lim \\frac{u_{n+1}}{u_n} < 1$ thì $\\lim u_n = 0$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.6",
        "typeName": "Dãy số lũy thừa & giai thừa",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\sqrt[n]{2^n + 5^n}$.",
        "options": [
            {"key": "A", "text": "$L = 5$"},
            {"key": "B", "text": "$L = 7$"},
            {"key": "C", "text": "$L = 2$"},
            {"key": "D", "text": "$L = 10$"}
        ],
        "correct": "A",
        "explanation": "* Rút $5^n$ ra ngoài căn thức:\n  $$\\sqrt[n]{2^n + 5^n} = 5 \\sqrt[n]{\\left(\\frac{2}{5}\\right)^n + 1}$$\n* Vì $\\lim_{n \\to \\infty} (2/5)^n = 0$ nên $\\lim_{n \\to \\infty} \\sqrt[n]{(2/5)^n + 1} = 1$.\n* Do đó $L = 5 \\cdot 1 = 5$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.6",
        "typeName": "Dãy số lũy thừa & giai thừa",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\sqrt[n]{n^3 + 3^n}$.",
        "options": [
            {"key": "A", "text": "$L = 3$"},
            {"key": "B", "text": "$L = 1$"},
            {"key": "C", "text": "$L = +\\infty$"},
            {"key": "D", "text": "$L = 0$"}
        ],
        "correct": "A",
        "explanation": "* Rút $3^n$ ra ngoài căn:\n  $$\\sqrt[n]{n^3 + 3^n} = 3 \\cdot \\sqrt[n]{\\frac{n^3}{3^n} + 1}$$\n* Vì đa thức tăng chậm hơn hàm mũ nên $\\lim_{n \\to \\infty} \\frac{n^3}{3^n} = 0$, do đó $\\lim \\sqrt[n]{\\frac{n^3}{3^n} + 1} = 1$.\n* Suy ra $L = 3$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.7",
        "typeName": "Bài toán tham số trong giới hạn dãy số",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tìm giá trị của tham số $\\alpha$ để giới hạn $L = \\lim_{n \\to \\infty} n^\\alpha (\\sqrt{n+2} - \\sqrt{n}) = 1$.",
        "options": [
            {"key": "A", "text": "$\\alpha = \\frac{1}{2}$"},
            {"key": "B", "text": "$\\alpha = 1$"},
            {"key": "C", "text": "$\\alpha = -\\frac{1}{2}$"},
            {"key": "D", "text": "$\\alpha = 2$"}
        ],
        "correct": "A",
        "explanation": "* Nhân liên hợp cho căn thức:\n  $$\\sqrt{n+2} - \\sqrt{n} = \\frac{(n+2) - n}{\\sqrt{n+2} + \\sqrt{n}} = \\frac{2}{\\sqrt{n+2} + \\sqrt{n}} \\sim \\frac{2}{2\\sqrt{n}} = \\frac{1}{n^{1/2}}$$\n* Do đó: $n^\\alpha(\\sqrt{n+2} - \\sqrt{n}) \\sim n^{\\alpha - 1/2}$.\n* Để giới hạn bằng hằng số khác 0 (cụ thể là 1) thì số mũ phải bằng 0: $\\alpha - 1/2 = 0 \\implies \\alpha = 1/2$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.7",
        "typeName": "Bài toán tham số trong giới hạn dãy số",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tìm các hệ số $a, b$ để $\\lim_{n \\to \\infty} (\\sqrt{n^2 + 4n + 1} - an - b) = 0$.",
        "options": [
            {"key": "A", "text": "$a = 1, b = 2$"},
            {"key": "B", "text": "$a = 1, b = 4$"},
            {"key": "C", "text": "$a = 2, b = 1$"},
            {"key": "D", "text": "$a = 1, b = 0$"}
        ],
        "correct": "A",
        "explanation": "* Ta có khai triển tiệm cận khi $n \\to \\infty$:\n  $$\\sqrt{n^2 + 4n + 1} = n\\sqrt{1 + \\frac{4}{n} + \\frac{1}{n^2}} = n\\left(1 + \\frac{2}{n} + O\\left(\\frac{1}{n^2}\\right)\\right) = n + 2 + O\\left(\\frac{1}{n}\\right)$$\n* Do đó: $\\sqrt{n^2 + 4n + 1} - an - b = (1-a)n + (2-b) + O(1/n)$.\n* Để giới hạn bằng 0 thì $(1-a) = 0 \\implies a = 1$ và $(2-b) = 0 \\implies b = 2$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.7",
        "typeName": "Bài toán tham số trong giới hạn dãy số",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tìm giá trị của tham số $a$ sao cho $\\lim_{n \\to \\infty} \\left(\\frac{n-a}{n+a}\\right)^n = e^{-4}$.",
        "options": [
            {"key": "A", "text": "$a = 2$"},
            {"key": "B", "text": "$a = 4$"},
            {"key": "C", "text": "$a = 1$"},
            {"key": "D", "text": "$a = -2$"}
        ],
        "correct": "A",
        "explanation": "* Ta có: $u_n - 1 = \\frac{n-a}{n+a} - 1 = \\frac{-2a}{n+a}$.\n* Khi đó: $\\lim_{n \\to \\infty} n(u_n - 1) = \\lim_{n \\to \\infty} \\frac{-2an}{n+a} = -2a$.\n* Do đó $\\lim_{n \\to \\infty} \\left(\\frac{n-a}{n+a}\\right)^n = e^{-2a}$.\n* Theo giả thiết: $e^{-2a} = e^{-4} \\implies -2a = -4 \\implies a = 2$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.7",
        "typeName": "Bài toán tham số trong giới hạn dãy số",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tìm giá trị của số mũ $\\alpha$ để $\\lim_{n \\to \\infty} \\frac{3n^2 + 5n}{n^\\alpha + 7} = 3$.",
        "options": [
            {"key": "A", "text": "$\\alpha = 2$"},
            {"key": "B", "text": "$\\alpha = 1$"},
            {"key": "C", "text": "$\\alpha = 3$"},
            {"key": "D", "text": "$\\alpha = 0$"}
        ],
        "correct": "A",
        "explanation": "* Tử số có bậc 2 với hệ số 3. Mẫu số $n^\\alpha + 7$ có bậc $\\alpha$ với hệ số 1.\n* Để tỉ số tiến về hằng số hữu hạn khác 0 (bằng 3) thì bậc của tử phải bằng bậc của mẫu: $\\alpha = 2$.\n* Khi đó $\\lim_{n \\to \\infty} \\frac{3n^2 + 5n}{n^2 + 7} = 3$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.1",
        "typeName": "Định lý Weierstrass & Tính chất giới hạn",
        "clo": "CLO1",
        "difficulty": "easy",
        "question": "Phát biểu nào sau đây là định lý Weierstrass về sự hội tụ của dãy số?",
        "options": [
            {"key": "A", "text": "Mọi dãy số đơn điệu và bị chặn đều hội tụ."},
            {"key": "B", "text": "Mọi dãy số bị chặn đều hội tụ."},
            {"key": "C", "text": "Mọi dãy số đơn điệu đều hội tụ."},
            {"key": "D", "text": "Nếu dãy $(u_n)$ hội tụ thì dãy phải là dãy đơn điệu."}
        ],
        "correct": "A",
        "explanation": "* Định lý Weierstrass: Một dãy số tăng và bị chặn trên (hoặc giảm và bị chặn dưới) thì chắc chắn có giới hạn hữu hạn (hội tụ).\n* Dãy chỉ bị chặn chưa chắc hội tụ (ví dụ $u_n = (-1)^n$ bị chặn nhưng dao động, không hội tụ).\n* Dãy đơn điệu nhưng không bị chặn thì tiến ra vô cùng (phân kỳ).\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.1",
        "typeName": "Tính chất giới hạn dãy số",
        "clo": "CLO1",
        "difficulty": "easy",
        "question": "Nếu $\\lim_{n \\to \\infty} u_n = a$ và $\\lim_{n \\to \\infty} v_n = b$ ($a, b \\in \\mathbb{R}, b \\ne 0$) thì khẳng định nào sau đây là SAI?",
        "options": [
            {"key": "A", "text": "$\\lim_{n \\to \\infty} \\frac{u_n}{v_n} = \\frac{b}{a}$"},
            {"key": "B", "text": "$\\lim_{n \\to \\infty} (u_n + v_n) = a + b$"},
            {"key": "C", "text": "$\\lim_{n \\to \\infty} (u_n \\cdot v_n) = a \\cdot b$"},
            {"key": "D", "text": "$\\lim_{n \\to \\infty} |u_n| = |a|$"}
        ],
        "correct": "A",
        "explanation": "* Theo các tính chất số học của giới hạn dãy: $\\lim \\frac{u_n}{v_n} = \\frac{a}{b}$ chứ không phải $\\frac{b}{a}$.\n* Do đó khẳng định A là SAI.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.2",
        "typeName": "Giới hạn hữu tỉ & vô căn",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\frac{1 - 2 + 3 - 4 + \\cdots + (2n-1) - 2n}{\\sqrt{n^2 + 1}}$.",
        "options": [
            {"key": "A", "text": "$L = -1$"},
            {"key": "B", "text": "$L = 1$"},
            {"key": "C", "text": "$L = 0$"},
            {"key": "D", "text": "$L = -\\frac{1}{2}$"}
        ],
        "correct": "A",
        "explanation": "* Ghép cặp ở tử số: $(1-2) + (3-4) + \\cdots + ((2n-1)-2n) = (-1) + (-1) + \\cdots + (-1)$ (có $n$ cặp) $= -n$.\n* Mẫu số là $\\sqrt{n^2+1} = n\\sqrt{1 + 1/n^2}$.\n* Do đó: $L = \\lim_{n \\to \\infty} \\frac{-n}{n\\sqrt{1 + 1/n^2}} = -1$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "1.6",
        "typeName": "Giới hạn dãy số đặc biệt",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tính giới hạn $L = \\lim_{n \\to \\infty} \\frac{\\cos(n!) + 2\\sin(n^2)}{n + 3}$.",
        "options": [
            {"key": "A", "text": "$L = 0$"},
            {"key": "B", "text": "$L = 1$"},
            {"key": "C", "text": "$L = 2$"},
            {"key": "D", "text": "Không tồn tại giới hạn."}
        ],
        "correct": "A",
        "explanation": "* Tử số bị chặn vì $|\\cos(n!) + 2\\sin(n^2)| \\le |\\cos(n!)| + 2|\\sin(n^2)| \\le 1 + 2 = 3$.\n* Mẫu số tiến ra $+\\infty$.\n* Tích của một đại lượng bị chặn với một vô cùng bé tiến về $0$ (hay theo nguyên lý kẹp: $|u_n| \\le \\frac{3}{n+3} \\to 0$).\n* Vậy $L = 0$.\n* **Chọn đáp án: A.**"
    }
]
