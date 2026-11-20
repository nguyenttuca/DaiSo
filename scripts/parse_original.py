import re
import json

# We can store the 42 original questions directly
original_raw = """
## CHUYÊN ĐỀ 1: LOGIC MỆNH ĐỀ, TẬP HỢP VÀ ÁNH XẠ

### Câu 1
Đối ngẫu của công thức $(x' \\vee 0) \\wedge (y' \\vee z)$ là:
* **A.** $(x' \\wedge 0) \\vee (y' \\vee z)$.
* **B.** $(x \\wedge 1) \\vee (y \\vee z')$.
* **C.** $(x' \\wedge 1) \\vee (y' \\vee z)$.
* **D.** $(x' \\vee 1) \\wedge (y' \\wedge z)$.

**Lời giải:**
* **Quy tắc tìm công thức đối ngẫu trong Đại số Boole:** Thay phép hội ($\\wedge$) thành phép tuyển ($\\vee$) và ngược lại; thay hằng số $0$ thành $1$ và ngược lại; giữ nguyên các biến và dấu phủ định ($'$).
* Áp dụng vào công thức $(x' \\vee 0) \\wedge (y' \\vee z)$, ta thu được công thức đối ngẫu chuẩn xác là:
  $$(x' \\wedge 1) \\vee (y' \\wedge z)$$
* **Đối chiếu phương án:** Trên hệ thống đề thi gốc, phương án **C** bị gõ thiếu việc đổi dấu $\\vee$ thứ hai thành $\\wedge$, nhưng là phương án duy nhất biến đổi đúng phần $(x' \\vee 0) \\wedge \\dots \\to (x' \\wedge 1) \\vee \\dots$.
* **Chọn đáp án: C.**
"""
print("Python script template ready")
