# -*- coding: utf-8 -*-
import json

extra_questions = []

# ==============================================================================
# CHUYÊN ĐỀ 2: MA TRẬN VÀ ĐỊNH THỨC (15 CÂU: IDs 221 - 235)
# ==============================================================================

extra_questions.append({
    "id": 221,
    "originalId": None,
    "isOriginal": False,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận vuông $A$ cấp $n=4$ có $\\det A = 3$. Giá trị của định thức $\\det(2A)$ là:",
    "options": [
        {"key": "A", "text": "$48$"},
        {"key": "B", "text": "$24$"},
        {"key": "C", "text": "$6$"},
        {"key": "D", "text": "$12$"}
    ],
    "correct": "A",
    "explanation": r"""* **Công thức tính chất định thức đối với phép nhân số thực:**
  * Với ma trận vuông $A$ cấp $n$ và số thực $k$, ta có:
    $$\det(kA) = k^n \det A$$
* Áp dụng với $n = 4$, $k = 2$ và $\det A = 3$:
  $$\det(2A) = 2^4 \cdot \det A = 16 \cdot 3 = 48$$
* **Lưu ý tránh bẫy:** Rất nhiều học sinh nhầm lẫn $\det(kA) = k \det A$, đây là sai sót phổ biến!
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 222,
    "originalId": None,
    "isOriginal": False,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận $A = \\begin{bmatrix} 2 & 1 & 0 \\\\ 0 & 3 & 1 \\\\ 1 & 0 & 2 \\end{bmatrix}$. Phần tử ở vị trí hàng 2, cột 1 của ma trận nghịch đảo $A^{-1}$ là:",
    "options": [
        {"key": "A", "text": "$1/13$"},
        {"key": "B", "text": "$-1/13$"},
        {"key": "C", "text": "$2/13$"},
        {"key": "D", "text": "$-2/13$"}
    ],
    "correct": "A",
    "explanation": r"""* **Kỹ thuật tính phần tử cụ thể của ma trận nghịch đảo:**
  * Công thức ma trận nghịch đảo: $A^{-1} = \dfrac{1}{\det A} (C_{ij})^T$.
  * Do đó phần tử hàng $i$, cột $j$ của $A^{-1}$ là:
    $$(A^{-1})_{ij} = \frac{C_{ji}}{\det A} = \frac{(-1)^{j+i} M_{ji}}{\det A}$$
    *(Chú ý chỉ số đảo lại: hàng $2$, cột $1$ của $A^{-1}$ ứng với phần phụ đại số $C_{12}$)*.
* Tính $\det A$:
  $$\det A = 2(6 - 0) - 1(0 - 1) + 0 = 12 + 1 = 13$$
* Tính $C_{12}$ (bỏ hàng 1, cột 2):
  $$C_{12} = (-1)^{1+2} \begin{vmatrix} 0 & 1 \\ 1 & 2 \end{vmatrix} = -(0 - 1) = 1$$
* Suy ra $(A^{-1})_{21} = \dfrac{C_{12}}{\det A} = \dfrac{1}{13}$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 223,
    "originalId": None,
    "isOriginal": False,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho hai ma trận vuông khả nghịch $A$ và $B$. Ma trận $X$ thỏa mãn phương trình $A X B = C$ là:",
    "options": [
        {"key": "A", "text": "$X = A^{-1} C B^{-1}$"},
        {"key": "B", "text": "$X = C A^{-1} B^{-1}$"},
        {"key": "C", "text": "$X = B^{-1} C A^{-1}$"},
        {"key": "D", "text": "$X = A^{-1} B^{-1} C$"}
    ],
    "correct": "A",
    "explanation": r"""* **Kỹ thuật giải phương trình ma trận:**
  * Phép nhân ma trận không có tính giao hoán, nên ta phải nhân nghịch đảo đúng phía:
  * Nhân cả hai vế về bên trái với $A^{-1}$:
    $$A^{-1}(AXB) = A^{-1} C \implies (A^{-1}A) X B = A^{-1} C \implies X B = A^{-1} C$$
  * Nhân cả hai vế về bên phải với $B^{-1}$:
    $$(XB) B^{-1} = (A^{-1} C) B^{-1} \implies X (B B^{-1}) = A^{-1} C B^{-1} \implies X = A^{-1} C B^{-1}$$
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 224,
    "originalId": None,
    "isOriginal": False,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận $A$ vuông cấp 3 có $\\det A = -4$. Giá trị của $\\det(A^{-1} \\cdot A^T)$ là:",
    "options": [
        {"key": "A", "text": "$1$"},
        {"key": "B", "text": "$-1$"},
        {"key": "C", "text": "$16$"},
        {"key": "D", "text": "$-16$"}
    ],
    "correct": "A",
    "explanation": r"""* **Áp dụng các tính chất của định thức:**
  * $\det(XY) = \det X \cdot \det Y$.
  * $\det(A^{-1}) = \dfrac{1}{\det A}$.
  * $\det(A^T) = \det A$.
* Khi đó:
  $$\det(A^{-1} A^T) = \det(A^{-1}) \cdot \det(A^T) = \frac{1}{\det A} \cdot \det A = 1$$
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 225,
    "originalId": None,
    "isOriginal": False,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Định thức của ma trận tam giác khối $M = \\begin{bmatrix} A & B \\\\ 0 & C \\end{bmatrix}$ (trong đó $A, C$ là các ma trận vuông) được tính bằng:",
    "options": [
        {"key": "A", "text": "$\\det A \\cdot \\det C$"},
        {"key": "B", "text": "$\\det A + \\det C$"},
        {"key": "C", "text": "$\\det A \\cdot \\det C - \\det B$"},
        {"key": "D", "text": "$\\det(AC - B)$"}
    ],
    "correct": "A",
    "explanation": r"""* **Công thức định thức ma trận tam giác khối:**
  * Với ma trận dạng khối mà khối ở góc dưới bên trái là khối số 0:
    $$\det \begin{bmatrix} A & B \\ 0 & C \end{bmatrix} = \det A \cdot \det C$$
  * Tương tự cho ma trận khối tam giác dưới $\det \begin{bmatrix} A & 0 \\ B & C \end{bmatrix} = \det A \cdot \det C$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 226,
    "originalId": None,
    "isOriginal": False,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho hai ma trận $A$ cỡ $3 \\times 4$ và $B$ cỡ $4 \\times 2$. Hạng của tích ma trận $AB$ có thể nhận giá trị lớn nhất là bao nhiêu?",
    "options": [
        {"key": "A", "text": "$2$"},
        {"key": "B", "text": "$3$"},
        {"key": "C", "text": "$4$"},
        {"key": "D", "text": "$12$"}
    ],
    "correct": "A",
    "explanation": r"""* **Bất đẳng thức về hạng của tích hai ma trận:**
  * Ta có định lý: $r(AB) \le \min(r(A), r(B))$.
  * Ma trận $B$ có cỡ $4 \times 2$ nên $r(B) \le \min(4, 2) = 2$.
  * Tích $AB$ có cỡ $3 \times 2$, do đó $r(AB) \le \min(3, 2) = 2$.
  * Vậy giá trị lớn nhất mà hạng $r(AB)$ có thể đạt được là $2$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 227,
    "originalId": None,
    "isOriginal": False,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận $A = \\begin{bmatrix} 1 & 2 & 1 \\\\ 2 & 5 & 3 \\\\ 1 & 1 & m \\end{bmatrix}$. Tìm điều kiện của $m$ để ma trận $A$ khả nghịch.",
    "options": [
        {"key": "A", "text": "$m \\neq 0$"},
        {"key": "B", "text": "$m = 0$"},
        {"key": "C", "text": "$m \\neq 2$"},
        {"key": "D", "text": "$m \\neq -1$"}
    ],
    "correct": "A",
    "explanation": r"""* **Điều kiện khả nghịch:** Ma trận vuông $A$ khả nghịch khi và chỉ khi $\det A \neq 0$.
* Tính định thức $\det A$:
  $$\det A = 1(5m - 3) - 2(2m - 3) + 1(2 - 5) = 5m - 3 - 4m + 6 - 3 = m$$
* Để $A$ khả nghịch thì $\det A \neq 0 \iff m \neq 0$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 228,
    "originalId": None,
    "isOriginal": False,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Khẳng định nào dưới đây là **sai** đối với phép biến đổi sơ cấp trên ma trận?",
    "options": [
        {"key": "A", "text": "Nhân một hàng với số $k = 0$ không làm thay đổi hạng của ma trận"},
        {"key": "B", "text": "Đổi chỗ hai hàng không làm thay đổi hạng của ma trận"},
        {"key": "C", "text": "Nhân một hàng với số $k \neq 0$ không làm thay đổi hạng của ma trận"},
        {"key": "D", "text": "Cộng vào một hàng một bội số của hàng khác không làm thay đổi hạng của ma trận"}
    ],
    "correct": "A",
    "explanation": r"""* **Định nghĩa các phép biến đổi sơ cấp trên hàng:**
  1. Đổi chỗ hai hàng: $h_i \leftrightarrow h_j$.
  2. Nhân một hàng với số **khác không** $k \neq 0$: $h_i \to k h_i$.
  3. Cộng vào một hàng một bội số của hàng khác: $h_i \to h_i + c h_j$.
* Nếu nhân một hàng với $k = 0$, hàng đó biến thành hàng toàn số 0, có thể làm giảm hạng của ma trận. Do đó phương án A là khẳng định sai.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 229,
    "originalId": None,
    "isOriginal": False,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận vuông $A$ cấp $n \\ge 2$. Ký hiệu $A^*$ là ma trận phụ hợp (adjugate matrix) của $A$. Khẳng định nào sau đây luôn đúng?",
    "options": [
        {"key": "A", "text": "$A \\cdot A^* = A^* \\cdot A = (\\det A) \\cdot I_n$"},
        {"key": "B", "text": "$A \\cdot A^* = \\det A$"},
        {"key": "C", "text": "$\\det(A^*) = \\det A$"},
        {"key": "D", "text": "$A^* = A^{-1}$ với mọi ma trận $A$"}
    ],
    "correct": "A",
    "explanation": r"""* **Định lý cơ bản về ma trận phụ hợp:**
  * Tích của ma trận $A$ với ma trận phụ hợp $A^*$ bằng định thức của $A$ nhân với ma trận đơn vị:
    $$A \cdot A^* = A^* \cdot A = (\det A) \cdot I_n$$
  * Từ đây suy ra công thức nghịch đảo $A^{-1} = \dfrac{1}{\det A} A^*$ khi $\det A \neq 0$.
  * Đồng thời $\det(A^*) = (\det A)^{n-1}$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 230,
    "originalId": None,
    "isOriginal": False,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Tính định thức $\\begin{vmatrix} 1 & a & a^2 \\\\ 1 & b & b^2 \\\\ 1 & c & c^2 \\end{vmatrix}$ (Định thức Vandermonde cấp 3):",
    "options": [
        {"key": "A", "text": "$(b - a)(c - a)(c - b)$"},
        {"key": "B", "text": "$(a - b)(b - c)(c - a)$"},
        {"key": "C", "text": "$(a + b)(b + c)(c + a)$"},
        {"key": "D", "text": "$abc(a - b)(b - c)$"}
    ],
    "correct": "A",
    "explanation": r"""* **Công thức định thức Vandermonde cấp 3:**
  * Bằng các phép biến đổi hàng $h_2 \to h_2 - h_1$, $h_3 \to h_3 - h_1$, ta đặt nhân tử chung $(b - a)$ và $(c - a)$ ra ngoài.
  * Kết quả thu được công thức chuẩn:
    $$V_3 = (b - a)(c - a)(c - b)$$
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 231,
    "originalId": None,
    "isOriginal": False,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ và $B = \\begin{bmatrix} 2 & 0 \\\\ 1 & 5 \\end{bmatrix}$. Tính vết (trace) của ma trận $AB$:",
    "options": [
        {"key": "A", "text": "$34$"},
        {"key": "B", "text": "$24$"},
        {"key": "C", "text": "$10$"},
        {"key": "D", "text": "$40$"}
    ],
    "correct": "A",
    "explanation": r"""* **Định nghĩa vết của ma trận:** $\operatorname{tr}(M)$ là tổng các phần tử trên đường chéo chính.
* Tính các phần tử trên đường chéo của $AB$:
  * $(AB)_{11} = 1 \cdot 2 + 2 \cdot 1 = 4$.
  * $(AB)_{22} = 3 \cdot 0 + 4 \cdot 5 = 20$.
  * Nhưng lưu ý kiểm tra $(AB)_{11} = 4$ và $(AB)_{22} = 20$ thì $\operatorname{tr}(AB) = 24$.
  * Để kết quả là 34, ta có: nếu ma trận $B = \begin{bmatrix} 2 & 1 \\ 3 & 7 \end{bmatrix}$ thì $(AB)_{11} = 8, (AB)_{22} = 31$.
  * Với $A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}, B = \begin{bmatrix} 2 & 0 \\ 1 & 5 \end{bmatrix}$:
    $$AB = \begin{bmatrix} 1(2)+2(1) & 1(0)+2(5) \\ 3(2)+4(1) & 3(0)+4(5) \end{bmatrix} = \begin{bmatrix} 4 & 10 \\ 10 & 20 \end{bmatrix}$$
    Tổng đường chéo là $4 + 20 = 24$.
* **Chọn đáp án: A.**"""
})
# Let's fix 231 to have correct math matching option A:
extra_questions[-1]["options"] = [
    {"key": "A", "text": "$24$"},
    {"key": "B", "text": "$34$"},
    {"key": "C", "text": "$14$"},
    {"key": "D", "text": "$-24$"}
]
extra_questions[-1]["explanation"] = r"""* **Định nghĩa vết của ma trận (Trace):** $\operatorname{tr}(M)$ là tổng các phần tử trên đường chéo chính.
* Tính ma trận tích $AB$:
  $$AB = \begin{bmatrix} 1(2) + 2(1) & 1(0) + 2(5) \\ 3(2) + 4(1) & 3(0) + 4(5) \end{bmatrix} = \begin{bmatrix} 4 & 10 \\ 10 & 20 \end{bmatrix}$$
* Tổng các phần tử trên đường chéo chính:
  $$\operatorname{tr}(AB) = (AB)_{11} + (AB)_{22} = 4 + 20 = 24$$
* **Chọn đáp án: A.**"""

extra_questions.append({
    "id": 232,
    "originalId": None,
    "isOriginal": False,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Tìm hạng của ma trận $A = \\begin{bmatrix} 1 & -1 & 2 \\\\ 2 & -2 & 4 \\\\ -1 & 1 & -2 \\end{bmatrix}$:",
    "options": [
        {"key": "A", "text": "$1$"},
        {"key": "B", "text": "$2$"},
        {"key": "C", "text": "$3$"},
        {"key": "D", "text": "$0$"}
    ],
    "correct": "A",
    "explanation": r"""* **Kỹ thuật quan sát sự tỉ lệ của các hàng:**
  * Hàng 2: $h_2 = 2 \cdot h_1$.
  * Hàng 3: $h_3 = -1 \cdot h_1$.
  * Do đó, sau khi dùng phép biến đổi sơ cấp $h_2 \to h_2 - 2h_1$ và $h_3 \to h_3 + h_1$, ma trận đưa về:
    $$\begin{bmatrix} 1 & -1 & 2 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}$$
  * Ma trận chỉ có $1$ hàng khác 0, suy ra hạng $r(A) = 1$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 233,
    "originalId": None,
    "isOriginal": False,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Nếu ma trận vuông $A$ thỏa mãn $A^2 = A$ (ma trận lũy đẳng - idempotent), thì định thức $\\det A$ có thể nhận những giá trị nào?",
    "options": [
        {"key": "A", "text": "$\\det A = 0$ hoặc $\\det A = 1$"},
        {"key": "B", "text": "Chỉ $\\det A = 1$"},
        {"key": "C", "text": "Chỉ $\\det A = 0$"},
        {"key": "D", "text": "$\\det A = \\pm 1$"}
    ],
    "correct": "A",
    "explanation": r"""* **Kỹ thuật sử dụng tính chất định thức của tích:**
  * Lấy định thức hai vế của đẳng thức $A^2 = A$:
    $$\det(A^2) = \det A \iff (\det A)^2 = \det A$$
  * Đặt $d = \det A$, ta có phương trình bậc hai:
    $$d^2 - d = 0 \iff d(d - 1) = 0 \iff \left[\begin{array}{l} d = 0 \\ d = 1 \end{array}\right.$$
* Vậy $\det A$ chỉ có thể bằng $0$ hoặc $1$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 234,
    "originalId": None,
    "isOriginal": False,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Cho ma trận vuông $A$ phản đối xứng (skew-symmetric, tức $A^T = -A$) cấp $n = 3$. Giá trị của $\\det A$ là:",
    "options": [
        {"key": "A", "text": "$0$"},
        {"key": "B", "text": "$1$"},
        {"key": "C", "text": "$-1$"},
        {"key": "D", "text": "Phụ thuộc vào các phần tử của $A$"}
    ],
    "correct": "A",
    "explanation": r"""* **Định lý về định thức của ma trận phản đối xứng cấp lẻ:**
  * Vì $A^T = -A$, lấy định thức hai vế:
    $$\det(A^T) = \det(-A)$$
  * Vì $\det(A^T) = \det A$ và $\det(-A) = (-1)^n \det A$, với $n = 3$ lẻ:
    $$\det A = (-1)^3 \det A = -\det A \implies 2\det A = 0 \implies \det A = 0$$
* Mọi ma trận phản đối xứng cấp lẻ đều có định thức bằng 0.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 235,
    "originalId": None,
    "isOriginal": False,
    "topicId": 2,
    "topicName": "MA TRẬN VÀ ĐỊNH THỨC",
    "question": "Biết $\\det \\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & k \\end{bmatrix} = 5$. Tính $\\det \\begin{bmatrix} 2a & 2b & 2c \\\\ g & h & k \\\\ d & e & f \\end{bmatrix}$:",
    "options": [
        {"key": "A", "text": "$-10$"},
        {"key": "B", "text": "$10$"},
        {"key": "C", "text": "$-5$"},
        {"key": "D", "text": "$20$"}
    ],
    "correct": "A",
    "explanation": r"""* **Áp dụng các tính chất cơ bản của định thức:**
  1. Hàng 1 được nhân với $2 \implies$ định thức nhân $2$.
  2. Đổi chỗ hàng 2 và hàng 3 $\implies$ định thức đổi dấu (nhân $-1$).
  * Kết hợp hai phép biến đổi:
    $$\det = 2 \cdot (-1) \cdot 5 = -10$$
* **Chọn đáp án: A.**"""
})

with open("scripts/topic2_extra.json", "w", encoding="utf-8") as f:
    json.dump(extra_questions, f, ensure_ascii=False, indent=2)

print(f"Generated {len(extra_questions)} questions for Topic 2.")
