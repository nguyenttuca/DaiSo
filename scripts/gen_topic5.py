# gen_topic5.py
# 25 new high quality questions for Topic 5: ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG

questions_topic5 = [
    {
        "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ xác định bởi $f(x, y) = (2x - y, \\, x + 3y)$. Ma trận chính tắc của $f$ là:",
        "options": [
            {"key": "A", "text": "$\\begin{bmatrix} 2 & -1 \\\\ 1 & 3 \\end{bmatrix}$"},
            {"key": "B", "text": "$\\begin{bmatrix} 2 & 1 \\\\ -1 & 3 \\end{bmatrix}$"},
            {"key": "C", "text": "$\\begin{bmatrix} 2 & 3 \\\\ -1 & 1 \\end{bmatrix}$"},
            {"key": "D", "text": "$\\begin{bmatrix} -1 & 2 \\\\ 3 & 1 \\end{bmatrix}$"}
        ],
        "correct": "A",
        "explanation": "Tính ảnh của các véc tơ cơ sở chính tắc:\n$f(e_1) = f(1, 0) = (2, 1) \\Rightarrow$ cột 1 là $\\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}$.\n$f(e_2) = f(0, 1) = (-1, 3) \\Rightarrow$ cột 2 là $\\begin{bmatrix} -1 \\\\ 3 \\end{bmatrix}$.\nDo đó ma trận chính tắc là $\\begin{bmatrix} 2 & -1 \\\\ 1 & 3 \\end{bmatrix}$."
    },
    {
        "question": "Phương trình đặc trưng của ma trận $A = \\begin{bmatrix} 4 & 1 \\\\ 2 & 3 \\end{bmatrix}$ là:",
        "options": [
            {"key": "A", "text": "$\\lambda^2 - 7\\lambda + 10 = 0$"},
            {"key": "B", "text": "$\\lambda^2 - 7\\lambda + 12 = 0$"},
            {"key": "C", "text": "$\\lambda^2 + 7\\lambda + 10 = 0$"},
            {"key": "D", "text": "$\\lambda^2 - 5\\lambda + 6 = 0$"}
        ],
        "correct": "A",
        "explanation": "Phương trình đặc trưng là $\\det(A - \\lambda I) = 0$:\n$\\begin{vmatrix} 4 - \\lambda & 1 \\\\ 2 & 3 - \\lambda \\end{vmatrix} = (4 - \\lambda)(3 - \\lambda) - 2 = \\lambda^2 - 7\\lambda + 12 - 2 = \\lambda^2 - 7\\lambda + 10 = 0$."
    },
    {
        "question": "Các giá trị riêng của ma trận $A = \\begin{bmatrix} 4 & 1 \\\\ 2 & 3 \\end{bmatrix}$ là:",
        "options": [
            {"key": "A", "text": "$\\lambda_1 = 2, \\, \\lambda_2 = 5$"},
            {"key": "B", "text": "$\\lambda_1 = 3, \\, \\lambda_2 = 4$"},
            {"key": "C", "text": "$\\lambda_1 = 1, \\, \\lambda_2 = 10$"},
            {"key": "D", "text": "$\\lambda_1 = -2, \\, \\lambda_2 = -5$"}
        ],
        "correct": "A",
        "explanation": "Giải phương trình đặc trưng $\\lambda^2 - 7\\lambda + 10 = 0 \\Leftrightarrow (\\lambda - 2)(\\lambda - 5) = 0 \\Leftrightarrow \\lambda = 2$ hoặc $\\lambda = 5$."
    },
    {
        "question": "Cho ma trận vuông $A$ cấp 3 có các giá trị riêng là $1, -2, 3$. Định thức $\\det A$ bằng:",
        "options": [
            {"key": "A", "text": "$-6$"},
            {"key": "B", "text": "$6$"},
            {"key": "C", "text": "$2$"},
            {"key": "D", "text": "$0$"}
        ],
        "correct": "A",
        "explanation": "Định thức của ma trận bằng tích tất cả các giá trị riêng của nó: $\\det A = \\lambda_1 \\cdot \\lambda_2 \\cdot \\lambda_3 = 1 \\cdot (-2) \\cdot 3 = -6$."
    },
    {
        "question": "Cho ma trận vuông $A$ cấp 3 có các giá trị riêng là $1, -2, 3$. Vết $\\operatorname{tr}(A)$ bằng:",
        "options": [
            {"key": "A", "text": "$2$"},
            {"key": "B", "text": "$-6$"},
            {"key": "C", "text": "$6$"},
            {"key": "D", "text": "$1$"}
        ],
        "correct": "A",
        "explanation": "Vết của ma trận bằng tổng tất cả các giá trị riêng của nó: $\\operatorname{tr}(A) = \\lambda_1 + \\lambda_2 + \\lambda_3 = 1 + (-2) + 3 = 2$."
    },
    {
        "question": "Véc tơ riêng ứng với giá trị riêng $\\lambda = 2$ của ma trận $A = \\begin{bmatrix} 4 & 1 \\\\ 2 & 3 \\end{bmatrix}$ là:",
        "options": [
            {"key": "A", "text": "$(1, -2)$"},
            {"key": "B", "text": "$(1, 1)$"},
            {"key": "C", "text": "$(2, 1)$"},
            {"key": "D", "text": "$(1, 2)$"}
        ],
        "correct": "A",
        "explanation": "Giải hệ $(A - 2I)v = 0$:\n$\\begin{bmatrix} 2 & 1 \\\\ 2 & 1 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix} \\Leftrightarrow 2x + y = 0 \\Leftrightarrow y = -2x$.\nChọn $x = 1 \\Rightarrow y = -2$, ta được véc tơ riêng $(1, -2)$."
    },
    {
        "question": "Một ma trận vuông $A$ cấp $n$ **chéo hóa được** trên trường số thực $\\mathbb{R}$ khi và chỉ khi:",
        "options": [
            {"key": "A", "text": "$A$ có $n$ véc tơ riêng độc lập tuyến tính trong $\\mathbb{R}^n$"},
            {"key": "B", "text": "$\\det A \\neq 0$"},
            {"key": "C", "text": "$A$ là ma trận tam giác"},
            {"key": "D", "text": "$A$ có ít nhất một giá trị riêng bằng 0"}
        ],
        "correct": "A",
        "explanation": "Theo định lý chéo hóa ma trận: một ma trận vuông $A$ cấp $n$ chéo hóa được khi và chỉ khi nó có đủ $n$ véc tơ riêng độc lập tuyến tính."
    },
    {
        "question": "Nếu ma trận vuông $A$ cấp $n$ có $n$ giá trị riêng phân biệt thì:",
        "options": [
            {"key": "A", "text": "$A$ chắc chắn chéo hóa được"},
            {"key": "B", "text": "$A$ không chéo hóa được"},
            {"key": "C", "text": "$A$ suy biến"},
            {"key": "D", "text": "$\\det A = 0$"}
        ],
        "correct": "A",
        "explanation": "Các véc tơ riêng ứng với các giá trị riêng đôi một phân biệt luôn độc lập tuyến tính. Do đó nếu có $n$ giá trị riêng phân biệt thì có đủ $n$ véc tơ riêng độc lập tuyến tính, suy ra $A$ luôn chéo hóa được."
    },
    {
        "question": "Nếu $\\lambda$ là giá trị riêng của ma trận khả nghịch $A$ với véc tơ riêng $v$, thì giá trị riêng tương ứng của ma trận nghịch đảo $A^{-1}$ là:",
        "options": [
            {"key": "A", "text": "$\\dfrac{1}{\\lambda}$"},
            {"key": "B", "text": "$-\\lambda$"},
            {"key": "C", "text": "$\\lambda$"},
            {"key": "D", "text": "$\\lambda^2$"}
        ],
        "correct": "A",
        "explanation": "Từ $Av = \\lambda v$, nhân cả hai vế với $A^{-1}$: $v = \\lambda A^{-1}v \\Rightarrow A^{-1}v = \\dfrac{1}{\\lambda} v$. Vậy $\\dfrac{1}{\\lambda}$ là giá trị riêng của $A^{-1}$ với cùng véc tơ riêng $v$."
    },
    {
        "question": "Nếu $\\lambda$ là giá trị riêng của ma trận $A$, thì giá trị riêng của ma trận $A^k$ ($k \\in \\mathbb{N}^*$) là:",
        "options": [
            {"key": "A", "text": "$\\lambda^k$"},
            {"key": "B", "text": "$k \\lambda$"},
            {"key": "C", "text": "$\\lambda + k$"},
            {"key": "D", "text": "$k^\\lambda$"}
        ],
        "correct": "A",
        "explanation": "Ta có $Av = \\lambda v \\Rightarrow A^2 v = A(\\lambda v) = \\lambda(Av) = \\lambda^2 v$. Quy nạp lên ta được $A^k v = \\lambda^k v$. Do đó $\\lambda^k$ là giá trị riêng của $A^k$."
    },
    {
        "question": "Cho ánh xạ đạo hàm $D: P_3 \\to P_2, \\, D(p(x)) = p'(x)$. Số chiều của hạt nhân $\\operatorname{Ker} D$ là:",
        "options": [
            {"key": "A", "text": "$1$"},
            {"key": "B", "text": "$0$"},
            {"key": "C", "text": "$2$"},
            {"key": "D", "text": "$3$"}
        ],
        "correct": "A",
        "explanation": "Đa thức $p(x) \\in \\operatorname{Ker} D \\Leftrightarrow p'(x) = 0 \\Leftrightarrow p(x) = c$ (đa thức hằng số). Không gian các đa thức hằng số có số chiều bằng 1, do đó $\\dim(\\operatorname{Ker} D) = 1$."
    },
    {
        "question": "Cho ánh xạ tuyến tính $f: V \\to W$. Khi đó $f$ là một **đơn ánh** khi và chỉ khi:",
        "options": [
            {"key": "A", "text": "$\\operatorname{Ker} f = \\{\\vec{0}\\}$"},
            {"key": "B", "text": "$\\operatorname{Im} f = W$"},
            {"key": "C", "text": "$\\dim V = \\dim W$"},
            {"key": "D", "text": "$\\operatorname{Ker} f = V$"}
        ],
        "correct": "A",
        "explanation": "Theo tính chất cơ bản của ánh xạ tuyến tính: $f$ là đơn ánh khi và chỉ khi hạt nhân của nó chỉ chứa duy nhất véc tơ không, tức $\\operatorname{Ker} f = \\{\\vec{0}\\}$ (hay $\\dim(\\operatorname{Ker} f) = 0$)."
    },
    {
        "question": "Hai ma trận vuông $A$ và $B$ được gọi là **đồng dạng** nếu tồn tại ma trận khả nghịch $P$ sao cho $B = P^{-1} A P$. Hai ma trận đồng dạng có tính chất nào sau đây?",
        "options": [
            {"key": "A", "text": "Cùng đa thức đặc trưng, cùng định thức, cùng vết và cùng các giá trị riêng"},
            {"key": "B", "text": "Cùng các phần tử trên đường chéo chính"},
            {"key": "C", "text": "Cùng các véc tơ riêng"},
            {"key": "D", "text": "Chắc chắn là ma trận đường chéo"}
        ],
        "correct": "A",
        "explanation": "Hai ma trận đồng dạng luôn có cùng đa thức đặc trưng $\\det(B - \\lambda I) = \\det(P^{-1}(A - \\lambda I)P) = \\det(A - \\lambda I)$, do đó chúng có cùng các giá trị riêng, cùng định thức và cùng vết."
    },
    {
        "question": "Ma trận $A = \\begin{bmatrix} 2 & 1 \\\\ 0 & 2 \\end{bmatrix}$ có chéo hóa được không?",
        "options": [
            {"key": "A", "text": "Không chéo hóa được vì chỉ có 1 véc tơ riêng độc lập tuyến tính"},
            {"key": "B", "text": "Có, vì là ma trận tam giác trên"},
            {"key": "C", "text": "Có, vì có giá trị riêng bằng 2"},
            {"key": "D", "text": "Có, ma trận chéo là $\\begin{bmatrix} 2 & 0 \\\\ 0 & 2 \\end{bmatrix}$"}
        ],
        "correct": "A",
        "explanation": "Phương trình đặc trưng $(\\lambda - 2)^2 = 0 \\Rightarrow \\lambda = 2$ (bội 2). Không gian riêng ứng với $\\lambda = 2$ là nghiệm của $(A - 2I)v = 0 \\Leftrightarrow \\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix} = 0 \\Leftrightarrow y = 0$, chỉ có 1 ẩn tự do $x$, số chiều bằng 1 < 2 (bội đại số). Do đó không đủ 2 véc tơ riêng độc lập tuyến tính nên $A$ không chéo hóa được."
    },
    {
        "question": "Cho $f: \\mathbb{R}^4 \\to \\mathbb{R}^3$ là một ánh xạ tuyến tính. Số chiều của $\\operatorname{Ker} f$ **tối thiểu** là:",
        "options": [
            {"key": "A", "text": "$1$"},
            {"key": "B", "text": "$0$"},
            {"key": "C", "text": "$2$"},
            {"key": "D", "text": "$3$"}
        ],
        "correct": "A",
        "explanation": "Theo định lý hạng - số khuyết: $\\dim(\\operatorname{Ker} f) = \\dim(\\mathbb{R}^4) - \\dim(\\operatorname{Im} f) = 4 - \\dim(\\operatorname{Im} f)$. Vì $\\operatorname{Im} f \\subseteq \\mathbb{R}^3$ nên $\\dim(\\operatorname{Im} f) \\le 3$. Do đó $\\dim(\\operatorname{Ker} f) \\ge 4 - 3 = 1$."
    },
    {
        "question": "Định lý Cayley - Hamilton phát biểu rằng:",
        "options": [
            {"key": "A", "text": "Mọi ma trận vuông đều thỏa mãn phương trình đặc trưng của chính nó: $P_A(A) = 0$"},
            {"key": "B", "text": "Mọi ma trận vuông đều khả nghịch"},
            {"key": "C", "text": "Mọi ma trận vuông đều chéo hóa được"},
            {"key": "D", "text": "Định thức của ma trận bằng tích các phần tử đường chéo"}
        ],
        "correct": "A",
        "explanation": "Định lý Cayley - Hamilton kinh điển khẳng định rằng nếu $P(\\lambda) = \\det(A - \\lambda I)$ là đa thức đặc trưng của ma trận vuông $A$, thì khi thay $\\lambda$ bởi ma trận $A$ ta có $P(A) = 0$."
    },
    {
        "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ là phép quay một góc $\\theta$ quanh gốc tọa độ. Ma trận chính tắc của $f$ là:",
        "options": [
            {"key": "A", "text": "$\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$"},
            {"key": "B", "text": "$\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$"},
            {"key": "C", "text": "$\\begin{bmatrix} \\cos\\theta & 0 \\\\ 0 & \\sin\\theta \\end{bmatrix}$"},
            {"key": "D", "text": "$\\begin{bmatrix} \\sin\\theta & \\cos\\theta \\\\ \\cos\\theta & -\\sin\\theta \\end{bmatrix}$"}
        ],
        "correct": "A",
        "explanation": "Phép quay véc tơ đơn vị $e_1 = (1, 0)$ thành $(\\cos\\theta, \\sin\\theta)$ và $e_2 = (0, 1)$ thành $(-\\sin\\theta, \\cos\\theta)$. Lập thành ma trận ta được $\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$."
    },
    {
        "question": "Giá trị riêng của ma trận đường chéo $D = \\operatorname{diag}(d_1, d_2, \\dots, d_n)$ là:",
        "options": [
            {"key": "A", "text": "Chính là các phần tử trên đường chéo $d_1, d_2, \\dots, d_n$"},
            {"key": "B", "text": "Nghịch đảo của các phần tử trên đường chéo"},
            {"key": "C", "text": "Tổng của các phần tử trên đường chéo"},
            {"key": "D", "text": "Tích của các phần tử trên đường chéo"}
        ],
        "correct": "A",
        "explanation": "Phương trình đặc trưng là $\\det(D - \\lambda I) = (d_1 - \\lambda)(d_2 - \\lambda)\\dots(d_n - \\lambda) = 0$, có các nghiệm chính là các phần tử trên đường chéo $d_1, d_2, \\dots, d_n$."
    },
    {
        "question": "Cho toán tử tuyến tính $f: V \\to V$. Nếu $f^2 = f$ (toán tử chiếu), thì các giá trị riêng có thể có của $f$ là:",
        "options": [
            {"key": "A", "text": "Chỉ có thể là $0$ hoặc $1$"},
            {"key": "B", "text": "Chỉ có thể là $1$ hoặc $-1$"},
            {"key": "C", "text": "Số thực bất kỳ"},
            {"key": "D", "text": "Chỉ có thể là $0$"}
        ],
        "correct": "A",
        "explanation": "Nếu $v$ là véc tơ riêng ứng với giá trị riêng $\\lambda$ ($v \\neq 0$), ta có $f(v) = \\lambda v \\Rightarrow f^2(v) = f(\\lambda v) = \\lambda^2 v$. Vì $f^2 = f$ nên $\\lambda^2 v = \\lambda v \\Rightarrow (\\lambda^2 - \\lambda)v = 0$. Vì $v \\neq 0$ nên $\\lambda^2 - \\lambda = 0 \\Leftrightarrow \\lambda = 0$ hoặc $\\lambda = 1$."
    },
    {
        "question": "Cho ma trận đối xứng thực $A$ ($A^T = A$). Khẳng định nào sau đây là **luôn đúng**?",
        "options": [
            {"key": "A", "text": "Tất cả các giá trị riêng của $A$ đều là số thực và $A$ luôn chéo hóa trực giao được"},
            {"key": "B", "text": "Tất cả các giá trị riêng của $A$ đều dương"},
            {"key": "C", "text": "$A$ có thể không chéo hóa được"},
            {"key": "D", "text": "$\\det A$ luôn lớn hơn 0"}
        ],
        "correct": "A",
        "explanation": "Theo Định lý phổ (Spectral Theorem) cho ma trận đối xứng thực: mọi ma trận đối xứng thực đều có tất cả các giá trị riêng là số thực và luôn chéo hóa trực giao được ($A = Q D Q^T$ với $Q$ trực giao)."
    },
    {
        "question": "Biết ma trận $A = P D P^{-1}$ với $D = \\begin{bmatrix} 1 & 0 \\\\ 0 & 2 \\end{bmatrix}$. Tính $A^4$ theo $P$ và $P^{-1}$:",
        "options": [
            {"key": "A", "text": "$P \\begin{bmatrix} 1 & 0 \\\\ 0 & 16 \\end{bmatrix} P^{-1}$"},
            {"key": "B", "text": "$P \\begin{bmatrix} 1 & 0 \\\\ 0 & 8 \\end{bmatrix} P^{-1}$"},
            {"key": "C", "text": "$P \\begin{bmatrix} 4 & 0 \\\\ 0 & 8 \\end{bmatrix} P^{-1}$"},
            {"key": "D", "text": "$P^4 D^4 (P^{-1})^4$"}
        ],
        "correct": "A",
        "explanation": "Ta có $A^4 = (P D P^{-1})^4 = P D^4 P^{-1}$. Lũy thừa ma trận đường chéo: $D^4 = \\begin{bmatrix} 1^4 & 0 \\\\ 0 & 2^4 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 0 & 16 \\end{bmatrix}$."
    },
    {
        "question": "Số chiều của hạt nhân $\\operatorname{Ker} f$ của ánh xạ tuyến tính $f$ còn được gọi là:",
        "options": [
            {"key": "A", "text": "Số khuyết (nullity) của $f$"},
            {"key": "B", "text": "Hạng (rank) của $f$"},
            {"key": "C", "text": "Vết (trace) của $f$"},
            {"key": "D", "text": "Chỉ số quán tính của $f$"}
        ],
        "correct": "A",
        "explanation": "Theo thuật ngữ chuẩn: $\\dim(\\operatorname{Ker} f)$ được gọi là số khuyết (nullity), còn $\\dim(\\operatorname{Im} f)$ được gọi là hạng (rank)."
    },
    {
        "question": "Cho ma trận vuông $A$ thỏa mãn $A^2 = I$ (ma trận đối hợp). Các giá trị riêng của $A$ chỉ có thể là:",
        "options": [
            {"key": "A", "text": "$1$ hoặc $-1$"},
            {"key": "B", "text": "$0$ hoặc $1$"},
            {"key": "C", "text": "Số phức bất kỳ"},
            {"key": "D", "text": "Chỉ có thể bằng $1$"}
        ],
        "correct": "A",
        "explanation": "Nếu $\\lambda$ là giá trị riêng thì $A^2 v = \\lambda^2 v = I v = v \\Rightarrow \\lambda^2 = 1 \\Leftrightarrow \\lambda = \\pm 1$."
    },
    {
        "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^3 \\to \\mathbb{R}^3$ có ma trận chính tắc $A$ với $\\det A = 5$. Khẳng định nào sau đây đúng?",
        "options": [
            {"key": "A", "text": "$f$ là một đẳng cấu biến $\\mathbb{R}^3$ thành $\\mathbb{R}^3$"},
            {"key": "B", "text": "$\\dim(\\operatorname{Ker} f) = 1$"},
            {"key": "C", "text": "$\\dim(\\operatorname{Im} f) = 2$"},
            {"key": "D", "text": "$f$ không là đơn ánh"}
        ],
        "correct": "A",
        "explanation": "Vì $\\det A = 5 \\neq 0$, ma trận $A$ khả nghịch, tức hạng $r(A) = 3$. Do đó $\\operatorname{Ker} f = \\{0\\}$ (đơn ánh) và $\\operatorname{Im} f = \\mathbb{R}^3$ (toàn ánh). Vậy $f$ là song ánh tuyến tính, tức một đẳng cấu."
    },
    {
        "question": "Không gian riêng $E_\\lambda$ ứng với giá trị riêng $\\lambda$ của toán tử tuyến tính $f: V \\to V$ là:",
        "options": [
            {"key": "A", "text": "Tập hợp tất cả các véc tơ riêng ứng với $\\lambda$ cùng với véc tơ không $\\vec{0}$"},
            {"key": "B", "text": "Chỉ tập hợp các véc tơ riêng ứng với $\\lambda$ (không chứa $\\vec{0}$)"},
            {"key": "C", "text": "Tập hợp các giá trị riêng"},
            {"key": "D", "text": "Toàn bộ không gian $V$"}
        ],
        "correct": "A",
        "explanation": "Theo định nghĩa, không gian riêng $E_\\lambda = \\operatorname{Ker}(f - \\lambda I)$ là một không gian véc tơ con, bao gồm tất cả các véc tơ riêng ứng với $\\lambda$ cùng với véc tơ không $\\vec{0}$."
    }
]
print(f"Topic 5 generated {len(questions_topic5)} questions")
