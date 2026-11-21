# -*- coding: utf-8 -*-
"""
procedural_generators.py
Bộ sinh câu hỏi trắc nghiệm Đại số tuyến tính & Toán rời rạc chất lượng cao.
Mỗi dạng bài (sub 1..4 của 6 chương) hỗ trợ nhiều mode với tham số toán học đa dạng,
đảm bảo tạo ra hàng trăm câu hỏi độc nhất, chuẩn xác 100% về mặt toán học.
"""

import random
import math

def shuffle_options_balanced(options, target_key):
    correct_opt = options[0]
    wrong_opts = options[1:]
    random.shuffle(wrong_opts)
    
    target_idx = {'A': 0, 'B': 1, 'C': 2, 'D': 3}[target_key]
    new_opts = [None] * 4
    new_opts[target_idx] = {'key': target_key, 'text': correct_opt['text']}
    
    w_idx = 0
    for i in range(4):
        if i != target_idx:
            k = ['A', 'B', 'C', 'D'][i]
            new_opts[i] = {'key': k, 'text': wrong_opts[w_idx]['text']}
            w_idx += 1
            
    return new_opts, target_key

# ==============================================================================
# CHƯƠNG 1: Logic mệnh đề, Tập hợp, Ánh xạ & Boole
# ==============================================================================
def gen_ch1(sub, seed):
    rng = random.Random(seed * 31 + sub * 101)
    mode = seed % 6
    
    if sub == 1: # 1.1 Mệnh đề & Bảng chân trị
        if mode in [0, 1]:
            p_val = rng.choice([True, False])
            q_val = rng.choice([True, False])
            r_val = rng.choice([True, False])
            combo = rng.choice([1, 2, 3, 4])
            p_s = "Đúng (1)" if p_val else "Sai (0)"
            q_s = "Đúng (1)" if q_val else "Sai (0)"
            r_s = "Đúng (1)" if r_val else "Sai (0)"
            if combo == 1:
                res = (not (p_val and q_val)) or r_val
                formula = "(p \\wedge q) \\to r"
            elif combo == 2:
                res = (not p_val) or (q_val or r_val)
                formula = "p \\to (q \\vee r)"
            elif combo == 3:
                res = (p_val or q_val) and (not r_val)
                formula = "(p \\vee q) \\wedge \\bar{r}"
            else:
                res = (p_val == q_val) and r_val
                formula = "(p \\leftrightarrow q) \\wedge r"
            res_str = "Đúng (1)" if res else "Sai (0)"
            q_text = f"Cho các mệnh đề $p$ nhận chân trị {p_s}, $q$ nhận {q_s}, $r$ nhận {r_s}. Chân trị của mệnh đề phức hợp ${formula}$ là:"
            cor = res_str
            w1 = "Sai (0)" if res else "Đúng (1)"
            w2 = "Không xác định"
            w3 = "Luôn Đúng với mọi trường hợp"
            exp = f"Thay chân trị: $p = {p_s}$, $q = {q_s}$, $r = {r_s}$ vào công thức ${formula}$, ta được chân trị là **{res_str}**."
        elif mode in [2, 3]:
            n = rng.choice([2, 3, 4, 5, 6, 7, 8])
            ans = 2**n
            q_text = f"Bảng chân trị của một dạng mệnh đề chứa đúng {n} biến mệnh đề độc lập có tổng cộng bao nhiêu dòng (hàng) giá trị chân lý?"
            cor = f"${ans}$ dòng"
            w1 = f"${2*n}$ dòng"
            w2 = f"${n**2}$ dòng"
            w3 = f"${ans + 4}$ dòng"
            exp = f"Mỗi biến mệnh đề độc lập có 2 trạng thái (Đúng hoặc Sai). Với {n} biến, số dòng của bảng chân trị là $2^{{{n}}} = {ans}$ dòng."
        else:
            tauts = [
                ("p \\vee \\bar{p}", "Luật triệt tam (p hoặc không p) luôn đúng"),
                ("(p \\to q) \\leftrightarrow (\\bar{p} \\vee q)", "Định nghĩa phép kéo theo"),
                ("(p \\wedge q) \\to p", "Luật rút gọn hội"),
                ("p \\to (p \\vee q)", "Luật cộng tuyển"),
                ("((p \\to q) \\wedge p) \\to q", "Quy tắc khẳng định Modus Ponens"),
                ("((p \\to q) \\wedge \\bar{q}) \\to \\bar{p}", "Quy tắc phủ định Modus Tollens"),
                ("(p \\to q) \\leftrightarrow (\\bar{q} \\to \\bar{p})", "Luật phản đảo")
            ]
            chosen_cor, chosen_exp = rng.choice(tauts)
            q_text = f"Trong logic mệnh đề, dạng mệnh đề nào dưới đây là một **hằng đúng** (tautology)?"
            cor = f"${chosen_cor}$"
            w1 = "$p \\wedge \\bar{p}$"
            w2 = "$p \\to \\bar{p}$"
            w3 = "$p \\leftrightarrow \\bar{p}$"
            exp = f"{chosen_exp}. Biểu thức ${chosen_cor}$ luôn nhận giá trị Đúng với mọi giá trị của các biến."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    elif sub == 2: # 1.2 Đại số Boole & Biểu thức đối ngẫu
        v1, v2, v3 = rng.sample(['x', 'y', 'z', 't', 'u'], 3)
        c = rng.choice(['0', '1'])
        opp = '1' if c == '0' else '0'
        if mode in [0, 1]:
            q_text = f"Trong đại số Boole, công thức đối ngẫu của biểu thức $f = ({v1}' \\vee {c}) \\wedge ({v2}' \\vee {v3})$ là:"
            cor = f"$({v1}' \\wedge {opp}) \\vee ({v2}' \\wedge {v3})$"
            w1 = f"$({v1} \\wedge {c}) \\vee ({v2} \\wedge {v3}')$"
            w2 = f"$({v1}' \\vee {opp}) \\wedge ({v2}' \\vee {v3})$"
            w3 = f"$({v1} \\vee {opp}) \\wedge ({v2} \\vee {v3})$"
            exp = f"Quy tắc tìm công thức đối ngẫu: thay $\\vee \\leftrightarrow \\wedge$, thay hằng số $0 \\leftrightarrow 1$, giữ nguyên biến và dấu phủ định. Vậy $({v1}' \\vee {c}) \\wedge ({v2}' \\vee {v3}) \\to ({v1}' \\wedge {opp}) \\vee ({v2}' \\wedge {v3})$."
        elif mode in [2, 3]:
            q_text = f"Rút gọn biểu thức Boole $f = ({v1} \\wedge {v2}) \\vee ({v1} \\wedge {v2}')$ ta thu được kết quả là:"
            cor = f"${v1}$"
            w1 = f"${v2}$"
            w2 = f"${v1} \\wedge {v2}$"
            w3 = "$1$"
            exp = f"Áp dụng tính chất phân phối: $({v1} \\wedge {v2}) \\vee ({v1} \\wedge {v2}') = {v1} \\wedge ({v2} \\vee {v2}') = {v1} \\wedge 1 = {v1}$."
        else:
            q_text = f"Trong đại số Boole, phần tử bù của biểu thức $g = {v1} \\vee ({v2} \\wedge {v3}')$ theo luật De Morgan là:"
            cor = f"${v1}' \\wedge ({v2}' \\vee {v3})$"
            w1 = f"${v1}' \\vee ({v2}' \\wedge {v3})$"
            w2 = f"${v1} \\wedge ({v2}' \\vee {v3})$"
            w3 = f"${v1}' \\wedge ({v2} \\vee {v3}')$"
            exp = f"Theo luật De Morgan: $(A \\vee B)' = A' \\wedge B'$. Ta có $( {v1} \\vee ({v2} \\wedge {v3}') )' = {v1}' \\wedge ({v2} \\wedge {v3}')' = {v1}' \\wedge ({v2}' \\vee {v3})$."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    elif sub == 3: # 1.3 Tập hợp & Các phép toán
        if mode in [0, 1]:
            nA = rng.randint(3, 11)
            cor_val = 2**nA
            q_text = f"Cho tập hợp $A$ có đúng {nA} phần tử phân biệt. Số tập hợp con của $A$ (lực lượng tập lũy thừa $|\\mathcal{{P}}(A)|$) bằng:"
            cor = f"${cor_val}$"
            w1 = f"${2 * nA}$"
            w2 = f"${nA**2}$"
            w3 = f"${cor_val - 1}$"
            exp = f"Số tập con của tập hợp có $n$ phần tử luôn bằng $2^n$. Với $n = {nA}$, số tập con là $2^{{{nA}}} = {cor_val}$."
        elif mode in [2, 3]:
            nA = rng.randint(12, 35)
            nB = rng.randint(10, 30)
            nAB = rng.randint(2, min(nA, nB) - 1)
            nUnion = nA + nB - nAB
            q_text = f"Cho hai tập hợp hữu hạn $A$ và $B$ thỏa mãn $|A| = {nA}, |B| = {nB}$ và $|A \\cap B| = {nAB}$. Số phần tử của tập hợp $A \\cup B$ bằng:"
            cor = f"${nUnion}$"
            w1 = f"${nA + nB}$"
            w2 = f"${nUnion + nAB}$"
            w3 = f"${abs(nA - nB)}$"
            exp = f"Theo nguyên lý bao hàm - loại trừ: $|A \\cup B| = |A| + |B| - |A \\cap B| = {nA} + {nB} - {nAB} = {nUnion}$."
        else:
            s1 = set(rng.sample(range(1, 20), 4))
            s2 = set(rng.sample(range(1, 20), 4))
            diff = sorted(list(s1 - s2))
            str_diff = "$\\{" + ", ".join(map(str, diff)) + "\\}}$" if diff else "$\\emptyset$"
            q_text = f"Cho tập $A = \\{{{', '.join(map(str, sorted(s1)))}\\}}$ và $B = \\{{{', '.join(map(str, sorted(s2)))}\\}}$." + f" Hiệu của hai tập hợp $A \\setminus B$ là:"
            cor = str_diff
            w1 = "$\\{" + ", ".join(map(str, sorted(list(s2 - s1)))) + "\\}}$" if s2 - s1 else "$\\emptyset$"
            w2 = "$\\{" + ", ".join(map(str, sorted(list(s1 & s2)))) + "\\}}$" if s1 & s2 else "$\\emptyset$"
            w3 = "$\\{" + ", ".join(map(str, sorted(list(s1 | s2)))) + "\\}}$"
            exp = f"Hiệu $A \\setminus B$ gồm các phần tử thuộc $A$ nhưng không thuộc $B$. Đối chiếu ta được $A \\setminus B = {cor}$."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    else: # 1.4 Ánh xạ
        a = rng.choice([2, 3, 4, 5, -2, -3, -4])
        b = rng.choice([1, 2, 3, 5, 7, -1, -3, -5])
        if mode in [0, 1]:
            q_text = f"Cho ánh xạ $f: \\mathbb{{R}} \\to \\mathbb{{R}}$ xác định bởi công thức $f(x) = {a}x + {b}$. Khẳng định nào sau đây là **ĐÚNG**?"
            cor = "$f$ là một song ánh"
            w1 = "$f$ chỉ là đơn ánh, không phải toàn ánh"
            w2 = "$f$ chỉ là toàn ánh, không phải đơn ánh"
            w3 = "$f$ không phải là đơn ánh cũng không phải toàn ánh"
            exp = f"Hàm số bậc nhất $y = ax + b$ với $a = {a} \\neq 0$ có đồ thị là đường thẳng có hệ số góc khác 0, do đó vừa là đơn ánh vừa là toàn ánh trên $\\mathbb{{R}}$, tức là một song ánh."
        elif mode in [2, 3]:
            q_text = f"Cho hai ánh xạ $f, g: \\mathbb{{R}} \\to \\mathbb{{R}}$ xác định bởi $f(x) = {a}x + 1$ và $g(x) = x - {b}$." + f" Công thức của ánh xạ hợp $(g \\circ f)(x)$ là:"
            cor = f"${a}x + {1 - b}$"
            w1 = f"${a}x - {b}$"
            w2 = f"${a}x + {1 + b}$"
            w3 = f"${a}(x - {b}) + 1$"
            exp = f"Theo định nghĩa ánh xạ hợp: $(g \\circ f)(x) = g(f(x)) = g({a}x + 1) = ({a}x + 1) - {b} = {a}x + {1 - b}$."
        else:
            q_text = "Ánh xạ nào dưới đây là một **đơn ánh** nhưng **không phải là toàn ánh**?"
            cor = "$f: \\mathbb{N} \\to \\mathbb{N}, \\, f(n) = 2n + 1$"
            w1 = "$f: \\mathbb{R} \\to \\mathbb{R}, \\, f(x) = 2x + 1$"
            w2 = "$f: \\mathbb{R} \\to \\mathbb{R}, \\, f(x) = x^2$"
            w3 = "$f: \\mathbb{R} \\to \\mathbb{R}, \\, f(x) = x^3 - x$"
            exp = "Với $f(n) = 2n + 1$ trên $\\mathbb{N}$: nếu $2n_1 + 1 = 2n_2 + 1 \\implies n_1 = n_2$ (đơn ánh). Nhưng tập giá trị chỉ gồm các số tự nhiên lẻ, các số chẵn (như 0, 2, 4) không có nghịch ảnh nên không toàn ánh."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

# ==============================================================================
# CHƯƠNG 2: Không gian véc tơ
# ==============================================================================
def gen_ch2(sub, seed):
    rng = random.Random(seed * 37 + sub * 203)
    mode = seed % 6

    if sub == 1: # 2.1 Không gian con & Tổ hợp tuyến tính
        if mode in [0, 1]:
            c = rng.choice([1, 2, 3, 5, 7, 8, 9, -2, -3, -5, -6, -8])
            q_text = f"Trong không gian véc tơ $\\mathbb{{R}}^3$, tập hợp $W = \\{{(x, y, z) \\in \\mathbb{{R}}^3 \\mid 2x - y + 3z = {c}\\}}$ có phải là không gian con không?"
            cor = f"Không phải, vì véc tơ không $(0, 0, 0) \\notin W$ do $2(0) - 0 + 3(0) = 0 \\neq {c}$"
            w1 = "Là không gian con vì phương trình là bậc nhất"
            w2 = "Là không gian con có số chiều bằng 2"
            w3 = "Không phải, vì $W$ không đóng kín đối với phép nhân với số thực âm"
            exp = f"Điều kiện tiên quyết để $W$ là không gian con là véc tơ không $\\theta = (0, 0, 0)$ phải thuộc $W$. Thay tọa độ $(0,0,0)$ vào phương trình: $0 = {c}$ (vô lý vì ${c} \\neq 0$). Do đó $W$ không phải là không gian con."
        elif mode in [2, 3]:
            a = rng.choice([1, 2, 3, 4, 5, 6])
            b = rng.choice([1, 2, 3, 4, 5, 6])
            q_text = f"Trong $\\mathbb{{R}}^2$, véc tơ $v = ({2*a + b}, {3*a - b})$ được phân tích thành tổ hợp tuyến tính của $u_1 = (2, 3)$ và $u_2 = (1, -1)$ với hệ số $(c_1, c_2)$ là:"
            cor = f"$({a}, {b})$"
            w1 = f"$({b}, {a})$"
            w2 = f"$({a + 1}, {b - 1})$"
            w3 = f"$({2*a}, {b})$"
            exp = f"Giải hệ phương trình $c_1 (2, 3) + c_2 (1, -1) = ({2*a + b}, {3*a - b}) \\iff \\begin{{cases}} 2c_1 + c_2 = {2*a + b} \\\\ 3c_1 - c_2 = {3*a - b} \\end{{cases}} \\implies c_1 = {a}, c_2 = {b}$."
        else:
            k = rng.choice([2, 3, 4, 5, 6])
            q_text = f"Tập hợp nào dưới đây là một **không gian con** của không gian véc tơ $\\mathbb{{R}}^3$?"
            cor = f"$W = \\{{(x, y, z) \\in \\mathbb{{R}}^3 \\mid x + {k}y - z = 0\\}}$"
            w1 = f"$W = \\{{(x, y, z) \\in \\mathbb{{R}}^3 \\mid x + {k}y - z = 1\\}}$"
            w2 = "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid xy = 0\\}}$"
            w3 = "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x^2 + y^2 + z^2 = 1\\}}$"
            exp = "Không gian con của $\\mathbb{R}^3$ xác định bởi phương trình tuyến tính thuần nhất $ax + by + cz = 0$ (mặt phẳng đi qua gốc tọa độ)."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    elif sub == 2: # 2.2 Độc lập / Phụ thuộc tuyến tính
        m_val = rng.choice([1, 2, 3, 4, 5, 6, -1, -2, -3, -4, -5])
        a = rng.choice([1, 2, 3, 4])
        b = rng.choice([1, 2, 3, 4])
        if mode in [0, 1]:
            q_text = f"Tìm giá trị của tham số $m$ để hệ véc tơ $S = \\{{u_1 = (1, 0, 0), \\, u_2 = ({a}, 1, 0), \\, u_3 = ({b}, 4, m - {m_val})\\}}$ trong $\\mathbb{{R}}^3$ **phụ thuộc tuyến tính**:"
            cor = f"$m = {m_val}$"
            w1 = f"$m \\neq {m_val}$"
            w2 = "$m = 0$"
            w3 = f"$m = {-m_val}$"
            exp = f"Lập ma trận các véc tơ theo dòng hoặc cột. Do ma trận có dạng tam giác dưới, định thức $\\det = 1 \\times 1 \\times (m - {m_val}) = m - {m_val}$. Hệ phụ thuộc tuyến tính khi và chỉ khi $\\det = 0 \\iff m = {m_val}$."
        elif mode in [2, 3]:
            q_text = f"Tìm giá trị của tham số $m$ để hệ véc tơ $S = \\{{u_1 = (1, 1, 0), \\, u_2 = (0, 1, 1), \\, u_3 = (1, 0, m - {m_val} + 1)\\}} $ trong $\\mathbb{{R}}^3$ **độc lập tuyến tính**:"
            cor = f"$m \\neq {m_val}$"
            w1 = f"$m = {m_val}$"
            w2 = "$m = 0$"
            w3 = f"$m > {m_val}$"
            exp = f"Tính định thức ma trận lập bởi 3 véc tơ: $\\det(A) = m - {m_val}$. Hệ véc tơ độc lập tuyến tính khi và chỉ khi $\\det(A) \\neq 0 \\iff m \\neq {m_val}$."
        else:
            count_v = rng.choice([4, 5, 6, 7])
            dim_space = rng.choice([2, 3])
            q_text = f"Trong không gian véc tơ $\\mathbb{{R}}^{{{dim_space}}}$, hệ gồm {count_v} véc tơ bất kỳ luôn có tính chất gì?"
            cor = "Luôn phụ thuộc tuyến tính"
            w1 = "Luôn độc lập tuyến tính"
            w2 = "Có thể độc lập tuyến tính nếu không chứa véc tơ không"
            w3 = f"Luôn là một cơ sở của $\\mathbb{{R}}^{{{dim_space}}}$"
            exp = f"Số chiều của $\\mathbb{{R}}^{{{dim_space}}}$ bằng {dim_space}. Mọi hệ chứa số véc tơ lớn hơn số chiều không gian (tức ${count_v} > {dim_space}$) đều luôn **phụ thuộc tuyến tính**."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    elif sub == 3: # 2.3 Cơ sở & Số chiều
        if mode in [0, 1]:
            n = rng.choice([4, 5, 6, 7])
            r = rng.choice([1, 2, 3, 4])
            if r >= n: r = n - 2
            dim = n - r
            q_text = f"Trong không gian véc tơ $\\mathbb{{R}}^{{{n}}}$, số chiều của không gian con nghiệm $W$ xác định bởi hệ {r} phương trình tuyến tính thuần nhất độc lập bằng:"
            cor = f"${dim}$"
            w1 = f"${r}$"
            w2 = f"${n}$"
            w3 = f"${dim + 1}$"
            exp = f"Số chiều không gian nghiệm của hệ thuần nhất bằng số ẩn trừ đi hạng của ma trận hệ số: $\\dim(W) = n - r = {n} - {r} = {dim}$."
        elif mode in [2, 3]:
            deg = rng.choice([2, 3, 4, 5, 6, 7, 8])
            ans = deg + 1
            q_text = f"Số chiều của không gian véc tơ các đa thức có bậc không vượt quá {deg}, ký hiệu là $P_{{{deg}}}[x]$, bằng:"
            cor = f"${ans}$"
            w1 = f"${deg}$"
            w2 = f"${2 * deg}$"
            w3 = f"${ans + 1}$"
            exp = f"Cơ sở chính tắc của $P_{{{deg}}}[x]$ là $\\{{1, x, x^2, \\dots, x^{{{deg}}}\\}}$ gồm đúng ${deg} + 1 = {ans}$ phần tử, do đó $\\dim(P_{{{deg}}}[x]) = {ans}$."
        else:
            m_rows = rng.choice([2, 3, 4])
            n_cols = rng.choice([2, 3, 4, 5])
            ans = m_rows * n_cols
            q_text = f"Số chiều của không gian véc tơ các ma trận thực kích thước ${m_rows} \\times {n_cols}$, ký hiệu $M_{{{m_rows} \\times {n_cols}}}(\\mathbb{{R}})$, bằng:"
            cor = f"${ans}$"
            w1 = f"${m_rows + n_cols}$"
            w2 = f"${max(m_rows, n_cols)}$"
            w3 = f"${ans - 1}$"
            exp = f"Số chiều của không gian ma trận $M_{{m \\times n}}$ luôn bằng tích số hàng và số cột: $m \\times n = {m_rows} \\times {n_cols} = {ans}$."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    else: # 2.4 Tọa độ & Ma trận chuyển cơ sở
        c1 = rng.randint(1, 7)
        c2 = rng.randint(1, 7)
        k = rng.choice([1, 2, 3, 4])
        if mode in [0, 1]:
            q_text = f"Trong $\\mathbb{{R}}^2$, cho cơ sở $B = \\{{u_1 = (1, 0), \\, u_2 = ({k}, 1)\\}} $. Tọa độ của véc tơ $x = ({c1 + k*c2}, {c2})$ đối với cơ sở $B$ là:"
            cor = f"$[x]_B = ({c1}, {c2})^T$"
            w1 = f"$[x]_B = ({c2}, {c1})^T$"
            w2 = f"$[x]_B = ({c1 + k*c2}, {c2})^T$"
            w3 = f"$[x]_B = ({c1}, {c1 + c2})^T$"
            exp = f"Giả sử $[x]_B = (c_1, c_2)^T$. Khi đó $c_1 u_1 + c_2 u_2 = c_1 (1, 0) + c_2 ({k}, 1) = (c_1 + {k}c_2, c_2) = ({c1 + k*c2}, {c2}) \\implies c_2 = {c2}, c_1 = {c1}$."
        elif mode in [2, 3]:
            q_text = "Nếu ma trận chuyển cơ sở từ cơ sở $B$ sang cơ sở $B'$ là $P$, thì tọa độ của véc tơ $x$ trong hai cơ sở liên hệ theo công thức nào?"
            cor = "$[x]_B = P [x]_{B'}$"
            w1 = "$[x]_{B'} = P [x]_B$"
            w2 = "$[x]_B = P^{-1} [x]_{B'}$"
            w3 = "$[x]_B = P^T [x]_{B'}$"
            exp = "Công thức đổi tọa độ khi chuyển cơ sở: $[x]_B = P [x]_{B'}$, hoặc tương đương $[x]_{B'} = P^{-1} [x]_B$."
        else:
            q_text = "Ma trận chuyển cơ sở giữa hai cơ sở bất kỳ của cùng một không gian véc tơ hữu hạn chiều luôn có tính chất:"
            cor = "Luôn vuông và khả nghịch (không suy biến)"
            w1 = "Luôn là ma trận đối xứng"
            w2 = "Luôn có định thức bằng 1"
            w3 = "Luôn là ma trận trực giao"
            exp = "Vì các véc tơ của cơ sở mới độc lập tuyến tính nên các cột của ma trận chuyển cơ sở độc lập tuyến tính, suy ra ma trận chuyển luôn vuông cấp $n$ và khả nghịch."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

# ==============================================================================
# CHƯƠNG 3: Ma trận và Định thức
# ==============================================================================
def gen_ch3(sub, seed):
    rng = random.Random(seed * 41 + sub * 307)
    mode = seed % 6

    if sub == 1: # 3.1 Các phép toán & Lũy thừa
        if mode in [0, 1]:
            a = rng.randint(2, 8)
            k = rng.choice([2, 3, 4, 5, 6, 7])
            q_text = f"Cho ma trận $A = \\begin{{bmatrix}} 1 & {a} \\\\ 0 & 1 \\end{{bmatrix}}$. Lũy thừa $A^{{{k}}}$ bằng:"
            cor = f"$\\begin{{bmatrix}} 1 & {k*a} \\\\ 0 & 1 \\end{{bmatrix}}$"
            w1 = f"$\\begin{{bmatrix}} 1 & {a**k} \\\\ 0 & 1 \\end{{bmatrix}}$"
            w2 = f"$\\begin{{bmatrix}} {k} & {k*a} \\\\ 0 & {k} \\end{{bmatrix}}$"
            w3 = f"$\\begin{{bmatrix}} 1 & {a} \\\\ 0 & 1 \\end{{bmatrix}}$"
            exp = f"Quy nạp lũy thừa ma trận tam giác: $A^k = \\begin{{bmatrix}} 1 & ka \\\\ 0 & 1 \\end{{bmatrix}}$. Thay số: $k \\times a = {k} \\times {a} = {k*a}$."
        elif mode in [2, 3]:
            a, b, c, d = rng.sample([1, 2, 3, 4, 5, -1, -2, -3], 4)
            tr = a + d
            q_text = f"Vết (trace) của ma trận $A = \\begin{{bmatrix}} {a} & {b} \\\\ {c} & {d} \\end{{bmatrix}}$, ký hiệu $\\text{{tr}}(A)$, bằng:"
            cor = f"${tr}$"
            w1 = f"${a * d - b * c}$"
            w2 = f"${a + b + c + d}$"
            w3 = f"${-tr}$"
            exp = f"Vết của ma trận vuông là tổng các phần tử trên đường chéo chính: $\\text{{tr}}(A) = {a} + ({d}) = {tr}$."
        else:
            q_text = "Cho hai ma trận vuông $A, B$ cùng cấp $n$. Khẳng định nào sau đây là **SAI** nói chung?"
            cor = "$(A + B)^2 = A^2 + 2AB + B^2$"
            w1 = "$(AB)^T = B^T A^T$"
            w2 = "$(A + B)^T = A^T + B^T$"
            w3 = "$(A^T)^T = A$"
            exp = "Vì phép nhân ma trận nói chung không có tính chất giao hoán ($AB \\neq BA$), nên $(A + B)^2 = A^2 + AB + BA + B^2 \\neq A^2 + 2AB + B^2$."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    elif sub == 2: # 3.2 Định thức
        n = rng.choice([2, 3, 4])
        dA = rng.choice([2, 3, 4, 5, 6, 7, -2, -3, -4])
        k = rng.choice([2, 3, 4, -2, -3])
        if mode in [0, 1]:
            ans = (k**n) * dA
            q_text = f"Cho ma trận vuông $A$ cấp {n} có định thức $\\det(A) = {dA}$. Định thức của ma trận ${k}A$ bằng:"
            cor = f"${ans}$"
            w1 = f"${k * dA}$"
            w2 = f"${(k**2) * dA}$"
            w3 = f"${dA}$"
            exp = f"Theo tính chất định thức: $\\det(kA) = k^n \\det(A)$. Với ma trận cấp $n = {n}$, $\\det({k}A) = ({k})^{{{n}}} \\times ({dA}) = {k**n} \\times ({dA}) = {ans}$."
        elif mode in [2, 3]:
            dB = rng.choice([2, -3, 4, -5, 3, 5])
            q_text = f"Cho hai ma trận vuông $A, B$ cùng cấp có $\\det(A) = {dA}$ và $\\det(B) = {dB}$. Định thức của tích $AB$ bằng:"
            cor = f"${dA * dB}$"
            w1 = f"${dA + dB}$"
            w2 = f"${dA - dB}$"
            w3 = f"${(dA * dB)**2}$"
            exp = f"Theo định lý nhân định thức: $\\det(AB) = \\det(A) \\cdot \\det(B) = ({dA}) \\cdot ({dB}) = {dA * dB}$."
        else:
            q_text = "Nếu đổi chỗ hai hàng (hoặc hai cột) bất kỳ của một ma trận vuông thì định thức của nó thay đổi như thế nào?"
            cor = "Đổi dấu"
            w1 = "Không thay đổi"
            w2 = "Bằng 0"
            w3 = "Nhân lên gấp đôi"
            exp = "Theo tính chất cơ bản của định thức, khi hoán vị hai hàng (hoặc hai cột) thì định thức đổi dấu."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    elif sub == 3: # 3.3 Ma trận nghịch đảo
        dA = rng.choice([2, 3, 4, 5, 7, 8, -2, -3, -4, -5])
        if mode in [0, 1]:
            m_val = rng.choice([1, 2, 3, 4, 5, 6, -1, -2, -3])
            k = rng.choice([2, 3, 4, 5])
            q_text = f"Tìm điều kiện của tham số $m$ để ma trận $A = \\begin{{bmatrix}} m & {k} \\\\ {m_val} & 1 \\end{{bmatrix}}$ **khả nghịch** (có nghịch đảo):"
            cor = f"$m \\neq {k * m_val}$"
            w1 = f"$m = {k * m_val}$"
            w2 = "$m = 0$"
            w3 = f"$m \\neq {m_val}$"
            exp = f"Ma trận $A$ khả nghịch khi và chỉ khi $\\det(A) \\neq 0 \\iff m \\times 1 - {k} \\times {m_val} \\neq 0 \\iff m \\neq {k * m_val}$."
        elif mode in [2, 3]:
            q_text = f"Cho ma trận vuông $A$ khả nghịch cấp 3 thỏa mãn $\\det(A) = {dA}$. Định thức của ma trận nghịch đảo $\\det(A^{{-1}})$ bằng:"
            cor = f"$\\dfrac{{1}}{{{dA}}}$"
            w1 = f"${dA}$"
            w2 = f"${-dA}$"
            w3 = f"$\\dfrac{{-1}}{{{dA}}}$"
            exp = f"Ta có $A \\cdot A^{{-1}} = I \\implies \\det(A) \\cdot \\det(A^{{-1}}) = 1 \\implies \\det(A^{{-1}}) = \\dfrac{{1}}{{\\det(A)}} = \\dfrac{{1}}{{{dA}}}$."
        else:
            a = rng.choice([2, 3, 4, 5, 6, 7])
            q_text = f"Ma trận nghịch đảo của ma trận $A = \\begin{{bmatrix}} 1 & {a} \\\\ 0 & 1 \\end{{bmatrix}}$ là:"
            cor = f"$\\begin{{bmatrix}} 1 & {-a} \\\\ 0 & 1 \\end{{bmatrix}}$"
            w1 = f"$\\begin{{bmatrix}} 1 & {a} \\\\ 0 & 1 \\end{{bmatrix}}$"
            w2 = f"$\\begin{{bmatrix}} -1 & {-a} \\\\ 0 & -1 \\end{{bmatrix}}$"
            w3 = f"$\\begin{{bmatrix}} 1 & 0 \\\\ {a} & 1 \\end{{bmatrix}}$"
            exp = f"Áp dụng công thức nghịch đảo cấp 2: $A^{{-1}} = \\dfrac{{1}}{{ad - bc}} \\begin{{bmatrix}} d & -b \\\\ -c & a \\end{{bmatrix}} = \\begin{{bmatrix}} 1 & {-a} \\\\ 0 & 1 \\end{{bmatrix}}$."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    else: # 3.4 Hạng ma trận
        if mode in [0, 1]:
            m = rng.choice([2, 3, 4, 5])
            n = rng.choice([3, 4, 5, 6])
            ans = min(m, n)
            q_text = f"Hạng lớn nhất có thể có của một ma trận kích thước ${m} \\times {n}$ bằng:"
            cor = f"${ans}$"
            w1 = f"${max(m, n)}$"
            w2 = f"${m + n}$"
            w3 = f"${m * n}$"
            exp = f"Hạng của ma trận $A_{{m \\times n}}$ luôn thỏa mãn $0 \\le r(A) \\le \\min(m, n)$. Với ma trận ${m} \\times {n}$, hạng lớn nhất là $\\min({m}, {n}) = {ans}$."
        elif mode in [2, 3]:
            a = rng.choice([2, 3, 4, 5, 6])
            m_val = rng.choice([1, 2, 3, 4, 5])
            q_text = f"Tìm giá trị của $m$ để ma trận $A = \\begin{{bmatrix}} 1 & {a} \\\\ {m_val} & m \\end{{bmatrix}}$ có hạng $r(A) = 1$:"
            cor = f"$m = {a * m_val}$"
            w1 = f"$m \\neq {a * m_val}$"
            w2 = "$m = 0$"
            w3 = f"$m = {m_val}$"
            exp = f"Ma trận cấp $2 \\times 2$ có hạng bằng 1 khi và chỉ khi định thức bằng 0: $\\det(A) = 1 \\cdot m - {a} \\cdot {m_val} = 0 \\iff m = {a * m_val}$."
        else:
            q_text = "Khẳng định nào dưới đây về mối quan hệ giữa hạng của ma trận tích $AB$ và hạng của $A, B$ là **ĐÚNG**?"
            cor = "$r(AB) \\le \\min(r(A), r(B))$"
            w1 = "$r(AB) = r(A) \\cdot r(B)$"
            w2 = "$r(AB) \\ge \\max(r(A), r(B))$"
            w3 = "$r(AB) = r(A) + r(B)$"
            exp = "Bất đẳng thức Sylvester về hạng ma trận tích: hạng của ma trận tích luôn không vượt quá hạng của từng ma trận thừa số: $r(AB) \\le \\min(r(A), r(B))$."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

# ==============================================================================
# CHƯƠNG 4: Hệ phương trình tuyến tính
# ==============================================================================
def gen_ch4(sub, seed):
    rng = random.Random(seed * 43 + sub * 409)
    mode = seed % 6

    if sub == 1: # 4.1 Kronecker-Capelli & Biện luận
        if mode in [0, 1]:
            m_val = rng.choice([1, 2, 3, 4, 5, 6, -1, -2, -3, -4])
            c = rng.choice([2, 3, 4, 5, -2, -3])
            q_text = f"Cho ma trận bổ sung của hệ phương trình sau khi khử Gauss có hàng cuối là $[0 \\; 0 \\; (m - {m_val}) \\mid {c}]$. Hệ phương trình **vô nghiệm** khi:"
            cor = f"$m = {m_val}$"
            w1 = f"$m \\neq {m_val}$"
            w2 = "$m = 0$"
            w3 = f"$m = {c}$"
            exp = f"Hệ vô nghiệm khi hàng cuối có dạng $[0 \\; 0 \\; 0 \\mid {c}]$ với ${c} \\neq 0$, tức là $m - {m_val} = 0 \\iff m = {m_val}$."
        elif mode in [2, 3]:
            n_vars = rng.choice([3, 4, 5, 6])
            q_text = f"Cho hệ phương trình tuyến tính gồm {n_vars} ẩn số. Hệ có **nghiệm duy nhất** khi và chỉ khi:"
            cor = f"$r(A) = r(\\bar{{A}}) = {n_vars}$"
            w1 = f"$r(A) = r(\\bar{{A}}) < {n_vars}$"
            w2 = "$r(A) < r(\\bar{A})$"
            w3 = f"$r(A) = {n_vars} + 1$"
            exp = f"Hệ có nghiệm duy nhất khi và chỉ khi hạng của ma trận hệ số bằng hạng ma trận bổ sung và đúng bằng số ẩn: $r(A) = r(\\bar{{A}}) = n = {n_vars}$."
        else:
            q_text = "Theo định lý Kronecker-Capelli, hệ phương trình tuyến tính $AX = B$ **vô nghiệm** khi và chỉ khi:"
            cor = "$r(A) < r(\\bar{A})$"
            w1 = "$r(A) = r(\\bar{A}) = n$"
            w2 = "$r(A) = r(\\bar{A}) < n$"
            w3 = "$r(A) > r(\\bar{A})$"
            exp = "Hệ phương trình tuyến tính có nghiệm khi $r(A) = r(\\bar{A})$ và vô nghiệm khi hạng ma trận hệ số nhỏ hơn hạng ma trận bổ sung: $r(A) < r(\\bar{A})$."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    elif sub == 2: # 4.2 Phương pháp Cramer
        if mode in [0, 1]:
            m_val = rng.choice([1, 2, 3, 4, 5, 6, -1, -2, -3, -4])
            q_text = f"Tìm điều kiện của tham số $m$ để hệ phương trình tuyến tính vuông cấp 3 có định thức $D = m - {m_val}$ giải được bằng **quy tắc Cramer**:"
            cor = f"$m \\neq {m_val}$"
            w1 = f"$m = {m_val}$"
            w2 = "$m = 0$"
            w3 = f"$m > {m_val}$"
            exp = f"Hệ giải được bằng quy tắc Cramer khi và chỉ khi định thức chính khác 0: $D \\neq 0 \\iff m - {m_val} \\neq 0 \\iff m \\neq {m_val}$."
        elif mode in [2, 3]:
            D = rng.choice([2, 3, 4, 5, -2, -3])
            mult = rng.choice([1, 2, 3, 4, 5, -1, -2, -3])
            Dx = D * mult
            q_text = f"Cho hệ phương trình Cramer có định thức chính $D = {D}$ và định thức phụ theo ẩn $x$ là $D_x = {Dx}$. Nghiệm $x$ của hệ bằng:"
            cor = f"$x = {mult}$"
            w1 = f"$x = {D}$"
            w2 = f"$x = {Dx}$"
            w3 = f"$x = {-mult}$"
            exp = f"Theo công thức Cramer: $x = \\dfrac{{D_x}}{{D}} = \\dfrac{{{Dx}}}{{{D}}} = {mult}$."
        else:
            q_text = "Nếu hệ phương trình vuông cấp $n$ có $\\det(A) = 0$ và tồn tại một định thức phụ $D_j \\neq 0$, thì hệ phương trình:"
            cor = "Chắc chắn vô nghiệm"
            w1 = "Chắc chắn có vô số nghiệm"
            w2 = "Có nghiệm duy nhất"
            w3 = "Có đúng 1 nghiệm bằng 0"
            exp = "Khi $D = 0$ mà có ít nhất một $D_j \\neq 0$ thì phương trình $0 \\cdot x_j = D_j$ vô nghiệm, do đó toàn hệ vô nghiệm."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    elif sub == 3: # 4.3 Khử Gauss
        n_vars = rng.choice([3, 4, 5, 6, 7])
        r_val = rng.choice([1, 2, 3, 4])
        if r_val >= n_vars:
            r_val = n_vars - 1
        free_vars = n_vars - r_val
        p_extra = rng.choice([1, 2, 3])
        if mode in [0, 1]:
            q_text = f"Một hệ phương trình tuyến tính gồm {n_vars} ẩn số. Sau khi khử Gauss, ma trận hệ số có hạng $r(A) = r(\\bar{{A}}) = {r_val}$. Số ẩn tự do của hệ bằng:"
            cor = f"${free_vars}$"
            w1 = f"${r_val}$"
            w2 = f"${n_vars}$"
            w3 = f"${free_vars + 1}$"
            exp = f"Số ẩn tự do trong không gian nghiệm bằng số ẩn trừ đi hạng: $k = n - r = {n_vars} - {r_val} = {free_vars}$."
        elif mode in [2, 3]:
            m_eqs = n_vars + p_extra
            q_text = f"Cho hệ phương trình gồm {m_eqs} phương trình và {n_vars} ẩn số có ma trận bổ sung bậc thang chứa {r_val} hàng khác không. Số ẩn phụ (ẩn tự do) bằng:"
            cor = f"${free_vars}$"
            w1 = f"${m_eqs - r_val}$"
            w2 = f"${r_val}$"
            w3 = f"${n_vars}$"
            exp = f"Hạng của hệ là $r = {r_val}$. Số ẩn tự do luôn bằng số ẩn trừ đi hạng: $n - r = {n_vars} - {r_val} = {free_vars}$."
        else:
            q_text = f"Trong quá trình khử Gauss đưa ma trận về bậc thang, nếu hàng cuối cùng có dạng $[0 \\; 0 \\; \\dots \\; 0 \\mid {p_extra}]$ thì hệ phương trình:"
            cor = "Vô nghiệm"
            w1 = "Có nghiệm duy nhất"
            w2 = "Có vô số nghiệm"
            w3 = "Có nghiệm tầm thường"
            exp = f"Hàng $[0 \\dots 0 \\mid {p_extra}]$ tương đương $0 = {p_extra} \\neq 0$ (mâu thuẫn), do đó hệ vô nghiệm."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    else: # 4.4 Thuần nhất & Hệ nghiệm cơ bản
        n = rng.choice([3, 4, 5, 6, 7])
        r = rng.choice([1, 2, 3, 4])
        if r >= n:
            r = n - 1
        num_fund = n - r
        val_m = rng.choice([1, 2, 3, 4, 5, -1, -2, -3])
        if mode in [0, 1]:
            q_text = f"Cho hệ phương trình tuyến tính thuần nhất gồm {n} ẩn số có hạng của ma trận hệ số bằng {r}. Số véc tơ trong một hệ nghiệm cơ bản bằng:"
            cor = f"${num_fund}$"
            w1 = f"${r}$"
            w2 = f"${n}$"
            w3 = f"${num_fund + 1}$"
            exp = f"Số véc tơ trong hệ nghiệm cơ bản chính là số chiều của không gian nghiệm, bằng $n - r = {n} - {r} = {num_fund}$."
        elif mode in [2, 3]:
            q_text = f"Tìm giá trị của tham số $m$ để hệ phương trình tuyến tính thuần nhất 3 ẩn có định thức $D = m - {val_m}$ có **nghiệm không tầm thường**:"
            cor = f"$m = {val_m}$"
            w1 = f"$m \\neq {val_m}$"
            w2 = "$m = 0$"
            w3 = f"$m > {val_m}$"
            exp = f"Hệ thuần nhất có nghiệm không tầm thường khi và chỉ khi định thức chính bằng 0: $D = 0 \\iff m - {val_m} = 0 \\iff m = {val_m}$."
        else:
            q_text = f"Hệ phương trình thuần nhất $AX = 0$ có $n = {n}$ ẩn số luôn có ít nhất một nghiệm là:"
            cor = "Nghiệm tầm thường $(0, 0, \\dots, 0)^T$"
            w1 = "Nghiệm duy nhất $(1, 1, \\dots, 1)^T$"
            w2 = "Vô nghiệm"
            w3 = "Nghiệm không xác định"
            exp = "Mọi hệ phương trình thuần nhất $AX = 0$ luôn nhận véc tơ không làm nghiệm (gọi là nghiệm tầm thường)."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

# ==============================================================================
# CHƯƠNG 5: Ánh xạ tuyến tính
# ==============================================================================
def gen_ch5(sub, seed):
    rng = random.Random(seed * 47 + sub * 521)
    mode = seed % 6

    if sub == 1: # 5.1 Định nghĩa & Tính chất
        if mode in [0, 1]:
            a = rng.choice([1, 2, 3, 4, 5])
            b = rng.choice([1, 2, 3, 4, 5])
            c = rng.choice([1, 2, 3, 4, 5])
            q_text = f"Cho ánh xạ tuyến tính $f: \\mathbb{{R}}^2 \\to \\mathbb{{R}}^2$ thỏa $f(1, 0) = ({a}, {b})$ và $f(0, 1) = (0, {c})$. Ảnh $f(2, 3)$ bằng:"
            cor_x = 2 * a
            cor_y = 2 * b + 3 * c
            cor = f"$({cor_x}, {cor_y})$"
            w1 = f"$({cor_x + 1}, {cor_y})$"
            w2 = f"$({a + b}, {c})$"
            w3 = f"$({2*a}, {3*c})$"
            exp = f"Do $f$ tuyến tính: $f(2, 3) = 2 f(1, 0) + 3 f(0, 1) = 2({a}, {b}) + 3(0, {c}) = ({cor_x}, {cor_y})$."
        elif mode in [2, 3]:
            k = rng.choice([2, 3, 4, 5])
            q_text = f"Ánh xạ nào dưới đây là một **ánh xạ tuyến tính**?"
            cor = f"$f: \\mathbb{{R}}^2 \\to \\mathbb{{R}}^2, \\, f(x, y) = ({k}x - y, \\, x + {k}y)$"
            w1 = f"$f: \\mathbb{{R}}^2 \\to \\mathbb{{R}}^2, \\, f(x, y) = ({k}x - y + 1, \\, x)$"
            w2 = "$f: \\mathbb{R}^2 \\to \\mathbb{R}^2, \\, f(x, y) = (xy, \\, x + y)$"
            w3 = "$f: \\mathbb{R}^2 \\to \\mathbb{R}^2, \\, f(x, y) = (x^2, \\, y)$"
            exp = "Ánh xạ tuyến tính yêu cầu các biểu thức tọa độ phải là đa thức thuần nhất bậc 1 theo các biến, không chứa hằng số tự do khác 0 và không chứa bậc 2 hay tích biến."
        else:
            q_text = "Nếu $f: V \\to W$ là ánh xạ tuyến tính thì ảnh của véc tơ không $\\theta_V$ luôn thỏa mãn:"
            cor = "$f(\\theta_V) = \\theta_W$"
            w1 = "$f(\\theta_V) = 1$"
            w2 = "$f(\\theta_V) \\neq \\theta_W$"
            w3 = "$f(\\theta_V) = -\\theta_W$"
            exp = "Tính chất cơ bản của ánh xạ tuyến tính: $f(\\theta) = f(0 \\cdot v) = 0 \\cdot f(v) = \\theta$."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    elif sub == 2: # 5.2 Ker & Im
        dimV = rng.choice([3, 4, 5, 6, 7])
        dimKer = rng.choice([0, 1, 2, 3, 4])
        if dimKer >= dimV:
            dimKer = 1
        dimIm = dimV - dimKer
        k_val = rng.choice([1, 2, 3])
        if mode in [0, 1]:
            q_text = f"Cho ánh xạ tuyến tính $f: V \\to W$ với $\\dim(V) = {dimV}$. Biết số chiều của nhân $\\dim(\\ker f) = {dimKer}$. Số chiều của ảnh $\\dim(\\text{{Im}} f)$ bằng:"
            cor = f"${dimIm}$"
            w1 = f"${dimKer}$"
            w2 = f"${dimV}$"
            w3 = f"${dimIm + 1}$"
            exp = f"Theo định lý số chiều (Rank-Nullity Theorem): $\\dim(\\ker f) + \\dim(\\text{{Im}} f) = \\dim(V) \\implies \\dim(\\text{{Im}} f) = {dimV} - {dimKer} = {dimIm}$."
        elif mode in [2, 3]:
            q_text = f"Cho toán tử tuyến tính $f: \\mathbb{{R}}^{{{dimV}}} \\to \\mathbb{{R}}^{{{dimV}}}$ có hạng $r(f) = \\dim(\\text{{Im}} f) = {dimIm}$. Số chiều của không gian hạt nhân $\\dim(\\ker f)$ bằng:"
            cor = f"${dimKer}$"
            w1 = f"${dimIm}$"
            w2 = f"${dimV}$"
            w3 = f"${dimKer + 1}$"
            exp = f"Theo định lý số chiều: $\\dim(\\ker f) = \\dim(V) - \\dim(\\text{{Im}} f) = {dimV} - {dimIm} = {dimKer}$."
        else:
            q_text = "Ánh xạ tuyến tính $f: V \\to W$ là một **đơn cấu** (đơn ánh) khi và chỉ khi:"
            cor = "$\\ker(f) = \\{\\theta\\}}$ (tức $\\dim(\\ker f) = 0$)"
            w1 = "$\\text{Im}(f) = W$"
            w2 = "$\\ker(f) = V$"
            w3 = "$\\dim(\\text{Im} f) = 0$"
            exp = "Ánh xạ tuyến tính là đơn ánh khi và chỉ khi hạt nhân (nhân) chỉ chứa duy nhất véc tơ không: $\\ker(f) = \\{\\theta\\}}$."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    elif sub == 3: # 5.3 Ma trận của f
        if mode in [0, 1]:
            q_text = "Cho toán tử tuyến tính $f: V \\to V$ có ma trận trong cơ sở $B$ là $A$. Khi đổi sang cơ sở $B'$ với ma trận chuyển $P$, ma trận $A'$ của $f$ trong cơ sở mới là:"
            cor = "$A' = P^{-1} A P$"
            w1 = "$A' = P A P^{-1}$"
            w2 = "$A' = P^T A P$"
            w3 = "$A' = P A P$"
            exp = "Công thức đổi cơ sở cho ma trận biểu diễn của toán tử tuyến tính: $A' = P^{-1} A P$ (hai ma trận $A$ và $A'$ đồng dạng với nhau)."
        elif mode in [2, 3]:
            a, b, c, d = rng.sample([1, 2, 3, 4, 5], 4)
            q_text = f"Cho toán tử tuyến tính $f: \\mathbb{{R}}^2 \\to \\mathbb{{R}}^2$ xác định bởi $f(x, y) = ({a}x + {b}y, \\, {c}x + {d}y)$. Ma trận của $f$ trong cơ sở chính tắc là:"
            cor = f"$\\begin{{bmatrix}} {a} & {b} \\\\ {c} & {d} \\end{{bmatrix}}$"
            w1 = f"$\\begin{{bmatrix}} {a} & {c} \\\\ {b} & {d} \\end{{bmatrix}}$"
            w2 = f"$\\begin{{bmatrix}} {b} & {a} \\\\ {d} & {c} \\end{{bmatrix}}$"
            w3 = f"$\\begin{{bmatrix}} {d} & {-b} \\\\ {-c} & {a} \\end{{bmatrix}}$"
            exp = f"Cột 1 là tọa độ của $f(e_1) = f(1, 0) = ({a}, {c})^T$; Cột 2 là tọa độ của $f(e_2) = f(0, 1) = ({b}, {d})^T$. Ghép lại ta được ma trận $\\begin{{bmatrix}} {a} & {b} \\\\ {c} & {d} \\end{{bmatrix}}$."
        else:
            q_text = "Hai ma trận vuông $A$ và $B$ được gọi là **đồng dạng** nếu tồn tại ma trận khả nghịch $P$ sao cho:"
            cor = "$B = P^{-1} A P$"
            w1 = "$B = P^T A P$"
            w2 = "$B = P A P$"
            w3 = "$B = A P$"
            exp = "Định nghĩa đồng dạng ma trận: $B = P^{-1} A P$. Hai ma trận đồng dạng biểu diễn cùng một toán tử tuyến tính trong hai cơ sở khác nhau."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    else: # 5.4 Trị riêng & Véc tơ riêng
        tr = rng.choice([2, 3, 4, 5, 6, 7, 8, 9])
        det = rng.choice([1, 2, 3, 4, 6, 8, -2, -3, -5, -6])
        if mode in [0, 1]:
            q_text = f"Cho ma trận vuông $A$ cấp 2 có vết $\\text{{tr}}(A) = {tr}$ và định thức $\\det(A) = {det}$. Tổng và tích các trị riêng của $A$ lần lượt là:"
            cor = f"$\\text{{Tổng}} = {tr}, \\, \\text{{Tích}} = {det}$"
            w1 = f"$\\text{{Tổng}} = {det}, \\, \\text{{Tích}} = {tr}$"
            w2 = f"$\\text{{Tổng}} = -{tr}, \\, \\text{{Tích}} = {det}$"
            w3 = f"$\\text{{Tổng}} = {tr}, \\, \\text{{Tích}} = -{det}$"
            exp = f"Theo định lý Viète cho đa thức đặc trưng: Tổng các trị riêng luôn bằng vết ma trận $\\text{{tr}}(A) = {tr}$, và tích các trị riêng luôn bằng định thức $\\det(A) = {det}$."
        elif mode in [2, 3]:
            l1 = rng.choice([1, 2, 3, 4, -1, -2])
            l2 = rng.choice([5, 6, 7, 8, -3, -4])
            q_text = f"Các trị riêng của ma trận tam giác $A = \\begin{{bmatrix}} {l1} & 3 \\\\ 0 & {l2} \\end{{bmatrix}}$ là:"
            cor = f"$\\lambda_1 = {l1}, \\, \\lambda_2 = {l2}$"
            w1 = f"$\\lambda_1 = {-l1}, \\, \\lambda_2 = {-l2}$"
            w2 = f"$\\lambda = {l1 + l2}$"
            w3 = f"$\\lambda_1 = 3, \\, \\lambda_2 = 0$"
            exp = f"Với ma trận tam giác (trên hoặc dưới) và ma trận đường chéo, các trị riêng chính là các phần tử nằm trên đường chéo chính: $\\lambda_1 = {l1}, \\lambda_2 = {l2}$."
        else:
            q_text = "Véc tơ $v \\neq \\theta$ là một **véc tơ riêng** ứng với trị riêng $\\lambda$ của ma trận vuông $A$ khi và chỉ khi thỏa mãn phương trình:"
            cor = "$A v = \\lambda v$"
            w1 = "$A v = \\lambda I$"
            w2 = "$A v = \\theta$"
            w3 = "$v A = \\lambda v$"
            exp = "Định nghĩa véc tơ riêng và trị riêng: $A v = \\lambda v$ với $v \\neq \\theta$ (hoặc tương đương $(A - \\lambda I) v = \\theta$)."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

# ==============================================================================
# CHƯƠNG 6: Không gian véc tơ Euclide & Dạng toàn phương
# ==============================================================================
def gen_ch6(sub, seed):
    rng = random.Random(seed * 53 + sub * 617)
    mode = seed % 6

    if sub == 1: # 6.1 Tích vô hướng & Chuẩn
        if mode in [0, 1]:
            x1, x2 = rng.sample([1, 2, 3, 4, 5, 6, 7, 8], 2)
            len_sq = x1**2 + x2**2
            exact_len = math.isqrt(len_sq) if math.isqrt(len_sq)**2 == len_sq else f"\\sqrt{{{len_sq}}}"
            q_text = f"Trong không gian Euclide $\\mathbb{{R}}^2$ với tích vô hướng chính tắc, chuẩn (độ dài) của véc tơ $u = ({x1}, {x2})$ bằng:"
            cor = f"${exact_len}$"
            w1 = f"${x1 + x2}$"
            w2 = f"${len_sq}$"
            w3 = f"$\\sqrt{{{x1 + x2}}}$"
            exp = f"Chuẩn chính tắc trong $\\mathbb{{R}}^2$: $\\|u\\| = \\sqrt{{x_1^2 + x_2^2}} = \\sqrt{{{x1}^2 + {x2}^2}} = \\sqrt{{{len_sq}}} = {exact_len}$."
        elif mode in [2, 3]:
            u1, u2 = rng.sample([1, 2, 3, 4, -1, -2], 2)
            v1, v2 = rng.sample([2, 3, 4, 5, -2, -3], 2)
            dot = u1 * v1 + u2 * v2
            q_text = f"Tích vô hướng chính tắc của hai véc tơ $u = ({u1}, {u2})$ và $v = ({v1}, {v2})$ trong $\\mathbb{{R}}^2$ bằng:"
            cor = f"${dot}$"
            w1 = f"${u1 * v2 + u2 * v1}$"
            w2 = f"${dot + 2}$"
            w3 = f"${abs(dot)}$"
            exp = f"Tích vô hướng chính tắc: $\\langle u, v \\rangle = u_1 v_1 + u_2 v_2 = ({u1})({v1}) + ({u2})({v2}) = {dot}$."
        else:
            q_text = "Bất đẳng thức Cauchy-Schwarz trong không gian véc tơ Euclide phát biểu rằng với mọi véc tơ $u, v$:"
            cor = "$|\\langle u, v \\rangle| \\le \\|u\\| \\cdot \\|v\\|$"
            w1 = "$\\langle u, v \\rangle \\ge \\|u\\| \\cdot \\|v\\|$"
            w2 = "$\\|u + v\\| = \\|u\\| + \\|v\\|$"
            w3 = "$\\langle u, v \\rangle = \\|u\\| + \\|v\\|$"
            exp = "Bất đẳng thức Cauchy-Schwarz: $|\\langle u, v \\rangle| \\le \\|u\\| \\cdot \\|v\\|$. Dấu đẳng thức xảy ra khi và chỉ khi hai véc tơ phụ thuộc tuyến tính."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    elif sub == 2: # 6.2 Tính trực giao & Gram-Schmidt
        u1 = rng.choice([1, 2, 3, 4, 5])
        u2 = rng.choice([1, 2, 3, 4, 5])
        u3 = rng.choice([1, 2, 3])
        v1 = rng.choice([1, 2, 3])
        v2 = rng.choice([1, 2, 3])
        if mode in [0, 1]:
            q_text = f"Tìm giá trị của tham số $m$ để hai véc tơ $u = ({u1}, {u2})$ và $v = (m, {-u1})$ trong $\\mathbb{{R}}^2$ **trực giao** với nhau:"
            cor = f"$m = {u2}$"
            w1 = f"$m = {-u2}$"
            w2 = "$m = 0$"
            w3 = f"$m = {u1}$"
            exp = f"Hai véc tơ trực giao khi và chỉ khi tích vô hướng bằng 0: $\\langle u, v \\rangle = {u1} \\cdot m + {u2} \\cdot ({-u1}) = 0 \\iff {u1} m = {u1 * u2} \\iff m = {u2}$."
        elif mode in [2, 3]:
            # u = (1, u2, u3), v = (m, -1, 1). dot = m - u2 + u3 = 0 => m = u2 - u3
            m_sol = u2 - u3
            q_text = f"Tìm giá trị của $m$ để hai véc tơ trong $\\mathbb{{R}}^3$: $u = (1, {u2}, {u3})$ và $v = (m, -1, 1)$ **vuông góc** với nhau:"
            cor = f"$m = {m_sol}$"
            w1 = f"$m = {-m_sol}$"
            w2 = "$m = 0$"
            w3 = f"$m = {u2 + u3}$"
            exp = f"Hai véc tơ vuông góc khi $\\langle u, v \\rangle = 1 \\cdot m + ({u2})(-1) + ({u3})(1) = 0 \\iff m - {u2} + {u3} = 0 \\iff m = {m_sol}$."
        else:
            q_text = "Hệ véc tơ $\\{e_1, e_2, \\dots, e_n\\}}$ được gọi là một **hệ trực chuẩn** nếu thỏa mãn điều kiện:"
            cor = "$\\langle e_i, e_j \\rangle = 1$ khi $i = j$ và $\\langle e_i, e_j \\rangle = 0$ khi $i \\neq j$"
            w1 = "$\\langle e_i, e_j \\rangle = 0$ với mọi $i, j$"
            w2 = "$\\langle e_i, e_j \\rangle = 1$ với mọi $i, j$"
            w3 = "$\\|e_i\\| = 0$ với mọi $i$"
            exp = "Hệ trực chuẩn là hệ gồm các véc tơ đôi một vuông góc (trực giao) và đều có chuẩn bằng 1 (chuẩn hóa): $\\langle e_i, e_j \\rangle = \\delta_{ij}$."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    elif sub == 3: # 6.3 Dạng toàn phương & Ma trận đối xứng
        a, b, c = rng.sample([1, 2, 3, 4, 5, 6], 3)
        d = rng.choice([2, 4, 6, 8, 10])
        if mode in [0, 1]:
            q_text = f"Cho dạng toàn phương $Q(x_1, x_2) = {a}x_1^2 + {d}x_1 x_2 + {b}x_2^2$ trên $\\mathbb{{R}}^2$. Ma trận đối xứng biểu diễn $Q$ trong cơ sở chính tắc là:"
            cor = f"$\\begin{{bmatrix}} {a} & {d//2} \\\\ {d//2} & {b} \\end{{bmatrix}}$"
            w1 = f"$\\begin{{bmatrix}} {a} & {d} \\\\ {d} & {b} \\end{{bmatrix}}$"
            w2 = f"$\\begin{{bmatrix}} {a} & {d} \\\\ 0 & {b} \\end{{bmatrix}}$"
            w3 = f"$\\begin{{bmatrix}} {d//2} & {a} \\\\ {b} & {d//2} \\end{{bmatrix}}$"
            exp = f"Phần tử trên đường chéo chính là hệ số của các bình phương $a_{{11}} = {a}, a_{{22}} = {b}$. Phần tử ngoài đường chéo là một nửa hệ số của số hạng chéo: $a_{{12}} = a_{{21}} = \\frac{{{d}}}{{2}} = {d//2}$."
        elif mode in [2, 3]:
            q_text = "Ma trận của dạng toàn phương trong một cơ sở luôn luôn có tính chất nào sau đây?"
            cor = "Luôn là ma trận đối xứng ($A = A^T$)"
            w1 = "Luôn là ma trận phản đối xứng ($A = -A^T$)"
            w2 = "Luôn có định thức dương"
            w3 = "Luôn là ma trận tam giác"
            exp = "Theo quy ước chuẩn của đại số tuyến tính, ma trận biểu diễn dạng toàn phương luôn được chọn là ma trận đối xứng ($a_{ij} = a_{ji}$)."
        else:
            q_text = "Khi đổi cơ sở với ma trận chuyển $C$, ma trận $A$ của dạng toàn phương chuyển thành ma trận $A'$ theo công thức nào?"
            cor = "$A' = C^T A C$"
            w1 = "$A' = C^{-1} A C$"
            w2 = "$A' = C A C^T$"
            w3 = "$A' = C A C^{-1}$"
            exp = "Công thức biến đổi ma trận của dạng toàn phương khi đổi cơ sở là quan hệ tương đẳng (congruent): $A' = C^T A C$."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    else: # 6.4 Dấu của dạng toàn phương
        b_coef = rng.choice([1, 2, 3, 4, 5])
        b_sq = b_coef**2
        a_coef = rng.choice([1, 2, 3])
        if mode in [0, 1]:
            threshold = b_sq // a_coef if b_sq % a_coef == 0 else f"\\frac{{{b_sq}}}{{{a_coef}}}"
            thresh_num = b_sq / a_coef
            q_text = f"Tìm điều kiện của tham số $m$ để dạng toàn phương $Q(x_1, x_2) = {a_coef}x_1^2 + {2*b_coef}x_1 x_2 + m x_2^2$ **xác định dương**:"
            cor = f"$m > {b_sq // a_coef}$" if b_sq % a_coef == 0 else f"$m > \\dfrac{{{b_sq}}}{{{a_coef}}}$"
            w1 = f"$m < {b_sq // a_coef}$" if b_sq % a_coef == 0 else f"$m < \\dfrac{{{b_sq}}}{{{a_coef}}}$"
            w2 = "$m > 0$"
            w3 = f"$m = {b_coef}$"
            exp = f"Ma trận của $Q$ là $\\begin{{bmatrix}} {a_coef} & {b_coef} \\\\ {b_coef} & m \\end{{bmatrix}}$. Theo tiêu chuẩn Sylvester: $\\Delta_1 = {a_coef} > 0$ và $\\Delta_2 = {a_coef}m - {b_sq} > 0 \\iff m > {threshold}$."
        elif mode in [2, 3]:
            q_text = f"Tìm điều kiện của tham số $m$ để dạng toàn phương $Q(x_1, x_2, x_3) = x_1^2 + 2x_2^2 + (m - {b_coef})x_3^2$ **xác định dương**:"
            cor = f"$m > {b_coef}$"
            w1 = f"$m < {b_coef}$"
            w2 = f"$m = {b_coef}$"
            w3 = "$m > 0$"
            exp = f"Dạng toàn phương chính tắc xác định dương khi tất cả các hệ số bình phương đều dương: $1 > 0, 2 > 0$ và $m - {b_coef} > 0 \\iff m > {b_coef}$."
        else:
            q_text = f"Dạng toàn phương $Q(x_1, x_2) = x_1^2 + {2*b_coef}x_1 x_2 + {b_sq}x_2^2 = (x_1 + {b_coef}x_2)^2$ thuộc loại nào sau đây?"
            cor = "Nửa xác định dương (bán xác định dương)"
            w1 = "Xác định dương"
            w2 = "Xác định âm"
            w3 = "Không xác định dấu"
            exp = f"Ta có $Q = (x_1 + {b_coef}x_2)^2 \\ge 0$ với mọi $(x_1, x_2)$. Tuy nhiên, với các véc tơ khác không thỏa mãn $x_1 + {b_coef}x_2 = 0$ (chẳng hạn $({-b_coef}, 1) \\neq (0, 0)$) thì $Q = 0$. Vì tồn tại véc tơ khác không có $Q = 0$ nên $Q$ chỉ là nửa xác định dương."

        options = [{"key": "A", "text": cor}, {"key": "B", "text": w1}, {"key": "C", "text": w2}, {"key": "D", "text": w3}]
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

# ==============================================================================
# MAIN GENERATOR FUNCTION
# ==============================================================================
TOPIC_NAMES = {
    1: "CHƯƠNG 1: LOGIC MỆNH ĐỀ, TẬP HỢP, ÁNH XẠ & BOOLE",
    2: "CHƯƠNG 2: KHÔNG GIAN VÉC TƠ",
    3: "CHƯƠNG 3: MA TRẬN VÀ ĐỊNH THỨC",
    4: "CHƯƠNG 4: HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    5: "CHƯƠNG 5: ÁNH XẠ TUYẾN TÍNH",
    6: "CHƯƠNG 6: KHÔNG GIAN VÉC TƠ EUCLIDE, DẠNG TOÀN PHƯƠNG"
}

DISPATCHERS = {
    1: gen_ch1,
    2: gen_ch2,
    3: gen_ch3,
    4: gen_ch4,
    5: gen_ch5,
    6: gen_ch6
}

def generate_additional_questions(topic_id, sub_type_id, count, seen_texts):
    results = []
    target_keys = ['A', 'B', 'C', 'D']
    attempts = 0
    fn = DISPATCHERS[topic_id]

    while len(results) < count and attempts < 2000:
        attempts += 1
        q_raw = fn(sub_type_id, attempts * 19 + len(results) * 37)
        if q_raw["question"] in seen_texts:
            continue

        seen_texts.add(q_raw["question"])
        target_key = target_keys[len(results) % 4]
        shuffled_opts, final_correct = shuffle_options_balanced(q_raw["options"], target_key)

        exp = q_raw["explanation"]
        exp = exp.replace("**Chọn đáp án: A.**", f"**Chọn đáp án: {final_correct}.**")

        new_q = {
            "topicId": topic_id,
            "topicName": TOPIC_NAMES[topic_id],
            "subTypeId": sub_type_id,
            "question": q_raw["question"],
            "options": shuffled_opts,
            "correct": final_correct,
            "explanation": exp,
            "isOriginal": False,
            "origin": "extra"
        }
        results.append(new_q)

    return results
