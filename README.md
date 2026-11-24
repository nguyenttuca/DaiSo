# HỆ THỐNG TRẮC NGHIỆM TOÁN ĐẠI HỌC CHUẨN CLO - PTIT
*(Giải tích 1, Giải tích 2, Đại số tuyến tính, Toán rời rạc)*

Hệ thống ôn luyện trắc nghiệm và thi thử trực tuyến dành cho sinh viên Học viện Công nghệ Bưu chính Viễn thông (PTIT). Nền tảng được thiết kế trực quan, hiện đại, tích hợp thuật toán sinh đề thông minh chống lặp và đánh giá chuẩn đầu ra **CLO (Course Learning Outcomes)** theo **Quyết định 292/QĐ-HV**.

---

## 🚀 HƯỚNG DẪN KHỞI CHẠY NHANH

### Cách 1: Chạy trực tiếp trên trình duyệt (Không cần cài đặt)
* Mở trực tiếp file `index.html` bằng bất kỳ trình duyệt nào (Chrome, Safari, Edge, Firefox).
* Ứng dụng chạy hoàn toàn phía client (Front-end 100%), hỗ trợ offline và deploy dễ dàng lên GitHub Pages / Vercel / Netlify.

### Cách 2: Khởi chạy bằng Node.js Server (Tích hợp Đấu Solo WebSocket)
```bash
# Cài đặt thư viện (nếu chưa cài)
npm install

# Kiểm tra toàn bộ tính năng và ngân hàng câu hỏi
npm test

# Khởi chạy máy chủ
npm start
# Truy cập tại: http://localhost:3000
```

---

## 🌟 TÍNH NĂNG NỔI BẬT

1. **Bộ chuyển đổi môn học tức thì (Subject Switcher):**
   * **Đại số tuyến tính (BAS1201):** 612 câu hỏi đầy đủ 6 chuyên đề.
   * **Giải tích 1 (BAS1203):** 188 câu hỏi chuẩn khảo thí PTIT gồm 5 chương: Chương 1 (Giới hạn của dãy số - 35 câu), Chương 2 (Hàm số 1 biến - 23 câu), Chương 3 (Đạo hàm và vi phân - 32 câu), Chương 4 (Phép tính tích phân - 50 câu), Chương 5 (Lý thuyết chuỗi - 48 câu). Tích hợp toàn diện từ ngân hàng ôn tập và Đề minh họa 102 kèm lời giải KaTeX chi tiết.
   * **Giải tích 2 (BAS1204):** 44 câu hỏi (Hàm nhiều biến, Tích phân kép & bội 3, Tích phân đường & mặt, Phương trình vi phân).
   * **Toán rời rạc (INT1358):** 39 câu hỏi (Đại số Boole & Đếm, Đồ thị, Cây khung & Đường đi ngắn nhất, Thuật toán quay lui/tham lam).

2. **Tạo đề thi tùy biến linh hoạt:**
   * Số lượng câu: **20 đến 40 câu** (có thanh trượt và nút chọn nhanh 20, 25, 30, 40 câu).
   * Thời gian thi: **20 đến 60 phút** (có thanh trượt và nút chọn nhanh 20, 25, 45, 60 phút).
   * Chọn linh hoạt các chương cần ôn tập.
   * **Preset tỉ lệ CLO / Độ khó:**
     * *Chuẩn PTIT (40% CLO1 - 40% CLO2 - 20% CLO3)*: Tối ưu cho thi học kỳ.
     * *Cơ bản & Qua môn (50% CLO1 - 40% CLO2 - 10% CLO3)*: Đạt an toàn điểm 5–7.
     * *Nâng cao & Điểm A (25% CLO1 - 45% CLO2 - 30% CLO3)*: Phân loại điểm 8–10.

3. **Thuật toán sinh đề & Chống trùng lặp thông minh (Spaced Repetition Fallback):**
   * Ưu tiên câu **Chưa từng làm** (Tier 1).
   * Tiếp theo ưu tiên câu **Làm sai gần đây** (Tier 2).
   * Câu **Đã làm đúng** sẽ có độ trễ lặp lại (Tier 3 - Recency Penalty).
   * **Tự động phân bổ lại khi ngân hàng đề giới hạn:** Khi người dùng yêu cầu số lượng câu lớn hơn số câu khả dụng ở một chuyên đề/CLO cụ thể, thuật toán sẽ tự động phân bổ bù phần thiếu sang các chuyên đề/CLO lân cận, đảm bảo luôn tạo đủ số lượng câu yêu cầu mà không bị crash hay vòng lặp vô hạn.

4. **Đánh giá Rubric 5 mức theo Quyết định 292/QĐ-HV:**
   * Phân tích chi tiết điểm số theo từng chuẩn $CLO_1, CLO_2, CLO_3$.
   * Tính điểm chuẩn đầu ra học phần: $CLO_{HP} = \frac{CLO_1 + CLO_2 + CLO_3}{3}$.
   * Xếp loại theo 5 mức chuẩn PTIT:
     * **Mức 1 (< 4.0):** Chưa đạt yêu cầu.
     * **Mức 2 (4.0 – < 5.5):** Đạt mức thấp (Đủ điều kiện qua môn theo Điều 8).
     * **Mức 3 (5.5 – < 7.0):** Đạt yêu cầu.
     * **Mức 4 (7.0 – < 8.5):** Đạt tốt.
     * **Mức 5 (≥ 8.5):** Đạt xuất sắc.
   * Đưa ra lời khuyên học tập cá nhân hóa từ Cố vấn học tập PTIT.

5. **Trình Quản lý & Nhập Ngân hàng đề (Bank Manager):**
   * **Xem & Quản lý:** Thống kê chi tiết số câu, phân loại CLO và độ khó theo từng môn.
   * **Nhập file JSON:** Hỗ trợ kéo thả hoặc chọn file `.json`.
   * **Nhập văn bản/Markdown thông minh:** Tự động phân tích câu hỏi dạng văn bản theo cú pháp:
     ```text
     [Câu 1] [Chương 1] [CLO1] [Dễ]
     Tính giới hạn \lim_{x \to 0} \frac{\sin x}{x}.
     A. 0
     B. 1
     C. \infty
     D. Không tồn tại
     Đáp án: B
     Lời giải: Theo giới hạn cơ bản, \lim_{x \to 0} \frac{\sin x}{x} = 1.
     ```
   * **Thêm câu hỏi thủ công:** Form nhập liệu có Live Preview công thức toán KaTeX thời gian thực.
   * **Xuất & Sao lưu:** Tải toàn bộ ngân hàng câu hỏi về máy dưới định dạng `.json`.
   * Toàn bộ câu hỏi tùy chỉnh được lưu an toàn trong `localStorage` của trình duyệt.

6. **Luyện tập theo Dạng bài & Sổ tay câu sai:**
   * Cho phép chọn luyện riêng từng chương với phản hồi đáp án và lời giải chi tiết tức thì.
   * Tự động thu thập các câu trả lời sai vào "Sổ tay câu sai" để luyện tập lại.

---

# CẨM NANG ÔN THI & MẸO GIẢI NHANH TRẮC NGHIỆM: ĐẠI SỐ TUYẾN TÍNH & TOÁN RỜI RẠC

> **Mục tiêu:** Cung cấp đầy đủ lý thuyết trọng tâm, công thức bấm máy/tính nhẩm, quy trình xử lý nhanh và cách nhận diện bẫy để giải trọn vẹn 20 câu trắc nghiệm trong 25 phút một cách chính xác nhất.

---

## CHUYÊN ĐỀ 1: LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ

### 1.1. Đại số Boole và Công thức Đối ngẫu
* **Định nghĩa:** Cho một công thức Boole $F$ chứa các biến, phép tuyển ($\vee$), phép hội ($\wedge$), phép phủ định ($'$), và các hằng số $0, 1$. Công thức **đối ngẫu** $F^*$ thu được bằng cách:
  * Đổi $\vee \leftrightarrow \wedge$.
  * Đổi $0 \leftrightarrow 1$.
  * **Giữ nguyên** tất cả tên biến và dấu phủ định ($x'$ giữ nguyên là $x'$, $y$ giữ nguyên là $y$).
* **Ví dụ nhanh:** Đối ngẫu của $(x' \vee 0) \wedge (y' \vee z)$ là $(x' \wedge 1) \vee (y' \wedge z)$.

### 1.2. Các phép tương đương Logic cốt lõi
Ghi nhớ 6 hằng đẳng thức sau để xử lý mọi câu hỏi mệnh đề trong 10 giây:
1. **Khử phép kéo theo:** $p \to q \equiv \bar{p} \vee q$
2. **Phủ định phép kéo theo:** $\overline{p \to q} \equiv p \wedge \bar{q}$
3. **Luật De Morgan:** $\overline{p \vee q} \equiv \bar{p} \wedge \bar{q}$ và $\overline{p \wedge q} \equiv \bar{p} \vee \bar{q}$
4. **Phân phối chung giả thiết:** $(p \to q) \wedge (p \to r) \equiv p \to (q \wedge r)$
5. **Phân phối chung kết luận:** $(p \to r) \wedge (q \to r) \equiv (p \vee q) \to r$ *(Chú ý: vế phải là dấu tuyển $\vee$, rất hay bị bẫy thành dấu hội $\wedge$)*
6. **Phản đảo:** $p \to q \equiv \bar{q} \to \bar{p}$

### 1.3. Tập hợp: Phân biệt $\in$ và $\subset$
* $a \in A$: $a$ là một **phần tử** nằm trực tiếp trong danh sách liệt kê của $A$.
* $B \subset A$: Mọi phần tử của $B$ đều là phần tử của $A$.
* **Quy tắc vàng với tập rỗng $\emptyset$:**
  * $\emptyset \subset A$ luôn **ĐÚNG** với mọi tập $A$.
  * $\emptyset \in A$ chỉ đúng khi ký hiệu $\emptyset$ xuất hiện rõ ràng bên trong dấu ngoặc nhọn của $A$ (ví dụ: $\emptyset \in \{\emptyset, \{\emptyset\}\}$ là đúng, nhưng $\emptyset \in \{x\}$ là **SAI**).
* **Mẹo giải nhanh bằng phản ví dụ:** Khi gặp mệnh đề dạng "Nếu $A \cup C = B \cup C$ thì $A = B$", hãy thử ngay bộ tập nhỏ nhất $A = \{1\}, B = \{2\}, C = \{1, 2\}$. Ta thấy $A \cup C = B \cup C = \{1, 2\}$ nhưng $A \neq B \Rightarrow$ **SAI**.

### 1.4. Ánh xạ: Đơn ánh, Toàn ánh, Song ánh
Cho ánh xạ $f: X \to Y$:
* **Đơn ánh:** $f(x_1) = f(x_2) \Rightarrow x_1 = x_2$ (mỗi $y \in Y$ có tối đa $1$ tạo ảnh).
  * *Mẹo:* Hàm đồng biến ngặt hoặc nghịch biến ngặt trên miền $X$ (như $f(n) = n^2 + n$ trên $\mathbb{N}$, hay $f(x) = x^3 + 5$ trên $\mathbb{R}$) luôn là **đơn ánh**.
* **Toàn ánh:** $\operatorname{Im} f = Y$, tức phương trình $f(x) = y$ luôn có ít nhất một nghiệm $x \in X$ với mọi $y \in Y$.
  * *Mẹo kiểm tra nhanh trên $\mathbb{R}$:*
    * Đa thức bậc lẻ ($x^3 + 5$): **Luôn toàn ánh**.
    * Đa thức bậc chẵn ($x^2 + 2x$): Bị chặn trên hoặc chặn dưới $\Rightarrow$ **Không toàn ánh**.
    * Hàm phân thức $1/x$ trên $\mathbb{R}^* \to \mathbb{R}$: Không nhận giá trị $y = 0 \Rightarrow$ **Không toàn ánh**.
  * *Mẹo kiểm tra nhanh trên $\mathbb{N}$:* Xét tính chẵn lẻ! $f(n) = 2n$ hoặc $f(n) = n^2 + n = n(n+1)$ luôn nhận giá trị chẵn $\Rightarrow$ không bao giờ tạo ra $y = 1$ (số lẻ) $\Rightarrow$ **Không toàn ánh**.
* **Song ánh:** Vừa đơn ánh, vừa toàn ánh.

---

## CHUYÊN ĐỀ 2: MA TRẬN VÀ ĐỊNH THỨC

### 2.1. Nhân ma trận và Phương trình ma trận
* **Phần tử đơn lẻ của tích $AB$:**
  $$(AB)_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj} = (\text{Hàng } i \text{ của } A) \cdot (\text{Cột } j \text{ của } B)$$
  * *Mẹo:* Khi đề chỉ hỏi $1$ phần tử (ví dụ phần tử hàng $1$, cột $2$ của $AB - 2BA$), **tuyệt đối không nhân cả hai ma trận**. Chỉ tính đúng $(AB)_{12}$ và $(BA)_{12}$ rồi lấy $(AB)_{12} - 2(BA)_{12}$.
* **Giải phương trình ma trận (Chú ý thứ tự nhân trái/nhân phải):**
  * $AX = B \Rightarrow X = A^{-1}B$ (nhân $A^{-1}$ vào bên **trái**).
  * $XA = B \Rightarrow X = BA^{-1}$ (nhân $A^{-1}$ vào bên **phải**).
* **Công thức nghịch đảo cấp 2 cần thuộc lòng:**
  $$\begin{bmatrix} a & b \\ c & d \end{bmatrix}^{-1} = \frac{1}{ad - bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$
  *(Mẹo nhớ: Đổi chỗ đường chéo chính, đổi dấu đường chéo phụ, chia cho định thức).*

### 2.2. Tìm 1 phần tử của ma trận nghịch đảo $A^{-1}$
Thay vì tìm cả ma trận $A^{-1}$ cỡ $3 \times 3$ rất tốn thời gian, dùng ngay công thức:
$$(A^{-1})_{ij} = \frac{C_{ji}}{\det A} = \frac{(-1)^{i+j} M_{ji}}{\det A}$$
* **Cực kỳ lưu ý đảo chỉ số:** Để tìm phần tử ở **hàng $i$, cột $j$** của $A^{-1}$, bạn phải xóa **hàng $j$, cột $i$** của ma trận $A$ để tính định thức con $M_{ji}$.
* *Ví dụ:* Tìm $(A^{-1})_{32}$ thì phải tính $C_{23} = (-1)^{2+3} M_{23} = -M_{23}$ (xóa hàng $2$, cột $3$ của $A$), rồi chia cho $\det A$.

### 2.3. Các tính chất Định thức (Ma trận vuông cấp $n$)
* $\det(kA) = k^n \det A$ *(Bẫy phổ biến nhất: quên lũy thừa $n$)*.
* $\det(-A) = (-1)^n \det A$ (với cấp $3$: $\det(-A) = -\det A$; với cấp $2$: $\det(-A) = \det A$).
* $\det(AB) = \det A \cdot \det B$ và $\det(A^k) = (\det A)^k$.
* $\det(A^T) = \det A \Rightarrow \det(A^T A) = (\det A)^2 = \det(A^2)$.
* Định thức của ma trận tam giác (trên hoặc dưới) bằng **tích các phần tử trên đường chéo chính**.
* $A$ khả nghịch $\Leftrightarrow \det A \neq 0$.
* **Hệ quả suy luận nhanh:**
  * $A^2$ khả nghịch $\Leftrightarrow \det(A^2) \neq 0 \Leftrightarrow (\det A)^2 \neq 0 \Leftrightarrow \det A \neq 0 \Leftrightarrow A$ khả nghịch.
  * Nếu tổng các phần tử trên mỗi hàng của $A$ đều bằng $0$ $\Rightarrow$ tổng tất cả các cột bằng cột $0$ $\Rightarrow \det A = 0$ ($A$ **không** khả nghịch).
  * Các phản ví dụ cần nhớ cho ma trận vuông:
    * $A = \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix} \neq 0$ nhưng $A^2 = 0$.
    * $A = \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}$ có $A^2 = A$ và $A \neq 0$ nhưng $A \neq I$.

### 2.4. Định thức biểu diễn theo cột $M_1, M_2, M_3$
Sử dụng 4 quy tắc biến đổi nhanh:
1. Tách tổng một cột thành tổng hai định thức.
2. Đưa hằng số của một cột ra ngoài dấu định thức.
3. Định thức có $2$ cột giống nhau hoặc tỉ lệ nhau thì bằng $0$.
4. Đổi chỗ $2$ cột làm đổi dấu định thức.

### 2.5. Tìm hạng ma trận $r(A)$ chứa tham số $m$
* **Mẹo nhìn nhanh:** Trước khi khử Gauss, kiểm tra xem có hàng nào bằng tổng/hiệu các hàng khác không (ví dụ $H_3 = H_1 + H_2$). Nếu có, **gạch bỏ ngay hàng đó** vì nó không làm tăng hạng.
* Nếu $A$ là ma trận vuông cấp $n$: Tính $\det A$. Tại các giá trị $m$ làm $\det A \neq 0$ thì chắc chắn $r(A) = n$. Chỉ cần thay các nghiệm của $\det A = 0$ vào để tìm hạng nhỏ hơn.

---

## CHUYÊN ĐỀ 3: HỆ PHƯƠNG TRÌNH TUYẾN TÍNH

### 3.1. Định lý Kronecker–Capelli (Xương sống của chương)
Cho hệ phương trình tuyến tính $AX = B$ gồm $m$ phương trình và $n$ ẩn (ma trận $A$ cỡ $m \times n$, ma trận mở rộng $\bar{A} = [A \mid B]$):
* **$r(A) < r(\bar{A})$:** Hệ **vô nghiệm**.
* **$r(A) = r(\bar{A}) = n$:** Hệ có **nghiệm duy nhất**.
* **$r(A) = r(\bar{A}) = r < n$:** Hệ có **vô số nghiệm phụ thuộc vào $(n - r)$ tham số tự do**.

### 3.2. Hệ thuần nhất $AX = 0$
* Luôn có ít nhất nghiệm tầm thường $X = 0$ (**không bao giờ vô nghiệm**).
* Nếu số phương trình nhỏ hơn số ẩn ($m < n$): Ta luôn có $r(A) \le m < n \Rightarrow$ Hệ **luôn có vô số nghiệm**.

### 3.3. Quy trình giải nhanh các dạng bài tập
1. **Biện luận hệ vuông $n \times n$ theo tham số $m$:**
   * *Bước 1:* Tính $\det A$ và giải $\det A = 0$ tìm các giá trị đặc biệt $m_1, m_2$.
   * *Bước 2:* Với $m \neq m_1$ và $m \neq m_2$, hệ có **nghiệm duy nhất** (thường chỉ cần bước này đã chọn được đáp án đúng).
   * *Bước 3:* Nếu cần xét tại $m = m_1$, thay trực tiếp $m_1$ vào hệ rồi cộng/trừ các phương trình xem có dẫn đến vô lý ($0 = c \neq 0 \Rightarrow$ vô nghiệm) hay trùng lặp ($0 = 0 \Rightarrow$ vô số nghiệm).
2. **Tìm điều kiện $a, b, c$ để hệ có nghiệm:**
   * Viết ma trận $[A \mid b]$, khử Gauss để tạo ra một hàng toàn số $0$ ở bên trái (vế $A$).
   * Để hệ có nghiệm, biểu thức theo $a, b, c$ ở bên phải của hàng đó **bắt buộc phải bằng $0$**.

---

## CHUYÊN ĐỀ 4: KHÔNG GIAN VÉC TƠ

### 4.1. Không gian véc tơ con và Số chiều
* **Dấu hiệu nhận diện nhanh không gian con của $\mathbb{R}^n$:** Tập $W$ là không gian con khi và chỉ khi nó được định nghĩa bởi một hoặc nhiều phương trình **tuyến tính thuần nhất** (bậc nhất theo $x, y, z, \dots$ và vế phải bằng $0$).
  * *Ví dụ:* $x = 2y \Leftrightarrow x - 2y = 0$ (là không gian con); $x + y = 1$ hoặc $x^2 + y = 0$ (**không** là không gian con).
* **Công thức tính nhanh số chiều:** Nếu $U \subset \mathbb{R}^n$ được xác định bởi $k$ phương trình tuyến tính thuần nhất độc lập thì:
  $$\dim U = n - k$$
  * *Ví dụ:* $U = \{(x, y, z, t) \in \mathbb{R}^4 \mid x + 2y + 3z - 4t = 0\}$ có $n = 4, k = 1 \Rightarrow \dim U = 4 - 1 = 3$.

### 4.2. Độc lập tuyến tính, Hệ sinh và Cơ sở của $P_n$
* Không gian đa thức $P_n$ (bậc không vượt quá $n$) có $\dim P_n = n + 1$. Đặc biệt, **$\dim P_2 = 3$** với cơ sở chính tắc $\{1, t, t^2\}$.
* **Điều kiện sinh ra $P_2$:** Một hệ $S$ gồm đúng $3$ đa thức sinh ra $P_2 \Leftrightarrow$ ma trận tọa độ $3 \times 3$ của chúng có $\det \neq 0$.
* **Mẹo loại trừ trong 5 giây:**
  * Hệ có ít hơn $3$ véc tơ (ví dụ $2$ véc tơ) $\Rightarrow$ **Loại ngay** (không đủ sinh không gian $3$ chiều).
  * Hai véc tơ trong hệ tỉ lệ nhau (ví dụ $p_2 = 2p_1$) $\Rightarrow$ **Loại ngay** (phụ thuộc tuyến tính).
  * Kiểm tra nhanh xem có véc tơ nào là tổ hợp đơn giản của 2 véc tơ kia không trước khi tính định thức.

### 4.3. Ma trận chuyển cơ sở
* **Nguyên tắc chuẩn:** Ma trận chuyển cơ sở từ cơ sở cũ $B$ sang cơ sở mới $B'$ (ký hiệu $P_{B \to B'}$) có các cột là tọa độ của các véc tơ thuộc $B'$ biểu diễn trong $B$.
* **Trường hợp đặc biệt với cơ sở chính tắc $E_0$:**
  * Từ $E_0$ sang $E$: Dựng trực tiếp các véc tơ của $E$ thành các **cột** $\Rightarrow P_{E_0 \to E} = [E]$.
  * Từ $E$ sang $E_0$: Lấy nghịch đảo $\Rightarrow P_{E \to E_0} = [E]^{-1}$.
  *(Lưu ý: Một số ngân hàng đề thi trong nước dùng cách gọi ngược nhẹ ở câu chữ; nếu bạn tính $[E]^{-1}$ mà không khớp đáp án nào, hãy kiểm tra lại $[E]$).*

### 4.4. Tổng và Tổng trực tiếp ($W_1 \oplus W_2$)
* **Công thức Grassmann:** $\dim(W_1 + W_2) = \dim W_1 + \dim W_2 - \dim(W_1 \cap W_2)$.
* **Điều kiện tổng trực tiếp:** $W_1 + W_2$ là tổng trực tiếp ($W_1 \oplus W_2$) $\Leftrightarrow W_1 \cap W_2 = \{0\} \Leftrightarrow \dim(W_1 \cap W_2) = 0$.
* **Mẹo kiểm tra nhanh trong $\mathbb{R}^3$:** Nếu $\dim W_1 = 2$ và $\dim W_2 = 2$, thì $\dim(W_1 + W_2) \le 3 < 2 + 2 = 4 \Rightarrow \dim(W_1 \cap W_2) \ge 1$. Do đó **hai mặt phẳng (không gian 2 chiều) trong $\mathbb{R}^3$ KHÔNG BAO GIỜ có thể tạo thành tổng trực tiếp!**

---

## CHUYÊN ĐỀ 5: ÁNH XẠ TUYẾN TÍNH, GIÁ TRỊ RIÊNG & VÉC TƠ RIÊNG

### 5.1. Nhận diện Ánh xạ tuyến tính và Đẳng cấu
* **Ánh xạ tuyến tính:** Mọi tọa độ ảnh phải là tổ hợp tuyến tính bậc nhất thuần nhất của các biến nguồn. Loại ngay nếu thấy:
  * Hằng số tự do (ví dụ $2a_0 + 1 \Rightarrow f(0) \neq 0$).
  * Lũy thừa bậc $\ge 2$ (như $z^2$).
  * Tích các biến (như $xy$).
* **Đẳng cấu ($f: \mathbb{R}^n \to \mathbb{R}^n$):** $f$ là đẳng cấu $\Leftrightarrow$ ma trận chính tắc $A_f$ khả nghịch ($\det A_f \neq 0$).

### 5.2. Ảnh ($\operatorname{Im} f$) và Hạt nhân ($\operatorname{Ker} f$)
Cho ánh xạ tuyến tính $f: V \to W$ với ma trận $A_f$:
* $\dim(\operatorname{Im} f) = r(A_f)$ (bằng hạng của ma trận $A_f$).
* **Định lý Hạng – Số khuyết:**
  $$\dim(\operatorname{Ker} f) + \dim(\operatorname{Im} f) = \dim V$$
* **Mẹo giải nhanh:**
  * *Tìm véc tơ thuộc $\operatorname{Im} f$ khi $r(A_f) = 1$:* Mọi véc tơ trong $\operatorname{Im} f$ đều là bội số của một cột khác $0$ bất kỳ của $A_f$. Chỉ cần so tỉ lệ tọa độ!
  * *Tìm cơ sở của $\operatorname{Im} f$ trong $\mathbb{R}^2$ khi $\det A_f \neq 0$:* Khi đó $\operatorname{Im} f = \mathbb{R}^2$, nên bất kỳ cặp $2$ véc tơ nào **không tỉ lệ nhau** ($\det \neq 0$) đều là một cơ sở của $\operatorname{Im} f$.
  * *Tìm $m$ để $\dim(\operatorname{Im} f) = 2$ (với $A_f$ cỡ $3 \times 3$):* Giải $\det A_f = 0$ để tìm các giá trị $m$, sau đó thay từng $m$ vào kiểm tra xem giá trị nào cho $r(A_f) = 2$ (tránh giá trị làm cho cả $3$ hàng tỉ lệ nhau vì khi đó $r(A_f) = 1$).

### 5.3. Ma trận của $f: \mathbb{R}^n \to \mathbb{R}^m$ trong cặp cơ sở $(B_1, B_2)$
* **Kích thước ma trận:** Luôn có cỡ $m \times n$ ($m$ hàng, $n$ cột). Ví dụ $f: \mathbb{R}^3 \to \mathbb{R}^2$ thì ma trận có cỡ $2 \times 3$ (loại ngay đáp án cỡ $3 \times 2$).
* **Công thức:** $[f]_{B_1, B_2} = [B_2]^{-1} \cdot [f(B_1)]$, trong đó cột thứ $k$ của $[f(B_1)]$ là ảnh $f(u_k)$ của véc tơ thứ $k$ trong $B_1$.
* **Mẹo giải nhanh 15 giây:** Chỉ cần tính ảnh $f(u_1)$ của véc tơ đầu tiên trong $B_1$, rồi giải hệ nhỏ $f(u_1) = x v_1 + y v_2$ để tìm **cột $1$**. Đối chiếu cột $1$ với 4 đáp án thường chốt được ngay kết quả.

### 5.4. Giá trị riêng và Véc tơ riêng
* **Định nghĩa:** $v \neq 0$ là véc tơ riêng của $A$ ứng với giá trị riêng $\lambda \Leftrightarrow Av = \lambda v \Leftrightarrow (A - \lambda I)v = 0$.
* **Số chiều không gian riêng:** $\dim E_\lambda = n - r(A - \lambda I)$.
  * Luôn nhớ: $1 \le \dim E_\lambda \le$ (bội đại số của $\lambda$).
  * Tổng các giá trị riêng (kể cả bội) bằng vết của ma trận: $\lambda_1 + \lambda_2 + \dots + \lambda_n = \operatorname{tr}(A) = a_{11} + a_{22} + \dots + a_{nn}$.
* **Mẹo thử ngược véc tơ riêng:** Không cần giải hệ $(A - \lambda I)v = 0$. Lấy trực tiếp **hàng $1$ của $A$ nhân vô hướng với véc tơ $v$** ở các đáp án: nếu kết quả $\neq \lambda v_1$ thì $v$ **không** phải véc tơ riêng ứng với $\lambda$.

---

## CHUYÊN ĐỀ 6: KHÔNG GIAN EUCLIDE & MA TRẬN TRỰC GIAO

### 6.1. Tích vô hướng và Chuẩn (Độ dài) của véc tơ
* Cho tích vô hướng $\langle u, v \rangle$. Chuẩn của véc tơ $v$ là:
  $$\|v\| = \sqrt{\langle v, v \rangle}$$
* **Cách làm nhanh:** Thay tọa độ của $v$ vào cả $u$ và $v$ ($x_i = y_i = v_i$), tính ra giá trị $\langle v, v \rangle$, và **bắt buộc lấy căn bậc hai**.

### 6.2. Tọa độ trong cơ sở Trực giao và Trực chuẩn
Cho $B = \{u_1, u_2, \dots, u_n\}$ là một **cơ sở trực giao** ($\langle u_i, u_j \rangle = 0$ với mọi $i \neq j$). Tọa độ $(x_1, x_2, \dots, x_n)$ của véc tơ $u$ trong cơ sở $B$ là:
$$x_i = \frac{\langle u, u_i \rangle}{\|u_i\|^2} = \frac{\langle u, u_i \rangle}{\langle u_i, u_i \rangle}$$
* *Ví dụ:* Với $u_1 = (1, 1, 1)$ và $u = (a, b, c)$, ta có $\|u_1\|^2 = 1^2 + 1^2 + 1^2 = 3$, nên $x = \frac{a + b + c}{3}$ (nhớ mẫu số là $3$, không phải $\sqrt{3}$!).
* Nếu $B$ là **cơ sở trực chuẩn** ($\|u_i\| = 1$) thì $x_i = \langle u, u_i \rangle$.

### 6.3. Ma trận Trực giao
Ma trận vuông $A$ là ma trận trực giao khi và chỉ khi thỏa mãn đồng thời các tính chất sau:
* $A^T A = A A^T = I \Leftrightarrow$ **$A$ khả nghịch và $A^{-1} = A^T$**.
* Các véc tơ hàng (và các véc tơ cột) của $A$ tạo thành một hệ trực chuẩn.
* $\det A = \pm 1$ *(Cẩn thận: không thể khẳng định chắc chắn $\det A = 1$ hay $\det A = -1$ nếu không biết cụ thể ma trận $A$)*.

---

## CHUYÊN ĐỀ 7: DẠNG SONG TUYẾN TÍNH & DẠNG TOÀN PHƯƠNG

### 7.1. Ma trận của Dạng toàn phương trong cơ sở chính tắc
Cho $Q(x_1, x_2, x_3) = a_{11}x_1^2 + a_{22}x_2^2 + a_{33}x_3^2 + 2a_{12}x_1x_2 + 2a_{13}x_1x_3 + 2a_{23}x_2x_3$.
Ma trận $A$ của $Q$ **luôn là ma trận đối xứng** ($A^T = A$):
* Trên đường chéo chính: Ghi nguyên hệ số của $x_i^2$.
* Ngoài đường chéo chính ($i \neq j$): Lấy **một nửa** hệ số của $x_i x_j$ đặt đối xứng vào vị trí $(i, j)$ và $(j, i)$.

### 7.2. Tính đối xứng và Xác định dương của Dạng song tuyến tính $\eta(u, v)$
* **Kiểm tra đối xứng trong 2 giây:** So sánh hệ số của $x_i y_j$ và $x_j y_i$.
  * Nếu bằng nhau với mọi $i \neq j$ (tức ma trận $A$ đối xứng) $\Rightarrow$ **Đối xứng**.
  * Nếu khác nhau (ví dụ $-2x_1 y_2 + 3x_2 y_1$) $\Rightarrow$ **Không đối xứng**.
* **Kiểm tra xác định dương:**
  * *Trường hợp 1 ($\eta$ đối xứng):* Dùng **Tiêu chuẩn Sylvester**. Tính các định thức con chính góc trên bên trái $\Delta_1, \Delta_2, \Delta_3$. Dạng xác định dương $\Leftrightarrow \Delta_1 > 0, \Delta_2 > 0, \Delta_3 > 0$.
  * *Trường hợp 2 ($\eta$ không đối xứng):* Thay $v = u$ để lập biểu thức $\eta(u, u)$, sau đó gom hằng đẳng thức (hoặc xét dấu tam thức bậc 2). Nếu $\eta(u, u) > 0$ với mọi $u \neq 0$ thì **xác định dương**.

### 7.3. Tìm cặp chỉ số quán tính $(p, q)$ của Dạng toàn phương
* **Cách 1 — Gom bình phương Lagrange (Nhanh nhất cho bài $3$ biến đơn giản):**
  Nhóm thành tổng/hiệu các bình phương độc lập tuyến tính:
  $$Q = c_1 y_1^2 + c_2 y_2^2 + c_3 y_3^2$$
  * $p$ = số hệ số $c_i > 0$ (chỉ số quán tính dương).
  * $q$ = số hệ số $c_i < 0$ (chỉ số quán tính âm).
  * *Ví dụ:* $x_1^2 + 2x_2^2 - 3x_3^2 - 2x_1x_2 - 2x_2x_3 = (x_1 - x_2)^2 + (x_2 - x_3)^2 - 4x_3^2 \Rightarrow p = 2, q = 1$.
* **Cách 2 — Định lý Jacobi (Khi khó gom bình phương và $\Delta_1, \Delta_2, \Delta_3 \neq 0$):**
  Lập dãy dấu: $(+, \operatorname{sgn}(\Delta_1), \operatorname{sgn}(\Delta_2), \operatorname{sgn}(\Delta_3))$.
  * Số lần **giữ nguyên dấu** giữa hai số liên tiếp là $p$.
  * Số lần **đổi dấu** giữa hai số liên tiếp là $q$.

---

## TỔNG HỢP CÁC "BẪY" TRẮC NGHIỆM KINH ĐIỂN & CÁCH NÉ

| STT | Chủ đề | Bẫy đề thi hay gài | Quy tắc né bẫy tuyệt đối |
| :-: | :--- | :--- | :--- |
| 1 | **Logic** | $((p \to r) \wedge (q \to r)) \equiv ((p \wedge q) \to r)$ | Sai! Phải là dấu tuyển: $(p \vee q) \to r$. |
| 2 | **Tập hợp** | $\emptyset \in \{x\}$ | Sai! $\emptyset \subset \{x\}$ mới đúng. |
| 3 | **Định thức** | $\det(3A) = 3\det A$ | Sai! Với ma trận cấp $n$, phải là $\det(kA) = k^n \det A$. |
| 4 | **Nghịch đảo** | Tìm $(A^{-1})_{32}$ lại đi xóa hàng $3$, cột $2$ | Sai! Phải **đảo chỉ số**: xóa hàng $2$, cột $3$. |
| 5 | **Trực giao** | Ma trận trực giao có $\det A = 1$ | Chưa chắc! $\det A = \pm 1$; khẳng định đúng là $A^{-1} = A^T$. |
| 6 | **Tích vô hướng** | Chọn $\|v\| = 13$ thay vì $\sqrt{13}$ | Tính xong $\langle v, v \rangle$ luôn nhớ **lấy căn bậc hai**. |
| 7 | **Tọa độ trực giao** | Chia cho $\sqrt{3}$ thay vì $3$ | Công thức là $\frac{\langle u, u_i \rangle}{\|u_i\|^2}$ (**không có căn** ở mẫu). |
| 8 | **Dạng toàn phương** | Chọn ma trận tam giác trên hoặc quên chia $2$ | Ma trận dạng toàn phương **luôn đối xứng** và chia đôi hệ số $x_i x_j$. |
| 9 | **Tổng trực tiếp** | Hai không gian $2$ chiều tạo tổng trực tiếp $\mathbb{R}^3$ | Không thể! $2 + 2 > 3$ nên giao luôn khác $\{0\}$. |

---

## CHIẾN THUẬT PHÂN BỔ THỜI GIAN (20 CÂU / 25 PHÚT)

1. **Vòng 1 (5 phút đầu — Ăn trọn 8–10 câu lý thuyết & nhận diện):** Làm ngay các câu Logic, Tập hợp, Ánh xạ, Nhận diện ánh xạ tuyến tính, Ma trận trực giao, Số chiều không gian con, Ma trận dạng toàn phương, Số tham số nghiệm hệ phương trình. Mỗi câu chỉ mất 15–30 giây.
2. **Vòng 2 (12 phút tiếp theo — Các câu tính toán ngắn):** Tính chuẩn $\|v\|$, tọa độ cơ sở trực giao, phần tử $(AB - 2BA)_{12}$, đẳng cấu $\mathbb{R}^2 \to \mathbb{R}^2$, gom bình phương $(p, q)$, thử ngược véc tơ riêng, hệ sinh $P_2$.
3. **Vòng 3 (8 phút cuối — Các câu khử Gauss & tham số $m$):** Biện luận hệ có tham số $m$, điều kiện $a, b, c$ để hệ có nghiệm, tìm phần tử $(A^{-1})_{32}$, ma trận $[f]_{B_1, B_2}$, hạng ma trận $4 \times 4$ chứa $m$. Luôn dùng mẹo kiểm tra cột 1 hoặc thử giá trị đặc biệt để rút ngắn một nửa thời gian tính toán.
