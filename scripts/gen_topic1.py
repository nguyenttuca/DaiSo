# gen_topic1.py
# 24 new high quality questions for Topic 1: LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ

questions_topic1 = [
    {
        "question": "Mệnh đề nào sau đây là một **hằng đúng** (tautology)?",
        "options": [
            {"key": "A", "text": "$p \\to (p \\vee q)$"},
            {"key": "B", "text": "$(p \\vee q) \\to p$"},
            {"key": "C", "text": "$p \\wedge (p \\to q)$"},
            {"key": "D", "text": "$p \\leftrightarrow \\bar{p}$"}
        ],
        "correct": "A",
        "explanation": "Ta có $p \\to (p \\vee q) \\equiv \\bar{p} \\vee (p \\vee q) \\equiv (\\bar{p} \\vee p) \\vee q \\equiv 1 \\vee q \\equiv 1$. Do đó mệnh đề này luôn nhận giá trị chân lý Đúng (1) với mọi giá trị của $p, q$, tức là một hằng đúng."
    },
    {
        "question": "Mệnh đề phản đảo của mệnh đề kéo theo $p \\to q$ là:",
        "options": [
            {"key": "A", "text": "$\\bar{p} \\to \\bar{q}$"},
            {"key": "B", "text": "$\\bar{q} \\to \\bar{p}$"},
            {"key": "C", "text": "$q \\to p$"},
            {"key": "D", "text": "$\\overline{p \\to q}$"}
        ],
        "correct": "B",
        "explanation": "Theo định nghĩa logic mệnh đề:\n- Mệnh đề đảo của $p \\to q$ là $q \\to p$.\n- Mệnh đề nghịch đảo là $\\bar{p} \\to \\bar{q}$.\n- Mệnh đề phản đảo (contrapositive) là $\\bar{q} \\to \\bar{p}$, và ta luôn có $p \\to q \\equiv \\bar{q} \\to \\bar{p}$."
    },
    {
        "question": "Phủ định của mệnh đề $\\forall x \\in \\mathbb{R}, \\, x^2 - 2x + 3 > 0$ là mệnh đề nào sau đây?",
        "options": [
            {"key": "A", "text": "$\\exists x \\in \\mathbb{R}, \\, x^2 - 2x + 3 < 0$"},
            {"key": "B", "text": "$\\forall x \\in \\mathbb{R}, \\, x^2 - 2x + 3 \\le 0$"},
            {"key": "C", "text": "$\\exists x \\in \\mathbb{R}, \\, x^2 - 2x + 3 \\le 0$"},
            {"key": "D", "text": "$\\exists x \\in \\mathbb{R}, \\, x^2 - 2x + 3 = 0$"}
        ],
        "correct": "C",
        "explanation": "Quy tắc phủ định mệnh đề chứa lượng từ: $\\overline{\\forall x \\in X, P(x)} \\equiv \\exists x \\in X, \\overline{P(x)}$. Phủ định của bất đẳng thức '$> 0$' là '$\\le 0$'. Vậy mệnh đề phủ định là $\\exists x \\in \\mathbb{R}, \\, x^2 - 2x + 3 \\le 0$."
    },
    {
        "question": "Rút gọn biểu thức logic Boole $F = (x \\wedge y) \\vee (x \\wedge \\bar{y})$ ta được:",
        "options": [
            {"key": "A", "text": "$x$"},
            {"key": "B", "text": "$y$"},
            {"key": "C", "text": "$x \\vee y$"},
            {"key": "D", "text": "$1$"}
        ],
        "correct": "A",
        "explanation": "Áp dụng luật phân phối của đại số Boole:\n$$F = x \\wedge (y \\vee \\bar{y}) = x \\wedge 1 = x$$"
    },
    {
        "question": "Cho hai tập hợp $A = \\{1, 2, 3, 4\\}$ và $B = \\{3, 4, 5, 6\\}$. Hiệu đối xứng $A \\Delta B = (A \\setminus B) \\cup (B \\setminus A)$ là:",
        "options": [
            {"key": "A", "text": "$\\{3, 4\\}$"},
            {"key": "B", "text": "$\\{1, 2, 5, 6\\}$"},
            {"key": "C", "text": "$\\{1, 2, 3, 4, 5, 6\\}$"},
            {"key": "D", "text": "$\\emptyset$"}
        ],
        "correct": "B",
        "explanation": "Ta có $A \\setminus B = \\{1, 2\\}$ và $B \\setminus A = \\{5, 6\\}$. Do đó $A \\Delta B = \\{1, 2\\} \\cup \\{5, 6\\} = \\{1, 2, 5, 6\\}$."
    },
    {
        "question": "Cho tập hợp $X$ có $5$ phần tử. Số tập con gồm đúng $3$ phần tử của $X$ là:",
        "options": [
            {"key": "A", "text": "$10$"},
            {"key": "B", "text": "$15$"},
            {"key": "C", "text": "$20$"},
            {"key": "D", "text": "$60$"}
        ],
        "correct": "A",
        "explanation": "Số tập hợp con gồm $3$ phần tử của tập có $5$ phần tử là số tổ hợp chập $3$ của $5$: $C_5^3 = \\frac{5!}{3!2!} = \\frac{10}{1} = 10$."
    },
    {
        "question": "Cho tập hợp $A$ có $n$ phần tử ($n \\ge 1$). Số tập hợp con thực sự (tập con khác chính nó) của $A$ là:",
        "options": [
            {"key": "A", "text": "$2^n$"},
            {"key": "B", "text": "$2^n - 1$"},
            {"key": "C", "text": "$2^n - 2$"},
            {"key": "D", "text": "$n^2 - 1$"}
        ],
        "correct": "B",
        "explanation": "Tổng số tập con của tập có $n$ phần tử là $2^n$. Tập con thực sự là tập con bỏ đi chính tập hợp $A$, do đó số tập con thực sự là $2^n - 1$."
    },
    {
        "question": "Cho ánh xạ $f: \\mathbb{R} \\to \\mathbb{R}$ xác định bởi $f(x) = 2x - 3$. Ánh xạ ngược $f^{-1}(x)$ là:",
        "options": [
            {"key": "A", "text": "$f^{-1}(x) = \\dfrac{x + 3}{2}$"},
            {"key": "B", "text": "$f^{-1}(x) = \\dfrac{x - 3}{2}$"},
            {"key": "C", "text": "$f^{-1}(x) = 3x - 2$"},
            {"key": "D", "text": "$f^{-1}(x) = \\dfrac{1}{2x - 3}$"}
        ],
        "correct": "A",
        "explanation": "Đặt $y = f(x) = 2x - 3 \\Leftrightarrow 2x = y + 3 \\Leftrightarrow x = \\dfrac{y + 3}{2}$. Vì $f$ là song ánh trên $\\mathbb{R}$, ánh xạ ngược là $f^{-1}(x) = \\dfrac{x + 3}{2}$."
    },
    {
        "question": "Cho hai ánh xạ $f: \\mathbb{R} \\to \\mathbb{R}, f(x) = x^2 + 1$ và $g: \\mathbb{R} \\to \\mathbb{R}, g(x) = 3x - 2$. Biểu thức ánh xạ hợp thành $(g \\circ f)(x)$ là:",
        "options": [
            {"key": "A", "text": "$3x^2 + 1$"},
            {"key": "B", "text": "$9x^2 - 12x + 5$"},
            {"key": "C", "text": "$3x^2 - 1$"},
            {"key": "D", "text": "$3x^2 + 3$"}
        ],
        "correct": "A",
        "explanation": "Theo định nghĩa ánh xạ hợp thành: $(g \\circ f)(x) = g(f(x)) = g(x^2 + 1) = 3(x^2 + 1) - 2 = 3x^2 + 3 - 2 = 3x^2 + 1$."
    },
    {
        "question": "Quan hệ hai ngôi $R$ trên tập $A$ được gọi là **quan hệ tương đương** nếu nó thỏa mãn các tính chất nào sau đây?",
        "options": [
            {"key": "A", "text": "Phản xạ, Đối xứng và Bắc cầu"},
            {"key": "B", "text": "Phản xạ, Phản xứng và Bắc cầu"},
            {"key": "C", "text": "Đối xứng, Phản xứng và Bắc cầu"},
            {"key": "D", "text": "Phản xạ, Đối xứng và Phản xứng"}
        ],
        "correct": "A",
        "explanation": "Theo định nghĩa, quan hệ tương đương phải thỏa mãn 3 tính chất: Phản xạ (Reflexive), Đối xứng (Symmetric), và Bắc cầu (Transitive). (Nếu thay Đối xứng bằng Phản xứng thì đó là quan hệ thứ tự)."
    },
    {
        "question": "Cho tập $A = \\{1, 2, 3\\}$. Quan hệ $R = \\{(1, 1), (2, 2), (3, 3), (1, 2), (2, 1)\\}$ trên $A$ là:",
        "options": [
            {"key": "A", "text": "Quan hệ tương đương"},
            {"key": "B", "text": "Quan hệ thứ tự một phần"},
            {"key": "C", "text": "Chỉ có tính đối xứng nhưng không có tính phản xạ"},
            {"key": "D", "text": "Không có tính bắc cầu"}
        ],
        "correct": "A",
        "explanation": "- Tính phản xạ: chứa $(1,1), (2,2), (3,3)$ nên có tính phản xạ.\n- Tính đối xứng: $(1,2) \\in R \\Rightarrow (2,1) \\in R$ nên có tính đối xứng.\n- Tính bắc cầu: $(1,2)$ và $(2,1) \\Rightarrow (1,1) \\in R$; $(2,1)$ và $(1,2) \\Rightarrow (2,2) \\in R$. Do đó $R$ là quan hệ tương đương."
    },
    {
        "question": "Dạng chuẩn tắc tuyển (Disjunctive Normal Form - DNF) của hàm Boole $f(x, y) = x \\oplus y$ (phép XOR) là:",
        "options": [
            {"key": "A", "text": "$(x \\wedge \\bar{y}) \\vee (\\bar{x} \\wedge y)$"},
            {"key": "B", "text": "$(x \\vee \\bar{y}) \\wedge (\\bar{x} \\vee y)$"},
            {"key": "C", "text": "$(x \\wedge y) \\vee (\\bar{x} \\wedge \\bar{y})$"},
            {"key": "D", "text": "$x \\vee y$"}
        ],
        "correct": "A",
        "explanation": "Bảng chân lý của $x \\oplus y$ bằng $1$ khi $(x=1, y=0)$ hoặc $(x=0, y=1)$. Tương ứng với hai hội sơ cấp (minterm) là $(x \\wedge \\bar{y})$ và $(\\bar{x} \\wedge y)$. Tuyển của chúng là $(x \\wedge \\bar{y}) \\vee (\\bar{x} \\wedge y)$."
    },
    {
        "question": "Công thức logic nào sau đây tương đương với $p \\to q$?",
        "options": [
            {"key": "A", "text": "$\\bar{p} \\vee q$"},
            {"key": "B", "text": "$p \\vee \\bar{q}$"},
            {"key": "C", "text": "$\\bar{p} \\wedge q$"},
            {"key": "D", "text": "$\\bar{q} \\to p$"}
        ],
        "correct": "A",
        "explanation": "Theo luật kéo theo cơ bản trong logic mệnh đề: $p \\to q \\equiv \\bar{p} \\vee q$."
    },
    {
        "question": "Phủ định của mệnh đề kéo theo $p \\to q$ tương đương với:",
        "options": [
            {"key": "A", "text": "$p \\wedge \\bar{q}$"},
            {"key": "B", "text": "$\\bar{p} \\vee q$"},
            {"key": "C", "text": "$\\bar{p} \\wedge q$"},
            {"key": "D", "text": "$p \\to \\bar{q}$"}
        ],
        "correct": "A",
        "explanation": "Ta có $\\overline{p \\to q} \\equiv \\overline{\\bar{p} \\vee q} \\equiv \\bar{\\bar{p}} \\wedge \\bar{q} \\equiv p \\wedge \\bar{q}$ theo luật De Morgan."
    },
    {
        "question": "Cho $A, B$ là hai tập hợp hữu hạn thỏa mãn $|A| = 20, |B| = 30$ và $|A \\cap B| = 12$. Số phần tử của $A \\cup B$ là:",
        "options": [
            {"key": "A", "text": "$38$"},
            {"key": "B", "text": "$50$"},
            {"key": "C", "text": "$26$"},
            {"key": "D", "text": "$42$"}
        ],
        "correct": "A",
        "explanation": "Theo nguyên lý bù trừ: $|A \\cup B| = |A| + |B| - |A \\cap B| = 20 + 30 - 12 = 38$."
    },
    {
        "question": "Cho tập hợp $S = \\{a, b, c\\}$. Tập lũy thừa $\\mathcal{P}(S)$ có bao nhiêu phần tử?",
        "options": [
            {"key": "A", "text": "$8$"},
            {"key": "B", "text": "$6$"},
            {"key": "C", "text": "$9$"},
            {"key": "D", "text": "$3$"}
        ],
        "correct": "A",
        "explanation": "Tập lũy thừa $\\mathcal{P}(S)$ là tập hợp tất cả các tập con của $S$. Với $|S| = 3$, số phần tử của $\\mathcal{P}(S)$ là $2^3 = 8$."
    },
    {
        "question": "Ánh xạ nào sau đây là một **đơn ánh**?",
        "options": [
            {"key": "A", "text": "$f: \\mathbb{R} \\to \\mathbb{R}, \\, f(x) = 3x - 1$"},
            {"key": "B", "text": "$f: \\mathbb{R} \\to \\mathbb{R}, \\, f(x) = x^2$"},
            {"key": "C", "text": "$f: \\mathbb{R} \\to \\mathbb{R}, \\, f(x) = \\sin x$"},
            {"key": "D", "text": "$f: \\mathbb{Z} \\to \\mathbb{Z}, \\, f(n) = |n|$"}
        ],
        "correct": "A",
        "explanation": "$f(x_1) = f(x_2) \\Leftrightarrow 3x_1 - 1 = 3x_2 - 1 \\Leftrightarrow x_1 = x_2$, do đó $f(x) = 3x - 1$ là đơn ánh (và thực tế là song ánh). Các hàm $x^2, \\sin x, |n|$ đều không đơn ánh vì hai giá trị đối nhau cho cùng một ảnh."
    },
    {
        "question": "Mệnh đề $((p \\to q) \\wedge p) \\to q$ là dạng suy luận nào sau đây?",
        "options": [
            {"key": "A", "text": "Quy tắc Modus Ponens (Khẳng định tiền đề)"},
            {"key": "B", "text": "Quy tắc Modus Tollens (Phủ định kết luận)"},
            {"key": "C", "text": "Quy tắc tam đoạn luận giả thiết"},
            {"key": "D", "text": "Quy tắc tam đoạn luận tuyển"}
        ],
        "correct": "A",
        "explanation": "Quy tắc suy luận Modus Ponens phát biểu rằng: nếu $p \\to q$ đúng và $p$ đúng, thì $q$ đúng. Biểu thức logic tương ứng là $((p \\to q) \\wedge p) \\to q$, là một hằng đúng."
    },
    {
        "question": "Trong đại số Boole, phần tử bù của $x \\wedge (y \\vee z')$ là:",
        "options": [
            {"key": "A", "text": "$x' \\vee (y' \\wedge z)$"},
            {"key": "B", "text": "$x' \\wedge (y' \\vee z)$"},
            {"key": "C", "text": "$x \\vee (y' \\wedge z)$"},
            {"key": "D", "text": "$x' \\vee (y \\wedge z')$"}
        ],
        "correct": "A",
        "explanation": "Áp dụng định lý De Morgan: $\\overline{x \\wedge (y \\vee z')} = \\bar{x} \\vee \\overline{(y \\vee z')} = x' \\vee (y' \\wedge (z')') = x' \\vee (y' \\wedge z)$."
    },
    {
        "question": "Cho $A = \\{x \\in \\mathbb{R} \\mid x^2 - 5x + 6 = 0\\}$ và $B = \\{2, 3\\}$. Khẳng định nào sau đây đúng?",
        "options": [
            {"key": "A", "text": "$A = B$"},
            {"key": "B", "text": "$A \\subset B$ nhưng $A \\neq B$"},
            {"key": "C", "text": "$B \\subset A$ nhưng $B \\neq A$"},
            {"key": "D", "text": "$A \\cap B = \\emptyset$"}
        ],
        "correct": "A",
        "explanation": "Phương trình $x^2 - 5x + 6 = 0 \\Leftrightarrow (x - 2)(x - 3) = 0 \\Leftrightarrow x = 2$ hoặc $x = 3$. Do đó tập $A = \\{2, 3\\}$, suy ra $A = B$."
    },
    {
        "question": "Một quan hệ thứ tự bộ phận (partial order) trên tập hợp $X$ phải thỏa mãn ba tính chất:",
        "options": [
            {"key": "A", "text": "Phản xạ, Phản xứng và Bắc cầu"},
            {"key": "B", "text": "Phản xạ, Đối xứng và Bắc cầu"},
            {"key": "C", "text": "Không phản xạ, Đối xứng và Bắc cầu"},
            {"key": "D", "text": "Phản xứng, Bắc cầu và Đầy đủ"}
        ],
        "correct": "A",
        "explanation": "Quan hệ thứ tự một phần (partial order relation) được định nghĩa bởi ba tính chất: Phản xạ ($xRx$), Phản xứng ($xRy$ và $yRx \\Rightarrow x = y$), và Bắc cầu ($xRy$ và $yRz \\Rightarrow xRz$)."
    },
    {
        "question": "Cho tập $A$ gồm 4 phần tử và tập $B$ gồm 3 phần tử. Số phần tử của tích Descartes $A \\times B$ là:",
        "options": [
            {"key": "A", "text": "$12$"},
            {"key": "B", "text": "$7$"},
            {"key": "C", "text": "$64$"},
            {"key": "D", "text": "$81$"}
        ],
        "correct": "A",
        "explanation": "Số phần tử của tích Descartes hai tập hợp hữu hạn bằng tích số phần tử của từng tập: $|A \\times B| = |A| \\cdot |B| = 4 \\times 3 = 12$."
    },
    {
        "question": "Ánh xạ $f: \\mathbb{R} \\to [0, +\\infty)$ xác định bởi $f(x) = x^2$ là:",
        "options": [
            {"key": "A", "text": "Toàn ánh nhưng không đơn ánh"},
            {"key": "B", "text": "Đơn ánh nhưng không toàn ánh"},
            {"key": "C", "text": "Song ánh"},
            {"key": "D", "text": "Không đơn ánh cũng không toàn ánh"}
        ],
        "correct": "A",
        "explanation": "- Không đơn ánh vì $f(-2) = f(2) = 4$ nhưng $-2 \\neq 2$.\n- Là toàn ánh vì với mọi $y \\in [0, +\\infty)$, luôn tồn tại $x = \\sqrt{y} \\in \\mathbb{R}$ để $f(x) = y$."
    },
    {
        "question": "Số lượng hàm số khác nhau từ tập hợp $X$ có $m$ phần tử vào tập hợp $Y$ có $n$ phần tử là:",
        "options": [
            {"key": "A", "text": "$n^m$"},
            {"key": "B", "text": "$m^n$"},
            {"key": "C", "text": "$m \\cdot n$"},
            {"key": "D", "text": "$n! / (n - m)!$"}
        ],
        "correct": "A",
        "explanation": "Mỗi phần tử trong số $m$ phần tử của tập nguồn $X$ có $n$ cách chọn ảnh trong tập đích $Y$. Theo quy tắc nhân, tổng số hàm số là $n \\times n \\times \\dots \\times n = n^m$."
    }
]
print(f"Topic 1 generated {len(questions_topic1)} questions")
