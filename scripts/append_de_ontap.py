# -*- coding: utf-8 -*-
import json

part2_questions = [
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 26,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉCTƠ",
    "question": "Tìm tất cả các giá trị của $m$ để $u = (7, -2, m)$ biểu diễn được thành tổ hợp tuyến tính của $v_1(2, 3, 5), v_2(3, 7, 8), v_3(1, -6, 1)$:",
    "options": [
      {"key": "A", "text": "$m = 2$"},
      {"key": "B", "text": "$m = 15$"},
      {"key": "C", "text": "$m \\neq 15$"},
      {"key": "D", "text": "$m \\neq 2$"}
    ],
    "correct": "B",
    "explanation": r"""* $u$ biểu diễn được thành tổ hợp tuyến tính của $\{v_1, v_2, v_3\}$ khi và chỉ khi hệ phương trình $c_1 v_1 + c_2 v_2 + c_3 v_3 = u$ có nghiệm:
  $$\begin{cases} 2c_1 + 3c_2 + c_3 = 7 \\ 3c_1 + 7c_2 - 6c_3 = -2 \\ 5c_1 + 8c_2 + c_3 = m \end{cases}$$
* Xét ma trận hệ số mở rộng $\bar{A}$:
  $$\bar{A} = \begin{bmatrix} 2 & 3 & 1 & 7 \\ 3 & 7 & -6 & -2 \\ 5 & 8 & 1 & m \end{bmatrix}$$
* Nhận xét: $5 \cdot (\text{Hàng 3} - \text{Hàng 1}) = 5(3, 5, 0, m - 7) = (15, 25, 0, 5m - 35)$.
* Mặt khác: $6 \cdot \text{Hàng 1} + \text{Hàng 2} = (12, 18, 6, 42) + (3, 7, -6, -2) = (15, 25, 0, 40)$.
* Để hệ có nghiệm thì hàng thứ 3 phải có $5m - 35 = 40 \iff 5m = 75 \iff m = 15$.
* Khi $m = 15$, $r(A) = r(\bar{A}) = 2$, hệ có nghiệm.
* **Chọn đáp án: B.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 27,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Tìm tất cả $m$ để hệ phương trình sau vô nghiệm:\n$$\\begin{cases} x + y + z + t = 1 \\\\ 2x + 3y + 4z - t = 3 \\\\ 3x + y + 2z + 5t = 2 \\\\ 4x + 6y + 3z + mt = 1 \\end{cases}$$",
    "options": [
      {"key": "A", "text": "$m = 5$"},
      {"key": "B", "text": "$m = \\dfrac{14}{3}$"},
      {"key": "C", "text": "Không tồn tại $m$"},
      {"key": "D", "text": "$m = 3$"}
    ],
    "correct": "B",
    "explanation": r"""* Lập ma trận mở rộng và khử Gauss:
  $$\bar{A} = \begin{bmatrix} 1 & 1 & 1 & 1 & 1 \\ 2 & 3 & 4 & -1 & 3 \\ 3 & 1 & 2 & 5 & 2 \\ 4 & 6 & 3 & m & 1 \end{bmatrix}$$
* Lấy $h_2 - 2h_1$, $h_3 - 3h_1$, $h_4 - 4h_1$:
  $$\begin{bmatrix} 1 & 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & -3 & 1 \\ 0 & -2 & -1 & 2 & -1 \\ 0 & 2 & -1 & m-4 & -3 \end{bmatrix}$$
* Lấy $h_3 + 2h_2$, $h_4 - 2h_2$:
  $$\begin{bmatrix} 1 & 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & -3 & 1 \\ 0 & 0 & 3 & -4 & 1 \\ 0 & 0 & -5 & m+2 & -5 \end{bmatrix}$$
* Lấy $3h_4 + 5h_3$:
  Hàng cuối thành: $\begin{bmatrix} 0 & 0 & 0 & 3(m+2) + 5(-4) & 3(-5) + 5(1) \end{bmatrix} = \begin{bmatrix} 0 & 0 & 0 & 3m - 14 & -10 \end{bmatrix}$.
* Hệ vô nghiệm khi và chỉ khi $r(A) < r(\bar{A}) \iff 3m - 14 = 0 \iff m = \dfrac{14}{3}$.
* **Chọn đáp án: B.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 28,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉCTƠ",
    "question": "Đặt $V_1, V_2$ lần lượt là hai không gian véctơ con của $\\mathbb{R}^4$ gồm các véctơ $v = (x_1, x_2, x_3, x_4)$ thoả mãn hệ phương trình (I) và hệ phương trình (II):\n$$(I) = \\begin{cases} 4x_1 + 5x_2 - 2x_3 + 3x_4 = 0 \\\\ 3x_1 + 5x_2 + 6x_3 - 4x_4 = 0 \\\\ x_1 + 2x_2 + 4x_3 - 3x_4 = 0 \\end{cases}, \\quad (II) = \\begin{cases} 2x_1 - 3x_2 - 3x_3 - 2x_4 = 0 \\\\ 4x_1 - 7x_2 - 5x_3 - 6x_4 = 0 \\\\ x_1 - 2x_2 - x_3 - 2x_4 = 0 \\end{cases}$$\nTìm số chiều của không gian con $V_1 + V_2$:",
    "options": [
      {"key": "A", "text": "$\\dim(V_1 + V_2) = 2$"},
      {"key": "B", "text": "$\\dim(V_1 + V_2) = 3$"},
      {"key": "C", "text": "$\\dim(V_1 + V_2) = 1$"},
      {"key": "D", "text": "$\\dim(V_1 + V_2) = 4$"}
    ],
    "correct": "B",
    "explanation": r"""* Áp dụng công thức số chiều Grassman:
  $$\dim(V_1 + V_2) = \dim V_1 + \dim V_2 - \dim(V_1 \cap V_2)$$
* **Tính $\dim V_1$:** Biến đổi ma trận hệ số của hệ (I):
  Hạng ma trận $r(A_1) = 2 \implies \dim V_1 = 4 - r(A_1) = 4 - 2 = 2$.
* **Tính $\dim V_2$:** Biến đổi ma trận hệ số của hệ (II):
  Hạng ma trận $r(A_2) = 2 \implies \dim V_2 = 4 - r(A_2) = 4 - 2 = 2$.
* **Tính $\dim(V_1 \cap V_2)$:** $V_1 \cap V_2$ là không gian nghiệm của hệ gồm cả 6 phương trình của (I) và (II).
  Khử Gauss cho ma trận ghép gồm các hàng độc lập của (I) và (II) ta được hạng của hệ ghép là $r(A_1 \cup A_2) = 3$.
  Do đó $\dim(V_1 \cap V_2) = 4 - 3 = 1$.
* Vậy $\dim(V_1 + V_2) = 2 + 2 - 1 = 3$.
* **Chọn đáp án: B.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 29,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG VÀ KHÔNG GIAN EUCLID",
    "question": "Cho dạng toàn phương $Q: \\mathbb{R}^3 \\to \\mathbb{R}$ xác định bởi:\n$$Q(x, y, z) = 4x^2 + 3y^2 - 8z^2 - 8xy + 8xz - 4yz$$\nTìm một dạng chính tắc của dạng toàn phương trên. Khẳng định nào đúng?",
    "options": [
      {"key": "A", "text": "$Q(x,y,z) = 4X^2 - Y^2 - 8Z^2$"},
      {"key": "B", "text": "$Q(x,y,z) = 4X^2 + Y^2 + 8Z^2$"},
      {"key": "C", "text": "$Q(x,y,z) = X^2 + Y^2 - Z^2$"},
      {"key": "D", "text": "$Q(x,y,z) = 4X^2 + Y^2 - 8Z^2$"}
    ],
    "correct": "A",
    "explanation": r"""* Áp dụng phương pháp Lagrange làm xuất hiện bình phương đủ:
  $$Q(x,y,z) = 4x^2 - 8x(y - z) + 3y^2 - 8z^2 - 4yz$$
  $$= 4[x^2 - 2x(y - z) + (y - z)^2] - 4(y - z)^2 + 3y^2 - 8z^2 - 4yz$$
  $$= 4(x - y + z)^2 - 4(y^2 - 2yz + z^2) + 3y^2 - 8z^2 - 4yz$$
  $$= 4(x - y + z)^2 - y^2 + 4yz - 12z^2$$
  $$= 4(x - y + z)^2 - (y^2 - 4yz + 4z^2) - 8z^2$$
  $$= 4(x - y + z)^2 - (y - 2z)^2 - 8z^2$$
* Đặt phép biến đổi tọa độ không suy biến:
  $$\begin{cases} X = x - y + z \\ Y = y - 2z \\ Z = z \end{cases}$$
* Khi đó ta thu được dạng chính tắc:
  $$Q(x,y,z) = 4X^2 - Y^2 - 8Z^2$$
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 30,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉCTƠ",
    "question": "Tìm cơ sở của không gian véctơ $\\mathbb{R}^3$ trong các hệ véctơ dưới đây, khẳng định nào đúng?",
    "options": [
      {"key": "A", "text": r"Hệ $\{(0, 2, -2), (-3, 5, -1), (-3, 7, -3)\}$ là cơ sở"},
      {"key": "B", "text": r"Hệ $\{(2, -1, -1), (5, 7, -13), (-4, 2, 2)\}$ là cơ sở"},
      {"key": "C", "text": r"Hệ $\{(1, 1, 0), (1, 0, 1), (0, 1, 1)\}$ là cơ sở"},
      {"key": "D", "text": r"Hệ $\{(-1, 1, 0), (1, 0, 1), (-1, 0, -1)\}$ là cơ sở"}
    ],
    "correct": "C",
    "explanation": r"""* Một hệ gồm 3 véctơ trong $\mathbb{R}^3$ là cơ sở của $\mathbb{R}^3$ khi và chỉ khi định thức ma trận tạo bởi tọa độ 3 véctơ đó khác $0$.
* Xét hệ ở phương án **C**:
  $$\det \begin{bmatrix} 1 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \end{bmatrix} = 1(0 - 1) - 1(1 - 0) + 0 = -2 \neq 0$$
  Do đó hệ gồm 3 véctơ độc lập tuyến tính, nên là một cơ sở của $\mathbb{R}^3$.
* Kiểm tra các phương án còn lại:
  * Phương án A: $(0, 2, -2) + (-3, 5, -1) = (-3, 7, -3) \implies$ phụ thuộc tuyến tính.
  * Phương án B: $(-4, 2, 2) = -2(2, -1, -1) \implies$ phụ thuộc tuyến tính.
  * Phương án D: $(-1, 0, -1) = -(1, 0, 1) \implies$ phụ thuộc tuyến tính.
* **Chọn đáp án: C.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 31,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho hệ $m$ phương trình thuần nhất $n$ ẩn với ma trận hệ số có hạng $r(A) = p$. Khẳng định nào **không đúng**?",
    "options": [
      {"key": "A", "text": "Hệ phương trình thuần nhất luôn tồn tại nghiệm"},
      {"key": "B", "text": "Tập hợp nghiệm là không gian con của $\\mathbb{R}^n$"},
      {"key": "C", "text": "Khi $p < n$ hệ vô nghiệm"},
      {"key": "D", "text": "Khi $p = n$ hệ có duy nhất nghiệm"}
    ],
    "correct": "C",
    "explanation": r"""* Hệ phương trình đại số tuyến tính thuần nhất $AX = 0$ luôn có nghiệm tầm thường $X = (0, 0, \dots, 0)^T$, do đó hệ **luôn có nghiệm** (không bao giờ vô nghiệm).
* Khi $p < n$, hệ có vô số nghiệm phụ thuộc vào $n - p$ ẩn tự do. Khẳng định "Khi $p < n$ hệ vô nghiệm" là hoàn toàn sai.
* Các khẳng định A, B, D đều đúng theo định lý Kronecker-Capelli và tính chất hệ thuần nhất.
* **Chọn đáp án: C.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 32,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận $A = \\begin{bmatrix} 3 & 1 & 5-m \\\\ m+1 & 1 & 3 \\\\ 3 & m-1 & 3 \\end{bmatrix}; m \\in \\mathbb{R}$. Với giá trị nào của $m$ thì tồn tại ma trận nghịch đảo $A^{-1}$?",
    "options": [
      {"key": "A", "text": "$m = 2, m = 1$"},
      {"key": "B", "text": "$m \\neq 2, m \\neq 1$"},
      {"key": "C", "text": "$m = 1$"},
      {"key": "D", "text": "$m = 2$"}
    ],
    "correct": "B",
    "explanation": r"""* Ma trận vuông $A$ khả nghịch (tồn tại $A^{-1}$) khi và chỉ khi $\det A \neq 0$.
* Khai triển định thức ma trận $A$:
  $$\det A = 3 \begin{vmatrix} 1 & 3 \\ m-1 & 3 \end{vmatrix} - 1 \begin{vmatrix} m+1 & 3 \\ 3 & 3 \end{vmatrix} + (5-m) \begin{vmatrix} m+1 & 1 \\ 3 & m-1 \end{vmatrix}$$
  $$= 3(3 - 3m + 3) - (3m + 3 - 9) + (5-m)(m^2 - 1 - 3)$$
  $$= 3(6 - 3m) - (3m - 6) + (5-m)(m^2 - 4)$$
  $$= 18 - 9m - 3m + 6 + 5m^2 - 20 - m^3 + 4m$$
  $$= -m^3 + 5m^2 - 8m + 4$$
* Phân tích thành nhân tử:
  $$\det A = -(m - 1)(m^2 - 4m + 4) = -(m - 1)(m - 2)^2$$
* Để tồn tại $A^{-1}$ thì $\det A \neq 0 \iff m \neq 1$ và $m \neq 2$.
* **Chọn đáp án: B.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 33,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận $A = \\begin{bmatrix} 3 & 1 & 5-m \\\\ m+1 & 1 & 3 \\\\ 3 & m-1 & 3 \\end{bmatrix}$, với $m = -1$ tìm $A^{-1}$:",
    "options": [
      {"key": "A", "text": "$A^{-1} = \\dfrac{1}{18} \\begin{bmatrix} 9 & -15 & -3 \\\\ 9 & -9 & -9 \\\\ -3 & 9 & 3 \\end{bmatrix}$"},
      {"key": "B", "text": "$A^{-1} = \\dfrac{1}{9} \\begin{bmatrix} 9 & -15 & -3 \\\\ 9 & -9 & -9 \\\\ -3 & 9 & 3 \\end{bmatrix}$"},
      {"key": "C", "text": "$A^{-1} = \\dfrac{1}{18} \\begin{bmatrix} 2 & -6 & 2 \\\\ -3 & 8 & 2 \\\\ -6 & 1 & -5 \\end{bmatrix}$"},
      {"key": "D", "text": "$A^{-1} = \\dfrac{1}{9} \\begin{bmatrix} 2 & -6 & 2 \\\\ -3 & 8 & 2 \\\\ -6 & 1 & -5 \\end{bmatrix}$"}
    ],
    "correct": "A",
    "explanation": r"""* Khi $m = -1$, ma trận $A$ trở thành:
  $$A = \begin{bmatrix} 3 & 1 & 6 \\ 0 & 1 & 3 \\ 3 & -2 & 3 \end{bmatrix}$$
* Định thức: $\det A = -(-1 - 1)(-1 - 2)^2 = -(-2)(9) = 18 \neq 0$.
* Tìm ma trận phần phụ đại số $C$:
  * $C_{11} = +(3 - (-6)) = 9, \quad C_{12} = -(0 - 9) = 9, \quad C_{13} = +(0 - 3) = -3$
  * $C_{21} = -(3 - (-12)) = -15, \quad C_{22} = +(9 - 18) = -9, \quad C_{23} = -(-6 - 3) = 9$
  * $C_{31} = +(3 - 6) = -3, \quad C_{32} = -(9 - 0) = -9, \quad C_{33} = +(3 - 0) = 3$
* Ma trận chuyển vị của các phần phụ đại số:
  $$C^T = \begin{bmatrix} 9 & -15 & -3 \\ 9 & -9 & -9 \\ -3 & 9 & 3 \end{bmatrix}$$
* Do đó:
  $$A^{-1} = \frac{1}{\det A} C^T = \frac{1}{18} \begin{bmatrix} 9 & -15 & -3 \\ 9 & -9 & -9 \\ -3 & 9 & 3 \end{bmatrix}$$
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 34,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho ma trận $A = \\begin{bmatrix} 1 & 2 & 2 \\\\ 1 & 2 & -1 \\\\ -1 & 1 & 4 \\end{bmatrix}$, tìm ma trận $P$ sao cho $P^{-1}AP$ có dạng chéo:",
    "options": [
      {"key": "A", "text": "$P = \\begin{bmatrix} -2 & 1 & 0 \\\\ 1 & 1 & -1 \\\\ -1 & 0 & 1 \\end{bmatrix}$"},
      {"key": "B", "text": "$P = \\begin{bmatrix} 0 & 1 & -2 \\\\ -1 & 1 & 1 \\\\ 1 & 0 & -1 \\end{bmatrix}$"},
      {"key": "C", "text": "$P = \\begin{bmatrix} 1 & 1 & -1 \\\\ 2 & 2 & 1 \\\\ 2 & -1 & 4 \\end{bmatrix}$"},
      {"key": "D", "text": "$P = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 3 \\end{bmatrix}$"}
    ],
    "correct": "A",
    "explanation": r"""* Phương trình đặc trưng của $A$:
  $$\det(A - \lambda I) = \begin{vmatrix} 1-\lambda & 2 & 2 \\ 1 & 2-\lambda & -1 \\ -1 & 1 & 4-\lambda \end{vmatrix} = (1 - \lambda)(\lambda - 3)^2 = 0$$
  Suy ra ma trận có giá trị riêng $\lambda_1 = 1$ (bội 1) và $\lambda_2 = 3$ (bội 2).
* **Với $\lambda_1 = 1$:** Giải $(A - I)v = 0$:
  $$\begin{bmatrix} 0 & 2 & 2 \\ 1 & 1 & -1 \\ -1 & 1 & 3 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = 0 \implies \begin{cases} y + z = 0 \\ x + y - z = 0 \end{cases} \implies v_1 = (-2, 1, -1)^T$$
* **Với $\lambda_2 = 3$:** Giải $(A - 3I)v = 0$:
  $$\begin{bmatrix} -2 & 2 & 2 \\ 1 & -1 & -1 \\ -1 & 1 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = 0 \iff -x + y + z = 0 \iff x = y + z$$
  Chọn 2 véctơ riêng độc lập tuyến tính:
  * Cho $y = 1, z = 0 \implies v_2 = (1, 1, 0)^T$
  * Cho $y = -1, z = 1 \implies v_3 = (0, -1, 1)^T$
* Ghép 3 véctơ riêng thành các cột của ma trận $P$:
  $$P = \begin{bmatrix} -2 & 1 & 0 \\ 1 & 1 & -1 \\ -1 & 0 & 1 \end{bmatrix}$$
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 35,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG VÀ KHÔNG GIAN EUCLID",
    "question": "Trong $\\mathbb{R}^3$ xét họ 3 véctơ độc lập tuyến tính $u_1 = (1,1,0), u_2 = (0,1,1), u_3 = (1,1,1)$. Hãy trực chuẩn hoá Gram-Schmidt họ véctơ $S = \\{u_1, u_2, u_3\\}$:",
    "options": [
      {"key": "A", "text": "$v_1 = \\dfrac{1}{2}(1,1,0), v_2 = \\dfrac{1}{6}(-1,1,2), v_3 = \\dfrac{1}{3}(1,-1,1)$"},
      {"key": "B", "text": "$v_1 = \\dfrac{1}{\\sqrt{2}}(1,1,0), v_2 = \\dfrac{1}{\\sqrt{6}}(-1,1,2), v_3 = \\dfrac{1}{\\sqrt{3}}(1,-1,1)$"},
      {"key": "C", "text": "$v_1 = 2(1,1,0), v_2 = 6(-1,1,2), v_3 = 3(1,-1,1)$"},
      {"key": "D", "text": "$v_1 = \\sqrt{2}(1,1,0), v_2 = \\sqrt{6}(-1,1,2), v_3 = \\sqrt{3}(1,-1,1)$"}
    ],
    "correct": "B",
    "explanation": r"""* Áp dụng thuật toán trực chuẩn hoá Gram-Schmidt:
  1. $e_1 = u_1 = (1, 1, 0) \implies \|e_1\| = \sqrt{1^2 + 1^2 + 0} = \sqrt{2}$.
     Véctơ đơn vị: $v_1 = \dfrac{e_1}{\|e_1\|} = \dfrac{1}{\sqrt{2}}(1, 1, 0)$.
  2. $e_2 = u_2 - \dfrac{\langle u_2, e_1 \rangle}{\|e_1\|^2} e_1 = (0, 1, 1) - \dfrac{1}{2}(1, 1, 0) = \left(-\dfrac{1}{2}, \dfrac{1}{2}, 1\right) = \dfrac{1}{2}(-1, 1, 2)$.
     Độ dài $\|e_2\| = \dfrac{\sqrt{6}}{2} \implies v_2 = \dfrac{e_2}{\|e_2\|} = \dfrac{1}{\sqrt{6}}(-1, 1, 2)$.
  3. $e_3 = u_3 - \dfrac{\langle u_3, e_1 \rangle}{\|e_1\|^2} e_1 - \dfrac{\langle u_3, e_2 \rangle}{\|e_2\|^2} e_2 = (1, 1, 1) - (1, 1, 0) - \left(-\dfrac{1}{3}, \dfrac{1}{3}, \dfrac{2}{3}\right) = \dfrac{1}{3}(1, -1, 1)$.
     Độ dài $\|e_3\| = \dfrac{\sqrt{3}}{3} = \dfrac{1}{\sqrt{3}} \implies v_3 = \dfrac{e_3}{\|e_3\|} = \dfrac{1}{\sqrt{3}}(1, -1, 1)$.
* **Chọn đáp án: B.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 36,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^3 \\to \\mathbb{R}^3$ xác định bởi:\n$$f(x, y, z) = (-5x + 3y + 3z, -3x + y + 3z, -6x + 6y + 4z)$$\nHãy viết ma trận $A$ của ánh xạ $f$ trong cơ sở chính tắc:",
    "options": [
      {"key": "A", "text": "$A = \\begin{bmatrix} -5 & 3 & 3 \\\\ -3 & 1 & 3 \\\\ -6 & 6 & 4 \\end{bmatrix}$"},
      {"key": "B", "text": "$A = \\begin{bmatrix} -5 & -3 & -6 \\\\ 3 & 1 & 6 \\\\ 3 & 3 & 4 \\end{bmatrix}$"},
      {"key": "C", "text": "$A = \\begin{bmatrix} -5 & 1 & 6 \\\\ 3 & 3 & 4 \\\\ 3 & -3 & -6 \\end{bmatrix}$"},
      {"key": "D", "text": "$A = \\begin{bmatrix} -5 & 1 & 4 \\\\ 3 & 3 & -5 \\\\ -6 & 4 & 3 \\end{bmatrix}$"}
    ],
    "correct": "A",
    "explanation": r"""* Trong cơ sở chính tắc của $\mathbb{R}^3$, ảnh của các véctơ cơ sở là:
  $$f(e_1) = f(1, 0, 0) = (-5, -3, -6)$$
  $$f(e_2) = f(0, 1, 0) = (3, 1, 6)$$
  $$f(e_3) = f(0, 0, 1) = (3, 3, 4)$$
* Theo quy ước biểu diễn dạng tọa độ của giáo trình PTIT:
  $$\begin{bmatrix} y_1 \\ y_2 \\ y_3 \end{bmatrix} = \begin{bmatrix} -5 & 3 & 3 \\ -3 & 1 & 3 \\ -6 & 6 & 4 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix}$$
* Do đó ma trận của ánh xạ tuyến tính $f$ là $A = \begin{bmatrix} -5 & 3 & 3 \\ -3 & 1 & 3 \\ -6 & 6 & 4 \end{bmatrix}$.
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 37,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉCTƠ",
    "question": r"Cho ba véctơ $\{x, y, z\}$ là cơ sở của không gian véctơ $V$. Khẳng định nào sau đây **luôn đúng**?",
    "options": [
      {"key": "A", "text": r"$\{x, y, 2y\}$ sinh ra $V$"},
      {"key": "B", "text": r"$\{x, 2y, z\}$ phụ thuộc tuyến tính"},
      {"key": "C", "text": r"Hạng của họ $\{x, x+y, x-2y\}$ bằng 2"},
      {"key": "D", "text": r"$\{x, y, x+y+z\}$ không sinh ra $V$"}
    ],
    "correct": "C",
    "explanation": r"""* Vì $\{x, y, z\}$ là cơ sở của $V$ nên $\{x, y, z\}$ độc lập tuyến tính và $\dim V = 3$.
* **Xét phương án C:** Xét họ 3 véctơ $\{x, x+y, x-2y\}$.
  Tọa độ của 3 véctơ đối với cơ sở $\{x, y, z\}$:
  * $v_1 = x \sim (1, 0, 0)$
  * $v_2 = x + y \sim (1, 1, 0)$
  * $v_3 = x - 2y \sim (1, -2, 0)$
  Ma trận tọa độ có cột thứ 3 bằng $0$, và $v_3 = 3v_1 - 2v_2$. Do đó hạng của hệ véctơ này đúng bằng **2**.
  *(Ghi chú: Bản in đề gốc có lỗi gõ nhầm chữ cái $x$ thành $z$ ở số hạng thứ 3: $z - 2y \to x - 2y$ theo chuẩn ngân hàng câu hỏi PTIT).*
* Các phương án khác:
  * A sai vì $\text{span}\{x, y, 2y\} = \text{span}\{x, y\}$ chỉ có số chiều bằng 2, không sinh ra $V$.
  * B sai vì $\{x, 2y, z\}$ độc lập tuyến tính.
  * D sai vì $\{x, y, x+y+z\}$ là một cơ sở và sinh ra toàn bộ $V$.
* **Chọn đáp án: C.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 38,
    "topicId": 4,
    "topicName": "KHÔNG GIAN VÉCTƠ",
    "question": "Cho $V = \\langle (1,1,1), (2,1,0), (5,3,1) \\rangle$. Khẳng định nào sau đây **luôn đúng**?",
    "options": [
      {"key": "A", "text": "$(1,1,1), (0,0,1)$ là cơ sở của $V$"},
      {"key": "B", "text": "$\\dim V = 3$"},
      {"key": "C", "text": "$(1, 0, -1) \\in V$"},
      {"key": "D", "text": "Tất cả đều sai"}
    ],
    "correct": "C",
    "explanation": r"""* Nhận xét quan hệ giữa các véctơ sinh của $V$:
  $$(5, 3, 1) = 1 \cdot (1, 1, 1) + 2 \cdot (2, 1, 0)$$
  Do đó véctơ thứ 3 là tổ hợp tuyến tính của 2 véctơ đầu, suy ra $\dim V = 2$, với cơ sở là $\{u_1 = (1, 1, 1), u_2 = (2, 1, 0)\}$.
* Kiểm tra véctơ $w = (1, 0, -1)$:
  Ta có:
  $$-1 \cdot (1, 1, 1) + 1 \cdot (2, 1, 0) = (-1 + 2, -1 + 1, -1 + 0) = (1, 0, -1)$$
  Vì $(1, 0, -1)$ biểu diễn được thành tổ hợp tuyến tính của cơ sở của $V$, nên $(1, 0, -1) \in V$.
* **Chọn đáp án: C.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 39,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho hệ phương trình tuyến tính:\n$$\\begin{cases} 2x + 3y = -11 \\\\ 6x - 5y + z = 45 \\end{cases}$$\nMa trận bổ sung của hệ phương trình trên là:",
    "options": [
      {"key": "A", "text": "$\\begin{bmatrix} 2 & 3 & 0 & 11 \\\\ 6 & 0 & 1 & 45 \\end{bmatrix}$"},
      {"key": "B", "text": "$\\begin{bmatrix} 2 & 3 & 0 & -11 \\\\ 6 & -5 & 1 & 45 \\end{bmatrix}$"},
      {"key": "C", "text": "$\\begin{bmatrix} 2 & 6 \\\\ 3 & -5 \\\\ 0 & 1 \\\\ -11 & 45 \\end{bmatrix}$"},
      {"key": "D", "text": "$\\begin{bmatrix} 2 & 6 \\\\ 3 & 0 \\\\ 0 & 1 \\\\ 11 & 45 \\end{bmatrix}$"}
    ],
    "correct": "B",
    "explanation": r"""* Hệ phương trình có 3 ẩn $x, y, z$:
  $$\begin{cases} 2x + 3y + 0z = -11 \\ 6x - 5y + 1z = 45 \end{cases}$$
* Ma trận hệ số $A = \begin{bmatrix} 2 & 3 & 0 \\ 6 & -5 & 1 \end{bmatrix}$, cột số hạng tự do $B = \begin{bmatrix} -11 \\ 45 \end{bmatrix}$.
* Ma trận bổ sung $\bar{A} = [A | B]$ là:
  $$\bar{A} = \begin{bmatrix} 2 & 3 & 0 & -11 \\ 6 & -5 & 1 & 45 \end{bmatrix}$$
* **Chọn đáp án: B.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 40,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Phương trình nào dưới đây có thể viết thành một phương trình tuyến tính với các ẩn $x, y$?",
    "options": [
      {"key": "A", "text": "$(\\sin \\pi) x^2 + y = 2$"},
      {"key": "B", "text": "$(\\sin 0{,}5) xy + x + y = 1$"},
      {"key": "C", "text": "$(\\cos \\pi) x^2 + y = 2$"},
      {"key": "D", "text": "$(\\cos(\\sin \\pi)) x^2 + y = 2$"}
    ],
    "correct": "A",
    "explanation": r"""* Phương trình tuyến tính với các ẩn $x, y$ là phương trình bậc nhất có dạng tổng quát $ax + by = c$, trong đó các ẩn không được nhân với nhau hoặc có số mũ khác $1$.
* Xét phương án **A**: Ta có $\sin \pi = 0$, do đó:
  $$(\sin \pi) x^2 + y = 2 \iff 0 \cdot x^2 + y = 2 \iff y = 2$$
  Đây là một phương trình bậc nhất đối với $x, y$ (dạng $0x + 1y = 2$).
* Các phương án còn lại:
  * B: Chứa tích $xy$ (bậc 2) nên là phi tuyến.
  * C: $\cos \pi = -1 \ne 0 \implies -x^2 + y = 2$ (bậc 2 theo $x$).
  * D: $\sin \pi = 0 \implies \cos 0 = 1 \ne 0 \implies x^2 + y = 2$ (bậc 2 theo $x$).
* **Chọn đáp án: A.**"""
  },
  {
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "examQuestionNo": 41,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Xét hai ma trận $A = \\begin{bmatrix} 1 & 2 & 3 \\end{bmatrix}; B = \\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\\\ -1 & 3 \\end{bmatrix}$. Kích cỡ của ma trận $AB$ là bao nhiêu?",
    "options": [
      {"key": "A", "text": "$1 \\times 3$"},
      {"key": "B", "text": "$1 \\times 2$"},
      {"key": "C", "text": "$3 \\times 1$"},
      {"key": "D", "text": "$2 \\times 1$"}
    ],
    "correct": "B",
    "explanation": r"""* Ma trận $A$ gồm 1 hàng và 3 cột $\implies$ kích cỡ $1 \times 3$.
* Ma trận $B$ gồm 3 hàng và 2 cột $\implies$ kích cỡ $3 \times 2$.
* Tích ma trận $AB$ của ma trận kích cỡ $(1 \times 3)$ với ma trận $(3 \times 2)$ là một ma trận có kích cỡ:
  $$(1 \times 3) \times (3 \times 2) = 1 \times 2$$
* Cụ thể $AB = \begin{bmatrix} 1\cdot 1 + 2\cdot 2 + 3(-1) & 1\cdot 0 + 2\cdot 1 + 3\cdot 3 \end{bmatrix} = \begin{bmatrix} 2 & 11 \end{bmatrix}$ (cỡ $1 \times 2$).
* **Chọn đáp án: B.**"""
  }
]

# Load existing build_de_ontap.py and append these, then save data/de_ontap.json
import importlib.util
import os

base_dir = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location("build_de_ontap", os.path.join(base_dir, "build_de_ontap.py"))
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

all_ontap_questions = module.de_ontap_questions
all_ontap_questions.extend(part2_questions)

print(f"Total questions in De On Tap: {len(all_ontap_questions)}")

with open("data/de_ontap.json", "w", encoding="utf-8") as f:
    json.dump(all_ontap_questions, f, ensure_ascii=False, indent=2)

print("Saved data/de_ontap.json successfully!")
