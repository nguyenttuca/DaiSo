# gen_topic4.py
# 30 new high quality questions for Topic 4: KHÔNG GIAN VÉC TƠ

questions_topic4 = [
    {
        "question": "Tập hợp nào dưới đây là một **không gian véc tơ con** của $\\mathbb{R}^3$?",
        "options": [
            {"key": "A", "text": "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid 2x - 3y + z = 0\\}$"},
            {"key": "B", "text": "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x + y + z = 1\\}$"},
            {"key": "C", "text": "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x \\ge 0, y \\ge 0, z \\ge 0\\}$"},
            {"key": "D", "text": "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x^2 + y^2 + z^2 = 1\\}$"}
        ],
        "correct": "A",
        "explanation": "Phương trình $2x - 3y + z = 0$ là phương trình tuyến tính thuần nhất, biểu diễn một mặt phẳng đi qua gốc tọa độ $(0, 0, 0)$. Tập nghiệm của phương trình tuyến tính thuần nhất luôn là một không gian véc tơ con. Phương án B không chứa $\\vec{0}$, phương án C không đóng kín với phép nhân số âm, phương án D là phương trình phi tuyến."
    },
    {
        "question": "Số chiều của không gian véc tơ các ma trận vuông cỡ $3 \\times 3$, ký hiệu $M_{3}(\\mathbb{R})$, là:",
        "options": [
            {"key": "A", "text": "$9$"},
            {"key": "B", "text": "$3$"},
            {"key": "C", "text": "$6$"},
            {"key": "D", "text": "$8$"}
        ],
        "correct": "A",
        "explanation": "Không gian các ma trận $M_{m \\times n}(\\mathbb{R})$ có số chiều bằng $m \\times n$. Do đó $\\dim M_3(\\mathbb{R}) = 3 \\times 3 = 9$."
    },
    {
        "question": "Số chiều của không gian véc tơ các đa thức $P_n$ có bậc không vượt quá $n$ là:",
        "options": [
            {"key": "A", "text": "$n + 1$"},
            {"key": "B", "text": "$n$"},
            {"key": "C", "text": "$n - 1$"},
            {"key": "D", "text": "$2n$"}
        ],
        "correct": "A",
        "explanation": "Cơ sở chính tắc của $P_n$ là $\\{1, x, x^2, \\dots, x^n\\}$, gồm đúng $n + 1$ phần tử. Do đó $\\dim P_n = n + 1$."
    },
    {
        "question": "Trong không gian $\\mathbb{R}^3$, hệ véc tơ nào dưới đây **độc lập tuyến tính**?",
        "options": [
            {"key": "A", "text": "$S = \\{(1, 0, 0), \\, (0, 1, 0), \\, (1, 1, 1)\\}$"},
            {"key": "B", "text": "$S = \\{(1, 2, 3), \\, (2, 4, 6)\\}$"},
            {"key": "C", "text": "$S = \\{(1, 1, 1), \\, (2, 2, 2), \\, (0, 1, 2)\\}$"},
            {"key": "D", "text": "$S = \\{(1, 0, 0), \\, (0, 1, 0), \\, (0, 0, 1), \\, (1, 2, 3)\\}$"}
        ],
        "correct": "A",
        "explanation": "Xét ma trận lập bởi 3 véc tơ ở phương án A: $M = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 1 & 1 & 1 \\end{bmatrix}$ có $\\det M = 1 \\neq 0$, nên hệ độc lập tuyến tính. B có 2 véc tơ tỉ lệ; C có $(2,2,2) = 2(1,1,1)$; D có 4 véc tơ trong $\\mathbb{R}^3$ nên luôn phụ thuộc tuyến tính."
    },
    {
        "question": "Số lượng véc tơ tối đa trong một hệ véc tơ độc lập tuyến tính của không gian $\\mathbb{R}^n$ là:",
        "options": [
            {"key": "A", "text": "$n$"},
            {"key": "B", "text": "$n + 1$"},
            {"key": "C", "text": "$n - 1$"},
            {"key": "D", "text": "Vô hạn"}
        ],
        "correct": "A",
        "explanation": "Trong một không gian véc tơ $n$ chiều, mọi hệ gồm nhiều hơn $n$ véc tơ đều phụ thuộc tuyến tính. Do đó số lượng véc tơ tối đa độc lập tuyến tính là đúng $n$ (bằng số chiều của không gian)."
    },
    {
        "question": "Tìm $m$ để hệ véc tơ $S = \\{(1, 1, 1), \\, (1, 2, 3), \\, (2, 3, m)\\}$ trong $\\mathbb{R}^3$ phụ thuộc tuyến tính:",
        "options": [
            {"key": "A", "text": "$m = 4$"},
            {"key": "B", "text": "$m \\neq 4$"},
            {"key": "C", "text": "$m = 0$"},
            {"key": "D", "text": "$m = -4$"}
        ],
        "correct": "A",
        "explanation": "Tính định thức ma trận lập bởi 3 véc tơ:\n$\\det = \\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ 2 & 3 & m \\end{vmatrix} = 1(2m - 9) - 1(m - 6) + 1(3 - 4) = 2m - 9 - m + 6 - 1 = m - 4$.\nHệ phụ thuộc tuyến tính khi và chỉ khi định thức bằng $0 \\Leftrightarrow m - 4 = 0 \\Leftrightarrow m = 4$."
    },
    {
        "question": "Tọa độ của véc tơ $u = (5, 7)$ trong cơ sở $B = \\{v_1 = (1, 1), \\, v_2 = (1, 2)\\}$ của $\\mathbb{R}^2$ là:",
        "options": [
            {"key": "A", "text": "$(3, 2)$"},
            {"key": "B", "text": "$(2, 3)$"},
            {"key": "C", "text": "$(5, 7)$"},
            {"key": "D", "text": "$(1, 4)$"}
        ],
        "correct": "A",
        "explanation": "Biểu diễn $u = c_1 v_1 + c_2 v_2 \\Leftrightarrow \\begin{cases} c_1 + c_2 = 5 \\\\ c_1 + 2c_2 = 7 \\end{cases}$.\nLấy PT(2) trừ PT(1) ta được $c_2 = 2$. Thay lại ta được $c_1 = 3$. Vậy tọa độ là $(3, 2)$."
    },
    {
        "question": "Khẳng định nào dưới đây là **sai**?",
        "options": [
            {"key": "A", "text": "Mọi hệ véc tơ chứa véc tơ không $\\vec{0}$ đều độc lập tuyến tính"},
            {"key": "B", "text": "Mọi hệ véc tơ chứa véc tơ không $\\vec{0}$ đều phụ thuộc tuyến tính"},
            {"key": "C", "text": "Một hệ véc tơ là phụ thuộc tuyến tính khi và chỉ khi có ít nhất một véc tơ biểu diễn tuyến tính qua các véc tơ còn lại"},
            {"key": "D", "text": "Mọi bộ phận của một hệ véc tơ độc lập tuyến tính đều độc lập tuyến tính"}
        ],
        "correct": "A",
        "explanation": "Nếu hệ chứa véc tơ không $\\vec{0}$, ta có $1 \\cdot \\vec{0} + 0 \\cdot v_1 + \\dots = \\vec{0}$ với hệ số khác 0, do đó hệ luôn phụ thuộc tuyến tính. Khẳng định A nói 'độc lập tuyến tính' là sai."
    },
    {
        "question": "Cho hai không gian con $W_1, W_2$ của không gian $\\mathbb{R}^6$ có $\\dim W_1 = 4, \\dim W_2 = 3$ và $\\dim(W_1 + W_2) = 5$. Số chiều của không gian giao $\\dim(W_1 \\cap W_2)$ là:",
        "options": [
            {"key": "A", "text": "$2$"},
            {"key": "B", "text": "$1$"},
            {"key": "C", "text": "$3$"},
            {"key": "D", "text": "$0$"}
        ],
        "correct": "A",
        "explanation": "Theo công thức số chiều Grassmann: $\\dim(W_1 + W_2) = \\dim W_1 + \\dim W_2 - \\dim(W_1 \\cap W_2)$. Suy ra $\\dim(W_1 \\cap W_2) = 4 + 3 - 5 = 2$."
    },
    {
        "question": "Cho $W_1$ và $W_2$ là hai không gian véc tơ con. Tổng $W_1 + W_2$ là **tổng trực tiếp** $W_1 \\oplus W_2$ khi và chỉ khi:",
        "options": [
            {"key": "A", "text": "$W_1 \\cap W_2 = \\{\\vec{0}\\}$"},
            {"key": "B", "text": "$W_1 \\cap W_2 = \\emptyset$"},
            {"key": "C", "text": "$\\dim(W_1) = \\dim(W_2)$"},
            {"key": "D", "text": "$W_1 \\cup W_2 = V$"}
        ],
        "correct": "A",
        "explanation": "Theo định nghĩa, tổng của hai không gian con là tổng trực tiếp khi và chỉ khi giao của chúng chỉ gồm duy nhất véc tơ không: $W_1 \\cap W_2 = \\{\\vec{0}\\}$ (tức $\\dim(W_1 \\cap W_2) = 0$)."
    },
    {
        "question": "Cơ sở chính tắc của không gian đa thức $P_2$ là:",
        "options": [
            {"key": "A", "text": "$\\{1, x, x^2\\}$"},
            {"key": "B", "text": "$\\{x, x^2\\}$"},
            {"key": "C", "text": "$\\{1, x\\}$"},
            {"key": "D", "text": "$\\{1+x, x+x^2, 1+x^2\\}$"}
        ],
        "correct": "A",
        "explanation": "Mọi đa thức bậc không quá 2 có dạng $a_0 + a_1 x + a_2 x^2$, biểu diễn duy nhất qua hệ đơn thức $\\{1, x, x^2\\}$. Đây chính là cơ sở chính tắc của $P_2$."
    },
    {
        "question": "Số chiều của không gian véc tơ con các ma trận đối xứng cấp 2 trong $M_2(\\mathbb{R})$ là:",
        "options": [
            {"key": "A", "text": "$3$"},
            {"key": "B", "text": "$2$"},
            {"key": "C", "text": "$4$"},
            {"key": "D", "text": "$1$"}
        ],
        "correct": "A",
        "explanation": "Ma trận đối xứng cấp 2 có dạng $\\begin{bmatrix} a & b \\\\ b & d \\end{bmatrix}$, phụ thuộc vào 3 tham số tự do $a, b, d$. Do đó số chiều của không gian này là 3."
    },
    {
        "question": "Hệ véc tơ nào dưới đây là một **cơ sở** của $\\mathbb{R}^2$?",
        "options": [
            {"key": "A", "text": "$\\{(1, 2), \\, (3, 4)\\}$"},
            {"key": "B", "text": "$\\{(1, 2), \\, (2, 4)\\}$"},
            {"key": "C", "text": "$\\{(1, 0)\\}$"},
            {"key": "D", "text": "$\\{(1, 1), \\, (2, 2), \\, (3, 3)\\}$"}
        ],
        "correct": "A",
        "explanation": "Hai véc tơ trong $\\mathbb{R}^2$ lập thành một cơ sở khi và chỉ khi chúng độc lập tuyến tính, tức định thức $\\begin{vmatrix} 1 & 3 \\\\ 2 & 4 \\end{vmatrix} = 4 - 6 = -2 \\neq 0$. B có 2 véc tơ tỉ lệ; C chỉ có 1 véc tơ; D có 3 véc tơ."
    },
    {
        "question": "Cho $V$ là không gian véc tơ $n$ chiều và $S$ là một hệ gồm đúng $n$ véc tơ của $V$. Khẳng định nào dưới đây đúng?",
        "options": [
            {"key": "A", "text": "$S$ là cơ sở của $V$ khi và chỉ khi $S$ độc lập tuyến tính"},
            {"key": "B", "text": "$S$ độc lập tuyến tính chưa chắc đã là cơ sở của $V$"},
            {"key": "C", "text": "$S$ sinh ra $V$ chưa chắc đã là cơ sở của $V$"},
            {"key": "D", "text": "$S$ luôn luôn là một cơ sở của $V$"}
        ],
        "correct": "A",
        "explanation": "Trong không gian $n$ chiều, một hệ gồm đúng $n$ véc tơ là cơ sở khi và chỉ khi nó độc lập tuyến tính (hoặc tương đương khi và chỉ khi nó là hệ sinh)."
    },
    {
        "question": "Tìm một cơ sở của không gian nghiệm của phương trình $x - 2y + 3z = 0$ trong $\\mathbb{R}^3$:",
        "options": [
            {"key": "A", "text": "$\\{(2, 1, 0), \\, (-3, 0, 1)\\}$"},
            {"key": "B", "text": "$\\{(1, -2, 3)\\}$"},
            {"key": "C", "text": "$\\{(1, 0, 0), \\, (0, 1, 0)\\}$"},
            {"key": "D", "text": "$\\{(2, 1, 0), \\, (3, 0, 1)\\}$"}
        ],
        "correct": "A",
        "explanation": "Từ $x = 2y - 3z$, mỗi nghiệm có dạng $(2y - 3z, y, z) = y(2, 1, 0) + z(-3, 0, 1)$. Hai véc tơ $(2, 1, 0)$ và $(-3, 0, 1)$ độc lập tuyến tính và tạo thành một cơ sở."
    },
    {
        "question": "Cho $B = \\{e_1, e_2\\}$ và $B' = \\{e_1', e_2'\\}$ với $e_1' = 2e_1 + e_2$ và $e_2' = e_1 + 3e_2$. Ma trận chuyển cơ sở từ $B$ sang $B'$ là:",
        "options": [
            {"key": "A", "text": "$\\begin{bmatrix} 2 & 1 \\\\ 1 & 3 \\end{bmatrix}$"},
            {"key": "B", "text": "$\\begin{bmatrix} 2 & 1 \\\\ 3 & 1 \\end{bmatrix}$"},
            {"key": "C", "text": "$\\begin{bmatrix} 3 & -1 \\\\ -1 & 2 \\end{bmatrix}$"},
            {"key": "D", "text": "$\\begin{bmatrix} 1 & 2 \\\\ 3 & 1 \\end{bmatrix}$"}
        ],
        "correct": "A",
        "explanation": "Ma trận chuyển cơ sở từ $B$ sang $B'$ có các cột là tọa độ của các véc tơ của $B'$ theo cơ sở $B$: cột 1 là $\\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}$, cột 2 là $\\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix}$. Vậy $P = \\begin{bmatrix} 2 & 1 \\\\ 1 & 3 \\end{bmatrix}$."
    },
    {
        "question": "Nếu ma trận chuyển cơ sở từ $B$ sang $B'$ là $P$, thì công thức liên hệ giữa tọa độ của véc tơ $x$ trong cơ sở $B$ và $B'$ là:",
        "options": [
            {"key": "A", "text": "$[x]_B = P [x]_{B'}$"},
            {"key": "B", "text": "$[x]_{B'} = P [x]_B$"},
            {"key": "C", "text": "$[x]_B = P^{-1} [x]_{B'}$"},
            {"key": "D", "text": "$[x]_B = P^T [x]_{B'}$"}
        ],
        "correct": "A",
        "explanation": "Theo công thức đổi tọa độ khi đổi cơ sở: $[x]_B = P [x]_{B'}$ (hay $[x]_{B'} = P^{-1}[x]_B$)."
    },
    {
        "question": "Tập hợp các véc tơ $\\{(x, y, z) \\in \\mathbb{R}^3 \\mid xy = 0\\}$ có phải là một không gian con của $\\mathbb{R}^3$ không?",
        "options": [
            {"key": "A", "text": "Không, vì không đóng kín với phép cộng véc tơ"},
            {"key": "B", "text": "Có, vì chứa véc tơ không"},
            {"key": "C", "text": "Có, vì đóng kín với phép nhân số thực"},
            {"key": "D", "text": "Không, vì không chứa véc tơ không"}
        ],
        "correct": "A",
        "explanation": "Lấy $u = (1, 0, 0)$ thỏa $xy = 1 \\cdot 0 = 0$, $v = (0, 1, 0)$ thỏa $xy = 0 \\cdot 1 = 0$. Nhưng tổng $u + v = (1, 1, 0)$ có $xy = 1 \\cdot 1 = 1 \\neq 0$, không thuộc tập hợp. Do đó tập này không đóng kín với phép cộng nên không phải không gian con."
    },
    {
        "question": "Hạng của một hệ véc tơ $S = \\{v_1, v_2, \\dots, v_k\\}$ được định nghĩa là:",
        "options": [
            {"key": "A", "text": "Số lượng tối đa các véc tơ độc lập tuyến tính trong hệ $S$"},
            {"key": "B", "text": "Tổng số véc tơ $k$ trong hệ"},
            {"key": "C", "text": "Số chiều của không gian chứa hệ $S$"},
            {"key": "D", "text": "Số véc tơ khác không trong hệ"}
        ],
        "correct": "A",
        "explanation": "Hạng của một hệ véc tơ là số chiều của không gian con sinh bởi hệ đó, và bằng số lượng véc tơ độc lập tuyến tính cực đại có trong hệ."
    },
    {
        "question": "Cho $W = \\operatorname{span}\\{(1, 2, 1), \\, (2, 4, 2)\\}$. Số chiều $\\dim W$ bằng:",
        "options": [
            {"key": "A", "text": "$1$"},
            {"key": "B", "text": "$2$"},
            {"key": "C", "text": "$3$"},
            {"key": "D", "text": "$0$"}
        ],
        "correct": "A",
        "explanation": "Véc tơ thứ hai gấp 2 lần véc tơ thứ nhất: $(2, 4, 2) = 2(1, 2, 1)$. Do đó hệ sinh chỉ có 1 véc tơ độc lập tuyến tính, suy ra $\\dim W = 1$."
    },
    {
        "question": "Cho $V$ là không gian véc tơ và $W$ là không gian con của $V$. Khẳng định nào sau đây là **đúng**?",
        "options": [
            {"key": "A", "text": "$\\dim W \\le \\dim V$"},
            {"key": "B", "text": "$\\dim W > \\dim V$"},
            {"key": "C", "text": "Nếu $\\dim W = \\dim V$ (với $V$ hữu hạn chiều) thì $W$ chưa chắc bằng $V$"},
            {"key": "D", "text": "$\\dim W$ luôn nhỏ hơn hẳn $\\dim V$"}
        ],
        "correct": "A",
        "explanation": "Số chiều của không gian con không bao giờ vượt quá số chiều của không gian chứa nó: $\\dim W \\le \\dim V$. Hơn nữa, nếu $\\dim W = \\dim V$ (hữu hạn chiều) thì $W = V$."
    },
    {
        "question": "Trong không gian $\\mathbb{R}^4$, cho $u = (1, 2, 3, 4)$ và $v = (2, 4, 6, 8)$. Khẳng định nào sau đây đúng?",
        "options": [
            {"key": "A", "text": "Hệ $\\{u, v\\}$ phụ thuộc tuyến tính"},
            {"key": "B", "text": "Hệ $\\{u, v\\}$ độc lập tuyến tính"},
            {"key": "C", "text": "Hệ $\\{u, v\\}$ là một cơ sở của $\\mathbb{R}^4$"},
            {"key": "D", "text": "$\\dim(\\operatorname{span}\\{u, v\\}) = 2$"}
        ],
        "correct": "A",
        "explanation": "Vì $v = 2u$, hai véc tơ tỉ lệ với nhau nên hệ $\\{u, v\\}$ phụ thuộc tuyến tính."
    },
    {
        "question": "Tìm tọa độ của đa thức $P(x) = 2 - 3x + 4x^2$ trong cơ sở chính tắc $\\{1, x, x^2\\}$ của $P_2$:",
        "options": [
            {"key": "A", "text": "$(2, -3, 4)$"},
            {"key": "B", "text": "$(4, -3, 2)$"},
            {"key": "C", "text": "$(2, 3, 4)$"},
            {"key": "D", "text": "$(-3, 2, 4)$"}
        ],
        "correct": "A",
        "explanation": "Đa thức $P(x) = 2 \\cdot (1) + (-3) \\cdot (x) + 4 \\cdot (x^2)$. Các hệ số tương ứng theo thứ tự của cơ sở chính tắc là $2, -3, 4$."
    },
    {
        "question": "Giao của hai không gian con bất kỳ $W_1$ và $W_2$ của không gian véc tơ $V$:",
        "options": [
            {"key": "A", "text": "Luôn luôn là một không gian con của $V$"},
            {"key": "B", "text": "Chưa chắc là một không gian con của $V$"},
            {"key": "C", "text": "Có thể là tập rỗng $\\emptyset$"},
            {"key": "D", "text": "Luôn có số chiều bằng $\\dim W_1 + \\dim W_2$"}
        ],
        "correct": "A",
        "explanation": "Theo định lý cơ bản về không gian con: giao của hai không gian con bất kỳ luôn luôn là một không gian con (và không bao giờ rỗng vì luôn chứa $\\vec{0}$)."
    },
    {
        "question": "Hợp của hai không gian con $W_1 \\cup W_2$ là một không gian con khi và chỉ khi:",
        "options": [
            {"key": "A", "text": "$W_1 \\subseteq W_2$ hoặc $W_2 \\subseteq W_1$"},
            {"key": "B", "text": "$W_1 \\cap W_2 = \\{\\vec{0}\\}$"},
            {"key": "C", "text": "$\\dim W_1 = \\dim W_2$"},
            {"key": "D", "text": "Luôn luôn là không gian con với mọi $W_1, W_2$"}
        ],
        "correct": "A",
        "explanation": "Hợp của hai không gian con nói chung không phải là không gian con. Nó là một không gian con khi và chỉ khi không gian này là tập con của không gian kia ($W_1 \\subseteq W_2$ hoặc $W_2 \\subseteq W_1$)."
    },
    {
        "question": "Không gian con sinh bởi tập rỗng $\\operatorname{span}(\\emptyset)$ bằng:",
        "options": [
            {"key": "A", "text": "$\\{\\vec{0}\\}$ (không gian tầm thường)"},
            {"key": "B", "text": "$\\emptyset$"},
            {"key": "C", "text": "Toàn bộ không gian $V$"},
            {"key": "D", "text": "Không xác định"}
        ],
        "correct": "A",
        "explanation": "Theo quy ước chuẩn của đại số tuyến tính, tổ hợp tuyến tính rỗng bằng véc tơ không $\\vec{0}$, do đó $\\operatorname{span}(\\emptyset) = \\{\\vec{0}\\}$ và $\\dim(\\{\\vec{0}\\}) = 0$."
    },
    {
        "question": "Cho ba véc tơ $u, v, w$ độc lập tuyến tính. Khẳng định nào sau đây đúng về hệ $\\{u + v, \\, v + w, \\, w + u\\}$?",
        "options": [
            {"key": "A", "text": "Hệ này cũng độc lập tuyến tính"},
            {"key": "B", "text": "Hệ này luôn phụ thuộc tuyến tính"},
            {"key": "C", "text": "Chỉ độc lập khi $u, v, w$ là các véc tơ đơn vị"},
            {"key": "D", "text": "Không đủ dữ kiện để kết luận"}
        ],
        "correct": "A",
        "explanation": "Xét ma trận hệ số biểu diễn theo $\\{u, v, w\\}$: $M = \\begin{bmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & 1 \\end{bmatrix}$. Ta có $\\det M = 1(1) + 1(1) = 2 \\neq 0$. Vì $\\det M \\neq 0$, hệ mới cũng độc lập tuyến tính."
    },
    {
        "question": "Số chiều của không gian con các ma trận phản đối xứng cấp 3 ($A^T = -A$) trong $M_3(\\mathbb{R})$ là:",
        "options": [
            {"key": "A", "text": "$3$"},
            {"key": "B", "text": "$6$"},
            {"key": "C", "text": "$9$"},
            {"key": "D", "text": "$1$"}
        ],
        "correct": "A",
        "explanation": "Ma trận phản đối xứng cấp 3 có đường chéo chính bằng $0$ ($a_{11}=a_{22}=a_{33}=0$) và $a_{ji} = -a_{ij}$, nên hoàn toàn được xác định bởi 3 phần tử ở tam giác trên: $a_{12}, a_{13}, a_{23}$. Do đó số chiều bằng 3."
    },
    {
        "question": "Cho hệ véc tơ $S = \\{(1, 0, 1), \\, (0, 1, 1), \\, (1, 1, 2)\\}$. Khẳng định nào sau đây đúng?",
        "options": [
            {"key": "A", "text": "Véc tơ thứ ba bằng tổng hai véc tơ đầu, hệ phụ thuộc tuyến tính"},
            {"key": "B", "text": "Hệ độc lập tuyến tính và là một cơ sở của $\\mathbb{R}^3$"},
            {"key": "C", "text": "$\\dim(\\operatorname{span}(S)) = 3$"},
            {"key": "D", "text": "Hệ sinh ra toàn bộ $\\mathbb{R}^3$"}
        ],
        "correct": "A",
        "explanation": "Ta thấy $(1, 0, 1) + (0, 1, 1) = (1, 1, 2)$. Vì một véc tơ là tổng của hai véc tơ kia, hệ phụ thuộc tuyến tính và $\\dim(\\operatorname{span}(S)) = 2 < 3$."
    },
    {
        "question": "Cho $V$ là không gian véc tơ có $\\dim V = 3$. Hệ nào sau đây chắc chắn **không thể** sinh ra $V$?",
        "options": [
            {"key": "A", "text": "Một hệ gồm 2 véc tơ"},
            {"key": "B", "text": "Một hệ gồm 3 véc tơ"},
            {"key": "C", "text": "Một hệ gồm 4 véc tơ"},
            {"key": "D", "text": "Một hệ gồm 5 véc tơ"}
        ],
        "correct": "A",
        "explanation": "Trong không gian $n$ chiều, một hệ sinh phải có ít nhất $n$ véc tơ. Ở đây $\\dim V = 3$, do đó bất kỳ hệ nào có ít hơn 3 véc tơ (như hệ gồm 2 véc tơ) đều không thể sinh ra $V$."
    }
]
print(f"Topic 4 generated {len(questions_topic4)} questions")
