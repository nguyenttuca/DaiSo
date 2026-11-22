# -*- coding: utf-8 -*-
"""
scripts/generators_ch3.py
Chương 3: Ma trận và Định thức.
Gồm 4 dạng bài, mỗi dạng bài có 10 modes phong phú, sâu sắc về toán học,
được tham số hóa đa dạng đảm bảo sinh hàng chục câu hỏi độc nhất không trùng lặp.
"""

import random

def gen_ch3(sub, seed, make_unique_options):
    rng = random.Random(seed * 53 + sub * 113)
    mode = seed % 10

    if sub == 1: # 3.1 Các phép toán ma trận
        if mode == 0:
            q_text = "Điều kiện để thực hiện được phép nhân hai ma trận $A \\cdot B$ là:"
            cor = "Số cột của ma trận $A$ phải bằng số hàng của ma trận $B$"
            w1 = "Số hàng của $A$ phải bằng số hàng của $B$"
            w2 = "Hai ma trận $A$ và $B$ phải có cùng kích thước"
            w3 = "Cả hai ma trận phải là ma trận vuông cùng cấp"
            exp = "Để nhân $A_{m \\times p}$ với $B_{q \\times n}$, điều kiện bắt buộc là số cột của $A$ bằng số hàng của $B$ ($p = q$). Kết quả là $C_{m \\times n}$."
        elif mode == 1:
            m = rng.choice([2, 3, 4, 5])
            p = rng.choice([2, 3, 4])
            n = rng.choice([2, 3, 4, 5])
            while n == p:
                n = (n % 4) + 2
            while m == p:
                m = (m % 4) + 2
            q_text = f"Cho ma trận $A$ cỡ ${m} \\times {p}$ và ma trận $B$ cỡ ${p} \\times {n}$. Ma trận tích $C = AB$ có kích thước là:"
            cor = f"${m} \\times {n}$"
            w1 = f"${p} \\times {p}$"
            w2 = f"${n} \\times {m}$"
            w3 = f"${m} \\times {m}$"
            exp = f"Kích thước của ma trận tích: $({m} \\times {p}) \\times ({p} \\times {n}) = {m} \\times {n}$."
        elif mode == 2:
            a11 = rng.choice([1, 2, 3])
            a12 = rng.choice([2, -1, 3])
            a21 = rng.choice([0, 1, 4])
            a22 = rng.choice([2, 1, -2])
            b11 = rng.choice([2, 3, -1])
            b12 = rng.choice([1, -2, 0])
            b21 = rng.choice([1, 4, -3])
            b22 = rng.choice([2, 0, 3])
            c11 = a11*b11 + a12*b21
            q_text = f"Cho $A = \\begin{{bmatrix}} {a11} & {a12} \\\\ {a21} & {a22} \\end{{bmatrix}}$ và $B = \\begin{{bmatrix}} {b11} & {b12} \\\\ {b21} & {b22} \\end{{bmatrix}}$. Phần tử ở hàng 1, cột 1 của ma trận tích $C = AB$ là:"
            cor = f"${c11}$"
            w1 = f"${c11 + 2}$"
            w2 = f"${c11 - 3}$"
            w3 = f"${a11*b11}$"
            exp = f"$c_{{11}} = a_{{11}}b_{{11}} + a_{{12}}b_{{21}} = ({a11})({b11}) + ({a12})({b21}) = {a11*b11} + {a12*b21} = {c11}$."
        elif mode == 3:
            d1 = rng.choice([2, 3, -1, -4, 5])
            d2 = rng.choice([4, 5, -2, 1, 0])
            d3 = rng.choice([1, -3, 6, 2, -5])
            tr = d1 + d2 + d3
            q_text = f"Vết (trace) của ma trận $A = \\begin{{bmatrix}} {d1} & 7 & -4 \\\\ 3 & {d2} & 8 \\\\ 0 & -2 & {d3} \\end{{bmatrix}}$ bằng:"
            cor = f"${tr}$"
            w1 = f"${tr + 2}$"
            w2 = f"${tr - 1}$"
            w3 = f"${d1 * d2 * d3}$"
            exp = f"Vết của ma trận là tổng các phần tử trên đường chéo chính: $\\text{{tr}}(A) = ({d1}) + ({d2}) + ({d3}) = {tr}$."
        elif mode == 4:
            q_text = "Cho hai ma trận vuông $A, B$ cùng cấp. Khẳng định nào sau đây là **ĐÚNG**?"
            cor = "$(AB)^T = B^T A^T$"
            w1 = "$(AB)^T = A^T B^T$"
            w2 = "$AB = BA$ với mọi cặp ma trận vuông"
            w3 = "$(A + B)^T = A^T - B^T$"
            exp = "Tính chất chuyển vị của tích ma trận: $(AB)^T = B^T A^T$ (đổi thứ tự nhân)."
        elif mode == 5:
            q_text = "Ma trận vuông $A$ được gọi là **phản đối xứng** (skew-symmetric) nếu $A^T = -A$. Các phần tử trên đường chéo chính của $A$ bắt buộc phải:"
            cor = "Tất cả đều bằng 0"
            w1 = "Tất cả đều bằng 1"
            w2 = "Có tích bằng 1"
            w3 = "Tất cả đều là số âm"
            exp = "Từ $A^T = -A$, với các phần tử chéo ta có $a_{ii} = -a_{ii} \\iff 2a_{ii} = 0 \\iff a_{ii} = 0$."
        elif mode == 6:
            k = rng.choice([2, 3, 4, 5, 6, 7])
            q_text = f"Cho ma trận $A = \\begin{{bmatrix}} 1 & {k} \\\\ 0 & 1 \\end{{bmatrix}}$. Lũy thừa $A^n$ ($n \\in \\mathbb{{N}}^*$) bằng:"
            cor = f"$\\begin{{bmatrix}} 1 & {k}n \\\\ 0 & 1 \\end{{bmatrix}}$"
            w1 = f"$\\begin{{bmatrix}} 1 & {k}^n \\\\ 0 & 1 \\end{{bmatrix}}$"
            w2 = f"$\\begin{{bmatrix}} n & {k}n \\\\ 0 & n \\end{{bmatrix}}$"
            w3 = f"$\\begin{{bmatrix}} 1 & {k} \\\\ 0 & 1 \\end{{bmatrix}}$"
            exp = f"Quy nạp toán học: $A^2 = \\begin{{bmatrix}} 1 & 2({k}) \\\\ 0 & 1 \\end{{bmatrix}}$, ..., $A^n = \\begin{{bmatrix}} 1 & {k}n \\\\ 0 & 1 \\end{{bmatrix}}$."
        elif mode == 7:
            a = rng.choice([2, 3, -1])
            b = rng.choice([2, 4, 5])
            p = rng.choice([3, 4, 5])
            res_a = a ** p
            res_b = b ** p
            q_text = f"Cho ma trận đường chéo $D = \\operatorname{{diag}}({a}, {b})$. Lũy thừa $D^{{{p}}}$ bằng:"
            cor = f"$\\operatorname{{diag}}({res_a}, {res_b})$"
            w1 = f"$\\operatorname{{diag}}({a*p}, {b*p})$"
            w2 = f"$\\operatorname{{diag}}({res_a}, {b*p})$"
            w3 = f"$\\operatorname{{diag}}({a+p}, {b+p})$"
            exp = f"Lũy thừa ma trận đường chéo bằng lũy thừa từng phần tử chéo: $D^{{{p}}} = \\operatorname{{diag}}({a}^{{{p}}}, {b}^{{{p}}}) = \\operatorname{{diag}}({res_a}, {res_b})$."
        elif mode == 8:
            q_text = "Ma trận vuông $A$ được gọi là ma trận lũy linh (nilpotent) nếu tồn tại $k \\in \\mathbb{N}^*$ sao cho $A^k = O$. Khi đó:"
            cor = "Định thức $\\det A = 0$ và mọi giá trị riêng của $A$ đều bằng 0"
            w1 = "Định thức $\\det A = 1$"
            w2 = "Ma trận $A$ luôn khả nghịch"
            w3 = "Vết của $A$ bằng 1"
            exp = "Từ $A^k = O \\implies (\\det A)^k = \\det(A^k) = 0 \\implies \\det A = 0$."
        else:
            q_text = "Cho hai ma trận vuông $A, B$ cấp $n$. Biểu thức $\\text{tr}(AB)$ và $\\text{tr}(BA)$ có mối quan hệ:"
            cor = "$\\text{tr}(AB) = \\text{tr}(BA)$ luôn đúng với mọi ma trận vuông $A, B$"
            w1 = "$\\text{tr}(AB) = -\\text{tr}(BA)$"
            w2 = "$\\text{tr}(AB) \\neq \\text{tr}(BA)$ nói chung"
            w3 = "$\\text{tr}(AB) = \\text{tr}(A) \\cdot \\text{tr}(B)$"
            exp = "Định lý vết ma trận: Vết của tích hai ma trận có tính giao hoán: $\\text{tr}(AB) = \\text{tr}(BA)$ (dù $AB \\neq BA$)."

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    elif sub == 2: # 3.2 Định thức
        if mode == 0:
            k = rng.choice([2, 3, 4, 5])
            detA = rng.choice([2, 3, 5, -2, -3])
            n = rng.choice([2, 3, 4])
            res = (k**n) * detA
            q_text = f"Cho ma trận vuông $A$ cấp {n} có $\\det(A) = {detA}$. Định thức $\\det({k}A)$ bằng:"
            cor = f"${res}$"
            w1 = f"${k * detA}$"
            w2 = f"${detA**k}$"
            w3 = f"${res + 4}$"
            exp = f"Theo tính chất định thức: với ma trận cấp $n = {n}$, $\\det(k A) = k^n \\det(A) = ({k})^{{{n}}} \\cdot ({detA}) = {k**n} \\cdot ({detA}) = {res}$."
        elif mode == 1:
            detA = rng.choice([2, 3, 4, 5, -2])
            detB = rng.choice([-3, 5, -1, 4, -4])
            res = detA * detB
            q_text = f"Cho hai ma trận vuông cùng cấp $A$ và $B$ có $\\det(A) = {detA}, \\det(B) = {detB}$. Định thức $\\det(AB)$ bằng:"
            cor = f"${res}$"
            w1 = f"${detA + detB}$"
            w2 = f"${res + 2}$"
            w3 = f"${-res}$"
            exp = f"Định lý nhân định thức: $\\det(AB) = \\det(A) \\cdot \\det(B) = ({detA}) \\cdot ({detB}) = {res}$."
        elif mode == 2:
            detA = rng.choice([7, -5, 12, -8, 9])
            q_text = f"Cho ma trận vuông $A$ có $\\det(A) = {detA}$. Định thức của ma trận chuyển vị $\\det(A^T)$ bằng:"
            cor = f"${detA}$"
            w1 = f"${-detA}$"
            w2 = f"${1/detA:.2f}$"
            w3 = "$0$"
            exp = f"Tính chất định thức: Định thức của ma trận chuyển vị bằng định thức của chính nó: $\\det(A^T) = \\det(A) = {detA}$."
        elif mode == 3:
            q_text = "Khi đổi chỗ hai hàng (hoặc hai cột) của một ma trận vuông thì định thức của nó sẽ:"
            cor = "Đổi dấu"
            w1 = "Không thay đổi"
            w2 = "Bằng 0"
            w3 = "Nghịch đảo giá trị"
            exp = "Tính chất cơ bản: Mỗi phép đổi chỗ hai hàng (hoặc hai cột) làm định thức đổi dấu."
        elif mode == 4:
            q_text = "Nếu một ma trận vuông có hai hàng (hoặc hai cột) tỷ lệ với nhau, thì định thức của nó bằng:"
            cor = "$0$"
            w1 = "$1$"
            w2 = "$-1$"
            w3 = "Bằng tích hệ số tỷ lệ"
            exp = "Khi hai hàng tỷ lệ, ta có thể triệt tiêu một hàng thành toàn số 0 bằng phép biến đổi sơ cấp, do đó $\\det = 0$."
        elif mode == 5:
            d1 = rng.choice([2, 3, -1, 4])
            d2 = rng.choice([4, 5, 2, -3])
            d3 = rng.choice([1, -2, 3, 5])
            det_tri = d1 * d2 * d3
            q_text = f"Định thức của ma trận tam giác trên $A = \\begin{{bmatrix}} {d1} & 7 & 9 \\\\ 0 & {d2} & -3 \\\\ 0 & 0 & {d3} \\end{{bmatrix}}$ bằng:"
            cor = f"${det_tri}$"
            w1 = f"${d1 + d2 + d3}$"
            w2 = f"${det_tri + 2}$"
            w3 = "$0$"
            exp = f"Định thức của ma trận tam giác bằng tích các phần tử trên đường chéo chính: $\\det A = ({d1}) \\cdot ({d2}) \\cdot ({d3}) = {det_tri}$."
        elif mode == 6:
            q_text = "Định thức của một ma trận phản đối xứng cấp lẻ ($n = 3, 5, 7, \\dots$) luôn bằng:"
            cor = "$0$"
            w1 = "$1$"
            w2 = "$-1$"
            w3 = "Không xác định"
            exp = "Vì $A^T = -A \\implies \\det(A) = \\det(A^T) = \\det(-A) = (-1)^n \\det(A)$. Khi $n$ lẻ, $\\det(A) = -\\det(A) \\implies 2\\det(A) = 0 \\implies \\det A = 0$."
        elif mode == 7:
            q_text = "Cộng vào một hàng của ma trận vuông một bội số của hàng khác thì định thức của ma trận:"
            cor = "Hoàn toàn không thay đổi"
            w1 = "Tăng lên một lượng bằng hệ số bội"
            w2 = "Bị nhân với hệ số bội"
            w3 = "Đổi dấu"
            exp = "Phép biến đổi sơ cấp loại 3 ($h_i \\to h_i + k h_j$) không làm thay đổi giá trị của định thức."
        elif mode == 8:
            detA = rng.choice([2, 3, 4, 5])
            detD = rng.choice([3, 4, -2, -5])
            detM = detA * detD
            q_text = f"Cho ma trận khối $M = \\begin{{bmatrix}} A & B \\\\ O & D \\end{{bmatrix}}$ với $A, D$ là các ma trận vuông có $\\det A = {detA}, \\det D = {detD}$. Định thức $\\det M$ bằng:"
            cor = f"${detM}$"
            w1 = f"${detA + detD}$"
            w2 = f"${detA**detD}$"
            w3 = "$0$"
            exp = f"Định lý định thức ma trận khối tam giác: $\\det M = \\det A \\cdot \\det D = {detA} \\cdot ({detD}) = {detM}$."
        else:
            detA = rng.choice([2, 3, -2, -3])
            p = rng.choice([2, 3, 4])
            res = detA ** p
            q_text = f"Cho ma trận vuông $A$ có $\\det(A) = {detA}$. Định thức $\\det(A^{{{p}}})$ bằng:"
            cor = f"${res}$"
            w1 = f"${p * detA}$"
            w2 = f"${res + 2}$"
            w3 = f"${-res}$"
            exp = f"Áp dụng $\\det(A^k) = (\\det A)^k$: $\\det(A^{{{p}}}) = ({detA})^{{{p}}} = {res}$."

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    elif sub == 3: # 3.3 Ma trận nghịch đảo & Phần phụ đại số
        if mode == 0:
            q_text = "Điều kiện cần và đủ để một ma trận vuông $A$ có ma trận nghịch đảo $A^{-1}$ là:"
            cor = "$\\det(A) \\neq 0$ (ma trận không suy biến)"
            w1 = "$\\det(A) = 0$"
            w2 = "Các phần tử trên đường chéo chính khác 0"
            w3 = "$A$ phải là ma trận đối xứng"
            exp = "Ma trận vuông $A$ khả nghịch khi và chỉ khi định thức của nó khác 0: $\\det(A) \\neq 0$."
        elif mode == 1:
            detA = rng.choice([2, 3, 4, 5, 7, -2, -4, -5])
            q_text = f"Cho ma trận vuông $A$ khả nghịch có $\\det(A) = {detA}$. Định thức của ma trận nghịch đảo $\\det(A^{{-1}})$ bằng:"
            cor = f"$\\dfrac{{1}}{{{detA}}}$"
            w1 = f"${-detA}$"
            w2 = f"${detA}$"
            w3 = "$1$"
            exp = f"Từ $A \\cdot A^{{-1}} = I \\implies \\det(A) \\cdot \\det(A^{{-1}}) = 1 \\implies \\det(A^{{-1}}) = \\dfrac{{1}}{{\\det A}} = \\dfrac{{1}}{{{detA}}}$."
        elif mode == 2:
            q_text = "Cho hai ma trận vuông khả nghịch $A$ và $B$ cùng cấp. Ma trận nghịch đảo của tích $(AB)^{-1}$ là:"
            cor = "$B^{-1} A^{-1}$"
            w1 = "$A^{-1} B^{-1}$"
            w2 = "$B A^{-1}$"
            w3 = "$A B^{-1}$"
            exp = "Công thức nghịch đảo của tích: $(AB)^{-1} = B^{-1} A^{-1}$ (đổi thứ tự các ma trận)."
        elif mode == 3:
            a, b = rng.choice([1, 2, 3]), rng.choice([1, 2])
            c, d = rng.choice([1, 3]), rng.choice([4, 5])
            det_val = a*d - b*c
            if det_val == 0:
                d = d + 1
                det_val = a*d - b*c
            q_text = f"Cho ma trận $A = \\begin{{bmatrix}} {a} & {b} \\\\ {c} & {d} \\end{{bmatrix}}$. Định thức $\\det A$ bằng:"
            cor = f"${det_val}$"
            w1 = f"${det_val + 2}$"
            w2 = f"${a*d + b*c}$"
            w3 = f"${-det_val}$"
            exp = f"$\\det A = ad - bc = ({a})({d}) - ({b})({c}) = {a*d} - {b*c} = {det_val}$."
        elif mode == 4:
            q_text = "Phần phụ đại số $C_{ij}$ của phần tử $a_{ij}$ trong định thức ma trận vuông được tính bởi công thức:"
            cor = "$C_{ij} = (-1)^{i+j} M_{ij}$ (với $M_{ij}$ là định thức con bù)"
            w1 = "$C_{ij} = (-1)^{i \\cdot j} M_{ij}$"
            w2 = "$C_{ij} = M_{ij}$"
            w3 = "$C_{ij} = -M_{ij}$"
            exp = "Định nghĩa phần phụ đại số: $C_{ij} = (-1)^{i+j} M_{ij}$, trong đó $M_{ij}$ là định thức cấp $n-1$ thu được khi xóa hàng $i$ và cột $j$."
        elif mode == 5:
            detA = rng.choice([2, 3, 4])
            n = rng.choice([3, 4])
            res = detA ** (n - 1)
            q_text = f"Cho ma trận vuông $A$ cấp {n} có $\\det(A) = {detA}$. Định thức của ma trận phụ hợp $\\det(A^*)$ bằng:"
            cor = f"${res}$"
            w1 = f"${detA}$"
            w2 = f"${detA * n}$"
            w3 = f"${res + 2}$"
            exp = f"Tính chất: $A \\cdot A^* = \\det(A) \\cdot I \\implies \\det(A^*) = (\\det A)^{{n-1}} = ({detA})^{{{n-1}}} = {res}$."
        elif mode == 6:
            q_text = "Nghiệm của phương trình ma trận $AX = B$ (với ma trận vuông $A$ khả nghịch) là:"
            cor = "$X = A^{-1} B$"
            w1 = "$X = B A^{-1}$"
            w2 = "$X = B / A$"
            w3 = "$X = A B^{-1}$"
            exp = "Nhân cả hai vế về phía bên trái với $A^{-1}$: $A^{-1} (AX) = A^{-1} B \\iff X = A^{-1} B$."
        elif mode == 7:
            q_text = "Nghiệm của phương trình ma trận $XA = B$ (với ma trận vuông $A$ khả nghịch) là:"
            cor = "$X = B A^{-1}$"
            w1 = "$X = A^{-1} B$"
            w2 = "$X = B A$"
            w3 = "$X = A B$"
            exp = "Nhân cả hai vế về phía bên phải với $A^{-1}$: $(XA) A^{-1} = B A^{-1} \\iff X = B A^{-1}$."
        elif mode == 8:
            d1 = rng.choice([2, 3, 4, 5])
            d2 = rng.choice([3, 5, 7])
            q_text = f"Ma trận nghịch đảo của ma trận đường chéo $D = \\begin{{bmatrix}} {d1} & 0 \\\\ 0 & {d2} \\end{{bmatrix}}$ là:"
            cor = f"$\\begin{{bmatrix}} 1/{d1} & 0 \\\\ 0 & 1/{d2} \\end{{bmatrix}}$"
            w1 = f"$\\begin{{bmatrix}} {d2} & 0 \\\\ 0 & {d1} \\end{{bmatrix}}$"
            w2 = f"$\\begin{{bmatrix}} -{d1} & 0 \\\\ 0 & -{d2} \\end{{bmatrix}}$"
            w3 = f"$\\begin{{bmatrix}} 1/{d1*d2} & 0 \\\\ 0 & 1/{d1*d2} \\end{{bmatrix}}$"
            exp = "Nghịch đảo của ma trận đường chéo là ma trận đường chéo chứa nghịch đảo của từng phần tử trên đường chéo."
        else:
            m_val = rng.choice([1, 2, 3, -1, -2, 4, 5])
            m_shift_str = f"m - {m_val}" if m_val > 0 else (f"m + {-m_val}" if m_val < 0 else "m")
            q_text = "Tìm tham số $m$ để ma trận $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & " + m_shift_str + " \\end{bmatrix}$ **KHÔNG khả nghịch**:"
            cor = f"$m = {m_val + 6}$"
            w1 = f"$m \\neq {m_val + 6}$"
            w2 = f"$m = {m_val}$"
            w3 = "$m = 0$"
            exp = f"Ma trận không khả nghịch khi $\\det A = 0 \\iff 1({m_shift_str}) - 2(3) = 0 \\iff {m_shift_str} = 6 \\iff m = {m_val + 6}$."

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    else: # 3.4 Hạng ma trận
        if mode == 0:
            q_text = "Hạng của ma trận $A$ (ký hiệu $r(A)$ hoặc $\\operatorname{rank}(A)$) được định nghĩa là:"
            cor = "Cấp cao nhất của định thức con khác 0 của ma trận $A$"
            w1 = "Số phần tử khác 0 của ma trận $A$"
            w2 = "Tổng số hàng và số cột của ma trận $A$"
            w3 = "Số hàng có định thức bằng 0"
            exp = "Định nghĩa chuẩn: Hạng của ma trận là cấp cao nhất của các định thức con khác không trích từ ma trận đó (hoặc số hàng khác không của ma trận bậc thang)."
        elif mode == 1:
            m = rng.choice([2, 3, 4, 5])
            n = rng.choice([3, 4, 5, 6])
            max_r = min(m, n)
            q_text = f"Cho ma trận $A$ có kích thước ${m} \\times {n}$. Hạng của ma trận $A$ có thể nhận giá trị lớn nhất bằng:"
            cor = f"${max_r}$"
            w1 = f"${max(m, n)}$"
            w2 = f"${m * n}$"
            w3 = f"${m + n}$"
            exp = f"Tính chất cơ bản: $r(A) \\le \\min(m, n) = \\min({m}, {n}) = {max_r}$."
        elif mode == 2:
            q_text = "Mối quan hệ giữa hạng của ma trận $A$ và hạng của ma trận chuyển vị $A^T$ là:"
            cor = "$r(A^T) = r(A)$"
            w1 = "$r(A^T) = -r(A)$"
            w2 = "$r(A^T) \\le r(A)$"
            w3 = "$r(A^T) + r(A) = n$"
            exp = "Định lý: Hạng của ma trận theo hàng bằng hạng theo cột, do đó $r(A^T) = r(A)$."
        elif mode == 3:
            q_text = "Cho hai ma trận $A, B$ nhân được với nhau. Bất đẳng thức nào sau đây về hạng luôn **ĐÚNG**?"
            cor = "$r(AB) \\le \\min(r(A), r(B))$"
            w1 = "$r(AB) = r(A) \\cdot r(B)$"
            w2 = "$r(AB) \\ge r(A) + r(B)$"
            w3 = "$r(AB) = r(A) + r(B)$"
            exp = "Bất đẳng thức Sylvester: Hạng của một tích ma trận không vượt quá hạng của từng ma trận thành phần: $r(AB) \\le \\min(r(A), r(B))$."
        elif mode == 4:
            q_text = "Các phép biến đổi sơ cấp theo hàng (hoặc theo cột) tác động lên ma trận sẽ:"
            cor = "Không làm thay đổi hạng của ma trận"
            w1 = "Luôn làm tăng hạng của ma trận"
            w2 = "Luôn làm giảm hạng của ma trận"
            w3 = "Làm đổi dấu hạng của ma trận"
            exp = "Các phép biến đổi sơ cấp tương đương với việc nhân với ma trận khả nghịch, do đó bảo toàn hạng của ma trận."
        elif mode == 5:
            num_rows = rng.choice([2, 3, 4])
            q_text = f"Cho ma trận bậc thang có {num_rows} hàng khác không và 2 hàng toàn số 0. Hạng của ma trận này bằng:"
            cor = f"${num_rows}$"
            w1 = f"${num_rows + 2}$"
            w2 = "$2$"
            w3 = "$1$"
            exp = f"Hạng của ma trận bậc thang bằng đúng số hàng khác không, tức là bằng {num_rows}."
        elif mode == 6:
            n = rng.choice([2, 3, 4, 5])
            q_text = f"Hạng của ma trận vuông $A$ cấp {n} bằng {n} khi và chỉ khi:"
            cor = "$\\det(A) \\neq 0$ (ma trận không suy biến)"
            w1 = "$\\det(A) = 0$"
            w2 = f"Vết của $A$ bằng {n}"
            w3 = "$A$ là ma trận đối xứng"
            exp = f"Ma trận vuông cấp {n} có hạng đủ bằng {n} khi và chỉ khi định thức của nó khác 0: $\\det A \\neq 0$."
        elif mode == 7:
            m_val = rng.choice([1, 2, 3, -1, -2, 5, 4])
            m_shift_str = f"m - {m_val}" if m_val > 0 else (f"m + {-m_val}" if m_val < 0 else "m")
            q_text = "Tìm tham số $m$ để ma trận $A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 0 & 0 & " + m_shift_str + " \\end{bmatrix}$ có hạng $r(A) = 2$:"
            cor = f"$m = {m_val}$"
            w1 = f"$m \\neq {m_val}$"
            w2 = f"$m = {m_val + 2}$"
            w3 = f"$m = {m_val - 1}$"
            exp = f"Ma trận đã ở dạng bậc thang. Để có hạng bằng 2 thì hàng 3 phải là hàng toàn số 0, tức là {m_shift_str} = 0 \\iff m = {m_val}."
        elif mode == 8:
            dim_v = rng.choice([2, 3, 4])
            q_text = f"Cho véc tơ cột $u \\neq \\theta$ và véc tơ hàng $v^T \\neq \\theta$ trong không gian $\\mathbb{{R}}^{{{dim_v}}}$. Hạng của ma trận tích ngoài $A = u v^T$ bằng:"
            cor = "$1$"
            w1 = f"${dim_v}$"
            w2 = "$2$"
            w3 = "$0$"
            exp = "Mọi cột của ma trận $A = u v^T$ đều là bội số của véc tơ cột $u$, do đó không gian cột có số chiều bằng 1, suy ra $r(A) = 1$."
        else:
            q_text = "Hạng của ma trận không $O_{m \\times n}$ (tất cả phần tử đều bằng 0) bằng:"
            cor = "$0$"
            w1 = "$1$"
            w2 = "$\\min(m, n)$"
            w3 = "Không xác định"
            exp = "Theo quy ước và định nghĩa, ma trận không có hạng bằng 0 vì không có định thức con nào khác 0."

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}
