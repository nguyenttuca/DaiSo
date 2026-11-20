# Ứng Dụng Ôn Tập & Thi Thử: Đại Số Tuyến Tính & Toán Rời Rạc

Hệ thống web trắc nghiệm **siêu đơn giản, giao diện cực kỳ tối giản (Notion / Linear Minimalist)** dành cho sinh viên ôn tập và thi thử môn **Đại số tuyến tính & Toán rời rạc**.

---

## 🌟 Tính Năng Nổi Bật

### 1. ⚡ Chế độ Thi Thử (35 phút / 20 câu)
- **Chuẩn đề thi:** Mỗi lượt thi hệ thống tự động bốc ngẫu nhiên **20 câu hỏi** cân đối đều qua 6 chuyên đề.
- **Đồng hồ bấm giờ:** Đếm ngược chính xác **35:00**, chuyển màu cảnh báo khi còn dưới 5 phút, tự động thu bài khi hết giờ.
- **Thanh điều hướng 20 câu:** Hiển thị trực quan trạng thái câu hiện tại, câu đã làm, và câu được đánh dấu cờ xem lại.
- **Phím tắt nhanh:** Bấm phím `1`, `2`, `3`, `4` hoặc `A`, `B`, `C`, `D` để chọn đáp án; `←` / `→` để chuyển câu; `F` để cắm cờ xem lại.
- **Hộp thoại nộp bài:** Cảnh báo số câu chưa làm trước khi xác nhận nộp.

### 2. 📝 Chế độ Xem Lại & Lời Giải Chi Tiết (Sau khi nộp bài)
- **Bảng điểm trực quan:** Hiển thị số câu đúng (vd: `18/20`), quy đổi thang điểm 10 (`9.0/10`), thời gian hoàn thành và đánh giá năng lực.
- **Bộ lọc linh hoạt:** Lọc nhanh *Tất cả 20 câu*, *Chỉ xem câu làm sai*, *Chỉ xem câu làm đúng*, hoặc *Câu chưa trả lời*.
- **Đối chiếu rõ ràng:** Phương án bạn đã chọn (đỏ/xanh) đối chiếu với đáp án đúng chuẩn xác.
- **Lời giải chi tiết:** Trình bày đầy đủ các bước chứng minh, công thức ma trận, định thức và giải thích toán học chuẩn xác bằng KaTeX.
- **Làm lại đề:** Tùy chọn làm lại ngay đề thi vừa làm hoặc tạo một đề thi 20 câu mới.

### 3. 📖 Chế độ Ôn Tổng Quát (Làm câu nào chấm câu đó)
- **Toàn bộ 200 câu hỏi:** Bao gồm **42 câu từ đề thi gốc** (được gắn nhãn nổi bật) và **158 câu bổ sung** chuẩn đại học.
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

### 4. 🎨 Giao diện & Trải nghiệm
- **Thiết kế tối giản:** Tone màu monochrome nhẹ mắt (như Notion/Linear), không quảng cáo, không hoạt ảnh rườm rà.
- **Dark Mode / Light Mode:** Tự động theo hệ điều hành hoặc bấm nút chuyển đổi ở góc trên bên phải.
- **Hiển thị công thức Toán đẹp mắt:** Sử dụng KaTeX rendering cực nhanh, hỗ trợ ma trận, phân số, ký hiệu logic $\wedge, \vee, \to$, không gian $\mathbb{R}^n$, tích vô hướng $\langle u, v \rangle$, chuẩn $\|u\|$, định thức $\det$.

---

## 📂 Cấu Trúc Dự Án

```
├── index.html              # Trang giao diện chính (SPA)
├── css/
│   └── style.css           # Toàn bộ CSS tối giản (Light / Dark theme)
├── js/
│   └── app.js              # Xử lý logic thi thử, bấm giờ, chấm điểm, phím tắt
├── data/
│   ├── questions.js        # File JS chứa ngân hàng 200 câu hỏi (cho frontend)
│   └── questions.json      # File JSON định dạng chuẩn
├── README.md               # Tài liệu hướng dẫn
└── original_text.md        # Văn bản đề thi gốc 42 câu
```

---

## 🚀 Cách Mở Ứng Dụng

Bạn có thể mở ứng dụng theo một trong các cách cực kỳ đơn giản sau:

### Cách 1: Mở trực tiếp bằng trình duyệt (Không cần cài đặt gì)
Nhấp đúp chuột vào file `index.html` hoặc chạy lệnh trong terminal:
```bash
open index.html
```

### Cách 2: Chạy qua một web server cục bộ
```bash
# Sử dụng Python 3 (sẵn có trên máy):
python3 -m http.server 8000

# Hoặc sử dụng Node.js:
npx serve .
```
Sau đó mở trình duyệt truy cập: `http://localhost:8000`.

---

## ⌨️ Bảng Phím Tắt Nhanh

| Phím | Tác vụ |
| :--- | :--- |
| `1` / `2` / `3` / `4` hoặc `A` / `B` / `C` / `D` | Chọn phương án tương ứng |
| `←` hoặc `J` | Quay lại câu hỏi trước |
| `→` hoặc `K` | Chuyển sang câu hỏi kế tiếp |
| `F` | Đánh dấu cờ (Flag) câu hỏi cần xem lại |
