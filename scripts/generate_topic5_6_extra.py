# -*- coding: utf-8 -*-
import json

extra_questions = []

# ==============================================================================
# CHUYÊN ĐỀ 5: ÁNH XẠ TUYẾN TÍNH (15 CÂU: IDs 271 - 285)
# ==============================================================================

extra_questions.append({
    "id": 271,
    "originalId": None,
    "isOriginal": False,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Ánh xạ nào dưới đây là một **ánh xạ tuyến tính**?",
    "options": [
        {"key": "A", "text": "$f: \\mathbb{R}^2 \\to \\mathbb{R}^3, \\, f(x, y) = (2x - y, \\, 3x + 4y, \\, x)$"},
        {"key": "B", "text": "$f: \\mathbb{R}^2 \\to \\mathbb{R}^2, \\, f(x, y) = (x + 1, \\, y)$"},
        {"key": "C", "text": "$f: \\mathbb{R}^2 \\to \\mathbb{R}, \\, f(x, y) = xy$"},
        {"key": "D", "text": "$f: \\mathbb{R}^3 \\to \\mathbb{R}, \\, f(x, y, z) = x^2 + y + z$"}
    ],
    "correct": "A",
    "explanation": r"""* **Dấu hiệu nhận biết ánh xạ tuyến tính:**
  * Mỗi thành phần của $f(x, y)$ phải là đa thức bậc nhất thuần nhất đối với các biến (không có hằng số tự do, không có tích biến, không có bậc hai hoặc căn thức).
  * Phương án A thỏa mãn đầy đủ các điều kiện $f(u + v) = f(u) + f(v)$ và $f(ku) = k f(u)$.
  * B sai vì $f(0, 0) = (1, 0) \neq (0, 0)$ (có hằng số tự do $+1$).
  * C sai vì chứa tích hai biến $xy$ (bậc hai).
  * D sai vì chứa số hạng bậc hai $x^2$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 272,
    "originalId": None,
    "isOriginal": False,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho ánh xạ tuyến tính $f: V \\to W$. Định lý về số chiều (Rank-Nullity Theorem) khẳng định rằng:",
    "options": [
        {"key": "A", "text": "$\\dim V = \\dim \\ker f + \\dim \\operatorname{im} f$"},
        {"key": "B", "text": "$\\dim W = \\dim \\ker f + \\dim \\operatorname{im} f$"},
        {"key": "C", "text": "$\\dim V + \\dim W = \\dim \\ker f + \\dim \\operatorname{im} f$"},
        {"key": "D", "text": "$\\dim \\ker f = \\dim \\operatorname{im} f$"}
    ],
    "correct": "A",
    "explanation": r"""* **Định lý số chiều (Rank-Nullity Theorem):**
  * Với mọi ánh xạ tuyến tính $f: V \to W$ xuất phát từ không gian hữu hạn chiều $V$, ta luôn có đẳng thức:
    $$\dim V = \dim \ker f + \dim \operatorname{im} f$$
  * Tức là: Số chiều của không gian nguồn = Số chiều của nhân (hạch) + Hạng của ánh xạ (số chiều của ảnh).
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 273,
    "originalId": None,
    "isOriginal": False,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^4 \\to \\mathbb{R}^3$ có hạng $r(f) = 3$. Số chiều của nhân $\\dim \\ker f$ là:",
    "options": [
        {"key": "A", "text": "$1$"},
        {"key": "B", "text": "$0$"},
        {"key": "C", "text": "$2$"},
        {"key": "D", "text": "$3$"}
    ],
    "correct": "A",
    "explanation": r"""* **Áp dụng định lý số chiều:**
  * Không gian nguồn là $V = \mathbb{R}^4 \implies \dim V = 4$.
  * Hạng của ánh xạ tuyến tính chính là số chiều của ảnh: $\dim \operatorname{im} f = r(f) = 3$.
  * Theo định lý số chiều:
    $$\dim \ker f = \dim V - \dim \operatorname{im} f = 4 - 3 = 1$$
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 274,
    "originalId": None,
    "isOriginal": False,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Ánh xạ tuyến tính $f: V \\to W$ là **đơn ánh** khi và chỉ khi:",
    "options": [
        {"key": "A", "text": "$\\ker f = \\{\\vec{0}\\}$"},
        {"key": "B", "text": "$\\operatorname{im} f = W$"},
        {"key": "C", "text": "$\\dim \\ker f > 0$"},
        {"key": "D", "text": "$\\dim V = \\dim W$"}
    ],
    "correct": "A",
    "explanation": r"""* **Tiêu chuẩn đơn ánh của ánh xạ tuyến tính:**
  * $f$ là đơn ánh khi và chỉ khi phương trình $f(x) = \vec{0}$ chỉ có duy nhất nghiệm tầm thường $x = \vec{0}$.
  * Điều này tương đương với tập nhân chỉ chứa phần tử không:
    $$\ker f = \{\vec{0}\} \iff \dim \ker f = 0$$
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 275,
    "originalId": None,
    "isOriginal": False,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho toán tử tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ xác định bởi $f(x, y) = (2x + y, \\, x - y)$. Ma trận của $f$ trong cơ sở chính tắc của $\\mathbb{R}^2$ là:",
    "options": [
        {"key": "A", "text": "$\\begin{bmatrix} 2 & 1 \\\\ 1 & -1 \\end{bmatrix}$"},
        {"key": "B", "text": "$\\begin{bmatrix} 2 & 1 \\\\ -1 & 1 \\end{bmatrix}$"},
        {"key": "C", "text": "$\\begin{bmatrix} 1 & -1 \\\\ 2 & 1 \\end{bmatrix}$"},
        {"key": "D", "text": "$\\begin{bmatrix} 2 & -1 \\\\ 1 & 1 \\end{bmatrix}$"}
    ],
    "correct": "A",
    "explanation": r"""* **Kỹ thuật lập ma trận theo cơ sở chính tắc:**
  * Cơ sở chính tắc $e_1 = (1, 0), e_2 = (0, 1)$.
  * Tính ảnh của từng véc tơ cơ sở:
    * $f(e_1) = f(1, 0) = (2, 1) \implies$ Cột 1 là $\begin{bmatrix} 2 \\ 1 \end{bmatrix}$.
    * $f(e_2) = f(0, 1) = (1, -1) \implies$ Cột 2 là $\begin{bmatrix} 1 \\ -1 \end{bmatrix}$.
  * Ghép hai cột lại:
    $$[f] = \begin{bmatrix} 2 & 1 \\ 1 & -1 \end{bmatrix}$$
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 276,
    "originalId": None,
    "isOriginal": False,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Khi đổi cơ sở của không gian $V$ với ma trận chuyển cơ sở là $P$, ma trận của toán tử tuyến tính $f: V \\to V$ thay đổi theo công thức nào?",
    "options": [
        {"key": "A", "text": "$A' = P^{-1} A P$"},
        {"key": "B", "text": "$A' = P A P^{-1}$"},
        {"key": "C", "text": "$A' = P^T A P$"},
        {"key": "D", "text": "$A' = P A P$"}
    ],
    "correct": "A",
    "explanation": r"""* **Công thức đổi ma trận của toán tử tuyến tính:**
  * Cho $A = [f]_B$ là ma trận của $f$ trong cơ sở cũ $B$, và $P = P_{B \to B'}$ là ma trận chuyển từ cơ sở cũ sang cơ sở mới $B'$.
  * Ma trận của $f$ trong cơ sở mới $B'$ là:
    $$A' = P^{-1} A P$$
  * (Hai ma trận $A$ và $A'$ được gọi là đồng dạng - similar matrices).
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 277,
    "originalId": None,
    "isOriginal": False,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^3 \\to \\mathbb{R}^2$ có ma trận biểu diễn cỡ:",
    "options": [
        {"key": "A", "text": "$2 \\times 3$"},
        {"key": "B", "text": "$3 \\times 2$"},
        {"key": "C", "text": "$3 \\times 3$"},
        {"key": "D", "text": "$2 \\times 2$"}
    ],
    "correct": "A",
    "explanation": r"""* **Quy tắc xác định cỡ ma trận của ánh xạ tuyến tính:**
  * Cho ánh xạ tuyến tính $f: V \to W$ với $\dim V = n$ và $\dim W = m$.
  * Ma trận $[f]$ luôn có:
    * Số cột = Số véc tơ cơ sở của không gian nguồn $V = n$.
    * Số hàng = Số tọa độ trong không gian đích $W = m$.
  * Do đó cỡ của ma trận là $m \\times n$.
  * Với $f: \mathbb{R}^3 \to \mathbb{R}^2$, ma trận có cỡ $2 \times 3$ (2 hàng, 3 cột).
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 278,
    "originalId": None,
    "isOriginal": False,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho toán tử tuyến tính $f: \\mathbb{R}^3 \\to \\mathbb{R}^3$ xác định bởi $f(x, y, z) = (x + y, \\, y + z, \\, x - z)$. Định thức của ma trận biểu diễn $f$ trong cơ sở chính tắc là:",
    "options": [
        {"key": "A", "text": "$0$"},
        {"key": "B", "text": "$2$"},
        {"key": "C", "text": "$-2$"},
        {"key": "D", "text": "$1$"}
    ],
    "correct": "A",
    "explanation": r"""* **Lập ma trận của $f$:**
  $$A = \begin{bmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & -1 \end{bmatrix}$$
* Tính định thức $\det A$:
  $$\det A = 1(-1 - 0) - 1(0 - 1) + 0 = -1 + 1 = 0$$
* Vì $\det A = 0$, $f$ không phải là một đẳng cấu (không là đơn ánh cũng không là toàn ánh).
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 279,
    "originalId": None,
    "isOriginal": False,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Toán tử tuyến tính $f: \\mathbb{R}^n \\to \\mathbb{R}^n$ có ma trận $A$ trong cơ sở chính tắc. $f$ là một **đẳng cấu** khi và chỉ khi:",
    "options": [
        {"key": "A", "text": "$\\det A \\neq 0$"},
        {"key": "B", "text": "$\\det A = 0$"},
        {"key": "C", "text": "$r(A) < n$"},
        {"key": "D", "text": "$A = I_n$"}
    ],
    "correct": "A",
    "explanation": r"""* **Tiêu chuẩn đẳng cấu của toán tử tuyến tính trên không gian hữu hạn chiều:**
  * Giữa hai không gian có cùng số chiều hữu hạn $n$, các mệnh đề sau là tương đương:
    1. $f$ là đơn ánh.
    2. $f$ là toàn ánh.
    3. $f$ là song ánh (đẳng cấu).
    4. Ma trận biểu diễn $A$ khả nghịch ($\det A \neq 0$).
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 280,
    "originalId": None,
    "isOriginal": False,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Tìm một cơ sở của nhân $\\ker f$ với $f: \\mathbb{R}^3 \\to \\mathbb{R}^2$ xác định bởi $f(x, y, z) = (x - y, \\, y - z)$:",
    "options": [
        {"key": "A", "text": "$\\{(1, 1, 1)\\}$"},
        {"key": "B", "text": "$\\{(1, -1, 0), \\, (0, 1, -1)\\}$"},
        {"key": "C", "text": "$\\{(1, 0, 0)\\}$"},
        {"key": "D", "text": "$\\{(1, 1, 0)\\}$"}
    ],
    "correct": "A",
    "explanation": r"""* **Tìm $\ker f$ theo định nghĩa:**
  * $u = (x, y, z) \in \ker f \iff f(x, y, z) = (0, 0)$:
    $$\begin{cases} x - y = 0 \\ y - z = 0 \end{cases} \iff x = y = z$$
  * Tọa độ véc tơ thuộc $\ker f$ có dạng $(x, x, x) = x(1, 1, 1)$ với $x \in \mathbb{R}$.
  * Do đó $\ker f$ là không gian 1 chiều có cơ sở là $\{(1, 1, 1)\}$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 281,
    "originalId": None,
    "isOriginal": False,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho hai toán tử tuyến tính $f, g: V \\to V$ có ma trận tương ứng là $A$ và $B$. Ma trận của toán tử tích hợp $f \\circ g$ là:",
    "options": [
        {"key": "A", "text": "$AB$"},
        {"key": "B", "text": "$BA$"},
        {"key": "C", "text": "$A + B$"},
        {"key": "D", "text": "$A^{-1} B$"}
    ],
    "correct": "A",
    "explanation": r"""* **Ma trận của ánh xạ tích hợp:**
  * Theo định nghĩa: $(f \circ g)(x) = f(g(x))$.
  * Trong biểu diễn tọa độ: $[(f \circ g)(x)] = [f] \cdot [g(x)] = A \cdot (B [x]) = (AB) [x]$.
  * Do đó ma trận của $f \circ g$ chính là tích của hai ma trận $AB$ theo đúng thứ tự.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 282,
    "originalId": None,
    "isOriginal": False,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho $f: \\mathbb{R}^3 \\to \\mathbb{R}^3$ là phép chiếu vuông góc lên mặt phẳng $Oxy$. Ma trận của $f$ trong cơ sở chính tắc là:",
    "options": [
        {"key": "A", "text": "$\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$"},
        {"key": "B", "text": "$\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$"},
        {"key": "C", "text": "$\\begin{bmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$"},
        {"key": "D", "text": "$\\begin{bmatrix} 0 & 1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$"}
    ],
    "correct": "A",
    "explanation": r"""* **Hình học của phép chiếu:**
  * Phép chiếu lên $Oxy$ biến $(x, y, z) \mapsto (x, y, 0)$.
  * Áp dụng lên cơ sở chính tắc:
    * $f(1, 0, 0) = (1, 0, 0) \implies$ Cột 1 là $\begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}$.
    * $f(0, 1, 0) = (0, 1, 0) \implies$ Cột 2 là $\begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}$.
    * $f(0, 0, 1) = (0, 0, 0) \implies$ Cột 3 là $\begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$.
  * Ghép lại ta được ma trận phương án A.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 283,
    "originalId": None,
    "isOriginal": False,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Số chiều của ảnh $\\dim \\operatorname{im} f$ của ánh xạ tuyến tính $f: V \\to W$ bằng:",
    "options": [
        {"key": "A", "text": "Hạng của ma trận biểu diễn $f$ đối với cặp cơ sở bất kỳ"},
        {"key": "B", "text": "Số chiều của không gian nguồn $V$"},
        {"key": "C", "text": "Số chiều của không gian đích $W$"},
        {"key": "D", "text": "$\\det A$ với $A$ là ma trận của $f$"}
    ],
    "correct": "A",
    "explanation": r"""* **Định lý về hạng của ánh xạ tuyến tính:**
  * Hạng của ánh xạ tuyến tính $r(f) = \dim \operatorname{im} f$ luôn bằng hạng của ma trận biểu diễn $A$ của nó trong bất kỳ cặp cơ sở nào:
    $$\dim \operatorname{im} f = r(A)$$
  * Hạng này không phụ thuộc vào việc lựa chọn cơ sở.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 284,
    "originalId": None,
    "isOriginal": False,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Cho $f: P_2 \\to P_1$ là ánh xạ lấy đạo hàm: $f(p(x)) = p'(x)$. Số chiều của nhân $\\dim \\ker f$ là:",
    "options": [
        {"key": "A", "text": "$1$"},
        {"key": "B", "text": "$0$"},
        {"key": "C", "text": "$2$"},
        {"key": "D", "text": "$3$"}
    ],
    "correct": "A",
    "explanation": r"""* **Nhân của ánh xạ đạo hàm:**
  * $\ker f = \{p(x) \in P_2 \mid p'(x) = 0\}$.
  * Đa thức có đạo hàm bằng 0 là các đa thức hằng: $p(x) = c$ với $c \in \mathbb{R}$.
  * Không gian các đa thức hằng có số chiều bằng $1$ (cơ sở là $\{1\}$).
  * Do đó $\dim \ker f = 1$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 285,
    "originalId": None,
    "isOriginal": False,
    "topicId": 5,
    "topicName": "ÁNH XẠ TUYẾN TÍNH",
    "question": "Toán tử tuyến tính $f: \\mathbb{R}^3 \\to \\mathbb{R}^3$ có $r(f) = 2$. Khẳng định nào sau đây là đúng?",
    "options": [
        {"key": "A", "text": "$f$ không là đơn ánh và không là toàn ánh"},
        {"key": "B", "text": "$f$ là đơn ánh nhưng không là toàn ánh"},
        {"key": "C", "text": "$f$ là toàn ánh nhưng không là đơn ánh"},
        {"key": "D", "text": "$f$ là một song ánh"}
    ],
    "correct": "A",
    "explanation": r"""* **Phân tích theo định lý số chiều:**
  * Không gian nguồn và đích đều là $\mathbb{R}^3$ (số chiều = 3).
  * Vì $\dim \operatorname{im} f = r(f) = 2 < 3 \implies \operatorname{im} f \neq \mathbb{R}^3$, do đó $f$ **không là toàn ánh**.
  * Mặt khác $\dim \ker f = \dim V - r(f) = 3 - 2 = 1 > 0$, do đó $f$ **không là đơn ánh**.
* **Chọn đáp án: A.**"""
})

# ==============================================================================
# CHUYÊN ĐỀ 6: DẠNG TOÀN PHƯƠNG (15 CÂU: IDs 286 - 300)
# ==============================================================================

extra_questions.append({
    "id": 286,
    "originalId": None,
    "isOriginal": False,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Ma trận của dạng toàn phương $Q(x_1, x_2) = 2x_1^2 + 6x_1 x_2 - 5x_2^2$ là:",
    "options": [
        {"key": "A", "text": "$\\begin{bmatrix} 2 & 3 \\\\ 3 & -5 \\end{bmatrix}$"},
        {"key": "B", "text": "$\\begin{bmatrix} 2 & 6 \\\\ 6 & -5 \\end{bmatrix}$"},
        {"key": "C", "text": "$\\begin{bmatrix} 2 & 6 \\\\ 0 & -5 \\end{bmatrix}$"},
        {"key": "D", "text": "$\\begin{bmatrix} 4 & 3 \\\\ 3 & -10 \\end{bmatrix}$"}
    ],
    "correct": "A",
    "explanation": r"""* **Quy tắc lập ma trận đối xứng của dạng toàn phương:**
  * Phần tử đường chéo $a_{ii}$ là hệ số của $x_i^2$:
    * $a_{11} = 2$.
    * $a_{22} = -5$.
  * Phần tử ngoài đường chéo $a_{12} = a_{21} = \dfrac{1}{2} \times$ (hệ số của $x_1 x_2$):
    * $a_{12} = a_{21} = \dfrac{6}{2} = 3$.
  * Ghép lại: $A = \begin{bmatrix} 2 & 3 \\ 3 & -5 \end{bmatrix}$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 287,
    "originalId": None,
    "isOriginal": False,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Theo tiêu chuẩn Sylvester, dạng toàn phương 3 biến có ma trận đối xứng $A$ là **xác định dương** khi và chỉ khi:",
    "options": [
        {"key": "A", "text": "$\\Delta_1 > 0, \\, \\Delta_2 > 0, \\, \\Delta_3 > 0$"},
        {"key": "B", "text": "$\\Delta_1 < 0, \\, \\Delta_2 > 0, \\, \\Delta_3 < 0$"},
        {"key": "C", "text": "$\\Delta_1 > 0, \\, \\Delta_2 < 0, \\, \\Delta_3 > 0$"},
        {"key": "D", "text": "$\\Delta_3 = \\det A > 0$"}
    ],
    "correct": "A",
    "explanation": r"""* **Tiêu chuẩn Sylvester đối với dạng toàn phương xác định dương:**
  * Dạng toàn phương xác định dương khi và chỉ khi tất cả các định thức con chính góc đều **dương**:
    $$\Delta_1 > 0, \quad \Delta_2 > 0, \quad \Delta_3 > 0$$
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 288,
    "originalId": None,
    "isOriginal": False,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Theo tiêu chuẩn Sylvester, dạng toàn phương 3 biến có ma trận đối xứng $A$ là **xác định âm** khi và chỉ khi:",
    "options": [
        {"key": "A", "text": "$\\Delta_1 < 0, \\, \\Delta_2 > 0, \\, \\Delta_3 < 0$"},
        {"key": "B", "text": "$\\Delta_1 < 0, \\, \\Delta_2 < 0, \\, \\Delta_3 < 0$"},
        {"key": "C", "text": "$\\Delta_1 > 0, \\, \\Delta_2 > 0, \\, \\Delta_3 > 0$"},
        {"key": "D", "text": "$\\Delta_3 = \\det A < 0$"}
    ],
    "correct": "A",
    "explanation": r"""* **Tiêu chuẩn Sylvester đối với dạng toàn phương xác định âm:**
  * Dạng toàn phương xác định âm khi và chỉ khi các định thức con chính góc **đổi dấu xen kẽ**, bắt đầu từ dấu âm:
    $$(-1)^k \Delta_k > 0 \iff \Delta_1 < 0, \quad \Delta_2 > 0, \quad \Delta_3 < 0$$
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 289,
    "originalId": None,
    "isOriginal": False,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Tìm tất cả các giá trị của $m$ để dạng toàn phương $Q(x_1, x_2) = x_1^2 + 2m x_1 x_2 + 4x_2^2$ xác định dương:",
    "options": [
        {"key": "A", "text": "$-2 < m < 2$"},
        {"key": "B", "text": "$m > 2$ hoặc $m < -2$"},
        {"key": "C", "text": "$m < 2$"},
        {"key": "D", "text": "$m > 0$"}
    ],
    "correct": "A",
    "explanation": r"""* **Áp dụng tiêu chuẩn Sylvester:**
  * Ma trận của $Q$: $A = \begin{bmatrix} 1 & m \\ m & 4 \end{bmatrix}$.
  * Các định thức con chính góc:
    * $\Delta_1 = 1 > 0$ (luôn thỏa mãn).
    * $\Delta_2 = \det A = 1 \cdot 4 - m^2 = 4 - m^2$.
  * Để $Q$ xác định dương:
    $$\Delta_2 > 0 \iff 4 - m^2 > 0 \iff m^2 < 4 \iff -2 < m < 2$$
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 290,
    "originalId": None,
    "isOriginal": False,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Dùng phương pháp Lagrange đưa dạng toàn phương $Q(x_1, x_2) = x_1^2 + 4x_1 x_2 + 5x_2^2$ về dạng chính tắc, ta thu được:",
    "options": [
        {"key": "A", "text": "$y_1^2 + y_2^2$ với $y_1 = x_1 + 2x_2, \\, y_2 = x_2$"},
        {"key": "B", "text": "$y_1^2 - y_2^2$ với $y_1 = x_1 + 2x_2, \\, y_2 = x_2$"},
        {"key": "C", "text": "$y_1^2 + 5y_2^2$"},
        {"key": "D", "text": "$4y_1^2 + y_2^2$"}
    ],
    "correct": "A",
    "explanation": r"""* **Phương pháp Lagrange (tách bình phương đủ):**
  $$Q = (x_1^2 + 4x_1 x_2 + 4x_2^2) + x_2^2 = (x_1 + 2x_2)^2 + x_2^2$$
* Đặt biến mới:
  $$\begin{cases} y_1 = x_1 + 2x_2 \\ y_2 = x_2 \end{cases}$$
* Dạng chính tắc là: $Q = y_1^2 + y_2^2$.
* Cả hai hệ số đều dương $\implies Q$ xác định dương.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 291,
    "originalId": None,
    "isOriginal": False,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Luật quán tính của Sylvester khẳng định rằng khi đưa dạng toàn phương về dạng chính tắc bằng các phép biến đổi tuyến tính không suy biến thì:",
    "options": [
        {"key": "A", "text": "Số hệ số dương và số hệ số âm là các đại lượng bất biến"},
        {"key": "B", "text": "Các hệ số trong dạng chính tắc luôn giữ nguyên không đổi"},
        {"key": "C", "text": "Dạng chính tắc luôn luôn duy nhất"},
        {"key": "D", "text": "Chỉ có hạng của ma trận là không đổi"}
    ],
    "correct": "A",
    "explanation": r"""* **Định lý quán tính Sylvester (Law of Inertia):**
  * Có nhiều cách biến đổi đưa một dạng toàn phương về dạng chính tắc $c_1 y_1^2 + \dots + c_r y_r^2$.
  * Mặc dù các giá trị cụ thể của $c_i$ có thể khác nhau tùy cách chọn biến, nhưng **số lượng hệ số dương (chỉ số quán tính dương $p$)** và **số lượng hệ số âm (chỉ số quán tính âm $q$)** luôn luôn không đổi (bất biến).
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 292,
    "originalId": None,
    "isOriginal": False,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Dạng toàn phương $Q(x_1, x_2) = (x_1 - 2x_2)^2$ có tính chất nào dưới đây?",
    "options": [
        {"key": "A", "text": "Nửa xác định dương"},
        {"key": "B", "text": "Xác định dương"},
        {"key": "C", "text": "Không xác định"},
        {"key": "D", "text": "Xác định âm"}
    ],
    "correct": "A",
    "explanation": r"""* **Phân biệt xác định dương và nửa xác định dương:**
  * Ta thấy $Q(x_1, x_2) = (x_1 - 2x_2)^2 \ge 0$ với mọi $(x_1, x_2)$.
  * Tuy nhiên, với điểm khác không $(x_1 = 2, x_2 = 1) \neq (0, 0)$, ta có:
    $$Q(2, 1) = (2 - 2)^2 = 0$$
  * Vì tồn tại điểm khác không mà tại đó $Q = 0$, nên $Q$ không thể là xác định dương ngặt mà là **nửa xác định dương** (positive semidefinite).
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 293,
    "originalId": None,
    "isOriginal": False,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Dạng toàn phương nào dưới đây là **không xác định dấu (đổi dấu)**?",
    "options": [
        {"key": "A", "text": "$Q(x_1, x_2) = x_1^2 - 3x_2^2$"},
        {"key": "B", "text": "$Q(x_1, x_2) = x_1^2 + 2x_2^2$"},
        {"key": "C", "text": "$Q(x_1, x_2) = -x_1^2 - 4x_2^2$"},
        {"key": "D", "text": "$Q(x_1, x_2) = (x_1 + x_2)^2$"}
    ],
    "correct": "A",
    "explanation": r"""* **Dấu hiệu nhận biết dạng toàn phương không xác định dấu:**
  * Dạng toàn phương có thể nhận cả giá trị dương lẫn giá trị âm:
    * Chọn $(1, 0) \implies Q(1, 0) = 1 > 0$.
    * Chọn $(0, 1) \implies Q(0, 1) = -3 < 0$.
  * Do $Q$ nhận cả giá trị dương và âm nên $Q$ là dạng toàn phương **không xác định dấu**.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 294,
    "originalId": None,
    "isOriginal": False,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Hạng của dạng toàn phương $Q$ bằng:",
    "options": [
        {"key": "A", "text": "Hạng của ma trận đối xứng biểu diễn $Q$"},
        {"key": "B", "text": "Số biến của dạng toàn phương"},
        {"key": "C", "text": "Chỉ số quán tính dương $p$"},
        {"key": "D", "text": "Chỉ số quán tính âm $q$"}
    ],
    "correct": "A",
    "explanation": r"""* **Hạng của dạng toàn phương:**
  * Hạng của dạng toàn phương được định nghĩa là hạng của ma trận đối xứng biểu diễn nó trong cơ sở bất kỳ: $r(Q) = r(A)$.
  * Trong dạng chính tắc $c_1 y_1^2 + \dots + c_r y_r^2$, hạng $r(Q) = p + q$ (tổng số hệ số khác 0).
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 295,
    "originalId": None,
    "isOriginal": False,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Cho dạng toàn phương $Q(x_1, x_2, x_3) = x_1^2 + 2x_2^2 + mx_3^2 + 2x_1 x_2$. Tìm $m$ để $Q$ xác định dương:",
    "options": [
        {"key": "A", "text": "$m > 0$"},
        {"key": "B", "text": "$m > 1$"},
        {"key": "C", "text": "$m < 0$"},
        {"key": "D", "text": "Không tồn tại $m$"}
    ],
    "correct": "A",
    "explanation": r"""* **Lập ma trận đối xứng:**
  $$A = \begin{bmatrix} 1 & 1 & 0 \\ 1 & 2 & 0 \\ 0 & 0 & m \end{bmatrix}$$
* Tính các định thức con chính góc:
  * $\Delta_1 = 1 > 0$.
  * $\Delta_2 = \begin{vmatrix} 1 & 1 \\ 1 & 2 \end{vmatrix} = 2 - 1 = 1 > 0$.
  * $\Delta_3 = \det A = m \cdot \Delta_2 = m \cdot 1 = m$.
* Để $Q$ xác định dương $\iff \Delta_3 > 0 \iff m > 0$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 296,
    "originalId": None,
    "isOriginal": False,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Tìm ma trận đối xứng của dạng toàn phương $Q(x_1, x_2, x_3) = x_1^2 + 4x_2^2 - 2x_3^2 - 4x_1 x_2 + 6x_2 x_3$:",
    "options": [
        {"key": "A", "text": "$\\begin{bmatrix} 1 & -2 & 0 \\\\ -2 & 4 & 3 \\\\ 0 & 3 & -2 \\end{bmatrix}$"},
        {"key": "B", "text": "$\\begin{bmatrix} 1 & -4 & 0 \\\\ -4 & 4 & 6 \\\\ 0 & 6 & -2 \\end{bmatrix}$"},
        {"key": "C", "text": "$\\begin{bmatrix} 1 & -2 & 0 \\\\ 0 & 4 & 3 \\\\ 0 & 0 & -2 \\end{bmatrix}$"},
        {"key": "D", "text": "$\\begin{bmatrix} 1 & 2 & 0 \\\\ 2 & 4 & 3 \\\\ 0 & 3 & -2 \\end{bmatrix}$"}
    ],
    "correct": "A",
    "explanation": r"""* **Quy tắc phân bổ hệ số:**
  * Đường chéo chính: $a_{11} = 1, a_{22} = 4, a_{33} = -2$.
  * Hệ số $x_1 x_2 = -4 \implies a_{12} = a_{21} = -2$.
  * Hệ số $x_2 x_3 = 6 \implies a_{23} = a_{32} = 3$.
  * Không có $x_1 x_3 \implies a_{13} = a_{31} = 0$.
  * Ma trận thu được là phương án A.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 297,
    "originalId": None,
    "isOriginal": False,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Nếu dạng toàn phương $Q$ trên $\\mathbb{R}^n$ xác định dương thì định thức ma trận biểu diễn $\\det A$ thỏa mãn:",
    "options": [
        {"key": "A", "text": "$\\det A > 0$"},
        {"key": "B", "text": "$\\det A < 0$"},
        {"key": "C", "text": "$\\det A = 0$"},
        {"key": "D", "text": "$\\det A \\ge 0$"}
    ],
    "correct": "A",
    "explanation": r"""* **Tính chất định thức của ma trận xác định dương:**
  * Theo tiêu chuẩn Sylvester, tất cả các định thức con chính góc $\Delta_k > 0$ với mọi $k = 1, \dots, n$.
  * Trong đó $\Delta_n$ chính là định thức của toàn bộ ma trận: $\Delta_n = \det A$.
  * Do đó $\det A > 0$ là điều kiện bắt buộc.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 298,
    "originalId": None,
    "isOriginal": False,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Cho dạng toàn phương $Q(x_1, x_2) = -2x_1^2 + 2x_1 x_2 - x_2^2$. Dạng toàn phương này là:",
    "options": [
        {"key": "A", "text": "Xác định âm"},
        {"key": "B", "text": "Xác định dương"},
        {"key": "C", "text": "Nửa xác định âm"},
        {"key": "D", "text": "Không xác định"}
    ],
    "correct": "A",
    "explanation": r"""* **Áp dụng tiêu chuẩn Sylvester:**
  * Ma trận $A = \begin{bmatrix} -2 & 1 \\ 1 & -1 \end{bmatrix}$.
  * $\Delta_1 = -2 < 0$.
  * $\Delta_2 = (-2)(-1) - 1^2 = 2 - 1 = 1 > 0$.
  * Vì $\Delta_1 < 0$ và $\Delta_2 > 0$ (dấu đan xen bắt đầu từ âm), dạng toàn phương là **xác định âm**.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 299,
    "originalId": None,
    "isOriginal": False,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Dạng chính tắc của dạng toàn phương $Q$ chỉ chứa tích hai biến mà không có bình phương: $Q(x_1, x_2) = 4x_1 x_2$. Dạng chính tắc của nó là:",
    "options": [
        {"key": "A", "text": "$y_1^2 - y_2^2$ với phép đổi biến thích hợp"},
        {"key": "B", "text": "$y_1^2 + y_2^2$"},
        {"key": "C", "text": "$4y_1^2$"},
        {"key": "D", "text": "$-y_1^2 - y_2^2$"}
    ],
    "correct": "A",
    "explanation": r"""* **Kỹ thuật đổi biến khi không có số hạng bình phương:**
  * Đặt $\begin{cases} x_1 = y_1 + y_2 \\ x_2 = y_1 - y_2 \end{cases}$.
  * Khi đó:
    $$Q = 4x_1 x_2 = 4(y_1 + y_2)(y_1 - y_2) = 4(y_1^2 - y_2^2) = (2y_1)^2 - (2y_2)^2$$
  * Dạng chính tắc có 1 hệ số dương và 1 hệ số âm, do đó có dạng $u_1^2 - u_2^2$.
  * Dạng toàn phương này không xác định dấu (hạng 2, $p = 1, q = 1$).
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 300,
    "originalId": None,
    "isOriginal": False,
    "topicId": 6,
    "topicName": "DẠNG TOÀN PHƯƠNG",
    "question": "Cho dạng toàn phương $Q$ có dạng chính tắc là $Q = y_1^2 + 2y_2^2 - 3y_3^2$. Chỉ số quán tính dương $p$ và chỉ số quán tính âm $q$ của $Q$ lần lượt là:",
    "options": [
        {"key": "A", "text": "$p = 2, \\, q = 1$"},
        {"key": "B", "text": "$p = 1, \\, q = 2$"},
        {"key": "C", "text": "$p = 3, \\, q = 0$"},
        {"key": "D", "text": "$p = 2, \\, q = 0$"}
    ],
    "correct": "A",
    "explanation": r"""* **Định nghĩa chỉ số quán tính:**
  * $p$ là số lượng hệ số dương trong dạng chính tắc: các hệ số là $+1$ và $+2 \implies p = 2$.
  * $q$ là số lượng hệ số âm trong dạng chính tắc: hệ số là $-3 \implies q = 1$.
  * Hạng của dạng toàn phương là $r = p + q = 2 + 1 = 3$.
* **Chọn đáp án: A.**"""
})

with open("scripts/topic5_6_extra.json", "w", encoding="utf-8") as f:
    json.dump(extra_questions, f, ensure_ascii=False, indent=2)

print(f"Generated {len(extra_questions)} questions for Topics 5 & 6.")
