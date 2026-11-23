# -*- coding: utf-8 -*-
import json

de_ontap_questions = [
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 1,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho $A = \\begin{bmatrix} 1 & 0 & 0 \\\\ -3 & 1 & 0 \\\\ 2 & 1 & 3 \\end{bmatrix}$ và $B = \\begin{bmatrix} 2 & -1 & 3 \\\\ 0 & 1 & 4 \\\\ 0 & 0 & 1 \\end{bmatrix}$. Tính $\\det(3AB)$:",
    "options": [
      {"key": "A", "text": "$162$"},
      {"key": "B", "text": "$18$"},
      {"key": "C", "text": "$6$"},
      {"key": "D", "text": "$20$"}
    ],
    "correct": "A",
    "explanation": """* Vì $A$ và $B$ là các ma trận tam giác cấp 3 nên định thức của chúng bằng tích các phần tử trên đường chéo chính:
  * $\\det A = 1 \\cdot 1 \\cdot 3 = 3$.
  * $\\det B = 2 \\cdot 1 \\cdot 1 = 2$.
* Theo tính chất định thức:
  $$\\det(AB) = \\det A \\cdot \\det B = 3 \\cdot 2 = 6$$
* Với ma trận vuông cấp $n = 3$:
  $$\\det(3AB) = 3^3 \\cdot \\det(AB) = 27 \\cdot 6 = 162$$
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 2,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Gọi $V$ là không gian nghiệm của hệ phương trình thuần nhất:\n$$\\begin{cases} x_1 + x_2 + x_3 + x_4 + x_5 = 0 \\\\ 2x_1 + 3x_2 + 4x_3 + 5x_4 + 6x_5 = 0 \\\\ (m + 1)x_1 + 5x_2 + 6x_3 + 7x_4 + 2(m + 1)x_5 = 0 \\end{cases}$$\nTìm $m$ để $\\dim V$ đạt giá trị lớn nhất:",
    "options": [
      {"key": "A", "text": "$m = 1$"},
      {"key": "B", "text": "$m = 7$"},
      {"key": "C", "text": "$m = 11$"},
      {"key": "D", "text": "$m = 3$"}
    ],
    "correct": "D",
    "explanation": """* Không gian nghiệm của hệ thuần nhất 5 ẩn có số chiều: $\\dim V = n - r(A) = 5 - r(A)$.
* Để $\\dim V$ lớn nhất thì hạng $r(A)$ phải nhỏ nhất.
* Biến đổi sơ cấp ma trận hệ số $A$:
  $$h_2 \\to h_2 - 2h_1 \\implies (0, 1, 2, 3, 4)$$
* Xét hàng 3: để $r(A) = 2$ (nhỏ nhất) thì hàng 3 phải là tổ hợp tuyến tính của hàng 1 và hàng 2.
  * Cụ thể $h_3 = (m - 3) h_1 + (4 - m) h_2$. Ta thấy hệ số của $x_2$ là $5$ và $x_3$ là $6$:
    $h_3 - 5h_2 = ((m+1) - 10) x_1 + (7 - 15) x_4 \\implies$ giải ra $m = 3$.
  * Khi $m = 3$, hàng 3 trở thành: $4x_1 + 5x_2 + 6x_3 + 7x_4 + 8x_5 = 2(2x_1 + 3x_2 + 4x_3 + 5x_4 + 6x_5) - (x_1 + x_2 + x_3 + x_4 + x_5) = 2h_2 - h_1$.
  * Do đó hàng 3 phụ thuộc tuyến tính vào 2 hàng đầu, suy ra $r(A) = 2$.
* Khi $r(A) = 2$, $\\dim V = 5 - 2 = 3$ (lớn nhất).
* **Chọn đáp án: D.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 3,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho hai hệ phương trình $AX = 0$ (1) và $AX = B$ (2) với $A_{m \\times n}$. Phát biểu nào dưới đây là **sai**?",
    "options": [
      {"key": "A", "text": "Nếu $m = n$ và (1) có duy nhất nghiệm thì (2) có duy nhất nghiệm"},
      {"key": "B", "text": "Nếu (1) có duy nhất nghiệm thì (2) có nghiệm"},
      {"key": "C", "text": "Nếu (1) có vô số nghiệm thì chưa chắc (2) có nghiệm"},
      {"key": "D", "text": "Nếu (2) có vô số nghiệm thì (1) có vô số nghiệm"}
    ],
    "correct": "B",
    "explanation": """* Xét khẳng định B: \"Nếu (1) có duy nhất nghiệm thì (2) có nghiệm\".
  * (1) có duy nhất nghiệm $X = 0$ khi và chỉ khi $r(A) = n$ (các cột của $A$ độc lập tuyến tính).
  * Nhưng nếu số phương trình $m > n$ (số hàng nhiều hơn số cột), thì ma trận mở rộng $\\bar{A} = [A \\mid B]$ có thể có hạng $r(\\bar{A}) = n + 1 > r(A)$, dẫn đến hệ (2) vô nghiệm!
  * Do đó phát biểu B là **sai**.
* Các khẳng định A, C, D đều đúng theo định lý Kronecker - Capelli.
* **Chọn đáp án: B.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 4,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Hệ véc tơ nào sau đây **không phải** là một không gian con của $\\mathbb{R}^3$?",
    "options": [
      {"key": "A", "text": "$V = \\{(x - y, \\, y, \\, 0) \\mid x, y \\in \\mathbb{R}\\}$"},
      {"key": "B", "text": "$V = \\{(x - y + z, \\, z - y, \\, x) \\mid x, y, z \\in \\mathbb{R}\\}$"},
      {"key": "C", "text": "$V$ gồm tất cả các véc tơ sinh bởi hệ $\\{(1, 2, 1), (-2, 0, 1), (1, 2, -3), (3, -2, 1)\\}$"},
      {"key": "D", "text": "$V = \\{(x, \\, y, \\, xy) \\mid x, y \\in \\mathbb{R}\\}$"}
    ],
    "correct": "D",
    "explanation": """* Xét tập hợp D: Véc tơ có dạng $(x, y, xy)$.
  * Lấy $u = (1, 0, 0) \\in V$ (vì $1 \\cdot 0 = 0$) và $v = (0, 1, 0) \\in V$ (vì $0 \\cdot 1 = 0$).
  * Nhưng tổng $u + v = (1, 1, 0)$. Tọa độ thứ ba là $0$, trong khi tích hai tọa độ đầu là $1 \\cdot 1 = 1 \\neq 0$.
  * Do đó $u + v \\notin V$, tập $V$ không đóng kín đối với phép cộng véc tơ nên **không phải là không gian con**.
* **Chọn đáp án: D.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 5,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho hệ phương trình tuyến tính $A_{m \\times n} X = B$ với $r(A) = m$. Khi đó:",
    "options": [
      {"key": "A", "text": "Hệ luôn có nghiệm"},
      {"key": "B", "text": "Hệ vô nghiệm"},
      {"key": "C", "text": "Hệ có vô số nghiệm"},
      {"key": "D", "text": "Hệ có nghiệm duy nhất"}
    ],
    "correct": "A",
    "explanation": """* Ma trận mở rộng $\\bar{A} = [A \\mid B]$ có cỡ $m \\times (n + 1)$, nên $r(\\bar{A}) \\le m$.
* Mặt khác ta luôn có $r(\\bar{A}) \\ge r(A) = m$.
* Do đó $r(\\bar{A}) = r(A) = m$ với **mọi cột vế phải $B$**.
* Theo định lý Kronecker - Capelli, hệ phương trình luôn luôn có nghiệm.
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 6,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Hệ phương trình $\\begin{cases} 4x + 3y = -6 \\\\ 5x + 8y = 1 \\\\ a^2 x + 3ay = -9 \\end{cases}$ có đúng 1 nghiệm khi và chỉ khi:",
    "options": [
      {"key": "A", "text": "$a = -1$"},
      {"key": "B", "text": "$a = 3$"},
      {"key": "C", "text": "$a = -1$ hoặc $a = 3$"},
      {"key": "D", "text": "$a \\neq -1, \\, a \\neq 3$"}
    ],
    "correct": "C",
    "explanation": """* Giải hệ hai phương trình đầu:
  $$\\begin{cases} 4x + 3y = -6 \\\\ 5x + 8y = 1 \\end{cases} \\iff \\begin{cases} x = -3 \\\\ y = 2 \\end{cases}$$
* Thay nghiệm duy nhất $(x = -3, y = 2)$ vào phương trình thứ ba:
  $$a^2(-3) + 3a(2) = -9 \\iff -3a^2 + 6a + 9 = 0 \\iff a^2 - 2a - 3 = 0$$
* Giải phương trình bậc hai:
  $$(a + 1)(a - 3) = 0 \\iff a = -1$$ hoặc $$a = 3$$
* **Chọn đáp án: C.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 7,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho $A$ là ma trận vuông cấp $n$ với $n \\ge 2$. Khẳng định nào dưới đây đúng?",
    "options": [
      {"key": "A", "text": "$|3A| = 3|A|$"},
      {"key": "B", "text": "$|-A| = |A|$"},
      {"key": "C", "text": "Nếu $|A| = 0$ thì một véc tơ cột của $A$ là tổ hợp tuyến tính của các véc tơ cột còn lại"},
      {"key": "D", "text": "Cả A, B, C đều sai"}
    ],
    "correct": "C",
    "explanation": """* Định lý về định thức và độc lập tuyến tính: $\\det A = 0$ khi và chỉ khi hệ các véc tơ cột của $A$ phụ thuộc tuyến tính, tức là tồn tại ít nhất một véc tơ cột biểu diễn tuyến tính được qua các véc tơ cột còn lại. Khẳng định C là **đúng**.
* A sai vì $|3A| = 3^n |A|$; B sai vì $|-A| = (-1)^n |A|$ (khi $n$ lẻ thì $|-A| = -|A|$).
* **Chọn đáp án: C.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 8,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Trong không gian $\\mathbb{R}^3$, xét các tập hợp:\n$$W_1 = \\{(x, y, 1) \\mid x = 2y\\}, \\quad W_2 = \\{(x, y, z) \\mid z = 2x - y\\}, \\quad W_3 = \\{(x, y, z) \\mid x + y + z = 0\\}$$\nChọn mệnh đề đúng:",
    "options": [
      {"key": "A", "text": "$W_1$ và $W_2$ là không gian con của $\\mathbb{R}^3$"},
      {"key": "B", "text": "$W_1$ và $W_3$ là không gian con của $\\mathbb{R}^3$"},
      {"key": "C", "text": "$W_2$ và $W_3$ là không gian con của $\\mathbb{R}^3$"},
      {"key": "D", "text": "Cả 3 mệnh đề đều sai"}
    ],
    "correct": "C",
    "explanation": """* $W_1$ có tọa độ $z = 1 \\neq 0$, nên véc tơ không $\\vec{0} = (0, 0, 0) \\notin W_1 \\implies W_1$ không là không gian con.
* $W_2$ và $W_3$ là các mặt phẳng đi qua gốc tọa độ trong $\\mathbb{R}^3$ (xác định bởi các phương trình tuyến tính thuần nhất $2x - y - z = 0$ và $x + y + z = 0$), nên $W_2$ và $W_3$ đều là các không gian véc tơ con.
* Vậy $W_2$ và $W_3$ là không gian con của $\\mathbb{R}^3$.
* **Chọn đáp án: C.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 9,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Với giá trị nào của $k$ thì hạng của ma trận $A$ lớn hơn hoặc bằng 4?\n$$A = \\begin{bmatrix} 1 & 0 & 0 & 0 & k + 5 \\\\ 2 & 3 & 0 & 0 & 4 \\\\ 4 & -2 & 5 & 0 & 6 \\\\ 2 & 1 & 7 & -1 & 8 \\\\ -1 & k + 1 & 4 & 2 & k + 5 \\end{bmatrix}$$",
    "options": [
      {"key": "A", "text": "Với mọi $k$"},
      {"key": "B", "text": "$k = -1$"},
      {"key": "C", "text": "$k = -5$"},
      {"key": "D", "text": "Đáp số khác"}
    ],
    "correct": "A",
    "explanation": """* Xét ma trận con cấp 4 tạo bởi 4 hàng đầu và 4 cột đầu tiên của $A$:
  $$M_4 = \\begin{bmatrix} 1 & 0 & 0 & 0 \\\\ 2 & 3 & 0 & 0 \\\\ 4 & -2 & 5 & 0 \\\\ 2 & 1 & 7 & -1 \\end{bmatrix}$$
* Đây là ma trận tam giác dưới, định thức bằng tích các phần tử trên đường chéo chính:
  $$\\det M_4 = 1 \\cdot 3 \\cdot 5 \\cdot (-1) = -15 \\neq 0$$
* Vì tồn tại một định thức con cấp 4 khác 0 nên hạng của ma trận luôn thỏa mãn:
  $$r(A) \\ge 4, \\quad \\forall k \\in \\mathbb{R}$$
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 10,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận $A = \\begin{bmatrix} 1 & 1 & 1 \\\\ 2 & 3 & 1 \\\\ 3 & 4 & 5 \\end{bmatrix} \\begin{bmatrix} 2 & 1 & m \\\\ 3 & 5 & 0 \\\\ -4 & 0 & 0 \\end{bmatrix}$. Tìm $m$ để $A$ khả nghịch:",
    "options": [
      {"key": "A", "text": "$m \\neq 20$"},
      {"key": "B", "text": "$m \\neq 0$"},
      {"key": "C", "text": "Với mọi $m$"},
      {"key": "D", "text": "$m$ khác"}
    ],
    "correct": "B",
    "explanation": """* Ta có $\\det A = \\det(M_1) \\cdot \\det(M_2)$.
* Tính $\\det M_1$:
  $$\\det M_1 = 1(15 - 4) - 1(10 - 3) + 1(8 - 9) = 11 - 7 - 1 = 3 \\neq 0$$
* Tính $\\det M_2$ (khai triển theo cột 3):
  $$\\det M_2 = m \\cdot (-1)^{1+3} \\begin{vmatrix} 3 & 5 \\\\ -4 & 0 \\end{vmatrix} = m(0 - (-20)) = 20m$$
* Do đó: $\\det A = 3 \\cdot 20m = 60m$.
* Ma trận $A$ khả nghịch $\\iff \\det A \\neq 0 \\iff 60m \\neq 0 \\iff m \\neq 0$.
* **Chọn đáp án: B.**"""
  }
]

print("Loaded first 10 questions of De On Tap.")

de_ontap_questions.extend([
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 11,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Tính hạng của ma trận $A = \\begin{bmatrix} 1 & 1 & 2 & -1 \\\\ 2 & 3 & 5 & 3 \\\\ 4 & 7 & 2 & 6 \\\\ 10 & 17 & 9 & 15 \\end{bmatrix}$:",
    "options": [
      {"key": "A", "text": "$r(A) = 1$"},
      {"key": "B", "text": "$r(A) = 3$"},
      {"key": "C", "text": "$r(A) = 4$"},
      {"key": "D", "text": "$r(A) = 2$"}
    ],
    "correct": "B",
    "explanation": """* Khử Gauss ma trận $A$:
  * $h_2 \\to h_2 - 2h_1: (0, 1, 1, 5)$.
  * $h_3 \\to h_3 - 4h_1: (0, 3, -6, 10)$.
  * $h_4 \\to h_4 - 10h_1: (0, 7, -11, 25)$.
* Khử tiếp cột 2:
  * $h_3 \\to h_3 - 3h_2: (0, 0, -9, -5)$.
  * $h_4 \\to h_4 - 7h_2: (0, 0, -18, -10) = 2(0, 0, -9, -5)$.
* Khử tiếp hàng 4:
  * $h_4 \\to h_4 - 2h_3: (0, 0, 0, 0)$.
* Ma trận bậc thang có đúng 3 hàng khác 0, suy ra $r(A) = 3$.
* **Chọn đáp án: B.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 12,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho $f(x) = 3x^2 - 2x$ và ma trận $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & -1 \\end{bmatrix}$. Tính ma trận $f(A)$:",
    "options": [
      {"key": "A", "text": "$\\begin{bmatrix} 19 & 5 \\\\ -6 & 13 \\end{bmatrix}$"},
      {"key": "B", "text": "$\\begin{bmatrix} 19 & -4 \\\\ -6 & 23 \\end{bmatrix}$"},
      {"key": "C", "text": "$\\begin{bmatrix} 19 & -4 \\\\ 8 & 21 \\end{bmatrix}$"},
      {"key": "D", "text": "A, B, C đều sai"}
    ],
    "correct": "B",
    "explanation": """* Tính $A^2$:
  $$A^2 = \\begin{bmatrix} 1 & 2 \\\\ 3 & -1 \\end{bmatrix} \\begin{bmatrix} 1 & 2 \\\\ 3 & -1 \\end{bmatrix} = \\begin{bmatrix} 1(1) + 2(3) & 1(2) + 2(-1) \\\\ 3(1) + (-1)(3) & 3(2) + (-1)(-1) \\end{bmatrix} = \\begin{bmatrix} 7 & 0 \\\\ 0 & 7 \\end{bmatrix} = 7I$$
* Khi đó:
  $$f(A) = 3A^2 - 2A = 3 \\begin{bmatrix} 7 & 0 \\\\ 0 & 7 \\end{bmatrix} - 2 \\begin{bmatrix} 1 & 2 \\\\ 3 & -1 \\end{bmatrix} = \\begin{bmatrix} 21 & 0 \\\\ 0 & 21 \\end{bmatrix} - \\begin{bmatrix} 2 & 4 \\\\ 6 & -2 \\end{bmatrix} = \\begin{bmatrix} 19 & -4 \\\\ -6 & 23 \\end{bmatrix}$$
* **Chọn đáp án: B.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 13,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho hai ma trận $A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 0 & 4 \\end{bmatrix}$ và $B = \\begin{bmatrix} 1 & 1 & 0 \\\\ 2 & 0 & 0 \\\\ 3 & 4 & 0 \\end{bmatrix}$. Khẳng định nào dưới đây là **sai**?",
    "options": [
      {"key": "A", "text": "$AB = \\begin{bmatrix} 14 & 13 \\\\ 14 & 18 \\end{bmatrix}$"},
      {"key": "B", "text": "$AB = \\begin{bmatrix} 14 & 13 & 0 \\\\ 14 & 18 & 1 \\end{bmatrix}$"},
      {"key": "C", "text": "$BA$ xác định nhưng $AB$ không xác định"},
      {"key": "D", "text": "$AB = \\begin{bmatrix} 14 & 13 & 0 \\\\ 13 & 18 & 0 \\end{bmatrix}$"}
    ],
    "correct": "C",
    "explanation": """* $A$ có cỡ $2 \\times 3$ và $B$ có cỡ $3 \\times 3$.
  * Tích $AB$ hoàn toàn xác định vì số cột của $A$ ($3$) bằng số hàng của $B$ ($3$), ma trận tích $AB$ có cỡ $2 \\times 3$:
    $$AB = \\begin{bmatrix} 1(1)+2(2)+3(3) & 1(1)+2(0)+3(4) & 0 \\\\ 2(1)+0(2)+4(3) & 2(1)+0(0)+4(4) & 0 \\end{bmatrix} = \\begin{bmatrix} 14 & 13 & 0 \\\\ 14 & 18 & 0 \\end{bmatrix}$$
  * Trong khi đó, tích $BA$ ($3 \\times 3$ nhân $2 \\times 3$) không xác định vì số cột của $B$ ($3$) khác số hàng của $A$ ($2$).
* Do đó khẳng định C \"$BA$ xác định nhưng $AB$ không xác định\" là **hoàn toàn sai**.
* **Chọn đáp án: C.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 14,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho $f(x) = x^2 + 2x - 5$ và ma trận $A = \\begin{bmatrix} 1 & 1 \\\\ -1 & 2 \\end{bmatrix}$. Tính ma trận $f(A)$:",
    "options": [
      {"key": "A", "text": "$\\begin{bmatrix} -3 & 0 \\\\ -5 & 2 \\end{bmatrix}$"},
      {"key": "B", "text": "$\\begin{bmatrix} -3 & 5 \\\\ -5 & 7 \\end{bmatrix}$"},
      {"key": "C", "text": "$\\begin{bmatrix} 2 & 5 \\\\ -5 & 7 \\end{bmatrix}$"},
      {"key": "D", "text": "$\\begin{bmatrix} -3 & 5 \\\\ -5 & 2 \\end{bmatrix}$"}
    ],
    "correct": "D",
    "explanation": """* Tính $A^2$:
  $$A^2 = \\begin{bmatrix} 1 & 1 \\\\ -1 & 2 \\end{bmatrix} \\begin{bmatrix} 1 & 1 \\\\ -1 & 2 \\end{bmatrix} = \\begin{bmatrix} 1 - 1 & 1 + 2 \\\\ -1 - 2 & -1 + 4 \\end{bmatrix} = \\begin{bmatrix} 0 & 3 \\\\ -3 & 3 \\end{bmatrix}$$
* $2A = \\begin{bmatrix} 2 & 2 \\\\ -2 & 4 \\end{bmatrix}$ và $5I = \\begin{bmatrix} 5 & 0 \\\\ 0 & 5 \\end{bmatrix}$.
* Khi đó:
  $$f(A) = A^2 + 2A - 5I = \\begin{bmatrix} 0 + 2 - 5 & 3 + 2 - 0 \\\\ -3 - 2 - 0 & 3 + 4 - 5 \\end{bmatrix} = \\begin{bmatrix} -3 & 5 \\\\ -5 & 2 \\end{bmatrix}$$
* **Chọn đáp án: D.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 15,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận $A = \\begin{bmatrix} 1 & 0 & 2 \\\\ 2 & 3 & m \\\\ 3 & 4 & 2 \\end{bmatrix}$. Tìm $m$ để hạng của ma trận nghịch đảo $A^{-1}$ bằng 3:",
    "options": [
      {"key": "A", "text": "Cả 3 câu đều sai"},
      {"key": "B", "text": "$m \\neq 1$"},
      {"key": "C", "text": "$m \\neq 2$"},
      {"key": "D", "text": "$m = 3$"}
    ],
    "correct": "B",
    "explanation": """* Ma trận vuông cấp 3 $A$ có ma trận nghịch đảo $A^{-1}$ khi và chỉ khi $A$ khả nghịch, tức là $\\det A \\neq 0$.
* Khi $A$ khả nghịch thì $A^{-1}$ cũng là ma trận vuông cấp 3 khả nghịch, có hạng $r(A^{-1}) = 3$.
* Tính định thức $\\det A$:
  $$\\det A = 1(6 - 4m) - 0 + 2(8 - 9) = 6 - 4m - 2 = 4 - 4m$$
* Để $A$ khả nghịch:
  $$\\det A \\neq 0 \\iff 4 - 4m \\neq 0 \\iff m \\neq 1$$
* **Chọn đáp án: B.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 16,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận $A = \\begin{bmatrix} 2 & 6 \\\\ 0 & 2 \\end{bmatrix}$. Tính ma trận $A^{100}$:",
    "options": [
      {"key": "A", "text": "$\\begin{bmatrix} 2^{100} & 300 \\\\ 0 & 2^{100} \\end{bmatrix}$"},
      {"key": "B", "text": "$2^{100} \\begin{bmatrix} 1 & 100 \\\\ 0 & 1 \\end{bmatrix}$"},
      {"key": "C", "text": "$2^{100} \\begin{bmatrix} 1 & 300 \\\\ 0 & 1 \\end{bmatrix}$"},
      {"key": "D", "text": "Các đáp án đều sai"}
    ],
    "correct": "C",
    "explanation": """* Ta viết $A = 2 \\begin{bmatrix} 1 & 3 \\\\ 0 & 1 \\end{bmatrix}$.
* Bằng quy nạp, ta có công thức lũy thừa ma trận tam giác:
  $$\\begin{bmatrix} 1 & k \\\\ 0 & 1 \\end{bmatrix}^n = \\begin{bmatrix} 1 & n \\cdot k \\\\ 0 & 1 \\end{bmatrix}$$
* Với $k = 3$ và $n = 100$:
  $$\\begin{bmatrix} 1 & 3 \\\\ 0 & 1 \\end{bmatrix}^{100} = \\begin{bmatrix} 1 & 3 \\cdot 100 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 1 & 300 \\\\ 0 & 1 \\end{bmatrix}$$
* Suy ra:
  $$A^{100} = 2^{100} \\begin{bmatrix} 1 & 300 \\\\ 0 & 1 \\end{bmatrix}$$
* **Chọn đáp án: C.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 17,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận $A = \\begin{bmatrix} 2 & 2 \\\\ 2 & 2 \\end{bmatrix}$. Đặt $B = \\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\end{bmatrix}$. Tính $A^{100}$:",
    "options": [
      {"key": "A", "text": "$2^{99} B$"},
      {"key": "B", "text": "$2^{100} B$"},
      {"key": "C", "text": "$2^{199} B$"},
      {"key": "D", "text": "$2^{200} B$"}
    ],
    "correct": "C",
    "explanation": """* Ta có $A = 2B$. Do đó $A^{100} = (2B)^{100} = 2^{100} B^{100}$.
* Tính các lũy thừa của $B$:
  $$B^2 = \\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\end{bmatrix} \\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\end{bmatrix} = \\begin{bmatrix} 2 & 2 \\\\ 2 & 2 \\end{bmatrix} = 2B$$
* Bằng quy nạp: $B^n = 2^{n - 1} B$.
* Với $n = 100 \\implies B^{100} = 2^{99} B$.
* Vậy:
  $$A^{100} = 2^{100} \\cdot 2^{99} B = 2^{199} B$$
* **Chọn đáp án: C.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 18,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Tổng tất cả các phần tử trên đường chéo chính gọi là vết của ma trận. Cho $A = \\begin{bmatrix} 1 & 3 & 2 \\\\ 4 & 2 & 4 \\\\ 3 & 2 & 2 \\end{bmatrix}$ và $B = \\begin{bmatrix} 5 & -2 & 4 \\\\ 1 & 3 & 7 \\\\ 6 & 4 & 5 \\end{bmatrix}$. Tìm vết của ma trận $AB$:",
    "options": [
      {"key": "A", "text": "$70$"},
      {"key": "B", "text": "$46$"},
      {"key": "C", "text": "$65$"},
      {"key": "D", "text": "Cả 3 đáp án đều sai"}
    ],
    "correct": "A",
    "explanation": """* Vết của ma trận tích $AB$ là $\\operatorname{tr}(AB) = (AB)_{11} + (AB)_{22} + (AB)_{33}$.
* Tính các phần tử trên đường chéo chính:
  * $(AB)_{11} = 1(5) + 3(1) + 2(6) = 5 + 3 + 12 = 20$.
  * $(AB)_{22} = 4(-2) + 2(3) + 4(4) = -8 + 6 + 16 = 14$.
  * $(AB)_{33} = 3(4) + 2(7) + 2(5) = 12 + 14 + 10 = 36$.
* Tổng: $\\operatorname{tr}(AB) = 20 + 14 + 36 = 70$.
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 19,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Tìm ma trận $X$ thỏa mãn phương trình:\n$$X \\begin{bmatrix} 2 & 5 \\\\ 1 & 3 \\end{bmatrix} = \\begin{bmatrix} 4 & 2 \\\\ 5 & 6 \\\\ -1 & 7 \\end{bmatrix}$$",
    "options": [
      {"key": "A", "text": "$\\begin{bmatrix} 9 & 15 \\\\ 7 & 12 \\\\ -1 & 6 \\end{bmatrix}$"},
      {"key": "B", "text": "$\\begin{bmatrix} 10 & -16 \\\\ 9 & -18 \\\\ -10 & 19 \\end{bmatrix}$"},
      {"key": "C", "text": "$\\begin{bmatrix} 10 & 7 \\\\ -8 & 16 \\\\ 0 & 12 \\end{bmatrix}$"},
      {"key": "D", "text": "Cả 3 đáp án đều sai"}
    ],
    "correct": "B",
    "explanation": """* Đặt $A = \\begin{bmatrix} 2 & 5 \\\\ 1 & 3 \\end{bmatrix}$. Ta có $\\det A = 2(3) - 5(1) = 1 \\neq 0$.
* Nghịch đảo: $A^{-1} = \\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix}$.
* Phương trình có dạng $XA = B \\implies X = BA^{-1}$:
  $$X = \\begin{bmatrix} 4 & 2 \\\\ 5 & 6 \\\\ -1 & 7 \\end{bmatrix} \\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix} = \\begin{bmatrix} 4(3)+2(-1) & 4(-5)+2(2) \\\\ 5(3)+6(-1) & 5(-5)+6(2) \\\\ -1(3)+7(-1) & -1(-5)+7(2) \\end{bmatrix} = \\begin{bmatrix} 10 & -16 \\\\ 9 & -18 \\\\ -10 & 19 \\end{bmatrix}$$
* **Chọn đáp án: B.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 20,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Tính định thức của ma trận $A = \\begin{bmatrix} 3 & 4 & 1 & -1 \\\\ 4 & 1 & 0 & 3 \\\\ 2 & 3 & -1 & -4 \\\\ 6 & 4 & 0 & 3 \\end{bmatrix}$:",
    "options": [
      {"key": "A", "text": "$\\det A = 53$"},
      {"key": "B", "text": "$\\det A = 14$"},
      {"key": "C", "text": "$\\det A = 20$"},
      {"key": "D", "text": "Cả A, B, C đều sai"}
    ],
    "correct": "A",
    "explanation": """* Cột 3 chỉ có 2 phần tử khác 0 ở hàng 1 ($1$) và hàng 3 ($-1$).
* Biến đổi hàng $h_3 \\to h_3 + h_1$:
  $$\\det A = \\begin{vmatrix} 3 & 4 & 1 & -1 \\\\ 4 & 1 & 0 & 3 \\\\ 5 & 7 & 0 & -5 \\\\ 6 & 4 & 0 & 3 \\end{vmatrix}$$
* Khai triển theo cột 3:
  $$\\det A = 1 \\cdot (-1)^{1+3} \\begin{vmatrix} 4 & 1 & 3 \\\\ 5 & 7 & -5 \\\\ 6 & 4 & 3 \\end{vmatrix}$$
* Biến đổi hàng $h_3 \\to h_3 - h_1$:
  $$\\begin{vmatrix} 4 & 1 & 3 \\\\ 5 & 7 & -5 \\\\ 2 & 3 & 0 \\end{vmatrix} = 2(-5 - 21) - 3(-20 - 15) = 2(-26) - 3(-35) = -52 + 105 = 53$$
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 21,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Giải phương trình định thức:\n$$\\begin{vmatrix} 1 & 1 & 1 & -1 \\\\ 2 & 0 & 3 & 1 \\\\ 4 & x & 1 & -1 \\\\ 1 & 0 & -1 & 2 \\end{vmatrix} = 0$$",
    "options": [
      {"key": "A", "text": "$x = 5$"},
      {"key": "B", "text": "$x = 1/3$"},
      {"key": "C", "text": "$x = 10/3$"},
      {"key": "D", "text": "Cả 3 đều sai"}
    ],
    "correct": "C",
    "explanation": """* Khai triển định thức theo cột 2 (chỉ có hàng 1 là $1$ và hàng 3 là $x$):
  $$(-1)^{1+2} \\cdot 1 \\cdot \\begin{vmatrix} 2 & 3 & 1 \\\\ 4 & 1 & -1 \\\\ 1 & -1 & 2 \\end{vmatrix} + (-1)^{3+2} \\cdot x \\cdot \\begin{vmatrix} 1 & 1 & -1 \\\\ 2 & 3 & 1 \\\\ 1 & -1 & 2 \\end{vmatrix} = 0$$
* Tính từng định thức con cấp 3:
  * $\\begin{vmatrix} 2 & 3 & 1 \\\\ 4 & 1 & -1 \\\\ 1 & -1 & 2 \\end{vmatrix} = 2(2 - 1) - 3(8 + 1) + 1(-4 - 1) = 2 - 27 - 5 = -30$.
  * $\\begin{vmatrix} 1 & 1 & -1 \\\\ 2 & 3 & 1 \\\\ 1 & -1 & 2 \\end{vmatrix} = 1(6 + 1) - 1(4 - 1) - 1(-2 - 3) = 7 - 3 + 5 = 9$.
* Phương trình trở thành:
  $$-1(-30) - x(9) = 0 \\iff 30 - 9x = 0 \\iff x = \\frac{30}{9} = \\frac{10}{3}$$
* **Chọn đáp án: C.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 22,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Ánh xạ $f: \\mathbb{R} \\to \\mathbb{R}$ có công thức xác định $f(x) = 5x - 2|x|$. Khẳng định nào dưới đây đúng?",
    "options": [
      {"key": "A", "text": "Là đơn ánh"},
      {"key": "B", "text": "Là song ánh"},
      {"key": "C", "text": "Là toàn ánh"},
      {"key": "D", "text": "Là song ánh nhưng không toàn ánh"}
    ],
    "correct": "B",
    "explanation": """* Viết lại hàm số dưới dạng từng khúc:
  $$f(x) = \\begin{cases} 5x - 2x = 3x & \\text{khi } x \\ge 0 \\\\ 5x - 2(-x) = 7x & \\text{khi } x < 0 \\end{cases}$$
* Khảo sát:
  * Với $x \\ge 0$: $f'(x) = 3 > 0$, hàm đồng biến từ $0$ đến $+\\infty$.
  * Với $x < 0$: $f'(x) = 7 > 0$, hàm đồng biến từ $-\\infty$ đến $0$.
* Hàm số liên tục và đồng biến nghiêm ngặt trên toàn $\\mathbb{R}$ $\\implies f$ là **đơn ánh**.
* Tập giá trị của hàm là $\\operatorname{Im} f = (-\\infty, 0) \\cup [0, +\\infty) = \\mathbb{R} \\implies f$ là **toàn ánh**.
* Vì $f$ vừa là đơn ánh vừa là toàn ánh nên $f$ là **song ánh**.
* **Chọn đáp án: B.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 23,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho các ánh xạ $f, g, h, k, l, t: \\mathbb{R}^3 \\to \\mathbb{R}^3$ có công thức xác định như sau:\n$$f(x, y, z) = (z, -y, x); \\quad g(x, y, z) = (x^2, -y, z); \\quad h(x, y, z) = (x, y, 0);$$\n$$k(x, y, z) = (|x|, y, z); \\quad l(x, y, z) = (x + y, y + z, z + x); \\quad t(x, y, z) = (x, y, z)$$\nKhẳng định nào dưới đây đúng?",
    "options": [
      {"key": "A", "text": "$f, h, l, t$ là các ánh xạ tuyến tính"},
      {"key": "B", "text": "$f, h, k, l, t$ là các ánh xạ tuyến tính"},
      {"key": "C", "text": "$f, g, h, k$ là các ánh xạ tuyến tính"},
      {"key": "D", "text": "$f, g, h, k, l, t$ là các ánh xạ tuyến tính"}
    ],
    "correct": "A",
    "explanation": """* Xét các ánh xạ phi tuyến:
  * $g$ chứa $x^2$ (bậc hai) $\\implies$ không tuyến tính.
  * $k$ chứa $|x|$ (trị tuyệt đối, $k(-u) \\neq -k(u)$) $\\implies$ không tuyến tính.
* Các ánh xạ $f, h, l, t$ đều có các thành phần là đa thức bậc nhất thuần nhất đối với $(x, y, z)$, thỏa mãn $F(u + v) = F(u) + F(v)$ và $F(cu) = c F(u)$.
* Vậy $f, h, l, t$ là các ánh xạ tuyến tính.
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 24,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Rút gọn công thức đại số Boole sau:\n$$A = \\{[(x' \\wedge z) \\wedge (x \\vee z')] \\vee y\\} \\wedge (x \\vee y \\vee z) \\wedge \\{[(y' \\vee z) \\wedge (y \\vee z')] \\vee x\\}$$",
    "options": [
      {"key": "A", "text": "$A = (y \\vee z) \\wedge (x \\vee y) \\wedge (x \\vee z)$"},
      {"key": "B", "text": "$A = (y \\wedge z) \\vee (x \\wedge y) \\vee (x \\wedge z)$"},
      {"key": "C", "text": "$A = (x \\wedge z) \\wedge (x \\vee y)$"},
      {"key": "D", "text": "$A = (x \\vee z) \\vee (y \\vee z)$"}
    ],
    "correct": "A",
    "explanation": """* Rút gọn ngoặc thứ nhất:
  $$(x' \\wedge z) \\wedge (x \\vee z') = (x' \\wedge z \\wedge x) \\vee (x' \\wedge z \\wedge z') = 0 \\vee 0 = 0$$
  Do đó ngoặc thứ nhất là $0 \\vee y = y$.
* Biểu thức trở thành:
  $$A = y \\wedge (x \\vee y \\vee z) \\wedge \\{[(y' \\vee z) \\wedge (y \\vee z')] \\vee x\\}$$
* Vì $y \\wedge (x \\vee y \\vee z) = y$, ta có:
  $$A = y \\wedge \\{[(y' \\vee z) \\wedge (y \\vee z')] \\vee x\\} = \\{y \\wedge [(y' \\vee z) \\wedge (y \\vee z')]\\} \\vee (y \\wedge x)$$
* Tiếp tục rút gọn:
  $$y \\wedge (y' \\vee z) = (y \\wedge y') \\vee (y \\wedge z) = y \\wedge z$$
  $$(y \\wedge z) \\wedge (y \\vee z') = (y \\wedge z \\wedge y) \\vee (y \\wedge z \\wedge z') = (y \\wedge z) \\vee 0 = y \\wedge z$$
* Suy ra $A = (y \\wedge z) \\vee (y \\wedge x) = y \\wedge (x \\vee z) = (y \\vee z) \\wedge (x \\vee y) \\wedge (x \\vee z)$.
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 25,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Biểu diễn ma trận $A = \\begin{bmatrix} 4 & 1 \\\\ -3 & -3 \\end{bmatrix}$ theo tổ hợp tuyến tính của các ma trận $M_1 = \\begin{bmatrix} 2 & 1 \\\\ 2 & 1 \\end{bmatrix}, M_2 = \\begin{bmatrix} 7 & 1 \\\\ 1 & 1 \\end{bmatrix}, M_3 = \\begin{bmatrix} 13 & 5 \\\\ 3 & 3 \\end{bmatrix}, M_4 = \\begin{bmatrix} 5 & 2 \\\\ 2 & 4 \\end{bmatrix}$:",
    "options": [
      {"key": "A", "text": "$A = M_1 - 2M_2 + 0M_3 - M_4$"},
      {"key": "B", "text": "$A = -2M_1 + 0M_2 + M_3 - M_4$"},
      {"key": "C", "text": "$A = 4M_1 + M_2 - 3M_3 - 3M_4$"},
      {"key": "D", "text": "$A = 4M_1 - 3M_2 + M_3 - 3M_4$"}
    ],
    "correct": "B",
    "explanation": """* Kiểm tra phương án B: $-2M_1 + 0M_2 + 1M_3 - 1M_4$:
  $$-2 \\begin{bmatrix} 2 & 1 \\\\ 2 & 1 \\end{bmatrix} + \\begin{bmatrix} 13 & 5 \\\\ 3 & 3 \\end{bmatrix} - \\begin{bmatrix} 5 & 2 \\\\ 2 & 4 \\end{bmatrix} = \\begin{bmatrix} -4 + 13 - 5 & -2 + 5 - 2 \\\\ -4 + 3 - 2 & -2 + 3 - 4 \\end{bmatrix} = \\begin{bmatrix} 4 & 1 \\\\ -3 & -3 \\end{bmatrix} = A$$
* Kết quả khớp chính xác với ma trận $A$.
* **Chọn đáp án: B.**"""
  }
])

print("Loaded up to question 25 of De On Tap.")
