# -*- coding: utf-8 -*-
"""
scripts/generators_ch4.py
Chương 4: Hệ phương trình tuyến tính.
Gồm 4 dạng bài, mỗi dạng bài có 10 modes phong phú, sâu sắc về toán học,
được tham số hóa đa dạng đảm bảo sinh hàng chục câu hỏi độc nhất không trùng lặp.
"""

import random

def gen_ch4(sub, seed, make_unique_options):
    rng = random.Random(seed * 67 + sub * 127)
    mode = seed % 10

    if sub == 1: # 4.1 Kronecker-Capelli & Biện luận
        if mode == 0:
            q_text = "Định lý Kronecker - Capelli phát biểu rằng hệ phương trình tuyến tính $AX = B$ có nghiệm khi và chỉ khi:"
            cor = "$r(A) = r(\\bar{A})$ (hạng ma trận hệ số bằng hạng ma trận bổ sung)"
            w1 = "$r(A) < r(\\bar{A})$"
            w2 = "$r(A) > r(\\bar{A})$"
            w3 = "$\\det(A) \\neq 0$"
            exp = "Định lý Kronecker-Capelli: Hệ có nghiệm $\\iff r(A) = r(\\bar{A})$. Nếu $r(A) < r(\\bar{A})$ thì hệ vô nghiệm."
        elif mode == 1:
            n_vars = rng.choice([3, 4, 5])
            q_text = f"Một hệ gồm {n_vars} phương trình tuyến tính và {n_vars} ẩn số có **nghiệm duy nhất** khi và chỉ khi:"
            cor = f"$r(A) = r(\\bar{{A}}) = {n_vars}$ (hoặc $\\det A \\neq 0$)"
            w1 = f"$r(A) = r(\\bar{{A}}) < {n_vars}$"
            w2 = "$r(A) < r(\\bar{A})$"
            w3 = "$\\det A = 0$"
            exp = f"Hệ vuông có nghiệm duy nhất khi hạng của ma trận hệ số bằng hạng ma trận mở rộng và bằng đúng số ẩn $n = {n_vars}$."
        elif mode == 2:
            n_vars = rng.choice([3, 4, 5])
            q_text = f"Một hệ phương trình tuyến tính gồm {n_vars} ẩn số có **vô số nghiệm** khi và chỉ khi:"
            cor = f"$r(A) = r(\\bar{{A}}) < {n_vars}$"
            w1 = f"$r(A) = r(\\bar{{A}}) = {n_vars}$"
            w2 = "$r(A) < r(\\bar{A})$"
            w3 = f"$r(A) > {n_vars}$"
            exp = f"Hệ có vô số nghiệm khi hệ có nghiệm và hạng nhỏ hơn số ẩn: $r < n = {n_vars}$."
        elif mode == 3:
            q_text = "Một hệ phương trình tuyến tính $AX = B$ **vô nghiệm** khi và chỉ khi:"
            cor = "$r(A) < r(\\bar{A})$"
            w1 = "$r(A) = r(\\bar{A})$"
            w2 = "$r(A) > r(\\bar{A})$"
            w3 = "$\\det A \\neq 0$"
            exp = "Khi khử Gauss xuất hiện hàng dạng $[0 \\; 0 \\; \\dots \\; 0 \\mid b]$ với $b \\neq 0$, khi đó $r(A) < r(\\bar{A})$ và hệ vô nghiệm."
        elif mode == 4:
            m_val = rng.choice([1, 2, 3, -1, -2, 4])
            q_text = "Tìm tham số $m$ để hệ $\\begin{cases} x + y + z = 1 \\\\ 2x + 3y + z = 2 \\\\ x + 2y + (m - " + str(m_val) + ")z = 3 \\end{cases}$ có **nghiệm duy nhất**:"
            cor = f"$m \\neq {m_val}$"
            w1 = f"$m = {m_val}$"
            w2 = "$m = 0$"
            w3 = "Mọi $m \\in \\mathbb{R}$"
            exp = f"Tính định thức ma trận hệ số: $\\det A = m - {m_val}$. Hệ có nghiệm duy nhất $\\iff \\det A \\neq 0 \\iff m \\neq {m_val}$."
        elif mode == 5:
            m_eq = rng.choice([2, 3])
            n_var = m_eq + rng.choice([1, 2])
            q_text = f"Một hệ phương trình gồm {m_eq} phương trình và {n_var} ẩn số ($m < n$). Khẳng định nào sau đây là **ĐÚNG**?"
            cor = "Nếu hệ có nghiệm thì chắc chắn hệ có vô số nghiệm (không thể có nghiệm duy nhất)"
            w1 = "Hệ luôn luôn có nghiệm duy nhất"
            w2 = "Hệ luôn luôn vô nghiệm"
            w3 = f"Hệ luôn có đúng {m_eq} nghiệm"
            exp = f"Vì $r(A) \\le {m_eq} < {n_var}$, nên nếu hệ có nghiệm ($r(A) = r(\\bar{{A}})$) thì $r < n$, do đó chắc chắn có ít nhất $n - r > 0$ ẩn tự do, suy ra có vô số nghiệm."
        elif mode == 6:
            r = rng.choice([2, 3, 4])
            n = r + rng.choice([1, 2, 3])
            k = n - r
            q_text = f"Cho hệ phương trình tuyến tính gồm {n} ẩn số. Biết sau khi khử Gauss, ma trận hệ số có hạng $r(A) = r(\\bar{{A}}) = {r}$. Số ẩn tự do của hệ bằng:"
            cor = f"${k}$"
            w1 = f"${r}$"
            w2 = f"${n}$"
            w3 = f"${k + 1}$"
            exp = f"Số ẩn tự do trong không gian nghiệm bằng số ẩn trừ đi hạng: $k = n - r = {n} - {r} = {k}$."
        elif mode == 7:
            m_val = rng.choice([1, 2, 3, 4, 5, -1, -2])
            val_b = rng.choice([3, 5, 7])
            q_text = "Sau khi biến đổi sơ cấp, ma trận bổ sung của hệ có dạng $\\begin{bmatrix} 1 & 2 & 1 & 3 \\\\ 0 & 1 & 2 & 1 \\\\ 0 & 0 & m - " + str(m_val) + " & " + str(val_b) + " \\end{bmatrix}$. Hệ vô nghiệm khi:"
            cor = f"$m = {m_val}$"
            w1 = f"$m \\neq {m_val}$"
            w2 = "$m = 0$"
            w3 = "$m > 0$"
            exp = f"Khi $m = {m_val}$, hàng cuối trở thành $[0 \\; 0 \\; 0 \\mid {val_b}]$, tương đương $0 = {val_b}$ (vô lý). Do đó $r(A) = 2 < r(\\bar{{A}}) = 3$, hệ vô nghiệm."
        elif mode == 8:
            rA = rng.choice([2, 3])
            rAbar = rA + 1
            q_text = f"Hệ phương trình tuyến tính $AX = B$ có hạng ma trận hệ số $r(A) = {rA}$ và hạng ma trận bổ sung $r(\\bar{{A}}) = {rAbar}$. Kết luận gì về số nghiệm của hệ?"
            cor = "Hệ chắc chắn vô nghiệm"
            w1 = "Hệ có nghiệm duy nhất"
            w2 = f"Hệ có vô số nghiệm phụ thuộc {rA} ẩn tự do"
            w3 = f"Hệ có đúng {rA} nghiệm phân biệt"
            exp = f"Theo định lý Kronecker-Capelli, vì $r(A) = {rA} < r(\\bar{{A}}) = {rAbar}$ nên hệ phương trình vô nghiệm."
        else:
            q_text = "Ma trận bổ sung $\\bar{A}$ của hệ phương trình tuyến tính $AX = B$ là ma trận:"
            cor = "Được tạo bằng cách ghép cột hệ số tự do $B$ vào bên phải ma trận hệ số $A$: $\\bar{A} = [A \\mid B]$"
            w1 = "Là ma trận chuyển vị của $A$"
            w2 = "Là ma trận nghịch đảo của $A$"
            w3 = "Là ma trận phụ hợp của $A$"
            exp = "Ma trận bổ sung ký hiệu $\\bar{A} = [A \\mid B]$, gồm $n$ cột của $A$ và cột thứ $n+1$ là cột tự do $B$."

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    elif sub == 2: # 4.2 Phương pháp Cramer
        if mode == 0:
            q_text = "Điều kiện để áp dụng được quy tắc Cramer giải hệ phương trình tuyến tính là:"
            cor = "Số phương trình bằng số ẩn ($m = n$) và định thức chính $D = \\det(A) \\neq 0$"
            w1 = "Số phương trình lớn hơn số ẩn"
            w2 = "Định thức chính $D = 0$"
            w3 = "Ma trận hệ số phải là ma trận đường chéo"
            exp = "Quy tắc Cramer chỉ áp dụng cho hệ vuông ($n$ phương trình $n$ ẩn) có định thức chính khác 0 ($D \\neq 0$)."
        elif mode == 1:
            D = rng.choice([2, 3, 4, 5, -2, -3])
            mult = rng.choice([1, 2, 3, -1, -2, 4])
            Dx = D * mult
            q_text = f"Cho hệ phương trình Cramer có định thức chính $D = {D}$ và định thức phụ $D_x = {Dx}$. Nghiệm $x$ của hệ bằng:"
            cor = f"$x = {mult}$"
            w1 = f"$x = {mult + 1}$"
            w2 = f"$x = {mult - 1}$"
            w3 = f"$x = {-mult if mult != 0 else 5}$"
            exp = f"Theo công thức Cramer: $x = \\dfrac{{D_x}}{{D}} = \\dfrac{{{Dx}}}{{{D}}} = {mult}$."
        elif mode == 2:
            D = rng.choice([2, 3, 4, 5])
            mult_y = rng.choice([1, -2, 3, -4])
            Dy = D * mult_y
            q_text = f"Trong một hệ Cramer 3 ẩn, định thức chính $D = {D}$, định thức phụ $D_y = {Dy}$. Giá trị của ẩn $y$ là:"
            cor = f"$y = {mult_y}$"
            w1 = f"$y = {mult_y + 1}$"
            w2 = f"$y = {mult_y - 1}$"
            w3 = f"$y = {-mult_y}$"
            exp = f"$y = \\dfrac{{D_y}}{{D}} = \\dfrac{{{Dy}}}{{{D}}} = {mult_y}$."
        elif mode == 3:
            q_text = "Cách tính định thức phụ $D_j$ trong quy tắc Cramer là:"
            cor = "Thay cột thứ $j$ của ma trận hệ số $A$ bằng cột hệ số tự do $B$, rồi tính định thức"
            w1 = "Xóa hàng $j$ và cột $j$ của ma trận hệ số $A$"
            w2 = "Nhân định thức chính $D$ với hệ số tự do $b_j$"
            w3 = "Thay hàng thứ $j$ bằng hàng hệ số tự do"
            exp = "Định nghĩa định thức phụ: $D_j$ là định thức của ma trận thu được khi thay cột thứ $j$ của $A$ bằng cột vế phải $B$."
        elif mode == 4:
            q_text = "Trong hệ phương trình vuông cấp $n$, nếu định thức chính $D = 0$ và tồn tại ít nhất một định thức phụ $D_j \\neq 0$, thì hệ phương trình:"
            cor = "Chắc chắn vô nghiệm"
            w1 = "Chắc chắn có vô số nghiệm"
            w2 = "Có nghiệm duy nhất"
            w3 = "Có nghiệm tầm thường"
            exp = "Nếu $D = 0$ mà $D_j \\neq 0$ thì phương trình tương ứng $0 \\cdot x_j = D_j \\neq 0$ vô nghiệm, dẫn đến toàn hệ vô nghiệm."
        elif mode == 5:
            q_text = "Trong hệ phương trình vuông cấp $n$, nếu $D = 0$ và tất cả các định thức phụ $D_1 = D_2 = \\dots = D_n = 0$, thì hệ phương trình:"
            cor = "Vô nghiệm hoặc có vô số nghiệm (cần dùng phương pháp Gauss để kết luận chính xác)"
            w1 = "Chắc chắn có vô số nghiệm"
            w2 = "Chắc chắn có nghiệm duy nhất bằng 0"
            w3 = "Chắc chắn vô nghiệm"
            exp = "Bẫy Cramer: $D = 0$ và mọi $D_j = 0$ KHÔNG ĐỒNG NGHĨA với vô số nghiệm. Hệ vẫn có thể vô nghiệm. Cần dùng phương pháp khử Gauss để kết luận."
        elif mode == 6:
            m_val = rng.choice([1, 2, 3, -1, -2, 4, 5])
            q_text = "Tìm tham số $m$ để hệ phương trình $\\begin{cases} mx + y = 1 \\\\ " + str(m_val) + "x + y = 2 \\end{cases}$ giải được bằng quy tắc Cramer:"
            cor = f"$m \\neq {m_val}$"
            w1 = f"$m = {m_val}$"
            w2 = "$m = 0$"
            w3 = "$m > 0$"
            exp = f"Định thức chính $D = m - {m_val}$. Hệ là hệ Cramer $\\iff D \\neq 0 \\iff m \\neq {m_val}$."
        elif mode == 7:
            q_text = "Công thức nghiệm của hệ phương trình ma trận $AX = B$ với $A$ vuông khả nghịch là:"
            cor = "$X = A^{-1} B$"
            w1 = "$X = B A^{-1}$"
            w2 = "$X = A B$"
            w3 = "$X = B / A$"
            exp = "Nhân trái hai vế với $A^{-1}$: $A^{-1}AX = A^{-1}B \\iff X = A^{-1}B$."
        elif mode == 8:
            q_text = "Ưu thế lớn nhất của phương pháp khử Gauss so với quy tắc Cramer khi giải hệ tuyến tính lớn ($n \\ge 4$) là:"
            cor = "Độ phức tạp tính toán của Gauss là $O(n^3)$, nhỏ hơn rất nhiều so với Cramer $O((n+1)!)$"
            w1 = "Gauss cho nghiệm chính xác tuyệt đối không có sai số"
            w2 = "Gauss chỉ áp dụng được cho hệ có số phương trình bằng số ẩn"
            w3 = "Cramer không thể lập trình trên máy tính"
            exp = "Độ phức tạp của Cramer bằng $(n+1)$ lần tính định thức cấp $n$, xấp xỉ $O(n!)$, trong khi khử Gauss chỉ tốn khoảng $\\frac{2}{3} n^3$ phép tính."
        else:
            D = rng.choice([2, 3])
            x_ans, y_ans, z_ans = rng.choice([1, 2]), rng.choice([-1, -2]), rng.choice([2, 3])
            Dx = D * x_ans
            Dy = D * y_ans
            Dz = D * z_ans
            sum_ans = x_ans + y_ans + z_ans
            q_text = f"Cho hệ phương trình Cramer có $D = {D}, D_x = {Dx}, D_y = {Dy}, D_z = {Dz}$. Tổng các nghiệm $x + y + z$ bằng:"
            cor = f"${sum_ans}$"
            w1 = f"${sum_ans + 2}$"
            w2 = f"${sum_ans - 1}$"
            w3 = f"${D * sum_ans}$"
            exp = f"$x = {Dx}/{D} = {x_ans}$, $y = {Dy}/{D} = {y_ans}$, $z = {Dz}/{D} = {z_ans}$. Tổng $x + y + z = {sum_ans}$."

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    elif sub == 3: # 4.3 Khử Gauss
        if mode == 0:
            n_vars = rng.choice([3, 4, 5, 6])
            r_val = rng.choice([1, 2, 3])
            if r_val >= n_vars: r_val = n_vars - 1
            free_vars = n_vars - r_val
            q_text = f"Một hệ phương trình tuyến tính gồm {n_vars} ẩn số có ma trận hệ số sau khi khử Gauss chứa đúng {r_val} phần tử chốt (pivot). Số ẩn cơ sở và số ẩn tự do của hệ lần lượt là:"
            cor = f"{r_val} và {free_vars}"
            w1 = f"{free_vars} và {r_val}"
            w2 = f"{r_val} và {n_vars}"
            w3 = f"{n_vars} và {free_vars}"
            exp = f"Số ẩn cơ sở bằng số phần tử chốt (hạng $r = {r_val}$). Số ẩn tự do bằng số ẩn trừ đi số ẩn cơ sở: $n - r = {n_vars} - {r_val} = {free_vars}$."
        elif mode == 1:
            q_text = "Dạng ma trận bậc thang thu gọn (Reduced Row Echelon Form - RREF) có đặc điểm:"
            cor = "Mỗi phần tử chốt (pivot) bằng 1 và là phần tử khác 0 duy nhất trên cột của nó"
            w1 = "Tất cả các phần tử ngoài đường chéo chính đều bằng 1"
            w2 = "Chỉ có các phần tử trên hàng đầu tiên khác 0"
            w3 = "Là ma trận tam giác dưới"
            exp = "Định nghĩa RREF: Các phần tử chốt đều bằng 1 và trên cột chứa phần tử chốt, tất cả các phần tử còn lại đều bằng 0."
        elif mode == 2:
            q_text = "Trong ma trận bậc thang, các ẩn ứng với các cột **chứa phần tử chốt (pivot)** được gọi là:"
            cor = "Ẩn cơ sở (ẩn chính)"
            w1 = "Ẩn tự do"
            w2 = "Hệ số tự do"
            w3 = "Nghiệm tầm thường"
            exp = "Ẩn ứng với cột có phần tử chốt gọi là ẩn cơ sở. Ẩn ứng với cột không có phần tử chốt gọi là ẩn tự do."
        elif mode == 3:
            idx = rng.choice([1, 2, 3, 4])
            if idx == 1:
                q_text = "Cho hệ phương trình 4 ẩn $x_1, x_2, x_3, x_4$. Sau khi khử Gauss ta được hệ: $\\begin{cases} x_1 + 2x_2 - x_4 = 1 \\\\ x_3 + 2x_4 = 3 \\ end{cases}$. Các ẩn tự do là:".replace(" ", "")
                q_text = "Cho hệ phương trình 4 ẩn $x_1, x_2, x_3, x_4$. Sau khi khử Gauss ta được hệ: $\\begin{cases} x_1 + 2x_2 - x_4 = 1 \\\\ x_3 + 2x_4 = 3 \\end{cases}$. Các ẩn tự do là:"
                cor = "$x_2$ và $x_4$"
                w1 = "$x_1$ và $x_3$"
                w2 = "Chỉ có $x_4$"
                w3 = "Không có ẩn tự do nào"
                exp = "Ẩn cơ sở là $x_1$ và $x_3$. Các ẩn còn lại $x_2, x_4$ là ẩn tự do."
            elif idx == 2:
                q_text = "Cho hệ phương trình 4 ẩn $x_1, x_2, x_3, x_4$. Sau khi khử Gauss ta được hệ: $\\begin{cases} x_1 - x_3 + 2x_4 = 0 \\\\ x_2 + 3x_3 = 1 \\end{cases}$. Các ẩn tự do là:"
                cor = "$x_3$ và $x_4$"
                w1 = "$x_1$ và $x_2$"
                w2 = "Chỉ có $x_3$"
                w3 = "Không có ẩn tự do nào"
                exp = "Ẩn cơ sở là $x_1$ và $x_2$. Các cột 3 và 4 không chứa chốt nên $x_3, x_4$ là các ẩn tự do."
            elif idx == 3:
                q_text = "Cho hệ phương trình 3 ẩn $x, y, z$. Sau khi khử Gauss ta được hệ: $x - 2y + 3z = 5$. Số ẩn tự do của hệ bằng:"
                cor = "$2$"
                w1 = "$1$"
                w2 = "$3$"
                w3 = "$0$"
                exp = "Số ẩn là 3, số phương trình là 1, số ẩn tự do là $3 - 1 = 2$."
            else:
                q_text = "Cho hệ phương trình 5 ẩn $x_1, \\dots, x_5$ có ma trận bậc thang chứa 3 hàng khác không. Số ẩn tự do của hệ bằng:"
                cor = "$2$"
                w1 = "$3$"
                w2 = "$5$"
                w3 = "$1$"
                exp = "Số ẩn tự do bằng $n - r = 5 - 3 = 2$."
        elif mode == 4:
            a = rng.choice([2, 3, 4])
            b = rng.choice([1, 5, 7])
            q_text = f"Cho hệ phương trình 2 ẩn $\\begin{{cases}} x_1 + {a}x_2 = {b} \\end{{cases}}$. Nếu đặt ẩn tự do $x_2 = t$, thì nghiệm tổng quát của hệ là:"
            cor = f"$x_1 = {b} - {a}t, \\, x_2 = t$ ($t \\in \\mathbb{{R}}$)"
            w1 = f"$x_1 = {b} + {a}t, \\, x_2 = t$"
            w2 = f"$x_1 = t, \\, x_2 = {b} - {a}t$"
            w3 = f"$x_1 = {b}, \\, x_2 = {a}t$"
            exp = f"Rút $x_1$ theo $x_2$: $x_1 = {b} - {a}x_2 = {b} - {a}t$."
        elif mode == 5:
            z_val = rng.choice([1, 2, 3])
            y_val = rng.choice([2, 4])
            x_val = rng.choice([1, 3])
            eq3 = z_val
            eq2 = y_val + z_val
            eq1 = x_val + y_val + z_val
            q_text = f"Giải hệ phương trình tam giác bằng phương pháp thế ngược: $\\begin{{cases}} x + y + z = {eq1} \\\\ y + z = {eq2} \\\\ z = {eq3} \\end{{cases}}$. Nghiệm $(x, y, z)$ của hệ là:"
            cor = f"({x_val}, {y_val}, {z_val})"
            w1 = f"({y_val}, {x_val}, {z_val})"
            w2 = f"({x_val}, {z_val}, {y_val})"
            w3 = f"({x_val + 1}, {y_val - 1}, {z_val})"
            exp = f"Thế ngược từ dưới lên: $z = {eq3} \\implies y = {eq2} - {eq3} = {y_val} \\implies x = {eq1} - {eq2} = {x_val}$."
        elif mode == 6:
            p_extra = rng.choice([2, 3, 5, 7, 9, 11])
            q_text = f"Trong quá trình khử Gauss đưa ma trận về bậc thang, nếu hàng cuối cùng có dạng $[0 \\; 0 \\; 0 \\mid {p_extra}]$ thì hệ phương trình:"
            cor = "Chắc chắn vô nghiệm"
            w1 = "Có nghiệm duy nhất"
            w2 = "Có vô số nghiệm"
            w3 = "Có nghiệm bằng 0"
            exp = f"Hàng $[0 \\dots 0 \\mid {p_extra}]$ tương đương với phương trình $0 = {p_extra} \\neq 0$, phương trình này vô nghiệm nên toàn hệ vô nghiệm."
        elif mode == 7:
            step_choice = rng.choice([1, 2])
            if step_choice == 1:
                q_text = "Phương pháp thế ngược (Back-substitution) trong thuật toán Gauss được thực hiện theo chiều nào?"
                cor = "Từ phương trình cuối cùng giải ngược lên phương trình đầu tiên"
                w1 = "Từ phương trình đầu tiên giải dần xuống dưới"
                w2 = "Từ giữa hệ phương trình giải ra hai bên"
                w3 = "Giải đồng thời tất cả các phương trình cùng lúc"
                exp = "Sau khi đưa về bậc thang, phương trình cuối có ít ẩn nhất, ta giải ẩn đó rồi thế ngược lên các phương trình trên."
            else:
                q_text = "Trong thuật toán Gauss-Jordan, sau khi đã khử xuôi về ma trận bậc thang, bước tiếp theo để tìm RREF là:"
                cor = "Khử ngược từ dưới lên trên để triệt tiêu các phần tử nằm phía trên phần tử chốt"
                w1 = "Tiếp tục khử từ trái sang phải"
                w2 = "Tính định thức của ma trận"
                w3 = "Đổi chỗ các cột của ma trận"
                exp = "Gauss-Jordan tiếp tục khử ngược từ dưới lên để biến các phần tử phía trên các phần tử chốt thành 0."
        elif mode == 8:
            q_text = "Ứng dụng thuật toán Gauss-Jordan để tìm ma trận nghịch đảo $A^{-1}$ được thực hiện bằng cách biến đổi ma trận khối:"
            cor = "$[A \\mid I] \\longrightarrow [I \\mid A^{-1}]$"
            w1 = "$[A \\mid B] \\longrightarrow [I \\mid X]$"
            w2 = "$[I \\mid A] \\longrightarrow [A^{-1} \\mid I]$"
            w3 = "$[A \\mid A^T] \\longrightarrow [I \\mid A^{-1}]$"
            exp = "Phương pháp Gauss-Jordan tìm nghịch đảo: Ghép ma trận đơn vị $I$ vào bên phải $A$, dùng biến đổi sơ cấp theo hàng đưa $A$ về $I$, khi đó phần bên phải tự động trở thành $A^{-1}$."
        else:
            n_sz = rng.choice([3, 4, 5])
            q_text = f"Cho hệ phương trình gồm {n_sz} phương trình và {n_sz} ẩn số có ma trận hệ số tam giác trên với tất cả các phần tử trên đường chéo chính đều khác 0. Số nghiệm của hệ là:"
            cor = "Hệ có nghiệm duy nhất"
            w1 = "Hệ có vô số nghiệm"
            w2 = "Hệ vô nghiệm"
            w3 = "Hệ có đúng 2 nghiệm"
            exp = "Khi ma trận tam giác trên có các phần tử chéo khác 0 thì định thức $\\det A \\neq 0$, do đó hệ luôn có nghiệm duy nhất."

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    else: # 4.4 Hệ thuần nhất
        if mode == 0:
            q_text = "Hệ phương trình tuyến tính thuần nhất $AX = 0$:"
            cor = "Luôn luôn có nghiệm (ít nhất là nghiệm tầm thường $X = 0$)"
            w1 = "Có thể vô nghiệm nếu các hệ số tự do bằng 0"
            w2 = "Chỉ có nghiệm khi ma trận $A$ khả nghịch"
            w3 = "Luôn luôn có vô số nghiệm"
            exp = "Vì $X = (0, 0, \\dots, 0)^T$ luôn thỏa mãn $A \\cdot 0 = 0$, nên hệ thuần nhất KHÔNG BAO GIỜ vô nghiệm."
        elif mode == 1:
            n_vars = rng.choice([3, 4, 5])
            q_text = f"Điều kiện cần và đủ để hệ phương trình thuần nhất gồm {n_vars} ẩn có **nghiệm không tầm thường** (nghiệm khác 0) là:"
            cor = f"$r(A) < {n_vars}$ (hoặc $\\det A = 0$ nếu là ma trận vuông)"
            w1 = f"$r(A) = {n_vars}$"
            w2 = "$\\det A \\neq 0$"
            w3 = f"$r(A) > {n_vars}$"
            exp = f"Hệ thuần nhất có nghiệm không tầm thường khi và chỉ khi hệ có vô số nghiệm, tức là hạng của ma trận hệ số nhỏ hơn số ẩn: $r(A) < {n_vars}$."
        elif mode == 2:
            n_vars = rng.choice([3, 4, 5])
            q_text = f"Tập hợp tất cả các nghiệm của hệ phương trình thuần nhất gồm {n_vars} ẩn $AX = 0$ tạo thành:"
            cor = f"Một không gian véc tơ con của $\\mathbb{{R}}^{{{n_vars}}}$ (gọi là không gian nghiệm)"
            w1 = f"Một mặt cầu trong $\\mathbb{{R}}^{{{n_vars}}}$"
            w2 = "Một tập hợp hữu hạn các điểm"
            w3 = "Không phải là một không gian véc tơ vì không chứa véc tơ không"
            exp = "Nếu $AX_1 = 0$ và $AX_2 = 0$ thì $A(c_1 X_1 + c_2 X_2) = 0$, do đó tập nghiệm đóng kín với phép cộng và nhân vô hướng, tạo thành một không gian con (hạt nhân $\\ker A$)."
        elif mode == 3:
            n = rng.choice([4, 5, 6])
            r = rng.choice([2, 3])
            dimW = n - r
            q_text = f"Cho hệ phương trình thuần nhất gồm {n} ẩn số. Biết hạng của ma trận hệ số bằng {r}. Số chiều của không gian nghiệm bằng:"
            cor = f"${dimW}$"
            w1 = f"${r}$"
            w2 = f"${n}$"
            w3 = f"${dimW + 1}$"
            exp = f"Số chiều của không gian nghiệm của hệ thuần nhất bằng số ẩn trừ đi hạng: $\\dim W = n - r(A) = {n} - {r} = {dimW}$."
        elif mode == 4:
            q_text = "Một **hệ nghiệm cơ bản** (fundamental system of solutions) của hệ thuần nhất $AX = 0$ là:"
            cor = "Một cơ sở của không gian nghiệm của hệ"
            w1 = "Tập hợp tất cả các nghiệm của hệ"
            w2 = "Tập hợp các nghiệm có tọa độ nguyên"
            w3 = "Nghiệm tầm thường duy nhất của hệ"
            exp = "Theo định nghĩa, hệ nghiệm cơ bản chính là một cơ sở của không gian nghiệm, gồm đúng $n - r(A)$ véc tơ nghiệm độc lập tuyến tính."
        elif mode == 5:
            q_text = "Mọi nghiệm $X$ của hệ thuần nhất đều có thể biểu diễn qua hệ nghiệm cơ bản $\\{e_1, e_2, \\dots, e_k\\}$ dưới dạng:"
            cor = "$X = c_1 e_1 + c_2 e_2 + \\dots + c_k e_k$ với $c_i \\in \\mathbb{R}$"
            w1 = "$X = e_1 + e_2 + \\dots + e_k$"
            w2 = "$X = c_1 e_1 \\cdot c_2 e_2$"
            w3 = "$X = e_1 \\times e_2$"
            exp = "Vì hệ nghiệm cơ bản là một cơ sở của không gian nghiệm, nên mọi nghiệm đều là tổ hợp tuyến tính duy nhất của các véc tơ cơ sở đó."
        elif mode == 6:
            n_dim = rng.choice([3, 4, 5])
            q_text = f"Trong không gian $\\mathbb{{R}}^{{{n_dim}}}$, hệ nghiệm cơ bản của một phương trình thuần nhất độc lập duy nhất có bao nhiêu véc tơ?"
            cor = f"${n_dim - 1}$ véc tơ"
            w1 = "$1$ véc tơ"
            w2 = f"${n_dim}$ véc tơ"
            w3 = "Vô số véc tơ"
            exp = f"Số ẩn là {n_dim}, số phương trình độc lập là 1 ($r = 1$). Số véc tơ trong hệ nghiệm cơ bản bằng $n - r = {n_dim} - 1 = {n_dim - 1}$ véc tơ."
        elif mode == 7:
            m_val = rng.choice([1, 2, 3, -1, -2, 4])
            q_text = "Tìm tham số $m$ để hệ thuần nhất $\\begin{cases} x + 2y = 0 \\\\ 3x + (m - " + str(m_val) + ")y = 0 \\end{cases}$ có **nghiệm không tầm thường**:"
            cor = f"$m = {m_val + 6}$"
            w1 = f"$m \\neq {m_val + 6}$"
            w2 = f"$m = {m_val}$"
            w3 = "$m = 0$"
            exp = f"Hệ thuần nhất có nghiệm không tầm thường khi $\\det A = 0 \\iff 1(m - {m_val}) - 2(3) = 0 \\iff m - {m_val} = 6 \\iff m = {m_val + 6}$."
        elif mode == 8:
            q_text = "Mối liên hệ giữa nghiệm tổng quát của hệ không thuần nhất $AX = B$ và hệ thuần nhất liên kết $AX = 0$ là:"
            cor = "$X = X_0 + X_{tn}$ (với $X_0$ là một nghiệm riêng và $X_{tn}$ là nghiệm tổng quát của hệ thuần nhất)"
            w1 = "$X = X_0 \\cdot X_{tn}$"
            w2 = "$X = X_{tn} - X_0$"
            w3 = "$X = X_0$"
            exp = "Định lý cấu trúc nghiệm: Nghiệm tổng quát của hệ không thuần nhất bằng tổng của một nghiệm riêng bất kỳ và nghiệm tổng quát của hệ thuần nhất liên kết."
        else:
            q_text = "Khẳng định nào dưới đây về hệ phương trình thuần nhất là **SAI**?"
            cor = "Hệ phương trình thuần nhất có thể vô nghiệm"
            w1 = "Hệ phương trình thuần nhất luôn có nghiệm tầm thường"
            w2 = "Nếu số ẩn lớn hơn số phương trình ($n > m$) thì hệ thuần nhất luôn có nghiệm không tầm thường"
            w3 = "Tổng của hai nghiệm của hệ thuần nhất cũng là một nghiệm của hệ thuần nhất"
            exp = "Khẳng định 'Hệ phương trình thuần nhất có thể vô nghiệm' là SAI vì hệ thuần nhất luôn luôn có nghiệm $X = 0$."

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}
