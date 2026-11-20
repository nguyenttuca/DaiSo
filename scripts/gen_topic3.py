# gen_topic3.py
# 25 new high quality questions for Topic 3: HỆ PHƯƠNG TRÌNH TUYẾN TÍNH

questions_topic3 = [
    {
        "question": "Điều kiện cần và đủ để hệ phương trình tuyến tính $Ax = b$ có nghiệm (tương thích) theo định lý Kronecker - Capelli là:",
        "options": [
            {"key": "A", "text": "$r(A) = r(\\bar{A})$"},
            {"key": "B", "text": "$r(A) < r(\\bar{A})$"},
            {"key": "C", "text": "$r(A) = n$ (với $n$ là số ẩn)"},
            {"key": "D", "text": "$\\det A \\neq 0$"}
        ],
        "correct": "A",
        "explanation": "Định lý Kronecker - Capelli phát biểu rằng: Hệ phương trình tuyến tính $Ax = b$ có nghiệm khi và chỉ khi hạng của ma trận hệ số bằng hạng của ma trận hệ số mở rộng: $r(A) = r(\\bar{A})$."
    },
    {
        "question": "Cho hệ phương trình tuyến tính gồm $m$ phương trình, $n$ ẩn số có ma trận hệ số $A$ và ma trận mở rộng $\\bar{A}$. Hệ có **nghiệm duy nhất** khi và chỉ khi:",
        "options": [
            {"key": "A", "text": "$r(A) = r(\\bar{A}) = n$"},
            {"key": "B", "text": "$r(A) = r(\\bar{A}) < n$"},
            {"key": "C", "text": "$r(A) = m$"},
            {"key": "D", "text": "$r(A) < r(\\bar{A})$"}
        ],
        "correct": "A",
        "explanation": "Hệ có nghiệm khi $r(A) = r(\\bar{A})$. Để nghiệm duy nhất thì số ẩn tự do bằng $0$, tức là hạng phải đúng bằng số ẩn: $r(A) = r(\\bar{A}) = n$."
    },
    {
        "question": "Hệ phương trình Cramer là hệ phương trình tuyến tính có đặc điểm:",
        "options": [
            {"key": "A", "text": "Số phương trình bằng số ẩn và định thức ma trận hệ số $\\det A \\neq 0$"},
            {"key": "B", "text": "Hệ phương trình luôn có vô số nghiệm"},
            {"key": "C", "text": "Số phương trình nhiều hơn số ẩn"},
            {"key": "D", "text": "Định thức ma trận hệ số bằng 0"}
        ],
        "correct": "A",
        "explanation": "Hệ Cramer là hệ gồm $n$ phương trình, $n$ ẩn số với ma trận hệ số vuông $A$ cấp $n$ thỏa mãn $\\det A \\neq 0$. Hệ Cramer luôn có nghiệm duy nhất tính theo công thức $x_i = \\dfrac{\\det A_i}{\\det A}$."
    },
    {
        "question": "Một hệ phương trình thuần nhất $Ax = 0$ có $5$ ẩn và hạng của $A$ bằng $3$. Số véc tơ trong một hệ nghiệm cơ bản là:",
        "options": [
            {"key": "A", "text": "$2$"},
            {"key": "B", "text": "$3$"},
            {"key": "C", "text": "$5$"},
            {"key": "D", "text": "$8$"}
        ],
        "correct": "A",
        "explanation": "Không gian nghiệm của hệ thuần nhất $Ax = 0$ có số chiều bằng số ẩn tự do: $\\dim(\\operatorname{Ker} A) = n - r(A) = 5 - 3 = 2$. Do đó một hệ nghiệm cơ bản gồm đúng 2 véc tơ."
    },
    {
        "question": "Điều kiện để hệ phương trình tuyến tính thuần nhất $Ax = 0$ (với $A$ vuông cấp $n$) có **nghiệm không tầm thường** (nghiệm khác 0) là:",
        "options": [
            {"key": "A", "text": "$\\det A = 0$"},
            {"key": "B", "text": "$\\det A \\neq 0$"},
            {"key": "C", "text": "$r(A) = n$"},
            {"key": "D", "text": "$A$ khả nghịch"}
        ],
        "correct": "A",
        "explanation": "Hệ thuần nhất vuông luôn có nghiệm tầm thường $x = 0$. Nó có nghiệm không tầm thường khi và chỉ khi hệ có vô số nghiệm $\\Leftrightarrow r(A) < n \\Leftrightarrow \\det A = 0$."
    },
    {
        "question": "Giải hệ phương trình bằng quy tắc Cramer: $\\begin{cases} 2x + 3y = 7 \\\\ x - 2y = -7 \\end{cases}$. Giá trị của $x$ là:",
        "options": [
            {"key": "A", "text": "$-1$"},
            {"key": "B", "text": "$1$"},
            {"key": "C", "text": "$3$"},
            {"key": "D", "text": "$-3$"}
        ],
        "correct": "A",
        "explanation": "Tính các định thức:\n$D = \\begin{vmatrix} 2 & 3 \\\\ 1 & -2 \\end{vmatrix} = -4 - 3 = -7$.\n$D_x = \\begin{vmatrix} 7 & 3 \\\\ -7 & -2 \\end{vmatrix} = -14 - (-21) = 7$.\nSuy ra $x = \\dfrac{D_x}{D} = \\dfrac{7}{-7} = -1$."
    },
    {
        "question": "Tìm $m$ để hệ phương trình sau có vô số nghiệm: $\\begin{cases} x + 2y = 3 \\\\ 2x + 4y = m \\end{cases}$.",
        "options": [
            {"key": "A", "text": "$m = 6$"},
            {"key": "B", "text": "$m \\neq 6$"},
            {"key": "C", "text": "$m = 3$"},
            {"key": "D", "text": "$m = 0$"}
        ],
        "correct": "A",
        "explanation": "Phương trình 2 có vế trái gấp 2 lần vế trái phương trình 1: $2(x + 2y) = 2x + 4y$. Để hệ có nghiệm (và vô số nghiệm) thì vế phải cũng phải gấp đôi: $m = 2 \\times 3 = 6$. (Nếu $m \\neq 6$ thì hệ vô nghiệm)."
    },
    {
        "question": "Hệ phương trình $\\begin{cases} x + y + z = 1 \\\\ 2x + 2y + 2z = 3 \\end{cases}$ có tập nghiệm là:",
        "options": [
            {"key": "A", "text": "Vô nghiệm"},
            {"key": "B", "text": "Có nghiệm duy nhất"},
            {"key": "C", "text": "Vô số nghiệm phụ thuộc 1 tham số"},
            {"key": "D", "text": "Vô số nghiệm phụ thuộc 2 tham số"}
        ],
        "correct": "A",
        "explanation": "Nhân phương trình 1 với 2 ta được $2x + 2y + 2z = 2$. Nhưng phương trình 2 lại cho $2x + 2y + 2z = 3$, dẫn đến mâu thuẫn $2 = 3$. Vậy hệ vô nghiệm ($r(A) = 1 < r(\\bar{A}) = 2$)."
    },
    {
        "question": "Cho hệ phương trình $Ax = b$ có một nghiệm riêng là $x_0$ và $V_0$ là không gian nghiệm của hệ thuần nhất liên kết $Ax = 0$. Nghiệm tổng quát của hệ $Ax = b$ có dạng:",
        "options": [
            {"key": "A", "text": "$x = x_0 + v$ với $v \\in V_0$"},
            {"key": "B", "text": "$x = c x_0$ với $c \\in \\mathbb{R}$"},
            {"key": "C", "text": "$x = v$ với $v \\in V_0$"},
            {"key": "D", "text": "$x = x_0 - 2v$"}
        ],
        "correct": "A",
        "explanation": "Theo cấu trúc nghiệm của hệ phương trình tuyến tính không thuần nhất: Nghiệm tổng quát = Nghiệm riêng + Nghiệm tổng quát của hệ thuần nhất tương ứng ($x = x_0 + v, v \\in V_0$)."
    },
    {
        "question": "Tìm $m$ để hệ thuần nhất $\\begin{cases} mx + y = 0 \\\\ 4x + my = 0 \\end{cases}$ có nghiệm không tầm thường:",
        "options": [
            {"key": "A", "text": "$m = 2$ hoặc $m = -2$"},
            {"key": "B", "text": "$m \\neq 2$ và $m \\neq -2$"},
            {"key": "C", "text": "$m = 4$ hoặc $m = -4$"},
            {"key": "D", "text": "Mọi $m \\in \\mathbb{R}$"}
        ],
        "correct": "A",
        "explanation": "Hệ có nghiệm không tầm thường khi và chỉ khi định thức ma trận hệ số bằng 0:\n$\\det A = \\begin{vmatrix} m & 1 \\\\ 4 & m \\end{vmatrix} = m^2 - 4 = 0 \\Leftrightarrow m = \\pm 2$."
    },
    {
        "question": "Hệ phương trình $\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$ có nghiệm là:",
        "options": [
            {"key": "A", "text": "$(1, 2, 3)$"},
            {"key": "B", "text": "$(2, 1, 3)$"},
            {"key": "C", "text": "$(3, 2, 1)$"},
            {"key": "D", "text": "$(1, 3, 2)$"}
        ],
        "correct": "A",
        "explanation": "Thử nghiệm $(1, 2, 3)$:\n$1 + 2 + 3 = 6$ (thỏa mãn)\n$2(1) - 2 + 3 = 3$ (thỏa mãn)\n$1 + 2(2) - 3 = 2$ (thỏa mãn)\nVậy $(1, 2, 3)$ là nghiệm duy nhất của hệ."
    },
    {
        "question": "Cho hệ phương trình gồm $4$ phương trình và $3$ ẩn số. Khẳng định nào sau đây là **luôn đúng**?",
        "options": [
            {"key": "A", "text": "Hệ không thể có vô số nghiệm phụ thuộc 2 tham số nếu hạng ma trận hệ số bằng 2"},
            {"key": "B", "text": "Hệ luôn luôn vô nghiệm"},
            {"key": "C", "text": "Hệ luôn có nghiệm duy nhất"},
            {"key": "D", "text": "Hạng ma trận hệ số tối đa là 3"}
        ],
        "correct": "D",
        "explanation": "Ma trận hệ số $A$ có kích thước $4 \\times 3$, do đó hạng $r(A) \\le \\min(4, 3) = 3$. Vậy hạng tối đa của $A$ là 3."
    },
    {
        "question": "Nếu hệ phương trình $Ax = b$ có hai nghiệm phân biệt $x_1$ và $x_2$, thì nó có bao nhiêu nghiệm?",
        "options": [
            {"key": "A", "text": "Vô số nghiệm"},
            {"key": "B", "text": "Đúng 2 nghiệm"},
            {"key": "C", "text": "Đúng 3 nghiệm"},
            {"key": "D", "text": "Hữu hạn nghiệm"}
        ],
        "correct": "A",
        "explanation": "Trong trường số thực $\\mathbb{R}$, nếu $x_1, x_2$ là hai nghiệm phân biệt thì với mọi $\\alpha \\in \\mathbb{R}$, tổ hợp lồi $\\alpha x_1 + (1 - \\alpha) x_2$ cũng là một nghiệm của hệ. Do đó hệ có vô số nghiệm."
    },
    {
        "question": "Trong phương pháp khử Gauss, các phép biến đổi sơ cấp trên các hàng của ma trận mở rộng $\\bar{A}$ gồm:",
        "options": [
            {"key": "A", "text": "Đổi chỗ hai hàng, nhân một hàng với số khác 0, cộng vào một hàng một bội của hàng khác"},
            {"key": "B", "text": "Cộng hai cột với nhau, đổi chỗ hai cột"},
            {"key": "C", "text": "Nhân một hàng với số 0"},
            {"key": "D", "text": "Bình phương các phần tử của một hàng"}
        ],
        "correct": "A",
        "explanation": "Ba phép biến đổi sơ cấp theo hàng bảo toàn tập nghiệm của hệ phương trình tuyến tính là: (1) Hoán vị hai hàng, (2) Nhân một hàng với một số thực khác 0, (3) Cộng vào một hàng bội của một hàng khác."
    },
    {
        "question": "Tìm $m$ để hệ phương trình $\\begin{cases} x + y + z = 1 \\\\ 2x + 3y + z = 2 \\\\ 3x + 4y + 2z = m \\end{cases}$ có nghiệm:",
        "options": [
            {"key": "A", "text": "$m = 3$"},
            {"key": "B", "text": "$m \\neq 3$"},
            {"key": "C", "text": "$m = 0$"},
            {"key": "D", "text": "Mọi $m \\in \\mathbb{R}$"}
        ],
        "correct": "A",
        "explanation": "Nhận thấy hàng 1 + hàng 2 = hàng 3 ở vế trái: $(x+y+z) + (2x+3y+z) = 3x+4y+2z$. Để hệ có nghiệm, vế phải cũng phải thỏa mãn: $1 + 2 = m \\Rightarrow m = 3$."
    },
    {
        "question": "Một hệ gồm 3 phương trình bậc nhất 3 ẩn có biểu diễn hình học là:",
        "options": [
            {"key": "A", "text": "Vị trí tương đối của 3 mặt phẳng trong không gian $\\mathbb{R}^3$"},
            {"key": "B", "text": "Vị trí tương đối của 3 đường thẳng trong mặt phẳng $\\mathbb{R}^2$"},
            {"key": "C", "text": "Vị trí tương đối của 3 điểm trong không gian"},
            {"key": "D", "text": "3 hình cầu trong $\\mathbb{R}^3$"}
        ],
        "correct": "A",
        "explanation": "Mỗi phương trình tuyến tính $ax + by + cz = d$ biểu diễn một mặt phẳng trong không gian 3 chiều $\\mathbb{R}^3$. Hệ 3 phương trình biểu diễn giao của 3 mặt phẳng này."
    },
    {
        "question": "Cho hệ phương trình $\\begin{cases} x - y = 2 \\\\ 2x - 2y = 4 \\end{cases}$. Nghiệm tổng quát của hệ là:",
        "options": [
            {"key": "A", "text": "$(2 + t, \\, t)$ với $t \\in \\mathbb{R}$"},
            {"key": "B", "text": "$(2, 0)$"},
            {"key": "C", "text": "$(t, \\, 2 + t)$ với $t \\in \\mathbb{R}$"},
            {"key": "D", "text": "Vô nghiệm"}
        ],
        "correct": "A",
        "explanation": "Hai phương trình tương đương: $x - y = 2 \\Leftrightarrow x = 2 + y$. Đặt $y = t \\in \\mathbb{R}$ làm ẩn tự do, ta được nghiệm tổng quát là $(x, y) = (2 + t, t)$."
    },
    {
        "question": "Cho ma trận hệ số $A$ của một hệ thuần nhất $Ax = 0$ có $n = 6$ ẩn, hạng $r(A) = 4$. Số chiều của không gian nghiệm là:",
        "options": [
            {"key": "A", "text": "$2$"},
            {"key": "B", "text": "$4$"},
            {"key": "C", "text": "$6$"},
            {"key": "D", "text": "$10$"}
        ],
        "correct": "A",
        "explanation": "Số chiều không gian nghiệm của hệ thuần nhất $Ax = 0$ (tức số khuyết nullity) bằng $n - r(A) = 6 - 4 = 2$."
    },
    {
        "question": "Điều kiện để hệ phương trình $\\begin{cases} x + 2y - z = 0 \\\\ 2x - y + z = 0 \\\\ 3x + y = 0 \\end{cases}$ có nghiệm duy nhất là:",
        "options": [
            {"key": "A", "text": "Hệ không có nghiệm duy nhất vì luôn có vô số nghiệm"},
            {"key": "B", "text": "Có nghiệm duy nhất $(0,0,0)$"},
            {"key": "C", "text": "Hệ vô nghiệm"},
            {"key": "D", "text": "Nghiệm duy nhất $(1,1,1)$"}
        ],
        "correct": "A",
        "explanation": "Nhận thấy phương trình 1 + phương trình 2: $(x+2y-z) + (2x-y+z) = 3x+y = 0$, đúng bằng phương trình 3! Do đó 3 phương trình phụ thuộc tuyến tính, hạng $r(A) = 2 < 3$ (số ẩn). Vì vậy hệ thuần nhất có vô số nghiệm phụ thuộc 1 tham số."
    },
    {
        "question": "Cho hệ phương trình $Ax = b$. Nếu $\\det A \\neq 0$ thì hệ:",
        "options": [
            {"key": "A", "text": "Luôn có nghiệm duy nhất $x = A^{-1}b$"},
            {"key": "B", "text": "Có vô số nghiệm"},
            {"key": "C", "text": "Vô nghiệm"},
            {"key": "D", "text": "Chỉ có nghiệm khi $b = 0$"}
        ],
        "correct": "A",
        "explanation": "Khi $A$ vuông và $\\det A \\neq 0$, $A$ khả nghịch, do đó nhân hai vế với $A^{-1}$ ta được nghiệm duy nhất $x = A^{-1}b$."
    },
    {
        "question": "Cho ma trận mở rộng sau khi đã đưa về dạng bậc thang: $\\left[\\begin{array}{ccc|c} 1 & 2 & 3 & 1 \\\\ 0 & 1 & -1 & 2 \\\\ 0 & 0 & m - 3 & m^2 - 9 \\end{array}\\right]$. Tìm $m$ để hệ có **vô số nghiệm**.",
        "options": [
            {"key": "A", "text": "$m = 3$"},
            {"key": "B", "text": "$m = -3$"},
            {"key": "C", "text": "$m \\neq 3$"},
            {"key": "D", "text": "Không có giá trị $m$ nào"}
        ],
        "correct": "A",
        "explanation": "Hàng thứ 3 có dạng: $(m - 3)z = m^2 - 9 = (m - 3)(m + 3)$. Để hệ có vô số nghiệm thì hàng cuối phải trở thành $0 = 0$, tức là $m - 3 = 0 \\Leftrightarrow m = 3$. (Nếu $m = -3$ thì $m - 3 = -6 \\neq 0$, hệ có nghiệm duy nhất)."
    },
    {
        "question": "Trong câu hỏi trên, tìm $m$ để hệ **vô nghiệm**:",
        "options": [
            {"key": "A", "text": "Không có giá trị $m$ nào làm hệ vô nghiệm"},
            {"key": "B", "text": "$m = 3$"},
            {"key": "C", "text": "$m = -3$"},
            {"key": "D", "text": "$m = 0$"}
        ],
        "correct": "A",
        "explanation": "Để hệ vô nghiệm thì $m - 3 = 0$ nhưng $m^2 - 9 \\neq 0$. Tuy nhiên khi $m = 3$ thì $m^2 - 9 = 0$. Khi $m \\neq 3$ thì hệ luôn có nghiệm duy nhất. Do đó không có giá trị nào của $m$ để hệ vô nghiệm."
    },
    {
        "question": "Số ẩn tự do của một hệ phương trình tuyến tính có 5 ẩn và hạng của ma trận hệ số bằng 2 là:",
        "options": [
            {"key": "A", "text": "$3$"},
            {"key": "B", "text": "$2$"},
            {"key": "C", "text": "$5$"},
            {"key": "D", "text": "$7$"}
        ],
        "correct": "A",
        "explanation": "Số ẩn tự do (số tham số trong nghiệm tổng quát) bằng số ẩn trừ đi hạng: $n - r(A) = 5 - 2 = 3$."
    },
    {
        "question": "Hệ phương trình $\\begin{cases} x_1 + x_2 = 0 \\\\ x_2 + x_3 = 0 \\\\ x_3 + x_1 = 0 \\end{cases}$ có nghiệm là:",
        "options": [
            {"key": "A", "text": "$x_1 = x_2 = x_3 = 0$ (nghiệm duy nhất)"},
            {"key": "B", "text": "Vô số nghiệm $(t, t, t)$"},
            {"key": "C", "text": "Vô số nghiệm $(t, -t, t)$"},
            {"key": "D", "text": "Vô nghiệm"}
        ],
        "correct": "A",
        "explanation": "Ma trận hệ số $A = \\begin{bmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & 1 \\end{bmatrix}$ có $\\det A = 1(1) - 1(-1) = 2 \\neq 0$. Vì hệ thuần nhất có $\\det A \\neq 0$, hệ có nghiệm duy nhất tầm thường $x_1 = x_2 = x_3 = 0$."
    },
    {
        "question": "Một hệ phương trình tuyến tính không thuần nhất gồm 4 phương trình, 4 ẩn có ma trận hệ số có $\\det A = 0$. Khẳng định nào sau đây đúng?",
        "options": [
            {"key": "A", "text": "Hệ có thể vô nghiệm hoặc có vô số nghiệm"},
            {"key": "B", "text": "Hệ chắc chắn vô nghiệm"},
            {"key": "C", "text": "Hệ chắc chắn có vô số nghiệm"},
            {"key": "D", "text": "Hệ có nghiệm duy nhất"}
        ],
        "correct": "A",
        "explanation": "Vì $\\det A = 0$ nên $r(A) < 4$. Phụ thuộc vào ma trận hệ số mở rộng $\\bar{A}$: nếu $r(\\bar{A}) > r(A)$ thì hệ vô nghiệm; nếu $r(\\bar{A}) = r(A)$ thì hệ có vô số nghiệm. Do đó hệ có thể vô nghiệm hoặc có vô số nghiệm."
    }
]
print(f"Topic 3 generated {len(questions_topic3)} questions")
