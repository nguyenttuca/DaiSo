// DOCS LÝ THUYẾT & PHƯƠNG PHÁP GIẢI NHANH 24 DẠNG BÀI TOÁN RỜI RẠC & ĐẠI SỐ TUYẾN TÍNH PTIT
(function (global) {
  const docs = {
  "1": {
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "description": "Các kiến thức nền tảng về logic toán học, đại số tập hợp, tính chất ánh xạ và đại số Boole.",
    "types": [
      {
        "id": "1.1",
        "name": "Chân trị & Các phép toán Mệnh đề",
        "summary": "Xác định bảng chân trị, giá trị logic của mệnh đề phức hợp chứa các liên từ logic.",
        "theory": "### 1. Khái niệm cơ bản\n* **Mệnh đề:** Một khẳng định có giá trị chân lý duy nhất: hoặc **Đúng (1 / T)** hoặc **Sai (0 / F)**, không thể vừa đúng vừa sai.\n* **Các phép toán logic:**\n  1. **Phủ định ($\\bar{p}$ hoặc $\\neg p$):** Đảo ngược chân trị: $\\bar{1} = 0, \\bar{0} = 1$.\n  2. **Phép hội ($\\wedge$ / và):** $p \\wedge q = 1 \\iff p = 1$ VÀ $q = 1$.\n  3. **Phép tuyển ($\\vee$ / hoặc):** $p \\vee q = 0 \\iff p = 0$ VÀ $q = 0$.\n  4. **Phép kéo theo ($p \\to q$):** Chỉ SAI khi $p = 1$ và $q = 0$ (Tiền đề đúng nhưng kết luận sai). Công thức vàng:\n     $$p \\to q \\equiv \\bar{p} \\vee q$$\n  5. **Phép tương đương ($p \\leftrightarrow q$):** Đúng khi $p, q$ cùng chân trị: $(p \\wedge q) \\vee (\\bar{p} \\wedge \\bar{q})$.\n  6. **Phép tuyển triệt tiêu ($p \\oplus q$ - XOR):** Đúng khi $p, q$ khác chân trị.",
        "formulas": "* $p \\to q \\equiv \\bar{p} \\vee q$\n* $\\overline{p \\to q} \\equiv p \\wedge \\bar{q}$\n* $p \\leftrightarrow q \\equiv (p \\to q) \\wedge (q \\to p)$\n* $p \\oplus q \\equiv (p \\wedge \\bar{q}) \\vee (\\bar{p} \\wedge q)$",
        "quickTips": "* **Mẹo 10 giây xét mệnh đề $p \\to q$:** Nếu giả thiết $p$ sai ($p = 0$), mệnh đề $p \\to q$ **luôn luôn ĐÚNG** bất kể $q$ là gì!\n* **Mẹo tìm phản ví dụ:** Để chỉ ra mệnh đề $A \\to B$ sai, chỉ cần tìm duy nhất một trường hợp làm cho vế trái $A = 1$ mà vế phải $B = 0$.\n* **Mẹo loại trừ phương án:** Kiểm tra tại các giá trị biên đặc biệt (tất cả bằng 0, hoặc tất cả bằng 1).",
        "casioTricks": "* Trên Casio fx-580VNX: Vào menu **Base-N (Mode 3)**:\n  * Phím `LOGIC` (hoặc `OPTN`): có các hàm `and`, `or`, `xor`, `not`.\n  * Gán 1 là True, 0 là False để kiểm tra nhanh chân trị của biểu thức dài phức tạp.",
        "traps": "* ⚠️ **Bẫy phủ định mệnh đề kéo theo:** Nhiều bạn nhầm $\\overline{p \\to q}$ thành $\\bar{p} \\to \\bar{q}$. Nhớ kỹ:\n  $$\\overline{p \\to q} \\equiv p \\wedge \\bar{q}$$ (Không còn dấu kéo theo $\\to$ nữa!)."
      },
      {
        "id": "1.2",
        "name": "Tương đương Logic, Đại số Boole & Đối ngẫu",
        "summary": "Quy tắc tương đương logic, luật De Morgan, công thức đối ngẫu Boole và tối giản biểu thức.",
        "theory": "### 1. Các luật logic cốt lõi\n* **Luật De Morgan:**\n  $$\\overline{p \\wedge q} \\equiv \\bar{p} \\vee \\bar{q}, \\quad \\overline{p \\vee q} \\equiv \\bar{p} \\wedge \\bar{q}$$\n* **Luật phân phối:**\n  $$p \\wedge (q \\vee r) \\equiv (p \\wedge q) \\vee (p \\wedge r)$$\n  $$p \\vee (q \\wedge r) \\equiv (p \\vee q) \\wedge (p \\vee r)$$\n* **Luật hấp thụ:** $p \\vee (p \\wedge q) \\equiv p, \\quad p \\wedge (p \\vee q) \\equiv p$.\n* **Luật phản đảo (Contrapositive):** $(p \\to q) \\equiv (\\bar{q} \\to \\bar{p})$.\n\n### 2. Công thức đối ngẫu trong Đại số Boole\n* Cho công thức $f(x_1, \\dots, x_n, \\wedge, \\vee, 0, 1)$. Công thức đối ngẫu $f^*$ thu được bằng cách:\n  * Đổi $\\wedge \\longleftrightarrow \\vee$\n  * Đổi $0 \\longleftrightarrow 1$\n  * **Giữ nguyên biến $x_i$ và dấu phủ định $x_i'$.**",
        "formulas": "* Đối ngẫu: $(f^*)^* = f$\n* Nếu $f = g$ thì $f^* = g^*$ (Nguyên lý đối ngẫu)\n* Đổi biến phủ định: $\\overline{f(x, y, z, \\wedge, \\vee)} = f^*(\\bar{x}, \\bar{y}, \\bar{z}, \\vee, \\wedge)$",
        "quickTips": "* **Bí kíp tìm đối ngẫu trong 5 giây:** Chỉ quét mắt qua biểu thức và thay:\n  * Cứ thấy $\\wedge$ thì đổi thành $\\vee$, thấy $\\vee$ thì đổi thành $\\wedge$.\n  * Cứ thấy số $0$ đổi thành $1$, số $1$ đổi thành $0$.\n  * Tuyệt đối **KHÔNG ĐƯỢC** thêm hay bớt dấu gạch đầu (phủ định) của biến!\n* **Bí kíp phản đảo:** Đề bài hỏi \"Mệnh đề nào tương đương với $p \\to q$?\", đáp án thường là phản đảo $\\bar{q} \\to \\bar{p}$ hoặc $\\bar{p} \\vee q$.",
        "casioTricks": "* Kiểm tra tương đương $f \\equiv g$: Chọn ngẫu nhiên bộ giá trị chân trị (ví dụ: $x=1, y=0, z=1$), tính nhẩm chân trị của đề bài và 4 đáp án. Phương án nào cho chân trị khác đề bài lập tức loại bỏ!",
        "traps": "* ⚠️ Đề thi rất hay gài bẫy đổi $x'$ thành $x$ khi tìm đối ngẫu $\\to$ Sai! Đối ngẫu giữ nguyên phủ định biến, chỉ đảo phép toán $\\wedge \\leftrightarrow \\vee$ và hằng số $0 \\leftrightarrow 1$."
      },
      {
        "id": "1.3",
        "name": "Tập hợp & Các phép toán Tập hợp",
        "summary": "Giao, Hợp, Hiệu, Phần bù, Tập tích Descartes và Tập lũy thừa (Power Set).",
        "theory": "### 1. Các phép toán tập hợp\n* **Giao ($A \\cap B$):** $\\{x \\mid x \\in A \\text{ và } x \\in B\\}$.\n* **Hợp ($A \\cup B$):** $\\{x \\mid x \\in A \\text{ hoặc } x \\in B\\}$.\n* **Hiệu ($A \\setminus B$):** $\\{x \\mid x \\in A \\text{ và } x \\notin B\\} = A \\cap \\bar{B}$.\n* **Hiệu đối xứng ($A \\Delta B$):** $(A \\setminus B) \\cup (B \\setminus A) = (A \\cup B) \\setminus (A \\cap B)$.\n* **Tập lũy thừa $\\mathcal{P}(X)$:** Tập hợp tất cả các tập con của $X$.\n  $$\\text{Nếu } |X| = n \\implies |\\mathcal{P}(X)| = 2^n$$\n\n### 2. Tính chất quan trọng\n* $A \\cap (B \\setminus A) = \\emptyset$.\n* $A \\subset B \\iff A \\cup B = B \\iff A \\cap B = A \\iff A \\setminus B = \\emptyset$.\n* $A \\cup C = B \\cup C$ **không suy ra** $A = B$ (Phản ví dụ: $A=\\{1\\}, B=\\{2\\}, C=\\{1,2\\}$).",
        "formulas": "* Nguyên lý bao hàm - loại trừ:\n  $$|A \\cup B| = |A| + |B| - |A \\cap B|$$\n  $$|A \\cup B \\cup C| = |A| + |B| + |C| - (|A \\cap B| + |B \\cap C| + |C \\cap A|) + |A \\cap B \\cap C|$$\n* Số tập con có $k$ phần tử: $C_n^k$.",
        "quickTips": "* **Mẹo biểu đồ Venn:** Khi gặp biểu thức tập hợp phức tạp chứa 3 tập $A, B, C$, hãy vẽ nhanh biểu đồ Venn 3 hình tròn, đánh số 8 miền từ 1 đến 8 để kiểm tra trong 15 giây.\n* **Mẹo phản ví dụ tập hợp:** Chọn $X = \\{1, 2, 3\\}$, gán các tập con nhỏ $A=\\{1\\}, B=\\{2\\}, C=\\{1, 2\\}$ để thử các khẳng định lý thuyết.",
        "casioTricks": "* Dùng phím tổ hợp `nCr` (Shift + $\\div$) để tính nhanh số tập con kích thước $k$: ví dụ tập có 8 phần tử, số tập con 3 phần tử là $8C3 = 56$.",
        "traps": "* ⚠️ **Phần tử vs Tập con:**\n  * $\\emptyset \\subset A$ luôn đúng với mọi tập $A$.\n  * Nhưng $\\emptyset \\in A$ chỉ đúng khi bản thân tập rỗng $\\emptyset$ là một phần tử nằm bên trong $A$ (ví dụ: $A = \\{\\emptyset, 1\\}$).\n  * $\\{x\\} \\in \\{\\{x\\}\\}$ là ĐÚNG, nhưng $\\{x\\} \\subset \\{\\{x\\}\\}$ là SAI!"
      },
      {
        "id": "1.4",
        "name": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
        "summary": "Xác định tính đơn ánh, toàn ánh, song ánh, tìm ánh xạ hợp và ánh xạ ngược.",
        "theory": "### 1. Phân loại ánh xạ $f: X \\to Y$\n* **Đơn ánh (Injective):** Mỗi phần tử của $Y$ có nhiều nhất một phần tử tạo ảnh trong $X$.\n  $$f(x_1) = f(x_2) \\implies x_1 = x_2 \\quad (\\text{hoặc } x_1 \\neq x_2 \\implies f(x_1) \\neq f(x_2))$$\n* **Toàn ánh (Surjective):** Mọi phần tử của $Y$ đều có ít nhất một tạo ảnh trong $X$.\n  $$\\forall y \\in Y, \\, \\exists x \\in X: f(x) = y \\quad (\\text{Tập giá trị } f(X) = Y)$$\n* **Song ánh (Bijective):** Vừa là đơn ánh, vừa là toàn ánh $\\implies$ Tồn tại ánh xạ ngược $f^{-1}: Y \\to X$.\n\n### 2. Ánh xạ hợp (Composition)\n* Cho $f: X \\to Y$ và $g: Y \\to Z$:\n  $$(g \\circ f)(x) = g(f(x))$$\n* Chú ý thứ tự tác động: $f$ tác động trước, $g$ tác động sau!\n* Tính chất: $(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}$.",
        "formulas": "* Đơn ánh: Phương trình $f(x) = y$ có tối đa 1 nghiệm với mọi $y \\in Y$.\n* Toàn ánh: Phương trình $f(x) = y$ luôn có nghiệm với mọi $y \\in Y$.\n* Song ánh: Phương trình $f(x) = y$ có duy nhất 1 nghiệm với mọi $y \\in Y$.\n* Với $f: \\mathbb{R} \\to \\mathbb{R}$ khả vi: $f'(x) > 0$ (hoặc $f'(x) < 0$) $\\forall x \\implies f$ đơn ánh.",
        "quickTips": "* **Mẹo đồ thị xét đơn ánh / toàn ánh trên $\\mathbb{R}$:**\n  * Đường nằm ngang bất kỳ cắt đồ thị **tại tối đa 1 điểm** $\\implies$ Đơn ánh.\n  * Đường nằm ngang bất kỳ cắt đồ thị **tại ít nhất 1 điểm** $\\implies$ Toàn ánh.\n* Hàm bậc ba $f(x) = ax^3 + bx^2 + cx + d$ ($a \\neq 0$): Luôn có tập giá trị là $\\mathbb{R} \\implies$ **Luôn là toàn ánh trên $\\mathbb{R}$!**\n* Hàm bậc hai $f(x) = ax^2 + bx + c$: Có đỉnh $\\implies$ Tập giá trị bị chặn trên hoặc dưới $\\implies$ **Không bao giờ là toàn ánh trên $\\mathbb{R}$!**",
        "casioTricks": "* Dùng chức năng `TABLE` (Menu 8) quét bảng giá trị: Nếu thấy 2 giá trị $x$ khác nhau cho cùng một giá trị $f(x) \\implies$ KHÔNG là đơn ánh!",
        "traps": "* ⚠️ **Chú ý tập xác định và tập đích:**\n  * $f(x) = x^2$ từ $\\mathbb{R} \\to \\mathbb{R}$ không đơn ánh, không toàn ánh.\n  * Nhưng $f(x) = x^2$ từ $[0, +\\infty) \\to [0, +\\infty)$ là **SONG ÁNH**!"
      }
    ]
  },
  "2": {
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "description": "Không gian véc tơ, không gian con, độc lập/phụ thuộc tuyến tính, cơ sở, số chiều và ma trận chuyển cơ sở.",
    "types": [
      {
        "id": "2.1",
        "name": "Không gian con & Tổ hợp tuyến tính",
        "summary": "Kiểm tra tập con có là không gian véc tơ con, biểu diễn tuyến tính và không gian sinh.",
        "theory": "### 1. Định nghĩa Không gian con (Subspace)\nTập con $W \\subset V$ ($V$ là KGV trên trường $K$) là không gian con khi và chỉ khi:\n1. $W \\neq \\emptyset$ (thường kiểm tra $\\vec{0} \\in W$).\n2. Kín với phép cộng: $\\forall u, v \\in W \\implies u + v \\in W$.\n3. Kín với phép nhân vô hướng: $\\forall u \\in W, \\alpha \\in K \\implies \\alpha u \\in W$.\n* **Tiêu chuẩn gộp:** $\\forall u, v \\in W, \\alpha, \\beta \\in K \\implies \\alpha u + \\beta v \\in W$.\n\n### 2. Tổ hợp tuyến tính & Hệ sinh\n* Véc tơ $x$ là tổ hợp tuyến tính của hệ $\\{v_1, \\dots, v_k\\}$ nếu tồn tại $c_1, \\dots, c_k$ sao cho:\n  $$x = c_1 v_1 + c_2 v_2 + \\dots + c_k v_k$$\n* Không gian sinh: $\\text{span}(S) = \\{\\sum c_i v_i \\mid c_i \\in K\\}$ là không gian con bé nhất chứa $S$.",
        "formulas": "* Kiểm tra $\\vec{0} \\in W$: Nếu $\\vec{0} \\notin W \\implies W$ không là không gian con!\n* Giao hai không gian con $W_1 \\cap W_2$ luôn là không gian con.\n* Hợp $W_1 \\cup W_2$ nói chung **không** là không gian con (chỉ là KGC khi $W_1 \\subset W_2$ hoặc $W_2 \\subset W_1$).\n* Công thức số chiều không gian tổng:\n  $$\\dim(W_1 + W_2) = \\dim W_1 + \\dim W_2 - \\dim(W_1 \\cap W_2)$$",
        "quickTips": "* **Mẹo loại trừ siêu nhanh trong 3 giây:**\n  * Tập nào chứa hằng số tự do khác 0 (VD: $x_1 + 2x_2 = 3$) $\\implies$ Thay $(0,0,0)$ vào không thỏa mãn $\\implies$ **LOẠI NGAY!**\n  * Tập chứa bậc hai, căn, tích các biến (VD: $x_1 x_2 = 0$, $x_1^2 + x_2^2 \\le 1$, $|x_1| = x_2$) $\\implies$ **LOẠI NGAY!**\n  * Tập được định nghĩa bởi các phương trình tuyến tính **thuần nhất** bậc 1 (VD: $2x_1 - 3x_2 + x_3 = 0$) $\\implies$ **CHẮC CHẮN LÀ KHÔNG GIAN CON!**",
        "casioTricks": "* Bấm máy kiểm tra $x$ có là tổ hợp tuyến tính của $\\{v_1, v_2, v_3\\}$:\n  * Lập hệ phương trình $c_1 v_1 + c_2 v_2 + c_3 v_3 = x$.\n  * Bấm giải hệ phương trình trên Casio (Menu 9 -> 1). Nếu hệ có nghiệm $\\implies$ là THTT; nếu Vô nghiệm $\\implies$ Không là THTT.",
        "traps": "* ⚠️ $W = \\{(x, y) \\in \\mathbb{R}^2 \\mid xy \\ge 0\\}$ chứa $\\vec{0}$, nhưng không kín với phép cộng: $(1, 0) \\in W$ và $(0, -1) \\in W$ nhưng tổng $(1, -1) \\notin W$ vì $1(-1) = -1 < 0$."
      },
      {
        "id": "2.2",
        "name": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
        "summary": "Xét tính độc lập/phụ thuộc tuyến tính của hệ véc tơ, tìm tham số $m$ để hệ ĐLTT hoặc PTTT.",
        "theory": "### 1. Định nghĩa\nHệ véc tơ $\\{v_1, v_2, \\dots, v_k\\}$ được gọi là:\n* **Độc lập tuyến tính (ĐLTT):** Nếu đẳng thức $c_1 v_1 + c_2 v_2 + \\dots + c_k v_k = \\vec{0}$ chỉ xảy ra khi:\n  $$c_1 = c_2 = \\dots = c_k = 0$$\n* **Phụ thuộc tuyến tính (PTTT):** Nếu tồn tại ít nhất một hệ số $c_i \\neq 0$ sao cho $c_1 v_1 + \\dots + c_k v_k = \\vec{0}$ (tức là có ít nhất 1 véc tơ biểu diễn tuyến tính qua các véc tơ còn lại).\n\n### 2. Tiêu chuẩn ma trận\n* Xếp các véc tơ $v_1, \\dots, v_k$ thành các hàng (hoặc cột) của ma trận $A$:\n  * Hệ **ĐLTT** $\\iff r(A) = k$ (hạng bằng số véc tơ).\n  * Hệ **PTTT** $\\iff r(A) < k$.\n* Trường hợp đặc biệt $n$ véc tơ trong không gian $\\mathbb{R}^n$ ($A$ là ma trận vuông):\n  * Hệ **ĐLTT** $\\iff \\det(A) \\neq 0$.\n  * Hệ **PTTT** $\\iff \\det(A) = 0$.",
        "formulas": "* Trong $\\mathbb{R}^n$: Bất kỳ hệ nào có $> n$ véc tơ đều **chắc chắn PTTT**!\n* Hệ chứa véc tơ không $\\vec{0}$ luôn luôn **PTTT**.\n* Hai véc tơ PTTT $\\iff$ chúng tỷ lệ với nhau: $v_1 = k v_2$.",
        "quickTips": "* **Bí kíp 15 giây với hệ $n$ véc tơ trong $\\mathbb{R}^n$:**\n  * Lập ma trận vuông cấp $n$, bấm định thức $\\det(A)$.\n  * $\\det(A) \\neq 0 \\implies$ Độc lập tuyến tính.\n  * $\\det(A) = 0 \\implies$ Phụ thuộc tuyến tính.\n* **Mẹo tìm $m$ để hệ ĐLTT:** Giải phương trình $\\det(A) \\neq 0 \\implies$ tìm điều kiện của $m$.",
        "casioTricks": "* Nhập ma trận $A$ vào Casio (Menu 4 -> Define Matrix A).\n* Bấm `OPTN` -> `Determinant` -> `MatA` -> `=`\n  * Nếu kết quả $\\neq 0 \\implies$ Độc lập tuyến tính.\n  * Nếu kết quả $= 0 \\implies$ Phụ thuộc tuyến tính.",
        "traps": "* ⚠️ Nhầm lẫn giữa số véc tơ $k$ và số chiều $n$. Nếu $k < n$ (ví dụ 2 véc tơ trong $\\mathbb{R}^3$), ma trận không vuông thì KHÔNG được bấm định thức, mà phải xét tỷ lệ hoặc đưa về bậc thang tìm hạng!"
      },
      {
        "id": "2.3",
        "name": "Cơ sở & Số chiều của Không gian véc tơ",
        "summary": "Định nghĩa cơ sở, tìm cơ sở và số chiều của không gian con, mở rộng thành cơ sở.",
        "theory": "### 1. Cơ sở (Basis) & Số chiều (Dimension)\nHệ $B = \\{e_1, e_2, \\dots, e_n\\}$ là một **cơ sở** của không gian $V$ nếu thỏa mãn 2 điều kiện:\n1. $B$ độc lập tuyến tính.\n2. $B$ là hệ sinh của $V$ ($\\text{span}(B) = V$).\n* Khi đó số phần tử $n$ của cơ sở được gọi là **số chiều** của $V$, ký hiệu $\\dim(V) = n$.\n* Nếu $\\dim(V) = n$, thì bất kỳ hệ nào gồm đúng $n$ véc tơ ĐLTT đều **tự động là một cơ sở**!\n\n### 2. Các cơ sở chính tắc thường gặp\n* Trong $\\mathbb{R}^n$: $E = \\{e_1=(1,0,\\dots,0), e_2=(0,1,\\dots,0), \\dots, e_n=(0,0,\\dots,1)\\} \\implies \\dim(\\mathbb{R}^n) = n$.\n* Trong không gian đa thức $P_n[x]$ (bậc $\\le n$): $B = \\{1, x, x^2, \\dots, x^n\\} \\implies \\dim(P_n[x]) = n + 1$.\n* Trong không gian ma trận $M_{m \\times n}$: $\\dim(M_{m \\times n}) = m \\cdot n$.",
        "formulas": "* Tìm cơ sở của $W = \\text{span}(v_1, \\dots, v_k)$:\n  * Xếp các véc tơ thành các hàng của ma trận $A$.\n  * Dùng phép biến đổi dòng sơ cấp đưa $A$ về ma trận bậc thang.\n  * Các hàng khác không của ma trận bậc thang chính là một cơ sở của $W$, số hàng khác 0 chính là $\\dim(W)$.\n* Định lý số chiều KGC nghiệm của hệ thuần nhất $A_{m \\times n} X = 0$:\n  $$\\dim(W) = n - r(A)$$",
        "quickTips": "* **Mẹo nhẩm số chiều của KGC nghiệm:** Không gian con trong $\\mathbb{R}^n$ cho bởi $k$ phương trình độc lập thì có số chiều:\n  $$\\dim = n - k$$\n  * Ví dụ trong $\\mathbb{R}^4$: KGC cho bởi $\\begin{cases} x_1 + x_2 - x_3 = 0 \\\\ x_2 + 2x_4 = 0 \\end{cases}$ có $\\dim = 4 - 2 = 2$.",
        "casioTricks": "* Đưa ma trận về dạng bậc thang bằng Casio: Sử dụng tính năng giải hệ hoặc tính hạng để biết ngay số chiều $\\dim = r(A)$.",
        "traps": "* ⚠️ **Nhớ kỹ số chiều của đa thức:** $P_n[x]$ có số chiều là $n+1$ chứ không phải $n$ (vì có thêm hằng số tự do $1 = x^0$). Ví dụ $\\dim(P_2[x]) = 3$ (gồm $\\{1, x, x^2\\}$)."
      },
      {
        "id": "2.4",
        "name": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
        "summary": "Tìm tọa độ véc tơ đối với cơ sở, ma trận chuyển cơ sở và công thức đổi tọa độ.",
        "theory": "### 1. Tọa độ của véc tơ đối với cơ sở\nCho cơ sở $B = \\{e_1, e_2, \\dots, e_n\\}$ của $V$. Với mọi $x \\in V$, biểu diễn duy nhất:\n$$x = x_1 e_1 + x_2 e_2 + \\dots + x_n e_n$$\nCột $[x]_B = \\begin{bmatrix} x_1 \\\\ x_2 \\\\ \\vdots \\\\ x_n \\end{bmatrix}$ được gọi là **tọa độ của $x$ đối với cơ sở $B$**.\n\n### 2. Ma trận chuyển cơ sở (Transition Matrix)\nCho hai cơ sở $B = \\{u_1, \\dots, u_n\\}$ (cũ) và $B' = \\{v_1, \\dots, v_n\\}$ (mới).\n* Ma trận chuyển cơ sở từ $B$ sang $B'$, ký hiệu $P_{B \\to B'}$, là ma trận mà **cột thứ $j$ là tọa độ của $v_j$ đối với cơ sở $B$**:\n  $$P_{B \\to B'} = \\begin{bmatrix} [v_1]_B & [v_2]_B & \\dots & [v_n]_B \\end{bmatrix}$$\n* **Công thức đổi tọa độ:**\n  $$[x]_B = P_{B \\to B'} \\cdot [x]_{B'} \\iff [x]_{B'} = (P_{B \\to B'})^{-1} \\cdot [x]_B$$",
        "formulas": "* Chuyển từ cơ sở chính tắc $E$ sang $B'$: Các cột của $P_{E \\to B'}$ chính là các véc tơ của $B'$:\n  $$P_{E \\to B'} = \\begin{bmatrix} v_1 & v_2 & \\dots & v_n \\end{bmatrix}$$\n* Chuyển từ $B$ sang $B'$ tổng quát:\n  $$P_{B \\to B'} = (P_{E \\to B})^{-1} \\cdot P_{E \\to B'}$$\n* Ma trận chuyển ngược: $P_{B' \\to B} = (P_{B \\to B'})^{-1}$.",
        "quickTips": "* **Cách nhớ thứ tự công thức:**\n  * Cột của ma trận chuyển từ CŨ sang MỚI là biểu diễn véc tơ **MỚI** theo cơ sở **CŨ**.\n  * Tọa độ CŨ = $P$ nhân Tọa độ MỚI: $[x]_{\\text{cũ}} = P \\cdot [x]_{\\text{mới}}$.\n* Nếu $B = E$ (chính tắc), tọa độ $[x]_E$ chính là các thành phần của véc tơ $x$.",
        "casioTricks": "* Tìm tọa độ $[x]_B$: Bấm giải hệ phương trình với các cột của ma trận hệ số là các véc tơ của $B$, cột vế phải là véc tơ $x$. Nghiệm $(x_1, x_2, \\dots, x_n)$ chính là tọa độ cần tìm!\n* Tìm $P_{B \\to B'}$: Bấm $A^{-1} \\cdot B$ trong chức năng Matrix của Casio.",
        "traps": "* ⚠️ Rất hay nhầm viết các véc tơ cơ sở thành HÀNG thay vì CỘT trong ma trận chuyển cơ sở. **Nhớ kỹ: Tọa độ luôn đặt ở CỘT!**"
      }
    ]
  },
  "3": {
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "description": "Các phép toán ma trận, định thức, ma trận nghịch đảo, hạng của ma trận và các ứng dụng.",
    "types": [
      {
        "id": "3.1",
        "name": "Các phép toán Ma trận & Lũy thừa ma trận",
        "summary": "Nhân, cộng ma trận, chuyển vị, lũy thừa ma trận cấp cao và đa thức ma trận.",
        "theory": "### 1. Phép nhân ma trận\n* Nhân được khi số cột của $A$ bằng số hàng của $B$: $A_{m \\times p} \\cdot B_{p \\times n} = C_{m \\times n}$.\n* Phần tử $c_{ij} = \\sum_{k=1}^p a_{ik} b_{kj}$ (Hàng $i$ của $A$ nhân Cột $j$ của $B$).\n* **Chú ý:** Phép nhân ma trận **KHÔNG CÓ TÍNH GIAO HOÁN**: $AB \\neq BA$ nói chung.\n* Chuyển vị của tích: $(AB)^T = B^T A^T$ (đổi thứ tự!).\n\n### 2. Lũy thừa ma trận $A^k$\n* Chỉ áp dụng cho ma trận vuông.\n* Các phương pháp tính $A^k$:\n  1. **Quy nạp:** Tính $A^2, A^3$, dự đoán quy luật $A^k$ rồi chứng minh quy nạp.\n  2. **Tách thành $A = \\lambda I + B$:** với $B^2 = 0$ hoặc lũy linh, dùng nhị thức Newton:\n     $$A^k = (\\lambda I + B)^k = \\lambda^k I + k \\lambda^{k-1} B$$\n  3. **Chéo hóa:** $A = P D P^{-1} \\implies A^k = P D^k P^{-1}$.",
        "formulas": "* Kích thước tích ma trận: $(m \\times p) \\times (p \\times n) = (m \\times n)$.\n* $(A + B)^T = A^T + B^T$\n* $(AB)^T = B^T A^T$\n* $(A^k)^T = (A^T)^k$\n* Vết của ma trận: $\\text{tr}(A) = \\sum a_{ii}$, có $\\text{tr}(AB) = \\text{tr}(BA)$.",
        "quickTips": "* **Tính phần tử đơn lẻ $(AB)_{ij}$ siêu nhanh:** Để tìm phần tử hàng $i$ cột $j$ của $AB$, **chỉ cần lấy đúng Hàng $i$ của $A$ nhân với Cột $j$ của $B$**, không cần tính toàn bộ ma trận $AB$!\n* Nếu $A = \\begin{bmatrix} 1 & a \\\\ 0 & 1 \\end{bmatrix} \\implies A^k = \\begin{bmatrix} 1 & ka \\\\ 0 & 1 \\end{bmatrix}$.\n* Nếu $A = \\begin{bmatrix} \\lambda & 1 \\\\ 0 & \\lambda \\end{bmatrix} \\implies A^k = \\begin{bmatrix} \\lambda^k & k\\lambda^{k-1} \\\\ 0 & \\lambda^k \\end{bmatrix}$.",
        "casioTricks": "* Nhập ma trận $A, B$ vào Casio fx-580:\n  * `MatA + MatB`, `MatA * MatB`\n  * Tính $A^3$: Bấm `MatA * MatA * MatA` hoặc `MatA^2 * MatA`.",
        "traps": "* ⚠️ Nhầm tưởng $(A+B)^2 = A^2 + 2AB + B^2$. Vì $AB \\neq BA$ nên:\n  $$(A+B)^2 = A^2 + AB + BA + B^2$$"
      },
      {
        "id": "3.2",
        "name": "Tính Định thức (Determinant)",
        "summary": "Định thức cấp 2, cấp 3, cấp n, quy tắc Sarrus, biến đổi sơ cấp và định lý định thức.",
        "theory": "### 1. Định nghĩa & Công thức cấp 2, 3\n* Cấp 2: $\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc$.\n* Cấp 3: Quy tắc Sarrus (tổng 3 đường chéo chính trừ tổng 3 đường chéo phụ).\n* Ma trận tam giác (trên hoặc dưới) và ma trận đường chéo:\n  $$\\det(A) = a_{11} \\cdot a_{22} \\cdots a_{nn} \\quad (\\text{Tích các phần tử trên đường chéo chính})$$\n\n### 2. Các tính chất vàng của Định thức\n1. $\\det(A^T) = \\det(A)$.\n2. $\\det(AB) = \\det(A) \\cdot \\det(B)$.\n3. $\\det(kA) = k^n \\det(A)$ ($n$ là cấp của ma trận $A$).\n4. $\\det(A^{-1}) = \\dfrac{1}{\\det A}$.\n5. Đổi chỗ 2 hàng (hoặc 2 cột) $\\implies \\det$ đổi dấu.\n6. Nhân một hàng với số $c \\implies \\det$ nhân với $c$.\n7. Cộng bội của một hàng vào hàng khác $\\implies \\det$ **KHÔNG ĐỔI**.\n8. Nếu ma trận có 2 hàng (hoặc cột) tỷ lệ $\\implies \\det = 0$.",
        "formulas": "* Khai triển Laplace theo dòng $i$:\n  $$\\det(A) = \\sum_{j=1}^n a_{ij} C_{ij} = \\sum_{j=1}^n a_{ij} (-1)^{i+j} M_{ij}$$\n* Định thức Vandermonde:\n  $$V(x_1, \\dots, x_n) = \\prod_{1 \\le i < j \\le n} (x_j - x_i)$$\n* Khối tam giác: $\\begin{vmatrix} A & B \\\\ 0 & C \\end{vmatrix} = \\det(A) \\cdot \\det(C)$.",
        "quickTips": "* **Mẹo $\\det(kA)$:** Cực kỳ hay gặp trong đề thi: Nếu $A$ vuông cấp 3 và $\\det(A) = 2$, thì:\n  $$\\det(3A) = 3^3 \\cdot \\det(A) = 27 \\cdot 2 = 54$$\n  *(Nhiều bạn quên mũ $n$ và chỉ nhân $3 \\cdot 2 = 6$ là dính bẫy!).*\n* Dùng biến đổi sơ cấp tạo càng nhiều số 0 trên 1 dòng/cột rồi khai triển Laplace.",
        "casioTricks": "* Nhập ma trận vuông cấp 2, 3, 4 vào Casio (Menu 4 -> MatA).\n* Bấm `OPTN` -> Cuộn xuống chọn `Determinant` -> `OPTN` -> `MatA` -> `=` ra ngay kết quả chính xác 100%.",
        "traps": "* ⚠️ $\\det(A + B) \\neq \\det(A) + \\det(B)$ nói chung! Tuyệt đối không tách định thức của tổng."
      },
      {
        "id": "3.3",
        "name": "Ma trận nghịch đảo & Phần phụ đại số",
        "summary": "Điều kiện khả nghịch, tìm $A^{-1}$ bằng ma trận phụ hợp hoặc biến đổi Gauss-Jordan $[A|I]$.",
        "theory": "### 1. Điều kiện tồn tại ma trận nghịch đảo\nMa trận vuông $A$ cấp $n$ có ma trận nghịch đảo $A^{-1}$ khi và chỉ khi:\n$$\\det(A) \\neq 0 \\quad (\\text{Ma trận không suy biến / Khả nghịch})$$\nKhi đó $A A^{-1} = A^{-1} A = I_n$.\n\n### 2. Phương pháp ma trận phụ hợp (Adjugate Matrix)\n$$A^{-1} = \\frac{1}{\\det A} P_A = \\frac{1}{\\det A} (C_{ij})^T$$\nTrong đó:\n* $C_{ij} = (-1)^{i+j} M_{ij}$ là **phần phụ đại số** của phần tử $a_{ij}$.\n* $M_{ij}$ là định thức cấp $n-1$ bỏ đi hàng $i$, cột $j$.\n* **CHÚ Ý:** $(C_{ij})^T$ là ma trận chuyển vị của ma trận các phần phụ đại số (đổi hàng thành cột!).\n* Phần tử ở hàng $i$, cột $j$ của $A^{-1}$ là:\n  $$(A^{-1})_{ij} = \\frac{C_{ji}}{\\det A} = \\frac{(-1)^{i+j} M_{ji}}{\\det A}$$\n\n### 3. Công thức nghịch đảo ma trận cấp 2\n$$\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}^{-1} = \\frac{1}{ad - bc} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$$\n*(Đổi chỗ 2 phần tử đường chéo chính, đổi dấu 2 phần tử đường chéo phụ).*",
        "formulas": "* $(AB)^{-1} = B^{-1} A^{-1}$\n* $(A^{-1})^{-1} = A$\n* $(A^T)^{-1} = (A^{-1})^T$\n* $(kA)^{-1} = \\dfrac{1}{k} A^{-1}$\n* $\\det(A^{-1}) = \\dfrac{1}{\\det A}$",
        "quickTips": "* **Mẹo tìm 1 phần tử của ma trận nghịch đảo:** Nếu đề bài chỉ hỏi \"Phần tử ở hàng $r$, cột $c$ của $A^{-1}$ là bao nhiêu?\", công thức là:\n  $$(A^{-1})_{rc} = \\frac{(-1)^{r+c} M_{cr}}{\\det A}$$\n  *(Lưu ý chỉ số đổi ngược: phần tử vị trí $(r, c)$ ứng với phần phụ đại số vị trí $(c, r)$!).*\n* Giải phương trình ma trận:\n  * $AX = B \\implies X = A^{-1} B$\n  * $XA = B \\implies X = B A^{-1}$",
        "casioTricks": "* Nhập ma trận $A$ vào Casio.\n* Gọi `MatA` ra màn hình rồi bấm phím $x^{-1}$ (dưới phím MODE) -> `=` ra trực tiếp ma trận nghịch đảo.",
        "traps": "* ⚠️ Quên chuyển vị ma trận các phần phụ đại số: Nhớ rằng $(A^{-1})_{12} = \\dfrac{C_{21}}{\\det A}$ chứ không phải $\\dfrac{C_{12}}{\\det A}$!"
      },
      {
        "id": "3.4",
        "name": "Hạng của ma trận (Rank)",
        "summary": "Tìm hạng của ma trận bằng biến đổi dòng sơ cấp, biện luận hạng theo tham số m.",
        "theory": "### 1. Định nghĩa Hạng của ma trận\n* Hạng của ma trận $A$, ký hiệu $r(A)$ hoặc $\\text{rank}(A)$, là số dòng khác không tối đa sau khi đưa $A$ về dạng ma trận bậc thang bằng các phép biến đổi dòng sơ cấp.\n* Tương đương: $r(A)$ là cấp cao nhất của các định thức con khác 0 của $A$.\n\n### 2. Các phép biến đổi dòng sơ cấp (Elementary Row Operations)\n1. Đổi chỗ hai dòng: $d_i \\leftrightarrow d_j$.\n2. Nhân một dòng với số $k \\neq 0$: $k \\cdot d_i \\to d_i$.\n3. Cộng bội $k$ của dòng khác vào một dòng: $d_i + k \\cdot d_j \\to d_i$.\n* **Định lý:** Các phép biến đổi dòng sơ cấp **không làm thay đổi hạng** của ma trận.",
        "formulas": "* $0 \\le r(A_{m \\times n}) \\le \\min(m, n)$.\n* $r(A) = 0 \\iff A = O$ (ma trận không).\n* $r(A^T) = r(A)$.\n* Với ma trận vuông cấp $n$: $r(A) = n \\iff \\det(A) \\neq 0$.\n* Bất đẳng thức Sylvester:\n  $$r(A) + r(B) - n \\le r(AB) \\le \\min(r(A), r(B))$$",
        "quickTips": "* **Quy trình khử bậc thang chuẩn:**\n  * Dùng $a_{11}$ khử tất cả phần tử bên dưới cột 1 về 0.\n  * Dùng $a_{22}$ mới khử các phần tử bên dưới cột 2 về 0.\n  * Đếm số hàng khác 0 cuối cùng $\\implies$ đó chính là hạng $r(A)$.\n* **Biện luận theo $m$:** Đưa phần tử chứa $m$ xuống góc dưới cùng bên phải của ma trận bậc thang để xét $m = \\dots$ thì dòng đó triệt tiêu hay khác 0.",
        "casioTricks": "* Trên Casio fx-580VNX: Vào chức năng giải hệ phương trình `MENU 9 -> 1`, nhập ma trận vuông hoặc dùng chức năng `Ref` (nếu có phần mềm phụ trợ). Với ma trận vuông, tính $\\det(A)$, nếu $\\det \\neq 0 \\implies r(A) = n$.",
        "traps": "* ⚠️ Dùng phép biến đổi cột khi đang giải hệ phương trình hoặc tìm cơ sở không gian dòng $\\implies$ SAI hoàn toàn! Hãy giữ thói quen **chỉ dùng biến đổi dòng**."
      }
    ]
  },
  "4": {
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "description": "Định lý Kronecker-Capelli, phương pháp giải hệ Cramer, khử Gauss và hệ phương trình thuần nhất.",
    "types": [
      {
        "id": "4.1",
        "name": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
        "summary": "So sánh hạng ma trận hệ số r(A) và ma trận bổ sung r(A|B), biện luận số nghiệm theo tham số m.",
        "theory": "### 1. Dạng tổng quát của hệ PTTT\nCho hệ $m$ phương trình, $n$ ẩn số: $AX = B$.\n* Ma trận hệ số: $A \\in M_{m \\times n}$.\n* Ma trận bổ sung (mở rộng): $\\bar{A} = [A \\mid B] \\in M_{m \\times (n+1)}$.\n\n### 2. Định lý Kronecker-Capelli\n1. **Hệ vô nghiệm $\\iff r(A) < r(\\bar{A})$.**\n   (Khi đưa về bậc thang xuất hiện dòng có dạng $[0 \\, 0 \\, \\dots \\, 0 \\mid c]$ với $c \\neq 0$).\n2. **Hệ có nghiệm $\\iff r(A) = r(\\bar{A}) = r$.**\n   * Nếu $r = n$ (bằng số ẩn): Hệ có **nghiệm duy nhất**.\n   * Nếu $r < n$ (nhỏ hơn số ẩn): Hệ có **vô số nghiệm**, phụ thuộc vào $n - r$ ẩn tự do.",
        "formulas": "* Hệ vuông ($n$ phương trình, $n$ ẩn):\n  * $\\det(A) \\neq 0 \\iff$ Hệ có nghiệm duy nhất.\n  * $\\det(A) = 0 \\iff$ Hệ vô nghiệm HOẶC có vô số nghiệm (cần xét $r(A)$ và $r(\\bar{A})$).",
        "quickTips": "* **Mẹo tìm điều kiện $m$ để hệ có nghiệm duy nhất:**\n  * Nếu hệ là hệ vuông ($n \\times n$): Chỉ cần giải phương trình $\\det(A) \\neq 0$!\n* **Mẹo nhận biết hệ vô nghiệm trong 5 giây:** Biến đổi thấy vế trái triệt tiêu $= 0$ mà vế phải là một hằng số khác $0$ (dạng $0x_1 + \\dots + 0x_n = k \\neq 0$) $\\implies$ Vô nghiệm ngay!",
        "casioTricks": "* Nhập hệ vào Casio (Menu 9 -> 1):\n  * Máy báo ra nghiệm cụ thể $(x, y, z) \\implies$ Nghiệm duy nhất.\n  * Máy báo `No Solution` $\\implies$ Vô nghiệm.\n  * Máy báo `Infinite Solutions` $\\implies$ Vô số nghiệm.",
        "traps": "* ⚠️ Rất nhiều bạn nghĩ $\\det(A) = 0$ là hệ vô nghiệm. **Sai!** $\\det(A) = 0$ hệ có thể có vô số nghiệm hoặc vô nghiệm."
      },
      {
        "id": "4.2",
        "name": "Phương pháp Cramer & Ma trận nghịch đảo",
        "summary": "Giải hệ phương trình Cramer vuông có det(A) khác 0 bằng định thức con Di và công thức ma trận X = A^(-1)B.",
        "theory": "### 1. Hệ Cramer\nHệ phương trình tuyến tính $AX = B$ được gọi là hệ Cramer nếu:\n1. Số phương trình bằng số ẩn (ma trận $A$ vuông cấp $n$).\n2. Định thức của ma trận hệ số khác 0: $D = \\det(A) \\neq 0$.\n\n### 2. Công thức Cramer\nNghiệm duy nhất $(x_1, x_2, \\dots, x_n)$ được tính bởi:\n$$x_j = \\frac{D_j}{D} \\quad (j = 1, 2, \\dots, n)$$\ntrong đó $D_j$ là định thức của ma trận thu được từ $A$ bằng cách **thay cột thứ $j$ bằng cột vế phải $B$**.\n\n### 3. Phương pháp ma trận\n$$X = A^{-1} \\cdot B$$",
        "formulas": "* Hệ 2 ẩn: $x = \\dfrac{D_x}{D}, \\, y = \\dfrac{D_y}{D}$.\n* Hệ 3 ẩn: $x = \\dfrac{D_1}{D}, \\, y = \\dfrac{D_2}{D}, \\, z = \\dfrac{D_3}{D}$.\n* Nếu $D = 0$ và có ít nhất một $D_j \\neq 0 \\implies$ Hệ vô nghiệm.",
        "quickTips": "* **Tìm 1 ẩn duy nhất theo Cramer:** Nếu đề bài chỉ hỏi giá trị của ẩn $x_2$ hoặc $z$, bạn chỉ cần tính đúng 2 định thức: $D$ và $D_2$, rồi lấy $x_2 = \\dfrac{D_2}{D}$, không cần giải cả hệ!\n* Nếu đề bài hỏi $x + y + z$, có thể cộng các dòng của phương trình lại để nhẩm nhanh mà không cần tính từng ẩn.",
        "casioTricks": "* Dùng Menu 9 -> 1 để giải hệ 2, 3, 4 ẩn chỉ trong 5 giây.\n* Dùng tính năng gán biến `STO A`, `STO B` để lưu các định thức $D, D_1$ rồi tính tỉ số.",
        "traps": "* ⚠️ Quy tắc Cramer CHỈ ÁP DỤNG ĐƯỢC khi ma trận $A$ là ma trận VUÔNG và $\\det(A) \\neq 0$. Nếu số phương trình $\\neq$ số ẩn thì không được dùng Cramer!"
      },
      {
        "id": "4.3",
        "name": "Khử Gauss & Nghiệm tổng quát",
        "summary": "Thuật toán khử Gauss / Gauss-Jordan đưa ma trận mở rộng về bậc thang, tìm nghiệm tổng quát.",
        "theory": "### 1. Thuật toán khử Gauss\n1. Lập ma trận mở rộng $\\bar{A} = [A \\mid B]$.\n2. Sử dụng các phép biến đổi dòng sơ cấp đưa $\\bar{A}$ về ma trận bậc thang (hoặc bậc thang rút gọn Gauss-Jordan).\n3. Biện luận nghiệm:\n   * Nếu có dòng $[0 \\, 0 \\dots 0 \\mid c]$ với $c \\neq 0 \\implies$ Vô nghiệm.\n   * Nếu $r(A) = r(\\bar{A}) = r < n$:\n     * Chọn $r$ ẩn cơ sở (ứng với các cột có phần tử trụ - pivot).\n     * Đặt $n - r$ ẩn còn lại làm **ẩn tự do** (tham số $t_1, t_2, \\dots$).\n     * Giải ngược từ dưới lên để biểu diễn các ẩn cơ sở theo các ẩn tự do.\n\n### 2. Nghiệm tổng quát\nCó dạng: $X = X_0 + t_1 X_1 + t_2 X_2 + \\dots$\nvới $X_0$ là một nghiệm riêng của hệ không thuần nhất, và $X_1, X_2, \\dots$ là nghiệm của hệ thuần nhất liên kết.",
        "formulas": "* Số ẩn tự do = Số ẩn ($n$) - Hạng ($r$).\n* Nếu $r = n \\implies$ Nghiệm duy nhất.\n* Nghiệm tổng quát của hệ $AX = B$: $X = X_{\\text{riêng}} + X_{\\text{thuần nhất}}$.",
        "quickTips": "* **Mẹo kiểm tra nghiệm tổng quát trắc nghiệm:**\n  * Chọn giá trị cụ thể cho các tham số (VD: cho $t = 0$ hoặc $t = 1$), tính ra bộ số $(x, y, z, t)$.\n  * Thay bộ số đó vào các phương trình của đề bài xem có thỏa mãn hay không $\\implies$ Loại trừ phương án sai trong 15 giây!",
        "casioTricks": "* Nhập hệ phương trình vào Menu 9 của Casio. Với hệ có vô số nghiệm, các dòng máy 580VNX hiển thị nghiệm phụ thuộc vào tham số $z$ hoặc $t$, đối chiếu với các phương án.",
        "traps": "* ⚠️ Quên không biến đổi cả cột vế phải $B$ khi thực hiện các phép biến đổi dòng sơ cấp trên $[A|B]$."
      },
      {
        "id": "4.4",
        "name": "Hệ thuần nhất & Hệ nghiệm cơ bản",
        "summary": "Không gian nghiệm của hệ thuần nhất AX = 0, số chiều n - r(A) và tìm Hệ nghiệm cơ bản.",
        "theory": "### 1. Hệ thuần nhất\nHệ phương trình tuyến tính thuần nhất có vế phải bằng 0: $AX = 0$.\n* **Tính chất quan trọng:** Hệ thuần nhất **LUÔN LUÔN CÓ NGHIỆM**, ít nhất là nghiệm tầm thường $X = (0, 0, \\dots, 0)^T$.\n* Do đó hệ thuần nhất **KHÔNG BAO GIỜ VÔ NGHIỆM**!\n\n### 2. Điều kiện có nghiệm không tầm thường\n* Hệ có nghiệm không tầm thường (nghiệm khác 0) $\\iff r(A) < n$.\n* Nếu $A$ vuông cấp $n$: Hệ có nghiệm không tầm thường $\\iff \\det(A) = 0$.\n\n### 3. Không gian nghiệm & Hệ nghiệm cơ bản\n* Tập hợp tất cả các nghiệm của $AX = 0$ tạo thành một **không gian véc tơ con** của $\\mathbb{R}^n$, gọi là không gian nghiệm $W = \\{X \\mid AX = 0\\}$.\n* **Số chiều của không gian nghiệm:**\n  $$\\dim(W) = n - r(A)$$\n* Một cơ sở của không gian nghiệm $W$ gồm $n - r(A)$ véc tơ độc lập tuyến tính được gọi là một **Hệ nghiệm cơ bản**.",
        "formulas": "* Nghiệm tổng quát của hệ thuần nhất:\n  $$X = c_1 X_1 + c_2 X_2 + \\dots + c_{n-r} X_{n-r}$$\n  với $\\{X_1, \\dots, X_{n-r}\\}$ là hệ nghiệm cơ bản, $c_i \\in \\mathbb{R}$.\n* $\\dim(W) = n - r(A)$.\n* Hai véc tơ là nghiệm thì tổng và tích với vô hướng cũng là nghiệm.",
        "quickTips": "* **Tìm nhanh số chiều không gian nghiệm:**\n  $$\\dim = \\text{Số ẩn } n - \\text{Hạng } r(A)$$\n  * Ví dụ: Hệ 3 phương trình 5 ẩn có hạng $r = 2 \\implies \\dim(W) = 5 - 2 = 3$ (Hệ nghiệm cơ bản gồm đúng 3 véc tơ).\n* **Mẹo trắc nghiệm:** Véc tơ thuộc hệ nghiệm cơ bản phải thỏa mãn $AX = 0$. Thử nhân nhanh $A \\cdot X$, nếu ra $\\neq 0$ thì gạch ngay phương án đó!",
        "casioTricks": "* Giải hệ thuần nhất $AX = 0$ trên Casio bằng cách nhập cột vế phải toàn số 0 trong Menu 9 -> 1.",
        "traps": "* ⚠️ Nhầm số chiều không gian nghiệm với số phương trình $m$. Nhớ kỹ: $\\dim(W) = n - r(A)$ ($n$ là số ẩn, không phải số phương trình $m$!)."
      }
    ]
  },
  "5": {
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "description": "Định nghĩa ánh xạ tuyến tính, nhân Ker, ảnh Im, ma trận biểu diễn, trị riêng, véc tơ riêng và chéo hóa.",
    "types": [
      {
        "id": "5.1",
        "name": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
        "summary": "Nhận biết ánh xạ tuyến tính, các tính chất f(0)=0, f(au + bv) = af(u) + bf(v).",
        "theory": "### 1. Định nghĩa Ánh xạ tuyến tính (Linear Map)\nÁnh xạ $f: V \\to W$ giữa hai KGV trên trường $K$ được gọi là tuyến tính nếu thỏa mãn 2 điều kiện:\n1. $f(u + v) = f(u) + f(v), \\quad \\forall u, v \\in V$.\n2. $f(\\alpha u) = \\alpha f(u), \\quad \\forall u \\in V, \\alpha \\in K$.\n* **Tiêu chuẩn gộp:** $f(\\alpha u + \\beta v) = \\alpha f(u) + \\beta f(v)$.\n\n### 2. Các tính chất cốt lõi\n1. $f(\\vec{0}_V) = \\vec{0}_W$ (Biến véc tơ không thành véc tơ không).\n2. $f(-u) = -f(u)$.\n3. Ánh xạ tuyến tính hoàn toàn được xác định nếu biết ảnh của một cơ sở bất kỳ của $V$:\n   Nếu $B = \\{e_1, \\dots, e_n\\}$ là cơ sở của $V$, và $x = \\sum x_i e_i$, thì:\n   $$f(x) = \\sum_{i=1}^n x_i f(e_i)$$",
        "formulas": "* Dạng tọa độ tuyến tính: $f(x_1, \\dots, x_n) = (y_1, \\dots, y_m)$ trong đó mỗi $y_j$ là một đa thức thuần nhất bậc 1 theo các biến $x_i$:\n  $$y_j = a_{j1} x_1 + a_{j2} x_2 + \\dots + a_{jn} x_n$$\n* Không được có số hạng tự do khác 0, không có tích biến $x_i x_k$, không có hàm lượng giác, trị tuyệt đối.",
        "quickTips": "* **Mẹo 3 giây nhận diện KHÔNG PHẢI ánh xạ tuyến tính:**\n  * Có hằng số tự do cộng thêm: VD $f(x, y) = (x + 1, y) \\implies f(0,0) = (1,0) \\neq (0,0) \\implies$ **LOẠI!**\n  * Có bậc khác 1: $x^2, \\sqrt{x}, xy, \\sin x, |x| \\implies$ **LOẠI!**\n* **Mẹo tính $f(v)$ khi biết ảnh của cơ sở:** Phân tích $v$ thành tổ hợp tuyến tính của cơ sở $v = c_1 e_1 + c_2 e_2 \\implies f(v) = c_1 f(e_1) + c_2 f(e_2)$.",
        "casioTricks": "* Dùng chức năng giải hệ phương trình Casio để tìm các hệ số $c_i$ khi phân tích véc tơ theo cơ sở.",
        "traps": "* ⚠️ $f(x, y) = (x, y, 0)$ là ánh xạ tuyến tính (hằng số 0 là hợp lệ), nhưng $f(x, y) = (x, y, 1)$ KHÔNG phải ánh xạ tuyến tính vì $f(0,0) = (0,0,1) \\neq \\vec{0}$."
      },
      {
        "id": "5.2",
        "name": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
        "summary": "Tìm cơ sở và số chiều của Ker(f), Im(f), kiểm tra tính đơn ánh, toàn ánh, đẳng cấu.",
        "theory": "### 1. Hạt nhân (Kernel) & Ảnh (Image)\nCho ánh xạ tuyến tính $f: V \\to W$:\n* **Hạt nhân $\\ker(f)$:** Tập các véc tơ có ảnh bằng $\\vec{0}$:\n  $$\\ker(f) = \\{u \\in V \\mid f(u) = \\vec{0}_W\\}$$\n  $\\ker(f)$ là một không gian con của $V$.\n* **Ảnh $\\text{Im}(f)$:** Tập tất cả các giá trị của $f$:\n  $$\\text{Im}(f) = \\{f(u) \\mid u \\in V\\} = f(V)$$\n  $\\text{Im}(f)$ là một không gian con của $W$.\n\n### 2. Định lý số chiều (Rank-Nullity Theorem)\n$$\\dim(\\ker f) + \\dim(\\text{Im} f) = \\dim(V)$$\n*(Tổng số chiều của nhân và ảnh bằng số chiều của không gian nguồn).*\n\n### 3. Mối liên hệ với Đơn ánh, Toàn ánh\n* $f$ là **Đơn ánh** $\\iff \\ker(f) = \\{\\vec{0}\\} \\iff \\dim(\\ker f) = 0$.\n* $f$ là **Toàn ánh** $\\iff \\text{Im}(f) = W \\iff \\dim(\\text{Im} f) = \\dim(W)$.\n* $f$ là **Song ánh (Đẳng cấu)** $\\iff \\ker(f) = \\{\\vec{0}\\}$ và $\\dim(V) = \\dim(W)$.",
        "formulas": "* Tìm $\\ker(f)$: Giải hệ phương trình thuần nhất $AX = 0$.\n* Tìm $\\text{Im}(f)$: $\\text{Im}(f) = \\text{span}(f(e_1), \\dots, f(e_n))$.\n* Hạng của ánh xạ: $\\text{rank}(f) = \\dim(\\text{Im} f) = r(A)$ (hạng ma trận biểu diễn).\n* $\\dim(\\ker f) = n - r(A)$.",
        "quickTips": "* **Mẹo tính nhanh số chiều $\\ker$ và $\\text{Im}$:**\n  * Lập ma trận biểu diễn $A$ của $f$, tìm hạng $r(A)$.\n  * Số chiều ảnh: $\\dim(\\text{Im} f) = r(A)$.\n  * Số chiều nhân: $\\dim(\\ker f) = \\text{Số ẩn } n - r(A)$.",
        "casioTricks": "* Tính hạng của ma trận biểu diễn $A$ trên Casio $\\implies$ ra ngay $\\dim(\\text{Im} f) = r(A)$ và $\\dim(\\ker f) = n - r(A)$.",
        "traps": "* ⚠️ Nhầm không gian: $\\ker(f)$ là không gian con của không gian **nguồn $V$**, còn $\\text{Im}(f)$ là không gian con của không gian **đích $W$**!"
      },
      {
        "id": "5.3",
        "name": "Ma trận của Ánh xạ tuyến tính",
        "summary": "Tìm ma trận của f đối với cơ sở chính tắc hoặc cặp cơ sở (B, B'), công thức đổi cơ sở.",
        "theory": "### 1. Ma trận biểu diễn đối với cặp cơ sở\nCho $f: V \\to W$. Chọn cơ sở $B = \\{v_1, \\dots, v_n\\}$ của $V$ và $B' = \\{w_1, \\dots, w_m\\}$ của $W$.\n* Ma trận của $f$ đối với cặp cơ sở $B, B'$, ký hiệu $[f]_{B, B'}$ hoặc $A$, là ma trận cấp $m \\times n$ mà:\n  * **Cột thứ $j$ là tọa độ của $f(v_j)$ đối với cơ sở $B'$**:\n    $$A = \\begin{bmatrix} [f(v_1)]_{B'} & [f(v_2)]_{B'} & \\dots & [f(v_n)]_{B'} \\end{bmatrix}$$\n* **Công thức liên hệ tọa độ:**\n  $$[f(x)]_{B'} = A \\cdot [x]_B$$\n\n### 2. Toán tử tuyến tính & Đổi cơ sở\nNếu $f: V \\to V$ (toán tử tuyến tính), chọn cùng cơ sở $B$: $A = [f]_B$.\n* Khi đổi sang cơ sở mới $B'$ với ma trận chuyển cơ sở $P = P_{B \\to B'}$:\n  $$[f]_{B'} = P^{-1} \\cdot [f]_B \\cdot P$$\n  (Hai ma trận $[f]_{B'}$ và $[f]_B$ là **đồng dạng** với nhau).",
        "formulas": "* Trong cơ sở chính tắc $E$: Cột $j$ chính là véc tơ $f(e_j)$.\n* Ví dụ $f(x, y, z) = (2x - y, x + 3z) \\implies A = \\begin{bmatrix} 2 & -1 & 0 \\\\ 1 & 0 & 3 \\end{bmatrix}$.\n* Ma trận của ánh xạ hợp: $[g \\circ f] = [g] \\cdot [f]$.",
        "quickTips": "* **Tìm ma trận chính tắc trong 5 giây:** Nhìn hệ số của các biến:\n  * Dòng 1 là hệ số của $(x, y, z)$ trong thành phần thứ nhất.\n  * Dòng 2 là hệ số của $(x, y, z)$ trong thành phần thứ hai.",
        "casioTricks": "* Tính $[f]_{B'} = P^{-1} A P$ bằng chức năng nhân ma trận trên Casio: nhập MatP, MatA rồi bấm `MatP^-1 * MatA * MatP`.",
        "traps": "* ⚠️ Thứ tự phép nhân ma trận đổi cơ sở: $A' = P^{-1} A P$ (chứ không phải $P A P^{-1}$)."
      },
      {
        "id": "5.4",
        "name": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
        "summary": "Đa thức đặc trưng, tìm trị riêng, véc tơ riêng, điều kiện chéo hóa và ma trận làm chéo P.",
        "theory": "### 1. Trị riêng & Véc tơ riêng\nCho toán tử tuyến tính $f: V \\to V$ có ma trận $A$. Số $\\lambda$ được gọi là **trị riêng** của $A$ nếu tồn tại véc tơ $v \\neq \\vec{0}$ sao cho:\n$$A v = \\lambda v \\iff (A - \\lambda I) v = \\vec{0}$$\nVéc tơ $v \\neq \\vec{0}$ được gọi là **véc tơ riêng** ứng với trị riêng $\\lambda$.\n\n### 2. Đa thức đặc trưng\n$$P(\\lambda) = \\det(A - \\lambda I) = 0$$\n* Các nghiệm của phương trình đặc trưng chính là các trị riêng của $A$.\n* Không gian con riêng ứng với trị riêng $\\lambda_0$: $E(\\lambda_0) = \\ker(A - \\lambda_0 I)$ (tập tất cả các véc tơ riêng kèm véc tơ $\\vec{0}$).\n\n### 3. Điều kiện Chéo hóa được (Diagonalization)\nMa trận vuông $A$ cấp $n$ chéo hóa được khi và chỉ khi có một trong các điều kiện sau:\n1. $A$ có $n$ véc tơ riêng độc lập tuyến tính.\n2. Với mọi trị riêng $\\lambda_i$, **bội hình học bằng bội đại số**:\n   $$\\dim(E(\\lambda_i)) = n - r(A - \\lambda_i I) = \\text{bội của nghiệm } \\lambda_i$$\n* **Hệ quả cực hay:** Nếu $A$ có $n$ trị riêng **phân biệt** $\\implies A$ **CHẮC CHẮN chéo hóa được!**\n* Khi chéo hóa được: $P^{-1} A P = D = \\text{diag}(\\lambda_1, \\dots, \\lambda_n)$, trong đó các cột của $P$ là các véc tơ riêng tương ứng.",
        "formulas": "* Tổng các trị riêng = Vết của ma trận: $\\sum \\lambda_i = \\text{tr}(A) = \\sum a_{ii}$.\n* Tích các trị riêng = Định thức: $\\prod \\lambda_i = \\det(A)$.\n* Tính $A^k$ nhờ chéo hóa: $A^k = P D^k P^{-1}$.",
        "quickTips": "* **Bí kíp 10 giây tìm trị riêng trắc nghiệm:**\n  * Tính vết $\\text{tr}(A)$ (tổng đường chéo chính) và $\\det(A)$.\n  * Tổng các trị riêng phải bằng $\\text{tr}(A)$.\n  * Tích các trị riêng phải bằng $\\det(A)$.\n  * Đối chiếu 4 phương án, loại ngay các phương án có tổng/tích không khớp!\n* **Kiểm tra véc tơ riêng:** Đề bài cho véc tơ $v$, hỏi có phải véc tơ riêng không? Chỉ cần tính $Av$, nếu $Av = k v$ (tỷ lệ với $v$) $\\implies$ Đúng! Khi đó $k$ chính là trị riêng.",
        "casioTricks": "* Với ma trận $2 \\times 2$: Đa thức đặc trưng là $\\lambda^2 - \\text{tr}(A)\\lambda + \\det(A) = 0$. Bấm Menu 9 -> 2 -> 2 giải phương trình bậc 2 ra ngay 2 trị riêng!\n* Với ma trận $3 \\times 3$: Bấm phương trình bậc 3 Menu 9 -> 2 -> 3.",
        "traps": "* ⚠️ Véc tơ riêng phải là véc tơ **khác không** ($v \\neq \\vec{0}$). Véc tơ $\\vec{0}$ không bao giờ được coi là véc tơ riêng!"
      }
    ]
  },
  "6": {
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "description": "Tích vô hướng, trực giao/trực chuẩn Gram-Schmidt, dạng toàn phương, thuật toán Lagrange và tiêu chuẩn Sylvester.",
    "types": [
      {
        "id": "6.1",
        "name": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
        "summary": "Tiêu chuẩn tích vô hướng, tính tích vô hướng, chuẩn véc tơ, góc và bất đẳng thức Cauchy-Schwarz.",
        "theory": "### 1. Tích vô hướng (Inner Product)\nTích vô hướng trên KGV thực $V$ là ánh xạ $\\langle \\cdot, \\cdot \\rangle: V \\times V \\to \\mathbb{R}$ thỏa mãn 4 tiên đề:\n1. Đối xứng: $\\langle u, v \\rangle = \\langle v, u \\rangle$.\n2. Tuyến tính với ngôi thứ nhất: $\\langle \\alpha u + \\beta v, w \\rangle = \\alpha \\langle u, w \\rangle + \\beta \\langle v, w \\rangle$.\n3. Không âm: $\\langle u, u \\rangle \\ge 0, \\, \\forall u \\in V$.\n4. Xác định dương: $\\langle u, u \\rangle = 0 \\iff u = \\vec{0}$.\n\n### 2. Chuẩn (Độ dài) & Góc\n* **Độ dài (Chuẩn):** $\\|u\\| = \\sqrt{\\langle u, u \\rangle}$.\n* **Khoảng cách:** $d(u, v) = \\|u - v\\|$.\n* **Góc giữa hai véc tơ:**\n  $$\\cos(u, v) = \\frac{\\langle u, v \\rangle}{\\|u\\| \\cdot \\|v\\|} \\quad (0 \\le (u, v) \\le \\pi)$$\n* **Bất đẳng thức Cauchy-Schwarz:**\n  $$|\\langle u, v \\rangle| \\le \\|u\\| \\cdot \\|v\\|$$\n  Đẳng thức xảy ra khi và chỉ khi $u, v$ phụ thuộc tuyến tính (tỷ lệ nhau).",
        "formulas": "* Tích vô hướng chính tắc trong $\\mathbb{R}^n$:\n  $$\\langle x, y \\rangle = x_1 y_1 + x_2 y_2 + \\dots + x_n y_n = x^T y$$\n* Chuẩn chính tắc: $\\|x\\| = \\sqrt{x_1^2 + x_2^2 + \\dots + x_n^2}$.\n* Bất đẳng thức tam giác: $\\|u + v\\| \\le \\|u\\| + \\|v\\|$.",
        "quickTips": "* **Nhận biết biểu thức KHÔNG PHẢI tích vô hướng:**\n  * Thiếu tính đối xứng: Có số hạng $x_1 y_2$ mà không có $x_2 y_1$.\n  * Không xác định dương: Có thể âm khi $u = v$ (ví dụ: $x_1^2 - x_2^2$).\n* Hai véc tơ trực giao (vuông góc) $\\iff \\langle u, v \\rangle = 0$.",
        "casioTricks": "* Trên Casio fx-580VNX: Vào `MENU 5` (Vector):\n  * Nhập VctA, VctB.\n  * Tích vô hướng: `VctA` $\\cdot$ `VctB` (dấu chấm dot product trong `OPTN`).\n  * Độ dài: `Abs(VctA)` (phím Shift + `(`).\n  * Góc: `OPTN` -> `Angle(VctA, VctB)` ra trực tiếp độ/rad!",
        "traps": "* ⚠️ Bấm máy Casio tính góc nhớ để ý đơn vị đo góc đang là Degree ($^\\circ$) hay Radian!"
      },
      {
        "id": "6.2",
        "name": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
        "summary": "Điều kiện trực giao, trực chuẩn, thuật toán trực chuẩn hóa Gram-Schmidt và hình chiếu trực giao.",
        "theory": "### 1. Hệ trực giao & Hệ trực chuẩn\n* Hệ $\\{u_1, u_2, \\dots, u_k\\}$ được gọi là **trực giao** nếu các véc tơ đôi một vuông góc:\n  $$\\langle u_i, u_j \\rangle = 0 \\quad \\forall i \\neq j$$\n* Hệ được gọi là **trực chuẩn** nếu vừa trực giao vừa có độ dài bằng 1:\n  $$\\langle u_i, u_j \\rangle = \\begin{cases} 0 & \\text{khi } i \\neq j \\\\ 1 & \\text{khi } i = j \\end{cases}$$\n* **Tính chất vàng:** Hệ trực giao gồm các véc tơ khác không thì **LUÔN ĐỘC LẬP TUYẾN TÍNH**!\n\n### 2. Quá trình trực chuẩn hóa Gram-Schmidt\nTừ cơ sở độc lập tuyến tính $\\{v_1, v_2, v_3\\}$, xây dựng cơ sở trực giao $\\{u_1, u_2, u_3\\}$:\n1. $u_1 = v_1$\n2. $u_2 = v_2 - \\dfrac{\\langle v_2, u_1 \\rangle}{\\|u_1\\|^2} u_1$\n3. $u_3 = v_3 - \\dfrac{\\langle v_3, u_1 \\rangle}{\\|u_1\\|^2} u_1 - \\dfrac{\\langle v_3, u_2 \\rangle}{\\|u_2\\|^2} u_2$\n* Trực chuẩn hóa: $e_i = \\dfrac{u_i}{\\|u_i\\|}$.",
        "formulas": "* Hình chiếu trực giao của $x$ lên không gian con $W = \\text{span}(u_1, \\dots, u_k)$ (với $\\{u_i\\}$ trực giao):\n  $$\\text{pr}_W(x) = \\sum_{i=1}^k \\frac{\\langle x, u_i \\rangle}{\\|u_i\\|^2} u_i$$\n* Khoảng cách từ $x$ đến $W$: $d(x, W) = \\|x - \\text{pr}_W(x)\\|$.",
        "quickTips": "* **Mẹo loại trừ cực nhanh khi tìm hệ trực giao/trực chuẩn:**\n  * Tính nhanh tích vô hướng của 2 véc tơ bất kỳ trong các phương án đáp án.\n  * Nếu $\\langle e_1, e_2 \\rangle \\neq 0 \\implies$ **LOẠI NGAY!**\n  * Nếu đề bài hỏi hệ \"trực chuẩn\" mà véc tơ có độ dài $\\neq 1 \\implies$ **LOẠI NGAY!**\n  * Thường chỉ cần thử tích vô hướng đôi một là tìm ra đáp án đúng trong 20 giây mà không cần làm toàn bộ quá trình Gram-Schmidt!",
        "casioTricks": "* Nhập các véc tơ vào Vector mode trên Casio để bấm tích vô hướng kiểm tra trực giao.",
        "traps": "* ⚠️ Rất hay quên chia cho bình phương độ dài $\\|u_i\\|^2$ trong công thức Gram-Schmidt."
      },
      {
        "id": "6.3",
        "name": "Dạng toàn phương & Thuật toán Lagrange",
        "summary": "Ma trận đối xứng biểu diễn dạng toàn phương, phương pháp Lagrange đưa về dạng chính tắc.",
        "theory": "### 1. Dạng toàn phương (Quadratic Form)\nÁnh xạ $Q: \\mathbb{R}^n \\to \\mathbb{R}$ có dạng:\n$$Q(x) = \\sum_{i=1}^n a_{ii} x_i^2 + 2 \\sum_{1 \\le i < j \\le n} a_{ij} x_i x_j = X^T A X$$\n* $A$ là ma trận đối xứng ($A^T = A$) cấp $n$:\n  * Phần tử đường chéo $a_{ii}$ là hệ số của $x_i^2$.\n  * Phần tử ngoài đường chéo $a_{ij} = a_{ji}$ bằng **MỘT NỬA** hệ số của số hạng chéo $x_i x_j$.\n\n### 2. Đưa về Dạng chính tắc bằng phương pháp Lagrange\nDạng chính tắc: $Q(y) = c_1 y_1^2 + c_2 y_2^2 + \\dots + c_n y_n^2$ (không còn tích chéo $y_i y_j$).\n* **Trường hợp 1 (Có chứa bình phương $x_1^2$):** Gom tất cả số hạng chứa $x_1$ thành bình phương đúng:\n  $$Q = a_{11} \\left(x_1 + \\frac{a_{12}}{a_{11}} x_2 + \\dots\\right)^2 + Q_1(x_2, \\dots, x_n)$$\n  Đặt $y_1 = x_1 + \\dots$, tiếp tục quy trình với $Q_1$.\n* **Trường hợp 2 (Không có bình phương nào, chỉ có tích chéo $x_1 x_2$):** Đổi biến phụ:\n  $$x_1 = y_1 + y_2, \\quad x_2 = y_1 - y_2 \\implies x_1 x_2 = y_1^2 - y_2^2$$\n  xuất hiện bình phương rồi quay lại Trường hợp 1.",
        "formulas": "* Biểu diễn ma trận: $Q(X) = X^T A X$.\n* Ví dụ trong $\\mathbb{R}^3$:\n  $$A = \\begin{bmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{12} & a_{22} & a_{23} \\\\ a_{13} & a_{23} & a_{33} \\end{bmatrix}$$\n* Hạng của dạng toàn phương: $r(Q) = r(A)$.",
        "quickTips": "* **Tìm ma trận $A$ trong 5 giây:**\n  * Nhìn hệ số của $x_1^2, x_2^2, x_3^2 \\implies$ Điền thẳng vào đường chéo chính.\n  * Nhìn hệ số của $x_1 x_2, x_1 x_3, x_2 x_3 \\implies$ **CHIA ĐÔI** rồi điền vào các vị trí đối xứng tương ứng.\n* **Mẹo trắc nghiệm đổi biến Lagrange:** Thử thay một điểm đặc biệt (ví dụ $x = (1, 0, 0)$) vào biểu thức $Q(x)$ ban đầu và dạng chính tắc xem giá trị có bằng nhau không.",
        "casioTricks": "* Nhập ma trận đối xứng $A$ vào Casio để tìm các trị riêng $\\lambda_i$. Dạng chính tắc bằng biến đổi trực giao chính là:\n  $$Q = \\lambda_1 y_1^2 + \\lambda_2 y_2^2 + \\lambda_3 y_3^2$$",
        "traps": "* ⚠️ **Bẫy chia đôi hệ số:** Hệ số của $x_1 x_2$ là $4$ thì trong ma trận $a_{12} = a_{21} = 2$ chứ không phải $4$!"
      },
      {
        "id": "6.4",
        "name": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
        "summary": "Tiêu chuẩn Sylvester dùng định thức con chính kiểm tra xác định dương, xác định âm, nửa xác định và luật quán tính.",
        "theory": "### 1. Phân loại dấu của Dạng toàn phương\nVới mọi $X \\neq \\vec{0}$:\n* **Xác định dương (Positive Definite):** $Q(X) > 0$.\n* **Xác định âm (Negative Definite):** $Q(X) < 0$.\n* **Nửa xác định dương:** $Q(X) \\ge 0$.\n* **Nửa xác định âm:** $Q(X) \\le 0$.\n* **Không xác định dấu:** $Q(X)$ nhận cả giá trị dương và âm.\n\n### 2. Tiêu chuẩn Sylvester (Dùng các định thức con chính góc $\\Delta_k$)\nXét ma trận đối xứng $A$ của dạng toàn phương $Q$:\n* $\\Delta_1 = a_{11}$\n* $\\Delta_2 = \\begin{vmatrix} a_{11} & a_{12} \\\\ a_{12} & a_{22} \\end{vmatrix}$\n* $\\Delta_3 = \\det(A)$\n1. **Xác định dương $\\iff$ TẤT CẢ các định thức con chính đều DƯƠNG:**\n   $$\\Delta_1 > 0, \\quad \\Delta_2 > 0, \\quad \\Delta_3 > 0, \\quad \\dots, \\quad \\Delta_n > 0$$\n2. **Xác định âm $\\iff$ Các định thức con chính ĐỔI DẤU SO LE (bắt đầu bằng âm):**\n   $$\\Delta_1 < 0, \\quad \\Delta_2 > 0, \\quad \\Delta_3 < 0, \\quad \\dots \\quad ((-1)^k \\Delta_k > 0)$$\n3. **Không xác định dấu:** Vi phạm cả 2 quy luật trên (ví dụ $\\Delta_1 > 0$ nhưng $\\Delta_2 < 0$, hoặc $\\Delta_n$ không theo quy luật).\n\n### 3. Luật quán tính Sylvester\nSố hệ số dương $p$ (chỉ số quán tính dương) và số hệ số âm $q$ (chỉ số quán tính âm) trong dạng chính tắc **không phụ thuộc vào cách đưa về dạng chính tắc**.",
        "formulas": "* Tiêu chuẩn Trị riêng:\n  * Xác định dương $\\iff$ Tất cả các trị riêng $\\lambda_i > 0$.\n  * Xác định âm $\\iff$ Tất cả các trị riêng $\\lambda_i < 0$.\n  * Không xác định dấu $\\iff$ Có cả trị riêng dương và trị riêng âm.\n* Chữ ký (Signature) của dạng toàn phương: $(p, q)$.",
        "quickTips": "* **Mẹo xét dấu trong 10 giây:**\n  * Nhìn ngay các phần tử trên đường chéo chính:\n    * Nếu có 1 phần tử $> 0$ và 1 phần tử $< 0$ (VD $x_1^2 - 2x_2^2$) $\\implies$ **CHẮC CHẮN KHÔNG XÁC ĐỊNH DẤU!** (vì cho $(1,0) \\to >0$, cho $(0,1) \\to <0$).\n    * Nếu muốn xác định dương thì bắt buộc **tất cả hệ số bình phương phải $> 0$**.\n    * Nếu muốn xác định âm thì bắt buộc **tất cả hệ số bình phương phải $< 0$**.\n* Tính $\\Delta_1, \\Delta_2, \\Delta_3$ để tìm điều kiện tham số $m$.",
        "casioTricks": "* Nhập ma trận $A$ vào Casio, tính định thức $\\det(A) = \\Delta_3$:\n  * Nếu cấp 3 mà $\\det(A) < 0$ thì chắc chắn KHÔNG THỂ xác định dương!",
        "traps": "* ⚠️ **Bẫy xác định âm:** Rất nhiều bạn nghĩ xác định âm là tất cả các $\\Delta_k < 0$. **SAI HOÀN TOÀN!** Xác định âm phải là **DẤU SO LE**:\n  $$\\Delta_1 < 0, \\quad \\Delta_2 > 0, \\quad \\Delta_3 < 0$$"
      }
    ]
  }
};
  if (typeof window !== 'undefined') {
    window.THEORY_DOCS = docs;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = docs;
  }
  global.THEORY_DOCS = docs;
})(typeof window !== 'undefined' ? window : global);
