# -*- coding: utf-8 -*-
"""
scripts/generators_ch6.py
Chương 6: KHÔNG GIAN VÉC TƠ EUCLIDE & DẠNG TOÀN PHƯƠNG
4 Dạng bài:
  6.1: Tích vô hướng, Chuẩn (Độ dài), Góc & Khoảng cách trong không gian Euclide
  6.2: Hệ trực giao, Trực chuẩn & Trực chuẩn hóa Gram-Schmidt
  6.3: Dạng toàn phương, Ma trận biểu diễn & Đưa về dạng chính tắc
  6.4: Dấu của dạng toàn phương & Tiêu chuẩn Sylvester

Mỗi dạng bài gồm 10 modes phong phú được tham số hóa ngẫu nhiên cao độ,
đảm bảo sinh ra >= 26 câu hỏi hoàn toàn phân biệt, không trùng lặp đề bài.
"""

import random

def gen_ch6(sub, seed, make_unique_options):
    rng = random.Random(seed * 79 + sub * 137)
    mode = seed % 10
    if mode in [0, 1, 2]:
        difficulty = "easy"
    elif mode in [3, 4, 5]:
        difficulty = "medium"
    else:
        difficulty = "hard"

    if sub == 1: # 6.1 Tích vô hướng, Chuẩn & Góc
        if mode == 0:
            # Tiên đề tích vô hướng
            q_text = "Một ánh xạ $\\langle u, v \\rangle: V \\times V \\to \\mathbb{R}$ được gọi là một **tích vô hướng** trên không gian véc tơ thực $V$ khi và chỉ khi thỏa mãn 4 tiên đề: Đối xứng, Tuyến tính đối với biến thứ nhất, Phân phối đối với phép cộng và:"
            cor = "Xác định dương: $\\langle u, u \\rangle \\ge 0$ với mọi $u$, và $\\langle u, u \\rangle = 0 \\iff u = \\theta$"
            w1 = "$\\langle u, u \\rangle \\le 0$ với mọi $u$"
            w2 = "$\\langle u, v \\rangle = \\langle v, u \\rangle = 0$ với mọi $u, v$"
            w3 = "$\\langle u, u \\rangle = 1$ với mọi $u \\neq \\theta$"
            exp = "Tiên đề xác định dương là bắt buộc: Bình phương vô hướng của mọi véc tơ luôn không âm, và bằng 0 khi và chỉ khi nó là véc tơ không."
        elif mode == 1:
            # Chuẩn của véc tơ R^2 hoặc R^3
            dim_choice = rng.choice([2, 3])
            if dim_choice == 2:
                # pythagorean triples: (3, 4, 5), (6, 8, 10), (5, 12, 13)
                triple = rng.choice([(3, 4, 5), (6, 8, 10), (5, 12, 13), (8, 15, 17)])
                u1, u2, norm = triple
                s1 = rng.choice([1, -1]) * u1
                s2 = rng.choice([1, -1]) * u2
                q_text = f"Trong không gian Euclide $\\mathbb{{R}}^2$ với tích vô hướng chính tắc, chuẩn (độ dài) của véc tơ $u = ({s1}, {s2})$ bằng:"
                cor = f"${norm}$"
                w1 = f"${norm + 2}$"
                w2 = f"${abs(s1) + abs(s2)}$"
                w3 = f"${norm**2}$"
                exp = f"Chuẩn Euclide: $\\|u\\| = \\sqrt{{{s1}^2 + ({s2})^2}} = \\sqrt{{{s1**2 + s2**2}}} = {norm}$."
            else:
                u1 = rng.choice([1, 2, -1])
                u2 = rng.choice([2, -2, 1])
                u3 = rng.choice([1, -1, 3])
                sum_sq = u1**2 + u2**2 + u3**2
                q_text = f"Trong không gian Euclide $\\mathbb{{R}}^3$ với tích vô hướng chính tắc, chuẩn của véc tơ $u = ({u1}, {u2}, {u3})$ bằng:"
                cor = f"$\\sqrt{{{sum_sq}}}$"
                w1 = f"${sum_sq}$"
                w2 = f"${abs(u1) + abs(u2) + abs(u3)}$"
                w3 = f"$\\sqrt{{{sum_sq + 2}}}$"
                exp = f"Chuẩn Euclide trong $\\mathbb{{R}}^3$: $\\|u\\| = \\sqrt{{{u1}^2 + ({u2})^2 + ({u3})^2}} = \\sqrt{{{sum_sq}}}$."
        elif mode == 2:
            # Tích vô hướng chính tắc của hai véc tơ R^3
            u1, u2, u3 = rng.choice([1, 2, -1]), rng.choice([2, -3, 1]), rng.choice([1, 0, -2])
            v1, v2, v3 = rng.choice([3, -1, 2]), rng.choice([1, 2, -1]), rng.choice([2, 4, -1])
            dot = u1*v1 + u2*v2 + u3*v3
            q_text = f"Tích vô hướng chính tắc của hai véc tơ $u = ({u1}, {u2}, {u3})$ và $v = ({v1}, {v2}, {v3})$ trong $\\mathbb{{R}}^3$ bằng:"
            cor = f"${dot}$"
            w1 = f"${dot + 3}$"
            w2 = f"${-dot}$"
            w3 = f"${dot - 4}$"
            exp = f"$\\langle u, v \\rangle = ({u1})({v1}) + ({u2})({v2}) + ({u3})({v3}) = {u1*v1} + ({u2*v2}) + ({u3*v3}) = {dot}$."
        elif mode == 3:
            # Công thức góc giữa hai véc tơ
            q_text = "Góc $\\theta$ ($0 \\le \\theta \\le \\pi$) giữa hai véc tơ khác không $u$ và $v$ trong không gian Euclide được xác định bởi công thức:"
            cor = "$\\cos \\theta = \\dfrac{\\langle u, v \\rangle}{\\|u\\| \\cdot \\|v\\|}$"
            w1 = "$\\sin \\theta = \\dfrac{\\langle u, v \\rangle}{\\|u\\| \\cdot \\|v\\|}$"
            w2 = "$\\cos \\theta = \\dfrac{\\|u\\| \\cdot \\|v\\|}{\\langle u, v \\rangle}$"
            w3 = "$\\tan \\theta = \\dfrac{\\langle u, v \\rangle}{\\|u\\| \\cdot \\|v\\|}$"
            exp = "Định nghĩa góc trong không gian Euclide: $\\cos \\theta = \\dfrac{\\langle u, v \\rangle}{\\|u\\| \\|v\\|}$."
        elif mode == 4:
            # Khoảng cách giữa hai véc tơ
            x1, y1 = rng.choice([1, 2, 0]), rng.choice([3, 1, -1])
            x2, y2 = x1 + rng.choice([3, 4]), y1 + rng.choice([4, 3])
            d_sq = (x2 - x1)**2 + (y2 - y1)**2
            d_val = int(d_sq**0.5) if int(d_sq**0.5)**2 == d_sq else f"\\sqrt{{{d_sq}}}"
            q_text = f"Khoảng cách Euclide giữa hai điểm $u = ({x1}, {y1})$ và $v = ({x2}, {y2})$ trong $\\mathbb{{R}}^2$ bằng:"
            cor = f"${d_val}$"
            w1 = f"${d_sq}$"
            w2 = f"${abs(x2 - x1) + abs(y2 - y1)}$"
            w3 = f"${d_sq + 1}$"
            exp = f"Khoảng cách $d(u, v) = \\|u - v\\| = \\sqrt{{({x2} - {x1})^2 + ({y2} - {y1})^2}} = \\sqrt{{{d_sq}}} = {d_val}$."
        elif mode == 5:
            # Bất đẳng thức Cauchy-Schwarz
            q_text = "Bất đẳng thức Cauchy - Schwarz trong không gian véc tơ Euclide phát biểu rằng:"
            cor = "$|\\langle u, v \\rangle| \\le \\|u\\| \\cdot \\|v\\|$, đẳng thức xảy ra $\\iff u, v$ phụ thuộc tuyến tính"
            w1 = "$|\\langle u, v \\rangle| \\ge \\|u\\| \\cdot \\|v\\|$"
            w2 = "$\\langle u, v \\rangle = \\|u\\| + \\|v\\|$"
            w3 = "$\\|u + v\\| = \\|u\\| + \\|v\\|$"
            exp = "Bất đẳng thức Cauchy-Schwarz: $|\\langle u, v \\rangle| \\le \\|u\\| \\|v\\|$. Dấu bằng xảy ra khi và chỉ khi một véc tơ là bội số của véc tơ kia."
        elif mode == 6:
            # Bất đẳng thức tam giác
            q_text = "Bất đẳng thức tam giác (bất đẳng thức Minkowski) cho chuẩn trong không gian Euclide là:"
            cor = "$\\|u + v\\| \\le \\|u\\| + \\|v\\|$"
            w1 = "$\\|u + v\\| \\ge \\|u\\| + \\|v\\|$"
            w2 = "$\\|u + v\\|^2 = \\|u\\|^2 + \\|v\\|^2$"
            w3 = "$\\|u - v\\| \\ge \\|u\\| + \\|v\\|$"
            exp = "Bất đẳng thức tam giác: Chuẩn của tổng không vượt quá tổng các chuẩn: $\\|u + v\\| \\le \\|u\\| + \\|v\\|$."
        elif mode == 7:
            # Định lý Pythagoras
            q_text = "Cho hai véc tơ $u$ và $v$ trực giao với nhau ($\\langle u, v \\rangle = 0$) trong không gian Euclide. Đẳng thức Pythagoras nào sau đây đúng?"
            cor = "$\\|u + v\\|^2 = \\|u\\|^2 + \\|v\\|^2$"
            w1 = "$\\|u + v\\| = \\|u\\| + \\|v\\|$"
            w2 = "$\\|u + v\\|^2 = \\|u\\|^2 - \\|v\\|^2$"
            w3 = "$\\|u + v\\|^2 = 2(\\|u\\|^2 + \\|v\\|^2)$"
            exp = "Khai triển: $\\|u + v\\|^2 = \\langle u+v, u+v \\rangle = \\|u\\|^2 + 2\\langle u, v \\rangle + \\|v\\|^2$. Vì $\\langle u, v \\rangle = 0$ nên $\\|u + v\\|^2 = \\|u\\|^2 + \\|v\\|^2$."
        elif mode == 8:
            # Véc tơ đơn vị (chuẩn hóa)
            coords = rng.choice([(3, 4), (1, 1), (0, 5), (1, 2)])
            c1, c2 = coords
            len_sq = c1**2 + c2**2
            if len_sq == 25:
                res_str = f"\\left(\\dfrac{{{c1}}}{{5}}, \\dfrac{{{c2}}}{{5}}\\right)"
            elif len_sq == 2:
                res_str = "\\left(\\dfrac{1}{\\sqrt{2}}, \\dfrac{1}{\\sqrt{2}}\\right)"
            else:
                res_str = f"\\left(\\dfrac{{{c1}}}{{\\sqrt{{{len_sq}}}}}, \\dfrac{{{c2}}}{{\\sqrt{{{len_sq}}}}}\\right)"
            q_text = f"Véc tơ đơn vị cùng hướng với véc tơ $u = ({c1}, {c2})$ trong $\\mathbb{{R}}^2$ là:"
            cor = f"${res_str}$"
            w1 = f"$({c1}, {c2})$"
            w2 = f"$(1, 1)$"
            w3 = f"$\\left(\\dfrac{{{c1}}}{{{c1+c2}}}, \\dfrac{{{c2}}}{{{c1+c2}}}\\right)$"
            exp = f"Véc tơ đơn vị cùng hướng thu được bằng cách chia cho chuẩn: $v = \\dfrac{{u}}{{\\|u\\|}} = \\dfrac{{({c1}, {c2})}}{{\\sqrt{{{len_sq}}}}} = {res_str}$."
        else:
            # Tích vô hướng có trọng số trên R^2
            w_x = rng.choice([2, 3])
            w_y = rng.choice([1, 4])
            # <u, v> = w_x x1 x2 + w_y y1 y2
            u_pt = (1, 2)
            v_pt = (2, -1)
            dot_val = w_x * u_pt[0] * v_pt[0] + w_y * u_pt[1] * v_pt[1]
            q_text = f"Trong $\\mathbb{{R}}^2$, xét tích vô hướng có trọng số $\\langle u, v \\rangle = {w_x} x_1 x_2 + {w_y} y_1 y_2$. Tích vô hướng của $u = ({u_pt[0]}, {u_pt[1]})$ và $v = ({v_pt[0]}, {v_pt[1]})$ là:"
            cor = f"${dot_val}$"
            w1 = f"${dot_val + 2}$"
            w2 = f"${u_pt[0]*v_pt[0] + u_pt[1]*v_pt[1]}$"
            w3 = f"${-dot_val}$"
            exp = f"Thay số vào công thức tích vô hướng có trọng số: $\\langle u, v \\rangle = {w_x}({u_pt[0]})({v_pt[0]}) + {w_y}({u_pt[1]})({v_pt[1]}) = {w_x * u_pt[0] * v_pt[0]} + ({w_y * u_pt[1] * v_pt[1]}) = {dot_val}$."

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**", "difficulty": difficulty}

    elif sub == 2: # 6.2 Hệ trực giao, Trực chuẩn & Gram-Schmidt
        if mode == 0:
            # Điều kiện trực giao của hai véc tơ
            q_text = "Hai véc tơ $u$ và $v$ trong không gian Euclide được gọi là **trực giao với nhau** ($u \\perp v$) khi và chỉ khi:"
            cor = "$\\langle u, v \\rangle = 0$"
            w1 = "$\\langle u, v \\rangle = 1$"
            w2 = "$\\|u\\| = \\|v\\|$"
            w3 = "$u + v = \\theta$"
            exp = "Định nghĩa: Hai véc tơ trực giao khi và chỉ khi tích vô hướng của chúng bằng 0: $\\langle u, v \\rangle = 0$."
        elif mode == 1:
            # Tìm m để hai véc tơ trực giao trong R^3
            u1, u2, u3 = rng.choice([1, 2]), rng.choice([-1, 3]), rng.choice([2, -2])
            v1, v2 = rng.choice([2, 4]), rng.choice([2, -1])
            # u1*v1 + u2*v2 + u3*m = 0 => m = -(u1*v1 + u2*v2)/u3
            num = -(u1*v1 + u2*v2)
            from math import gcd
            g = gcd(abs(num), abs(u3))
            p = abs(num) // g
            q_den = abs(u3) // g
            is_neg = (num * u3) < 0
            if q_den == 1:
                sol = -p if is_neg else p
                cor_m = f"$m = {sol}$"
                w1_m = f"$m = {sol + 2}$"
                w2_m = f"$m = {-sol if sol != 0 else 3}$"
                w3_m = "$m = 0$" if sol != 0 else "$m = 1$"
                exp_m = f"$\\langle u, v \\rangle = ({u1})({v1}) + ({u2})({v2}) + ({u3})m = {u1*v1 + u2*v2} + ({u3})m = 0 \\iff m = {sol}$."
            else:
                frac_str = f"\\dfrac{{{p}}}{{{q_den}}}"
                cor_m = f"$m = -{frac_str}$" if is_neg else f"$m = {frac_str}$"
                w1_m = f"$m = {frac_str}$" if is_neg else f"$m = -{frac_str}$"
                w2_m = "$m = 1$"
                w3_m = "$m = 0$"
                exp_m = f"$\\langle u, v \\rangle = ({u1})({v1}) + ({u2})({v2}) + ({u3})m = 0 \\iff m = {cor_m.replace('$', '')}$."
            q_text = f"Tìm giá trị của tham số $m$ để hai véc tơ $u = ({u1}, {u2}, {u3})$ và $v = ({v1}, {v2}, m)$ trong $\\mathbb{{R}}^3$ **trực giao với nhau**:"
            cor = cor_m
            w1 = w1_m
            w2 = w2_m
            w3 = w3_m
            exp = exp_m
        elif mode == 2:
            # Định nghĩa hệ trực chuẩn
            q_text = "Hệ véc tơ $\\{e_1, e_2, \\dots, e_k\\}$ được gọi là một **hệ trực chuẩn** (orthonormal system) khi thỏa mãn:"
            cor = "Trực giao từng đôi một ($\\langle e_i, e_j \\rangle = 0$ với mọi $i \\neq j$) và mọi véc tơ đều có chuẩn bằng 1 ($\\langle e_i, e_i \\rangle = 1$)"
            w1 = "Chỉ cần trực giao từng đôi một ($\\langle e_i, e_j \\rangle = 0$ với mọi $i \\neq j$)"
            w2 = "Chỉ cần tất cả các véc tơ đều có độ dài bằng 1"
            w3 = "Hệ sinh ra toàn bộ không gian"
            exp = "Định nghĩa hệ trực chuẩn: $\\langle e_i, e_j \\rangle = \\delta_{ij}$ (bằng 1 nếu $i = j$, bằng 0 nếu $i \\neq j$)."
        elif mode == 3:
            # Hệ trực giao các véc tơ khác không luôn ĐLTT
            q_text = "Một hệ véc tơ gồm các véc tơ khác không, đôi một trực giao trong không gian Euclide:"
            cor = "Luôn luôn độc lập tuyến tính"
            w1 = "Luôn luôn phụ thuộc tuyến tính"
            w2 = "Chỉ độc lập tuyến tính khi số véc tơ bằng số chiều không gian"
            w3 = "Luôn là một cơ sở trực chuẩn"
            exp = "Định lý cơ bản: Mọi hệ trực giao gồm các véc tơ khác không đều độc lập tuyến tính."
        elif mode == 4:
            # Công thức Gram-Schmidt bước 2: e_2 = u_2 - proj_{e_1}(u_2)
            q_text = "Trong thuật toán trực giao hóa Gram - Schmidt, từ hệ cơ sở $\\{u_1, u_2, \\dots, u_k\\}$, công thức xây dựng véc tơ trực giao $e_2$ từ $e_1 = u_1$ là:"
            cor = "$e_2 = u_2 - \\dfrac{\\langle u_2, e_1 \\rangle}{\\|e_1\\|^2} e_1$"
            w1 = "$e_2 = u_2 - \\dfrac{\\langle u_2, e_1 \\rangle}{\\|e_1\\|} e_1$"
            w2 = "$e_2 = u_2 + \\dfrac{\\langle u_2, e_1 \\rangle}{\\|e_1\\|^2} e_1$"
            w3 = "$e_2 = \\dfrac{u_2}{\\|u_2\\|}$"
            exp = "Công thức Gram-Schmidt: Trừ đi hình chiếu trực giao của $u_2$ lên $e_1$: $e_2 = u_2 - \\dfrac{\\langle u_2, e_1 \\rangle}{\\|e_1\\|^2} e_1$."
        elif mode == 5:
            # Tính e2 cụ thể
            # Cho u1 = (1, 1), u2 = (1, 0)
            # e1 = (1, 1) => ||e1||^2 = 2, <u2, e1> = 1
            # e2 = (1, 0) - 1/2(1, 1) = (1/2, -1/2)
            scale = rng.choice([1, 2])
            q_text = f"Áp dụng trực giao hóa Gram - Schmidt cho hai véc tơ $u_1 = ({scale}, {scale})$ và $u_2 = ({scale}, 0)$ trong $\\mathbb{{R}}^2$. Chọn $e_1 = u_1$, véc tơ trực giao $e_2$ là:"
            cor = f"$\\left(\\dfrac{{{scale}}}{{2}}, -\\dfrac{{{scale}}}{{2}}\\right)$"
            w1 = f"$({scale}, 0)$"
            w2 = f"$(0, {scale})$"
            w3 = f"$\\left(-\\dfrac{{{scale}}}{{2}}, \\dfrac{{{scale}}}{{2}}\\right)$"
            exp = f"Ta có $\\|e_1\\|^2 = {2*scale**2}$, $\\langle u_2, e_1 \\rangle = {scale**2}$. Do đó $e_2 = u_2 - \\dfrac{{{scale**2}}}{{{2*scale**2}}} e_1 = ({scale}, 0) - \\dfrac{{1}}{{2}}({scale}, {scale}) = \\left(\\dfrac{{{scale}}}{{2}}, -\\dfrac{{{scale}}}{{2}}\\right)$."
        elif mode == 6:
            # Không gian con bù trực giao W^perp
            dim_v = rng.choice([3, 4, 5])
            dim_w = rng.choice([1, 2])
            dim_perp = dim_v - dim_w
            q_text = f"Cho $W$ là không gian con có số chiều $\\dim W = {dim_w}$ trong không gian Euclide $V$ có $\\dim V = {dim_v}$. Số chiều của phần bù trực giao $W^\\perp$ bằng:"
            cor = f"${dim_perp}$"
            w1 = f"${dim_w}$"
            w2 = f"${dim_v}$"
            w3 = f"${dim_perp + 1}$"
            exp = f"Định lý phân tích trực giao: $V = W \\oplus W^\\perp$, do đó $\\dim V = \\dim W + \\dim W^\\perp \\implies \\dim W^\\perp = {dim_v} - {dim_w} = {dim_perp}$."
        elif mode == 7:
            # Tọa độ trong cơ sở trực chuẩn
            q_text = "Nếu $\\{e_1, e_2, \\dots, e_n\\}$ là một cơ sở **trực chuẩn** của không gian Euclide $V$, thì tọa độ $c_i$ của mọi véc tơ $v \\in V$ theo $e_i$ ($v = \\sum c_i e_i$) được tính đơn giản bởi:"
            cor = "$c_i = \\langle v, e_i \\rangle$"
            w1 = "$c_i = \\dfrac{\\langle v, e_i \\rangle}{\\|v\\|}$"
            w2 = "$c_i = \\|v - e_i\\|$"
            w3 = "$c_i = \\det(v, e_i)$"
            exp = "Công thức khai triển Fourier trong cơ sở trực chuẩn: Tọa độ của $v$ chính là tích vô hướng với véc tơ cơ sở: $c_i = \\langle v, e_i \\rangle$ (vì $\\|e_i\\| = 1$)."
        elif mode == 8:
            # Ma trận trực giao
            q_text = "Ma trận vuông thực $A$ được gọi là **ma trận trực giao** khi và chỉ khi:"
            cor = "$A^T A = A A^T = I$ (tương đương $A^{-1} = A^T$)"
            w1 = "$A^T = -A$"
            w2 = "$\\det A = 0$"
            w3 = "$A^2 = I$"
            exp = "Định nghĩa ma trận trực giao: Ma trận khả nghịch thỏa mãn $A^{-1} = A^T$, tức $A^T A = I$."
        else:
            # Định thức của ma trận trực giao
            q_text = "Định thức của một ma trận trực giao $A$ luôn có giá trị bằng:"
            cor = "$\\det A = 1$ hoặc $\\det A = -1$"
            w1 = "Luôn bằng 0"
            w2 = "Luôn bằng 1"
            w3 = "Có thể là số thực bất kỳ khác 0"
            exp = "Từ $A^T A = I \\implies \\det(A^T A) = (\\det A)^2 = \\det I = 1 \\implies \\det A = \\pm 1$."

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**", "difficulty": difficulty}

    elif sub == 3: # 6.3 Dạng toàn phương & Đưa về chính tắc
        if mode == 0:
            # Ma trận của dạng toàn phương 2 biến
            a = rng.choice([2, 3, 4, 5])
            b = rng.choice([1, -2, 3, -4])
            c = rng.choice([2, -3, 1])
            q_text = f"Ma trận đối xứng biểu diễn dạng toàn phương $Q(x_1, x_2) = {a}x_1^2 + {2*b}x_1 x_2 + {c}x_2^2$ là:"
            cor = f"$\\begin{{bmatrix}} {a} & {b} \\\\ {b} & {c} \\end{{bmatrix}}$"
            w1 = f"$\\begin{{bmatrix}} {a} & {2*b} \\\\ {2*b} & {c} \\end{{bmatrix}}$"
            w2 = f"$\\begin{{bmatrix}} {a} & {b} \\\\ -{b} & {c} \\end{{bmatrix}}$"
            w3 = f"$\\begin{{bmatrix}} {b} & {a} \\\\ {c} & {b} \\end{{bmatrix}}$"
            exp = f"Phần tử trên đường chéo chính là hệ số của các bình phương ($a_{{11}} = {a}, a_{{22}} = {c}$); phần tử ngoài đường chéo là một nửa hệ số của tích chéo ($a_{{12}} = a_{{21}} = \\frac{{{2*b}}}{{2}} = {b}$)."
        elif mode == 1:
            # Ma trận của dạng toàn phương 3 biến
            a = rng.choice([1, 2, 3])
            b = rng.choice([2, -1])
            c = rng.choice([4, 1])
            q_text = f"Cho dạng toàn phương $Q(x_1, x_2, x_3) = {a}x_1^2 + {b}x_2^2 + {c}x_3^2 + 4x_1 x_2 - 6x_2 x_3$. Phần tử ở hàng 1, cột 2 ($a_{{12}}$) và hàng 2, cột 3 ($a_{{23}}$) của ma trận biểu diễn lần lượt là:"
            cor = "$a_{12} = 2$ và $a_{23} = -3$"
            w1 = "$a_{12} = 4$ và $a_{23} = -6$"
            w2 = "$a_{12} = -2$ và $a_{23} = 3$"
            w3 = "$a_{12} = 1$ và $a_{23} = -1$"
            exp = "Hệ số ngoài đường chéo bằng một nửa hệ số trong biểu thức: $a_{12} = 4/2 = 2$ và $a_{23} = -6/2 = -3$."
        elif mode == 2:
            # Dạng chính tắc là gì
            q_text = "Dạng toàn phương được gọi là ở **dạng chính tắc** (canonical form) khi biểu thức của nó:"
            cor = "Chỉ chứa các số hạng bình phương, không chứa tích chéo các biến khác nhau ($Q = \\sum c_i y_i^2$)"
            w1 = "Chỉ chứa các tích chéo của hai biến khác nhau"
            w2 = "Có tất cả các hệ số đều bằng 1"
            w3 = "Có ma trận biểu diễn là ma trận đơn vị"
            exp = "Định nghĩa dạng chính tắc: Biểu thức chỉ gồm tổng đại số của các bình phương: $Q(y) = c_1 y_1^2 + c_2 y_2^2 + \\dots + c_n y_n^2$."
        elif mode == 3:
            # Phương pháp biến đổi Lagrange
            # Q(x1, x2) = x1^2 + 2b x1 x2 + ... = (x1 + b x2)^2 ...
            b_val = rng.choice([1, 2, 3])
            c_val = b_val**2 + rng.choice([1, 2, 3])
            diff = c_val - b_val**2
            q_text = f"Dùng phương pháp thêm bớt bình phương (Lagrange) đưa $Q(x_1, x_2) = x_1^2 + {2*b_val}x_1 x_2 + {c_val}x_2^2$ về dạng chính tắc, ta được:"
            cor = f"$Q = y_1^2 + {diff}y_2^2$ với $y_1 = x_1 + {b_val}x_2, \\, y_2 = x_2$"
            w1 = f"$Q = y_1^2 - {diff}y_2^2$"
            w2 = f"$Q = y_1^2 + {c_val}y_2^2$"
            w3 = f"$Q = (x_1 + x_2)^2$"
            exp = f"Biến đổi: $Q = (x_1^2 + {2*b_val}x_1 x_2 + {b_val**2}x_2^2) + ({c_val} - {b_val**2})x_2^2 = (x_1 + {b_val}x_2)^2 + {diff}x_2^2 = y_1^2 + {diff}y_2^2$."
        elif mode == 4:
            # Luật quán tính Sylvester (chỉ số quán tính dương p, âm q)
            p = rng.choice([1, 2])
            q = rng.choice([1, 2])
            r = p + q
            q_text = f"Một dạng toàn phương 3 biến khi đưa về dạng chính tắc có biểu thức $Q = y_1^2 + \\dots$ gồm ${p}$ hệ số dương và ${q}$ hệ số âm. Chỉ số quán tính dương và âm $(p, q)$ và hạng $r$ của $Q$ lần lượt là:"
            cor = f"$p = {p}, \\, q = {q}$ và $\\text{{rank}}(Q) = {r}$"
            w1 = f"$p = {q}, \\, q = {p}$ và $\\text{{rank}}(Q) = 3$"
            w2 = f"$p = {p}, \\, q = {q}$ và $\\text{{rank}}(Q) = {abs(p - q)}$"
            w3 = f"$p = 3, \\, q = 0$"
            exp = f"Định lý quán tính Sylvester: Số hệ số dương $p = {p}$, số hệ số âm $q = {q}$, và hạng của dạng toàn phương bằng tổng số hệ số khác không: $r = p + q = {r}$."
        elif mode == 5:
            # Công thức biến đổi ma trận khi đổi cơ sở dạng toàn phương: A' = C^T A C
            q_text = "Khi thực hiện đổi biến $X = C Y$ (với ma trận chuyển cơ sở $C$), ma trận biểu diễn $A$ của dạng toàn phương biến đổi thành ma trận $A'$ theo công thức:"
            cor = "$A' = C^T A C$"
            w1 = "$A' = C^{-1} A C$"
            w2 = "$A' = C A C^T$"
            w3 = "$A' = C A C^{-1}$"
            exp = "Biến đổi dạng toàn phương: $Q = X^T A X = (CY)^T A (CY) = Y^T (C^T A C) Y$. Do đó ma trận mới là $A' = C^T A C$ (quan hệ tương đẳng / congruence)."
        elif mode == 6:
            # Đưa về chính tắc bằng biến đổi trực giao
            q_text = "Khi đưa dạng toàn phương về dạng chính tắc bằng phương pháp **biến đổi trực giao**, các hệ số của các bình phương trong dạng chính tắc chính là:"
            cor = "Các giá trị riêng của ma trận biểu diễn $A$"
            w1 = "Các phần tử trên đường chéo chính của ma trận $A$"
            w2 = "Các định thức con chính góc của $A$"
            w3 = "Nghịch đảo các giá trị riêng của $A$"
            exp = "Định lý phổ cho ma trận đối xứng: Tồn tại ma trận trực giao $P$ sao cho $P^T A P = \\text{diag}(\\lambda_1, \\dots, \\lambda_n)$. Do đó các hệ số chính tắc chính là các giá trị riêng của $A$."
        elif mode == 7:
            # Hạng của dạng toàn phương
            r_val = rng.choice([2, 3])
            q_text = f"Cho dạng toàn phương $Q$ trên không gian 3 chiều có ma trận đối xứng $A$ với $\\text{{rank}}(A) = {r_val}$. Khi đưa về dạng chính tắc, số lượng các bình phương có hệ số khác không là:"
            cor = f"${r_val}$"
            w1 = f"${3 - r_val}$"
            w2 = "$3$"
            w3 = "$1$"
            exp = f"Hạng của dạng toàn phương bất biến dưới phép đổi biến không suy biến và bằng đúng số lượng hệ số khác không trong dạng chính tắc, tức bằng ${r_val}$."
        elif mode == 8:
            # Dạng chính tắc chuẩn tắc (Sylvester normal form)
            q_text = "Dạng chính tắc chuẩn tắc trên trường số thực $\\mathbb{R}$ của một dạng toàn phương có chỉ số quán tính $(p, q)$ là:"
            cor = "$Q = z_1^2 + \\dots + z_p^2 - z_{p+1}^2 - \\dots - z_{p+q}^2$"
            w1 = "$Q = z_1^2 + \\dots + z_n^2$"
            w2 = "$Q = z_1 z_2 + z_3 z_4$"
            w3 = "$Q = -z_1^2 - \\dots - z_n^2$"
            exp = "Sau khi đưa về chính tắc, đặt $z_i = \\sqrt{|c_i|} y_i$, các hệ số khác không đều được chuẩn hóa về $+1$ hoặc $-1$."
        else:
            # Nhận dạng biểu thức toàn phương
            q_text = "Biểu thức nào sau đây **KHÔNG PHẢI** là một dạng toàn phương?"
            cor = "$f(x_1, x_2) = x_1^2 + 2x_1 x_2 + 3x_2 + 1$"
            w1 = "$f(x_1, x_2) = 2x_1^2 - 3x_1 x_2 + 4x_2^2$"
            w2 = "$f(x_1, x_2, x_3) = x_1 x_2 + x_2 x_3 + x_3 x_1$"
            w3 = "$f(x_1, x_2) = -x_1^2 - 5x_2^2$"
            exp = "Dạng toàn phương là một đa thức thuần nhất bậc 2. Biểu thức $x_1^2 + 2x_1 x_2 + 3x_2 + 1$ có chứa số hạng bậc nhất ($3x_2$) và hằng số tự do ($1$) nên không phải dạng toàn phương."

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**", "difficulty": difficulty}

    else: # 6.4 Dấu của dạng toàn phương & Tiêu chuẩn Sylvester
        if mode == 0:
            # Tiêu chuẩn Sylvester xác định dương
            q_text = "Theo **tiêu chuẩn Sylvester**, dạng toàn phương $Q(x_1, \\dots, x_n)$ với ma trận đối xứng $A$ là **xác định dương** khi và chỉ khi:"
            cor = "Tất cả các định thức con chính góc đều dương nghiêm ngặt: $\\Delta_k > 0$ với mọi $k = 1, 2, \\dots, n$"
            w1 = "Tất cả các định thức con chính góc đều không âm: $\\Delta_k \\ge 0$"
            w2 = "Chỉ cần định thức toàn phần $\\det A > 0$"
            w3 = "Các định thức con chính góc đan dấu bắt đầu từ âm"
            exp = "Tiêu chuẩn Sylvester cho xác định dương: Mọi định thức con chính góc phải dương nghiêm ngặt: $\\Delta_1 > 0, \\Delta_2 > 0, \\dots, \\Delta_n > 0$."
        elif mode == 1:
            # Tiêu chuẩn Sylvester xác định âm
            q_text = "Theo tiêu chuẩn Sylvester, dạng toàn phương $Q$ là **xác định âm** khi và chỉ khi các định thức con chính góc thỏa mãn:"
            cor = "Đan dấu bắt đầu từ âm: $\\Delta_1 < 0, \\Delta_2 > 0, \\Delta_3 < 0, \\dots$ (tức $(-1)^k \\Delta_k > 0$)"
            w1 = "Tất cả các định thức con chính góc đều âm: $\\Delta_k < 0$"
            w2 = "Chỉ cần $\\det A < 0$"
            w3 = "Đan dấu bắt đầu từ dương: $\\Delta_1 > 0, \\Delta_2 < 0$"
            exp = "Quy tắc Sylvester xác định âm: $(-1)^k \\Delta_k > 0$ với mọi $k$. Tức $\\Delta_1 < 0, \\Delta_2 > 0, \\Delta_3 < 0, \\dots$."
        elif mode == 2:
            # Tham số m để dạng toàn phương xác định dương
            a_val = rng.choice([1, 2, 3])
            b_val = rng.choice([1, 2, 3])
            b_sq = b_val**2
            # Q = a x1^2 + 2b x1 x2 + m x2^2
            # Delta 1 = a > 0
            # Delta 2 = a*m - b^2 > 0 => m > b^2 / a
            if b_sq % a_val == 0:
                thresh_str = str(b_sq // a_val)
            else:
                thresh_str = f"\\dfrac{{{b_sq}}}{{{a_val}}}"
            q_text = f"Tìm điều kiện của tham số $m$ để dạng toàn phương $Q(x_1, x_2) = {a_val}x_1^2 + {2*b_val}x_1 x_2 + m x_2^2$ **xác định dương**:"
            cor = f"$m > {thresh_str}$"
            w1 = f"$m < {thresh_str}$"
            w2 = "$m > 0$"
            w3 = f"$m \\neq {thresh_str}$"
            exp = f"Ma trận $A = \\begin{{bmatrix}} {a_val} & {b_val} \\\\ {b_val} & m \\end{{bmatrix}}$. Theo Sylvester: $\\Delta_1 = {a_val} > 0$ và $\\Delta_2 = {a_val}m - {b_sq} > 0 \\iff m > {thresh_str}$."
        elif mode == 3:
            # Nhận diện xác định âm
            c1 = rng.choice([-2, -3, -4])
            c2 = rng.choice([-1, -5, -2])
            q_text = f"Dạng toàn phương $Q(x_1, x_2) = {c1}x_1^2 + ({c2})x_2^2$ thuộc loại nào sau đây?"
            cor = "Xác định âm"
            w1 = "Xác định dương"
            w2 = "Nửa xác định âm"
            w3 = "Không xác định dấu"
            exp = f"$Q(x_1, x_2) = {c1}x_1^2 + ({c2})x_2^2 < 0$ với mọi $(x_1, x_2) \\neq (0, 0)$ vì các hệ số đều âm nghiêm ngặt."
        elif mode == 4:
            # Không xác định dấu (trái dấu)
            c1 = rng.choice([1, 2, 3])
            c2 = rng.choice([-2, -3, -1])
            q_text = f"Dạng toàn phương $Q(x_1, x_2) = {c1}x_1^2 + ({c2})x_2^2$ thuộc loại nào sau đây?"
            cor = "Không xác định dấu (Indefinite)"
            w1 = "Xác định dương"
            w2 = "Xác định âm"
            w3 = "Nửa xác định dương"
            exp = f"$Q(1, 0) = {c1} > 0$ nhưng $Q(0, 1) = {c2} < 0$. Do nhận cả giá trị dương và âm nên không xác định dấu."
        elif mode == 5:
            # Nửa xác định dương (bình phương đúng)
            k_val = rng.choice([2, 3, 4])
            q_text = f"Dạng toàn phương $Q(x_1, x_2) = (x_1 + {k_val}x_2)^2$ thuộc loại nào sau đây?"
            cor = "Nửa xác định dương (bán xác định dương)"
            w1 = "Xác định dương"
            w2 = "Xác định âm"
            w3 = "Không xác định dấu"
            exp = f"$Q = (x_1 + {k_val}x_2)^2 \\ge 0$ với mọi véc tơ. Tuy nhiên với véc tơ khác không $({-k_val}, 1) \\neq (0, 0)$ thì $Q = 0$. Vì tồn tại $v \\neq \\theta$ mà $Q(v) = 0$ nên $Q$ chỉ là nửa xác định dương."
        elif mode == 6:
            # Phân loại dấu qua giá trị riêng
            q_text = "Dạng toàn phương $Q$ là **xác định dương** khi và chỉ khi tất cả các giá trị riêng $\\lambda_i$ của ma trận đối xứng $A$ thỏa mãn:"
            cor = "$\\lambda_i > 0$ với mọi $i = 1, 2, \\dots, n$"
            w1 = "$\\lambda_i \\ge 0$ với mọi $i$"
            w2 = "Chỉ cần giá trị riêng lớn nhất dương"
            w3 = "Tổng các giá trị riêng dương"
            exp = "Định lý: $Q$ xác định dương $\\iff$ mọi giá trị riêng $\\lambda_i > 0$. $Q$ xác định âm $\\iff$ mọi $\\lambda_i < 0$."
        elif mode == 7:
            # Tiêu chuẩn Sylvester 3 biến chứa tham số m (Độ khó: Khó)
            q_text = "Tìm điều kiện của tham số $m$ để dạng toàn phương $Q(x_1, x_2, x_3) = x_1^2 + 2x_2^2 + m x_3^2 + 2x_1 x_2 - 2x_2 x_3$ là **xác định dương**:"
            cor = "$m > 1$"
            w1 = "$m > 0$"
            w2 = "$m < 1$"
            w3 = "$m > 2$"
            exp = "Ma trận đối xứng của $Q$ là $A = \\begin{bmatrix} 1 & 1 & 0 \\\\ 1 & 2 & -1 \\\\ 0 & -1 & m \\end{bmatrix}$. Theo tiêu chuẩn Sylvester, $Q$ xác định dương khi:\n* $\\Delta_1 = 1 > 0$\n* $\\Delta_2 = \\begin{vmatrix} 1 & 1 \\\\ 1 & 2 \\end{vmatrix} = 2 - 1 = 1 > 0$\n* $\\Delta_3 = \\det A = 1(2m - 1) - 1(m - 0) = 2m - 1 - m = m - 1 > 0 \\iff m > 1$."
        elif mode == 8:
            # Ứng dụng Hessian trong cực trị
            q_text = "Trong bài toán cực trị hàm nhiều biến, nếu tại điểm dừng $M_0$ ma trận Hessian $H$ xác định âm thì hàm số đạt:"
            cor = "Cực đại địa phương tại $M_0$"
            w1 = "Cực tiểu địa phương tại $M_0$"
            w2 = "Điểm yên ngựa (không là cực trị)"
            w3 = "Giá trị nhỏ nhất toàn cục"
            exp = "Ứng dụng giải tích: Nếu ma trận vi phân cấp 2 (Hessian) xác định âm thì hàm số đạt cực đại địa phương; xác định dương thì đạt cực tiểu địa phương."
        else:
            # Tham số m để ma trận 2x2 xác định dương
            a11 = rng.choice([2, 3, 5])
            a12 = rng.choice([1, 2])
            thresh_frac = f"\\dfrac{{{a12**2}}}{{{a11}}}"
            q_text = f"Tìm điều kiện của tham số $m$ để ma trận $A = \\begin{{bmatrix}} {a11} & {a12} \\\\ {a12} & m \\end{{bmatrix}}$ biểu diễn một dạng toàn phương **xác định dương**:"
            cor = f"$m > {thresh_frac}$"
            w1 = f"$m < {thresh_frac}$"
            w2 = "$m > 0$"
            w3 = f"$m > {a11}$"
            exp = f"Theo Sylvester: $\\Delta_1 = {a11} > 0$ và $\\Delta_2 = {a11}m - {a12**2} > 0 \\iff m > {thresh_frac}$."

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**", "difficulty": difficulty}
