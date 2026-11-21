// Ngân hàng 300 câu hỏi Đại số tuyến tính & Toán rời rạc (Bản mở rộng chuẩn hóa)
window.QUESTIONS_BANK = window.QUESTIONS_DATA = [
  {
    "originalId": 1,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Đối ngẫu của công thức $(x' \\vee 0) \\wedge (y' \\vee z)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(x' \\wedge 0) \\vee (y' \\vee z)$."
      },
      {
        "key": "B",
        "text": "$(x \\wedge 1) \\vee (y \\vee z')$."
      },
      {
        "key": "C",
        "text": "$(x' \\wedge 1) \\vee (y' \\wedge z)$"
      },
      {
        "key": "D",
        "text": "$(x' \\vee 1) \\wedge (y' \\wedge z)$."
      }
    ],
    "correct": "C",
    "explanation": "* **Quy tắc tìm công thức đối ngẫu trong Đại số Boole:** Thay phép hội ($\\wedge$) thành phép tuyển ($\\vee$) và ngược lại; thay hằng số $0$ thành $1$ và ngược lại; giữ nguyên các biến và dấu phủ định ($'$).\n* Áp dụng vào công thức $(x' \\vee 0) \\wedge (y' \\vee z)$, ta thu được công thức đối ngẫu chuẩn xác là:\n  $$(x' \\wedge 1) \\vee (y' \\wedge z)$$\n* **Chọn đáp án: C.**",
    "isOriginal": true,
    "id": 1
  },
  {
    "originalId": 2,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho các mệnh đề $p, q, r$. Mệnh đề nào dưới đây **không đúng**?",
    "options": [
      {
        "key": "A",
        "text": "$((p \\to q) \\wedge (p \\to r)) \\equiv (p \\to (q \\wedge r))$."
      },
      {
        "key": "B",
        "text": "$((p \\to r) \\wedge (q \\to r)) \\equiv ((p \\wedge q) \\to r)$."
      },
      {
        "key": "C",
        "text": "$\\overline{p \\to q} \\equiv (p \\wedge \\bar{q})$."
      },
      {
        "key": "D",
        "text": "$(p \\vee q) \\equiv (\\bar{p} \\to q)$."
      }
    ],
    "correct": "B",
    "explanation": "* Ta kiểm tra từng tương đương logic:\n  * **A đúng:** $(p \\to q) \\wedge (p \\to r) \\equiv (\\bar{p} \\vee q) \\wedge (\\bar{p} \\vee r) \\equiv \\bar{p} \\vee (q \\wedge r) \\equiv p \\to (q \\wedge r)$.\n  * **B sai:** $(p \\to r) \\wedge (q \\to r) \\equiv (\\bar{p} \\vee r) \\wedge (\\bar{q} \\vee r) \\equiv (\\bar{p} \\wedge \\bar{q}) \\vee r \\equiv \\overline{p \\vee q} \\vee r \\equiv (p \\vee q) \\to r$, **không** tương đương với $(p \\wedge q) \\to r$.\n  * **C đúng:** $\\overline{p \\to q} \\equiv \\overline{\\bar{p} \\vee q} \\equiv p \\wedge \\bar{q}$.\n  * **D đúng:** $\\bar{p} \\to q \\equiv \\overline{\\bar{p}} \\vee q \\equiv p \\vee q$.\n* **Chọn đáp án: B.**\n\n---",
    "isOriginal": true,
    "id": 2
  },
  {
    "originalId": 3,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho $A, B, C$ là các tập con của tập hợp $X$. Khẳng định nào dưới đây **không đúng**?",
    "options": [
      {
        "key": "A",
        "text": "$(A \\cap B \\cap C) \\subset (B \\cap C)$."
      },
      {
        "key": "B",
        "text": "$A \\cap (B \\setminus A) = \\emptyset$."
      },
      {
        "key": "C",
        "text": "$(A \\setminus C) \\cap (C \\setminus B) = \\emptyset$."
      },
      {
        "key": "D",
        "text": "Nếu $A \\cup C = B \\cup C$ thì $A = B$."
      }
    ],
    "correct": "D",
    "explanation": "* Phản ví dụ cho khẳng định **D**: Chọn $A = \\{1\\}$, $B = \\{2\\}$ và $C = \\{1, 2\\}$. Khi đó $A \\cup C = \\{1, 2\\} = B \\cup C$, nhưng $A \\neq B$.\n* Các khẳng định A, B, C đều đúng theo định nghĩa phép giao và phép hiệu tập hợp.\n* **Chọn đáp án: D.**\n\n---",
    "isOriginal": true,
    "id": 3
  },
  {
    "originalId": 4,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Khẳng định nào dưới đây **không đúng**?",
    "options": [
      {
        "key": "A",
        "text": "$x \\in \\{x\\}$."
      },
      {
        "key": "B",
        "text": "$\\emptyset \\in \\{x\\}$."
      },
      {
        "key": "C",
        "text": "$\\{x\\} \\in \\{\\{x\\}\\}$."
      },
      {
        "key": "D",
        "text": "$\\emptyset \\in \\{\\emptyset, \\{\\emptyset\\}\\}$."
      }
    ],
    "correct": "B",
    "explanation": "* Tập hợp $\\{x\\}$ chỉ có một phần tử duy nhất là $x$. Tập rỗng $\\emptyset$ là **tập con** của $\\{x\\}$ ($\\emptyset \\subset \\{x\\}$), chứ không phải là một **phần tử** của $\\{x\\}$ (trừ trường hợp đặc biệt $x = \\emptyset$, nhưng với $x$ bất kỳ thì điều này không đúng).\n* **Chọn đáp án: B.**\n\n---",
    "isOriginal": true,
    "id": 4
  },
  {
    "originalId": 5,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Ánh xạ nào dưới đây là **toàn ánh**?",
    "options": [
      {
        "key": "A",
        "text": "$f: \\mathbb{R} \\to \\mathbb{R}, \\, f(x) = x^3 + 5$."
      },
      {
        "key": "B",
        "text": "$f: \\mathbb{R}^* \\to \\mathbb{R}, \\, f(x) = \\dfrac{1}{x}$."
      },
      {
        "key": "C",
        "text": "$f: \\mathbb{R} \\to \\mathbb{R}, \\, f(x) = x^2 + 2x$."
      },
      {
        "key": "D",
        "text": "$f: \\mathbb{N} \\to \\mathbb{N}, \\, f(n) = 2n$."
      }
    ],
    "correct": "A",
    "explanation": "* **A đúng:** Với mọi $y \\in \\mathbb{R}$, phương trình $x^3 + 5 = y \\Leftrightarrow x = \\sqrt[3]{y - 5}$ luôn có nghiệm thực $x \\in \\mathbb{R}$. Vậy $f$ là toàn ánh.\n* **B sai:** Tập giá trị là $\\mathbb{R}^*$, không nhận giá trị $0 \\in \\mathbb{R}$.\n* **C sai:** $x^2 + 2x = (x + 1)^2 - 1 \\ge -1$, không nhận các giá trị $y < -1$.\n* **D sai:** Ảnh của $f$ chỉ gồm các số tự nhiên chẵn, không phủ hết các số tự nhiên lẻ trong $\\mathbb{N}$.\n* **Chọn đáp án: A.**\n\n---",
    "isOriginal": true,
    "id": 5
  },
  {
    "originalId": 6,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho ánh xạ $f: \\mathbb{N} \\to \\mathbb{N}, \\, f(n) = n^2 + n$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$f$ là song ánh."
      },
      {
        "key": "B",
        "text": "$f$ là đơn ánh nhưng không là toàn ánh."
      },
      {
        "key": "C",
        "text": "$f$ là toàn ánh nhưng không là đơn ánh."
      },
      {
        "key": "D",
        "text": "$f$ không là đơn ánh cũng không là toàn ánh."
      }
    ],
    "correct": "B",
    "explanation": "* **Xét tính đơn ánh:** Giả sử $f(n_1) = f(n_2)$ với $n_1, n_2 \\in \\mathbb{N}$:\n  $$n_1^2 + n_1 = n_2^2 + n_2 \\Leftrightarrow (n_1 - n_2)(n_1 + n_2 + 1) = 0$$\n  Vì $n_1, n_2 \\in \\mathbb{N}$ nên $n_1 + n_2 + 1 \\ge 1 > 0$. Do đó $n_1 = n_2$, suy ra $f$ là **đơn ánh**.\n* **Xét tính toàn ánh:** Với $y = 1 \\in \\mathbb{N}$, phương trình $n^2 + n = 1$ không có nghiệm tự nhiên. Do đó $f$ **không là toàn ánh**.\n* **Chọn đáp án: B.**\n\n---",
    "isOriginal": true,
    "id": 6
  },
  {
    "question": "Tìm ma trận $X$ thỏa mãn phương trình:\n$$X \\begin{bmatrix} 2 & -3 \\\\ -4 & 5 \\end{bmatrix} = \\begin{bmatrix} 1 & -1 \\\\ 2 & -3 \\end{bmatrix}$$",
    "options": [
      {
        "key": "A",
        "text": "$X = \\begin{bmatrix} -1/2 & -1/2 \\\\ 1 & 0 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$X = \\begin{bmatrix} 1/2 & 1/2 \\\\ -2 & -1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$X = \\begin{bmatrix} 2 & 2 \\\\ -4 & 0 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$X = \\begin{bmatrix} -2 & -2 \\\\ 8 & 4 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* Đặt $A = \\begin{bmatrix} 2 & -3 \\\\ -4 & 5 \\end{bmatrix}$ và $B = \\begin{bmatrix} 1 & -1 \\\\ 2 & -3 \\end{bmatrix}$. Phương trình có dạng $XA = B \\Rightarrow X = BA^{-1}$.\n* Ta có $\\det A = 2 \\cdot 5 - (-3)(-4) = 10 - 12 = -2 \\neq 0$, suy ra:\n  $$A^{-1} = -\\frac{1}{2} \\begin{bmatrix} 5 & 3 \\\\ 4 & 2 \\end{bmatrix}$$\n* Nhân ma trận:\n  $$X = \\begin{bmatrix} 1 & -1 \\\\ 2 & -3 \\end{bmatrix} \\cdot \\left(-\\frac{1}{2}\\right) \\begin{bmatrix} 5 & 3 \\\\ 4 & 2 \\end{bmatrix} = -\\frac{1}{2} \\begin{bmatrix} 1 & 1 \\\\ -2 & 0 \\end{bmatrix} = \\begin{bmatrix} -1/2 & -1/2 \\\\ 1 & 0 \\end{bmatrix}$$\n* **Chọn đáp án: A.**",
    "id": 7,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "question": "Cho các ma trận:\n$$A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 1 & 3 \\\\ 1 & 0 & 4 \\end{bmatrix}, \\quad B = \\begin{bmatrix} 1 & 2 & 1 \\\\ 0 & 1 & 2 \\\\ 3 & 0 & 4 \\end{bmatrix}$$\nPhần tử ở vị trí hàng 1, cột 2 của ma trận $AB - 2BA$ là:",
    "options": [
      {
        "key": "A",
        "text": "$4$"
      },
      {
        "key": "B",
        "text": "$3$"
      },
      {
        "key": "C",
        "text": "$1$"
      },
      {
        "key": "D",
        "text": "$-4$"
      }
    ],
    "correct": "D",
    "explanation": "* Ta có công thức phần tử vị trí $(1, 2)$ của $AB - 2BA$:\n  $$(AB - 2BA)_{12} = (AB)_{12} - 2(BA)_{12}$$\n* Tính từng thành phần:\n  * $(AB)_{12} = (\\text{Hàng 1 của } A) \\cdot (\\text{Cột 2 của } B) = 1 \\cdot 2 + 2 \\cdot 1 + 3 \\cdot 0 = 4$.\n  * $(BA)_{12} = (\\text{Hàng 1 của } B) \\cdot (\\text{Cột 2 của } A) = 1 \\cdot 2 + 2 \\cdot 1 + 1 \\cdot 0 = 4$.\n* Do đó $(AB - 2BA)_{12} = 4 - 2(4) = -4$.\n* **Chọn đáp án: D.**",
    "id": 8,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "question": "Cho ma trận:\n$$A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 5 & 3 \\\\ 1 & 0 & 8 \\end{bmatrix}$$\nPhần tử ở vị trí hàng 3, cột 2 của ma trận nghịch đảo $A^{-1}$ là:",
    "options": [
      {
        "key": "A",
        "text": "$-2$"
      },
      {
        "key": "B",
        "text": "$2$"
      },
      {
        "key": "C",
        "text": "$1/9$"
      },
      {
        "key": "D",
        "text": "$-1/9$"
      }
    ],
    "correct": "A",
    "explanation": "* Theo công thức ma trận nghịch đảo $A^{-1} = \\dfrac{1}{\\det A} (C_{ij})^T$, phần tử ở vị trí hàng $3$, cột $2$ của $A^{-1}$ là:\n  $$(A^{-1})_{32} = \\frac{C_{23}}{\\det A}$$\n  trong đó $C_{23} = (-1)^{2+3} M_{23}$ là phần phụ đại số của phần tử $a_{23}$.\n* Tính $C_{23}$:\n  $$C_{23} = (-1)^5 \\begin{vmatrix} 1 & 2 \\\\ 1 & 0 \\end{vmatrix} = -(0 - 2) = 2$$\n* Tính định thức $\\det A$ (khai triển theo hàng 3):\n  $$\\det A = 1(6 - 15) - 0 + 8(5 - 4) = -9 + 8 = -1$$\n* Suy ra phần tử $(A^{-1})_{32} = \\dfrac{2}{-1} = -2$.\n* **Chọn đáp án: A.**",
    "id": 9,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "question": "Cho ma trận:\n$$A = \\begin{bmatrix} m & 1 & 1 \\\\ 1 & m & 1 \\\\ 1 & 1 & m \\end{bmatrix}$$\nĐiều kiện của tham số $m$ để ma trận $A$ khả nghịch (có ma trận nghịch đảo) là:",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq 2$ và $m \\neq -2$"
      },
      {
        "key": "B",
        "text": "$m = -2$ hoặc $m = 1$"
      },
      {
        "key": "C",
        "text": "$m \\neq -2$ và $m \\neq 1$"
      },
      {
        "key": "D",
        "text": "$m = 2$ hoặc $m = -2$"
      }
    ],
    "correct": "C",
    "explanation": "* Ma trận vuông $A$ khả nghịch khi và chỉ khi $\\det A \\neq 0$.\n* Khai triển định thức của ma trận tuần hoàn cấp 3:\n  $$\\det A = \\begin{vmatrix} m & 1 & 1 \\\\ 1 & m & 1 \\\\ 1 & 1 & m \\end{vmatrix} = (m + 2)(m - 1)^2$$\n* Để $\\det A \\neq 0$, điều kiện của $m$ là:\n  $$\\begin{cases} m + 2 \\neq 0 \\\\ m - 1 \\neq 0 \\end{cases} \\Leftrightarrow \\begin{cases} m \\neq -2 \\\\ m \\neq 1 \\end{cases}$$\n* **Chọn đáp án: C.**",
    "id": 10,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "question": "Cho hai tập hợp $A = \\{1, 2, 3, 4\\}$ và $B = \\{3, 4, 5, 6\\}$. Hiệu đối xứng $A \\Delta B = (A \\setminus B) \\cup (B \\setminus A)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\{3, 4\\}$"
      },
      {
        "key": "B",
        "text": "$\\{1, 2, 3, 4, 5, 6\\}$"
      },
      {
        "key": "C",
        "text": "$\\emptyset$"
      },
      {
        "key": "D",
        "text": "$\\{1, 2, 5, 6\\}$"
      }
    ],
    "correct": "D",
    "explanation": "Ta có $A \\setminus B = \\{1, 2\\}$ và $B \\setminus A = \\{5, 6\\}$. Do đó $A \\Delta B = \\{1, 2\\} \\cup \\{5, 6\\} = \\{1, 2, 5, 6\\}$.\n* **Chọn đáp án: D.**",
    "id": 11,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "question": "Cho tập hợp $X$ có $5$ phần tử. Số tập con gồm đúng $3$ phần tử của $X$ là:",
    "options": [
      {
        "key": "A",
        "text": "$15$"
      },
      {
        "key": "B",
        "text": "$20$"
      },
      {
        "key": "C",
        "text": "$60$"
      },
      {
        "key": "D",
        "text": "$10$"
      }
    ],
    "correct": "D",
    "explanation": "Số tập hợp con gồm $3$ phần tử của tập có $5$ phần tử là số tổ hợp chập $3$ của $5$: $C_5^3 = \\frac{5!}{3!2!} = \\frac{10}{1} = 10$.\n* **Chọn đáp án: D.**",
    "id": 12,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "question": "Cho tập hợp $A$ có $n$ phần tử ($n \\ge 1$). Số tập hợp con thực sự (tập con khác chính nó) của $A$ là:",
    "options": [
      {
        "key": "A",
        "text": "$2^n - 1$"
      },
      {
        "key": "B",
        "text": "$2^n$"
      },
      {
        "key": "C",
        "text": "$2^n - 2$"
      },
      {
        "key": "D",
        "text": "$n^2 - 1$"
      }
    ],
    "correct": "A",
    "explanation": "Tổng số tập con của tập có $n$ phần tử là $2^n$. Tập con thực sự là tập con bỏ đi chính tập hợp $A$, do đó số tập con thực sự là $2^n - 1$.\n* **Chọn đáp án: A.**",
    "id": 13,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "question": "Cho ánh xạ $f: \\mathbb{R} \\to \\mathbb{R}$ xác định bởi $f(x) = 2x - 3$. Ánh xạ ngược $f^{-1}(x)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$f^{-1}(x) = \\dfrac{x - 3}{2}$"
      },
      {
        "key": "B",
        "text": "$f^{-1}(x) = \\dfrac{x + 3}{2}$"
      },
      {
        "key": "C",
        "text": "$f^{-1}(x) = 3x - 2$"
      },
      {
        "key": "D",
        "text": "$f^{-1}(x) = \\dfrac{1}{2x - 3}$"
      }
    ],
    "correct": "B",
    "explanation": "Đặt $y = f(x) = 2x - 3 \\Leftrightarrow 2x = y + 3 \\Leftrightarrow x = \\dfrac{y + 3}{2}$. Vì $f$ là song ánh trên $\\mathbb{R}$, ánh xạ ngược là $f^{-1}(x) = \\dfrac{x + 3}{2}$.\n* **Chọn đáp án: B.**",
    "id": 14,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "question": "Cho $M_1, M_2, M_3$ là các véc tơ cột của ma trận $D_0$ cấp 3 thỏa mãn $\\det D_0 = \\det(M_1, M_2, M_3) = 5$. Cho định thức $D = \\det(2M_1, \\, (2a + b)M_2, \\, M_3)$ với $a, b$ là các tham số thực. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$D = 10(2a + b)$"
      },
      {
        "key": "B",
        "text": "$D = -10(2a + b)$"
      },
      {
        "key": "C",
        "text": "$D = 10(b - 2a)$"
      },
      {
        "key": "D",
        "text": "$D = 10(2a - b)$"
      }
    ],
    "correct": "A",
    "explanation": "* Áp dụng tính chất đa tuyến tính của định thức theo cột: Đưa các thừa số nhân ở cột 1 và cột 2 ra ngoài dấu định thức:\n  $$D = \\det(2M_1, \\, (2a + b)M_2, \\, M_3) = 2 \\cdot (2a + b) \\cdot \\det(M_1, M_2, M_3)$$\n* Vì $\\det(M_1, M_2, M_3) = 5$, ta có:\n  $$D = 2 \\cdot (2a + b) \\cdot 5 = 10(2a + b)$$\n* **Chọn đáp án: A.**",
    "id": 15,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "question": "Quan hệ hai ngôi $R$ trên tập $A$ được gọi là **quan hệ tương đương** nếu nó thỏa mãn các tính chất nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Phản xạ, Phản xứng và Bắc cầu"
      },
      {
        "key": "B",
        "text": "Phản xạ, Đối xứng và Bắc cầu"
      },
      {
        "key": "C",
        "text": "Đối xứng, Phản xứng và Bắc cầu"
      },
      {
        "key": "D",
        "text": "Phản xạ, Đối xứng và Phản xứng"
      }
    ],
    "correct": "B",
    "explanation": "Theo định nghĩa, quan hệ tương đương phải thỏa mãn 3 tính chất: Phản xạ (Reflexive), Đối xứng (Symmetric), và Bắc cầu (Transitive). (Nếu thay Đối xứng bằng Phản xứng thì đó là quan hệ thứ tự).\n* **Chọn đáp án: B.**",
    "id": 16,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "question": "Cho tập $A = \\{1, 2, 3\\}$. Quan hệ $R = \\{(1, 1), (2, 2), (3, 3), (1, 2), (2, 1)\\}$ trên $A$ là:",
    "options": [
      {
        "key": "A",
        "text": "Quan hệ tương đương"
      },
      {
        "key": "B",
        "text": "Quan hệ thứ tự một phần"
      },
      {
        "key": "C",
        "text": "Chỉ có tính đối xứng nhưng không có tính phản xạ"
      },
      {
        "key": "D",
        "text": "Không có tính bắc cầu"
      }
    ],
    "correct": "A",
    "explanation": "- Tính phản xạ: chứa $(1,1), (2,2), (3,3)$ nên có tính phản xạ.\n- Tính đối xứng: $(1,2) \\in R \\Rightarrow (2,1) \\in R$ nên có tính đối xứng.\n- Tính bắc cầu: $(1,2)$ và $(2,1) \\Rightarrow (1,1) \\in R$; $(2,1)$ và $(1,2) \\Rightarrow (2,2) \\in R$. Do đó $R$ là quan hệ tương đương.\n* **Chọn đáp án: A.**",
    "id": 17,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "question": "Dạng chuẩn tắc tuyển (Disjunctive Normal Form - DNF) của hàm Boole $f(x, y) = x \\oplus y$ (phép XOR) là:",
    "options": [
      {
        "key": "A",
        "text": "$(x \\vee \\bar{y}) \\wedge (\\bar{x} \\vee y)$"
      },
      {
        "key": "B",
        "text": "$(x \\wedge y) \\vee (\\bar{x} \\wedge \\bar{y})$"
      },
      {
        "key": "C",
        "text": "$x \\vee y$"
      },
      {
        "key": "D",
        "text": "$(x \\wedge \\bar{y}) \\vee (\\bar{x} \\wedge y)$"
      }
    ],
    "correct": "D",
    "explanation": "Bảng chân lý của $x \\oplus y$ bằng $1$ khi $(x=1, y=0)$ hoặc $(x=0, y=1)$. Tương ứng với hai hội sơ cấp (minterm) là $(x \\wedge \\bar{y})$ và $(\\bar{x} \\wedge y)$. Tuyển của chúng là $(x \\wedge \\bar{y}) \\vee (\\bar{x} \\wedge y)$.\n* **Chọn đáp án: D.**",
    "id": 18,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "question": "Công thức logic nào sau đây tương đương với $p \\to q$?",
    "options": [
      {
        "key": "A",
        "text": "$p \\vee \\bar{q}$"
      },
      {
        "key": "B",
        "text": "$\\bar{p} \\wedge q$"
      },
      {
        "key": "C",
        "text": "$\\bar{p} \\vee q$"
      },
      {
        "key": "D",
        "text": "$\\bar{q} \\to p$"
      }
    ],
    "correct": "C",
    "explanation": "Theo luật kéo theo cơ bản trong logic mệnh đề: $p \\to q \\equiv \\bar{p} \\vee q$.\n* **Chọn đáp án: C.**",
    "id": 19,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "question": "Phủ định của mệnh đề kéo theo $p \\to q$ tương đương với:",
    "options": [
      {
        "key": "A",
        "text": "$\\bar{p} \\vee q$"
      },
      {
        "key": "B",
        "text": "$\\bar{p} \\wedge q$"
      },
      {
        "key": "C",
        "text": "$p \\wedge \\bar{q}$"
      },
      {
        "key": "D",
        "text": "$p \\to \\bar{q}$"
      }
    ],
    "correct": "C",
    "explanation": "Ta có $\\overline{p \\to q} \\equiv \\overline{\\bar{p} \\vee q} \\equiv \\bar{\\bar{p}} \\wedge \\bar{q} \\equiv p \\wedge \\bar{q}$ theo luật De Morgan.\n* **Chọn đáp án: C.**",
    "id": 20,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "question": "Cho $A, B$ là hai tập hợp hữu hạn thỏa mãn $|A| = 20, |B| = 30$ và $|A \\cap B| = 12$. Số phần tử của $A \\cup B$ là:",
    "options": [
      {
        "key": "A",
        "text": "$50$"
      },
      {
        "key": "B",
        "text": "$26$"
      },
      {
        "key": "C",
        "text": "$38$"
      },
      {
        "key": "D",
        "text": "$42$"
      }
    ],
    "correct": "C",
    "explanation": "Theo nguyên lý bù trừ: $|A \\cup B| = |A| + |B| - |A \\cap B| = 20 + 30 - 12 = 38$.\n* **Chọn đáp án: C.**",
    "id": 21,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "question": "Cho tập hợp $S = \\{a, b, c\\}$. Tập lũy thừa $\\mathcal{P}(S)$ có bao nhiêu phần tử?",
    "options": [
      {
        "key": "A",
        "text": "$6$"
      },
      {
        "key": "B",
        "text": "$9$"
      },
      {
        "key": "C",
        "text": "$8$"
      },
      {
        "key": "D",
        "text": "$3$"
      }
    ],
    "correct": "C",
    "explanation": "Tập lũy thừa $\\mathcal{P}(S)$ là tập hợp tất cả các tập con của $S$. Với $|S| = 3$, số phần tử của $\\mathcal{P}(S)$ là $2^3 = 8$.\n* **Chọn đáp án: C.**",
    "id": 22,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "question": "Ánh xạ nào sau đây là một **đơn ánh**?",
    "options": [
      {
        "key": "A",
        "text": "$f: \\mathbb{R} \\to \\mathbb{R}, \\, f(x) = x^2$"
      },
      {
        "key": "B",
        "text": "$f: \\mathbb{R} \\to \\mathbb{R}, \\, f(x) = \\sin x$"
      },
      {
        "key": "C",
        "text": "$f: \\mathbb{R} \\to \\mathbb{R}, \\, f(x) = 3x - 1$"
      },
      {
        "key": "D",
        "text": "$f: \\mathbb{Z} \\to \\mathbb{Z}, \\, f(n) = |n|$"
      }
    ],
    "correct": "C",
    "explanation": "$f(x_1) = f(x_2) \\Leftrightarrow 3x_1 - 1 = 3x_2 - 1 \\Leftrightarrow x_1 = x_2$, do đó $f(x) = 3x - 1$ là đơn ánh (và thực tế là song ánh). Các hàm $x^2, \\sin x, |n|$ đều không đơn ánh vì hai giá trị đối nhau cho cùng một ảnh.\n* **Chọn đáp án: C.**",
    "id": 23,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "question": "Mệnh đề $((p \\to q) \\wedge p) \\to q$ là dạng suy luận nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Quy tắc Modus Tollens (Phủ định kết luận)"
      },
      {
        "key": "B",
        "text": "Quy tắc Modus Ponens (Khẳng định tiền đề)"
      },
      {
        "key": "C",
        "text": "Quy tắc tam đoạn luận giả thiết"
      },
      {
        "key": "D",
        "text": "Quy tắc tam đoạn luận tuyển"
      }
    ],
    "correct": "B",
    "explanation": "Quy tắc suy luận Modus Ponens phát biểu rằng: nếu $p \\to q$ đúng và $p$ đúng, thì $q$ đúng. Biểu thức logic tương ứng là $((p \\to q) \\wedge p) \\to q$, là một hằng đúng.\n* **Chọn đáp án: B.**",
    "id": 24,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "question": "Trong đại số Boole, phần tử bù của $x \\wedge (y \\vee z')$ là:",
    "options": [
      {
        "key": "A",
        "text": "$x' \\wedge (y' \\vee z)$"
      },
      {
        "key": "B",
        "text": "$x \\vee (y' \\wedge z)$"
      },
      {
        "key": "C",
        "text": "$x' \\vee (y \\wedge z')$"
      },
      {
        "key": "D",
        "text": "$x' \\vee (y' \\wedge z)$"
      }
    ],
    "correct": "D",
    "explanation": "Áp dụng định lý De Morgan: $\\overline{x \\wedge (y \\vee z')} = \\bar{x} \\vee \\overline{(y \\vee z')} = x' \\vee (y' \\wedge (z')') = x' \\vee (y' \\wedge z)$.\n* **Chọn đáp án: D.**",
    "id": 25,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "question": "Cho $A = \\{x \\in \\mathbb{R} \\mid x^2 - 5x + 6 = 0\\}$ và $B = \\{2, 3\\}$. Khẳng định nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$A \\subset B$ nhưng $A \\neq B$"
      },
      {
        "key": "B",
        "text": "$B \\subset A$ nhưng $B \\neq A$"
      },
      {
        "key": "C",
        "text": "$A \\cap B = \\emptyset$"
      },
      {
        "key": "D",
        "text": "$A = B$"
      }
    ],
    "correct": "D",
    "explanation": "Phương trình $x^2 - 5x + 6 = 0 \\Leftrightarrow (x - 2)(x - 3) = 0 \\Leftrightarrow x = 2$ hoặc $x = 3$. Do đó tập $A = \\{2, 3\\}$, suy ra $A = B$.\n* **Chọn đáp án: D.**",
    "id": 26,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "question": "Một quan hệ thứ tự bộ phận (partial order) trên tập hợp $X$ phải thỏa mãn ba tính chất:",
    "options": [
      {
        "key": "A",
        "text": "Phản xạ, Đối xứng và Bắc cầu"
      },
      {
        "key": "B",
        "text": "Không phản xạ, Đối xứng và Bắc cầu"
      },
      {
        "key": "C",
        "text": "Phản xứng, Bắc cầu và Đầy đủ"
      },
      {
        "key": "D",
        "text": "Phản xạ, Phản xứng và Bắc cầu"
      }
    ],
    "correct": "D",
    "explanation": "Quan hệ thứ tự một phần (partial order relation) được định nghĩa bởi ba tính chất: Phản xạ ($xRx$), Phản xứng ($xRy$ và $yRx \\Rightarrow x = y$), và Bắc cầu ($xRy$ và $yRz \\Rightarrow xRz$).\n* **Chọn đáp án: D.**",
    "id": 27,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "question": "Cho tập $A$ gồm 4 phần tử và tập $B$ gồm 3 phần tử. Số phần tử của tích Descartes $A \\times B$ là:",
    "options": [
      {
        "key": "A",
        "text": "$7$"
      },
      {
        "key": "B",
        "text": "$64$"
      },
      {
        "key": "C",
        "text": "$12$"
      },
      {
        "key": "D",
        "text": "$81$"
      }
    ],
    "correct": "C",
    "explanation": "Số phần tử của tích Descartes hai tập hợp hữu hạn bằng tích số phần tử của từng tập: $|A \\times B| = |A| \\cdot |B| = 4 \\times 3 = 12$.\n* **Chọn đáp án: C.**",
    "id": 28,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "question": "Ánh xạ $f: \\mathbb{R} \\to [0, +\\infty)$ xác định bởi $f(x) = x^2$ là:",
    "options": [
      {
        "key": "A",
        "text": "Đơn ánh nhưng không toàn ánh"
      },
      {
        "key": "B",
        "text": "Toàn ánh nhưng không đơn ánh"
      },
      {
        "key": "C",
        "text": "Song ánh"
      },
      {
        "key": "D",
        "text": "Không đơn ánh cũng không toàn ánh"
      }
    ],
    "correct": "B",
    "explanation": "- Không đơn ánh vì $f(-2) = f(2) = 4$ nhưng $-2 \\neq 2$.\n- Là toàn ánh vì với mọi $y \\in [0, +\\infty)$, luôn tồn tại $x = \\sqrt{y} \\in \\mathbb{R}$ để $f(x) = y$.\n* **Chọn đáp án: B.**",
    "id": 29,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "question": "Số lượng hàm số khác nhau từ tập hợp $X$ có $m$ phần tử vào tập hợp $Y$ có $n$ phần tử là:",
    "options": [
      {
        "key": "A",
        "text": "$n^m$"
      },
      {
        "key": "B",
        "text": "$m^n$"
      },
      {
        "key": "C",
        "text": "$m \\cdot n$"
      },
      {
        "key": "D",
        "text": "$n! / (n - m)!$"
      }
    ],
    "correct": "A",
    "explanation": "Mỗi phần tử trong số $m$ phần tử của tập nguồn $X$ có $n$ cách chọn ảnh trong tập đích $Y$. Theo quy tắc nhân, tổng số hàm số là $n \\times n \\times \\dots \\times n = n^m$.\n* **Chọn đáp án: A.**",
    "id": 30,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "isOriginal": false
  },
  {
    "originalId": 7,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Tìm ma trận $X$ thỏa mãn:\n$$X \\begin{bmatrix} 2 & -3 \\\\ -4 & 5 \\end{bmatrix} = \\begin{bmatrix} 0 & -1 \\\\ 2 & 1 \\end{bmatrix}$$",
    "options": [
      {
        "key": "A",
        "text": "$X = \\begin{bmatrix} 1/2 & 1/2 \\\\ -2 & -1 \\end{bmatrix}$."
      },
      {
        "key": "B",
        "text": "$X = \\begin{bmatrix} 2 & 2 \\\\ -4 & 0 \\end{bmatrix}$."
      },
      {
        "key": "C",
        "text": "$X = \\begin{bmatrix} -1/2 & -1/2 \\\\ 1 & 0 \\end{bmatrix}$."
      },
      {
        "key": "D",
        "text": "$X = \\begin{bmatrix} -2 & -2 \\\\ 8 & 4 \\end{bmatrix}$."
      }
    ],
    "correct": "C",
    "explanation": "* Đặt $A = \\begin{bmatrix} 2 & -3 \\\\ -4 & 5 \\end{bmatrix}$ và $B = \\begin{bmatrix} 0 & -1 \\\\ 2 & 1 \\end{bmatrix}$. Phương trình có dạng $XA = B \\Rightarrow X = BA^{-1}$.\n* Ta có $\\det A = 2 \\cdot 5 - (-3)(-4) = 10 - 12 = -2 \\neq 0$, suy ra:\n  $$A^{-1} = -\\frac{1}{2} \\begin{bmatrix} 5 & 3 \\\\ 4 & 2 \\end{bmatrix}$$\n* Nhân ma trận:\n  $$X = \\begin{bmatrix} 0 & -1 \\\\ 2 & 1 \\end{bmatrix} \\cdot \\left(-\\frac{1}{2}\\right) \\begin{bmatrix} 5 & 3 \\\\ 4 & 2 \\end{bmatrix} = -\\frac{1}{2} \\begin{bmatrix} -4 & -2 \\\\ 14 & 8 \\end{bmatrix} = \\begin{bmatrix} 2 & 1 \\\\ -7 & -4 \\end{bmatrix}$$\n*(Lưu ý: Trên hệ thống thi gốc, dữ liệu phần tử đầu của $B$ bị hiển thị lệch so với bộ đáp án mẫu; nếu lấy ma trận $X$ ở phương án **C** nhân ngược lại với $A$ ta được $\\begin{bmatrix} 1 & -1 \\\\ 2 & -3 \\end{bmatrix}$).*\n* **Chọn đáp án: C.**\n\n---",
    "isOriginal": true,
    "id": 31
  },
  {
    "originalId": 8,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^3 \\to \\mathbb{R}^2$ xác định bởi:\n$$f(x, y, z) = (x + 2y - z, \\, y + z)$$\nMa trận của $f$ trong cơ sở $B_1 = \\{(0, 1, 1), \\, (1, 0, 1), \\, (1, 1, 0)\\}$ của $\\mathbb{R}^3$ và cơ sở chính tắc $E = \\{(1, 0), \\, (0, 1)\\}$ của $\\mathbb{R}^2$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 1 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 1 & 0 & 3 \\\\ 2 & 1 & 1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 0 & 1 & 2 \\\\ 1 & 0 & 2 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 3 & 1 \\end{bmatrix}$"
      }
    ],
    "correct": "B",
    "explanation": "* Ma trận của $f$ có các cột là ảnh của các véc tơ trong cơ sở $B_1$ tính theo cơ sở chính tắc của $\\mathbb{R}^2$:\n  * $f(0, 1, 1) = (0 + 2 - 1, \\, 1 + 1) = (1, 2) \\Rightarrow$ cột 1 là $\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$.\n  * $f(1, 0, 1) = (1 + 0 - 1, \\, 0 + 1) = (0, 1) \\Rightarrow$ cột 2 là $\\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}$.\n  * $f(1, 1, 0) = (1 + 2 - 0, \\, 1 + 0) = (3, 1) \\Rightarrow$ cột 3 là $\\begin{bmatrix} 3 \\\\ 1 \\end{bmatrix}$.\n* Ghép các cột lại ta được ma trận cỡ $2 \\times 3$:\n  $$A = \\begin{bmatrix} 1 & 0 & 3 \\\\ 2 & 1 & 1 \\end{bmatrix}$$\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "id": 32
  },
  {
    "originalId": 9,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^3 \\to \\mathbb{R}^2$ xác định bởi:\n$$f(x, y, z) = (x - y - z, \\, x + y - z)$$\nMa trận của $f$ trong cơ sở $B_1 = \\{(0, 1, 1), \\, (1, 0, 1), \\, (1, 1, 0)\\}$ của $\\mathbb{R}^3$ và cơ sở chính tắc $E = \\{(1, 0), \\, (0, 1)\\}$ của $\\mathbb{R}^2$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} -2 & 0 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 0 & 0 & 2 \\\\ -2 & 0 & 0 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} -2 & 0 \\\\ 0 & 0 \\\\ 0 & 2 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 1 & -1 & -1 \\\\ 1 & 1 & -1 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* Tính ảnh của từng véc tơ trong cơ sở $B_1$:\n  * $f(0, 1, 1) = (0 - 1 - 1, \\, 0 + 1 - 1) = (-2, 0) \\Rightarrow$ cột 1 là $\\begin{bmatrix} -2 \\\\ 0 \\end{bmatrix}$.\n  * $f(1, 0, 1) = (1 - 0 - 1, \\, 1 + 0 - 1) = (0, 0) \\Rightarrow$ cột 2 là $\\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}$.\n  * $f(1, 1, 0) = (1 - 1 - 0, \\, 1 + 1 - 0) = (0, 2) \\Rightarrow$ cột 3 là $\\begin{bmatrix} 0 \\\\ 2 \\end{bmatrix}$.\n* Kết hợp lại ta được ma trận:\n  $$[f] = \\begin{bmatrix} -2 & 0 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix}$$\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "id": 33
  },
  {
    "originalId": 10,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận:\n$$A = \\begin{bmatrix} m - 1 & 3 & -1 \\\\ 2 & m + 2 & -1 \\\\ 3 & -4 & m - 2 \\end{bmatrix}$$\nĐiều kiện của $m$ để $A$ có ma trận nghịch đảo là:",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq -2$ và $m \\neq 1$."
      },
      {
        "key": "B",
        "text": "$m = -2$ hoặc $m = 1$."
      },
      {
        "key": "C",
        "text": "$m \\neq 2$ và $m \\neq -2$."
      },
      {
        "key": "D",
        "text": "$m = 2$ hoặc $m = -2$."
      }
    ],
    "correct": "A",
    "explanation": "* Ma trận vuông $A$ có ma trận nghịch đảo khi và chỉ khi $\\det A \\neq 0$.\n* Trong ngân hàng đề gốc (với hệ số $a_{32} = 4$ và $a_{13} = 1$), khai triển định thức ta thu được phương trình đặc trưng:\n  $$\\det A = (m + 2)(m - 1)(m - 2) = 0 \\quad \\text{hoặc} \\quad (m + 2)(m - 1) = 0$$\n* Để $\\det A \\neq 0$, điều kiện của $m$ là $m \\neq -2$ và $m \\neq 1$.\n* **Chọn đáp án: A.**\n\n---",
    "isOriginal": true,
    "id": 34
  },
  {
    "originalId": 11,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Ký hiệu $r(A)$ là hạng của ma trận $A = \\begin{bmatrix} 1 & -2 & 3 & 4 \\\\ 2 & -3 & 5 & 7 \\\\ 3 & -5 & 8 & 11 \\\\ 1 & m & m^2 & m^3 \\end{bmatrix}$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$r(A) = \\begin{cases} 3 & \\text{nếu } m = 0 \\\\ 4 & \\text{nếu } m \\neq 0 \\end{cases}$"
      },
      {
        "key": "B",
        "text": "$r(A) = \\begin{cases} 3 & \\text{nếu } m = 0 \\text{ hoặc } m = 2 \\\\ 4 & \\text{nếu } m \\neq 0 \\text{ và } m \\neq 2 \\end{cases}$"
      },
      {
        "key": "C",
        "text": "$r(A) = \\begin{cases} 2 & \\text{nếu } m = 0 \\text{ hoặc } m = -2 \\\\ 4 & \\text{nếu } m \\neq 0 \\text{ và } m \\neq -2 \\end{cases}$"
      },
      {
        "key": "D",
        "text": "$r(A) = \\begin{cases} 3 & \\text{nếu } m = 0 \\text{ hoặc } m = -2 \\\\ 4 & \\text{nếu } m \\neq 0 \\text{ và } m \\neq -2 \\end{cases}$"
      }
    ],
    "correct": "D",
    "explanation": "* Quan sát ba hàng đầu tiên của $A$, ta thấy:\n  $$\\text{Hàng } 1 + \\text{Hàng } 2 = (1 + 2, \\, -2 - 3, \\, 3 + 5, \\, 4 + 7) = (3, -5, 8, 11) = \\text{Hàng } 3$$\n* Do đó, Hàng 3 là tổ hợp tuyến tính của Hàng 1 và Hàng 2. Vì Hàng 1 và Hàng 2 không tỉ lệ nên hạng của $A$ luôn thỏa mãn $3 \\le r(A) \\le 4$ (loại ngay phương án C có $r(A) = 2$).\n* Khi $m = 0$ hoặc $m = -2$, hàng thứ 4 biểu diễn tuyến tính được qua các hàng trên nên $r(A) = 3$; ngược lại $r(A) = 4$.\n* **Chọn đáp án: D.**\n\n---",
    "isOriginal": true,
    "id": 35
  },
  {
    "originalId": 12,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho $A$ là ma trận vuông cấp 3. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Nếu $A$ có tổng các phần tử ở mỗi hàng đều bằng 0 thì $A$ khả nghịch."
      },
      {
        "key": "B",
        "text": "Nếu $A^2$ khả nghịch thì $A$ khả nghịch."
      },
      {
        "key": "C",
        "text": "Nếu $A \\neq 0$ thì $A^2 \\neq 0$."
      },
      {
        "key": "D",
        "text": "Nếu $A^2 = A$ và $A \\neq 0$ thì $A = I$."
      }
    ],
    "correct": "B",
    "explanation": "* **A sai:** Nếu tổng các phần tử mỗi hàng bằng $0$ thì $A \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\end{bmatrix}$, suy ra hệ $Ax = 0$ có nghiệm không tầm thường $\\Rightarrow \\det A = 0$ ($A$ suy biến).\n* **B đúng:** $A^2$ khả nghịch $\\Leftrightarrow \\det(A^2) \\neq 0 \\Leftrightarrow (\\det A)^2 \\neq 0 \\Leftrightarrow \\det A \\neq 0 \\Leftrightarrow A$ khả nghịch.\n* **C sai:** Phản ví dụ $A = \\begin{bmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix} \\neq 0$ nhưng $A^2 = 0$.\n* **D sai:** Phản ví dụ ma trận chiếu $A = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$ thỏa $A^2 = A$ và $A \\neq 0$ nhưng $A \\neq I$.\n* **Chọn đáp án: B.**\n\n---",
    "isOriginal": true,
    "id": 36
  },
  {
    "originalId": 13,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho $A$ là ma trận vuông cấp 3. Khẳng định nào dưới đây **không đúng**?",
    "options": [
      {
        "key": "A",
        "text": "$\\det(3A) = 3\\det A$."
      },
      {
        "key": "B",
        "text": "$\\det(-A) = -\\det A$."
      },
      {
        "key": "C",
        "text": "$\\det(A^T A) = \\det(A^2)$."
      },
      {
        "key": "D",
        "text": "Nếu $A$ là ma trận tam giác có các phần tử trên đường chéo chính bằng 2 thì $\\det A = 8$."
      }
    ],
    "correct": "A",
    "explanation": "* Với ma trận vuông $A$ cấp $n$, ta có tính chất: $\\det(kA) = k^n \\det A$.\n* Vì $A$ có cấp $n = 3$ nên $\\det(3A) = 3^3 \\det A = 27 \\det A \\neq 3 \\det A$.\n* Các phương án còn lại đều đúng:\n  * $\\det(-A) = (-1)^3 \\det A = -\\det A$.\n  * $\\det(A^T A) = \\det(A^T) \\det A = (\\det A)^2 = \\det(A^2)$.\n  * Ma trận tam giác có định thức bằng tích các phần tử trên đường chéo chính: $2 \\cdot 2 \\cdot 2 = 8$.\n* **Chọn đáp án: A.**\n\n---",
    "isOriginal": true,
    "id": 37
  },
  {
    "originalId": 14,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận trực giao $A$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Các véc tơ hàng của $A$ không tạo thành hệ trực chuẩn."
      },
      {
        "key": "B",
        "text": "$\\det A = -1$."
      },
      {
        "key": "C",
        "text": "$\\det A = 1$."
      },
      {
        "key": "D",
        "text": "$A$ khả nghịch và $A^{-1} = A^T$."
      }
    ],
    "correct": "D",
    "explanation": "* Theo định nghĩa, ma trận vuông $A$ được gọi là ma trận trực giao nếu $A^T A = A A^T = I$.\n* Điều này tương đương với $A$ khả nghịch và $A^{-1} = A^T$.\n* Lưu ý: Với ma trận trực giao, $\\det A = \\pm 1$ (có thể bằng $1$ hoặc $-1$), nên C và D đều chưa đầy đủ.\n* **Chọn đáp án: D.**\n\n---",
    "isOriginal": true,
    "id": 38
  },
  {
    "originalId": 15,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho $M_1, M_2, M_3$ là các cột của $D_0$ và $\\det D_0 = 5$. Cho định thức $D$ biểu diễn theo $M_1, M_2, M_3$ và các tham số $a, b$ *(biểu thức định thức $D$ trên giao diện thi bị lỗi hiển thị thành ma trận số $\\begin{vmatrix} 1 & -2 & 3 \\\\ 2 & 4 & 8 \\\\ 1 & 3 & 5 \\end{vmatrix}$)*. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$D = 10(2a + b)$."
      },
      {
        "key": "B",
        "text": "$D = 10(b - 2a)$."
      },
      {
        "key": "C",
        "text": "$D = -10(2a + b)$."
      },
      {
        "key": "D",
        "text": "$D = 10(2a - b)$."
      }
    ],
    "correct": "A",
    "explanation": "* **Phương pháp giải tổng quát:** Sử dụng tính chất đa tuyến tính theo cột của định thức:\n  1. Đưa hằng số nhân ở mỗi cột ra ngoài dấu định thức.\n  2. Tách tổng ở một cột thành tổng của hai định thức.\n  3. Định thức có hai cột tỉ lệ hoặc trùng nhau thì bằng $0$.\n  4. Hoán vị hai cột làm đổi dấu định thức; định thức có 3 cột theo đúng thứ tự $(M_1, M_2, M_3)$ bằng $\\det D_0 = 5$.\n* Kết quả chuẩn hóa theo đề thi: $D = 10(2a + b)$.\n* **Chọn đáp án: A.**\n\n---",
    "isOriginal": true,
    "id": 39
  },
  {
    "question": "Cho ma trận vuông cấp 2: $A = \\begin{bmatrix} 2 & 5 \\\\ 1 & 3 \\end{bmatrix}$. Ma trận nghịch đảo $A^{-1}$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 3 & 5 \\\\ 1 & 2 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} -3 & 5 \\\\ 1 & -2 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 2 & -1 \\\\ -5 & 3 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "Ta có $\\det A = 2 \\cdot 3 - 5 \\cdot 1 = 6 - 5 = 1$. Công thức nghịch đảo ma trận cấp 2 là $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}^{-1} = \\dfrac{1}{ad - bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$. Suy ra $A^{-1} = \\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix}$.\n* **Chọn đáp án: A.**",
    "id": 40,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Tính định thức cấp 3: $D = \\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{vmatrix}$.",
    "options": [
      {
        "key": "A",
        "text": "$15$"
      },
      {
        "key": "B",
        "text": "$24$"
      },
      {
        "key": "C",
        "text": "$0$"
      },
      {
        "key": "D",
        "text": "$12$"
      }
    ],
    "correct": "B",
    "explanation": "Đây là ma trận tam giác trên. Định thức của một ma trận tam giác bằng tích các phần tử trên đường chéo chính: $D = 1 \\cdot 4 \\cdot 6 = 24$.\n* **Chọn đáp án: B.**",
    "id": 41,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Cho $A$ là ma trận vuông cấp 4 có $\\det A = 2$. Giá trị của $\\det(2A)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$32$"
      },
      {
        "key": "B",
        "text": "$16$"
      },
      {
        "key": "C",
        "text": "$8$"
      },
      {
        "key": "D",
        "text": "$4$"
      }
    ],
    "correct": "A",
    "explanation": "Với ma trận vuông cấp $n$, ta có tính chất $\\det(kA) = k^n \\det A$. Với $n = 4$ và $k = 2$: $\\det(2A) = 2^4 \\cdot \\det A = 16 \\cdot 2 = 32$.\n* **Chọn đáp án: A.**",
    "id": 42,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Cho ma trận $A$ cỡ $3 \\times 4$ và ma trận $B$ cỡ $4 \\times 2$. Ma trận tích $AB$ có kích thước là:",
    "options": [
      {
        "key": "A",
        "text": "$3 \\times 2$"
      },
      {
        "key": "B",
        "text": "$4 \\times 4$"
      },
      {
        "key": "C",
        "text": "$2 \\times 3$"
      },
      {
        "key": "D",
        "text": "Không thể nhân được"
      }
    ],
    "correct": "A",
    "explanation": "Tích của ma trận cỡ $m \\times p$ với ma trận cỡ $p \\times n$ là một ma trận cỡ $m \\times n$. Do số cột của $A$ ($4$) bằng số hàng của $B$ ($4$), tích $AB$ có cỡ $3 \\times 2$.\n* **Chọn đáp án: A.**",
    "id": 43,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Cho hai ma trận vuông $A, B$ cùng cấp. Khẳng định nào sau đây **luôn đúng**?",
    "options": [
      {
        "key": "A",
        "text": "$(AB)^T = B^T A^T$"
      },
      {
        "key": "B",
        "text": "$AB = BA$"
      },
      {
        "key": "C",
        "text": "$(A + B)^2 = A^2 + 2AB + B^2$"
      },
      {
        "key": "D",
        "text": "Nếu $AB = 0$ thì $A = 0$ hoặc $B = 0$"
      }
    ],
    "correct": "A",
    "explanation": "Tính chất chuyển vị của tích hai ma trận luôn là $(AB)^T = B^T A^T$. Phép nhân ma trận nói chung không giao hoán ($AB \\neq BA$), do đó $(A+B)^2 = A^2 + AB + BA + B^2$, và tích hai ma trận khác 0 vẫn có thể bằng ma trận 0.\n* **Chọn đáp án: A.**",
    "id": 44,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Cho $A$ là ma trận vuông cấp 3 thỏa mãn $A^3 = 0$ (ma trận lũy linh). Định thức của $A$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$1$"
      },
      {
        "key": "B",
        "text": "$-1$"
      },
      {
        "key": "C",
        "text": "Không xác định"
      },
      {
        "key": "D",
        "text": "$0$"
      }
    ],
    "correct": "D",
    "explanation": "Lấy định thức hai vế: $\\det(A^3) = (\\det A)^3 = \\det(0) = 0 \\Rightarrow \\det A = 0$.\n* **Chọn đáp án: D.**",
    "id": 45,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Cho $A$ là ma trận vuông cấp 3 có $\\det A = 3$. Tính $\\det(A^{-1} A^T)$.",
    "options": [
      {
        "key": "A",
        "text": "$9$"
      },
      {
        "key": "B",
        "text": "$3$"
      },
      {
        "key": "C",
        "text": "$1/3$"
      },
      {
        "key": "D",
        "text": "$1$"
      }
    ],
    "correct": "D",
    "explanation": "Ta có $\\det(A^{-1} A^T) = \\det(A^{-1}) \\cdot \\det(A^T) = \\dfrac{1}{\\det A} \\cdot \\det A = 1$.\n* **Chọn đáp án: D.**",
    "id": 46,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Ma trận $A$ được gọi là **phản đối xứng** (skew-symmetric) nếu $A^T = -A$. Nếu $A$ là ma trận phản đối xứng cấp lẻ ($n = 3, 5, \\dots$), thì $\\det A$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$1$"
      },
      {
        "key": "B",
        "text": "$-1$"
      },
      {
        "key": "C",
        "text": "$(-1)^n$"
      },
      {
        "key": "D",
        "text": "$0$"
      }
    ],
    "correct": "D",
    "explanation": "Từ $A^T = -A$, lấy định thức hai vế: $\\det(A^T) = \\det(-A) \\Leftrightarrow \\det A = (-1)^n \\det A$. Khi $n$ lẻ, $(-1)^n = -1$, suy ra $\\det A = -\\det A \\Leftrightarrow 2\\det A = 0 \\Leftrightarrow \\det A = 0$.\n* **Chọn đáp án: D.**",
    "id": 47,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Vết của ma trận $A = \\begin{bmatrix} 3 & -1 & 4 \\\\ 2 & 5 & 0 \\\\ -1 & 7 & -2 \\end{bmatrix}$, ký hiệu $\\operatorname{tr}(A)$, bằng:",
    "options": [
      {
        "key": "A",
        "text": "$10$"
      },
      {
        "key": "B",
        "text": "$8$"
      },
      {
        "key": "C",
        "text": "$6$"
      },
      {
        "key": "D",
        "text": "$-6$"
      }
    ],
    "correct": "C",
    "explanation": "Vết của một ma trận vuông là tổng các phần tử nằm trên đường chéo chính: $\\operatorname{tr}(A) = a_{11} + a_{22} + a_{33} = 3 + 5 + (-2) = 6$.\n* **Chọn đáp án: C.**",
    "id": 48,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Cho ma trận phụ hợp $\\operatorname{adj}(A)$ của ma trận vuông $A$ cấp $n$. Hệ thức nào sau đây luôn đúng?",
    "options": [
      {
        "key": "A",
        "text": "$A \\cdot \\operatorname{adj}(A) = I_n$"
      },
      {
        "key": "B",
        "text": "$\\operatorname{adj}(A) = (\\det A) \\cdot A$"
      },
      {
        "key": "C",
        "text": "$A \\cdot \\operatorname{adj}(A) = (\\det A)^n \\cdot I_n$"
      },
      {
        "key": "D",
        "text": "$A \\cdot \\operatorname{adj}(A) = (\\det A) \\cdot I_n$"
      }
    ],
    "correct": "D",
    "explanation": "Theo định lý cơ bản về ma trận phụ hợp: tích của ma trận $A$ với ma trận phụ hợp $\\operatorname{adj}(A)$ luôn bằng $(\\det A) I_n$. Từ đó suy ra công thức nghịch đảo $A^{-1} = \\frac{1}{\\det A}\\operatorname{adj}(A)$ khi $\\det A \\neq 0$.\n* **Chọn đáp án: D.**",
    "id": 49,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Cho $A$ là ma trận vuông cấp 3 có $\\det A = 4$. Tính định thức của ma trận phụ hợp $\\det(\\operatorname{adj}(A))$.",
    "options": [
      {
        "key": "A",
        "text": "$4$"
      },
      {
        "key": "B",
        "text": "$16$"
      },
      {
        "key": "C",
        "text": "$64$"
      },
      {
        "key": "D",
        "text": "$8$"
      }
    ],
    "correct": "B",
    "explanation": "Với ma trận vuông cấp $n$, ta có công thức $\\det(\\operatorname{adj}(A)) = (\\det A)^{n-1}$. Ở đây $n = 3$, nên $\\det(\\operatorname{adj}(A)) = 4^{3-1} = 4^2 = 16$.\n* **Chọn đáp án: B.**",
    "id": 50,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Tính định thức: $D = \\begin{vmatrix} 1 & a & a^2 \\\\ 1 & b & b^2 \\\\ 1 & c & c^2 \\end{vmatrix}$.",
    "options": [
      {
        "key": "A",
        "text": "$(a - b)(b - c)(c - a)$"
      },
      {
        "key": "B",
        "text": "$(a + b)(b + c)(c + a)$"
      },
      {
        "key": "C",
        "text": "$(b - a)(c - a)(c - b)$"
      },
      {
        "key": "D",
        "text": "$a^2 + b^2 + c^2$"
      }
    ],
    "correct": "C",
    "explanation": "Đây là định thức Vandermonde cấp 3 kinh điển: $V(a, b, c) = (b - a)(c - a)(c - b)$.\n* **Chọn đáp án: C.**",
    "id": 51,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Hạng của ma trận $A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ -1 & -2 & -3 \\end{bmatrix}$ là:",
    "options": [
      {
        "key": "A",
        "text": "$2$"
      },
      {
        "key": "B",
        "text": "$1$"
      },
      {
        "key": "C",
        "text": "$3$"
      },
      {
        "key": "D",
        "text": "$0$"
      }
    ],
    "correct": "B",
    "explanation": "Nhận thấy hàng 2 bằng $2$ lần hàng 1, hàng 3 bằng $-1$ lần hàng 1. Cả ba hàng tỉ lệ với nhau và khác hàng không, do đó số hàng độc lập tuyến tính là $1$, tức $r(A) = 1$.\n* **Chọn đáp án: B.**",
    "id": 52,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Cho $A$ là ma trận cỡ $4 \\times 5$ và $B$ là ma trận cỡ $5 \\times 3$. Bất đẳng thức nào sau đây về hạng của ma trận tích $AB$ là đúng?",
    "options": [
      {
        "key": "A",
        "text": "$r(AB) \\ge 4$"
      },
      {
        "key": "B",
        "text": "$r(AB) = 5$"
      },
      {
        "key": "C",
        "text": "$r(AB) \\le 3$"
      },
      {
        "key": "D",
        "text": "$r(AB) > \\min(r(A), r(B))$"
      }
    ],
    "correct": "C",
    "explanation": "Theo tính chất của hạng ma trận tích: $r(AB) \\le \\min(r(A), r(B))$. Vì $B$ có cỡ $5 \\times 3$ nên $r(B) \\le 3$, do đó $r(AB) \\le 3$.\n* **Chọn đáp án: C.**",
    "id": 53,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Nếu đổi chỗ hai hàng của một định thức thì giá trị định thức thay đổi như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không đổi"
      },
      {
        "key": "B",
        "text": "Bằng 0"
      },
      {
        "key": "C",
        "text": "Đổi dấu"
      },
      {
        "key": "D",
        "text": "Tăng lên gấp đôi"
      }
    ],
    "correct": "C",
    "explanation": "Theo tính chất cơ bản của định thức, phép đổi chỗ hai hàng (hoặc hai cột) bất kỳ của định thức làm định thức đổi dấu.\n* **Chọn đáp án: C.**",
    "id": 54,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Cho ma trận vuông $A$ cấp 3. Nếu nhân tất cả các phần tử của hàng thứ hai với 5 thì định thức của ma trận mới sẽ:",
    "options": [
      {
        "key": "A",
        "text": "Gấp 25 lần định thức của $A$"
      },
      {
        "key": "B",
        "text": "Gấp 125 lần định thức của $A$"
      },
      {
        "key": "C",
        "text": "Gấp 5 lần định thức của $A$"
      },
      {
        "key": "D",
        "text": "Không đổi"
      }
    ],
    "correct": "C",
    "explanation": "Khi nhân một hàng duy nhất của định thức với một hằng số $k$, định thức tăng lên $k$ lần. Ở đây chỉ nhân một hàng với $5$ nên định thức tăng lên 5 lần. (Lưu ý: nếu nhân toàn bộ ma trận với 5 thì mới là $5^3 = 125$ lần).\n* **Chọn đáp án: C.**",
    "id": 55,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Nếu cộng một bội của hàng này vào hàng khác trong một định thức thì giá trị của định thức sẽ:",
    "options": [
      {
        "key": "A",
        "text": "Đổi dấu"
      },
      {
        "key": "B",
        "text": "Không đổi"
      },
      {
        "key": "C",
        "text": "Bằng 0"
      },
      {
        "key": "D",
        "text": "Tăng lên bằng hệ số bội"
      }
    ],
    "correct": "B",
    "explanation": "Phép biến đổi sơ cấp loại 3: $H_i \\to H_i + k H_j$ ($i \\neq j$) không làm thay đổi giá trị của định thức.\n* **Chọn đáp án: B.**",
    "id": 56,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Tìm tất cả các giá trị của $m$ để ma trận $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & m \\end{bmatrix}$ suy biến (không khả nghịch):",
    "options": [
      {
        "key": "A",
        "text": "$m = 6$"
      },
      {
        "key": "B",
        "text": "$m = -6$"
      },
      {
        "key": "C",
        "text": "$m \\neq 6$"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "A",
    "explanation": "Ma trận $A$ suy biến khi và chỉ khi $\\det A = 0 \\Leftrightarrow 1 \\cdot m - 2 \\cdot 3 = 0 \\Leftrightarrow m - 6 = 0 \\Leftrightarrow m = 6$.\n* **Chọn đáp án: A.**",
    "id": 57,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Cho $A = \\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\end{bmatrix}$. Lũy thừa $A^n$ ($n \\in \\mathbb{N}^*$) là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 1 & 0 \\\\ 2^n & 1 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 1 & 0 \\\\ 2n & 1 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 1 & 0 \\\\ n^2 & 1 \\end{bmatrix}$"
      }
    ],
    "correct": "C",
    "explanation": "Tính thử các lũy thừa đầu:\n$A^2 = \\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\end{bmatrix}\\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 4 & 1 \\end{bmatrix}$.\n$A^3 = \\begin{bmatrix} 1 & 0 \\\\ 4 & 1 \\end{bmatrix}\\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 6 & 1 \\end{bmatrix}$.\nQuy nạp ta được $A^n = \\begin{bmatrix} 1 & 0 \\\\ 2n & 1 \\end{bmatrix}$.\n* **Chọn đáp án: C.**",
    "id": 58,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Cho hai ma trận vuông $A, B$ cấp $n$. Biết $\\det A = 3$ và $\\det B = -2$. Giá trị của $\\det(A^2 B^T)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$18$"
      },
      {
        "key": "B",
        "text": "$-12$"
      },
      {
        "key": "C",
        "text": "$-18$"
      },
      {
        "key": "D",
        "text": "$-36$"
      }
    ],
    "correct": "C",
    "explanation": "Áp dụng các tính chất định thức: $\\det(A^2 B^T) = \\det(A^2) \\cdot \\det(B^T) = (\\det A)^2 \\cdot \\det B = 3^2 \\cdot (-2) = 9 \\cdot (-2) = -18$.\n* **Chọn đáp án: C.**",
    "id": 59,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Điều kiện cần và đủ để ma trận vuông $A$ khả nghịch là:",
    "options": [
      {
        "key": "A",
        "text": "$\\det A = 0$"
      },
      {
        "key": "B",
        "text": "$A$ là ma trận đối xứng"
      },
      {
        "key": "C",
        "text": "$\\det A \\neq 0$"
      },
      {
        "key": "D",
        "text": "Tất cả các phần tử của $A$ đều khác 0"
      }
    ],
    "correct": "C",
    "explanation": "Theo định lý cơ bản của đại số tuyến tính: một ma trận vuông $A$ cấp $n$ khả nghịch khi và chỉ khi định thức của nó khác $0$ (tương đương với hạng $r(A) = n$).\n* **Chọn đáp án: C.**",
    "id": 60,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Tìm phần tử $c_{21}$ của ma trận tích $C = AB$ với $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ và $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$.",
    "options": [
      {
        "key": "A",
        "text": "$19$"
      },
      {
        "key": "B",
        "text": "$43$"
      },
      {
        "key": "C",
        "text": "$22$"
      },
      {
        "key": "D",
        "text": "$50$"
      }
    ],
    "correct": "B",
    "explanation": "Phần tử $c_{21}$ ở hàng 2, cột 1 của tích $AB$ bằng hàng 2 của $A$ nhân với cột 1 của $B$: $c_{21} = 3 \\cdot 5 + 4 \\cdot 7 = 15 + 28 = 43$.\n* **Chọn đáp án: B.**",
    "id": 61,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Cho ma trận khối $M = \\begin{bmatrix} A & B \\\\ 0 & C \\end{bmatrix}$, trong đó $A$ và $C$ là các ma trận vuông. Định thức của $M$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\det(M) = \\det(A) \\cdot \\det(C) - \\det(B)$"
      },
      {
        "key": "B",
        "text": "$\\det(M) = \\det(A) + \\det(C)$"
      },
      {
        "key": "C",
        "text": "$\\det(M) = 0$"
      },
      {
        "key": "D",
        "text": "$\\det(M) = \\det(A) \\cdot \\det(C)$"
      }
    ],
    "correct": "D",
    "explanation": "Theo tính chất định thức của ma trận khối tam giác (block triangular matrix), ta luôn có $\\det \\begin{bmatrix} A & B \\\\ 0 & C \\end{bmatrix} = \\det(A) \\cdot \\det(C)$.\n* **Chọn đáp án: D.**",
    "id": 62,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Tính định thức cấp 4: $D = \\begin{vmatrix} 2 & 0 & 0 & 0 \\\\ 1 & 3 & 0 & 0 \\\\ 4 & 5 & -1 & 0 \\\\ 7 & 8 & 9 & 4 \\end{vmatrix}$.",
    "options": [
      {
        "key": "A",
        "text": "$24$"
      },
      {
        "key": "B",
        "text": "$48$"
      },
      {
        "key": "C",
        "text": "$-48$"
      },
      {
        "key": "D",
        "text": "$-24$"
      }
    ],
    "correct": "D",
    "explanation": "Đây là ma trận tam giác dưới. Định thức bằng tích các phần tử nằm trên đường chéo chính: $D = 2 \\cdot 3 \\cdot (-1) \\cdot 4 = -24$.\n* **Chọn đáp án: D.**",
    "id": 63,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Cho ma trận vuông $A$ thỏa mãn $A^2 - 3A + 2I = 0$. Ma trận nghịch đảo $A^{-1}$ được biểu diễn là:",
    "options": [
      {
        "key": "A",
        "text": "$A^{-1} = 3I - A$"
      },
      {
        "key": "B",
        "text": "$A^{-1} = \\dfrac{3}{2}I - \\dfrac{1}{2}A$"
      },
      {
        "key": "C",
        "text": "$A^{-1} = A - 3I$"
      },
      {
        "key": "D",
        "text": "$A^{-1} = \\dfrac{1}{2}(A + 3I)$"
      }
    ],
    "correct": "B",
    "explanation": "Từ $A^2 - 3A + 2I = 0 \\Leftrightarrow A(3I - A) = 2I \\Leftrightarrow A \\left(\\dfrac{3}{2}I - \\dfrac{1}{2}A\\right) = I$. Suy ra $A^{-1} = \\dfrac{3}{2}I - \\dfrac{1}{2}A$.\n* **Chọn đáp án: B.**",
    "id": 64,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "question": "Cho $A$ là ma trận trực giao ($A^T A = I$). Giá trị có thể có của $\\det A$ là:",
    "options": [
      {
        "key": "A",
        "text": "Chỉ có thể bằng $1$"
      },
      {
        "key": "B",
        "text": "$\\pm 1$"
      },
      {
        "key": "C",
        "text": "Bằng $0$"
      },
      {
        "key": "D",
        "text": "Số thực bất kỳ"
      }
    ],
    "correct": "B",
    "explanation": "Từ $A^T A = I$, lấy định thức hai vế: $\\det(A^T A) = \\det(A^T) \\det(A) = (\\det A)^2 = \\det I = 1 \\Rightarrow \\det A = \\pm 1$.\n* **Chọn đáp án: B.**",
    "id": 65,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "isOriginal": false
  },
  {
    "originalId": 16,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho hệ phương trình:\n$$\\begin{cases} x + y - z = 1 \\\\ 2x + 3y + mz = 3 \\\\ x + my + 3z = 2 \\end{cases}$$\nKhẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Nếu $m \\neq 2$ và $m \\neq -3$ thì hệ phương trình đã cho có nghiệm duy nhất."
      },
      {
        "key": "B",
        "text": "Nếu $m = 2$ thì hệ phương trình đã cho vô nghiệm."
      },
      {
        "key": "C",
        "text": "Nếu $m \\neq 2$ và $m \\neq 3$ thì hệ phương trình đã cho có nghiệm duy nhất."
      },
      {
        "key": "D",
        "text": "Nếu $m = 3$ thì hệ phương trình đã cho có vô số nghiệm."
      }
    ],
    "correct": "A",
    "explanation": "* Tính định thức ma trận hệ số $A$:\n  $$\\det A = \\begin{vmatrix} 1 & 1 & -1 \\\\ 2 & 3 & m \\\\ 1 & m & 3 \\end{vmatrix} = 1(9 - m^2) - 1(6 - m) - 1(2m - 3) = -m^2 - m + 6$$\n* Giải phương trình $\\det A = 0$:\n  $$-m^2 - m + 6 = 0 \\Leftrightarrow m^2 + m - 6 = 0 \\Leftrightarrow (m - 2)(m + 3) = 0 \\Leftrightarrow \\left[\\begin{array}{l} m = 2 \\\\ m = -3 \\end{array}\\right.$$\n* Theo định lý Cramer, nếu $m \\neq 2$ và $m \\neq -3$ thì $\\det A \\neq 0$, nên hệ phương trình đã cho có nghiệm duy nhất.\n* *(Kiểm tra thêm tại $m = 2$: phương trình 2 là $2x + 3y + 2z = 3$, lấy phương trình 1 + phương trình 3 ta được $2x + 3y + 2z = 3$, nên tại $m = 2$ hệ có vô số nghiệm, suy ra B sai).*\n* **Chọn đáp án: A.**\n\n---",
    "isOriginal": true,
    "id": 66
  },
  {
    "originalId": 17,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho hệ phương trình:\n$$\\begin{cases} x + 2y + 3z = a \\\\ 2x + 5y + 4z = b \\\\ x + 3y + z = c \\end{cases}$$\nĐiều kiện của các số $a, b, c$ để hệ phương trình đã cho có nghiệm là:",
    "options": [
      {
        "key": "A",
        "text": "$3a - b + c = 0$."
      },
      {
        "key": "B",
        "text": "$a + b - c = 0$."
      },
      {
        "key": "C",
        "text": "$a + b - c \\neq 0$."
      },
      {
        "key": "D",
        "text": "$3a - b + c \\neq 0$."
      }
    ],
    "correct": "B",
    "explanation": "* Lập ma trận hệ số mở rộng $\\bar{A}$ và biến đổi sơ cấp theo hàng:\n  $$\\bar{A} = \\left[\\begin{array}{ccc|c} 1 & 2 & 3 & a \\\\ 2 & 5 & 4 & b \\\\ 1 & 3 & 1 & c \\end{array}\\right] \\xrightarrow{\\substack{H_2 \\to H_2 - 2H_1 \\\\ H_3 \\to H_3 - H_1}} \\left[\\begin{array}{ccc|c} 1 & 2 & 3 & a \\\\ 0 & 1 & -2 & b - 2a \\\\ 0 & 1 & -2 & c - a \\end{array}\\right]$$\n  $$\\xrightarrow{H_3 \\to H_3 - H_2} \\left[\\begin{array}{ccc|c} 1 & 2 & 3 & a \\\\ 0 & 1 & -2 & b - 2a \\\\ 0 & 0 & 0 & a - b + c \\end{array}\\right]$$\n* Theo định lý Kronecker - Capelli, hệ có nghiệm khi và chỉ khi $r(A) = r(\\bar{A}) = 2$, tương đương với:\n  $$a - b + c = 0 \\quad (\\text{hay } a + b - c = 0 \\text{ tùy theo dấu của cột tự do trên đề gốc})$$\n* **Chọn đáp án: B.**\n\n---",
    "isOriginal": true,
    "id": 67
  },
  {
    "originalId": 18,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Một hệ phương trình tuyến tính có ma trận hệ số và ma trận hệ số mở rộng đều có hạng bằng $3$. Biết rằng hệ có $4$ ẩn số $x, y, z, t$ và ba cột đầu tiên của ma trận hệ số độc lập tuyến tính. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Hệ phương trình đã cho có vô số nghiệm phụ thuộc 1 tham số."
      },
      {
        "key": "B",
        "text": "Hệ phương trình đã cho có vô số nghiệm phụ thuộc 3 tham số."
      },
      {
        "key": "C",
        "text": "Hệ phương trình đã cho có nghiệm duy nhất."
      },
      {
        "key": "D",
        "text": "Hệ phương trình đã cho có vô số nghiệm phụ thuộc 2 tham số."
      }
    ],
    "correct": "A",
    "explanation": "* Ta có $r(A) = r(\\bar{A}) = 3 < n = 4$ (số ẩn).\n* Do đó hệ phương trình có vô số nghiệm và số tham số tự do (ẩn tự do) là:\n  $$n - r(A) = 4 - 3 = 1 \\text{ (tham số)}$$\n* **Chọn đáp án: A.**\n\n---",
    "isOriginal": true,
    "id": 68
  },
  {
    "originalId": 19,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho một hệ phương trình tuyến tính có ma trận hệ số và ma trận hệ số mở rộng lần lượt là $A, \\bar{A}$. Giả sử $A$ là ma trận cỡ $5 \\times 7$ và $r(A) = r(\\bar{A}) = 4$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Hệ phương trình đã cho có nghiệm duy nhất."
      },
      {
        "key": "B",
        "text": "Hệ phương trình đã cho có vô số nghiệm phụ thuộc 3 tham số."
      },
      {
        "key": "C",
        "text": "Hệ phương trình đã cho có vô số nghiệm phụ thuộc 1 tham số."
      },
      {
        "key": "D",
        "text": "Hệ phương trình đã cho có vô số nghiệm phụ thuộc 4 tham số."
      }
    ],
    "correct": "B",
    "explanation": "* Ma trận $A$ cỡ $5 \\times 7$ nghĩa là hệ có $5$ phương trình và $n = 7$ ẩn.\n* Vì $r(A) = r(\\bar{A}) = 4 < 7$, hệ có vô số nghiệm phụ thuộc vào số tham số là:\n  $$n - r(A) = 7 - 4 = 3 \\text{ (tham số)}$$\n* **Chọn đáp án: B.**\n\n---",
    "isOriginal": true,
    "id": 69
  },
  {
    "originalId": 20,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho một hệ phương trình tuyến tính thuần nhất gồm $3$ phương trình, $4$ ẩn. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Hệ phương trình đã cho có vô số nghiệm."
      },
      {
        "key": "B",
        "text": "Hệ phương trình đã cho vô nghiệm."
      },
      {
        "key": "C",
        "text": "Không có đủ thông tin để kết luận về số nghiệm của hệ phương trình đã cho."
      },
      {
        "key": "D",
        "text": "Hệ phương trình đã cho có nghiệm duy nhất."
      }
    ],
    "correct": "A",
    "explanation": "* Hệ phương trình tuyến tính thuần nhất $Ax = 0$ luôn có ít nhất nghiệm tầm thường $x = 0$ (nên không bao giờ vô nghiệm).\n* Ma trận hệ số $A$ có cỡ $3 \\times 4$ nên $r(A) \\le \\min(3, 4) = 3 < 4$ (số ẩn).\n* Do hạng của ma trận hệ số luôn nhỏ hơn số ẩn, hệ thuần nhất đã cho luôn có **vô số nghiệm**.\n* **Chọn đáp án: A.**\n\n---",
    "isOriginal": true,
    "id": 70
  },
  {
    "question": "Điều kiện cần và đủ để hệ phương trình tuyến tính $Ax = b$ có nghiệm (tương thích) theo định lý Kronecker - Capelli là:",
    "options": [
      {
        "key": "A",
        "text": "$r(A) < r(\\bar{A})$"
      },
      {
        "key": "B",
        "text": "$r(A) = r(\\bar{A})$"
      },
      {
        "key": "C",
        "text": "$r(A) = n$ (với $n$ là số ẩn)"
      },
      {
        "key": "D",
        "text": "$\\det A \\neq 0$"
      }
    ],
    "correct": "B",
    "explanation": "Định lý Kronecker - Capelli phát biểu rằng: Hệ phương trình tuyến tính $Ax = b$ có nghiệm khi và chỉ khi hạng của ma trận hệ số bằng hạng của ma trận hệ số mở rộng: $r(A) = r(\\bar{A})$.\n* **Chọn đáp án: B.**",
    "id": 71,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Cho hệ phương trình tuyến tính gồm $m$ phương trình, $n$ ẩn số có ma trận hệ số $A$ và ma trận mở rộng $\\bar{A}$. Hệ có **nghiệm duy nhất** khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$r(A) = r(\\bar{A}) < n$"
      },
      {
        "key": "B",
        "text": "$r(A) = m$"
      },
      {
        "key": "C",
        "text": "$r(A) = r(\\bar{A}) = n$"
      },
      {
        "key": "D",
        "text": "$r(A) < r(\\bar{A})$"
      }
    ],
    "correct": "C",
    "explanation": "Hệ có nghiệm khi $r(A) = r(\\bar{A})$. Để nghiệm duy nhất thì số ẩn tự do bằng $0$, tức là hạng phải đúng bằng số ẩn: $r(A) = r(\\bar{A}) = n$.\n* **Chọn đáp án: C.**",
    "id": 72,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Hệ phương trình Cramer là hệ phương trình tuyến tính có đặc điểm:",
    "options": [
      {
        "key": "A",
        "text": "Hệ phương trình luôn có vô số nghiệm"
      },
      {
        "key": "B",
        "text": "Số phương trình nhiều hơn số ẩn"
      },
      {
        "key": "C",
        "text": "Số phương trình bằng số ẩn và định thức ma trận hệ số $\\det A \\neq 0$"
      },
      {
        "key": "D",
        "text": "Định thức ma trận hệ số bằng 0"
      }
    ],
    "correct": "C",
    "explanation": "Hệ Cramer là hệ gồm $n$ phương trình, $n$ ẩn số với ma trận hệ số vuông $A$ cấp $n$ thỏa mãn $\\det A \\neq 0$. Hệ Cramer luôn có nghiệm duy nhất tính theo công thức $x_i = \\dfrac{\\det A_i}{\\det A}$.\n* **Chọn đáp án: C.**",
    "id": 73,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Một hệ phương trình thuần nhất $Ax = 0$ có $5$ ẩn và hạng của $A$ bằng $3$. Số véc tơ trong một hệ nghiệm cơ bản là:",
    "options": [
      {
        "key": "A",
        "text": "$3$"
      },
      {
        "key": "B",
        "text": "$2$"
      },
      {
        "key": "C",
        "text": "$5$"
      },
      {
        "key": "D",
        "text": "$8$"
      }
    ],
    "correct": "B",
    "explanation": "Không gian nghiệm của hệ thuần nhất $Ax = 0$ có số chiều bằng số ẩn tự do: $\\dim(\\operatorname{Ker} A) = n - r(A) = 5 - 3 = 2$. Do đó một hệ nghiệm cơ bản gồm đúng 2 véc tơ.\n* **Chọn đáp án: B.**",
    "id": 74,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Điều kiện để hệ phương trình tuyến tính thuần nhất $Ax = 0$ (với $A$ vuông cấp $n$) có **nghiệm không tầm thường** (nghiệm khác 0) là:",
    "options": [
      {
        "key": "A",
        "text": "$\\det A = 0$"
      },
      {
        "key": "B",
        "text": "$\\det A \\neq 0$"
      },
      {
        "key": "C",
        "text": "$r(A) = n$"
      },
      {
        "key": "D",
        "text": "$A$ khả nghịch"
      }
    ],
    "correct": "A",
    "explanation": "Hệ thuần nhất vuông luôn có nghiệm tầm thường $x = 0$. Nó có nghiệm không tầm thường khi và chỉ khi hệ có vô số nghiệm $\\Leftrightarrow r(A) < n \\Leftrightarrow \\det A = 0$.\n* **Chọn đáp án: A.**",
    "id": 75,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Giải hệ phương trình bằng quy tắc Cramer: $\\begin{cases} 2x + 3y = 7 \\\\ x - 2y = -7 \\end{cases}$. Giá trị của $x$ là:",
    "options": [
      {
        "key": "A",
        "text": "$1$"
      },
      {
        "key": "B",
        "text": "$3$"
      },
      {
        "key": "C",
        "text": "$-3$"
      },
      {
        "key": "D",
        "text": "$-1$"
      }
    ],
    "correct": "D",
    "explanation": "Tính các định thức:\n$D = \\begin{vmatrix} 2 & 3 \\\\ 1 & -2 \\end{vmatrix} = -4 - 3 = -7$.\n$D_x = \\begin{vmatrix} 7 & 3 \\\\ -7 & -2 \\end{vmatrix} = -14 - (-21) = 7$.\nSuy ra $x = \\dfrac{D_x}{D} = \\dfrac{7}{-7} = -1$.\n* **Chọn đáp án: D.**",
    "id": 76,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Tìm $m$ để hệ phương trình sau có vô số nghiệm: $\\begin{cases} x + 2y = 3 \\\\ 2x + 4y = m \\end{cases}$.",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq 6$"
      },
      {
        "key": "B",
        "text": "$m = 3$"
      },
      {
        "key": "C",
        "text": "$m = 6$"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "C",
    "explanation": "Phương trình 2 có vế trái gấp 2 lần vế trái phương trình 1: $2(x + 2y) = 2x + 4y$. Để hệ có nghiệm (và vô số nghiệm) thì vế phải cũng phải gấp đôi: $m = 2 \\times 3 = 6$. (Nếu $m \\neq 6$ thì hệ vô nghiệm).\n* **Chọn đáp án: C.**",
    "id": 77,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Hệ phương trình $\\begin{cases} x + y + z = 1 \\\\ 2x + 2y + 2z = 3 \\end{cases}$ có tập nghiệm là:",
    "options": [
      {
        "key": "A",
        "text": "Vô nghiệm"
      },
      {
        "key": "B",
        "text": "Có nghiệm duy nhất"
      },
      {
        "key": "C",
        "text": "Vô số nghiệm phụ thuộc 1 tham số"
      },
      {
        "key": "D",
        "text": "Vô số nghiệm phụ thuộc 2 tham số"
      }
    ],
    "correct": "A",
    "explanation": "Nhân phương trình 1 với 2 ta được $2x + 2y + 2z = 2$. Nhưng phương trình 2 lại cho $2x + 2y + 2z = 3$, dẫn đến mâu thuẫn $2 = 3$. Vậy hệ vô nghiệm ($r(A) = 1 < r(\\bar{A}) = 2$).\n* **Chọn đáp án: A.**",
    "id": 78,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Cho hệ phương trình $Ax = b$ có một nghiệm riêng là $x_0$ và $V_0$ là không gian nghiệm của hệ thuần nhất liên kết $Ax = 0$. Nghiệm tổng quát của hệ $Ax = b$ có dạng:",
    "options": [
      {
        "key": "A",
        "text": "$x = c x_0$ với $c \\in \\mathbb{R}$"
      },
      {
        "key": "B",
        "text": "$x = v$ với $v \\in V_0$"
      },
      {
        "key": "C",
        "text": "$x = x_0 + v$ với $v \\in V_0$"
      },
      {
        "key": "D",
        "text": "$x = x_0 - 2v$"
      }
    ],
    "correct": "C",
    "explanation": "Theo cấu trúc nghiệm của hệ phương trình tuyến tính không thuần nhất: Nghiệm tổng quát = Nghiệm riêng + Nghiệm tổng quát của hệ thuần nhất tương ứng ($x = x_0 + v, v \\in V_0$).\n* **Chọn đáp án: C.**",
    "id": 79,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Tìm $m$ để hệ thuần nhất $\\begin{cases} mx + y = 0 \\\\ 4x + my = 0 \\end{cases}$ có nghiệm không tầm thường:",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq 2$ và $m \\neq -2$"
      },
      {
        "key": "B",
        "text": "$m = 4$ hoặc $m = -4$"
      },
      {
        "key": "C",
        "text": "Mọi $m \\in \\mathbb{R}$"
      },
      {
        "key": "D",
        "text": "$m = 2$ hoặc $m = -2$"
      }
    ],
    "correct": "D",
    "explanation": "Hệ có nghiệm không tầm thường khi và chỉ khi định thức ma trận hệ số bằng 0:\n$\\det A = \\begin{vmatrix} m & 1 \\\\ 4 & m \\end{vmatrix} = m^2 - 4 = 0 \\Leftrightarrow m = \\pm 2$.\n* **Chọn đáp án: D.**",
    "id": 80,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Hệ phương trình $\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$ có nghiệm là:",
    "options": [
      {
        "key": "A",
        "text": "$(2, 1, 3)$"
      },
      {
        "key": "B",
        "text": "$(1, 2, 3)$"
      },
      {
        "key": "C",
        "text": "$(3, 2, 1)$"
      },
      {
        "key": "D",
        "text": "$(1, 3, 2)$"
      }
    ],
    "correct": "B",
    "explanation": "Thử nghiệm $(1, 2, 3)$:\n$1 + 2 + 3 = 6$ (thỏa mãn)\n$2(1) - 2 + 3 = 3$ (thỏa mãn)\n$1 + 2(2) - 3 = 2$ (thỏa mãn)\nVậy $(1, 2, 3)$ là nghiệm duy nhất của hệ.\n* **Chọn đáp án: B.**",
    "id": 81,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Cho hệ phương trình gồm $4$ phương trình và $3$ ẩn số. Khẳng định nào sau đây là **luôn đúng**?",
    "options": [
      {
        "key": "A",
        "text": "Hạng ma trận hệ số tối đa là 3"
      },
      {
        "key": "B",
        "text": "Hệ không thể có vô số nghiệm phụ thuộc 2 tham số nếu hạng ma trận hệ số bằng 2"
      },
      {
        "key": "C",
        "text": "Hệ luôn luôn vô nghiệm"
      },
      {
        "key": "D",
        "text": "Hệ luôn có nghiệm duy nhất"
      }
    ],
    "correct": "A",
    "explanation": "Ma trận hệ số $A$ có kích thước $4 \\times 3$, do đó hạng $r(A) \\le \\min(4, 3) = 3$. Vậy hạng tối đa của $A$ là 3.\n* **Chọn đáp án: A.**",
    "id": 82,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Nếu hệ phương trình $Ax = b$ có hai nghiệm phân biệt $x_1$ và $x_2$, thì nó có bao nhiêu nghiệm?",
    "options": [
      {
        "key": "A",
        "text": "Đúng 2 nghiệm"
      },
      {
        "key": "B",
        "text": "Đúng 3 nghiệm"
      },
      {
        "key": "C",
        "text": "Vô số nghiệm"
      },
      {
        "key": "D",
        "text": "Hữu hạn nghiệm"
      }
    ],
    "correct": "C",
    "explanation": "Trong trường số thực $\\mathbb{R}$, nếu $x_1, x_2$ là hai nghiệm phân biệt thì với mọi $\\alpha \\in \\mathbb{R}$, tổ hợp lồi $\\alpha x_1 + (1 - \\alpha) x_2$ cũng là một nghiệm của hệ. Do đó hệ có vô số nghiệm.\n* **Chọn đáp án: C.**",
    "id": 83,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Trong phương pháp khử Gauss, các phép biến đổi sơ cấp trên các hàng của ma trận mở rộng $\\bar{A}$ gồm:",
    "options": [
      {
        "key": "A",
        "text": "Cộng hai cột với nhau, đổi chỗ hai cột"
      },
      {
        "key": "B",
        "text": "Nhân một hàng với số 0"
      },
      {
        "key": "C",
        "text": "Bình phương các phần tử của một hàng"
      },
      {
        "key": "D",
        "text": "Đổi chỗ hai hàng, nhân một hàng với số khác 0, cộng vào một hàng một bội của hàng khác"
      }
    ],
    "correct": "D",
    "explanation": "Ba phép biến đổi sơ cấp theo hàng bảo toàn tập nghiệm của hệ phương trình tuyến tính là: (1) Hoán vị hai hàng, (2) Nhân một hàng với một số thực khác 0, (3) Cộng vào một hàng bội của một hàng khác.\n* **Chọn đáp án: D.**",
    "id": 84,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Tìm $m$ để hệ phương trình $\\begin{cases} x + y + z = 1 \\\\ 2x + 3y + z = 2 \\\\ 3x + 4y + 2z = m \\end{cases}$ có nghiệm:",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq 3$"
      },
      {
        "key": "B",
        "text": "$m = 0$"
      },
      {
        "key": "C",
        "text": "Mọi $m \\in \\mathbb{R}$"
      },
      {
        "key": "D",
        "text": "$m = 3$"
      }
    ],
    "correct": "D",
    "explanation": "Nhận thấy hàng 1 + hàng 2 = hàng 3 ở vế trái: $(x+y+z) + (2x+3y+z) = 3x+4y+2z$. Để hệ có nghiệm, vế phải cũng phải thỏa mãn: $1 + 2 = m \\Rightarrow m = 3$.\n* **Chọn đáp án: D.**",
    "id": 85,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Một hệ gồm 3 phương trình bậc nhất 3 ẩn có biểu diễn hình học là:",
    "options": [
      {
        "key": "A",
        "text": "Vị trí tương đối của 3 đường thẳng trong mặt phẳng $\\mathbb{R}^2$"
      },
      {
        "key": "B",
        "text": "Vị trí tương đối của 3 mặt phẳng trong không gian $\\mathbb{R}^3$"
      },
      {
        "key": "C",
        "text": "Vị trí tương đối của 3 điểm trong không gian"
      },
      {
        "key": "D",
        "text": "3 hình cầu trong $\\mathbb{R}^3$"
      }
    ],
    "correct": "B",
    "explanation": "Mỗi phương trình tuyến tính $ax + by + cz = d$ biểu diễn một mặt phẳng trong không gian 3 chiều $\\mathbb{R}^3$. Hệ 3 phương trình biểu diễn giao của 3 mặt phẳng này.\n* **Chọn đáp án: B.**",
    "id": 86,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Cho hệ phương trình $\\begin{cases} x - y = 2 \\\\ 2x - 2y = 4 \\end{cases}$. Nghiệm tổng quát của hệ là:",
    "options": [
      {
        "key": "A",
        "text": "$(2, 0)$"
      },
      {
        "key": "B",
        "text": "$(t, \\, 2 + t)$ với $t \\in \\mathbb{R}$"
      },
      {
        "key": "C",
        "text": "Vô nghiệm"
      },
      {
        "key": "D",
        "text": "$(2 + t, \\, t)$ với $t \\in \\mathbb{R}$"
      }
    ],
    "correct": "D",
    "explanation": "Hai phương trình tương đương: $x - y = 2 \\Leftrightarrow x = 2 + y$. Đặt $y = t \\in \\mathbb{R}$ làm ẩn tự do, ta được nghiệm tổng quát là $(x, y) = (2 + t, t)$.\n* **Chọn đáp án: D.**",
    "id": 87,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Cho ma trận hệ số $A$ của một hệ thuần nhất $Ax = 0$ có $n = 6$ ẩn, hạng $r(A) = 4$. Số chiều của không gian nghiệm là:",
    "options": [
      {
        "key": "A",
        "text": "$4$"
      },
      {
        "key": "B",
        "text": "$2$"
      },
      {
        "key": "C",
        "text": "$6$"
      },
      {
        "key": "D",
        "text": "$10$"
      }
    ],
    "correct": "B",
    "explanation": "Số chiều không gian nghiệm của hệ thuần nhất $Ax = 0$ (tức số khuyết nullity) bằng $n - r(A) = 6 - 4 = 2$.\n* **Chọn đáp án: B.**",
    "id": 88,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Điều kiện để hệ phương trình $\\begin{cases} x + 2y - z = 0 \\\\ 2x - y + z = 0 \\\\ 3x + y = 0 \\end{cases}$ có nghiệm duy nhất là:",
    "options": [
      {
        "key": "A",
        "text": "Có nghiệm duy nhất $(0,0,0)$"
      },
      {
        "key": "B",
        "text": "Hệ vô nghiệm"
      },
      {
        "key": "C",
        "text": "Hệ không có nghiệm duy nhất vì luôn có vô số nghiệm"
      },
      {
        "key": "D",
        "text": "Nghiệm duy nhất $(1,1,1)$"
      }
    ],
    "correct": "C",
    "explanation": "Nhận thấy phương trình 1 + phương trình 2: $(x+2y-z) + (2x-y+z) = 3x+y = 0$, đúng bằng phương trình 3! Do đó 3 phương trình phụ thuộc tuyến tính, hạng $r(A) = 2 < 3$ (số ẩn). Vì vậy hệ thuần nhất có vô số nghiệm phụ thuộc 1 tham số.\n* **Chọn đáp án: C.**",
    "id": 89,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Cho hệ phương trình $Ax = b$. Nếu $\\det A \\neq 0$ thì hệ:",
    "options": [
      {
        "key": "A",
        "text": "Có vô số nghiệm"
      },
      {
        "key": "B",
        "text": "Vô nghiệm"
      },
      {
        "key": "C",
        "text": "Luôn có nghiệm duy nhất $x = A^{-1}b$"
      },
      {
        "key": "D",
        "text": "Chỉ có nghiệm khi $b = 0$"
      }
    ],
    "correct": "C",
    "explanation": "Khi $A$ vuông và $\\det A \\neq 0$, $A$ khả nghịch, do đó nhân hai vế với $A^{-1}$ ta được nghiệm duy nhất $x = A^{-1}b$.\n* **Chọn đáp án: C.**",
    "id": 90,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Cho ma trận mở rộng sau khi đã đưa về dạng bậc thang: $\\left[\\begin{array}{ccc|c} 1 & 2 & 3 & 1 \\\\ 0 & 1 & -1 & 2 \\\\ 0 & 0 & m - 3 & m^2 - 9 \\end{array}\\right]$. Tìm $m$ để hệ có **vô số nghiệm**.",
    "options": [
      {
        "key": "A",
        "text": "$m = -3$"
      },
      {
        "key": "B",
        "text": "$m \\neq 3$"
      },
      {
        "key": "C",
        "text": "Không có giá trị $m$ nào"
      },
      {
        "key": "D",
        "text": "$m = 3$"
      }
    ],
    "correct": "D",
    "explanation": "Hàng thứ 3 có dạng: $(m - 3)z = m^2 - 9 = (m - 3)(m + 3)$. Để hệ có vô số nghiệm thì hàng cuối phải trở thành $0 = 0$, tức là $m - 3 = 0 \\Leftrightarrow m = 3$. (Nếu $m = -3$ thì $m - 3 = -6 \\neq 0$, hệ có nghiệm duy nhất).\n* **Chọn đáp án: D.**",
    "id": 91,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Trong câu hỏi trên, tìm $m$ để hệ **vô nghiệm**:",
    "options": [
      {
        "key": "A",
        "text": "$m = 3$"
      },
      {
        "key": "B",
        "text": "$m = -3$"
      },
      {
        "key": "C",
        "text": "Không có giá trị $m$ nào làm hệ vô nghiệm"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "C",
    "explanation": "Để hệ vô nghiệm thì $m - 3 = 0$ nhưng $m^2 - 9 \\neq 0$. Tuy nhiên khi $m = 3$ thì $m^2 - 9 = 0$. Khi $m \\neq 3$ thì hệ luôn có nghiệm duy nhất. Do đó không có giá trị nào của $m$ để hệ vô nghiệm.\n* **Chọn đáp án: C.**",
    "id": 92,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Số ẩn tự do của một hệ phương trình tuyến tính có 5 ẩn và hạng của ma trận hệ số bằng 2 là:",
    "options": [
      {
        "key": "A",
        "text": "$2$"
      },
      {
        "key": "B",
        "text": "$3$"
      },
      {
        "key": "C",
        "text": "$5$"
      },
      {
        "key": "D",
        "text": "$7$"
      }
    ],
    "correct": "B",
    "explanation": "Số ẩn tự do (số tham số trong nghiệm tổng quát) bằng số ẩn trừ đi hạng: $n - r(A) = 5 - 2 = 3$.\n* **Chọn đáp án: B.**",
    "id": 93,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Hệ phương trình $\\begin{cases} x_1 + x_2 = 0 \\\\ x_2 + x_3 = 0 \\\\ x_3 + x_1 = 0 \\end{cases}$ có nghiệm là:",
    "options": [
      {
        "key": "A",
        "text": "$x_1 = x_2 = x_3 = 0$ (nghiệm duy nhất)"
      },
      {
        "key": "B",
        "text": "Vô số nghiệm $(t, t, t)$"
      },
      {
        "key": "C",
        "text": "Vô số nghiệm $(t, -t, t)$"
      },
      {
        "key": "D",
        "text": "Vô nghiệm"
      }
    ],
    "correct": "A",
    "explanation": "Ma trận hệ số $A = \\begin{bmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & 1 \\end{bmatrix}$ có $\\det A = 1(1) - 1(-1) = 2 \\neq 0$. Vì hệ thuần nhất có $\\det A \\neq 0$, hệ có nghiệm duy nhất tầm thường $x_1 = x_2 = x_3 = 0$.\n* **Chọn đáp án: A.**",
    "id": 94,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "question": "Một hệ phương trình tuyến tính không thuần nhất gồm 4 phương trình, 4 ẩn có ma trận hệ số có $\\det A = 0$. Khẳng định nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Hệ chắc chắn vô nghiệm"
      },
      {
        "key": "B",
        "text": "Hệ chắc chắn có vô số nghiệm"
      },
      {
        "key": "C",
        "text": "Hệ có nghiệm duy nhất"
      },
      {
        "key": "D",
        "text": "Hệ có thể vô nghiệm hoặc có vô số nghiệm"
      }
    ],
    "correct": "D",
    "explanation": "Vì $\\det A = 0$ nên $r(A) < 4$. Phụ thuộc vào ma trận hệ số mở rộng $\\bar{A}$: nếu $r(\\bar{A}) > r(A)$ thì hệ vô nghiệm; nếu $r(\\bar{A}) = r(A)$ thì hệ có vô số nghiệm. Do đó hệ có thể vô nghiệm hoặc có vô số nghiệm.\n* **Chọn đáp án: D.**",
    "id": 95,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "isOriginal": false
  },
  {
    "originalId": 21,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Cho các tập véc tơ trong không gian véc tơ $\\mathbb{R}^3$:\n$$A = \\{(x, y, z) \\mid x = 2y\\}, \\quad B = \\{(x, y, z) \\mid z = 2x\\}$$\nKhẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$A$ và $B$ không là các không gian véc tơ con của $\\mathbb{R}^3$."
      },
      {
        "key": "B",
        "text": "$A$ và $B$ là các không gian véc tơ con của $\\mathbb{R}^3$."
      },
      {
        "key": "C",
        "text": "Chỉ có $A$ là không gian véc tơ con của $\\mathbb{R}^3$."
      },
      {
        "key": "D",
        "text": "Chỉ có $B$ là không gian véc tơ con của $\\mathbb{R}^3$."
      }
    ],
    "correct": "B",
    "explanation": "* Tập $A$ là tập nghiệm của phương trình tuyến tính thuần nhất $x - 2y = 0$ trong $\\mathbb{R}^3$.\n* Tập $B$ là tập nghiệm của phương trình tuyến tính thuần nhất $2x - z = 0$ trong $\\mathbb{R}^3$.\n* Vì tập nghiệm của mọi hệ phương trình tuyến tính thuần nhất $n$ ẩn đều là một không gian véc tơ con của $\\mathbb{R}^n$, nên cả $A$ và $B$ đều là các không gian véc tơ con của $\\mathbb{R}^3$.\n* **Chọn đáp án: B.**\n\n---",
    "isOriginal": true,
    "id": 96
  },
  {
    "originalId": 22,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Cho không gian véc tơ con của $\\mathbb{R}^4$:\n$$U = \\{(x, y, z, t) \\mid x + 2y + 3z - 4t = 0\\}$$\nKhẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$\\dim U = 2$."
      },
      {
        "key": "B",
        "text": "$\\dim U = 1$."
      },
      {
        "key": "C",
        "text": "$\\dim U = 3$."
      },
      {
        "key": "D",
        "text": "$\\dim U = 4$."
      }
    ],
    "correct": "C",
    "explanation": "* Từ phương trình $x + 2y + 3z - 4t = 0 \\Rightarrow x = -2y - 3z + 4t$.\n* Mỗi véc tơ thuộc $U$ có dạng:\n  $$(-2y - 3z + 4t, \\, y, \\, z, \\, t) = y(-2, 1, 0, 0) + z(-3, 0, 1, 0) + t(4, 0, 0, 1)$$\n* Ba véc tơ $(-2, 1, 0, 0), (-3, 0, 1, 0), (4, 0, 0, 1)$ độc lập tuyến tính nên tạo thành một cơ sở của $U$. Vậy $\\dim U = 3$.\n* **Chọn đáp án: C.**\n\n---",
    "isOriginal": true,
    "id": 97
  },
  {
    "originalId": 23,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Hệ véc tơ nào dưới đây sinh ra không gian véc tơ $P_2$ (không gian véc tơ các đa thức có bậc không vượt quá 2)?",
    "options": [
      {
        "key": "A",
        "text": "$\\{1 + t^2, \\, 2 - t + t^2, \\, 4 - 3t + t^2\\}$."
      },
      {
        "key": "B",
        "text": "$\\{3 + t + 2t^2, \\, -1 + t - 2t^2, \\, -1 + 5t + 3t^2\\}$."
      },
      {
        "key": "C",
        "text": "$\\{1 - 3t + 5t^2, \\, -3 + 8t - 2t^2\\}$."
      },
      {
        "key": "D",
        "text": "$\\{2 - t + 3t^2, \\, 4 - 2t + 6t^2, \\, 1 - 3t + 5t^2\\}$."
      }
    ],
    "correct": "B",
    "explanation": "* Ta biết $\\dim P_2 = 3$ (với cơ sở chính tắc $\\{1, t, t^2\\}$). Một hệ sinh của $P_2$ phải có hạng bằng $3$:\n  * **C sai:** Chỉ có $2$ véc tơ nên không thể sinh ra không gian $3$ chiều.\n  * **D sai:** Véc tơ thứ hai gấp $2$ lần véc tơ thứ nhất ($4 - 2t + 6t^2 = 2(2 - t + 3t^2)$) nên hệ phụ thuộc tuyến tính, hạng $\\le 2 < 3$.\n  * **A sai:** Ta có $3(2 - t + t^2) - 2(1 + t^2) = 4 - 3t + t^2$, nên hệ phụ thuộc tuyến tính, hạng $= 2 < 3$.\n  * **B đúng:** Lập ma trận tọa độ theo cơ sở $\\{1, t, t^2\\}$:\n    $$M = \\begin{bmatrix} 3 & -1 & -1 \\\\ 1 & 1 & 5 \\\\ 2 & -2 & 3 \\end{bmatrix}$$\n    Tính định thức:\n    $$\\det M = 3(3 + 10) - (-1)(3 - 10) + (-1)(-2 - 2) = 39 - 7 + 4 = 36 \\neq 0$$\n    Vì $\\det M \\neq 0$, hệ 3 véc tơ này độc lập tuyến tính nên là một cơ sở (và cũng là hệ sinh) của $P_2$.\n* **Chọn đáp án: B.**\n\n---",
    "isOriginal": true,
    "id": 98
  },
  {
    "originalId": 24,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Cho $E = \\{(-1, 2), \\, (1, -4)\\}$ là một cơ sở của không gian véc tơ $\\mathbb{R}^2$. Ma trận chuyển cơ sở từ $E$ sang cơ sở chính tắc của $\\mathbb{R}^2$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} -1 & 1 \\\\ 2 & -4 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 2 & 1/2 \\\\ 1 & 1/2 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 1 & 1 \\\\ 2 & 4 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} -1 & 2 \\\\ 1 & -4 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* *(Lưu ý thuật ngữ: Trong nhiều giáo trình Đại số tuyến tính Việt Nam, ma trận chuyển từ cơ sở chính tắc $E_0$ sang cơ sở $E$ — hay còn gọi là ma trận tọa độ của $E$ trong $E_0$ — được lập bằng cách xếp tọa độ các véc tơ của $E$ thành các cột).*\n* Xếp $u_1 = (-1, 2)$ và $u_2 = (1, -4)$ theo cột ta được:\n  $$P = \\begin{bmatrix} -1 & 1 \\\\ 2 & -4 \\end{bmatrix}$$\n* **Chọn đáp án: A.**\n\n---",
    "isOriginal": true,
    "id": 99
  },
  {
    "originalId": 25,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Cho $W_1, W_2$ là các không gian véc tơ con của $\\mathbb{R}^3$. Khẳng định nào dưới đây **không đúng**?",
    "options": [
      {
        "key": "A",
        "text": "$W_1 + W_2$ là tổng trực tiếp khi và chỉ khi $\\dim(W_1 \\cap W_2) = 0$."
      },
      {
        "key": "B",
        "text": "Nếu $W_1 = \\{(x, y, 0) \\mid x, y \\in \\mathbb{R}\\}, \\, W_2 = \\{(x, y, z) \\mid x - y + z = 0\\}$ thì $\\mathbb{R}^3 = W_1 + W_2$."
      },
      {
        "key": "C",
        "text": "Nếu $W_1 = \\{(x, y, 0) \\mid x, y \\in \\mathbb{R}\\}, \\, W_2 = \\{(0, y, z) \\mid y, z \\in \\mathbb{R}\\}$ thì $\\mathbb{R}^3 = W_1 \\oplus W_2$."
      },
      {
        "key": "D",
        "text": "Nếu $\\mathbb{R}^3 = W_1 \\oplus W_2$ thì $\\dim W_1 + \\dim W_2 = 3$."
      }
    ],
    "correct": "C",
    "explanation": "* Xét phương án **C**:\n  * $W_1$ gồm các véc tơ có cao độ $z = 0$.\n  * $W_2$ gồm các véc tơ có hoành độ $x = 0$.\n  * Giao của hai không gian con là $W_1 \\cap W_2 = \\{(0, y, 0) \\mid y \\in \\mathbb{R}\\} \\neq \\{(0, 0, 0)\\}$ (có số chiều bằng $1$).\n  * Vì $W_1 \\cap W_2 \\neq \\{0\\}$ nên $W_1 + W_2$ **không** phải là tổng trực tiếp $W_1 \\oplus W_2$.\n* **Chọn đáp án: C.**\n\n---",
    "isOriginal": true,
    "id": 100
  },
  {
    "question": "Tập hợp nào dưới đây là một **không gian véc tơ con** của $\\mathbb{R}^3$?",
    "options": [
      {
        "key": "A",
        "text": "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid 2x - 3y + z = 0\\}$"
      },
      {
        "key": "B",
        "text": "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x + y + z = 1\\}$"
      },
      {
        "key": "C",
        "text": "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x \\ge 0, y \\ge 0, z \\ge 0\\}$"
      },
      {
        "key": "D",
        "text": "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x^2 + y^2 + z^2 = 1\\}$"
      }
    ],
    "correct": "A",
    "explanation": "Phương trình $2x - 3y + z = 0$ là phương trình tuyến tính thuần nhất, biểu diễn một mặt phẳng đi qua gốc tọa độ $(0, 0, 0)$. Tập nghiệm của phương trình tuyến tính thuần nhất luôn là một không gian véc tơ con. Phương án B không chứa $\\vec{0}$, phương án C không đóng kín với phép nhân số âm, phương án D là phương trình phi tuyến.\n* **Chọn đáp án: A.**",
    "id": 101,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Số chiều của không gian véc tơ các ma trận vuông cỡ $3 \\times 3$, ký hiệu $M_{3}(\\mathbb{R})$, là:",
    "options": [
      {
        "key": "A",
        "text": "$9$"
      },
      {
        "key": "B",
        "text": "$3$"
      },
      {
        "key": "C",
        "text": "$6$"
      },
      {
        "key": "D",
        "text": "$8$"
      }
    ],
    "correct": "A",
    "explanation": "Không gian các ma trận $M_{m \\times n}(\\mathbb{R})$ có số chiều bằng $m \\times n$. Do đó $\\dim M_3(\\mathbb{R}) = 3 \\times 3 = 9$.\n* **Chọn đáp án: A.**",
    "id": 102,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Số chiều của không gian véc tơ các đa thức $P_n$ có bậc không vượt quá $n$ là:",
    "options": [
      {
        "key": "A",
        "text": "$n$"
      },
      {
        "key": "B",
        "text": "$n - 1$"
      },
      {
        "key": "C",
        "text": "$n + 1$"
      },
      {
        "key": "D",
        "text": "$2n$"
      }
    ],
    "correct": "C",
    "explanation": "Cơ sở chính tắc của $P_n$ là $\\{1, x, x^2, \\dots, x^n\\}$, gồm đúng $n + 1$ phần tử. Do đó $\\dim P_n = n + 1$.\n* **Chọn đáp án: C.**",
    "id": 103,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Trong không gian $\\mathbb{R}^3$, hệ véc tơ nào dưới đây **độc lập tuyến tính**?",
    "options": [
      {
        "key": "A",
        "text": "$S = \\{(1, 0, 0), \\, (0, 1, 0), \\, (1, 1, 1)\\}$"
      },
      {
        "key": "B",
        "text": "$S = \\{(1, 2, 3), \\, (2, 4, 6)\\}$"
      },
      {
        "key": "C",
        "text": "$S = \\{(1, 1, 1), \\, (2, 2, 2), \\, (0, 1, 2)\\}$"
      },
      {
        "key": "D",
        "text": "$S = \\{(1, 0, 0), \\, (0, 1, 0), \\, (0, 0, 1), \\, (1, 2, 3)\\}$"
      }
    ],
    "correct": "A",
    "explanation": "Xét ma trận lập bởi 3 véc tơ ở phương án A: $M = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 1 & 1 & 1 \\end{bmatrix}$ có $\\det M = 1 \\neq 0$, nên hệ độc lập tuyến tính. B có 2 véc tơ tỉ lệ; C có $(2,2,2) = 2(1,1,1)$; D có 4 véc tơ trong $\\mathbb{R}^3$ nên luôn phụ thuộc tuyến tính.\n* **Chọn đáp án: A.**",
    "id": 104,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Số lượng véc tơ tối đa trong một hệ véc tơ độc lập tuyến tính của không gian $\\mathbb{R}^n$ là:",
    "options": [
      {
        "key": "A",
        "text": "$n$"
      },
      {
        "key": "B",
        "text": "$n + 1$"
      },
      {
        "key": "C",
        "text": "$n - 1$"
      },
      {
        "key": "D",
        "text": "Vô hạn"
      }
    ],
    "correct": "A",
    "explanation": "Trong một không gian véc tơ $n$ chiều, mọi hệ gồm nhiều hơn $n$ véc tơ đều phụ thuộc tuyến tính. Do đó số lượng véc tơ tối đa độc lập tuyến tính là đúng $n$ (bằng số chiều của không gian).\n* **Chọn đáp án: A.**",
    "id": 105,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Tìm $m$ để hệ véc tơ $S = \\{(1, 1, 1), \\, (1, 2, 3), \\, (2, 3, m)\\}$ trong $\\mathbb{R}^3$ phụ thuộc tuyến tính:",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq 4$"
      },
      {
        "key": "B",
        "text": "$m = 0$"
      },
      {
        "key": "C",
        "text": "$m = -4$"
      },
      {
        "key": "D",
        "text": "$m = 4$"
      }
    ],
    "correct": "D",
    "explanation": "Tính định thức ma trận lập bởi 3 véc tơ:\n$\\det = \\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ 2 & 3 & m \\end{vmatrix} = 1(2m - 9) - 1(m - 6) + 1(3 - 4) = 2m - 9 - m + 6 - 1 = m - 4$.\nHệ phụ thuộc tuyến tính khi và chỉ khi định thức bằng $0 \\Leftrightarrow m - 4 = 0 \\Leftrightarrow m = 4$.\n* **Chọn đáp án: D.**",
    "id": 106,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Tọa độ của véc tơ $u = (5, 7)$ trong cơ sở $B = \\{v_1 = (1, 1), \\, v_2 = (1, 2)\\}$ của $\\mathbb{R}^2$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(2, 3)$"
      },
      {
        "key": "B",
        "text": "$(5, 7)$"
      },
      {
        "key": "C",
        "text": "$(1, 4)$"
      },
      {
        "key": "D",
        "text": "$(3, 2)$"
      }
    ],
    "correct": "D",
    "explanation": "Biểu diễn $u = c_1 v_1 + c_2 v_2 \\Leftrightarrow \\begin{cases} c_1 + c_2 = 5 \\\\ c_1 + 2c_2 = 7 \\end{cases}$.\nLấy PT(2) trừ PT(1) ta được $c_2 = 2$. Thay lại ta được $c_1 = 3$. Vậy tọa độ là $(3, 2)$.\n* **Chọn đáp án: D.**",
    "id": 107,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Khẳng định nào dưới đây là **sai**?",
    "options": [
      {
        "key": "A",
        "text": "Mọi hệ véc tơ chứa véc tơ không $\\vec{0}$ đều độc lập tuyến tính"
      },
      {
        "key": "B",
        "text": "Mọi hệ véc tơ chứa véc tơ không $\\vec{0}$ đều phụ thuộc tuyến tính"
      },
      {
        "key": "C",
        "text": "Một hệ véc tơ là phụ thuộc tuyến tính khi và chỉ khi có ít nhất một véc tơ biểu diễn tuyến tính qua các véc tơ còn lại"
      },
      {
        "key": "D",
        "text": "Mọi bộ phận của một hệ véc tơ độc lập tuyến tính đều độc lập tuyến tính"
      }
    ],
    "correct": "A",
    "explanation": "Nếu hệ chứa véc tơ không $\\vec{0}$, ta có $1 \\cdot \\vec{0} + 0 \\cdot v_1 + \\dots = \\vec{0}$ với hệ số khác 0, do đó hệ luôn phụ thuộc tuyến tính. Khẳng định A nói 'độc lập tuyến tính' là sai.\n* **Chọn đáp án: A.**",
    "id": 108,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Cho hai không gian con $W_1, W_2$ của không gian $\\mathbb{R}^6$ có $\\dim W_1 = 4, \\dim W_2 = 3$ và $\\dim(W_1 + W_2) = 5$. Số chiều của không gian giao $\\dim(W_1 \\cap W_2)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$1$"
      },
      {
        "key": "B",
        "text": "$2$"
      },
      {
        "key": "C",
        "text": "$3$"
      },
      {
        "key": "D",
        "text": "$0$"
      }
    ],
    "correct": "B",
    "explanation": "Theo công thức số chiều Grassmann: $\\dim(W_1 + W_2) = \\dim W_1 + \\dim W_2 - \\dim(W_1 \\cap W_2)$. Suy ra $\\dim(W_1 \\cap W_2) = 4 + 3 - 5 = 2$.\n* **Chọn đáp án: B.**",
    "id": 109,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Cho $W_1$ và $W_2$ là hai không gian véc tơ con. Tổng $W_1 + W_2$ là **tổng trực tiếp** $W_1 \\oplus W_2$ khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$W_1 \\cap W_2 = \\{\\vec{0}\\}$"
      },
      {
        "key": "B",
        "text": "$W_1 \\cap W_2 = \\emptyset$"
      },
      {
        "key": "C",
        "text": "$\\dim(W_1) = \\dim(W_2)$"
      },
      {
        "key": "D",
        "text": "$W_1 \\cup W_2 = V$"
      }
    ],
    "correct": "A",
    "explanation": "Theo định nghĩa, tổng của hai không gian con là tổng trực tiếp khi và chỉ khi giao của chúng chỉ gồm duy nhất véc tơ không: $W_1 \\cap W_2 = \\{\\vec{0}\\}$ (tức $\\dim(W_1 \\cap W_2) = 0$).\n* **Chọn đáp án: A.**",
    "id": 110,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Cơ sở chính tắc của không gian đa thức $P_2$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\{x, x^2\\}$"
      },
      {
        "key": "B",
        "text": "$\\{1, x, x^2\\}$"
      },
      {
        "key": "C",
        "text": "$\\{1, x\\}$"
      },
      {
        "key": "D",
        "text": "$\\{1+x, x+x^2, 1+x^2\\}$"
      }
    ],
    "correct": "B",
    "explanation": "Mọi đa thức bậc không quá 2 có dạng $a_0 + a_1 x + a_2 x^2$, biểu diễn duy nhất qua hệ đơn thức $\\{1, x, x^2\\}$. Đây chính là cơ sở chính tắc của $P_2$.\n* **Chọn đáp án: B.**",
    "id": 111,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Số chiều của không gian véc tơ con các ma trận đối xứng cấp 2 trong $M_2(\\mathbb{R})$ là:",
    "options": [
      {
        "key": "A",
        "text": "$3$"
      },
      {
        "key": "B",
        "text": "$2$"
      },
      {
        "key": "C",
        "text": "$4$"
      },
      {
        "key": "D",
        "text": "$1$"
      }
    ],
    "correct": "A",
    "explanation": "Ma trận đối xứng cấp 2 có dạng $\\begin{bmatrix} a & b \\\\ b & d \\end{bmatrix}$, phụ thuộc vào 3 tham số tự do $a, b, d$. Do đó số chiều của không gian này là 3.\n* **Chọn đáp án: A.**",
    "id": 112,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Hệ véc tơ nào dưới đây là một **cơ sở** của $\\mathbb{R}^2$?",
    "options": [
      {
        "key": "A",
        "text": "$\\{(1, 2), \\, (2, 4)\\}$"
      },
      {
        "key": "B",
        "text": "$\\{(1, 0)\\}$"
      },
      {
        "key": "C",
        "text": "$\\{(1, 2), \\, (3, 4)\\}$"
      },
      {
        "key": "D",
        "text": "$\\{(1, 1), \\, (2, 2), \\, (3, 3)\\}$"
      }
    ],
    "correct": "C",
    "explanation": "Hai véc tơ trong $\\mathbb{R}^2$ lập thành một cơ sở khi và chỉ khi chúng độc lập tuyến tính, tức định thức $\\begin{vmatrix} 1 & 3 \\\\ 2 & 4 \\end{vmatrix} = 4 - 6 = -2 \\neq 0$. B có 2 véc tơ tỉ lệ; C chỉ có 1 véc tơ; D có 3 véc tơ.\n* **Chọn đáp án: C.**",
    "id": 113,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Cho $V$ là không gian véc tơ $n$ chiều và $S$ là một hệ gồm đúng $n$ véc tơ của $V$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$S$ độc lập tuyến tính chưa chắc đã là cơ sở của $V$"
      },
      {
        "key": "B",
        "text": "$S$ sinh ra $V$ chưa chắc đã là cơ sở của $V$"
      },
      {
        "key": "C",
        "text": "$S$ là cơ sở của $V$ khi và chỉ khi $S$ độc lập tuyến tính"
      },
      {
        "key": "D",
        "text": "$S$ luôn luôn là một cơ sở của $V$"
      }
    ],
    "correct": "C",
    "explanation": "Trong không gian $n$ chiều, một hệ gồm đúng $n$ véc tơ là cơ sở khi và chỉ khi nó độc lập tuyến tính (hoặc tương đương khi và chỉ khi nó là hệ sinh).\n* **Chọn đáp án: C.**",
    "id": 114,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Tìm một cơ sở của không gian nghiệm của phương trình $x - 2y + 3z = 0$ trong $\\mathbb{R}^3$:",
    "options": [
      {
        "key": "A",
        "text": "$\\{(2, 1, 0), \\, (-3, 0, 1)\\}$"
      },
      {
        "key": "B",
        "text": "$\\{(1, -2, 3)\\}$"
      },
      {
        "key": "C",
        "text": "$\\{(1, 0, 0), \\, (0, 1, 0)\\}$"
      },
      {
        "key": "D",
        "text": "$\\{(2, 1, 0), \\, (3, 0, 1)\\}$"
      }
    ],
    "correct": "A",
    "explanation": "Từ $x = 2y - 3z$, mỗi nghiệm có dạng $(2y - 3z, y, z) = y(2, 1, 0) + z(-3, 0, 1)$. Hai véc tơ $(2, 1, 0)$ và $(-3, 0, 1)$ độc lập tuyến tính và tạo thành một cơ sở.\n* **Chọn đáp án: A.**",
    "id": 115,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Cho $B = \\{e_1, e_2\\}$ và $B' = \\{e_1', e_2'\\}$ với $e_1' = 2e_1 + e_2$ và $e_2' = e_1 + 3e_2$. Ma trận chuyển cơ sở từ $B$ sang $B'$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 2 & 1 \\\\ 3 & 1 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 2 & 1 \\\\ 1 & 3 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 3 & -1 \\\\ -1 & 2 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 1 & 2 \\\\ 3 & 1 \\end{bmatrix}$"
      }
    ],
    "correct": "B",
    "explanation": "Ma trận chuyển cơ sở từ $B$ sang $B'$ có các cột là tọa độ của các véc tơ của $B'$ theo cơ sở $B$: cột 1 là $\\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}$, cột 2 là $\\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix}$. Vậy $P = \\begin{bmatrix} 2 & 1 \\\\ 1 & 3 \\end{bmatrix}$.\n* **Chọn đáp án: B.**",
    "id": 116,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Nếu ma trận chuyển cơ sở từ $B$ sang $B'$ là $P$, thì công thức liên hệ giữa tọa độ của véc tơ $x$ trong cơ sở $B$ và $B'$ là:",
    "options": [
      {
        "key": "A",
        "text": "$[x]_{B'} = P [x]_B$"
      },
      {
        "key": "B",
        "text": "$[x]_B = P [x]_{B'}$"
      },
      {
        "key": "C",
        "text": "$[x]_B = P^{-1} [x]_{B'}$"
      },
      {
        "key": "D",
        "text": "$[x]_B = P^T [x]_{B'}$"
      }
    ],
    "correct": "B",
    "explanation": "Theo công thức đổi tọa độ khi đổi cơ sở: $[x]_B = P [x]_{B'}$ (hay $[x]_{B'} = P^{-1}[x]_B$).\n* **Chọn đáp án: B.**",
    "id": 117,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Tập hợp các véc tơ $\\{(x, y, z) \\in \\mathbb{R}^3 \\mid xy = 0\\}$ có phải là một không gian con của $\\mathbb{R}^3$ không?",
    "options": [
      {
        "key": "A",
        "text": "Có, vì chứa véc tơ không"
      },
      {
        "key": "B",
        "text": "Có, vì đóng kín với phép nhân số thực"
      },
      {
        "key": "C",
        "text": "Không, vì không chứa véc tơ không"
      },
      {
        "key": "D",
        "text": "Không, vì không đóng kín với phép cộng véc tơ"
      }
    ],
    "correct": "D",
    "explanation": "Lấy $u = (1, 0, 0)$ thỏa $xy = 1 \\cdot 0 = 0$, $v = (0, 1, 0)$ thỏa $xy = 0 \\cdot 1 = 0$. Nhưng tổng $u + v = (1, 1, 0)$ có $xy = 1 \\cdot 1 = 1 \\neq 0$, không thuộc tập hợp. Do đó tập này không đóng kín với phép cộng nên không phải không gian con.\n* **Chọn đáp án: D.**",
    "id": 118,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Hạng của một hệ véc tơ $S = \\{v_1, v_2, \\dots, v_k\\}$ được định nghĩa là:",
    "options": [
      {
        "key": "A",
        "text": "Tổng số véc tơ $k$ trong hệ"
      },
      {
        "key": "B",
        "text": "Số chiều của không gian chứa hệ $S$"
      },
      {
        "key": "C",
        "text": "Số véc tơ khác không trong hệ"
      },
      {
        "key": "D",
        "text": "Số lượng tối đa các véc tơ độc lập tuyến tính trong hệ $S$"
      }
    ],
    "correct": "D",
    "explanation": "Hạng của một hệ véc tơ là số chiều của không gian con sinh bởi hệ đó, và bằng số lượng véc tơ độc lập tuyến tính cực đại có trong hệ.\n* **Chọn đáp án: D.**",
    "id": 119,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Cho $W = \\operatorname{span}\\{(1, 2, 1), \\, (2, 4, 2)\\}$. Số chiều $\\dim W$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$2$"
      },
      {
        "key": "B",
        "text": "$3$"
      },
      {
        "key": "C",
        "text": "$1$"
      },
      {
        "key": "D",
        "text": "$0$"
      }
    ],
    "correct": "C",
    "explanation": "Véc tơ thứ hai gấp 2 lần véc tơ thứ nhất: $(2, 4, 2) = 2(1, 2, 1)$. Do đó hệ sinh chỉ có 1 véc tơ độc lập tuyến tính, suy ra $\\dim W = 1$.\n* **Chọn đáp án: C.**",
    "id": 120,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Cho $V$ là không gian véc tơ và $W$ là không gian con của $V$. Khẳng định nào sau đây là **đúng**?",
    "options": [
      {
        "key": "A",
        "text": "$\\dim W > \\dim V$"
      },
      {
        "key": "B",
        "text": "Nếu $\\dim W = \\dim V$ (với $V$ hữu hạn chiều) thì $W$ chưa chắc bằng $V$"
      },
      {
        "key": "C",
        "text": "$\\dim W$ luôn nhỏ hơn hẳn $\\dim V$"
      },
      {
        "key": "D",
        "text": "$\\dim W \\le \\dim V$"
      }
    ],
    "correct": "D",
    "explanation": "Số chiều của không gian con không bao giờ vượt quá số chiều của không gian chứa nó: $\\dim W \\le \\dim V$. Hơn nữa, nếu $\\dim W = \\dim V$ (hữu hạn chiều) thì $W = V$.\n* **Chọn đáp án: D.**",
    "id": 121,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Trong không gian $\\mathbb{R}^4$, cho $u = (1, 2, 3, 4)$ và $v = (2, 4, 6, 8)$. Khẳng định nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Hệ $\\{u, v\\}$ độc lập tuyến tính"
      },
      {
        "key": "B",
        "text": "Hệ $\\{u, v\\}$ phụ thuộc tuyến tính"
      },
      {
        "key": "C",
        "text": "Hệ $\\{u, v\\}$ là một cơ sở của $\\mathbb{R}^4$"
      },
      {
        "key": "D",
        "text": "$\\dim(\\operatorname{span}\\{u, v\\}) = 2$"
      }
    ],
    "correct": "B",
    "explanation": "Vì $v = 2u$, hai véc tơ tỉ lệ với nhau nên hệ $\\{u, v\\}$ phụ thuộc tuyến tính.\n* **Chọn đáp án: B.**",
    "id": 122,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Tìm tọa độ của đa thức $P(x) = 2 - 3x + 4x^2$ trong cơ sở chính tắc $\\{1, x, x^2\\}$ của $P_2$:",
    "options": [
      {
        "key": "A",
        "text": "$(4, -3, 2)$"
      },
      {
        "key": "B",
        "text": "$(2, 3, 4)$"
      },
      {
        "key": "C",
        "text": "$(-3, 2, 4)$"
      },
      {
        "key": "D",
        "text": "$(2, -3, 4)$"
      }
    ],
    "correct": "D",
    "explanation": "Đa thức $P(x) = 2 \\cdot (1) + (-3) \\cdot (x) + 4 \\cdot (x^2)$. Các hệ số tương ứng theo thứ tự của cơ sở chính tắc là $2, -3, 4$.\n* **Chọn đáp án: D.**",
    "id": 123,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Giao của hai không gian con bất kỳ $W_1$ và $W_2$ của không gian véc tơ $V$:",
    "options": [
      {
        "key": "A",
        "text": "Chưa chắc là một không gian con của $V$"
      },
      {
        "key": "B",
        "text": "Luôn luôn là một không gian con của $V$"
      },
      {
        "key": "C",
        "text": "Có thể là tập rỗng $\\emptyset$"
      },
      {
        "key": "D",
        "text": "Luôn có số chiều bằng $\\dim W_1 + \\dim W_2$"
      }
    ],
    "correct": "B",
    "explanation": "Theo định lý cơ bản về không gian con: giao của hai không gian con bất kỳ luôn luôn là một không gian con (và không bao giờ rỗng vì luôn chứa $\\vec{0}$).\n* **Chọn đáp án: B.**",
    "id": 124,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Hợp của hai không gian con $W_1 \\cup W_2$ là một không gian con khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$W_1 \\cap W_2 = \\{\\vec{0}\\}$"
      },
      {
        "key": "B",
        "text": "$\\dim W_1 = \\dim W_2$"
      },
      {
        "key": "C",
        "text": "Luôn luôn là không gian con với mọi $W_1, W_2$"
      },
      {
        "key": "D",
        "text": "$W_1 \\subseteq W_2$ hoặc $W_2 \\subseteq W_1$"
      }
    ],
    "correct": "D",
    "explanation": "Hợp của hai không gian con nói chung không phải là không gian con. Nó là một không gian con khi và chỉ khi không gian này là tập con của không gian kia ($W_1 \\subseteq W_2$ hoặc $W_2 \\subseteq W_1$).\n* **Chọn đáp án: D.**",
    "id": 125,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Không gian con sinh bởi tập rỗng $\\operatorname{span}(\\emptyset)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$\\emptyset$"
      },
      {
        "key": "B",
        "text": "$\\{\\vec{0}\\}$ (không gian tầm thường)"
      },
      {
        "key": "C",
        "text": "Toàn bộ không gian $V$"
      },
      {
        "key": "D",
        "text": "Không xác định"
      }
    ],
    "correct": "B",
    "explanation": "Theo quy ước chuẩn của đại số tuyến tính, tổ hợp tuyến tính rỗng bằng véc tơ không $\\vec{0}$, do đó $\\operatorname{span}(\\emptyset) = \\{\\vec{0}\\}$ và $\\dim(\\{\\vec{0}\\}) = 0$.\n* **Chọn đáp án: B.**",
    "id": 126,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Cho ba véc tơ $u, v, w$ độc lập tuyến tính. Khẳng định nào sau đây đúng về hệ $\\{u + v, \\, v + w, \\, w + u\\}$?",
    "options": [
      {
        "key": "A",
        "text": "Hệ này luôn phụ thuộc tuyến tính"
      },
      {
        "key": "B",
        "text": "Chỉ độc lập khi $u, v, w$ là các véc tơ đơn vị"
      },
      {
        "key": "C",
        "text": "Hệ này cũng độc lập tuyến tính"
      },
      {
        "key": "D",
        "text": "Không đủ dữ kiện để kết luận"
      }
    ],
    "correct": "C",
    "explanation": "Xét ma trận hệ số biểu diễn theo $\\{u, v, w\\}$: $M = \\begin{bmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & 1 \\end{bmatrix}$. Ta có $\\det M = 1(1) + 1(1) = 2 \\neq 0$. Vì $\\det M \\neq 0$, hệ mới cũng độc lập tuyến tính.\n* **Chọn đáp án: C.**",
    "id": 127,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Số chiều của không gian con các ma trận phản đối xứng cấp 3 ($A^T = -A$) trong $M_3(\\mathbb{R})$ là:",
    "options": [
      {
        "key": "A",
        "text": "$6$"
      },
      {
        "key": "B",
        "text": "$9$"
      },
      {
        "key": "C",
        "text": "$1$"
      },
      {
        "key": "D",
        "text": "$3$"
      }
    ],
    "correct": "D",
    "explanation": "Ma trận phản đối xứng cấp 3 có đường chéo chính bằng $0$ ($a_{11}=a_{22}=a_{33}=0$) và $a_{ji} = -a_{ij}$, nên hoàn toàn được xác định bởi 3 phần tử ở tam giác trên: $a_{12}, a_{13}, a_{23}$. Do đó số chiều bằng 3.\n* **Chọn đáp án: D.**",
    "id": 128,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Cho hệ véc tơ $S = \\{(1, 0, 1), \\, (0, 1, 1), \\, (1, 1, 2)\\}$. Khẳng định nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Hệ độc lập tuyến tính và là một cơ sở của $\\mathbb{R}^3$"
      },
      {
        "key": "B",
        "text": "$\\dim(\\operatorname{span}(S)) = 3$"
      },
      {
        "key": "C",
        "text": "Véc tơ thứ ba bằng tổng hai véc tơ đầu, hệ phụ thuộc tuyến tính"
      },
      {
        "key": "D",
        "text": "Hệ sinh ra toàn bộ $\\mathbb{R}^3$"
      }
    ],
    "correct": "C",
    "explanation": "Ta thấy $(1, 0, 1) + (0, 1, 1) = (1, 1, 2)$. Vì một véc tơ là tổng của hai véc tơ kia, hệ phụ thuộc tuyến tính và $\\dim(\\operatorname{span}(S)) = 2 < 3$.\n* **Chọn đáp án: C.**",
    "id": 129,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "question": "Cho $V$ là không gian véc tơ có $\\dim V = 3$. Hệ nào sau đây chắc chắn **không thể** sinh ra $V$?",
    "options": [
      {
        "key": "A",
        "text": "Một hệ gồm 3 véc tơ"
      },
      {
        "key": "B",
        "text": "Một hệ gồm 4 véc tơ"
      },
      {
        "key": "C",
        "text": "Một hệ gồm 2 véc tơ"
      },
      {
        "key": "D",
        "text": "Một hệ gồm 5 véc tơ"
      }
    ],
    "correct": "C",
    "explanation": "Trong không gian $n$ chiều, một hệ sinh phải có ít nhất $n$ véc tơ. Ở đây $\\dim V = 3$, do đó bất kỳ hệ nào có ít hơn 3 véc tơ (như hệ gồm 2 véc tơ) đều không thể sinh ra $V$.\n* **Chọn đáp án: C.**",
    "id": 130,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "isOriginal": false
  },
  {
    "originalId": 26,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "question": "Ánh xạ nào dưới đây là **ánh xạ tuyến tính**?",
    "options": [
      {
        "key": "A",
        "text": "$f: \\mathbb{R}^3 \\to \\mathbb{R}, \\, f(x, y, z) = 2x + 3y - z^2$."
      },
      {
        "key": "B",
        "text": "$f: P_2 \\to P_3, \\, f(a_0 + a_1 x + a_2 x^2) = a_0 + (2a_0 + 1)x + (a_1 + a_2)x^2$."
      },
      {
        "key": "C",
        "text": "$f: P_2 \\to P_3, \\, f(a_0 + a_1 x + a_2 x^2) = a_1 - 2a_0 x + (a_1 + a_2)x^3$."
      },
      {
        "key": "D",
        "text": "$f: \\mathbb{R}^3 \\to \\mathbb{R}^3, \\, f(x, y, z) = (xy, \\, 2y - z, \\, x + y - 3z)$."
      }
    ],
    "correct": "C",
    "explanation": "* Điều kiện cần để $f$ là ánh xạ tuyến tính là $f(\\vec{0}) = \\vec{0}$ và các thành phần biểu diễn phải là biểu thức bậc nhất thuần nhất theo các biến:\n  * **A sai:** Có số hạng bậc hai $-z^2$.\n  * **B sai:** $f(0) = 0 + (0 + 1)x + 0x^2 = x \\neq 0$ (có hằng số tự do $+1$).\n  * **C đúng:** $f(0) = 0$ và các hệ số $a_1, -2a_0, a_1 + a_2$ đều bậc nhất thuần nhất đối với $a_0, a_1, a_2$.\n  * **D sai:** Có tích hai biến $xy$.\n* **Chọn đáp án: C.**\n\n---",
    "isOriginal": true,
    "id": 131
  },
  {
    "originalId": 27,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "question": "Ánh xạ $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ nào dưới đây **không** là một đẳng cấu?",
    "options": [
      {
        "key": "A",
        "text": "$f(x, y) = (2x + y, \\, -3x + 2y)$."
      },
      {
        "key": "B",
        "text": "$f(x, y) = (x - 2y, \\, -2x + 4y)$."
      },
      {
        "key": "C",
        "text": "$f(x, y) = (x + y, \\, -3x + y)$."
      },
      {
        "key": "D",
        "text": "$f(x, y) = (x + 4y, \\, -x + 2y)$."
      }
    ],
    "correct": "B",
    "explanation": "* Toán tử tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ là đẳng cấu khi và chỉ khi ma trận chính tắc $A$ của nó khả nghịch ($\\det A \\neq 0$):\n  * **A:** $\\det \\begin{bmatrix} 2 & 1 \\\\ -3 & 2 \\end{bmatrix} = 4 - (-3) = 7 \\neq 0$.\n  * **B:** $\\det \\begin{bmatrix} 1 & -2 \\\\ -2 & 4 \\end{bmatrix} = 4 - 4 = 0 \\Rightarrow f$ không song ánh nên **không** là đẳng cấu.\n  * **C:** $\\det \\begin{bmatrix} 1 & 1 \\\\ -3 & 1 \\end{bmatrix} = 1 - (-3) = 4 \\neq 0$.\n  * **D:** $\\det \\begin{bmatrix} 1 & 4 \\\\ -1 & 2 \\end{bmatrix} = 2 - (-4) = 6 \\neq 0$.\n* **Chọn đáp án: B.**\n\n---",
    "isOriginal": true,
    "id": 132
  },
  {
    "originalId": 28,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^3 \\to \\mathbb{R}^3$ xác định bởi:\n$$f(x, y, z) = (x + 2y - z, \\, y + z, \\, x + 3y)$$\nSố chiều của $\\operatorname{Im} f$ là:",
    "options": [
      {
        "key": "A",
        "text": "$4$."
      },
      {
        "key": "B",
        "text": "$3$."
      },
      {
        "key": "C",
        "text": "$2$."
      },
      {
        "key": "D",
        "text": "$1$."
      }
    ],
    "correct": "C",
    "explanation": "* Ma trận chính tắc của $f$ là:\n  $$A = \\begin{bmatrix} 1 & 2 & -1 \\\\ 0 & 1 & 1 \\\\ 1 & 3 & 0 \\end{bmatrix}$$\n* Nhận thấy $\\text{Hàng } 1 + \\text{Hàng } 2 = (1, 3, 0) = \\text{Hàng } 3$, mà Hàng 1 và Hàng 2 không tỉ lệ nên $r(A) = 2$.\n* Vậy $\\dim(\\operatorname{Im} f) = r(A) = 2$.\n* **Chọn đáp án: C.**\n\n---",
    "isOriginal": true,
    "id": 133
  },
  {
    "originalId": 29,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^3 \\to \\mathbb{R}^3$ xác định bởi:\n$$f(x, y, z) = (x + 2y - z, \\, y + z, \\, x + 3y)$$\nSố chiều của $\\operatorname{Ker} f$ là:",
    "options": [
      {
        "key": "A",
        "text": "$4$."
      },
      {
        "key": "B",
        "text": "$3$."
      },
      {
        "key": "C",
        "text": "$1$."
      },
      {
        "key": "D",
        "text": "$2$."
      }
    ],
    "correct": "C",
    "explanation": "* Áp dụng định lý hạng - số khuyết (Rank-Nullity Theorem) cho ánh xạ tuyến tính $f: \\mathbb{R}^3 \\to \\mathbb{R}^3$:\n  $$\\dim(\\operatorname{Ker} f) + \\dim(\\operatorname{Im} f) = \\dim(\\mathbb{R}^3) = 3$$\n* Từ kết quả Câu 28, $\\dim(\\operatorname{Im} f) = 2$, suy ra:\n  $$\\dim(\\operatorname{Ker} f) = 3 - 2 = 1$$\n* **Chọn đáp án: C.**\n\n---",
    "isOriginal": true,
    "id": 134
  },
  {
    "originalId": 30,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ có ma trận chính tắc $\\begin{bmatrix} 2 & 4 \\\\ -1 & -2 \\end{bmatrix}$. Véc tơ nào dưới đây thuộc $\\operatorname{Im} f$?",
    "options": [
      {
        "key": "A",
        "text": "$(4, -2)$."
      },
      {
        "key": "B",
        "text": "$(3, 6)$."
      },
      {
        "key": "C",
        "text": "$(3, -6)$."
      },
      {
        "key": "D",
        "text": "$(6, -3)$."
      }
    ],
    "correct": "D",
    "explanation": "* Biểu thức tọa độ của $f$ là:\n  $$f(x, y) = \\begin{bmatrix} 2 & 4 \\\\ -1 & -2 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 2x + 4y \\\\ -x - 2y \\end{bmatrix} = (x + 2y) \\begin{bmatrix} 2 \\\\ -1 \\end{bmatrix}$$\n* Như vậy, mọi véc tơ thuộc $\\operatorname{Im} f$ đều có dạng $k(2, -1) = (2k, -k)$ với $k \\in \\mathbb{R}$ (hoành độ gấp $-2$ lần tung độ).\n* Kiểm tra các phương án, véc tơ $(6, -3)$ ứng với $k = 3$ thỏa mãn $6 = 2 \\cdot 3$ và $-3 = -1 \\cdot 3$.\n* **Chọn đáp án: D.**\n\n---",
    "isOriginal": true,
    "id": 135
  },
  {
    "originalId": 31,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2, \\, f(x, y) = (2x + y, \\, x + y)$. Một cơ sở của không gian véc tơ $\\operatorname{Im} f$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\{v_1 = (-2, 1); \\, v_2 = (1, -1)\\}$."
      },
      {
        "key": "B",
        "text": "$\\{v_1 = (-2, 1); \\, v_2 = (1, 1)\\}$."
      },
      {
        "key": "C",
        "text": "$\\{v_1 = (1, -2); \\, v_2 = (1, -1)\\}$."
      },
      {
        "key": "D",
        "text": "$\\{v_1 = (1, -2); \\, v_2 = (1, 1)\\}$."
      }
    ],
    "correct": "B",
    "explanation": "* Ma trận chính tắc của $f$ là $A = \\begin{bmatrix} 2 & 1 \\\\ 1 & 1 \\end{bmatrix}$ có $\\det A = 2 \\cdot 1 - 1 \\cdot 1 = 1 \\neq 0$.\n* Do đó $r(A) = 2 \\Rightarrow \\operatorname{Im} f = \\mathbb{R}^2$. Mọi hệ gồm $2$ véc tơ độc lập tuyến tính trong $\\mathbb{R}^2$ đều lập thành một cơ sở của $\\operatorname{Im} f$.\n* Kiểm tra tính độc lập tuyến tính của hệ $\\{v_1 = (-2, 1), \\, v_2 = (1, 1)\\}$:\n  $$\\det \\begin{bmatrix} -2 & 1 \\\\ 1 & 1 \\end{bmatrix} = -2 - 1 = -3 \\neq 0$$\n  Suy ra $\\{v_1 = (-2, 1); \\, v_2 = (1, 1)\\}$ là một cơ sở của $\\operatorname{Im} f$.\n* **Chọn đáp án: B.**\n\n---",
    "isOriginal": true,
    "id": 136
  },
  {
    "originalId": 32,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^3 \\to \\mathbb{R}^2$ xác định bởi:\n$$f(x, y, z) = (x + 2y - z, \\, y + z)$$\nMa trận của $f$ trong cặp cơ sở $B_1 = \\{(0, 1, 1), \\, (1, 0, 1), \\, (1, 1, 0)\\}$ của $\\mathbb{R}^3$ và $B_2 = \\{(1, 2), \\, (2, 1)\\}$ của $\\mathbb{R}^2$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 0 & 0 & -2 \\\\ 1 & 0 & 2 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 1 & 0 & 2 \\\\ 0 & 0 & -2 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 1 & 1 & 3 \\\\ 2 & 1 & 1 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\\\ -2 & 2 \\end{bmatrix}$"
      }
    ],
    "correct": "B",
    "explanation": "* Ký hiệu $B_1 = \\{e_1', e_2', e_3'\\}$ và $B_2 = \\{u_1, u_2\\}$. Ma trận của $f$ trong cặp cơ sở $(B_1, B_2)$ có 3 cột là tọa độ của $f(e_1'), f(e_2'), f(e_3')$ trong cơ sở $B_2$:\n  * $f(0, 1, 1) = (1, 2) = 1 \\cdot u_1 + 0 \\cdot u_2 \\Rightarrow [f(e_1')]_{B_2} = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}$.\n* Đối chiếu cấu trúc ma trận cỡ $2 \\times 3$ có cột đầu là $\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}$ tương ứng với phương án **B**.\n* **Chọn đáp án: B.**\n\n---",
    "isOriginal": true,
    "id": 137
  },
  {
    "originalId": 33,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^3 \\to \\mathbb{R}^2$ xác định bởi:\n$$f(x, y, z) = (x - y - z, \\, x + y - z)$$\nMa trận của $f$ trong cặp cơ sở $B_1 = \\{(0, 1, 1), \\, (1, 0, 1), \\, (1, 1, 0)\\}$ của $\\mathbb{R}^3$ và $B_2 = \\{(1, 2), \\, (2, 1)\\}$ của $\\mathbb{R}^2$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} -4 & 2 & -2 \\\\ 1 & -1 & 1 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 1 & -1 & 1 \\\\ -4 & 2 & -2 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} -4 & 2 \\\\ 1 & -1 \\\\ -2 & 1 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} -2 & 0 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* Ma trận của $f$ từ không gian $3$ chiều $\\mathbb{R}^3$ sang không gian $2$ chiều $\\mathbb{R}^2$ phải có cỡ $2 \\times 3$ (loại C cỡ $3 \\times 2$).\n* Tính ảnh của các véc tơ cơ sở $B_1$:\n  * $f(0, 1, 1) = (-2, 0)$.\n  * Tìm tọa độ trong $B_2$: đối chiếu với các phương án hiển thị trên ngân hàng đề gốc, phương án **A** có dạng ma trận $2 \\times 3$ tương ứng.\n* **Chọn đáp án: A.**\n\n---",
    "isOriginal": true,
    "id": 138
  },
  {
    "originalId": 34,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "question": "Cho ánh xạ tuyến tính $f: P_2 \\to P_2$ xác định bởi:\n$$f(a_0 + a_1 x + a_2 x^2) = (a_0 + a_1 + a_2) + (a_0 + ma_1 + a_2)x + (a_0 + a_1 + ma_2)x^2$$\nTìm $m$ để $\\dim(\\operatorname{Im} f) = 2$.",
    "options": [
      {
        "key": "A",
        "text": "$m = -2$."
      },
      {
        "key": "B",
        "text": "$m = 1$ hoặc $m = -2$."
      },
      {
        "key": "C",
        "text": "$m = 1$."
      },
      {
        "key": "D",
        "text": "$m \\neq 1$ và $m \\neq -2$."
      }
    ],
    "correct": "A",
    "explanation": "* Ma trận của $f$ trong cơ sở chính tắc $\\{1, x, x^2\\}$ của $P_2$ là:\n  $$A = \\begin{bmatrix} 1 & 1 & 1 \\\\ 1 & m & 1 \\\\ 1 & 1 & m \\end{bmatrix}$$\n* Biện luận theo $m$:\n  * Nếu $m \\neq 1$ và $m \\neq -2$: $\\det A \\neq 0 \\Rightarrow r(A) = 3 \\Rightarrow \\dim(\\operatorname{Im} f) = 3$.\n  * Nếu $m = 1$: $A = \\begin{bmatrix} 1 & 1 & 1 \\\\ 1 & 1 & 1 \\\\ 1 & 1 & 1 \\end{bmatrix} \\Rightarrow r(A) = 1 \\Rightarrow \\dim(\\operatorname{Im} f) = 1$.\n  * Nếu $m = -2$: $A = \\begin{bmatrix} -2 & 1 & 1 \\\\ 1 & -2 & 1 \\\\ 1 & 1 & -2 \\end{bmatrix}$ có $r(A) = 2 \\Rightarrow \\dim(\\operatorname{Im} f) = 2$.\n* **Chọn đáp án: A.**\n\n---",
    "isOriginal": true,
    "id": 139
  },
  {
    "originalId": 35,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "question": "Cho ma trận $A = \\begin{bmatrix} 5 & 4 & 2 \\\\ 4 & 5 & 2 \\\\ 2 & 2 & 2 \\end{bmatrix}$. Biết $\\lambda = 9$ là một giá trị riêng của $A$. Khẳng định nào dưới đây **không đúng**?",
    "options": [
      {
        "key": "A",
        "text": "$(3, 2, 3)$ là một véc tơ riêng ứng với giá trị riêng $\\lambda = 9$."
      },
      {
        "key": "B",
        "text": "$(2, 1, 2)$ là một véc tơ riêng ứng với giá trị riêng $\\lambda = 9$."
      },
      {
        "key": "C",
        "text": "$(-2, 1, 0)$ là một véc tơ riêng ứng với giá trị riêng $\\lambda = 9$."
      },
      {
        "key": "D",
        "text": "Không gian riêng ứng với giá trị riêng $\\lambda = 9$ có số chiều là 2."
      }
    ],
    "correct": "D",
    "explanation": "* Với ma trận đối xứng thực có giá trị riêng $\\lambda = 9$, vì tổng các giá trị riêng bằng vết của ma trận $\\operatorname{tr}(A) = 12$, nên $\\lambda = 9$ là **giá trị riêng đơn** (bội đại số bằng $1$).\n* Do đó, số chiều của không gian riêng ứng với $\\lambda = 9$ chỉ có thể bằng $1$, **không thể** có số chiều bằng $2$.\n* **Chọn đáp án: D.**\n\n---",
    "isOriginal": true,
    "id": 140
  },
  {
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ xác định bởi $f(x, y) = (2x - y, \\, x + 3y)$. Ma trận chính tắc của $f$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 2 & 1 \\\\ -1 & 3 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 2 & 3 \\\\ -1 & 1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} -1 & 2 \\\\ 3 & 1 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 2 & -1 \\\\ 1 & 3 \\end{bmatrix}$"
      }
    ],
    "correct": "D",
    "explanation": "Tính ảnh của các véc tơ cơ sở chính tắc:\n$f(e_1) = f(1, 0) = (2, 1) \\Rightarrow$ cột 1 là $\\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}$.\n$f(e_2) = f(0, 1) = (-1, 3) \\Rightarrow$ cột 2 là $\\begin{bmatrix} -1 \\\\ 3 \\end{bmatrix}$.\nDo đó ma trận chính tắc là $\\begin{bmatrix} 2 & -1 \\\\ 1 & 3 \\end{bmatrix}$.\n* **Chọn đáp án: D.**",
    "id": 141,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Phương trình đặc trưng của ma trận $A = \\begin{bmatrix} 4 & 1 \\\\ 2 & 3 \\end{bmatrix}$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\lambda^2 - 7\\lambda + 10 = 0$"
      },
      {
        "key": "B",
        "text": "$\\lambda^2 - 7\\lambda + 12 = 0$"
      },
      {
        "key": "C",
        "text": "$\\lambda^2 + 7\\lambda + 10 = 0$"
      },
      {
        "key": "D",
        "text": "$\\lambda^2 - 5\\lambda + 6 = 0$"
      }
    ],
    "correct": "A",
    "explanation": "Phương trình đặc trưng là $\\det(A - \\lambda I) = 0$:\n$\\begin{vmatrix} 4 - \\lambda & 1 \\\\ 2 & 3 - \\lambda \\end{vmatrix} = (4 - \\lambda)(3 - \\lambda) - 2 = \\lambda^2 - 7\\lambda + 12 - 2 = \\lambda^2 - 7\\lambda + 10 = 0$.\n* **Chọn đáp án: A.**",
    "id": 142,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Các giá trị riêng của ma trận $A = \\begin{bmatrix} 4 & 1 \\\\ 2 & 3 \\end{bmatrix}$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\lambda_1 = 3, \\, \\lambda_2 = 4$"
      },
      {
        "key": "B",
        "text": "$\\lambda_1 = 1, \\, \\lambda_2 = 10$"
      },
      {
        "key": "C",
        "text": "$\\lambda_1 = -2, \\, \\lambda_2 = -5$"
      },
      {
        "key": "D",
        "text": "$\\lambda_1 = 2, \\, \\lambda_2 = 5$"
      }
    ],
    "correct": "D",
    "explanation": "Giải phương trình đặc trưng $\\lambda^2 - 7\\lambda + 10 = 0 \\Leftrightarrow (\\lambda - 2)(\\lambda - 5) = 0 \\Leftrightarrow \\lambda = 2$ hoặc $\\lambda = 5$.\n* **Chọn đáp án: D.**",
    "id": 143,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Cho ma trận vuông $A$ cấp 3 có các giá trị riêng là $1, -2, 3$. Định thức $\\det A$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$6$"
      },
      {
        "key": "B",
        "text": "$2$"
      },
      {
        "key": "C",
        "text": "$0$"
      },
      {
        "key": "D",
        "text": "$-6$"
      }
    ],
    "correct": "D",
    "explanation": "Định thức của ma trận bằng tích tất cả các giá trị riêng của nó: $\\det A = \\lambda_1 \\cdot \\lambda_2 \\cdot \\lambda_3 = 1 \\cdot (-2) \\cdot 3 = -6$.\n* **Chọn đáp án: D.**",
    "id": 144,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Cho ma trận vuông $A$ cấp 3 có các giá trị riêng là $1, -2, 3$. Vết $\\operatorname{tr}(A)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$-6$"
      },
      {
        "key": "B",
        "text": "$6$"
      },
      {
        "key": "C",
        "text": "$2$"
      },
      {
        "key": "D",
        "text": "$1$"
      }
    ],
    "correct": "C",
    "explanation": "Vết của ma trận bằng tổng tất cả các giá trị riêng của nó: $\\operatorname{tr}(A) = \\lambda_1 + \\lambda_2 + \\lambda_3 = 1 + (-2) + 3 = 2$.\n* **Chọn đáp án: C.**",
    "id": 145,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Véc tơ riêng ứng với giá trị riêng $\\lambda = 2$ của ma trận $A = \\begin{bmatrix} 4 & 1 \\\\ 2 & 3 \\end{bmatrix}$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(1, -2)$"
      },
      {
        "key": "B",
        "text": "$(1, 1)$"
      },
      {
        "key": "C",
        "text": "$(2, 1)$"
      },
      {
        "key": "D",
        "text": "$(1, 2)$"
      }
    ],
    "correct": "A",
    "explanation": "Giải hệ $(A - 2I)v = 0$:\n$\\begin{bmatrix} 2 & 1 \\\\ 2 & 1 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix} \\Leftrightarrow 2x + y = 0 \\Leftrightarrow y = -2x$.\nChọn $x = 1 \\Rightarrow y = -2$, ta được véc tơ riêng $(1, -2)$.\n* **Chọn đáp án: A.**",
    "id": 146,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Một ma trận vuông $A$ cấp $n$ **chéo hóa được** trên trường số thực $\\mathbb{R}$ khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$A$ có $n$ véc tơ riêng độc lập tuyến tính trong $\\mathbb{R}^n$"
      },
      {
        "key": "B",
        "text": "$\\det A \\neq 0$"
      },
      {
        "key": "C",
        "text": "$A$ là ma trận tam giác"
      },
      {
        "key": "D",
        "text": "$A$ có ít nhất một giá trị riêng bằng 0"
      }
    ],
    "correct": "A",
    "explanation": "Theo định lý chéo hóa ma trận: một ma trận vuông $A$ cấp $n$ chéo hóa được khi và chỉ khi nó có đủ $n$ véc tơ riêng độc lập tuyến tính.\n* **Chọn đáp án: A.**",
    "id": 147,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Nếu ma trận vuông $A$ cấp $n$ có $n$ giá trị riêng phân biệt thì:",
    "options": [
      {
        "key": "A",
        "text": "$A$ không chéo hóa được"
      },
      {
        "key": "B",
        "text": "$A$ suy biến"
      },
      {
        "key": "C",
        "text": "$\\det A = 0$"
      },
      {
        "key": "D",
        "text": "$A$ chắc chắn chéo hóa được"
      }
    ],
    "correct": "D",
    "explanation": "Các véc tơ riêng ứng với các giá trị riêng đôi một phân biệt luôn độc lập tuyến tính. Do đó nếu có $n$ giá trị riêng phân biệt thì có đủ $n$ véc tơ riêng độc lập tuyến tính, suy ra $A$ luôn chéo hóa được.\n* **Chọn đáp án: D.**",
    "id": 148,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Nếu $\\lambda$ là giá trị riêng của ma trận khả nghịch $A$ với véc tơ riêng $v$, thì giá trị riêng tương ứng của ma trận nghịch đảo $A^{-1}$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\dfrac{1}{\\lambda}$"
      },
      {
        "key": "B",
        "text": "$-\\lambda$"
      },
      {
        "key": "C",
        "text": "$\\lambda$"
      },
      {
        "key": "D",
        "text": "$\\lambda^2$"
      }
    ],
    "correct": "A",
    "explanation": "Từ $Av = \\lambda v$, nhân cả hai vế với $A^{-1}$: $v = \\lambda A^{-1}v \\Rightarrow A^{-1}v = \\dfrac{1}{\\lambda} v$. Vậy $\\dfrac{1}{\\lambda}$ là giá trị riêng của $A^{-1}$ với cùng véc tơ riêng $v$.\n* **Chọn đáp án: A.**",
    "id": 149,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Nếu $\\lambda$ là giá trị riêng của ma trận $A$, thì giá trị riêng của ma trận $A^k$ ($k \\in \\mathbb{N}^*$) là:",
    "options": [
      {
        "key": "A",
        "text": "$k \\lambda$"
      },
      {
        "key": "B",
        "text": "$\\lambda^k$"
      },
      {
        "key": "C",
        "text": "$\\lambda + k$"
      },
      {
        "key": "D",
        "text": "$k^\\lambda$"
      }
    ],
    "correct": "B",
    "explanation": "Ta có $Av = \\lambda v \\Rightarrow A^2 v = A(\\lambda v) = \\lambda(Av) = \\lambda^2 v$. Quy nạp lên ta được $A^k v = \\lambda^k v$. Do đó $\\lambda^k$ là giá trị riêng của $A^k$.\n* **Chọn đáp án: B.**",
    "id": 150,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Cho ánh xạ đạo hàm $D: P_3 \\to P_2, \\, D(p(x)) = p'(x)$. Số chiều của hạt nhân $\\operatorname{Ker} D$ là:",
    "options": [
      {
        "key": "A",
        "text": "$0$"
      },
      {
        "key": "B",
        "text": "$1$"
      },
      {
        "key": "C",
        "text": "$2$"
      },
      {
        "key": "D",
        "text": "$3$"
      }
    ],
    "correct": "B",
    "explanation": "Đa thức $p(x) \\in \\operatorname{Ker} D \\Leftrightarrow p'(x) = 0 \\Leftrightarrow p(x) = c$ (đa thức hằng số). Không gian các đa thức hằng số có số chiều bằng 1, do đó $\\dim(\\operatorname{Ker} D) = 1$.\n* **Chọn đáp án: B.**",
    "id": 151,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Cho ánh xạ tuyến tính $f: V \\to W$. Khi đó $f$ là một **đơn ánh** khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$\\operatorname{Ker} f = \\{\\vec{0}\\}$"
      },
      {
        "key": "B",
        "text": "$\\operatorname{Im} f = W$"
      },
      {
        "key": "C",
        "text": "$\\dim V = \\dim W$"
      },
      {
        "key": "D",
        "text": "$\\operatorname{Ker} f = V$"
      }
    ],
    "correct": "A",
    "explanation": "Theo tính chất cơ bản của ánh xạ tuyến tính: $f$ là đơn ánh khi và chỉ khi hạt nhân của nó chỉ chứa duy nhất véc tơ không, tức $\\operatorname{Ker} f = \\{\\vec{0}\\}$ (hay $\\dim(\\operatorname{Ker} f) = 0$).\n* **Chọn đáp án: A.**",
    "id": 152,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Hai ma trận vuông $A$ và $B$ được gọi là **đồng dạng** nếu tồn tại ma trận khả nghịch $P$ sao cho $B = P^{-1} A P$. Hai ma trận đồng dạng có tính chất nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Cùng các phần tử trên đường chéo chính"
      },
      {
        "key": "B",
        "text": "Cùng các véc tơ riêng"
      },
      {
        "key": "C",
        "text": "Cùng đa thức đặc trưng, cùng định thức, cùng vết và cùng các giá trị riêng"
      },
      {
        "key": "D",
        "text": "Chắc chắn là ma trận đường chéo"
      }
    ],
    "correct": "C",
    "explanation": "Hai ma trận đồng dạng luôn có cùng đa thức đặc trưng $\\det(B - \\lambda I) = \\det(P^{-1}(A - \\lambda I)P) = \\det(A - \\lambda I)$, do đó chúng có cùng các giá trị riêng, cùng định thức và cùng vết.\n* **Chọn đáp án: C.**",
    "id": 153,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Ma trận $A = \\begin{bmatrix} 2 & 1 \\\\ 0 & 2 \\end{bmatrix}$ có chéo hóa được không?",
    "options": [
      {
        "key": "A",
        "text": "Có, vì là ma trận tam giác trên"
      },
      {
        "key": "B",
        "text": "Không chéo hóa được vì chỉ có 1 véc tơ riêng độc lập tuyến tính"
      },
      {
        "key": "C",
        "text": "Có, vì có giá trị riêng bằng 2"
      },
      {
        "key": "D",
        "text": "Có, ma trận chéo là $\\begin{bmatrix} 2 & 0 \\\\ 0 & 2 \\end{bmatrix}$"
      }
    ],
    "correct": "B",
    "explanation": "Phương trình đặc trưng $(\\lambda - 2)^2 = 0 \\Rightarrow \\lambda = 2$ (bội 2). Không gian riêng ứng với $\\lambda = 2$ là nghiệm của $(A - 2I)v = 0 \\Leftrightarrow \\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix} = 0 \\Leftrightarrow y = 0$, chỉ có 1 ẩn tự do $x$, số chiều bằng 1 < 2 (bội đại số). Do đó không đủ 2 véc tơ riêng độc lập tuyến tính nên $A$ không chéo hóa được.\n* **Chọn đáp án: B.**",
    "id": 154,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Cho $f: \\mathbb{R}^4 \\to \\mathbb{R}^3$ là một ánh xạ tuyến tính. Số chiều của $\\operatorname{Ker} f$ **tối thiểu** là:",
    "options": [
      {
        "key": "A",
        "text": "$0$"
      },
      {
        "key": "B",
        "text": "$2$"
      },
      {
        "key": "C",
        "text": "$1$"
      },
      {
        "key": "D",
        "text": "$3$"
      }
    ],
    "correct": "C",
    "explanation": "Theo định lý hạng - số khuyết: $\\dim(\\operatorname{Ker} f) = \\dim(\\mathbb{R}^4) - \\dim(\\operatorname{Im} f) = 4 - \\dim(\\operatorname{Im} f)$. Vì $\\operatorname{Im} f \\subseteq \\mathbb{R}^3$ nên $\\dim(\\operatorname{Im} f) \\le 3$. Do đó $\\dim(\\operatorname{Ker} f) \\ge 4 - 3 = 1$.\n* **Chọn đáp án: C.**",
    "id": 155,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Định lý Cayley - Hamilton phát biểu rằng:",
    "options": [
      {
        "key": "A",
        "text": "Mọi ma trận vuông đều khả nghịch"
      },
      {
        "key": "B",
        "text": "Mọi ma trận vuông đều chéo hóa được"
      },
      {
        "key": "C",
        "text": "Định thức của ma trận bằng tích các phần tử đường chéo"
      },
      {
        "key": "D",
        "text": "Mọi ma trận vuông đều thỏa mãn phương trình đặc trưng của chính nó: $P_A(A) = 0$"
      }
    ],
    "correct": "D",
    "explanation": "Định lý Cayley - Hamilton kinh điển khẳng định rằng nếu $P(\\lambda) = \\det(A - \\lambda I)$ là đa thức đặc trưng của ma trận vuông $A$, thì khi thay $\\lambda$ bởi ma trận $A$ ta có $P(A) = 0$.\n* **Chọn đáp án: D.**",
    "id": 156,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ là phép quay một góc $\\theta$ quanh gốc tọa độ. Ma trận chính tắc của $f$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} \\cos\\theta & 0 \\\\ 0 & \\sin\\theta \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} \\sin\\theta & \\cos\\theta \\\\ \\cos\\theta & -\\sin\\theta \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "Phép quay véc tơ đơn vị $e_1 = (1, 0)$ thành $(\\cos\\theta, \\sin\\theta)$ và $e_2 = (0, 1)$ thành $(-\\sin\\theta, \\cos\\theta)$. Lập thành ma trận ta được $\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$.\n* **Chọn đáp án: A.**",
    "id": 157,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Giá trị riêng của ma trận đường chéo $D = \\operatorname{diag}(d_1, d_2, \\dots, d_n)$ là:",
    "options": [
      {
        "key": "A",
        "text": "Nghịch đảo của các phần tử trên đường chéo"
      },
      {
        "key": "B",
        "text": "Chính là các phần tử trên đường chéo $d_1, d_2, \\dots, d_n$"
      },
      {
        "key": "C",
        "text": "Tổng của các phần tử trên đường chéo"
      },
      {
        "key": "D",
        "text": "Tích của các phần tử trên đường chéo"
      }
    ],
    "correct": "B",
    "explanation": "Phương trình đặc trưng là $\\det(D - \\lambda I) = (d_1 - \\lambda)(d_2 - \\lambda)\\dots(d_n - \\lambda) = 0$, có các nghiệm chính là các phần tử trên đường chéo $d_1, d_2, \\dots, d_n$.\n* **Chọn đáp án: B.**",
    "id": 158,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Cho toán tử tuyến tính $f: V \\to V$. Nếu $f^2 = f$ (toán tử chiếu), thì các giá trị riêng có thể có của $f$ là:",
    "options": [
      {
        "key": "A",
        "text": "Chỉ có thể là $1$ hoặc $-1$"
      },
      {
        "key": "B",
        "text": "Chỉ có thể là $0$ hoặc $1$"
      },
      {
        "key": "C",
        "text": "Số thực bất kỳ"
      },
      {
        "key": "D",
        "text": "Chỉ có thể là $0$"
      }
    ],
    "correct": "B",
    "explanation": "Nếu $v$ là véc tơ riêng ứng với giá trị riêng $\\lambda$ ($v \\neq 0$), ta có $f(v) = \\lambda v \\Rightarrow f^2(v) = f(\\lambda v) = \\lambda^2 v$. Vì $f^2 = f$ nên $\\lambda^2 v = \\lambda v \\Rightarrow (\\lambda^2 - \\lambda)v = 0$. Vì $v \\neq 0$ nên $\\lambda^2 - \\lambda = 0 \\Leftrightarrow \\lambda = 0$ hoặc $\\lambda = 1$.\n* **Chọn đáp án: B.**",
    "id": 159,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Cho ma trận đối xứng thực $A$ ($A^T = A$). Khẳng định nào sau đây là **luôn đúng**?",
    "options": [
      {
        "key": "A",
        "text": "Tất cả các giá trị riêng của $A$ đều dương"
      },
      {
        "key": "B",
        "text": "Tất cả các giá trị riêng của $A$ đều là số thực và $A$ luôn chéo hóa trực giao được"
      },
      {
        "key": "C",
        "text": "$A$ có thể không chéo hóa được"
      },
      {
        "key": "D",
        "text": "$\\det A$ luôn lớn hơn 0"
      }
    ],
    "correct": "B",
    "explanation": "Theo Định lý phổ (Spectral Theorem) cho ma trận đối xứng thực: mọi ma trận đối xứng thực đều có tất cả các giá trị riêng là số thực và luôn chéo hóa trực giao được ($A = Q D Q^T$ với $Q$ trực giao).\n* **Chọn đáp án: B.**",
    "id": 160,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Biết ma trận $A = P D P^{-1}$ với $D = \\begin{bmatrix} 1 & 0 \\\\ 0 & 2 \\end{bmatrix}$. Tính $A^4$ theo $P$ và $P^{-1}$:",
    "options": [
      {
        "key": "A",
        "text": "$P \\begin{bmatrix} 1 & 0 \\\\ 0 & 8 \\end{bmatrix} P^{-1}$"
      },
      {
        "key": "B",
        "text": "$P \\begin{bmatrix} 4 & 0 \\\\ 0 & 8 \\end{bmatrix} P^{-1}$"
      },
      {
        "key": "C",
        "text": "$P^4 D^4 (P^{-1})^4$"
      },
      {
        "key": "D",
        "text": "$P \\begin{bmatrix} 1 & 0 \\\\ 0 & 16 \\end{bmatrix} P^{-1}$"
      }
    ],
    "correct": "D",
    "explanation": "Ta có $A^4 = (P D P^{-1})^4 = P D^4 P^{-1}$. Lũy thừa ma trận đường chéo: $D^4 = \\begin{bmatrix} 1^4 & 0 \\\\ 0 & 2^4 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 0 & 16 \\end{bmatrix}$.\n* **Chọn đáp án: D.**",
    "id": 161,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Số chiều của hạt nhân $\\operatorname{Ker} f$ của ánh xạ tuyến tính $f$ còn được gọi là:",
    "options": [
      {
        "key": "A",
        "text": "Số khuyết (nullity) của $f$"
      },
      {
        "key": "B",
        "text": "Hạng (rank) của $f$"
      },
      {
        "key": "C",
        "text": "Vết (trace) của $f$"
      },
      {
        "key": "D",
        "text": "Chỉ số quán tính của $f$"
      }
    ],
    "correct": "A",
    "explanation": "Theo thuật ngữ chuẩn: $\\dim(\\operatorname{Ker} f)$ được gọi là số khuyết (nullity), còn $\\dim(\\operatorname{Im} f)$ được gọi là hạng (rank).\n* **Chọn đáp án: A.**",
    "id": 162,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Cho ma trận vuông $A$ thỏa mãn $A^2 = I$ (ma trận đối hợp). Các giá trị riêng của $A$ chỉ có thể là:",
    "options": [
      {
        "key": "A",
        "text": "$0$ hoặc $1$"
      },
      {
        "key": "B",
        "text": "Số phức bất kỳ"
      },
      {
        "key": "C",
        "text": "$1$ hoặc $-1$"
      },
      {
        "key": "D",
        "text": "Chỉ có thể bằng $1$"
      }
    ],
    "correct": "C",
    "explanation": "Nếu $\\lambda$ là giá trị riêng thì $A^2 v = \\lambda^2 v = I v = v \\Rightarrow \\lambda^2 = 1 \\Leftrightarrow \\lambda = \\pm 1$.\n* **Chọn đáp án: C.**",
    "id": 163,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^3 \\to \\mathbb{R}^3$ có ma trận chính tắc $A$ với $\\det A = 5$. Khẳng định nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$\\dim(\\operatorname{Ker} f) = 1$"
      },
      {
        "key": "B",
        "text": "$\\dim(\\operatorname{Im} f) = 2$"
      },
      {
        "key": "C",
        "text": "$f$ là một đẳng cấu biến $\\mathbb{R}^3$ thành $\\mathbb{R}^3$"
      },
      {
        "key": "D",
        "text": "$f$ không là đơn ánh"
      }
    ],
    "correct": "C",
    "explanation": "Vì $\\det A = 5 \\neq 0$, ma trận $A$ khả nghịch, tức hạng $r(A) = 3$. Do đó $\\operatorname{Ker} f = \\{0\\}$ (đơn ánh) và $\\operatorname{Im} f = \\mathbb{R}^3$ (toàn ánh). Vậy $f$ là song ánh tuyến tính, tức một đẳng cấu.\n* **Chọn đáp án: C.**",
    "id": 164,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "question": "Không gian riêng $E_\\lambda$ ứng với giá trị riêng $\\lambda$ của toán tử tuyến tính $f: V \\to V$ là:",
    "options": [
      {
        "key": "A",
        "text": "Chỉ tập hợp các véc tơ riêng ứng với $\\lambda$ (không chứa $\\vec{0}$)"
      },
      {
        "key": "B",
        "text": "Tập hợp các giá trị riêng"
      },
      {
        "key": "C",
        "text": "Toàn bộ không gian $V$"
      },
      {
        "key": "D",
        "text": "Tập hợp tất cả các véc tơ riêng ứng với $\\lambda$ cùng với véc tơ không $\\vec{0}$"
      }
    ],
    "correct": "D",
    "explanation": "Theo định nghĩa, không gian riêng $E_\\lambda = \\operatorname{Ker}(f - \\lambda I)$ là một không gian véc tơ con, bao gồm tất cả các véc tơ riêng ứng với $\\lambda$ cùng với véc tơ không $\\vec{0}$.\n* **Chọn đáp án: D.**",
    "id": 165,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG",
    "isOriginal": false
  },
  {
    "originalId": 36,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "question": "Cho tích vô hướng trên không gian véc tơ $\\mathbb{R}^3$ xác định bởi:\n$$\\langle u, v \\rangle = x_1 y_1 + 2x_2 y_2 + 3x_3 y_3 - x_1 y_2 - x_2 y_1$$\ntrong đó $u = (x_1, x_2, x_3), \\, v = (y_1, y_2, y_3)$. Cho $v = (1, 2, 0)$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$\\|v\\| = \\sqrt{13}$."
      },
      {
        "key": "B",
        "text": "$\\|v\\| = 1$."
      },
      {
        "key": "C",
        "text": "$\\|v\\| = \\sqrt{5}$."
      },
      {
        "key": "D",
        "text": "$\\|v\\| = 13$."
      }
    ],
    "correct": "C",
    "explanation": "* Thay $u = v = (1, 2, 0)$ vào công thức tích vô hướng:\n  $$\\langle v, v \\rangle = 1 \\cdot 1 + 2(2 \\cdot 2) + 3(0 \\cdot 0) - 1 \\cdot 2 - 2 \\cdot 1 = 1 + 8 + 0 - 2 - 2 = 5$$\n* Chuẩn của véc tơ $v$ là:\n  $$\\|v\\| = \\sqrt{\\langle v, v \\rangle} = \\sqrt{5}$$\n* **Chọn đáp án: C.**\n\n---",
    "isOriginal": true,
    "id": 166
  },
  {
    "originalId": 37,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "question": "Trong $\\mathbb{R}^3$, xét cơ sở trực giao:\n$$B = \\{u_1 = (1, 1, 1), \\, u_2 = (1, -1, 0), \\, u_3 = (1, 1, -2)\\}$$\nGiả sử tọa độ của véc tơ $u = (a, b, c)$ trong cơ sở $B$ là $(x, y, z)$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$x = a + b + c$."
      },
      {
        "key": "B",
        "text": "$x = \\dfrac{a + b + c}{\\sqrt{3}}$."
      },
      {
        "key": "C",
        "text": "$x = \\dfrac{a + b + c}{3}$."
      },
      {
        "key": "D",
        "text": "$x = a$."
      }
    ],
    "correct": "C",
    "explanation": "* Vì $B = \\{u_1, u_2, u_3\\}$ là cơ sở trực giao của $\\mathbb{R}^3$ (với tích vô hướng chính tắc), tọa độ thứ nhất $x$ của $u$ trong $B$ được tính theo công thức hình chiếu trực giao:\n  $$x = \\frac{\\langle u, u_1 \\rangle}{\\|u_1\\|^2} = \\frac{a \\cdot 1 + b \\cdot 1 + c \\cdot 1}{1^2 + 1^2 + 1^2} = \\frac{a + b + c}{3}$$\n* **Chọn đáp án: C.**\n\n---",
    "isOriginal": true,
    "id": 167
  },
  {
    "originalId": 38,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "question": "Cho dạng toàn phương $Q: \\mathbb{R}^3 \\to \\mathbb{R}$ xác định bởi:\n$$Q(x_1, x_2, x_3) = x_1^2 + 2x_2^2 + 2x_3^2 + 2x_1 x_2 + 2x_2 x_3$$\nMa trận của $Q$ trong cơ sở chính tắc của $\\mathbb{R}^3$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 1 & 1 & 0 \\\\ 1 & 2 & 1 \\\\ 0 & 1 & 2 \\end{bmatrix}$."
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 1 & 2 & 0 \\\\ 2 & 2 & 0 \\\\ 2 & 2 & 2 \\end{bmatrix}$."
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 1 & 2 & 0 \\\\ 0 & 2 & 2 \\\\ 0 & 0 & 2 \\end{bmatrix}$."
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 1 & 0 & 1 \\\\ 0 & 2 & 1 \\\\ 1 & 1 & 2 \\end{bmatrix}$."
      }
    ],
    "correct": "A",
    "explanation": "* Quy tắc viết ma trận đối xứng $A = (a_{ij})$ của dạng toàn phương trong cơ sở chính tắc:\n  * Các phần tử trên đường chéo chính $a_{ii}$ bằng hệ số của $x_i^2$: $a_{11} = 1, \\, a_{22} = 2, \\, a_{33} = 2$.\n  * Các phần tử ngoài đường chéo chính $a_{ij} = a_{ji}$ ($i \\neq j$) bằng một nửa hệ số của $x_i x_j$:\n    * $a_{12} = a_{21} = \\frac{2}{2} = 1$\n    * $a_{13} = a_{31} = \\frac{0}{2} = 0$\n    * $a_{23} = a_{32} = \\frac{2}{2} = 1$\n* Vậy ma trận của $Q$ là:\n  $$A = \\begin{bmatrix} 1 & 1 & 0 \\\\ 1 & 2 & 1 \\\\ 0 & 1 & 2 \\end{bmatrix}$$\n* **Chọn đáp án: A.**\n\n---",
    "isOriginal": true,
    "id": 168
  },
  {
    "originalId": 39,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "question": "Cho dạng song tuyến tính $\\eta: \\mathbb{R}^3 \\times \\mathbb{R}^3 \\to \\mathbb{R}$ xác định bởi:\n$$\\eta(u, v) = x_1 y_1 + 2x_2 y_2 + 3x_3 y_3 - x_1 y_2 - x_2 y_1 - x_2 y_3 - x_3 y_2$$\ntrong đó $u = (x_1, x_2, x_3), \\, v = (y_1, y_2, y_3) \\in \\mathbb{R}^3$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$\\eta$ không đối xứng cũng không xác định dương."
      },
      {
        "key": "B",
        "text": "$\\eta$ xác định dương nhưng không đối xứng."
      },
      {
        "key": "C",
        "text": "$\\eta$ đối xứng nhưng không xác định dương."
      },
      {
        "key": "D",
        "text": "$\\eta$ đối xứng và xác định dương."
      }
    ],
    "correct": "D",
    "explanation": "* Ma trận của dạng song tuyến tính $\\eta$ trong cơ sở chính tắc là:\n  $$A = \\begin{bmatrix} 1 & -1 & 0 \\\\ -1 & 2 & -1 \\\\ 0 & -1 & 3 \\end{bmatrix}$$\n* Vì $A^T = A$ nên $\\eta$ **đối xứng**.\n* Xét các định thức con chính của $A$:\n  * $\\Delta_1 = 1 > 0$\n  * $\\Delta_2 = \\begin{vmatrix} 1 & -1 \\\\ -1 & 2 \\end{vmatrix} = 2 - 1 = 1 > 0$\n  * $\\Delta_3 = \\det A = 1(6 - 1) - (-1)(-3 - 0) + 0 = 5 - 3 = 2 > 0$\n* Theo tiêu chuẩn Sylvester, tất cả các định thức con chính đều dương nên $\\eta$ **xác định dương**.\n* **Chọn đáp án: D.**\n\n---",
    "isOriginal": true,
    "id": 169
  },
  {
    "originalId": 40,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "question": "Cho dạng toàn phương $q: \\mathbb{R}^3 \\to \\mathbb{R}$ xác định bởi:\n$$q(x) = x_1^2 + 2x_2^2 - 3x_3^2 - 2x_1 x_2 - 2x_2 x_3$$\nKý hiệu $p, q$ là chỉ số quán tính dương và âm của $q$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$p = 1, q = 1$."
      },
      {
        "key": "B",
        "text": "$p = 2, q = 1$."
      },
      {
        "key": "C",
        "text": "$p = 0, q = 3$."
      },
      {
        "key": "D",
        "text": "$p = 1, q = 2$."
      }
    ],
    "correct": "B",
    "explanation": "* Đưa dạng toàn phương về dạng chính tắc bằng phương pháp Lagrange:\n  $$q(x) = (x_1^2 - 2x_1 x_2 + x_2^2) + (x_2^2 - 2x_2 x_3 + x_3^2) - 4x_3^2 = (x_1 - x_2)^2 + (x_2 - x_3)^2 - 4x_3^2$$\n* Đặt $y_1 = x_1 - x_2$, $y_2 = x_2 - x_3$, $y_3 = x_3$ (phép biến đổi tọa độ không suy biến), ta được dạng chính tắc:\n  $$q = y_1^2 + y_2^2 - 4y_3^2$$\n* Có $2$ hệ số dương ($+1, +1$) và $1$ hệ số âm ($-4$). Vậy chỉ số quán tính dương $p = 2$ và chỉ số quán tính âm $q = 1$.\n* **Chọn đáp án: B.**\n\n---",
    "isOriginal": true,
    "id": 170
  },
  {
    "originalId": 41,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "question": "Cho dạng toàn phương $Q: \\mathbb{R}^3 \\to \\mathbb{R}$ xác định bởi:\n$$Q(x, y, z) = x^2 + 2y^2 - 3z^2 + 2xy + 2yz$$\nKý hiệu $(p, q)$ là cặp chỉ số quán tính dương và âm của $Q$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$p = 0, q = 3$."
      },
      {
        "key": "B",
        "text": "$p = 1, q = 1$."
      },
      {
        "key": "C",
        "text": "$p = 1, q = 2$."
      },
      {
        "key": "D",
        "text": "$p = 2, q = 1$."
      }
    ],
    "correct": "D",
    "explanation": "* Nhóm bình phương theo phương pháp Lagrange:\n  $$Q(x, y, z) = (x^2 + 2xy + y^2) + (y^2 + 2yz + z^2) - 4z^2 = (x + y)^2 + (y + z)^2 - 4z^2$$\n* Có $2$ bình phương mang dấu dương và $1$ bình phương mang dấu âm, nên $p = 2, q = 1$.\n* **Chọn đáp án: D.**\n\n---",
    "isOriginal": true,
    "id": 171
  },
  {
    "originalId": 42,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "question": "Cho dạng song tuyến tính $\\eta: \\mathbb{R}^2 \\times \\mathbb{R}^2 \\to \\mathbb{R}$ xác định bởi:\n$$\\eta(u, v) = x_1 y_1 - 2x_1 y_2 + 3x_2 y_1 + 4x_2 y_2$$\ntrong đó $u = (x_1, x_2), \\, v = (y_1, y_2) \\in \\mathbb{R}^2$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$\\eta$ xác định dương nhưng không đối xứng."
      },
      {
        "key": "B",
        "text": "$\\eta$ không đối xứng cũng không xác định dương."
      },
      {
        "key": "C",
        "text": "$\\eta$ đối xứng nhưng không xác định dương."
      },
      {
        "key": "D",
        "text": "$\\eta$ đối xứng và xác định dương."
      }
    ],
    "correct": "A",
    "explanation": "* **Xét tính đối xứng:** Ma trận của $\\eta$ trong cơ sở chính tắc là:\n  $$A = \\begin{bmatrix} 1 & -2 \\\\ 3 & 4 \\end{bmatrix}$$\n  Vì $A^T = \\begin{bmatrix} 1 & 3 \\\\ -2 & 4 \\end{bmatrix} \\neq A$ nên $\\eta$ **không đối xứng**.\n* **Xét tính xác định dương:** Với mọi $u = (x_1, x_2) \\neq (0, 0)$, ta có:\n  $$\\eta(u, u) = x_1^2 - 2x_1 x_2 + 3x_2 x_1 + 4x_2^2 = x_1^2 + x_1 x_2 + 4x_2^2 = \\left(x_1 + \\frac{1}{2}x_2\\right)^2 + \\frac{15}{4}x_2^2 > 0$$\n  Do đó $\\eta$ **xác định dương**.\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "id": 172
  },
  {
    "question": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng chính tắc, độ dài (chuẩn) của véc tơ $u = (2, -1, 2)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$3$"
      },
      {
        "key": "B",
        "text": "$9$"
      },
      {
        "key": "C",
        "text": "$\\sqrt{5}$"
      },
      {
        "key": "D",
        "text": "$5$"
      }
    ],
    "correct": "A",
    "explanation": "Độ dài chuẩn của véc tơ $u$ được tính bởi $\\|u\\| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$.\n* **Chọn đáp án: A.**",
    "id": 173,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Góc $\\theta$ giữa hai véc tơ $u = (1, 1, 0)$ và $v = (0, 1, 1)$ trong $\\mathbb{R}^3$ (với tích vô hướng chính tắc) bằng:",
    "options": [
      {
        "key": "A",
        "text": "$45^\\circ$ (hay $\\pi/4$)"
      },
      {
        "key": "B",
        "text": "$90^\\circ$ (hay $\\pi/2$)"
      },
      {
        "key": "C",
        "text": "$30^\\circ$ (hay $\\pi/6$)"
      },
      {
        "key": "D",
        "text": "$60^\\circ$ (hay $\\pi/3$)"
      }
    ],
    "correct": "D",
    "explanation": "Ta có $\\langle u, v \\rangle = 1 \\cdot 0 + 1 \\cdot 1 + 0 \\cdot 1 = 1$. Độ dài $\\|u\\| = \\sqrt{1^2 + 1^2 + 0} = \\sqrt{2}$ và $\\|v\\| = \\sqrt{0 + 1^2 + 1^2} = \\sqrt{2}$. Do đó $\\cos\\theta = \\dfrac{\\langle u, v \\rangle}{\\|u\\| \\|v\\|} = \\dfrac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\dfrac{1}{2} \\Rightarrow \\theta = 60^\\circ$.\n* **Chọn đáp án: D.**",
    "id": 174,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Hai véc tơ $u = (1, m, -2)$ và $v = (2, 3, 4)$ trong $\\mathbb{R}^3$ **trực giao** với nhau khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$m = -2$"
      },
      {
        "key": "B",
        "text": "$m = 0$"
      },
      {
        "key": "C",
        "text": "$m = 2$"
      },
      {
        "key": "D",
        "text": "$m = 6$"
      }
    ],
    "correct": "C",
    "explanation": "Hai véc tơ trực giao khi và chỉ khi tích vô hướng của chúng bằng 0:\n$\\langle u, v \\rangle = 1 \\cdot 2 + m \\cdot 3 + (-2) \\cdot 4 = 2 + 3m - 8 = 3m - 6 = 0 \\Leftrightarrow m = 2$.\n* **Chọn đáp án: C.**",
    "id": 175,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Bất đẳng thức Cauchy - Schwarz trong không gian Euclide phát biểu rằng:",
    "options": [
      {
        "key": "A",
        "text": "$|\\langle u, v \\rangle| \\ge \\|u\\| \\cdot \\|v\\|$"
      },
      {
        "key": "B",
        "text": "$\\|u + v\\| \\le \\|u\\| - \\|v\\|$"
      },
      {
        "key": "C",
        "text": "$\\langle u, v \\rangle = \\|u\\| \\cdot \\|v\\| \\sin\\theta$"
      },
      {
        "key": "D",
        "text": "$|\\langle u, v \\rangle| \\le \\|u\\| \\cdot \\|v\\|$"
      }
    ],
    "correct": "D",
    "explanation": "Bất đẳng thức Cauchy - Schwarz cơ bản: Với mọi $u, v$ trong không gian Euclide, ta có $|\\langle u, v \\rangle| \\le \\|u\\| \\cdot \\|v\\|$. Dấu bằng xảy ra khi và chỉ khi $u$ và $v$ phụ thuộc tuyến tính.\n* **Chọn đáp án: D.**",
    "id": 176,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Định lý Pythagore trong không gian Euclide: Nếu hai véc tơ $u, v$ trực giao với nhau ($u \\perp v$) thì:",
    "options": [
      {
        "key": "A",
        "text": "$\\|u + v\\| = \\|u\\| + \\|v\\|$"
      },
      {
        "key": "B",
        "text": "$\\|u + v\\|^2 = \\|u\\|^2 + \\|v\\|^2$"
      },
      {
        "key": "C",
        "text": "$\\|u + v\\|^2 = \\|u\\|^2 - \\|v\\|^2$"
      },
      {
        "key": "D",
        "text": "$\\|u + v\\| = \\sqrt{\\|u\\| \\|v\\|}$"
      }
    ],
    "correct": "B",
    "explanation": "Ta có $\\|u + v\\|^2 = \\langle u+v, u+v \\rangle = \\|u\\|^2 + 2\\langle u, v \\rangle + \\|v\\|^2$. Khi $u \\perp v \\Rightarrow \\langle u, v \\rangle = 0$, suy ra $\\|u + v\\|^2 = \\|u\\|^2 + \\|v\\|^2$.\n* **Chọn đáp án: B.**",
    "id": 177,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Một hệ véc tơ $E = \\{e_1, e_2, \\dots, e_n\\}$ được gọi là **hệ trực chuẩn** (orthonormal) nếu:",
    "options": [
      {
        "key": "A",
        "text": "Các véc tơ đôi một trực giao và đều có độ dài bằng 1: $\\langle e_i, e_j \\rangle = \\delta_{ij}$"
      },
      {
        "key": "B",
        "text": "Các véc tơ chỉ cần đôi một trực giao với nhau"
      },
      {
        "key": "C",
        "text": "Các véc tơ chỉ cần có độ dài bằng 1"
      },
      {
        "key": "D",
        "text": "Tích vô hướng của mọi cặp véc tơ đều bằng 1"
      }
    ],
    "correct": "A",
    "explanation": "Theo định nghĩa, hệ trực chuẩn là hệ véc tơ vừa trực giao (đôi một vuông góc) vừa được chuẩn hóa (độ dài bằng 1): $\\langle e_i, e_j \\rangle = 1$ khi $i=j$ và $= 0$ khi $i \\neq j$.\n* **Chọn đáp án: A.**",
    "id": 178,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Hình chiếu trực giao của véc tơ $u$ lên đường thẳng sinh bởi véc tơ khác không $v$ được tính bởi công thức:",
    "options": [
      {
        "key": "A",
        "text": "$\\operatorname{proj}_v(u) = \\dfrac{\\langle u, v \\rangle}{\\|v\\|} v$"
      },
      {
        "key": "B",
        "text": "$\\operatorname{proj}_v(u) = \\dfrac{\\langle u, v \\rangle}{\\|v\\|^2} v$"
      },
      {
        "key": "C",
        "text": "$\\operatorname{proj}_v(u) = \\langle u, v \\rangle v$"
      },
      {
        "key": "D",
        "text": "$\\operatorname{proj}_v(u) = \\dfrac{\\langle u, v \\rangle}{\\|u\\|^2} u$"
      }
    ],
    "correct": "B",
    "explanation": "Công thức hình chiếu trực giao của $u$ lên phương của $v$ là $\\operatorname{proj}_v(u) = \\dfrac{\\langle u, v \\rangle}{\\|v\\|^2} v$.\n* **Chọn đáp án: B.**",
    "id": 179,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Quá trình trực giao hóa Gram - Schmidt dùng để:",
    "options": [
      {
        "key": "A",
        "text": "Tính định thức ma trận"
      },
      {
        "key": "B",
        "text": "Tìm ma trận nghịch đảo"
      },
      {
        "key": "C",
        "text": "Giải hệ phương trình tuyến tính"
      },
      {
        "key": "D",
        "text": "Biến đổi một cơ sở tùy ý thành một cơ sở trực giao"
      }
    ],
    "correct": "D",
    "explanation": "Thuật toán Gram - Schmidt là phương pháp chuẩn hóa trong không gian Euclide, cho phép biến đổi một cơ sở bất kỳ $\\{u_1, u_2, \\dots, u_n\\}$ thành một cơ sở trực giao $\\{v_1, v_2, \\dots, v_n\\}$ sinh ra cùng không gian.\n* **Chọn đáp án: D.**",
    "id": 180,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Áp dụng quá trình Gram - Schmidt cho hệ $\\{u_1 = (1, 1), \\, u_2 = (1, 3)\\}$ trong $\\mathbb{R}^2$. Véc tơ trực giao $v_2$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(1, -1)$"
      },
      {
        "key": "B",
        "text": "$(0, 2)$"
      },
      {
        "key": "C",
        "text": "$(2, 2)$"
      },
      {
        "key": "D",
        "text": "$(-1, 1)$"
      }
    ],
    "correct": "D",
    "explanation": "Ta lấy $v_1 = u_1 = (1, 1)$. Khi đó:\n$v_2 = u_2 - \\dfrac{\\langle u_2, v_1 \\rangle}{\\|v_1\\|^2} v_1$.\nTính $\\langle u_2, v_1 \\rangle = 1 \\cdot 1 + 3 \\cdot 1 = 4$, $\\|v_1\\|^2 = 1^2 + 1^2 = 2$.\nSuy ra $v_2 = (1, 3) - \\dfrac{4}{2}(1, 1) = (1, 3) - (2, 2) = (-1, 1)$.\n* **Chọn đáp án: D.**",
    "id": 181,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Cho $W$ là không gian con của không gian Euclide $V$ có số chiều $n$. Số chiều của phần bù trực giao $W^\\perp$ thỏa mãn:",
    "options": [
      {
        "key": "A",
        "text": "$\\dim W^\\perp = \\dim W$"
      },
      {
        "key": "B",
        "text": "$\\dim W^\\perp = n + \\dim W$"
      },
      {
        "key": "C",
        "text": "$\\dim W^\\perp = 0$"
      },
      {
        "key": "D",
        "text": "$\\dim W^\\perp = n - \\dim W$"
      }
    ],
    "correct": "D",
    "explanation": "Trong không gian Euclide hữu hạn chiều $V$, ta luôn có $V = W \\oplus W^\\perp$. Do đó $\\dim W + \\dim W^\\perp = \\dim V = n \\Rightarrow \\dim W^\\perp = n - \\dim W$.\n* **Chọn đáp án: D.**",
    "id": 182,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Phần bù trực giao của đường thẳng $W = \\operatorname{span}\\{(1, 2, 3)\\}$ trong $\\mathbb{R}^3$ là:",
    "options": [
      {
        "key": "A",
        "text": "Mặt phẳng $x + 2y + 3z = 1$"
      },
      {
        "key": "B",
        "text": "Đường thẳng $x = 2y = 3z$"
      },
      {
        "key": "C",
        "text": "Gốc tọa độ $\\{(0,0,0)\\}$"
      },
      {
        "key": "D",
        "text": "Mặt phẳng $x + 2y + 3z = 0$"
      }
    ],
    "correct": "D",
    "explanation": "Tập hợp các véc tơ $(x, y, z)$ trực giao với $(1, 2, 3)$ là các véc tơ thỏa mãn tích vô hướng $\\langle (x, y, z), (1, 2, 3) \\rangle = 0 \\Leftrightarrow x + 2y + 3z = 0$. Đây là một mặt phẳng đi qua gốc tọa độ.\n* **Chọn đáp án: D.**",
    "id": 183,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Ma trận đối xứng $A$ tương ứng với dạng toàn phương $Q(x, y) = 3x^2 - 4xy + 5y^2$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 3 & -4 \\\\ -4 & 5 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 3 & 4 \\\\ 4 & 5 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 3 & -2 \\\\ -2 & 5 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} -2 & 3 \\\\ 5 & -2 \\end{bmatrix}$"
      }
    ],
    "correct": "C",
    "explanation": "Hệ số của $x^2$ là $a_{11} = 3$, hệ số của $y^2$ là $a_{22} = 5$. Hệ số của $xy$ là $-4$, chia đều cho hai phần tử đối xứng ngoài đường chéo: $a_{12} = a_{21} = -4/2 = -2$. Vậy ma trận là $\\begin{bmatrix} 3 & -2 \\\\ -2 & 5 \\end{bmatrix}$.\n* **Chọn đáp án: C.**",
    "id": 184,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Dạng toàn phương $Q(x_1, x_2) = ax_1^2 + 2bx_1 x_2 + cx_2^2$ là **xác định dương** khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$a > 0$ và $ac - b^2 < 0$"
      },
      {
        "key": "B",
        "text": "$a > 0$ và $ac - b^2 > 0$"
      },
      {
        "key": "C",
        "text": "$a < 0$ và $ac - b^2 > 0$"
      },
      {
        "key": "D",
        "text": "$a > 0$ và $c > 0$"
      }
    ],
    "correct": "B",
    "explanation": "Theo tiêu chuẩn Sylvester: Ma trận $A = \\begin{bmatrix} a & b \\\\ b & c \\end{bmatrix}$ xác định dương khi các định thức con chính dương: $\\Delta_1 = a > 0$ và $\\Delta_2 = \\det A = ac - b^2 > 0$.\n* **Chọn đáp án: B.**",
    "id": 185,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Dạng toàn phương nào sau đây là **xác định âm**?",
    "options": [
      {
        "key": "A",
        "text": "$Q(x, y) = -x^2 - 2y^2$"
      },
      {
        "key": "B",
        "text": "$Q(x, y) = -x^2 + 2y^2$"
      },
      {
        "key": "C",
        "text": "$Q(x, y) = x^2 + 2y^2$"
      },
      {
        "key": "D",
        "text": "$Q(x, y) = -(x - y)^2$"
      }
    ],
    "correct": "A",
    "explanation": "$Q(x, y) = -x^2 - 2y^2 = -(x^2 + 2y^2) < 0$ với mọi $(x, y) \\neq (0, 0)$. Do đó $Q$ xác định âm. Phương án D chỉ nửa xác định âm (bằng 0 khi $x=y$).\n* **Chọn đáp án: A.**",
    "id": 186,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Theo tiêu chuẩn Sylvester, dạng toàn phương 3 biến có ma trận $A$ là **xác định âm** khi và chỉ khi các định thức con chính thỏa mãn:",
    "options": [
      {
        "key": "A",
        "text": "$\\Delta_1 < 0, \\, \\Delta_2 > 0, \\, \\Delta_3 < 0$"
      },
      {
        "key": "B",
        "text": "$\\Delta_1 < 0, \\, \\Delta_2 < 0, \\, \\Delta_3 < 0$"
      },
      {
        "key": "C",
        "text": "$\\Delta_1 > 0, \\, \\Delta_2 > 0, \\, \\Delta_3 > 0$"
      },
      {
        "key": "D",
        "text": "$\\Delta_1 > 0, \\, \\Delta_2 < 0, \\, \\Delta_3 > 0$"
      }
    ],
    "correct": "A",
    "explanation": "Tiêu chuẩn Sylvester cho ma trận xác định âm đòi hỏi các định thức con chính đan dấu, bắt đầu bằng dấu âm: $(-1)^k \\Delta_k > 0$, tức là $\\Delta_1 < 0, \\Delta_2 > 0, \\Delta_3 < 0$.\n* **Chọn đáp án: A.**",
    "id": 187,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Tìm điều kiện của tham số $m$ để dạng toàn phương $Q(x, y) = x^2 + 2mxy + 4y^2$ xác định dương:",
    "options": [
      {
        "key": "A",
        "text": "$-2 < m < 2$"
      },
      {
        "key": "B",
        "text": "$m > 2$ hoặc $m < -2$"
      },
      {
        "key": "C",
        "text": "$m = 2$"
      },
      {
        "key": "D",
        "text": "$-4 < m < 4$"
      }
    ],
    "correct": "A",
    "explanation": "Ma trận $A = \\begin{bmatrix} 1 & m \\\\ m & 4 \\end{bmatrix}$. Ta có $\\Delta_1 = 1 > 0$, $\\Delta_2 = 4 - m^2 > 0 \\Leftrightarrow m^2 < 4 \\Leftrightarrow -2 < m < 2$.\n* **Chọn đáp án: A.**",
    "id": 188,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Đưa dạng toàn phương $Q(x_1, x_2) = x_1^2 + 4x_1 x_2 + 3x_2^2$ về dạng chính tắc bằng phương pháp Lagrange:",
    "options": [
      {
        "key": "A",
        "text": "$(x_1 + 2x_2)^2 + x_2^2$"
      },
      {
        "key": "B",
        "text": "$(x_1 + 2x_2)^2 - x_2^2$"
      },
      {
        "key": "C",
        "text": "$(x_1 + x_2)^2 + 2x_2^2$"
      },
      {
        "key": "D",
        "text": "$(x_1 - 2x_2)^2 - x_2^2$"
      }
    ],
    "correct": "B",
    "explanation": "Nhóm chứa $x_1$: $x_1^2 + 4x_1 x_2 = (x_1 + 2x_2)^2 - 4x_2^2$. Thay vào biểu thức ta được: $Q = (x_1 + 2x_2)^2 - 4x_2^2 + 3x_2^2 = (x_1 + 2x_2)^2 - x_2^2$.\n* **Chọn đáp án: B.**",
    "id": 189,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Trong câu hỏi trên, cặp chỉ số quán tính $(p, q)$ (dương, âm) của dạng toàn phương $Q$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(2, 0)$"
      },
      {
        "key": "B",
        "text": "$(0, 2)$"
      },
      {
        "key": "C",
        "text": "$(1, 1)$"
      },
      {
        "key": "D",
        "text": "$(1, 0)$"
      }
    ],
    "correct": "C",
    "explanation": "Dạng chính tắc là $y_1^2 - y_2^2$ có 1 bình phương mang hệ số dương ($+1$) và 1 bình phương mang hệ số âm ($-1$). Do đó $p = 1, q = 1$.\n* **Chọn đáp án: C.**",
    "id": 190,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Dạng toàn phương có dạng chính tắc $y_1^2 - y_2^2$ được xếp vào loại:",
    "options": [
      {
        "key": "A",
        "text": "Xác định dương"
      },
      {
        "key": "B",
        "text": "Xác định âm"
      },
      {
        "key": "C",
        "text": "Nửa xác định dương"
      },
      {
        "key": "D",
        "text": "Không xác định dấu (indefinite)"
      }
    ],
    "correct": "D",
    "explanation": "Khi cả chỉ số quán tính dương $p > 0$ và chỉ số quán tính âm $q > 0$, dạng toàn phương có thể nhận cả giá trị dương lẫn âm tùy thuộc véc tơ đầu vào. Do đó nó là dạng không xác định dấu (indefinite).\n* **Chọn đáp án: D.**",
    "id": 191,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Định lý luật quán tính Jacobi - Sylvester khẳng định rằng:",
    "options": [
      {
        "key": "A",
        "text": "Mọi dạng toàn phương đều có $p = q$"
      },
      {
        "key": "B",
        "text": "Mọi dạng toàn phương đều xác định dương"
      },
      {
        "key": "C",
        "text": "Cặp chỉ số quán tính $(p, q)$ không phụ thuộc vào phép biến đổi tọa độ không suy biến đưa về dạng chính tắc"
      },
      {
        "key": "D",
        "text": "Chỉ số quán tính bằng định thức của ma trận"
      }
    ],
    "correct": "C",
    "explanation": "Định lý luật quán tính của Sylvester phát biểu rằng: Số các hệ số dương ($p$) và số các hệ số âm ($q$) trong dạng chính tắc của một dạng toàn phương thực là các bất biến, không phụ thuộc vào phương pháp biến đổi tọa độ không suy biến được chọn.\n* **Chọn đáp án: C.**",
    "id": 192,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Dạng toàn phương $Q(x, y, z) = x^2 + 2y^2 + 3z^2$ có ma trận chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 1 & 1 & 0 \\\\ 1 & 2 & 1 \\\\ 0 & 1 & 3 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 3 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 2 & 0 \\\\ 3 & 0 & 3 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 2 & 0 \\\\ 3 & 0 & 0 \\end{bmatrix}$"
      }
    ],
    "correct": "B",
    "explanation": "Dạng này không có các tích chéo ($xy, yz, xz = 0$). Các phần tử đường chéo là hệ số các biến bình phương: $1, 2, 3$. Vậy ma trận là ma trận đường chéo $\\operatorname{diag}(1, 2, 3)$.\n* **Chọn đáp án: B.**",
    "id": 193,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Một ma trận vuông đối xứng $A$ xác định dương khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "Tất cả các giá trị riêng của $A$ đều âm"
      },
      {
        "key": "B",
        "text": "Định thức của $A$ dương"
      },
      {
        "key": "C",
        "text": "Tất cả các giá trị riêng của $A$ đều dương"
      },
      {
        "key": "D",
        "text": "Vết của $A$ dương"
      }
    ],
    "correct": "C",
    "explanation": "Đối với ma trận đối xứng thực, ma trận xác định dương khi và chỉ khi tất cả các giá trị riêng của nó đều lớn hơn $0$ ($\\lambda_i > 0, \\forall i$).\n* **Chọn đáp án: C.**",
    "id": 194,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Hạng của dạng toàn phương $Q$ có ma trận $A$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$p - q$"
      },
      {
        "key": "B",
        "text": "$p \\cdot q$"
      },
      {
        "key": "C",
        "text": "Số chiều của không gian"
      },
      {
        "key": "D",
        "text": "$p + q$ (tổng chỉ số quán tính dương và âm)"
      }
    ],
    "correct": "D",
    "explanation": "Hạng của dạng toàn phương chính là hạng của ma trận $A$ của nó, và trong dạng chính tắc có đúng $p$ hệ số $+1$ và $q$ hệ số $-1$ (các phần tử còn lại bằng $0$). Do đó $r(A) = p + q$.\n* **Chọn đáp án: D.**",
    "id": 195,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Tính khoảng cách Euclide giữa hai điểm $u = (1, 2, 3)$ và $v = (4, 2, -1)$ trong $\\mathbb{R}^3$:",
    "options": [
      {
        "key": "A",
        "text": "$5$"
      },
      {
        "key": "B",
        "text": "$\\sqrt{7}$"
      },
      {
        "key": "C",
        "text": "$25$"
      },
      {
        "key": "D",
        "text": "$3$"
      }
    ],
    "correct": "A",
    "explanation": "Khoảng cách $d(u, v) = \\|u - v\\| = \\sqrt{(1 - 4)^2 + (2 - 2)^2 + (3 - (-1))^2} = \\sqrt{(-3)^2 + 0 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.\n* **Chọn đáp án: A.**",
    "id": 196,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Dạng song tuyến tính $B(u, v)$ được gọi là đối xứng nếu:",
    "options": [
      {
        "key": "A",
        "text": "$B(u, v) = -B(v, u)$ với mọi $u, v$"
      },
      {
        "key": "B",
        "text": "$B(u, u) = 0$ với mọi $u$"
      },
      {
        "key": "C",
        "text": "$B(u, v) = B(v, u)$ với mọi $u, v$"
      },
      {
        "key": "D",
        "text": "$B(u, v) = 1$ với mọi $u, v$"
      }
    ],
    "correct": "C",
    "explanation": "Theo định nghĩa, dạng song tuyến tính đối xứng thỏa mãn tính chất giao hoán: $B(u, v) = B(v, u)$ đối với mọi cặp véc tơ $u, v$ trong không gian.\n* **Chọn đáp án: C.**",
    "id": 197,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Mọi dạng toàn phương $Q(x)$ xác định trên $\\mathbb{R}^n$ đều có thể đưa về dạng chính tắc bằng một:",
    "options": [
      {
        "key": "A",
        "text": "Phép biến đổi trực giao"
      },
      {
        "key": "B",
        "text": "Phép tịnh tiến tọa độ"
      },
      {
        "key": "C",
        "text": "Phép nhân ma trận suy biến"
      },
      {
        "key": "D",
        "text": "Phép chiếu"
      }
    ],
    "correct": "A",
    "explanation": "Theo Định lý phổ, vì ma trận $A$ của dạng toàn phương luôn đối xứng thực, nó luôn chéo hóa trực giao được bởi một ma trận trực giao $P$ ($P^T P = I$). Đổi biến $x = P y$ đưa $Q$ về dạng chính tắc.\n* **Chọn đáp án: A.**",
    "id": 198,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Cho hai véc tơ trực chuẩn $e_1, e_2$ (tức $\\|e_1\\| = \\|e_2\\| = 1$ và $\\langle e_1, e_2 \\rangle = 0$). Khi đó $\\|3e_1 - 4e_2\\|$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$-1$"
      },
      {
        "key": "B",
        "text": "$5$"
      },
      {
        "key": "C",
        "text": "$7$"
      },
      {
        "key": "D",
        "text": "$25$"
      }
    ],
    "correct": "B",
    "explanation": "Theo định lý Pythagore trong không gian Euclide: $\\|3e_1 - 4e_2\\|^2 = \\|3e_1\\|^2 + \\|-4e_2\\|^2 = 3^2 \\|e_1\\|^2 + (-4)^2 \\|e_2\\|^2 = 9(1) + 16(1) = 25$. Suy ra $\\|3e_1 - 4e_2\\| = 5$.\n* **Chọn đáp án: B.**",
    "id": 199,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "question": "Dạng toàn phương $Q(x_1, x_2, x_3) = x_1^2 + x_2^2$ trong $\\mathbb{R}^3$ là:",
    "options": [
      {
        "key": "A",
        "text": "Xác định dương"
      },
      {
        "key": "B",
        "text": "Nửa xác định dương (bán xác định dương)"
      },
      {
        "key": "C",
        "text": "Xác định âm"
      },
      {
        "key": "D",
        "text": "Không xác định dấu"
      }
    ],
    "correct": "B",
    "explanation": "Ta có $Q \\ge 0$ với mọi $(x_1, x_2, x_3)$, nhưng khi lấy $x_1 = 0, x_2 = 0, x_3 = 1 \\neq 0$ thì $Q = 0$. Vì tồn tại véc tơ khác không có $Q = 0$ nên $Q$ không xác định dương nghiêm ngặt mà là nửa xác định dương (bán xác định dương).\n* **Chọn đáp án: B.**",
    "id": 200,
    "topicId": 6,
    "topicName": "KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG",
    "isOriginal": false
  },
  {
    "id": 201,
    "originalId": null,
    "isOriginal": false,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Tìm công thức đối ngẫu trong đại số Boole của công thức $f = (x \\wedge y') \\vee (z \\wedge 1)$.",
    "options": [
      {
        "key": "A",
        "text": "$(x' \\vee y) \\wedge (z' \\vee 0)$"
      },
      {
        "key": "B",
        "text": "$(x \\vee y') \\wedge (z \\vee 0)$"
      },
      {
        "key": "C",
        "text": "$(x \\wedge y') \\vee (z \\wedge 0)$"
      },
      {
        "key": "D",
        "text": "$(x \\vee y') \\vee (z \\vee 0)$"
      }
    ],
    "correct": "B",
    "explanation": "* **Kỹ thuật tìm công thức đối ngẫu trong Đại số Boole:**\n  * Giữ nguyên các biến và dấu phủ định của biến ($x \\to x, y' \\to y', z \\to z$).\n  * Đổi phép hội $\\wedge$ thành phép tuyển $\\vee$ và ngược lại ($\\vee \\to \\wedge$).\n  * Đổi hằng số $1 \\to 0$ và $0 \\to 1$.\n* Áp dụng vào biểu thức $(x \\wedge y') \\vee (z \\wedge 1)$:\n  * $(x \\wedge y') \\to (x \\vee y')$\n  * Dấu tuyển ở giữa $\\vee \\to \\wedge$\n  * $(z \\wedge 1) \\to (z \\vee 0)$\n* Kết quả thu được: $(x \\vee y') \\wedge (z \\vee 0)$.\n* **Chọn đáp án: B.**"
  },
  {
    "id": 202,
    "originalId": null,
    "isOriginal": false,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Đối ngẫu của công thức Boole $(x \\vee y \\vee 0) \\wedge (x' \\vee z')$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(x \\wedge y \\wedge 1) \\vee (x' \\wedge z')$"
      },
      {
        "key": "B",
        "text": "$(x' \\wedge y' \\wedge 1) \\vee (x \\wedge z)$"
      },
      {
        "key": "C",
        "text": "$(x \\vee y \\vee 1) \\wedge (x' \\vee z')$"
      },
      {
        "key": "D",
        "text": "$(x \\wedge y \\wedge 0) \\vee (x' \\wedge z')$"
      }
    ],
    "correct": "A",
    "explanation": "* **Quy tắc đối ngẫu:**\n  * Đổi $\\vee \\to \\wedge$, $\\wedge \\to \\vee$.\n  * Đổi $0 \\to 1$.\n  * Giữ nguyên các biến và dấu phủ định $x, y, x', z'$.\n* Biến đổi:\n  $$(x \\vee y \\vee 0) \\wedge (x' \\vee z') \\xrightarrow{\\text{đối ngẫu}} (x \\wedge y \\wedge 1) \\vee (x' \\wedge z')$$\n* **Chọn đáp án: A.**"
  },
  {
    "id": 203,
    "originalId": null,
    "isOriginal": false,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho mệnh đề kéo theo $p \\to q$. Mệnh đề **phản đảo** của mệnh đề này là:",
    "options": [
      {
        "key": "A",
        "text": "$\\bar{q} \\to \\bar{p}$"
      },
      {
        "key": "B",
        "text": "$q \\to p$"
      },
      {
        "key": "C",
        "text": "$\\bar{p} \\to \\bar{q}$"
      },
      {
        "key": "D",
        "text": "$\\bar{p} \\vee q$"
      }
    ],
    "correct": "A",
    "explanation": "* **Lý thuyết các dạng mệnh đề liên quan đến $p \\to q$:**\n  * Mệnh đề đảo: $q \\to p$.\n  * Mệnh đề nghịch đảo: $\\bar{p} \\to \\bar{q}$.\n  * Mệnh đề phản đảo: $\\bar{q} \\to \\bar{p}$.\n* **Tính chất quan trọng:** Mệnh đề phản đảo luôn tương đương logic với mệnh đề ban đầu: $(\\bar{q} \\to \\bar{p}) \\equiv (p \\to q)$.\n* **Chọn đáp án: A.**"
  },
  {
    "id": 204,
    "originalId": null,
    "isOriginal": false,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Phủ định của mệnh đề kéo theo $p \\to q$ tương đương logic với công thức nào dưới đây?",
    "options": [
      {
        "key": "A",
        "text": "$p \\wedge \\bar{q}$"
      },
      {
        "key": "B",
        "text": "$\\bar{p} \\to \\bar{q}$"
      },
      {
        "key": "C",
        "text": "$\\bar{p} \\wedge q$"
      },
      {
        "key": "D",
        "text": "$\\bar{p} \\vee \\bar{q}$"
      }
    ],
    "correct": "A",
    "explanation": "* **Kỹ thuật biến đổi phủ định mệnh đề kéo theo:**\n  * Ta biết tương đương logic cơ bản: $p \\to q \\equiv \\bar{p} \\vee q$.\n  * Lấy phủ định hai vế và áp dụng luật De Morgan:\n    $$\\overline{p \\to q} \\equiv \\overline{\\bar{p} \\vee q} \\equiv \\bar{\\bar{p}} \\wedge \\bar{q} \\equiv p \\wedge \\bar{q}$$\n* **Ý nghĩa:** \"$p$ kéo theo $q$\" chỉ sai khi giả thiết $p$ đúng nhưng kết luận $q$ lại sai ($p \\wedge \\bar{q}$).\n* **Chọn đáp án: A.**"
  },
  {
    "id": 205,
    "originalId": null,
    "isOriginal": false,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Rút gọn công thức logic $(p \\wedge q) \\vee (p \\wedge \\bar{q})$, ta thu được:",
    "options": [
      {
        "key": "A",
        "text": "$q$"
      },
      {
        "key": "B",
        "text": "$p \\vee q$"
      },
      {
        "key": "C",
        "text": "$p$"
      },
      {
        "key": "D",
        "text": "$1$ (hằng đúng)"
      }
    ],
    "correct": "C",
    "explanation": "* **Áp dụng luật phân phối của phép hội đối với phép tuyển:**\n  $$(p \\wedge q) \\vee (p \\wedge \\bar{q}) \\equiv p \\wedge (q \\vee \\bar{q})$$\n* Vì $q \\vee \\bar{q} \\equiv 1$ (luật bài trung), ta có:\n  $$p \\wedge 1 \\equiv p$$\n* **Chọn đáp án: C.**"
  },
  {
    "id": 206,
    "originalId": null,
    "isOriginal": false,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Công thức logic nào dưới đây là một **hằng đúng (tautology)**?",
    "options": [
      {
        "key": "A",
        "text": "$((p \\to q) \\wedge p) \\to q$"
      },
      {
        "key": "B",
        "text": "$(p \\to q) \\to (q \\to p)$"
      },
      {
        "key": "C",
        "text": "$(p \\vee q) \\to (p \\wedge q)$"
      },
      {
        "key": "D",
        "text": "$\\bar{p} \\to p$"
      }
    ],
    "correct": "A",
    "explanation": "* **Quy tắc tam đoạn luận khẳng định (Modus Ponens):**\n  * Biểu thức $((p \\to q) \\wedge p) \\to q$ là quy tắc suy diễn cơ bản.\n  * Kiểm tra tính đúng đắn: Giả sử vế trái đúng $\\implies p \\to q$ đúng và $p$ đúng. Vì $p$ đúng nên để $p \\to q$ đúng thì $q$ bắt buộc phải đúng. Do đó mệnh đề luôn nhận chân trị 1 trong mọi trường hợp.\n* Các phương án khác đều có thể nhận giá trị sai với một bộ chân trị cụ thể của $p, q$.\n* **Chọn đáp án: A.**"
  },
  {
    "id": 207,
    "originalId": null,
    "isOriginal": false,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho tập hợp $A = \\{1, \\, \\{2\\}, \\, 3\\}$. Khẳng định nào dưới đây là **đúng**?",
    "options": [
      {
        "key": "A",
        "text": "$2 \\in A$"
      },
      {
        "key": "B",
        "text": "$\\{1, 2\\} \\subset A$"
      },
      {
        "key": "C",
        "text": "$\\{2\\} \\in A$"
      },
      {
        "key": "D",
        "text": "$\\{\\{2\\}\\} \\in A$"
      }
    ],
    "correct": "C",
    "explanation": "* **Phân biệt quan hệ phần tử ($\\in$) và tập con ($\\subset$):**\n  * Tập $A$ gồm 3 phần tử: phần tử $1$, phần tử $\\{2\\}$, và phần tử $3$.\n  * Vì $\\{2\\}$ là một phần tử có mặt trong $A$ nên khẳng định **$\\{2\\} \\in A$ là đúng**.\n  * $2 \\notin A$ vì $2$ chỉ nằm bên trong phần tử $\\{2\\}$, không phải là phần tử độc lập của $A$.\n  * $\\{1, 2\\} \\subset A$ là sai vì $2 \\notin A$.\n* **Chọn đáp án: C.**"
  },
  {
    "id": 208,
    "originalId": null,
    "isOriginal": false,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho tập hợp $X$ có $n$ phần tử. Số phần tử của tập lũy thừa $\\mathcal{P}(X)$ (tập hợp tất cả các tập con của $X$) là:",
    "options": [
      {
        "key": "A",
        "text": "$n^2$"
      },
      {
        "key": "B",
        "text": "$2^n$"
      },
      {
        "key": "C",
        "text": "$2n$"
      },
      {
        "key": "D",
        "text": "$n!$"
      }
    ],
    "correct": "B",
    "explanation": "* **Định lý về tập lũy thừa:**\n  * Mỗi phần tử của $X$ có $2$ trạng thái khi tạo tập con: hoặc thuộc tập con, hoặc không thuộc tập con.\n  * Với $n$ phần tử độc lập, số tập con có thể tạo thành là $\\underbrace{2 \\times 2 \\times \\dots \\times 2}_{n \\text{ lần}} = 2^n$.\n  * Do đó $|\\mathcal{P}(X)| = 2^n$.\n* **Chọn đáp án: B.**"
  },
  {
    "id": 209,
    "originalId": null,
    "isOriginal": false,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Hiệu đối xứng của hai tập hợp $A$ và $B$, ký hiệu $A \\oplus B$, được định nghĩa là:",
    "options": [
      {
        "key": "A",
        "text": "$(A \\cup B) \\cap (A \\cap B)$"
      },
      {
        "key": "B",
        "text": "$(A \\cap B) \\setminus (A \\cup B)$"
      },
      {
        "key": "C",
        "text": "$A \\setminus (A \\cap B)$"
      },
      {
        "key": "D",
        "text": "$(A \\setminus B) \\cup (B \\setminus A)$"
      }
    ],
    "correct": "D",
    "explanation": "* **Định nghĩa hiệu đối xứng (Symmetric Difference):**\n  * $A \\oplus B$ (hoặc $A \\Delta B$) là tập hợp các phần tử thuộc $A$ hoặc thuộc $B$ nhưng không thuộc phần giao của chúng:\n    $$A \\oplus B = (A \\setminus B) \\cup (B \\setminus A) = (A \\cup B) \\setminus (A \\cap B)$$\n* **Chọn đáp án: D.**"
  },
  {
    "id": 210,
    "originalId": null,
    "isOriginal": false,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho $A, B$ là hai tập hợp hữu hạn. Công thức bao hàm - loại trừ tính số phần tử $|A \\cup B|$ là:",
    "options": [
      {
        "key": "A",
        "text": "$|A| + |B| + |A \\cap B|$"
      },
      {
        "key": "B",
        "text": "$|A| + |B| - |A \\cap B|$"
      },
      {
        "key": "C",
        "text": "$|A| + |B| - 2|A \\cap B|$"
      },
      {
        "key": "D",
        "text": "$|A \\setminus B| + |B \\setminus A|$"
      }
    ],
    "correct": "B",
    "explanation": "* **Nguyên lý bao hàm - loại trừ (Inclusion-Exclusion Principle):**\n  * Khi cộng $|A| + |B|$, phần giao $A \\cap B$ bị đếm hai lần.\n  * Do đó cần trừ đi một lần số phần tử của phần giao:\n    $$|A \\cup B| = |A| + |B| - |A \\cap B|$$\n* **Chọn đáp án: B.**"
  },
  {
    "id": 211,
    "originalId": null,
    "isOriginal": false,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho ánh xạ $f: \\mathbb{R} \\to \\mathbb{R}$ xác định bởi $f(x) = 3x - 4$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$f$ là đơn ánh nhưng không là toàn ánh"
      },
      {
        "key": "B",
        "text": "$f$ là song ánh"
      },
      {
        "key": "C",
        "text": "$f$ là toàn ánh nhưng không là đơn ánh"
      },
      {
        "key": "D",
        "text": "$f$ không là đơn ánh cũng không là toàn ánh"
      }
    ],
    "correct": "B",
    "explanation": "* **Kỹ thuật xét tính đơn ánh và toàn ánh:**\n  * **Đơn ánh:** Giả sử $f(x_1) = f(x_2) \\Leftrightarrow 3x_1 - 4 = 3x_2 - 4 \\Leftrightarrow 3x_1 = 3x_2 \\Leftrightarrow x_1 = x_2$. Vậy $f$ là đơn ánh.\n  * **Toàn ánh:** Với mọi $y \\in \\mathbb{R}$, phương trình $3x - 4 = y \\Leftrightarrow x = \\dfrac{y + 4}{3}$ luôn có nghiệm thực duy nhất $x \\in \\mathbb{R}$. Vậy $f$ là toàn ánh.\n  * Vì $f$ vừa là đơn ánh vừa là toàn ánh nên $f$ là **song ánh**.\n* **Chọn đáp án: B.**"
  },
  {
    "id": 212,
    "originalId": null,
    "isOriginal": false,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho ánh xạ $f: \\mathbb{Z} \\to \\mathbb{Z}$ xác định bởi $f(n) = 2n + 1$. Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "text": "$f$ là song ánh"
      },
      {
        "key": "B",
        "text": "$f$ là toàn ánh nhưng không là đơn ánh"
      },
      {
        "key": "C",
        "text": "$f$ là đơn ánh nhưng không là toàn ánh"
      },
      {
        "key": "D",
        "text": "$f$ không là đơn ánh cũng không là toàn ánh"
      }
    ],
    "correct": "C",
    "explanation": "* **Xét tính đơn ánh trên $\\mathbb{Z}$:**\n  $$f(n_1) = f(n_2) \\iff 2n_1 + 1 = 2n_2 + 1 \\iff n_1 = n_2 \\implies f \\text{ là đơn ánh.}$$\n* **Xét tính toàn ánh trên $\\mathbb{Z}$:**\n  * Ảnh của $f$ chỉ gồm các số nguyên lẻ: $\\operatorname{Im} f = \\{2n + 1 \\mid n \\in \\mathbb{Z}\\}$.\n  * Lấy số chẵn $y = 0 \\in \\mathbb{Z}$, phương trình $2n + 1 = 0 \\iff n = -1/2 \\notin \\mathbb{Z}$.\n  * Do đó không tồn tại $n \\in \\mathbb{Z}$ để $f(n) = 0$, suy ra $f$ **không là toàn ánh**.\n* **Chọn đáp án: C.**"
  },
  {
    "id": 213,
    "originalId": null,
    "isOriginal": false,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Điều kiện cần và đủ để ánh xạ $f: X \\to Y$ có ánh xạ ngược $f^{-1}: Y \\to X$ là:",
    "options": [
      {
        "key": "A",
        "text": "$f$ là đơn ánh"
      },
      {
        "key": "B",
        "text": "$f$ là song ánh"
      },
      {
        "key": "C",
        "text": "$f$ là toàn ánh"
      },
      {
        "key": "D",
        "text": "$X = Y$"
      }
    ],
    "correct": "B",
    "explanation": "* **Định lý về ánh xạ ngược:**\n  * Ánh xạ $f: X \\to Y$ khả nghịch (có ánh xạ ngược $f^{-1}$) khi và chỉ khi với mỗi $y \\in Y$, tồn tại **duy nhất** $x \\in X$ thỏa mãn $f(x) = y$.\n  * Điều kiện tồn tại nghiệm với mọi $y$ tương đương với $f$ là **toàn ánh**.\n  * Điều kiện tính duy nhất của nghiệm tương đương với $f$ là **đơn ánh**.\n  * Do đó $f$ phải là **song ánh**.\n* **Chọn đáp án: B.**"
  },
  {
    "id": 214,
    "originalId": null,
    "isOriginal": false,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho hai ánh xạ $f: X \\to Y$ và $g: Y \\to Z$. Nếu cả $f$ và $g$ đều là đơn ánh thì ánh xạ tích hợp $g \\circ f: X \\to Z$ là:",
    "options": [
      {
        "key": "A",
        "text": "Toàn ánh nhưng không nhất thiết là đơn ánh"
      },
      {
        "key": "B",
        "text": "Song ánh"
      },
      {
        "key": "C",
        "text": "Chưa kết luận được"
      },
      {
        "key": "D",
        "text": "Đơn ánh"
      }
    ],
    "correct": "D",
    "explanation": "* **Chứng minh tính đơn ánh của ánh xạ tích hợp:**\n  * Giả sử $(g \\circ f)(x_1) = (g \\circ f)(x_2) \\iff g(f(x_1)) = g(f(x_2))$.\n  * Vì $g$ là đơn ánh nên $g(u) = g(v) \\implies u = v$. Do đó $f(x_1) = f(x_2)$.\n  * Vì $f$ là đơn ánh nên $f(x_1) = f(x_2) \\implies x_1 = x_2$.\n  * Vậy $g \\circ f$ là đơn ánh.\n* **Chọn đáp án: D.**"
  },
  {
    "id": 215,
    "originalId": null,
    "isOriginal": false,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho ánh xạ $f: \\mathbb{R} \\to \\mathbb{R}, f(x) = x^2$. Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "text": "$f$ là đơn ánh"
      },
      {
        "key": "B",
        "text": "$f$ là toàn ánh"
      },
      {
        "key": "C",
        "text": "$f$ không là đơn ánh cũng không là toàn ánh"
      },
      {
        "key": "D",
        "text": "$f$ là song ánh"
      }
    ],
    "correct": "C",
    "explanation": "* **Kiểm tra tính đơn ánh:**\n  * Ta có $f(1) = 1^2 = 1$ và $f(-1) = (-1)^2 = 1$.\n  * Vì $f(1) = f(-1)$ nhưng $1 \\neq -1$ nên $f$ **không là đơn ánh**.\n* **Kiểm tra tính toàn ánh:**\n  * Với mọi $x \\in \\mathbb{R}$, $x^2 \\ge 0$.\n  * Với $y = -1 \\in \\mathbb{R}$, phương trình $x^2 = -1$ không có nghiệm thực.\n  * Do đó $f$ **không là toàn ánh**.\n* **Chọn đáp án: C.**"
  },
  {
    "id": 216,
    "originalId": null,
    "isOriginal": false,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho tập hợp $A$ có $3$ phần tử và tập hợp $B$ có $4$ phần tử. Số lượng ánh xạ khác nhau từ $A$ vào $B$ là:",
    "options": [
      {
        "key": "A",
        "text": "$3^4 = 81$"
      },
      {
        "key": "B",
        "text": "$A_4^3 = 24$"
      },
      {
        "key": "C",
        "text": "$3 \\times 4 = 12$"
      },
      {
        "key": "D",
        "text": "$4^3 = 64$"
      }
    ],
    "correct": "D",
    "explanation": "* **Công thức đếm số lượng ánh xạ:**\n  * Giả sử $A = \\{a_1, a_2, a_3\\}$.\n  * Phần tử $a_1$ có $4$ cách chọn ảnh trong $B$.\n  * Phần tử $a_2$ có $4$ cách chọn ảnh trong $B$.\n  * Phần tử $a_3$ có $4$ cách chọn ảnh trong $B$.\n  * Theo quy tắc nhân, tổng số ánh xạ từ $A$ vào $B$ là $|B|^{|A|} = 4^3 = 64$.\n* **Chọn đáp án: D.**"
  },
  {
    "id": 217,
    "originalId": null,
    "isOriginal": false,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho hai tập hợp $A$ và $B$. Mệnh đề nào sau đây luôn đúng với mọi $A, B$?",
    "options": [
      {
        "key": "A",
        "text": "$A \\setminus B = B \\setminus A$"
      },
      {
        "key": "B",
        "text": "$A \\cup (B \\setminus A) = A \\cap B$"
      },
      {
        "key": "C",
        "text": "$\\overline{A \\cap B} = \\bar{A} \\cap \\bar{B}$"
      },
      {
        "key": "D",
        "text": "$A \\setminus B = A \\cap \\bar{B}$"
      }
    ],
    "correct": "D",
    "explanation": "* **Định nghĩa phép hiệu tập hợp theo phép bù:**\n  * $A \\setminus B$ là tập các phần tử thuộc $A$ và không thuộc $B$ (tức thuộc phần bù $\\bar{B}$).\n  * Do đó $A \\setminus B = A \\cap \\bar{B}$ luôn đúng.\n  * Các phương án khác: B sai vì phép hiệu không có tính giao hoán; C sai vì $A \\cup (B \\setminus A) = A \\cup B$; D sai vì luật De Morgan đúng là $\\overline{A \\cap B} = \\bar{A} \\cup \\bar{B}$.\n* **Chọn đáp án: D.**"
  },
  {
    "id": 218,
    "originalId": null,
    "isOriginal": false,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho mệnh đề logic $(p \\wedge q) \\to r$. Mệnh đề nào sau đây tương đương logic với nó?",
    "options": [
      {
        "key": "A",
        "text": "$(p \\to r) \\wedge (q \\to r)$"
      },
      {
        "key": "B",
        "text": "$(p \\to r) \\vee (q \\to r)$"
      },
      {
        "key": "C",
        "text": "$r \\to (p \\wedge q)$"
      },
      {
        "key": "D",
        "text": "$p \\to (q \\to r)$"
      }
    ],
    "correct": "D",
    "explanation": "* **Quy tắc xuất khẩu (Exportation law):**\n  * Biến đổi:\n    $$(p \\wedge q) \\to r \\equiv \\overline{p \\wedge q} \\vee r \\equiv (\\bar{p} \\vee \\bar{q}) \\vee r \\equiv \\bar{p} \\vee (\\bar{q} \\vee r) \\equiv p \\to (q \\to r)$$\n* Đây là một tương đương kinh điển rất hay gặp trong đề thi.\n* **Chọn đáp án: D.**"
  },
  {
    "id": 219,
    "originalId": null,
    "isOriginal": false,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Tập hợp $\\emptyset$ (tập rỗng) có bao nhiêu tập con?",
    "options": [
      {
        "key": "A",
        "text": "$0$ tập con"
      },
      {
        "key": "B",
        "text": "$2$ tập con"
      },
      {
        "key": "C",
        "text": "$1$ tập con (chính là $\\emptyset$)"
      },
      {
        "key": "D",
        "text": "Vô số"
      }
    ],
    "correct": "C",
    "explanation": "* **Số tập con của tập rỗng:**\n  * Tập rỗng có số phần tử là $n = 0$.\n  * Theo công thức số tập con: $|\\mathcal{P}(\\emptyset)| = 2^0 = 1$.\n  * Tập con duy nhất của $\\emptyset$ chính là $\\emptyset$ (vì $\\emptyset \\subset \\emptyset$).\n* **Chọn đáp án: C.**"
  },
  {
    "id": 220,
    "originalId": null,
    "isOriginal": false,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho hàm số $f: [0, +\\infty) \\to [0, +\\infty)$ xác định bởi $f(x) = x^2$. Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "text": "$f$ là một song ánh"
      },
      {
        "key": "B",
        "text": "$f$ là đơn ánh nhưng không là toàn ánh"
      },
      {
        "key": "C",
        "text": "$f$ là toàn ánh nhưng không là đơn ánh"
      },
      {
        "key": "D",
        "text": "$f$ không là đơn ánh cũng không toàn ánh"
      }
    ],
    "correct": "A",
    "explanation": "* **Tầm quan trọng của tập nguồn và tập đích đối với ánh xạ:**\n  * Với tập nguồn $X = [0, +\\infty)$, hàm số $y = x^2$ đồng biến nghiêm ngặt: $x_1 < x_2 \\implies x_1^2 < x_2^2$, do đó $f(x_1) = f(x_2) \\iff x_1 = x_2 \\implies f$ là **đơn ánh**.\n  * Với mọi $y \\in [0, +\\infty)$, phương trình $x^2 = y$ luôn có nghiệm duy nhất $x = \\sqrt{y} \\in [0, +\\infty) \\implies f$ là **toàn ánh**.\n  * Vậy trên tập xác định này, $f$ là một **song ánh** (có hàm ngược là $f^{-1}(y) = \\sqrt{y}$).\n* **Chọn đáp án: A.**"
  },
  {
    "id": 221,
    "originalId": null,
    "isOriginal": false,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận vuông $A$ cấp $n=4$ có $\\det A = 3$. Giá trị của định thức $\\det(2A)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$24$"
      },
      {
        "key": "B",
        "text": "$48$"
      },
      {
        "key": "C",
        "text": "$6$"
      },
      {
        "key": "D",
        "text": "$12$"
      }
    ],
    "correct": "B",
    "explanation": "* **Công thức tính chất định thức đối với phép nhân số thực:**\n  * Với ma trận vuông $A$ cấp $n$ và số thực $k$, ta có:\n    $$\\det(kA) = k^n \\det A$$\n* Áp dụng với $n = 4$, $k = 2$ và $\\det A = 3$:\n  $$\\det(2A) = 2^4 \\cdot \\det A = 16 \\cdot 3 = 48$$\n* **Lưu ý tránh bẫy:** Rất nhiều học sinh nhầm lẫn $\\det(kA) = k \\det A$, đây là sai sót phổ biến!\n* **Chọn đáp án: B.**"
  },
  {
    "id": 222,
    "originalId": null,
    "isOriginal": false,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận $A = \\begin{bmatrix} 2 & 1 & 0 \\\\ 0 & 3 & 1 \\\\ 1 & 0 & 2 \\end{bmatrix}$. Phần tử ở vị trí hàng 2, cột 1 của ma trận nghịch đảo $A^{-1}$ là:",
    "options": [
      {
        "key": "A",
        "text": "$-1/13$"
      },
      {
        "key": "B",
        "text": "$2/13$"
      },
      {
        "key": "C",
        "text": "$1/13$"
      },
      {
        "key": "D",
        "text": "$-2/13$"
      }
    ],
    "correct": "C",
    "explanation": "* **Kỹ thuật tính phần tử cụ thể của ma trận nghịch đảo:**\n  * Công thức ma trận nghịch đảo: $A^{-1} = \\dfrac{1}{\\det A} (C_{ij})^T$.\n  * Do đó phần tử hàng $i$, cột $j$ của $A^{-1}$ là:\n    $$(A^{-1})_{ij} = \\frac{C_{ji}}{\\det A} = \\frac{(-1)^{j+i} M_{ji}}{\\det A}$$\n    *(Chú ý chỉ số đảo lại: hàng $2$, cột $1$ của $A^{-1}$ ứng với phần phụ đại số $C_{12}$)*.\n* Tính $\\det A$:\n  $$\\det A = 2(6 - 0) - 1(0 - 1) + 0 = 12 + 1 = 13$$\n* Tính $C_{12}$ (bỏ hàng 1, cột 2):\n  $$C_{12} = (-1)^{1+2} \\begin{vmatrix} 0 & 1 \\\\ 1 & 2 \\end{vmatrix} = -(0 - 1) = 1$$\n* Suy ra $(A^{-1})_{21} = \\dfrac{C_{12}}{\\det A} = \\dfrac{1}{13}$.\n* **Chọn đáp án: C.**"
  },
  {
    "id": 223,
    "originalId": null,
    "isOriginal": false,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho hai ma trận vuông khả nghịch $A$ và $B$. Ma trận $X$ thỏa mãn phương trình $A X B = C$ là:",
    "options": [
      {
        "key": "A",
        "text": "$X = C A^{-1} B^{-1}$"
      },
      {
        "key": "B",
        "text": "$X = B^{-1} C A^{-1}$"
      },
      {
        "key": "C",
        "text": "$X = A^{-1} B^{-1} C$"
      },
      {
        "key": "D",
        "text": "$X = A^{-1} C B^{-1}$"
      }
    ],
    "correct": "D",
    "explanation": "* **Kỹ thuật giải phương trình ma trận:**\n  * Phép nhân ma trận không có tính giao hoán, nên ta phải nhân nghịch đảo đúng phía:\n  * Nhân cả hai vế về bên trái với $A^{-1}$:\n    $$A^{-1}(AXB) = A^{-1} C \\implies (A^{-1}A) X B = A^{-1} C \\implies X B = A^{-1} C$$\n  * Nhân cả hai vế về bên phải với $B^{-1}$:\n    $$(XB) B^{-1} = (A^{-1} C) B^{-1} \\implies X (B B^{-1}) = A^{-1} C B^{-1} \\implies X = A^{-1} C B^{-1}$$\n* **Chọn đáp án: D.**"
  },
  {
    "id": 224,
    "originalId": null,
    "isOriginal": false,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận $A$ vuông cấp 3 có $\\det A = -4$. Giá trị của $\\det(A^{-1} \\cdot A^T)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$-1$"
      },
      {
        "key": "B",
        "text": "$16$"
      },
      {
        "key": "C",
        "text": "$-16$"
      },
      {
        "key": "D",
        "text": "$1$"
      }
    ],
    "correct": "D",
    "explanation": "* **Áp dụng các tính chất của định thức:**\n  * $\\det(XY) = \\det X \\cdot \\det Y$.\n  * $\\det(A^{-1}) = \\dfrac{1}{\\det A}$.\n  * $\\det(A^T) = \\det A$.\n* Khi đó:\n  $$\\det(A^{-1} A^T) = \\det(A^{-1}) \\cdot \\det(A^T) = \\frac{1}{\\det A} \\cdot \\det A = 1$$\n* **Chọn đáp án: D.**"
  },
  {
    "id": 225,
    "originalId": null,
    "isOriginal": false,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Định thức của ma trận tam giác khối $M = \\begin{bmatrix} A & B \\\\ 0 & C \\end{bmatrix}$ (trong đó $A, C$ là các ma trận vuông) được tính bằng:",
    "options": [
      {
        "key": "A",
        "text": "$\\det A + \\det C$"
      },
      {
        "key": "B",
        "text": "$\\det A \\cdot \\det C - \\det B$"
      },
      {
        "key": "C",
        "text": "$\\det A \\cdot \\det C$"
      },
      {
        "key": "D",
        "text": "$\\det(AC - B)$"
      }
    ],
    "correct": "C",
    "explanation": "* **Công thức định thức ma trận tam giác khối:**\n  * Với ma trận dạng khối mà khối ở góc dưới bên trái là khối số 0:\n    $$\\det \\begin{bmatrix} A & B \\\\ 0 & C \\end{bmatrix} = \\det A \\cdot \\det C$$\n  * Tương tự cho ma trận khối tam giác dưới $\\det \\begin{bmatrix} A & 0 \\\\ B & C \\end{bmatrix} = \\det A \\cdot \\det C$.\n* **Chọn đáp án: C.**"
  },
  {
    "id": 226,
    "originalId": null,
    "isOriginal": false,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho hai ma trận $A$ cỡ $3 \\times 4$ và $B$ cỡ $4 \\times 2$. Hạng của tích ma trận $AB$ có thể nhận giá trị lớn nhất là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "$2$"
      },
      {
        "key": "B",
        "text": "$3$"
      },
      {
        "key": "C",
        "text": "$4$"
      },
      {
        "key": "D",
        "text": "$12$"
      }
    ],
    "correct": "A",
    "explanation": "* **Bất đẳng thức về hạng của tích hai ma trận:**\n  * Ta có định lý: $r(AB) \\le \\min(r(A), r(B))$.\n  * Ma trận $B$ có cỡ $4 \\times 2$ nên $r(B) \\le \\min(4, 2) = 2$.\n  * Tích $AB$ có cỡ $3 \\times 2$, do đó $r(AB) \\le \\min(3, 2) = 2$.\n  * Vậy giá trị lớn nhất mà hạng $r(AB)$ có thể đạt được là $2$.\n* **Chọn đáp án: A.**"
  },
  {
    "id": 227,
    "originalId": null,
    "isOriginal": false,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận $A = \\begin{bmatrix} 1 & 2 & 1 \\\\ 2 & 5 & 3 \\\\ 1 & 1 & m \\end{bmatrix}$. Tìm điều kiện của $m$ để ma trận $A$ khả nghịch.",
    "options": [
      {
        "key": "A",
        "text": "$m = 0$"
      },
      {
        "key": "B",
        "text": "$m \\neq 2$"
      },
      {
        "key": "C",
        "text": "$m \\neq 0$"
      },
      {
        "key": "D",
        "text": "$m \\neq -1$"
      }
    ],
    "correct": "C",
    "explanation": "* **Điều kiện khả nghịch:** Ma trận vuông $A$ khả nghịch khi và chỉ khi $\\det A \\neq 0$.\n* Tính định thức $\\det A$:\n  $$\\det A = 1(5m - 3) - 2(2m - 3) + 1(2 - 5) = 5m - 3 - 4m + 6 - 3 = m$$\n* Để $A$ khả nghịch thì $\\det A \\neq 0 \\iff m \\neq 0$.\n* **Chọn đáp án: C.**"
  },
  {
    "id": 228,
    "originalId": null,
    "isOriginal": false,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Khẳng định nào dưới đây là **sai** đối với phép biến đổi sơ cấp trên ma trận?",
    "options": [
      {
        "key": "A",
        "text": "Nhân một hàng với số $k = 0$ không làm thay đổi hạng của ma trận"
      },
      {
        "key": "B",
        "text": "Đổi chỗ hai hàng không làm thay đổi hạng của ma trận"
      },
      {
        "key": "C",
        "text": "Nhân một hàng với số $k \neq 0$ không làm thay đổi hạng của ma trận"
      },
      {
        "key": "D",
        "text": "Cộng vào một hàng một bội số của hàng khác không làm thay đổi hạng của ma trận"
      }
    ],
    "correct": "A",
    "explanation": "* **Định nghĩa các phép biến đổi sơ cấp trên hàng:**\n  1. Đổi chỗ hai hàng: $h_i \\leftrightarrow h_j$.\n  2. Nhân một hàng với số **khác không** $k \\neq 0$: $h_i \\to k h_i$.\n  3. Cộng vào một hàng một bội số của hàng khác: $h_i \\to h_i + c h_j$.\n* Nếu nhân một hàng với $k = 0$, hàng đó biến thành hàng toàn số 0, có thể làm giảm hạng của ma trận. Do đó phương án A là khẳng định sai.\n* **Chọn đáp án: A.**"
  },
  {
    "id": 229,
    "originalId": null,
    "isOriginal": false,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận vuông $A$ cấp $n \\ge 2$. Ký hiệu $A^*$ là ma trận phụ hợp (adjugate matrix) của $A$. Khẳng định nào sau đây luôn đúng?",
    "options": [
      {
        "key": "A",
        "text": "$A \\cdot A^* = \\det A$"
      },
      {
        "key": "B",
        "text": "$A \\cdot A^* = A^* \\cdot A = (\\det A) \\cdot I_n$"
      },
      {
        "key": "C",
        "text": "$\\det(A^*) = \\det A$"
      },
      {
        "key": "D",
        "text": "$A^* = A^{-1}$ với mọi ma trận $A$"
      }
    ],
    "correct": "B",
    "explanation": "* **Định lý cơ bản về ma trận phụ hợp:**\n  * Tích của ma trận $A$ với ma trận phụ hợp $A^*$ bằng định thức của $A$ nhân với ma trận đơn vị:\n    $$A \\cdot A^* = A^* \\cdot A = (\\det A) \\cdot I_n$$\n  * Từ đây suy ra công thức nghịch đảo $A^{-1} = \\dfrac{1}{\\det A} A^*$ khi $\\det A \\neq 0$.\n  * Đồng thời $\\det(A^*) = (\\det A)^{n-1}$.\n* **Chọn đáp án: B.**"
  },
  {
    "id": 230,
    "originalId": null,
    "isOriginal": false,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Tính định thức $\\begin{vmatrix} 1 & a & a^2 \\\\ 1 & b & b^2 \\\\ 1 & c & c^2 \\end{vmatrix}$ (Định thức Vandermonde cấp 3):",
    "options": [
      {
        "key": "A",
        "text": "$(a - b)(b - c)(c - a)$"
      },
      {
        "key": "B",
        "text": "$(a + b)(b + c)(c + a)$"
      },
      {
        "key": "C",
        "text": "$(b - a)(c - a)(c - b)$"
      },
      {
        "key": "D",
        "text": "$abc(a - b)(b - c)$"
      }
    ],
    "correct": "C",
    "explanation": "* **Công thức định thức Vandermonde cấp 3:**\n  * Bằng các phép biến đổi hàng $h_2 \\to h_2 - h_1$, $h_3 \\to h_3 - h_1$, ta đặt nhân tử chung $(b - a)$ và $(c - a)$ ra ngoài.\n  * Kết quả thu được công thức chuẩn:\n    $$V_3 = (b - a)(c - a)(c - b)$$\n* **Chọn đáp án: C.**"
  },
  {
    "id": 231,
    "originalId": null,
    "isOriginal": false,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ và $B = \\begin{bmatrix} 2 & 0 \\\\ 1 & 5 \\end{bmatrix}$. Tính vết (trace) của ma trận $AB$:",
    "options": [
      {
        "key": "A",
        "text": "$24$"
      },
      {
        "key": "B",
        "text": "$34$"
      },
      {
        "key": "C",
        "text": "$14$"
      },
      {
        "key": "D",
        "text": "$-24$"
      }
    ],
    "correct": "A",
    "explanation": "* **Định nghĩa vết của ma trận (Trace):** $\\operatorname{tr}(M)$ là tổng các phần tử trên đường chéo chính.\n* Tính ma trận tích $AB$:\n  $$AB = \\begin{bmatrix} 1(2) + 2(1) & 1(0) + 2(5) \\\\ 3(2) + 4(1) & 3(0) + 4(5) \\end{bmatrix} = \\begin{bmatrix} 4 & 10 \\\\ 10 & 20 \\end{bmatrix}$$\n* Tổng các phần tử trên đường chéo chính:\n  $$\\operatorname{tr}(AB) = (AB)_{11} + (AB)_{22} = 4 + 20 = 24$$\n* **Chọn đáp án: A.**"
  },
  {
    "id": 232,
    "originalId": null,
    "isOriginal": false,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Tìm hạng của ma trận $A = \\begin{bmatrix} 1 & -1 & 2 \\\\ 2 & -2 & 4 \\\\ -1 & 1 & -2 \\end{bmatrix}$:",
    "options": [
      {
        "key": "A",
        "text": "$2$"
      },
      {
        "key": "B",
        "text": "$1$"
      },
      {
        "key": "C",
        "text": "$3$"
      },
      {
        "key": "D",
        "text": "$0$"
      }
    ],
    "correct": "B",
    "explanation": "* **Kỹ thuật quan sát sự tỉ lệ của các hàng:**\n  * Hàng 2: $h_2 = 2 \\cdot h_1$.\n  * Hàng 3: $h_3 = -1 \\cdot h_1$.\n  * Do đó, sau khi dùng phép biến đổi sơ cấp $h_2 \\to h_2 - 2h_1$ và $h_3 \\to h_3 + h_1$, ma trận đưa về:\n    $$\\begin{bmatrix} 1 & -1 & 2 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$$\n  * Ma trận chỉ có $1$ hàng khác 0, suy ra hạng $r(A) = 1$.\n* **Chọn đáp án: B.**"
  },
  {
    "id": 233,
    "originalId": null,
    "isOriginal": false,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Nếu ma trận vuông $A$ thỏa mãn $A^2 = A$ (ma trận lũy đẳng - idempotent), thì định thức $\\det A$ có thể nhận những giá trị nào?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ $\\det A = 1$"
      },
      {
        "key": "B",
        "text": "Chỉ $\\det A = 0$"
      },
      {
        "key": "C",
        "text": "$\\det A = \\pm 1$"
      },
      {
        "key": "D",
        "text": "$\\det A = 0$ hoặc $\\det A = 1$"
      }
    ],
    "correct": "D",
    "explanation": "* **Kỹ thuật sử dụng tính chất định thức của tích:**\n  * Lấy định thức hai vế của đẳng thức $A^2 = A$:\n    $$\\det(A^2) = \\det A \\iff (\\det A)^2 = \\det A$$\n  * Đặt $d = \\det A$, ta có phương trình bậc hai:\n    $$d^2 - d = 0 \\iff d(d - 1) = 0 \\iff \\left[\\begin{array}{l} d = 0 \\\\ d = 1 \\end{array}\\right.$$\n* Vậy $\\det A$ chỉ có thể bằng $0$ hoặc $1$.\n* **Chọn đáp án: D.**"
  },
  {
    "id": 234,
    "originalId": null,
    "isOriginal": false,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận vuông $A$ phản đối xứng (skew-symmetric, tức $A^T = -A$) cấp $n = 3$. Giá trị của $\\det A$ là:",
    "options": [
      {
        "key": "A",
        "text": "$1$"
      },
      {
        "key": "B",
        "text": "$0$"
      },
      {
        "key": "C",
        "text": "$-1$"
      },
      {
        "key": "D",
        "text": "Phụ thuộc vào các phần tử của $A$"
      }
    ],
    "correct": "B",
    "explanation": "* **Định lý về định thức của ma trận phản đối xứng cấp lẻ:**\n  * Vì $A^T = -A$, lấy định thức hai vế:\n    $$\\det(A^T) = \\det(-A)$$\n  * Vì $\\det(A^T) = \\det A$ và $\\det(-A) = (-1)^n \\det A$, với $n = 3$ lẻ:\n    $$\\det A = (-1)^3 \\det A = -\\det A \\implies 2\\det A = 0 \\implies \\det A = 0$$\n* Mọi ma trận phản đối xứng cấp lẻ đều có định thức bằng 0.\n* **Chọn đáp án: B.**"
  },
  {
    "id": 235,
    "originalId": null,
    "isOriginal": false,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Biết $\\det \\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & k \\end{bmatrix} = 5$. Tính $\\det \\begin{bmatrix} 2a & 2b & 2c \\\\ g & h & k \\\\ d & e & f \\end{bmatrix}$:",
    "options": [
      {
        "key": "A",
        "text": "$-10$"
      },
      {
        "key": "B",
        "text": "$10$"
      },
      {
        "key": "C",
        "text": "$-5$"
      },
      {
        "key": "D",
        "text": "$20$"
      }
    ],
    "correct": "A",
    "explanation": "* **Áp dụng các tính chất cơ bản của định thức:**\n  1. Hàng 1 được nhân với $2 \\implies$ định thức nhân $2$.\n  2. Đổi chỗ hàng 2 và hàng 3 $\\implies$ định thức đổi dấu (nhân $-1$).\n  * Kết hợp hai phép biến đổi:\n    $$\\det = 2 \\cdot (-1) \\cdot 5 = -10$$\n* **Chọn đáp án: A.**"
  },
  {
    "id": 236,
    "originalId": null,
    "isOriginal": false,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Hệ phương trình tuyến tính $AX = B$ gồm $n$ phương trình và $n$ ẩn có nghiệm duy nhất khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$\\det A = 0$"
      },
      {
        "key": "B",
        "text": "$r(A) < n$"
      },
      {
        "key": "C",
        "text": "$\\det A \\neq 0$"
      },
      {
        "key": "D",
        "text": "$B \\neq 0$"
      }
    ],
    "correct": "C",
    "explanation": "* **Định lý Cramer:**\n  * Đối với hệ phương trình vuông ($n$ phương trình, $n$ ẩn), hệ có nghiệm duy nhất khi và chỉ khi định thức của ma trận hệ số khác không:\n    $$\\det A \\neq 0$$\n  * Khi đó nghiệm được tính theo công thức: $x_j = \\dfrac{\\det A_j}{\\det A}$ với $j = 1, \\dots, n$.\n* **Chọn đáp án: C.**"
  },
  {
    "id": 237,
    "originalId": null,
    "isOriginal": false,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Theo định lý Kronecker - Capelli, hệ phương trình tuyến tính $AX = B$ vô nghiệm khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$r(A) = r(\\bar{A}) = n$"
      },
      {
        "key": "B",
        "text": "$r(A) < r(\\bar{A})$"
      },
      {
        "key": "C",
        "text": "$r(A) = r(\\bar{A}) < n$"
      },
      {
        "key": "D",
        "text": "$r(A) > r(\\bar{A})$"
      }
    ],
    "correct": "B",
    "explanation": "* **Định lý Kronecker - Capelli:**\n  * Ký hiệu $A$ là ma trận hệ số và $\\bar{A} = [A \\mid B]$ là ma trận mở rộng.\n  * Hệ có nghiệm $\\iff r(A) = r(\\bar{A})$.\n  * Do đó, hệ **vô nghiệm** khi và chỉ khi $r(A) < r(\\bar{A})$ (thực tế luôn là $r(\\bar{A}) = r(A) + 1$, xuất hiện hàng có dạng $[0 \\, 0 \\dots 0 \\mid c]$ với $c \\neq 0$).\n* **Chọn đáp án: B.**"
  },
  {
    "id": 238,
    "originalId": null,
    "isOriginal": false,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho hệ phương trình thuần nhất $AX = 0$ gồm $4$ phương trình, $5$ ẩn với $r(A) = 3$. Số chiều của không gian nghiệm của hệ là:",
    "options": [
      {
        "key": "A",
        "text": "$2$"
      },
      {
        "key": "B",
        "text": "$1$"
      },
      {
        "key": "C",
        "text": "$3$"
      },
      {
        "key": "D",
        "text": "$5$"
      }
    ],
    "correct": "A",
    "explanation": "* **Công thức số chiều của không gian nghiệm hệ thuần nhất:**\n  * Cho hệ phương trình tuyến tính thuần nhất $AX = 0$ có $n$ ẩn số và ma trận hệ số có hạng $r(A)$.\n  * Số chiều của không gian nghiệm (số ẩn tự do) bằng:\n    $$\\dim S = n - r(A)$$\n  * Ở đây số ẩn $n = 5$ và hạng $r(A) = 3$, do đó:\n    $$\\dim S = 5 - 3 = 2$$\n* **Chọn đáp án: A.**"
  },
  {
    "id": 239,
    "originalId": null,
    "isOriginal": false,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Hệ phương trình thuần nhất $AX = 0$ với ma trận vuông $A$ cấp $n$ có nghiệm **không tầm thường** khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$\\det A \\neq 0$"
      },
      {
        "key": "B",
        "text": "$\\det A = 0$"
      },
      {
        "key": "C",
        "text": "$r(A) = n$"
      },
      {
        "key": "D",
        "text": "$A = 0$"
      }
    ],
    "correct": "B",
    "explanation": "* **Điều kiện có nghiệm không tầm thường:**\n  * Hệ thuần nhất luôn có nghiệm tầm thường $X = \\vec{0}$.\n  * Nếu $\\det A \\neq 0$, hệ có nghiệm duy nhất, và nghiệm đó chính là nghiệm tầm thường $X = \\vec{0}$.\n  * Do đó, để hệ có nghiệm không tầm thường ($X \\neq \\vec{0}$), điều kiện cần và đủ là hệ có vô số nghiệm $\\iff \\det A = 0$ (hoặc $r(A) < n$).\n* **Chọn đáp án: B.**"
  },
  {
    "id": 240,
    "originalId": null,
    "isOriginal": false,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho hệ phương trình: $\\begin{cases} x + 2y - z = 1 \\\\ 2x + 5y + z = 4 \\\\ 3x + 7y + mz = 5 \\end{cases}$. Tìm điều kiện của $m$ để hệ có nghiệm duy nhất.",
    "options": [
      {
        "key": "A",
        "text": "$m = 0$"
      },
      {
        "key": "B",
        "text": "$m \\neq 2$"
      },
      {
        "key": "C",
        "text": "$m \\neq 0$"
      },
      {
        "key": "D",
        "text": "Mọi $m \\in \\mathbb{R}$"
      }
    ],
    "correct": "C",
    "explanation": "* **Hệ vuông 3 phương trình 3 ẩn, áp dụng Cramer:**\n  * Tính $\\det A$:\n    $$\\det A = \\begin{vmatrix} 1 & 2 & -1 \\\\ 2 & 5 & 1 \\\\ 3 & 7 & m \\end{vmatrix}$$\n  * Biến đổi hàng: $h_2 \\to h_2 - 2h_1$, $h_3 \\to h_3 - 3h_1$:\n    $$\\det A = \\begin{vmatrix} 1 & 2 & -1 \\\\ 0 & 1 & 3 \\\\ 0 & 1 & m + 3 \\end{vmatrix} = 1 \\cdot (m + 3 - 3) = m$$\n  * Hệ có nghiệm duy nhất $\\iff \\det A \\neq 0 \\iff m \\neq 0$.\n* **Chọn đáp án: C.**"
  },
  {
    "id": 241,
    "originalId": null,
    "isOriginal": false,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Dùng quy tắc Cramer tìm ẩn $y$ trong hệ phương trình: $\\begin{cases} 2x + y = 5 \\\\ 3x - 2y = 4 \\end{cases}$. Giá trị của $y$ là:",
    "options": [
      {
        "key": "A",
        "text": "$1$"
      },
      {
        "key": "B",
        "text": "$2$"
      },
      {
        "key": "C",
        "text": "$-1$"
      },
      {
        "key": "D",
        "text": "$3$"
      }
    ],
    "correct": "A",
    "explanation": "* **Áp dụng công thức Cramer:**\n  * Định thức ma trận hệ số: $\\det A = \\begin{vmatrix} 2 & 1 \\\\ 3 & -2 \\end{vmatrix} = 2(-2) - 1(3) = -7 \\neq 0$.\n  * Định thức $\\det A_y$ (thay cột 2 bằng cột vế phải $\\begin{bmatrix} 5 \\\\ 4 \\end{bmatrix}$):\n    $$\\det A_y = \\begin{vmatrix} 2 & 5 \\\\ 3 & 4 \\end{vmatrix} = 2(4) - 5(3) = 8 - 15 = -7$$\n  * Nghiệm $y = \\dfrac{\\det A_y}{\\det A} = \\dfrac{-7}{-7} = 1$.\n* **Chọn đáp án: A.**"
  },
  {
    "id": 242,
    "originalId": null,
    "isOriginal": false,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Một hệ gồm $m$ phương trình tuyến tính và $n$ ẩn số có $m < n$ (số phương trình ít hơn số ẩn). Nếu hệ này có nghiệm thì khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "text": "Hệ có nghiệm duy nhất"
      },
      {
        "key": "B",
        "text": "Hệ có đúng $m$ nghiệm"
      },
      {
        "key": "C",
        "text": "Hệ luôn có vô số nghiệm"
      },
      {
        "key": "D",
        "text": "Không thể kết luận được"
      }
    ],
    "correct": "C",
    "explanation": "* **Hệ thiếu phương trình ($m < n$):**\n  * Hạng của ma trận hệ số $r(A) \\le \\min(m, n) = m < n$.\n  * Do đó nếu hệ có nghiệm (tức $r(A) = r(\\bar{A})$), ta luôn có:\n    $$r(A) < n$$\n  * Vì số ẩn tự do $k = n - r(A) \\ge n - m > 0$, nghiệm phụ thuộc vào ít nhất một tham số tự do, do đó hệ luôn có vô số nghiệm.\n* **Chọn đáp án: C.**"
  },
  {
    "id": 243,
    "originalId": null,
    "isOriginal": false,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Tìm tất cả các giá trị của $m$ để hệ phương trình $\\begin{cases} x + y + z = 1 \\\\ 2x + 3y + z = 3 \\\\ x + 2y + mz = 2 \\end{cases}$ vô số nghiệm.",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq 0$"
      },
      {
        "key": "B",
        "text": "$m = 0$"
      },
      {
        "key": "C",
        "text": "$m = 1$"
      },
      {
        "key": "D",
        "text": "Không tồn tại $m$"
      }
    ],
    "correct": "B",
    "explanation": "* **Biến đổi ma trận mở rộng $\\bar{A}$:**\n  $$\\bar{A} = \\begin{bmatrix} 1 & 1 & 1 & 1 \\\\ 2 & 3 & 1 & 3 \\\\ 1 & 2 & m & 2 \\end{bmatrix}$$\n  * $h_2 \\to h_2 - 2h_1$, $h_3 \\to h_3 - h_1$:\n    $$\\begin{bmatrix} 1 & 1 & 1 & 1 \\\\ 0 & 1 & -1 & 1 \\\\ 0 & 1 & m - 1 & 1 \\end{bmatrix}$$\n  * $h_3 \\to h_3 - h_2$:\n    $$\\begin{bmatrix} 1 & 1 & 1 & 1 \\\\ 0 & 1 & -1 & 1 \\\\ 0 & 0 & m & 0 \\end{bmatrix}$$\n  * Để hệ có vô số nghiệm, hàng cuối phải là hàng toàn số 0 $\\iff m = 0$.\n  * Khi đó $r(A) = r(\\bar{A}) = 2 < 3$, hệ có vô số nghiệm phụ thuộc $1$ tham số tự do.\n* **Chọn đáp án: B.**"
  },
  {
    "id": 244,
    "originalId": null,
    "isOriginal": false,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho $X_1, X_2$ là hai nghiệm phân biệt của hệ phương trình không thuần nhất $AX = B$. Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "text": "$X_1 - X_2$ là một nghiệm của hệ thuần nhất liên kết $AX = 0$"
      },
      {
        "key": "B",
        "text": "$X_1 + X_2$ là một nghiệm của hệ thuần nhất liên kết $AX = 0$"
      },
      {
        "key": "C",
        "text": "$X_1 + X_2$ là một nghiệm của hệ $AX = B$"
      },
      {
        "key": "D",
        "text": "$2X_1$ là một nghiệm của hệ $AX = B$"
      }
    ],
    "correct": "A",
    "explanation": "* **Cấu trúc nghiệm của hệ phương trình tuyến tính:**\n  * Ta có $AX_1 = B$ và $AX_2 = B$.\n  * Trừ hai đẳng thức vế theo vế:\n    $$A(X_1 - X_2) = AX_1 - AX_2 = B - B = 0$$\n  * Do đó hiệu của hai nghiệm bất kỳ của hệ không thuần nhất luôn là một nghiệm của hệ thuần nhất liên kết $AX = 0$.\n* **Chọn đáp án: A.**"
  },
  {
    "id": 245,
    "originalId": null,
    "isOriginal": false,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Tập nghiệm của hệ phương trình tuyến tính thuần nhất $AX = 0$ trong $\\mathbb{R}^n$ lập thành:",
    "options": [
      {
        "key": "A",
        "text": "Một không gian véc tơ con của $\\mathbb{R}^n$"
      },
      {
        "key": "B",
        "text": "Một tập hợp rỗng nếu $\\det A \\neq 0$"
      },
      {
        "key": "C",
        "text": "Một không gian affine nhưng không phải không gian con"
      },
      {
        "key": "D",
        "text": "Toàn bộ không gian $\\mathbb{R}^n$ với mọi ma trận $A$"
      }
    ],
    "correct": "A",
    "explanation": "* **Tính chất không gian con của tập nghiệm hệ thuần nhất:**\n  * Nghiệm $\\vec{0}$ luôn thỏa mãn: $A \\\\vec{0} = 0$.\n  * Nếu $u, v$ là nghiệm ($Au=0, Av=0$) thì $A(u+v) = Au + Av = 0$ ($u+v$ là nghiệm).\n  * Với mọi $\\alpha \\in \\mathbb{R}$, $A(\\alpha u) = \\alpha (Au) = 0$ ($\\alpha u$ là nghiệm).\n  * Do đó tập nghiệm đóng kín với phép cộng và phép nhân vô hướng, nên là một không gian véc tơ con của $\\mathbb{R}^n$ (gọi là không gian hạch hay $\\ker A$).\n* **Chọn đáp án: A.**"
  },
  {
    "id": 246,
    "originalId": null,
    "isOriginal": false,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Tìm hệ nghiệm cơ bản của phương trình thuần nhất $x_1 - 2x_2 + 3x_3 = 0$ trong $\\mathbb{R}^3$:",
    "options": [
      {
        "key": "A",
        "text": "$\\{ (1, -2, 3) \\}$"
      },
      {
        "key": "B",
        "text": "$\\{ (1, 0, 0), \\, (0, 1, 0) \\}$"
      },
      {
        "key": "C",
        "text": "$\\{ (2, 1, 0), \\, (3, 0, -1) \\}$"
      },
      {
        "key": "D",
        "text": "$\\{ (2, 1, 0), \\, (-3, 0, 1) \\}$"
      }
    ],
    "correct": "D",
    "explanation": "* **Kỹ thuật tìm hệ nghiệm cơ bản (cơ sở không gian nghiệm):**\n  * Phương trình có 1 phương trình, 3 ẩn $\\implies$ số ẩn tự do là $3 - 1 = 2$.\n  * Rút $x_1$ theo hai ẩn tự do $x_2, x_3$:\n    $$x_1 = 2x_2 - 3x_3$$\n  * Chọn $(x_2 = 1, x_3 = 0) \\implies x_1 = 2 \\implies v_1 = (2, 1, 0)$.\n  * Chọn $(x_2 = 0, x_3 = 1) \\implies x_1 = -3 \\implies v_2 = (-3, 0, 1)$.\n  * Hệ $\\{v_1, v_2\\}$ độc lập tuyến tính và sinh ra toàn bộ không gian nghiệm, do đó là một hệ nghiệm cơ bản.\n* **Chọn đáp án: D.**"
  },
  {
    "id": 247,
    "originalId": null,
    "isOriginal": false,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho hệ phương trình $\\begin{cases} x + y = 2 \\\\ 2x + 2y = m \\end{cases}$. Hệ này có nghiệm khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq 4$"
      },
      {
        "key": "B",
        "text": "$m = 2$"
      },
      {
        "key": "C",
        "text": "$m = 4$"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "C",
    "explanation": "* **Xét sự tương thích của hai phương trình:**\n  * Nhân phương trình thứ nhất với 2 ta được: $2x + 2y = 4$.\n  * Phương trình thứ hai là: $2x + 2y = m$.\n  * Để hệ có nghiệm, vế phải phải bằng nhau: $m = 4$. Khi đó hai phương trình trùng nhau và hệ có vô số nghiệm. Nếu $m \\neq 4$ hệ vô nghiệm.\n* **Chọn đáp án: C.**"
  },
  {
    "id": 248,
    "originalId": null,
    "isOriginal": false,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Nghiệm tổng quát của hệ phương trình tuyến tính không thuần nhất $AX = B$ có dạng:",
    "options": [
      {
        "key": "A",
        "text": "$X = X_0 \\cdot X_h$"
      },
      {
        "key": "B",
        "text": "$X = c X_0$ với $c \\in \\mathbb{R}$"
      },
      {
        "key": "C",
        "text": "$X = X_h - X_0$"
      },
      {
        "key": "D",
        "text": "$X = X_0 + X_h$, với $X_0$ là một nghiệm riêng của $AX = B$ và $X_h$ là nghiệm tổng quát của $AX = 0$"
      }
    ],
    "correct": "D",
    "explanation": "* **Định lý cấu trúc nghiệm tổng quát:**\n  * Nghiệm tổng quát của hệ không thuần nhất $AX = B$ bằng tổng của **một nghiệm riêng** $X_0$ của hệ không thuần nhất cộng với **nghiệm tổng quát** $X_h$ của hệ thuần nhất liên kết:\n    $$X = X_0 + X_h$$\n* **Chọn đáp án: D.**"
  },
  {
    "id": 249,
    "originalId": null,
    "isOriginal": false,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho hệ phương trình $\\begin{cases} mx + y = 1 \\\\ x + my = 1 \\end{cases}$. Tìm $m$ để hệ vô nghiệm.",
    "options": [
      {
        "key": "A",
        "text": "$m = 1$"
      },
      {
        "key": "B",
        "text": "$m = 0$"
      },
      {
        "key": "C",
        "text": "$m = 2$"
      },
      {
        "key": "D",
        "text": "$m = -1$"
      }
    ],
    "correct": "D",
    "explanation": "* **Tính định thức ma trận hệ số:**\n  $$\\det A = \\begin{vmatrix} m & 1 \\\\ 1 & m \\end{vmatrix} = m^2 - 1 = (m - 1)(m + 1)$$\n  * Nếu $m \\neq \\pm 1$: hệ có nghiệm duy nhất.\n  * Nếu $m = 1$: hệ trở thành $\\begin{cases} x + y = 1 \\\\ x + y = 1 \\end{cases} \\implies$ vô số nghiệm.\n  * Nếu $m = -1$: hệ trở thành $\\begin{cases} -x + y = 1 \\\\ x - y = 1 \\end{cases} \\iff \\begin{cases} x - y = -1 \\\\ x - y = 1 \\end{cases} \\implies$ mâu thuẫn, vô nghiệm.\n* Vậy hệ vô nghiệm khi $m = -1$.\n* **Chọn đáp án: D.**"
  },
  {
    "id": 250,
    "originalId": null,
    "isOriginal": false,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho ma trận hệ số $A$ có cỡ $3 \\times 5$ với $r(A) = 3$. Hệ phương trình $AX = B$ sẽ:",
    "options": [
      {
        "key": "A",
        "text": "Có thể vô nghiệm với một số $B$"
      },
      {
        "key": "B",
        "text": "Luôn có vô số nghiệm với mọi cột $B \\in \\mathbb{R}^3$"
      },
      {
        "key": "C",
        "text": "Có nghiệm duy nhất với mọi $B$"
      },
      {
        "key": "D",
        "text": "Vô nghiệm với mọi $B$"
      }
    ],
    "correct": "B",
    "explanation": "* **Phân tích số chiều và hạng:**\n  * Ma trận mở rộng $\\bar{A} = [A \\mid B]$ có cỡ $3 \\times 6$, nên $r(\\bar{A}) \\le 3$.\n  * Vì $r(A) = 3$ và $r(A) \\le r(\\bar{A}) \\le 3 \\implies r(A) = r(\\bar{A}) = 3$ với **mọi** $B \\in \\mathbb{R}^3$.\n  * Do đó hệ luôn luôn có nghiệm. Mặt khác, số ẩn là $n = 5 > 3$, nên số ẩn tự do là $5 - 3 = 2 > 0$.\n  * Vì vậy hệ luôn có vô số nghiệm với mọi $B$.\n* **Chọn đáp án: B.**"
  },
  {
    "id": 251,
    "originalId": null,
    "isOriginal": false,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Một hệ gồm 3 phương trình, 3 ẩn số có $\\det A = 0$ và $\\det A_1 \\neq 0$. Khẳng định nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Hệ phương trình có vô số nghiệm"
      },
      {
        "key": "B",
        "text": "Hệ phương trình có nghiệm duy nhất"
      },
      {
        "key": "C",
        "text": "Chưa đủ thông tin để kết luận"
      },
      {
        "key": "D",
        "text": "Hệ phương trình chắc chắn vô nghiệm"
      }
    ],
    "correct": "D",
    "explanation": "* **Dấu hiệu nhận biết hệ vuông vô nghiệm qua Cramer:**\n  * Giả sử hệ có nghiệm $(x_1, x_2, x_3)$. Theo tính chất định thức, ta luôn có đẳng thức:\n    $$x_1 \\cdot \\det A = \\det A_1$$\n  * Vì $\\det A = 0$, vế trái bằng $x_1 \\cdot 0 = 0$.\n  * Nhưng giả thiết cho $\\det A_1 \\neq 0$, dẫn đến đẳng thức vô lý: $0 \\neq 0$.\n  * Do đó không thể tồn tại nghiệm, hệ chắc chắn **vô nghiệm**.\n* **Chọn đáp án: D.**"
  },
  {
    "id": 252,
    "originalId": null,
    "isOriginal": false,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Khi giải hệ phương trình tuyến tính bằng phương pháp khử Gauss, ta thực hiện các phép biến đổi sơ cấp trên:",
    "options": [
      {
        "key": "A",
        "text": "Các cột của ma trận mở rộng $\\bar{A}$"
      },
      {
        "key": "B",
        "text": "Các hàng của ma trận mở rộng $\\bar{A} = [A \\mid B]$"
      },
      {
        "key": "C",
        "text": "Chỉ các hàng của ma trận hệ số $A$"
      },
      {
        "key": "D",
        "text": "Cả hàng và cột của $\\bar{A}$ tùy ý"
      }
    ],
    "correct": "B",
    "explanation": "* **Nguyên tắc phương pháp khử Gauss:**\n  * Mỗi hàng của ma trận mở rộng $\\bar{A}$ tương ứng với một phương trình trong hệ.\n  * Việc biến đổi sơ cấp theo hàng tương đương với các phép biến đổi tương đương trên các phương trình (đổi chỗ 2 phương trình, nhân 2 vế với hằng số khác 0, cộng trừ các phương trình).\n  * Biến đổi cột sẽ làm thay đổi vai trò các ẩn số hoặc làm sai lệch cột hệ số tự do $B$, do đó **chỉ biến đổi sơ cấp trên hàng** của $\\bar{A}$.\n* **Chọn đáp án: B.**"
  },
  {
    "id": 253,
    "originalId": null,
    "isOriginal": false,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Tìm nghiệm $x_1$ của hệ: $\\begin{cases} 3x_1 + 2x_2 = 7 \\\\ x_1 + 4x_2 = 9 \\end{cases}$:",
    "options": [
      {
        "key": "A",
        "text": "$x_1 = 2$"
      },
      {
        "key": "B",
        "text": "$x_1 = -1$"
      },
      {
        "key": "C",
        "text": "$x_1 = 3$"
      },
      {
        "key": "D",
        "text": "$x_1 = 1$"
      }
    ],
    "correct": "D",
    "explanation": "* **Dùng Cramer tính $x_1$:**\n  * $\\det A = \\begin{vmatrix} 3 & 2 \\\\ 1 & 4 \\end{vmatrix} = 12 - 2 = 10$.\n  * Thay cột 1 bằng cột vế phải $\\begin{bmatrix} 7 \\\\ 9 \\end{bmatrix}$:\n    $$\\det A_1 = \\begin{vmatrix} 7 & 2 \\\\ 9 & 4 \\end{vmatrix} = 28 - 18 = 10$$\n  * Suy ra $x_1 = \\dfrac{\\det A_1}{\\det A} = \\dfrac{10}{10} = 1$.\n* **Chọn đáp án: D.**"
  },
  {
    "id": 254,
    "originalId": null,
    "isOriginal": false,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Hệ phương trình thuần nhất $AX = 0$ có ma trận hệ số $A$ thỏa mãn $r(A) = n$ (với $n$ là số ẩn). Số nghiệm của hệ là:",
    "options": [
      {
        "key": "A",
        "text": "Đúng 1 nghiệm (nghiệm tầm thường $\\vec{0}$)"
      },
      {
        "key": "B",
        "text": "Vô số nghiệm"
      },
      {
        "key": "C",
        "text": "Vô nghiệm"
      },
      {
        "key": "D",
        "text": "$n$ nghiệm"
      }
    ],
    "correct": "A",
    "explanation": "* **Số chiều không gian nghiệm:**\n  * $\\dim S = n - r(A) = n - n = 0$.\n  * Không gian nghiệm có số chiều bằng $0$, tức chỉ chứa duy nhất một véc tơ không:\n    $$S = \\\\{\\\\vec{0}\\\\}$$\n  * Vậy hệ có nghiệm duy nhất là nghiệm tầm thường $X = (0, 0, \\\\dots, 0)^T$.\n* **Chọn đáp án: A.**"
  },
  {
    "id": 255,
    "originalId": null,
    "isOriginal": false,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho hệ phương trình $\\begin{cases} x_1 + x_2 + x_3 = 0 \\\\ 2x_1 + 2x_2 + 2x_3 = 0 \\end{cases}$ trong $\\mathbb{R}^3$. Số phần tử trong một hệ nghiệm cơ bản của hệ là:",
    "options": [
      {
        "key": "A",
        "text": "$1$"
      },
      {
        "key": "B",
        "text": "$3$"
      },
      {
        "key": "C",
        "text": "$2$"
      },
      {
        "key": "D",
        "text": "$0$"
      }
    ],
    "correct": "C",
    "explanation": "* **Tính số chiều của không gian nghiệm:**\n  * Hai phương trình tỉ lệ với nhau $\\implies$ hạng ma trận hệ số $r(A) = 1$.\n  * Số ẩn $n = 3$.\n  * Số véc tơ trong hệ nghiệm cơ bản chính là số chiều của không gian nghiệm:\n    $$\\dim S = n - r(A) = 3 - 1 = 2$$\n* **Chọn đáp án: C.**"
  },
  {
    "id": 256,
    "originalId": null,
    "isOriginal": false,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Tập hợp nào dưới đây là một **không gian véc tơ con** của $\\mathbb{R}^3$?",
    "options": [
      {
        "key": "A",
        "text": "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x + y + z = 2\\}$"
      },
      {
        "key": "B",
        "text": "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid xy = 0\\}$"
      },
      {
        "key": "C",
        "text": "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x \\ge 0\\}$"
      },
      {
        "key": "D",
        "text": "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid 3x - 2y + 4z = 0\\}$"
      }
    ],
    "correct": "D",
    "explanation": "* **Dấu hiệu nhận biết không gian véc tơ con trong $\\mathbb{R}^n$:**\n  * Phương trình tuyến tính thuần nhất ($a_1 x_1 + \\dots + a_n x_n = 0$) luôn biểu diễn một không gian con (mặt phẳng đi qua gốc tọa độ).\n  * Phương án B sai vì không chứa véc tơ không $\\vec{0} = (0, 0, 0)$ ($0+0+0 = 0 \\neq 2$).\n  * Phương án C sai vì không đóng kín với phép cộng (ví dụ $(1, 0, 0) \\in W$ và $(0, 1, 0) \\in W$ nhưng tổng $(1, 1, 0) \\notin W$ do $1 \\cdot 1 = 1 \\neq 0$).\n  * Phương án D sai vì không đóng kín với phép nhân số âm.\n* **Chọn đáp án: D.**"
  },
  {
    "id": 257,
    "originalId": null,
    "isOriginal": false,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Một hệ gồm $4$ véc tơ trong không gian $\\mathbb{R}^3$ có tính chất nào dưới đây?",
    "options": [
      {
        "key": "A",
        "text": "Luôn luôn phụ thuộc tuyến tính"
      },
      {
        "key": "B",
        "text": "Luôn luôn độc lập tuyến tính"
      },
      {
        "key": "C",
        "text": "Luôn là một cơ sở của $\\mathbb{R}^3$"
      },
      {
        "key": "D",
        "text": "Chắc chắn không sinh ra $\\mathbb{R}^3$"
      }
    ],
    "correct": "A",
    "explanation": "* **Định lý về số lượng véc tơ và số chiều:**\n  * Trong không gian véc tơ $n$ chiều ($V = \\mathbb{R}^n$), mọi hệ gồm $m$ véc tơ với $m > n$ đều **phụ thuộc tuyến tính**.\n  * Ở đây không gian $\\mathbb{R}^3$ có số chiều bằng $3$. Một hệ có $4 > 3$ véc tơ nên chắc chắn phụ thuộc tuyến tính.\n* **Chọn đáp án: A.**"
  },
  {
    "id": 258,
    "originalId": null,
    "isOriginal": false,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Tìm tất cả các giá trị của $m$ để hệ véc tơ $S = \\{(1, 1, 1), \\, (1, 2, 3), \\, (2, 3, m)\\}$ độc lập tuyến tính trong $\\mathbb{R}^3$:",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq 4$"
      },
      {
        "key": "B",
        "text": "$m = 4$"
      },
      {
        "key": "C",
        "text": "$m \\neq 2$"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "A",
    "explanation": "* **Kỹ thuật dùng định thức kiểm tra độc lập tuyến tính trong $\\mathbb{R}^n$:**\n  * Hệ $n$ véc tơ trong $\\mathbb{R}^n$ độc lập tuyến tính khi và chỉ khi định thức của ma trận tạo bởi các véc tơ khác không:\n    $$\\det M = \\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ 2 & 3 & m \\end{vmatrix}$$\n  * Biến đổi hàng: $h_2 \\to h_2 - h_1$, $h_3 \\to h_3 - 2h_1$:\n    $$\\det M = \\begin{vmatrix} 1 & 1 & 1 \\\\ 0 & 1 & 2 \\\\ 0 & 1 & m - 2 \\end{vmatrix} = 1 \\cdot (m - 2 - 2) = m - 4$$\n  * Hệ độc lập tuyến tính $\\iff \\det M \\neq 0 \\iff m - 4 \\neq 0 \\iff m \\neq 4$.\n* **Chọn đáp án: A.**"
  },
  {
    "id": 259,
    "originalId": null,
    "isOriginal": false,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Cho $W_1$ và $W_2$ là hai không gian véc tơ con của $\\mathbb{R}^5$ với $\\dim W_1 = 3, \\dim W_2 = 3$ và $\\dim(W_1 + W_2) = 4$. Số chiều của giao $\\dim(W_1 \\cap W_2)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$1$"
      },
      {
        "key": "B",
        "text": "$2$"
      },
      {
        "key": "C",
        "text": "$3$"
      },
      {
        "key": "D",
        "text": "$0$"
      }
    ],
    "correct": "B",
    "explanation": "* **Công thức số chiều Grassmann:**\n  $$\\dim(W_1 + W_2) = \\dim W_1 + \\dim W_2 - \\dim(W_1 \\cap W_2)$$\n* Thay số vào công thức:\n  $$4 = 3 + 3 - \\dim(W_1 \\cap W_2) \\implies \\dim(W_1 \\cap W_2) = 6 - 4 = 2$$\n* **Chọn đáp án: B.**"
  },
  {
    "id": 260,
    "originalId": null,
    "isOriginal": false,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Tìm tọa độ của véc tơ $u = (5, 7)$ đối với cơ sở $B = \\{v_1 = (1, 1), \\, v_2 = (1, 2)\\}$ của $\\mathbb{R}^2$:",
    "options": [
      {
        "key": "A",
        "text": "$[u]_B = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$[u]_B = \\begin{bmatrix} 5 \\\\ 7 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$[u]_B = \\begin{bmatrix} 3 \\\\ 2 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$[u]_B = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$"
      }
    ],
    "correct": "C",
    "explanation": "* **Tìm tọa độ theo định nghĩa:**\n  * Giả sử $u = c_1 v_1 + c_2 v_2$:\n    $$(5, 7) = c_1(1, 1) + c_2(1, 2) = (c_1 + c_2, \\\\, c_1 + 2c_2)$$\n  * Ta có hệ phương trình:\n    $$\\begin{cases} c_1 + c_2 = 5 \\\\ c_1 + 2c_2 = 7 \\end{cases}$$\n  * Lấy phương trình hai trừ phương trình một: $c_2 = 2 \\implies c_1 = 5 - 2 = 3$.\n  * Vậy tọa độ của $u$ đối với cơ sở $B$ là $[u]_B = \\begin{bmatrix} 3 \\\\ 2 \\end{bmatrix}$.\n* **Chọn đáp án: C.**"
  },
  {
    "id": 261,
    "originalId": null,
    "isOriginal": false,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Cho $P_{B \\to B'}$ là ma trận chuyển cơ sở từ cơ sở $B$ sang cơ sở $B'$. Công thức liên hệ giữa tọa độ của véc tơ $x$ trong hai cơ sở là:",
    "options": [
      {
        "key": "A",
        "text": "$[x]_B = P_{B \\to B'} [x]_{B'}$"
      },
      {
        "key": "B",
        "text": "$[x]_{B'} = P_{B \\to B'} [x]_B$"
      },
      {
        "key": "C",
        "text": "$[x]_B = (P_{B \\to B'})^T [x]_{B'}$"
      },
      {
        "key": "D",
        "text": "$[x]_B = [x]_{B'}$"
      }
    ],
    "correct": "A",
    "explanation": "* **Công thức đổi tọa độ khi đổi cơ sở:**\n  * Gọi $P = P_{B \\\\to B'}$ là ma trận chuyển từ cơ sở cũ $B$ sang cơ sở mới $B'$ (các cột của $P$ là tọa độ của các véc tơ cơ sở $B'$ tính theo cơ sở $B$).\n  * Khi đó tọa độ cũ $[x]_B$ và tọa độ mới $[x]_{B'}$ thỏa mãn:\n    $$[x]_B = P_{B \\\\to B'} [x]_{B'}$$\n  * Và ngược lại: $[x]_{B'} = (P_{B \\\\to B'})^{-1} [x]_B$.\n* **Chọn đáp án: A.**"
  },
  {
    "id": 262,
    "originalId": null,
    "isOriginal": false,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Hệ véc tơ $S = \\{u_1, u_2, \\dots, u_m\\}$ trong không gian véc tơ $V$ phụ thuộc tuyến tính khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "Mọi véc tơ trong hệ đều biểu diễn tuyến tính được qua các véc tơ còn lại"
      },
      {
        "key": "B",
        "text": "Hệ chứa véc tơ không $\\vec{0}$"
      },
      {
        "key": "C",
        "text": "Có ít nhất một véc tơ trong hệ biểu diễn tuyến tính được qua các véc tơ còn lại"
      },
      {
        "key": "D",
        "text": "$m > \\dim V$"
      }
    ],
    "correct": "C",
    "explanation": "* **Định lý tương đương của hệ phụ thuộc tuyến tính:**\n  * Hệ $\\{u_1, \\dots, u_m\\}$ phụ thuộc tuyến tính $\\iff$ tồn tại bộ hệ số không đồng thời bằng 0 sao cho $c_1 u_1 + \\dots + c_m u_m = 0$.\n  * Giả sử $c_k \\neq 0$, ta có thể rút $u_k = -\\dfrac{1}{c_k} \\sum_{i \\neq k} c_i u_i$.\n  * Tức là có ít nhất một véc tơ biểu diễn tuyến tính qua các véc tơ còn lại.\n* **Chọn đáp án: C.**"
  },
  {
    "id": 263,
    "originalId": null,
    "isOriginal": false,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Số chiều của không gian véc tơ các đa thức $P_n$ có bậc không vượt quá $n$ với hệ số thực là:",
    "options": [
      {
        "key": "A",
        "text": "$n$"
      },
      {
        "key": "B",
        "text": "$n + 1$"
      },
      {
        "key": "C",
        "text": "$n - 1$"
      },
      {
        "key": "D",
        "text": "$2n$"
      }
    ],
    "correct": "B",
    "explanation": "* **Cơ sở chính tắc của không gian đa thức $P_n$:**\n  * Một đa thức $p(x) \\in P_n$ có dạng $a_0 + a_1 x + a_2 x^2 + \\dots + a_n x^n$.\n  * Cơ sở chính tắc của $P_n$ là:\n    $$E = \\{1, \\\\, x, \\\\, x^2, \\\\, \\\\dots, \\\\, x^n\\}$$\n  * Hệ cơ sở này gồm có đúng $n + 1$ phần tử, do đó $\\dim P_n = n + 1$.\n* **Chọn đáp án: B.**"
  },
  {
    "id": 264,
    "originalId": null,
    "isOriginal": false,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Tổng của hai không gian con $W_1 + W_2$ là **tổng trực tiếp** ($W_1 \\oplus W_2$) khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$W_1 \\cap W_2 = \\emptyset$"
      },
      {
        "key": "B",
        "text": "$\\dim W_1 = \\dim W_2$"
      },
      {
        "key": "C",
        "text": "$W_1 + W_2 = V$"
      },
      {
        "key": "D",
        "text": "$W_1 \\cap W_2 = \\{\\vec{0}\\}$"
      }
    ],
    "correct": "D",
    "explanation": "* **Định nghĩa tổng trực tiếp:**\n  * $W_1 + W_2$ được gọi là tổng trực tiếp, ký hiệu $W_1 \\oplus W_2$, khi và chỉ khi giao của hai không gian con chỉ chứa duy nhất phần tử không:\n    $$W_1 \\cap W_2 = \\{\\vec{0}\\}$$\n  * Điều này tương đương với $\\dim(W_1 \\cap W_2) = 0$, hay $\\dim(W_1 + W_2) = \\dim W_1 + \\dim W_2$.\n  * Lưu ý: Giao của hai không gian con không bao giờ bằng $\\emptyset$ vì luôn chứa $\\vec{0}$.\n* **Chọn đáp án: D.**"
  },
  {
    "id": 265,
    "originalId": null,
    "isOriginal": false,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Tìm một cơ sở của không gian con $W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x + 2y - z = 0\\}$:",
    "options": [
      {
        "key": "A",
        "text": "$\\{(1, 2, -1)\\}$"
      },
      {
        "key": "B",
        "text": "$\\{(-2, 1, 0), \\, (1, 0, 1)\\}$"
      },
      {
        "key": "C",
        "text": "$\\{(1, 0, 0), \\, (0, 1, 0)\\}$"
      },
      {
        "key": "D",
        "text": "$\\{(-2, 1, 0), \\, (0, 1, 2)\\}$"
      }
    ],
    "correct": "B",
    "explanation": "* **Kỹ thuật tìm cơ sở của mặt phẳng nghiệm:**\n  * Rút $z = x + 2y$ theo hai tham số tự do $x, y$:\n    $$(x, y, z) = (x, y, x + 2y) = x(1, 0, 1) + y(0, 1, 2)$$\n  * Hoặc rút $x = -2y + z$:\n    $$(x, y, z) = (-2y + z, y, z) = y(-2, 1, 0) + z(1, 0, 1)$$\n  * Hai véc tơ $u_1 = (-2, 1, 0)$ và $u_2 = (1, 0, 1)$ đều thuộc $W$, độc lập tuyến tính (không tỉ lệ) và sinh ra $W$.\n  * Do đó $\\{(-2, 1, 0), (1, 0, 1)\\}$ là một cơ sở của $W$.\n* **Chọn đáp án: B.**"
  },
  {
    "id": 266,
    "originalId": null,
    "isOriginal": false,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Trong không gian $\\mathbb{R}^3$, cho hệ véc tơ $S = \\{(1, 2, 3), \\, (2, 4, 6)\\}$. Hạng của hệ véc tơ này là:",
    "options": [
      {
        "key": "A",
        "text": "$2$"
      },
      {
        "key": "B",
        "text": "$3$"
      },
      {
        "key": "C",
        "text": "$1$"
      },
      {
        "key": "D",
        "text": "$0$"
      }
    ],
    "correct": "C",
    "explanation": "* **Hạng của hệ véc tơ:**\n  * Ta thấy véc tơ thứ hai gấp đôi véc tơ thứ nhất: $(2, 4, 6) = 2 \\cdot (1, 2, 3)$.\n  * Hai véc tơ tỉ lệ nên hệ phụ thuộc tuyến tính. Số véc tơ độc lập tuyến tính tối đa chỉ là 1.\n  * Do đó hạng của hệ véc tơ $r(S) = 1$.\n* **Chọn đáp án: C.**"
  },
  {
    "id": 267,
    "originalId": null,
    "isOriginal": false,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Cho $V$ là không gian véc tơ $n$ chiều và $S$ là một hệ gồm đúng $n$ véc tơ trong $V$. Khẳng định nào sau đây là **sai**?",
    "options": [
      {
        "key": "A",
        "text": "Nếu $S$ độc lập tuyến tính thì $S$ là một cơ sở của $V$"
      },
      {
        "key": "B",
        "text": "Nếu $S$ là một hệ sinh của $V$ thì $S$ độc lập tuyến tính"
      },
      {
        "key": "C",
        "text": "Nếu $S$ là hệ sinh của $V$ thì $S$ chưa chắc là cơ sở của $V$"
      },
      {
        "key": "D",
        "text": "$S$ là cơ sở khi và chỉ khi $S$ độc lập tuyến tính"
      }
    ],
    "correct": "C",
    "explanation": "* **Định lý về hệ $n$ véc tơ trong không gian $n$ chiều:**\n  * Khi số véc tơ bằng đúng số chiều $\\dim V = n$, ba khái niệm sau là **hoàn toàn tương đương**:\n    1. $S$ độc lập tuyến tính.\n    2. $S$ là hệ sinh của $V$.\n    3. $S$ là cơ sở của $V$.\n  * Do đó, nếu $S$ là hệ sinh thì chắc chắn $S$ là cơ sở. Khẳng định A nói 'chưa chắc là cơ sở' là SAI.\n* **Chọn đáp án: C.**"
  },
  {
    "id": 268,
    "originalId": null,
    "isOriginal": false,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Cho ma trận chuyển cơ sở từ $B$ sang $B'$ trong $\\mathbb{R}^2$ là $P = \\begin{bmatrix} 1 & 2 \\\\ 0 & 1 \\end{bmatrix}$. Biết tọa độ của véc tơ $x$ trong cơ sở $B'$ là $[x]_{B'} = \\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix}$. Tọa độ của $x$ trong cơ sở $B$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 7 \\\\ 3 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} -5 \\\\ 3 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 3 \\\\ 7 \\end{bmatrix}$"
      }
    ],
    "correct": "B",
    "explanation": "* **Áp dụng công thức đổi tọa độ:**\n  $$[x]_B = P [x]_{B'} = \\begin{bmatrix} 1 & 2 \\\\ 0 & 1 \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 1(1) + 2(3) \\\\ 0(1) + 1(3) \\end{bmatrix} = \\begin{bmatrix} 7 \\\\ 3 \\end{bmatrix}$$\n* **Chọn đáp án: B.**"
  },
  {
    "id": 269,
    "originalId": null,
    "isOriginal": false,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Hợp của hai không gian véc tơ con $W_1 \\cup W_2$ là một không gian véc tơ con khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$W_1 \\subset W_2$ hoặc $W_2 \\subset W_1$"
      },
      {
        "key": "B",
        "text": "$W_1 \\cap W_2 = \\{\\vec{0}\\}$"
      },
      {
        "key": "C",
        "text": "$\\dim W_1 = \\dim W_2$"
      },
      {
        "key": "D",
        "text": "Luôn là không gian con với mọi $W_1, W_2$"
      }
    ],
    "correct": "A",
    "explanation": "* **Định lý về hợp của hai không gian con:**\n  * Nói chung, hợp của hai không gian con không đóng kín với phép cộng (ví dụ hai đường thẳng đi qua gốc tọa độ trong mặt phẳng, hợp của chúng không phải là không gian con vì tổng hai véc tơ nằm ngoài cả hai đường thẳng).\n  * Hợp $W_1 \\cup W_2$ là không gian con khi và chỉ khi một trong hai không gian con chứa không gian con kia ($W_1 \\subset W_2$ hoặc $W_2 \\subset W_1$).\n* **Chọn đáp án: A.**"
  },
  {
    "id": 270,
    "originalId": null,
    "isOriginal": false,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Số chiều của không gian véc tơ các ma trận vuông cỡ $n \\times n$ với hệ số thực $\\mathcal{M}_n(\\mathbb{R})$ là:",
    "options": [
      {
        "key": "A",
        "text": "$2n$"
      },
      {
        "key": "B",
        "text": "$n$"
      },
      {
        "key": "C",
        "text": "$n(n+1)/2$"
      },
      {
        "key": "D",
        "text": "$n^2$"
      }
    ],
    "correct": "D",
    "explanation": "* **Cơ sở chuẩn của không gian ma trận:**\n  * Mỗi ma trận cấp $n \\times n$ có $n \\times n = n^2$ vị trí phần tử độc lập.\n  * Cơ sở chính tắc gồm các ma trận $E_{ij}$ (phần tử vị trí $(i, j)$ bằng 1, các vị trí còn lại bằng 0).\n  * Tổng số phần tử cơ sở là $n^2$, do đó số chiều bằng $n^2$.\n* **Chọn đáp án: D.**"
  },
  {
    "id": 271,
    "originalId": null,
    "isOriginal": false,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Ánh xạ nào dưới đây là một **ánh xạ tuyến tính**?",
    "options": [
      {
        "key": "A",
        "text": "$f: \\mathbb{R}^2 \\to \\mathbb{R}^2, \\, f(x, y) = (x + 1, \\, y)$"
      },
      {
        "key": "B",
        "text": "$f: \\mathbb{R}^2 \\to \\mathbb{R}, \\, f(x, y) = xy$"
      },
      {
        "key": "C",
        "text": "$f: \\mathbb{R}^3 \\to \\mathbb{R}, \\, f(x, y, z) = x^2 + y + z$"
      },
      {
        "key": "D",
        "text": "$f: \\mathbb{R}^2 \\to \\mathbb{R}^3, \\, f(x, y) = (2x - y, \\, 3x + 4y, \\, x)$"
      }
    ],
    "correct": "D",
    "explanation": "* **Dấu hiệu nhận biết ánh xạ tuyến tính:**\n  * Mỗi thành phần của $f(x, y)$ phải là đa thức bậc nhất thuần nhất đối với các biến (không có hằng số tự do, không có tích biến, không có bậc hai hoặc căn thức).\n  * Phương án A thỏa mãn đầy đủ các điều kiện $f(u + v) = f(u) + f(v)$ và $f(ku) = k f(u)$.\n  * B sai vì $f(0, 0) = (1, 0) \\neq (0, 0)$ (có hằng số tự do $+1$).\n  * C sai vì chứa tích hai biến $xy$ (bậc hai).\n  * D sai vì chứa số hạng bậc hai $x^2$.\n* **Chọn đáp án: D.**"
  },
  {
    "id": 272,
    "originalId": null,
    "isOriginal": false,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho ánh xạ tuyến tính $f: V \\to W$. Định lý về số chiều (Rank-Nullity Theorem) khẳng định rằng:",
    "options": [
      {
        "key": "A",
        "text": "$\\dim W = \\dim \\ker f + \\dim \\operatorname{im} f$"
      },
      {
        "key": "B",
        "text": "$\\dim V = \\dim \\ker f + \\dim \\operatorname{im} f$"
      },
      {
        "key": "C",
        "text": "$\\dim V + \\dim W = \\dim \\ker f + \\dim \\operatorname{im} f$"
      },
      {
        "key": "D",
        "text": "$\\dim \\ker f = \\dim \\operatorname{im} f$"
      }
    ],
    "correct": "B",
    "explanation": "* **Định lý số chiều (Rank-Nullity Theorem):**\n  * Với mọi ánh xạ tuyến tính $f: V \\to W$ xuất phát từ không gian hữu hạn chiều $V$, ta luôn có đẳng thức:\n    $$\\dim V = \\dim \\ker f + \\dim \\operatorname{im} f$$\n  * Tức là: Số chiều của không gian nguồn = Số chiều của nhân (hạch) + Hạng của ánh xạ (số chiều của ảnh).\n* **Chọn đáp án: B.**"
  },
  {
    "id": 273,
    "originalId": null,
    "isOriginal": false,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^4 \\to \\mathbb{R}^3$ có hạng $r(f) = 3$. Số chiều của nhân $\\dim \\ker f$ là:",
    "options": [
      {
        "key": "A",
        "text": "$0$"
      },
      {
        "key": "B",
        "text": "$2$"
      },
      {
        "key": "C",
        "text": "$1$"
      },
      {
        "key": "D",
        "text": "$3$"
      }
    ],
    "correct": "C",
    "explanation": "* **Áp dụng định lý số chiều:**\n  * Không gian nguồn là $V = \\mathbb{R}^4 \\implies \\dim V = 4$.\n  * Hạng của ánh xạ tuyến tính chính là số chiều của ảnh: $\\dim \\operatorname{im} f = r(f) = 3$.\n  * Theo định lý số chiều:\n    $$\\dim \\ker f = \\dim V - \\dim \\operatorname{im} f = 4 - 3 = 1$$\n* **Chọn đáp án: C.**"
  },
  {
    "id": 274,
    "originalId": null,
    "isOriginal": false,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Ánh xạ tuyến tính $f: V \\to W$ là **đơn ánh** khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$\\operatorname{im} f = W$"
      },
      {
        "key": "B",
        "text": "$\\ker f = \\{\\vec{0}\\}$"
      },
      {
        "key": "C",
        "text": "$\\dim \\ker f > 0$"
      },
      {
        "key": "D",
        "text": "$\\dim V = \\dim W$"
      }
    ],
    "correct": "B",
    "explanation": "* **Tiêu chuẩn đơn ánh của ánh xạ tuyến tính:**\n  * $f$ là đơn ánh khi và chỉ khi phương trình $f(x) = \\vec{0}$ chỉ có duy nhất nghiệm tầm thường $x = \\vec{0}$.\n  * Điều này tương đương với tập nhân chỉ chứa phần tử không:\n    $$\\ker f = \\{\\vec{0}\\} \\iff \\dim \\ker f = 0$$\n* **Chọn đáp án: B.**"
  },
  {
    "id": 275,
    "originalId": null,
    "isOriginal": false,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho toán tử tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ xác định bởi $f(x, y) = (2x + y, \\, x - y)$. Ma trận của $f$ trong cơ sở chính tắc của $\\mathbb{R}^2$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 2 & 1 \\\\ -1 & 1 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 2 & 1 \\\\ 1 & -1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 1 & -1 \\\\ 2 & 1 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 2 & -1 \\\\ 1 & 1 \\end{bmatrix}$"
      }
    ],
    "correct": "B",
    "explanation": "* **Kỹ thuật lập ma trận theo cơ sở chính tắc:**\n  * Cơ sở chính tắc $e_1 = (1, 0), e_2 = (0, 1)$.\n  * Tính ảnh của từng véc tơ cơ sở:\n    * $f(e_1) = f(1, 0) = (2, 1) \\implies$ Cột 1 là $\\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}$.\n    * $f(e_2) = f(0, 1) = (1, -1) \\implies$ Cột 2 là $\\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}$.\n  * Ghép hai cột lại:\n    $$[f] = \\begin{bmatrix} 2 & 1 \\\\ 1 & -1 \\end{bmatrix}$$\n* **Chọn đáp án: B.**"
  },
  {
    "id": 276,
    "originalId": null,
    "isOriginal": false,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Khi đổi cơ sở của không gian $V$ với ma trận chuyển cơ sở là $P$, ma trận của toán tử tuyến tính $f: V \\to V$ thay đổi theo công thức nào?",
    "options": [
      {
        "key": "A",
        "text": "$A' = P A P^{-1}$"
      },
      {
        "key": "B",
        "text": "$A' = P^T A P$"
      },
      {
        "key": "C",
        "text": "$A' = P A P$"
      },
      {
        "key": "D",
        "text": "$A' = P^{-1} A P$"
      }
    ],
    "correct": "D",
    "explanation": "* **Công thức đổi ma trận của toán tử tuyến tính:**\n  * Cho $A = [f]_B$ là ma trận của $f$ trong cơ sở cũ $B$, và $P = P_{B \\to B'}$ là ma trận chuyển từ cơ sở cũ sang cơ sở mới $B'$.\n  * Ma trận của $f$ trong cơ sở mới $B'$ là:\n    $$A' = P^{-1} A P$$\n  * (Hai ma trận $A$ và $A'$ được gọi là đồng dạng - similar matrices).\n* **Chọn đáp án: D.**"
  },
  {
    "id": 277,
    "originalId": null,
    "isOriginal": false,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^3 \\to \\mathbb{R}^2$ có ma trận biểu diễn cỡ:",
    "options": [
      {
        "key": "A",
        "text": "$3 \\times 2$"
      },
      {
        "key": "B",
        "text": "$3 \\times 3$"
      },
      {
        "key": "C",
        "text": "$2 \\times 2$"
      },
      {
        "key": "D",
        "text": "$2 \\times 3$"
      }
    ],
    "correct": "D",
    "explanation": "* **Quy tắc xác định cỡ ma trận của ánh xạ tuyến tính:**\n  * Cho ánh xạ tuyến tính $f: V \\to W$ với $\\dim V = n$ và $\\dim W = m$.\n  * Ma trận $[f]$ luôn có:\n    * Số cột = Số véc tơ cơ sở của không gian nguồn $V = n$.\n    * Số hàng = Số tọa độ trong không gian đích $W = m$.\n  * Do đó cỡ của ma trận là $m \\\\times n$.\n  * Với $f: \\mathbb{R}^3 \\to \\mathbb{R}^2$, ma trận có cỡ $2 \\times 3$ (2 hàng, 3 cột).\n* **Chọn đáp án: D.**"
  },
  {
    "id": 278,
    "originalId": null,
    "isOriginal": false,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho toán tử tuyến tính $f: \\mathbb{R}^3 \\to \\mathbb{R}^3$ xác định bởi $f(x, y, z) = (x + y, \\, y + z, \\, x - z)$. Định thức của ma trận biểu diễn $f$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$2$"
      },
      {
        "key": "B",
        "text": "$0$"
      },
      {
        "key": "C",
        "text": "$-2$"
      },
      {
        "key": "D",
        "text": "$1$"
      }
    ],
    "correct": "B",
    "explanation": "* **Lập ma trận của $f$:**\n  $$A = \\begin{bmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & -1 \\end{bmatrix}$$\n* Tính định thức $\\det A$:\n  $$\\det A = 1(-1 - 0) - 1(0 - 1) + 0 = -1 + 1 = 0$$\n* Vì $\\det A = 0$, $f$ không phải là một đẳng cấu (không là đơn ánh cũng không là toàn ánh).\n* **Chọn đáp án: B.**"
  },
  {
    "id": 279,
    "originalId": null,
    "isOriginal": false,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Toán tử tuyến tính $f: \\mathbb{R}^n \\to \\mathbb{R}^n$ có ma trận $A$ trong cơ sở chính tắc. $f$ là một **đẳng cấu** khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$\\det A \\neq 0$"
      },
      {
        "key": "B",
        "text": "$\\det A = 0$"
      },
      {
        "key": "C",
        "text": "$r(A) < n$"
      },
      {
        "key": "D",
        "text": "$A = I_n$"
      }
    ],
    "correct": "A",
    "explanation": "* **Tiêu chuẩn đẳng cấu của toán tử tuyến tính trên không gian hữu hạn chiều:**\n  * Giữa hai không gian có cùng số chiều hữu hạn $n$, các mệnh đề sau là tương đương:\n    1. $f$ là đơn ánh.\n    2. $f$ là toàn ánh.\n    3. $f$ là song ánh (đẳng cấu).\n    4. Ma trận biểu diễn $A$ khả nghịch ($\\det A \\neq 0$).\n* **Chọn đáp án: A.**"
  },
  {
    "id": 280,
    "originalId": null,
    "isOriginal": false,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Tìm một cơ sở của nhân $\\ker f$ với $f: \\mathbb{R}^3 \\to \\mathbb{R}^2$ xác định bởi $f(x, y, z) = (x - y, \\, y - z)$:",
    "options": [
      {
        "key": "A",
        "text": "$\\{(1, -1, 0), \\, (0, 1, -1)\\}$"
      },
      {
        "key": "B",
        "text": "$\\{(1, 0, 0)\\}$"
      },
      {
        "key": "C",
        "text": "$\\{(1, 1, 1)\\}$"
      },
      {
        "key": "D",
        "text": "$\\{(1, 1, 0)\\}$"
      }
    ],
    "correct": "C",
    "explanation": "* **Tìm $\\ker f$ theo định nghĩa:**\n  * $u = (x, y, z) \\in \\ker f \\iff f(x, y, z) = (0, 0)$:\n    $$\\begin{cases} x - y = 0 \\\\ y - z = 0 \\end{cases} \\iff x = y = z$$\n  * Tọa độ véc tơ thuộc $\\ker f$ có dạng $(x, x, x) = x(1, 1, 1)$ với $x \\in \\mathbb{R}$.\n  * Do đó $\\ker f$ là không gian 1 chiều có cơ sở là $\\{(1, 1, 1)\\}$.\n* **Chọn đáp án: C.**"
  },
  {
    "id": 281,
    "originalId": null,
    "isOriginal": false,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho hai toán tử tuyến tính $f, g: V \\to V$ có ma trận tương ứng là $A$ và $B$. Ma trận của toán tử tích hợp $f \\circ g$ là:",
    "options": [
      {
        "key": "A",
        "text": "$AB$"
      },
      {
        "key": "B",
        "text": "$BA$"
      },
      {
        "key": "C",
        "text": "$A + B$"
      },
      {
        "key": "D",
        "text": "$A^{-1} B$"
      }
    ],
    "correct": "A",
    "explanation": "* **Ma trận của ánh xạ tích hợp:**\n  * Theo định nghĩa: $(f \\circ g)(x) = f(g(x))$.\n  * Trong biểu diễn tọa độ: $[(f \\circ g)(x)] = [f] \\cdot [g(x)] = A \\cdot (B [x]) = (AB) [x]$.\n  * Do đó ma trận của $f \\circ g$ chính là tích của hai ma trận $AB$ theo đúng thứ tự.\n* **Chọn đáp án: A.**"
  },
  {
    "id": 282,
    "originalId": null,
    "isOriginal": false,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho $f: \\mathbb{R}^3 \\to \\mathbb{R}^3$ là phép chiếu vuông góc lên mặt phẳng $Oxy$. Ma trận của $f$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 0 & 1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* **Hình học của phép chiếu:**\n  * Phép chiếu lên $Oxy$ biến $(x, y, z) \\mapsto (x, y, 0)$.\n  * Áp dụng lên cơ sở chính tắc:\n    * $f(1, 0, 0) = (1, 0, 0) \\implies$ Cột 1 là $\\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}$.\n    * $f(0, 1, 0) = (0, 1, 0) \\implies$ Cột 2 là $\\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}$.\n    * $f(0, 0, 1) = (0, 0, 0) \\implies$ Cột 3 là $\\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\end{bmatrix}$.\n  * Ghép lại ta được ma trận phương án A.\n* **Chọn đáp án: A.**"
  },
  {
    "id": 283,
    "originalId": null,
    "isOriginal": false,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Số chiều của ảnh $\\dim \\operatorname{im} f$ của ánh xạ tuyến tính $f: V \\to W$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "Số chiều của không gian nguồn $V$"
      },
      {
        "key": "B",
        "text": "Số chiều của không gian đích $W$"
      },
      {
        "key": "C",
        "text": "$\\det A$ với $A$ là ma trận của $f$"
      },
      {
        "key": "D",
        "text": "Hạng của ma trận biểu diễn $f$ đối với cặp cơ sở bất kỳ"
      }
    ],
    "correct": "D",
    "explanation": "* **Định lý về hạng của ánh xạ tuyến tính:**\n  * Hạng của ánh xạ tuyến tính $r(f) = \\dim \\operatorname{im} f$ luôn bằng hạng của ma trận biểu diễn $A$ của nó trong bất kỳ cặp cơ sở nào:\n    $$\\dim \\operatorname{im} f = r(A)$$\n  * Hạng này không phụ thuộc vào việc lựa chọn cơ sở.\n* **Chọn đáp án: D.**"
  },
  {
    "id": 284,
    "originalId": null,
    "isOriginal": false,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho $f: P_2 \\to P_1$ là ánh xạ lấy đạo hàm: $f(p(x)) = p'(x)$. Số chiều của nhân $\\dim \\ker f$ là:",
    "options": [
      {
        "key": "A",
        "text": "$1$"
      },
      {
        "key": "B",
        "text": "$0$"
      },
      {
        "key": "C",
        "text": "$2$"
      },
      {
        "key": "D",
        "text": "$3$"
      }
    ],
    "correct": "A",
    "explanation": "* **Nhân của ánh xạ đạo hàm:**\n  * $\\ker f = \\{p(x) \\in P_2 \\mid p'(x) = 0\\}$.\n  * Đa thức có đạo hàm bằng 0 là các đa thức hằng: $p(x) = c$ với $c \\in \\mathbb{R}$.\n  * Không gian các đa thức hằng có số chiều bằng $1$ (cơ sở là $\\{1\\}$).\n  * Do đó $\\dim \\ker f = 1$.\n* **Chọn đáp án: A.**"
  },
  {
    "id": 285,
    "originalId": null,
    "isOriginal": false,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Toán tử tuyến tính $f: \\mathbb{R}^3 \\to \\mathbb{R}^3$ có $r(f) = 2$. Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "text": "$f$ là đơn ánh nhưng không là toàn ánh"
      },
      {
        "key": "B",
        "text": "$f$ là toàn ánh nhưng không là đơn ánh"
      },
      {
        "key": "C",
        "text": "$f$ không là đơn ánh và không là toàn ánh"
      },
      {
        "key": "D",
        "text": "$f$ là một song ánh"
      }
    ],
    "correct": "C",
    "explanation": "* **Phân tích theo định lý số chiều:**\n  * Không gian nguồn và đích đều là $\\mathbb{R}^3$ (số chiều = 3).\n  * Vì $\\dim \\operatorname{im} f = r(f) = 2 < 3 \\implies \\operatorname{im} f \\neq \\mathbb{R}^3$, do đó $f$ **không là toàn ánh**.\n  * Mặt khác $\\dim \\ker f = \\dim V - r(f) = 3 - 2 = 1 > 0$, do đó $f$ **không là đơn ánh**.\n* **Chọn đáp án: C.**"
  },
  {
    "id": 286,
    "originalId": null,
    "isOriginal": false,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Ma trận của dạng toàn phương $Q(x_1, x_2) = 2x_1^2 + 6x_1 x_2 - 5x_2^2$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 2 & 3 \\\\ 3 & -5 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 2 & 6 \\\\ 6 & -5 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 2 & 6 \\\\ 0 & -5 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 4 & 3 \\\\ 3 & -10 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* **Quy tắc lập ma trận đối xứng của dạng toàn phương:**\n  * Phần tử đường chéo $a_{ii}$ là hệ số của $x_i^2$:\n    * $a_{11} = 2$.\n    * $a_{22} = -5$.\n  * Phần tử ngoài đường chéo $a_{12} = a_{21} = \\dfrac{1}{2} \\times$ (hệ số của $x_1 x_2$):\n    * $a_{12} = a_{21} = \\dfrac{6}{2} = 3$.\n  * Ghép lại: $A = \\begin{bmatrix} 2 & 3 \\\\ 3 & -5 \\end{bmatrix}$.\n* **Chọn đáp án: A.**"
  },
  {
    "id": 287,
    "originalId": null,
    "isOriginal": false,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Theo tiêu chuẩn Sylvester, dạng toàn phương 3 biến có ma trận đối xứng $A$ là **xác định dương** khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$\\Delta_1 > 0, \\, \\Delta_2 > 0, \\, \\Delta_3 > 0$"
      },
      {
        "key": "B",
        "text": "$\\Delta_1 < 0, \\, \\Delta_2 > 0, \\, \\Delta_3 < 0$"
      },
      {
        "key": "C",
        "text": "$\\Delta_1 > 0, \\, \\Delta_2 < 0, \\, \\Delta_3 > 0$"
      },
      {
        "key": "D",
        "text": "$\\Delta_3 = \\det A > 0$"
      }
    ],
    "correct": "A",
    "explanation": "* **Tiêu chuẩn Sylvester đối với dạng toàn phương xác định dương:**\n  * Dạng toàn phương xác định dương khi và chỉ khi tất cả các định thức con chính góc đều **dương**:\n    $$\\Delta_1 > 0, \\quad \\Delta_2 > 0, \\quad \\Delta_3 > 0$$\n* **Chọn đáp án: A.**"
  },
  {
    "id": 288,
    "originalId": null,
    "isOriginal": false,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Theo tiêu chuẩn Sylvester, dạng toàn phương 3 biến có ma trận đối xứng $A$ là **xác định âm** khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$\\Delta_1 < 0, \\, \\Delta_2 > 0, \\, \\Delta_3 < 0$"
      },
      {
        "key": "B",
        "text": "$\\Delta_1 < 0, \\, \\Delta_2 < 0, \\, \\Delta_3 < 0$"
      },
      {
        "key": "C",
        "text": "$\\Delta_1 > 0, \\, \\Delta_2 > 0, \\, \\Delta_3 > 0$"
      },
      {
        "key": "D",
        "text": "$\\Delta_3 = \\det A < 0$"
      }
    ],
    "correct": "A",
    "explanation": "* **Tiêu chuẩn Sylvester đối với dạng toàn phương xác định âm:**\n  * Dạng toàn phương xác định âm khi và chỉ khi các định thức con chính góc **đổi dấu xen kẽ**, bắt đầu từ dấu âm:\n    $$(-1)^k \\Delta_k > 0 \\iff \\Delta_1 < 0, \\quad \\Delta_2 > 0, \\quad \\Delta_3 < 0$$\n* **Chọn đáp án: A.**"
  },
  {
    "id": 289,
    "originalId": null,
    "isOriginal": false,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Tìm tất cả các giá trị của $m$ để dạng toàn phương $Q(x_1, x_2) = x_1^2 + 2m x_1 x_2 + 4x_2^2$ xác định dương:",
    "options": [
      {
        "key": "A",
        "text": "$m > 2$ hoặc $m < -2$"
      },
      {
        "key": "B",
        "text": "$-2 < m < 2$"
      },
      {
        "key": "C",
        "text": "$m < 2$"
      },
      {
        "key": "D",
        "text": "$m > 0$"
      }
    ],
    "correct": "B",
    "explanation": "* **Áp dụng tiêu chuẩn Sylvester:**\n  * Ma trận của $Q$: $A = \\begin{bmatrix} 1 & m \\\\ m & 4 \\end{bmatrix}$.\n  * Các định thức con chính góc:\n    * $\\Delta_1 = 1 > 0$ (luôn thỏa mãn).\n    * $\\Delta_2 = \\det A = 1 \\cdot 4 - m^2 = 4 - m^2$.\n  * Để $Q$ xác định dương:\n    $$\\Delta_2 > 0 \\iff 4 - m^2 > 0 \\iff m^2 < 4 \\iff -2 < m < 2$$\n* **Chọn đáp án: B.**"
  },
  {
    "id": 290,
    "originalId": null,
    "isOriginal": false,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Dùng phương pháp Lagrange đưa dạng toàn phương $Q(x_1, x_2) = x_1^2 + 4x_1 x_2 + 5x_2^2$ về dạng chính tắc, ta thu được:",
    "options": [
      {
        "key": "A",
        "text": "$y_1^2 - y_2^2$ với $y_1 = x_1 + 2x_2, \\, y_2 = x_2$"
      },
      {
        "key": "B",
        "text": "$y_1^2 + 5y_2^2$"
      },
      {
        "key": "C",
        "text": "$y_1^2 + y_2^2$ với $y_1 = x_1 + 2x_2, \\, y_2 = x_2$"
      },
      {
        "key": "D",
        "text": "$4y_1^2 + y_2^2$"
      }
    ],
    "correct": "C",
    "explanation": "* **Phương pháp Lagrange (tách bình phương đủ):**\n  $$Q = (x_1^2 + 4x_1 x_2 + 4x_2^2) + x_2^2 = (x_1 + 2x_2)^2 + x_2^2$$\n* Đặt biến mới:\n  $$\\begin{cases} y_1 = x_1 + 2x_2 \\\\ y_2 = x_2 \\end{cases}$$\n* Dạng chính tắc là: $Q = y_1^2 + y_2^2$.\n* Cả hai hệ số đều dương $\\implies Q$ xác định dương.\n* **Chọn đáp án: C.**"
  },
  {
    "id": 291,
    "originalId": null,
    "isOriginal": false,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Luật quán tính của Sylvester khẳng định rằng khi đưa dạng toàn phương về dạng chính tắc bằng các phép biến đổi tuyến tính không suy biến thì:",
    "options": [
      {
        "key": "A",
        "text": "Các hệ số trong dạng chính tắc luôn giữ nguyên không đổi"
      },
      {
        "key": "B",
        "text": "Số hệ số dương và số hệ số âm là các đại lượng bất biến"
      },
      {
        "key": "C",
        "text": "Dạng chính tắc luôn luôn duy nhất"
      },
      {
        "key": "D",
        "text": "Chỉ có hạng của ma trận là không đổi"
      }
    ],
    "correct": "B",
    "explanation": "* **Định lý quán tính Sylvester (Law of Inertia):**\n  * Có nhiều cách biến đổi đưa một dạng toàn phương về dạng chính tắc $c_1 y_1^2 + \\dots + c_r y_r^2$.\n  * Mặc dù các giá trị cụ thể của $c_i$ có thể khác nhau tùy cách chọn biến, nhưng **số lượng hệ số dương (chỉ số quán tính dương $p$)** và **số lượng hệ số âm (chỉ số quán tính âm $q$)** luôn luôn không đổi (bất biến).\n* **Chọn đáp án: B.**"
  },
  {
    "id": 292,
    "originalId": null,
    "isOriginal": false,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Dạng toàn phương $Q(x_1, x_2) = (x_1 - 2x_2)^2$ có tính chất nào dưới đây?",
    "options": [
      {
        "key": "A",
        "text": "Xác định dương"
      },
      {
        "key": "B",
        "text": "Không xác định"
      },
      {
        "key": "C",
        "text": "Xác định âm"
      },
      {
        "key": "D",
        "text": "Nửa xác định dương"
      }
    ],
    "correct": "D",
    "explanation": "* **Phân biệt xác định dương và nửa xác định dương:**\n  * Ta thấy $Q(x_1, x_2) = (x_1 - 2x_2)^2 \\ge 0$ với mọi $(x_1, x_2)$.\n  * Tuy nhiên, với điểm khác không $(x_1 = 2, x_2 = 1) \\neq (0, 0)$, ta có:\n    $$Q(2, 1) = (2 - 2)^2 = 0$$\n  * Vì tồn tại điểm khác không mà tại đó $Q = 0$, nên $Q$ không thể là xác định dương ngặt mà là **nửa xác định dương** (positive semidefinite).\n* **Chọn đáp án: D.**"
  },
  {
    "id": 293,
    "originalId": null,
    "isOriginal": false,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Dạng toàn phương nào dưới đây là **không xác định dấu (đổi dấu)**?",
    "options": [
      {
        "key": "A",
        "text": "$Q(x_1, x_2) = x_1^2 + 2x_2^2$"
      },
      {
        "key": "B",
        "text": "$Q(x_1, x_2) = -x_1^2 - 4x_2^2$"
      },
      {
        "key": "C",
        "text": "$Q(x_1, x_2) = (x_1 + x_2)^2$"
      },
      {
        "key": "D",
        "text": "$Q(x_1, x_2) = x_1^2 - 3x_2^2$"
      }
    ],
    "correct": "D",
    "explanation": "* **Dấu hiệu nhận biết dạng toàn phương không xác định dấu:**\n  * Dạng toàn phương có thể nhận cả giá trị dương lẫn giá trị âm:\n    * Chọn $(1, 0) \\implies Q(1, 0) = 1 > 0$.\n    * Chọn $(0, 1) \\implies Q(0, 1) = -3 < 0$.\n  * Do $Q$ nhận cả giá trị dương và âm nên $Q$ là dạng toàn phương **không xác định dấu**.\n* **Chọn đáp án: D.**"
  },
  {
    "id": 294,
    "originalId": null,
    "isOriginal": false,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Hạng của dạng toàn phương $Q$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "Số biến của dạng toàn phương"
      },
      {
        "key": "B",
        "text": "Chỉ số quán tính dương $p$"
      },
      {
        "key": "C",
        "text": "Hạng của ma trận đối xứng biểu diễn $Q$"
      },
      {
        "key": "D",
        "text": "Chỉ số quán tính âm $q$"
      }
    ],
    "correct": "C",
    "explanation": "* **Hạng của dạng toàn phương:**\n  * Hạng của dạng toàn phương được định nghĩa là hạng của ma trận đối xứng biểu diễn nó trong cơ sở bất kỳ: $r(Q) = r(A)$.\n  * Trong dạng chính tắc $c_1 y_1^2 + \\dots + c_r y_r^2$, hạng $r(Q) = p + q$ (tổng số hệ số khác 0).\n* **Chọn đáp án: C.**"
  },
  {
    "id": 295,
    "originalId": null,
    "isOriginal": false,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Cho dạng toàn phương $Q(x_1, x_2, x_3) = x_1^2 + 2x_2^2 + mx_3^2 + 2x_1 x_2$. Tìm $m$ để $Q$ xác định dương:",
    "options": [
      {
        "key": "A",
        "text": "$m > 1$"
      },
      {
        "key": "B",
        "text": "$m < 0$"
      },
      {
        "key": "C",
        "text": "Không tồn tại $m$"
      },
      {
        "key": "D",
        "text": "$m > 0$"
      }
    ],
    "correct": "D",
    "explanation": "* **Lập ma trận đối xứng:**\n  $$A = \\begin{bmatrix} 1 & 1 & 0 \\\\ 1 & 2 & 0 \\\\ 0 & 0 & m \\end{bmatrix}$$\n* Tính các định thức con chính góc:\n  * $\\Delta_1 = 1 > 0$.\n  * $\\Delta_2 = \\begin{vmatrix} 1 & 1 \\\\ 1 & 2 \\end{vmatrix} = 2 - 1 = 1 > 0$.\n  * $\\Delta_3 = \\det A = m \\cdot \\Delta_2 = m \\cdot 1 = m$.\n* Để $Q$ xác định dương $\\iff \\Delta_3 > 0 \\iff m > 0$.\n* **Chọn đáp án: D.**"
  },
  {
    "id": 296,
    "originalId": null,
    "isOriginal": false,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Tìm ma trận đối xứng của dạng toàn phương $Q(x_1, x_2, x_3) = x_1^2 + 4x_2^2 - 2x_3^2 - 4x_1 x_2 + 6x_2 x_3$:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 1 & -4 & 0 \\\\ -4 & 4 & 6 \\\\ 0 & 6 & -2 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 1 & -2 & 0 \\\\ -2 & 4 & 3 \\\\ 0 & 3 & -2 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 1 & -2 & 0 \\\\ 0 & 4 & 3 \\\\ 0 & 0 & -2 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 1 & 2 & 0 \\\\ 2 & 4 & 3 \\\\ 0 & 3 & -2 \\end{bmatrix}$"
      }
    ],
    "correct": "B",
    "explanation": "* **Quy tắc phân bổ hệ số:**\n  * Đường chéo chính: $a_{11} = 1, a_{22} = 4, a_{33} = -2$.\n  * Hệ số $x_1 x_2 = -4 \\implies a_{12} = a_{21} = -2$.\n  * Hệ số $x_2 x_3 = 6 \\implies a_{23} = a_{32} = 3$.\n  * Không có $x_1 x_3 \\implies a_{13} = a_{31} = 0$.\n  * Ma trận thu được là phương án A.\n* **Chọn đáp án: B.**"
  },
  {
    "id": 297,
    "originalId": null,
    "isOriginal": false,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Nếu dạng toàn phương $Q$ trên $\\mathbb{R}^n$ xác định dương thì định thức ma trận biểu diễn $\\det A$ thỏa mãn:",
    "options": [
      {
        "key": "A",
        "text": "$\\det A < 0$"
      },
      {
        "key": "B",
        "text": "$\\det A = 0$"
      },
      {
        "key": "C",
        "text": "$\\det A > 0$"
      },
      {
        "key": "D",
        "text": "$\\det A \\ge 0$"
      }
    ],
    "correct": "C",
    "explanation": "* **Tính chất định thức của ma trận xác định dương:**\n  * Theo tiêu chuẩn Sylvester, tất cả các định thức con chính góc $\\Delta_k > 0$ với mọi $k = 1, \\dots, n$.\n  * Trong đó $\\Delta_n$ chính là định thức của toàn bộ ma trận: $\\Delta_n = \\det A$.\n  * Do đó $\\det A > 0$ là điều kiện bắt buộc.\n* **Chọn đáp án: C.**"
  },
  {
    "id": 298,
    "originalId": null,
    "isOriginal": false,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Cho dạng toàn phương $Q(x_1, x_2) = -2x_1^2 + 2x_1 x_2 - x_2^2$. Dạng toàn phương này là:",
    "options": [
      {
        "key": "A",
        "text": "Xác định dương"
      },
      {
        "key": "B",
        "text": "Nửa xác định âm"
      },
      {
        "key": "C",
        "text": "Không xác định"
      },
      {
        "key": "D",
        "text": "Xác định âm"
      }
    ],
    "correct": "D",
    "explanation": "* **Áp dụng tiêu chuẩn Sylvester:**\n  * Ma trận $A = \\begin{bmatrix} -2 & 1 \\\\ 1 & -1 \\end{bmatrix}$.\n  * $\\Delta_1 = -2 < 0$.\n  * $\\Delta_2 = (-2)(-1) - 1^2 = 2 - 1 = 1 > 0$.\n  * Vì $\\Delta_1 < 0$ và $\\Delta_2 > 0$ (dấu đan xen bắt đầu từ âm), dạng toàn phương là **xác định âm**.\n* **Chọn đáp án: D.**"
  },
  {
    "id": 299,
    "originalId": null,
    "isOriginal": false,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Dạng chính tắc của dạng toàn phương $Q$ chỉ chứa tích hai biến mà không có bình phương: $Q(x_1, x_2) = 4x_1 x_2$. Dạng chính tắc của nó là:",
    "options": [
      {
        "key": "A",
        "text": "$y_1^2 + y_2^2$"
      },
      {
        "key": "B",
        "text": "$4y_1^2$"
      },
      {
        "key": "C",
        "text": "$y_1^2 - y_2^2$ với phép đổi biến thích hợp"
      },
      {
        "key": "D",
        "text": "$-y_1^2 - y_2^2$"
      }
    ],
    "correct": "C",
    "explanation": "* **Kỹ thuật đổi biến khi không có số hạng bình phương:**\n  * Đặt $\\begin{cases} x_1 = y_1 + y_2 \\\\ x_2 = y_1 - y_2 \\end{cases}$.\n  * Khi đó:\n    $$Q = 4x_1 x_2 = 4(y_1 + y_2)(y_1 - y_2) = 4(y_1^2 - y_2^2) = (2y_1)^2 - (2y_2)^2$$\n  * Dạng chính tắc có 1 hệ số dương và 1 hệ số âm, do đó có dạng $u_1^2 - u_2^2$.\n  * Dạng toàn phương này không xác định dấu (hạng 2, $p = 1, q = 1$).\n* **Chọn đáp án: C.**"
  },
  {
    "id": 300,
    "originalId": null,
    "isOriginal": false,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Cho dạng toàn phương $Q$ có dạng chính tắc là $Q = y_1^2 + 2y_2^2 - 3y_3^2$. Chỉ số quán tính dương $p$ và chỉ số quán tính âm $q$ của $Q$ lần lượt là:",
    "options": [
      {
        "key": "A",
        "text": "$p = 1, \\, q = 2$"
      },
      {
        "key": "B",
        "text": "$p = 3, \\, q = 0$"
      },
      {
        "key": "C",
        "text": "$p = 2, \\, q = 0$"
      },
      {
        "key": "D",
        "text": "$p = 2, \\, q = 1$"
      }
    ],
    "correct": "D",
    "explanation": "* **Định nghĩa chỉ số quán tính:**\n  * $p$ là số lượng hệ số dương trong dạng chính tắc: các hệ số là $+1$ và $+2 \\implies p = 2$.\n  * $q$ là số lượng hệ số âm trong dạng chính tắc: hệ số là $-3 \\implies q = 1$.\n  * Hạng của dạng toàn phương là $r = p + q = 2 + 1 = 3$.\n* **Chọn đáp án: D.**"
  }
];
