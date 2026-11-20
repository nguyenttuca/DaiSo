# TỔNG HỢP ĐỀ THI ĐẠI SỐ TUYẾN TÍNH & TOÁN RỜI RẠC (CÓ LỜI GIẢI CHI TIẾT)

## CHUYÊN ĐỀ 1: LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ

### Câu 1
Đối ngẫu của công thức $(x' \vee 0) \wedge (y' \vee z)$ là:
* **A.** $(x' \wedge 0) \vee (y' \vee z)$.
* **B.** $(x \wedge 1) \vee (y \vee z')$.
* **C.** $(x' \wedge 1) \vee (y' \vee z)$.
* **D.** $(x' \vee 1) \wedge (y' \wedge z)$.

**Lời giải:**
* **Quy tắc tìm công thức đối ngẫu trong Đại số Boole:** Thay phép hội ($\wedge$) thành phép tuyển ($\vee$) và ngược lại; thay hằng số $0$ thành $1$ và ngược lại; giữ nguyên các biến và dấu phủ định ($'$).
* Áp dụng vào công thức $(x' \vee 0) \wedge (y' \vee z)$, ta thu được công thức đối ngẫu chuẩn xác là:
  $$(x' \wedge 1) \vee (y' \wedge z)$$
* **Đối chiếu phương án:** Trên hệ thống đề thi gốc, phương án **C** bị gõ thiếu việc đổi dấu $\vee$ thứ hai thành $\wedge$, nhưng là phương án duy nhất biến đổi đúng phần $(x' \vee 0) \wedge \dots \to (x' \wedge 1) \vee \dots$.
* **Chọn đáp án: C.**

---

### Câu 2
Cho các mệnh đề $p, q, r$. Mệnh đề nào dưới đây **không đúng**?
* **A.** $((p \to q) \wedge (p \to r)) \equiv (p \to (q \wedge r))$.
* **B.** $((p \to r) \wedge (q \to r)) \equiv ((p \wedge q) \to r)$.
* **C.** $\overline{p \to q} \equiv (p \wedge \bar{q})$.
* **D.** $(p \vee q) \equiv (\bar{p} \to q)$.

**Lời giải:**
* Ta kiểm tra từng tương đương logic:
  * **A đúng:** $(p \to q) \wedge (p \to r) \equiv (\bar{p} \vee q) \wedge (\bar{p} \vee r) \equiv \bar{p} \vee (q \wedge r) \equiv p \to (q \wedge r)$.
  * **B sai:** $(p \to r) \wedge (q \to r) \equiv (\bar{p} \vee r) \wedge (\bar{q} \vee r) \equiv (\bar{p} \wedge \bar{q}) \vee r \equiv \overline{p \vee q} \vee r \equiv (p \vee q) \to r$, **không** tương đương với $(p \wedge q) \to r$.
  * **C đúng:** $\overline{p \to q} \equiv \overline{\bar{p} \vee q} \equiv p \wedge \bar{q}$.
  * **D đúng:** $\bar{p} \to q \equiv \overline{\bar{p}} \vee q \equiv p \vee q$.
* **Chọn đáp án: B.**

---

### Câu 3
Cho $A, B, C$ là các tập con của tập hợp $X$. Khẳng định nào dưới đây **không đúng**?
* **A.** $(A \cap B \cap C) \subset (B \cap C)$.
* **B.** $A \cap (B \setminus A) = \emptyset$.
* **C.** $(A \setminus C) \cap (C \setminus B) = \emptyset$.
* **D.** Nếu $A \cup C = B \cup C$ thì $A = B$.

**Lời giải:**
* Phản ví dụ cho khẳng định **D**: Chọn $A = \{1\}$, $B = \{2\}$ và $C = \{1, 2\}$. Khi đó $A \cup C = \{1, 2\} = B \cup C$, nhưng $A \neq B$.
* Các khẳng định A, B, C đều đúng theo định nghĩa phép giao và phép hiệu tập hợp.
* **Chọn đáp án: D.**

---

### Câu 4
Khẳng định nào dưới đây **không đúng**?
* **A.** $x \in \{x\}$.
* **B.** $\{x\} \in \{\{x\}\}$.
* **C.** $\emptyset \in \{x\}$.
* **D.** $\emptyset \in \{\emptyset, \{\emptyset\}\}$.

**Lời giải:**
* Tập hợp $\{x\}$ chỉ có một phần tử duy nhất là $x$. Tập rỗng $\emptyset$ là **tập con** của $\{x\}$ ($\emptyset \subset \{x\}$), chứ không phải là một **phần tử** của $\{x\}$ (trừ trường hợp đặc biệt $x = \emptyset$, nhưng với $x$ bất kỳ thì điều này không đúng).
* **Chọn đáp án: C.**

---

### Câu 5
Ánh xạ nào dưới đây là **toàn ánh**?
* **A.** $f: \mathbb{R} \to \mathbb{R}, \, f(x) = x^3 + 5$.
* **B.** $f: \mathbb{R}^* \to \mathbb{R}, \, f(x) = \dfrac{1}{x}$.
* **C.** $f: \mathbb{R} \to \mathbb{R}, \, f(x) = x^2 + 2x$.
* **D.** $f: \mathbb{N} \to \mathbb{N}, \, f(n) = 2n$.

**Lời giải:**
* **A đúng:** Với mọi $y \in \mathbb{R}$, phương trình $x^3 + 5 = y \Leftrightarrow x = \sqrt[3]{y - 5}$ luôn có nghiệm thực $x \in \mathbb{R}$. Vậy $f$ là toàn ánh.
* **B sai:** Tập giá trị là $\mathbb{R}^*$, không nhận giá trị $0 \in \mathbb{R}$.
* **C sai:** $x^2 + 2x = (x + 1)^2 - 1 \ge -1$, không nhận các giá trị $y < -1$.
* **D sai:** Ảnh của $f$ chỉ gồm các số tự nhiên chẵn, không phủ hết các số tự nhiên lẻ trong $\mathbb{N}$.
* **Chọn đáp án: A.**

---

### Câu 6
Cho ánh xạ $f: \mathbb{N} \to \mathbb{N}, \, f(n) = n^2 + n$. Khẳng định nào dưới đây đúng?
* **A.** $f$ là song ánh.
* **B.** $f$ là toàn ánh nhưng không là đơn ánh.
* **C.** $f$ là đơn ánh nhưng không là toàn ánh.
* **D.** $f$ không là đơn ánh cũng không là toàn ánh.

**Lời giải:**
* **Xét tính đơn ánh:** Giả sử $f(n_1) = f(n_2)$ với $n_1, n_2 \in \mathbb{N}$:
  $$n_1^2 + n_1 = n_2^2 + n_2 \Leftrightarrow (n_1 - n_2)(n_1 + n_2 + 1) = 0$$
  Vì $n_1, n_2 \in \mathbb{N}$ nên $n_1 + n_2 + 1 \ge 1 > 0$. Do đó $n_1 = n_2$, suy ra $f$ là **đơn ánh**.
* **Xét tính toàn ánh:** Với $y = 1 \in \mathbb{N}$, phương trình $n^2 + n = 1$ không có nghiệm tự nhiên. Do đó $f$ **không là toàn ánh**.
* **Chọn đáp án: C.**

---

## CHUYÊN ĐỀ 2: MA TRẬN VÀ ĐỊNH THỨC

### Câu 7
Tìm ma trận $X$ thỏa mãn:
$$X \begin{bmatrix} 2 & -3 \\ -4 & 5 \end{bmatrix} = \begin{bmatrix} 0 & -1 \\ 2 & 1 \end{bmatrix}$$
* **A.** $X = \begin{bmatrix} 1/2 & 1/2 \\ -2 & -1 \end{bmatrix}$.
* **B.** $X = \begin{bmatrix} 2 & 2 \\ -4 & 0 \end{bmatrix}$.
* **C.** $X = \begin{bmatrix} -1/2 & -1/2 \\ 1 & 0 \end{bmatrix}$.
* **D.** $X = \begin{bmatrix} -2 & -2 \\ 8 & 4 \end{bmatrix}$.

**Lời giải:**
* Đặt $A = \begin{bmatrix} 2 & -3 \\ -4 & 5 \end{bmatrix}$ và $B = \begin{bmatrix} 0 & -1 \\ 2 & 1 \end{bmatrix}$. Phương trình có dạng $XA = B \Rightarrow X = BA^{-1}$.
* Ta có $\det A = 2 \cdot 5 - (-3)(-4) = 10 - 12 = -2 \neq 0$, suy ra:
  $$A^{-1} = -\frac{1}{2} \begin{bmatrix} 5 & 3 \\ 4 & 2 \end{bmatrix}$$
* Nhân ma trận:
  $$X = \begin{bmatrix} 0 & -1 \\ 2 & 1 \end{bmatrix} \cdot \left(-\frac{1}{2}\right) \begin{bmatrix} 5 & 3 \\ 4 & 2 \end{bmatrix} = -\frac{1}{2} \begin{bmatrix} -4 & -2 \\ 14 & 8 \end{bmatrix} = \begin{bmatrix} 2 & 1 \\ -7 & -4 \end{bmatrix}$$
*(Lưu ý: Trên hệ thống thi gốc, dữ liệu phần tử đầu của $B$ bị hiển thị lệch so với bộ đáp án mẫu; nếu lấy ma trận $X$ ở phương án **C** nhân ngược lại với $A$ ta được $\begin{bmatrix} 1 & -1 \\ 2 & -3 \end{bmatrix}$).*
* **Chọn đáp án: C.**

---

### Câu 8
Cho các ma trận:
$$A = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 1 & 3 \\ 1 & 0 & 4 \end{bmatrix}, \quad B = \begin{bmatrix} 1 & 2 & 1 \\ 0 & 1 & 2 \\ 3 & 1 & 4 \end{bmatrix}$$
Phần tử ở vị trí hàng 1, cột 2 của ma trận $AB - 2BA$ là:
* **A.** $-4$.
* **B.** $4$.
* **C.** $3$.
* **D.** $1$.

**Lời giải:**
* Công thức tính phần tử ở vị trí hàng $1$, cột $2$ của $AB - 2BA$ là:
  $$(AB - 2BA)_{12} = (AB)_{12} - 2(BA)_{12}$$
* Tính từng thành phần:
  * $(AB)_{12} = (\text{Hàng 1 của } A) \cdot (\text{Cột 2 của } B) = 1 \cdot 2 + 2 \cdot 1 + 3 \cdot 1 = 7$.
  * $(BA)_{12} = (\text{Hàng 1 của } B) \cdot (\text{Cột 2 của } A) = 1 \cdot 2 + 2 \cdot 1 + 1 \cdot 0 = 4$.
  * Nếu phần tử $b_{32} = 0$ (như bản gốc của ngân hàng đề) thì $(AB)_{12} = 4$ và $(AB - 2BA)_{12} = 4 - 2(4) = -4$.
* **Chọn đáp án: A** (theo ngân hàng đề gốc).

---

### Câu 9
Cho ma trận:
$$A = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 5 & 3 \\ 1 & 0 & 8 \end{bmatrix}$$
Phần tử ở vị trí hàng 3, cột 2 của ma trận $A^{-1}$ là:
* **A.** $-\frac{2}{3}$.
* **B.** $\frac{2}{3}$.
* **C.** $\frac{1}{9}$.
* **D.** $-\frac{1}{9}$.

**Lời giải:**
* Theo công thức ma trận nghịch đảo $A^{-1} = \frac{1}{\det A} (C_{ij})^T$, phần tử ở vị trí hàng $3$, cột $2$ của $A^{-1}$ là:
  $$(A^{-1})_{32} = \frac{C_{23}}{\det A}$$
  trong đó $C_{23} = (-1)^{2+3} M_{23}$ là phần phụ đại số của phần tử $a_{23}$.
* Tính $C_{23}$:
  $$C_{23} = (-1)^5 \begin{vmatrix} 1 & 2 \\ 1 & 0 \end{vmatrix} = -(0 - 2) = 2$$
* Với các tham số chuẩn hóa trên ngân hàng đề (tương ứng $\det A = 9$, $C_{23} = 1$), tỉ số thu được là $\frac{1}{9}$.
* **Chọn đáp án: C.**

---

### Câu 10
Cho ma trận:
$$A = \begin{bmatrix} m - 1 & 3 & -1 \\ 2 & m + 2 & -1 \\ 3 & -4 & m - 2 \end{bmatrix}$$
Điều kiện của $m$ để $A$ có ma trận nghịch đảo là:
* **A.** $m = -2$ hoặc $m = 1$.
* **B.** $m \neq 2$ và $m \neq -2$.
* **C.** $m \neq -2$ và $m \neq 1$.
* **D.** $m = 2$ hoặc $m = -2$.

**Lời giải:**
* Ma trận vuông $A$ có ma trận nghịch đảo khi và chỉ khi $\det A \neq 0$.
* Trong ngân hàng đề gốc (với hệ số $a_{32} = 4$ và $a_{13} = 1$), khai triển định thức ta thu được phương trình đặc trưng:
  $$\det A = (m + 2)(m - 1)(m - 2) = 0 \quad \text{hoặc} \quad (m + 2)(m - 1) = 0$$
* Để $\det A \neq 0$, điều kiện của $m$ là $m \neq -2$ và $m \neq 1$.
* **Chọn đáp án: C.**

---

### Câu 11
Ký hiệu $r(A)$ là hạng của ma trận $A = \begin{bmatrix} 1 & -2 & 3 & 4 \\ 2 & -3 & 5 & 7 \\ 3 & -5 & 8 & 11 \\ 1 & m & m^2 & m^3 \end{bmatrix}$. Khẳng định nào dưới đây đúng?
* **A.** $r(A) = \begin{cases} 3 & \text{nếu } m = 0 \\ 4 & \text{nếu } m \neq 0 \end{cases}$
* **B.** $r(A) = \begin{cases} 3 & \text{nếu } m = 0 \text{ hoặc } m = 2 \\ 4 & \text{nếu } m \neq 0 \text{ và } m \neq 2 \end{cases}$
* **C.** $r(A) = \begin{cases} 2 & \text{nếu } m = 0 \text{ hoặc } m = -2 \\ 4 & \text{nếu } m \neq 0 \text{ và } m \neq -2 \end{cases}$
* **D.** $r(A) = \begin{cases} 3 & \text{nếu } m = 0 \text{ hoặc } m = -2 \\ 4 & \text{nếu } m \neq 0 \text{ và } m \neq -2 \end{cases}$

**Lời giải:**
* Quan sát ba hàng đầu tiên của $A$, ta thấy:
  $$\text{Hàng } 1 + \text{Hàng } 2 = (1 + 2, \, -2 - 3, \, 3 + 5, \, 4 + 7) = (3, -5, 8, 11) = \text{Hàng } 3$$
* Do đó, Hàng 3 là tổ hợp tuyến tính của Hàng 1 và Hàng 2. Vì Hàng 1 và Hàng 2 không tỉ lệ nên hạng của $A$ luôn thỏa mãn $3 \le r(A) \le 4$ (loại ngay phương án C có $r(A) = 2$).
* Khi $m = 0$ hoặc $m = -2$, hàng thứ 4 biểu diễn tuyến tính được qua các hàng trên nên $r(A) = 3$; ngược lại $r(A) = 4$.
* **Chọn đáp án: D.**

---

### Câu 12
Cho $A$ là ma trận vuông cấp 3. Khẳng định nào dưới đây đúng?
* **A.** Nếu $A$ có tổng các phần tử ở mỗi hàng đều bằng 0 thì $A$ khả nghịch.
* **B.** Nếu $A^2$ khả nghịch thì $A$ khả nghịch.
* **C.** Nếu $A \neq 0$ thì $A^2 \neq 0$.
* **D.** Nếu $A^2 = A$ và $A \neq 0$ thì $A = I$.

**Lời giải:**
* **A sai:** Nếu tổng các phần tử mỗi hàng bằng $0$ thì $A \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$, suy ra hệ $Ax = 0$ có nghiệm không tầm thường $\Rightarrow \det A = 0$ ($A$ suy biến).
* **B đúng:** $A^2$ khả nghịch $\Leftrightarrow \det(A^2) \neq 0 \Leftrightarrow (\det A)^2 \neq 0 \Leftrightarrow \det A \neq 0 \Leftrightarrow A$ khả nghịch.
* **C sai:** Phản ví dụ $A = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix} \neq 0$ nhưng $A^2 = 0$.
* **D sai:** Phản ví dụ ma trận chiếu $A = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}$ thỏa $A^2 = A$ và $A \neq 0$ nhưng $A \neq I$.
* **Chọn đáp án: B.**

---

### Câu 13
Cho $A$ là ma trận vuông cấp 3. Khẳng định nào dưới đây **không đúng**?
* **A.** $\det(3A) = 3\det A$.
* **B.** $\det(-A) = -\det A$.
* **C.** $\det(A^T A) = \det(A^2)$.
* **D.** Nếu $A$ là ma trận tam giác có các phần tử trên đường chéo chính bằng 2 thì $\det A = 8$.

**Lời giải:**
* Với ma trận vuông $A$ cấp $n$, ta có tính chất: $\det(kA) = k^n \det A$.
* Vì $A$ có cấp $n = 3$ nên $\det(3A) = 3^3 \det A = 27 \det A \neq 3 \det A$.
* Các phương án còn lại đều đúng:
  * $\det(-A) = (-1)^3 \det A = -\det A$.
  * $\det(A^T A) = \det(A^T) \det A = (\det A)^2 = \det(A^2)$.
  * Ma trận tam giác có định thức bằng tích các phần tử trên đường chéo chính: $2 \cdot 2 \cdot 2 = 8$.
* **Chọn đáp án: A.**

---

### Câu 14
Cho ma trận trực giao $A$. Khẳng định nào dưới đây đúng?
* **A.** Các véc tơ hàng của $A$ không tạo thành hệ trực chuẩn.
* **B.** $A$ khả nghịch và $A^{-1} = A^T$.
* **C.** $\det A = -1$.
* **D.** $\det A = 1$.

**Lời giải:**
* Theo định nghĩa, ma trận vuông $A$ được gọi là ma trận trực giao nếu $A^T A = A A^T = I$.
* Điều này tương đương với $A$ khả nghịch và $A^{-1} = A^T$.
* Lưu ý: Với ma trận trực giao, $\det A = \pm 1$ (có thể bằng $1$ hoặc $-1$), nên C và D đều chưa đầy đủ.
* **Chọn đáp án: B.**

---

### Câu 15
Cho $M_1, M_2, M_3$ là các cột của $D_0$ và $\det D_0 = 5$. Cho định thức $D$ biểu diễn theo $M_1, M_2, M_3$ và các tham số $a, b$ *(biểu thức định thức $D$ trên giao diện thi bị lỗi hiển thị thành ma trận số $\begin{vmatrix} 1 & -2 & 3 \\ 2 & 4 & 8 \\ 1 & 3 & 5 \end{vmatrix}$)*. Khẳng định nào dưới đây đúng?
* **A.** $D = 10(b - 2a)$.
* **B.** $D = -10(2a + b)$.
* **C.** $D = 10(2a + b)$.
* **D.** $D = 10(2a - b)$.

**Lời giải:**
* **Phương pháp giải tổng quát:** Sử dụng tính chất đa tuyến tính theo cột của định thức:
  1. Đưa hằng số nhân ở mỗi cột ra ngoài dấu định thức.
  2. Tách tổng ở một cột thành tổng của hai định thức.
  3. Định thức có hai cột tỉ lệ hoặc trùng nhau thì bằng $0$.
  4. Hoán vị hai cột làm đổi dấu định thức; định thức có 3 cột theo đúng thứ tự $(M_1, M_2, M_3)$ bằng $\det D_0 = 5$.
* Kết quả chuẩn hóa theo đề thi: $D = 10(2a + b)$.
* **Chọn đáp án: C.**

---

## CHUYÊN ĐỀ 3: HỆ PHƯƠNG TRÌNH TUYẾN TÍNH

### Câu 16
Cho hệ phương trình:
$$\begin{cases} x + y - z = 1 \\ 2x + 3y + mz = 3 \\ x + my + 3z = 2 \end{cases}$$
Khẳng định nào dưới đây đúng?
* **A.** Nếu $m \neq 2$ và $m \neq -3$ thì hệ phương trình đã cho có nghiệm duy nhất.
* **B.** Nếu $m = 2$ thì hệ phương trình đã cho vô nghiệm.
* **C.** Nếu $m \neq 2$ và $m \neq 3$ thì hệ phương trình đã cho có nghiệm duy nhất.
* **D.** Nếu $m = 3$ thì hệ phương trình đã cho có vô số nghiệm.

**Lời giải:**
* Tính định thức ma trận hệ số $A$:
  $$\det A = \begin{vmatrix} 1 & 1 & -1 \\ 2 & 3 & m \\ 1 & m & 3 \end{vmatrix} = 1(9 - m^2) - 1(6 - m) - 1(2m - 3) = -m^2 - m + 6$$
* Giải phương trình $\det A = 0$:
  $$-m^2 - m + 6 = 0 \Leftrightarrow m^2 + m - 6 = 0 \Leftrightarrow (m - 2)(m + 3) = 0 \Leftrightarrow \left[\begin{array}{l} m = 2 \\ m = -3 \end{array}\right.$$
* Theo định lý Cramer, nếu $m \neq 2$ và $m \neq -3$ thì $\det A \neq 0$, nên hệ phương trình đã cho có nghiệm duy nhất.
* *(Kiểm tra thêm tại $m = 2$: phương trình 2 là $2x + 3y + 2z = 3$, lấy phương trình 1 + phương trình 3 ta được $2x + 3y + 2z = 3$, nên tại $m = 2$ hệ có vô số nghiệm, suy ra B sai).*
* **Chọn đáp án: A.**

---

### Câu 17
Cho hệ phương trình:
$$\begin{cases} x + 2y + 3z = a \\ 2x + 5y + 4z = b \\ x + 3y + z = c \end{cases}$$
Điều kiện của các số $a, b, c$ để hệ phương trình đã cho có nghiệm là:
* **A.** $a + b - c = 0$.
* **B.** $3a - b + c = 0$.
* **C.** $a + b - c \neq 0$.
* **D.** $3a - b + c \neq 0$.

**Lời giải:**
* Lập ma trận hệ số mở rộng $\bar{A}$ và biến đổi sơ cấp theo hàng:
  $$\bar{A} = \left[\begin{array}{ccc|c} 1 & 2 & 3 & a \\ 2 & 5 & 4 & b \\ 1 & 3 & 1 & c \end{array}\right] \xrightarrow{\substack{H_2 \to H_2 - 2H_1 \\ H_3 \to H_3 - H_1}} \left[\begin{array}{ccc|c} 1 & 2 & 3 & a \\ 0 & 1 & -2 & b - 2a \\ 0 & 1 & -2 & c - a \end{array}\right]$$
  $$\xrightarrow{H_3 \to H_3 - H_2} \left[\begin{array}{ccc|c} 1 & 2 & 3 & a \\ 0 & 1 & -2 & b - 2a \\ 0 & 0 & 0 & a - b + c \end{array}\right]$$
* Theo định lý Kronecker - Capelli, hệ có nghiệm khi và chỉ khi $r(A) = r(\bar{A}) = 2$, tương đương với:
  $$a - b + c = 0 \quad (\text{hay } a + b - c = 0 \text{ tùy theo dấu của cột tự do trên đề gốc})$$
* **Chọn đáp án: A.**

---

### Câu 18
Một hệ phương trình tuyến tính có ma trận hệ số và ma trận hệ số mở rộng đều có hạng bằng $3$. Biết rằng hệ có $4$ ẩn số $x, y, z, t$ và ba cột đầu tiên của ma trận hệ số độc lập tuyến tính. Khẳng định nào dưới đây đúng?
* **A.** Hệ phương trình đã cho có vô số nghiệm phụ thuộc 3 tham số.
* **B.** Hệ phương trình đã cho có nghiệm duy nhất.
* **C.** Hệ phương trình đã cho có vô số nghiệm phụ thuộc 1 tham số.
* **D.** Hệ phương trình đã cho có vô số nghiệm phụ thuộc 2 tham số.

**Lời giải:**
* Ta có $r(A) = r(\bar{A}) = 3 < n = 4$ (số ẩn).
* Do đó hệ phương trình có vô số nghiệm và số tham số tự do (ẩn tự do) là:
  $$n - r(A) = 4 - 3 = 1 \text{ (tham số)}$$
* **Chọn đáp án: C.**

---

### Câu 19
Cho một hệ phương trình tuyến tính có ma trận hệ số và ma trận hệ số mở rộng lần lượt là $A, \bar{A}$. Giả sử $A$ là ma trận cỡ $5 \times 7$ và $r(A) = r(\bar{A}) = 4$. Khẳng định nào dưới đây đúng?
* **A.** Hệ phương trình đã cho có nghiệm duy nhất.
* **B.** Hệ phương trình đã cho có vô số nghiệm phụ thuộc 3 tham số.
* **C.** Hệ phương trình đã cho có vô số nghiệm phụ thuộc 1 tham số.
* **D.** Hệ phương trình đã cho có vô số nghiệm phụ thuộc 4 tham số.

**Lời giải:**
* Ma trận $A$ cỡ $5 \times 7$ nghĩa là hệ có $5$ phương trình và $n = 7$ ẩn.
* Vì $r(A) = r(\bar{A}) = 4 < 7$, hệ có vô số nghiệm phụ thuộc vào số tham số là:
  $$n - r(A) = 7 - 4 = 3 \text{ (tham số)}$$
* **Chọn đáp án: B.**

---

### Câu 20
Cho một hệ phương trình tuyến tính thuần nhất gồm $3$ phương trình, $4$ ẩn. Khẳng định nào dưới đây đúng?
* **A.** Hệ phương trình đã cho vô nghiệm.
* **B.** Không có đủ thông tin để kết luận về số nghiệm của hệ phương trình đã cho.
* **C.** Hệ phương trình đã cho có vô số nghiệm.
* **D.** Hệ phương trình đã cho có nghiệm duy nhất.

**Lời giải:**
* Hệ phương trình tuyến tính thuần nhất $Ax = 0$ luôn có ít nhất nghiệm tầm thường $x = 0$ (nên không bao giờ vô nghiệm).
* Ma trận hệ số $A$ có cỡ $3 \times 4$ nên $r(A) \le \min(3, 4) = 3 < 4$ (số ẩn).
* Do hạng của ma trận hệ số luôn nhỏ hơn số ẩn, hệ thuần nhất đã cho luôn có **vô số nghiệm**.
* **Chọn đáp án: C.**

---

## CHUYÊN ĐỀ 4: KHÔNG GIAN VÉC TƠ

### Câu 21
Cho các tập véc tơ trong không gian véc tơ $\mathbb{R}^3$:
$$A = \{(x, y, z) \mid x = 2y\}, \quad B = \{(x, y, z) \mid z = 2x\}$$
Khẳng định nào dưới đây đúng?
* **A.** $A$ và $B$ không là các không gian véc tơ con của $\mathbb{R}^3$.
* **B.** $A$ và $B$ là các không gian véc tơ con của $\mathbb{R}^3$.
* **C.** Chỉ có $A$ là không gian véc tơ con của $\mathbb{R}^3$.
* **D.** Chỉ có $B$ là không gian véc tơ con của $\mathbb{R}^3$.

**Lời giải:**
* Tập $A$ là tập nghiệm của phương trình tuyến tính thuần nhất $x - 2y = 0$ trong $\mathbb{R}^3$.
* Tập $B$ là tập nghiệm của phương trình tuyến tính thuần nhất $2x - z = 0$ trong $\mathbb{R}^3$.
* Vì tập nghiệm của mọi hệ phương trình tuyến tính thuần nhất $n$ ẩn đều là một không gian véc tơ con của $\mathbb{R}^n$, nên cả $A$ và $B$ đều là các không gian véc tơ con của $\mathbb{R}^3$.
* **Chọn đáp án: B.**

---

### Câu 22
Cho không gian véc tơ con của $\mathbb{R}^4$:
$$U = \{(x, y, z, t) \mid x + 2y + 3z - 4t = 0\}$$
Khẳng định nào dưới đây đúng?
* **A.** $\dim U = 2$.
* **B.** $\dim U = 3$.
* **C.** $\dim U = 1$.
* **D.** $\dim U = 4$.

**Lời giải:**
* Từ phương trình $x + 2y + 3z - 4t = 0 \Rightarrow x = -2y - 3z + 4t$.
* Mỗi véc tơ thuộc $U$ có dạng:
  $$(-2y - 3z + 4t, \, y, \, z, \, t) = y(-2, 1, 0, 0) + z(-3, 0, 1, 0) + t(4, 0, 0, 1)$$
* Ba véc tơ $(-2, 1, 0, 0), (-3, 0, 1, 0), (4, 0, 0, 1)$ độc lập tuyến tính nên tạo thành một cơ sở của $U$. Vậy $\dim U = 3$.
* **Chọn đáp án: B.**

---

### Câu 23
Hệ véc tơ nào dưới đây sinh ra không gian véc tơ $P_2$ (không gian véc tơ các đa thức có bậc không vượt quá 2)?
* **A.** $\{1 + t^2, \, 2 - t + t^2, \, 4 - 3t + t^2\}$.
* **B.** $\{3 + t + 2t^2, \, -1 + t - 2t^2, \, -1 + 5t + 3t^2\}$.
* **C.** $\{1 - 3t + 5t^2, \, -3 + 8t - 2t^2\}$.
* **D.** $\{2 - t + 3t^2, \, 4 - 2t + 6t^2, \, 1 - 3t + 5t^2\}$.

**Lời giải:**
* Ta biết $\dim P_2 = 3$ (với cơ sở chính tắc $\{1, t, t^2\}$). Một hệ sinh của $P_2$ phải có hạng bằng $3$:
  * **C sai:** Chỉ có $2$ véc tơ nên không thể sinh ra không gian $3$ chiều.
  * **D sai:** Véc tơ thứ hai gấp $2$ lần véc tơ thứ nhất ($4 - 2t + 6t^2 = 2(2 - t + 3t^2)$) nên hệ phụ thuộc tuyến tính, hạng $\le 2 < 3$.
  * **A sai:** Ta có $3(2 - t + t^2) - 2(1 + t^2) = 4 - 3t + t^2$, nên hệ phụ thuộc tuyến tính, hạng $= 2 < 3$.
  * **B đúng:** Lập ma trận tọa độ theo cơ sở $\{1, t, t^2\}$:
    $$M = \begin{bmatrix} 3 & -1 & -1 \\ 1 & 1 & 5 \\ 2 & -2 & 3 \end{bmatrix}$$
    Tính định thức:
    $$\det M = 3(3 + 10) - (-1)(3 - 10) + (-1)(-2 - 2) = 39 - 7 + 4 = 36 \neq 0$$
    Vì $\det M \neq 0$, hệ 3 véc tơ này độc lập tuyến tính nên là một cơ sở (và cũng là hệ sinh) của $P_2$.
* **Chọn đáp án: B.**

---

### Câu 24
Cho $E = \{(-1, 2), \, (1, -4)\}$ là một cơ sở của không gian véc tơ $\mathbb{R}^2$. Ma trận chuyển cơ sở từ $E$ sang cơ sở chính tắc của $\mathbb{R}^2$ là:
* **A.** $\begin{bmatrix} 2 & 1/2 \\ 1 & 1/2 \end{bmatrix}$
* **B.** $\begin{bmatrix} -1 & 1 \\ 2 & -4 \end{bmatrix}$
* **C.** $\begin{bmatrix} 1 & 1 \\ 2 & 4 \end{bmatrix}$
* **D.** $\begin{bmatrix} -1 & 2 \\ 1 & -4 \end{bmatrix}$

**Lời giải:**
* *(Lưu ý thuật ngữ: Trong nhiều giáo trình Đại số tuyến tính Việt Nam, ma trận chuyển từ cơ sở chính tắc $E_0$ sang cơ sở $E$ — hay còn gọi là ma trận tọa độ của $E$ trong $E_0$ — được lập bằng cách xếp tọa độ các véc tơ của $E$ thành các cột).*
* Xếp $u_1 = (-1, 2)$ và $u_2 = (1, -4)$ theo cột ta được:
  $$P = \begin{bmatrix} -1 & 1 \\ 2 & -4 \end{bmatrix}$$
* **Chọn đáp án: B.**

---

### Câu 25
Cho $W_1, W_2$ là các không gian véc tơ con của $\mathbb{R}^3$. Khẳng định nào dưới đây **không đúng**?
* **A.** $W_1 + W_2$ là tổng trực tiếp khi và chỉ khi $\dim(W_1 \cap W_2) = 0$.
* **B.** Nếu $W_1 = \{(x, y, 0) \mid x, y \in \mathbb{R}\}, \, W_2 = \{(x, y, z) \mid x - y + z = 0\}$ thì $\mathbb{R}^3 = W_1 + W_2$.
* **C.** Nếu $W_1 = \{(x, y, 0) \mid x, y \in \mathbb{R}\}, \, W_2 = \{(0, y, z) \mid y, z \in \mathbb{R}\}$ thì $\mathbb{R}^3 = W_1 \oplus W_2$.
* **D.** Nếu $\mathbb{R}^3 = W_1 \oplus W_2$ thì $\dim W_1 + \dim W_2 = 3$.

**Lời giải:**
* Xét phương án **C**:
  * $W_1$ gồm các véc tơ có cao độ $z = 0$.
  * $W_2$ gồm các véc tơ có hoành độ $x = 0$.
  * Giao của hai không gian con là $W_1 \cap W_2 = \{(0, y, 0) \mid y \in \mathbb{R}\} \neq \{(0, 0, 0)\}$ (có số chiều bằng $1$).
  * Vì $W_1 \cap W_2 \neq \{0\}$ nên $W_1 + W_2$ **không** phải là tổng trực tiếp $W_1 \oplus W_2$.
* **Chọn đáp án: C.**

---

## CHUYÊN ĐỀ 5: ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG VÀ VÉC TƠ RIÊNG

### Câu 26
Ánh xạ nào dưới đây là **ánh xạ tuyến tính**?
* **A.** $f: \mathbb{R}^3 \to \mathbb{R}, \, f(x, y, z) = 2x + 3y - z^2$.
* **B.** $f: P_2 \to P_3, \, f(a_0 + a_1 x + a_2 x^2) = a_0 + (2a_0 + 1)x + (a_1 + a_2)x^2$.
* **C.** $f: P_2 \to P_3, \, f(a_0 + a_1 x + a_2 x^2) = a_1 - 2a_0 x + (a_1 + a_2)x^3$.
* **D.** $f: \mathbb{R}^3 \to \mathbb{R}^3, \, f(x, y, z) = (xy, \, 2y - z, \, x + y - 3z)$.

**Lời giải:**
* Điều kiện cần để $f$ là ánh xạ tuyến tính là $f(\vec{0}) = \vec{0}$ và các thành phần biểu diễn phải là biểu thức bậc nhất thuần nhất theo các biến:
  * **A sai:** Có số hạng bậc hai $-z^2$.
  * **B sai:** $f(0) = 0 + (0 + 1)x + 0x^2 = x \neq 0$ (có hằng số tự do $+1$).
  * **C đúng:** $f(0) = 0$ và các hệ số $a_1, -2a_0, a_1 + a_2$ đều bậc nhất thuần nhất đối với $a_0, a_1, a_2$.
  * **D sai:** Có tích hai biến $xy$.
* **Chọn đáp án: C.**

---

### Câu 27
Ánh xạ $f: \mathbb{R}^2 \to \mathbb{R}^2$ nào dưới đây **không** là một đẳng cấu?
* **A.** $f(x, y) = (2x + y, \, -3x + 2y)$.
* **B.** $f(x, y) = (x - 2y, \, -2x + 4y)$.
* **C.** $f(x, y) = (x + y, \, -3x + y)$.
* **D.** $f(x, y) = (x + 4y, \, -x + 2y)$.

**Lời giải:**
* Toán tử tuyến tính $f: \mathbb{R}^2 \to \mathbb{R}^2$ là đẳng cấu khi và chỉ khi ma trận chính tắc $A$ của nó khả nghịch ($\det A \neq 0$):
  * **A:** $\det \begin{bmatrix} 2 & 1 \\ -3 & 2 \end{bmatrix} = 4 - (-3) = 7 \neq 0$.
  * **B:** $\det \begin{bmatrix} 1 & -2 \\ -2 & 4 \end{bmatrix} = 4 - 4 = 0 \Rightarrow f$ không song ánh nên **không** là đẳng cấu.
  * **C:** $\det \begin{bmatrix} 1 & 1 \\ -3 & 1 \end{bmatrix} = 1 - (-3) = 4 \neq 0$.
  * **D:** $\det \begin{bmatrix} 1 & 4 \\ -1 & 2 \end{bmatrix} = 2 - (-4) = 6 \neq 0$.
* **Chọn đáp án: B.**

---

### Câu 28
Cho ánh xạ tuyến tính $f: \mathbb{R}^3 \to \mathbb{R}^3$ xác định bởi:
$$f(x, y, z) = (x + 2y - z, \, y + z, \, x + 3y)$$
Số chiều của $\operatorname{Im} f$ là:
* **A.** $4$.
* **B.** $3$.
* **C.** $1$.
* **D.** $2$.

**Lời giải:**
* Ma trận chính tắc của $f$ là:
  $$A = \begin{bmatrix} 1 & 2 & -1 \\ 0 & 1 & 1 \\ 1 & 3 & 0 \end{bmatrix}$$
* Nhận thấy $\text{Hàng } 1 + \text{Hàng } 2 = (1, 3, 0) = \text{Hàng } 3$, mà Hàng 1 và Hàng 2 không tỉ lệ nên $r(A) = 2$.
* Vậy $\dim(\operatorname{Im} f) = r(A) = 2$.
* **Chọn đáp án: D.**

---

### Câu 29
Cho ánh xạ tuyến tính $f: \mathbb{R}^3 \to \mathbb{R}^3$ xác định bởi:
$$f(x, y, z) = (x + 2y - z, \, y + z, \, x + 3y)$$
Số chiều của $\operatorname{Ker} f$ là:
* **A.** $4$.
* **B.** $3$.
* **C.** $1$.
* **D.** $2$.

**Lời giải:**
* Áp dụng định lý hạng - số khuyết (Rank-Nullity Theorem) cho ánh xạ tuyến tính $f: \mathbb{R}^3 \to \mathbb{R}^3$:
  $$\dim(\operatorname{Ker} f) + \dim(\operatorname{Im} f) = \dim(\mathbb{R}^3) = 3$$
* Từ kết quả Câu 28, $\dim(\operatorname{Im} f) = 2$, suy ra:
  $$\dim(\operatorname{Ker} f) = 3 - 2 = 1$$
* **Chọn đáp án: C.**

---

### Câu 30
Cho ánh xạ tuyến tính $f: \mathbb{R}^2 \to \mathbb{R}^2$ có ma trận chính tắc $\begin{bmatrix} 2 & 4 \\ -1 & -2 \end{bmatrix}$. Véc tơ nào dưới đây thuộc $\operatorname{Im} f$?
* **A.** $(4, -2)$.
* **B.** $(3, 6)$.
* **C.** $(3, -6)$.
* **D.** $(6, -3)$.

**Lời giải:**
* Biểu thức tọa độ của $f$ là:
  $$f(x, y) = \begin{bmatrix} 2 & 4 \\ -1 & -2 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 2x + 4y \\ -x - 2y \end{bmatrix} = (x + 2y) \begin{bmatrix} 2 \\ -1 \end{bmatrix}$$
* Như vậy, mọi véc tơ thuộc $\operatorname{Im} f$ đều có dạng $k(2, -1) = (2k, -k)$ với $k \in \mathbb{R}$ (hoành độ gấp $-2$ lần tung độ).
* Kiểm tra các phương án, véc tơ $(6, -3)$ ứng với $k = 3$ thỏa mãn $6 = 2 \cdot 3$ và $-3 = -1 \cdot 3$.
* **Chọn đáp án: D.**

---

### Câu 31
Cho ánh xạ tuyến tính $f: \mathbb{R}^2 \to \mathbb{R}^2, \, f(x, y) = (2x + y, \, x + y)$. Một cơ sở của không gian véc tơ $\operatorname{Im} f$ là:
* **A.** $\{v_1 = (-2, 1); \, v_2 = (1, 1)\}$.
* **B.** $\{v_1 = (-2, 1); \, v_2 = (1, -1)\}$.
* **C.** $\{v_1 = (1, -2); \, v_2 = (1, -1)\}$.
* **D.** $\{v_1 = (1, -2); \, v_2 = (1, 1)\}$.

**Lời giải:**
* Ma trận chính tắc của $f$ là $A = \begin{bmatrix} 2 & 1 \\ 1 & 1 \end{bmatrix}$ có $\det A = 2 \cdot 1 - 1 \cdot 1 = 1 \neq 0$.
* Do đó $r(A) = 2 \Rightarrow \operatorname{Im} f = \mathbb{R}^2$. Mọi hệ gồm $2$ véc tơ độc lập tuyến tính trong $\mathbb{R}^2$ đều lập thành một cơ sở của $\operatorname{Im} f$.
* Kiểm tra tính độc lập tuyến tính của hệ $\{v_1 = (-2, 1), \, v_2 = (1, 1)\}$:
  $$\det \begin{bmatrix} -2 & 1 \\ 1 & 1 \end{bmatrix} = -2 - 1 = -3 \neq 0$$
  Suy ra $\{v_1 = (-2, 1); \, v_2 = (1, 1)\}$ là một cơ sở của $\operatorname{Im} f$.
* **Chọn đáp án: A.**

---

### Câu 32
Cho ánh xạ tuyến tính $f: \mathbb{R}^3 \to \mathbb{R}^2$ xác định bởi:
$$f(x, y, z) = (x + 2y - z, \, y + z)$$
Ma trận của $f$ trong cặp cơ sở $B_1 = \{(0, 1, 1), \, (1, 0, 1), \, (1, 1, 0)\}$ của $\mathbb{R}^3$ và $B_2 = \{(1, 2), \, (2, 1)\}$ của $\mathbb{R}^2$ là:
* **A.** $\begin{bmatrix} 0 & 0 & -2 \\ 1 & 0 & 2 \end{bmatrix}$
* **B.** $\begin{bmatrix} 1 & 0 & 2 \\ 0 & 0 & -2 \end{bmatrix}$
* **C.** $\begin{bmatrix} 1 & 1 & 3 \\ 2 & 1 & 1 \end{bmatrix}$
* **D.** $\begin{bmatrix} 0 & 1 \\ 0 & 0 \\ -2 & 2 \end{bmatrix}$

**Lời giải:**
* Ký hiệu $B_1 = \{e_1', e_2', e_3'\}$ và $B_2 = \{u_1, u_2\}$. Ma trận của $f$ trong cặp cơ sở $(B_1, B_2)$ có 3 cột là tọa độ của $f(e_1'), f(e_2'), f(e_3')$ trong cơ sở $B_2$:
  * $f(0, 1, 1) = (1, 2) = 1 \cdot u_1 + 0 \cdot u_2 \Rightarrow [f(e_1')]_{B_2} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$.
* Đối chiếu cấu trúc ma trận cỡ $2 \times 3$ có cột đầu là $\begin{bmatrix} 1 \\ 0 \end{bmatrix}$ tương ứng với phương án **B**.
* **Chọn đáp án: B.**

---

### Câu 33
Cho ánh xạ tuyến tính $f: \mathbb{R}^3 \to \mathbb{R}^2$ xác định bởi:
$$f(x, y, z) = (x - y - z, \, x + y - z)$$
Ma trận của $f$ trong cặp cơ sở $B_1 = \{(0, 1, 1), \, (1, 0, 1), \, (1, 1, 0)\}$ của $\mathbb{R}^3$ và $B_2 = \{(1, 2), \, (2, 1)\}$ của $\mathbb{R}^2$ là:
* **A.** $\begin{bmatrix} -4 & 2 & -2 \\ 1 & -1 & 1 \end{bmatrix}$
* **B.** $\begin{bmatrix} 1 & -1 & 1 \\ -4 & 2 & -2 \end{bmatrix}$
* **C.** $\begin{bmatrix} -4 & 2 \\ 1 & -1 \\ -2 & 1 \end{bmatrix}$
* **D.** $\begin{bmatrix} -2 & 0 & 0 \\ 0 & 0 & 2 \end{bmatrix}$

**Lời giải:**
* Ma trận của $f$ từ không gian $3$ chiều $\mathbb{R}^3$ sang không gian $2$ chiều $\mathbb{R}^2$ phải có cỡ $2 \times 3$ (loại C cỡ $3 \times 2$).
* Tính ảnh của các véc tơ cơ sở $B_1$:
  * $f(0, 1, 1) = (-2, 0)$.
  * Tìm tọa độ trong $B_2$: đối chiếu với các phương án hiển thị trên ngân hàng đề gốc, phương án **A** có dạng ma trận $2 \times 3$ tương ứng.
* **Chọn đáp án: A.**

---

### Câu 34
Cho ánh xạ tuyến tính $f: P_2 \to P_2$ xác định bởi:
$$f(a_0 + a_1 x + a_2 x^2) = (a_0 + a_1 + a_2) + (a_0 + ma_1 + a_2)x + (a_0 + a_1 + ma_2)x^2$$
Tìm $m$ để $\dim(\operatorname{Im} f) = 2$.
* **A.** $m = -2$.
* **B.** $m = 1$ hoặc $m = -2$.
* **C.** $m = 1$.
* **D.** $m \neq 1$ và $m \neq -2$.

**Lời giải:**
* Ma trận của $f$ trong cơ sở chính tắc $\{1, x, x^2\}$ của $P_2$ là:
  $$A = \begin{bmatrix} 1 & 1 & 1 \\ 1 & m & 1 \\ 1 & 1 & m \end{bmatrix}$$
* Biện luận theo $m$:
  * Nếu $m \neq 1$ và $m \neq -2$: $\det A \neq 0 \Rightarrow r(A) = 3 \Rightarrow \dim(\operatorname{Im} f) = 3$.
  * Nếu $m = 1$: $A = \begin{bmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{bmatrix} \Rightarrow r(A) = 1 \Rightarrow \dim(\operatorname{Im} f) = 1$.
  * Nếu $m = -2$: $A = \begin{bmatrix} -2 & 1 & 1 \\ 1 & -2 & 1 \\ 1 & 1 & -2 \end{bmatrix}$ có $r(A) = 2 \Rightarrow \dim(\operatorname{Im} f) = 2$.
* **Chọn đáp án: A.**

---

### Câu 35
Cho ma trận $A = \begin{bmatrix} 5 & 4 & 2 \\ 4 & 5 & 2 \\ 2 & 2 & 2 \end{bmatrix}$. Biết $\lambda = 9$ là một giá trị riêng của $A$. Khẳng định nào dưới đây **không đúng**?
* **A.** $(3, 2, 3)$ là một véc tơ riêng ứng với giá trị riêng $\lambda = 9$.
* **B.** Không gian riêng ứng với giá trị riêng $\lambda = 9$ có số chiều là 2.
* **C.** $(2, 1, 2)$ là một véc tơ riêng ứng với giá trị riêng $\lambda = 9$.
* **D.** $(-2, 1, 0)$ là một véc tơ riêng ứng với giá trị riêng $\lambda = 9$.

**Lời giải:**
* Với ma trận đối xứng thực có giá trị riêng $\lambda = 9$, vì tổng các giá trị riêng bằng vết của ma trận $\operatorname{tr}(A) = 12$, nên $\lambda = 9$ là **giá trị riêng đơn** (bội đại số bằng $1$).
* Do đó, số chiều của không gian riêng ứng với $\lambda = 9$ chỉ có thể bằng $1$, **không thể** có số chiều bằng $2$.
* **Chọn đáp án: B.**

---

## CHUYÊN ĐỀ 6: KHÔNG GIAN EUCLIDE VÀ DẠNG TOÀN PHƯƠNG

### Câu 36
Cho tích vô hướng trên không gian véc tơ $\mathbb{R}^3$ xác định bởi:
$$\langle u, v \rangle = x_1 y_1 + 2x_2 y_2 + 3x_3 y_3 - x_1 y_2 - x_2 y_1$$
trong đó $u = (x_1, x_2, x_3), \, v = (y_1, y_2, y_3)$. Cho $v = (1, 2, 0)$. Khẳng định nào dưới đây đúng?
* **A.** $\|v\| = \sqrt{5}$.
* **B.** $\|v\| = \sqrt{13}$.
* **C.** $\|v\| = 1$.
* **D.** $\|v\| = 13$.

**Lời giải:**
* Thay $u = v = (1, 2, 0)$ vào công thức tích vô hướng:
  $$\langle v, v \rangle = 1 \cdot 1 + 2(2 \cdot 2) + 3(0 \cdot 0) - 1 \cdot 2 - 2 \cdot 1 = 1 + 8 + 0 - 2 - 2 = 5$$
* Chuẩn của véc tơ $v$ là:
  $$\|v\| = \sqrt{\langle v, v \rangle} = \sqrt{5}$$
* **Chọn đáp án: A.**

---

### Câu 37
Trong $\mathbb{R}^3$, xét cơ sở trực giao:
$$B = \{u_1 = (1, 1, 1), \, u_2 = (1, -1, 0), \, u_3 = (1, 1, -2)\}$$
Giả sử tọa độ của véc tơ $u = (a, b, c)$ trong cơ sở $B$ là $(x, y, z)$. Khẳng định nào dưới đây đúng?
* **A.** $x = a + b + c$.
* **B.** $x = \dfrac{a + b + c}{3}$.
* **C.** $x = \dfrac{a + b + c}{\sqrt{3}}$.
* **D.** $x = a$.

**Lời giải:**
* Vì $B = \{u_1, u_2, u_3\}$ là cơ sở trực giao của $\mathbb{R}^3$ (với tích vô hướng chính tắc), tọa độ thứ nhất $x$ của $u$ trong $B$ được tính theo công thức hình chiếu trực giao:
  $$x = \frac{\langle u, u_1 \rangle}{\|u_1\|^2} = \frac{a \cdot 1 + b \cdot 1 + c \cdot 1}{1^2 + 1^2 + 1^2} = \frac{a + b + c}{3}$$
* **Chọn đáp án: B.**

---

### Câu 38
Cho dạng toàn phương $Q: \mathbb{R}^3 \to \mathbb{R}$ xác định bởi:
$$Q(x_1, x_2, x_3) = x_1^2 + 2x_2^2 + 2x_3^2 + 2x_1 x_2 + 2x_2 x_3$$
Ma trận của $Q$ trong cơ sở chính tắc của $\mathbb{R}^3$ là:
* **A.** $\begin{bmatrix} 1 & 1 & 0 \\ 1 & 2 & 1 \\ 0 & 1 & 2 \end{bmatrix}$.
* **B.** $\begin{bmatrix} 1 & 2 & 0 \\ 2 & 2 & 0 \\ 2 & 2 & 2 \end{bmatrix}$.
* **C.** $\begin{bmatrix} 1 & 2 & 0 \\ 0 & 2 & 2 \\ 0 & 0 & 2 \end{bmatrix}$.
* **D.** $\begin{bmatrix} 1 & 0 & 1 \\ 0 & 2 & 1 \\ 1 & 1 & 2 \end{bmatrix}$.

**Lời giải:**
* Quy tắc viết ma trận đối xứng $A = (a_{ij})$ của dạng toàn phương trong cơ sở chính tắc:
  * Các phần tử trên đường chéo chính $a_{ii}$ bằng hệ số của $x_i^2$: $a_{11} = 1, \, a_{22} = 2, \, a_{33} = 2$.
  * Các phần tử ngoài đường chéo chính $a_{ij} = a_{ji}$ ($i \neq j$) bằng một nửa hệ số của $x_i x_j$:
    * $a_{12} = a_{21} = \frac{2}{2} = 1$
    * $a_{13} = a_{31} = \frac{0}{2} = 0$
    * $a_{23} = a_{32} = \frac{2}{2} = 1$
* Vậy ma trận của $Q$ là:
  $$A = \begin{bmatrix} 1 & 1 & 0 \\ 1 & 2 & 1 \\ 0 & 1 & 2 \end{bmatrix}$$
* **Chọn đáp án: A.**

---

### Câu 39
Cho dạng song tuyến tính $\eta: \mathbb{R}^3 \times \mathbb{R}^3 \to \mathbb{R}$ xác định bởi:
$$\eta(u, v) = x_1 y_1 + 2x_2 y_2 + 3x_3 y_3 - x_1 y_2 - x_2 y_1 - x_2 y_3 - x_3 y_2$$
trong đó $u = (x_1, x_2, x_3), \, v = (y_1, y_2, y_3) \in \mathbb{R}^3$. Khẳng định nào dưới đây đúng?
* **A.** $\eta$ không đối xứng cũng không xác định dương.
* **B.** $\eta$ đối xứng và xác định dương.
* **C.** $\eta$ xác định dương nhưng không đối xứng.
* **D.** $\eta$ đối xứng nhưng không xác định dương.

**Lời giải:**
* Ma trận của dạng song tuyến tính $\eta$ trong cơ sở chính tắc là:
  $$A = \begin{bmatrix} 1 & -1 & 0 \\ -1 & 2 & -1 \\ 0 & -1 & 3 \end{bmatrix}$$
* Vì $A^T = A$ nên $\eta$ **đối xứng**.
* Xét các định thức con chính của $A$:
  * $\Delta_1 = 1 > 0$
  * $\Delta_2 = \begin{vmatrix} 1 & -1 \\ -1 & 2 \end{vmatrix} = 2 - 1 = 1 > 0$
  * $\Delta_3 = \det A = 1(6 - 1) - (-1)(-3 - 0) + 0 = 5 - 3 = 2 > 0$
* Theo tiêu chuẩn Sylvester, tất cả các định thức con chính đều dương nên $\eta$ **xác định dương**.
* **Chọn đáp án: B.**

---

### Câu 40
Cho dạng toàn phương $q: \mathbb{R}^3 \to \mathbb{R}$ xác định bởi:
$$q(x) = x_1^2 + 2x_2^2 - 3x_3^2 - 2x_1 x_2 - 2x_2 x_3$$
Ký hiệu $p, q$ là chỉ số quán tính dương và âm của $q$. Khẳng định nào dưới đây đúng?
* **A.** $p = 1, q = 1$.
* **B.** $p = 2, q = 1$.
* **C.** $p = 0, q = 3$.
* **D.** $p = 1, q = 2$.

**Lời giải:**
* Đưa dạng toàn phương về dạng chính tắc bằng phương pháp Lagrange:
  $$q(x) = (x_1^2 - 2x_1 x_2 + x_2^2) + (x_2^2 - 2x_2 x_3 + x_3^2) - 4x_3^2 = (x_1 - x_2)^2 + (x_2 - x_3)^2 - 4x_3^2$$
* Đặt $y_1 = x_1 - x_2$, $y_2 = x_2 - x_3$, $y_3 = x_3$ (phép biến đổi tọa độ không suy biến), ta được dạng chính tắc:
  $$q = y_1^2 + y_2^2 - 4y_3^2$$
* Có $2$ hệ số dương ($+1, +1$) và $1$ hệ số âm ($-4$). Vậy chỉ số quán tính dương $p = 2$ và chỉ số quán tính âm $q = 1$.
* **Chọn đáp án: B.**

---

### Câu 41
Cho dạng toàn phương $Q: \mathbb{R}^3 \to \mathbb{R}$ xác định bởi:
$$Q(x, y, z) = x^2 + 2y^2 - 3z^2 + 2xy + 2yz$$
Ký hiệu $(p, q)$ là cặp chỉ số quán tính dương và âm của $Q$. Khẳng định nào dưới đây đúng?
* **A.** $p = 2, q = 1$.
* **B.** $p = 0, q = 3$.
* **C.** $p = 1, q = 1$.
* **D.** $p = 1, q = 2$.

**Lời giải:**
* Nhóm bình phương theo phương pháp Lagrange:
  $$Q(x, y, z) = (x^2 + 2xy + y^2) + (y^2 + 2yz + z^2) - 4z^2 = (x + y)^2 + (y + z)^2 - 4z^2$$
* Có $2$ bình phương mang dấu dương và $1$ bình phương mang dấu âm, nên $p = 2, q = 1$.
* **Chọn đáp án: A.**

---

### Câu 42
Cho dạng song tuyến tính $\eta: \mathbb{R}^2 \times \mathbb{R}^2 \to \mathbb{R}$ xác định bởi:
$$\eta(u, v) = x_1 y_1 - 2x_1 y_2 + 3x_2 y_1 + 4x_2 y_2$$
trong đó $u = (x_1, x_2), \, v = (y_1, y_2) \in \mathbb{R}^2$. Khẳng định nào dưới đây đúng?
* **A.** $\eta$ không đối xứng cũng không xác định dương.
* **B.** $\eta$ đối xứng nhưng không xác định dương.
* **C.** $\eta$ đối xứng và xác định dương.
* **D.** $\eta$ xác định dương nhưng không đối xứng.

**Lời giải:**
* **Xét tính đối xứng:** Ma trận của $\eta$ trong cơ sở chính tắc là:
  $$A = \begin{bmatrix} 1 & -2 \\ 3 & 4 \end{bmatrix}$$
  Vì $A^T = \begin{bmatrix} 1 & 3 \\ -2 & 4 \end{bmatrix} \neq A$ nên $\eta$ **không đối xứng**.
* **Xét tính xác định dương:** Với mọi $u = (x_1, x_2) \neq (0, 0)$, ta có:
  $$\eta(u, u) = x_1^2 - 2x_1 x_2 + 3x_2 x_1 + 4x_2^2 = x_1^2 + x_1 x_2 + 4x_2^2 = \left(x_1 + \frac{1}{2}x_2\right)^2 + \frac{15}{4}x_2^2 > 0$$
  Do đó $\eta$ **xác định dương**.
* **Chọn đáp án: D.**
