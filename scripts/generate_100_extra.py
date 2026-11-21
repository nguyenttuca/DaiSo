# -*- coding: utf-8 -*-
import json

extra_questions = []

# ==============================================================================
# CHUYÊN ĐỀ 1: LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ (20 CÂU: IDs 201 - 220)
# ==============================================================================

extra_questions.append({
    "id": 201,
    "originalId": None,
    "isOriginal": False,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Tìm công thức đối ngẫu trong đại số Boole của công thức $f = (x \\wedge y') \\vee (z \\wedge 1)$.",
    "options": [
        {"key": "A", "text": "$(x \\vee y') \\wedge (z \\vee 0)$"},
        {"key": "B", "text": "$(x' \\vee y) \\wedge (z' \\vee 0)$"},
        {"key": "C", "text": "$(x \\wedge y') \\vee (z \\wedge 0)$"},
        {"key": "D", "text": "$(x \\vee y') \\vee (z \\vee 0)$"}
    ],
    "correct": "A",
    "explanation": """* **Kỹ thuật tìm công thức đối ngẫu trong Đại số Boole:**
  * Giữ nguyên các biến và dấu phủ định của biến ($x \\to x, y' \\to y', z \\to z$).
  * Đổi phép hội $\\wedge$ thành phép tuyển $\\vee$ và ngược lại ($\\vee \\to \\wedge$).
  * Đổi hằng số $1 \\to 0$ và $0 \\to 1$.
* Áp dụng vào biểu thức $(x \\wedge y') \\vee (z \\wedge 1)$:
  * $(x \\wedge y') \\to (x \\vee y')$
  * Dấu tuyển ở giữa $\\vee \\to \\wedge$
  * $(z \\wedge 1) \\to (z \\vee 0)$
* Kết quả thu được: $(x \\vee y') \\wedge (z \\vee 0)$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 202,
    "originalId": None,
    "isOriginal": False,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Đối ngẫu của công thức Boole $(x \\vee y \\vee 0) \\wedge (x' \\vee z')$ là:",
    "options": [
        {"key": "A", "text": "$(x \\wedge y \\wedge 1) \\vee (x' \\wedge z')$"},
        {"key": "B", "text": "$(x' \\wedge y' \\wedge 1) \\vee (x \\wedge z)$"},
        {"key": "C", "text": "$(x \\vee y \\vee 1) \\wedge (x' \\vee z')$"},
        {"key": "D", "text": "$(x \\wedge y \\wedge 0) \\vee (x' \\wedge z')$"}
    ],
    "correct": "A",
    "explanation": """* **Quy tắc đối ngẫu:**
  * Đổi $\\vee \\to \\wedge$, $\\wedge \\to \\vee$.
  * Đổi $0 \\to 1$.
  * Giữ nguyên các biến và dấu phủ định $x, y, x', z'$.
* Biến đổi:
  $$(x \\vee y \\vee 0) \\wedge (x' \\vee z') \\xrightarrow{\\text{đối ngẫu}} (x \\wedge y \\wedge 1) \\vee (x' \\wedge z')$$
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 203,
    "originalId": None,
    "isOriginal": False,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho mệnh đề kéo theo $p \\to q$. Mệnh đề **phản đảo** của mệnh đề này là:",
    "options": [
        {"key": "A", "text": "$\\bar{q} \\to \\bar{p}$"},
        {"key": "B", "text": "$q \\to p$"},
        {"key": "C", "text": "$\\bar{p} \\to \\bar{q}$"},
        {"key": "D", "text": "$\\bar{p} \\vee q$"}
    ],
    "correct": "A",
    "explanation": """* **Lý thuyết các dạng mệnh đề liên quan đến $p \\to q$:**
  * Mệnh đề đảo: $q \\to p$.
  * Mệnh đề nghịch đảo: $\\bar{p} \\to \\bar{q}$.
  * Mệnh đề phản đảo: $\\bar{q} \\to \\bar{p}$.
* **Tính chất quan trọng:** Mệnh đề phản đảo luôn tương đương logic với mệnh đề ban đầu: $(\\bar{q} \\to \\bar{p}) \\equiv (p \\to q)$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 204,
    "originalId": None,
    "isOriginal": False,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Phủ định của mệnh đề kéo theo $p \\to q$ tương đương logic với công thức nào dưới đây?",
    "options": [
        {"key": "A", "text": "$p \\wedge \\bar{q}$"},
        {"key": "B", "text": "$\\bar{p} \\to \\bar{q}$"},
        {"key": "C", "text": "$\\bar{p} \\wedge q$"},
        {"key": "D", "text": "$\\bar{p} \\vee \\bar{q}$"}
    ],
    "correct": "A",
    "explanation": """* **Kỹ thuật biến đổi phủ định mệnh đề kéo theo:**
  * Ta biết tương đương logic cơ bản: $p \\to q \\equiv \\bar{p} \\vee q$.
  * Lấy phủ định hai vế và áp dụng luật De Morgan:
    $$\\overline{p \\to q} \\equiv \\overline{\\bar{p} \\vee q} \\equiv \\bar{\\bar{p}} \\wedge \\bar{q} \\equiv p \\wedge \\bar{q}$$
* **Ý nghĩa:** \"$p$ kéo theo $q$\" chỉ sai khi giả thiết $p$ đúng nhưng kết luận $q$ lại sai ($p \\wedge \\bar{q}$).
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 205,
    "originalId": None,
    "isOriginal": False,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Rút gọn công thức logic $(p \\wedge q) \\vee (p \\wedge \\bar{q})$, ta thu được:",
    "options": [
        {"key": "A", "text": "$p$"},
        {"key": "B", "text": "$q$"},
        {"key": "C", "text": "$p \\vee q$"},
        {"key": "D", "text": "$1$ (hằng đúng)"}
    ],
    "correct": "A",
    "explanation": """* **Áp dụng luật phân phối của phép hội đối với phép tuyển:**
  $$(p \\wedge q) \\vee (p \\wedge \\bar{q}) \\equiv p \\wedge (q \\vee \\bar{q})$$
* Vì $q \\vee \\bar{q} \\equiv 1$ (luật bài trung), ta có:
  $$p \\wedge 1 \\equiv p$$
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 206,
    "originalId": None,
    "isOriginal": False,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Công thức logic nào dưới đây là một **hằng đúng (tautology)**?",
    "options": [
        {"key": "A", "text": "$((p \\to q) \\wedge p) \\to q$"},
        {"key": "B", "text": "$(p \\to q) \\to (q \\to p)$"},
        {"key": "C", "text": "$(p \\vee q) \\to (p \\wedge q)$"},
        {"key": "D", "text": "$\\bar{p} \\to p$"}
    ],
    "correct": "A",
    "explanation": """* **Quy tắc tam đoạn luận khẳng định (Modus Ponens):**
  * Biểu thức $((p \\to q) \\wedge p) \\to q$ là quy tắc suy diễn cơ bản.
  * Kiểm tra tính đúng đắn: Giả sử vế trái đúng $\\implies p \\to q$ đúng và $p$ đúng. Vì $p$ đúng nên để $p \\to q$ đúng thì $q$ bắt buộc phải đúng. Do đó mệnh đề luôn nhận chân trị 1 trong mọi trường hợp.
* Các phương án khác đều có thể nhận giá trị sai với một bộ chân trị cụ thể của $p, q$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 207,
    "originalId": None,
    "isOriginal": False,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho tập hợp $A = \\{1, \\, \\{2\\}, \\, 3\\}$. Khẳng định nào dưới đây là **đúng**?",
    "options": [
        {"key": "A", "text": "$\\{2\\} \\in A$"},
        {"key": "B", "text": "$2 \\in A$"},
        {"key": "C", "text": "$\\{1, 2\\} \\subset A$"},
        {"key": "D", "text": "$\\{\\{2\\}\\} \\in A$"}
    ],
    "correct": "A",
    "explanation": """* **Phân biệt quan hệ phần tử ($\\in$) và tập con ($\\subset$):**
  * Tập $A$ gồm 3 phần tử: phần tử $1$, phần tử $\{2\}$, và phần tử $3$.
  * Vì $\{2\}$ là một phần tử có mặt trong $A$ nên khẳng định **$\{2\} \\in A$ là đúng**.
  * $2 \\notin A$ vì $2$ chỉ nằm bên trong phần tử $\{2\}$, không phải là phần tử độc lập của $A$.
  * $\{1, 2\} \\subset A$ là sai vì $2 \\notin A$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 208,
    "originalId": None,
    "isOriginal": False,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho tập hợp $X$ có $n$ phần tử. Số phần tử của tập lũy thừa $\\mathcal{P}(X)$ (tập hợp tất cả các tập con của $X$) là:",
    "options": [
        {"key": "A", "text": "$2^n$"},
        {"key": "B", "text": "$n^2$"},
        {"key": "C", "text": "$2n$"},
        {"key": "D", "text": "$n!$"}
    ],
    "correct": "A",
    "explanation": """* **Định lý về tập lũy thừa:**
  * Mỗi phần tử của $X$ có $2$ trạng thái khi tạo tập con: hoặc thuộc tập con, hoặc không thuộc tập con.
  * Với $n$ phần tử độc lập, số tập con có thể tạo thành là $\\underbrace{2 \\times 2 \\times \\dots \\times 2}_{n \\text{ lần}} = 2^n$.
  * Do đó $|\mathcal{P}(X)| = 2^n$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 209,
    "originalId": None,
    "isOriginal": False,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Hiệu đối xứng của hai tập hợp $A$ và $B$, ký hiệu $A \\oplus B$, được định nghĩa là:",
    "options": [
        {"key": "A", "text": "$(A \\setminus B) \\cup (B \\setminus A)$"},
        {"key": "B", "text": "$(A \\cup B) \\cap (A \\cap B)$"},
        {"key": "C", "text": "$(A \\cap B) \\setminus (A \\cup B)$"},
        {"key": "D", "text": "$A \\setminus (A \\cap B)$"}
    ],
    "correct": "A",
    "explanation": """* **Định nghĩa hiệu đối xứng (Symmetric Difference):**
  * $A \\oplus B$ (hoặc $A \\Delta B$) là tập hợp các phần tử thuộc $A$ hoặc thuộc $B$ nhưng không thuộc phần giao của chúng:
    $$A \\oplus B = (A \\setminus B) \\cup (B \\setminus A) = (A \\cup B) \\setminus (A \\cap B)$$
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 210,
    "originalId": None,
    "isOriginal": False,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho $A, B$ là hai tập hợp hữu hạn. Công thức bao hàm - loại trừ tính số phần tử $|A \\cup B|$ là:",
    "options": [
        {"key": "A", "text": "$|A| + |B| - |A \\cap B|$"},
        {"key": "B", "text": "$|A| + |B| + |A \\cap B|$"},
        {"key": "C", "text": "$|A| + |B| - 2|A \\cap B|$"},
        {"key": "D", "text": "$|A \\setminus B| + |B \\setminus A|$"}
    ],
    "correct": "A",
    "explanation": """* **Nguyên lý bao hàm - loại trừ (Inclusion-Exclusion Principle):**
  * Khi cộng $|A| + |B|$, phần giao $A \\cap B$ bị đếm hai lần.
  * Do đó cần trừ đi một lần số phần tử của phần giao:
    $$|A \\cup B| = |A| + |B| - |A \\cap B|$$
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 211,
    "originalId": None,
    "isOriginal": False,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho ánh xạ $f: \\mathbb{R} \\to \\mathbb{R}$ xác định bởi $f(x) = 3x - 4$. Khẳng định nào dưới đây đúng?",
    "options": [
        {"key": "A", "text": "$f$ là song ánh"},
        {"key": "B", "text": "$f$ là đơn ánh nhưng không là toàn ánh"},
        {"key": "C", "text": "$f$ là toàn ánh nhưng không là đơn ánh"},
        {"key": "D", "text": "$f$ không là đơn ánh cũng không là toàn ánh"}
    ],
    "correct": "A",
    "explanation": """* **Kỹ thuật xét tính đơn ánh và toàn ánh:**
  * **Đơn ánh:** Giả sử $f(x_1) = f(x_2) \\Leftrightarrow 3x_1 - 4 = 3x_2 - 4 \\Leftrightarrow 3x_1 = 3x_2 \\Leftrightarrow x_1 = x_2$. Vậy $f$ là đơn ánh.
  * **Toàn ánh:** Với mọi $y \\in \\mathbb{R}$, phương trình $3x - 4 = y \\Leftrightarrow x = \\dfrac{y + 4}{3}$ luôn có nghiệm thực duy nhất $x \\in \\mathbb{R}$. Vậy $f$ là toàn ánh.
  * Vì $f$ vừa là đơn ánh vừa là toàn ánh nên $f$ là **song ánh**.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 212,
    "originalId": None,
    "isOriginal": False,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho ánh xạ $f: \\mathbb{Z} \\to \\mathbb{Z}$ xác định bởi $f(n) = 2n + 1$. Khẳng định nào sau đây là đúng?",
    "options": [
        {"key": "A", "text": "$f$ là đơn ánh nhưng không là toàn ánh"},
        {"key": "B", "text": "$f$ là song ánh"},
        {"key": "C", "text": "$f$ là toàn ánh nhưng không là đơn ánh"},
        {"key": "D", "text": "$f$ không là đơn ánh cũng không là toàn ánh"}
    ],
    "correct": "A",
    "explanation": """* **Xét tính đơn ánh trên $\\mathbb{Z}$:**
  $$f(n_1) = f(n_2) \\iff 2n_1 + 1 = 2n_2 + 1 \\iff n_1 = n_2 \\implies f \\text{ là đơn ánh.}$$
* **Xét tính toàn ánh trên $\\mathbb{Z}$:**
  * Ảnh của $f$ chỉ gồm các số nguyên lẻ: $\\operatorname{Im} f = \\{2n + 1 \\mid n \\in \\mathbb{Z}\\}$.
  * Lấy số chẵn $y = 0 \\in \\mathbb{Z}$, phương trình $2n + 1 = 0 \\iff n = -1/2 \\notin \\mathbb{Z}$.
  * Do đó không tồn tại $n \\in \\mathbb{Z}$ để $f(n) = 0$, suy ra $f$ **không là toàn ánh**.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 213,
    "originalId": None,
    "isOriginal": False,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Điều kiện cần và đủ để ánh xạ $f: X \\to Y$ có ánh xạ ngược $f^{-1}: Y \\to X$ là:",
    "options": [
        {"key": "A", "text": "$f$ là song ánh"},
        {"key": "B", "text": "$f$ là đơn ánh"},
        {"key": "C", "text": "$f$ là toàn ánh"},
        {"key": "D", "text": "$X = Y$"}
    ],
    "correct": "A",
    "explanation": """* **Định lý về ánh xạ ngược:**
  * Ánh xạ $f: X \\to Y$ khả nghịch (có ánh xạ ngược $f^{-1}$) khi và chỉ khi với mỗi $y \\in Y$, tồn tại **duy nhất** $x \\in X$ thỏa mãn $f(x) = y$.
  * Điều kiện tồn tại nghiệm với mọi $y$ tương đương với $f$ là **toàn ánh**.
  * Điều kiện tính duy nhất của nghiệm tương đương với $f$ là **đơn ánh**.
  * Do đó $f$ phải là **song ánh**.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 214,
    "originalId": None,
    "isOriginal": False,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho hai ánh xạ $f: X \\to Y$ và $g: Y \\to Z$. Nếu cả $f$ và $g$ đều là đơn ánh thì ánh xạ tích hợp $g \\circ f: X \\to Z$ là:",
    "options": [
        {"key": "A", "text": "Đơn ánh"},
        {"key": "B", "text": "Toàn ánh nhưng không nhất thiết là đơn ánh"},
        {"key": "C", "text": "Song ánh"},
        {"key": "D", "text": "Chưa kết luận được"}
    ],
    "correct": "A",
    "explanation": """* **Chứng minh tính đơn ánh của ánh xạ tích hợp:**
  * Giả sử $(g \\circ f)(x_1) = (g \\circ f)(x_2) \\iff g(f(x_1)) = g(f(x_2))$.
  * Vì $g$ là đơn ánh nên $g(u) = g(v) \\implies u = v$. Do đó $f(x_1) = f(x_2)$.
  * Vì $f$ là đơn ánh nên $f(x_1) = f(x_2) \\implies x_1 = x_2$.
  * Vậy $g \\circ f$ là đơn ánh.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 215,
    "originalId": None,
    "isOriginal": False,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho ánh xạ $f: \\mathbb{R} \\to \\mathbb{R}, f(x) = x^2$. Khẳng định nào sau đây là đúng?",
    "options": [
        {"key": "A", "text": "$f$ không là đơn ánh cũng không là toàn ánh"},
        {"key": "B", "text": "$f$ là đơn ánh"},
        {"key": "C", "text": "$f$ là toàn ánh"},
        {"key": "D", "text": "$f$ là song ánh"}
    ],
    "correct": "A",
    "explanation": """* **Kiểm tra tính đơn ánh:**
  * Ta có $f(1) = 1^2 = 1$ và $f(-1) = (-1)^2 = 1$.
  * Vì $f(1) = f(-1)$ nhưng $1 \\neq -1$ nên $f$ **không là đơn ánh**.
* **Kiểm tra tính toàn ánh:**
  * Với mọi $x \\in \\mathbb{R}$, $x^2 \\ge 0$.
  * Với $y = -1 \\in \\mathbb{R}$, phương trình $x^2 = -1$ không có nghiệm thực.
  * Do đó $f$ **không là toàn ánh**.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 216,
    "originalId": None,
    "isOriginal": False,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho tập hợp $A$ có $3$ phần tử và tập hợp $B$ có $4$ phần tử. Số lượng ánh xạ khác nhau từ $A$ vào $B$ là:",
    "options": [
        {"key": "A", "text": "$4^3 = 64$"},
        {"key": "B", "text": "$3^4 = 81$"},
        {"key": "C", "text": "$A_4^3 = 24$"},
        {"key": "D", "text": "$3 \\times 4 = 12$"}
    ],
    "correct": "A",
    "explanation": """* **Công thức đếm số lượng ánh xạ:**
  * Giả sử $A = \\{a_1, a_2, a_3\\}$.
  * Phần tử $a_1$ có $4$ cách chọn ảnh trong $B$.
  * Phần tử $a_2$ có $4$ cách chọn ảnh trong $B$.
  * Phần tử $a_3$ có $4$ cách chọn ảnh trong $B$.
  * Theo quy tắc nhân, tổng số ánh xạ từ $A$ vào $B$ là $|B|^{|A|} = 4^3 = 64$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 217,
    "originalId": None,
    "isOriginal": False,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho hai tập hợp $A$ và $B$. Mệnh đề nào sau đây luôn đúng với mọi $A, B$?",
    "options": [
        {"key": "A", "text": "$A \\setminus B = A \\cap \\bar{B}$"},
        {"key": "B", "text": "$A \\setminus B = B \\setminus A$"},
        {"key": "C", "text": "$A \\cup (B \\setminus A) = A \\cap B$"},
        {"key": "D", "text": "$\\overline{A \\cap B} = \\bar{A} \\cap \\bar{B}$"}
    ],
    "correct": "A",
    "explanation": """* **Định nghĩa phép hiệu tập hợp theo phép bù:**
  * $A \\setminus B$ là tập các phần tử thuộc $A$ và không thuộc $B$ (tức thuộc phần bù $\\bar{B}$).
  * Do đó $A \\setminus B = A \\cap \\bar{B}$ luôn đúng.
  * Các phương án khác: B sai vì phép hiệu không có tính giao hoán; C sai vì $A \\cup (B \\setminus A) = A \\cup B$; D sai vì luật De Morgan đúng là $\\overline{A \\cap B} = \\bar{A} \\cup \\bar{B}$.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 218,
    "originalId": None,
    "isOriginal": False,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho mệnh đề logic $(p \\wedge q) \\to r$. Mệnh đề nào sau đây tương đương logic với nó?",
    "options": [
        {"key": "A", "text": "$p \\to (q \\to r)$"},
        {"key": "B", "text": "$(p \\to r) \\wedge (q \\to r)$"},
        {"key": "C", "text": "$(p \\to r) \\vee (q \\to r)$"},
        {"key": "D", "text": "$r \\to (p \\wedge q)$"}
    ],
    "correct": "A",
    "explanation": """* **Quy tắc xuất khẩu (Exportation law):**
  * Biến đổi:
    $$(p \\wedge q) \\to r \\equiv \\overline{p \\wedge q} \\vee r \\equiv (\\bar{p} \\vee \\bar{q}) \\vee r \\equiv \\bar{p} \\vee (\\bar{q} \\vee r) \\equiv p \\to (q \\to r)$$
* Đây là một tương đương kinh điển rất hay gặp trong đề thi.
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 219,
    "originalId": None,
    "isOriginal": False,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Tập hợp $\\emptyset$ (tập rỗng) có bao nhiêu tập con?",
    "options": [
        {"key": "A", "text": "$1$ tập con (chính là $\\emptyset$)"},
        {"key": "B", "text": "$0$ tập con"},
        {"key": "C", "text": "$2$ tập con"},
        {"key": "D", "text": "Vô số"}
    ],
    "correct": "A",
    "explanation": """* **Số tập con của tập rỗng:**
  * Tập rỗng có số phần tử là $n = 0$.
  * Theo công thức số tập con: $|\mathcal{P}(\\emptyset)| = 2^0 = 1$.
  * Tập con duy nhất của $\\emptyset$ chính là $\\emptyset$ (vì $\\emptyset \\subset \\emptyset$).
* **Chọn đáp án: A.**"""
})

extra_questions.append({
    "id": 220,
    "originalId": None,
    "isOriginal": False,
    "topicId": 1,
    "topicName": "LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ",
    "question": "Cho hàm số $f: [0, +\\infty) \\to [0, +\\infty)$ xác định bởi $f(x) = x^2$. Khẳng định nào sau đây là đúng?",
    "options": [
        {"key": "A", "text": "$f$ là một song ánh"},
        {"key": "B", "text": "$f$ là đơn ánh nhưng không là toàn ánh"},
        {"key": "C", "text": "$f$ là toàn ánh nhưng không là đơn ánh"},
        {"key": "D", "text": "$f$ không là đơn ánh cũng không toàn ánh"}
    ],
    "correct": "A",
    "explanation": """* **Tầm quan trọng của tập nguồn và tập đích đối với ánh xạ:**
  * Với tập nguồn $X = [0, +\\infty)$, hàm số $y = x^2$ đồng biến nghiêm ngặt: $x_1 < x_2 \\implies x_1^2 < x_2^2$, do đó $f(x_1) = f(x_2) \\iff x_1 = x_2 \\implies f$ là **đơn ánh**.
  * Với mọi $y \\in [0, +\\infty)$, phương trình $x^2 = y$ luôn có nghiệm duy nhất $x = \\sqrt{y} \\in [0, +\\infty) \\implies f$ là **toàn ánh**.
  * Vậy trên tập xác định này, $f$ là một **song ánh** (có hàm ngược là $f^{-1}(y) = \\sqrt{y}$).
* **Chọn đáp án: A.**"""
})

# Save to scratch to verify
with open("scripts/topic1_extra.json", "w", encoding="utf-8") as f:
    json.dump(extra_questions, f, ensure_ascii=False, indent=2)

print(f"Generated {len(extra_questions)} questions for Topic 1.")
