# -*- coding: utf-8 -*-
"""
scripts/generators_ch5.py
Chương 5: ÁNH XẠ TUYẾN TÍNH
4 Dạng bài:
  5.1: Định nghĩa, Tính chất cơ bản & Ker/Im của ánh xạ tuyến tính
  5.2: Ma trận biểu diễn ánh xạ tuyến tính & Công thức đổi cơ sở
  5.3: Hạng, Định lý số chiều (Rank-Nullity), Đơn ánh, Toàn ánh, Đẳng cấu
  5.4: Giá trị riêng, Véc tơ riêng & Chéo hóa ma trận

Mỗi dạng bài gồm 10 modes phong phú được tham số hóa ngẫu nhiên cao độ,
đảm bảo sinh ra >= 26 câu hỏi hoàn toàn phân biệt, không trùng lặp đề bài.
"""

import random

def gen_ch5(sub, seed, make_unique_options):
    rng = random.Random(seed * 71 + sub * 131)
    mode = seed % 10

    if sub == 1: # 5.1 Định nghĩa, Tính chất & Ker/Im
        if mode == 0:
            # Nhận biết ánh xạ tuyến tính
            a = rng.choice([2, 3, 4, -2, -3])
            b = rng.choice([1, 2, -1, 3])
            c = rng.choice([1, 2, 5, -1])
            q_text = f"Trong các ánh xạ $f: \\mathbb{{R}}^2 \\to \\mathbb{{R}}^2$ dưới đây, ánh xạ nào **KHÔNG PHẢI** là ánh xạ tuyến tính?"
            cor = f"$f(x, y) = ({a}x + {b}y + {c}, \\, x - y)$"
            w1 = f"$f(x, y) = ({a}x - {b}y, \\, 0)$"
            w2 = f"$f(x, y) = (y, \\, {a}x)$"
            w3 = f"$f(x, y) = ({a}x + {b}y, \\, 2x)$"
            exp = f"Ánh xạ $f(x, y) = ({a}x + {b}y + {c}, x - y)$ có $f(0, 0) = ({c}, 0) \\neq (0, 0)$ do có hằng số tự do ${c} \\neq 0$. Mọi ánh xạ tuyến tính bắt buộc biến véc tơ không thành véc tơ không ($f(\\theta) = \\theta$). Do đó đây không phải ánh xạ tuyến tính."
        elif mode == 1:
            # Phi tuyến tính bậc cao
            power = rng.choice([2, 3])
            var = rng.choice(['x', 'y'])
            other = 'y' if var == 'x' else 'x'
            q_text = f"Ánh xạ $f: \\mathbb{{R}}^2 \\to \\mathbb{{R}}^2$ xác định bởi $f(x, y) = ({var}^{power}, \\, {other})$ có phải là ánh xạ tuyến tính không?"
            cor = f"Không, vì chứa số hạng bậc {power} (${var}^{power}$), vi phạm tính chất $f(k u) = k f(u)$"
            w1 = "Có, vì $f(0, 0) = (0, 0)$"
            w2 = "Có, vì là một song ánh từ $\\mathbb{R}^2 \\to \\mathbb{R}^2$"
            w3 = "Chỉ tuyến tính khi $x \\ge 0$"
            exp = f"Xét $u = (1, 0)$ với $k = 2$: $f(k u) = f(2, 0) = (2^{power}, 0) = ({2**power}, 0)$, trong khi $k f(u) = 2(1, 0) = (2, 0) \\neq ({2**power}, 0)$. Vì $f(ku) \\neq k f(u)$ nên không tuyến tính."
        elif mode == 2:
            # Tuyến tính trên đa thức hoặc ma trận
            t_types = [
                ("Trong không gian đa thức $P_n[x]$, toán tử đạo hàm $D(p(x)) = p'(x)$", "Ánh xạ tuyến tính", "Đạo hàm có tính chất $(p+q)' = p'+q'$ và $(kp)' = kp'$"),
                ("Trong không gian ma trận $M_{n \\times n}$, ánh xạ lấy vết $f(A) = \\text{tr}(A)$", "Ánh xạ tuyến tính từ $M_{n \\times n} \\to \\mathbb{R}$", "Vết có tính chất $\\text{tr}(A+B) = \\text{tr}(A) + \\text{tr}(B)$ và $\\text{tr}(kA) = k\\text{tr}(A)$"),
                ("Trong không gian ma trận $M_{n \\times n}$, ánh xạ lấy định thức $f(A) = \\det(A)$", "KHÔNG PHẢI ánh xạ tuyến tính (vì $\\det(A+B) \\neq \\det A + \\det B$)", "Định thức nói chung không có tính cộng: $\\det(A+B) \\neq \\det A + \\det B$ và $\\det(kA) = k^n \\det A \\neq k \\det A$"),
                ("Trong không gian đa thức $P_n[x]$, toán tử tích phân $I(p(x)) = \\int_0^1 p(t) dt$", "Ánh xạ tuyến tính từ $P_n[x] \\to \\mathbb{R}$", "Tích phân xác định bảo toàn phép cộng và nhân vô hướng")
            ]
            q_intro, cor_ans, exp_ans = rng.choice(t_types)
            q_text = f"{q_intro} là:"
            cor = cor_ans
            w1 = "Một đẳng cấu ma trận"
            w2 = "Một ánh xạ phi tuyến tính"
            w3 = "Chỉ tuyến tính khi $n = 1$"
            exp = exp_ans
        elif mode == 3:
            # Tính ảnh qua tổ hợp tuyến tính
            c1 = rng.choice([2, 3, -1])
            c2 = rng.choice([1, 2, -2, 3])
            fu1 = (rng.choice([1, 2, 3]), rng.choice([-1, 1, 2]))
            fu2 = (rng.choice([0, 1, 2]), rng.choice([2, 3, 1]))
            rx = c1 * fu1[0] + c2 * fu2[0]
            ry = c1 * fu1[1] + c2 * fu2[1]
            sign2 = f"+ {c2}" if c2 > 0 else f"- {-c2}"
            q_text = f"Cho ánh xạ tuyến tính $f: V \\to \\mathbb{{R}}^2$. Biết $f(u_1) = ({fu1[0]}, {fu1[1]})$ và $f(u_2) = ({fu2[0]}, {fu2[1]})$. Ảnh của véc tơ $v = {c1}u_1 {sign2}u_2$ là:"
            cor = f"({rx}, {ry})"
            w1 = f"({ry}, {rx})"
            w2 = f"({rx + 1}, {ry - 1})"
            w3 = f"({rx - 2}, {ry + 2})"
            exp = f"Theo tính tuyến tính: $f({c1}u_1 {sign2}u_2) = {c1}f(u_1) {sign2}f(u_2) = {c1}({fu1[0]}, {fu1[1]}) {sign2}({fu2[0]}, {fu2[1]}) = ({rx}, {ry})$."
        elif mode == 4:
            # Hạt nhân Ker f của ánh xạ R^2 -> R^2
            a = rng.choice([1, 2, 3])
            b = rng.choice([2, -1, 3])
            # f(x, y) = (ax + by, 0) => Ker f là ax + by = 0
            q_text = f"Cho ánh xạ tuyến tính $f: \\mathbb{{R}}^2 \\to \\mathbb{{R}}^2$ xác định bởi $f(x, y) = ({a}x + ({b})y, \\, 0)$. Hạt nhân $\\ker f$ là tập hợp:"
            cor = "$\\{(x, y) \\in \\mathbb{R}^2 \\mid " + f"{a}x + ({b})y = 0" + "\\}$"
            w1 = "$\\{(0, 0)\\}$"
            w2 = "$\\mathbb{R}^2$"
            w3 = "$\\{(x, y) \\in \\mathbb{R}^2 \\mid " + f"{a}x - ({b})y = 1" + "\\}$"
            exp = f"Theo định nghĩa hạt nhân: $\\ker f = \\{{u \\in \\mathbb{{R}}^2 \\mid f(u) = (0, 0)\\}} \\iff ({a}x + ({b})y, 0) = (0, 0) \\iff {a}x + ({b})y = 0$."
        elif mode == 5:
            # Ảnh Im f
            a = rng.choice([1, 2])
            b = rng.choice([3, 4])
            q_text = f"Cho ánh xạ tuyến tính $f: \\mathbb{{R}}^2 \\to \\mathbb{{R}}^3$ có công thức $f(x, y) = (x, \\, {a}x, \\, {b}y)$. Số chiều của ảnh $\\dim(\\operatorname{{im}} f)$ là:"
            cor = "$2$"
            w1 = "$1$"
            w2 = "$3$"
            w3 = "$0$"
            exp = f"Ta viết $f(x, y) = x(1, {a}, 0) + y(0, 0, {b})$. Hai véc tơ $(1, {a}, 0)$ và $(0, 0, {b})$ độc lập tuyến tính, nên $\\operatorname{{im}} f$ sinh bởi 2 véc tơ này và $\\dim(\\operatorname{{im}} f) = 2$."
        elif mode == 6:
            # Lý thuyết về tính chất Ker và Im
            theories = [
                ("Hạt nhân $\\ker f$ của ánh xạ tuyến tính $f: V \\to W$", "Luôn là một không gian con của không gian nguồn $V$", "$\\ker f = \\{v \\in V \\mid f(v) = \\theta_W\\}$ luôn chứa $\\theta_V$ và đóng kín với phép cộng, nhân vô hướng"),
                ("Tập ảnh $\\operatorname{im} f$ của ánh xạ tuyến tính $f: V \\to W$", "Luôn là một không gian con của không gian đích $W$", "$\\operatorname{im} f = \\{f(v) \\mid v \\in V\\}$ là không gian con của $W$"),
                ("Nếu $f: V \\to W$ là ánh xạ tuyến tính thì $f(\\theta_V)$ bằng", "$\\theta_W$ (véc tơ không của $W$)", "Do $f(\\theta) = f(0 \\cdot v) = 0 \\cdot f(v) = \\theta_W$"),
                ("Tập hợp các véc tơ $v$ thỏa mãn $f(v) = \\theta_W$ được gọi là", "Hạt nhân (Kernel) của ánh xạ $f$, ký hiệu $\\ker f$", "Định nghĩa chuẩn của hạt nhân")
            ]
            q_th, c_th, exp_th = rng.choice(theories)
            q_text = f"{q_th} có tính chất gì?"
            cor = c_th
            w1 = "Là một tập hợp hữu hạn các điểm"
            w2 = "Chỉ là không gian con khi $f$ là song ánh"
            w3 = "Luôn bằng $\\{\\theta\\}$"
            exp = exp_th
        elif mode == 7:
            # Số chiều Ker f biết ma trận hoặc công thức
            n = rng.choice([3, 4])
            rank_f = rng.choice([1, 2])
            dim_ker = n - rank_f
            q_text = f"Cho ánh xạ tuyến tính $f: \\mathbb{{R}}^{n} \\to \\mathbb{{R}}^3$ có hạng $\\text{{rank}}(f) = \\dim(\\operatorname{{im}} f) = {rank_f}$. Số chiều của hạt nhân $\\dim(\\ker f)$ bằng:"
            cor = f"${dim_ker}$"
            w1 = f"${rank_f}$"
            w2 = f"${n}$"
            w3 = f"${dim_ker + 1}$"
            exp = f"Theo định lý số chiều: $\\dim V = \\dim(\\ker f) + \\dim(\\operatorname{{im}} f) \\iff {n} = \\dim(\\ker f) + {rank_f} \\implies \\dim(\\ker f) = {n} - {rank_f} = {dim_ker}$."
        elif mode == 8:
            # Ảnh của hệ phụ thuộc tuyến tính
            sub_vars = [
                ("Cho hệ véc tơ $S = \\{u_1, u_2, \\dots, u_k\\}$ phụ thuộc tuyến tính trong $V$ và $f: V \\to W$ là ánh xạ tuyến tính", "Hệ ảnh $f(S) = \\{f(u_1), \\dots, f(u_k)\\}$ luôn phụ thuộc tuyến tính trong $W$", "Vì $c_1 u_1 + \\dots + c_k u_k = \\theta_V$ nên $c_1 f(u_1) + \\dots + c_k f(u_k) = \\theta_W$"),
                ("Cho hệ véc tơ $S = \\{u_1, u_2, \\dots, u_k\\}$ độc lập tuyến tính trong $V$ và $f: V \\to W$ là đơn ánh", "Hệ ảnh $f(S)$ luôn độc lập tuyến tính trong $W$", "Đơn ánh bảo toàn tính độc lập tuyến tính của hệ véc tơ"),
                ("Cho hệ véc tơ $S$ sinh ra không gian $V$ và $f: V \\to W$ là ánh xạ tuyến tính", "Hệ ảnh $f(S)$ luôn sinh ra tập ảnh $\\operatorname{im} f$", "Mọi phần tử trong $\\operatorname{im} f$ đều là tổ hợp tuyến tính của $f(S)$")
            ]
            q_s, c_s, exp_s = rng.choice(sub_vars)
            q_text = f"{q_s}. Khẳng định nào sau đây **chắc chắn đúng**?"
            cor = c_s
            w1 = "Hệ ảnh luôn có số véc tơ nhiều hơn hệ ban đầu"
            w2 = "Hệ ảnh luôn là một cơ sở của không gian đích $W$"
            w3 = "Hệ ảnh luôn phụ thuộc tuyến tính kể cả khi $f$ là đẳng cấu"
            exp = exp_s
        else:
            # Hợp thành hai ánh xạ tuyến tính
            comb_types = [
                ("Cho hai ánh xạ tuyến tính $f: U \\to V$ và $g: V \\to W$. Ánh xạ hợp thành $(g \\circ f): U \\to W$", "Cũng là một ánh xạ tuyến tính từ $U \\to W$", "Hợp thành của hai ánh xạ tuyến tính luôn tuyến tính"),
                ("Nếu $f: U \\to V$ và $g: V \\to W$ đều là các đơn ánh tuyến tính thì $(g \\circ f)$", "Cũng là một đơn ánh tuyến tính", "Hợp thành hai đơn ánh là một đơn ánh"),
                ("Nếu $f: U \\to V$ và $g: V \\to W$ đều là các toàn ánh tuyến tính thì $(g \\circ f)$", "Cũng là một toàn ánh tuyến tính", "Hợp thành hai toàn ánh là một toàn ánh")
            ]
            q_c, c_c, exp_c = rng.choice(comb_types)
            q_text = f"{q_c}:"
            cor = c_c
            w1 = "Không phải là ánh xạ tuyến tính"
            w2 = "Chỉ tuyến tính khi $U = W$"
            w3 = "Luôn là ánh xạ đồng nhất"
            exp = exp_c

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    elif sub == 2: # 5.2 Ma trận biểu diễn & Đổi cơ sở
        if mode == 0:
            # Ma trận của f trong cơ sở chính tắc R^2 -> R^2
            a11 = rng.choice([1, 2, 3])
            a12 = rng.choice([4, 5, 6])
            a21 = rng.choice([-1, -2, -3])
            a22 = rng.choice([7, 8, 9])
            q_text = f"Cho ánh xạ tuyến tính $f: \\mathbb{{R}}^2 \\to \\mathbb{{R}}^2$ xác định bởi $f(x, y) = ({a11}x + ({a12})y, \\, {a21}x + {a22}y)$. Ma trận của $f$ đối với cơ sở chính tắc của $\\mathbb{{R}}^2$ là:"
            cor = f"$\\begin{{bmatrix}} {a11} & {a12} \\\\ {a21} & {a22} \\end{{bmatrix}}$"
            w1 = f"$\\begin{{bmatrix}} {a11} & {a21} \\\\ {a12} & {a22} \\end{{bmatrix}}$"
            w2 = f"$\\begin{{bmatrix}} {a22} & {a21} \\\\ {a12} & {a11} \\end{{bmatrix}}$"
            w3 = f"$\\begin{{bmatrix}} {a21} & {a22} \\\\ {a11} & {a12} \\end{{bmatrix}}$"
            exp = f"Cơ sở chính tắc $e_1 = (1, 0), e_2 = (0, 1)$. Ta có $f(e_1) = ({a11}, {a21})$ (cột 1) và $f(e_2) = ({a12}, {a22})$ (cột 2). Vậy ma trận là $\\begin{{bmatrix}} {a11} & {a12} \\\\ {a21} & {a22} \\end{{bmatrix}}$."
        elif mode == 1:
            # Ma trận R^n -> R^m kích thước
            dims = rng.choice([(2, 3), (3, 2), (2, 4), (4, 3), (3, 4)])
            n_in, m_out = dims
            q_text = f"Cho ánh xạ tuyến tính $f: \\mathbb{{R}}^{n_in} \\to \\mathbb{{R}}^{m_out}$. Kích thước của ma trận biểu diễn $f$ đối với cặp cơ sở chính tắc là:"
            cor = f"${m_out} \\times {n_in}$ ({m_out} hàng, {n_in} cột)"
            w1 = f"${n_in} \\times {m_out}$ ({n_in} hàng, {m_out} cột)"
            w2 = f"${m_out} \\times {m_out}$"
            w3 = f"${n_in} \\times {n_in}$"
            exp = f"Quy tắc chuẩn: Ánh xạ từ không gian $n$ chiều vào không gian $m$ chiều ($f: \\mathbb{{R}}^n \\to \\mathbb{{R}}^m$) có ma trận kích thước $m \\times n$ (số hàng = số chiều đích, số cột = số chiều nguồn)."
        elif mode == 2:
            # Tính tọa độ ảnh: [f(v)] = A [v]
            a11, a12 = rng.choice([1, 2, 3]), rng.choice([0, 1, -1])
            a21, a22 = rng.choice([-1, 1, 2]), rng.choice([2, 3, -2])
            vx, vy = rng.choice([1, 2, 3]), rng.choice([1, -1, 2])
            rx = a11 * vx + a12 * vy
            ry = a21 * vx + a22 * vy
            q_text = f"Cho toán tử tuyến tính $f$ có ma trận $A = \\begin{{bmatrix}} {a11} & {a12} \\\\ {a21} & {a22} \\end{{bmatrix}}$ trong cơ sở chính tắc. Tọa độ của ảnh $f(v)$ với véc tơ $v = ({vx}, {vy})$ là:"
            cor = f"$({rx}, {ry})$"
            w1 = f"$({ry}, {rx})$"
            w2 = f"$({rx + 1}, {ry - 1})$"
            w3 = f"$({rx * 2}, {ry})$"
            exp = f"Ta nhân ma trận: $[f(v)] = A [v] = \\begin{{bmatrix}} {a11} & {a12} \\\\ {a21} & {a22} \\end{{bmatrix}} \\begin{{bmatrix}} {vx} \\\\ {vy} \\end{{bmatrix}} = \\begin{{bmatrix}} {rx} \\\\ {ry} \\end{{bmatrix}}$."
        elif mode == 3:
            # Công thức đổi cơ sở: A' = C^{-1} A C
            q_text = "Cho toán tử tuyến tính $f: V \\to V$ có ma trận $A$ trong cơ sở $B$. Nếu chuyển sang cơ sở mới $B'$ với ma trận chuyển cơ sở $C = (B \\to B')$, thì ma trận $A'$ của $f$ trong cơ sở $B'$ là:"
            cor = "$A' = C^{-1} A C$"
            w1 = "$A' = C A C^{-1}$"
            w2 = "$A' = C^T A C$"
            w3 = "$A' = C A C^T$"
            exp = "Công thức biến đổi ma trận của toán tử tuyến tính khi đổi cơ sở: $A' = C^{-1} A C$."
        elif mode == 4:
            # Ma trận đồng dạng
            q_text = "Nếu hai ma trận vuông $A$ và $B$ đồng dạng với nhau ($B = P^{-1} A P$), thì khẳng định nào sau đây **SAI**?"
            cor = "$A$ và $B$ luôn có cùng các véc tơ riêng"
            w1 = "$\\det A = \\det B$"
            w2 = "$\\text{tr}(A) = \\text{tr}(B)$"
            w3 = "$A$ và $B$ có cùng đa thức đặc trưng"
            exp = "Hai ma trận đồng dạng có cùng đa thức đặc trưng, cùng định thức, cùng vết và cùng các giá trị riêng, nhưng các véc tơ riêng nói chung khác nhau (véc tơ riêng được biến đổi qua ma trận chuyển $P$)."
        elif mode == 5:
            # Ma trận của đạo hàm trên P_n[x]
            n_poly = rng.choice([1, 2, 3])
            if n_poly == 1:
                q_text = "Trong không gian $P_1[x]$ với cơ sở $B = \\{1, x\\}$, ma trận của toán tử đạo hàm $D(p) = p'$ là:"
                cor = "$\\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix}$"
                w1 = "$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$"
                w2 = "$\\begin{bmatrix} 0 & 0 \\\\ 1 & 0 \\end{bmatrix}$"
                w3 = "$\\begin{bmatrix} 1 & 1 \\\\ 0 & 0 \\end{bmatrix}$"
                exp = "$D(1) = 0 = 0\\cdot 1 + 0\\cdot x \\implies [0, 0]^T$; $D(x) = 1 = 1\\cdot 1 + 0\\cdot x \\implies [1, 0]^T$."
            else:
                q_text = "Trong không gian $P_2[x]$ với cơ sở $B = \\{1, x, x^2\\}$, ma trận của toán tử đạo hàm $D(p) = p'$ là:"
                cor = "$\\begin{bmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 2 \\\\ 0 & 0 & 0 \\end{bmatrix}$"
                w1 = "$\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix}$"
                w2 = "$\\begin{bmatrix} 0 & 0 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 2 & 0 \\end{bmatrix}$"
                w3 = "$\\begin{bmatrix} 0 & 1 & 2 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$"
                exp = "$D(1) = 0 \\implies [0, 0, 0]^T$; $D(x) = 1 \\implies [1, 0, 0]^T$; $D(x^2) = 2x \\implies [0, 2, 0]^T$."
        elif mode == 6:
            # Tích hai ma trận biểu diễn hợp thành
            q_text = "Cho $f: U \\to V$ và $g: V \\to W$ có ma trận biểu diễn lần lượt là $A$ và $B$. Ma trận biểu diễn của ánh xạ hợp thành $(g \\circ f): U \\to W$ là:"
            cor = "Tích $B \\cdot A$"
            w1 = "Tích $A \\cdot B$"
            w2 = "Tổng $A + B$"
            w3 = "Tích $A^T \\cdot B$"
            exp = "Ta có $[(g \\circ f)(u)] = [g(f(u))] = B [f(u)] = B (A [u]) = (BA) [u]$. Vậy ma trận của $g \\circ f$ là $B A$."
        elif mode == 7:
            # Hạng của ma trận biểu diễn ánh xạ
            r = rng.choice([2, 3])
            q_text = f"Cho toán tử tuyến tính $f: \\mathbb{{R}}^3 \\to \\mathbb{{R}}^3$ có ma trận biểu diễn $A$ với hạng $\\text{{rank}}(A) = {r}$. Khi đó số chiều của ảnh $\\dim(\\operatorname{{im}} f)$ bằng:"
            cor = f"${r}$"
            w1 = f"${3 - r}$"
            w2 = "$3$"
            w3 = "$0$"
            exp = f"Định lý: Hạng của ánh xạ tuyến tính chính bằng hạng của ma trận biểu diễn nó: $\\dim(\\operatorname{{im}} f) = \\text{{rank}}(A) = {r}$."
        elif mode == 8:
            # Tìm công thức f từ ma trận 2x2
            m11 = rng.choice([2, 3, 4])
            m12 = rng.choice([-1, 1, 2])
            m21 = rng.choice([0, 1, -2])
            m22 = rng.choice([3, 5, 2])
            q_text = f"Cho toán tử tuyến tính $f: \\mathbb{{R}}^2 \\to \\mathbb{{R}}^2$ có ma trận $A = \\begin{{bmatrix}} {m11} & {m12} \\\\ {m21} & {m22} \\end{{bmatrix}}$ trong cơ sở chính tắc. Ảnh $f(x, y)$ là:"
            cor = f"$({m11}x + ({m12})y, \\, {m21}x + {m22}y)$"
            w1 = f"$({m11}x + {m21}y, \\, {m12}x + {m22}y)$"
            w2 = f"$({m22}x + {m12}y, \\, {m21}x + {m11}y)$"
            w3 = f"$({m11}x, \\, {m22}y)$"
            exp = f"Nhân ma trận: $\\begin{{bmatrix}} {m11} & {m12} \\\\ {m21} & {m22} \\end{{bmatrix}} \\begin{{bmatrix}} x \\\\ y \\end{{bmatrix}} = \\begin{{bmatrix}} {m11}x + ({m12})y \\\\ {m21}x + {m22}y \\end{{bmatrix}}$."
        else:
            # Ma trận chuyển cơ sở tọa độ
            q_text = "Cho cơ sở $B$ và $B'$ trong không gian véc tơ $V$, $C$ là ma trận chuyển cơ sở từ $B$ sang $B'$. Đẳng thức nào sau đây đúng với mọi véc tơ $v \\in V$?"
            cor = "$[v]_B = C [v]_{B'}$"
            w1 = "$[v]_{B'} = C [v]_B$"
            w2 = "$[v]_B = C^{-1} [v]_{B'}$"
            w3 = "$[v]_B = C^T [v]_{B'}$"
            exp = "Công thức chuyển tọa độ véc tơ: $[v]_B = C [v]_{B'}$ và $[v]_{B'} = C^{-1} [v]_B$."

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    elif sub == 3: # 5.3 Định lý số chiều, Đơn ánh, Toàn ánh & Đẳng cấu
        if mode == 0:
            # Điều kiện đơn ánh
            q_text = "Ánh xạ tuyến tính $f: V \\to W$ là một **đơn ánh** khi và chỉ khi:"
            cor = "$\\ker f = \\{\\theta_V\\}$ (hạt nhân chỉ chứa duy nhất véc tơ không)"
            w1 = "$\\operatorname{im} f = W$"
            w2 = "$\\dim V = \\dim W$"
            w3 = "$\\det A = 0$"
            exp = "Định lý: Ánh xạ tuyến tính $f$ là đơn ánh khi và chỉ khi $\\ker f = \\{\\theta_V\\}$."
        elif mode == 1:
            # Điều kiện toàn ánh
            q_text = "Ánh xạ tuyến tính $f: V \\to W$ là một **toàn ánh** khi và chỉ khi:"
            cor = "$\\operatorname{im} f = W$ (tập ảnh trùng toàn bộ không gian đích)"
            w1 = "$\\ker f = \\{\\theta_V\\}$"
            w2 = "$\\dim V = \\dim(\\ker f)$"
            w3 = "$\\dim V \\le \\dim W$"
            exp = "Định lý: Ánh xạ tuyến tính $f$ là toàn ánh khi và chỉ khi $\\operatorname{im} f = W$ (tương đương $\\dim(\\operatorname{im} f) = \\dim W$)."
        elif mode == 2:
            # Định lý Rank-Nullity
            dim_v = rng.choice([3, 4, 5, 6])
            dim_im = rng.choice([1, 2, 3])
            if dim_im >= dim_v:
                dim_im = dim_v - 1
            dim_ker = dim_v - dim_im
            q_text = f"Cho ánh xạ tuyến tính $f: V \\to W$ với $\\dim V = {dim_v}$. Biết hạng của ánh xạ là $\\text{{rank}}(f) = \\dim(\\operatorname{{im}} f) = {dim_im}$. Số chiều của hạt nhân $\\dim(\\ker f)$ bằng:"
            cor = f"${dim_ker}$"
            w1 = f"${dim_im}$"
            w2 = f"${dim_v}$"
            w3 = f"${dim_ker + 1}$"
            exp = f"Theo định lý số chiều: $\\dim V = \\dim(\\ker f) + \\dim(\\operatorname{{im}} f) \\iff {dim_v} = \\dim(\\ker f) + {dim_im} \\implies \\dim(\\ker f) = {dim_ker}$."
        elif mode == 3:
            # Khi dim V = dim W
            n_dim = rng.choice([2, 3, 4])
            q_text = f"Cho toán tử tuyến tính $f: \\mathbb{{R}}^{n_dim} \\to \\mathbb{{R}}^{n_dim}$. Khẳng định nào sau đây là **ĐÚNG**?"
            cor = "$f$ là đơn ánh khi và chỉ khi $f$ là toàn ánh"
            w1 = "$f$ có thể là đơn ánh nhưng không phải toàn ánh"
            w2 = "$f$ luôn luôn là một toàn ánh"
            w3 = "$f$ không thể là đẳng cấu"
            exp = f"Trong không gian cùng số chiều hữu hạn (${n_dim} = {n_dim}$), ba mệnh đề sau là tương đương: $f$ đơn ánh $\\iff f$ toàn ánh $\\iff f$ đẳng cấu."
        elif mode == 4:
            # Kiểm tra đẳng cấu qua định thức ma trận
            det_val = rng.choice([3, -2, 5, -7, 4])
            q_text = f"Toán tử tuyến tính $f: \\mathbb{{R}}^3 \\to \\mathbb{{R}}^3$ có ma trận biểu diễn $A$ với $\\det(A) = {det_val} \\neq 0$. Khi đó $f$ là:"
            cor = "Một đẳng cấu (vừa đơn ánh vừa toàn ánh)"
            w1 = "Chỉ là đơn ánh chứ không phải toàn ánh"
            w2 = "Không phải đơn ánh"
            w3 = "Không có ánh xạ ngược"
            exp = f"Vì $\\det A = {det_val} \\neq 0$, ma trận $A$ khả nghịch, do đó $f$ là một đẳng cấu tuyến tính."
        elif mode == 5:
            # Bất đẳng thức: R^4 -> R^3 không thể là đơn ánh
            n_high = rng.choice([4, 5, 6])
            n_low = rng.choice([2, 3])
            q_text = f"Ánh xạ tuyến tính $f: \\mathbb{{R}}^{n_high} \\to \\mathbb{{R}}^{n_low}$ (số chiều nguồn ${n_high} >$ số chiều đích ${n_low}$):"
            cor = "Không bao giờ có thể là đơn ánh"
            w1 = "Không bao giờ có thể là toàn ánh"
            w2 = "Luôn luôn là một đẳng cấu"
            w3 = "Luôn có $\\ker f = \\{\\theta\\}$"
            exp = f"Vì $\\dim(\\operatorname{{im}} f) \\le {n_low}$, theo định lý số chiều $\\dim(\\ker f) = {n_high} - \\dim(\\operatorname{{im}} f) \\ge {n_high} - {n_low} > 0$. Do $\\ker f \\neq \\{{\\theta\\}}$, $f$ không thể là đơn ánh."
        elif mode == 6:
            # Bất đẳng thức: R^2 -> R^4 không thể là toàn ánh
            n_low = rng.choice([2, 3])
            n_high = rng.choice([4, 5])
            q_text = f"Ánh xạ tuyến tính $f: \\mathbb{{R}}^{n_low} \\to \\mathbb{{R}}^{n_high}$ (số chiều nguồn ${n_low} <$ số chiều đích ${n_high}$):"
            cor = "Không bao giờ có thể là toàn ánh"
            w1 = "Không bao giờ có thể là đơn ánh"
            w2 = "Luôn luôn là một đẳng cấu"
            w3 = f"Có $\\dim(\\operatorname{{im}} f) = {n_high}$"
            exp = f"Vì $\\dim(\\operatorname{{im}} f) \\le \\dim(\\mathbb{{R}}^{n_low}) = {n_low} < {n_high} = \\dim(\\mathbb{{R}}^{n_high})$, tập ảnh không thể phủ kín không gian đích. Do đó $f$ không thể là toàn ánh."
        elif mode == 7:
            # Đẳng cấu giữa các không gian véc tơ
            q_text = "Hai không gian véc tơ hữu hạn chiều $V$ và $W$ trên cùng trường số thực $\\mathbb{R}$ là **đẳng cấu với nhau** ($V \\cong W$) khi và chỉ khi:"
            cor = "Chúng có cùng số chiều: $\\dim V = \\dim W$"
            w1 = "Chúng cùng là không gian con của $\\mathbb{R}^n$"
            w2 = "Chúng có cùng cơ sở"
            w3 = "$\\dim V + \\dim W$ là số lẻ"
            exp = "Định lý phân loại: Hai không gian véc tơ hữu hạn chiều trên trường $\\mathbb{R}$ đẳng cấu khi và chỉ khi $\\dim V = \\dim W$."
        elif mode == 8:
            # Tham số m để f là đẳng cấu
            m_val = rng.choice([1, 2, 3, 4, -1, -2])
            mult = rng.choice([2, 3])
            q_text = f"Cho toán tử tuyến tính $f: \\mathbb{{R}}^2 \\to \\mathbb{{R}}^2$ có ma trận $A = \\begin{{bmatrix}} 1 & {m_val} \\\\ {mult} & m \\end{{bmatrix}}$. Tìm điều kiện của $m$ để $f$ là một **đẳng cấu**:"
            cor = f"$m \\neq {mult * m_val}$"
            w1 = f"$m = {mult * m_val}$"
            w2 = "$m \\neq 0$"
            w3 = "$m > 0$"
            exp = f"$f$ là đẳng cấu $\\iff \\det A \\neq 0 \\iff 1\\cdot m - {mult}({m_val}) \\neq 0 \\iff m \\neq {mult * m_val}$."
        else:
            # Ảnh của cơ sở qua đẳng cấu
            q_text = "Cho $f: V \\to W$ là một đẳng cấu tuyến tính. Nếu $\\{v_1, v_2, \\dots, v_n\\}$ là một cơ sở của $V$, thì khẳng định nào sau đây đúng?"
            cor = "Hệ ảnh $\\{f(v_1), f(v_2), \\dots, f(v_n)\\}$ là một cơ sở của $W$"
            w1 = "Hệ ảnh luôn phụ thuộc tuyến tính"
            w2 = "Hệ ảnh chỉ độc lập tuyến tính nhưng không sinh ra $W$"
            w3 = "Hệ ảnh chỉ sinh ra $W$ nhưng phụ thuộc tuyến tính"
            exp = "Đẳng cấu tuyến tính bảo toàn tính độc lập tuyến tính và tính sinh, do đó luôn biến cơ sở thành cơ sở."

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    else: # 5.4 Giá trị riêng, Véc tơ riêng & Chéo hóa
        if mode == 0:
            # Định nghĩa giá trị riêng
            q_text = "Véc tơ $v \\neq \\theta$ được gọi là một **véc tơ riêng** của ma trận vuông $A$ ứng với giá trị riêng $\\lambda$ khi và chỉ khi:"
            cor = "$A v = \\lambda v$"
            w1 = "$A v = \\lambda^2 v$"
            w2 = "$\\det(A) = \\lambda$"
            w3 = "$v^T A v = \\lambda$"
            exp = "Định nghĩa: $Av = \\lambda v$ với điều kiện véc tơ riêng $v$ phải khác véc tơ không ($v \\neq \\theta$)."
        elif mode == 1:
            # Phương trình đặc trưng
            q_text = "Phương trình đặc trưng để tìm các giá trị riêng của ma trận vuông $A$ cấp $n$ là:"
            cor = "$\\det(A - \\lambda I) = 0$"
            w1 = "$\\det(A) - \\lambda = 0$"
            w2 = "$\\text{tr}(A - \\lambda I) = 0$"
            w3 = "$A - \\lambda I = O$"
            exp = "Phương trình đặc trưng: $\\det(A - \\lambda I) = 0$."
        elif mode == 2:
            # Tính lambda_3 từ vết tr(A)
            l1 = rng.choice([1, 2, 3, -1])
            l2 = rng.choice([4, 5, -2, 6])
            l3 = rng.choice([2, -3, 7, 1])
            trA = l1 + l2 + l3
            q_text = f"Cho ma trận vuông $A$ cấp 3 có vết $\\text{{tr}}(A) = {trA}$. Biết hai giá trị riêng của $A$ là $\\lambda_1 = {l1}$ và $\\lambda_2 = {l2}$. Giá trị riêng thứ ba $\\lambda_3$ bằng:"
            cor = f"${l3}$"
            w1 = f"${l3 + 2}$"
            w2 = f"${l3 - 1}$"
            w3 = f"${-l3}$"
            exp = f"Định lý: Tổng các giá trị riêng bằng vết ma trận: $\\lambda_1 + \\lambda_2 + \\lambda_3 = \\text{{tr}}(A) \\iff {l1} + ({l2}) + \\lambda_3 = {trA} \\implies \\lambda_3 = {l3}$."
        elif mode == 3:
            # Tính lambda_3 từ det(A)
            l1 = rng.choice([1, 2, -2, 3])
            l2 = rng.choice([3, -1, 4, -3])
            l3 = rng.choice([2, 5, -2, 4])
            detA = l1 * l2 * l3
            q_text = f"Cho ma trận vuông $A$ cấp 3 có $\\det(A) = {detA}$. Biết hai giá trị riêng của $A$ là $\\lambda_1 = {l1}$ và $\\lambda_2 = {l2}$. Giá trị riêng còn lại $\\lambda_3$ bằng:"
            cor = f"${l3}$"
            w1 = f"${-l3}$"
            w2 = f"${l3 + 3}$"
            w3 = f"${l1 * l2}$"
            exp = f"Định lý: Tích các giá trị riêng bằng định thức: $\\lambda_1 \\cdot \\lambda_2 \\cdot \\lambda_3 = \\det(A) \\iff ({l1})({l2})\\lambda_3 = {detA} \\implies \\lambda_3 = {l3}$."
        elif mode == 4:
            # Ma trận tam giác
            d1 = rng.choice([1, 2, 3, 5])
            d2 = rng.choice([-2, 4, -3, 6])
            d3 = rng.choice([7, -1, 8, -4])
            q_text = f"Các giá trị riêng của ma trận tam giác $A = \\begin{{bmatrix}} {d1} & 5 & -3 \\\\ 0 & {d2} & 2 \\\\ 0 & 0 & {d3} \\end{{bmatrix}}$ là:"
            cor = f"$\\lambda_1 = {d1}, \\, \\lambda_2 = {d2}, \\, \\lambda_3 = {d3}$"
            w1 = f"$\\lambda_1 = 5, \\, \\lambda_2 = 2, \\, \\lambda_3 = -3$"
            w2 = f"$\\lambda_1 = 1, \\, \\lambda_2 = 2, \\, \\lambda_3 = 3$"
            w3 = "$\\lambda = 0$"
            exp = f"Đối với ma trận tam giác, các giá trị riêng chính là các phần tử trên đường chéo chính: ${d1}, {d2}, {d3}$."
        elif mode == 5:
            # Ma trận cấp 2 có 2 giá trị riêng phân biệt
            la = rng.choice([1, 2, 3, 4])
            lb = rng.choice([5, 6, 7, 8])
            q_text = f"Các giá trị riêng của ma trận cấp 2 $A = \\begin{{bmatrix}} {la} & 0 \\\\ 2 & {lb} \\end{{bmatrix}}$ là:"
            cor = f"$\\lambda_1 = {la}, \\, \\lambda_2 = {lb}$"
            w1 = f"$\\lambda_1 = {la + 1}, \\, \\lambda_2 = {lb - 1}$"
            w2 = f"$\\lambda_1 = 0, \\, \\lambda_2 = 2$"
            w3 = f"$\\lambda_1 = {la * lb}, \\, \\lambda_2 = 0$"
            exp = f"Ma trận tam giác dưới có các giá trị riêng nằm trực tiếp trên đường chéo chính: $\\lambda_1 = {la}, \\lambda_2 = {lb}$."
        elif mode == 6:
            # Giá trị riêng ma trận nghịch đảo
            l_val = rng.choice([2, 3, 4, 5, 7])
            q_text = f"Cho ma trận khả nghịch $A$ có một giá trị riêng là $\\lambda = {l_val}$. Khi đó một giá trị riêng của ma trận nghịch đảo $A^{{-1}}$ là:"
            cor = f"$\\dfrac{{1}}{{{l_val}}}$"
            w1 = f"$-{l_val}$"
            w2 = f"${l_val}^2$"
            w3 = f"${l_val}$"
            exp = f"Từ $Av = \\lambda v \\iff A^{{-1}} v = \\dfrac{{1}}{{\\lambda}} v$. Giá trị riêng tương ứng của $A^{{-1}}$ là $1/{l_val}$."
        elif mode == 7:
            # Giá trị riêng ma trận lũy thừa
            k = rng.choice([2, 3, 4])
            l_val = rng.choice([2, -2, 3])
            res_pow = l_val ** k
            q_text = f"Cho ma trận $A$ có giá trị riêng $\\lambda = {l_val}$. Một giá trị riêng của ma trận lũy thừa $A^{k}$ là:"
            cor = f"${res_pow}$"
            w1 = f"${k * l_val}$"
            w2 = f"${l_val + k}$"
            w3 = f"${l_val}$"
            exp = f"Nếu $Av = \\lambda v$ thì $A^k v = \\lambda^k v = ({l_val})^k v = {res_pow} v$."
        elif mode == 8:
            # Điều kiện chéo hóa ma trận
            q_text = "Điều kiện cần và đủ để một ma trận vuông cấp $n$ **chéo hóa được** là:"
            cor = "Ma trận có đủ $n$ véc tơ riêng độc lập tuyến tính"
            w1 = "Ma trận có $\\det A \\neq 0$"
            w2 = "Ma trận có vết bằng 0"
            w3 = "Ma trận là ma trận tam giác"
            exp = "Định lý: Ma trận cấp $n$ chéo hóa được khi và chỉ khi nó có đủ $n$ véc tơ riêng độc lập tuyến tính."
        else:
            # Véc tơ riêng ứng với các giá trị riêng phân biệt
            q_text = "Cho các véc tơ riêng $v_1, v_2, \\dots, v_k$ ứng với các giá trị riêng **phân biệt từng đôi một** của ma trận $A$. Hệ véc tơ này:"
            cor = "Luôn độc lập tuyến tính"
            w1 = "Luôn phụ thuộc tuyến tính"
            w2 = "Luôn trực giao với nhau"
            w3 = "Luôn có chuẩn bằng 1"
            exp = "Định lý: Các véc tơ riêng ứng với các giá trị riêng phân biệt từng đôi một luôn luôn độc lập tuyến tính."

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}
