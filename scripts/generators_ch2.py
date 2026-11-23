# -*- coding: utf-8 -*-
"""
scripts/generators_ch2.py
Chương 2: Không gian véc tơ.
Gồm 4 dạng bài, mỗi dạng bài có 10 modes phong phú, đa dạng, sâu sắc.
"""

import random

def gen_ch2(sub, seed, make_unique_options):
    rng = random.Random(seed * 47 + sub * 109)
    mode = seed % 10
    if mode in [0, 1, 2]:
        difficulty = "easy"
    elif mode in [3, 4, 5, 6]:
        difficulty = "medium"
    else:
        difficulty = "hard"

    if sub == 1: # 2.1 Không gian con & Tổ hợp tuyến tính
        if mode == 0:
            d = rng.choice([1, 2, 3, -1, -5, 4])
            a = rng.choice([2, 3, -2])
            b = rng.choice([1, -1, 4])
            c = rng.choice([1, 5, -3])
            q_text = "Trong không gian véc tơ $\\mathbb{R}^3$, tập hợp $W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid " + str(a) + "x + (" + str(b) + ")y + (" + str(c) + ")z = " + str(d) + "\\}$ có phải là không gian con không?"
            cor = "Không, vì không chứa véc tơ không $\\theta = (0, 0, 0)$"
            w1 = "Có, vì là một mặt phẳng trong không gian 3 chiều"
            w2 = "Có, vì đóng kín với phép cộng"
            w3 = "Không, vì có số chiều bằng 3"
            exp = "Véc tơ không $\\theta = (0, 0, 0)$ thay vào phương trình ta được $0 \\neq " + str(d) + "$, do đó $\\theta \\notin W$. Mọi không gian con bắt buộc phải chứa $\\theta$."
        elif mode == 1:
            coefs = rng.choice([(1, 2, -3), (2, -1, 1), (3, 1, -2), (1, -1, 4)])
            a, b, c = coefs
            eq_str = str(a) + "x + (" + str(b) + ")y + (" + str(c) + ")z = 0"
            q_text = "Tập hợp nào dưới đây là một **không gian véc tơ con** của $\\mathbb{R}^3$?"
            cor = "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid " + eq_str + "\\}$"
            w1 = "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid xy = 0\\}$"
            w2 = "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x^2 + y^2 + z^2 \\le 1\\}$"
            w3 = "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x + y + z = 1\\}$"
            exp = "Phương trình thuần nhất tuyến tính bậc nhất $" + eq_str + "$ luôn xác định một không gian con (chứa $\\theta$, đóng kín với phép cộng và nhân vô hướng)."
        elif mode == 2:
            matrix_subs = [
                ("Tập các ma trận đối xứng ($A^T = A$)", "Tổng và tích vô hướng của ma trận đối xứng vẫn là đối xứng"),
                ("Tập các ma trận phản đối xứng ($A^T = -A$)", "Đóng kín với phép cộng và nhân số vô hướng"),
                ("Tập các ma trận có vết bằng 0 ($\\text{tr}(A) = 0$)", "Vết có tính chất tuyến tính $\\text{tr}(A+B) = 0$"),
                ("Tập các ma trận tam giác trên", "Tổng hai ma trận tam giác trên vẫn là tam giác trên")
            ]
            cor_sub, exp_sub = rng.choice(matrix_subs)
            q_text = "Trong không gian các ma trận vuông cấp 2 ($M_{2 \\times 2}$), tập hợp nào sau đây là một **không gian con**?"
            cor = f"{cor_sub}"
            w1 = "Tập các ma trận khả nghịch ($\\det A \\neq 0$)"
            w2 = "Tập các ma trận có $\\det A = 0$"
            w3 = "Tập các ma trận có vết $\\text{tr}(A) = 1$"
            exp = f"{cor_sub} là không gian con vì {exp_sub} và chứa ma trận không."
        elif mode == 3:
            poly_subs = [
                ("$W = \\{p(x) \\in P_2[x] \\mid p(0) = 0\\}$", "$p(0)=0$ là điều kiện thuần nhất tuyến tính"),
                ("$W = \\{p(x) \\in P_2[x] \\mid p(1) = 0\\}$", "$p(1)=0$ là điều kiện thuần nhất tuyến tính"),
                ("$W = \\{p(x) \\in P_2[x] \\mid p'(0) = 0\\}$", "Đạo hàm tại 0 bằng 0 có tính tuyến tính"),
                ("$W = \\{p(x) \\in P_2[x] \\mid \\int_0^1 p(x)dx = 0\\}$", "Tích phân bằng 0 có tính tuyến tính")
            ]
            cor_p, exp_p = rng.choice(poly_subs)
            q_text = f"Trong không gian các đa thức bậc không quá 2 ($P_2[x]$), tập hợp nào sau đây là một không gian con?"
            cor = f"{cor_p}"
            w1 = "$W = \\{p(x) \\in P_2[x] \\mid p(0) = 1\\}$"
            w2 = "$W = \\{p(x) \\in P_2[x] \\mid p'(0) = 2\\}$"
            w3 = "$W = \\{p(x) \\in P_2[x] \\mid \\deg p = 2\\}$"
            exp = f"{cor_p} là không gian con vì {exp_p} và chứa đa thức không."
        elif mode == 4:
            c1 = rng.choice([1, 2, 3, -1, -2])
            c2 = rng.choice([1, 2, 4, -1, -3])
            u1 = (1, 2)
            u2 = (0, 1)
            v0 = c1 * u1[0] + c2 * u2[0]
            v1 = c1 * u1[1] + c2 * u2[1]
            q_text = f"Trong $\\mathbb{{R}}^2$, véc tơ $v = ({v0}, {v1})$ được biểu diễn thành tổ hợp tuyến tính của $u_1 = (1, 2)$ và $u_2 = (0, 1)$ với hệ số $(c_1, c_2)$ là:"
            cor = f"({c1}, {c2})"
            w1 = f"({c2}, {c1})"
            w2 = f"({c1 + 1}, {c2 - 1})"
            w3 = f"({-c1}, {c2})"
            exp = f"Giải hệ: $c_1(1, 2) + c_2(0, 1) = ({v0}, {v1}) \\iff c_1 = {v0}$ và $2c_1 + c_2 = {v1} \\implies c_1 = {c1}, c_2 = {c2}$."
        elif mode == 5:
            c1 = rng.choice([1, 2, 3])
            c2 = rng.choice([1, 2, 3])
            m_cor = c1 + 2*c2
            q_text = "Tìm tham số $m$ để véc tơ $v = (" + str(c1) + ", " + str(c2) + ", m)$ là tổ hợp tuyến tính của hai véc tơ $u_1 = (1, 0, 1)$ và $u_2 = (0, 1, 2)$ trong $\\mathbb{R}^3$:"
            cor = f"$m = {m_cor}$"
            w1 = f"$m = {m_cor + 2}$"
            w2 = "$m = 0$"
            w3 = "Không tồn tại $m$"
            exp = f"Ta có $v = c_1 u_1 + c_2 u_2 \\implies m = c_1(1) + c_2(2) = {c1} + 2({c2}) = {m_cor}$."
        elif mode == 6:
            q_text = "Cho hai không gian con $W_1$ và $W_2$ của không gian véc tơ $V$. Khẳng định nào sau đây **LUÔN ĐÚNG**?"
            cor = "Giao $W_1 \\cap W_2$ luôn là một không gian con của $V$"
            w1 = "Hợp $W_1 \\cup W_2$ luôn là một không gian con của $V$"
            w2 = "Hiệu $W_1 \\setminus W_2$ là một không gian con của $V$"
            w3 = "Phần bù của $W_1$ trong $V$ là một không gian con của $V$"
            exp = "Giao của hai không gian con bất kỳ luôn đóng kín với phép cộng và nhân vô hướng nên luôn là không gian con. Còn hợp của hai không gian con chỉ là không gian con khi một trong hai tập chứa tập còn lại."
        elif mode == 7:
            q_text = "Bao tuyến tính $\\operatorname{span}(S)$ của một tập hợp $S \\subset V$ được định nghĩa là:"
            cor = "Tập hợp tất cả các tổ hợp tuyến tính của các phần tử trong $S$"
            w1 = "Tập hợp tất cả các véc tơ trực giao với $S$"
            w2 = "Tập hợp các véc tơ độc lập tuyến tính trong $S$"
            w3 = "Không gian véc tơ lớn nhất chứa $S$"
            exp = "Theo định nghĩa, $\\operatorname{span}(S)$ là không gian con nhỏ nhất chứa $S$, bao gồm tất cả các tổ hợp tuyến tính có thể tạo ra từ các véc tơ của $S$."
        elif mode == 8:
            q_text = "Tổng của hai không gian con $W_1 + W_2$ là **tổng trực tiếp** (ký hiệu $W_1 \\oplus W_2$) khi và chỉ khi:"
            cor = "$W_1 \\cap W_2 = \\{\\theta\\}$"
            w1 = "$W_1 \\cup W_2 = V$"
            w2 = "$\\dim(W_1) = \\dim(W_2)$"
            w3 = "$W_1 \\perp W_2$"
            exp = "Tổng $W_1 + W_2$ là tổng trực tiếp khi và chỉ khi giao của chúng chỉ chứa duy nhất véc tơ không: $W_1 \\cap W_2 = \\{\\theta\\}$."
        else:
            q_text = "Tập hợp các véc tơ $W = \\{(x, y) \\in \\mathbb{R}^2 \\mid y = |x|\\}$ có phải là không gian con của $\\mathbb{R}^2$ không?"
            cor = "Không, vì không đóng kín với phép cộng (ví dụ $(1, 1) + (-1, 1) = (0, 2) \\notin W$)"
            w1 = "Có, vì chứa véc tơ không $(0, 0)$"
            w2 = "Có, vì đóng kín với phép nhân vô hướng dương"
            w3 = "Không, vì không chứa gốc tọa độ"
            exp = "Với $u = (1, 1) \\in W$ và $v = (-1, 1) \\in W$, tổng $u + v = (0, 2)$ có $y = 2 \\neq |0| = 0$, nên $u + v \\notin W$. Phép cộng không đóng kín."

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**", "difficulty": difficulty}

    elif sub == 2: # 2.2 Độc lập tuyến tính & Phụ thuộc tuyến tính
        if mode == 0:
            a = rng.choice([1, 2, 3])
            b = rng.choice([1, 2, 4])
            q_text = "Hệ gồm 3 véc tơ trong không gian $\\mathbb{R}^3$ là **độc lập tuyến tính** khi và chỉ khi:"
            cor = "Định thức của ma trận tạo bởi 3 véc tơ này khác 0 ($\\det \\neq 0$)"
            w1 = "Định thức của ma trận tạo bởi 3 véc tơ này bằng 0 ($\\det = 0$)"
            w2 = "Ba véc tơ này đôi một vuông góc với nhau"
            w3 = "Không có véc tơ nào có tọa độ bằng 0"
            exp = "Trong $\\mathbb{R}^n$, hệ gồm đúng $n$ véc tơ độc lập tuyến tính khi và chỉ khi ma trận vuông tương ứng có định thức khác 0."
        elif mode == 1:
            m_val = rng.choice([1, 2, 3, -1, -2, 4, 5])
            m_shift_str = f"m - {m_val}" if m_val > 0 else (f"m + {-m_val}" if m_val < 0 else "m")
            q_text = "Tìm tham số $m$ để hệ véc tơ $S = \\{(1, 0, 0), \\, (0, 1, 0), \\, (2, 3, " + m_shift_str + ")\\}$ trong $\\mathbb{R}^3$ **phụ thuộc tuyến tính**:"
            cor = f"$m = {m_val}$"
            w1 = f"$m \\neq {m_val}$"
            w2 = f"$m = {m_val + 2}$"
            w3 = f"$m = {m_val - 1}$"
            exp = f"Ma trận của hệ là tam giác: $\\det = 1 \\cdot 1 \\cdot ({m_shift_str}) = {m_shift_str}$. Hệ phụ thuộc tuyến tính khi $\\det = 0 \\iff m = {m_val}$."
        elif mode == 2:
            m_val = rng.choice([1, 2, 3, -1, 4])
            m_shift_str = f"m - {m_val}" if m_val > 0 else (f"m + {-m_val}" if m_val < 0 else "m")
            q_text = "Tìm tham số $m$ để hệ véc tơ $S = \\{(1, 1, 1), \\, (0, 1, 2), \\, (0, 0, " + m_shift_str + ")\\}$ trong $\\mathbb{R}^3$ **độc lập tuyến tính**:"
            cor = f"$m \\neq {m_val}$"
            w1 = f"$m = {m_val}$"
            w2 = f"$m > {m_val}$"
            w3 = f"$m = {m_val + 1}$"
            exp = f"Định thức của ma trận tam giác trên là $1 \\cdot 1 \\cdot ({m_shift_str}) = {m_shift_str}$. Hệ độc lập tuyến tính khi $\\det \\neq 0 \\iff m \\neq {m_val}$."
        elif mode == 3:
            k = rng.choice([2, 3, 4, -2])
            q_text = f"Trong $\\mathbb{{R}}^3$, cho hai véc tơ $u = (1, 2, 3)$ và $v = ({k}, {2*k}, {3*k})$. Khẳng định nào sau đây là **ĐÚNG**?"
            cor = "Hệ $\\{u, v\\}$ phụ thuộc tuyến tính vì $v = " + str(k) + "u$"
            w1 = "Hệ $\\{u, v\\}$ độc lập tuyến tính"
            w2 = "Hệ $\\{u, v\\}$ tạo thành cơ sở của $\\mathbb{R}^3$"
            w3 = "Không gian sinh bởi $\\{u, v\\}$ có số chiều bằng 2"
            exp = f"Vì $v = {k} u$ (hai véc tơ tỷ lệ nhau) nên hệ hai véc tơ này phụ thuộc tuyến tính."
        elif mode == 4:
            q_text = "Bất kỳ hệ véc tơ nào chứa **véc tơ không** $\\theta$ thì:"
            cor = "Luôn luôn phụ thuộc tuyến tính"
            w1 = "Luôn luôn độc lập tuyến tính"
            w2 = "Chỉ độc lập tuyến tính khi số véc tơ nhỏ hơn số chiều"
            w3 = "Có thể độc lập tuyến tính hoặc phụ thuộc tuyến tính"
            exp = "Vì $1 \\cdot \\theta + 0 \\cdot u_1 + \\dots + 0 \\cdot u_k = \\theta$ là một tổ hợp tuyến tính bằng $\\theta$ với hệ số khác 0 (hệ số của $\\theta$ bằng 1), nên hệ luôn phụ thuộc tuyến tính."
        elif mode == 5:
            dim_space = rng.choice([3, 4, 5])
            num_vecs = dim_space + rng.choice([1, 2])
            q_text = f"Trong không gian véc tơ $\\mathbb{{R}}^{{{dim_space}}}$, một hệ gồm **{num_vecs} véc tơ** bất kỳ:"
            cor = "Chắc chắn luôn phụ thuộc tuyến tính"
            w1 = "Có thể độc lập tuyến tính nếu không có véc tơ không"
            w2 = "Chắc chắn tạo thành một cơ sở"
            w3 = f"Chắc chắn có hạng bằng {num_vecs}"
            exp = f"Số chiều của $\\mathbb{{R}}^{{{dim_space}}}$ bằng {dim_space}. Theo định lý số véc tơ, mọi hệ chứa số véc tơ lớn hơn số chiều ($m > n$) đều bắt buộc phụ thuộc tuyến tính."
        elif mode == 6:
            q_text = "Cho hệ véc tơ $S = \\{u_1, u_2, u_3\\}$ độc lập tuyến tính trong $V$. Khẳng định nào sau đây **SAI**?"
            cor = "Mọi hệ mở rộng chứa $S$ đều độc lập tuyến tính"
            w1 = "Hệ con $\\{u_1, u_2\\}$ là độc lập tuyến tính"
            w2 = "Không có véc tơ nào trong $S$ bằng véc tơ không"
            w3 = "Không có véc tơ nào trong $S$ là tổ hợp tuyến tính của các véc tơ còn lại"
            exp = "Hệ mở rộng có thể phụ thuộc tuyến tính (ví dụ thêm véc tơ không hoặc véc tơ phụ thuộc vào hệ)."
        elif mode == 7:
            q_text = "Cho ba véc tơ $u, v, w$ độc lập tuyến tính trong không gian véc tơ thực $V$. Hệ ba véc tơ $\\{u+v, \\, v+w, \\, w+u\\}$ là:"
            cor = "Độc lập tuyến tính"
            w1 = "Phụ thuộc tuyến tính"
            w2 = "Chưa đủ dữ kiện để kết luận"
            w3 = "Chỉ độc lập khi $u, v, w$ trực giao"
            exp = "Ma trận chuyển hệ số là $\\begin{bmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & 1 \\end{bmatrix}$ có định thức $= 1(1) + 1(1) = 2 \\neq 0$. Do định thức khác 0 nên hệ mới vẫn độc lập tuyến tính."
        elif mode == 8:
            q_text = "Trong không gian các đa thức $P_2[x]$, xét hệ đa thức $S = \\{1, \\, x, \\, x^2\\}$. Khẳng định nào sau đây đúng?"
            cor = "Hệ $S$ độc lập tuyến tính và là cơ sở chính tắc của $P_2[x]$"
            w1 = "Hệ $S$ phụ thuộc tuyến tính"
            w2 = "Hệ $S$ chỉ sinh được các đa thức bậc 2"
            w3 = "Hệ $S$ có số chiều bằng 2"
            exp = "Phương trình $c_0 \\cdot 1 + c_1 x + c_2 x^2 = 0$ với mọi $x$ chỉ xảy ra khi $c_0 = c_1 = c_2 = 0$. Do đó hệ $S$ độc lập tuyến tính."
        else:
            q_text = "Hệ véc tơ $S = \\{u_1, u_2, \\dots, u_k\\}$ được gọi là **phụ thuộc tuyến tính** khi và chỉ khi:"
            cor = "Tồn tại các số $c_1, \\dots, c_k$ không đồng thời bằng 0 sao cho $c_1 u_1 + \\dots + c_k u_k = \\theta$"
            w1 = "Với mọi bộ số $c_1, \\dots, c_k$, ta luôn có $c_1 u_1 + \\dots + c_k u_k = \\theta$"
            w2 = "Đẳng thức $c_1 u_1 + \\dots + c_k u_k = \\theta$ chỉ xảy ra khi $c_1 = \\dots = c_k = 0$"
            w3 = "Tất cả các véc tơ $u_i$ đều bằng nhau"
            exp = "Định nghĩa: Hệ phụ thuộc tuyến tính khi tồn tại một tổ hợp tuyến tính triệt tiêu mà ít nhất một hệ số khác 0."

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**", "difficulty": difficulty}

    elif sub == 3: # 2.3 Cơ sở & Số chiều
        if mode == 0:
            deg = rng.choice([2, 3, 4, 5, 6])
            q_text = f"Số chiều của không gian các đa thức $P_{{{deg}}}[x]$ có bậc không vượt quá {deg} là:"
            cor = f"${deg + 1}$"
            w1 = f"${deg}$"
            w2 = f"${deg - 1}$"
            w3 = f"${2 * deg}$"
            exp = f"Cơ sở chính tắc của $P_{{{deg}}}[x]$ là $\\{{1, x, x^2, \\dots, x^{{{deg}}}\\}}$ gồm đúng {deg + 1} phần tử. Do đó $\\dim = {deg + 1}$."
        elif mode == 1:
            a = rng.choice([1, 2, 3])
            b = rng.choice([1, 2, 4])
            c = rng.choice([1, 3, 5])
            q_text = "Số chiều của không gian véc tơ con nghiệm $W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid " + str(a) + "x - " + str(b) + "y + " + str(c) + "z = 0\\}$ bằng:"
            cor = "$2$"
            w1 = "$1$"
            w2 = "$3$"
            w3 = "$0$"
            exp = "Không gian nghiệm của 1 phương trình độc lập trong không gian 3 ẩn có số chiều bằng số ẩn trừ đi số phương trình: $\\dim W = 3 - 1 = 2$."
        elif mode == 2:
            n_vars = rng.choice([4, 5])
            n_eqs = rng.choice([2, 3])
            dim_res = n_vars - n_eqs
            q_text = f"Trong $\\mathbb{{R}}^{{{n_vars}}}$, số chiều của không gian nghiệm xác định bởi hệ gồm {n_eqs} phương trình tuyến tính thuần nhất độc lập tuyến tính bằng:"
            cor = f"${dim_res}$"
            w1 = f"${n_eqs}$"
            w2 = f"${n_vars}$"
            w3 = f"${dim_res + 1}$"
            exp = f"Số chiều của không gian nghiệm bằng số ẩn trừ đi hạng: $\\dim = n - r = {n_vars} - {n_eqs} = {dim_res}$."
        elif mode == 3:
            dimU = rng.choice([3, 4])
            dimW = rng.choice([2, 3])
            dimInter = rng.choice([1, 2])
            dimSum = dimU + dimW - dimInter
            q_text = f"Cho hai không gian con $U, W$ của không gian véc tơ $V$ có $\\dim U = {dimU}$, $\\dim W = {dimW}$ và $\\dim(U \\cap W) = {dimInter}$. Số chiều của không gian tổng $U + W$ bằng:"
            cor = f"${dimSum}$"
            w1 = f"${dimU + dimW}$"
            w2 = f"${dimSum - 1}$"
            w3 = f"${dimSum + 2}$"
            exp = f"Theo công thức Grassmann: $\\dim(U + W) = \\dim U + \\dim W - \\dim(U \\cap W) = {dimU} + {dimW} - {dimInter} = {dimSum}$."
        elif mode == 4:
            q_text = "Trong không gian véc tơ $n$ chiều, một hệ gồm đúng $n$ véc tơ là một **cơ sở** khi và chỉ khi:"
            cor = "Hệ đó độc lập tuyến tính (hoặc sinh ra không gian đó)"
            w1 = "Hệ đó chứa véc tơ không"
            w2 = "Hệ đó có ít nhất $n+1$ véc tơ"
            w3 = "Hệ đó trực giao từng đôi một"
            exp = "Trong không gian $n$ chiều, một hệ gồm đúng $n$ véc tơ chỉ cần thỏa mãn 1 trong 2 điều kiện (độc lập tuyến tính HOẶC là hệ sinh) thì tự động trở thành cơ sở."
        elif mode == 5:
            m_sz = rng.choice([2, 3])
            n_sz = rng.choice([2, 3])
            dim_mat = m_sz * n_sz
            q_text = f"Số chiều của không gian các ma trận thực kích thước ${m_sz} \\times {n_sz}$ ($M_{{{m_sz} \\times {n_sz}}}(\\mathbb{{R}})$) bằng:"
            cor = f"${dim_mat}$"
            w1 = f"${m_sz + n_sz}$"
            w2 = f"${m_sz}$"
            w3 = f"${dim_mat - 1}$"
            exp = f"Cơ sở chính tắc gồm các ma trận đơn vị $E_{{ij}}$, tổng số chiều là $\\dim = {m_sz} \\times {n_sz} = {dim_mat}$."
        elif mode == 6:
            n_cap = rng.choice([2, 3, 4])
            dim_sym = n_cap * (n_cap + 1) // 2
            q_text = f"Số chiều của không gian con các ma trận đối xứng cấp {n_cap} ($A \\in M_{{{n_cap} \\times {n_cap}}}$ thỏa mãn $A^T = A$) là:"
            cor = f"${dim_sym}$"
            w1 = f"${n_cap**2}$"
            w2 = f"${n_cap}$"
            w3 = f"${dim_sym - 1}$"
            exp = f"Ma trận đối xứng cấp $n$ có $\\dfrac{{n(n+1)}}{{2}}$ phần tử tự do. Với $n={n_cap}$, số chiều là $\\dfrac{{{n_cap} \\times {n_cap + 1}}}{{2}} = {dim_sym}$."
        elif mode == 7:
            n_cap = rng.choice([3, 4])
            dim_skew = n_cap * (n_cap - 1) // 2
            q_text = f"Số chiều của không gian con các ma trận phản đối xứng cấp {n_cap} ($A^T = -A$) bằng:"
            cor = f"${dim_skew}$"
            w1 = f"${n_cap**2}$"
            w2 = "$0$"
            w3 = f"${dim_skew + 2}$"
            exp = f"Đường chéo chính phải bằng 0. Số phần tử tự do là $\\dfrac{{n(n-1)}}{{2}} = {dim_skew}$."
        elif mode == 8:
            m_val = rng.choice([1, 2, 3, -1, -2, 5])
            m_shift_str = f"m - {m_val}" if m_val > 0 else (f"m + {-m_val}" if m_val < 0 else "m")
            q_text = "Tìm điều kiện của tham số $m$ để hệ véc tơ $B = \\{(1, 0, 0), \\, (1, 1, 0), \\, (1, 1, " + m_shift_str + ")\\}$ là một **cơ sở** của $\\mathbb{R}^3$:"
            cor = f"$m \\neq {m_val}$"
            w1 = f"$m = {m_val}$"
            w2 = "$m > 0$"
            w3 = "Mọi $m \\in \\mathbb{R}$"
            exp = f"Ma trận của hệ là tam giác, có định thức $\\det = 1 \\cdot 1 \\cdot ({m_shift_str}) = {m_shift_str}$. Hệ là cơ sở của $\\mathbb{{R}}^3$ khi và chỉ khi $\\det \\neq 0 \\iff m \\neq {m_val}$."
        else:
            q_text = "Khẳng định nào dưới đây về cơ sở và số chiều là **SAI**?"
            cor = "Một không gian véc tơ có thể có hai cơ sở với số phần tử khác nhau"
            w1 = "Mọi cơ sở của cùng một không gian véc tơ hữu hạn chiều đều có cùng số phần tử"
            w2 = "Mọi hệ độc lập tuyến tính trong không gian hữu hạn chiều đều có thể mở rộng thành cơ sở"
            w3 = "Số chiều của không gian $\\{\\theta\\}$ bằng 0"
            exp = "Định lý: Mọi cơ sở của cùng một không gian véc tơ đều có cùng một số lượng phần tử (được gọi là số chiều của không gian đó)."

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**", "difficulty": difficulty}

    else: # 2.4 Tọa độ & Ma trận chuyển cơ sở
        if mode == 0:
            c1, c2, c3 = rng.choice([1, 2, 3, -2]), rng.choice([4, 5, -3]), rng.choice([6, 7, -1])
            q_text = f"Trong không gian $\\mathbb{{R}}^3$, tọa độ của véc tơ $v = ({c1}, {c2}, {c3})$ đối với **cơ sở chính tắc** $E = \\{{e_1, e_2, e_3\\}}$ là:"
            cor = f"$[v]_E = ({c1}, {c2}, {c3})^T$"
            w1 = f"$[v]_E = ({-c1}, {-c2}, {-c3})^T$"
            w2 = "$[v]_E = (1, 1, 1)^T$"
            w3 = f"$[v]_E = ({c3}, {c2}, {c1})^T$"
            exp = f"Đối với cơ sở chính tắc của $\\mathbb{{R}}^n$, tọa độ của một véc tơ chính là các thành phần của nó: $[v]_E = ({c1}, {c2}, {c3})^T$."
        elif mode == 1:
            c1 = rng.choice([2, 3, 4, -1])
            c2 = rng.choice([1, -2, 5, 2])
            v0 = c1
            v1 = c1 + c2
            q_text = "Trong $\\mathbb{R}^2$, cho cơ sở $B = \\{u_1 = (1, 1), \\, u_2 = (0, 1)\\}$. Tọa độ của véc tơ $v = (" + str(v0) + ", " + str(v1) + ")$ đối với cơ sở $B$ là:"
            cor = f"$[v]_B = ({c1}, {c2})^T$"
            w1 = f"$[v]_B = ({c2}, {c1})^T$"
            w2 = f"$[v]_B = ({v0}, {v1})^T$"
            w3 = f"$[v]_B = ({c1 + 1}, {c2})^T$"
            exp = f"Phân tích: $v = c_1 u_1 + c_2 u_2 \\iff ({v0}, {v1}) = (c_1, c_1 + c_2) \\implies c_1 = {c1}, c_2 = {c2}$."
        elif mode == 2:
            a, b, c = rng.choice([2, 3, 4]), rng.choice([-3, -4, 5]), rng.choice([1, 6, -2])
            q_text = "Trong $P_2[x]$, tọa độ của đa thức $p(x) = " + str(a) + " + (" + str(b) + ")x + (" + str(c) + ")x^2$ đối với cơ sở chính tắc $B = \\{1, x, x^2\\}$ là:"
            cor = f"$[p]_B = ({a}, {b}, {c})^T$"
            w1 = f"$[p]_B = ({c}, {b}, {a})^T$"
            w2 = f"$[p]_B = ({a}, {c}, {b})^T$"
            w3 = "$[p]_B = (1, 1, 1)^T$"
            exp = f"Theo thứ tự của cơ sở chính tắc, tọa độ là hệ số tự do {a}, hệ số của $x$ là {b}, hệ số của $x^2$ là {c}."
        elif mode == 3:
            q_text = "Ma trận chuyển cơ sở từ cơ sở chính tắc $E$ sang cơ sở $B = \\{u_1, u_2, \\dots, u_n\\}$ được thành lập bằng cách:"
            cor = "Xếp tọa độ các véc tơ của cơ sở $B$ thành các cột của ma trận"
            w1 = "Xếp tọa độ các véc tơ của cơ sở $B$ thành các hàng của ma trận"
            w2 = "Tìm ma trận nghịch đảo của cơ sở $E$"
            w3 = "Nhân các véc tơ của $B$ với nhau"
            exp = "Theo quy tắc: Ma trận chuyển cơ sở $P_{E \\to B}$ có cột thứ $j$ chính là tọa độ của véc tơ $u_j$ đối với cơ sở $E$."
        elif mode == 4:
            q_text = "Cho ma trận chuyển cơ sở từ $B$ sang $B'$ là $P$. Công thức liên hệ giữa tọa độ $[x]_B$ và $[x]_{B'}$ là:"
            cor = "$[x]_B = P [x]_{B'}$"
            w1 = "$[x]_{B'} = P [x]_B$"
            w2 = "$[x]_B = P^{-1} [x]_{B'}$"
            w3 = "$[x]_B = P^T [x]_{B'}$"
            exp = "Công thức đổi tọa độ: $[x]_B = P_{B \\to B'} [x]_{B'}$ (hoặc tương đương $[x]_{B'} = P^{-1} [x]_B$)."
        elif mode == 5:
            q_text = "Mọi ma trận chuyển cơ sở $P$ đều có tính chất:"
            cor = "Luôn là ma trận vuông và khả nghịch ($\\det P \\neq 0$)"
            w1 = "Luôn là ma trận trực giao ($P^T P = I$)"
            w2 = "Luôn là ma trận đối xứng ($P^T = P$)"
            w3 = "Có định thức luôn bằng 1"
            exp = "Vì cơ sở gồm các véc tơ độc lập tuyến tính, nên các cột của $P$ độc lập tuyến tính, suy ra ma trận vuông $P$ luôn khả nghịch ($\\det P \\neq 0$)."
        elif mode == 6:
            q_text = "Nếu ma trận chuyển cơ sở từ $B \\to B'$ là $P$, thì ma trận chuyển cơ sở từ $B' \\to B$ là:"
            cor = "$P^{-1}$"
            w1 = "$P^T$"
            w2 = "$-P$"
            w3 = "$P^2$"
            exp = "Chuyển cơ sở ngược lại tương ứng với phép nghịch đảo ma trận: $P_{B' \\to B} = (P_{B \\to B'})^{-1} = P^{-1}$."
        elif mode == 7:
            q_text = "Cho ba cơ sở $B_1, B_2, B_3$. Ma trận chuyển từ $B_1 \\to B_3$ được tính qua các ma trận chuyển trung gian là:"
            cor = "$P_{B_1 \\to B_3} = P_{B_1 \\to B_2} \\cdot P_{B_2 \\to B_3}$"
            w1 = "$P_{B_1 \\to B_3} = P_{B_2 \\to B_3} \\cdot P_{B_1 \\to B_2}$"
            w2 = "$P_{B_1 \\to B_3} = P_{B_1 \\to B_2} + P_{B_2 \\to B_3}$"
            w3 = "$P_{B_1 \\to B_3} = (P_{B_1 \\to B_2})^{-1} \\cdot P_{B_2 \\to B_3}$"
            exp = "Tính chất tích ma trận chuyển cơ sở: $P_{B_1 \\to B_3} = P_{B_1 \\to B_2} \\cdot P_{B_2 \\to B_3}$."
        elif mode == 8:
            x1, x2 = rng.choice([1, 2, 3]), rng.choice([2, 3, 4])
            # P = [[2, 1], [1, 1]]
            res1 = 2*x1 + 1*x2
            res2 = 1*x1 + 1*x2
            q_text = "Trong $\\mathbb{R}^2$, cho $P = \\begin{bmatrix} 2 & 1 \\\\ 1 & 1 \\end{bmatrix}$ là ma trận chuyển từ $B \\to B'$. Nếu $[x]_{B'} = \\begin{bmatrix} " + str(x1) + " \\\\ " + str(x2) + " \\end{bmatrix}$, thì tọa độ $[x]_B$ bằng:"
            cor = f"$\\begin{{bmatrix}} {res1} \\\\ {res2} \\end{{bmatrix}}$"
            w1 = f"$\\begin{{bmatrix}} {res2} \\\\ {res1} \\end{{bmatrix}}$"
            w2 = f"$\\begin{{bmatrix}} {x1} \\\\ {x2} \\end{{bmatrix}}$"
            w3 = f"$\\begin{{bmatrix}} {res1 + 1} \\\\ {res2 - 1} \\end{{bmatrix}}$"
            exp = f"$[x]_B = P [x]_{{B'}} = \\begin{{bmatrix}} 2 & 1 \\\\ 1 & 1 \\end{{bmatrix}} \\begin{{bmatrix}} {x1} \\\\ {x2} \\end{{bmatrix}} = \\begin{{bmatrix}} {res1} \\\\ {res2} \\end{{bmatrix}}$."
        else:
            u11, u12 = rng.choice([1, 2]), rng.choice([3, 4])
            u21, u22 = rng.choice([0, 1]), rng.choice([1, 2])
            q_text = "Cho cơ sở $B = \\{u_1 = (" + str(u11) + ", " + str(u12) + "), u_2 = (" + str(u21) + ", " + str(u22) + ")\\}$ của $\\mathbb{R}^2$. Ma trận chuyển cơ sở từ cơ sở chính tắc $E$ sang $B$ là:"
            cor = f"$\\begin{{bmatrix}} {u11} & {u21} \\\\ {u12} & {u22} \\end{{bmatrix}}$"
            w1 = f"$\\begin{{bmatrix}} {u11} & {u12} \\\\ {u21} & {u22} \\end{{bmatrix}}$"
            w2 = f"$\\begin{{bmatrix}} {u21} & {u11} \\\\ {u22} & {u12} \\end{{bmatrix}}$"
            w3 = "$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$"
            exp = f"Xếp các véc tơ $u_1, u_2$ làm các cột của ma trận: cột 1 là $({u11}, {u12})^T$, cột 2 là $({u21}, {u22})^T$."

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**", "difficulty": difficulty}
