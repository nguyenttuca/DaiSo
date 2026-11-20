# Ứng Dụng Ôn Tập & Thi Thử: Đại Số Tuyến Tính & Toán Rời Rạc

Hệ thống web trắc nghiệm **thuần Frontend 100% (Pure HTML/CSS/JS)**, giao diện **tối giản (Minimalist - Notion / Linear Style)**, hỗ trợ deploy lên **GitHub Pages** chỉ với 1 cú click.

---

## 🌟 Tính Năng Chính

### 1. ⚡ Chế độ Thi Thử (35 phút / 20 câu)
- **Màn hình bắt đầu (Start Screen):** Khi vào trang, hệ thống **chưa tự động tính giờ**. Người dùng đọc hướng dẫn, chọn nguồn đề (*Ngẫu nhiên 200 câu* hoặc *Chỉ 42 câu đề gốc*) rồi bấm **"Bắt đầu làm bài thi (35 phút)"** thì đồng hồ mới bắt đầu đếm ngược.
- **Đồng hồ bấm giờ:** Đếm ngược chính xác **35:00**, chuyển màu cảnh báo khi còn dưới 5 phút, tự động thu bài khi hết giờ.
- **Thanh điều hướng 20 câu:** Hiển thị trực quan trạng thái câu hiện tại, câu đã làm, và câu được đánh dấu cờ xem lại.
- **Nút Hủy thi:** Cho phép hủy lượt thi hiện tại và quay về màn hình chuẩn bị.
- **Phím tắt nhanh:** Bấm phím `1`, `2`, `3`, `4` hoặc `A`, `B`, `C`, `D` để chọn đáp án; `←` / `→` để chuyển câu; `F` để cắm cờ xem lại.

### 2. 📝 Chế độ Xem Lại & Lời Giải Chi Tiết (Sau khi nộp bài)
- **Bảng điểm trực quan:** Hiển thị số câu đúng (vd: `18/20`), quy đổi thang điểm 10 (`9.0/10`), thời gian hoàn thành và đánh giá năng lực.
- **Bộ lọc linh hoạt:** Lọc nhanh *Tất cả 20 câu*, *Chỉ xem câu làm sai*, *Chỉ xem câu làm đúng*, hoặc *Câu chưa trả lời*.
- **Đối chiếu rõ ràng:** Phương án bạn đã chọn (đỏ/xanh) đối chiếu với đáp án đúng chuẩn xác.
- **Lời giải chi tiết:** Trình bày đầy đủ các bước chứng minh, công thức ma trận, định thức và giải thích toán học chuẩn xác bằng KaTeX.
- **Làm lại đề:** Tùy chọn làm lại ngay đề thi vừa làm hoặc tạo một đề thi 20 câu mới.

### 3. 📖 Chế độ Ôn Tổng Quát (Làm câu nào chấm câu đó)
- **Toàn bộ 200 câu hỏi:** Bao gồm **42 câu từ đề thi gốc** (được gắn nhãn nổi bật) và **158 câu bổ sung** chuẩn đại học qua 6 chuyên đề.
- **Chấm điểm tức thì (Instant Feedback):** Ngay khi bạn chọn phương án, hệ thống lập tức chấm đúng/sai và mở ngay lời giải chi tiết.
- **Bộ lọc đa chiều:**
  - Lọc theo 6 Chuyên đề.
  - Lọc theo nguồn: *Chỉ 42 câu đề gốc* hoặc *158 câu luyện thêm*.
  - Lọc theo trạng thái: *Chưa làm*, *Đã làm đúng*, *Đã làm sai*, *Đã lưu sao ⭐*.
  - Ô tìm kiếm từ khóa tức thì (vd: `định thức`, `ma trận nghịch đảo`, `Gram - Schmidt`, `Sylvester`, `đối ngẫu`...).
- **2 chế độ xem:**
  - *Chế độ tập trung (Focus mode):* Xem từng câu một, kèm hộp chọn nhảy nhanh đến bất kỳ câu nào từ 1 đến 200.
  - *Chế độ cuộn danh sách (List mode):* Xem toàn bộ danh sách câu hỏi theo luồng cuộn.
- **Lưu tiến độ tự động:** Lưu trữ vào `localStorage` của trình duyệt, không lo mất tiến độ khi đóng tab hoặc tải lại trang.

---

## 🚀 Hướng Dẫn Deploy Lên GitHub Pages (Miễn phí 100%)

Đây là dự án **Web thuần Frontend** (không cần Node.js, không cần build, không cần backend server). Bạn có thể đưa lên GitHub Pages trong 1 phút theo các bước:

### Bước 1: Tạo Repository mới trên GitHub
1. Truy cập [github.com/new](https://github.com/new).
2. Đặt tên repository (ví dụ: `toan-roi-rac-dstt`).
3. Chọn chế độ **Public** và không cần tích chọn README (vì đã có sẵn trong máy).
4. Bấm **Create repository**.

### Bước 2: Đẩy mã nguồn lên GitHub
Mở Terminal tại thư mục này (`/Users/nguyenttuca/Documents/toplearn/web`) và chạy các lệnh sau (thay `username` và `toan-roi-rac-dstt` bằng tài khoản và repo của bạn):

```bash
# 1. Thêm remote GitHub của bạn
git remote add origin https://github.com/username/toan-roi-rac-dstt.git

# 2. Đẩy code lên nhánh main
git branch -M main
git push -u origin main
```

### Bước 3: Kích hoạt GitHub Pages
1. Vào repository trên GitHub > Chọn tab **Settings**.
2. Ở menu bên trái, chọn **Pages**.
3. Tại mục **Build and deployment > Source**:
   - Chọn **Deploy from a branch**.
   - Branch: chọn `main` và thư mục `/(root)`.
   - Bấm **Save**.
4. Chờ khoảng 1 - 2 phút, GitHub sẽ cung cấp đường link website trực tiếp của bạn (ví dụ: `https://username.github.io/toan-roi-rac-dstt/`).

*(Dự án đã có sẵn file `.nojekyll` và GitHub Actions Workflow `.github/workflows/deploy.yml` để đảm bảo triển khai tự động hoàn hảo).*

---

## 🖥️ Chạy Trực Tiếp Trên Máy Tính (Local)

Chỉ cần nhấp đúp vào file [`index.html`](file:///Users/nguyenttuca/Documents/toplearn/web/index.html) để mở trực tiếp trên trình duyệt (Chrome, Safari, Edge, Firefox).

Hoặc chạy nhanh bằng Python:
```bash
python3 -m http.server 8000
```
Truy cập: `http://localhost:8000`.

---

## ⌨️ Phím Tắt Nhanh

| Phím | Tác vụ |
| :--- | :--- |
| `1` / `2` / `3` / `4` hoặc `A` / `B` / `C` / `D` | Chọn phương án tương ứng |
| `←` hoặc `J` | Quay lại câu hỏi trước |
| `→` hoặc `K` | Chuyển sang câu hỏi kế tiếp |
| `F` | Đánh dấu cờ (Flag) câu hỏi cần xem lại |
