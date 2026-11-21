# -*- coding: utf-8 -*-
import json

extra_questions = []

# ==============================================================================
# CHUYÊN ĐỀ 3: HỆ PHƯƠNG TRÌNH TUYẾN TÍNH (20 CÂU: IDs 236 - 255)
# ==============================================================================

extra_questions.append({
    "id": 236,
    "originalId": None,
    "isOriginal": False,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Hệ phương trình tuyến tính $AX = B$ gồm $n$ phương trình và $n$ ẩn có nghiệm duy nhất khi và chỉ khi:",
    "options": [
        {"key": "A", "text": "$\\det A \\neq 0$"},
        {"key": "B", "text": "$\\det A = 0$"},
        {"key": "C", "text": "$r(A) < n$"},
        {"key": "D", "text": "$B \\neq 0$"}
    ],
    "correct": "A",
    "explanation": r"""* **Định lý Cramer:**
  * Đối với hệ phương trình vuông ($n$ phương trình, $n$ ẩn), hệ có nghiệm duy nhất khi và chỉ khi định thức của ma trận hệ số khác không:
    $$\det A \neq 0$$
  * Khi đó nghiệm được tính theo công thức: $x_j = \dfrac{\det A_j}{\det A}$ với $j = 1, \dots, n$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 237,
    "originalId": None,
    "isOriginal": False,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Theo định lý Kronecker - Capelli, hệ phương trình tuyến tính $AX = B$ vô nghiệm khi và chỉ khi:",
    "options": [
        {"key": "A", "text": "$r(A) < r(\\bar{A})$"},
        {"key": "B", "text": "$r(A) = r(\\bar{A}) = n$"},
        {"key": "C", "text": "$r(A) = r(\\bar{A}) < n$"},
        {"key": "D", "text": "$r(A) > r(\\bar{A})$"}
    ],
    "correct": "A",
    "explanation": r"""* **Định lý Kronecker - Capelli:**
  * Ký hiệu $A$ là ma trận hệ số và $\bar{A} = [A \mid B]$ là ma trận mở rộng.
  * Hệ có nghiệm $\iff r(A) = r(\bar{A})$.
  * Do đó, hệ **vô nghiệm** khi và chỉ khi $r(A) < r(\bar{A})$ (thực tế luôn là $r(\bar{A}) = r(A) + 1$, xuất hiện hàng có dạng $[0 \, 0 \dots 0 \mid c]$ với $c \neq 0$).
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 238,
    "originalId": None,
    "isOriginal": False,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho hệ phương trình thuần nhất $AX = 0$ gồm $4$ phương trình, $5$ ẩn với $r(A) = 3$. Số chiều của không gian nghiệm của hệ là:",
    "options": [
        {"key": "A", "text": "$2$"},
        {"key": "B", "text": "$1$"},
        {"key": "C", "text": "$3$"},
        {"key": "D", "text": "$5$"}
    ],
    "correct": "A",
    "explanation": r"""* **Công thức số chiều của không gian nghiệm hệ thuần nhất:**
  * Cho hệ phương trình tuyến tính thuần nhất $AX = 0$ có $n$ ẩn số và ma trận hệ số có hạng $r(A)$.
  * Số chiều của không gian nghiệm (số ẩn tự do) bằng:
    $$\dim S = n - r(A)$$
  * Ở đây số ẩn $n = 5$ và hạng $r(A) = 3$, do đó:
    $$\dim S = 5 - 3 = 2$$
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 239,
    "originalId": None,
    "isOriginal": False,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Hệ phương trình thuần nhất $AX = 0$ với ma trận vuông $A$ cấp $n$ có nghiệm **không tầm thường** khi và chỉ khi:",
    "options": [
        {"key": "A", "text": "$\\det A = 0$"},
        {"key": "B", "text": "$\\det A \\neq 0$"},
        {"key": "C", "text": "$r(A) = n$"},
        {"key": "D", "text": "$A = 0$"}
    ],
    "correct": "A",
    "explanation": r"""* **Điều kiện có nghiệm không tầm thường:**
  * Hệ thuần nhất luôn có nghiệm tầm thường $X = \vec{0}$.
  * Nếu $\det A \neq 0$, hệ có nghiệm duy nhất, và nghiệm đó chính là nghiệm tầm thường $X = \vec{0}$.
  * Do đó, để hệ có nghiệm không tầm thường ($X \neq \vec{0}$), điều kiện cần và đủ là hệ có vô số nghiệm $\iff \det A = 0$ (hoặc $r(A) < n$).
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 240,
    "originalId": None,
    "isOriginal": False,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho hệ phương trình: $\\begin{cases} x + 2y - z = 1 \\\\ 2x + 5y + z = 4 \\\\ 3x + 7y + mz = 5 \\end{cases}$. Tìm điều kiện của $m$ để hệ có nghiệm duy nhất.",
    "options": [
        {"key": "A", "text": "$m \\neq 0$"},
        {"key": "B", "text": "$m = 0$"},
        {"key": "C", "text": "$m \\neq 2$"},
        {"key": "D", "text": "Mọi $m \\in \\mathbb{R}$"}
    ],
    "correct": "A",
    "explanation": r"""* **Hệ vuông 3 phương trình 3 ẩn, áp dụng Cramer:**
  * Tính $\det A$:
    $$\det A = \begin{vmatrix} 1 & 2 & -1 \\ 2 & 5 & 1 \\ 3 & 7 & m \end{vmatrix}$$
  * Biến đổi hàng: $h_2 \to h_2 - 2h_1$, $h_3 \to h_3 - 3h_1$:
    $$\det A = \begin{vmatrix} 1 & 2 & -1 \\ 0 & 1 & 3 \\ 0 & 1 & m + 3 \end{vmatrix} = 1 \cdot (m + 3 - 3) = m$$
  * Hệ có nghiệm duy nhất $\iff \det A \neq 0 \iff m \neq 0$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 241,
    "originalId": None,
    "isOriginal": False,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Dùng quy tắc Cramer tìm ẩn $y$ trong hệ phương trình: $\\begin{cases} 2x + y = 5 \\\\ 3x - 2y = 4 \\end{cases}$. Giá trị của $y$ là:",
    "options": [
        {"key": "A", "text": "$1$"},
        {"key": "B", "text": "$2$"},
        {"key": "C", "text": "$-1$"},
        {"key": "D", "text": "$3$"}
    ],
    "correct": "A",
    "explanation": r"""* **Áp dụng công thức Cramer:**
  * Định thức ma trận hệ số: $\det A = \begin{vmatrix} 2 & 1 \\ 3 & -2 \end{vmatrix} = 2(-2) - 1(3) = -7 \neq 0$.
  * Định thức $\det A_y$ (thay cột 2 bằng cột vế phải $\begin{bmatrix} 5 \\ 4 \end{bmatrix}$):
    $$\det A_y = \begin{vmatrix} 2 & 5 \\ 3 & 4 \end{vmatrix} = 2(4) - 5(3) = 8 - 15 = -7$$
  * Nghiệm $y = \dfrac{\det A_y}{\det A} = \dfrac{-7}{-7} = 1$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 242,
    "originalId": None,
    "isOriginal": False,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Một hệ gồm $m$ phương trình tuyến tính và $n$ ẩn số có $m < n$ (số phương trình ít hơn số ẩn). Nếu hệ này có nghiệm thì khẳng định nào sau đây là đúng?",
    "options": [
        {"key": "A", "text": "Hệ luôn có vô số nghiệm"},
        {"key": "B", "text": "Hệ có nghiệm duy nhất"},
        {"key": "C", "text": "Hệ có đúng $m$ nghiệm"},
        {"key": "D", "text": "Không thể kết luận được"}
    ],
    "correct": "A",
    "explanation": r"""* **Hệ thiếu phương trình ($m < n$):**
  * Hạng của ma trận hệ số $r(A) \le \min(m, n) = m < n$.
  * Do đó nếu hệ có nghiệm (tức $r(A) = r(\bar{A})$), ta luôn có:
    $$r(A) < n$$
  * Vì số ẩn tự do $k = n - r(A) \ge n - m > 0$, nghiệm phụ thuộc vào ít nhất một tham số tự do, do đó hệ luôn có vô số nghiệm.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 243,
    "originalId": None,
    "isOriginal": False,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Tìm tất cả các giá trị của $m$ để hệ phương trình $\\begin{cases} x + y + z = 1 \\\\ 2x + 3y + z = 3 \\\\ x + 2y + mz = 2 \\end{cases}$ vô số nghiệm.",
    "options": [
        {"key": "A", "text": "$m = 0$"},
        {"key": "B", "text": "$m \\neq 0$"},
        {"key": "C", "text": "$m = 1$"},
        {"key": "D", "text": "Không tồn tại $m$"}
    ],
    "correct": "A",
    "explanation": r"""* **Biến đổi ma trận mở rộng $\bar{A}$:**
  $$\bar{A} = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 2 & 3 & 1 & 3 \\ 1 & 2 & m & 2 \end{bmatrix}$$
  * $h_2 \to h_2 - 2h_1$, $h_3 \to h_3 - h_1$:
    $$\begin{bmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & -1 & 1 \\ 0 & 1 & m - 1 & 1 \end{bmatrix}$$
  * $h_3 \to h_3 - h_2$:
    $$\begin{bmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & -1 & 1 \\ 0 & 0 & m & 0 \end{bmatrix}$$
  * Để hệ có vô số nghiệm, hàng cuối phải là hàng toàn số 0 $\iff m = 0$.
  * Khi đó $r(A) = r(\bar{A}) = 2 < 3$, hệ có vô số nghiệm phụ thuộc $1$ tham số tự do.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 244,
    "originalId": None,
    "isOriginal": False,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho $X_1, X_2$ là hai nghiệm phân biệt của hệ phương trình không thuần nhất $AX = B$. Khẳng định nào sau đây là đúng?",
    "options": [
        {"key": "A", "text": "$X_1 - X_2$ là một nghiệm của hệ thuần nhất liên kết $AX = 0$"},
        {"key": "B", "text": "$X_1 + X_2$ là một nghiệm của hệ thuần nhất liên kết $AX = 0$"},
        {"key": "C", "text": "$X_1 + X_2$ là một nghiệm của hệ $AX = B$"},
        {"key": "D", "text": "$2X_1$ là một nghiệm của hệ $AX = B$"}
    ],
    "correct": "A",
    "explanation": r"""* **Cấu trúc nghiệm của hệ phương trình tuyến tính:**
  * Ta có $AX_1 = B$ và $AX_2 = B$.
  * Trừ hai đẳng thức vế theo vế:
    $$A(X_1 - X_2) = AX_1 - AX_2 = B - B = 0$$
  * Do đó hiệu của hai nghiệm bất kỳ của hệ không thuần nhất luôn là một nghiệm của hệ thuần nhất liên kết $AX = 0$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 245,
    "originalId": None,
    "isOriginal": False,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Tập nghiệm của hệ phương trình tuyến tính thuần nhất $AX = 0$ trong $\\mathbb{R}^n$ lập thành:",
    "options": [
        {"key": "A", "text": "Một không gian véc tơ con của $\\mathbb{R}^n$"},
        {"key": "B", "text": "Một tập hợp rỗng nếu $\\det A \\neq 0$"},
        {"key": "C", "text": "Một không gian affine nhưng không phải không gian con"},
        {"key": "D", "text": "Toàn bộ không gian $\\mathbb{R}^n$ với mọi ma trận $A$"}
    ],
    "correct": "A",
    "explanation": r"""* **Tính chất không gian con của tập nghiệm hệ thuần nhất:**
  * Nghiệm $\vec{0}$ luôn thỏa mãn: $A \\vec{0} = 0$.
  * Nếu $u, v$ là nghiệm ($Au=0, Av=0$) thì $A(u+v) = Au + Av = 0$ ($u+v$ là nghiệm).
  * Với mọi $\alpha \in \mathbb{R}$, $A(\alpha u) = \alpha (Au) = 0$ ($\alpha u$ là nghiệm).
  * Do đó tập nghiệm đóng kín với phép cộng và phép nhân vô hướng, nên là một không gian véc tơ con của $\mathbb{R}^n$ (gọi là không gian hạch hay $\ker A$).
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 246,
    "originalId": None,
    "isOriginal": False,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Tìm hệ nghiệm cơ bản của phương trình thuần nhất $x_1 - 2x_2 + 3x_3 = 0$ trong $\\mathbb{R}^3$:",
    "options": [
        {"key": "A", "text": "$\\{ (2, 1, 0), \\, (-3, 0, 1) \\}$"},
        {"key": "B", "text": "$\\{ (1, -2, 3) \\}$"},
        {"key": "C", "text": "$\\{ (1, 0, 0), \\, (0, 1, 0) \\}$"},
        {"key": "D", "text": "$\\{ (2, 1, 0), \\, (3, 0, -1) \\}$"}
    ],
    "correct": "A",
    "explanation": r"""* **Kỹ thuật tìm hệ nghiệm cơ bản (cơ sở không gian nghiệm):**
  * Phương trình có 1 phương trình, 3 ẩn $\implies$ số ẩn tự do là $3 - 1 = 2$.
  * Rút $x_1$ theo hai ẩn tự do $x_2, x_3$:
    $$x_1 = 2x_2 - 3x_3$$
  * Chọn $(x_2 = 1, x_3 = 0) \implies x_1 = 2 \implies v_1 = (2, 1, 0)$.
  * Chọn $(x_2 = 0, x_3 = 1) \implies x_1 = -3 \implies v_2 = (-3, 0, 1)$.
  * Hệ $\{v_1, v_2\}$ độc lập tuyến tính và sinh ra toàn bộ không gian nghiệm, do đó là một hệ nghiệm cơ bản.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 247,
    "originalId": None,
    "isOriginal": False,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho hệ phương trình $\\begin{cases} x + y = 2 \\\\ 2x + 2y = m \\end{cases}$. Hệ này có nghiệm khi và chỉ khi:",
    "options": [
        {"key": "A", "text": "$m = 4$"},
        {"key": "B", "text": "$m \\neq 4$"},
        {"key": "C", "text": "$m = 2$"},
        {"key": "D", "text": "$m = 0$"}
    ],
    "correct": "A",
    "explanation": r"""* **Xét sự tương thích của hai phương trình:**
  * Nhân phương trình thứ nhất với 2 ta được: $2x + 2y = 4$.
  * Phương trình thứ hai là: $2x + 2y = m$.
  * Để hệ có nghiệm, vế phải phải bằng nhau: $m = 4$. Khi đó hai phương trình trùng nhau và hệ có vô số nghiệm. Nếu $m \neq 4$ hệ vô nghiệm.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 248,
    "originalId": None,
    "isOriginal": False,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Nghiệm tổng quát của hệ phương trình tuyến tính không thuần nhất $AX = B$ có dạng:",
    "options": [
        {"key": "A", "text": "$X = X_0 + X_h$, với $X_0$ là một nghiệm riêng của $AX = B$ và $X_h$ là nghiệm tổng quát của $AX = 0$"},
        {"key": "B", "text": "$X = X_0 \\cdot X_h$"},
        {"key": "C", "text": "$X = c X_0$ với $c \\in \\mathbb{R}$"},
        {"key": "D", "text": "$X = X_h - X_0$"}
    ],
    "correct": "A",
    "explanation": r"""* **Định lý cấu trúc nghiệm tổng quát:**
  * Nghiệm tổng quát của hệ không thuần nhất $AX = B$ bằng tổng của **một nghiệm riêng** $X_0$ của hệ không thuần nhất cộng với **nghiệm tổng quát** $X_h$ của hệ thuần nhất liên kết:
    $$X = X_0 + X_h$$
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 249,
    "originalId": None,
    "isOriginal": False,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho hệ phương trình $\\begin{cases} mx + y = 1 \\\\ x + my = 1 \\end{cases}$. Tìm $m$ để hệ vô nghiệm.",
    "options": [
        {"key": "A", "text": "$m = -1$"},
        {"key": "B", "text": "$m = 1$"},
        {"key": "C", "text": "$m = 0$"},
        {"key": "D", "text": "$m = 2$"}
    ],
    "correct": "A",
    "explanation": r"""* **Tính định thức ma trận hệ số:**
  $$\det A = \begin{vmatrix} m & 1 \\ 1 & m \end{vmatrix} = m^2 - 1 = (m - 1)(m + 1)$$
  * Nếu $m \neq \pm 1$: hệ có nghiệm duy nhất.
  * Nếu $m = 1$: hệ trở thành $\begin{cases} x + y = 1 \\ x + y = 1 \end{cases} \implies$ vô số nghiệm.
  * Nếu $m = -1$: hệ trở thành $\begin{cases} -x + y = 1 \\ x - y = 1 \end{cases} \iff \begin{cases} x - y = -1 \\ x - y = 1 \end{cases} \implies$ mâu thuẫn, vô nghiệm.
* Vậy hệ vô nghiệm khi $m = -1$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 250,
    "originalId": None,
    "isOriginal": False,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho ma trận hệ số $A$ có cỡ $3 \\times 5$ với $r(A) = 3$. Hệ phương trình $AX = B$ sẽ:",
    "options": [
        {"key": "A", "text": "Luôn có vô số nghiệm với mọi cột $B \\in \\mathbb{R}^3$"},
        {"key": "B", "text": "Có thể vô nghiệm với một số $B$"},
        {"key": "C", "text": "Có nghiệm duy nhất với mọi $B$"},
        {"key": "D", "text": "Vô nghiệm với mọi $B$"}
    ],
    "correct": "A",
    "explanation": r"""* **Phân tích số chiều và hạng:**
  * Ma trận mở rộng $\bar{A} = [A \mid B]$ có cỡ $3 \times 6$, nên $r(\bar{A}) \le 3$.
  * Vì $r(A) = 3$ và $r(A) \le r(\bar{A}) \le 3 \implies r(A) = r(\bar{A}) = 3$ với **mọi** $B \in \mathbb{R}^3$.
  * Do đó hệ luôn luôn có nghiệm. Mặt khác, số ẩn là $n = 5 > 3$, nên số ẩn tự do là $5 - 3 = 2 > 0$.
  * Vì vậy hệ luôn có vô số nghiệm với mọi $B$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 251,
    "originalId": None,
    "isOriginal": False,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Một hệ gồm 3 phương trình, 3 ẩn số có $\\det A = 0$ và $\\det A_1 \\neq 0$. Khẳng định nào sau đây đúng?",
    "options": [
        {"key": "A", "text": "Hệ phương trình chắc chắn vô nghiệm"},
        {"key": "B", "text": "Hệ phương trình có vô số nghiệm"},
        {"key": "C", "text": "Hệ phương trình có nghiệm duy nhất"},
        {"key": "D", "text": "Chưa đủ thông tin để kết luận"}
    ],
    "correct": "A",
    "explanation": r"""* **Dấu hiệu nhận biết hệ vuông vô nghiệm qua Cramer:**
  * Giả sử hệ có nghiệm $(x_1, x_2, x_3)$. Theo tính chất định thức, ta luôn có đẳng thức:
    $$x_1 \cdot \det A = \det A_1$$
  * Vì $\det A = 0$, vế trái bằng $x_1 \cdot 0 = 0$.
  * Nhưng giả thiết cho $\det A_1 \neq 0$, dẫn đến đẳng thức vô lý: $0 \neq 0$.
  * Do đó không thể tồn tại nghiệm, hệ chắc chắn **vô nghiệm**.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 252,
    "originalId": None,
    "isOriginal": False,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Khi giải hệ phương trình tuyến tính bằng phương pháp khử Gauss, ta thực hiện các phép biến đổi sơ cấp trên:",
    "options": [
        {"key": "A", "text": "Các hàng của ma trận mở rộng $\\bar{A} = [A \\mid B]$"},
        {"key": "B", "text": "Các cột của ma trận mở rộng $\\bar{A}$"},
        {"key": "C", "text": "Chỉ các hàng của ma trận hệ số $A$"},
        {"key": "D", "text": "Cả hàng và cột của $\\bar{A}$ tùy ý"}
    ],
    "correct": "A",
    "explanation": r"""* **Nguyên tắc phương pháp khử Gauss:**
  * Mỗi hàng của ma trận mở rộng $\bar{A}$ tương ứng với một phương trình trong hệ.
  * Việc biến đổi sơ cấp theo hàng tương đương với các phép biến đổi tương đương trên các phương trình (đổi chỗ 2 phương trình, nhân 2 vế với hằng số khác 0, cộng trừ các phương trình).
  * Biến đổi cột sẽ làm thay đổi vai trò các ẩn số hoặc làm sai lệch cột hệ số tự do $B$, do đó **chỉ biến đổi sơ cấp trên hàng** của $\bar{A}$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 253,
    "originalId": None,
    "isOriginal": False,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Tìm nghiệm $x_1$ của hệ: $\\begin{cases} 3x_1 + 2x_2 = 7 \\\\ x_1 + 4x_2 = 9 \\end{cases}$:",
    "options": [
        {"key": "A", "text": "$x_1 = 1$"},
        {"key": "B", "text": "$x_1 = 2$"},
        {"key": "C", "text": "$x_1 = -1$"},
        {"key": "D", "text": "$x_1 = 3$"}
    ],
    "correct": "A",
    "explanation": r"""* **Dùng Cramer tính $x_1$:**
  * $\det A = \begin{vmatrix} 3 & 2 \\ 1 & 4 \end{vmatrix} = 12 - 2 = 10$.
  * Thay cột 1 bằng cột vế phải $\begin{bmatrix} 7 \\ 9 \end{bmatrix}$:
    $$\det A_1 = \begin{vmatrix} 7 & 2 \\ 9 & 4 \end{vmatrix} = 28 - 18 = 10$$
  * Suy ra $x_1 = \dfrac{\det A_1}{\det A} = \dfrac{10}{10} = 1$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 254,
    "originalId": None,
    "isOriginal": False,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Hệ phương trình thuần nhất $AX = 0$ có ma trận hệ số $A$ thỏa mãn $r(A) = n$ (với $n$ là số ẩn). Số nghiệm của hệ là:",
    "options": [
        {"key": "A", "text": "Đúng 1 nghiệm (nghiệm tầm thường $\\vec{0}$)"},
        {"key": "B", "text": "Vô số nghiệm"},
        {"key": "C", "text": "Vô nghiệm"},
        {"key": "D", "text": "$n$ nghiệm"}
    ],
    "correct": "A",
    "explanation": r"""* **Số chiều không gian nghiệm:**
  * $\dim S = n - r(A) = n - n = 0$.
  * Không gian nghiệm có số chiều bằng $0$, tức chỉ chứa duy nhất một véc tơ không:
    $$S = \\{\\vec{0}\\}$$
  * Vậy hệ có nghiệm duy nhất là nghiệm tầm thường $X = (0, 0, \\dots, 0)^T$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 255,
    "originalId": None,
    "isOriginal": False,
    "topicId": 3,
    "topicName": "HỆ PHƯƠNG TRÌNH TUYẾN TÍNH",
    "question": "Cho hệ phương trình $\\begin{cases} x_1 + x_2 + x_3 = 0 \\\\ 2x_1 + 2x_2 + 2x_3 = 0 \\end{cases}$ trong $\\mathbb{R}^3$. Số phần tử trong một hệ nghiệm cơ bản của hệ là:",
    "options": [
        {"key": "A", "text": "$2$"},
        {"key": "B", "text": "$1$"},
        {"key": "C", "text": "$3$"},
        {"key": "D", "text": "$0$"}
    ],
    "correct": "A",
    "explanation": r"""* **Tính số chiều của không gian nghiệm:**
  * Hai phương trình tỉ lệ với nhau $\implies$ hạng ma trận hệ số $r(A) = 1$.
  * Số ẩn $n = 3$.
  * Số véc tơ trong hệ nghiệm cơ bản chính là số chiều của không gian nghiệm:
    $$\dim S = n - r(A) = 3 - 1 = 2$$
* **Chọn đáp án: A.**"""
})

with open("scripts/topic3_extra.json", "w", encoding="utf-8") as f:
    json.dump(extra_questions, f, ensure_ascii=False, indent=2)

print(f"Generated {len(extra_questions)} questions for Topic 3.")
