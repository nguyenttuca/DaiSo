# -*- coding: utf-8 -*-
"""
gt1_ch5_questions.py
40 authentic, diverse, and syllabus-focused questions for:
Chương 5: Lý thuyết chuỗi (Giải tích 1 - BAS1203 - PTIT)
"""

CHAPTER_5_QUESTIONS = [
    {
        "subTypeId": 1,
        "typeId": "5.1",
        "typeName": "Tổng chuỗi cấp số nhân & chuỗi phân số",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tính tổng của chuỗi số cấp số nhân $S = \\sum_{n=1}^\\infty \\frac{3}{4^n}$.",
        "options": [
            {"key": "A", "text": "$S = 1$"},
            {"key": "B", "text": "$S = \\frac{3}{4}$"},
            {"key": "C", "text": "$S = \\frac{4}{3}$"},
            {"key": "D", "text": "$S = 3$"}
        ],
        "correct": "A",
        "explanation": "* Đây là chuỗi cấp số nhân có số hạng đầu $u_1 = \\frac{3}{4}$ và công bội $q = \\frac{1}{4}$.\n* Vì $|q| = 1/4 < 1$ nên chuỗi hội tụ và có tổng:\n  $$S = \\frac{u_1}{1 - q} = \\frac{3/4}{1 - 1/4} = \\frac{3/4}{3/4} = 1$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.1",
        "typeName": "Tổng chuỗi cấp số nhân & chuỗi phân số",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tính tổng của chuỗi số $S = \\sum_{n=1}^\\infty \\frac{1}{(2n - 1)(2n + 1)}$.",
        "options": [
            {"key": "A", "text": "$S = \\frac{1}{2}$"},
            {"key": "B", "text": "$S = 1$"},
            {"key": "C", "text": "$S = \\frac{1}{4}$"},
            {"key": "D", "text": "$S = 2$"}
        ],
        "correct": "A",
        "explanation": "* Tách phân số tối giản:\n  $$\\frac{1}{(2n-1)(2n+1)} = \\frac{1}{2}\\left(\\frac{1}{2n-1} - \\frac{1}{2n+1}\\right)$$\n* Tổng riêng thứ $N$ triệt tiêu viền:\n  $$S_N = \\frac{1}{2}\\left[\\left(1 - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{5}\\right) + \\cdots + \\left(\\frac{1}{2N-1} - \\frac{1}{2N+1}\\right)\\right] = \\frac{1}{2}\\left(1 - \\frac{1}{2N+1}\\right)$$\n* Khi $N \\to \\infty$: $S = \\lim_{N \\to \\infty} S_N = \\frac{1}{2}(1 - 0) = \\frac{1}{2}$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.1",
        "typeName": "Tổng chuỗi cấp số nhân & chuỗi phân số",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tính tổng của chuỗi số $S = \\sum_{n=1}^\\infty \\frac{2^n + 3^n}{6^n}$.",
        "options": [
            {"key": "A", "text": "$S = \\frac{3}{2}$"},
            {"key": "B", "text": "$S = 1$"},
            {"key": "C", "text": "$S = 2$"},
            {"key": "D", "text": "$S = \\frac{5}{6}$"}
        ],
        "correct": "A",
        "explanation": "* Tách thành tổng hai chuỗi cấp số nhân:\n  $$S = \\sum_{n=1}^\\infty \\left(\\frac{2}{6}\\right)^n + \\sum_{n=1}^\\infty \\left(\\frac{3}{6}\\right)^n = \\sum_{n=1}^\\infty \\left(\\frac{1}{3}\\right)^n + \\sum_{n=1}^\\infty \\left(\\frac{1}{2}\\right)^n$$\n* Tổng chuỗi 1: $S_1 = \\frac{1/3}{1 - 1/3} = \\frac{1/3}{2/3} = \\frac{1}{2}$.\n* Tổng chuỗi 2: $S_2 = \\frac{1/2}{1 - 1/2} = 1$.\n* Tổng: $S = S_1 + S_2 = \\frac{1}{2} + 1 = \\frac{3}{2}$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.1",
        "typeName": "Điều kiện cần để chuỗi số hội tụ",
        "clo": "CLO1",
        "difficulty": "easy",
        "question": "Chuỗi số nào sau đây phân kỳ do vi phạm điều kiện cần của sự hội tụ (tức $\\lim_{n \\to \\infty} u_n \\ne 0$)?",
        "options": [
            {"key": "A", "text": "$\\sum_{n=1}^\\infty \\frac{n}{2n + 1}$"},
            {"key": "B", "text": "$\\sum_{n=1}^\\infty \\frac{1}{n}$"},
            {"key": "C", "text": "$\\sum_{n=1}^\\infty \\frac{1}{n^2}$"},
            {"key": "D", "text": "$\\sum_{n=1}^\\infty \\frac{1}{\\sqrt{n}}$"}
        ],
        "correct": "A",
        "explanation": "* Xét số hạng tổng quát của chuỗi A: $\\lim_{n \\to \\infty} u_n = \\lim_{n \\to \\infty} \\frac{n}{2n+1} = \\frac{1}{2} \\ne 0$.\n* Theo điều kiện cần của chuỗi hội tụ, nếu $\\lim u_n \\ne 0$ thì chuỗi chắc chắn phân kỳ.\n* (Các chuỗi B, C, D đều có $\\lim u_n = 0$).\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.1",
        "typeName": "Điều kiện cần để chuỗi số hội tụ",
        "clo": "CLO1",
        "difficulty": "easy",
        "question": "Khảo sát sự hội tụ của chuỗi số $\\sum_{n=1}^\\infty \\cos\\left(\\frac{1}{n}\\right)$.",
        "options": [
            {"key": "A", "text": "Chuỗi phân kỳ vì $\\lim_{n \\to \\infty} u_n = 1 \\ne 0$."},
            {"key": "B", "text": "Chuỗi hội tụ vì $\\cos(1/n)$ bị chặn bởi 1."},
            {"key": "C", "text": "Chuỗi hội tụ theo tiêu chuẩn so sánh."},
            {"key": "D", "text": "Chuỗi đan dấu hội tụ theo Leibniz."}
        ],
        "correct": "A",
        "explanation": "* Khi $n \\to \\infty$, $\\frac{1}{n} \\to 0 \\implies u_n = \\cos(1/n) \\to \\cos 0 = 1 \\ne 0$.\n* Vì giới hạn của số hạng tổng quát khác $0$, chuỗi số phân kỳ theo điều kiện cần.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.2",
        "typeName": "Chuỗi số Riemann (chuỗi điều hòa suy rộng)",
        "clo": "CLO1",
        "difficulty": "easy",
        "question": "Chuỗi số $\\sum_{n=1}^\\infty \\frac{1}{n^\\alpha}$ hội tụ khi và chỉ khi:",
        "options": [
            {"key": "A", "text": "$\\alpha > 1$"},
            {"key": "B", "text": "$\\alpha \\ge 1$"},
            {"key": "C", "text": "$\\alpha < 1$"},
            {"key": "D", "text": "$\\alpha > 0$"}
        ],
        "correct": "A",
        "explanation": "* Chuỗi Riemann (chuỗi Dirichlet) $\\sum_{n=1}^\\infty \\frac{1}{n^\\alpha}$ hội tụ khi $\\alpha > 1$ và phân kỳ khi $\\alpha \\le 1$.\n* Với $\\alpha = 1$, chuỗi là chuỗi điều hòa $\\sum \\frac{1}{n}$ phân kỳ.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.3",
        "typeName": "Tiêu chuẩn so sánh bằng VCB tương đương",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Khảo sát sự hội tụ của chuỗi số $\\sum_{n=1}^\\infty \\frac{1}{\\sqrt{n^3 + 2n}}$.",
        "options": [
            {"key": "A", "text": "Chuỗi hội tụ vì cùng tính chất với $\\sum \\frac{1}{n^{3/2}}$."},
            {"key": "B", "text": "Chuỗi phân kỳ vì cùng tính chất với $\\sum \\frac{1}{n}$."},
            {"key": "C", "text": "Chuỗi phân kỳ vì $\\lim u_n \\ne 0$."},
            {"key": "D", "text": "Chuỗi dao động không xác định."}
        ],
        "correct": "A",
        "explanation": "* Khi $n \\to \\infty$: $u_n = \\frac{1}{\\sqrt{n^3 + 2n}} \\sim \\frac{1}{\\sqrt{n^3}} = \\frac{1}{n^{3/2}}$.\n* Chuỗi so sánh $\\sum_{n=1}^\\infty \\frac{1}{n^{3/2}}$ là chuỗi Riemann có $\\alpha = 3/2 > 1$ nên hội tụ.\n* Theo tiêu chuẩn so sánh tương đương, chuỗi đã cho hội tụ.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.3",
        "typeName": "Tiêu chuẩn so sánh bằng VCB tương đương",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Khảo sát sự hội tụ của chuỗi số $\\sum_{n=1}^\\infty \\frac{n + 1}{n^2 + 5}$.",
        "options": [
            {"key": "A", "text": "Chuỗi phân kỳ vì cùng tính chất với chuỗi điều hòa $\\sum \\frac{1}{n}$."},
            {"key": "B", "text": "Chuỗi hội tụ theo tiêu chuẩn D'Alembert."},
            {"key": "C", "text": "Chuỗi hội tụ vì $\\lim u_n = 0$."},
            {"key": "D", "text": "Chuỗi hội tụ theo tiêu chuẩn Cauchy."}
        ],
        "correct": "A",
        "explanation": "* Khi $n \\to \\infty$: $u_n = \\frac{n+1}{n^2+5} \\sim \\frac{n}{n^2} = \\frac{1}{n}$.\n* Chuỗi điều hòa $\\sum \\frac{1}{n}$ phân kỳ.\n* Do đó theo định lý so sánh, chuỗi đã cho phân kỳ.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.3",
        "typeName": "Tiêu chuẩn so sánh bằng VCB tương đương",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Khảo sát sự hội tụ của chuỗi số $\\sum_{n=1}^\\infty \\sin\\left(\\frac{1}{n^2}\\right)$.",
        "options": [
            {"key": "A", "text": "Chuỗi hội tụ vì $\\sin(1/n^2) \\sim \\frac{1}{n^2}$ khi $n \\to \\infty$."},
            {"key": "B", "text": "Chuỗi phân kỳ vì $\\sin(1/n^2) \\sim \\frac{1}{n}$."},
            {"key": "C", "text": "Chuỗi phân kỳ do vi phạm điều kiện cần."},
            {"key": "D", "text": "Chuỗi đan dấu bán hội tụ."}
        ],
        "correct": "A",
        "explanation": "* Khi $n \\to \\infty$, $\\frac{1}{n^2} \\to 0 \\implies \\sin\\left(\\frac{1}{n^2}\\right) \\sim \\frac{1}{n^2}$.\n* Chuỗi $\\sum \\frac{1}{n^2}$ là chuỗi Riemann hội tụ (vì $\\alpha = 2 > 1$).\n* Do đó chuỗi $\\sum \\sin(1/n^2)$ hội tụ.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.3",
        "typeName": "Tiêu chuẩn so sánh bằng VCB tương đương",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Khảo sát sự hội tụ của chuỗi số $\\sum_{n=1}^\\infty \\left(e^{1/n} - 1\\right)$.",
        "options": [
            {"key": "A", "text": "Chuỗi phân kỳ vì tương đương với $\\sum \\frac{1}{n}$."},
            {"key": "B", "text": "Chuỗi hội tụ vì tương đương với $\\sum \\frac{1}{n^2}$."},
            {"key": "C", "text": "Chuỗi hội tụ theo tiêu chuẩn D'Alembert."},
            {"key": "D", "text": "Chuỗi có tổng bằng $e - 1$."}
        ],
        "correct": "A",
        "explanation": "* Áp dụng công thức VCB: $e^u - 1 \\sim u$ khi $u \\to 0$.\n* Với $u = 1/n \\to 0$, ta có: $e^{1/n} - 1 \\sim \\frac{1}{n}$.\n* Vì chuỗi điều hòa $\\sum \\frac{1}{n}$ phân kỳ, nên chuỗi đã cho phân kỳ.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.3",
        "typeName": "Tiêu chuẩn so sánh có tham số",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tìm tất cả các giá trị của tham số $\\alpha$ để chuỗi số $\\sum_{n=1}^\\infty n^\\alpha (\\sqrt{n+1} - \\sqrt{n})$ hội tụ.",
        "options": [
            {"key": "A", "text": "$\\alpha < -\\frac{1}{2}$"},
            {"key": "B", "text": "$\\alpha < 0$"},
            {"key": "C", "text": "$\\alpha < 1$"},
            {"key": "D", "text": "$\\alpha \\le -\\frac{1}{2}$"}
        ],
        "correct": "A",
        "explanation": "* Nhân liên hợp:\n  $$\\sqrt{n+1} - \\sqrt{n} = \\frac{1}{\\sqrt{n+1} + \\sqrt{n}} \\sim \\frac{1}{2\\sqrt{n}} = \\frac{1}{2n^{1/2}}$$\n* Khi đó: $u_n = n^\\alpha (\\sqrt{n+1} - \\sqrt{n}) \\sim \\frac{1}{2} n^{\\alpha - 1/2} = \\frac{1}{2 n^{1/2 - \\alpha}}$.\n* Chuỗi Riemann $\\sum \\frac{1}{n^{1/2 - \\alpha}}$ hội tụ khi và chỉ khi số mũ:\n  $$\\frac{1}{2} - \\alpha > 1 \\iff -\\alpha > \\frac{1}{2} \\iff \\alpha < -\\frac{1}{2}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.4",
        "typeName": "Tiêu chuẩn D'Alembert",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Áp dụng tiêu chuẩn D'Alembert cho chuỗi số $\\sum_{n=1}^\\infty \\frac{n^2}{2^n}$, tỉ số $D = \\lim_{n \\to \\infty} \\frac{u_{n+1}}{u_n}$ bằng:",
        "options": [
            {"key": "A", "text": "$D = \\frac{1}{2} < 1$, chuỗi hội tụ."},
            {"key": "B", "text": "$D = 2 > 1$, chuỗi phân kỳ."},
            {"key": "C", "text": "$D = 1$, chưa có kết luận."},
            {"key": "D", "text": "$D = 0 < 1$, chuỗi hội tụ."}
        ],
        "correct": "A",
        "explanation": "* Xét tỉ số:\n  $$\\frac{u_{n+1}}{u_n} = \\frac{(n+1)^2}{2^{n+1}} \\cdot \\frac{2^n}{n^2} = \\frac{1}{2}\\left(\\frac{n+1}{n}\\right)^2$$\n* Khi $n \\to \\infty$: $D = \\lim_{n \\to \\infty} \\frac{1}{2}\\left(1 + \\frac{1}{n}\\right)^2 = \\frac{1}{2}$.\n* Vì $D = 1/2 < 1$, theo tiêu chuẩn D'Alembert, chuỗi hội tụ.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.4",
        "typeName": "Tiêu chuẩn D'Alembert",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Khảo sát sự hội tụ của chuỗi số $\\sum_{n=1}^\\infty \\frac{3^n}{n!}$.",
        "options": [
            {"key": "A", "text": "Chuỗi hội tụ vì $\\lim_{n \\to \\infty} \\frac{u_{n+1}}{u_n} = 0 < 1$."},
            {"key": "B", "text": "Chuỗi phân kỳ vì cơ số $3 > 1$."},
            {"key": "C", "text": "Chuỗi hội tụ vì có tổng bằng $e^3 - 1$."},
            {"key": "D", "text": "Chuỗi phân kỳ theo tiêu chuẩn Cauchy."}
        ],
        "correct": "A",
        "explanation": "* Áp dụng tiêu chuẩn D'Alembert:\n  $$D = \\lim_{n \\to \\infty} \\frac{u_{n+1}}{u_n} = \\lim_{n \\to \\infty} \\frac{3^{n+1}}{(n+1)!} \\cdot \\frac{n!}{3^n} = \\lim_{n \\to \\infty} \\frac{3}{n+1} = 0$$\n* Vì $D = 0 < 1$, chuỗi hội tụ.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.4",
        "typeName": "Tiêu chuẩn Cauchy (căn số)",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Áp dụng tiêu chuẩn Cauchy cho chuỗi số $\\sum_{n=1}^\\infty \\left(\\frac{2n + 1}{3n - 1}\\right)^n$, giới hạn $C = \\lim_{n \\to \\infty} \\sqrt[n]{u_n}$ bằng:",
        "options": [
            {"key": "A", "text": "$C = \\frac{2}{3} < 1$, chuỗi hội tụ."},
            {"key": "B", "text": "$C = \\frac{3}{2} > 1$, chuỗi phân kỳ."},
            {"key": "C", "text": "$C = 1$, chưa có kết luận."},
            {"key": "D", "text": "$C = 0 < 1$, chuỗi hội tụ."}
        ],
        "correct": "A",
        "explanation": "* Lấy căn bậc $n$ của số hạng tổng quát:\n  $$\\sqrt[n]{u_n} = \\frac{2n + 1}{3n - 1}$$\n* Khi $n \\to \\infty$: $C = \\lim_{n \\to \\infty} \\frac{2n+1}{3n-1} = \\frac{2}{3}$.\n* Vì $C = 2/3 < 1$, theo tiêu chuẩn Cauchy, chuỗi hội tụ.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.4",
        "typeName": "Tiêu chuẩn Cauchy (căn số)",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Khảo sát sự hội tụ của chuỗi số $\\sum_{n=1}^\\infty \\left(\\frac{n}{n + 1}\\right)^{n^2}$.",
        "options": [
            {"key": "A", "text": "Chuỗi hội tụ vì $C = \\frac{1}{e} < 1$."},
            {"key": "B", "text": "Chuỗi phân kỳ vì $C = e > 1$."},
            {"key": "C", "text": "Chuỗi phân kỳ vì $\\lim u_n \\ne 0$."},
            {"key": "D", "text": "Chuỗi có $C = 1$ không áp dụng được tiêu chuẩn Cauchy."}
        ],
        "correct": "A",
        "explanation": "* Áp dụng tiêu chuẩn Cauchy, lấy căn bậc $n$:\n  $$\\sqrt[n]{u_n} = \\left(\\frac{n}{n+1}\\right)^n = \\left(1 + \\frac{1}{n}\\right)^{-n}$$\n* Khi $n \\to \\infty$: $\\lim_{n \\to \\infty} \\sqrt[n]{u_n} = e^{-1} = \\frac{1}{e}$.\n* Vì $C = \\frac{1}{e} \\approx 0.368 < 1$, theo tiêu chuẩn Cauchy chuỗi hội tụ.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.5",
        "typeName": "Tiêu chuẩn tích phân Maclaurin-Cauchy",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Dùng tiêu chuẩn tích phân, xét sự hội tụ của chuỗi $\\sum_{n=2}^\\infty \\frac{1}{n \\ln n}$.",
        "options": [
            {"key": "A", "text": "Chuỗi phân kỳ vì tích phân suy rộng $\\int_2^{+\\infty} \\frac{dx}{x \\ln x}$ phân kỳ."},
            {"key": "B", "text": "Chuỗi hội tụ vì tích phân suy rộng hội tụ."},
            {"key": "C", "text": "Chuỗi hội tụ theo tiêu chuẩn D'Alembert."},
            {"key": "D", "text": "Chuỗi vi phạm điều kiện cần của sự hội tụ."}
        ],
        "correct": "A",
        "explanation": "* Hàm số $f(x) = \\frac{1}{x \\ln x}$ dương và giảm liên tục trên $[2, +\\infty)$.\n* Xét tích phân suy rộng:\n  $$\\int_2^{+\\infty} \\frac{dx}{x \\ln x} = [\\ln(\\ln x)]_2^{+\\infty} = +\\infty - \\ln(\\ln 2) = +\\infty$$\n* Tích phân phân kỳ, nên theo tiêu chuẩn tích phân, chuỗi số phân kỳ.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.5",
        "typeName": "Tiêu chuẩn tích phân Maclaurin-Cauchy",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Dùng tiêu chuẩn tích phân, xét sự hội tụ của chuỗi $\\sum_{n=2}^\\infty \\frac{1}{n \\ln^2 n}$.",
        "options": [
            {"key": "A", "text": "Chuỗi hội tụ vì tích phân $\\int_2^{+\\infty} \\frac{dx}{x \\ln^2 x}$ hội tụ."},
            {"key": "B", "text": "Chuỗi phân kỳ."},
            {"key": "C", "text": "Chuỗi có số hạng tổng quát không tiến về 0."},
            {"key": "D", "text": "Tiêu chuẩn tích phân không áp dụng được."}
        ],
        "correct": "A",
        "explanation": "* Hàm $f(x) = \\frac{1}{x \\ln^2 x}$ giảm và dương trên $[2, +\\infty)$.\n* Tích phân tương ứng:\n  $$\\int_2^{+\\infty} \\frac{dx}{x \\ln^2 x} = \\left[ -\\frac{1}{\\ln x} \\right]_2^{+\\infty} = 0 - \\left(-\\frac{1}{\\ln 2}\\right) = \\frac{1}{\\ln 2} < +\\infty$$\n* Tích phân hội tụ, do đó theo tiêu chuẩn tích phân chuỗi hội tụ.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.6",
        "typeName": "Chuỗi đan dấu & Tiêu chuẩn Leibniz",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Khảo sát tính hội tụ của chuỗi đan dấu $\\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n}$.",
        "options": [
            {"key": "A", "text": "Chuỗi bán hội tụ (hội tụ có điều kiện)."},
            {"key": "B", "text": "Chuỗi hội tụ tuyệt đối."},
            {"key": "C", "text": "Chuỗi phân kỳ."},
            {"key": "D", "text": "Chuỗi dao động không có giới hạn."}
        ],
        "correct": "A",
        "explanation": "* 1) Theo tiêu chuẩn Leibniz: dãy $a_n = \\frac{1}{n}$ là dãy dương, giảm ngặt và $\\lim a_n = 0 \\implies$ chuỗi hội tụ.\n* 2) Xét chuỗi trị tuyệt đối: $\\sum |u_n| = \\sum \\frac{1}{n}$ là chuỗi điều hòa phân kỳ.\n* Vì chuỗi hội tụ nhưng không hội tụ tuyệt đối nên chuỗi là BÁN HỘI TỤ (hội tụ có điều kiện).\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.6",
        "typeName": "Chuỗi đan dấu & Tiêu chuẩn Leibniz",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Khẳng định nào đúng về chuỗi số $\\sum_{n=1}^\\infty \\frac{(-1)^n}{n^2}$?",
        "options": [
            {"key": "A", "text": "Chuỗi hội tụ tuyệt đối."},
            {"key": "B", "text": "Chuỗi bán hội tụ."},
            {"key": "C", "text": "Chuỗi phân kỳ."},
            {"key": "D", "text": "Không thể xác định được."}
        ],
        "correct": "A",
        "explanation": "* Lấy trị tuyệt đối của số hạng tổng quát: $|u_n| = \\frac{1}{n^2}$.\n* Chuỗi trị tuyệt đối $\\sum_{n=1}^\\infty \\frac{1}{n^2}$ là chuỗi Riemann có $\\alpha = 2 > 1$ nên hội tụ.\n* Theo định nghĩa, chuỗi ban đầu hội tụ tuyệt đối.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.7",
        "typeName": "Bán kính hội tụ của chuỗi lũy thừa",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tìm bán kính hội tụ $R$ của chuỗi lũy thừa $\\sum_{n=1}^\\infty \\frac{x^n}{n \\cdot 3^n}$.",
        "options": [
            {"key": "A", "text": "$R = 3$"},
            {"key": "B", "text": "$R = \\frac{1}{3}$"},
            {"key": "C", "text": "$R = 1$"},
            {"key": "D", "text": "$R = +\\infty$"}
        ],
        "correct": "A",
        "explanation": "* Hệ số: $a_n = \\frac{1}{n \\cdot 3^n}$.\n* Áp dụng công thức D'Alembert cho bán kính hội tụ:\n  $$R = \\lim_{n \\to \\infty} \\left| \\frac{a_n}{a_{n+1}} \\right| = \\lim_{n \\to \\infty} \\frac{(n+1) \\cdot 3^{n+1}}{n \\cdot 3^n} = \\lim_{n \\to \\infty} 3 \\cdot \\frac{n+1}{n} = 3$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.7",
        "typeName": "Miền hội tụ của chuỗi lũy thừa",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tìm miền hội tụ $X$ của chuỗi lũy thừa $\\sum_{n=1}^\\infty \\frac{x^n}{n \\cdot 3^n}$.",
        "options": [
            {"key": "A", "text": "$X = [-3, 3)$"},
            {"key": "B", "text": "$X = (-3, 3)$"},
            {"key": "C", "text": "$X = [-3, 3]$"},
            {"key": "D", "text": "$X = (-3, 3]$"}
        ],
        "correct": "A",
        "explanation": "* Bán kính hội tụ $R = 3 \\implies$ khoảng hội tụ là $(-3, 3)$.\n* Xét mút $x = 3$: chuỗi trở thành $\\sum_{n=1}^\\infty \\frac{3^n}{n \\cdot 3^n} = \\sum_{n=1}^\\infty \\frac{1}{n}$ (chuỗi điều hòa phân kỳ).\n* Xét mút $x = -3$: chuỗi trở thành $\\sum_{n=1}^\\infty \\frac{(-3)^n}{n \\cdot 3^n} = \\sum_{n=1}^\\infty \\frac{(-1)^n}{n}$ (chuỗi đan dấu hội tụ theo Leibniz).\n* Kết hợp lại, miền hội tụ là $X = [-3, 3)$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.7",
        "typeName": "Bán kính hội tụ của chuỗi lũy thừa",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Tìm bán kính hội tụ $R$ của chuỗi lũy thừa $\\sum_{n=0}^\\infty \\frac{x^n}{n!}$.",
        "options": [
            {"key": "A", "text": "$R = +\\infty$"},
            {"key": "B", "text": "$R = 1$"},
            {"key": "C", "text": "$R = 0$"},
            {"key": "D", "text": "$R = e$"}
        ],
        "correct": "A",
        "explanation": "* Hệ số $a_n = \\frac{1}{n!}$.\n* Bán kính hội tụ:\n  $$R = \\lim_{n \\to \\infty} \\left| \\frac{a_n}{a_{n+1}} \\right| = \\lim_{n \\to \\infty} \\frac{(n+1)!}{n!} = \\lim_{n \\to \\infty} (n+1) = +\\infty$$\n* Chuỗi hội tụ trên toàn trục số thực $\\mathbb{R}$ (và có tổng bằng $e^x$).\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.7",
        "typeName": "Bán kính hội tụ của chuỗi lũy thừa",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tìm bán kính hội tụ $R$ của chuỗi lũy thừa $\\sum_{n=1}^\\infty \\frac{x^{2n}}{4^n}$.",
        "options": [
            {"key": "A", "text": "$R = 2$"},
            {"key": "B", "text": "$R = 4$"},
            {"key": "C", "text": "$R = 16$"},
            {"key": "D", "text": "$R = \\frac{1}{2}$"}
        ],
        "correct": "A",
        "explanation": "* Đặt $t = x^2 \\ge 0$. Chuỗi trở thành $\\sum_{n=1}^\\infty \\frac{t^n}{4^n} = \\sum_{n=1}^\\infty \\left(\\frac{t}{4}\\right)^n$.\n* Chuỗi cấp số nhân theo $t$ hội tụ khi $|t/4| < 1 \\iff |t| < 4$.\n* Quay lại biến $x$: $x^2 < 4 \\iff |x| < 2$.\n* Vậy bán kính hội tụ theo biến $x$ là $R = 2$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.7",
        "typeName": "Miền hội tụ của chuỗi lũy thừa tâm x0",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tìm miền hội tụ $X$ của chuỗi lũy thừa $\\sum_{n=1}^\\infty \\frac{(x - 2)^n}{n^2}$.",
        "options": [
            {"key": "A", "text": "$X = [1, 3]$"},
            {"key": "B", "text": "$X = (1, 3)$"},
            {"key": "C", "text": "$X = [0, 4]$"},
            {"key": "D", "text": "$X = [-1, 1]$"}
        ],
        "correct": "A",
        "explanation": "* Bán kính hội tụ: $R = \\lim \\frac{(n+1)^2}{n^2} = 1$.\n* Khoảng hội tụ: $|x - 2| < 1 \\iff 1 < x < 3$.\n* Xét mút $x = 3$: chuỗi là $\\sum \\frac{1}{n^2}$ (hội tụ).\n* Xét mút $x = 1$: chuỗi là $\\sum \\frac{(-1)^n}{n^2}$ (hội tụ tuyệt đối).\n* Vậy chuỗi hội tụ tại cả 2 đầu mút: $X = [1, 3]$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.8",
        "typeName": "Khai triển hàm số thành chuỗi lũy thừa",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Khai triển hàm số $f(x) = \\frac{1}{2 - x}$ thành chuỗi lũy thừa của $x$ là:",
        "options": [
            {"key": "A", "text": "$\\sum_{n=0}^\\infty \\frac{x^n}{2^{n+1}}$ với $|x| < 2$"},
            {"key": "B", "text": "$\\sum_{n=0}^\\infty \\frac{x^n}{2^n}$ với $|x| < 2$"},
            {"key": "C", "text": "$\\sum_{n=0}^\\infty 2^n x^n$ với $|x| < \\frac{1}{2}$"},
            {"key": "D", "text": "$\\sum_{n=0}^\\infty (-1)^n \\frac{x^n}{2^{n+1}}$ với $|x| < 2$"}
        ],
        "correct": "A",
        "explanation": "* Biến đổi đưa về dạng cấp số nhân:\n  $$\\frac{1}{2 - x} = \\frac{1}{2\\left(1 - \\frac{x}{2}\\right)} = \\frac{1}{2} \\sum_{n=0}^\\infty \\left(\\frac{x}{2}\\right)^n = \\sum_{n=0}^\\infty \\frac{x^n}{2^{n+1}}$$\n* Chuỗi hội tụ khi $|x/2| < 1 \\iff |x| < 2$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.8",
        "typeName": "Tính tổng của chuỗi số bằng chuỗi lũy thừa",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tính tổng của chuỗi số $S = \\sum_{n=1}^\\infty \\frac{1}{n \\cdot 2^n}$.",
        "options": [
            {"key": "A", "text": "$S = \\ln 2$"},
            {"key": "B", "text": "$S = \\frac{1}{2}\\ln 2$"},
            {"key": "C", "text": "$S = 1$"},
            {"key": "D", "text": "$S = \\frac{\\pi}{4}$"}
        ],
        "correct": "A",
        "explanation": "* Ta có khai triển Maclaurin của $-\\ln(1 - x) = \\sum_{n=1}^\\infty \\frac{x^n}{n}$ với $|x| < 1$.\n* Thay $x = \\frac{1}{2} \\in (-1, 1)$ vào biểu thức trên:\n  $$S = \\sum_{n=1}^\\infty \\frac{(1/2)^n}{n} = -\\ln\\left(1 - \\frac{1}{2}\\right) = -\\ln\\left(\\frac{1}{2}\\right) = \\ln 2$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.9",
        "typeName": "Chuỗi Fourier: Khái niệm & Hệ số",
        "clo": "CLO1",
        "difficulty": "easy",
        "question": "Cho hàm số $f(x)$ tuần hoàn chu kỳ $2\\pi$ và là hàm chẵn trên $[-\\pi, \\pi]$. Khi khai triển $f(x)$ thành chuỗi Fourier, hệ số nào sau đây chắc chắn bằng 0 với mọi $n \\ge 1$?",
        "options": [
            {"key": "A", "text": "$b_n = 0, \\forall n \\ge 1$"},
            {"key": "B", "text": "$a_n = 0, \\forall n \\ge 1$"},
            {"key": "C", "text": "$a_0 = 0$"},
            {"key": "D", "text": "Tất cả các hệ số $a_n$ và $b_n$ đều khác 0."}
        ],
        "correct": "A",
        "explanation": "* Hệ số $b_n = \\frac{1}{\\pi} \\int_{-\\pi}^\\pi f(x) \\sin(nx) dx$.\n* Vì $f(x)$ là hàm chẵn và $\\sin(nx)$ là hàm lẻ nên tích $f(x)\\sin(nx)$ là hàm lẻ trên đoạn đối xứng $[-\\pi, \\pi]$.\n* Tích phân của hàm lẻ trên $[-\\pi, \\pi]$ luôn bằng $0$, do đó $b_n = 0, \\forall n \\ge 1$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.9",
        "typeName": "Chuỗi Fourier: Khái niệm & Hệ số",
        "clo": "CLO1",
        "difficulty": "easy",
        "question": "Cho hàm số $f(x)$ tuần hoàn chu kỳ $2\\pi$ và là hàm lẻ trên $[-\\pi, \\pi]$. Trong khai triển chuỗi Fourier của $f(x)$:",
        "options": [
            {"key": "A", "text": "$a_0 = 0$ và $a_n = 0, \\forall n \\ge 1$ (chỉ còn lại các số hạng $\\sin$)."},
            {"key": "B", "text": "$b_n = 0, \\forall n \\ge 1$ (chỉ còn lại các số hạng $\\cos$)."},
            {"key": "C", "text": "$a_0 \\ne 0$ và $b_n = 0$."},
            {"key": "D", "text": "Hàm lẻ không khai triển được thành chuỗi Fourier."}
        ],
        "correct": "A",
        "explanation": "* Vì $f(x)$ lẻ nên $f(x) \\cos(nx)$ là hàm lẻ, do đó $a_n = \\frac{1}{\\pi} \\int_{-\\pi}^\\pi f(x)\\cos(nx)dx = 0, \\forall n \\ge 0$.\n* Chuỗi Fourier của hàm lẻ chỉ gồm các số hạng của hàm sin (chuỗi sin Fourier).\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.9",
        "typeName": "Chuỗi Fourier: Tính hệ số",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Tính hệ số Fourier $b_n$ của hàm số $f(x) = x$ trên khoảng $(-\\pi, \\pi)$ với chu kỳ $2\\pi$.",
        "options": [
            {"key": "A", "text": "$b_n = \\frac{2(-1)^{n+1}}{n}$"},
            {"key": "B", "text": "$b_n = \\frac{2(-1)^n}{n}$"},
            {"key": "C", "text": "$b_n = 0$"},
            {"key": "D", "text": "$b_n = \\frac{1}{n^2}$"}
        ],
        "correct": "A",
        "explanation": "* $f(x) = x$ là hàm lẻ, do đó $a_n = 0$.\n* Tính $b_n = \\frac{2}{\\pi} \\int_0^\\pi x \\sin(nx) dx$.\n* Từng phần: $u = x, dv = \\sin(nx)dx \\implies du = dx, v = -\\frac{\\cos(nx)}{n}$:\n  $$b_n = \\frac{2}{\\pi}\\left( \\left[-\\frac{x\\cos(nx)}{n}\\right]_0^\\pi + \\int_0^\\pi \\frac{\\cos(nx)}{n} dx \\right) = \\frac{2}{\\pi}\\left( -\\frac{\\pi\\cos(n\\pi)}{n} + 0 \\right) = -\\frac{2(-1)^n}{n} = \\frac{2(-1)^{n+1}}{n}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.6",
        "typeName": "Định lý ước lượng phần dư Leibniz",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Cho chuỗi đan dấu thỏa mãn tiêu chuẩn Leibniz $\\sum_{n=1}^\\infty (-1)^{n-1} a_n$ ($a_n > 0$ giảm về 0). Đặt phần dư $R_N = S - S_N$. Khẳng định nào sau đây về ước lượng sai số là đúng?",
        "options": [
            {"key": "A", "text": "$|R_N| \\le a_{N+1}$"},
            {"key": "B", "text": "$|R_N| \\le a_N$"},
            {"key": "C", "text": "$|R_N| \\le \\frac{a_{N+1}}{2}$"},
            {"key": "D", "text": "$|R_N| \\ge a_{N+1}$"}
        ],
        "correct": "A",
        "explanation": "* Theo định lý ước lượng phần dư của chuỗi Leibniz, sai số khi thay tổng chuỗi $S$ bằng tổng riêng $S_N$ có giá trị tuyệt đối không vượt quá số hạng đầu tiên bị bỏ qua:\n  $$|R_N| \\le a_{N+1}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.4",
        "typeName": "Tiêu chuẩn D'Alembert có tham số",
        "clo": "CLO3",
        "difficulty": "hard",
        "question": "Cho chuỗi số $\\sum_{n=1}^\\infty \\frac{a^n}{n^2}$ với $a > 0$. Khẳng định nào sau đây là đúng?",
        "options": [
            {"key": "A", "text": "Chuỗi hội tụ khi $0 < a \\le 1$ và phân kỳ khi $a > 1$."},
            {"key": "B", "text": "Chuỗi chỉ hội tụ khi $0 < a < 1$."},
            {"key": "C", "text": "Chuỗi hội tụ với mọi $a > 0$."},
            {"key": "D", "text": "Chuỗi phân kỳ với mọi $a > 0$."}
        ],
        "correct": "A",
        "explanation": "* Tỉ số D'Alembert: $\\frac{u_{n+1}}{u_n} = \\frac{a^{n+1}}{(n+1)^2} \\cdot \\frac{n^2}{a^n} = a \\left(\\frac{n}{n+1}\\right)^2 \\to a$.\n* - Nếu $a < 1$: chuỗi hội tụ.\n* - Nếu $a > 1$: chuỗi phân kỳ.\n* - Nếu $a = 1$: chuỗi trở thành $\\sum \\frac{1}{n^2}$ là chuỗi Riemann hội tụ.\n* Vậy chuỗi hội tụ khi $0 < a \\le 1$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.2",
        "typeName": "Tính chất của chuỗi số",
        "clo": "CLO1",
        "difficulty": "easy",
        "question": "Nếu chuỗi số $\\sum_{n=1}^\\infty u_n$ hội tụ có tổng $S$ thì chuỗi $\\sum_{n=1}^\\infty (k \\cdot u_n)$ ($k \\in \\mathbb{R}$) sẽ:",
        "options": [
            {"key": "A", "text": "Hội tụ và có tổng bằng $k \\cdot S$."},
            {"key": "B", "text": "Phân kỳ nếu $k > 1$."},
            {"key": "C", "text": "Hội tụ và có tổng bằng $S$."},
            {"key": "D", "text": "Chưa kết luận được."}
        ],
        "correct": "A",
        "explanation": "* Theo tính chất tuyến tính của chuỗi số: hằng số nhân $k$ có thể đưa ra ngoài dấu tổng, và nếu $\\sum u_n = S$ thì $\\sum (k u_n) = k \\sum u_n = k S$.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.3",
        "typeName": "Tiêu chuẩn so sánh 2",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Khảo sát sự hội tụ của chuỗi số $\\sum_{n=1}^\\infty \\ln\\left(1 + \\frac{1}{n\\sqrt{n}}\\right)$.",
        "options": [
            {"key": "A", "text": "Chuỗi hội tụ vì tương đương với $\\sum \\frac{1}{n^{3/2}}$."},
            {"key": "B", "text": "Chuỗi phân kỳ vì tương đương với $\\sum \\frac{1}{n}$."},
            {"key": "C", "text": "Chuỗi phân kỳ vì $\\lim u_n \\ne 0$."},
            {"key": "D", "text": "Không thể so sánh."}
        ],
        "correct": "A",
        "explanation": "* Khi $n \\to \\infty$, $\\frac{1}{n\\sqrt{n}} \\to 0$. Áp dụng VCB: $\\ln(1 + u) \\sim u$.\n* Ta có: $\\ln\\left(1 + \\frac{1}{n^{3/2}}\\right) \\sim \\frac{1}{n^{3/2}}$.\n* Chuỗi $\\sum \\frac{1}{n^{3/2}}$ hội tụ (do số mũ $3/2 > 1$).\n* Do đó chuỗi đã cho hội tụ.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.4",
        "typeName": "Tiêu chuẩn D'Alembert giai thừa",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Khảo sát sự hội tụ của chuỗi số $\\sum_{n=1}^\\infty \\frac{(n!)^2}{(2n)!}$.",
        "options": [
            {"key": "A", "text": "Chuỗi hội tụ vì $D = \\frac{1}{4} < 1$."},
            {"key": "B", "text": "Chuỗi phân kỳ vì $D = 4 > 1$."},
            {"key": "C", "text": "Chuỗi có $D = 1$ chưa kết luận được."},
            {"key": "D", "text": "Chuỗi phân kỳ do vi phạm điều kiện cần."}
        ],
        "correct": "A",
        "explanation": "* Xét tỉ số:\n  $$\\frac{u_{n+1}}{u_n} = \\frac{((n+1)!)^2}{(2n+2)!} \\cdot \\frac{(2n)!}{(n!)^2} = \\frac{(n+1)^2}{(2n+1)(2n+2)} = \\frac{n+1}{2(2n+1)}$$\n* Khi $n \\to \\infty$: $D = \\lim_{n \\to \\infty} \\frac{n+1}{4n+2} = \\frac{1}{4}$.\n* Vì $D = 1/4 < 1$, chuỗi hội tụ.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.7",
        "typeName": "Bán kính hội tụ công thức Cauchy-Hadamard",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Tìm bán kính hội tụ $R$ của chuỗi lũy thừa $\\sum_{n=1}^\\infty \\left(\\frac{n}{2n + 1}\\right)^n x^n$.",
        "options": [
            {"key": "A", "text": "$R = 2$"},
            {"key": "B", "text": "$R = \\frac{1}{2}$"},
            {"key": "C", "text": "$R = 1$"},
            {"key": "D", "text": "$R = +\\infty$"}
        ],
        "correct": "A",
        "explanation": "* Hệ số: $a_n = \\left(\\frac{n}{2n+1}\\right)^n$.\n* Áp dụng công thức Cauchy-Hadamard: $\\frac{1}{R} = \\lim_{n \\to \\infty} \\sqrt[n]{|a_n|}$:\n  $$\\frac{1}{R} = \\lim_{n \\to \\infty} \\frac{n}{2n+1} = \\frac{1}{2} \\implies R = 2$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.8",
        "typeName": "Đạo hàm và tích phân từng số hạng của chuỗi lũy thừa",
        "clo": "CLO1",
        "difficulty": "easy",
        "question": "Phát biểu nào sau đây về tính khả vi và khả tích của chuỗi lũy thừa $\\sum_{n=0}^\\infty a_n x^n$ bên trong khoảng hội tụ $(-R, R)$ là đúng?",
        "options": [
            {"key": "A", "text": "Chuỗi có thể lấy đạo hàm và tích phân từng số hạng tùy ý nhiều lần trong $(-R, R)$ mà không làm thay đổi bán kính hội tụ."},
            {"key": "B", "text": "Khi lấy đạo hàm từng số hạng thì bán kính hội tụ bị giảm một nửa."},
            {"key": "C", "text": "Chuỗi lũy thừa không thể tích phân từng số hạng."},
            {"key": "D", "text": "Chuỗi đạo hàm chỉ hội tụ tại $x = 0$."}
        ],
        "correct": "A",
        "explanation": "* Định lý Abel về chuỗi lũy thừa: Bên trong khoảng hội tụ $(-R, R)$, tổng của chuỗi là hàm số vô hạn lần khả vi và có thể lấy đạo hàm cũng như tích phân từng số hạng, bán kính hội tụ $R$ được bảo toàn.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.6",
        "typeName": "Chuỗi đan dấu bán hội tụ",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Chuỗi số nào dưới đây là chuỗi bán hội tụ?",
        "options": [
            {"key": "A", "text": "$\\sum_{n=1}^\\infty \\frac{(-1)^n}{\\sqrt{n}}$"},
            {"key": "B", "text": "$\\sum_{n=1}^\\infty \\frac{(-1)^n}{n^3}$"},
            {"key": "C", "text": "$\\sum_{n=1}^\\infty \\frac{(-1)^n}{2^n}$"},
            {"key": "D", "text": "$\\sum_{n=1}^\\infty (-1)^n$"}
        ],
        "correct": "A",
        "explanation": "* Chuỗi $\\sum \\frac{(-1)^n}{\\sqrt{n}}$ hội tụ theo Leibniz vì $1/\\sqrt{n} \\to 0$ giảm ngặt.\n* Nhưng chuỗi trị tuyệt đối $\\sum \\frac{1}{n^{1/2}}$ phân kỳ (vì $\\alpha = 1/2 \\le 1$).\n* Do đó nó là chuỗi bán hội tụ.\n* (Các chuỗi B, C hội tụ tuyệt đối; chuỗi D phân kỳ).\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.8",
        "typeName": "Khai triển chuỗi Maclaurin hàm lượng giác",
        "clo": "CLO2",
        "difficulty": "easy",
        "question": "Khai triển hàm số $f(x) = \\sin x$ thành chuỗi lũy thừa của $x$ là:",
        "options": [
            {"key": "A", "text": "$\\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n+1}}{(2n+1)!}$ với $-\\infty < x < +\\infty$"},
            {"key": "B", "text": "$\\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n}}{(2n)!}$ với $-\\infty < x < +\\infty$"},
            {"key": "C", "text": "$\\sum_{n=0}^\\infty \\frac{x^{2n+1}}{(2n+1)!}$ với $|x| < 1$"},
            {"key": "D", "text": "$\\sum_{n=1}^\\infty \\frac{x^n}{n!}$ với $-\\infty < x < +\\infty$"}
        ],
        "correct": "A",
        "explanation": "* Chuỗi Maclaurin kinh điển của hàm số $\\sin x$:\n  $$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots = \\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n+1}}{(2n+1)!}, \\quad \\forall x \\in \\mathbb{R}$$\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.1",
        "typeName": "Điều kiện cần chuỗi hội tụ",
        "clo": "CLO1",
        "difficulty": "easy",
        "question": "Một sinh viên kết luận: 'Vì $\\lim_{n \\to \\infty} \\frac{1}{n} = 0$ nên chuỗi điều hòa $\\sum_{n=1}^\\infty \\frac{1}{n}$ chắc chắn hội tụ'. Kết luận đó đúng hay sai?",
        "options": [
            {"key": "A", "text": "Sai, vì $\\lim u_n = 0$ chỉ là điều kiện cần chứ không phải điều kiện đủ."},
            {"key": "B", "text": "Đúng, vì mọi chuỗi có $\\lim u_n = 0$ đều hội tụ."},
            {"key": "C", "text": "Đúng, vì chuỗi điều hòa là chuỗi hội tụ cơ bản."},
            {"key": "D", "text": "Sai, vì chuỗi điều hòa không có giới hạn $\\lim u_n = 0$."}
        ],
        "correct": "A",
        "explanation": "* Điều kiện $\\lim_{n \\to \\infty} u_n = 0$ chỉ là ĐIỀU KIỆN CẦN. Chuỗi điều hòa $\\sum \\frac{1}{n}$ có số hạng tổng quát tiến về $0$ nhưng tổng tiến ra $+\\infty$ (chuỗi phân kỳ).\n* Do đó suy diễn của sinh viên là SAI.\n* **Chọn đáp án: A.**"
    },
    {
        "subTypeId": 1,
        "typeId": "5.9",
        "typeName": "Chuỗi Fourier: Điểm gián đoạn & Định lý Dirichlet",
        "clo": "CLO2",
        "difficulty": "medium",
        "question": "Theo định lý Dirichlet, tại điểm gián đoạn $x_0$ của hàm số $f(x)$, tổng của chuỗi Fourier $S(x_0)$ hội tụ về giá trị nào?",
        "options": [
            {"key": "A", "text": "$\\frac{f(x_0^+) + f(x_0^-)}{2}$"},
            {"key": "B", "text": "$f(x_0)$"},
            {"key": "C", "text": "$0$"},
            {"key": "D", "text": "Chuỗi Fourier không hội tụ tại điểm gián đoạn."}
        ],
        "correct": "A",
        "explanation": "* Theo định lý Dirichlet về sự hội tụ của chuỗi Fourier:\n  - Tại các điểm hàm liên tục, chuỗi Fourier hội tụ về đúng giá trị $f(x)$.\n  - Tại các điểm $x_0$ gián đoạn loại 1, chuỗi Fourier hội tụ về trung bình cộng của hai giới hạn một bên: $\\frac{f(x_0^+) + f(x_0^-)}{2}$.\n* **Chọn đáp án: A.**"
    }
]
