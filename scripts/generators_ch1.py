# -*- coding: utf-8 -*-
"""
scripts/generators_ch1.py
Chương 1: Logic mệnh đề, Tập hợp, Ánh xạ & Boole.
Gồm 4 dạng bài, mỗi dạng bài có 10 modes, mỗi mode được tham số hóa ngẫu nhiên
hoặc chọn từ pool đa dạng để đảm bảo sinh hàng chục câu hỏi độc nhất không trùng lặp.
"""

import random
import math

def gen_ch1(sub, seed, make_unique_options):
    rng = random.Random(seed * 31 + sub * 101)
    mode = seed % 10

    if sub == 1: # 1.1 Chân trị & Các phép toán Mệnh đề
        if mode == 0:
            p = rng.choice([True, False])
            q = rng.choice([True, False])
            r = rng.choice([True, False])
            variant = rng.choice([0, 1, 2, 3])
            p_s = "Đúng (1)" if p else "Sai (0)"
            q_s = "Đúng (1)" if q else "Sai (0)"
            r_s = "Đúng (1)" if r else "Sai (0)"
            if variant == 0:
                res = (not p) or (q and r)
                form = "p \\to (q \\wedge r)"
            elif variant == 1:
                res = (not (p or q)) or r
                form = "(p \\vee q) \\to r"
            elif variant == 2:
                res = (p == q) and (not r)
                form = "(p \\leftrightarrow q) \\wedge \\bar{r}"
            else:
                res = (not p) or (q or r)
                form = "p \\to (q \\vee r)"
            ans_s = "Đúng (1)" if res else "Sai (0)"
            inv_s = "Sai (0)" if res else "Đúng (1)"
            q_text = f"Cho các mệnh đề: $p$ nhận chân trị {p_s}, $q$ nhận {q_s}, $r$ nhận {r_s}. Chân trị của mệnh đề phức hợp ${form}$ là:"
            cor = ans_s
            w1 = inv_s
            w2 = "Không xác định được"
            w3 = "Luôn đúng với mọi $p, q, r$"
            exp = f"Thay các chân trị đã cho vào mệnh đề ${form}$, ta tính được chân trị của biểu thức là **{ans_s}**."
        elif mode == 1:
            tauts = [
                ("((p \\to q) \\wedge p) \\to q", "Quy tắc khẳng định Modus Ponens"),
                ("((p \\to q) \\wedge \\bar{q}) \\to \\bar{p}", "Quy tắc phủ định Modus Tollens"),
                ("((p \\to q) \\wedge (q \\to r)) \\to (p \\to r)", "Quy tắc tam đoạn luận giả định (Bắc cầu)"),
                ("p \\vee \\bar{p}", "Luật triệt tam (Law of Excluded Middle)"),
                ("(p \\wedge q) \\to p", "Quy tắc rút gọn hội"),
                ("p \\to (p \\vee q)", "Quy tắc cộng tuyển"),
                ("(p \\to q) \\leftrightarrow (\\bar{q} \\to \\bar{p})", "Luật phản đảo"),
                ("(p \\to q) \\leftrightarrow (\\bar{p} \\vee q)", "Định nghĩa phép kéo theo")
            ]
            t_form, t_name = tauts[rng.randint(0, len(tauts)-1)]
            q_text = f"Trong logic mệnh đề, dạng mệnh đề nào dưới đây là một **hằng đúng** (tautology - ứng với {t_name})?"
            cor = f"${t_form}$"
            w1 = "$p \\wedge \\bar{p}$"
            w2 = "$p \\to \\bar{p}$"
            w3 = "$(p \\vee q) \\to (p \\wedge q)$"
            exp = f"${t_form}$ luôn nhận chân trị 1 (Đúng) với mọi trường hợp của các biến mệnh đề. Đây là {t_name}."
        elif mode == 2:
            contradictions = [
                ("$p \\wedge \\bar{p}$", "Luật mâu thuẫn cơ bản"),
                ("$(p \\vee q) \\wedge (\\bar{p} \\wedge \\bar{q})$", "Hội của một tuyển và phủ định của nó"),
                ("$p \\leftrightarrow \\bar{p}$", "Phép tương đương giữa biến và phủ định"),
                ("$(p \\to q) \\wedge (p \\wedge \\bar{q})$", "Hội của phép kéo theo và phủ định của nó")
            ]
            c_form, c_desc = rng.choice(contradictions)
            q_text = f"Trong logic mệnh đề, dạng mệnh đề nào dưới đây là một **hằng sai** (mâu thuẫn - contradiction)?"
            cor = f"{c_form}"
            w1 = "$p \\vee \\bar{p}$"
            w2 = "$p \\to p$"
            w3 = "$p \\leftrightarrow p$"
            exp = f"Dạng mệnh đề {c_form} luôn nhận chân trị 0 (Sai) trong mọi trường hợp ({c_desc})."
        elif mode == 3:
            var_pairs = [
                ("$x > 0 \\to x^2 > 0$", "$x^2 \\le 0 \\to x \\le 0$", "$x^2 > 0 \\to x > 0$", "$x \\le 0 \\to x^2 \\le 0$"),
                ("$a = b \\to a^2 = b^2$", "$a^2 \\neq b^2 \\to a \\neq b$", "$a^2 = b^2 \\to a = b$", "$a \\neq b \\to a^2 \\neq b^2$"),
                ("$n \\text{ chia hết cho } 4 \\to n \\text{ chia hết cho } 2$", "$n \\text{ không chia hết cho } 2 \\to n \\text{ không chia hết cho } 4$", "$n \\text{ chia hết cho } 2 \\to n \\text{ chia hết cho } 4$", "$n \\text{ không chia hết cho } 4 \\to n \\text{ không chia hết cho } 2$"),
                ("$p \\to q$", "$\\bar{q} \\to \\bar{p}$", "$q \\to p$", "$\\bar{p} \\to \\bar{q}$")
            ]
            orig, contra, converse, inverse = rng.choice(var_pairs)
            q_text = f"Mệnh đề phản đảo của mệnh đề kéo theo {orig} là mệnh đề nào sau đây?"
            cor = f"{contra}"
            w1 = f"{converse}"
            w2 = f"{inverse}"
            w3 = "Không có mệnh đề phản đảo"
            exp = f"Mệnh đề phản đảo của $A \\to B$ là $\\bar{{B}} \\to \\bar{{A}}$. Do đó mệnh đề phản đảo là {contra}."
        elif mode == 4:
            a = rng.choice([2, 3, 4, 5, 7])
            power = rng.choice([2, 4])
            q_text = f"Phủ định của mệnh đề $\\forall x \\in \\mathbb{{R}}, \\, x^{power} + {a} > 0$ là mệnh đề nào sau đây?"
            cor = f"$\\exists x \\in \\mathbb{{R}}, \\, x^{power} + {a} \\le 0$"
            w1 = f"$\\forall x \\in \\mathbb{{R}}, \\, x^{power} + {a} \\le 0$"
            w2 = f"$\\exists x \\in \\mathbb{{R}}, \\, x^{power} + {a} < 0$"
            w3 = f"$\\forall x \\in \\mathbb{{R}}, \\, x^{power} + {a} < 0$"
            exp = f"Phủ định của lượng từ $\\forall$ là $\\exists$, và phủ định của dấu $>$ là $\\le$. Do đó phủ định là $\\exists x \\in \\mathbb{{R}}, x^{power} + {a} \\le 0$."
        elif mode == 5:
            n = rng.choice([2, 3, 4, 5, 6, 7])
            ans = 2**n
            q_text = f"Bảng chân trị của một dạng mệnh đề chứa đúng {n} biến mệnh đề độc lập có tổng cộng bao nhiêu dòng (hàng) giá trị chân trị?"
            cor = f"${ans}$ dòng"
            w1 = f"${2*n}$ dòng"
            w2 = f"${n**2}$ dòng"
            w3 = f"${ans + 4}$ dòng"
            exp = f"Mỗi biến mệnh đề độc lập nhận 1 trong 2 giá trị (0 hoặc 1). Với {n} biến, số trường hợp chân trị là $2^{{{n}}} = {ans}$ dòng."
        elif mode == 6:
            items = [
                ("A \\to B", "A", "B"),
                ("P \\to Q", "P", "Q"),
                ("M \\to N", "M", "N")
            ]
            form, left, right = rng.choice(items)
            q_text = f"Trong mệnh đề kéo theo ${form}$, khẳng định nào sau đây diễn đạt **chính xác** mối quan hệ điều kiện giữa ${left}$ và ${right}$?"
            cor = f"${left}$ là điều kiện đủ để có ${right}$, và ${right}$ là điều kiện cần để có ${left}$"
            w1 = f"${left}$ là điều kiện cần để có ${right}$, và ${right}$ là điều kiện đủ để có ${left}$"
            w2 = f"${left}$ và ${right}$ là điều kiện cần và đủ của nhau"
            w3 = f"${left}$ là điều kiện tương đương với ${right}$"
            exp = f"Trong mệnh đề ${form}$, ${left}$ là tiền đề (điều kiện đủ để suy ra ${right}$), còn ${right}$ là kết luận (điều kiện cần để ${left}$ xảy ra)."
        elif mode == 7:
            p_val = rng.choice([1, 0])
            q_val = 0 if p_val == 1 else rng.choice([0, 1])
            is_false = (p_val == 1 and q_val == 0)
            res_str = "Sai (0)" if is_false else "Đúng (1)"
            p_text = "Đúng (1)" if p_val == 1 else "Sai (0)"
            q_text_val = "Sai (0)" if q_val == 0 else "Đúng (1)"
            q_text = f"Cho biết mệnh đề $p$ nhận chân trị {p_text} và $q$ nhận chân trị {q_text_val}. Khi đó chân trị của mệnh đề kéo theo $p \\to q$ là:"
            cor = res_str
            w1 = "Sai (0)" if res_str == "Đúng (1)" else "Đúng (1)"
            w2 = "Không xác định được"
            w3 = "Luôn đúng với mọi $p, q$"
            exp = f"Mệnh đề kéo theo $p \\to q$ chỉ nhận giá trị Sai khi $p = 1$ và $q = 0$. Ở đây $p = {p_val}, q = {q_val}$ nên chân trị là **{res_str}**."
        elif mode == 8:
            true_maths = [
                ("$\\forall x \\in \\mathbb{R}, \\, x^2 + 1 > 0$", "Bình phương cộng 1 luôn dương"),
                ("$\\forall x \\in \\mathbb{R}, \\, |x| \\ge 0$", "Giá trị tuyệt đối luôn không âm"),
                ("$\\exists x \\in \\mathbb{R}, \\, x^2 - 2 = 0$", "Tồn tại số vô tỉ $\\sqrt{2}$"),
                ("$\\forall n \\in \\mathbb{N}, \\, n(n+1) \\text{ là số chẵn}$", "Tích hai số tự nhiên liên tiếp luôn chẵn")
            ]
            t_stat, t_exp = rng.choice(true_maths)
            q_text = f"Trong các mệnh đề toán học sau đây, mệnh đề nào là một **mệnh đề Đúng**?"
            cor = f"{t_stat}"
            w1 = "$\\exists x \\in \\mathbb{R}, \\, x^2 + 1 = 0$"
            w2 = "$\\forall x \\in \\mathbb{R}, \\, x^2 > x$"
            w3 = "$\\forall n \\in \\mathbb{N}, \\, n - 2 > 0$"
            exp = f"Mệnh đề {t_stat} là mệnh đề đúng vì {t_exp}."
        else:
            syllogisms = [
                ("$((p \\vee q) \\wedge \\bar{p}) \\implies q$", "Tam đoạn luận tuyển (Disjunctive Syllogism)"),
                ("$((p \\to q) \\wedge (q \\to r)) \\implies (p \\to r)$", "Tam đoạn luận giả định (Hypothetical Syllogism)"),
                ("$((p \\to q) \\wedge p) \\implies q$", "Khẳng định tiền đề (Modus Ponens)"),
                ("$((p \\to q) \\wedge \\bar{q}) \\implies \\bar{p}$", "Phủ định kết luận (Modus Tollens)")
            ]
            rule_form, rule_name = rng.choice(syllogisms)
            q_text = f"Quy tắc suy luận hợp lệ ứng với **{rule_name}** là:"
            cor = f"{rule_form}"
            w1 = "$((p \\vee q) \\wedge p) \\implies q$"
            w2 = "$((p \\to q) \\wedge q) \\implies p$"
            w3 = "$((p \\wedge q) \\wedge \\bar{p}) \\implies q$"
            exp = f"Theo logic hình thức, quy tắc {rule_name} được phát biểu chính xác là {rule_form}."

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    elif sub == 2: # 1.2 Boole & Tương đương Logic
        if mode == 0:
            var_choice = rng.choice([0, 1])
            if var_choice == 0:
                q_text = "Theo luật De Morgan trong đại số Boole, biểu thức phủ định $\\overline{x \\vee y}$ tương đương với:"
                cor = "$\\bar{x} \\wedge \\bar{y}$"
                w1 = "$\\bar{x} \\vee \\bar{y}$"
                w2 = "$x \\wedge y$"
                w3 = "$\\bar{x} \\vee y$"
                exp = "Luật De Morgan: Phủ định của một tuyển bằng hội các phủ định: $\\overline{x \\vee y} = \\bar{x} \\wedge \\bar{y}$."
            else:
                q_text = "Theo luật De Morgan trong đại số Boole, biểu thức phủ định $\\overline{x \\wedge y}$ tương đương với:"
                cor = "$\\bar{x} \\vee \\bar{y}$"
                w1 = "$\\bar{x} \\wedge \\bar{y}$"
                w2 = "$x \\vee y$"
                w3 = "$x \\wedge \\bar{y}$"
                exp = "Luật De Morgan: Phủ định của một hội bằng tuyển các phủ định: $\\overline{x \\wedge y} = \\bar{x} \\vee \\bar{y}$."
        elif mode == 1:
            var_choice = rng.choice([0, 1])
            if var_choice == 0:
                q_text = "Theo luật hấp thụ (Absorption Law) trong đại số Boole, biểu thức $x \\vee (x \\wedge y)$ rút gọn thành:"
                cor = "$x$"
                w1 = "$y$"
                w2 = "$x \\wedge y$"
                w3 = "$x \\vee y$"
                exp = "Luật hấp thụ: $x \\vee (x \\wedge y) = x$."
            else:
                q_text = "Theo luật hấp thụ (Absorption Law) trong đại số Boole, biểu thức $x \\wedge (x \\vee y)$ rút gọn thành:"
                cor = "$x$"
                w1 = "$y$"
                w2 = "$x \\vee y$"
                w3 = "$x \\wedge y$"
                exp = "Luật hấp thụ: $x \\wedge (x \\vee y) = x$."
        elif mode == 2:
            duals = [
                ("$(x \\vee 0) \\wedge (y \\vee \\bar{z})$", "$(x \\wedge 1) \\vee (y \\wedge \\bar{z})$"),
                ("$(x \\wedge 1) \\vee (y \\wedge 0)$", "$(x \\vee 0) \\wedge (y \\vee 1)$"),
                ("$(x \\vee y) \\wedge (\\bar{x} \\vee z)$", "$(x \\wedge y) \\vee (\\bar{x} \\wedge z)$")
            ]
            orig_f, dual_f = rng.choice(duals)
            q_text = f"Nguyên lý đối ngẫu (Dual principle) của công thức Boole {orig_f} là:"
            cor = f"{dual_f}"
            w1 = orig_f.replace("0", "1")
            w2 = dual_f.replace("x", "\\bar{x}")
            w3 = "Không có công thức đối ngẫu"
            exp = "Để tìm công thức đối ngẫu, hoán đổi các phép toán $\\vee \\leftrightarrow \\wedge$ và các hằng số $0 \\leftrightarrow 1$, giữ nguyên các biến và phủ định của biến."
        elif mode == 3:
            simplifications = [
                ("$F = (x \\wedge y) \\vee (x \\wedge \\bar{y})$", "$x$"),
                ("$F = (x \\vee y) \\wedge (x \\vee \\bar{y})$", "$x$"),
                ("$F = (x \\wedge y) \\vee (\\bar{x} \\wedge y)$", "$y$"),
                ("$F = (x \\vee y) \\wedge (\\bar{x} \\vee y)$", "$y$")
            ]
            f_expr, f_ans = rng.choice(simplifications)
            q_text = f"Rút gọn biểu thức logic Boole {f_expr} ta được:"
            cor = f"{f_ans}"
            w1 = "$x \\wedge y$"
            w2 = "$1$"
            w3 = "$0$"
            exp = f"Áp dụng tính chất phân phối và $y \\vee \\bar{{y}} = 1$ (hoặc $y \\wedge \\bar{{y}} = 0$), ta rút gọn được {f_expr} thành {f_ans}."
        elif mode == 4:
            var_choice = rng.choice([0, 1])
            if var_choice == 0:
                q_text = "Rút gọn biểu thức Boole $F = x \\vee (\\bar{x} \\wedge y)$ ta được:"
                cor = "$x \\vee y$"
                w1 = "$x \\wedge y$"
                w2 = "$x$"
                w3 = "$y$"
                exp = "Áp dụng luật phân phối: $x \\vee (\\bar{x} \\wedge y) = (x \\vee \\bar{x}) \\wedge (x \\vee y) = 1 \\wedge (x \\vee y) = x \\vee y$."
            else:
                q_text = "Rút gọn biểu thức Boole $F = x \\wedge (\\bar{x} \\vee y)$ ta được:"
                cor = "$x \\wedge y$"
                w1 = "$x \\vee y$"
                w2 = "$x$"
                w3 = "$y$"
                exp = "Áp dụng luật phân phối: $x \\wedge (\\bar{x} \\vee y) = (x \\wedge \\bar{x}) \\vee (x \\wedge y) = 0 \\vee (x \\wedge y) = x \\wedge y$."
        elif mode == 5:
            xor_cases = [
                ("x \\oplus 0", "$x$"),
                ("x \\oplus 1", "$\\bar{x}$"),
                ("x \\oplus x", "$0$"),
                ("x \\oplus \\bar{x}", "$1$")
            ]
            in_x, out_x = rng.choice(xor_cases)
            q_text = f"Trong đại số Boole, giá trị rút gọn của biểu thức ${in_x}$ (phép tuyển loại trừ XOR) là:"
            cor = f"{out_x}"
            w1 = "$x$" if out_x != "$x$" else "$\\bar{x}$"
            w2 = "$1$" if out_x != "$1$" else "$0$"
            w3 = "$x \\wedge 1$"
            exp = f"Theo định nghĩa phép XOR: $a \\oplus b = a\\bar{{b}} \\vee \\bar{{a}}b$, ta có ${in_x} = {out_x}$."
        elif mode == 6:
            q_text = "Tại sao cổng NAND (hoặc NOR) được gọi là cổng logic vạn năng (Universal gate)?"
            cor = "Vì mọi hàm Boole đều có thể được thiết kế chỉ bằng các cổng NAND (hoặc NOR)"
            w1 = "Vì cổng NAND có tốc độ xử lý nhanh nhất trong vi mạch"
            w2 = "Vì cổng NAND tiêu thụ ít năng lượng nhất"
            w3 = "Vì cổng NAND có thể nhận vô số đầu vào cùng một lúc"
            exp = "Hệ {NAND} (hoặc {NOR}) là một hệ đầy đủ chức năng, do đó mọi phép toán logic cơ bản (NOT, AND, OR) và mọi hàm Boole đều có thể biểu diễn chỉ bằng cổng NAND."
        elif mode == 7:
            eq_relations = [
                ("Quan hệ đồng dư modulo $m$ ($a \\equiv b \\pmod{m}$) trên $\\mathbb{Z}$", "Phản xạ, Đối xứng và Bắc cầu"),
                ("Quan hệ bằng nhau ($a = b$) trên tập số thực $\\mathbb{R}$", "Phản xạ, Đối xứng và Bắc cầu"),
                ("Quan hệ song song giữa các đường thẳng trong mặt phẳng", "Phản xạ, Đối xứng và Bắc cầu")
            ]
            rel_name, rel_prop = rng.choice(eq_relations)
            q_text = f"{rel_name} là một quan hệ tương đương vì nó thỏa mãn 3 tính chất:"
            cor = f"{rel_prop}"
            w1 = "Phản xạ, Phản đối xứng và Bắc cầu"
            w2 = "Đối xứng, Phản đối xứng và Bắc cầu"
            w3 = "Phản xạ, Đối xứng và Đầy đủ"
            exp = f"Mọi quan hệ tương đương bắt buộc phải thỏa mãn 3 tính chất: {rel_prop}."
        elif mode == 8:
            order_relations = [
                ("Quan hệ chia hết ($a \\mid b$) trên tập số nguyên dương $\\mathbb{N}^*$", "Phản xạ, Phản đối xứng và Bắc cầu"),
                ("Quan hệ nhỏ hơn hoặc bằng ($\\le$) trên tập số thực $\\mathbb{R}$", "Phản xạ, Phản đối xứng và Bắc cầu"),
                ("Quan hệ bao hàm tập hợp ($\\subseteq$) trên tập lũy thừa $\\mathcal{P}(S)$", "Phản xạ, Phản đối xứng và Bắc cầu")
            ]
            rel_name, rel_prop = rng.choice(order_relations)
            q_text = f"{rel_name} là một quan hệ thứ tự (Poset) vì nó thỏa mãn 3 tính chất:"
            cor = f"{rel_prop}"
            w1 = "Phản xạ, Đối xứng và Bắc cầu"
            w2 = "Không phản xạ, Đối xứng và Bắc cầu"
            w3 = "Đối xứng, Phản đối xứng và Bắc cầu"
            exp = f"Quan hệ thứ tự (bán phần) thỏa mãn 3 tính chất: {rel_prop}."
        else:
            n = rng.choice([1, 2, 3])
            num_funcs = 2**(2**n)
            q_text = f"Có tổng cộng bao nhiêu hàm Boole $n$ biến phân biệt với $n = {n}$?"
            cor = f"${num_funcs}$"
            w1 = f"${2**n}$"
            w2 = f"${2*n}$"
            w3 = f"${num_funcs // 2}$"
            exp = f"Bảng chân trị có $2^{{{n}}} = {2**n}$ hàng. Mỗi hàng có 2 cách chọn giá trị (0 hoặc 1), do đó số hàm Boole là $2^{{2^{{{n}}}}} = 2^{{{2**n}}} = {num_funcs}$."

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    elif sub == 3: # 1.3 Tập hợp & Phép toán tập hợp
        if mode == 0:
            shift = rng.choice([0, 1, 2, 3])
            a_set = {1 + shift, 2 + shift, 3 + shift, 4 + shift}
            b_set = {3 + shift, 4 + shift, 5 + shift, 6 + shift}
            sym_diff = sorted(list((a_set - b_set) | (b_set - a_set)))
            a_str = "\\{" + ", ".join(map(str, sorted(list(a_set)))) + "\\}"
            b_str = "\\{" + ", ".join(map(str, sorted(list(b_set)))) + "\\}"
            sym_str = "\\{" + ", ".join(map(str, sym_diff)) + "\\}"
            inter_str = "\\{" + ", ".join(map(str, sorted(list(a_set & b_set)))) + "\\}"
            union_str = "\\{" + ", ".join(map(str, sorted(list(a_set | b_set)))) + "\\}"
            q_text = f"Cho hai tập hợp $A = {a_str}$ và $B = {b_str}$. Hiệu đối xứng $A \\Delta B = (A \\setminus B) \\cup (B \\setminus A)$ là:"
            cor = f"${sym_str}$"
            w1 = f"${inter_str}$"
            w2 = f"${union_str}$"
            w3 = "$\\{" + str(1 + shift) + ", " + str(2 + shift) + "\\}$"
            exp = f"$A \\setminus B = \\{{{1 + shift}, {2 + shift}\\}}, B \\setminus A = \\{{{5 + shift}, {6 + shift}\\}}$. Do đó $A \\Delta B = {sym_str}$."
        elif mode == 1:
            n = rng.choice([3, 4, 5, 6, 7, 8])
            subsets = 2**n
            proper = subsets - 1
            is_proper = rng.choice([True, False])
            if is_proper:
                q_text = f"Cho tập hợp $X$ gồm đúng {n} phần tử. Số tập hợp con **thực sự** (tập con khác chính nó) của $X$ là:"
                cor = f"${proper}$"
                w1 = f"${subsets}$"
                w2 = f"${2*n}$"
                w3 = f"${n*(n-1)}$"
                exp = f"Số tập con của tập $n$ phần tử là $2^n = {subsets}$. Số tập con thực sự loại trừ chính tập $X$ nên còn $2^n - 1 = {proper}$."
            else:
                q_text = f"Cho tập hợp $X$ gồm đúng {n} phần tử. Tổng số tập hợp con của $X$ là:"
                cor = f"${subsets}$"
                w1 = f"${proper}$"
                w2 = f"${2*n}$"
                w3 = f"${n**2}$"
                exp = f"Số tập con của tập $n$ phần tử là $2^n = {subsets}$."
        elif mode == 2:
            n = rng.choice([5, 6, 7, 8])
            k = rng.choice([2, 3])
            comb = math.comb(n, k)
            q_text = f"Cho tập hợp $X$ có {n} phần tử. Số tập con gồm đúng {k} phần tử của $X$ bằng:"
            cor = f"${comb}$"
            w1 = f"${comb + 5}$"
            w2 = f"${n * k}$"
            w3 = f"${2**k}$"
            exp = f"Số tập con gồm {k} phần tử của tập {n} phần tử là tổ hợp chập {k} của {n}: $C_{{{n}}}^{{{k}}} = \\dfrac{{{n}!}}{{{k}!({n}-{k})!}} = {comb}$."
        elif mode == 3:
            q_text = "Cho tập hợp $A = \\{a, b\\}$. Tập lũy thừa $\\mathcal{P}(A)$ (tập tất cả các tập con của $A$) là:"
            cor = "$\\{\\emptyset, \\{a\\}, \\{b\\}, \\{a, b\\}\\}$"
            w1 = "$\\{\\{a\\}, \\{b\\}, \\{a, b\\}\\}$"
            w2 = "$\\{\\emptyset, a, b, \\{a, b\\}\\}$"
            w3 = "$\\{\\{a, b\\}\\}$"
            exp = "Tập lũy thừa $\\mathcal{P}(A)$ chứa mọi tập con của $A$, kể cả tập rỗng $\\emptyset$ và chính $A$. Vì $|A|=2$ nên $|\\mathcal{P}(A)| = 2^2 = 4$ phần tử."
        elif mode == 4:
            nA = rng.choice([2, 3, 4, 5])
            nB = rng.choice([3, 4, 5])
            nAB = nA * nB
            q_text = f"Cho tập hợp $A$ có {nA} phần tử và tập hợp $B$ có {nB} phần tử. Số phần tử của tích Descartes $A \\times B$ là:"
            cor = f"${nAB}$"
            w1 = f"${nA + nB}$"
            w2 = f"${nA**nB}$"
            w3 = f"${2**(nA + nB)}$"
            exp = f"Số phần tử của tích Descartes bằng tích số phần tử: $|A \\times B| = |A| \\cdot |B| = {nA} \\cdot {nB} = {nAB}$."
        elif mode == 5:
            nA = rng.choice([20, 25, 30])
            nB = rng.choice([15, 18, 22])
            nInter = rng.choice([5, 8, 10])
            nUnion = nA + nB - nInter
            q_text = f"Một lớp có {nA} bạn thích Toán, {nB} bạn thích Lý, và {nInter} bạn thích cả Toán lẫn Lý. Số bạn thích ít nhất một trong hai môn Toán hoặc Lý là:"
            cor = f"${nUnion}$"
            w1 = f"${nA + nB}$"
            w2 = f"${nUnion - 5}$"
            w3 = f"${nInter + 10}$"
            exp = f"Áp dụng nguyên lý bao hàm - loại trừ: $|A \\cup B| = |A| + |B| - |A \\cap B| = {nA} + {nB} - {nInter} = {nUnion}$."
        elif mode == 6:
            var_choice = rng.choice([0, 1])
            if var_choice == 0:
                q_text = "Theo luật De Morgan cho các phép toán tập hợp, phần bù của giao hai tập hợp $\\overline{A \\cap B}$ bằng:"
                cor = "$\\bar{A} \\cup \\bar{B}$"
                w1 = "$\\bar{A} \\cap \\bar{B}$"
                w2 = "$A \\cup B$"
                w3 = "$\\overline{A \\cup B}$"
                exp = "Luật De Morgan tập hợp: Phần bù của một giao bằng hợp các phần bù: $\\overline{A \\cap B} = \\bar{A} \\cup \\bar{B}$."
            else:
                q_text = "Theo luật De Morgan cho các phép toán tập hợp, phần bù của hợp hai tập hợp $\\overline{A \\cup B}$ bằng:"
                cor = "$\\bar{A} \\cap \\bar{B}$"
                w1 = "$\\bar{A} \\cup \\bar{B}$"
                w2 = "$A \\cap B$"
                w3 = "$\\overline{A \\cap B}$"
                exp = "Luật De Morgan tập hợp: Phần bù của một hợp bằng giao các phần bù: $\\overline{A \\cup B} = \\bar{A} \\cap \\bar{B}$."
        elif mode == 7:
            a1 = rng.choice([-3, -2, -1])
            a2 = rng.choice([3, 4, 5])
            b1 = rng.choice([0, 1, 2])
            b2 = rng.choice([6, 7, 8])
            # Inter of (a1, a2] and [b1, b2) is [b1, a2]
            q_text = f"Trên tập số thực $\\mathbb{{R}}$, giao của hai khoảng $({a1}, {a2}]$ và $[{b1}, {b2})$ là:"
            cor = f"$[{b1}, {a2}]$"
            w1 = f"$({a1}, {b2})$"
            w2 = f"$({b1}, {a2})$"
            w3 = f"$[{b1}, {a2})$"
            exp = f"Giao hai khoảng là tập các giá trị $x$ thỏa mãn: ${a1} < x \\le {a2}$ và ${b1} \\le x < {b2} \\iff {b1} \\le x \\le {a2}$, tức là đoạn $[{b1}, {a2}]$."
        elif mode == 8:
            q_text = "Cho tập hợp $S = \\{1, \\{2, 3\\}, 4\\}$. Khẳng định nào sau đây là **ĐÚNG**?"
            cor = "$\\{2, 3\\} \\in S$"
            w1 = "$\\{2, 3\\} \\subset S$"
            w2 = "$2 \\in S$"
            w3 = "$3 \\in S$"
            exp = "Tập con $\\{2, 3\\}$ đóng vai trò là một phần tử trực tiếp của tập $S$, do đó $\\{2, 3\\} \\in S$ là đúng. Còn $2$ và $3$ không phải là phần tử riêng lẻ của $S$."
        else:
            q_text = "Cho hai tập hợp $A, B$ bất kỳ. Khẳng định nào sau đây luôn **ĐÚNG**?"
            cor = "$A \\setminus B = A \\cap \\bar{B}$"
            w1 = "$A \\setminus B = B \\setminus A$"
            w2 = "$A \\cup (B \\cap C) = (A \\cup B) \\cap C$"
            w3 = "$A \\cap (A \\cup B) = B$"
            exp = "Hiệu của hai tập hợp $A \\setminus B$ chính là tập các phần tử thuộc $A$ và không thuộc $B$, tức là $A \\cap \\bar{B}$."

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}

    else: # 1.4 Ánh xạ
        if mode == 0:
            q_text = "Ánh xạ $f: X \\to Y$ được gọi là một **đơn ánh** (injective) khi và chỉ khi:"
            cor = "$\\forall x_1, x_2 \\in X, \\, f(x_1) = f(x_2) \\implies x_1 = x_2$"
            w1 = "$\\forall y \\in Y, \\, \\exists x \\in X: f(x) = y$"
            w2 = "$\\forall x_1, x_2 \\in X, \\, x_1 = x_2 \\implies f(x_1) = f(x_2)$"
            w3 = "Tập giá trị $f(X)$ trùng với tập đích $Y$"
            exp = "Định nghĩa đơn ánh: Hai phần tử khác nhau thì có ảnh khác nhau, tương đương $f(x_1) = f(x_2) \\implies x_1 = x_2$."
        elif mode == 1:
            q_text = "Ánh xạ $f: X \\to Y$ được gọi là một **toàn ánh** (surjective) khi và chỉ khi:"
            cor = "Tập ảnh $f(X)$ trùng với tập đích $Y$ (mọi phần tử của $Y$ đều có tạo ảnh)"
            w1 = "Mỗi phần tử của $Y$ có nhiều nhất một tạo ảnh trong $X$"
            w2 = "Tập xác định $X$ có cùng số phần tử với tập đích $Y$"
            w3 = "$f$ có ánh xạ ngược $f^{-1}$"
            exp = "Định nghĩa toàn ánh: $\\forall y \\in Y, \\exists x \\in X$ sao cho $f(x) = y$, nghĩa là tập ảnh $f(X) = Y$."
        elif mode == 2:
            a = rng.choice([2, 3, 4, 5])
            b = rng.choice([1, 2, 3, 7])
            q_text = f"Ánh xạ nào sau đây là một **song ánh** từ $\\mathbb{{R}} \\to \\mathbb{{R}}$?"
            cor = f"$f(x) = {a}x + {b}$"
            w1 = "$f(x) = x^2$"
            w2 = "$f(x) = |x|$"
            w3 = "$f(x) = \\sin x$"
            exp = f"Hàm bậc nhất $f(x) = {a}x + {b}$ có đạo hàm $f'(x) = {a} \\neq 0$ nên đơn điệu trên $\\mathbb{{R}}$ (đơn ánh) và có miền giá trị là $\\mathbb{{R}}$ (toàn ánh), do đó là song ánh."
        elif mode == 3:
            a = rng.choice([2, 3, 4, 5])
            b = rng.choice([1, 2, 3, 7])
            q_text = f"Cho ánh xạ $f: \\mathbb{{R}} \\to \\mathbb{{R}}$ xác định bởi $f(x) = {a}x - {b}$. Ánh xạ ngược $f^{{-1}}(x)$ là:"
            cor = f"$f^{{-1}}(x) = \\dfrac{{x + {b}}}{{{a}}}$"
            w1 = f"$f^{{-1}}(x) = \\dfrac{{x - {b}}}{{{a}}}$"
            w2 = f"$f^{{-1}}(x) = {a}x + {b}$"
            w3 = f"$f^{{-1}}(x) = -{a}x + {b}$"
            exp = f"Đặt $y = {a}x - {b} \\iff {a}x = y + {b} \\iff x = \\dfrac{{y + {b}}}{{{a}}}$. Vậy $f^{{-1}}(x) = \\dfrac{{x + {b}}}{{{a}}}$."
        elif mode == 4:
            a = rng.choice([2, 3])
            b = rng.choice([1, 2])
            c = rng.choice([1, 3])
            q_text = f"Cho hai ánh xạ $f(x) = {a}x + {b}$ và $g(x) = x^2 - {c}$ trên $\\mathbb{{R}}$. Công thức của ánh xạ hợp $(g \\circ f)(x)$ là:"
            res_quad = a**2
            res_lin = 2*a*b
            res_const = b**2 - c
            cor = f"${res_quad}x^2 + {res_lin}x {res_const:+}$"
            w1 = f"${a}x^2 - {c}$"
            w2 = f"${res_quad}x^2 - {c}$"
            w3 = f"${a}x^2 + {res_lin}x - {c}$"
            exp = f"$(g \\circ f)(x) = g(f(x)) = ({a}x+{b})^2 - {c} = {res_quad}x^2 + {res_lin}x + {b**2} - {c} = {res_quad}x^2 + {res_lin}x {res_const:+}$."
        elif mode == 5:
            q_text = "Nếu ánh xạ hợp $g \\circ f$ là một **đơn ánh**, thì ta có thể kết luận chắc chắn rằng:"
            cor = "$f$ là một đơn ánh"
            w1 = "$g$ là một đơn ánh"
            w2 = "$g$ là một toàn ánh"
            w3 = "$f$ là một song ánh"
            exp = "Định lý ánh xạ hợp: Nếu $g \\circ f$ là đơn ánh thì ánh xạ trong $f$ bắt buộc phải là đơn ánh."
        elif mode == 6:
            q_text = "Nếu ánh xạ hợp $g \\circ f$ là một **toàn ánh**, thì ta có thể kết luận chắc chắn rằng:"
            cor = "$g$ là một toàn ánh"
            w1 = "$f$ là một toàn ánh"
            w2 = "$f$ là một đơn ánh"
            w3 = "$g$ là một song ánh"
            exp = "Định lý ánh xạ hợp: Nếu $g \\circ f$ là toàn ánh thì ánh xạ ngoài $g$ bắt buộc phải là toàn ánh."
        elif mode == 7:
            q_text = "Ánh xạ $f: \\mathbb{R} \\to [0, +\\infty)$ xác định bởi $f(x) = x^2$ là:"
            cor = "Toàn ánh nhưng không là đơn ánh"
            w1 = "Đơn ánh nhưng không là toàn ánh"
            w2 = "Song ánh"
            w3 = "Không đơn ánh và không toàn ánh"
            exp = "Tập giá trị của $x^2$ là $[0, +\\infty)$ nên $f$ là toàn ánh. Tuy nhiên $f(1) = f(-1) = 1$ nên $f$ không là đơn ánh."
        elif mode == 8:
            m_sz = rng.choice([2, 3, 4])
            n_sz = rng.choice([2, 3])
            total_maps = n_sz ** m_sz
            q_text = f"Cho tập $A$ gồm {m_sz} phần tử và tập $B$ gồm {n_sz} phần tử. Có tất cả bao nhiêu ánh xạ từ $A$ vào $B$?"
            cor = f"${total_maps}$"
            w1 = f"${m_sz * n_sz}$"
            w2 = f"${m_sz**n_sz}$"
            w3 = f"${total_maps + 2}$"
            exp = f"Mỗi phần tử của tập $A$ ({m_sz} phần tử) có {n_sz} cách chọn ảnh trong tập $B$. Do đó tổng số ánh xạ là $|B|^{{|A|}} = {n_sz}^{{{m_sz}}} = {total_maps}$."
        else:
            k = rng.choice([2, 3, 4])
            q_text = f"Ánh xạ $f: \\mathbb{{Z}} \\to \\mathbb{{Z}}$ xác định bởi $f(n) = {k}n$ là:"
            cor = "Đơn ánh nhưng không toàn ánh"
            w1 = "Toàn ánh nhưng không đơn ánh"
            w2 = "Song ánh"
            w3 = "Không đơn ánh và không toàn ánh"
            exp = f"${k}n_1 = {k}n_2 \\implies n_1 = n_2$ nên $f$ là đơn ánh. Nhưng các số không chia hết cho {k} (như 1) không có tạo ảnh nguyên nên $f$ không toàn ánh."

        options = make_unique_options(cor, [w1, w2, w3])
        return {"question": q_text, "options": options, "correct": "A", "explanation": f"* {exp}\n* **Chọn đáp án: A.**"}
