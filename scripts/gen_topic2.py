# gen_topic2.py
# 26 new high quality questions for Topic 2: MA TRẬN VÀ ĐỊNH THỨC

questions_topic2 = [
    {
        "question": "Cho ma trận vuông cấp 2: $A = \\begin{bmatrix} 2 & 5 \\\\ 1 & 3 \\end{bmatrix}$. Ma trận nghịch đảo $A^{-1}$ là:",
        "options": [
            {"key": "A", "text": "$\\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix}$"},
            {"key": "B", "text": "$\\begin{bmatrix} 3 & 5 \\\\ 1 & 2 \\end{bmatrix}$"},
            {"key": "C", "text": "$\\begin{bmatrix} -3 & 5 \\\\ 1 & -2 \\end{bmatrix}$"},
            {"key": "D", "text": "$\\begin{bmatrix} 2 & -1 \\\\ -5 & 3 \\end{bmatrix}$"}
        ],
        "correct": "A",
        "explanation": "Ta có $\\det A = 2 \\cdot 3 - 5 \\cdot 1 = 6 - 5 = 1$. Công thức nghịch đảo ma trận cấp 2 là $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}^{-1} = \\dfrac{1}{ad - bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$. Suy ra $A^{-1} = \\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix}$."
    },
    {
        "question": "Tính định thức cấp 3: $D = \\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{vmatrix}$.",
        "options": [
            {"key": "A", "text": "$24$"},
            {"key": "B", "text": "$15$"},
            {"key": "C", "text": "$0$"},
            {"key": "D", "text": "$12$"}
        ],
        "correct": "A",
        "explanation": "Đây là ma trận tam giác trên. Định thức của một ma trận tam giác bằng tích các phần tử trên đường chéo chính: $D = 1 \\cdot 4 \\cdot 6 = 24$."
    },
    {
        "question": "Cho $A$ là ma trận vuông cấp 4 có $\\det A = 2$. Giá trị của $\\det(2A)$ là:",
        "options": [
            {"key": "A", "text": "$32$"},
            {"key": "B", "text": "$16$"},
            {"key": "C", "text": "$8$"},
            {"key": "D", "text": "$4$"}
        ],
        "correct": "A",
        "explanation": "Với ma trận vuông cấp $n$, ta có tính chất $\\det(kA) = k^n \\det A$. Với $n = 4$ và $k = 2$: $\\det(2A) = 2^4 \\cdot \\det A = 16 \\cdot 2 = 32$."
    },
    {
        "question": "Cho ma trận $A$ cỡ $3 \\times 4$ và ma trận $B$ cỡ $4 \\times 2$. Ma trận tích $AB$ có kích thước là:",
        "options": [
            {"key": "A", "text": "$3 \\times 2$"},
            {"key": "B", "text": "$4 \\times 4$"},
            {"key": "C", "text": "$2 \\times 3$"},
            {"key": "D", "text": "Không thể nhân được"}
        ],
        "correct": "A",
        "explanation": "Tích của ma trận cỡ $m \\times p$ với ma trận cỡ $p \\times n$ là một ma trận cỡ $m \\times n$. Do số cột của $A$ ($4$) bằng số hàng của $B$ ($4$), tích $AB$ có cỡ $3 \\times 2$."
    },
    {
        "question": "Cho hai ma trận vuông $A, B$ cùng cấp. Khẳng định nào sau đây **luôn đúng**?",
        "options": [
            {"key": "A", "text": "$(AB)^T = B^T A^T$"},
            {"key": "B", "text": "$AB = BA$"},
            {"key": "C", "text": "$(A + B)^2 = A^2 + 2AB + B^2$"},
            {"key": "D", "text": "Nếu $AB = 0$ thì $A = 0$ hoặc $B = 0$"}
        ],
        "correct": "A",
        "explanation": "Tính chất chuyển vị của tích hai ma trận luôn là $(AB)^T = B^T A^T$. Phép nhân ma trận nói chung không giao hoán ($AB \\neq BA$), do đó $(A+B)^2 = A^2 + AB + BA + B^2$, và tích hai ma trận khác 0 vẫn có thể bằng ma trận 0."
    },
    {
        "question": "Cho $A$ là ma trận vuông cấp 3 thỏa mãn $A^3 = 0$ (ma trận lũy linh). Định thức của $A$ bằng:",
        "options": [
            {"key": "A", "text": "$0$"},
            {"key": "B", "text": "$1$"},
            {"key": "C", "text": "$-1$"},
            {"key": "D", "text": "Không xác định"}
        ],
        "correct": "A",
        "explanation": "Lấy định thức hai vế: $\\det(A^3) = (\\det A)^3 = \\det(0) = 0 \\Rightarrow \\det A = 0$."
    },
    {
        "question": "Cho $A$ là ma trận vuông cấp 3 có $\\det A = 3$. Tính $\\det(A^{-1} A^T)$.",
        "options": [
            {"key": "A", "text": "$1$"},
            {"key": "B", "text": "$9$"},
            {"key": "C", "text": "$3$"},
            {"key": "D", "text": "$1/3$"}
        ],
        "correct": "A",
        "explanation": "Ta có $\\det(A^{-1} A^T) = \\det(A^{-1}) \\cdot \\det(A^T) = \\dfrac{1}{\\det A} \\cdot \\det A = 1$."
    },
    {
        "question": "Ma trận $A$ được gọi là **phản đối xứng** (skew-symmetric) nếu $A^T = -A$. Nếu $A$ là ma trận phản đối xứng cấp lẻ ($n = 3, 5, \\dots$), thì $\\det A$ bằng:",
        "options": [
            {"key": "A", "text": "$0$"},
            {"key": "B", "text": "$1$"},
            {"key": "C", "text": "$-1$"},
            {"key": "D", "text": "$(-1)^n$"}
        ],
        "correct": "A",
        "explanation": "Từ $A^T = -A$, lấy định thức hai vế: $\\det(A^T) = \\det(-A) \\Leftrightarrow \\det A = (-1)^n \\det A$. Khi $n$ lẻ, $(-1)^n = -1$, suy ra $\\det A = -\\det A \\Leftrightarrow 2\\det A = 0 \\Leftrightarrow \\det A = 0$."
    },
    {
        "question": "Vết của ma trận $A = \\begin{bmatrix} 3 & -1 & 4 \\\\ 2 & 5 & 0 \\\\ -1 & 7 & -2 \\end{bmatrix}$, ký hiệu $\\operatorname{tr}(A)$, bằng:",
        "options": [
            {"key": "A", "text": "$6$"},
            {"key": "B", "text": "$10$"},
            {"key": "C", "text": "$8$"},
            {"key": "D", "text": "$-6$"}
        ],
        "correct": "A",
        "explanation": "Vết của một ma trận vuông là tổng các phần tử nằm trên đường chéo chính: $\\operatorname{tr}(A) = a_{11} + a_{22} + a_{33} = 3 + 5 + (-2) = 6$."
    },
    {
        "question": "Cho ma trận phụ hợp $\\operatorname{adj}(A)$ của ma trận vuông $A$ cấp $n$. Hệ thức nào sau đây luôn đúng?",
        "options": [
            {"key": "A", "text": "$A \\cdot \\operatorname{adj}(A) = (\\det A) \\cdot I_n$"},
            {"key": "B", "text": "$A \\cdot \\operatorname{adj}(A) = I_n$"},
            {"key": "C", "text": "$\\operatorname{adj}(A) = (\\det A) \\cdot A$"},
            {"key": "D", "text": "$A \\cdot \\operatorname{adj}(A) = (\\det A)^n \\cdot I_n$"}
        ],
        "correct": "A",
        "explanation": "Theo định lý cơ bản về ma trận phụ hợp: tích của ma trận $A$ với ma trận phụ hợp $\\operatorname{adj}(A)$ luôn bằng $(\\det A) I_n$. Từ đó suy ra công thức nghịch đảo $A^{-1} = \\frac{1}{\\det A}\\operatorname{adj}(A)$ khi $\\det A \\neq 0$."
    },
    {
        "question": "Cho $A$ là ma trận vuông cấp 3 có $\\det A = 4$. Tính định thức của ma trận phụ hợp $\\det(\\operatorname{adj}(A))$.",
        "options": [
            {"key": "A", "text": "$16$"},
            {"key": "B", "text": "$4$"},
            {"key": "C", "text": "$64$"},
            {"key": "D", "text": "$8$"}
        ],
        "correct": "A",
        "explanation": "Với ma trận vuông cấp $n$, ta có công thức $\\det(\\operatorname{adj}(A)) = (\\det A)^{n-1}$. Ở đây $n = 3$, nên $\\det(\\operatorname{adj}(A)) = 4^{3-1} = 4^2 = 16$."
    },
    {
        "question": "Tính định thức: $D = \\begin{vmatrix} 1 & a & a^2 \\\\ 1 & b & b^2 \\\\ 1 & c & c^2 \\end{vmatrix}$.",
        "options": [
            {"key": "A", "text": "$(b - a)(c - a)(c - b)$"},
            {"key": "B", "text": "$(a - b)(b - c)(c - a)$"},
            {"key": "C", "text": "$(a + b)(b + c)(c + a)$"},
            {"key": "D", "text": "$a^2 + b^2 + c^2$"}
        ],
        "correct": "A",
        "explanation": "Đây là định thức Vandermonde cấp 3 kinh điển: $V(a, b, c) = (b - a)(c - a)(c - b)$."
    },
    {
        "question": "Hạng của ma trận $A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ -1 & -2 & -3 \\end{bmatrix}$ là:",
        "options": [
            {"key": "A", "text": "$1$"},
            {"key": "B", "text": "$2$"},
            {"key": "C", "text": "$3$"},
            {"key": "D", "text": "$0$"}
        ],
        "correct": "A",
        "explanation": "Nhận thấy hàng 2 bằng $2$ lần hàng 1, hàng 3 bằng $-1$ lần hàng 1. Cả ba hàng tỉ lệ với nhau và khác hàng không, do đó số hàng độc lập tuyến tính là $1$, tức $r(A) = 1$."
    },
    {
        "question": "Cho $A$ là ma trận cỡ $4 \\times 5$ và $B$ là ma trận cỡ $5 \\times 3$. Bất đẳng thức nào sau đây về hạng của ma trận tích $AB$ là đúng?",
        "options": [
            {"key": "A", "text": "$r(AB) \\le 3$"},
            {"key": "B", "text": "$r(AB) \\ge 4$"},
            {"key": "C", "text": "$r(AB) = 5$"},
            {"key": "D", "text": "$r(AB) > \\min(r(A), r(B))$"}
        ],
        "correct": "A",
        "explanation": "Theo tính chất của hạng ma trận tích: $r(AB) \\le \\min(r(A), r(B))$. Vì $B$ có cỡ $5 \\times 3$ nên $r(B) \\le 3$, do đó $r(AB) \\le 3$."
    },
    {
        "question": "Nếu đổi chỗ hai hàng của một định thức thì giá trị định thức thay đổi như thế nào?",
        "options": [
            {"key": "A", "text": "Đổi dấu"},
            {"key": "B", "text": "Không đổi"},
            {"key": "C", "text": "Bằng 0"},
            {"key": "D", "text": "Tăng lên gấp đôi"}
        ],
        "correct": "A",
        "explanation": "Theo tính chất cơ bản của định thức, phép đổi chỗ hai hàng (hoặc hai cột) bất kỳ của định thức làm định thức đổi dấu."
    },
    {
        "question": "Cho ma trận vuông $A$ cấp 3. Nếu nhân tất cả các phần tử của hàng thứ hai với 5 thì định thức của ma trận mới sẽ:",
        "options": [
            {"key": "A", "text": "Gấp 5 lần định thức của $A$"},
            {"key": "B", "text": "Gấp 25 lần định thức của $A$"},
            {"key": "C", "text": "Gấp 125 lần định thức của $A$"},
            {"key": "D", "text": "Không đổi"}
        ],
        "correct": "A",
        "explanation": "Khi nhân một hàng duy nhất của định thức với một hằng số $k$, định thức tăng lên $k$ lần. Ở đây chỉ nhân một hàng với $5$ nên định thức tăng lên 5 lần. (Lưu ý: nếu nhân toàn bộ ma trận với 5 thì mới là $5^3 = 125$ lần)."
    },
    {
        "question": "Nếu cộng một bội của hàng này vào hàng khác trong một định thức thì giá trị của định thức sẽ:",
        "options": [
            {"key": "A", "text": "Không đổi"},
            {"key": "B", "text": "Đổi dấu"},
            {"key": "C", "text": "Bằng 0"},
            {"key": "D", "text": "Tăng lên bằng hệ số bội"}
        ],
        "correct": "A",
        "explanation": "Phép biến đổi sơ cấp loại 3: $H_i \\to H_i + k H_j$ ($i \\neq j$) không làm thay đổi giá trị của định thức."
    },
    {
        "question": "Tìm tất cả các giá trị của $m$ để ma trận $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & m \\end{bmatrix}$ suy biến (không khả nghịch):",
        "options": [
            {"key": "A", "text": "$m = 6$"},
            {"key": "B", "text": "$m = -6$"},
            {"key": "C", "text": "$m \\neq 6$"},
            {"key": "D", "text": "$m = 0$"}
        ],
        "correct": "A",
        "explanation": "Ma trận $A$ suy biến khi và chỉ khi $\\det A = 0 \\Leftrightarrow 1 \\cdot m - 2 \\cdot 3 = 0 \\Leftrightarrow m - 6 = 0 \\Leftrightarrow m = 6$."
    },
    {
        "question": "Cho $A = \\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\end{bmatrix}$. Lũy thừa $A^n$ ($n \\in \\mathbb{N}^*$) là:",
        "options": [
            {"key": "A", "text": "$\\begin{bmatrix} 1 & 0 \\\\ 2n & 1 \\end{bmatrix}$"},
            {"key": "B", "text": "$\\begin{bmatrix} 1 & 0 \\\\ 2^n & 1 \\end{bmatrix}$"},
            {"key": "C", "text": "$\\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\end{bmatrix}$"},
            {"key": "D", "text": "$\\begin{bmatrix} 1 & 0 \\\\ n^2 & 1 \\end{bmatrix}$"}
        ],
        "correct": "A",
        "explanation": "Tính thử các lũy thừa đầu:\n$A^2 = \\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\end{bmatrix}\\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 4 & 1 \\end{bmatrix}$.\n$A^3 = \\begin{bmatrix} 1 & 0 \\\\ 4 & 1 \\end{bmatrix}\\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 6 & 1 \\end{bmatrix}$.\nQuy nạp ta được $A^n = \\begin{bmatrix} 1 & 0 \\\\ 2n & 1 \\end{bmatrix}$."
    },
    {
        "question": "Cho hai ma trận vuông $A, B$ cấp $n$. Biết $\\det A = 3$ và $\\det B = -2$. Giá trị của $\\det(A^2 B^T)$ là:",
        "options": [
            {"key": "A", "text": "$-18$"},
            {"key": "B", "text": "$18$"},
            {"key": "C", "text": "$-12$"},
            {"key": "D", "text": "$-36$"}
        ],
        "correct": "A",
        "explanation": "Áp dụng các tính chất định thức: $\\det(A^2 B^T) = \\det(A^2) \\cdot \\det(B^T) = (\\det A)^2 \\cdot \\det B = 3^2 \\cdot (-2) = 9 \\cdot (-2) = -18$."
    },
    {
        "question": "Điều kiện cần và đủ để ma trận vuông $A$ khả nghịch là:",
        "options": [
            {"key": "A", "text": "$\\det A \\neq 0$"},
            {"key": "B", "text": "$\\det A = 0$"},
            {"key": "C", "text": "$A$ là ma trận đối xứng"},
            {"key": "D", "text": "Tất cả các phần tử của $A$ đều khác 0"}
        ],
        "correct": "A",
        "explanation": "Theo định lý cơ bản của đại số tuyến tính: một ma trận vuông $A$ cấp $n$ khả nghịch khi và chỉ khi định thức của nó khác $0$ (tương đương với hạng $r(A) = n$)."
    },
    {
        "question": "Tìm phần tử $c_{21}$ của ma trận tích $C = AB$ với $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ và $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$.",
        "options": [
            {"key": "A", "text": "$43$"},
            {"key": "B", "text": "$19$"},
            {"key": "C", "text": "$22$"},
            {"key": "D", "text": "$50$"}
        ],
        "correct": "A",
        "explanation": "Phần tử $c_{21}$ ở hàng 2, cột 1 của tích $AB$ bằng hàng 2 của $A$ nhân với cột 1 của $B$: $c_{21} = 3 \\cdot 5 + 4 \\cdot 7 = 15 + 28 = 43$."
    },
    {
        "question": "Cho ma trận khối $M = \\begin{bmatrix} A & B \\\\ 0 & C \\end{bmatrix}$, trong đó $A$ và $C$ là các ma trận vuông. Định thức của $M$ là:",
        "options": [
            {"key": "A", "text": "$\\det(M) = \\det(A) \\cdot \\det(C)$"},
            {"key": "B", "text": "$\\det(M) = \\det(A) \\cdot \\det(C) - \\det(B)$"},
            {"key": "C", "text": "$\\det(M) = \\det(A) + \\det(C)$"},
            {"key": "D", "text": "$\\det(M) = 0$"}
        ],
        "correct": "A",
        "explanation": "Theo tính chất định thức của ma trận khối tam giác (block triangular matrix), ta luôn có $\\det \\begin{bmatrix} A & B \\\\ 0 & C \\end{bmatrix} = \\det(A) \\cdot \\det(C)$."
    },
    {
        "question": "Tính định thức cấp 4: $D = \\begin{vmatrix} 2 & 0 & 0 & 0 \\\\ 1 & 3 & 0 & 0 \\\\ 4 & 5 & -1 & 0 \\\\ 7 & 8 & 9 & 4 \\end{vmatrix}$.",
        "options": [
            {"key": "A", "text": "$-24$"},
            {"key": "B", "text": "$24$"},
            {"key": "C", "text": "$48$"},
            {"key": "D", "text": "$-48$"}
        ],
        "correct": "A",
        "explanation": "Đây là ma trận tam giác dưới. Định thức bằng tích các phần tử nằm trên đường chéo chính: $D = 2 \\cdot 3 \\cdot (-1) \\cdot 4 = -24$."
    },
    {
        "question": "Cho ma trận vuông $A$ thỏa mãn $A^2 - 3A + 2I = 0$. Ma trận nghịch đảo $A^{-1}$ được biểu diễn là:",
        "options": [
            {"key": "A", "text": "$A^{-1} = \\dfrac{3}{2}I - \\dfrac{1}{2}A$"},
            {"key": "B", "text": "$A^{-1} = 3I - A$"},
            {"key": "C", "text": "$A^{-1} = A - 3I$"},
            {"key": "D", "text": "$A^{-1} = \\dfrac{1}{2}(A + 3I)$"}
        ],
        "correct": "A",
        "explanation": "Từ $A^2 - 3A + 2I = 0 \\Leftrightarrow A(3I - A) = 2I \\Leftrightarrow A \\left(\\dfrac{3}{2}I - \\dfrac{1}{2}A\\right) = I$. Suy ra $A^{-1} = \\dfrac{3}{2}I - \\dfrac{1}{2}A$."
    },
    {
        "question": "Cho $A$ là ma trận trực giao ($A^T A = I$). Giá trị có thể có của $\\det A$ là:",
        "options": [
            {"key": "A", "text": "$\\pm 1$"},
            {"key": "B", "text": "Chỉ có thể bằng $1$"},
            {"key": "C", "text": "Bằng $0$"},
            {"key": "D", "text": "Số thực bất kỳ"}
        ],
        "correct": "A",
        "explanation": "Từ $A^T A = I$, lấy định thức hai vế: $\\det(A^T A) = \\det(A^T) \\det(A) = (\\det A)^2 = \\det I = 1 \\Rightarrow \\det A = \\pm 1$."
    }
]
print(f"Topic 2 generated {len(questions_topic2)} questions")
