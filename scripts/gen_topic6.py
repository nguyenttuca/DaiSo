# gen_topic6.py
# 28 new high quality questions for Topic 6: KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG

questions_topic6 = [
    {
        "question": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng chính tắc, độ dài (chuẩn) của véc tơ $u = (2, -1, 2)$ là:",
        "options": [
            {"key": "A", "text": "$3$"},
            {"key": "B", "text": "$9$"},
            {"key": "C", "text": "$\\sqrt{5}$"},
            {"key": "D", "text": "$5$"}
        ],
        "correct": "A",
        "explanation": "Độ dài chuẩn của véc tơ $u$ được tính bởi $\|u\| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$."
    },
    {
        "question": "Góc $\\theta$ giữa hai véc tơ $u = (1, 1, 0)$ và $v = (0, 1, 1)$ trong $\\mathbb{R}^3$ (với tích vô hướng chính tắc) bằng:",
        "options": [
            {"key": "A", "text": "$60^\\circ$ (hay $\\pi/3$)"},
            {"key": "B", "text": "$45^\\circ$ (hay $\\pi/4$)"},
            {"key": "C", "text": "$90^\\circ$ (hay $\\pi/2$)"},
            {"key": "D", "text": "$30^\\circ$ (hay $\\pi/6$)"}
        ],
        "correct": "A",
        "explanation": "Ta có $\\langle u, v \\rangle = 1 \\cdot 0 + 1 \\cdot 1 + 0 \\cdot 1 = 1$. Độ dài $\|u\| = \\sqrt{1^2 + 1^2 + 0} = \\sqrt{2}$ và $\|v\| = \\sqrt{0 + 1^2 + 1^2} = \\sqrt{2}$. Do đó $\\cos\\theta = \\dfrac{\\langle u, v \\rangle}{\|u\| \|v\|} = \\dfrac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\dfrac{1}{2} \\Rightarrow \\theta = 60^\\circ$."
    },
    {
        "question": "Hai véc tơ $u = (1, m, -2)$ và $v = (2, 3, 4)$ trong $\\mathbb{R}^3$ **trực giao** với nhau khi và chỉ khi:",
        "options": [
            {"key": "A", "text": "$m = 2$"},
            {"key": "B", "text": "$m = -2$"},
            {"key": "C", "text": "$m = 0$"},
            {"key": "D", "text": "$m = 6$"}
        ],
        "correct": "A",
        "explanation": "Hai véc tơ trực giao khi và chỉ khi tích vô hướng của chúng bằng 0:\n$\\langle u, v \\rangle = 1 \\cdot 2 + m \\cdot 3 + (-2) \\cdot 4 = 2 + 3m - 8 = 3m - 6 = 0 \\Leftrightarrow m = 2$."
    },
    {
        "question": "Bất đẳng thức Cauchy - Schwarz trong không gian Euclide phát biểu rằng:",
        "options": [
            {"key": "A", "text": "$|\\langle u, v \\rangle| \\le \|u\| \\cdot \|v\|$"},
            {"key": "B", "text": "$|\\langle u, v \\rangle| \\ge \|u\| \\cdot \|v\|$"},
            {"key": "C", "text": "$\|u + v\| \\le \|u\| - \|v\|$"},
            {"key": "D", "text": "$\\langle u, v \\rangle = \|u\| \\cdot \|v\| \\sin\\theta$"}
        ],
        "correct": "A",
        "explanation": "Bất đẳng thức Cauchy - Schwarz cơ bản: Với mọi $u, v$ trong không gian Euclide, ta có $|\\langle u, v \\rangle| \\le \|u\| \\cdot \|v\|$. Dấu bằng xảy ra khi và chỉ khi $u$ và $v$ phụ thuộc tuyến tính."
    },
    {
        "question": "Định lý Pythagore trong không gian Euclide: Nếu hai véc tơ $u, v$ trực giao với nhau ($u \\perp v$) thì:",
        "options": [
            {"key": "A", "text": "$\|u + v\|^2 = \|u\|^2 + \|v\|^2$"},
            {"key": "B", "text": "$\|u + v\| = \|u\| + \|v\|$"},
            {"key": "C", "text": "$\|u + v\|^2 = \|u\|^2 - \|v\|^2$"},
            {"key": "D", "text": "$\\|u + v\\| = \\sqrt{\\|u\\| \\|v\\|}$"}
        ],
        "correct": "A",
        "explanation": "Ta có $\|u + v\|^2 = \\langle u+v, u+v \\rangle = \|u\|^2 + 2\\langle u, v \\rangle + \|v\|^2$. Khi $u \\perp v \\Rightarrow \\langle u, v \\rangle = 0$, suy ra $\|u + v\|^2 = \|u\|^2 + \|v\|^2$."
    },
    {
        "question": "Một hệ véc tơ $E = \\{e_1, e_2, \\dots, e_n\\}$ được gọi là **hệ trực chuẩn** (orthonormal) nếu:",
        "options": [
            {"key": "A", "text": "Các véc tơ đôi một trực giao và đều có độ dài bằng 1: $\\langle e_i, e_j \\rangle = \\delta_{ij}$"},
            {"key": "B", "text": "Các véc tơ chỉ cần đôi một trực giao với nhau"},
            {"key": "C", "text": "Các véc tơ chỉ cần có độ dài bằng 1"},
            {"key": "D", "text": "Tích vô hướng của mọi cặp véc tơ đều bằng 1"}
        ],
        "correct": "A",
        "explanation": "Theo định nghĩa, hệ trực chuẩn là hệ véc tơ vừa trực giao (đôi một vuông góc) vừa được chuẩn hóa (độ dài bằng 1): $\\langle e_i, e_j \\rangle = 1$ khi $i=j$ và $= 0$ khi $i \\neq j$."
    },
    {
        "question": "Hình chiếu trực giao của véc tơ $u$ lên đường thẳng sinh bởi véc tơ khác không $v$ được tính bởi công thức:",
        "options": [
            {"key": "A", "text": "$\\operatorname{proj}_v(u) = \\dfrac{\\langle u, v \\rangle}{\\|v\\|^2} v$"},
            {"key": "B", "text": "$\\operatorname{proj}_v(u) = \\dfrac{\\langle u, v \\rangle}{\\|v\\|} v$"},
            {"key": "C", "text": "$\\operatorname{proj}_v(u) = \\langle u, v \\rangle v$"},
            {"key": "D", "text": "$\\operatorname{proj}_v(u) = \\dfrac{\\langle u, v \\rangle}{\\|u\\|^2} u$"}
        ],
        "correct": "A",
        "explanation": "Công thức hình chiếu trực giao của $u$ lên phương của $v$ là $\\operatorname{proj}_v(u) = \\dfrac{\\langle u, v \\rangle}{\\|v\\|^2} v$."
    },
    {
        "question": "Quá trình trực giao hóa Gram - Schmidt dùng để:",
        "options": [
            {"key": "A", "text": "Biến đổi một cơ sở tùy ý thành một cơ sở trực giao"},
            {"key": "B", "text": "Tính định thức ma trận"},
            {"key": "C", "text": "Tìm ma trận nghịch đảo"},
            {"key": "D", "text": "Giải hệ phương trình tuyến tính"}
        ],
        "correct": "A",
        "explanation": "Thuật toán Gram - Schmidt là phương pháp chuẩn hóa trong không gian Euclide, cho phép biến đổi một cơ sở bất kỳ $\\{u_1, u_2, \\dots, u_n\\}$ thành một cơ sở trực giao $\\{v_1, v_2, \\dots, v_n\\}$ sinh ra cùng không gian."
    },
    {
        "question": "Áp dụng quá trình Gram - Schmidt cho hệ $\\{u_1 = (1, 1), \\, u_2 = (1, 3)\\}$ trong $\\mathbb{R}^2$. Véc tơ trực giao $v_2$ là:",
        "options": [
            {"key": "A", "text": "$(-1, 1)$"},
            {"key": "B", "text": "$(1, -1)$"},
            {"key": "C", "text": "$(0, 2)$"},
            {"key": "D", "text": "$(2, 2)$"}
        ],
        "correct": "A",
        "explanation": "Ta lấy $v_1 = u_1 = (1, 1)$. Khi đó:\n$v_2 = u_2 - \\dfrac{\\langle u_2, v_1 \\rangle}{\\|v_1\\|^2} v_1$.\nTính $\\langle u_2, v_1 \\rangle = 1 \\cdot 1 + 3 \\cdot 1 = 4$, $\\|v_1\\|^2 = 1^2 + 1^2 = 2$.\nSuy ra $v_2 = (1, 3) - \\dfrac{4}{2}(1, 1) = (1, 3) - (2, 2) = (-1, 1)$."
    },
    {
        "question": "Cho $W$ là không gian con của không gian Euclide $V$ có số chiều $n$. Số chiều của phần bù trực giao $W^\\perp$ thỏa mãn:",
        "options": [
            {"key": "A", "text": "$\\dim W^\\perp = n - \\dim W$"},
            {"key": "B", "text": "$\\dim W^\\perp = \\dim W$"},
            {"key": "C", "text": "$\\dim W^\\perp = n + \\dim W$"},
            {"key": "D", "text": "$\\dim W^\\perp = 0$"}
        ],
        "correct": "A",
        "explanation": "Trong không gian Euclide hữu hạn chiều $V$, ta luôn có $V = W \\oplus W^\\perp$. Do đó $\\dim W + \\dim W^\\perp = \\dim V = n \\Rightarrow \\dim W^\\perp = n - \\dim W$."
    },
    {
        "question": "Phần bù trực giao của đường thẳng $W = \\operatorname{span}\\{(1, 2, 3)\\}$ trong $\\mathbb{R}^3$ là:",
        "options": [
            {"key": "A", "text": "Mặt phẳng $x + 2y + 3z = 0$"},
            {"key": "B", "text": "Mặt phẳng $x + 2y + 3z = 1$"},
            {"key": "C", "text": "Đường thẳng $x = 2y = 3z$"},
            {"key": "D", "text": "Gốc tọa độ $\\{(0,0,0)\\}$"}
        ],
        "correct": "A",
        "explanation": "Tập hợp các véc tơ $(x, y, z)$ trực giao với $(1, 2, 3)$ là các véc tơ thỏa mãn tích vô hướng $\\langle (x, y, z), (1, 2, 3) \\rangle = 0 \\Leftrightarrow x + 2y + 3z = 0$. Đây là một mặt phẳng đi qua gốc tọa độ."
    },
    {
        "question": "Ma trận đối xứng $A$ tương ứng với dạng toàn phương $Q(x, y) = 3x^2 - 4xy + 5y^2$ là:",
        "options": [
            {"key": "A", "text": "$\\begin{bmatrix} 3 & -2 \\\\ -2 & 5 \\end{bmatrix}$"},
            {"key": "B", "text": "$\\begin{bmatrix} 3 & -4 \\\\ -4 & 5 \\end{bmatrix}$"},
            {"key": "C", "text": "$\\begin{bmatrix} 3 & 4 \\\\ 4 & 5 \\end{bmatrix}$"},
            {"key": "D", "text": "$\\begin{bmatrix} -2 & 3 \\\\ 5 & -2 \\end{bmatrix}$"}
        ],
        "correct": "A",
        "explanation": "Hệ số của $x^2$ là $a_{11} = 3$, hệ số của $y^2$ là $a_{22} = 5$. Hệ số của $xy$ là $-4$, chia đều cho hai phần tử đối xứng ngoài đường chéo: $a_{12} = a_{21} = -4/2 = -2$. Vậy ma trận là $\\begin{bmatrix} 3 & -2 \\\\ -2 & 5 \\end{bmatrix}$."
    },
    {
        "question": "Dạng toàn phương $Q(x_1, x_2) = ax_1^2 + 2bx_1 x_2 + cx_2^2$ là **xác định dương** khi và chỉ khi:",
        "options": [
            {"key": "A", "text": "$a > 0$ và $ac - b^2 > 0$"},
            {"key": "B", "text": "$a > 0$ và $ac - b^2 < 0$"},
            {"key": "C", "text": "$a < 0$ và $ac - b^2 > 0$"},
            {"key": "D", "text": "$a > 0$ và $c > 0$"}
        ],
        "correct": "A",
        "explanation": "Theo tiêu chuẩn Sylvester: Ma trận $A = \\begin{bmatrix} a & b \\\\ b & c \\end{bmatrix}$ xác định dương khi các định thức con chính dương: $\\Delta_1 = a > 0$ và $\\Delta_2 = \\det A = ac - b^2 > 0$."
    },
    {
        "question": "Dạng toàn phương nào sau đây là **xác định âm**?",
        "options": [
            {"key": "A", "text": "$Q(x, y) = -x^2 - 2y^2$"},
            {"key": "B", "text": "$Q(x, y) = -x^2 + 2y^2$"},
            {"key": "C", "text": "$Q(x, y) = x^2 + 2y^2$"},
            {"key": "D", "text": "$Q(x, y) = -(x - y)^2$"}
        ],
        "correct": "A",
        "explanation": "$Q(x, y) = -x^2 - 2y^2 = -(x^2 + 2y^2) < 0$ với mọi $(x, y) \\neq (0, 0)$. Do đó $Q$ xác định âm. Phương án D chỉ nửa xác định âm (bằng 0 khi $x=y$)."
    },
    {
        "question": "Theo tiêu chuẩn Sylvester, dạng toàn phương 3 biến có ma trận $A$ là **xác định âm** khi và chỉ khi các định thức con chính thỏa mãn:",
        "options": [
            {"key": "A", "text": "$\\Delta_1 < 0, \\, \\Delta_2 > 0, \\, \\Delta_3 < 0$"},
            {"key": "B", "text": "$\\Delta_1 < 0, \\, \\Delta_2 < 0, \\, \\Delta_3 < 0$"},
            {"key": "C", "text": "$\\Delta_1 > 0, \\, \\Delta_2 > 0, \\, \\Delta_3 > 0$"},
            {"key": "D", "text": "$\\Delta_1 > 0, \\, \\Delta_2 < 0, \\, \\Delta_3 > 0$"}
        ],
        "correct": "A",
        "explanation": "Tiêu chuẩn Sylvester cho ma trận xác định âm đòi hỏi các định thức con chính đan dấu, bắt đầu bằng dấu âm: $(-1)^k \\Delta_k > 0$, tức là $\\Delta_1 < 0, \\Delta_2 > 0, \\Delta_3 < 0$."
    },
    {
        "question": "Tìm điều kiện của tham số $m$ để dạng toàn phương $Q(x, y) = x^2 + 2mxy + 4y^2$ xác định dương:",
        "options": [
            {"key": "A", "text": "$-2 < m < 2$"},
            {"key": "B", "text": "$m > 2$ hoặc $m < -2$"},
            {"key": "C", "text": "$m = 2$"},
            {"key": "D", "text": "$-4 < m < 4$"}
        ],
        "correct": "A",
        "explanation": "Ma trận $A = \\begin{bmatrix} 1 & m \\\\ m & 4 \\end{bmatrix}$. Ta có $\\Delta_1 = 1 > 0$, $\\Delta_2 = 4 - m^2 > 0 \\Leftrightarrow m^2 < 4 \\Leftrightarrow -2 < m < 2$."
    },
    {
        "question": "Đưa dạng toàn phương $Q(x_1, x_2) = x_1^2 + 4x_1 x_2 + 3x_2^2$ về dạng chính tắc bằng phương pháp Lagrange:",
        "options": [
            {"key": "A", "text": "$(x_1 + 2x_2)^2 - x_2^2$"},
            {"key": "B", "text": "$(x_1 + 2x_2)^2 + x_2^2$"},
            {"key": "C", "text": "$(x_1 + x_2)^2 + 2x_2^2$"},
            {"key": "D", "text": "$(x_1 - 2x_2)^2 - x_2^2$"}
        ],
        "correct": "A",
        "explanation": "Nhóm chứa $x_1$: $x_1^2 + 4x_1 x_2 = (x_1 + 2x_2)^2 - 4x_2^2$. Thay vào biểu thức ta được: $Q = (x_1 + 2x_2)^2 - 4x_2^2 + 3x_2^2 = (x_1 + 2x_2)^2 - x_2^2$."
    },
    {
        "question": "Trong câu hỏi trên, cặp chỉ số quán tính $(p, q)$ (dương, âm) của dạng toàn phương $Q$ là:",
        "options": [
            {"key": "A", "text": "$(1, 1)$"},
            {"key": "B", "text": "$(2, 0)$"},
            {"key": "C", "text": "$(0, 2)$"},
            {"key": "D", "text": "$(1, 0)$"}
        ],
        "correct": "A",
        "explanation": "Dạng chính tắc là $y_1^2 - y_2^2$ có 1 bình phương mang hệ số dương ($+1$) và 1 bình phương mang hệ số âm ($-1$). Do đó $p = 1, q = 1$."
    },
    {
        "question": "Dạng toàn phương có dạng chính tắc $y_1^2 - y_2^2$ được xếp vào loại:",
        "options": [
            {"key": "A", "text": "Không xác định dấu (indefinite)"},
            {"key": "B", "text": "Xác định dương"},
            {"key": "C", "text": "Xác định âm"},
            {"key": "D", "text": "Nửa xác định dương"}
        ],
        "correct": "A",
        "explanation": "Khi cả chỉ số quán tính dương $p > 0$ và chỉ số quán tính âm $q > 0$, dạng toàn phương có thể nhận cả giá trị dương lẫn âm tùy thuộc véc tơ đầu vào. Do đó nó là dạng không xác định dấu (indefinite)."
    },
    {
        "question": "Định lý luật quán tính Jacobi - Sylvester khẳng định rằng:",
        "options": [
            {"key": "A", "text": "Cặp chỉ số quán tính $(p, q)$ không phụ thuộc vào phép biến đổi tọa độ không suy biến đưa về dạng chính tắc"},
            {"key": "B", "text": "Mọi dạng toàn phương đều có $p = q$"},
            {"key": "C", "text": "Mọi dạng toàn phương đều xác định dương"},
            {"key": "D", "text": "Chỉ số quán tính bằng định thức của ma trận"}
        ],
        "correct": "A",
        "explanation": "Định lý luật quán tính của Sylvester phát biểu rằng: Số các hệ số dương ($p$) và số các hệ số âm ($q$) trong dạng chính tắc của một dạng toàn phương thực là các bất biến, không phụ thuộc vào phương pháp biến đổi tọa độ không suy biến được chọn."
    },
    {
        "question": "Dạng toàn phương $Q(x, y, z) = x^2 + 2y^2 + 3z^2$ có ma trận chính tắc là:",
        "options": [
            {"key": "A", "text": "$\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 3 \\end{bmatrix}$"},
            {"key": "B", "text": "$\\begin{bmatrix} 1 & 1 & 0 \\\\ 1 & 2 & 1 \\\\ 0 & 1 & 3 \\end{bmatrix}$"},
            {"key": "C", "text": "$\\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 2 & 0 \\\\ 3 & 0 & 3 \\end{bmatrix}$"},
            {"key": "D", "text": "$\\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 2 & 0 \\\\ 3 & 0 & 0 \\end{bmatrix}$"}
        ],
        "correct": "A",
        "explanation": "Dạng này không có các tích chéo ($xy, yz, xz = 0$). Các phần tử đường chéo là hệ số các biến bình phương: $1, 2, 3$. Vậy ma trận là ma trận đường chéo $\\operatorname{diag}(1, 2, 3)$."
    },
    {
        "question": "Một ma trận vuông đối xứng $A$ xác định dương khi và chỉ khi:",
        "options": [
            {"key": "A", "text": "Tất cả các giá trị riêng của $A$ đều dương"},
            {"key": "B", "text": "Tất cả các giá trị riêng của $A$ đều âm"},
            {"key": "C", "text": "Định thức của $A$ dương"},
            {"key": "D", "text": "Vết của $A$ dương"}
        ],
        "correct": "A",
        "explanation": "Đối với ma trận đối xứng thực, ma trận xác định dương khi và chỉ khi tất cả các giá trị riêng của nó đều lớn hơn $0$ ($\\lambda_i > 0, \\forall i$)."
    },
    {
        "question": "Hạng của dạng toàn phương $Q$ có ma trận $A$ bằng:",
        "options": [
            {"key": "A", "text": "$p + q$ (tổng chỉ số quán tính dương và âm)"},
            {"key": "B", "text": "$p - q$"},
            {"key": "C", "text": "$p \\cdot q$"},
            {"key": "D", "text": "Số chiều của không gian"}
        ],
        "correct": "A",
        "explanation": "Hạng của dạng toàn phương chính là hạng của ma trận $A$ của nó, và trong dạng chính tắc có đúng $p$ hệ số $+1$ và $q$ hệ số $-1$ (các phần tử còn lại bằng $0$). Do đó $r(A) = p + q$."
    },
    {
        "question": "Tính khoảng cách Euclide giữa hai điểm $u = (1, 2, 3)$ và $v = (4, 2, -1)$ trong $\\mathbb{R}^3$:",
        "options": [
            {"key": "A", "text": "$5$"},
            {"key": "B", "text": "$\\sqrt{7}$"},
            {"key": "C", "text": "$25$"},
            {"key": "D", "text": "$3$"}
        ],
        "correct": "A",
        "explanation": "Khoảng cách $d(u, v) = \|u - v\| = \\sqrt{(1 - 4)^2 + (2 - 2)^2 + (3 - (-1))^2} = \\sqrt{(-3)^2 + 0 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$."
    },
    {
        "question": "Dạng song tuyến tính $B(u, v)$ được gọi là đối xứng nếu:",
        "options": [
            {"key": "A", "text": "$B(u, v) = B(v, u)$ với mọi $u, v$"},
            {"key": "B", "text": "$B(u, v) = -B(v, u)$ với mọi $u, v$"},
            {"key": "C", "text": "$B(u, u) = 0$ với mọi $u$"},
            {"key": "D", "text": "$B(u, v) = 1$ với mọi $u, v$"}
        ],
        "correct": "A",
        "explanation": "Theo định nghĩa, dạng song tuyến tính đối xứng thỏa mãn tính chất giao hoán: $B(u, v) = B(v, u)$ đối với mọi cặp véc tơ $u, v$ trong không gian."
    },
    {
        "question": "Mọi dạng toàn phương $Q(x)$ xác định trên $\\mathbb{R}^n$ đều có thể đưa về dạng chính tắc bằng một:",
        "options": [
            {"key": "A", "text": "Phép biến đổi trực giao"},
            {"key": "B", "text": "Phép tịnh tiến tọa độ"},
            {"key": "C", "text": "Phép nhân ma trận suy biến"},
            {"key": "D", "text": "Phép chiếu"}
        ],
        "correct": "A",
        "explanation": "Theo Định lý phổ, vì ma trận $A$ của dạng toàn phương luôn đối xứng thực, nó luôn chéo hóa trực giao được bởi một ma trận trực giao $P$ ($P^T P = I$). Đổi biến $x = P y$ đưa $Q$ về dạng chính tắc."
    },
    {
        "question": "Cho hai véc tơ trực chuẩn $e_1, e_2$ (tức $\|e_1\| = \|e_2\| = 1$ và $\\langle e_1, e_2 \\rangle = 0$). Khi đó $\|3e_1 - 4e_2\|$ bằng:",
        "options": [
            {"key": "A", "text": "$5$"},
            {"key": "B", "text": "$-1$"},
            {"key": "C", "text": "$7$"},
            {"key": "D", "text": "$25$"}
        ],
        "correct": "A",
        "explanation": "Theo định lý Pythagore trong không gian Euclide: $\|3e_1 - 4e_2\|^2 = \|3e_1\|^2 + \|-4e_2\|^2 = 3^2 \\|e_1\\|^2 + (-4)^2 \\|e_2\\|^2 = 9(1) + 16(1) = 25$. Suy ra $\|3e_1 - 4e_2\| = 5$."
    },
    {
        "question": "Dạng toàn phương $Q(x_1, x_2, x_3) = x_1^2 + x_2^2$ trong $\\mathbb{R}^3$ là:",
        "options": [
            {"key": "A", "text": "Nửa xác định dương (bán xác định dương)"},
            {"key": "B", "text": "Xác định dương"},
            {"key": "C", "text": "Xác định âm"},
            {"key": "D", "text": "Không xác định dấu"}
        ],
        "correct": "A",
        "explanation": "Ta có $Q \\ge 0$ với mọi $(x_1, x_2, x_3)$, nhưng khi lấy $x_1 = 0, x_2 = 0, x_3 = 1 \\neq 0$ thì $Q = 0$. Vì tồn tại véc tơ khác không có $Q = 0$ nên $Q$ không xác định dương nghiêm ngặt mà là nửa xác định dương (bán xác định dương)."
    }
]
print(f"Topic 6 generated {len(questions_topic6)} questions")
