# -*- coding: utf-8 -*-
import json

de101_questions = [
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 1,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Đối ngẫu của công thức Boole $(x' \\vee 0) \\wedge (y' \\wedge z)$ là:",
    "options": [
      {"key": "A", "text": "$(x' \\wedge 0) \\vee (y' \\vee z)$"},
      {"key": "B", "text": "$(x \\wedge 1) \\vee (y \\vee z')$"},
      {"key": "C", "text": "$(x' \\vee 1) \\wedge (y' \\wedge z)$"},
      {"key": "D", "text": "$(x' \\wedge 1) \\vee (y' \\vee z)$"}
    ],
    "correct": "D",
    "explanation": """* **Quy tắc tìm công thức đối ngẫu trong đại số Boole:**
  * Giữ nguyên các biến và dấu phủ định của biến ($x' \\to x'$, $y' \\to y'$, $z \\to z$).
  * Đổi phép hội $\\wedge$ thành phép tuyển $\\vee$ và ngược lại.
  * Đổi hằng số $0 \\to 1$ và $1 \\to 0$.
* Biến đổi:
  $$(x' \\vee 0) \\wedge (y' \\wedge z) \\xrightarrow{\\text{đối ngẫu}} (x' \\wedge 1) \\vee (y' \\vee z)$$
* **Chọn đáp án: D.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 2,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận trực giao $A$. Khẳng định nào dưới đây đúng?",
    "options": [
      {"key": "A", "text": "$\\det A = -1$"},
      {"key": "B", "text": "Các véc tơ hàng của $A$ không tạo thành hệ trực chuẩn"},
      {"key": "C", "text": "$\\det A = 1$"},
      {"key": "D", "text": "$A$ khả nghịch và $A^{-1} = A^t$"}
    ],
    "correct": "D",
    "explanation": """* **Định nghĩa ma trận trực giao:** Ma trận vuông thực $A$ được gọi là trực giao nếu $A^t A = A A^t = I$.
* Từ định nghĩa suy ra:
  * $A$ luôn khả nghịch và ma trận nghịch đảo bằng chính ma trận chuyển vị: $A^{-1} = A^t$.
  * $\\det(A^t A) = (\\det A)^2 = \\det I = 1 \\implies \\det A = \\pm 1$ (chứ không nhất thiết chỉ bằng $1$ hay $-1$).
  * Các véc tơ hàng (và cột) của $A$ luôn tạo thành một hệ trực chuẩn.
* **Chọn đáp án: D.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 3,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Tìm ma trận $X$ thỏa mãn phương trình:\n$$X \\begin{bmatrix} -2 & -1 \\\\ 2 & 3 \\end{bmatrix} = \\begin{bmatrix} 0 & 1 \\\\ 2 & -1 \\end{bmatrix}$$",
    "options": [
      {"key": "A", "text": "$X = \\begin{bmatrix} 1/2 & 1/2 \\\\ -2 & -1 \\end{bmatrix}$"},
      {"key": "B", "text": "$X = \\begin{bmatrix} -1/2 & -1/2 \\\\ 1 & 0 \\end{bmatrix}$"},
      {"key": "C", "text": "$X = \\begin{bmatrix} -2 & -2 \\\\ 8 & 4 \\end{bmatrix}$"},
      {"key": "D", "text": "$X = \\begin{bmatrix} 2 & 2 \\\\ -4 & 0 \\end{bmatrix}$"}
    ],
    "correct": "A",
    "explanation": """* Đặt $A = \\begin{bmatrix} -2 & -1 \\\\ 2 & 3 \\end{bmatrix}$ và $B = \\begin{bmatrix} 0 & 1 \\\\ 2 & -1 \\end{bmatrix}$. Phương trình có dạng $XA = B \\implies X = BA^{-1}$.
* Tính $\\det A = (-2)(3) - (-1)(2) = -6 + 2 = -4 \\neq 0$.
* Ma trận nghịch đảo:
  $$A^{-1} = -\\frac{1}{4} \\begin{bmatrix} 3 & 1 \\\\ -2 & -2 \\end{bmatrix}$$
* Nhân ma trận:
  $$X = \\begin{bmatrix} 0 & 1 \\\\ 2 & -1 \\end{bmatrix} \\left(-\\frac{1}{4}\\right) \\begin{bmatrix} 3 & 1 \\\\ -2 & -2 \\end{bmatrix} = -\\frac{1}{4} \\begin{bmatrix} -2 & -2 \\\\ 8 & 4 \\end{bmatrix} = \\begin{bmatrix} 1/2 & 1/2 \\\\ -2 & -1 \\end{bmatrix}$$
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 4,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Cho dạng toàn phương $Q: \\mathbb{R}^3 \\to \\mathbb{R}$ xác định bởi:\n$$Q(x, y, z) = x^2 + 2y^2 - z^2 + 2xy + 2yz$$\nKý hiệu $(p, q)$ là cặp chỉ số quán tính dương và âm của $Q$. Khẳng định nào dưới đây đúng?",
    "options": [
      {"key": "A", "text": "$p = 1, \\, q = 2$"},
      {"key": "B", "text": "$p = 0, \\, q = 3$"},
      {"key": "C", "text": "$p = 1, \\, q = 1$"},
      {"key": "D", "text": "$p = 2, \\, q = 1$"}
    ],
    "correct": "D",
    "explanation": """* **Phương pháp Lagrange đưa về dạng chính tắc:**
  $$Q = (x^2 + 2xy + y^2) + y^2 + 2yz - z^2 = (x + y)^2 + (y^2 + 2yz + z^2) - 2z^2 = (x + y)^2 + (y + z)^2 - 2z^2$$
* Đặt $\\begin{cases} X = x + y \\\\ Y = y + z \\\\ Z = z \\end{cases}$, ta thu được dạng chính tắc:
  $$Q = X^2 + Y^2 - 2Z^2$$
* Có $2$ hệ số dương ($+1, +1$) và $1$ hệ số âm ($-2$).
* Do đó chỉ số quán tính dương $p = 2$ và chỉ số quán tính âm $q = 1$.
* **Chọn đáp án: D.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 5,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Cho dạng toàn phương $Q: \\mathbb{R}^3 \\to \\mathbb{R}$ xác định bởi:\n$$Q(x, y, z) = x^2 + 2y^2 - z^2 + 2xy + 2yz$$\nMa trận của $Q$ trong cơ sở chính tắc của $\\mathbb{R}^3$ là:",
    "options": [
      {"key": "A", "text": "$\\begin{bmatrix} 1 & 1 & 0 \\\\ 0 & 2 & 1 \\\\ 0 & 0 & -1 \\end{bmatrix}$"},
      {"key": "B", "text": "$\\begin{bmatrix} 1 & 2 & 0 \\\\ 2 & 2 & 2 \\\\ 0 & 2 & -1 \\end{bmatrix}$"},
      {"key": "C", "text": "$\\begin{bmatrix} 1 & 1 & 0 \\\\ 1 & 2 & 1 \\\\ 0 & 1 & -1 \\end{bmatrix}$"},
      {"key": "D", "text": "$\\begin{bmatrix} 1 & 2 & 0 \\\\ 0 & 2 & 2 \\\\ 0 & 0 & -1 \\end{bmatrix}$"}
    ],
    "correct": "C",
    "explanation": """* **Quy tắc lập ma trận đối xứng của dạng toàn phương:**
  * Đường chéo chính: hệ số của $x^2, y^2, z^2 \\implies a_{11} = 1, a_{22} = 2, a_{33} = -1$.
  * Hệ số $xy = 2 \\implies a_{12} = a_{21} = 1$.
  * Hệ số $yz = 2 \\implies a_{23} = a_{32} = 1$.
  * Không có $xz \\implies a_{13} = a_{31} = 0$.
* Ma trận đối xứng thu được:
  $$A = \\begin{bmatrix} 1 & 1 & 0 \\\\ 1 & 2 & 1 \\\\ 0 & 1 & -1 \\end{bmatrix}$$
* **Chọn đáp án: C.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 6,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho hệ phương trình:\n$$\\begin{cases} x + y - 5z = a \\\\ -2x + 2y + 2z = b \\\\ -x + 3y - 3z = c \\end{cases}$$\nĐiều kiện cần và đủ để hệ phương trình đã cho có nghiệm là:",
    "options": [
      {"key": "A", "text": "$a + b - c = 0$"},
      {"key": "B", "text": "$3a - b + c \\neq 0$"},
      {"key": "C", "text": "$a + b - c \\neq 0$"},
      {"key": "D", "text": "$3a - b + c = 0$"}
    ],
    "correct": "A",
    "explanation": """* Cộng phương trình (1) và phương trình (2) theo từng vế:
  $$(x - 2x) + (y + 2y) + (-5z + 2z) = -x + 3y - 3z = a + b$$
* Vế trái chính là vế trái của phương trình (3): $-x + 3y - 3z = c$.
* Để hệ có nghiệm, vế phải phải tương thích:
  $$a + b = c \\iff a + b - c = 0$$
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 7,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ có ma trận chính tắc $\\begin{bmatrix} 1 & -2 \\\\ -2 & 4 \\end{bmatrix}$. Véc tơ nào dưới đây thuộc $\\operatorname{Im} f$?",
    "options": [
      {"key": "A", "text": "$(3, -6)$"},
      {"key": "B", "text": "$(4, -2)$"},
      {"key": "C", "text": "$(6, -3)$"},
      {"key": "D", "text": "$(3, 6)$"}
    ],
    "correct": "A",
    "explanation": """* Không gian ảnh $\\operatorname{Im} f$ được sinh bởi các véc tơ cột của ma trận chính tắc:
  $$u_1 = \\begin{bmatrix} 1 \\\\ -2 \\end{bmatrix}, \\quad u_2 = \\begin{bmatrix} -2 \\\\ 4 \\end{bmatrix} = -2 u_1$$
* Vì $u_2$ tỉ lệ với $u_1$, mọi véc tơ thuộc $\\operatorname{Im} f$ đều có dạng $k(1, -2) = (k, -2k)$ với $k \\in \\mathbb{R}$.
* Xét các phương án:
  * Phương án A: $(3, -6) = 3(1, -2)$ (thỏa mãn với $k = 3$).
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 8,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho các ma trận:\n$$A = \\begin{bmatrix} 1 & 2 & 1 \\\\ 2 & 1 & 2 \\\\ 1 & 2 & 3 \\end{bmatrix}, \\quad B = \\begin{bmatrix} 4 & 1 & 1 \\\\ -4 & 2 & 0 \\\\ 1 & 2 & 1 \\end{bmatrix}$$\nPhần tử ở vị trí hàng 1, cột 2 của ma trận $AB - BA$ là:",
    "options": [
      {"key": "A", "text": "$3$"},
      {"key": "B", "text": "$4$"},
      {"key": "C", "text": "$-4$"},
      {"key": "D", "text": "$1$"}
    ],
    "correct": "C",
    "explanation": """* Ta có $(AB - BA)_{12} = (AB)_{12} - (BA)_{12}$.
* Tính từng thành phần:
  * $(AB)_{12} =$ (Hàng 1 của $A$) $\\cdot$ (Cột 2 của $B$) $= 1(1) + 2(2) + 1(2) = 1 + 4 + 2 = 7$.
  * $(BA)_{12} =$ (Hàng 1 của $B$) $\\cdot$ (Cột 2 của $A$) $= 4(2) + 1(1) + 1(2) = 8 + 1 + 2 = 11$.
* Suy ra: $(AB - BA)_{12} = 7 - 11 = -4$.
* **Chọn đáp án: C.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 9,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^3 \\to \\mathbb{R}^2$ xác định bởi:\n$$f(x, y, z) = (x - y - z, \\, x + y - z)$$\nMa trận của $f$ trong các cơ sở $B_1 = \\{(0, 1, 1), \\, (1, 1, 1), \\, (1, 1, 0)\\}$ của $\\mathbb{R}^3$ và $B_2 = \\{(1, 1), \\, (1, 2)\\}$ của $\\mathbb{R}^2$ là:",
    "options": [
      {"key": "A", "text": "$\\begin{bmatrix} -4 & -3 & -2 \\\\ 2 & 2 & 2 \\end{bmatrix}$"},
      {"key": "B", "text": "$\\begin{bmatrix} -4 & 2 \\\\ 2 & -3 \\\\ -2 & 2 \\end{bmatrix}$"},
      {"key": "C", "text": "$\\begin{bmatrix} -4 & 2 & -2 \\\\ 2 & -3 & 2 \\end{bmatrix}$"},
      {"key": "D", "text": "$\\begin{bmatrix} -4 & 2 \\\\ -3 & 2 \\\\ -2 & 2 \\end{bmatrix}$"}
    ],
    "correct": "A",
    "explanation": """* Ánh xạ từ $\\mathbb{R}^3$ sang $\\mathbb{R}^2$ có ma trận cỡ $2 \\times 3$.
* Tính ảnh của từng véc tơ trong cơ sở $B_1$:
  * $f(0, 1, 1) = (-2, 0) = c_1(1, 1) + c_2(1, 2) \\implies \\begin{cases} c_1 + c_2 = -2 \\\\ c_1 + 2c_2 = 0 \\end{cases} \\implies c_2 = 2, c_1 = -4 \\implies \\begin{bmatrix} -4 \\\\ 2 \\end{bmatrix}$.
  * $f(1, 1, 1) = (-1, 1) = c_1(1, 1) + c_2(1, 2) \\implies \\begin{cases} c_1 + c_2 = -1 \\\\ c_1 + 2c_2 = 1 \\end{cases} \\implies c_2 = 2, c_1 = -3 \\implies \\begin{bmatrix} -3 \\\\ 2 \\end{bmatrix}$.
  * $f(1, 1, 0) = (0, 2) = c_1(1, 1) + c_2(1, 2) \\implies \\begin{cases} c_1 + c_2 = 0 \\\\ c_1 + 2c_2 = 2 \\end{cases} \\implies c_2 = 2, c_1 = -2 \\implies \\begin{bmatrix} -2 \\\\ 2 \\end{bmatrix}$.
* Ghép các cột lại ta được:
  $$[f] = \\begin{bmatrix} -4 & -3 & -2 \\\\ 2 & 2 & 2 \\end{bmatrix}$$
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 10,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho $A$ là một ma trận vuông cấp 3. Khẳng định nào dưới đây đúng?",
    "options": [
      {"key": "A", "text": "Nếu $A \\neq 0$ thì $A^2 \\neq 0$"},
      {"key": "B", "text": "Nếu $A^2$ khả nghịch thì $A$ khả nghịch"},
      {"key": "C", "text": "Nếu $A^2 = A$ và $A \\neq 0$ thì $A = I$"},
      {"key": "D", "text": "Nếu $A$ có tổng các phần tử ở mỗi hàng đều bằng 0 thì $A$ khả nghịch"}
    ],
    "correct": "B",
    "explanation": """* Xét phương án B: Ta có $\\det(A^2) = (\\det A)^2$. Nếu $A^2$ khả nghịch thì $\\det(A^2) \\neq 0 \\implies (\\det A)^2 \\neq 0 \\implies \\det A \\neq 0$, do đó $A$ khả nghịch. Đây là khẳng định đúng.
* Các phương án khác đều sai:
  * A sai: ví dụ ma trận lũy linh $A = \\begin{bmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix} \\neq 0$ nhưng $A^2 = 0$.
  * C sai: ví dụ ma trận chiếu $A = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix} \\neq 0$ có $A^2 = A$ nhưng $A \\neq I$.
  * D sai: tổng mỗi hàng bằng 0 thì véc tơ cột $(1, 1, 1)^T$ là nghiệm của $AX = 0$, suy ra $\\det A = 0$ (không khả nghịch).
* **Chọn đáp án: B.**"""
  }
]

print(f"Loaded first 10 questions of De 101.")

de101_questions.extend([
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 11,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^4 \\to \\mathbb{R}^3$ xác định bởi:\n$$f(x, y, z, t) = (x - 2y - z - t, \\, y + 2z + 3t, \\, x - y + 3z)$$\nSố chiều của $\\operatorname{Ker} f$ là:",
    "options": [
      {"key": "A", "text": "$4$"},
      {"key": "B", "text": "$2$"},
      {"key": "C", "text": "$1$"},
      {"key": "D", "text": "$3$"}
    ],
    "correct": "C",
    "explanation": """* Xét ma trận biểu diễn của $f$:
  $$A = \\begin{bmatrix} 1 & -2 & -1 & -1 \\\\ 0 & 1 & 2 & 3 \\\\ 1 & -1 & 3 & 0 \\end{bmatrix}$$
* Khử Gauss: $h_3 \\to h_3 - h_1$:
  $$\\begin{bmatrix} 0 & 1 & 4 & 1 \\end{bmatrix}$$
* $h_3 \\to h_3 - h_2$:
  $$\\begin{bmatrix} 0 & 0 & 2 & -2 \\end{bmatrix}$$
* Ma trận có 3 hàng khác 0, suy ra hạng $r(A) = 3$.
* Theo định lý số chiều:
  $$\\dim \\operatorname{Ker} f = \\dim \\mathbb{R}^4 - r(A) = 4 - 3 = 1$$
* **Chọn đáp án: C.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 12,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Cho $B = \\{(1, -3), \\, (-2, 4)\\}$ là một cơ sở của không gian véc tơ $\\mathbb{R}^2$. Ma trận chuyển từ cơ sở $B$ sang cơ sở chính tắc của $\\mathbb{R}^2$ là:",
    "options": [
      {"key": "A", "text": "$\\begin{bmatrix} -2 & -3/2 \\\\ -1 & -1/2 \\end{bmatrix}$"},
      {"key": "B", "text": "$\\begin{bmatrix} -2 & -1 \\\\ -3/2 & -1/2 \\end{bmatrix}$"},
      {"key": "C", "text": "$\\begin{bmatrix} 1 & -2 \\\\ -3 & 4 \\end{bmatrix}$"},
      {"key": "D", "text": "$\\begin{bmatrix} 4 & 2 \\\\ 3 & 1 \\end{bmatrix}$"}
    ],
    "correct": "B",
    "explanation": """* Ma trận chuyển từ cơ sở chính tắc $E$ sang cơ sở $B$ có các cột là tọa độ của các véc tơ trong $B$:
  $$P_{E \\to B} = \\begin{bmatrix} 1 & -2 \\\\ -3 & 4 \\end{bmatrix}$$
* Ma trận chuyển từ cơ sở $B$ sang cơ sở chính tắc $E$ là ma trận nghịch đảo:
  $$P_{B \\to E} = (P_{E \\to B})^{-1}$$
* Ta có $\\det P_{E \\to B} = 1(4) - (-2)(-3) = 4 - 6 = -2$.
* Nghịch đảo:
  $$(P_{E \\to B})^{-1} = -\\frac{1}{2} \\begin{bmatrix} 4 & 2 \\\\ 3 & 1 \\end{bmatrix} = \\begin{bmatrix} -2 & -1 \\\\ -3/2 & -1/2 \\end{bmatrix}$$
* **Chọn đáp án: B.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 13,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Với giá trị nào của $a$ thì $x = (1, 2, a)$ thuộc vào không gian con sinh bởi các véc tơ $(3, 1, 2), (-1, 1, -2), (2, -1, 3)$ của $\\mathbb{R}^3$?",
    "options": [
      {"key": "A", "text": "$a = -1$"},
      {"key": "B", "text": "$a \\neq 1$"},
      {"key": "C", "text": "$a = 1$"},
      {"key": "D", "text": "$a \\neq -1$"}
    ],
    "correct": "A",
    "explanation": """* Đặt $v_1 = (3, 1, 2), v_2 = (-1, 1, -2), v_3 = (2, -1, 3)$. Ta thấy:
  $$v_1 + v_2 = (2, 2, 0) = (2, -1, 3) + (0, 3, -3)$$
* Xét định thức lập bởi 3 véc tơ sinh:
  $$\\begin{vmatrix} 3 & -1 & 2 \\\\ 1 & 1 & -1 \\\\ 2 & -2 & 3 \\end{vmatrix} = 3(3 - 2) - (-1)(3 + 2) + 2(-2 - 2) = 3 + 5 - 8 = 0$$
  Suy ra 3 véc tơ này phụ thuộc tuyến tính, không gian sinh $W = \\operatorname{Span}\\{v_1, v_2\\}$ có số chiều bằng $2$.
* Véc tơ pháp tuyến của mặt phẳng $W$: $n = v_1 \\times v_2 = (-4, 4, 4) \\sim (1, -1, -1)$.
* Phương trình mặt phẳng $W$: $x - y - z = 0$.
* Để $x = (1, 2, a) \\in W$, tọa độ phải thỏa mãn phương trình:
  $$1 - 2 - a = 0 \\iff a = -1$$
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 14,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho $A$ là ma trận vuông cấp 3. Khẳng định nào dưới đây **không đúng**?",
    "options": [
      {"key": "A", "text": "$\\det(A^t A) = \\det(A^2)$"},
      {"key": "B", "text": "Nếu $A$ là ma trận tam giác và có một phần tử trên đường chéo chính bằng 0 thì $\\det A = 0$"},
      {"key": "C", "text": "$\\det(3A) = 3 \\det A$"},
      {"key": "D", "text": "$\\det(-A) = -\\det A$"}
    ],
    "correct": "C",
    "explanation": """* Với ma trận vuông $A$ cấp $n = 3$, theo tính chất định thức:
  $$\\det(kA) = k^n \\det A \\implies \\det(3A) = 3^3 \\det A = 27 \\det A$$
* Do đó khẳng định $\\det(3A) = 3 \\det A$ ở phương án C là **sai**.
* Các khẳng định khác đều đúng:
  * A đúng: $\\det(A^t A) = \\det(A^t) \\det A = (\\det A)^2 = \\det(A^2)$.
  * B đúng: định thức ma trận tam giác bằng tích các phần tử đường chéo chính.
  * D đúng: $\\det(-A) = (-1)^3 \\det A = -\\det A$.
* **Chọn đáp án: C.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 15,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Hệ véc tơ nào dưới đây sinh ra không gian véc tơ $P_2$ (không gian véc tơ các đa thức có bậc không vượt quá 2)?",
    "options": [
      {"key": "A", "text": "$\\{2 - t + 3t^2, \\, 4 - 2t + 6t^2, \\, 1 - 3t + 5t^2\\}$"},
      {"key": "B", "text": "$\\{1 + t^2, \\, 2 - t + t^2, \\, 4 - 3t + t^2\\}$"},
      {"key": "C", "text": "$\\{1 - 3t + 5t^2, \\, -3 + 8t - 2t^2\\}$"},
      {"key": "D", "text": "$\\{3 + t + 2t^2, \\, -1 + t - 2t^2, \\, -1 + 5t + 3t^2\\}$"}
    ],
    "correct": "D",
    "explanation": """* Vì $\\dim P_2 = 3$, một hệ 3 véc tơ sinh ra $P_2$ khi và chỉ khi nó độc lập tuyến tính (tức định thức ma trận tọa độ khác 0).
* Xét phương án D: Lập ma trận tọa độ theo cơ sở $\{1, t, t^2\}$:
  $$M = \\begin{bmatrix} 3 & -1 & -1 \\\\ 1 & 1 & 5 \\\\ 2 & -2 & 3 \\end{bmatrix}$$
  $$\\det M = 3(3 + 10) - (-1)(3 - 10) + (-1)(-2 - 2) = 39 - 7 + 4 = 36 \\neq 0$$
* Vì $\\det M \\neq 0$, hệ độc lập tuyến tính và là hệ sinh của $P_2$.
* Các phương án khác: A có véc tơ 2 gấp đôi véc tơ 1; B có $(4-3t+t^2) = 3(2-t+t^2) - 2(1+t^2)$; C chỉ có 2 véc tơ nên không thể sinh không gian 3 chiều.
* **Chọn đáp án: D.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 16,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Cho không gian véc tơ con của $\\mathbb{R}^4$:\n$$U = \\{(x, y, z, t) \\mid x + 2y + z - 3z = 0\\}$$\nKhẳng định nào dưới đây đúng?",
    "options": [
      {"key": "A", "text": "$\\dim U = 3$"},
      {"key": "B", "text": "$\\dim U = 1$"},
      {"key": "C", "text": "$\\dim U = 2$"},
      {"key": "D", "text": "$\\dim U = 4$"}
    ],
    "correct": "A",
    "explanation": """* Phương trình ràng buộc rút gọn thành: $x + 2y - 2z = 0$ (với $t$ hoàn toàn tự do).
* Trong không gian 4 chiều $\\mathbb{R}^4$, tập nghiệm của một phương trình tuyến tính thuần nhất khác không luôn có số chiều bằng:
  $$\\dim U = n - r = 4 - 1 = 3$$
* 3 ẩn tự do có thể chọn là $y, z, t$.
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 17,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Trong $\\mathbb{R}^3$, xét cơ sở trực giao:\n$$B = \\{u_1 = (1, 1, 1), \\, u_2 = (1, -1, 0), \\, u_3 = (1, 1, -2)\\}$$\nGiả sử tọa độ của véc tơ $u = (a, b, c)$ trong cơ sở $B$ là $(x, y, z)$. Khẳng định nào dưới đây đúng?",
    "options": [
      {"key": "A", "text": "$x = \\dfrac{a + b + c}{3}$"},
      {"key": "B", "text": "$x = a + b + c$"},
      {"key": "C", "text": "$x = \\dfrac{a + b + c}{\\sqrt{3}}$"},
      {"key": "D", "text": "$x = a$"}
    ],
    "correct": "A",
    "explanation": """* Vì $B$ là một cơ sở trực giao, tọa độ thứ nhất $x$ được tính trực tiếp bằng công thức hệ số Fourier:
  $$x = \\frac{\\langle u, u_1 \\rangle}{\\|u_1\\|^2} = \\frac{a(1) + b(1) + c(1)}{1^2 + 1^2 + 1^2} = \\frac{a + b + c}{3}$$
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 18,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Cho dạng song tuyến tính $\\eta: \\mathbb{R}^2 \\times \\mathbb{R}^2 \\to \\mathbb{R}$ xác định bởi:\n$$\\eta(u, v) = x_1 y_1 - 3x_1 y_2 + x_2 y_1 + 4x_2 y_2$$\ntrong đó $u = (x_1, x_2), v = (y_1, y_2) \\in \\mathbb{R}^2$. Khẳng định nào dưới đây đúng?",
    "options": [
      {"key": "A", "text": "$\\eta$ xác định dương nhưng không đối xứng"},
      {"key": "B", "text": "$\\eta$ đối xứng và xác định dương"},
      {"key": "C", "text": "$\\eta$ không đối xứng cũng không xác định dương"},
      {"key": "D", "text": "$\\eta$ đối xứng nhưng không xác định dương"}
    ],
    "correct": "A",
    "explanation": """* **Tính đối xứng:** Ma trận biểu diễn của $\\eta$ là $A = \\begin{bmatrix} 1 & -3 \\\\ 1 & 4 \\end{bmatrix}$. Vì $a_{12} = -3 \\neq a_{21} = 1$ nên $\\eta$ **không đối xứng**.
* **Tính xác định dương:** Với mọi $u = (x_1, x_2) \\neq (0, 0)$:
  $$\\eta(u, u) = x_1^2 - 3x_1 x_2 + x_2 x_1 + 4x_2^2 = x_1^2 - 2x_1 x_2 + 4x_2^2 = (x_1 - x_2)^2 + 3x_2^2 > 0$$
  Do đó $\\eta$ là **xác định dương**.
* Kết luận: $\\eta$ xác định dương nhưng không đối xứng.
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 19,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Với giá trị nào của $a$ thì hệ phương trình dưới đây có nghiệm **không tầm thường**?\n$$\\begin{cases} x + y - z = 0 \\\\ 2x + 4y + az = 0 \\\\ 3x + 11y + z = 0 \\end{cases}$$",
    "options": [
      {"key": "A", "text": "$a = -1$"},
      {"key": "B", "text": "$a = 1$"},
      {"key": "C", "text": "$a \\neq 1$"},
      {"key": "D", "text": "$a \\neq -1$"}
    ],
    "correct": "A",
    "explanation": """* Hệ phương trình thuần nhất vuông có nghiệm không tầm thường khi và chỉ khi định thức của ma trận hệ số bằng 0:
  $$\\det A = \\begin{vmatrix} 1 & 1 & -1 \\\\ 2 & 4 & a \\\\ 3 & 11 & 1 \\end{vmatrix} = 0$$
* Khai triển:
  $$\\det A = 1(4 - 11a) - 1(2 - 3a) - 1(22 - 12) = 4 - 11a - 2 + 3a - 10 = -8a - 8$$
* $\\det A = 0 \\iff -8a - 8 = 0 \\iff a = -1$.
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 20,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho các mệnh đề $p, q, r$. Mệnh đề nào dưới đây **không đúng**?",
    "options": [
      {"key": "A", "text": "$((p \\Rightarrow r) \\wedge (q \\Rightarrow r)) \\equiv ((p \\wedge q) \\Rightarrow r)$"},
      {"key": "B", "text": "$\\overline{p \\Rightarrow q} \\equiv (p \\wedge \\bar{q})$"},
      {"key": "C", "text": "$(p \\vee q) \\equiv (\\bar{p} \\Rightarrow q)$"},
      {"key": "D", "text": "$((p \\Rightarrow q) \\wedge (p \\Rightarrow r)) \\equiv (p \\Rightarrow (q \\wedge r))$"}
    ],
    "correct": "A",
    "explanation": """* Kiểm tra mệnh đề A:
  $$(p \\Rightarrow r) \\wedge (q \\Rightarrow r) \\equiv (\\bar{p} \\vee r) \\wedge (\\bar{q} \\vee r) \\equiv (\\bar{p} \\wedge \\bar{q}) \\vee r \\equiv \\overline{p \\vee q} \\vee r \\equiv (p \\vee q) \\Rightarrow r$$
* Vế phải phải là $(p \\vee q) \\Rightarrow r$, chứ không phải $(p \\wedge q) \\Rightarrow r$.
* Do đó phương án A là khẳng định **không đúng**.
* **Chọn đáp án: A.**"""
  }
])

print("Loaded up to question 20 of De 101.")

de101_questions.extend([
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 21,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Ánh xạ nào dưới đây là **toàn ánh**?",
    "options": [
      {"key": "A", "text": "$f: \\mathbb{N} \\to \\mathbb{N}, \\, f(n) = 2n$"},
      {"key": "B", "text": "$f: \\mathbb{R}^* \\to \\mathbb{R}, \\, f(x) = \\dfrac{1}{x}$"},
      {"key": "C", "text": "$f: \\mathbb{R} \\to \\mathbb{R}, \\, f(x) = x^2 + 2x$"},
      {"key": "D", "text": "$f: \\mathbb{R} \\to \\mathbb{R}, \\, f(x) = x^3 + 5$"}
    ],
    "correct": "D",
    "explanation": """* Xét phương án D: Với mọi $y \\in \\mathbb{R}$, phương trình $x^3 + 5 = y \\iff x = \\sqrt[3]{y - 5}$ luôn có nghiệm thực duy nhất $x \\in \\mathbb{R}$. Do đó $f$ là toàn ánh.
* Các phương án khác không toàn ánh:
  * A sai: ảnh của $f$ chỉ gồm các số chẵn, không nhận các số lẻ.
  * B sai: hàm số không bao giờ nhận giá trị $y = 0 \\in \\mathbb{R}$.
  * C sai: $x^2 + 2x = (x + 1)^2 - 1 \\ge -1$, không nhận các giá trị $y < -1$.
* **Chọn đáp án: D.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 22,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2, \\, f(x, y) = (3x + 2y, \\, 4x + y)$. Một cơ sở gồm các véc tơ riêng của $f$ là:",
    "options": [
      {"key": "A", "text": "$\\{v_1 = (1, -2), \\, v_2 = (1, -1)\\}$"},
      {"key": "B", "text": "$\\{v_1 = (-2, 1), \\, v_2 = (1, 1)\\}$"},
      {"key": "C", "text": "$\\{v_1 = (1, -2), \\, v_2 = (1, 1)\\}$"},
      {"key": "D", "text": "$\\{v_1 = (-2, 1), \\, v_2 = (1, -1)\\}$"}
    ],
    "correct": "C",
    "explanation": """* Ma trận của $f$ trong cơ sở chính tắc: $A = \\begin{bmatrix} 3 & 2 \\\\ 4 & 1 \\end{bmatrix}$.
* Phương trình đặc trưng:
  $$\\det(A - \\lambda I) = (3 - \\lambda)(1 - \\lambda) - 8 = \\lambda^2 - 4\\lambda - 5 = 0 \\iff \\lambda_1 = -1, \\, \\lambda_2 = 5$$
* Với $\\lambda_1 = -1$: giải $(A + I)v = 0 \\iff \\begin{bmatrix} 4 & 2 \\\\ 4 & 2 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = 0 \\iff 2x + y = 0$. Chọn $v_1 = (1, -2)$.
* Với $\\lambda_2 = 5$: giải $(A - 5I)v = 0 \\iff \\begin{bmatrix} -2 & 2 \\\\ 4 & -4 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = 0 \\iff x - y = 0$. Chọn $v_2 = (1, 1)$.
* Cơ sở gồm các véc tơ riêng: $\{v_1 = (1, -2), v_2 = (1, 1)\}$.
* **Chọn đáp án: C.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 23,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Ánh xạ $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ nào dưới đây **không là** một đẳng cấu?",
    "options": [
      {"key": "A", "text": "$f(x, y) = (2x + y, \\, -3x + 2y)$"},
      {"key": "B", "text": "$f(x, y) = (x + y, \\, -3x + y)$"},
      {"key": "C", "text": "$f(x, y) = (x - 2y, \\, -2x + 4y)$"},
      {"key": "D", "text": "$f(x, y) = (x + 4y, \\, -x + 2y)$"}
    ],
    "correct": "C",
    "explanation": """* Một toán tử tuyến tính trên $\\mathbb{R}^2$ là đẳng cấu khi và chỉ khi định thức của ma trận biểu diễn khác 0:
  * Xét phương án C: ma trận biểu diễn là $A = \\begin{bmatrix} 1 & -2 \\\\ -2 & 4 \\end{bmatrix}$.
  * Định thức $\\det A = 1(4) - (-2)(-2) = 4 - 4 = 0$.
  * Vì $\\det A = 0$, $f$ không khả nghịch, do đó **không là đẳng cấu**.
* **Chọn đáp án: C.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 24,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho hệ phương trình:\n$$\\begin{cases} x + y - z + t = 1 \\\\ 2x + y + 2z - 3t = -1 \\\\ z + 3t = 2 \\end{cases}$$\nKhẳng định nào dưới đây đúng?",
    "options": [
      {"key": "A", "text": "Hệ phương trình đã cho có nghiệm duy nhất"},
      {"key": "B", "text": "Hệ phương trình đã cho có vô số nghiệm phụ thuộc 1 tham số"},
      {"key": "C", "text": "Hệ phương trình đã cho có vô số nghiệm phụ thuộc 2 tham số"},
      {"key": "D", "text": "Hệ phương trình đã cho vô nghiệm"}
    ],
    "correct": "B",
    "explanation": """* Xét ma trận hệ số $A$ và ma trận mở rộng $\\bar{A}$:
  $$\\bar{A} = \\begin{bmatrix} 1 & 1 & -1 & 1 & 1 \\\\ 2 & 1 & 2 & -3 & -1 \\\\ 0 & 0 & 1 & 3 & 2 \\end{bmatrix}$$
* $h_2 \\to h_2 - 2h_1$:
  $$\\begin{bmatrix} 1 & 1 & -1 & 1 & 1 \\\\ 0 & -1 & 4 & -5 & -3 \\\\ 0 & 0 & 1 & 3 & 2 \\end{bmatrix}$$
* Cả 3 hàng đều khác 0 và có dạng bậc thang, suy ra $r(A) = r(\\bar{A}) = 3$.
* Hệ có nghiệm. Số ẩn là $n = 4$, số tham số tự do là $n - r = 4 - 3 = 1$.
* Vậy hệ có vô số nghiệm phụ thuộc 1 tham số.
* **Chọn đáp án: B.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 25,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho ánh xạ $f: \\mathbb{N} \\to \\mathbb{N}, \\, f(n) = n^2 + n$. Khẳng định nào dưới đây đúng?",
    "options": [
      {"key": "A", "text": "$f$ là đơn ánh nhưng không là toàn ánh"},
      {"key": "B", "text": "$f$ không là đơn ánh cũng không là toàn ánh"},
      {"key": "C", "text": "$f$ là song ánh"},
      {"key": "D", "text": "$f$ là toàn ánh nhưng không là đơn ánh"}
    ],
    "correct": "A",
    "explanation": """* **Đơn ánh:** Giả sử $f(n_1) = f(n_2) \\iff n_1^2 + n_1 = n_2^2 + n_2 \\iff (n_1 - n_2)(n_1 + n_2 + 1) = 0$.
  Vì $n_1, n_2 \\in \\mathbb{N}$ nên $n_1 + n_2 + 1 \\ge 1 > 0$, suy ra $n_1 = n_2$. Vậy $f$ là **đơn ánh**.
* **Toàn ánh:** Với $y = 1 \\in \\mathbb{N}$, phương trình $n^2 + n = 1$ không có nghiệm trong $\\mathbb{N}$. Do đó $f$ **không là toàn ánh**.
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 26,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho $D = \\begin{vmatrix} 1 & -2 & 0 & 0 \\\\ 3 & 4 & -1 & 2 \\\\ a & b & 0 & 0 \\\\ 1 & 2 & 3 & 4 \\end{vmatrix}$. Khẳng định nào dưới đây đúng?",
    "options": [
      {"key": "A", "text": "$D = -10(2a + b)$"},
      {"key": "B", "text": "$D = 10(2a - b)$"},
      {"key": "C", "text": "$D = 10(2a + b)$"},
      {"key": "D", "text": "$D = 10(b - 2a)$"}
    ],
    "correct": "C",
    "explanation": """* Khai triển định thức Laplace theo các hàng $1$ và $3$ (chỉ có cột $1$ và cột $2$ khác 0):
  $$D = (-1)^{(1+3)+(1+2)} \\begin{vmatrix} 1 & -2 \\\\ a & b \\end{vmatrix} \\cdot \\begin{vmatrix} -1 & 2 \\\\ 3 & 4 \\end{vmatrix}$$
* Ta có:
  * $(-1)^7 = -1$.
  * $\\begin{vmatrix} 1 & -2 \\\\ a & b \\end{vmatrix} = b - (-2a) = 2a + b$.
  * $\\begin{vmatrix} -1 & 2 \\\\ 3 & 4 \\end{vmatrix} = (-1)(4) - 2(3) = -4 - 6 = -10$.
* Do đó:
  $$D = (-1) \\cdot (2a + b) \\cdot (-10) = 10(2a + b)$$
* **Chọn đáp án: C.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 27,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho hệ phương trình:\n$$\\begin{cases} x + y - z = 1 \\\\ 2x + 3y + mz = 3 \\\\ x + my + 3z = 2 \\end{cases}$$\nKhẳng định nào dưới đây đúng?",
    "options": [
      {"key": "A", "text": "Nếu $m = 2$ thì hệ phương trình đã cho vô nghiệm"},
      {"key": "B", "text": "Nếu $m \\neq 2$ và $m \\neq -3$ thì hệ phương trình đã cho có nghiệm duy nhất"},
      {"key": "C", "text": "Nếu $m \\neq 2$ và $m \\neq 3$ thì hệ phương trình đã cho có nghiệm duy nhất"},
      {"key": "D", "text": "Nếu $m = 3$ thì hệ phương trình đã cho có vô số nghiệm"}
    ],
    "correct": "B",
    "explanation": """* Tính định thức ma trận hệ số $A$:
  $$\\det A = \\begin{vmatrix} 1 & 1 & -1 \\\\ 2 & 3 & m \\\\ 1 & m & 3 \\end{vmatrix} = 1(9 - m^2) - 1(6 - m) - 1(2m - 3) = -m^2 - m + 6$$
* Giải $\\det A = 0 \\iff m^2 + m - 6 = 0 \\iff (m - 2)(m + 3) = 0 \\iff m = 2$ hoặc $m = -3$.
* Theo quy tắc Cramer, hệ có nghiệm duy nhất khi và chỉ khi $\\det A \\neq 0 \\iff m \\neq 2$ và $m \\neq -3$.
* **Chọn đáp án: B.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 28,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho $A, B, C$ là các tập con của tập hợp $E$. Khẳng định nào dưới đây **không đúng**?",
    "options": [
      {"key": "A", "text": "$A \\cap (B \\setminus A) = \\emptyset$"},
      {"key": "B", "text": "$(A \\cap B \\cap C) \\subset (B \\cap C)$"},
      {"key": "C", "text": "$(A \\setminus C) \\cap (C \\setminus B) = \\emptyset$"},
      {"key": "D", "text": "Nếu $A \\cup C = B \\cup C$ thì $A = B$"}
    ],
    "correct": "D",
    "explanation": """* Phản ví dụ cho khẳng định D: Chọn $A = \\{1\\}, B = \\{2\\}, C = \\{1, 2\\}$.
  * Khi đó $A \\cup C = \\{1, 2\\} = B \\cup C$, nhưng rõ ràng $A \\neq B$.
  * Do đó khẳng định D là **không đúng**.
* Các khẳng định A, B, C đều đúng theo định nghĩa giao, hiệu và tập con.
* **Chọn đáp án: D.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 29,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Ánh xạ nào dưới đây là **ánh xạ tuyến tính**?",
    "options": [
      {"key": "A", "text": "$f: P_2 \\to P_2, \\, f(a_0 + a_1 x + a_2 x^2) = a_0 + a_1 - (2a_0 + 1)x + (a_1 + a_2)x^2$"},
      {"key": "B", "text": "$f: \\mathbb{R}^3 \\to \\mathbb{R}, \\, f(x, y, z) = 2x + 3y - z^2$"},
      {"key": "C", "text": "$f: P_2 \\to P_2, \\, f(a_0 + a_1 x + a_2 x^2) = a_1 - 2a_0 x + (a_1 + a_2)x^2$"},
      {"key": "D", "text": "$f: \\mathbb{R}^3 \\to \\mathbb{R}^3, \\, f(x, y, z) = (xy, \\, 2y - z, \\, x + y - 3z)$"}
    ],
    "correct": "C",
    "explanation": """* Xét phương án C: Các hệ số của đa thức ảnh là $a_1, -2a_0, a_1 + a_2$ đều là biểu thức bậc nhất thuần nhất đối với các tọa độ $(a_0, a_1, a_2)$, và $f(0) = 0$. Do đó $f$ là ánh xạ tuyến tính.
* Các phương án khác vi phạm:
  * A sai vì có số hạng tự do $+1$ ở hệ số của $x$ ($f(0) = -x \\neq 0$).
  * B sai vì có số hạng bậc hai $-z^2$.
  * D sai vì có tích hai biến $xy$.
* **Chọn đáp án: C.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 30,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho ánh xạ tuyến tính $f: P_2 \\to P_2$ xác định bởi:\n$$f(a_0 + a_1 x + a_2 x^2) = (a_0 + a_1 + m a_2) + (a_0 + m a_1 + a_2)x + (m a_0 + a_1 + a_2)x^2$$\nTìm $m$ để $\\dim(\\operatorname{Im} f) = 2$:",
    "options": [
      {"key": "A", "text": "$m \\neq 1$ và $m \\neq -2$"},
      {"key": "B", "text": "$m = -2$"},
      {"key": "C", "text": "$m = 1$"},
      {"key": "D", "text": "$m = 1$ hoặc $m = -2$"}
    ],
    "correct": "B",
    "explanation": """* Ma trận của $f$ trong cơ sở chính tắc $\{1, x, x^2\}$:
  $$A = \\begin{bmatrix} 1 & 1 & m \\\\ 1 & m & 1 \\\\ m & 1 & 1 \\end{bmatrix}$$
* Ta có $\\dim(\\operatorname{Im} f) = r(A)$. Để $r(A) = 2$, ma trận phải có $\\det A = 0$ và ít nhất một định thức con cấp 2 khác 0.
* Tính định thức:
  $$\\det A = -(m - 1)^2 (m + 2)$$
  * Nếu $m = 1$: ma trận có 3 hàng giống hệt nhau $\\implies r(A) = 1$.
  * Nếu $m = -2$: $\\det A = 0$ và $\\begin{vmatrix} 1 & 1 \\\\ 1 & -2 \\end{vmatrix} = -3 \\neq 0 \\implies r(A) = 2$.
* Vậy điều kiện để $\\dim(\\operatorname{Im} f) = 2$ là $m = -2$.
* **Chọn đáp án: B.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 31,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận $A = \\begin{bmatrix} m - 1 & 3 & -3 \\\\ -3 & m + 5 & -3 \\\\ 5 & -5 & m - 2 \\end{bmatrix}$. Điều kiện cần và đủ để $A$ có ma trận nghịch đảo là:",
    "options": [
      {"key": "A", "text": "$m \\neq 2$ và $m \\neq -2$"},
      {"key": "B", "text": "$m \\neq -2$ và $m \\neq 1$"},
      {"key": "C", "text": "$m = 2$ hoặc $m = -2$"},
      {"key": "D", "text": "$m = -2$ hoặc $m = 1$"}
    ],
    "correct": "A",
    "explanation": """* Ma trận vuông $A$ khả nghịch khi và chỉ khi $\\det A \\neq 0$.
* Tính định thức $\\det A$:
  * Thực hiện phép biến đổi hàng $h_1 \\to h_1 + h_3$:
    $$\\begin{bmatrix} m + 4 & -2 & m - 5 \\\\ -3 & m + 5 & -3 \\\\ 5 & -5 & m - 2 \\end{bmatrix}$$
  * Khai triển hoặc tính định thức ta thu được:
    $$\\det A = (m - 2)(m + 2)^2$$
  * Phương trình $\\det A = 0$ có các nghiệm $m = \\pm 2$.
  * Do đó điều kiện để $A$ có ma trận nghịch đảo là $m \\neq 2$ và $m \\neq -2$.
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 32,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Khẳng định nào dưới đây **không đúng**?",
    "options": [
      {"key": "A", "text": "$\\emptyset \\in \\{x\\}$"},
      {"key": "B", "text": "$\\emptyset \\in \\{\\emptyset, \\, \\{\\emptyset\\}\\}$"},
      {"key": "C", "text": "$\\{x\\} \\in \\{\\{x\\}\\}$"},
      {"key": "D", "text": "$x \\in \\{x\\}$"}
    ],
    "correct": "A",
    "explanation": """* Tập hợp $\{x\}$ chỉ có một phần tử duy nhất là $x$.
* Với $x$ bất kỳ, tập rỗng $\\emptyset$ là tập con của $\{x\}$ (tức $\\emptyset \\subset \\{x\\}$), chứ $\\emptyset$ không phải là một phần tử thuộc $\{x\}$ (tức $\\emptyset \\notin \\{x\\}$).
* Do đó khẳng định A là **không đúng**.
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 33,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Cho các tập con của không gian véc tơ $\\mathbb{R}^3$:\n$$A = \\{(x, y, z) \\mid xz \\ge 0\\}, \\quad B = \\{(x, y, z) \\mid x = 2z\\}$$\nKhẳng định nào dưới đây đúng?",
    "options": [
      {"key": "A", "text": "$A$ và $B$ không là các không gian véc tơ con của $\\mathbb{R}^3$"},
      {"key": "B", "text": "Chỉ có $A$ là không gian véc tơ con của $\\mathbb{R}^3$"},
      {"key": "C", "text": "Chỉ có $B$ là không gian véc tơ con của $\\mathbb{R}^3$"},
      {"key": "D", "text": "$A$ và $B$ là các không gian véc tơ con của $\\mathbb{R}^3$"}
    ],
    "correct": "C",
    "explanation": """* Xét tập $A$: Chọn $u = (2, 0, 1) \\in A$ (vì $2 \\cdot 1 = 2 \\ge 0$) và $v = (-1, 0, -3) \\in A$ (vì $(-1)(-3) = 3 \\ge 0$).
  * Nhưng tổng $u + v = (1, 0, -2)$ có tích $xz = 1 \\cdot (-2) = -2 < 0 \\implies u + v \\notin A$.
  * Vậy $A$ không đóng kín với phép cộng, nên $A$ không phải là không gian con.
* Xét tập $B$: Phương trình $x - 2z = 0$ là phương trình tuyến tính thuần nhất (mặt phẳng đi qua gốc tọa độ), nên $B$ là một không gian véc tơ con của $\\mathbb{R}^3$.
* Kết luận: Chỉ có $B$ là không gian véc tơ con của $\\mathbb{R}^3$.
* **Chọn đáp án: C.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 34,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho ma trận $A = \\begin{bmatrix} 8 & -2 & 2 \\\\ -2 & 5 & 4 \\\\ 2 & 4 & 5 \\end{bmatrix}$. Biết $\\lambda = 9$ là một giá trị riêng của $A$. Khẳng định nào dưới đây **không đúng**?",
    "options": [
      {"key": "A", "text": "$(3, 2, 3)$ là một véc tơ riêng ứng với giá trị riêng $\\lambda = 9$"},
      {"key": "B", "text": "$(2, 1, 2)$ là một véc tơ riêng ứng với giá trị riêng $\\lambda = 9$"},
      {"key": "C", "text": "$(-2, 1, 0)$ là một véc tơ riêng ứng với giá trị riêng $\\lambda = 9$"},
      {"key": "D", "text": "Không gian riêng ứng với giá trị riêng $\\lambda = 9$ có số chiều là 2"}
    ],
    "correct": "A",
    "explanation": """* Véc tơ $v$ là véc tơ riêng ứng với $\\lambda = 9$ khi và chỉ khi $(A - 9I)v = 0$.
* Ta có $A - 9I = \\begin{bmatrix} -1 & -2 & 2 \\\\ -2 & -4 & 4 \\\\ 2 & 4 & -4 \\end{bmatrix}$.
* Cả 3 hàng đều tỉ lệ với $(-1, -2, 2)$, tương đương với phương trình: $-x - 2y + 2z = 0$.
  * Kiểm tra $(2, 1, 2)$: $-2 - 2(1) + 2(2) = 0$ (thỏa mãn $\\implies$ là véc tơ riêng).
  * Kiểm tra $(-2, 1, 0)$: $-(-2) - 2(1) + 0 = 0$ (thỏa mãn $\\implies$ là véc tơ riêng).
  * Kiểm tra $(3, 2, 3)$: $-3 - 2(2) + 2(3) = -1 \\neq 0$ (KHÔNG thỏa mãn).
* Vậy $(3, 2, 3)$ không phải là véc tơ riêng, khẳng định A là **không đúng**.
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 35,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Cho tích vô hướng trên không gian véc tơ $\\mathbb{R}^2$ xác định bởi:\n$$\\eta(u, v) = x_1 y_1 - 2x_1 y_2 - 2x_2 y_1 + 5x_2 y_2$$\ntrong đó $u = (x_1, x_2), v = (y_1, y_2) \\in \\mathbb{R}^2$. Xét véc tơ $v = (1, 2)$. Khẳng định nào dưới đây đúng?",
    "options": [
      {"key": "A", "text": "$\\|v\\| = \\sqrt{13}$"},
      {"key": "B", "text": "$\\|v\\| = 13$"},
      {"key": "C", "text": "$\\|v\\| = \\sqrt{5}$"},
      {"key": "D", "text": "$\\|v\\| = 1$"}
    ],
    "correct": "A",
    "explanation": """* Chuẩn (độ dài) của véc tơ $v$ cảm sinh bởi tích vô hướng $\\eta$ được tính bởi:
  $$\\|v\\| = \\sqrt{\\eta(v, v)}$$
* Thay $v = (1, 2)$ vào biểu thức:
  $$\\eta(v, v) = 1(1) - 2(1)(2) - 2(2)(1) + 5(2)(2) = 1 - 4 - 4 + 20 = 13$$
* Suy ra $\\|v\\| = \\sqrt{13}$.
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 36,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Ký hiệu $r(A)$ là hạng của ma trận $A = \\begin{bmatrix} 1 & -2 & 0 & 0 \\\\ 3 & 4 & -1 & 2 \\\\ 1 & -1 & 0 & 0 \\\\ 1 & m & m^2 & m^3 \\end{bmatrix}$. Khẳng định nào dưới đây đúng?",
    "options": [
      {"key": "A", "text": "$r(A) = 3$ nếu $m = 0$ hoặc $m = -2$; $r(A) = 4$ nếu $m \\neq 0$ và $m \\neq -2$"},
      {"key": "B", "text": "$r(A) = 3$ nếu $m = 0$; $r(A) = 4$ nếu $m \\neq 0$"},
      {"key": "C", "text": "$r(A) = 3$ nếu $m = 0$ hoặc $m = 2$; $r(A) = 4$ nếu $m \\neq 0$ và $m \\neq 2$"},
      {"key": "D", "text": "$r(A) = 2$ nếu $m = 0$ hoặc $m = -2$; $r(A) = 4$ nếu $m \\neq 0$ và $m \\neq -2$"}
    ],
    "correct": "A",
    "explanation": """* Khai triển định thức $\\det A$ theo hàng $1$ và hàng $3$ (hoặc tính định thức của $A$):
  $$\\det A = 2m^2(m + 2)$$
* Do đó:
  * Nếu $m \\neq 0$ và $m \\neq -2$ thì $\\det A \\neq 0 \\implies r(A) = 4$.
  * Nếu $m = 0$ hoặc $m = -2$ thì $\\det A = 0$. Mặt khác định thức con cấp 3 tạo bởi 3 hàng đầu khác 0:
    $$\\begin{vmatrix} 1 & -2 & 0 \\\\ 3 & 4 & -1 \\\\ 1 & -1 & 0 \\end{vmatrix} = -(-1) \\begin{vmatrix} 1 & -2 \\\\ 1 & -1 \\end{vmatrix} = -1 + 2 = 1 \\neq 0$$
    Do đó hạng luôn bằng 3 khi $\\det A = 0$.
* Kết luận: $r(A) = 3$ nếu $m = 0$ hoặc $m = -2$; $r(A) = 4$ nếu $m \\neq 0$ và $m \\neq -2$.
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 37,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho một hệ phương trình tuyến tính có ma trận hệ số và ma trận bổ sung lần lượt là $A, \\bar{A}$. Giả sử $A$ là ma trận cỡ $5 \\times 7$ và $r(A) = r(\\bar{A}) = 4$. Khẳng định nào dưới đây đúng?",
    "options": [
      {"key": "A", "text": "Hệ phương trình đã cho có nghiệm duy nhất"},
      {"key": "B", "text": "Hệ phương trình đã cho có vô số nghiệm phụ thuộc 3 tham số"},
      {"key": "C", "text": "Hệ phương trình đã cho có vô số nghiệm phụ thuộc 4 tham số"},
      {"key": "D", "text": "Hệ phương trình đã cho có vô số nghiệm phụ thuộc 1 tham số"}
    ],
    "correct": "B",
    "explanation": """* Ma trận hệ số $A$ có cỡ $5 \\times 7$ nên số ẩn số là $n = 7$.
* Giả thiết $r(A) = r(\\bar{A}) = 4$, theo định lý Kronecker - Capelli:
  * Vì $r(A) = r(\\bar{A})$ nên hệ có nghiệm.
  * Vì $r(A) = 4 < 7$ (số ẩn), hệ có vô số nghiệm.
  * Số tham số tự do của nghiệm là:
    $$k = n - r(A) = 7 - 4 = 3$$
* Do đó hệ phương trình có vô số nghiệm phụ thuộc 3 tham số.
* **Chọn đáp án: B.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 38,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉC TƠ",
    "question": "Cho $W_1, W_2$ là các không gian véc tơ con của $\\mathbb{R}^3$. Khẳng định nào dưới đây **không đúng**?",
    "options": [
      {"key": "A", "text": "Nếu $W_1 = \\{(x, y, 0) \\mid x, y \\in \\mathbb{R}\\}; \\, W_2 = \\{(x, y, z) \\mid x - y + 2z = 0\\}$ thì $\\mathbb{R}^3 = W_1 \\oplus W_2$"},
      {"key": "B", "text": "$W_1 + W_2$ là tổng trực tiếp khi và chỉ khi $\\dim(W_1 \\cap W_2) = 0$"},
      {"key": "C", "text": "Nếu $W_1 = \\{(x, y, 0) \\mid x, y \\in \\mathbb{R}\\}; \\, W_2 = \\{(0, y, y) \\mid y \\in \\mathbb{R}\\}$ thì $\\mathbb{R}^3 = W_1 \\oplus W_2$"},
      {"key": "D", "text": "Nếu $\\mathbb{R}^3 = W_1 \\oplus W_2$ thì $\\dim W_1 + \\dim W_2 = 3$"}
    ],
    "correct": "A",
    "explanation": """* Xét phương án A:
  * $W_1$ là mặt phẳng $z = 0$, có $\\dim W_1 = 2$.
  * $W_2$ là mặt phẳng $x - y + 2z = 0$, có $\\dim W_2 = 2$.
  * Giao $W_1 \\cap W_2$ gồm các véc tơ thỏa mãn $z = 0$ và $x - y = 0 \\implies x = y$.
  * Véc tơ $(1, 1, 0) \\in W_1 \\cap W_2 \\implies W_1 \\cap W_2 \\neq \\{\\vec{0}\\}$.
  * Vì giao khác $\{\\vec{0}\}$ (có số chiều bằng 1), $W_1 + W_2$ không thể là tổng trực tiếp $W_1 \\oplus W_2$.
* Do đó khẳng định A là **không đúng**.
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 39,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận $A = \\begin{bmatrix} 1 & -1 & 1 \\\\ 0 & 0 & 3 \\\\ 4 & 2 & 0 \\end{bmatrix}$. Phần tử ở vị trí hàng 2, cột 1 của ma trận $A^{-1}$ là:",
    "options": [
      {"key": "A", "text": "$-\\dfrac{1}{9}$"},
      {"key": "B", "text": "$-\\dfrac{2}{3}$"},
      {"key": "C", "text": "$\\dfrac{2}{3}$"},
      {"key": "D", "text": "$\\dfrac{1}{9}$"}
    ],
    "correct": "B",
    "explanation": """* Phần tử hàng 2, cột 1 của ma trận nghịch đảo $A^{-1}$ là:
  $$(A^{-1})_{21} = \\frac{C_{12}}{\\det A} = \\frac{(-1)^{1+2} M_{12}}{\\det A}$$
* Tính định thức $\\det A$ (khai triển theo hàng 2):
  $$\\det A = -3 \\begin{vmatrix} 1 & -1 \\\\ 4 & 2 \\end{vmatrix} = -3(2 - (-4)) = -3(6) = -18$$
* Tính $C_{12}$ (phần phụ đại số hàng 1, cột 2):
  $$C_{12} = (-1)^3 \\begin{vmatrix} 0 & 3 \\\\ 4 & 0 \\end{vmatrix} = -(0 - 12) = 12$$
* Do đó:
  $$(A^{-1})_{21} = \\frac{12}{-18} = -\\frac{2}{3}$$
* **Chọn đáp án: B.**"""
  },
  {
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "examQuestionNo": 40,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho một hệ phương trình tuyến tính thuần nhất gồm 3 phương trình, 6 ẩn. Khẳng định nào dưới đây đúng?",
    "options": [
      {"key": "A", "text": "Hệ phương trình đã cho có nghiệm duy nhất"},
      {"key": "B", "text": "Hệ phương trình đã cho có vô số nghiệm"},
      {"key": "C", "text": "Hệ phương trình đã cho vô nghiệm"},
      {"key": "D", "text": "Không có đủ thông tin để kết luận về số nghiệm của hệ phương trình đã cho"}
    ],
    "correct": "B",
    "explanation": """* Hệ phương trình thuần nhất luôn luôn có nghiệm tầm thường $X = \\vec{0}$, nên không bao giờ vô nghiệm (loại C).
* Ma trận hệ số $A$ có cỡ $3 \\times 6$, suy ra hạng $r(A) \\le 3$.
* Số ẩn là $n = 6$.
* Vì $r(A) \\le 3 < 6$ nên số chiều không gian nghiệm $\\dim S = n - r(A) \\ge 6 - 3 = 3 > 0$.
* Do đó hệ luôn có vô số nghiệm phụ thuộc vào ít nhất 3 tham số tự do.
* **Chọn đáp án: B.**"""
  }
])

with open("data/de101.json", "w", encoding="utf-8") as f:
    json.dump(de101_questions, f, ensure_ascii=False, indent=2)

print(f"Successfully wrote {len(de101_questions)} questions of De 101 to data/de101.json")
