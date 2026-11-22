// NGÂN HÀNG CÂU HỎI ĐẠI SỐ TUYẾN TÍNH & TOÁN RỜI RẠC PTIT
// Tổng hợp 612 câu hỏi chia đều 6 chương và 24 dạng bài chuẩn slide PTIT
(function (global) {
  const questions = [
  {
    "id": 1,
    "originalId": 20,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho các mệnh đề $p, q, r$. Mệnh đề nào dưới đây **không đúng**?",
    "options": [
      {
        "key": "A",
        "text": "$((p \\Rightarrow r) \\wedge (q \\Rightarrow r)) \\equiv ((p \\wedge q) \\Rightarrow r)$"
      },
      {
        "key": "B",
        "text": "$\\overline{p \\Rightarrow q} \\equiv (p \\wedge \\bar{q})$"
      },
      {
        "key": "C",
        "text": "$(p \\vee q) \\equiv (\\bar{p} \\Rightarrow q)$"
      },
      {
        "key": "D",
        "text": "$((p \\Rightarrow q) \\wedge (p \\Rightarrow r)) \\equiv (p \\Rightarrow (q \\wedge r))$"
      }
    ],
    "correct": "A",
    "explanation": "* Kiểm tra mệnh đề A:\n  $$(p \\Rightarrow r) \\wedge (q \\Rightarrow r) \\equiv (\\bar{p} \\vee r) \\wedge (\\bar{q} \\vee r) \\equiv (\\bar{p} \\wedge \\bar{q}) \\vee r \\equiv \\overline{p \\vee q} \\vee r \\equiv (p \\vee q) \\Rightarrow r$$\n* Vế phải phải là $(p \\vee q) \\Rightarrow r$, chứ không phải $(p \\wedge q) \\Rightarrow r$.\n* Do đó phương án A là khẳng định **không đúng**.\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 2,
    "originalId": 2,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Mệnh đề nào sau đây là một **hằng đúng** (tautology)?",
    "options": [
      {
        "key": "A",
        "text": "$(p \\vee q) \\to p$"
      },
      {
        "key": "B",
        "text": "$p \\leftrightarrow \\bar{p}$"
      },
      {
        "key": "C",
        "text": "$p \\wedge (p \\to q)$"
      },
      {
        "key": "D",
        "text": "$p \\to (p \\vee q)$"
      }
    ],
    "correct": "D",
    "explanation": "Ta có $p \\to (p \\vee q) \\equiv \\bar{p} \\vee (p \\vee q) \\equiv (\\bar{p} \\vee p) \\vee q \\equiv 1 \\vee q \\equiv 1$. Do đó mệnh đề này luôn nhận giá trị chân lý Đúng (1) với mọi giá trị của $p, q$, tức là một hằng đúng.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 3,
    "originalId": 3,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Mệnh đề phản đảo của mệnh đề kéo theo $p \\to q$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\bar{q} \\to \\bar{p}$"
      },
      {
        "key": "B",
        "text": "$q \\to p$"
      },
      {
        "key": "C",
        "text": "$\\bar{p} \\to \\bar{q}$"
      },
      {
        "key": "D",
        "text": "$\\overline{p \\to q}$"
      }
    ],
    "correct": "A",
    "explanation": "Theo định nghĩa logic mệnh đề:\n- Mệnh đề đảo của $p \\to q$ là $q \\to p$.\n- Mệnh đề nghịch đảo là $\\bar{p} \\to \\bar{q}$.\n- Mệnh đề phản đảo (contrapositive) là $\\bar{q} \\to \\bar{p}$, và ta luôn có $p \\to q \\equiv \\bar{q} \\to \\bar{p}$.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 4,
    "originalId": 4,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Phủ định của mệnh đề $\\forall x \\in \\mathbb{R}, \\, x^2 - 2x + 3 > 0$ là mệnh đề nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "$\\forall x \\in \\mathbb{R}, \\, x^2 - 2x + 3 \\le 0$"
      },
      {
        "key": "B",
        "text": "$\\exists x \\in \\mathbb{R}, \\, x^2 - 2x + 3 = 0$"
      },
      {
        "key": "C",
        "text": "$\\exists x \\in \\mathbb{R}, \\, x^2 - 2x + 3 < 0$"
      },
      {
        "key": "D",
        "text": "$\\exists x \\in \\mathbb{R}, \\, x^2 - 2x + 3 \\le 0$"
      }
    ],
    "correct": "D",
    "explanation": "Quy tắc phủ định mệnh đề chứa lượng từ: $\\overline{\\forall x \\in X, P(x)} \\equiv \\exists x \\in X, \\overline{P(x)}$. Phủ định của bất đẳng thức '$> 0$' là '$\\le 0$'. Vậy mệnh đề phủ định là $\\exists x \\in \\mathbb{R}, \\, x^2 - 2x + 3 \\le 0$.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 5,
    "originalId": 5,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Mệnh đề $((p \\to q) \\wedge p) \\to q$ là dạng suy luận nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Quy tắc tam đoạn luận giả thiết"
      },
      {
        "key": "B",
        "text": "Quy tắc Modus Tollens (Phủ định kết luận)"
      },
      {
        "key": "C",
        "text": "Quy tắc Modus Ponens (Khẳng định tiền đề)"
      },
      {
        "key": "D",
        "text": "Quy tắc tam đoạn luận tuyển"
      }
    ],
    "correct": "C",
    "explanation": "Quy tắc suy luận Modus Ponens phát biểu rằng: nếu $p \\to q$ đúng và $p$ đúng, thì $q$ đúng. Biểu thức logic tương ứng là $((p \\to q) \\wedge p) \\to q$, là một hằng đúng.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 6,
    "originalId": 6,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho $A = \\{x \\in \\mathbb{R} \\mid x^2 - 5x + 6 = 0\\}$ và $B = \\{2, 3\\}$. Khẳng định nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$B \\subset A$ nhưng $B \\neq A$"
      },
      {
        "key": "B",
        "text": "$A \\cap B = \\emptyset$"
      },
      {
        "key": "C",
        "text": "$A = B$"
      },
      {
        "key": "D",
        "text": "$A \\subset B$ nhưng $A \\neq B$"
      }
    ],
    "correct": "C",
    "explanation": "Phương trình $x^2 - 5x + 6 = 0 \\Leftrightarrow (x - 2)(x - 3) = 0 \\Leftrightarrow x = 2$ hoặc $x = 3$. Do đó tập $A = \\{2, 3\\}$, suy ra $A = B$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 7,
    "originalId": 7,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Công thức logic nào dưới đây là một **hằng đúng (tautology)**?",
    "options": [
      {
        "key": "A",
        "text": "$(p \\vee q) \\to (p \\wedge q)$"
      },
      {
        "key": "B",
        "text": "$(p \\to q) \\to (q \\to p)$"
      },
      {
        "key": "C",
        "text": "$\\bar{p} \\to p$"
      },
      {
        "key": "D",
        "text": "$((p \\to q) \\wedge p) \\to q$"
      }
    ],
    "correct": "D",
    "explanation": "* **Quy tắc tam đoạn luận khẳng định (Modus Ponens):**\n  * Biểu thức $((p \\to q) \\wedge p) \\to q$ là quy tắc suy diễn cơ bản.\n  * Kiểm tra tính đúng đắn: Giả sử vế trái đúng $\\implies p \\to q$ đúng và $p$ đúng. Vì $p$ đúng nên để $p \\to q$ đúng thì $q$ bắt buộc phải đúng. Do đó mệnh đề luôn nhận chân trị 1 trong mọi trường hợp.\n* Các phương án khác đều có thể nhận giá trị sai với một bộ chân trị cụ thể của $p, q$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 8,
    "originalId": 8,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho các mệnh đề $p$ nhận chân trị Sai (0), $q$ nhận Sai (0), $r$ nhận Đúng (1). Chân trị của mệnh đề phức hợp $(p \\leftrightarrow q) \\wedge r$ là:",
    "options": [
      {
        "key": "A",
        "text": "Luôn Đúng với mọi trường hợp"
      },
      {
        "key": "B",
        "text": "Sai (0)"
      },
      {
        "key": "C",
        "text": "Không xác định"
      },
      {
        "key": "D",
        "text": "Đúng (1)"
      }
    ],
    "correct": "D",
    "explanation": "* Thay chân trị: mệnh đề $p =  0$ (Sai), mệnh đề $q =  0$ (Sai), mệnh đề $r =  1$ (Đúng) vào công thức $(p \\leftrightarrow q) \\wedge r$, ta được chân trị là **Đúng (1)**.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 9,
    "originalId": 9,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Bảng chân trị của một dạng mệnh đề chứa đúng 6 biến mệnh đề độc lập có tổng cộng bao nhiêu dòng (hàng) giá trị chân lý?",
    "options": [
      {
        "key": "A",
        "text": "$64$ dòng"
      },
      {
        "key": "B",
        "text": "$68$ dòng"
      },
      {
        "key": "C",
        "text": "$36$ dòng"
      },
      {
        "key": "D",
        "text": "$12$ dòng"
      }
    ],
    "correct": "A",
    "explanation": "* Mỗi biến mệnh đề độc lập có 2 trạng thái (Đúng hoặc Sai). Với 6 biến, số dòng của bảng chân trị là $2^{6} = 64$ dòng.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 10,
    "originalId": 10,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong logic mệnh đề, dạng mệnh đề nào dưới đây là một **hằng đúng** (tautology)?",
    "options": [
      {
        "key": "A",
        "text": "$p \\to \\bar{p}$"
      },
      {
        "key": "B",
        "text": "$p \\vee \\bar{p}$"
      },
      {
        "key": "C",
        "text": "$p \\wedge \\bar{p}$"
      },
      {
        "key": "D",
        "text": "$p \\leftrightarrow \\bar{p}$"
      }
    ],
    "correct": "B",
    "explanation": "* Luật triệt tam (p hoặc không p) luôn đúng. Biểu thức $p \\vee \\bar{p}$ luôn nhận giá trị Đúng với mọi giá trị của các biến.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 11,
    "originalId": 11,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho các mệnh đề $p$ nhận chân trị Đúng (1), $q$ nhận Sai (0), $r$ nhận Đúng (1). Chân trị của mệnh đề phức hợp $p \\to (q \\vee r)$ là:",
    "options": [
      {
        "key": "A",
        "text": "Đúng (1)"
      },
      {
        "key": "B",
        "text": "Sai (0)"
      },
      {
        "key": "C",
        "text": "Không xác định"
      },
      {
        "key": "D",
        "text": "Luôn Đúng với mọi trường hợp"
      }
    ],
    "correct": "A",
    "explanation": "* Thay chân trị: mệnh đề $p =  1$ (Đúng), mệnh đề $q =  0$ (Sai), mệnh đề $r =  1$ (Đúng) vào công thức $p \\to (q \\vee r)$, ta được chân trị là **Đúng (1)**.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 12,
    "originalId": 12,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Bảng chân trị của một dạng mệnh đề chứa đúng 8 biến mệnh đề độc lập có tổng cộng bao nhiêu dòng (hàng) giá trị chân lý?",
    "options": [
      {
        "key": "A",
        "text": "$64$ dòng"
      },
      {
        "key": "B",
        "text": "$16$ dòng"
      },
      {
        "key": "C",
        "text": "$260$ dòng"
      },
      {
        "key": "D",
        "text": "$256$ dòng"
      }
    ],
    "correct": "D",
    "explanation": "* Mỗi biến mệnh đề độc lập có 2 trạng thái (Đúng hoặc Sai). Với 8 biến, số dòng của bảng chân trị là $2^{8} = 256$ dòng.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 13,
    "originalId": 13,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho các mệnh đề $p$ nhận chân trị Sai (0), $q$ nhận Đúng (1), $r$ nhận Sai (0). Chân trị của mệnh đề phức hợp $(p \\wedge q) \\to r$ là:",
    "options": [
      {
        "key": "A",
        "text": "Sai (0)"
      },
      {
        "key": "B",
        "text": "Đúng (1)"
      },
      {
        "key": "C",
        "text": "Luôn Đúng với mọi trường hợp"
      },
      {
        "key": "D",
        "text": "Không xác định"
      }
    ],
    "correct": "B",
    "explanation": "* Thay chân trị: mệnh đề $p =  0$ (Sai), mệnh đề $q =  1$ (Đúng), mệnh đề $r =  0$ (Sai) vào công thức $(p \\wedge q) \\to r$, ta được chân trị là **Đúng (1)**.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 14,
    "originalId": 14,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Bảng chân trị của một dạng mệnh đề chứa đúng 4 biến mệnh đề độc lập có tổng cộng bao nhiêu dòng (hàng) giá trị chân lý?",
    "options": [
      {
        "key": "A",
        "text": "$20$ dòng"
      },
      {
        "key": "B",
        "text": "$8$ dòng"
      },
      {
        "key": "C",
        "text": "$17$ dòng"
      },
      {
        "key": "D",
        "text": "$16$ dòng"
      }
    ],
    "correct": "D",
    "explanation": "* Mỗi biến mệnh đề độc lập có 2 trạng thái (Đúng hoặc Sai). Với 4 biến, số dòng của bảng chân trị là $2^{4} = 16$ dòng.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 15,
    "originalId": 15,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho các mệnh đề $p$ nhận chân trị Sai (0), $q$ nhận Đúng (1), $r$ nhận Đúng (1). Chân trị của mệnh đề phức hợp $(p \\wedge q) \\to r$ là:",
    "options": [
      {
        "key": "A",
        "text": "Không xác định"
      },
      {
        "key": "B",
        "text": "Luôn Đúng với mọi trường hợp"
      },
      {
        "key": "C",
        "text": "Sai (0)"
      },
      {
        "key": "D",
        "text": "Đúng (1)"
      }
    ],
    "correct": "D",
    "explanation": "* Thay chân trị: mệnh đề $p =  0$ (Sai), mệnh đề $q =  1$ (Đúng), mệnh đề $r =  1$ (Đúng) vào công thức $(p \\wedge q) \\to r$, ta được chân trị là **Đúng (1)**.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 16,
    "originalId": 16,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Bảng chân trị của một dạng mệnh đề chứa đúng 7 biến mệnh đề độc lập có tổng cộng bao nhiêu dòng (hàng) giá trị chân lý?",
    "options": [
      {
        "key": "A",
        "text": "$132$ dòng"
      },
      {
        "key": "B",
        "text": "$14$ dòng"
      },
      {
        "key": "C",
        "text": "$128$ dòng"
      },
      {
        "key": "D",
        "text": "$49$ dòng"
      }
    ],
    "correct": "C",
    "explanation": "* Mỗi biến mệnh đề độc lập có 2 trạng thái (Đúng hoặc Sai). Với 7 biến, số dòng của bảng chân trị là $2^{7} = 128$ dòng.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 17,
    "originalId": 17,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho các mệnh đề $p$ nhận chân trị Sai (0), $q$ nhận Đúng (1), $r$ nhận Đúng (1). Chân trị của mệnh đề phức hợp $p \\to (q \\vee r)$ là:",
    "options": [
      {
        "key": "A",
        "text": "Không xác định"
      },
      {
        "key": "B",
        "text": "Sai (0)"
      },
      {
        "key": "C",
        "text": "Luôn Đúng với mọi trường hợp"
      },
      {
        "key": "D",
        "text": "Đúng (1)"
      }
    ],
    "correct": "D",
    "explanation": "* Thay chân trị: mệnh đề $p =  0$ (Sai), mệnh đề $q =  1$ (Đúng), mệnh đề $r =  1$ (Đúng) vào công thức $p \\to (q \\vee r)$, ta được chân trị là **Đúng (1)**.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 18,
    "originalId": 18,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Bảng chân trị của một dạng mệnh đề chứa đúng 5 biến mệnh đề độc lập có tổng cộng bao nhiêu dòng (hàng) giá trị chân lý?",
    "options": [
      {
        "key": "A",
        "text": "$10$ dòng"
      },
      {
        "key": "B",
        "text": "$32$ dòng"
      },
      {
        "key": "C",
        "text": "$36$ dòng"
      },
      {
        "key": "D",
        "text": "$25$ dòng"
      }
    ],
    "correct": "B",
    "explanation": "* Mỗi biến mệnh đề độc lập có 2 trạng thái (Đúng hoặc Sai). Với 5 biến, số dòng của bảng chân trị là $2^{5} = 32$ dòng.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 19,
    "originalId": 19,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho các mệnh đề $p$ nhận chân trị Đúng (1), $q$ nhận Đúng (1), $r$ nhận Sai (0). Chân trị của mệnh đề phức hợp $(p \\leftrightarrow q) \\wedge r$ là:",
    "options": [
      {
        "key": "A",
        "text": "Không xác định"
      },
      {
        "key": "B",
        "text": "Đúng (1)"
      },
      {
        "key": "C",
        "text": "Luôn Đúng với mọi trường hợp"
      },
      {
        "key": "D",
        "text": "Sai (0)"
      }
    ],
    "correct": "D",
    "explanation": "* Thay chân trị: mệnh đề $p =  1$ (Đúng), mệnh đề $q =  1$ (Đúng), mệnh đề $r =  0$ (Sai) vào công thức $(p \\leftrightarrow q) \\wedge r$, ta được chân trị là **Sai (0)**.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 20,
    "originalId": 20,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho các mệnh đề $p$ nhận chân trị Đúng (1), $q$ nhận Đúng (1), $r$ nhận Sai (0). Chân trị của mệnh đề phức hợp $(p \\vee q) \\wedge \\bar{r}$ là:",
    "options": [
      {
        "key": "A",
        "text": "Không xác định"
      },
      {
        "key": "B",
        "text": "Sai (0)"
      },
      {
        "key": "C",
        "text": "Đúng (1)"
      },
      {
        "key": "D",
        "text": "Luôn Đúng với mọi trường hợp"
      }
    ],
    "correct": "C",
    "explanation": "* Thay chân trị: mệnh đề $p =  1$ (Đúng), mệnh đề $q =  1$ (Đúng), mệnh đề $r =  0$ (Sai) vào công thức $(p \\vee q) \\wedge \\bar{r}$, ta được chân trị là **Đúng (1)**.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 21,
    "originalId": 21,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho các mệnh đề $p$ nhận chân trị Sai (0), $q$ nhận Sai (0), $r$ nhận Sai (0). Chân trị của mệnh đề phức hợp $(p \\vee q) \\wedge \\bar{r}$ là:",
    "options": [
      {
        "key": "A",
        "text": "Không xác định"
      },
      {
        "key": "B",
        "text": "Sai (0)"
      },
      {
        "key": "C",
        "text": "Đúng (1)"
      },
      {
        "key": "D",
        "text": "Luôn Đúng với mọi trường hợp"
      }
    ],
    "correct": "B",
    "explanation": "* Thay chân trị: mệnh đề $p =  0$ (Sai), mệnh đề $q =  0$ (Sai), mệnh đề $r =  0$ (Sai) vào công thức $(p \\vee q) \\wedge \\bar{r}$, ta được chân trị là **Sai (0)**.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 22,
    "originalId": 22,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho các mệnh đề $p$ nhận chân trị Sai (0), $q$ nhận Sai (0), $r$ nhận Đúng (1). Chân trị của mệnh đề phức hợp $(p \\vee q) \\wedge \\bar{r}$ là:",
    "options": [
      {
        "key": "A",
        "text": "Đúng (1)"
      },
      {
        "key": "B",
        "text": "Luôn Đúng với mọi trường hợp"
      },
      {
        "key": "C",
        "text": "Không xác định"
      },
      {
        "key": "D",
        "text": "Sai (0)"
      }
    ],
    "correct": "D",
    "explanation": "* Thay chân trị: mệnh đề $p =  0$ (Sai), mệnh đề $q =  0$ (Sai), mệnh đề $r =  1$ (Đúng) vào công thức $(p \\vee q) \\wedge \\bar{r}$, ta được chân trị là **Sai (0)**.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 23,
    "originalId": 23,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho các mệnh đề $p$ nhận chân trị Đúng (1), $q$ nhận Sai (0), $r$ nhận Đúng (1). Chân trị của mệnh đề phức hợp $(p \\vee q) \\wedge \\bar{r}$ là:",
    "options": [
      {
        "key": "A",
        "text": "Luôn Đúng với mọi trường hợp"
      },
      {
        "key": "B",
        "text": "Không xác định"
      },
      {
        "key": "C",
        "text": "Sai (0)"
      },
      {
        "key": "D",
        "text": "Đúng (1)"
      }
    ],
    "correct": "C",
    "explanation": "* Thay chân trị: mệnh đề $p =  1$ (Đúng), mệnh đề $q =  0$ (Sai), mệnh đề $r =  1$ (Đúng) vào công thức $(p \\vee q) \\wedge \\bar{r}$, ta được chân trị là **Sai (0)**.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 24,
    "originalId": 24,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho các mệnh đề $p$ nhận chân trị Đúng (1), $q$ nhận Đúng (1), $r$ nhận Đúng (1). Chân trị của mệnh đề phức hợp $(p \\leftrightarrow q) \\wedge r$ là:",
    "options": [
      {
        "key": "A",
        "text": "Sai (0)"
      },
      {
        "key": "B",
        "text": "Không xác định"
      },
      {
        "key": "C",
        "text": "Đúng (1)"
      },
      {
        "key": "D",
        "text": "Luôn Đúng với mọi trường hợp"
      }
    ],
    "correct": "C",
    "explanation": "* Thay chân trị: mệnh đề $p =  1$ (Đúng), mệnh đề $q =  1$ (Đúng), mệnh đề $r =  1$ (Đúng) vào công thức $(p \\leftrightarrow q) \\wedge r$, ta được chân trị là **Đúng (1)**.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 25,
    "originalId": 25,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho các mệnh đề $p$ nhận chân trị Sai (0), $q$ nhận Sai (0), $r$ nhận Sai (0). Chân trị của mệnh đề phức hợp $(p \\wedge q) \\to r$ là:",
    "options": [
      {
        "key": "A",
        "text": "Đúng (1)"
      },
      {
        "key": "B",
        "text": "Sai (0)"
      },
      {
        "key": "C",
        "text": "Không xác định"
      },
      {
        "key": "D",
        "text": "Luôn Đúng với mọi trường hợp"
      }
    ],
    "correct": "A",
    "explanation": "* Thay chân trị: mệnh đề $p =  0$ (Sai), mệnh đề $q =  0$ (Sai), mệnh đề $r =  0$ (Sai) vào công thức $(p \\wedge q) \\to r$, ta được chân trị là **Đúng (1)**.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 26,
    "originalId": 26,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 1,
    "typeId": "1.1",
    "typeName": "Chân trị & Các phép toán Mệnh đề",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho các mệnh đề $p$ nhận chân trị Sai (0), $q$ nhận Sai (0), $r$ nhận Sai (0). Chân trị của mệnh đề phức hợp $(p \\leftrightarrow q) \\wedge r$ là:",
    "options": [
      {
        "key": "A",
        "text": "Luôn Đúng với mọi trường hợp"
      },
      {
        "key": "B",
        "text": "Sai (0)"
      },
      {
        "key": "C",
        "text": "Đúng (1)"
      },
      {
        "key": "D",
        "text": "Không xác định"
      }
    ],
    "correct": "B",
    "explanation": "* Thay chân trị: mệnh đề $p =  0$ (Sai), mệnh đề $q =  0$ (Sai), mệnh đề $r =  0$ (Sai) vào công thức $(p \\leftrightarrow q) \\wedge r$, ta được chân trị là **Sai (0)**.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 27,
    "originalId": 1,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Đối ngẫu của công thức Boole $(x' \\vee 0) \\wedge (y' \\wedge z)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(x' \\wedge 0) \\vee (y' \\vee z)$"
      },
      {
        "key": "B",
        "text": "$(x \\wedge 1) \\vee (y \\vee z')$"
      },
      {
        "key": "C",
        "text": "$(x' \\vee 1) \\wedge (y' \\wedge z)$"
      },
      {
        "key": "D",
        "text": "$(x' \\wedge 1) \\vee (y' \\vee z)$"
      }
    ],
    "correct": "D",
    "explanation": "* **Quy tắc tìm công thức đối ngẫu trong đại số Boole:**\n  * Giữ nguyên các biến và dấu phủ định của biến ($x' \\to x'$, $y' \\to y'$, $z \\to z$).\n  * Đổi phép hội $\\wedge$ thành phép tuyển $\\vee$ và ngược lại.\n  * Đổi hằng số $0 \\to 1$ và $1 \\to 0$.\n* Biến đổi:\n  $$(x' \\vee 0) \\wedge (y' \\wedge z) \\xrightarrow{\\text{đối ngẫu}} (x' \\wedge 1) \\vee (y' \\vee z)$$\n* **Chọn đáp án: D.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 28,
    "originalId": 24,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Rút gọn công thức đại số Boole sau:\n$$A = \\{[(x' \\wedge z) \\wedge (x \\vee z')] \\vee y\\} \\wedge (x \\vee y \\vee z) \\wedge \\{[(y' \\vee z) \\wedge (y \\vee z')] \\vee x\\}$$",
    "options": [
      {
        "key": "A",
        "text": "$A = (y \\vee z) \\wedge (x \\vee y) \\wedge (x \\vee z)$"
      },
      {
        "key": "B",
        "text": "$A = (y \\wedge z) \\vee (x \\wedge y) \\vee (x \\wedge z)$"
      },
      {
        "key": "C",
        "text": "$A = (x \\wedge z) \\wedge (x \\vee y)$"
      },
      {
        "key": "D",
        "text": "$A = (x \\vee z) \\vee (y \\vee z)$"
      }
    ],
    "correct": "A",
    "explanation": "* Rút gọn ngoặc thứ nhất:\n  $$(x' \\wedge z) \\wedge (x \\vee z') = (x' \\wedge z \\wedge x) \\vee (x' \\wedge z \\wedge z') = 0 \\vee 0 = 0$$\n  Do đó ngoặc thứ nhất là $0 \\vee y = y$.\n* Biểu thức trở thành:\n  $$A = y \\wedge (x \\vee y \\vee z) \\wedge \\{[(y' \\vee z) \\wedge (y \\vee z')] \\vee x\\}$$\n* Vì $y \\wedge (x \\vee y \\vee z) = y$, ta có:\n  $$A = y \\wedge \\{[(y' \\vee z) \\wedge (y \\vee z')] \\vee x\\} = \\{y \\wedge [(y' \\vee z) \\wedge (y \\vee z')]\\} \\vee (y \\wedge x)$$\n* Tiếp tục rút gọn:\n  $$y \\wedge (y' \\vee z) = (y \\wedge y') \\vee (y \\wedge z) = y \\wedge z$$\n  $$(y \\wedge z) \\wedge (y \\vee z') = (y \\wedge z \\wedge y) \\vee (y \\wedge z \\wedge z') = (y \\wedge z) \\vee 0 = y \\wedge z$$\n* Suy ra $A = (y \\wedge z) \\vee (y \\wedge x) = y \\wedge (x \\vee z) = (y \\vee z) \\wedge (x \\vee y) \\wedge (x \\vee z)$.\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 29,
    "originalId": 29,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Rút gọn biểu thức logic Boole $F = (x \\wedge y) \\vee (x \\wedge \\bar{y})$ ta được:",
    "options": [
      {
        "key": "A",
        "text": "$x \\vee y$"
      },
      {
        "key": "B",
        "text": "$1$"
      },
      {
        "key": "C",
        "text": "$x$"
      },
      {
        "key": "D",
        "text": "$y$"
      }
    ],
    "correct": "C",
    "explanation": "Áp dụng luật phân phối của đại số Boole:\n$$F = x \\wedge (y \\vee \\bar{y}) = x \\wedge 1 = x$$\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 30,
    "originalId": 30,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Quan hệ hai ngôi $R$ trên tập $A$ được gọi là **quan hệ tương đương** nếu nó thỏa mãn các tính chất nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Phản xạ, Đối xứng và Phản xứng"
      },
      {
        "key": "B",
        "text": "Đối xứng, Phản xứng và Bắc cầu"
      },
      {
        "key": "C",
        "text": "Phản xạ, Phản xứng và Bắc cầu"
      },
      {
        "key": "D",
        "text": "Phản xạ, Đối xứng và Bắc cầu"
      }
    ],
    "correct": "D",
    "explanation": "Theo định nghĩa, quan hệ tương đương phải thỏa mãn 3 tính chất: Phản xạ (Reflexive), Đối xứng (Symmetric), và Bắc cầu (Transitive). (Nếu thay Đối xứng bằng Phản xứng thì đó là quan hệ thứ tự).\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 31,
    "originalId": 31,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho tập $A = \\{1, 2, 3\\}$. Quan hệ $R = \\{(1, 1), (2, 2), (3, 3), (1, 2), (2, 1)\\}$ trên $A$ là:",
    "options": [
      {
        "key": "A",
        "text": "Quan hệ tương đương"
      },
      {
        "key": "B",
        "text": "Quan hệ thứ tự một phần"
      },
      {
        "key": "C",
        "text": "Chỉ có tính đối xứng nhưng không có tính phản xạ"
      },
      {
        "key": "D",
        "text": "Không có tính bắc cầu"
      }
    ],
    "correct": "A",
    "explanation": "- Tính phản xạ: chứa $(1,1), (2,2), (3,3)$ nên có tính phản xạ.\n- Tính đối xứng: $(1,2) \\in R \\Rightarrow (2,1) \\in R$ nên có tính đối xứng.\n- Tính bắc cầu: $(1,2)$ và $(2,1) \\Rightarrow (1,1) \\in R$; $(2,1)$ và $(1,2) \\Rightarrow (2,2) \\in R$. Do đó $R$ là quan hệ tương đương.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 32,
    "originalId": 32,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Dạng chuẩn tắc tuyển (Disjunctive Normal Form - DNF) của hàm Boole $f(x, y) = x \\oplus y$ (phép XOR) là:",
    "options": [
      {
        "key": "A",
        "text": "$(x \\wedge y) \\vee (\\bar{x} \\wedge \\bar{y})$"
      },
      {
        "key": "B",
        "text": "$x \\vee y$"
      },
      {
        "key": "C",
        "text": "$(x \\vee \\bar{y}) \\wedge (\\bar{x} \\vee y)$"
      },
      {
        "key": "D",
        "text": "$(x \\wedge \\bar{y}) \\vee (\\bar{x} \\wedge y)$"
      }
    ],
    "correct": "D",
    "explanation": "Bảng chân lý của $x \\oplus y$ bằng $1$ khi $(x=1, y=0)$ hoặc $(x=0, y=1)$. Tương ứng với hai hội sơ cấp (minterm) là $(x \\wedge \\bar{y})$ và $(\\bar{x} \\wedge y)$. Tuyển của chúng là $(x \\wedge \\bar{y}) \\vee (\\bar{x} \\wedge y)$.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 33,
    "originalId": 33,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Công thức logic nào sau đây tương đương với $p \\to q$?",
    "options": [
      {
        "key": "A",
        "text": "$\\bar{p} \\wedge q$"
      },
      {
        "key": "B",
        "text": "$\\bar{q} \\to p$"
      },
      {
        "key": "C",
        "text": "$\\bar{p} \\vee q$"
      },
      {
        "key": "D",
        "text": "$p \\vee \\bar{q}$"
      }
    ],
    "correct": "C",
    "explanation": "Theo luật kéo theo cơ bản trong logic mệnh đề: $p \\to q \\equiv \\bar{p} \\vee q$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 34,
    "originalId": 34,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Phủ định của mệnh đề kéo theo $p \\to q$ tương đương với:",
    "options": [
      {
        "key": "A",
        "text": "$\\bar{p} \\vee q$"
      },
      {
        "key": "B",
        "text": "$\\bar{p} \\wedge q$"
      },
      {
        "key": "C",
        "text": "$p \\to \\bar{q}$"
      },
      {
        "key": "D",
        "text": "$p \\wedge \\bar{q}$"
      }
    ],
    "correct": "D",
    "explanation": "Ta có $\\overline{p \\to q} \\equiv \\overline{\\bar{p} \\vee q} \\equiv \\bar{\\bar{p}} \\wedge \\bar{q} \\equiv p \\wedge \\bar{q}$ theo luật De Morgan.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 35,
    "originalId": 35,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong đại số Boole, phần tử bù của $x \\wedge (y \\vee z')$ là:",
    "options": [
      {
        "key": "A",
        "text": "$x' \\vee (y \\wedge z')$"
      },
      {
        "key": "B",
        "text": "$x' \\vee (y' \\wedge z)$"
      },
      {
        "key": "C",
        "text": "$x \\vee (y' \\wedge z)$"
      },
      {
        "key": "D",
        "text": "$x' \\wedge (y' \\vee z)$"
      }
    ],
    "correct": "B",
    "explanation": "Áp dụng định lý De Morgan: $\\overline{x \\wedge (y \\vee z')} = \\bar{x} \\vee \\overline{(y \\vee z')} = x' \\vee (y' \\wedge (z')') = x' \\vee (y' \\wedge z)$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 36,
    "originalId": 36,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm công thức đối ngẫu trong đại số Boole của công thức $f = (x \\wedge y') \\vee (z \\wedge 1)$.",
    "options": [
      {
        "key": "A",
        "text": "$(x \\vee y') \\vee (z \\vee 0)$"
      },
      {
        "key": "B",
        "text": "$(x \\vee y') \\wedge (z \\vee 0)$"
      },
      {
        "key": "C",
        "text": "$(x \\wedge y') \\vee (z \\wedge 0)$"
      },
      {
        "key": "D",
        "text": "$(x' \\vee y) \\wedge (z' \\vee 0)$"
      }
    ],
    "correct": "B",
    "explanation": "* **Kỹ thuật tìm công thức đối ngẫu trong Đại số Boole:**\n  * Giữ nguyên các biến và dấu phủ định của biến ($x \\to x, y' \\to y', z \\to z$).\n  * Đổi phép hội $\\wedge$ thành phép tuyển $\\vee$ và ngược lại ($\\vee \\to \\wedge$).\n  * Đổi hằng số $1 \\to 0$ và $0 \\to 1$.\n* Áp dụng vào biểu thức $(x \\wedge y') \\vee (z \\wedge 1)$:\n  * $(x \\wedge y') \\to (x \\vee y')$\n  * Dấu tuyển ở giữa $\\vee \\to \\wedge$\n  * $(z \\wedge 1) \\to (z \\vee 0)$\n* Kết quả thu được: $(x \\vee y') \\wedge (z \\vee 0)$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 37,
    "originalId": 37,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Đối ngẫu của công thức Boole $(x \\vee y \\vee 0) \\wedge (x' \\vee z')$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(x' \\wedge y' \\wedge 1) \\vee (x \\wedge z)$"
      },
      {
        "key": "B",
        "text": "$(x \\vee y \\vee 1) \\wedge (x' \\vee z')$"
      },
      {
        "key": "C",
        "text": "$(x \\wedge y \\wedge 0) \\vee (x' \\wedge z')$"
      },
      {
        "key": "D",
        "text": "$(x \\wedge y \\wedge 1) \\vee (x' \\wedge z')$"
      }
    ],
    "correct": "D",
    "explanation": "* **Quy tắc đối ngẫu:**\n  * Đổi $\\vee \\to \\wedge$, $\\wedge \\to \\vee$.\n  * Đổi $0 \\to 1$.\n  * Giữ nguyên các biến và dấu phủ định $x, y, x', z'$.\n* Biến đổi:\n  $$(x \\vee y \\vee 0) \\wedge (x' \\vee z') \\xrightarrow{\\text{đối ngẫu}} (x \\wedge y \\wedge 1) \\vee (x' \\wedge z')$$\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 38,
    "originalId": 38,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho mệnh đề kéo theo $p \\to q$. Mệnh đề **phản đảo** của mệnh đề này là:",
    "options": [
      {
        "key": "A",
        "text": "$q \\to p$"
      },
      {
        "key": "B",
        "text": "$\\bar{p} \\vee q$"
      },
      {
        "key": "C",
        "text": "$\\bar{p} \\to \\bar{q}$"
      },
      {
        "key": "D",
        "text": "$\\bar{q} \\to \\bar{p}$"
      }
    ],
    "correct": "D",
    "explanation": "* **Lý thuyết các dạng mệnh đề liên quan đến $p \\to q$:**\n  * Mệnh đề đảo: $q \\to p$.\n  * Mệnh đề nghịch đảo: $\\bar{p} \\to \\bar{q}$.\n  * Mệnh đề phản đảo: $\\bar{q} \\to \\bar{p}$.\n* **Tính chất quan trọng:** Mệnh đề phản đảo luôn tương đương logic với mệnh đề ban đầu: $(\\bar{q} \\to \\bar{p}) \\equiv (p \\to q)$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 39,
    "originalId": 39,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Phủ định của mệnh đề kéo theo $p \\to q$ tương đương logic với công thức nào dưới đây?",
    "options": [
      {
        "key": "A",
        "text": "$\\bar{p} \\wedge q$"
      },
      {
        "key": "B",
        "text": "$\\bar{p} \\to \\bar{q}$"
      },
      {
        "key": "C",
        "text": "$\\bar{p} \\vee \\bar{q}$"
      },
      {
        "key": "D",
        "text": "$p \\wedge \\bar{q}$"
      }
    ],
    "correct": "D",
    "explanation": "* **Kỹ thuật biến đổi phủ định mệnh đề kéo theo:**\n  * Ta biết tương đương logic cơ bản: $p \\to q \\equiv \\bar{p} \\vee q$.\n  * Lấy phủ định hai vế và áp dụng luật De Morgan:\n    $$\\overline{p \\to q} \\equiv \\overline{\\bar{p} \\vee q} \\equiv \\bar{\\bar{p}} \\wedge \\bar{q} \\equiv p \\wedge \\bar{q}$$\n* **Ý nghĩa:** \"$p$ kéo theo $q$\" chỉ sai khi giả thiết $p$ đúng nhưng kết luận $q$ lại sai ($p \\wedge \\bar{q}$).\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 40,
    "originalId": 40,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Rút gọn công thức logic $(p \\wedge q) \\vee (p \\wedge \\bar{q})$, ta thu được:",
    "options": [
      {
        "key": "A",
        "text": "$q$"
      },
      {
        "key": "B",
        "text": "$1$ (hằng đúng)"
      },
      {
        "key": "C",
        "text": "$p$"
      },
      {
        "key": "D",
        "text": "$p \\vee q$"
      }
    ],
    "correct": "C",
    "explanation": "* **Áp dụng luật phân phối của phép hội đối với phép tuyển:**\n  $$(p \\wedge q) \\vee (p \\wedge \\bar{q}) \\equiv p \\wedge (q \\vee \\bar{q})$$\n* Vì $q \\vee \\bar{q} \\equiv 1$ (luật bài trung), ta có:\n  $$p \\wedge 1 \\equiv p$$\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 41,
    "originalId": 41,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Điều kiện cần và đủ để ánh xạ $f: X \\to Y$ có ánh xạ ngược $f^{-1}: Y \\to X$ là:",
    "options": [
      {
        "key": "A",
        "text": "$f$ là đơn ánh"
      },
      {
        "key": "B",
        "text": "$f$ là song ánh"
      },
      {
        "key": "C",
        "text": "$f$ là toàn ánh"
      },
      {
        "key": "D",
        "text": "$X = Y$"
      }
    ],
    "correct": "B",
    "explanation": "* **Định lý về ánh xạ ngược:**\n  * Ánh xạ $f: X \\to Y$ khả nghịch (có ánh xạ ngược $f^{-1}$) khi và chỉ khi với mỗi $y \\in Y$, tồn tại **duy nhất** $x \\in X$ thỏa mãn $f(x) = y$.\n  * Điều kiện tồn tại nghiệm với mọi $y$ tương đương với $f$ là **toàn ánh**.\n  * Điều kiện tính duy nhất của nghiệm tương đương với $f$ là **đơn ánh**.\n  * Do đó $f$ phải là **song ánh**.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 42,
    "originalId": 42,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho mệnh đề logic $(p \\wedge q) \\to r$. Mệnh đề nào sau đây tương đương logic với nó?",
    "options": [
      {
        "key": "A",
        "text": "$(p \\to r) \\vee (q \\to r)$"
      },
      {
        "key": "B",
        "text": "$p \\to (q \\to r)$"
      },
      {
        "key": "C",
        "text": "$r \\to (p \\wedge q)$"
      },
      {
        "key": "D",
        "text": "$(p \\to r) \\wedge (q \\to r)$"
      }
    ],
    "correct": "B",
    "explanation": "* **Quy tắc xuất khẩu (Exportation law):**\n  * Biến đổi:\n    $$(p \\wedge q) \\to r \\equiv \\overline{p \\wedge q} \\vee r \\equiv (\\bar{p} \\vee \\bar{q}) \\vee r \\equiv \\bar{p} \\vee (\\bar{q} \\vee r) \\equiv p \\to (q \\to r)$$\n* Đây là một tương đương kinh điển rất hay gặp trong đề thi.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 43,
    "originalId": 43,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong đại số Boole, công thức đối ngẫu của biểu thức $f = (y' \\vee 0) \\wedge (x' \\vee t)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(y' \\vee 1) \\wedge (x' \\vee t)$"
      },
      {
        "key": "B",
        "text": "$(y' \\wedge 1) \\vee (x' \\wedge t)$"
      },
      {
        "key": "C",
        "text": "$(y \\wedge 0) \\vee (x \\wedge t')$"
      },
      {
        "key": "D",
        "text": "$(y \\vee 1) \\wedge (x \\vee t)$"
      }
    ],
    "correct": "B",
    "explanation": "* Quy tắc tìm công thức đối ngẫu: thay $\\vee \\leftrightarrow \\wedge$, thay hằng số $0 \\leftrightarrow 1$, giữ nguyên biến và dấu phủ định. Vậy $(y' \\vee 0) \\wedge (x' \\vee t) \\to (y' \\wedge 1) \\vee (x' \\wedge t)$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 44,
    "originalId": 44,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Rút gọn biểu thức Boole $f = (y \\wedge z) \\vee (y \\wedge z')$ ta thu được kết quả là:",
    "options": [
      {
        "key": "A",
        "text": "$y \\wedge z$"
      },
      {
        "key": "B",
        "text": "$z$"
      },
      {
        "key": "C",
        "text": "$y$"
      },
      {
        "key": "D",
        "text": "$1$"
      }
    ],
    "correct": "C",
    "explanation": "* Áp dụng tính chất phân phối: $(y \\wedge z) \\vee (y \\wedge z') = y \\wedge (z \\vee z') = y \\wedge 1 = y$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 45,
    "originalId": 45,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong đại số Boole, phần tử bù của biểu thức $g = x \\vee (u \\wedge t')$ theo luật De Morgan là:",
    "options": [
      {
        "key": "A",
        "text": "$x' \\wedge (u' \\vee t)$"
      },
      {
        "key": "B",
        "text": "$x \\wedge (u' \\vee t)$"
      },
      {
        "key": "C",
        "text": "$x' \\wedge (u \\vee t')$"
      },
      {
        "key": "D",
        "text": "$x' \\vee (u' \\wedge t)$"
      }
    ],
    "correct": "A",
    "explanation": "* Theo luật De Morgan: $(A \\vee B)' = A' \\wedge B'$. Ta có $( x \\vee (u \\wedge t') )' = x' \\wedge (u \\wedge t')' = x' \\wedge (u' \\vee t)$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 46,
    "originalId": 46,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong đại số Boole, công thức đối ngẫu của biểu thức $f = (z' \\vee 0) \\wedge (u' \\vee x)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(z' \\vee 1) \\wedge (u' \\vee x)$"
      },
      {
        "key": "B",
        "text": "$(z \\wedge 0) \\vee (u \\wedge x')$"
      },
      {
        "key": "C",
        "text": "$(z \\vee 1) \\wedge (u \\vee x)$"
      },
      {
        "key": "D",
        "text": "$(z' \\wedge 1) \\vee (u' \\wedge x)$"
      }
    ],
    "correct": "D",
    "explanation": "* Quy tắc tìm công thức đối ngẫu: thay $\\vee \\leftrightarrow \\wedge$, thay hằng số $0 \\leftrightarrow 1$, giữ nguyên biến và dấu phủ định. Vậy $(z' \\vee 0) \\wedge (u' \\vee x) \\to (z' \\wedge 1) \\vee (u' \\wedge x)$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 47,
    "originalId": 47,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Rút gọn biểu thức Boole $f = (t \\wedge u) \\vee (t \\wedge u')$ ta thu được kết quả là:",
    "options": [
      {
        "key": "A",
        "text": "$u$"
      },
      {
        "key": "B",
        "text": "$t \\wedge u$"
      },
      {
        "key": "C",
        "text": "$1$"
      },
      {
        "key": "D",
        "text": "$t$"
      }
    ],
    "correct": "D",
    "explanation": "* Áp dụng tính chất phân phối: $(t \\wedge u) \\vee (t \\wedge u') = t \\wedge (u \\vee u') = t \\wedge 1 = t$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 48,
    "originalId": 48,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong đại số Boole, phần tử bù của biểu thức $g = t \\vee (x \\wedge z')$ theo luật De Morgan là:",
    "options": [
      {
        "key": "A",
        "text": "$t \\wedge (x' \\vee z)$"
      },
      {
        "key": "B",
        "text": "$t' \\wedge (x \\vee z')$"
      },
      {
        "key": "C",
        "text": "$t' \\wedge (x' \\vee z)$"
      },
      {
        "key": "D",
        "text": "$t' \\vee (x' \\wedge z)$"
      }
    ],
    "correct": "C",
    "explanation": "* Theo luật De Morgan: $(A \\vee B)' = A' \\wedge B'$. Ta có $( t \\vee (x \\wedge z') )' = t' \\wedge (x \\wedge z')' = t' \\wedge (x' \\vee z)$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 49,
    "originalId": 49,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong đại số Boole, công thức đối ngẫu của biểu thức $f = (y' \\vee 0) \\wedge (u' \\vee z)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(y' \\wedge 1) \\vee (u' \\wedge z)$"
      },
      {
        "key": "B",
        "text": "$(y' \\vee 1) \\wedge (u' \\vee z)$"
      },
      {
        "key": "C",
        "text": "$(y \\vee 1) \\wedge (u \\vee z)$"
      },
      {
        "key": "D",
        "text": "$(y \\wedge 0) \\vee (u \\wedge z')$"
      }
    ],
    "correct": "A",
    "explanation": "* Quy tắc tìm công thức đối ngẫu: thay $\\vee \\leftrightarrow \\wedge$, thay hằng số $0 \\leftrightarrow 1$, giữ nguyên biến và dấu phủ định. Vậy $(y' \\vee 0) \\wedge (u' \\vee z) \\to (y' \\wedge 1) \\vee (u' \\wedge z)$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 50,
    "originalId": 50,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong đại số Boole, phần tử bù của biểu thức $g = t \\vee (y \\wedge x')$ theo luật De Morgan là:",
    "options": [
      {
        "key": "A",
        "text": "$t' \\wedge (y \\vee x')$"
      },
      {
        "key": "B",
        "text": "$t \\wedge (y' \\vee x)$"
      },
      {
        "key": "C",
        "text": "$t' \\wedge (y' \\vee x)$"
      },
      {
        "key": "D",
        "text": "$t' \\vee (y' \\wedge x)$"
      }
    ],
    "correct": "C",
    "explanation": "* Theo luật De Morgan: $(A \\vee B)' = A' \\wedge B'$. Ta có $( t \\vee (y \\wedge x') )' = t' \\wedge (y \\wedge x')' = t' \\wedge (y' \\vee x)$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 51,
    "originalId": 51,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 2,
    "typeId": "1.2",
    "typeName": "Tương đương Logic, Đại số Boole & Đối ngẫu",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong đại số Boole, công thức đối ngẫu của biểu thức $f = (x' \\vee 0) \\wedge (t' \\vee y)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(x \\wedge 0) \\vee (t \\wedge y')$"
      },
      {
        "key": "B",
        "text": "$(x' \\wedge 1) \\vee (t' \\wedge y)$"
      },
      {
        "key": "C",
        "text": "$(x \\vee 1) \\wedge (t \\vee y)$"
      },
      {
        "key": "D",
        "text": "$(x' \\vee 1) \\wedge (t' \\vee y)$"
      }
    ],
    "correct": "B",
    "explanation": "* Quy tắc tìm công thức đối ngẫu: thay $\\vee \\leftrightarrow \\wedge$, thay hằng số $0 \\leftrightarrow 1$, giữ nguyên biến và dấu phủ định. Vậy $(x' \\vee 0) \\wedge (t' \\vee y) \\to (x' \\wedge 1) \\vee (t' \\wedge y)$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 52,
    "originalId": 28,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho $A, B, C$ là các tập con của tập hợp $E$. Khẳng định nào dưới đây **không đúng**?",
    "options": [
      {
        "key": "A",
        "text": "$A \\cap (B \\setminus A) = \\emptyset$"
      },
      {
        "key": "B",
        "text": "$(A \\cap B \\cap C) \\subset (B \\cap C)$"
      },
      {
        "key": "C",
        "text": "$(A \\setminus C) \\cap (C \\setminus B) = \\emptyset$"
      },
      {
        "key": "D",
        "text": "Nếu $A \\cup C = B \\cup C$ thì $A = B$"
      }
    ],
    "correct": "D",
    "explanation": "* Phản ví dụ cho khẳng định D: Chọn $A = \\{1\\}, B = \\{2\\}, C = \\{1, 2\\}$.\n  * Khi đó $A \\cup C = \\{1, 2\\} = B \\cup C$, nhưng rõ ràng $A \\neq B$.\n  * Do đó khẳng định D là **không đúng**.\n* Các khẳng định A, B, C đều đúng theo định nghĩa giao, hiệu và tập con.\n* **Chọn đáp án: D.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 53,
    "originalId": 32,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Khẳng định nào dưới đây **không đúng**?",
    "options": [
      {
        "key": "A",
        "text": "$\\emptyset \\in \\{x\\}$"
      },
      {
        "key": "B",
        "text": "$\\emptyset \\in \\{\\emptyset, \\, \\{\\emptyset\\}\\}$"
      },
      {
        "key": "C",
        "text": "$\\{x\\} \\in \\{\\{x\\}\\}$"
      },
      {
        "key": "D",
        "text": "$x \\in \\{x\\}$"
      }
    ],
    "correct": "A",
    "explanation": "* Tập hợp $\\{x\\}$ chỉ có một phần tử duy nhất là $x$.\n* Với $x$ bất kỳ, tập rỗng $\\emptyset$ là tập con của $\\{x\\}$ (tức $\\emptyset \\subset \\{x\\}$), chứ $\\emptyset$ không phải là một phần tử thuộc $\\{x\\}$ (tức $\\emptyset \\notin \\{x\\}$).\n* Do đó khẳng định A là **không đúng**.\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 54,
    "originalId": 22,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Ánh xạ $f: \\mathbb{R} \\to \\mathbb{R}$ có công thức xác định $f(x) = 5x - 2|x|$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Là đơn ánh"
      },
      {
        "key": "B",
        "text": "Là song ánh"
      },
      {
        "key": "C",
        "text": "Là toàn ánh"
      },
      {
        "key": "D",
        "text": "Là song ánh nhưng không toàn ánh"
      }
    ],
    "correct": "B",
    "explanation": "* Viết lại hàm số dưới dạng từng khúc:\n  $$f(x) = \\begin{cases} 5x - 2x = 3x & \\text{khi } x \\ge 0 \\\\ 5x - 2(-x) = 7x & \\text{khi } x < 0 \\end{cases}$$\n* Khảo sát:\n  * Với $x \\ge 0$: $f'(x) = 3 > 0$, hàm đồng biến từ $0$ đến $+\\infty$.\n  * Với $x < 0$: $f'(x) = 7 > 0$, hàm đồng biến từ $-\\infty$ đến $0$.\n* Hàm số liên tục và đồng biến nghiêm ngặt trên toàn $\\mathbb{R}$ $\\implies f$ là **đơn ánh**.\n* Tập giá trị của hàm là $\\operatorname{Im} f = (-\\infty, 0) \\cup [0, +\\infty) = \\mathbb{R} \\implies f$ là **toàn ánh**.\n* Vì $f$ vừa là đơn ánh vừa là toàn ánh nên $f$ là **song ánh**.\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 55,
    "originalId": 55,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hai tập hợp $A = \\{1, 2, 3, 4\\}$ và $B = \\{3, 4, 5, 6\\}$. Hiệu đối xứng $A \\Delta B = (A \\setminus B) \\cup (B \\setminus A)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\emptyset$"
      },
      {
        "key": "B",
        "text": "$\\{3, 4\\}$"
      },
      {
        "key": "C",
        "text": "$\\{1, 2, 5, 6\\}$"
      },
      {
        "key": "D",
        "text": "$\\{1, 2, 3, 4, 5, 6\\}$"
      }
    ],
    "correct": "C",
    "explanation": "Ta có $A \\setminus B = \\{1, 2\\}$ và $B \\setminus A = \\{5, 6\\}$. Do đó $A \\Delta B = \\{1, 2\\} \\cup \\{5, 6\\} = \\{1, 2, 5, 6\\}$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 56,
    "originalId": 56,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho tập hợp $X$ có $5$ phần tử. Số tập con gồm đúng $3$ phần tử của $X$ là:",
    "options": [
      {
        "key": "A",
        "text": "$15$"
      },
      {
        "key": "B",
        "text": "$10$"
      },
      {
        "key": "C",
        "text": "$60$"
      },
      {
        "key": "D",
        "text": "$20$"
      }
    ],
    "correct": "B",
    "explanation": "Số tập hợp con gồm $3$ phần tử của tập có $5$ phần tử là số tổ hợp chập $3$ của $5$: $C_5^3 = \\frac{5!}{3!2!} = \\frac{10}{1} = 10$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 57,
    "originalId": 57,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho tập hợp $A$ có $n$ phần tử ($n \\ge 1$). Số tập hợp con thực sự (tập con khác chính nó) của $A$ là:",
    "options": [
      {
        "key": "A",
        "text": "$2^n$"
      },
      {
        "key": "B",
        "text": "$n^2 - 1$"
      },
      {
        "key": "C",
        "text": "$2^n - 2$"
      },
      {
        "key": "D",
        "text": "$2^n - 1$"
      }
    ],
    "correct": "D",
    "explanation": "Tổng số tập con của tập có $n$ phần tử là $2^n$. Tập con thực sự là tập con bỏ đi chính tập hợp $A$, do đó số tập con thực sự là $2^n - 1$.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 58,
    "originalId": 58,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho $A, B$ là hai tập hợp hữu hạn thỏa mãn $|A| = 20, |B| = 30$ và $|A \\cap B| = 12$. Số phần tử của $A \\cup B$ là:",
    "options": [
      {
        "key": "A",
        "text": "$42$"
      },
      {
        "key": "B",
        "text": "$50$"
      },
      {
        "key": "C",
        "text": "$38$"
      },
      {
        "key": "D",
        "text": "$26$"
      }
    ],
    "correct": "C",
    "explanation": "Theo nguyên lý bù trừ: $|A \\cup B| = |A| + |B| - |A \\cap B| = 20 + 30 - 12 = 38$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 59,
    "originalId": 59,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho tập hợp $S = \\{a, b, c\\}$. Tập lũy thừa $\\mathcal{P}(S)$ có bao nhiêu phần tử?",
    "options": [
      {
        "key": "A",
        "text": "$9$"
      },
      {
        "key": "B",
        "text": "$8$"
      },
      {
        "key": "C",
        "text": "$3$"
      },
      {
        "key": "D",
        "text": "$6$"
      }
    ],
    "correct": "B",
    "explanation": "Tập lũy thừa $\\mathcal{P}(S)$ là tập hợp tất cả các tập con của $S$. Với $|S| = 3$, số phần tử của $\\mathcal{P}(S)$ là $2^3 = 8$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 60,
    "originalId": 60,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Một quan hệ thứ tự bộ phận (partial order) trên tập hợp $X$ phải thỏa mãn ba tính chất:",
    "options": [
      {
        "key": "A",
        "text": "Không phản xạ, Đối xứng và Bắc cầu"
      },
      {
        "key": "B",
        "text": "Phản xạ, Đối xứng và Bắc cầu"
      },
      {
        "key": "C",
        "text": "Phản xứng, Bắc cầu và Đầy đủ"
      },
      {
        "key": "D",
        "text": "Phản xạ, Phản xứng và Bắc cầu"
      }
    ],
    "correct": "D",
    "explanation": "Quan hệ thứ tự một phần (partial order relation) được định nghĩa bởi ba tính chất: Phản xạ ($xRx$), Phản xứng ($xRy$ và $yRx \\Rightarrow x = y$), và Bắc cầu ($xRy$ và $yRz \\Rightarrow xRz$).\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 61,
    "originalId": 61,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho tập $A$ gồm 4 phần tử và tập $B$ gồm 3 phần tử. Số phần tử của tích Descartes $A \\times B$ là:",
    "options": [
      {
        "key": "A",
        "text": "$7$"
      },
      {
        "key": "B",
        "text": "$12$"
      },
      {
        "key": "C",
        "text": "$81$"
      },
      {
        "key": "D",
        "text": "$64$"
      }
    ],
    "correct": "B",
    "explanation": "Số phần tử của tích Descartes hai tập hợp hữu hạn bằng tích số phần tử của từng tập: $|A \\times B| = |A| \\cdot |B| = 4 \\times 3 = 12$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 62,
    "originalId": 62,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Số lượng hàm số khác nhau từ tập hợp $X$ có $m$ phần tử vào tập hợp $Y$ có $n$ phần tử là:",
    "options": [
      {
        "key": "A",
        "text": "$n^m$"
      },
      {
        "key": "B",
        "text": "$n! / (n - m)!$"
      },
      {
        "key": "C",
        "text": "$m^n$"
      },
      {
        "key": "D",
        "text": "$m \\cdot n$"
      }
    ],
    "correct": "A",
    "explanation": "Mỗi phần tử trong số $m$ phần tử của tập nguồn $X$ có $n$ cách chọn ảnh trong tập đích $Y$. Theo quy tắc nhân, tổng số hàm số là $n \\times n \\times \\dots \\times n = n^m$.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 63,
    "originalId": 63,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho tập hợp $A = \\{1, \\, \\{2\\}, \\, 3\\}$. Khẳng định nào dưới đây là **đúng**?",
    "options": [
      {
        "key": "A",
        "text": "$2 \\in A$"
      },
      {
        "key": "B",
        "text": "$\\{2\\} \\in A$"
      },
      {
        "key": "C",
        "text": "$\\{1, 2\\} \\subset A$"
      },
      {
        "key": "D",
        "text": "$\\{\\{2\\}\\} \\in A$"
      }
    ],
    "correct": "B",
    "explanation": "* **Phân biệt quan hệ phần tử ($\\in$) và tập con ($\\subset$):**\n  * Tập $A$ gồm 3 phần tử: phần tử $1$, phần tử $\\{2\\}$, và phần tử $3$.\n  * Vì $\\{2\\}$ là một phần tử có mặt trong $A$ nên khẳng định **$\\{2\\} \\in A$ là đúng**.\n  * $2 \\notin A$ vì $2$ chỉ nằm bên trong phần tử $\\{2\\}$, không phải là phần tử độc lập của $A$.\n  * $\\{1, 2\\} \\subset A$ là sai vì $2 \\notin A$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 64,
    "originalId": 64,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho tập hợp $X$ có $n$ phần tử. Số phần tử của tập lũy thừa $\\mathcal{P}(X)$ (tập hợp tất cả các tập con của $X$) là:",
    "options": [
      {
        "key": "A",
        "text": "$n!$"
      },
      {
        "key": "B",
        "text": "$n^2$"
      },
      {
        "key": "C",
        "text": "$2n$"
      },
      {
        "key": "D",
        "text": "$2^n$"
      }
    ],
    "correct": "D",
    "explanation": "* **Định lý về tập lũy thừa:**\n  * Mỗi phần tử của $X$ có $2$ trạng thái khi tạo tập con: hoặc thuộc tập con, hoặc không thuộc tập con.\n  * Với $n$ phần tử độc lập, số tập con có thể tạo thành là $\\underbrace{2 \\times 2 \\times \\dots \\times 2}_{n \\text{ lần}} = 2^n$.\n  * Do đó $|\\mathcal{P}(X)| = 2^n$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 65,
    "originalId": 65,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hiệu đối xứng của hai tập hợp $A$ và $B$, ký hiệu $A \\oplus B$, được định nghĩa là:",
    "options": [
      {
        "key": "A",
        "text": "$(A \\cup B) \\cap (A \\cap B)$"
      },
      {
        "key": "B",
        "text": "$A \\setminus (A \\cap B)$"
      },
      {
        "key": "C",
        "text": "$(A \\setminus B) \\cup (B \\setminus A)$"
      },
      {
        "key": "D",
        "text": "$(A \\cap B) \\setminus (A \\cup B)$"
      }
    ],
    "correct": "C",
    "explanation": "* **Định nghĩa hiệu đối xứng (Symmetric Difference):**\n  * $A \\oplus B$ (hoặc $A \\Delta B$) là tập hợp các phần tử thuộc $A$ hoặc thuộc $B$ nhưng không thuộc phần giao của chúng:\n    $$A \\oplus B = (A \\setminus B) \\cup (B \\setminus A) = (A \\cup B) \\setminus (A \\cap B)$$\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 66,
    "originalId": 66,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho $A, B$ là hai tập hợp hữu hạn. Công thức bao hàm - loại trừ tính số phần tử $|A \\cup B|$ là:",
    "options": [
      {
        "key": "A",
        "text": "$|A \\setminus B| + |B \\setminus A|$"
      },
      {
        "key": "B",
        "text": "$|A| + |B| + |A \\cap B|$"
      },
      {
        "key": "C",
        "text": "$|A| + |B| - |A \\cap B|$"
      },
      {
        "key": "D",
        "text": "$|A| + |B| - 2|A \\cap B|$"
      }
    ],
    "correct": "C",
    "explanation": "* **Nguyên lý bao hàm - loại trừ (Inclusion-Exclusion Principle):**\n  * Khi cộng $|A| + |B|$, phần giao $A \\cap B$ bị đếm hai lần.\n  * Do đó cần trừ đi một lần số phần tử của phần giao:\n    $$|A \\cup B| = |A| + |B| - |A \\cap B|$$\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 67,
    "originalId": 67,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho tập hợp $A$ có $3$ phần tử và tập hợp $B$ có $4$ phần tử. Số lượng ánh xạ khác nhau từ $A$ vào $B$ là:",
    "options": [
      {
        "key": "A",
        "text": "$3^4 = 81$"
      },
      {
        "key": "B",
        "text": "$4^3 = 64$"
      },
      {
        "key": "C",
        "text": "$3 \\times 4 = 12$"
      },
      {
        "key": "D",
        "text": "$A_4^3 = 24$"
      }
    ],
    "correct": "B",
    "explanation": "* **Công thức đếm số lượng ánh xạ:**\n  * Giả sử $A = \\{a_1, a_2, a_3\\}$.\n  * Phần tử $a_1$ có $4$ cách chọn ảnh trong $B$.\n  * Phần tử $a_2$ có $4$ cách chọn ảnh trong $B$.\n  * Phần tử $a_3$ có $4$ cách chọn ảnh trong $B$.\n  * Theo quy tắc nhân, tổng số ánh xạ từ $A$ vào $B$ là $|B|^{|A|} = 4^3 = 64$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 68,
    "originalId": 68,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hai tập hợp $A$ và $B$. Mệnh đề nào sau đây luôn đúng với mọi $A, B$?",
    "options": [
      {
        "key": "A",
        "text": "$A \\cup (B \\setminus A) = A \\cap B$"
      },
      {
        "key": "B",
        "text": "$A \\setminus B = A \\cap \\bar{B}$"
      },
      {
        "key": "C",
        "text": "$\\overline{A \\cap B} = \\bar{A} \\cap \\bar{B}$"
      },
      {
        "key": "D",
        "text": "$A \\setminus B = B \\setminus A$"
      }
    ],
    "correct": "B",
    "explanation": "* **Định nghĩa phép hiệu tập hợp theo phép bù:**\n  * $A \\setminus B$ là tập các phần tử thuộc $A$ và không thuộc $B$ (tức thuộc phần bù $\\bar{B}$).\n  * Do đó $A \\setminus B = A \\cap \\bar{B}$ luôn đúng.\n  * Các phương án khác: B sai vì phép hiệu không có tính giao hoán; C sai vì $A \\cup (B \\setminus A) = A \\cup B$; D sai vì luật De Morgan đúng là $\\overline{A \\cap B} = \\bar{A} \\cup \\bar{B}$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 69,
    "originalId": 69,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tập hợp $\\emptyset$ (tập rỗng) có bao nhiêu tập con?",
    "options": [
      {
        "key": "A",
        "text": "$1$ tập con (chính là $\\emptyset$)"
      },
      {
        "key": "B",
        "text": "$2$ tập con"
      },
      {
        "key": "C",
        "text": "$0$ tập con"
      },
      {
        "key": "D",
        "text": "Vô số"
      }
    ],
    "correct": "A",
    "explanation": "* **Số tập con của tập rỗng:**\n  * Tập rỗng có số phần tử là $n = 0$.\n  * Theo công thức số tập con: $|\\mathcal{P}(\\emptyset)| = 2^0 = 1$.\n  * Tập con duy nhất của $\\emptyset$ chính là $\\emptyset$ (vì $\\emptyset \\subset \\emptyset$).\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 70,
    "originalId": 70,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho tập hợp $A$ có đúng 6 phần tử phân biệt. Số tập hợp con của $A$ (lực lượng tập lũy thừa $|\\mathcal{P}(A)|$) bằng:",
    "options": [
      {
        "key": "A",
        "text": "$63$"
      },
      {
        "key": "B",
        "text": "$64$"
      },
      {
        "key": "C",
        "text": "$36$"
      },
      {
        "key": "D",
        "text": "$12$"
      }
    ],
    "correct": "B",
    "explanation": "* Số tập con của tập hợp có $n$ phần tử luôn bằng $2^n$. Với $n = 6$, số tập con là $2^{6} = 64$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 71,
    "originalId": 71,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hai tập hợp hữu hạn $A$ và $B$ thỏa mãn $|A| = 21, |B| = 13$ và $|A \\cap B| = 12$. Số phần tử của tập hợp $A \\cup B$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$8$"
      },
      {
        "key": "B",
        "text": "$22$"
      },
      {
        "key": "C",
        "text": "$34$"
      },
      {
        "key": "D",
        "text": "$23$"
      }
    ],
    "correct": "B",
    "explanation": "* Theo nguyên lý bao hàm - loại trừ: $|A \\cup B| = |A| + |B| - |A \\cap B| = 21 + 13 - 12 = 22$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 72,
    "originalId": 72,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho tập $A = \\{1, 6, 9, 15\\}$ và $B = \\{9, 12, 17, 18\\}$. Hiệu của hai tập hợp $A \\setminus B$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\{12, 17, 18\\}$"
      },
      {
        "key": "B",
        "text": "$\\{1, 6, 9, 12, 15, 17, 18\\}$"
      },
      {
        "key": "C",
        "text": "$\\{9\\}$"
      },
      {
        "key": "D",
        "text": "$\\{1, 6, 15\\}$"
      }
    ],
    "correct": "D",
    "explanation": "* Hiệu $A \\setminus B$ gồm các phần tử thuộc $A$ nhưng không thuộc $B$. Đối chiếu ta được $A \\setminus B = $\\{1, 6, 15\\}$$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 73,
    "originalId": 73,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho tập hợp $A$ có đúng 9 phần tử phân biệt. Số tập hợp con của $A$ (lực lượng tập lũy thừa $|\\mathcal{P}(A)|$) bằng:",
    "options": [
      {
        "key": "A",
        "text": "$512$"
      },
      {
        "key": "B",
        "text": "$81$"
      },
      {
        "key": "C",
        "text": "$18$"
      },
      {
        "key": "D",
        "text": "$511$"
      }
    ],
    "correct": "A",
    "explanation": "* Số tập con của tập hợp có $n$ phần tử luôn bằng $2^n$. Với $n = 9$, số tập con là $2^{9} = 512$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 74,
    "originalId": 74,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hai tập hợp hữu hạn $A$ và $B$ thỏa mãn $|A| = 12, |B| = 23$ và $|A \\cap B| = 3$. Số phần tử của tập hợp $A \\cup B$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$32$"
      },
      {
        "key": "B",
        "text": "$35$"
      },
      {
        "key": "C",
        "text": "$11$"
      },
      {
        "key": "D",
        "text": "$33$"
      }
    ],
    "correct": "A",
    "explanation": "* Theo nguyên lý bao hàm - loại trừ: $|A \\cup B| = |A| + |B| - |A \\cap B| = 12 + 23 - 3 = 32$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 75,
    "originalId": 75,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho tập $A = \\{3, 7, 11, 18\\}$ và $B = \\{2, 4, 5, 8\\}$. Hiệu của hai tập hợp $A \\setminus B$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\{2, 4, 5, 8\\}$"
      },
      {
        "key": "B",
        "text": "$\\{2, 3, 4, 5, 7, 8, 11, 18\\}$"
      },
      {
        "key": "C",
        "text": "$\\emptyset$"
      },
      {
        "key": "D",
        "text": "$\\{3, 7, 11, 18\\}$"
      }
    ],
    "correct": "D",
    "explanation": "* Hiệu $A \\setminus B$ gồm các phần tử thuộc $A$ nhưng không thuộc $B$. Đối chiếu ta được $A \\setminus B = $\\{3, 7, 11, 18\\}$$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 76,
    "originalId": 76,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho tập hợp $A$ có đúng 7 phần tử phân biệt. Số tập hợp con của $A$ (lực lượng tập lũy thừa $|\\mathcal{P}(A)|$) bằng:",
    "options": [
      {
        "key": "A",
        "text": "$127$"
      },
      {
        "key": "B",
        "text": "$14$"
      },
      {
        "key": "C",
        "text": "$128$"
      },
      {
        "key": "D",
        "text": "$49$"
      }
    ],
    "correct": "C",
    "explanation": "* Số tập con của tập hợp có $n$ phần tử luôn bằng $2^n$. Với $n = 7$, số tập con là $2^{7} = 128$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 77,
    "originalId": 77,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 3,
    "typeId": "1.3",
    "typeName": "Tập hợp & Các phép toán Tập hợp",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hai tập hợp hữu hạn $A$ và $B$ thỏa mãn $|A| = 18, |B| = 27$ và $|A \\cap B| = 17$. Số phần tử của tập hợp $A \\cup B$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$45$"
      },
      {
        "key": "B",
        "text": "$29$"
      },
      {
        "key": "C",
        "text": "$9$"
      },
      {
        "key": "D",
        "text": "$28$"
      }
    ],
    "correct": "D",
    "explanation": "* Theo nguyên lý bao hàm - loại trừ: $|A \\cup B| = |A| + |B| - |A \\cap B| = 18 + 27 - 17 = 28$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 78,
    "originalId": 21,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Ánh xạ nào dưới đây là **toàn ánh**?",
    "options": [
      {
        "key": "A",
        "text": "$f: \\mathbb{N} \\to \\mathbb{N}, \\, f(n) = 2n$"
      },
      {
        "key": "B",
        "text": "$f: \\mathbb{R}^* \\to \\mathbb{R}, \\, f(x) = \\dfrac{1}{x}$"
      },
      {
        "key": "C",
        "text": "$f: \\mathbb{R} \\to \\mathbb{R}, \\, f(x) = x^2 + 2x$"
      },
      {
        "key": "D",
        "text": "$f: \\mathbb{R} \\to \\mathbb{R}, \\, f(x) = x^3 + 5$"
      }
    ],
    "correct": "D",
    "explanation": "* Xét phương án D: Với mọi $y \\in \\mathbb{R}$, phương trình $x^3 + 5 = y \\iff x = \\sqrt[3]{y - 5}$ luôn có nghiệm thực duy nhất $x \\in \\mathbb{R}$. Do đó $f$ là toàn ánh.\n* Các phương án khác không toàn ánh:\n  * A sai: ảnh của $f$ chỉ gồm các số chẵn, không nhận các số lẻ.\n  * B sai: hàm số không bao giờ nhận giá trị $y = 0 \\in \\mathbb{R}$.\n  * C sai: $x^2 + 2x = (x + 1)^2 - 1 \\ge -1$, không nhận các giá trị $y < -1$.\n* **Chọn đáp án: D.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 79,
    "originalId": 25,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho ánh xạ $f: \\mathbb{N} \\to \\mathbb{N}, \\, f(n) = n^2 + n$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$f$ là đơn ánh nhưng không là toàn ánh"
      },
      {
        "key": "B",
        "text": "$f$ không là đơn ánh cũng không là toàn ánh"
      },
      {
        "key": "C",
        "text": "$f$ là song ánh"
      },
      {
        "key": "D",
        "text": "$f$ là toàn ánh nhưng không là đơn ánh"
      }
    ],
    "correct": "A",
    "explanation": "* **Đơn ánh:** Giả sử $f(n_1) = f(n_2) \\iff n_1^2 + n_1 = n_2^2 + n_2 \\iff (n_1 - n_2)(n_1 + n_2 + 1) = 0$.\n  Vì $n_1, n_2 \\in \\mathbb{N}$ nên $n_1 + n_2 + 1 \\ge 1 > 0$, suy ra $n_1 = n_2$. Vậy $f$ là **đơn ánh**.\n* **Toàn ánh:** Với $y = 1 \\in \\mathbb{N}$, phương trình $n^2 + n = 1$ không có nghiệm trong $\\mathbb{N}$. Do đó $f$ **không là toàn ánh**.\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 80,
    "originalId": 80,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ $f: \\mathbb{R} \\to \\mathbb{R}$ xác định bởi $f(x) = 2x - 3$. Ánh xạ ngược $f^{-1}(x)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$f^{-1}(x) = 3x - 2$"
      },
      {
        "key": "B",
        "text": "$f^{-1}(x) = \\dfrac{1}{2x - 3}$"
      },
      {
        "key": "C",
        "text": "$f^{-1}(x) = \\dfrac{x + 3}{2}$"
      },
      {
        "key": "D",
        "text": "$f^{-1}(x) = \\dfrac{x - 3}{2}$"
      }
    ],
    "correct": "C",
    "explanation": "Đặt $y = f(x) = 2x - 3 \\Leftrightarrow 2x = y + 3 \\Leftrightarrow x = \\dfrac{y + 3}{2}$. Vì $f$ là song ánh trên $\\mathbb{R}$, ánh xạ ngược là $f^{-1}(x) = \\dfrac{x + 3}{2}$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 81,
    "originalId": 81,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hai ánh xạ $f: \\mathbb{R} \\to \\mathbb{R}, f(x) = x^2 + 1$ và $g: \\mathbb{R} \\to \\mathbb{R}, g(x) = 3x - 2$. Biểu thức ánh xạ hợp thành $(g \\circ f)(x)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$9x^2 - 12x + 5$"
      },
      {
        "key": "B",
        "text": "$3x^2 - 1$"
      },
      {
        "key": "C",
        "text": "$3x^2 + 1$"
      },
      {
        "key": "D",
        "text": "$3x^2 + 3$"
      }
    ],
    "correct": "C",
    "explanation": "Theo định nghĩa ánh xạ hợp thành: $(g \\circ f)(x) = g(f(x)) = g(x^2 + 1) = 3(x^2 + 1) - 2 = 3x^2 + 3 - 2 = 3x^2 + 1$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 82,
    "originalId": 82,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Ánh xạ nào sau đây là một **đơn ánh**?",
    "options": [
      {
        "key": "A",
        "text": "$f: \\mathbb{R} \\to \\mathbb{R}, \\, f(x) = \\sin x$"
      },
      {
        "key": "B",
        "text": "$f: \\mathbb{R} \\to \\mathbb{R}, \\, f(x) = 3x - 1$"
      },
      {
        "key": "C",
        "text": "$f: \\mathbb{Z} \\to \\mathbb{Z}, \\, f(n) = |n|$"
      },
      {
        "key": "D",
        "text": "$f: \\mathbb{R} \\to \\mathbb{R}, \\, f(x) = x^2$"
      }
    ],
    "correct": "B",
    "explanation": "$f(x_1) = f(x_2) \\Leftrightarrow 3x_1 - 1 = 3x_2 - 1 \\Leftrightarrow x_1 = x_2$, do đó $f(x) = 3x - 1$ là đơn ánh (và thực tế là song ánh). Các hàm $x^2, \\sin x, |n|$ đều không đơn ánh vì hai giá trị đối nhau cho cùng một ảnh.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 83,
    "originalId": 83,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Ánh xạ $f: \\mathbb{R} \\to [0, +\\infty)$ xác định bởi $f(x) = x^2$ là:",
    "options": [
      {
        "key": "A",
        "text": "Toàn ánh nhưng không đơn ánh"
      },
      {
        "key": "B",
        "text": "Song ánh"
      },
      {
        "key": "C",
        "text": "Đơn ánh nhưng không toàn ánh"
      },
      {
        "key": "D",
        "text": "Không đơn ánh cũng không toàn ánh"
      }
    ],
    "correct": "A",
    "explanation": "- Không đơn ánh vì $f(-2) = f(2) = 4$ nhưng $-2 \\neq 2$.\n- Là toàn ánh vì với mọi $y \\in [0, +\\infty)$, luôn tồn tại $x = \\sqrt{y} \\in \\mathbb{R}$ để $f(x) = y$.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 84,
    "originalId": 84,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ $f: \\mathbb{R} \\to \\mathbb{R}$ xác định bởi $f(x) = 3x - 4$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$f$ là toàn ánh nhưng không là đơn ánh"
      },
      {
        "key": "B",
        "text": "$f$ là đơn ánh nhưng không là toàn ánh"
      },
      {
        "key": "C",
        "text": "$f$ không là đơn ánh cũng không là toàn ánh"
      },
      {
        "key": "D",
        "text": "$f$ là song ánh"
      }
    ],
    "correct": "D",
    "explanation": "* **Kỹ thuật xét tính đơn ánh và toàn ánh:**\n  * **Đơn ánh:** Giả sử $f(x_1) = f(x_2) \\Leftrightarrow 3x_1 - 4 = 3x_2 - 4 \\Leftrightarrow 3x_1 = 3x_2 \\Leftrightarrow x_1 = x_2$. Vậy $f$ là đơn ánh.\n  * **Toàn ánh:** Với mọi $y \\in \\mathbb{R}$, phương trình $3x - 4 = y \\Leftrightarrow x = \\dfrac{y + 4}{3}$ luôn có nghiệm thực duy nhất $x \\in \\mathbb{R}$. Vậy $f$ là toàn ánh.\n  * Vì $f$ vừa là đơn ánh vừa là toàn ánh nên $f$ là **song ánh**.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 85,
    "originalId": 85,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ $f: \\mathbb{Z} \\to \\mathbb{Z}$ xác định bởi $f(n) = 2n + 1$. Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "text": "$f$ là song ánh"
      },
      {
        "key": "B",
        "text": "$f$ là toàn ánh nhưng không là đơn ánh"
      },
      {
        "key": "C",
        "text": "$f$ không là đơn ánh cũng không là toàn ánh"
      },
      {
        "key": "D",
        "text": "$f$ là đơn ánh nhưng không là toàn ánh"
      }
    ],
    "correct": "D",
    "explanation": "* **Xét tính đơn ánh trên $\\mathbb{Z}$:**\n  $$f(n_1) = f(n_2) \\iff 2n_1 + 1 = 2n_2 + 1 \\iff n_1 = n_2 \\implies f \\text{ là đơn ánh.}$$\n* **Xét tính toàn ánh trên $\\mathbb{Z}$:**\n  * Ảnh của $f$ chỉ gồm các số nguyên lẻ: $\\operatorname{Im} f = \\{2n + 1 \\mid n \\in \\mathbb{Z}\\}$.\n  * Lấy số chẵn $y = 0 \\in \\mathbb{Z}$, phương trình $2n + 1 = 0 \\iff n = -1/2 \\notin \\mathbb{Z}$.\n  * Do đó không tồn tại $n \\in \\mathbb{Z}$ để $f(n) = 0$, suy ra $f$ **không là toàn ánh**.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 86,
    "originalId": 86,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hai ánh xạ $f: X \\to Y$ và $g: Y \\to Z$. Nếu cả $f$ và $g$ đều là đơn ánh thì ánh xạ tích hợp $g \\circ f: X \\to Z$ là:",
    "options": [
      {
        "key": "A",
        "text": "Đơn ánh"
      },
      {
        "key": "B",
        "text": "Song ánh"
      },
      {
        "key": "C",
        "text": "Toàn ánh nhưng không nhất thiết là đơn ánh"
      },
      {
        "key": "D",
        "text": "Chưa kết luận được"
      }
    ],
    "correct": "A",
    "explanation": "* **Chứng minh tính đơn ánh của ánh xạ tích hợp:**\n  * Giả sử $(g \\circ f)(x_1) = (g \\circ f)(x_2) \\iff g(f(x_1)) = g(f(x_2))$.\n  * Vì $g$ là đơn ánh nên $g(u) = g(v) \\implies u = v$. Do đó $f(x_1) = f(x_2)$.\n  * Vì $f$ là đơn ánh nên $f(x_1) = f(x_2) \\implies x_1 = x_2$.\n  * Vậy $g \\circ f$ là đơn ánh.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 87,
    "originalId": 87,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ $f: \\mathbb{R} \\to \\mathbb{R}, f(x) = x^2$. Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "text": "$f$ là đơn ánh"
      },
      {
        "key": "B",
        "text": "$f$ là song ánh"
      },
      {
        "key": "C",
        "text": "$f$ không là đơn ánh cũng không là toàn ánh"
      },
      {
        "key": "D",
        "text": "$f$ là toàn ánh"
      }
    ],
    "correct": "C",
    "explanation": "* **Kiểm tra tính đơn ánh:**\n  * Ta có $f(1) = 1^2 = 1$ và $f(-1) = (-1)^2 = 1$.\n  * Vì $f(1) = f(-1)$ nhưng $1 \\neq -1$ nên $f$ **không là đơn ánh**.\n* **Kiểm tra tính toàn ánh:**\n  * Với mọi $x \\in \\mathbb{R}$, $x^2 \\ge 0$.\n  * Với $y = -1 \\in \\mathbb{R}$, phương trình $x^2 = -1$ không có nghiệm thực.\n  * Do đó $f$ **không là toàn ánh**.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 88,
    "originalId": 88,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hàm số $f: [0, +\\infty) \\to [0, +\\infty)$ xác định bởi $f(x) = x^2$. Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "text": "$f$ không là đơn ánh cũng không toàn ánh"
      },
      {
        "key": "B",
        "text": "$f$ là toàn ánh nhưng không là đơn ánh"
      },
      {
        "key": "C",
        "text": "$f$ là một song ánh"
      },
      {
        "key": "D",
        "text": "$f$ là đơn ánh nhưng không là toàn ánh"
      }
    ],
    "correct": "C",
    "explanation": "* **Tầm quan trọng của tập nguồn và tập đích đối với ánh xạ:**\n  * Với tập nguồn $X = [0, +\\infty)$, hàm số $y = x^2$ đồng biến nghiêm ngặt: $x_1 < x_2 \\implies x_1^2 < x_2^2$, do đó $f(x_1) = f(x_2) \\iff x_1 = x_2 \\implies f$ là **đơn ánh**.\n  * Với mọi $y \\in [0, +\\infty)$, phương trình $x^2 = y$ luôn có nghiệm duy nhất $x = \\sqrt{y} \\in [0, +\\infty) \\implies f$ là **toàn ánh**.\n  * Vậy trên tập xác định này, $f$ là một **song ánh** (có hàm ngược là $f^{-1}(y) = \\sqrt{y}$).\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 89,
    "originalId": 89,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ $f: \\mathbb{R} \\to \\mathbb{R}$ xác định bởi công thức $f(x) = 2x + 2$. Khẳng định nào sau đây là **ĐÚNG**?",
    "options": [
      {
        "key": "A",
        "text": "$f$ là một song ánh"
      },
      {
        "key": "B",
        "text": "$f$ chỉ là toàn ánh, không phải đơn ánh"
      },
      {
        "key": "C",
        "text": "$f$ không phải là đơn ánh cũng không phải toàn ánh"
      },
      {
        "key": "D",
        "text": "$f$ chỉ là đơn ánh, không phải toàn ánh"
      }
    ],
    "correct": "A",
    "explanation": "* Hàm số bậc nhất $y = ax + b$ với $a = 2 \\neq 0$ có đồ thị là đường thẳng có hệ số góc khác 0, do đó vừa là đơn ánh vừa là toàn ánh trên $\\mathbb{R}$, tức là một song ánh.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 90,
    "originalId": 90,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hai ánh xạ $f, g: \\mathbb{R} \\to \\mathbb{R}$ xác định bởi $f(x) = 3x + 1$ và $g(x) = x - 3$. Công thức của ánh xạ hợp $(g \\circ f)(x)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$3x - 3$"
      },
      {
        "key": "B",
        "text": "$3x + -2$"
      },
      {
        "key": "C",
        "text": "$3x + 4$"
      },
      {
        "key": "D",
        "text": "$3(x - 3) + 1$"
      }
    ],
    "correct": "B",
    "explanation": "* Theo định nghĩa ánh xạ hợp: $(g \\circ f)(x) = g(f(x)) = g(3x + 1) = (3x + 1) - 3 = 3x + -2$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 91,
    "originalId": 91,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Ánh xạ nào dưới đây là một **đơn ánh** nhưng **không phải là toàn ánh**?",
    "options": [
      {
        "key": "A",
        "text": "$f: \\mathbb{R} \\to \\mathbb{R}, \\, f(x) = x^2$"
      },
      {
        "key": "B",
        "text": "$f: \\mathbb{N} \\to \\mathbb{N}, \\, f(n) = 2n + 1$"
      },
      {
        "key": "C",
        "text": "$f: \\mathbb{R} \\to \\mathbb{R}, \\, f(x) = x^3 - x$"
      },
      {
        "key": "D",
        "text": "$f: \\mathbb{R} \\to \\mathbb{R}, \\, f(x) = 2x + 1$"
      }
    ],
    "correct": "B",
    "explanation": "* Với $f(n) = 2n + 1$ trên $\\mathbb{N}$: nếu $2n_1 + 1 = 2n_2 + 1 \\implies n_1 = n_2$ (đơn ánh). Nhưng tập giá trị chỉ gồm các số tự nhiên lẻ, các số chẵn (như 0, 2, 4) không có nghịch ảnh nên không toàn ánh.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 92,
    "originalId": 92,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ $f: \\mathbb{R} \\to \\mathbb{R}$ xác định bởi công thức $f(x) = -3x + -3$. Khẳng định nào sau đây là **ĐÚNG**?",
    "options": [
      {
        "key": "A",
        "text": "$f$ chỉ là toàn ánh, không phải đơn ánh"
      },
      {
        "key": "B",
        "text": "$f$ chỉ là đơn ánh, không phải toàn ánh"
      },
      {
        "key": "C",
        "text": "$f$ là một song ánh"
      },
      {
        "key": "D",
        "text": "$f$ không phải là đơn ánh cũng không phải toàn ánh"
      }
    ],
    "correct": "C",
    "explanation": "* Hàm số bậc nhất $y = ax + b$ với $a = -3 \\neq 0$ có đồ thị là đường thẳng có hệ số góc khác 0, do đó vừa là đơn ánh vừa là toàn ánh trên $\\mathbb{R}$, tức là một song ánh.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 93,
    "originalId": 93,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ $f: \\mathbb{R} \\to \\mathbb{R}$ xác định bởi công thức $f(x) = -3x + -5$. Khẳng định nào sau đây là **ĐÚNG**?",
    "options": [
      {
        "key": "A",
        "text": "$f$ là một song ánh"
      },
      {
        "key": "B",
        "text": "$f$ không phải là đơn ánh cũng không phải toàn ánh"
      },
      {
        "key": "C",
        "text": "$f$ chỉ là đơn ánh, không phải toàn ánh"
      },
      {
        "key": "D",
        "text": "$f$ chỉ là toàn ánh, không phải đơn ánh"
      }
    ],
    "correct": "A",
    "explanation": "* Hàm số bậc nhất $y = ax + b$ với $a = -3 \\neq 0$ có đồ thị là đường thẳng có hệ số góc khác 0, do đó vừa là đơn ánh vừa là toàn ánh trên $\\mathbb{R}$, tức là một song ánh.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 94,
    "originalId": 94,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hai ánh xạ $f, g: \\mathbb{R} \\to \\mathbb{R}$ xác định bởi $f(x) = 4x + 1$ và $g(x) = x - -3$. Công thức của ánh xạ hợp $(g \\circ f)(x)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$4x + -2$"
      },
      {
        "key": "B",
        "text": "$4x - -3$"
      },
      {
        "key": "C",
        "text": "$4(x - -3) + 1$"
      },
      {
        "key": "D",
        "text": "$4x + 4$"
      }
    ],
    "correct": "D",
    "explanation": "* Theo định nghĩa ánh xạ hợp: $(g \\circ f)(x) = g(f(x)) = g(4x + 1) = (4x + 1) - -3 = 4x + 4$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 95,
    "originalId": 95,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ $f: \\mathbb{R} \\to \\mathbb{R}$ xác định bởi công thức $f(x) = 3x + 1$. Khẳng định nào sau đây là **ĐÚNG**?",
    "options": [
      {
        "key": "A",
        "text": "$f$ chỉ là toàn ánh, không phải đơn ánh"
      },
      {
        "key": "B",
        "text": "$f$ chỉ là đơn ánh, không phải toàn ánh"
      },
      {
        "key": "C",
        "text": "$f$ là một song ánh"
      },
      {
        "key": "D",
        "text": "$f$ không phải là đơn ánh cũng không phải toàn ánh"
      }
    ],
    "correct": "C",
    "explanation": "* Hàm số bậc nhất $y = ax + b$ với $a = 3 \\neq 0$ có đồ thị là đường thẳng có hệ số góc khác 0, do đó vừa là đơn ánh vừa là toàn ánh trên $\\mathbb{R}$, tức là một song ánh.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 96,
    "originalId": 96,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hai ánh xạ $f, g: \\mathbb{R} \\to \\mathbb{R}$ xác định bởi $f(x) = -2x + 1$ và $g(x) = x - -3$. Công thức của ánh xạ hợp $(g \\circ f)(x)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$-2x + -2$"
      },
      {
        "key": "B",
        "text": "$-2(x - -3) + 1$"
      },
      {
        "key": "C",
        "text": "$-2x + 4$"
      },
      {
        "key": "D",
        "text": "$-2x - -3$"
      }
    ],
    "correct": "C",
    "explanation": "* Theo định nghĩa ánh xạ hợp: $(g \\circ f)(x) = g(f(x)) = g(-2x + 1) = (-2x + 1) - -3 = -2x + 4$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 97,
    "originalId": 97,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ $f: \\mathbb{R} \\to \\mathbb{R}$ xác định bởi công thức $f(x) = 4x + 7$. Khẳng định nào sau đây là **ĐÚNG**?",
    "options": [
      {
        "key": "A",
        "text": "$f$ chỉ là toàn ánh, không phải đơn ánh"
      },
      {
        "key": "B",
        "text": "$f$ chỉ là đơn ánh, không phải toàn ánh"
      },
      {
        "key": "C",
        "text": "$f$ không phải là đơn ánh cũng không phải toàn ánh"
      },
      {
        "key": "D",
        "text": "$f$ là một song ánh"
      }
    ],
    "correct": "D",
    "explanation": "* Hàm số bậc nhất $y = ax + b$ với $a = 4 \\neq 0$ có đồ thị là đường thẳng có hệ số góc khác 0, do đó vừa là đơn ánh vừa là toàn ánh trên $\\mathbb{R}$, tức là một song ánh.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 98,
    "originalId": 98,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hai ánh xạ $f, g: \\mathbb{R} \\to \\mathbb{R}$ xác định bởi $f(x) = -4x + 1$ và $g(x) = x - 2$. Công thức của ánh xạ hợp $(g \\circ f)(x)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$-4x + 3$"
      },
      {
        "key": "B",
        "text": "$-4(x - 2) + 1$"
      },
      {
        "key": "C",
        "text": "$-4x + -1$"
      },
      {
        "key": "D",
        "text": "$-4x - 2$"
      }
    ],
    "correct": "C",
    "explanation": "* Theo định nghĩa ánh xạ hợp: $(g \\circ f)(x) = g(f(x)) = g(-4x + 1) = (-4x + 1) - 2 = -4x + -1$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 99,
    "originalId": 99,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ $f: \\mathbb{R} \\to \\mathbb{R}$ xác định bởi công thức $f(x) = -2x + -3$. Khẳng định nào sau đây là **ĐÚNG**?",
    "options": [
      {
        "key": "A",
        "text": "$f$ chỉ là toàn ánh, không phải đơn ánh"
      },
      {
        "key": "B",
        "text": "$f$ là một song ánh"
      },
      {
        "key": "C",
        "text": "$f$ không phải là đơn ánh cũng không phải toàn ánh"
      },
      {
        "key": "D",
        "text": "$f$ chỉ là đơn ánh, không phải toàn ánh"
      }
    ],
    "correct": "B",
    "explanation": "* Hàm số bậc nhất $y = ax + b$ với $a = -2 \\neq 0$ có đồ thị là đường thẳng có hệ số góc khác 0, do đó vừa là đơn ánh vừa là toàn ánh trên $\\mathbb{R}$, tức là một song ánh.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 100,
    "originalId": 100,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hai ánh xạ $f, g: \\mathbb{R} \\to \\mathbb{R}$ xác định bởi $f(x) = -4x + 1$ và $g(x) = x - 7$. Công thức của ánh xạ hợp $(g \\circ f)(x)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$-4x + -6$"
      },
      {
        "key": "B",
        "text": "$-4(x - 7) + 1$"
      },
      {
        "key": "C",
        "text": "$-4x - 7$"
      },
      {
        "key": "D",
        "text": "$-4x + 8$"
      }
    ],
    "correct": "A",
    "explanation": "* Theo định nghĩa ánh xạ hợp: $(g \\circ f)(x) = g(f(x)) = g(-4x + 1) = (-4x + 1) - 7 = -4x + -6$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 101,
    "originalId": 101,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ $f: \\mathbb{R} \\to \\mathbb{R}$ xác định bởi công thức $f(x) = 3x + 2$. Khẳng định nào sau đây là **ĐÚNG**?",
    "options": [
      {
        "key": "A",
        "text": "$f$ là một song ánh"
      },
      {
        "key": "B",
        "text": "$f$ chỉ là toàn ánh, không phải đơn ánh"
      },
      {
        "key": "C",
        "text": "$f$ không phải là đơn ánh cũng không phải toàn ánh"
      },
      {
        "key": "D",
        "text": "$f$ chỉ là đơn ánh, không phải toàn ánh"
      }
    ],
    "correct": "A",
    "explanation": "* Hàm số bậc nhất $y = ax + b$ với $a = 3 \\neq 0$ có đồ thị là đường thẳng có hệ số góc khác 0, do đó vừa là đơn ánh vừa là toàn ánh trên $\\mathbb{R}$, tức là một song ánh.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 102,
    "originalId": 102,
    "chapterId": 1,
    "chapterName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "topicId": 1,
    "topicName": "Logic mệnh đề, Tập hợp, Ánh xạ & Boole",
    "subTypeId": 4,
    "typeId": "1.4",
    "typeName": "Ánh xạ: Đơn ánh, Toàn ánh, Song ánh & Ánh xạ ngược",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hai ánh xạ $f, g: \\mathbb{R} \\to \\mathbb{R}$ xác định bởi $f(x) = 2x + 1$ và $g(x) = x - -3$. Công thức của ánh xạ hợp $(g \\circ f)(x)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$2x + 4$"
      },
      {
        "key": "B",
        "text": "$2(x - -3) + 1$"
      },
      {
        "key": "C",
        "text": "$2x - -3$"
      },
      {
        "key": "D",
        "text": "$2x + -2$"
      }
    ],
    "correct": "A",
    "explanation": "* Theo định nghĩa ánh xạ hợp: $(g \\circ f)(x) = g(f(x)) = g(2x + 1) = (2x + 1) - -3 = 2x + 4$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 103,
    "originalId": 26,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Tìm tất cả các giá trị của $m$ để $u = (7, -2, m)$ biểu diễn được thành tổ hợp tuyến tính của $v_1(2, 3, 5), v_2(3, 7, 8), v_3(1, -6, 1)$:",
    "options": [
      {
        "key": "A",
        "text": "$m = 2$"
      },
      {
        "key": "B",
        "text": "$m = 15$"
      },
      {
        "key": "C",
        "text": "$m \\neq 15$"
      },
      {
        "key": "D",
        "text": "$m \\neq 2$"
      }
    ],
    "correct": "B",
    "explanation": "* $u$ biểu diễn được thành tổ hợp tuyến tính của $\\{v_1, v_2, v_3\\}$ khi và chỉ khi hệ phương trình $c_1 v_1 + c_2 v_2 + c_3 v_3 = u$ có nghiệm:\n  $$\\begin{cases} 2c_1 + 3c_2 + c_3 = 7 \\\\ 3c_1 + 7c_2 - 6c_3 = -2 \\\\ 5c_1 + 8c_2 + c_3 = m \\end{cases}$$\n* Xét ma trận hệ số mở rộng $\\bar{A}$:\n  $$\\bar{A} = \\begin{bmatrix} 2 & 3 & 1 & 7 \\\\ 3 & 7 & -6 & -2 \\\\ 5 & 8 & 1 & m \\end{bmatrix}$$\n* Nhận xét: $5 \\cdot (\\text{Hàng 3} - \\text{Hàng 1}) = 5(3, 5, 0, m - 7) = (15, 25, 0, 5m - 35)$.\n* Mặt khác: $6 \\cdot \\text{Hàng 1} + \\text{Hàng 2} = (12, 18, 6, 42) + (3, 7, -6, -2) = (15, 25, 0, 40)$.\n* Để hệ có nghiệm thì hàng thứ 3 phải có $5m - 35 = 40 \\iff 5m = 75 \\iff m = 15$.\n* Khi $m = 15$, $r(A) = r(\\bar{A}) = 2$, hệ có nghiệm.\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 104,
    "originalId": 104,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tập hợp các véc tơ $\\{(x, y, z) \\in \\mathbb{R}^3 \\mid xy = 0\\}$ có phải là một không gian con của $\\mathbb{R}^3$ không?",
    "options": [
      {
        "key": "A",
        "text": "Không, vì không chứa véc tơ không"
      },
      {
        "key": "B",
        "text": "Có, vì đóng kín với phép nhân số thực"
      },
      {
        "key": "C",
        "text": "Không, vì không đóng kín với phép cộng véc tơ"
      },
      {
        "key": "D",
        "text": "Có, vì chứa véc tơ không"
      }
    ],
    "correct": "C",
    "explanation": "Lấy $u = (1, 0, 0)$ thỏa $xy = 1 \\cdot 0 = 0$, $v = (0, 1, 0)$ thỏa $xy = 0 \\cdot 1 = 0$. Nhưng tổng $u + v = (1, 1, 0)$ có $xy = 1 \\cdot 1 = 1 \\neq 0$, không thuộc tập hợp. Do đó tập này không đóng kín với phép cộng nên không phải không gian con.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 105,
    "originalId": 105,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Giao của hai không gian con bất kỳ $W_1$ và $W_2$ của không gian véc tơ $V$:",
    "options": [
      {
        "key": "A",
        "text": "Luôn có số chiều bằng $\\dim W_1 + \\dim W_2$"
      },
      {
        "key": "B",
        "text": "Có thể là tập rỗng $\\emptyset$"
      },
      {
        "key": "C",
        "text": "Luôn luôn là một không gian con của $V$"
      },
      {
        "key": "D",
        "text": "Chưa chắc là một không gian con của $V$"
      }
    ],
    "correct": "C",
    "explanation": "Theo định lý cơ bản về không gian con: giao của hai không gian con bất kỳ luôn luôn là một không gian con (và không bao giờ rỗng vì luôn chứa $\\vec{0}$).\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 106,
    "originalId": 106,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hợp của hai không gian con $W_1 \\cup W_2$ là một không gian con khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$W_1 \\cap W_2 = \\{\\vec{0}\\}$"
      },
      {
        "key": "B",
        "text": "Luôn luôn là không gian con với mọi $W_1, W_2$"
      },
      {
        "key": "C",
        "text": "$\\dim W_1 = \\dim W_2$"
      },
      {
        "key": "D",
        "text": "$W_1 \\subseteq W_2$ hoặc $W_2 \\subseteq W_1$"
      }
    ],
    "correct": "D",
    "explanation": "Hợp của hai không gian con nói chung không phải là không gian con. Nó là một không gian con khi và chỉ khi không gian này là tập con của không gian kia ($W_1 \\subseteq W_2$ hoặc $W_2 \\subseteq W_1$).\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 107,
    "originalId": 107,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian véc tơ $\\mathbb{R}^3$, tập hợp $W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid 2x - y + 3z = 1\\}$ có phải là không gian con không?",
    "options": [
      {
        "key": "A",
        "text": "Không phải, vì $W$ không đóng kín đối với phép nhân với số thực âm"
      },
      {
        "key": "B",
        "text": "Là không gian con vì phương trình là bậc nhất"
      },
      {
        "key": "C",
        "text": "Không phải, vì véc tơ không $(0, 0, 0) \\notin W$ do $2(0) - 0 + 3(0) = 0 \\neq 1$"
      },
      {
        "key": "D",
        "text": "Là không gian con có số chiều bằng 2"
      }
    ],
    "correct": "C",
    "explanation": "* Điều kiện tiên quyết để $W$ là không gian con là véc tơ không $\\theta = (0, 0, 0)$ phải thuộc $W$. Thay tọa độ $(0,0,0)$ vào phương trình: $0 = 1$ (vô lý vì $1 \\neq 0$). Do đó $W$ không phải là không gian con.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 108,
    "originalId": 108,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong $\\mathbb{R}^2$, véc tơ $v = (12, 13)$ được phân tích thành tổ hợp tuyến tính của $u_1 = (2, 3)$ và $u_2 = (1, -1)$ với hệ số $(c_1, c_2)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(10, 2)$"
      },
      {
        "key": "B",
        "text": "$(6, 1)$"
      },
      {
        "key": "C",
        "text": "$(2, 5)$"
      },
      {
        "key": "D",
        "text": "$(5, 2)$"
      }
    ],
    "correct": "D",
    "explanation": "* Giải hệ phương trình $c_1 (2, 3) + c_2 (1, -1) = (12, 13) \\iff \\begin{cases} 2c_1 + c_2 = 12 \\\\ 3c_1 - c_2 = 13 \\end{cases} \\implies c_1 = 5, c_2 = 2$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 109,
    "originalId": 109,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tập hợp nào dưới đây là một **không gian con** của không gian véc tơ $\\mathbb{R}^3$?",
    "options": [
      {
        "key": "A",
        "text": "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x^2 + y^2 + z^2 = 1\\}$"
      },
      {
        "key": "B",
        "text": "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x + 2y - z = 0\\}$"
      },
      {
        "key": "C",
        "text": "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x + 2y - z = 1\\}$"
      },
      {
        "key": "D",
        "text": "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid xy = 0\\}$"
      }
    ],
    "correct": "B",
    "explanation": "* Không gian con của $\\mathbb{R}^3$ xác định bởi phương trình tuyến tính thuần nhất $ax + by + cz = 0$ (mặt phẳng đi qua gốc tọa độ).\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 110,
    "originalId": 110,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian véc tơ $\\mathbb{R}^3$, tập hợp $W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid 2x - y + 3z = -5\\}$ có phải là không gian con không?",
    "options": [
      {
        "key": "A",
        "text": "Không phải, vì véc tơ không $(0, 0, 0) \\notin W$ do $2(0) - 0 + 3(0) = 0 \\neq -5$"
      },
      {
        "key": "B",
        "text": "Là không gian con vì phương trình là bậc nhất"
      },
      {
        "key": "C",
        "text": "Là không gian con có số chiều bằng 2"
      },
      {
        "key": "D",
        "text": "Không phải, vì $W$ không đóng kín đối với phép nhân với số thực âm"
      }
    ],
    "correct": "A",
    "explanation": "* Điều kiện tiên quyết để $W$ là không gian con là véc tơ không $\\theta = (0, 0, 0)$ phải thuộc $W$. Thay tọa độ $(0,0,0)$ vào phương trình: $0 = -5$ (vô lý vì $-5 \\neq 0$). Do đó $W$ không phải là không gian con.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 111,
    "originalId": 111,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong $\\mathbb{R}^2$, véc tơ $v = (4, 1)$ được phân tích thành tổ hợp tuyến tính của $u_1 = (2, 3)$ và $u_2 = (1, -1)$ với hệ số $(c_1, c_2)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(2, 2)$"
      },
      {
        "key": "B",
        "text": "$(1, 2)$"
      },
      {
        "key": "C",
        "text": "$(2, 1)$"
      },
      {
        "key": "D",
        "text": "$(1, 3)$"
      }
    ],
    "correct": "B",
    "explanation": "* Giải hệ phương trình $c_1 (2, 3) + c_2 (1, -1) = (4, 1) \\iff \\begin{cases} 2c_1 + c_2 = 4 \\\\ 3c_1 - c_2 = 1 \\end{cases} \\implies c_1 = 1, c_2 = 2$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 112,
    "originalId": 112,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian véc tơ $\\mathbb{R}^3$, tập hợp $W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid 2x - y + 3z = -6\\}$ có phải là không gian con không?",
    "options": [
      {
        "key": "A",
        "text": "Là không gian con vì phương trình là bậc nhất"
      },
      {
        "key": "B",
        "text": "Không phải, vì véc tơ không $(0, 0, 0) \\notin W$ do $2(0) - 0 + 3(0) = 0 \\neq -6$"
      },
      {
        "key": "C",
        "text": "Là không gian con có số chiều bằng 2"
      },
      {
        "key": "D",
        "text": "Không phải, vì $W$ không đóng kín đối với phép nhân với số thực âm"
      }
    ],
    "correct": "B",
    "explanation": "* Điều kiện tiên quyết để $W$ là không gian con là véc tơ không $\\theta = (0, 0, 0)$ phải thuộc $W$. Thay tọa độ $(0,0,0)$ vào phương trình: $0 = -6$ (vô lý vì $-6 \\neq 0$). Do đó $W$ không phải là không gian con.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 113,
    "originalId": 113,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong $\\mathbb{R}^2$, véc tơ $v = (8, -3)$ được phân tích thành tổ hợp tuyến tính của $u_1 = (2, 3)$ và $u_2 = (1, -1)$ với hệ số $(c_1, c_2)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(2, 5)$"
      },
      {
        "key": "B",
        "text": "$(6, 1)$"
      },
      {
        "key": "C",
        "text": "$(1, 6)$"
      },
      {
        "key": "D",
        "text": "$(2, 6)$"
      }
    ],
    "correct": "C",
    "explanation": "* Giải hệ phương trình $c_1 (2, 3) + c_2 (1, -1) = (8, -3) \\iff \\begin{cases} 2c_1 + c_2 = 8 \\\\ 3c_1 - c_2 = -3 \\end{cases} \\implies c_1 = 1, c_2 = 6$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 114,
    "originalId": 114,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian véc tơ $\\mathbb{R}^3$, tập hợp $W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid 2x - y + 3z = 3\\}$ có phải là không gian con không?",
    "options": [
      {
        "key": "A",
        "text": "Không phải, vì $W$ không đóng kín đối với phép nhân với số thực âm"
      },
      {
        "key": "B",
        "text": "Là không gian con có số chiều bằng 2"
      },
      {
        "key": "C",
        "text": "Là không gian con vì phương trình là bậc nhất"
      },
      {
        "key": "D",
        "text": "Không phải, vì véc tơ không $(0, 0, 0) \\notin W$ do $2(0) - 0 + 3(0) = 0 \\neq 3$"
      }
    ],
    "correct": "D",
    "explanation": "* Điều kiện tiên quyết để $W$ là không gian con là véc tơ không $\\theta = (0, 0, 0)$ phải thuộc $W$. Thay tọa độ $(0,0,0)$ vào phương trình: $0 = 3$ (vô lý vì $3 \\neq 0$). Do đó $W$ không phải là không gian con.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 115,
    "originalId": 115,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong $\\mathbb{R}^2$, véc tơ $v = (8, 7)$ được phân tích thành tổ hợp tuyến tính của $u_1 = (2, 3)$ và $u_2 = (1, -1)$ với hệ số $(c_1, c_2)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(2, 3)$"
      },
      {
        "key": "B",
        "text": "$(3, 2)$"
      },
      {
        "key": "C",
        "text": "$(4, 1)$"
      },
      {
        "key": "D",
        "text": "$(6, 2)$"
      }
    ],
    "correct": "B",
    "explanation": "* Giải hệ phương trình $c_1 (2, 3) + c_2 (1, -1) = (8, 7) \\iff \\begin{cases} 2c_1 + c_2 = 8 \\\\ 3c_1 - c_2 = 7 \\end{cases} \\implies c_1 = 3, c_2 = 2$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 116,
    "originalId": 116,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong $\\mathbb{R}^2$, véc tơ $v = (16, 9)$ được phân tích thành tổ hợp tuyến tính của $u_1 = (2, 3)$ và $u_2 = (1, -1)$ với hệ số $(c_1, c_2)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(10, 6)$"
      },
      {
        "key": "B",
        "text": "$(6, 5)$"
      },
      {
        "key": "C",
        "text": "$(6, 6)$"
      },
      {
        "key": "D",
        "text": "$(5, 6)$"
      }
    ],
    "correct": "D",
    "explanation": "* Giải hệ phương trình $c_1 (2, 3) + c_2 (1, -1) = (16, 9) \\iff \\begin{cases} 2c_1 + c_2 = 16 \\\\ 3c_1 - c_2 = 9 \\end{cases} \\implies c_1 = 5, c_2 = 6$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 117,
    "originalId": 117,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian véc tơ $\\mathbb{R}^3$, tập hợp $W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid 2x - y + 3z = -2\\}$ có phải là không gian con không?",
    "options": [
      {
        "key": "A",
        "text": "Là không gian con có số chiều bằng 2"
      },
      {
        "key": "B",
        "text": "Là không gian con vì phương trình là bậc nhất"
      },
      {
        "key": "C",
        "text": "Không phải, vì $W$ không đóng kín đối với phép nhân với số thực âm"
      },
      {
        "key": "D",
        "text": "Không phải, vì véc tơ không $(0, 0, 0) \\notin W$ do $2(0) - 0 + 3(0) = 0 \\neq -2$"
      }
    ],
    "correct": "D",
    "explanation": "* Điều kiện tiên quyết để $W$ là không gian con là véc tơ không $\\theta = (0, 0, 0)$ phải thuộc $W$. Thay tọa độ $(0,0,0)$ vào phương trình: $0 = -2$ (vô lý vì $-2 \\neq 0$). Do đó $W$ không phải là không gian con.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 118,
    "originalId": 118,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong $\\mathbb{R}^2$, véc tơ $v = (16, 14)$ được phân tích thành tổ hợp tuyến tính của $u_1 = (2, 3)$ và $u_2 = (1, -1)$ với hệ số $(c_1, c_2)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(12, 4)$"
      },
      {
        "key": "B",
        "text": "$(7, 3)$"
      },
      {
        "key": "C",
        "text": "$(6, 4)$"
      },
      {
        "key": "D",
        "text": "$(4, 6)$"
      }
    ],
    "correct": "C",
    "explanation": "* Giải hệ phương trình $c_1 (2, 3) + c_2 (1, -1) = (16, 14) \\iff \\begin{cases} 2c_1 + c_2 = 16 \\\\ 3c_1 - c_2 = 14 \\end{cases} \\implies c_1 = 6, c_2 = 4$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 119,
    "originalId": 119,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian véc tơ $\\mathbb{R}^3$, tập hợp $W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid 2x - y + 3z = 7\\}$ có phải là không gian con không?",
    "options": [
      {
        "key": "A",
        "text": "Là không gian con có số chiều bằng 2"
      },
      {
        "key": "B",
        "text": "Không phải, vì véc tơ không $(0, 0, 0) \\notin W$ do $2(0) - 0 + 3(0) = 0 \\neq 7$"
      },
      {
        "key": "C",
        "text": "Là không gian con vì phương trình là bậc nhất"
      },
      {
        "key": "D",
        "text": "Không phải, vì $W$ không đóng kín đối với phép nhân với số thực âm"
      }
    ],
    "correct": "B",
    "explanation": "* Điều kiện tiên quyết để $W$ là không gian con là véc tơ không $\\theta = (0, 0, 0)$ phải thuộc $W$. Thay tọa độ $(0,0,0)$ vào phương trình: $0 = 7$ (vô lý vì $7 \\neq 0$). Do đó $W$ không phải là không gian con.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 120,
    "originalId": 120,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong $\\mathbb{R}^2$, véc tơ $v = (13, 17)$ được phân tích thành tổ hợp tuyến tính của $u_1 = (2, 3)$ và $u_2 = (1, -1)$ với hệ số $(c_1, c_2)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(12, 1)$"
      },
      {
        "key": "B",
        "text": "$(1, 6)$"
      },
      {
        "key": "C",
        "text": "$(7, 0)$"
      },
      {
        "key": "D",
        "text": "$(6, 1)$"
      }
    ],
    "correct": "D",
    "explanation": "* Giải hệ phương trình $c_1 (2, 3) + c_2 (1, -1) = (13, 17) \\iff \\begin{cases} 2c_1 + c_2 = 13 \\\\ 3c_1 - c_2 = 17 \\end{cases} \\implies c_1 = 6, c_2 = 1$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 121,
    "originalId": 121,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian véc tơ $\\mathbb{R}^3$, tập hợp $W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid 2x - y + 3z = 2\\}$ có phải là không gian con không?",
    "options": [
      {
        "key": "A",
        "text": "Là không gian con có số chiều bằng 2"
      },
      {
        "key": "B",
        "text": "Không phải, vì véc tơ không $(0, 0, 0) \\notin W$ do $2(0) - 0 + 3(0) = 0 \\neq 2$"
      },
      {
        "key": "C",
        "text": "Không phải, vì $W$ không đóng kín đối với phép nhân với số thực âm"
      },
      {
        "key": "D",
        "text": "Là không gian con vì phương trình là bậc nhất"
      }
    ],
    "correct": "B",
    "explanation": "* Điều kiện tiên quyết để $W$ là không gian con là véc tơ không $\\theta = (0, 0, 0)$ phải thuộc $W$. Thay tọa độ $(0,0,0)$ vào phương trình: $0 = 2$ (vô lý vì $2 \\neq 0$). Do đó $W$ không phải là không gian con.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 122,
    "originalId": 122,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong $\\mathbb{R}^2$, véc tơ $v = (12, 8)$ được phân tích thành tổ hợp tuyến tính của $u_1 = (2, 3)$ và $u_2 = (1, -1)$ với hệ số $(c_1, c_2)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(4, 4)$"
      },
      {
        "key": "B",
        "text": "$(8, 4)$"
      },
      {
        "key": "C",
        "text": "$(5, 3)$"
      },
      {
        "key": "D",
        "text": "$(5, 4)$"
      }
    ],
    "correct": "A",
    "explanation": "* Giải hệ phương trình $c_1 (2, 3) + c_2 (1, -1) = (12, 8) \\iff \\begin{cases} 2c_1 + c_2 = 12 \\\\ 3c_1 - c_2 = 8 \\end{cases} \\implies c_1 = 4, c_2 = 4$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 123,
    "originalId": 123,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian véc tơ $\\mathbb{R}^3$, tập hợp $W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid 2x - y + 3z = 9\\}$ có phải là không gian con không?",
    "options": [
      {
        "key": "A",
        "text": "Là không gian con vì phương trình là bậc nhất"
      },
      {
        "key": "B",
        "text": "Là không gian con có số chiều bằng 2"
      },
      {
        "key": "C",
        "text": "Không phải, vì $W$ không đóng kín đối với phép nhân với số thực âm"
      },
      {
        "key": "D",
        "text": "Không phải, vì véc tơ không $(0, 0, 0) \\notin W$ do $2(0) - 0 + 3(0) = 0 \\neq 9$"
      }
    ],
    "correct": "D",
    "explanation": "* Điều kiện tiên quyết để $W$ là không gian con là véc tơ không $\\theta = (0, 0, 0)$ phải thuộc $W$. Thay tọa độ $(0,0,0)$ vào phương trình: $0 = 9$ (vô lý vì $9 \\neq 0$). Do đó $W$ không phải là không gian con.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 124,
    "originalId": 124,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong $\\mathbb{R}^2$, véc tơ $v = (18, 12)$ được phân tích thành tổ hợp tuyến tính của $u_1 = (2, 3)$ và $u_2 = (1, -1)$ với hệ số $(c_1, c_2)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(7, 5)$"
      },
      {
        "key": "B",
        "text": "$(7, 6)$"
      },
      {
        "key": "C",
        "text": "$(6, 6)$"
      },
      {
        "key": "D",
        "text": "$(12, 6)$"
      }
    ],
    "correct": "C",
    "explanation": "* Giải hệ phương trình $c_1 (2, 3) + c_2 (1, -1) = (18, 12) \\iff \\begin{cases} 2c_1 + c_2 = 18 \\\\ 3c_1 - c_2 = 12 \\end{cases} \\implies c_1 = 6, c_2 = 6$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 125,
    "originalId": 125,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong $\\mathbb{R}^2$, véc tơ $v = (6, -1)$ được phân tích thành tổ hợp tuyến tính của $u_1 = (2, 3)$ và $u_2 = (1, -1)$ với hệ số $(c_1, c_2)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(2, 4)$"
      },
      {
        "key": "B",
        "text": "$(2, 3)$"
      },
      {
        "key": "C",
        "text": "$(1, 4)$"
      },
      {
        "key": "D",
        "text": "$(4, 1)$"
      }
    ],
    "correct": "C",
    "explanation": "* Giải hệ phương trình $c_1 (2, 3) + c_2 (1, -1) = (6, -1) \\iff \\begin{cases} 2c_1 + c_2 = 6 \\\\ 3c_1 - c_2 = -1 \\end{cases} \\implies c_1 = 1, c_2 = 4$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 126,
    "originalId": 126,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian véc tơ $\\mathbb{R}^3$, tập hợp $W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid 2x - y + 3z = 5\\}$ có phải là không gian con không?",
    "options": [
      {
        "key": "A",
        "text": "Là không gian con vì phương trình là bậc nhất"
      },
      {
        "key": "B",
        "text": "Không phải, vì $W$ không đóng kín đối với phép nhân với số thực âm"
      },
      {
        "key": "C",
        "text": "Không phải, vì véc tơ không $(0, 0, 0) \\notin W$ do $2(0) - 0 + 3(0) = 0 \\neq 5$"
      },
      {
        "key": "D",
        "text": "Là không gian con có số chiều bằng 2"
      }
    ],
    "correct": "C",
    "explanation": "* Điều kiện tiên quyết để $W$ là không gian con là véc tơ không $\\theta = (0, 0, 0)$ phải thuộc $W$. Thay tọa độ $(0,0,0)$ vào phương trình: $0 = 5$ (vô lý vì $5 \\neq 0$). Do đó $W$ không phải là không gian con.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 127,
    "originalId": 127,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong $\\mathbb{R}^2$, véc tơ $v = (7, -2)$ được phân tích thành tổ hợp tuyến tính của $u_1 = (2, 3)$ và $u_2 = (1, -1)$ với hệ số $(c_1, c_2)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(2, 4)$"
      },
      {
        "key": "B",
        "text": "$(5, 1)$"
      },
      {
        "key": "C",
        "text": "$(1, 5)$"
      },
      {
        "key": "D",
        "text": "$(2, 5)$"
      }
    ],
    "correct": "C",
    "explanation": "* Giải hệ phương trình $c_1 (2, 3) + c_2 (1, -1) = (7, -2) \\iff \\begin{cases} 2c_1 + c_2 = 7 \\\\ 3c_1 - c_2 = -2 \\end{cases} \\implies c_1 = 1, c_2 = 5$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 128,
    "originalId": 128,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 1,
    "typeId": "2.1",
    "typeName": "Không gian con & Tổ hợp tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong $\\mathbb{R}^2$, véc tơ $v = (9, 11)$ được phân tích thành tổ hợp tuyến tính của $u_1 = (2, 3)$ và $u_2 = (1, -1)$ với hệ số $(c_1, c_2)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(8, 1)$"
      },
      {
        "key": "B",
        "text": "$(1, 4)$"
      },
      {
        "key": "C",
        "text": "$(5, 0)$"
      },
      {
        "key": "D",
        "text": "$(4, 1)$"
      }
    ],
    "correct": "D",
    "explanation": "* Giải hệ phương trình $c_1 (2, 3) + c_2 (1, -1) = (9, 11) \\iff \\begin{cases} 2c_1 + c_2 = 9 \\\\ 3c_1 - c_2 = 11 \\end{cases} \\implies c_1 = 4, c_2 = 1$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 129,
    "originalId": 129,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian $\\mathbb{R}^3$, hệ véc tơ nào dưới đây **độc lập tuyến tính**?",
    "options": [
      {
        "key": "A",
        "text": "$S = \\{(1, 0, 0), \\, (0, 1, 0), \\, (1, 1, 1)\\}$"
      },
      {
        "key": "B",
        "text": "$S = \\{(1, 1, 1), \\, (2, 2, 2), \\, (0, 1, 2)\\}$"
      },
      {
        "key": "C",
        "text": "$S = \\{(1, 0, 0), \\, (0, 1, 0), \\, (0, 0, 1), \\, (1, 2, 3)\\}$"
      },
      {
        "key": "D",
        "text": "$S = \\{(1, 2, 3), \\, (2, 4, 6)\\}$"
      }
    ],
    "correct": "A",
    "explanation": "Xét ma trận lập bởi 3 véc tơ ở phương án A: $M = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 1 & 1 & 1 \\end{bmatrix}$ có $\\det M = 1 \\neq 0$, nên hệ độc lập tuyến tính. B có 2 véc tơ tỉ lệ; C có $(2,2,2) = 2(1,1,1)$; D có 4 véc tơ trong $\\mathbb{R}^3$ nên luôn phụ thuộc tuyến tính.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 130,
    "originalId": 130,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm $m$ để hệ véc tơ $S = \\{(1, 1, 1), \\, (1, 2, 3), \\, (2, 3, m)\\}$ trong $\\mathbb{R}^3$ phụ thuộc tuyến tính:",
    "options": [
      {
        "key": "A",
        "text": "$m = 0$"
      },
      {
        "key": "B",
        "text": "$m \\neq 4$"
      },
      {
        "key": "C",
        "text": "$m = 4$"
      },
      {
        "key": "D",
        "text": "$m = -4$"
      }
    ],
    "correct": "C",
    "explanation": "Tính định thức ma trận lập bởi 3 véc tơ:\n$\\det = \\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ 2 & 3 & m \\end{vmatrix} = 1(2m - 9) - 1(m - 6) + 1(3 - 4) = 2m - 9 - m + 6 - 1 = m - 4$.\nHệ phụ thuộc tuyến tính khi và chỉ khi định thức bằng $0 \\Leftrightarrow m - 4 = 0 \\Leftrightarrow m = 4$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 131,
    "originalId": 131,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Khẳng định nào dưới đây là **sai**?",
    "options": [
      {
        "key": "A",
        "text": "Mọi bộ phận của một hệ véc tơ độc lập tuyến tính đều độc lập tuyến tính"
      },
      {
        "key": "B",
        "text": "Mọi hệ véc tơ chứa véc tơ không $\\vec{0}$ đều phụ thuộc tuyến tính"
      },
      {
        "key": "C",
        "text": "Một hệ véc tơ là phụ thuộc tuyến tính khi và chỉ khi có ít nhất một véc tơ biểu diễn tuyến tính qua các véc tơ còn lại"
      },
      {
        "key": "D",
        "text": "Mọi hệ véc tơ chứa véc tơ không $\\vec{0}$ đều độc lập tuyến tính"
      }
    ],
    "correct": "D",
    "explanation": "Nếu hệ chứa véc tơ không $\\vec{0}$, ta có $1 \\cdot \\vec{0} + 0 \\cdot v_1 + \\dots = \\vec{0}$ với hệ số khác 0, do đó hệ luôn phụ thuộc tuyến tính. Khẳng định A nói 'độc lập tuyến tính' là sai.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 132,
    "originalId": 132,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian $\\mathbb{R}^4$, cho $u = (1, 2, 3, 4)$ và $v = (2, 4, 6, 8)$. Khẳng định nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$\\dim(\\operatorname{span}\\{u, v\\}) = 2$"
      },
      {
        "key": "B",
        "text": "Hệ $\\{u, v\\}$ là một cơ sở của $\\mathbb{R}^4$"
      },
      {
        "key": "C",
        "text": "Hệ $\\{u, v\\}$ phụ thuộc tuyến tính"
      },
      {
        "key": "D",
        "text": "Hệ $\\{u, v\\}$ độc lập tuyến tính"
      }
    ],
    "correct": "C",
    "explanation": "Vì $v = 2u$, hai véc tơ tỉ lệ với nhau nên hệ $\\{u, v\\}$ phụ thuộc tuyến tính.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 133,
    "originalId": 133,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ba véc tơ $u, v, w$ độc lập tuyến tính. Khẳng định nào sau đây đúng về hệ $\\{u + v, \\, v + w, \\, w + u\\}$?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ độc lập khi $u, v, w$ là các véc tơ đơn vị"
      },
      {
        "key": "B",
        "text": "Hệ này luôn phụ thuộc tuyến tính"
      },
      {
        "key": "C",
        "text": "Hệ này cũng độc lập tuyến tính"
      },
      {
        "key": "D",
        "text": "Không đủ dữ kiện để kết luận"
      }
    ],
    "correct": "C",
    "explanation": "Xét ma trận hệ số biểu diễn theo $\\{u, v, w\\}$: $M = \\begin{bmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & 1 \\end{bmatrix}$. Ta có $\\det M = 1(1) + 1(1) = 2 \\neq 0$. Vì $\\det M \\neq 0$, hệ mới cũng độc lập tuyến tính.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 134,
    "originalId": 134,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm tất cả các giá trị của $m$ để hệ véc tơ $S = \\{(1, 1, 1), \\, (1, 2, 3), \\, (2, 3, m)\\}$ độc lập tuyến tính trong $\\mathbb{R}^3$:",
    "options": [
      {
        "key": "A",
        "text": "$m = 4$"
      },
      {
        "key": "B",
        "text": "$m = 0$"
      },
      {
        "key": "C",
        "text": "$m \\neq 2$"
      },
      {
        "key": "D",
        "text": "$m \\neq 4$"
      }
    ],
    "correct": "D",
    "explanation": "* **Kỹ thuật dùng định thức kiểm tra độc lập tuyến tính trong $\\mathbb{R}^n$:**\n  * Hệ $n$ véc tơ trong $\\mathbb{R}^n$ độc lập tuyến tính khi và chỉ khi định thức của ma trận tạo bởi các véc tơ khác không:\n    $$\\det M = \\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ 2 & 3 & m \\end{vmatrix}$$\n  * Biến đổi hàng: $h_2 \\to h_2 - h_1$, $h_3 \\to h_3 - 2h_1$:\n    $$\\det M = \\begin{vmatrix} 1 & 1 & 1 \\\\ 0 & 1 & 2 \\\\ 0 & 1 & m - 2 \\end{vmatrix} = 1 \\cdot (m - 2 - 2) = m - 4$$\n  * Hệ độc lập tuyến tính $\\iff \\det M \\neq 0 \\iff m - 4 \\neq 0 \\iff m \\neq 4$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 135,
    "originalId": 135,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hệ véc tơ $S = \\{u_1, u_2, \\dots, u_m\\}$ trong không gian véc tơ $V$ phụ thuộc tuyến tính khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "Hệ chứa véc tơ không $\\vec{0}$"
      },
      {
        "key": "B",
        "text": "$m > \\dim V$"
      },
      {
        "key": "C",
        "text": "Có ít nhất một véc tơ trong hệ biểu diễn tuyến tính được qua các véc tơ còn lại"
      },
      {
        "key": "D",
        "text": "Mọi véc tơ trong hệ đều biểu diễn tuyến tính được qua các véc tơ còn lại"
      }
    ],
    "correct": "C",
    "explanation": "* **Định lý tương đương của hệ phụ thuộc tuyến tính:**\n  * Hệ $\\{u_1, \\dots, u_m\\}$ phụ thuộc tuyến tính $\\iff$ tồn tại bộ hệ số không đồng thời bằng 0 sao cho $c_1 u_1 + \\dots + c_m u_m = 0$.\n  * Giả sử $c_k \\neq 0$, ta có thể rút $u_k = -\\dfrac{1}{c_k} \\sum_{i \\neq k} c_i u_i$.\n  * Tức là có ít nhất một véc tơ biểu diễn tuyến tính qua các véc tơ còn lại.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 136,
    "originalId": 136,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian $\\mathbb{R}^3$, cho hệ véc tơ $S = \\{(1, 2, 3), \\, (2, 4, 6)\\}$. Hạng của hệ véc tơ này là:",
    "options": [
      {
        "key": "A",
        "text": "$3$"
      },
      {
        "key": "B",
        "text": "$2$"
      },
      {
        "key": "C",
        "text": "$0$"
      },
      {
        "key": "D",
        "text": "$1$"
      }
    ],
    "correct": "D",
    "explanation": "* **Hạng của hệ véc tơ:**\n  * Ta thấy véc tơ thứ hai gấp đôi véc tơ thứ nhất: $(2, 4, 6) = 2 \\cdot (1, 2, 3)$.\n  * Hai véc tơ tỉ lệ nên hệ phụ thuộc tuyến tính. Số véc tơ độc lập tuyến tính tối đa chỉ là 1.\n  * Do đó hạng của hệ véc tơ $r(S) = 1$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 137,
    "originalId": 137,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của tham số $m$ để hệ véc tơ $S = \\{u_1 = (1, 0, 0), \\, u_2 = (1, 1, 0), \\, u_3 = (4, 4, m - -1)\\}$ trong $\\mathbb{R}^3$ **phụ thuộc tuyến tính**:",
    "options": [
      {
        "key": "A",
        "text": "$m = -1$"
      },
      {
        "key": "B",
        "text": "$m = 0$"
      },
      {
        "key": "C",
        "text": "$m = 1$"
      },
      {
        "key": "D",
        "text": "$m \\neq -1$"
      }
    ],
    "correct": "A",
    "explanation": "* Lập ma trận các véc tơ theo dòng hoặc cột. Do ma trận có dạng tam giác dưới, định thức $\\det = 1 \\times 1 \\times (m - -1) = m - -1$. Hệ phụ thuộc tuyến tính khi và chỉ khi $\\det = 0 \\iff m = -1$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 138,
    "originalId": 138,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của tham số $m$ để hệ véc tơ $S = \\{u_1 = (1, 1, 0), \\, u_2 = (0, 1, 1), \\, u_3 = (1, 0, m - -4 + 1)\\} $ trong $\\mathbb{R}^3$ **độc lập tuyến tính**:",
    "options": [
      {
        "key": "A",
        "text": "$m = 0$"
      },
      {
        "key": "B",
        "text": "$m \\neq -4$"
      },
      {
        "key": "C",
        "text": "$m = -4$"
      },
      {
        "key": "D",
        "text": "$m > -4$"
      }
    ],
    "correct": "B",
    "explanation": "* Tính định thức ma trận lập bởi 3 véc tơ: $\\det(A) = m - -4$. Hệ véc tơ độc lập tuyến tính khi và chỉ khi $\\det(A) \\neq 0 \\iff m \\neq -4$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 139,
    "originalId": 139,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian véc tơ $\\mathbb{R}^{2}$, hệ gồm 7 véc tơ bất kỳ luôn có tính chất gì?",
    "options": [
      {
        "key": "A",
        "text": "Luôn là một cơ sở của $\\mathbb{R}^{2}$"
      },
      {
        "key": "B",
        "text": "Luôn phụ thuộc tuyến tính"
      },
      {
        "key": "C",
        "text": "Có thể độc lập tuyến tính nếu không chứa véc tơ không"
      },
      {
        "key": "D",
        "text": "Luôn độc lập tuyến tính"
      }
    ],
    "correct": "B",
    "explanation": "* Số chiều của $\\mathbb{R}^{2}$ bằng 2. Mọi hệ chứa số véc tơ lớn hơn số chiều không gian (tức $7 > 2$) đều luôn **phụ thuộc tuyến tính**.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 140,
    "originalId": 140,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của tham số $m$ để hệ véc tơ $S = \\{u_1 = (1, 0, 0), \\, u_2 = (3, 1, 0), \\, u_3 = (2, 4, m - 6)\\}$ trong $\\mathbb{R}^3$ **phụ thuộc tuyến tính**:",
    "options": [
      {
        "key": "A",
        "text": "$m = 6$"
      },
      {
        "key": "B",
        "text": "$m = -6$"
      },
      {
        "key": "C",
        "text": "$m \\neq 6$"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "A",
    "explanation": "* Lập ma trận các véc tơ theo dòng hoặc cột. Do ma trận có dạng tam giác dưới, định thức $\\det = 1 \\times 1 \\times (m - 6) = m - 6$. Hệ phụ thuộc tuyến tính khi và chỉ khi $\\det = 0 \\iff m = 6$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 141,
    "originalId": 141,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của tham số $m$ để hệ véc tơ $S = \\{u_1 = (1, 1, 0), \\, u_2 = (0, 1, 1), \\, u_3 = (1, 0, m - -3 + 1)\\} $ trong $\\mathbb{R}^3$ **độc lập tuyến tính**:",
    "options": [
      {
        "key": "A",
        "text": "$m = 0$"
      },
      {
        "key": "B",
        "text": "$m = -3$"
      },
      {
        "key": "C",
        "text": "$m > -3$"
      },
      {
        "key": "D",
        "text": "$m \\neq -3$"
      }
    ],
    "correct": "D",
    "explanation": "* Tính định thức ma trận lập bởi 3 véc tơ: $\\det(A) = m - -3$. Hệ véc tơ độc lập tuyến tính khi và chỉ khi $\\det(A) \\neq 0 \\iff m \\neq -3$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 142,
    "originalId": 142,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của tham số $m$ để hệ véc tơ $S = \\{u_1 = (1, 0, 0), \\, u_2 = (4, 1, 0), \\, u_3 = (1, 4, m - -4)\\}$ trong $\\mathbb{R}^3$ **phụ thuộc tuyến tính**:",
    "options": [
      {
        "key": "A",
        "text": "$m = 0$"
      },
      {
        "key": "B",
        "text": "$m \\neq -4$"
      },
      {
        "key": "C",
        "text": "$m = -4$"
      },
      {
        "key": "D",
        "text": "$m = 4$"
      }
    ],
    "correct": "C",
    "explanation": "* Lập ma trận các véc tơ theo dòng hoặc cột. Do ma trận có dạng tam giác dưới, định thức $\\det = 1 \\times 1 \\times (m - -4) = m - -4$. Hệ phụ thuộc tuyến tính khi và chỉ khi $\\det = 0 \\iff m = -4$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 143,
    "originalId": 143,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của tham số $m$ để hệ véc tơ $S = \\{u_1 = (1, 1, 0), \\, u_2 = (0, 1, 1), \\, u_3 = (1, 0, m - 5 + 1)\\} $ trong $\\mathbb{R}^3$ **độc lập tuyến tính**:",
    "options": [
      {
        "key": "A",
        "text": "$m > 5$"
      },
      {
        "key": "B",
        "text": "$m = 0$"
      },
      {
        "key": "C",
        "text": "$m = 5$"
      },
      {
        "key": "D",
        "text": "$m \\neq 5$"
      }
    ],
    "correct": "D",
    "explanation": "* Tính định thức ma trận lập bởi 3 véc tơ: $\\det(A) = m - 5$. Hệ véc tơ độc lập tuyến tính khi và chỉ khi $\\det(A) \\neq 0 \\iff m \\neq 5$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 144,
    "originalId": 144,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian véc tơ $\\mathbb{R}^{3}$, hệ gồm 7 véc tơ bất kỳ luôn có tính chất gì?",
    "options": [
      {
        "key": "A",
        "text": "Luôn phụ thuộc tuyến tính"
      },
      {
        "key": "B",
        "text": "Có thể độc lập tuyến tính nếu không chứa véc tơ không"
      },
      {
        "key": "C",
        "text": "Luôn độc lập tuyến tính"
      },
      {
        "key": "D",
        "text": "Luôn là một cơ sở của $\\mathbb{R}^{3}$"
      }
    ],
    "correct": "A",
    "explanation": "* Số chiều của $\\mathbb{R}^{3}$ bằng 3. Mọi hệ chứa số véc tơ lớn hơn số chiều không gian (tức $7 > 3$) đều luôn **phụ thuộc tuyến tính**.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 145,
    "originalId": 145,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của tham số $m$ để hệ véc tơ $S = \\{u_1 = (1, 0, 0), \\, u_2 = (2, 1, 0), \\, u_3 = (2, 4, m - 6)\\}$ trong $\\mathbb{R}^3$ **phụ thuộc tuyến tính**:",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq 6$"
      },
      {
        "key": "B",
        "text": "$m = 0$"
      },
      {
        "key": "C",
        "text": "$m = -6$"
      },
      {
        "key": "D",
        "text": "$m = 6$"
      }
    ],
    "correct": "D",
    "explanation": "* Lập ma trận các véc tơ theo dòng hoặc cột. Do ma trận có dạng tam giác dưới, định thức $\\det = 1 \\times 1 \\times (m - 6) = m - 6$. Hệ phụ thuộc tuyến tính khi và chỉ khi $\\det = 0 \\iff m = 6$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 146,
    "originalId": 146,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của tham số $m$ để hệ véc tơ $S = \\{u_1 = (1, 1, 0), \\, u_2 = (0, 1, 1), \\, u_3 = (1, 0, m - 1 + 1)\\} $ trong $\\mathbb{R}^3$ **độc lập tuyến tính**:",
    "options": [
      {
        "key": "A",
        "text": "$m = 1$"
      },
      {
        "key": "B",
        "text": "$m = 0$"
      },
      {
        "key": "C",
        "text": "$m \\neq 1$"
      },
      {
        "key": "D",
        "text": "$m > 1$"
      }
    ],
    "correct": "C",
    "explanation": "* Tính định thức ma trận lập bởi 3 véc tơ: $\\det(A) = m - 1$. Hệ véc tơ độc lập tuyến tính khi và chỉ khi $\\det(A) \\neq 0 \\iff m \\neq 1$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 147,
    "originalId": 147,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian véc tơ $\\mathbb{R}^{3}$, hệ gồm 6 véc tơ bất kỳ luôn có tính chất gì?",
    "options": [
      {
        "key": "A",
        "text": "Có thể độc lập tuyến tính nếu không chứa véc tơ không"
      },
      {
        "key": "B",
        "text": "Luôn độc lập tuyến tính"
      },
      {
        "key": "C",
        "text": "Luôn phụ thuộc tuyến tính"
      },
      {
        "key": "D",
        "text": "Luôn là một cơ sở của $\\mathbb{R}^{3}$"
      }
    ],
    "correct": "C",
    "explanation": "* Số chiều của $\\mathbb{R}^{3}$ bằng 3. Mọi hệ chứa số véc tơ lớn hơn số chiều không gian (tức $6 > 3$) đều luôn **phụ thuộc tuyến tính**.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 148,
    "originalId": 148,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của tham số $m$ để hệ véc tơ $S = \\{u_1 = (1, 0, 0), \\, u_2 = (1, 1, 0), \\, u_3 = (3, 4, m - -2)\\}$ trong $\\mathbb{R}^3$ **phụ thuộc tuyến tính**:",
    "options": [
      {
        "key": "A",
        "text": "$m = 0$"
      },
      {
        "key": "B",
        "text": "$m \\neq -2$"
      },
      {
        "key": "C",
        "text": "$m = 2$"
      },
      {
        "key": "D",
        "text": "$m = -2$"
      }
    ],
    "correct": "D",
    "explanation": "* Lập ma trận các véc tơ theo dòng hoặc cột. Do ma trận có dạng tam giác dưới, định thức $\\det = 1 \\times 1 \\times (m - -2) = m - -2$. Hệ phụ thuộc tuyến tính khi và chỉ khi $\\det = 0 \\iff m = -2$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 149,
    "originalId": 149,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian véc tơ $\\mathbb{R}^{2}$, hệ gồm 6 véc tơ bất kỳ luôn có tính chất gì?",
    "options": [
      {
        "key": "A",
        "text": "Luôn là một cơ sở của $\\mathbb{R}^{2}$"
      },
      {
        "key": "B",
        "text": "Có thể độc lập tuyến tính nếu không chứa véc tơ không"
      },
      {
        "key": "C",
        "text": "Luôn độc lập tuyến tính"
      },
      {
        "key": "D",
        "text": "Luôn phụ thuộc tuyến tính"
      }
    ],
    "correct": "D",
    "explanation": "* Số chiều của $\\mathbb{R}^{2}$ bằng 2. Mọi hệ chứa số véc tơ lớn hơn số chiều không gian (tức $6 > 2$) đều luôn **phụ thuộc tuyến tính**.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 150,
    "originalId": 150,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của tham số $m$ để hệ véc tơ $S = \\{u_1 = (1, 0, 0), \\, u_2 = (1, 1, 0), \\, u_3 = (3, 4, m - 6)\\}$ trong $\\mathbb{R}^3$ **phụ thuộc tuyến tính**:",
    "options": [
      {
        "key": "A",
        "text": "$m = -6$"
      },
      {
        "key": "B",
        "text": "$m \\neq 6$"
      },
      {
        "key": "C",
        "text": "$m = 6$"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "C",
    "explanation": "* Lập ma trận các véc tơ theo dòng hoặc cột. Do ma trận có dạng tam giác dưới, định thức $\\det = 1 \\times 1 \\times (m - 6) = m - 6$. Hệ phụ thuộc tuyến tính khi và chỉ khi $\\det = 0 \\iff m = 6$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 151,
    "originalId": 151,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của tham số $m$ để hệ véc tơ $S = \\{u_1 = (1, 1, 0), \\, u_2 = (0, 1, 1), \\, u_3 = (1, 0, m - -1 + 1)\\} $ trong $\\mathbb{R}^3$ **độc lập tuyến tính**:",
    "options": [
      {
        "key": "A",
        "text": "$m > -1$"
      },
      {
        "key": "B",
        "text": "$m \\neq -1$"
      },
      {
        "key": "C",
        "text": "$m = -1$"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "B",
    "explanation": "* Tính định thức ma trận lập bởi 3 véc tơ: $\\det(A) = m - -1$. Hệ véc tơ độc lập tuyến tính khi và chỉ khi $\\det(A) \\neq 0 \\iff m \\neq -1$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 152,
    "originalId": 152,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian véc tơ $\\mathbb{R}^{3}$, hệ gồm 4 véc tơ bất kỳ luôn có tính chất gì?",
    "options": [
      {
        "key": "A",
        "text": "Có thể độc lập tuyến tính nếu không chứa véc tơ không"
      },
      {
        "key": "B",
        "text": "Luôn là một cơ sở của $\\mathbb{R}^{3}$"
      },
      {
        "key": "C",
        "text": "Luôn độc lập tuyến tính"
      },
      {
        "key": "D",
        "text": "Luôn phụ thuộc tuyến tính"
      }
    ],
    "correct": "D",
    "explanation": "* Số chiều của $\\mathbb{R}^{3}$ bằng 3. Mọi hệ chứa số véc tơ lớn hơn số chiều không gian (tức $4 > 3$) đều luôn **phụ thuộc tuyến tính**.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 153,
    "originalId": 153,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 2,
    "typeId": "2.2",
    "typeName": "Độc lập tuyến tính & Phụ thuộc tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của tham số $m$ để hệ véc tơ $S = \\{u_1 = (1, 0, 0), \\, u_2 = (1, 1, 0), \\, u_3 = (4, 4, m - 3)\\}$ trong $\\mathbb{R}^3$ **phụ thuộc tuyến tính**:",
    "options": [
      {
        "key": "A",
        "text": "$m = 3$"
      },
      {
        "key": "B",
        "text": "$m = 0$"
      },
      {
        "key": "C",
        "text": "$m = -3$"
      },
      {
        "key": "D",
        "text": "$m \\neq 3$"
      }
    ],
    "correct": "A",
    "explanation": "* Lập ma trận các véc tơ theo dòng hoặc cột. Do ma trận có dạng tam giác dưới, định thức $\\det = 1 \\times 1 \\times (m - 3) = m - 3$. Hệ phụ thuộc tuyến tính khi và chỉ khi $\\det = 0 \\iff m = 3$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 154,
    "originalId": 16,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho không gian véc tơ con của $\\mathbb{R}^4$:\n$$U = \\{(x, y, z, t) \\mid x + 2y + z - 3z = 0\\}$$\nKhẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$\\dim U = 3$"
      },
      {
        "key": "B",
        "text": "$\\dim U = 1$"
      },
      {
        "key": "C",
        "text": "$\\dim U = 2$"
      },
      {
        "key": "D",
        "text": "$\\dim U = 4$"
      }
    ],
    "correct": "A",
    "explanation": "* Phương trình ràng buộc rút gọn thành: $x + 2y - 2z = 0$ (với $t$ hoàn toàn tự do).\n* Trong không gian 4 chiều $\\mathbb{R}^4$, tập nghiệm của một phương trình tuyến tính thuần nhất khác không luôn có số chiều bằng:\n  $$\\dim U = n - r = 4 - 1 = 3$$\n* 3 ẩn tự do có thể chọn là $y, z, t$.\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 155,
    "originalId": 38,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho $W_1, W_2$ là các không gian véc tơ con của $\\mathbb{R}^3$. Khẳng định nào dưới đây **không đúng**?",
    "options": [
      {
        "key": "A",
        "text": "Nếu $W_1 = \\{(x, y, 0) \\mid x, y \\in \\mathbb{R}\\}; \\, W_2 = \\{(x, y, z) \\mid x - y + 2z = 0\\}$ thì $\\mathbb{R}^3 = W_1 \\oplus W_2$"
      },
      {
        "key": "B",
        "text": "$W_1 + W_2$ là tổng trực tiếp khi và chỉ khi $\\dim(W_1 \\cap W_2) = 0$"
      },
      {
        "key": "C",
        "text": "Nếu $W_1 = \\{(x, y, 0) \\mid x, y \\in \\mathbb{R}\\}; \\, W_2 = \\{(0, y, y) \\mid y \\in \\mathbb{R}\\}$ thì $\\mathbb{R}^3 = W_1 \\oplus W_2$"
      },
      {
        "key": "D",
        "text": "Nếu $\\mathbb{R}^3 = W_1 \\oplus W_2$ thì $\\dim W_1 + \\dim W_2 = 3$"
      }
    ],
    "correct": "A",
    "explanation": "* Xét phương án A:\n  * $W_1$ là mặt phẳng $z = 0$, có $\\dim W_1 = 2$.\n  * $W_2$ là mặt phẳng $x - y + 2z = 0$, có $\\dim W_2 = 2$.\n  * Giao $W_1 \\cap W_2$ gồm các véc tơ thỏa mãn $z = 0$ và $x - y = 0 \\implies x = y$.\n  * Véc tơ $(1, 1, 0) \\in W_1 \\cap W_2 \\implies W_1 \\cap W_2 \\neq \\{\\vec{0}\\}$.\n  * Vì giao khác $\\{\\vec{0}\\}$ (có số chiều bằng 1), $W_1 + W_2$ không thể là tổng trực tiếp $W_1 \\oplus W_2$.\n* Do đó khẳng định A là **không đúng**.\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 156,
    "originalId": 28,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Đặt $V_1, V_2$ lần lượt là hai không gian véctơ con của $\\mathbb{R}^4$ gồm các véctơ $v = (x_1, x_2, x_3, x_4)$ thoả mãn hệ phương trình (I) và hệ phương trình (II):\n$$(I) = \\begin{cases} 4x_1 + 5x_2 - 2x_3 + 3x_4 = 0 \\\\ 3x_1 + 5x_2 + 6x_3 - 4x_4 = 0 \\\\ x_1 + 2x_2 + 4x_3 - 3x_4 = 0 \\end{cases}, \\quad (II) = \\begin{cases} 2x_1 - 3x_2 - 3x_3 - 2x_4 = 0 \\\\ 4x_1 - 7x_2 - 5x_3 - 6x_4 = 0 \\\\ x_1 - 2x_2 - x_3 - 2x_4 = 0 \\end{cases}$$\nTìm số chiều của không gian con $V_1 + V_2$:",
    "options": [
      {
        "key": "A",
        "text": "$\\dim(V_1 + V_2) = 2$"
      },
      {
        "key": "B",
        "text": "$\\dim(V_1 + V_2) = 3$"
      },
      {
        "key": "C",
        "text": "$\\dim(V_1 + V_2) = 1$"
      },
      {
        "key": "D",
        "text": "$\\dim(V_1 + V_2) = 4$"
      }
    ],
    "correct": "B",
    "explanation": "* Áp dụng công thức số chiều Grassman:\n  $$\\dim(V_1 + V_2) = \\dim V_1 + \\dim V_2 - \\dim(V_1 \\cap V_2)$$\n* **Tính $\\dim V_1$:** Biến đổi ma trận hệ số của hệ (I):\n  Hạng ma trận $r(A_1) = 2 \\implies \\dim V_1 = 4 - r(A_1) = 4 - 2 = 2$.\n* **Tính $\\dim V_2$:** Biến đổi ma trận hệ số của hệ (II):\n  Hạng ma trận $r(A_2) = 2 \\implies \\dim V_2 = 4 - r(A_2) = 4 - 2 = 2$.\n* **Tính $\\dim(V_1 \\cap V_2)$:** $V_1 \\cap V_2$ là không gian nghiệm của hệ gồm cả 6 phương trình của (I) và (II).\n  Khử Gauss cho ma trận ghép gồm các hàng độc lập của (I) và (II) ta được hạng của hệ ghép là $r(A_1 \\cup A_2) = 3$.\n  Do đó $\\dim(V_1 \\cap V_2) = 4 - 3 = 1$.\n* Vậy $\\dim(V_1 + V_2) = 2 + 2 - 1 = 3$.\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 157,
    "originalId": 38,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Cho $V = \\langle (1,1,1), (2,1,0), (5,3,1) \\rangle$. Khẳng định nào sau đây **luôn đúng**?",
    "options": [
      {
        "key": "A",
        "text": "$(1,1,1), (0,0,1)$ là cơ sở của $V$"
      },
      {
        "key": "B",
        "text": "$\\dim V = 3$"
      },
      {
        "key": "C",
        "text": "$(1, 0, -1) \\in V$"
      },
      {
        "key": "D",
        "text": "Tất cả đều sai"
      }
    ],
    "correct": "C",
    "explanation": "* Nhận xét quan hệ giữa các véctơ sinh của $V$:\n  $$(5, 3, 1) = 1 \\cdot (1, 1, 1) + 2 \\cdot (2, 1, 0)$$\n  Do đó véctơ thứ 3 là tổ hợp tuyến tính của 2 véctơ đầu, suy ra $\\dim V = 2$, với cơ sở là $\\{u_1 = (1, 1, 1), u_2 = (2, 1, 0)\\}$.\n* Kiểm tra véctơ $w = (1, 0, -1)$:\n  Ta có:\n  $$-1 \\cdot (1, 1, 1) + 1 \\cdot (2, 1, 0) = (-1 + 2, -1 + 1, -1 + 0) = (1, 0, -1)$$\n  Vì $(1, 0, -1)$ biểu diễn được thành tổ hợp tuyến tính của cơ sở của $V$, nên $(1, 0, -1) \\in V$.\n* **Chọn đáp án: C.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 158,
    "originalId": 158,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Số chiều của không gian véc tơ các ma trận vuông cỡ $3 \\times 3$, ký hiệu $M_{3}(\\mathbb{R})$, là:",
    "options": [
      {
        "key": "A",
        "text": "$8$"
      },
      {
        "key": "B",
        "text": "$9$"
      },
      {
        "key": "C",
        "text": "$3$"
      },
      {
        "key": "D",
        "text": "$6$"
      }
    ],
    "correct": "B",
    "explanation": "Không gian các ma trận $M_{m \\times n}(\\mathbb{R})$ có số chiều bằng $m \\times n$. Do đó $\\dim M_3(\\mathbb{R}) = 3 \\times 3 = 9$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 159,
    "originalId": 159,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Số chiều của không gian véc tơ các đa thức $P_n$ có bậc không vượt quá $n$ là:",
    "options": [
      {
        "key": "A",
        "text": "$n + 1$"
      },
      {
        "key": "B",
        "text": "$n$"
      },
      {
        "key": "C",
        "text": "$n - 1$"
      },
      {
        "key": "D",
        "text": "$2n$"
      }
    ],
    "correct": "A",
    "explanation": "Cơ sở chính tắc của $P_n$ là $\\{1, x, x^2, \\dots, x^n\\}$, gồm đúng $n + 1$ phần tử. Do đó $\\dim P_n = n + 1$.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 160,
    "originalId": 160,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Số lượng véc tơ tối đa trong một hệ véc tơ độc lập tuyến tính của không gian $\\mathbb{R}^n$ là:",
    "options": [
      {
        "key": "A",
        "text": "$n$"
      },
      {
        "key": "B",
        "text": "Vô hạn"
      },
      {
        "key": "C",
        "text": "$n - 1$"
      },
      {
        "key": "D",
        "text": "$n + 1$"
      }
    ],
    "correct": "A",
    "explanation": "Trong một không gian véc tơ $n$ chiều, mọi hệ gồm nhiều hơn $n$ véc tơ đều phụ thuộc tuyến tính. Do đó số lượng véc tơ tối đa độc lập tuyến tính là đúng $n$ (bằng số chiều của không gian).\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 161,
    "originalId": 161,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hai không gian con $W_1, W_2$ của không gian $\\mathbb{R}^6$ có $\\dim W_1 = 4, \\dim W_2 = 3$ và $\\dim(W_1 + W_2) = 5$. Số chiều của không gian giao $\\dim(W_1 \\cap W_2)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$3$"
      },
      {
        "key": "B",
        "text": "$1$"
      },
      {
        "key": "C",
        "text": "$2$"
      },
      {
        "key": "D",
        "text": "$0$"
      }
    ],
    "correct": "C",
    "explanation": "Theo công thức số chiều Grassmann: $\\dim(W_1 + W_2) = \\dim W_1 + \\dim W_2 - \\dim(W_1 \\cap W_2)$. Suy ra $\\dim(W_1 \\cap W_2) = 4 + 3 - 5 = 2$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 162,
    "originalId": 162,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho $W_1$ và $W_2$ là hai không gian véc tơ con. Tổng $W_1 + W_2$ là **tổng trực tiếp** $W_1 \\oplus W_2$ khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$W_1 \\cap W_2 = \\{\\vec{0}\\}$"
      },
      {
        "key": "B",
        "text": "$\\dim(W_1) = \\dim(W_2)$"
      },
      {
        "key": "C",
        "text": "$W_1 \\cup W_2 = V$"
      },
      {
        "key": "D",
        "text": "$W_1 \\cap W_2 = \\emptyset$"
      }
    ],
    "correct": "A",
    "explanation": "Theo định nghĩa, tổng của hai không gian con là tổng trực tiếp khi và chỉ khi giao của chúng chỉ gồm duy nhất véc tơ không: $W_1 \\cap W_2 = \\{\\vec{0}\\}$ (tức $\\dim(W_1 \\cap W_2) = 0$).\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 163,
    "originalId": 163,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cơ sở chính tắc của không gian đa thức $P_2$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\{1, x, x^2\\}$"
      },
      {
        "key": "B",
        "text": "$\\{1+x, x+x^2, 1+x^2\\}$"
      },
      {
        "key": "C",
        "text": "$\\{x, x^2\\}$"
      },
      {
        "key": "D",
        "text": "$\\{1, x\\}$"
      }
    ],
    "correct": "A",
    "explanation": "Mọi đa thức bậc không quá 2 có dạng $a_0 + a_1 x + a_2 x^2$, biểu diễn duy nhất qua hệ đơn thức $\\{1, x, x^2\\}$. Đây chính là cơ sở chính tắc của $P_2$.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 164,
    "originalId": 164,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Số chiều của không gian véc tơ con các ma trận đối xứng cấp 2 trong $M_2(\\mathbb{R})$ là:",
    "options": [
      {
        "key": "A",
        "text": "$2$"
      },
      {
        "key": "B",
        "text": "$4$"
      },
      {
        "key": "C",
        "text": "$3$"
      },
      {
        "key": "D",
        "text": "$1$"
      }
    ],
    "correct": "C",
    "explanation": "Ma trận đối xứng cấp 2 có dạng $\\begin{bmatrix} a & b \\\\ b & d \\end{bmatrix}$, phụ thuộc vào 3 tham số tự do $a, b, d$. Do đó số chiều của không gian này là 3.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 165,
    "originalId": 165,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hệ véc tơ nào dưới đây là một **cơ sở** của $\\mathbb{R}^2$?",
    "options": [
      {
        "key": "A",
        "text": "$\\{(1, 2), \\, (3, 4)\\}$"
      },
      {
        "key": "B",
        "text": "$\\{(1, 2), \\, (2, 4)\\}$"
      },
      {
        "key": "C",
        "text": "$\\{(1, 0)\\}$"
      },
      {
        "key": "D",
        "text": "$\\{(1, 1), \\, (2, 2), \\, (3, 3)\\}$"
      }
    ],
    "correct": "A",
    "explanation": "Hai véc tơ trong $\\mathbb{R}^2$ lập thành một cơ sở khi và chỉ khi chúng độc lập tuyến tính, tức định thức $\\begin{vmatrix} 1 & 3 \\\\ 2 & 4 \\end{vmatrix} = 4 - 6 = -2 \\neq 0$. B có 2 véc tơ tỉ lệ; C chỉ có 1 véc tơ; D có 3 véc tơ.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 166,
    "originalId": 166,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho $V$ là không gian véc tơ $n$ chiều và $S$ là một hệ gồm đúng $n$ véc tơ của $V$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$S$ độc lập tuyến tính chưa chắc đã là cơ sở của $V$"
      },
      {
        "key": "B",
        "text": "$S$ sinh ra $V$ chưa chắc đã là cơ sở của $V$"
      },
      {
        "key": "C",
        "text": "$S$ là cơ sở của $V$ khi và chỉ khi $S$ độc lập tuyến tính"
      },
      {
        "key": "D",
        "text": "$S$ luôn luôn là một cơ sở của $V$"
      }
    ],
    "correct": "C",
    "explanation": "Trong không gian $n$ chiều, một hệ gồm đúng $n$ véc tơ là cơ sở khi và chỉ khi nó độc lập tuyến tính (hoặc tương đương khi và chỉ khi nó là hệ sinh).\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 167,
    "originalId": 167,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm một cơ sở của không gian nghiệm của phương trình $x - 2y + 3z = 0$ trong $\\mathbb{R}^3$:",
    "options": [
      {
        "key": "A",
        "text": "$\\{(2, 1, 0), \\, (-3, 0, 1)\\}$"
      },
      {
        "key": "B",
        "text": "$\\{(1, -2, 3)\\}$"
      },
      {
        "key": "C",
        "text": "$\\{(1, 0, 0), \\, (0, 1, 0)\\}$"
      },
      {
        "key": "D",
        "text": "$\\{(2, 1, 0), \\, (3, 0, 1)\\}$"
      }
    ],
    "correct": "A",
    "explanation": "Từ $x = 2y - 3z$, mỗi nghiệm có dạng $(2y - 3z, y, z) = y(2, 1, 0) + z(-3, 0, 1)$. Hai véc tơ $(2, 1, 0)$ và $(-3, 0, 1)$ độc lập tuyến tính và tạo thành một cơ sở.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 168,
    "originalId": 168,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hạng của một hệ véc tơ $S = \\{v_1, v_2, \\dots, v_k\\}$ được định nghĩa là:",
    "options": [
      {
        "key": "A",
        "text": "Số chiều của không gian chứa hệ $S$"
      },
      {
        "key": "B",
        "text": "Số véc tơ khác không trong hệ"
      },
      {
        "key": "C",
        "text": "Số lượng tối đa các véc tơ độc lập tuyến tính trong hệ $S$"
      },
      {
        "key": "D",
        "text": "Tổng số véc tơ $k$ trong hệ"
      }
    ],
    "correct": "C",
    "explanation": "Hạng của một hệ véc tơ là số chiều của không gian con sinh bởi hệ đó, và bằng số lượng véc tơ độc lập tuyến tính cực đại có trong hệ.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 169,
    "originalId": 169,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho $W = \\operatorname{span}\\{(1, 2, 1), \\, (2, 4, 2)\\}$. Số chiều $\\dim W$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$2$"
      },
      {
        "key": "B",
        "text": "$1$"
      },
      {
        "key": "C",
        "text": "$3$"
      },
      {
        "key": "D",
        "text": "$0$"
      }
    ],
    "correct": "B",
    "explanation": "Véc tơ thứ hai gấp 2 lần véc tơ thứ nhất: $(2, 4, 2) = 2(1, 2, 1)$. Do đó hệ sinh chỉ có 1 véc tơ độc lập tuyến tính, suy ra $\\dim W = 1$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 170,
    "originalId": 170,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho $V$ là không gian véc tơ và $W$ là không gian con của $V$. Khẳng định nào sau đây là **đúng**?",
    "options": [
      {
        "key": "A",
        "text": "$\\dim W \\le \\dim V$"
      },
      {
        "key": "B",
        "text": "Nếu $\\dim W = \\dim V$ (với $V$ hữu hạn chiều) thì $W$ chưa chắc bằng $V$"
      },
      {
        "key": "C",
        "text": "$\\dim W$ luôn nhỏ hơn hẳn $\\dim V$"
      },
      {
        "key": "D",
        "text": "$\\dim W > \\dim V$"
      }
    ],
    "correct": "A",
    "explanation": "Số chiều của không gian con không bao giờ vượt quá số chiều của không gian chứa nó: $\\dim W \\le \\dim V$. Hơn nữa, nếu $\\dim W = \\dim V$ (hữu hạn chiều) thì $W = V$.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 171,
    "originalId": 171,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Không gian con sinh bởi tập rỗng $\\operatorname{span}(\\emptyset)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$\\{\\vec{0}\\}$ (không gian tầm thường)"
      },
      {
        "key": "B",
        "text": "Không xác định"
      },
      {
        "key": "C",
        "text": "$\\emptyset$"
      },
      {
        "key": "D",
        "text": "Toàn bộ không gian $V$"
      }
    ],
    "correct": "A",
    "explanation": "Theo quy ước chuẩn của đại số tuyến tính, tổ hợp tuyến tính rỗng bằng véc tơ không $\\vec{0}$, do đó $\\operatorname{span}(\\emptyset) = \\{\\vec{0}\\}$ và $\\dim(\\{\\vec{0}\\}) = 0$.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 172,
    "originalId": 172,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Số chiều của không gian con các ma trận phản đối xứng cấp 3 ($A^T = -A$) trong $M_3(\\mathbb{R})$ là:",
    "options": [
      {
        "key": "A",
        "text": "$1$"
      },
      {
        "key": "B",
        "text": "$3$"
      },
      {
        "key": "C",
        "text": "$6$"
      },
      {
        "key": "D",
        "text": "$9$"
      }
    ],
    "correct": "B",
    "explanation": "Ma trận phản đối xứng cấp 3 có đường chéo chính bằng $0$ ($a_{11}=a_{22}=a_{33}=0$) và $a_{ji} = -a_{ij}$, nên hoàn toàn được xác định bởi 3 phần tử ở tam giác trên: $a_{12}, a_{13}, a_{23}$. Do đó số chiều bằng 3.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 173,
    "originalId": 173,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ véc tơ $S = \\{(1, 0, 1), \\, (0, 1, 1), \\, (1, 1, 2)\\}$. Khẳng định nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Hệ sinh ra toàn bộ $\\mathbb{R}^3$"
      },
      {
        "key": "B",
        "text": "Hệ độc lập tuyến tính và là một cơ sở của $\\mathbb{R}^3$"
      },
      {
        "key": "C",
        "text": "$\\dim(\\operatorname{span}(S)) = 3$"
      },
      {
        "key": "D",
        "text": "Véc tơ thứ ba bằng tổng hai véc tơ đầu, hệ phụ thuộc tuyến tính"
      }
    ],
    "correct": "D",
    "explanation": "Ta thấy $(1, 0, 1) + (0, 1, 1) = (1, 1, 2)$. Vì một véc tơ là tổng của hai véc tơ kia, hệ phụ thuộc tuyến tính và $\\dim(\\operatorname{span}(S)) = 2 < 3$.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 174,
    "originalId": 174,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho $V$ là không gian véc tơ có $\\dim V = 3$. Hệ nào sau đây chắc chắn **không thể** sinh ra $V$?",
    "options": [
      {
        "key": "A",
        "text": "Một hệ gồm 2 véc tơ"
      },
      {
        "key": "B",
        "text": "Một hệ gồm 5 véc tơ"
      },
      {
        "key": "C",
        "text": "Một hệ gồm 4 véc tơ"
      },
      {
        "key": "D",
        "text": "Một hệ gồm 3 véc tơ"
      }
    ],
    "correct": "A",
    "explanation": "Trong không gian $n$ chiều, một hệ sinh phải có ít nhất $n$ véc tơ. Ở đây $\\dim V = 3$, do đó bất kỳ hệ nào có ít hơn 3 véc tơ (như hệ gồm 2 véc tơ) đều không thể sinh ra $V$.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 175,
    "originalId": 175,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Một hệ gồm $4$ véc tơ trong không gian $\\mathbb{R}^3$ có tính chất nào dưới đây?",
    "options": [
      {
        "key": "A",
        "text": "Luôn là một cơ sở của $\\mathbb{R}^3$"
      },
      {
        "key": "B",
        "text": "Luôn luôn phụ thuộc tuyến tính"
      },
      {
        "key": "C",
        "text": "Luôn luôn độc lập tuyến tính"
      },
      {
        "key": "D",
        "text": "Chắc chắn không sinh ra $\\mathbb{R}^3$"
      }
    ],
    "correct": "B",
    "explanation": "* **Định lý về số lượng véc tơ và số chiều:**\n  * Trong không gian véc tơ $n$ chiều ($V = \\mathbb{R}^n$), mọi hệ gồm $m$ véc tơ với $m > n$ đều **phụ thuộc tuyến tính**.\n  * Ở đây không gian $\\mathbb{R}^3$ có số chiều bằng $3$. Một hệ có $4 > 3$ véc tơ nên chắc chắn phụ thuộc tuyến tính.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 176,
    "originalId": 176,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho $W_1$ và $W_2$ là hai không gian véc tơ con của $\\mathbb{R}^5$ với $\\dim W_1 = 3, \\dim W_2 = 3$ và $\\dim(W_1 + W_2) = 4$. Số chiều của giao $\\dim(W_1 \\cap W_2)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$1$"
      },
      {
        "key": "B",
        "text": "$3$"
      },
      {
        "key": "C",
        "text": "$0$"
      },
      {
        "key": "D",
        "text": "$2$"
      }
    ],
    "correct": "D",
    "explanation": "* **Công thức số chiều Grassmann:**\n  $$\\dim(W_1 + W_2) = \\dim W_1 + \\dim W_2 - \\dim(W_1 \\cap W_2)$$\n* Thay số vào công thức:\n  $$4 = 3 + 3 - \\dim(W_1 \\cap W_2) \\implies \\dim(W_1 \\cap W_2) = 6 - 4 = 2$$\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 177,
    "originalId": 177,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Số chiều của không gian véc tơ các đa thức $P_n$ có bậc không vượt quá $n$ với hệ số thực là:",
    "options": [
      {
        "key": "A",
        "text": "$n - 1$"
      },
      {
        "key": "B",
        "text": "$n$"
      },
      {
        "key": "C",
        "text": "$2n$"
      },
      {
        "key": "D",
        "text": "$n + 1$"
      }
    ],
    "correct": "D",
    "explanation": "* **Cơ sở chính tắc của không gian đa thức $P_n$:**\n  * Một đa thức $p(x) \\in P_n$ có dạng $a_0 + a_1 x + a_2 x^2 + \\dots + a_n x^n$.\n  * Cơ sở chính tắc của $P_n$ là:\n    $$E = \\{1, \\\\, x, \\\\, x^2, \\\\, \\\\dots, \\\\, x^n\\}$$\n  * Hệ cơ sở này gồm có đúng $n + 1$ phần tử, do đó $\\dim P_n = n + 1$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 178,
    "originalId": 178,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tổng của hai không gian con $W_1 + W_2$ là **tổng trực tiếp** ($W_1 \\oplus W_2$) khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$W_1 + W_2 = V$"
      },
      {
        "key": "B",
        "text": "$W_1 \\cap W_2 = \\{\\vec{0}\\}$"
      },
      {
        "key": "C",
        "text": "$\\dim W_1 = \\dim W_2$"
      },
      {
        "key": "D",
        "text": "$W_1 \\cap W_2 = \\emptyset$"
      }
    ],
    "correct": "B",
    "explanation": "* **Định nghĩa tổng trực tiếp:**\n  * $W_1 + W_2$ được gọi là tổng trực tiếp, ký hiệu $W_1 \\oplus W_2$, khi và chỉ khi giao của hai không gian con chỉ chứa duy nhất phần tử không:\n    $$W_1 \\cap W_2 = \\{\\vec{0}\\}$$\n  * Điều này tương đương với $\\dim(W_1 \\cap W_2) = 0$, hay $\\dim(W_1 + W_2) = \\dim W_1 + \\dim W_2$.\n  * Lưu ý: Giao của hai không gian con không bao giờ bằng $\\emptyset$ vì luôn chứa $\\vec{0}$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 179,
    "originalId": 179,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 3,
    "typeId": "2.3",
    "typeName": "Cơ sở & Số chiều của Không gian véc tơ",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm một cơ sở của không gian con $W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x + 2y - z = 0\\}$:",
    "options": [
      {
        "key": "A",
        "text": "$\\{(-2, 1, 0), \\, (0, 1, 2)\\}$"
      },
      {
        "key": "B",
        "text": "$\\{(1, 0, 0), \\, (0, 1, 0)\\}$"
      },
      {
        "key": "C",
        "text": "$\\{(1, 2, -1)\\}$"
      },
      {
        "key": "D",
        "text": "$\\{(-2, 1, 0), \\, (1, 0, 1)\\}$"
      }
    ],
    "correct": "D",
    "explanation": "* **Kỹ thuật tìm cơ sở của mặt phẳng nghiệm:**\n  * Rút $z = x + 2y$ theo hai tham số tự do $x, y$:\n    $$(x, y, z) = (x, y, x + 2y) = x(1, 0, 1) + y(0, 1, 2)$$\n  * Hoặc rút $x = -2y + z$:\n    $$(x, y, z) = (-2y + z, y, z) = y(-2, 1, 0) + z(1, 0, 1)$$\n  * Hai véc tơ $u_1 = (-2, 1, 0)$ và $u_2 = (1, 0, 1)$ đều thuộc $W$, độc lập tuyến tính (không tỉ lệ) và sinh ra $W$.\n  * Do đó $\\{(-2, 1, 0), (1, 0, 1)\\}$ là một cơ sở của $W$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 180,
    "originalId": 12,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho $B = \\{(1, -3), \\, (-2, 4)\\}$ là một cơ sở của không gian véc tơ $\\mathbb{R}^2$. Ma trận chuyển từ cơ sở $B$ sang cơ sở chính tắc của $\\mathbb{R}^2$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} -2 & -3/2 \\\\ -1 & -1/2 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} -2 & -1 \\\\ -3/2 & -1/2 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 1 & -2 \\\\ -3 & 4 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 4 & 2 \\\\ 3 & 1 \\end{bmatrix}$"
      }
    ],
    "correct": "B",
    "explanation": "* Ma trận chuyển từ cơ sở chính tắc $E$ sang cơ sở $B$ có các cột là tọa độ của các véc tơ trong $B$:\n  $$P_{E \\to B} = \\begin{bmatrix} 1 & -2 \\\\ -3 & 4 \\end{bmatrix}$$\n* Ma trận chuyển từ cơ sở $B$ sang cơ sở chính tắc $E$ là ma trận nghịch đảo:\n  $$P_{B \\to E} = (P_{E \\to B})^{-1}$$\n* Ta có $\\det P_{E \\to B} = 1(4) - (-2)(-3) = 4 - 6 = -2$.\n* Nghịch đảo:\n  $$(P_{E \\to B})^{-1} = -\\frac{1}{2} \\begin{bmatrix} 4 & 2 \\\\ 3 & 1 \\end{bmatrix} = \\begin{bmatrix} -2 & -1 \\\\ -3/2 & -1/2 \\end{bmatrix}$$\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 181,
    "originalId": 13,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Với giá trị nào của $a$ thì $x = (1, 2, a)$ thuộc vào không gian con sinh bởi các véc tơ $(3, 1, 2), (-1, 1, -2), (2, -1, 3)$ của $\\mathbb{R}^3$?",
    "options": [
      {
        "key": "A",
        "text": "$a = -1$"
      },
      {
        "key": "B",
        "text": "$a \\neq 1$"
      },
      {
        "key": "C",
        "text": "$a = 1$"
      },
      {
        "key": "D",
        "text": "$a \\neq -1$"
      }
    ],
    "correct": "A",
    "explanation": "* Đặt $v_1 = (3, 1, 2), v_2 = (-1, 1, -2), v_3 = (2, -1, 3)$. Ta thấy:\n  $$v_1 + v_2 = (2, 2, 0) = (2, -1, 3) + (0, 3, -3)$$\n* Xét định thức lập bởi 3 véc tơ sinh:\n  $$\\begin{vmatrix} 3 & -1 & 2 \\\\ 1 & 1 & -1 \\\\ 2 & -2 & 3 \\end{vmatrix} = 3(3 - 2) - (-1)(3 + 2) + 2(-2 - 2) = 3 + 5 - 8 = 0$$\n  Suy ra 3 véc tơ này phụ thuộc tuyến tính, không gian sinh $W = \\operatorname{Span}\\{v_1, v_2\\}$ có số chiều bằng $2$.\n* Véc tơ pháp tuyến của mặt phẳng $W$: $n = v_1 \\times v_2 = (-4, 4, 4) \\sim (1, -1, -1)$.\n* Phương trình mặt phẳng $W$: $x - y - z = 0$.\n* Để $x = (1, 2, a) \\in W$, tọa độ phải thỏa mãn phương trình:\n  $$1 - 2 - a = 0 \\iff a = -1$$\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 182,
    "originalId": 15,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Hệ véc tơ nào dưới đây sinh ra không gian véc tơ $P_2$ (không gian véc tơ các đa thức có bậc không vượt quá 2)?",
    "options": [
      {
        "key": "A",
        "text": "$\\{2 - t + 3t^2, \\, 4 - 2t + 6t^2, \\, 1 - 3t + 5t^2\\}$"
      },
      {
        "key": "B",
        "text": "$\\{1 + t^2, \\, 2 - t + t^2, \\, 4 - 3t + t^2\\}$"
      },
      {
        "key": "C",
        "text": "$\\{1 - 3t + 5t^2, \\, -3 + 8t - 2t^2\\}$"
      },
      {
        "key": "D",
        "text": "$\\{3 + t + 2t^2, \\, -1 + t - 2t^2, \\, -1 + 5t + 3t^2\\}$"
      }
    ],
    "correct": "D",
    "explanation": "* Vì $\\dim P_2 = 3$, một hệ 3 véc tơ sinh ra $P_2$ khi và chỉ khi nó độc lập tuyến tính (tức định thức ma trận tọa độ khác 0).\n* Xét phương án D: Lập ma trận tọa độ theo cơ sở $\\{1, t, t^2\\}$:\n  $$M = \\begin{bmatrix} 3 & -1 & -1 \\\\ 1 & 1 & 5 \\\\ 2 & -2 & 3 \\end{bmatrix}$$\n  $$\\det M = 3(3 + 10) - (-1)(3 - 10) + (-1)(-2 - 2) = 39 - 7 + 4 = 36 \\neq 0$$\n* Vì $\\det M \\neq 0$, hệ độc lập tuyến tính và là hệ sinh của $P_2$.\n* Các phương án khác: A có véc tơ 2 gấp đôi véc tơ 1; B có $(4-3t+t^2) = 3(2-t+t^2) - 2(1+t^2)$; C chỉ có 2 véc tơ nên không thể sinh không gian 3 chiều.\n* **Chọn đáp án: D.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 183,
    "originalId": 33,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho các tập con của không gian véc tơ $\\mathbb{R}^3$:\n$$A = \\{(x, y, z) \\mid xz \\ge 0\\}, \\quad B = \\{(x, y, z) \\mid x = 2z\\}$$\nKhẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$A$ và $B$ không là các không gian véc tơ con của $\\mathbb{R}^3$"
      },
      {
        "key": "B",
        "text": "Chỉ có $A$ là không gian véc tơ con của $\\mathbb{R}^3$"
      },
      {
        "key": "C",
        "text": "Chỉ có $B$ là không gian véc tơ con của $\\mathbb{R}^3$"
      },
      {
        "key": "D",
        "text": "$A$ và $B$ là các không gian véc tơ con của $\\mathbb{R}^3$"
      }
    ],
    "correct": "C",
    "explanation": "* Xét tập $A$: Chọn $u = (2, 0, 1) \\in A$ (vì $2 \\cdot 1 = 2 \\ge 0$) và $v = (-1, 0, -3) \\in A$ (vì $(-1)(-3) = 3 \\ge 0$).\n  * Nhưng tổng $u + v = (1, 0, -2)$ có tích $xz = 1 \\cdot (-2) = -2 < 0 \\implies u + v \\notin A$.\n  * Vậy $A$ không đóng kín với phép cộng, nên $A$ không phải là không gian con.\n* Xét tập $B$: Phương trình $x - 2z = 0$ là phương trình tuyến tính thuần nhất (mặt phẳng đi qua gốc tọa độ), nên $B$ là một không gian véc tơ con của $\\mathbb{R}^3$.\n* Kết luận: Chỉ có $B$ là không gian véc tơ con của $\\mathbb{R}^3$.\n* **Chọn đáp án: C.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 184,
    "originalId": 4,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Hệ véc tơ nào sau đây **không phải** là một không gian con của $\\mathbb{R}^3$?",
    "options": [
      {
        "key": "A",
        "text": "$V = \\{(x - y, \\, y, \\, 0) \\mid x, y \\in \\mathbb{R}\\}$"
      },
      {
        "key": "B",
        "text": "$V = \\{(x - y + z, \\, z - y, \\, x) \\mid x, y, z \\in \\mathbb{R}\\}$"
      },
      {
        "key": "C",
        "text": "$V$ gồm tất cả các véc tơ sinh bởi hệ $\\{(1, 2, 1), (-2, 0, 1), (1, 2, -3), (3, -2, 1)\\}$"
      },
      {
        "key": "D",
        "text": "$V = \\{(x, \\, y, \\, xy) \\mid x, y \\in \\mathbb{R}\\}$"
      }
    ],
    "correct": "D",
    "explanation": "* Xét tập hợp D: Véc tơ có dạng $(x, y, xy)$.\n  * Lấy $u = (1, 0, 0) \\in V$ (vì $1 \\cdot 0 = 0$) và $v = (0, 1, 0) \\in V$ (vì $0 \\cdot 1 = 0$).\n  * Nhưng tổng $u + v = (1, 1, 0)$. Tọa độ thứ ba là $0$, trong khi tích hai tọa độ đầu là $1 \\cdot 1 = 1 \\neq 0$.\n  * Do đó $u + v \\notin V$, tập $V$ không đóng kín đối với phép cộng véc tơ nên **không phải là không gian con**.\n* **Chọn đáp án: D.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 185,
    "originalId": 8,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Trong không gian $\\mathbb{R}^3$, xét các tập hợp:\n$$W_1 = \\{(x, y, 1) \\mid x = 2y\\}, \\quad W_2 = \\{(x, y, z) \\mid z = 2x - y\\}, \\quad W_3 = \\{(x, y, z) \\mid x + y + z = 0\\}$$\nChọn mệnh đề đúng:",
    "options": [
      {
        "key": "A",
        "text": "$W_1$ và $W_2$ là không gian con của $\\mathbb{R}^3$"
      },
      {
        "key": "B",
        "text": "$W_1$ và $W_3$ là không gian con của $\\mathbb{R}^3$"
      },
      {
        "key": "C",
        "text": "$W_2$ và $W_3$ là không gian con của $\\mathbb{R}^3$"
      },
      {
        "key": "D",
        "text": "Cả 3 mệnh đề đều sai"
      }
    ],
    "correct": "C",
    "explanation": "* $W_1$ có tọa độ $z = 1 \\neq 0$, nên véc tơ không $\\vec{0} = (0, 0, 0) \\notin W_1 \\implies W_1$ không là không gian con.\n* $W_2$ và $W_3$ là các mặt phẳng đi qua gốc tọa độ trong $\\mathbb{R}^3$ (xác định bởi các phương trình tuyến tính thuần nhất $2x - y - z = 0$ và $x + y + z = 0$), nên $W_2$ và $W_3$ đều là các không gian véc tơ con.\n* Vậy $W_2$ và $W_3$ là không gian con của $\\mathbb{R}^3$.\n* **Chọn đáp án: C.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 186,
    "originalId": 30,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Tìm cơ sở của không gian véctơ $\\mathbb{R}^3$ trong các hệ véctơ dưới đây, khẳng định nào đúng?",
    "options": [
      {
        "key": "A",
        "text": "Hệ $\\{(0, 2, -2), (-3, 5, -1), (-3, 7, -3)\\}$ là cơ sở"
      },
      {
        "key": "B",
        "text": "Hệ $\\{(2, -1, -1), (5, 7, -13), (-4, 2, 2)\\}$ là cơ sở"
      },
      {
        "key": "C",
        "text": "Hệ $\\{(1, 1, 0), (1, 0, 1), (0, 1, 1)\\}$ là cơ sở"
      },
      {
        "key": "D",
        "text": "Hệ $\\{(-1, 1, 0), (1, 0, 1), (-1, 0, -1)\\}$ là cơ sở"
      }
    ],
    "correct": "C",
    "explanation": "* Một hệ gồm 3 véctơ trong $\\mathbb{R}^3$ là cơ sở của $\\mathbb{R}^3$ khi và chỉ khi định thức ma trận tạo bởi tọa độ 3 véctơ đó khác $0$.\n* Xét hệ ở phương án **C**:\n  $$\\det \\begin{bmatrix} 1 & 1 & 0 \\\\ 1 & 0 & 1 \\\\ 0 & 1 & 1 \\end{bmatrix} = 1(0 - 1) - 1(1 - 0) + 0 = -2 \\neq 0$$\n  Do đó hệ gồm 3 véctơ độc lập tuyến tính, nên là một cơ sở của $\\mathbb{R}^3$.\n* Kiểm tra các phương án còn lại:\n  * Phương án A: $(0, 2, -2) + (-3, 5, -1) = (-3, 7, -3) \\implies$ phụ thuộc tuyến tính.\n  * Phương án B: $(-4, 2, 2) = -2(2, -1, -1) \\implies$ phụ thuộc tuyến tính.\n  * Phương án D: $(-1, 0, -1) = -(1, 0, 1) \\implies$ phụ thuộc tuyến tính.\n* **Chọn đáp án: C.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 187,
    "originalId": 37,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Cho ba véctơ $\\{x, y, z\\}$ là cơ sở của không gian véctơ $V$. Khẳng định nào sau đây **luôn đúng**?",
    "options": [
      {
        "key": "A",
        "text": "$\\{x, y, 2y\\}$ sinh ra $V$"
      },
      {
        "key": "B",
        "text": "$\\{x, 2y, z\\}$ phụ thuộc tuyến tính"
      },
      {
        "key": "C",
        "text": "Hạng của họ $\\{x, x+y, x-2y\\}$ bằng 2"
      },
      {
        "key": "D",
        "text": "$\\{x, y, x+y+z\\}$ không sinh ra $V$"
      }
    ],
    "correct": "C",
    "explanation": "* Vì $\\{x, y, z\\}$ là cơ sở của $V$ nên $\\{x, y, z\\}$ độc lập tuyến tính và $\\dim V = 3$.\n* **Xét phương án C:** Xét họ 3 véctơ $\\{x, x+y, x-2y\\}$.\n  Tọa độ của 3 véctơ đối với cơ sở $\\{x, y, z\\}$:\n  * $v_1 = x \\sim (1, 0, 0)$\n  * $v_2 = x + y \\sim (1, 1, 0)$\n  * $v_3 = x - 2y \\sim (1, -2, 0)$\n  Ma trận tọa độ có cột thứ 3 bằng $0$, và $v_3 = 3v_1 - 2v_2$. Do đó hạng của hệ véctơ này đúng bằng **2**.\n  *(Ghi chú: Bản in đề gốc có lỗi gõ nhầm chữ cái $x$ thành $z$ ở số hạng thứ 3: $z - 2y \\to x - 2y$ theo chuẩn ngân hàng câu hỏi PTIT).*\n* Các phương án khác:\n  * A sai vì $\\text{span}\\{x, y, 2y\\} = \\text{span}\\{x, y\\}$ chỉ có số chiều bằng 2, không sinh ra $V$.\n  * B sai vì $\\{x, 2y, z\\}$ độc lập tuyến tính.\n  * D sai vì $\\{x, y, x+y+z\\}$ là một cơ sở và sinh ra toàn bộ $V$.\n* **Chọn đáp án: C.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 188,
    "originalId": 188,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tập hợp nào dưới đây là một **không gian véc tơ con** của $\\mathbb{R}^3$?",
    "options": [
      {
        "key": "A",
        "text": "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x \\ge 0, y \\ge 0, z \\ge 0\\}$"
      },
      {
        "key": "B",
        "text": "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid 2x - 3y + z = 0\\}$"
      },
      {
        "key": "C",
        "text": "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x^2 + y^2 + z^2 = 1\\}$"
      },
      {
        "key": "D",
        "text": "$W = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x + y + z = 1\\}$"
      }
    ],
    "correct": "B",
    "explanation": "Phương trình $2x - 3y + z = 0$ là phương trình tuyến tính thuần nhất, biểu diễn một mặt phẳng đi qua gốc tọa độ $(0, 0, 0)$. Tập nghiệm của phương trình tuyến tính thuần nhất luôn là một không gian véc tơ con. Phương án B không chứa $\\vec{0}$, phương án C không đóng kín với phép nhân số âm, phương án D là phương trình phi tuyến.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 189,
    "originalId": 189,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tọa độ của véc tơ $u = (5, 7)$ trong cơ sở $B = \\{v_1 = (1, 1), \\, v_2 = (1, 2)\\}$ của $\\mathbb{R}^2$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(3, 2)$"
      },
      {
        "key": "B",
        "text": "$(5, 7)$"
      },
      {
        "key": "C",
        "text": "$(1, 4)$"
      },
      {
        "key": "D",
        "text": "$(2, 3)$"
      }
    ],
    "correct": "A",
    "explanation": "Biểu diễn $u = c_1 v_1 + c_2 v_2 \\Leftrightarrow \\begin{cases} c_1 + c_2 = 5 \\\\ c_1 + 2c_2 = 7 \\end{cases}$.\nLấy PT(2) trừ PT(1) ta được $c_2 = 2$. Thay lại ta được $c_1 = 3$. Vậy tọa độ là $(3, 2)$.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 190,
    "originalId": 190,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho $B = \\{e_1, e_2\\}$ và $B' = \\{e_1', e_2'\\}$ với $e_1' = 2e_1 + e_2$ và $e_2' = e_1 + 3e_2$. Ma trận chuyển cơ sở từ $B$ sang $B'$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 2 & 1 \\\\ 3 & 1 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 3 & -1 \\\\ -1 & 2 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 2 & 1 \\\\ 1 & 3 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 1 & 2 \\\\ 3 & 1 \\end{bmatrix}$"
      }
    ],
    "correct": "C",
    "explanation": "Ma trận chuyển cơ sở từ $B$ sang $B'$ có các cột là tọa độ của các véc tơ của $B'$ theo cơ sở $B$: cột 1 là $\\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}$, cột 2 là $\\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix}$. Vậy $P = \\begin{bmatrix} 2 & 1 \\\\ 1 & 3 \\end{bmatrix}$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 191,
    "originalId": 191,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Nếu ma trận chuyển cơ sở từ $B$ sang $B'$ là $P$, thì công thức liên hệ giữa tọa độ của véc tơ $x$ trong cơ sở $B$ và $B'$ là:",
    "options": [
      {
        "key": "A",
        "text": "$[x]_B = P^T [x]_{B'}$"
      },
      {
        "key": "B",
        "text": "$[x]_B = P^{-1} [x]_{B'}$"
      },
      {
        "key": "C",
        "text": "$[x]_B = P [x]_{B'}$"
      },
      {
        "key": "D",
        "text": "$[x]_{B'} = P [x]_B$"
      }
    ],
    "correct": "C",
    "explanation": "Theo công thức đổi tọa độ khi đổi cơ sở: $[x]_B = P [x]_{B'}$ (hay $[x]_{B'} = P^{-1}[x]_B$).\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 192,
    "originalId": 192,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm tọa độ của đa thức $P(x) = 2 - 3x + 4x^2$ trong cơ sở chính tắc $\\{1, x, x^2\\}$ của $P_2$:",
    "options": [
      {
        "key": "A",
        "text": "$(-3, 2, 4)$"
      },
      {
        "key": "B",
        "text": "$(4, -3, 2)$"
      },
      {
        "key": "C",
        "text": "$(2, 3, 4)$"
      },
      {
        "key": "D",
        "text": "$(2, -3, 4)$"
      }
    ],
    "correct": "D",
    "explanation": "Đa thức $P(x) = 2 \\cdot (1) + (-3) \\cdot (x) + 4 \\cdot (x^2)$. Các hệ số tương ứng theo thứ tự của cơ sở chính tắc là $2, -3, 4$.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 193,
    "originalId": 193,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm tọa độ của véc tơ $u = (5, 7)$ đối với cơ sở $B = \\{v_1 = (1, 1), \\, v_2 = (1, 2)\\}$ của $\\mathbb{R}^2$:",
    "options": [
      {
        "key": "A",
        "text": "$[u]_B = \\begin{bmatrix} 3 \\\\ 2 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$[u]_B = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$[u]_B = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$[u]_B = \\begin{bmatrix} 5 \\\\ 7 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* **Tìm tọa độ theo định nghĩa:**\n  * Giả sử $u = c_1 v_1 + c_2 v_2$:\n    $$(5, 7) = c_1(1, 1) + c_2(1, 2) = (c_1 + c_2, \\\\, c_1 + 2c_2)$$\n  * Ta có hệ phương trình:\n    $$\\begin{cases} c_1 + c_2 = 5 \\\\ c_1 + 2c_2 = 7 \\end{cases}$$\n  * Lấy phương trình hai trừ phương trình một: $c_2 = 2 \\implies c_1 = 5 - 2 = 3$.\n  * Vậy tọa độ của $u$ đối với cơ sở $B$ là $[u]_B = \\begin{bmatrix} 3 \\\\ 2 \\end{bmatrix}$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 194,
    "originalId": 194,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho $P_{B \\to B'}$ là ma trận chuyển cơ sở từ cơ sở $B$ sang cơ sở $B'$. Công thức liên hệ giữa tọa độ của véc tơ $x$ trong hai cơ sở là:",
    "options": [
      {
        "key": "A",
        "text": "$[x]_B = [x]_{B'}$"
      },
      {
        "key": "B",
        "text": "$[x]_B = (P_{B \\to B'})^T [x]_{B'}$"
      },
      {
        "key": "C",
        "text": "$[x]_{B'} = P_{B \\to B'} [x]_B$"
      },
      {
        "key": "D",
        "text": "$[x]_B = P_{B \\to B'} [x]_{B'}$"
      }
    ],
    "correct": "D",
    "explanation": "* **Công thức đổi tọa độ khi đổi cơ sở:**\n  * Gọi $P = P_{B \\\\to B'}$ là ma trận chuyển từ cơ sở cũ $B$ sang cơ sở mới $B'$ (các cột của $P$ là tọa độ của các véc tơ cơ sở $B'$ tính theo cơ sở $B$).\n  * Khi đó tọa độ cũ $[x]_B$ và tọa độ mới $[x]_{B'}$ thỏa mãn:\n    $$[x]_B = P_{B \\\\to B'} [x]_{B'}$$\n  * Và ngược lại: $[x]_{B'} = (P_{B \\\\to B'})^{-1} [x]_B$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 195,
    "originalId": 195,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận chuyển cơ sở từ $B$ sang $B'$ trong $\\mathbb{R}^2$ là $P = \\begin{bmatrix} 1 & 2 \\\\ 0 & 1 \\end{bmatrix}$. Biết tọa độ của véc tơ $x$ trong cơ sở $B'$ là $[x]_{B'} = \\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix}$. Tọa độ của $x$ trong cơ sở $B$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} -5 \\\\ 3 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 7 \\\\ 3 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 3 \\\\ 7 \\end{bmatrix}$"
      }
    ],
    "correct": "B",
    "explanation": "* **Áp dụng công thức đổi tọa độ:**\n  $$[x]_B = P [x]_{B'} = \\begin{bmatrix} 1 & 2 \\\\ 0 & 1 \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 1(1) + 2(3) \\\\ 0(1) + 1(3) \\end{bmatrix} = \\begin{bmatrix} 7 \\\\ 3 \\end{bmatrix}$$\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 196,
    "originalId": 196,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hợp của hai không gian véc tơ con $W_1 \\cup W_2$ là một không gian véc tơ con khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "Luôn là không gian con với mọi $W_1, W_2$"
      },
      {
        "key": "B",
        "text": "$W_1 \\cap W_2 = \\{\\vec{0}\\}$"
      },
      {
        "key": "C",
        "text": "$\\dim W_1 = \\dim W_2$"
      },
      {
        "key": "D",
        "text": "$W_1 \\subset W_2$ hoặc $W_2 \\subset W_1$"
      }
    ],
    "correct": "D",
    "explanation": "* **Định lý về hợp của hai không gian con:**\n  * Nói chung, hợp của hai không gian con không đóng kín với phép cộng (ví dụ hai đường thẳng đi qua gốc tọa độ trong mặt phẳng, hợp của chúng không phải là không gian con vì tổng hai véc tơ nằm ngoài cả hai đường thẳng).\n  * Hợp $W_1 \\cup W_2$ là không gian con khi và chỉ khi một trong hai không gian con chứa không gian con kia ($W_1 \\subset W_2$ hoặc $W_2 \\subset W_1$).\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 197,
    "originalId": 197,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong $\\mathbb{R}^2$, cho cơ sở $B = \\{u_1 = (1, 0), \\, u_2 = (3, 1)\\} $. Tọa độ của véc tơ $x = (28, 7)$ đối với cơ sở $B$ là:",
    "options": [
      {
        "key": "A",
        "text": "$[x]_B = (8, 7)^T$"
      },
      {
        "key": "B",
        "text": "$[x]_B = (7, 14)^T$"
      },
      {
        "key": "C",
        "text": "$[x]_B = (7, 7)^T$"
      },
      {
        "key": "D",
        "text": "$[x]_B = (28, 7)^T$"
      }
    ],
    "correct": "C",
    "explanation": "* Giả sử $[x]_B = (c_1, c_2)^T$. Khi đó $c_1 u_1 + c_2 u_2 = c_1 (1, 0) + c_2 (3, 1) = (c_1 + 3c_2, c_2) = (28, 7) \\implies c_2 = 7, c_1 = 7$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 198,
    "originalId": 198,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Nếu ma trận chuyển cơ sở từ cơ sở $B$ sang cơ sở $B'$ là $P$, thì tọa độ của véc tơ $x$ trong hai cơ sở liên hệ theo công thức nào?",
    "options": [
      {
        "key": "A",
        "text": "$[x]_B = P [x]_{B'}$"
      },
      {
        "key": "B",
        "text": "$[x]_B = P^{-1} [x]_{B'}$"
      },
      {
        "key": "C",
        "text": "$[x]_{B'} = P [x]_B$"
      },
      {
        "key": "D",
        "text": "$[x]_B = P^T [x]_{B'}$"
      }
    ],
    "correct": "A",
    "explanation": "* Công thức đổi tọa độ khi chuyển cơ sở: $[x]_B = P [x]_{B'}$, hoặc tương đương $[x]_{B'} = P^{-1} [x]_B$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 199,
    "originalId": 199,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Ma trận chuyển cơ sở giữa hai cơ sở bất kỳ của cùng một không gian véc tơ hữu hạn chiều luôn có tính chất:",
    "options": [
      {
        "key": "A",
        "text": "Luôn là ma trận đối xứng"
      },
      {
        "key": "B",
        "text": "Luôn là ma trận trực giao"
      },
      {
        "key": "C",
        "text": "Luôn vuông và khả nghịch (không suy biến)"
      },
      {
        "key": "D",
        "text": "Luôn có định thức bằng 1"
      }
    ],
    "correct": "C",
    "explanation": "* Vì các véc tơ của cơ sở mới độc lập tuyến tính nên các cột của ma trận chuyển cơ sở độc lập tuyến tính, suy ra ma trận chuyển luôn vuông cấp $n$ và khả nghịch.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 200,
    "originalId": 200,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong $\\mathbb{R}^2$, cho cơ sở $B = \\{u_1 = (1, 0), \\, u_2 = (4, 1)\\} $. Tọa độ của véc tơ $x = (21, 4)$ đối với cơ sở $B$ là:",
    "options": [
      {
        "key": "A",
        "text": "$[x]_B = (5, 4)^T$"
      },
      {
        "key": "B",
        "text": "$[x]_B = (4, 5)^T$"
      },
      {
        "key": "C",
        "text": "$[x]_B = (5, 9)^T$"
      },
      {
        "key": "D",
        "text": "$[x]_B = (21, 4)^T$"
      }
    ],
    "correct": "A",
    "explanation": "* Giả sử $[x]_B = (c_1, c_2)^T$. Khi đó $c_1 u_1 + c_2 u_2 = c_1 (1, 0) + c_2 (4, 1) = (c_1 + 4c_2, c_2) = (21, 4) \\implies c_2 = 4, c_1 = 5$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 201,
    "originalId": 201,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong $\\mathbb{R}^2$, cho cơ sở $B = \\{u_1 = (1, 0), \\, u_2 = (3, 1)\\} $. Tọa độ của véc tơ $x = (10, 1)$ đối với cơ sở $B$ là:",
    "options": [
      {
        "key": "A",
        "text": "$[x]_B = (10, 1)^T$"
      },
      {
        "key": "B",
        "text": "$[x]_B = (7, 1)^T$"
      },
      {
        "key": "C",
        "text": "$[x]_B = (7, 8)^T$"
      },
      {
        "key": "D",
        "text": "$[x]_B = (1, 7)^T$"
      }
    ],
    "correct": "B",
    "explanation": "* Giả sử $[x]_B = (c_1, c_2)^T$. Khi đó $c_1 u_1 + c_2 u_2 = c_1 (1, 0) + c_2 (3, 1) = (c_1 + 3c_2, c_2) = (10, 1) \\implies c_2 = 1, c_1 = 7$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 202,
    "originalId": 202,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong $\\mathbb{R}^2$, cho cơ sở $B = \\{u_1 = (1, 0), \\, u_2 = (3, 1)\\} $. Tọa độ của véc tơ $x = (24, 6)$ đối với cơ sở $B$ là:",
    "options": [
      {
        "key": "A",
        "text": "$[x]_B = (6, 6)^T$"
      },
      {
        "key": "B",
        "text": "$[x]_B = (6, 12)^T$"
      },
      {
        "key": "C",
        "text": "$[x]_B = (7, 6)^T$"
      },
      {
        "key": "D",
        "text": "$[x]_B = (24, 6)^T$"
      }
    ],
    "correct": "A",
    "explanation": "* Giả sử $[x]_B = (c_1, c_2)^T$. Khi đó $c_1 u_1 + c_2 u_2 = c_1 (1, 0) + c_2 (3, 1) = (c_1 + 3c_2, c_2) = (24, 6) \\implies c_2 = 6, c_1 = 6$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 203,
    "originalId": 203,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong $\\mathbb{R}^2$, cho cơ sở $B = \\{u_1 = (1, 0), \\, u_2 = (2, 1)\\} $. Tọa độ của véc tơ $x = (7, 3)$ đối với cơ sở $B$ là:",
    "options": [
      {
        "key": "A",
        "text": "$[x]_B = (1, 3)^T$"
      },
      {
        "key": "B",
        "text": "$[x]_B = (3, 1)^T$"
      },
      {
        "key": "C",
        "text": "$[x]_B = (7, 3)^T$"
      },
      {
        "key": "D",
        "text": "$[x]_B = (1, 4)^T$"
      }
    ],
    "correct": "A",
    "explanation": "* Giả sử $[x]_B = (c_1, c_2)^T$. Khi đó $c_1 u_1 + c_2 u_2 = c_1 (1, 0) + c_2 (2, 1) = (c_1 + 2c_2, c_2) = (7, 3) \\implies c_2 = 3, c_1 = 1$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 204,
    "originalId": 204,
    "chapterId": 2,
    "chapterName": "Không gian véc tơ",
    "topicId": 2,
    "topicName": "Không gian véc tơ",
    "subTypeId": 4,
    "typeId": "2.4",
    "typeName": "Tọa độ véc tơ & Ma trận chuyển cơ sở",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong $\\mathbb{R}^2$, cho cơ sở $B = \\{u_1 = (1, 0), \\, u_2 = (4, 1)\\} $. Tọa độ của véc tơ $x = (25, 5)$ đối với cơ sở $B$ là:",
    "options": [
      {
        "key": "A",
        "text": "$[x]_B = (6, 5)^T$"
      },
      {
        "key": "B",
        "text": "$[x]_B = (25, 5)^T$"
      },
      {
        "key": "C",
        "text": "$[x]_B = (5, 10)^T$"
      },
      {
        "key": "D",
        "text": "$[x]_B = (5, 5)^T$"
      }
    ],
    "correct": "D",
    "explanation": "* Giả sử $[x]_B = (c_1, c_2)^T$. Khi đó $c_1 u_1 + c_2 u_2 = c_1 (1, 0) + c_2 (4, 1) = (c_1 + 4c_2, c_2) = (25, 5) \\implies c_2 = 5, c_1 = 5$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 205,
    "originalId": 8,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho các ma trận:\n$$A = \\begin{bmatrix} 1 & 2 & 1 \\\\ 2 & 1 & 2 \\\\ 1 & 2 & 3 \\end{bmatrix}, \\quad B = \\begin{bmatrix} 4 & 1 & 1 \\\\ -4 & 2 & 0 \\\\ 1 & 2 & 1 \\end{bmatrix}$$\nPhần tử ở vị trí hàng 1, cột 2 của ma trận $AB - BA$ là:",
    "options": [
      {
        "key": "A",
        "text": "$3$"
      },
      {
        "key": "B",
        "text": "$4$"
      },
      {
        "key": "C",
        "text": "$-4$"
      },
      {
        "key": "D",
        "text": "$1$"
      }
    ],
    "correct": "C",
    "explanation": "* Ta có $(AB - BA)_{12} = (AB)_{12} - (BA)_{12}$.\n* Tính từng thành phần:\n  * $(AB)_{12} = (\\text{Hàng 1 của } A) \\cdot (\\text{Cột 2 của } B) = 1(1) + 2(2) + 1(2) = 1 + 4 + 2 = 7$.\n  * $(BA)_{12} = (\\text{Hàng 1 của } B) \\cdot (\\text{Cột 2 của } A) = 4(2) + 1(1) + 1(2) = 8 + 1 + 2 = 11$.\n* Suy ra: $(AB - BA)_{12} = 7 - 11 = -4$.\n* **Chọn đáp án: C.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 206,
    "originalId": 12,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Cho $f(x) = 3x^2 - 2x$ và ma trận $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & -1 \\end{bmatrix}$. Tính ma trận $f(A)$:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 19 & 5 \\\\ -6 & 13 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 19 & -4 \\\\ -6 & 23 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 19 & -4 \\\\ 8 & 21 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "A, B, C đều sai"
      }
    ],
    "correct": "B",
    "explanation": "* Tính $A^2$:\n  $$A^2 = \\begin{bmatrix} 1 & 2 \\\\ 3 & -1 \\end{bmatrix} \\begin{bmatrix} 1 & 2 \\\\ 3 & -1 \\end{bmatrix} = \\begin{bmatrix} 1(1) + 2(3) & 1(2) + 2(-1) \\\\ 3(1) + (-1)(3) & 3(2) + (-1)(-1) \\end{bmatrix} = \\begin{bmatrix} 7 & 0 \\\\ 0 & 7 \\end{bmatrix} = 7I$$\n* Khi đó:\n  $$f(A) = 3A^2 - 2A = 3 \\begin{bmatrix} 7 & 0 \\\\ 0 & 7 \\end{bmatrix} - 2 \\begin{bmatrix} 1 & 2 \\\\ 3 & -1 \\end{bmatrix} = \\begin{bmatrix} 21 & 0 \\\\ 0 & 21 \\end{bmatrix} - \\begin{bmatrix} 2 & 4 \\\\ 6 & -2 \\end{bmatrix} = \\begin{bmatrix} 19 & -4 \\\\ -6 & 23 \\end{bmatrix}$$\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 207,
    "originalId": 13,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Cho hai ma trận $A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 0 & 4 \\end{bmatrix}$ và $B = \\begin{bmatrix} 1 & 1 & 0 \\\\ 2 & 0 & 0 \\\\ 3 & 4 & 0 \\end{bmatrix}$. Khẳng định nào dưới đây là **sai**?",
    "options": [
      {
        "key": "A",
        "text": "$AB = \\begin{bmatrix} 14 & 13 \\\\ 14 & 18 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$AB = \\begin{bmatrix} 14 & 13 & 0 \\\\ 14 & 18 & 1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$BA$ xác định nhưng $AB$ không xác định"
      },
      {
        "key": "D",
        "text": "$AB = \\begin{bmatrix} 14 & 13 & 0 \\\\ 13 & 18 & 0 \\end{bmatrix}$"
      }
    ],
    "correct": "C",
    "explanation": "* $A$ có cỡ $2 \\times 3$ và $B$ có cỡ $3 \\times 3$.\n  * Tích $AB$ hoàn toàn xác định vì số cột của $A$ ($3$) bằng số hàng của $B$ ($3$), ma trận tích $AB$ có cỡ $2 \\times 3$:\n    $$AB = \\begin{bmatrix} 1(1)+2(2)+3(3) & 1(1)+2(0)+3(4) & 0 \\\\ 2(1)+0(2)+4(3) & 2(1)+0(0)+4(4) & 0 \\end{bmatrix} = \\begin{bmatrix} 14 & 13 & 0 \\\\ 14 & 18 & 0 \\end{bmatrix}$$\n  * Trong khi đó, tích $BA$ ($3 \\times 3$ nhân $2 \\times 3$) không xác định vì số cột của $B$ ($3$) khác số hàng của $A$ ($2$).\n* Do đó khẳng định C \"$BA$ xác định nhưng $AB$ không xác định\" là **hoàn toàn sai**.\n* **Chọn đáp án: C.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 208,
    "originalId": 14,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Cho $f(x) = x^2 + 2x - 5$ và ma trận $A = \\begin{bmatrix} 1 & 1 \\\\ -1 & 2 \\end{bmatrix}$. Tính ma trận $f(A)$:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} -3 & 0 \\\\ -5 & 2 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} -3 & 5 \\\\ -5 & 7 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 2 & 5 \\\\ -5 & 7 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} -3 & 5 \\\\ -5 & 2 \\end{bmatrix}$"
      }
    ],
    "correct": "D",
    "explanation": "* Tính $A^2$:\n  $$A^2 = \\begin{bmatrix} 1 & 1 \\\\ -1 & 2 \\end{bmatrix} \\begin{bmatrix} 1 & 1 \\\\ -1 & 2 \\end{bmatrix} = \\begin{bmatrix} 1 - 1 & 1 + 2 \\\\ -1 - 2 & -1 + 4 \\end{bmatrix} = \\begin{bmatrix} 0 & 3 \\\\ -3 & 3 \\end{bmatrix}$$\n* $2A = \\begin{bmatrix} 2 & 2 \\\\ -2 & 4 \\end{bmatrix}$ và $5I = \\begin{bmatrix} 5 & 0 \\\\ 0 & 5 \\end{bmatrix}$.\n* Khi đó:\n  $$f(A) = A^2 + 2A - 5I = \\begin{bmatrix} 0 + 2 - 5 & 3 + 2 - 0 \\\\ -3 - 2 - 0 & 3 + 4 - 5 \\end{bmatrix} = \\begin{bmatrix} -3 & 5 \\\\ -5 & 2 \\end{bmatrix}$$\n* **Chọn đáp án: D.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 209,
    "originalId": 16,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Cho ma trận $A = \\begin{bmatrix} 2 & 6 \\\\ 0 & 2 \\end{bmatrix}$. Tính ma trận $A^{100}$:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 2^{100} & 300 \\\\ 0 & 2^{100} \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$2^{100} \\begin{bmatrix} 1 & 100 \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$2^{100} \\begin{bmatrix} 1 & 300 \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "Các đáp án đều sai"
      }
    ],
    "correct": "C",
    "explanation": "* Ta viết $A = 2 \\begin{bmatrix} 1 & 3 \\\\ 0 & 1 \\end{bmatrix}$.\n* Bằng quy nạp, ta có công thức lũy thừa ma trận tam giác:\n  $$\\begin{bmatrix} 1 & k \\\\ 0 & 1 \\end{bmatrix}^n = \\begin{bmatrix} 1 & n \\cdot k \\\\ 0 & 1 \\end{bmatrix}$$\n* Với $k = 3$ và $n = 100$:\n  $$\\begin{bmatrix} 1 & 3 \\\\ 0 & 1 \\end{bmatrix}^{100} = \\begin{bmatrix} 1 & 3 \\cdot 100 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 1 & 300 \\\\ 0 & 1 \\end{bmatrix}$$\n* Suy ra:\n  $$A^{100} = 2^{100} \\begin{bmatrix} 1 & 300 \\\\ 0 & 1 \\end{bmatrix}$$\n* **Chọn đáp án: C.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 210,
    "originalId": 17,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Cho ma trận $A = \\begin{bmatrix} 2 & 2 \\\\ 2 & 2 \\end{bmatrix}$. Đặt $B = \\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\end{bmatrix}$. Tính $A^{100}$:",
    "options": [
      {
        "key": "A",
        "text": "$2^{99} B$"
      },
      {
        "key": "B",
        "text": "$2^{100} B$"
      },
      {
        "key": "C",
        "text": "$2^{199} B$"
      },
      {
        "key": "D",
        "text": "$2^{200} B$"
      }
    ],
    "correct": "C",
    "explanation": "* Ta có $A = 2B$. Do đó $A^{100} = (2B)^{100} = 2^{100} B^{100}$.\n* Tính các lũy thừa của $B$:\n  $$B^2 = \\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\end{bmatrix} \\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\end{bmatrix} = \\begin{bmatrix} 2 & 2 \\\\ 2 & 2 \\end{bmatrix} = 2B$$\n* Bằng quy nạp: $B^n = 2^{n - 1} B$.\n* Với $n = 100 \\implies B^{100} = 2^{99} B$.\n* Vậy:\n  $$A^{100} = 2^{100} \\cdot 2^{99} B = 2^{199} B$$\n* **Chọn đáp án: C.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 211,
    "originalId": 18,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Tổng tất cả các phần tử trên đường chéo chính gọi là vết của ma trận. Cho $A = \\begin{bmatrix} 1 & 3 & 2 \\\\ 4 & 2 & 4 \\\\ 3 & 2 & 2 \\end{bmatrix}$ và $B = \\begin{bmatrix} 5 & -2 & 4 \\\\ 1 & 3 & 7 \\\\ 6 & 4 & 5 \\end{bmatrix}$. Tìm vết của ma trận $AB$:",
    "options": [
      {
        "key": "A",
        "text": "$70$"
      },
      {
        "key": "B",
        "text": "$46$"
      },
      {
        "key": "C",
        "text": "$65$"
      },
      {
        "key": "D",
        "text": "Cả 3 đáp án đều sai"
      }
    ],
    "correct": "A",
    "explanation": "* Vết của ma trận tích $AB$ là $\\operatorname{tr}(AB) = (AB)_{11} + (AB)_{22} + (AB)_{33}$.\n* Tính các phần tử trên đường chéo chính:\n  * $(AB)_{11} = 1(5) + 3(1) + 2(6) = 5 + 3 + 12 = 20$.\n  * $(AB)_{22} = 4(-2) + 2(3) + 4(4) = -8 + 6 + 16 = 14$.\n  * $(AB)_{33} = 3(4) + 2(7) + 2(5) = 12 + 14 + 10 = 36$.\n* Tổng: $\\operatorname{tr}(AB) = 20 + 14 + 36 = 70$.\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 212,
    "originalId": 25,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Biểu diễn ma trận $A = \\begin{bmatrix} 4 & 1 \\\\ -3 & -3 \\end{bmatrix}$ theo tổ hợp tuyến tính của các ma trận $M_1 = \\begin{bmatrix} 2 & 1 \\\\ 2 & 1 \\end{bmatrix}, M_2 = \\begin{bmatrix} 7 & 1 \\\\ 1 & 1 \\end{bmatrix}, M_3 = \\begin{bmatrix} 13 & 5 \\\\ 3 & 3 \\end{bmatrix}, M_4 = \\begin{bmatrix} 5 & 2 \\\\ 2 & 4 \\end{bmatrix}$:",
    "options": [
      {
        "key": "A",
        "text": "$A = M_1 - 2M_2 + 0M_3 - M_4$"
      },
      {
        "key": "B",
        "text": "$A = -2M_1 + 0M_2 + M_3 - M_4$"
      },
      {
        "key": "C",
        "text": "$A = 4M_1 + M_2 - 3M_3 - 3M_4$"
      },
      {
        "key": "D",
        "text": "$A = 4M_1 - 3M_2 + M_3 - 3M_4$"
      }
    ],
    "correct": "B",
    "explanation": "* Kiểm tra phương án B: $-2M_1 + 0M_2 + 1M_3 - 1M_4$:\n  $$-2 \\begin{bmatrix} 2 & 1 \\\\ 2 & 1 \\end{bmatrix} + \\begin{bmatrix} 13 & 5 \\\\ 3 & 3 \\end{bmatrix} - \\begin{bmatrix} 5 & 2 \\\\ 2 & 4 \\end{bmatrix} = \\begin{bmatrix} -4 + 13 - 5 & -2 + 5 - 2 \\\\ -4 + 3 - 2 & -2 + 3 - 4 \\end{bmatrix} = \\begin{bmatrix} 4 & 1 \\\\ -3 & -3 \\end{bmatrix} = A$$\n* Kết quả khớp chính xác với ma trận $A$.\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 213,
    "originalId": 41,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Xét hai ma trận $A = \\begin{bmatrix} 1 & 2 & 3 \\end{bmatrix}; B = \\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\\\ -1 & 3 \\end{bmatrix}$. Kích cỡ của ma trận $AB$ là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "$1 \\times 3$"
      },
      {
        "key": "B",
        "text": "$1 \\times 2$"
      },
      {
        "key": "C",
        "text": "$3 \\times 1$"
      },
      {
        "key": "D",
        "text": "$2 \\times 1$"
      }
    ],
    "correct": "B",
    "explanation": "* Ma trận $A$ gồm 1 hàng và 3 cột $\\implies$ kích cỡ $1 \\times 3$.\n* Ma trận $B$ gồm 3 hàng và 2 cột $\\implies$ kích cỡ $3 \\times 2$.\n* Tích ma trận $AB$ của ma trận kích cỡ $(1 \\times 3)$ với ma trận $(3 \\times 2)$ là một ma trận có kích cỡ:\n  $$(1 \\times 3) \\times (3 \\times 2) = 1 \\times 2$$\n* Cụ thể $AB = \\begin{bmatrix} 1\\cdot 1 + 2\\cdot 2 + 3(-1) & 1\\cdot 0 + 2\\cdot 1 + 3\\cdot 3 \\end{bmatrix} = \\begin{bmatrix} 2 & 11 \\end{bmatrix}$ (cỡ $1 \\times 2$).\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 214,
    "originalId": 214,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận $A$ cỡ $3 \\times 4$ và ma trận $B$ cỡ $4 \\times 2$. Ma trận tích $AB$ có kích thước là:",
    "options": [
      {
        "key": "A",
        "text": "Không thể nhân được"
      },
      {
        "key": "B",
        "text": "$4 \\times 4$"
      },
      {
        "key": "C",
        "text": "$2 \\times 3$"
      },
      {
        "key": "D",
        "text": "$3 \\times 2$"
      }
    ],
    "correct": "D",
    "explanation": "Tích của ma trận cỡ $m \\times p$ với ma trận cỡ $p \\times n$ là một ma trận cỡ $m \\times n$. Do số cột của $A$ ($4$) bằng số hàng của $B$ ($4$), tích $AB$ có cỡ $3 \\times 2$.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 215,
    "originalId": 215,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hai ma trận vuông $A, B$ cùng cấp. Khẳng định nào sau đây **luôn đúng**?",
    "options": [
      {
        "key": "A",
        "text": "$(A + B)^2 = A^2 + 2AB + B^2$"
      },
      {
        "key": "B",
        "text": "Nếu $AB = 0$ thì $A = 0$ hoặc $B = 0$"
      },
      {
        "key": "C",
        "text": "$(AB)^T = B^T A^T$"
      },
      {
        "key": "D",
        "text": "$AB = BA$"
      }
    ],
    "correct": "C",
    "explanation": "Tính chất chuyển vị của tích hai ma trận luôn là $(AB)^T = B^T A^T$. Phép nhân ma trận nói chung không giao hoán ($AB \\neq BA$), do đó $(A+B)^2 = A^2 + AB + BA + B^2$, và tích hai ma trận khác 0 vẫn có thể bằng ma trận 0.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 216,
    "originalId": 216,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Vết của ma trận $A = \\begin{bmatrix} 3 & -1 & 4 \\\\ 2 & 5 & 0 \\\\ -1 & 7 & -2 \\end{bmatrix}$, ký hiệu $\\operatorname{tr}(A)$, bằng:",
    "options": [
      {
        "key": "A",
        "text": "$8$"
      },
      {
        "key": "B",
        "text": "$6$"
      },
      {
        "key": "C",
        "text": "$-6$"
      },
      {
        "key": "D",
        "text": "$10$"
      }
    ],
    "correct": "B",
    "explanation": "Vết của một ma trận vuông là tổng các phần tử nằm trên đường chéo chính: $\\operatorname{tr}(A) = a_{11} + a_{22} + a_{33} = 3 + 5 + (-2) = 6$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 217,
    "originalId": 217,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho $A = \\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\end{bmatrix}$. Lũy thừa $A^n$ ($n \\in \\mathbb{N}^*$) là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 1 & 0 \\\\ 2^n & 1 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 1 & 0 \\\\ n^2 & 1 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 1 & 0 \\\\ 2n & 1 \\end{bmatrix}$"
      }
    ],
    "correct": "D",
    "explanation": "Tính thử các lũy thừa đầu:\n$A^2 = \\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\end{bmatrix}\\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 4 & 1 \\end{bmatrix}$.\n$A^3 = \\begin{bmatrix} 1 & 0 \\\\ 4 & 1 \\end{bmatrix}\\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 6 & 1 \\end{bmatrix}$.\nQuy nạp ta được $A^n = \\begin{bmatrix} 1 & 0 \\\\ 2n & 1 \\end{bmatrix}$.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 218,
    "originalId": 218,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm phần tử $c_{21}$ của ma trận tích $C = AB$ với $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ và $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$.",
    "options": [
      {
        "key": "A",
        "text": "$19$"
      },
      {
        "key": "B",
        "text": "$22$"
      },
      {
        "key": "C",
        "text": "$50$"
      },
      {
        "key": "D",
        "text": "$43$"
      }
    ],
    "correct": "D",
    "explanation": "Phần tử $c_{21}$ ở hàng 2, cột 1 của tích $AB$ bằng hàng 2 của $A$ nhân với cột 1 của $B$: $c_{21} = 3 \\cdot 5 + 4 \\cdot 7 = 15 + 28 = 43$.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 219,
    "originalId": 219,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ và $B = \\begin{bmatrix} 2 & 0 \\\\ 1 & 5 \\end{bmatrix}$. Tính vết (trace) của ma trận $AB$:",
    "options": [
      {
        "key": "A",
        "text": "$24$"
      },
      {
        "key": "B",
        "text": "$-24$"
      },
      {
        "key": "C",
        "text": "$14$"
      },
      {
        "key": "D",
        "text": "$34$"
      }
    ],
    "correct": "A",
    "explanation": "* **Định nghĩa vết của ma trận (Trace):** $\\operatorname{tr}(M)$ là tổng các phần tử trên đường chéo chính.\n* Tính ma trận tích $AB$:\n  $$AB = \\begin{bmatrix} 1(2) + 2(1) & 1(0) + 2(5) \\\\ 3(2) + 4(1) & 3(0) + 4(5) \\end{bmatrix} = \\begin{bmatrix} 4 & 10 \\\\ 10 & 20 \\end{bmatrix}$$\n* Tổng các phần tử trên đường chéo chính:\n  $$\\operatorname{tr}(AB) = (AB)_{11} + (AB)_{22} = 4 + 20 = 24$$\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 220,
    "originalId": 220,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận $A = \\begin{bmatrix} 1 & 8 \\\\ 0 & 1 \\end{bmatrix}$. Lũy thừa $A^{6}$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 1 & 8 \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 1 & 48 \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 6 & 48 \\\\ 0 & 6 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 1 & 262144 \\\\ 0 & 1 \\end{bmatrix}$"
      }
    ],
    "correct": "B",
    "explanation": "* Quy nạp lũy thừa ma trận tam giác: $A^k = \\begin{bmatrix} 1 & ka \\\\ 0 & 1 \\end{bmatrix}$. Thay số: $k \\times a = 6 \\times 8 = 48$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 221,
    "originalId": 221,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Vết (trace) của ma trận $A = \\begin{bmatrix} -2 & 3 \\\\ 5 & 4 \\end{bmatrix}$, ký hiệu $\\text{tr}(A)$, bằng:",
    "options": [
      {
        "key": "A",
        "text": "$2$"
      },
      {
        "key": "B",
        "text": "$-2$"
      },
      {
        "key": "C",
        "text": "$-23$"
      },
      {
        "key": "D",
        "text": "$10$"
      }
    ],
    "correct": "A",
    "explanation": "* Vết của ma trận vuông là tổng các phần tử trên đường chéo chính: $\\text{tr}(A) = -2 + (4) = 2$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 222,
    "originalId": 222,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hai ma trận vuông $A, B$ cùng cấp $n$. Khẳng định nào sau đây là **SAI** nói chung?",
    "options": [
      {
        "key": "A",
        "text": "$(A + B)^T = A^T + B^T$"
      },
      {
        "key": "B",
        "text": "$(A + B)^2 = A^2 + 2AB + B^2$"
      },
      {
        "key": "C",
        "text": "$(A^T)^T = A$"
      },
      {
        "key": "D",
        "text": "$(AB)^T = B^T A^T$"
      }
    ],
    "correct": "B",
    "explanation": "* Vì phép nhân ma trận nói chung không có tính chất giao hoán ($AB \\neq BA$), nên $(A + B)^2 = A^2 + AB + BA + B^2 \\neq A^2 + 2AB + B^2$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 223,
    "originalId": 223,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận $A = \\begin{bmatrix} 1 & 4 \\\\ 0 & 1 \\end{bmatrix}$. Lũy thừa $A^{2}$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 2 & 8 \\\\ 0 & 2 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 1 & 16 \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 1 & 8 \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 1 & 4 \\\\ 0 & 1 \\end{bmatrix}$"
      }
    ],
    "correct": "C",
    "explanation": "* Quy nạp lũy thừa ma trận tam giác: $A^k = \\begin{bmatrix} 1 & ka \\\\ 0 & 1 \\end{bmatrix}$. Thay số: $k \\times a = 2 \\times 4 = 8$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 224,
    "originalId": 224,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Vết (trace) của ma trận $A = \\begin{bmatrix} -1 & 4 \\\\ -2 & 1 \\end{bmatrix}$, ký hiệu $\\text{tr}(A)$, bằng:",
    "options": [
      {
        "key": "A",
        "text": "$0$"
      },
      {
        "key": "B",
        "text": "$2$"
      },
      {
        "key": "C",
        "text": "$7$"
      },
      {
        "key": "D",
        "text": "$1$"
      }
    ],
    "correct": "A",
    "explanation": "* Vết của ma trận vuông là tổng các phần tử trên đường chéo chính: $\\text{tr}(A) = -1 + (1) = 0$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 225,
    "originalId": 225,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận $A = \\begin{bmatrix} 1 & 3 \\\\ 0 & 1 \\end{bmatrix}$. Lũy thừa $A^{5}$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 1 & 15 \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 1 & 3 \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 1 & 243 \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 5 & 15 \\\\ 0 & 5 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* Quy nạp lũy thừa ma trận tam giác: $A^k = \\begin{bmatrix} 1 & ka \\\\ 0 & 1 \\end{bmatrix}$. Thay số: $k \\times a = 5 \\times 3 = 15$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 226,
    "originalId": 226,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Vết (trace) của ma trận $A = \\begin{bmatrix} 3 & 2 \\\\ -3 & 4 \\end{bmatrix}$, ký hiệu $\\text{tr}(A)$, bằng:",
    "options": [
      {
        "key": "A",
        "text": "$6$"
      },
      {
        "key": "B",
        "text": "$-7$"
      },
      {
        "key": "C",
        "text": "$7$"
      },
      {
        "key": "D",
        "text": "$18$"
      }
    ],
    "correct": "C",
    "explanation": "* Vết của ma trận vuông là tổng các phần tử trên đường chéo chính: $\\text{tr}(A) = 3 + (4) = 7$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 227,
    "originalId": 227,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận $A = \\begin{bmatrix} 1 & 4 \\\\ 0 & 1 \\end{bmatrix}$. Lũy thừa $A^{7}$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 7 & 28 \\\\ 0 & 7 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 1 & 28 \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 1 & 16384 \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 1 & 4 \\\\ 0 & 1 \\end{bmatrix}$"
      }
    ],
    "correct": "B",
    "explanation": "* Quy nạp lũy thừa ma trận tam giác: $A^k = \\begin{bmatrix} 1 & ka \\\\ 0 & 1 \\end{bmatrix}$. Thay số: $k \\times a = 7 \\times 4 = 28$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 228,
    "originalId": 228,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Vết (trace) của ma trận $A = \\begin{bmatrix} 5 & 1 \\\\ 2 & -2 \\end{bmatrix}$, ký hiệu $\\text{tr}(A)$, bằng:",
    "options": [
      {
        "key": "A",
        "text": "$6$"
      },
      {
        "key": "B",
        "text": "$-12$"
      },
      {
        "key": "C",
        "text": "$3$"
      },
      {
        "key": "D",
        "text": "$-3$"
      }
    ],
    "correct": "C",
    "explanation": "* Vết của ma trận vuông là tổng các phần tử trên đường chéo chính: $\\text{tr}(A) = 5 + (-2) = 3$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 229,
    "originalId": 229,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận $A = \\begin{bmatrix} 1 & 6 \\\\ 0 & 1 \\end{bmatrix}$. Lũy thừa $A^{4}$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 4 & 24 \\\\ 0 & 4 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 1 & 24 \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 1 & 6 \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 1 & 1296 \\\\ 0 & 1 \\end{bmatrix}$"
      }
    ],
    "correct": "B",
    "explanation": "* Quy nạp lũy thừa ma trận tam giác: $A^k = \\begin{bmatrix} 1 & ka \\\\ 0 & 1 \\end{bmatrix}$. Thay số: $k \\times a = 4 \\times 6 = 24$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 230,
    "originalId": 230,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 1,
    "typeId": "3.1",
    "typeName": "Các phép toán Ma trận & Lũy thừa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Vết (trace) của ma trận $A = \\begin{bmatrix} -2 & 5 \\\\ 4 & -3 \\end{bmatrix}$, ký hiệu $\\text{tr}(A)$, bằng:",
    "options": [
      {
        "key": "A",
        "text": "$4$"
      },
      {
        "key": "B",
        "text": "$-5$"
      },
      {
        "key": "C",
        "text": "$-14$"
      },
      {
        "key": "D",
        "text": "$5$"
      }
    ],
    "correct": "B",
    "explanation": "* Vết của ma trận vuông là tổng các phần tử trên đường chéo chính: $\\text{tr}(A) = -2 + (-3) = -5$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 231,
    "originalId": 14,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho $A$ là ma trận vuông cấp 3. Khẳng định nào dưới đây **không đúng**?",
    "options": [
      {
        "key": "A",
        "text": "$\\det(A^t A) = \\det(A^2)$"
      },
      {
        "key": "B",
        "text": "Nếu $A$ là ma trận tam giác và có một phần tử trên đường chéo chính bằng 0 thì $\\det A = 0$"
      },
      {
        "key": "C",
        "text": "$\\det(3A) = 3 \\det A$"
      },
      {
        "key": "D",
        "text": "$\\det(-A) = -\\det A$"
      }
    ],
    "correct": "C",
    "explanation": "* Với ma trận vuông $A$ cấp $n = 3$, theo tính chất định thức:\n  $$\\det(kA) = k^n \\det A \\implies \\det(3A) = 3^3 \\det A = 27 \\det A$$\n* Do đó khẳng định $\\det(3A) = 3 \\det A$ ở phương án C là **sai**.\n* Các khẳng định khác đều đúng:\n  * A đúng: $\\det(A^t A) = \\det(A^t) \\det A = (\\det A)^2 = \\det(A^2)$.\n  * B đúng: định thức ma trận tam giác bằng tích các phần tử đường chéo chính.\n  * D đúng: $\\det(-A) = (-1)^3 \\det A = -\\det A$.\n* **Chọn đáp án: C.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 232,
    "originalId": 26,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho $D = \\begin{vmatrix} 1 & -2 & 0 & 0 \\\\ 3 & 4 & -1 & 2 \\\\ a & b & 0 & 0 \\\\ 1 & 2 & 3 & 4 \\end{vmatrix}$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$D = -10(2a + b)$"
      },
      {
        "key": "B",
        "text": "$D = 10(2a - b)$"
      },
      {
        "key": "C",
        "text": "$D = 10(2a + b)$"
      },
      {
        "key": "D",
        "text": "$D = 10(b - 2a)$"
      }
    ],
    "correct": "C",
    "explanation": "* Khai triển định thức Laplace theo các hàng $1$ và $3$ (chỉ có cột $1$ và cột $2$ khác 0):\n  $$D = (-1)^{(1+3)+(1+2)} \\begin{vmatrix} 1 & -2 \\\\ a & b \\end{vmatrix} \\cdot \\begin{vmatrix} -1 & 2 \\\\ 3 & 4 \\end{vmatrix}$$\n* Ta có:\n  * $(-1)^7 = -1$.\n  * $\\begin{vmatrix} 1 & -2 \\\\ a & b \\end{vmatrix} = b - (-2a) = 2a + b$.\n  * $\\begin{vmatrix} -1 & 2 \\\\ 3 & 4 \\end{vmatrix} = (-1)(4) - 2(3) = -4 - 6 = -10$.\n* Do đó:\n  $$D = (-1) \\cdot (2a + b) \\cdot (-10) = 10(2a + b)$$\n* **Chọn đáp án: C.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 233,
    "originalId": 1,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Cho $A = \\begin{bmatrix} 1 & 0 & 0 \\\\ -3 & 1 & 0 \\\\ 2 & 1 & 3 \\end{bmatrix}$ và $B = \\begin{bmatrix} 2 & -1 & 3 \\\\ 0 & 1 & 4 \\\\ 0 & 0 & 1 \\end{bmatrix}$. Tính $\\det(3AB)$:",
    "options": [
      {
        "key": "A",
        "text": "$162$"
      },
      {
        "key": "B",
        "text": "$18$"
      },
      {
        "key": "C",
        "text": "$6$"
      },
      {
        "key": "D",
        "text": "$20$"
      }
    ],
    "correct": "A",
    "explanation": "* Vì $A$ và $B$ là các ma trận tam giác cấp 3 nên định thức của chúng bằng tích các phần tử trên đường chéo chính:\n  * $\\det A = 1 \\cdot 1 \\cdot 3 = 3$.\n  * $\\det B = 2 \\cdot 1 \\cdot 1 = 2$.\n* Theo tính chất định thức:\n  $$\\det(AB) = \\det A \\cdot \\det B = 3 \\cdot 2 = 6$$\n* Với ma trận vuông cấp $n = 3$:\n  $$\\det(3AB) = 3^3 \\cdot \\det(AB) = 27 \\cdot 6 = 162$$\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 234,
    "originalId": 7,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Cho $A$ là ma trận vuông cấp $n$ với $n \\ge 2$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$|3A| = 3|A|$"
      },
      {
        "key": "B",
        "text": "$|-A| = |A|$"
      },
      {
        "key": "C",
        "text": "Nếu $|A| = 0$ thì một véc tơ cột của $A$ là tổ hợp tuyến tính của các véc tơ cột còn lại"
      },
      {
        "key": "D",
        "text": "Cả A, B, C đều sai"
      }
    ],
    "correct": "C",
    "explanation": "* Định lý về định thức và độc lập tuyến tính: $\\det A = 0$ khi và chỉ khi hệ các véc tơ cột của $A$ phụ thuộc tuyến tính, tức là tồn tại ít nhất một véc tơ cột biểu diễn tuyến tính được qua các véc tơ cột còn lại. Khẳng định C là **đúng**.\n* A sai vì $|3A| = 3^n |A|$; B sai vì $|-A| = (-1)^n |A|$ (khi $n$ lẻ thì $|-A| = -|A|$).\n* **Chọn đáp án: C.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 235,
    "originalId": 20,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Tính định thức của ma trận $A = \\begin{bmatrix} 3 & 4 & 1 & -1 \\\\ 4 & 1 & 0 & 3 \\\\ 2 & 3 & -1 & -4 \\\\ 6 & 4 & 0 & 3 \\end{bmatrix}$:",
    "options": [
      {
        "key": "A",
        "text": "$\\det A = 53$"
      },
      {
        "key": "B",
        "text": "$\\det A = 14$"
      },
      {
        "key": "C",
        "text": "$\\det A = 20$"
      },
      {
        "key": "D",
        "text": "Cả A, B, C đều sai"
      }
    ],
    "correct": "A",
    "explanation": "* Cột 3 chỉ có 2 phần tử khác 0 ở hàng 1 ($1$) và hàng 3 ($-1$).\n* Biến đổi hàng $h_3 \\to h_3 + h_1$:\n  $$\\det A = \\begin{vmatrix} 3 & 4 & 1 & -1 \\\\ 4 & 1 & 0 & 3 \\\\ 5 & 7 & 0 & -5 \\\\ 6 & 4 & 0 & 3 \\end{vmatrix}$$\n* Khai triển theo cột 3:\n  $$\\det A = 1 \\cdot (-1)^{1+3} \\begin{vmatrix} 4 & 1 & 3 \\\\ 5 & 7 & -5 \\\\ 6 & 4 & 3 \\end{vmatrix}$$\n* Biến đổi hàng $h_3 \\to h_3 - h_1$:\n  $$\\begin{vmatrix} 4 & 1 & 3 \\\\ 5 & 7 & -5 \\\\ 2 & 3 & 0 \\end{vmatrix} = 2(-5 - 21) - 3(-20 - 15) = 2(-26) - 3(-35) = -52 + 105 = 53$$\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 236,
    "originalId": 21,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Giải phương trình định thức:\n$$\\begin{vmatrix} 1 & 1 & 1 & -1 \\\\ 2 & 0 & 3 & 1 \\\\ 4 & x & 1 & -1 \\\\ 1 & 0 & -1 & 2 \\end{vmatrix} = 0$$",
    "options": [
      {
        "key": "A",
        "text": "$x = 5$"
      },
      {
        "key": "B",
        "text": "$x = 1/3$"
      },
      {
        "key": "C",
        "text": "$x = 10/3$"
      },
      {
        "key": "D",
        "text": "Cả 3 đều sai"
      }
    ],
    "correct": "C",
    "explanation": "* Khai triển định thức theo cột 2 (chỉ có hàng 1 là $1$ và hàng 3 là $x$):\n  $$(-1)^{1+2} \\cdot 1 \\cdot \\begin{vmatrix} 2 & 3 & 1 \\\\ 4 & 1 & -1 \\\\ 1 & -1 & 2 \\end{vmatrix} + (-1)^{3+2} \\cdot x \\cdot \\begin{vmatrix} 1 & 1 & -1 \\\\ 2 & 3 & 1 \\\\ 1 & -1 & 2 \\end{vmatrix} = 0$$\n* Tính từng định thức con cấp 3:\n  * $\\begin{vmatrix} 2 & 3 & 1 \\\\ 4 & 1 & -1 \\\\ 1 & -1 & 2 \\end{vmatrix} = 2(2 - 1) - 3(8 + 1) + 1(-4 - 1) = 2 - 27 - 5 = -30$.\n  * $\\begin{vmatrix} 1 & 1 & -1 \\\\ 2 & 3 & 1 \\\\ 1 & -1 & 2 \\end{vmatrix} = 1(6 + 1) - 1(4 - 1) - 1(-2 - 3) = 7 - 3 + 5 = 9$.\n* Phương trình trở thành:\n  $$-1(-30) - x(9) = 0 \\iff 30 - 9x = 0 \\iff x = \\frac{30}{9} = \\frac{10}{3}$$\n* **Chọn đáp án: C.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 237,
    "originalId": 237,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tính định thức cấp 3: $D = \\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{vmatrix}$.",
    "options": [
      {
        "key": "A",
        "text": "$12$"
      },
      {
        "key": "B",
        "text": "$24$"
      },
      {
        "key": "C",
        "text": "$15$"
      },
      {
        "key": "D",
        "text": "$0$"
      }
    ],
    "correct": "B",
    "explanation": "Đây là ma trận tam giác trên. Định thức của một ma trận tam giác bằng tích các phần tử trên đường chéo chính: $D = 1 \\cdot 4 \\cdot 6 = 24$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 238,
    "originalId": 238,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho $A$ là ma trận vuông cấp 4 có $\\det A = 2$. Giá trị của $\\det(2A)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$32$"
      },
      {
        "key": "B",
        "text": "$4$"
      },
      {
        "key": "C",
        "text": "$16$"
      },
      {
        "key": "D",
        "text": "$8$"
      }
    ],
    "correct": "A",
    "explanation": "Với ma trận vuông cấp $n$, ta có tính chất $\\det(kA) = k^n \\det A$. Với $n = 4$ và $k = 2$: $\\det(2A) = 2^4 \\cdot \\det A = 16 \\cdot 2 = 32$.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 239,
    "originalId": 239,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho $A$ là ma trận vuông cấp 3 thỏa mãn $A^3 = 0$ (ma trận lũy linh). Định thức của $A$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$1$"
      },
      {
        "key": "B",
        "text": "$0$"
      },
      {
        "key": "C",
        "text": "Không xác định"
      },
      {
        "key": "D",
        "text": "$-1$"
      }
    ],
    "correct": "B",
    "explanation": "Lấy định thức hai vế: $\\det(A^3) = (\\det A)^3 = \\det(0) = 0 \\Rightarrow \\det A = 0$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 240,
    "originalId": 240,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Ma trận $A$ được gọi là **phản đối xứng** (skew-symmetric) nếu $A^T = -A$. Nếu $A$ là ma trận phản đối xứng cấp lẻ ($n = 3, 5, \\dots$), thì $\\det A$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$1$"
      },
      {
        "key": "B",
        "text": "$0$"
      },
      {
        "key": "C",
        "text": "$-1$"
      },
      {
        "key": "D",
        "text": "$(-1)^n$"
      }
    ],
    "correct": "B",
    "explanation": "Từ $A^T = -A$, lấy định thức hai vế: $\\det(A^T) = \\det(-A) \\Leftrightarrow \\det A = (-1)^n \\det A$. Khi $n$ lẻ, $(-1)^n = -1$, suy ra $\\det A = -\\det A \\Leftrightarrow 2\\det A = 0 \\Leftrightarrow \\det A = 0$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 241,
    "originalId": 241,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho $A$ là ma trận vuông cấp 3 có $\\det A = 4$. Tính định thức của ma trận phụ hợp $\\det(\\operatorname{adj}(A))$.",
    "options": [
      {
        "key": "A",
        "text": "$16$"
      },
      {
        "key": "B",
        "text": "$64$"
      },
      {
        "key": "C",
        "text": "$4$"
      },
      {
        "key": "D",
        "text": "$8$"
      }
    ],
    "correct": "A",
    "explanation": "Với ma trận vuông cấp $n$, ta có công thức $\\det(\\operatorname{adj}(A)) = (\\det A)^{n-1}$. Ở đây $n = 3$, nên $\\det(\\operatorname{adj}(A)) = 4^{3-1} = 4^2 = 16$.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 242,
    "originalId": 242,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tính định thức: $D = \\begin{vmatrix} 1 & a & a^2 \\\\ 1 & b & b^2 \\\\ 1 & c & c^2 \\end{vmatrix}$.",
    "options": [
      {
        "key": "A",
        "text": "$(a - b)(b - c)(c - a)$"
      },
      {
        "key": "B",
        "text": "$(a + b)(b + c)(c + a)$"
      },
      {
        "key": "C",
        "text": "$a^2 + b^2 + c^2$"
      },
      {
        "key": "D",
        "text": "$(b - a)(c - a)(c - b)$"
      }
    ],
    "correct": "D",
    "explanation": "Đây là định thức Vandermonde cấp 3 kinh điển: $V(a, b, c) = (b - a)(c - a)(c - b)$.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 243,
    "originalId": 243,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Nếu đổi chỗ hai hàng của một định thức thì giá trị định thức thay đổi như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Bằng 0"
      },
      {
        "key": "B",
        "text": "Đổi dấu"
      },
      {
        "key": "C",
        "text": "Không đổi"
      },
      {
        "key": "D",
        "text": "Tăng lên gấp đôi"
      }
    ],
    "correct": "B",
    "explanation": "Theo tính chất cơ bản của định thức, phép đổi chỗ hai hàng (hoặc hai cột) bất kỳ của định thức làm định thức đổi dấu.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 244,
    "originalId": 244,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận vuông $A$ cấp 3. Nếu nhân tất cả các phần tử của hàng thứ hai với 5 thì định thức của ma trận mới sẽ:",
    "options": [
      {
        "key": "A",
        "text": "Gấp 25 lần định thức của $A$"
      },
      {
        "key": "B",
        "text": "Gấp 125 lần định thức của $A$"
      },
      {
        "key": "C",
        "text": "Không đổi"
      },
      {
        "key": "D",
        "text": "Gấp 5 lần định thức của $A$"
      }
    ],
    "correct": "D",
    "explanation": "Khi nhân một hàng duy nhất của định thức với một hằng số $k$, định thức tăng lên $k$ lần. Ở đây chỉ nhân một hàng với $5$ nên định thức tăng lên 5 lần. (Lưu ý: nếu nhân toàn bộ ma trận với 5 thì mới là $5^3 = 125$ lần).\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 245,
    "originalId": 245,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Nếu cộng một bội của hàng này vào hàng khác trong một định thức thì giá trị của định thức sẽ:",
    "options": [
      {
        "key": "A",
        "text": "Đổi dấu"
      },
      {
        "key": "B",
        "text": "Không đổi"
      },
      {
        "key": "C",
        "text": "Bằng 0"
      },
      {
        "key": "D",
        "text": "Tăng lên bằng hệ số bội"
      }
    ],
    "correct": "B",
    "explanation": "Phép biến đổi sơ cấp loại 3: $H_i \\to H_i + k H_j$ ($i \\neq j$) không làm thay đổi giá trị của định thức.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 246,
    "originalId": 246,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hai ma trận vuông $A, B$ cấp $n$. Biết $\\det A = 3$ và $\\det B = -2$. Giá trị của $\\det(A^2 B^T)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$-18$"
      },
      {
        "key": "B",
        "text": "$-36$"
      },
      {
        "key": "C",
        "text": "$18$"
      },
      {
        "key": "D",
        "text": "$-12$"
      }
    ],
    "correct": "A",
    "explanation": "Áp dụng các tính chất định thức: $\\det(A^2 B^T) = \\det(A^2) \\cdot \\det(B^T) = (\\det A)^2 \\cdot \\det B = 3^2 \\cdot (-2) = 9 \\cdot (-2) = -18$.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 247,
    "originalId": 247,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận khối $M = \\begin{bmatrix} A & B \\\\ 0 & C \\end{bmatrix}$, trong đó $A$ và $C$ là các ma trận vuông. Định thức của $M$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\det(M) = \\det(A) \\cdot \\det(C)$"
      },
      {
        "key": "B",
        "text": "$\\det(M) = \\det(A) \\cdot \\det(C) - \\det(B)$"
      },
      {
        "key": "C",
        "text": "$\\det(M) = \\det(A) + \\det(C)$"
      },
      {
        "key": "D",
        "text": "$\\det(M) = 0$"
      }
    ],
    "correct": "A",
    "explanation": "Theo tính chất định thức của ma trận khối tam giác (block triangular matrix), ta luôn có $\\det \\begin{bmatrix} A & B \\\\ 0 & C \\end{bmatrix} = \\det(A) \\cdot \\det(C)$.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 248,
    "originalId": 248,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tính định thức cấp 4: $D = \\begin{vmatrix} 2 & 0 & 0 & 0 \\\\ 1 & 3 & 0 & 0 \\\\ 4 & 5 & -1 & 0 \\\\ 7 & 8 & 9 & 4 \\end{vmatrix}$.",
    "options": [
      {
        "key": "A",
        "text": "$24$"
      },
      {
        "key": "B",
        "text": "$-24$"
      },
      {
        "key": "C",
        "text": "$48$"
      },
      {
        "key": "D",
        "text": "$-48$"
      }
    ],
    "correct": "B",
    "explanation": "Đây là ma trận tam giác dưới. Định thức bằng tích các phần tử nằm trên đường chéo chính: $D = 2 \\cdot 3 \\cdot (-1) \\cdot 4 = -24$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 249,
    "originalId": 249,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho $A$ là ma trận trực giao ($A^T A = I$). Giá trị có thể có của $\\det A$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\pm 1$"
      },
      {
        "key": "B",
        "text": "Chỉ có thể bằng $1$"
      },
      {
        "key": "C",
        "text": "Số thực bất kỳ"
      },
      {
        "key": "D",
        "text": "Bằng $0$"
      }
    ],
    "correct": "A",
    "explanation": "Từ $A^T A = I$, lấy định thức hai vế: $\\det(A^T A) = \\det(A^T) \\det(A) = (\\det A)^2 = \\det I = 1 \\Rightarrow \\det A = \\pm 1$.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 250,
    "originalId": 250,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận vuông $A$ cấp $n=4$ có $\\det A = 3$. Giá trị của định thức $\\det(2A)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$6$"
      },
      {
        "key": "B",
        "text": "$48$"
      },
      {
        "key": "C",
        "text": "$24$"
      },
      {
        "key": "D",
        "text": "$12$"
      }
    ],
    "correct": "B",
    "explanation": "* **Công thức tính chất định thức đối với phép nhân số thực:**\n  * Với ma trận vuông $A$ cấp $n$ và số thực $k$, ta có:\n    $$\\det(kA) = k^n \\det A$$\n* Áp dụng với $n = 4$, $k = 2$ và $\\det A = 3$:\n  $$\\det(2A) = 2^4 \\cdot \\det A = 16 \\cdot 3 = 48$$\n* **Lưu ý tránh bẫy:** Rất nhiều học sinh nhầm lẫn $\\det(kA) = k \\det A$, đây là sai sót phổ biến!\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 251,
    "originalId": 251,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Định thức của ma trận tam giác khối $M = \\begin{bmatrix} A & B \\\\ 0 & C \\end{bmatrix}$ (trong đó $A, C$ là các ma trận vuông) được tính bằng:",
    "options": [
      {
        "key": "A",
        "text": "$\\det(AC - B)$"
      },
      {
        "key": "B",
        "text": "$\\det A \\cdot \\det C - \\det B$"
      },
      {
        "key": "C",
        "text": "$\\det A + \\det C$"
      },
      {
        "key": "D",
        "text": "$\\det A \\cdot \\det C$"
      }
    ],
    "correct": "D",
    "explanation": "* **Công thức định thức ma trận tam giác khối:**\n  * Với ma trận dạng khối mà khối ở góc dưới bên trái là khối số 0:\n    $$\\det \\begin{bmatrix} A & B \\\\ 0 & C \\end{bmatrix} = \\det A \\cdot \\det C$$\n  * Tương tự cho ma trận khối tam giác dưới $\\det \\begin{bmatrix} A & 0 \\\\ B & C \\end{bmatrix} = \\det A \\cdot \\det C$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 252,
    "originalId": 252,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tính định thức $\\begin{vmatrix} 1 & a & a^2 \\\\ 1 & b & b^2 \\\\ 1 & c & c^2 \\end{vmatrix}$ (Định thức Vandermonde cấp 3):",
    "options": [
      {
        "key": "A",
        "text": "$(b - a)(c - a)(c - b)$"
      },
      {
        "key": "B",
        "text": "$(a - b)(b - c)(c - a)$"
      },
      {
        "key": "C",
        "text": "$(a + b)(b + c)(c + a)$"
      },
      {
        "key": "D",
        "text": "$abc(a - b)(b - c)$"
      }
    ],
    "correct": "A",
    "explanation": "* **Công thức định thức Vandermonde cấp 3:**\n  * Bằng các phép biến đổi hàng $h_2 \\to h_2 - h_1$, $h_3 \\to h_3 - h_1$, ta đặt nhân tử chung $(b - a)$ và $(c - a)$ ra ngoài.\n  * Kết quả thu được công thức chuẩn:\n    $$V_3 = (b - a)(c - a)(c - b)$$\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 253,
    "originalId": 253,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Nếu ma trận vuông $A$ thỏa mãn $A^2 = A$ (ma trận lũy đẳng - idempotent), thì định thức $\\det A$ có thể nhận những giá trị nào?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ $\\det A = 1$"
      },
      {
        "key": "B",
        "text": "$\\det A = \\pm 1$"
      },
      {
        "key": "C",
        "text": "$\\det A = 0$ hoặc $\\det A = 1$"
      },
      {
        "key": "D",
        "text": "Chỉ $\\det A = 0$"
      }
    ],
    "correct": "C",
    "explanation": "* **Kỹ thuật sử dụng tính chất định thức của tích:**\n  * Lấy định thức hai vế của đẳng thức $A^2 = A$:\n    $$\\det(A^2) = \\det A \\iff (\\det A)^2 = \\det A$$\n  * Đặt $d = \\det A$, ta có phương trình bậc hai:\n    $$d^2 - d = 0 \\iff d(d - 1) = 0 \\iff \\left[\\begin{array}{l} d = 0 \\\\ d = 1 \\end{array}\\right.$$\n* Vậy $\\det A$ chỉ có thể bằng $0$ hoặc $1$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 254,
    "originalId": 254,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận vuông $A$ phản đối xứng (skew-symmetric, tức $A^T = -A$) cấp $n = 3$. Giá trị của $\\det A$ là:",
    "options": [
      {
        "key": "A",
        "text": "$0$"
      },
      {
        "key": "B",
        "text": "Phụ thuộc vào các phần tử của $A$"
      },
      {
        "key": "C",
        "text": "$-1$"
      },
      {
        "key": "D",
        "text": "$1$"
      }
    ],
    "correct": "A",
    "explanation": "* **Định lý về định thức của ma trận phản đối xứng cấp lẻ:**\n  * Vì $A^T = -A$, lấy định thức hai vế:\n    $$\\det(A^T) = \\det(-A)$$\n  * Vì $\\det(A^T) = \\det A$ và $\\det(-A) = (-1)^n \\det A$, với $n = 3$ lẻ:\n    $$\\det A = (-1)^3 \\det A = -\\det A \\implies 2\\det A = 0 \\implies \\det A = 0$$\n* Mọi ma trận phản đối xứng cấp lẻ đều có định thức bằng 0.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 255,
    "originalId": 255,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 2,
    "typeId": "3.2",
    "typeName": "Tính Định thức (Determinant)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Biết $\\det \\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & k \\end{bmatrix} = 5$. Tính $\\det \\begin{bmatrix} 2a & 2b & 2c \\\\ g & h & k \\\\ d & e & f \\end{bmatrix}$:",
    "options": [
      {
        "key": "A",
        "text": "$-10$"
      },
      {
        "key": "B",
        "text": "$20$"
      },
      {
        "key": "C",
        "text": "$10$"
      },
      {
        "key": "D",
        "text": "$-5$"
      }
    ],
    "correct": "A",
    "explanation": "* **Áp dụng các tính chất cơ bản của định thức:**\n  1. Hàng 1 được nhân với $2 \\implies$ định thức nhân $2$.\n  2. Đổi chỗ hàng 2 và hàng 3 $\\implies$ định thức đổi dấu (nhân $-1$).\n  * Kết hợp hai phép biến đổi:\n    $$\\det = 2 \\cdot (-1) \\cdot 5 = -10$$\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 256,
    "originalId": 2,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho ma trận trực giao $A$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$\\det A = -1$"
      },
      {
        "key": "B",
        "text": "Các véc tơ hàng của $A$ không tạo thành hệ trực chuẩn"
      },
      {
        "key": "C",
        "text": "$\\det A = 1$"
      },
      {
        "key": "D",
        "text": "$A$ khả nghịch và $A^{-1} = A^t$"
      }
    ],
    "correct": "D",
    "explanation": "* **Định nghĩa ma trận trực giao:** Ma trận vuông thực $A$ được gọi là trực giao nếu $A^t A = A A^t = I$.\n* Từ định nghĩa suy ra:\n  * $A$ luôn khả nghịch và ma trận nghịch đảo bằng chính ma trận chuyển vị: $A^{-1} = A^t$.\n  * $\\det(A^t A) = (\\det A)^2 = \\det I = 1 \\implies \\det A = \\pm 1$ (chứ không nhất thiết chỉ bằng $1$ hay $-1$).\n  * Các véc tơ hàng (và cột) của $A$ luôn tạo thành một hệ trực chuẩn.\n* **Chọn đáp án: D.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 257,
    "originalId": 3,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Tìm ma trận $X$ thỏa mãn phương trình:\n$$X \\begin{bmatrix} -2 & -1 \\\\ 2 & 3 \\end{bmatrix} = \\begin{bmatrix} 0 & 1 \\\\ 2 & -1 \\end{bmatrix}$$",
    "options": [
      {
        "key": "A",
        "text": "$X = \\begin{bmatrix} 1/2 & 1/2 \\\\ -2 & -1 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$X = \\begin{bmatrix} -1/2 & -1/2 \\\\ 1 & 0 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$X = \\begin{bmatrix} -2 & -2 \\\\ 8 & 4 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$X = \\begin{bmatrix} 2 & 2 \\\\ -4 & 0 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* Đặt $A = \\begin{bmatrix} -2 & -1 \\\\ 2 & 3 \\end{bmatrix}$ và $B = \\begin{bmatrix} 0 & 1 \\\\ 2 & -1 \\end{bmatrix}$. Phương trình có dạng $XA = B \\implies X = BA^{-1}$.\n* Tính $\\det A = (-2)(3) - (-1)(2) = -6 + 2 = -4 \\neq 0$.\n* Ma trận nghịch đảo:\n  $$A^{-1} = -\\frac{1}{4} \\begin{bmatrix} 3 & 1 \\\\ -2 & -2 \\end{bmatrix}$$\n* Nhân ma trận:\n  $$X = \\begin{bmatrix} 0 & 1 \\\\ 2 & -1 \\end{bmatrix} \\left(-\\frac{1}{4}\\right) \\begin{bmatrix} 3 & 1 \\\\ -2 & -2 \\end{bmatrix} = -\\frac{1}{4} \\begin{bmatrix} -2 & -2 \\\\ 8 & 4 \\end{bmatrix} = \\begin{bmatrix} 1/2 & 1/2 \\\\ -2 & -1 \\end{bmatrix}$$\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 258,
    "originalId": 10,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho $A$ là một ma trận vuông cấp 3. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Nếu $A \\neq 0$ thì $A^2 \\neq 0$"
      },
      {
        "key": "B",
        "text": "Nếu $A^2$ khả nghịch thì $A$ khả nghịch"
      },
      {
        "key": "C",
        "text": "Nếu $A^2 = A$ và $A \\neq 0$ thì $A = I$"
      },
      {
        "key": "D",
        "text": "Nếu $A$ có tổng các phần tử ở mỗi hàng đều bằng 0 thì $A$ khả nghịch"
      }
    ],
    "correct": "B",
    "explanation": "* Xét phương án B: Ta có $\\det(A^2) = (\\det A)^2$. Nếu $A^2$ khả nghịch thì $\\det(A^2) \\neq 0 \\implies (\\det A)^2 \\neq 0 \\implies \\det A \\neq 0$, do đó $A$ khả nghịch. Đây là khẳng định đúng.\n* Các phương án khác đều sai:\n  * A sai: ví dụ ma trận lũy linh $A = \\begin{bmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix} \\neq 0$ nhưng $A^2 = 0$.\n  * C sai: ví dụ ma trận chiếu $A = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix} \\neq 0$ có $A^2 = A$ nhưng $A \\neq I$.\n  * D sai: tổng mỗi hàng bằng 0 thì véc tơ cột $(1, 1, 1)^T$ là nghiệm của $AX = 0$, suy ra $\\det A = 0$ (không khả nghịch).\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 259,
    "originalId": 31,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho ma trận $A = \\begin{bmatrix} m - 1 & 3 & -3 \\\\ -3 & m + 5 & -3 \\\\ 5 & -5 & m - 2 \\end{bmatrix}$. Điều kiện cần và đủ để $A$ có ma trận nghịch đảo là:",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq 2$ và $m \\neq -2$"
      },
      {
        "key": "B",
        "text": "$m \\neq -2$ và $m \\neq 1$"
      },
      {
        "key": "C",
        "text": "$m = 2$ hoặc $m = -2$"
      },
      {
        "key": "D",
        "text": "$m = -2$ hoặc $m = 1$"
      }
    ],
    "correct": "A",
    "explanation": "* Ma trận vuông $A$ khả nghịch khi và chỉ khi $\\det A \\neq 0$.\n* Tính định thức $\\det A$:\n  * Thực hiện phép biến đổi hàng $h_1 \\to h_1 + h_3$:\n    $$\\begin{bmatrix} m + 4 & -2 & m - 5 \\\\ -3 & m + 5 & -3 \\\\ 5 & -5 & m - 2 \\end{bmatrix}$$\n  * Khai triển hoặc tính định thức ta thu được:\n    $$\\det A = m(m - 2)(m + 2) \\quad \\text{hoặc} \\quad (m - 2)(m + 2)(m + \\dots)$$\n  * Phương trình $\\det A = 0$ có các nghiệm $m = \\pm 2$.\n  * Do đó điều kiện để $A$ có ma trận nghịch đảo là $m \\neq 2$ và $m \\neq -2$.\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 260,
    "originalId": 39,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho ma trận $A = \\begin{bmatrix} 1 & -1 & 1 \\\\ 0 & 0 & 3 \\\\ 4 & 2 & 0 \\end{bmatrix}$. Phần tử ở vị trí hàng 2, cột 1 của ma trận $A^{-1}$ là:",
    "options": [
      {
        "key": "A",
        "text": "$-\\dfrac{1}{9}$"
      },
      {
        "key": "B",
        "text": "$-\\dfrac{2}{3}$"
      },
      {
        "key": "C",
        "text": "$\\dfrac{2}{3}$"
      },
      {
        "key": "D",
        "text": "$\\dfrac{1}{9}$"
      }
    ],
    "correct": "B",
    "explanation": "* Phần tử hàng 2, cột 1 của ma trận nghịch đảo $A^{-1}$ là:\n  $$(A^{-1})_{21} = \\frac{C_{12}}{\\det A} = \\frac{(-1)^{1+2} M_{12}}{\\det A}$$\n* Tính định thức $\\det A$ (khai triển theo hàng 2):\n  $$\\det A = -3 \\begin{vmatrix} 1 & -1 \\\\ 4 & 2 \\end{vmatrix} = -3(2 - (-4)) = -3(6) = -18$$\n* Tính $C_{12}$ (phần phụ đại số hàng 1, cột 2):\n  $$C_{12} = (-1)^3 \\begin{vmatrix} 0 & 3 \\\\ 4 & 0 \\end{vmatrix} = -(0 - 12) = 12$$\n* Do đó:\n  $$(A^{-1})_{21} = \\frac{12}{-18} = -\\frac{2}{3}$$\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 261,
    "originalId": 10,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Cho ma trận $A = \\begin{bmatrix} 1 & 1 & 1 \\\\ 2 & 3 & 1 \\\\ 3 & 4 & 5 \\end{bmatrix} \\begin{bmatrix} 2 & 1 & m \\\\ 3 & 5 & 0 \\\\ -4 & 0 & 0 \\end{bmatrix}$. Tìm $m$ để $A$ khả nghịch:",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq 20$"
      },
      {
        "key": "B",
        "text": "$m \\neq 0$"
      },
      {
        "key": "C",
        "text": "Với mọi $m$"
      },
      {
        "key": "D",
        "text": "$m$ khác"
      }
    ],
    "correct": "B",
    "explanation": "* Ta có $\\det A = \\det(M_1) \\cdot \\det(M_2)$.\n* Tính $\\det M_1$:\n  $$\\det M_1 = 1(15 - 4) - 1(10 - 3) + 1(8 - 9) = 11 - 7 - 1 = 3 \\neq 0$$\n* Tính $\\det M_2$ (khai triển theo cột 3):\n  $$\\det M_2 = m \\cdot (-1)^{1+3} \\begin{vmatrix} 3 & 5 \\\\ -4 & 0 \\end{vmatrix} = m(0 - (-20)) = 20m$$\n* Do đó: $\\det A = 3 \\cdot 20m = 60m$.\n* Ma trận $A$ khả nghịch $\\iff \\det A \\neq 0 \\iff 60m \\neq 0 \\iff m \\neq 0$.\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 262,
    "originalId": 19,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Tìm ma trận $X$ thỏa mãn phương trình:\n$$X \\begin{bmatrix} 2 & 5 \\\\ 1 & 3 \\end{bmatrix} = \\begin{bmatrix} 4 & 2 \\\\ 5 & 6 \\\\ -1 & 7 \\end{bmatrix}$$",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 9 & 15 \\\\ 7 & 12 \\\\ -1 & 6 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 10 & -16 \\\\ 9 & -18 \\\\ -10 & 19 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 10 & 7 \\\\ -8 & 16 \\\\ 0 & 12 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "Cả 3 đáp án đều sai"
      }
    ],
    "correct": "B",
    "explanation": "* Đặt $A = \\begin{bmatrix} 2 & 5 \\\\ 1 & 3 \\end{bmatrix}$. Ta có $\\det A = 2(3) - 5(1) = 1 \\neq 0$.\n* Nghịch đảo: $A^{-1} = \\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix}$.\n* Phương trình có dạng $XA = B \\implies X = BA^{-1}$:\n  $$X = \\begin{bmatrix} 4 & 2 \\\\ 5 & 6 \\\\ -1 & 7 \\end{bmatrix} \\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix} = \\begin{bmatrix} 4(3)+2(-1) & 4(-5)+2(2) \\\\ 5(3)+6(-1) & 5(-5)+6(2) \\\\ -1(3)+7(-1) & -1(-5)+7(2) \\end{bmatrix} = \\begin{bmatrix} 10 & -16 \\\\ 9 & -18 \\\\ -10 & 19 \\end{bmatrix}$$\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 263,
    "originalId": 32,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Cho ma trận $A = \\begin{bmatrix} 3 & 1 & 5-m \\\\ m+1 & 1 & 3 \\\\ 3 & m-1 & 3 \\end{bmatrix}; m \\in \\mathbb{R}$. Với giá trị nào của $m$ thì tồn tại ma trận nghịch đảo $A^{-1}$?",
    "options": [
      {
        "key": "A",
        "text": "$m = 2, m = 1$"
      },
      {
        "key": "B",
        "text": "$m \\neq 2, m \\neq 1$"
      },
      {
        "key": "C",
        "text": "$m = 1$"
      },
      {
        "key": "D",
        "text": "$m = 2$"
      }
    ],
    "correct": "B",
    "explanation": "* Ma trận vuông $A$ khả nghịch (tồn tại $A^{-1}$) khi và chỉ khi $\\det A \\neq 0$.\n* Khai triển định thức ma trận $A$:\n  $$\\det A = 3 \\begin{vmatrix} 1 & 3 \\\\ m-1 & 3 \\end{vmatrix} - 1 \\begin{vmatrix} m+1 & 3 \\\\ 3 & 3 \\end{vmatrix} + (5-m) \\begin{vmatrix} m+1 & 1 \\\\ 3 & m-1 \\end{vmatrix}$$\n  $$= 3(3 - 3m + 3) - (3m + 3 - 9) + (5-m)(m^2 - 1 - 3)$$\n  $$= 3(6 - 3m) - (3m - 6) + (5-m)(m^2 - 4)$$\n  $$= 18 - 9m - 3m + 6 + 5m^2 - 20 - m^3 + 4m$$\n  $$= -m^3 + 5m^2 - 8m + 4$$\n* Phân tích thành nhân tử:\n  $$\\det A = -(m - 1)(m^2 - 4m + 4) = -(m - 1)(m - 2)^2$$\n* Để tồn tại $A^{-1}$ thì $\\det A \\neq 0 \\iff m \\neq 1$ và $m \\neq 2$.\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 264,
    "originalId": 33,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Cho ma trận $A = \\begin{bmatrix} 3 & 1 & 5-m \\\\ m+1 & 1 & 3 \\\\ 3 & m-1 & 3 \\end{bmatrix}$, với $m = -1$ tìm $A^{-1}$:",
    "options": [
      {
        "key": "A",
        "text": "$A^{-1} = \\dfrac{1}{18} \\begin{bmatrix} 9 & -15 & -3 \\\\ 9 & -9 & -9 \\\\ -3 & 9 & 3 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$A^{-1} = \\dfrac{1}{9} \\begin{bmatrix} 9 & -15 & -3 \\\\ 9 & -9 & -9 \\\\ -3 & 9 & 3 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$A^{-1} = \\dfrac{1}{18} \\begin{bmatrix} 2 & -6 & 2 \\\\ -3 & 8 & 2 \\\\ -6 & 1 & -5 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$A^{-1} = \\dfrac{1}{9} \\begin{bmatrix} 2 & -6 & 2 \\\\ -3 & 8 & 2 \\\\ -6 & 1 & -5 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* Khi $m = -1$, ma trận $A$ trở thành:\n  $$A = \\begin{bmatrix} 3 & 1 & 6 \\\\ 0 & 1 & 3 \\\\ 3 & -2 & 3 \\end{bmatrix}$$\n* Định thức: $\\det A = -(-1 - 1)(-1 - 2)^2 = -(-2)(9) = 18 \\neq 0$.\n* Tìm ma trận phần phụ đại số $C$:\n  * $C_{11} = +(3 - (-6)) = 9, \\quad C_{12} = -(0 - 9) = 9, \\quad C_{13} = +(0 - 3) = -3$\n  * $C_{21} = -(3 - (-12)) = -15, \\quad C_{22} = +(9 - 18) = -9, \\quad C_{23} = -(-6 - 3) = 9$\n  * $C_{31} = +(3 - 6) = -3, \\quad C_{32} = -(9 - 0) = -9, \\quad C_{33} = +(3 - 0) = 3$\n* Ma trận chuyển vị của các phần phụ đại số:\n  $$C^T = \\begin{bmatrix} 9 & -15 & -3 \\\\ 9 & -9 & -9 \\\\ -3 & 9 & 3 \\end{bmatrix}$$\n* Do đó:\n  $$A^{-1} = \\frac{1}{\\det A} C^T = \\frac{1}{18} \\begin{bmatrix} 9 & -15 & -3 \\\\ 9 & -9 & -9 \\\\ -3 & 9 & 3 \\end{bmatrix}$$\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 265,
    "originalId": 265,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận vuông cấp 2: $A = \\begin{bmatrix} 2 & 5 \\\\ 1 & 3 \\end{bmatrix}$. Ma trận nghịch đảo $A^{-1}$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} -3 & 5 \\\\ 1 & -2 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 2 & -1 \\\\ -5 & 3 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 3 & 5 \\\\ 1 & 2 \\end{bmatrix}$"
      }
    ],
    "correct": "C",
    "explanation": "Ta có $\\det A = 2 \\cdot 3 - 5 \\cdot 1 = 6 - 5 = 1$. Công thức nghịch đảo ma trận cấp 2 là $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}^{-1} = \\dfrac{1}{ad - bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$. Suy ra $A^{-1} = \\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix}$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 266,
    "originalId": 266,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho $A$ là ma trận vuông cấp 3 có $\\det A = 3$. Tính $\\det(A^{-1} A^T)$.",
    "options": [
      {
        "key": "A",
        "text": "$3$"
      },
      {
        "key": "B",
        "text": "$1$"
      },
      {
        "key": "C",
        "text": "$1/3$"
      },
      {
        "key": "D",
        "text": "$9$"
      }
    ],
    "correct": "B",
    "explanation": "Ta có $\\det(A^{-1} A^T) = \\det(A^{-1}) \\cdot \\det(A^T) = \\dfrac{1}{\\det A} \\cdot \\det A = 1$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 267,
    "originalId": 267,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận phụ hợp $\\operatorname{adj}(A)$ của ma trận vuông $A$ cấp $n$. Hệ thức nào sau đây luôn đúng?",
    "options": [
      {
        "key": "A",
        "text": "$A \\cdot \\operatorname{adj}(A) = I_n$"
      },
      {
        "key": "B",
        "text": "$A \\cdot \\operatorname{adj}(A) = (\\det A) \\cdot I_n$"
      },
      {
        "key": "C",
        "text": "$A \\cdot \\operatorname{adj}(A) = (\\det A)^n \\cdot I_n$"
      },
      {
        "key": "D",
        "text": "$\\operatorname{adj}(A) = (\\det A) \\cdot A$"
      }
    ],
    "correct": "B",
    "explanation": "Theo định lý cơ bản về ma trận phụ hợp: tích của ma trận $A$ với ma trận phụ hợp $\\operatorname{adj}(A)$ luôn bằng $(\\det A) I_n$. Từ đó suy ra công thức nghịch đảo $A^{-1} = \\frac{1}{\\det A}\\operatorname{adj}(A)$ khi $\\det A \\neq 0$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 268,
    "originalId": 268,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm tất cả các giá trị của $m$ để ma trận $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & m \\end{bmatrix}$ suy biến (không khả nghịch):",
    "options": [
      {
        "key": "A",
        "text": "$m = 0$"
      },
      {
        "key": "B",
        "text": "$m = 6$"
      },
      {
        "key": "C",
        "text": "$m = -6$"
      },
      {
        "key": "D",
        "text": "$m \\neq 6$"
      }
    ],
    "correct": "B",
    "explanation": "Ma trận $A$ suy biến khi và chỉ khi $\\det A = 0 \\Leftrightarrow 1 \\cdot m - 2 \\cdot 3 = 0 \\Leftrightarrow m - 6 = 0 \\Leftrightarrow m = 6$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 269,
    "originalId": 269,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận vuông $A$ thỏa mãn $A^2 - 3A + 2I = 0$. Ma trận nghịch đảo $A^{-1}$ được biểu diễn là:",
    "options": [
      {
        "key": "A",
        "text": "$A^{-1} = \\dfrac{1}{2}(A + 3I)$"
      },
      {
        "key": "B",
        "text": "$A^{-1} = 3I - A$"
      },
      {
        "key": "C",
        "text": "$A^{-1} = \\dfrac{3}{2}I - \\dfrac{1}{2}A$"
      },
      {
        "key": "D",
        "text": "$A^{-1} = A - 3I$"
      }
    ],
    "correct": "C",
    "explanation": "Từ $A^2 - 3A + 2I = 0 \\Leftrightarrow A(3I - A) = 2I \\Leftrightarrow A \\left(\\dfrac{3}{2}I - \\dfrac{1}{2}A\\right) = I$. Suy ra $A^{-1} = \\dfrac{3}{2}I - \\dfrac{1}{2}A$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 270,
    "originalId": 270,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận $A = \\begin{bmatrix} 2 & 1 & 0 \\\\ 0 & 3 & 1 \\\\ 1 & 0 & 2 \\end{bmatrix}$. Phần tử ở vị trí hàng 2, cột 1 của ma trận nghịch đảo $A^{-1}$ là:",
    "options": [
      {
        "key": "A",
        "text": "$-2/13$"
      },
      {
        "key": "B",
        "text": "$-1/13$"
      },
      {
        "key": "C",
        "text": "$1/13$"
      },
      {
        "key": "D",
        "text": "$2/13$"
      }
    ],
    "correct": "C",
    "explanation": "* **Kỹ thuật tính phần tử cụ thể của ma trận nghịch đảo:**\n  * Công thức ma trận nghịch đảo: $A^{-1} = \\dfrac{1}{\\det A} (C_{ij})^T$.\n  * Do đó phần tử hàng $i$, cột $j$ của $A^{-1}$ là:\n    $$(A^{-1})_{ij} = \\frac{C_{ji}}{\\det A} = \\frac{(-1)^{j+i} M_{ji}}{\\det A}$$\n    *(Chú ý chỉ số đảo lại: hàng $2$, cột $1$ của $A^{-1}$ ứng với phần phụ đại số $C_{12}$)*.\n* Tính $\\det A$:\n  $$\\det A = 2(6 - 0) - 1(0 - 1) + 0 = 12 + 1 = 13$$\n* Tính $C_{12}$ (bỏ hàng 1, cột 2):\n  $$C_{12} = (-1)^{1+2} \\begin{vmatrix} 0 & 1 \\\\ 1 & 2 \\end{vmatrix} = -(0 - 1) = 1$$\n* Suy ra $(A^{-1})_{21} = \\dfrac{C_{12}}{\\det A} = \\dfrac{1}{13}$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 271,
    "originalId": 271,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hai ma trận vuông khả nghịch $A$ và $B$. Ma trận $X$ thỏa mãn phương trình $A X B = C$ là:",
    "options": [
      {
        "key": "A",
        "text": "$X = A^{-1} C B^{-1}$"
      },
      {
        "key": "B",
        "text": "$X = B^{-1} C A^{-1}$"
      },
      {
        "key": "C",
        "text": "$X = C A^{-1} B^{-1}$"
      },
      {
        "key": "D",
        "text": "$X = A^{-1} B^{-1} C$"
      }
    ],
    "correct": "A",
    "explanation": "* **Kỹ thuật giải phương trình ma trận:**\n  * Phép nhân ma trận không có tính giao hoán, nên ta phải nhân nghịch đảo đúng phía:\n  * Nhân cả hai vế về bên trái với $A^{-1}$:\n    $$A^{-1}(AXB) = A^{-1} C \\implies (A^{-1}A) X B = A^{-1} C \\implies X B = A^{-1} C$$\n  * Nhân cả hai vế về bên phải với $B^{-1}$:\n    $$(XB) B^{-1} = (A^{-1} C) B^{-1} \\implies X (B B^{-1}) = A^{-1} C B^{-1} \\implies X = A^{-1} C B^{-1}$$\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 272,
    "originalId": 272,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận $A$ vuông cấp 3 có $\\det A = -4$. Giá trị của $\\det(A^{-1} \\cdot A^T)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$16$"
      },
      {
        "key": "B",
        "text": "$-16$"
      },
      {
        "key": "C",
        "text": "$1$"
      },
      {
        "key": "D",
        "text": "$-1$"
      }
    ],
    "correct": "C",
    "explanation": "* **Áp dụng các tính chất của định thức:**\n  * $\\det(XY) = \\det X \\cdot \\det Y$.\n  * $\\det(A^{-1}) = \\dfrac{1}{\\det A}$.\n  * $\\det(A^T) = \\det A$.\n* Khi đó:\n  $$\\det(A^{-1} A^T) = \\det(A^{-1}) \\cdot \\det(A^T) = \\frac{1}{\\det A} \\cdot \\det A = 1$$\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 273,
    "originalId": 273,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận $A = \\begin{bmatrix} 1 & 2 & 1 \\\\ 2 & 5 & 3 \\\\ 1 & 1 & m \\end{bmatrix}$. Tìm điều kiện của $m$ để ma trận $A$ khả nghịch.",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq -1$"
      },
      {
        "key": "B",
        "text": "$m \\neq 0$"
      },
      {
        "key": "C",
        "text": "$m \\neq 2$"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "B",
    "explanation": "* **Điều kiện khả nghịch:** Ma trận vuông $A$ khả nghịch khi và chỉ khi $\\det A \\neq 0$.\n* Tính định thức $\\det A$:\n  $$\\det A = 1(5m - 3) - 2(2m - 3) + 1(2 - 5) = 5m - 3 - 4m + 6 - 3 = m$$\n* Để $A$ khả nghịch thì $\\det A \\neq 0 \\iff m \\neq 0$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 274,
    "originalId": 274,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận vuông $A$ cấp $n \\ge 2$. Ký hiệu $A^*$ là ma trận phụ hợp (adjugate matrix) của $A$. Khẳng định nào sau đây luôn đúng?",
    "options": [
      {
        "key": "A",
        "text": "$A^* = A^{-1}$ với mọi ma trận $A$"
      },
      {
        "key": "B",
        "text": "$\\det(A^*) = \\det A$"
      },
      {
        "key": "C",
        "text": "$A \\cdot A^* = A^* \\cdot A = (\\det A) \\cdot I_n$"
      },
      {
        "key": "D",
        "text": "$A \\cdot A^* = \\det A$"
      }
    ],
    "correct": "C",
    "explanation": "* **Định lý cơ bản về ma trận phụ hợp:**\n  * Tích của ma trận $A$ với ma trận phụ hợp $A^*$ bằng định thức của $A$ nhân với ma trận đơn vị:\n    $$A \\cdot A^* = A^* \\cdot A = (\\det A) \\cdot I_n$$\n  * Từ đây suy ra công thức nghịch đảo $A^{-1} = \\dfrac{1}{\\det A} A^*$ khi $\\det A \\neq 0$.\n  * Đồng thời $\\det(A^*) = (\\det A)^{n-1}$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 275,
    "originalId": 275,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm điều kiện của tham số $m$ để ma trận $A = \\begin{bmatrix} m & 5 \\\\ 3 & 1 \\end{bmatrix}$ **khả nghịch** (có nghịch đảo):",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq 15$"
      },
      {
        "key": "B",
        "text": "$m \\neq 3$"
      },
      {
        "key": "C",
        "text": "$m = 15$"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "A",
    "explanation": "* Ma trận $A$ khả nghịch khi và chỉ khi $\\det(A) \\neq 0 \\iff m \\times 1 - 5 \\times 3 \\neq 0 \\iff m \\neq 15$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 276,
    "originalId": 276,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận vuông $A$ khả nghịch cấp 3 thỏa mãn $\\det(A) = -3$. Định thức của ma trận nghịch đảo $\\det(A^{-1})$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$3$"
      },
      {
        "key": "B",
        "text": "$\\dfrac{1}{-3}$"
      },
      {
        "key": "C",
        "text": "$-3$"
      },
      {
        "key": "D",
        "text": "$\\dfrac{-1}{-3}$"
      }
    ],
    "correct": "B",
    "explanation": "* Ta có $A \\cdot A^{-1} = I \\implies \\det(A) \\cdot \\det(A^{-1}) = 1 \\implies \\det(A^{-1}) = \\dfrac{1}{\\det(A)} = \\dfrac{1}{-3}$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 277,
    "originalId": 277,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Ma trận nghịch đảo của ma trận $A = \\begin{bmatrix} 1 & 7 \\\\ 0 & 1 \\end{bmatrix}$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 1 & 0 \\\\ 7 & 1 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 1 & 7 \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 1 & -7 \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} -1 & -7 \\\\ 0 & -1 \\end{bmatrix}$"
      }
    ],
    "correct": "C",
    "explanation": "* Áp dụng công thức nghịch đảo cấp 2: $A^{-1} = \\dfrac{1}{ad - bc} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix} = \\begin{bmatrix} 1 & -7 \\\\ 0 & 1 \\end{bmatrix}$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 278,
    "originalId": 278,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm điều kiện của tham số $m$ để ma trận $A = \\begin{bmatrix} m & 2 \\\\ -1 & 1 \\end{bmatrix}$ **khả nghịch** (có nghịch đảo):",
    "options": [
      {
        "key": "A",
        "text": "$m = -2$"
      },
      {
        "key": "B",
        "text": "$m \\neq -2$"
      },
      {
        "key": "C",
        "text": "$m = 0$"
      },
      {
        "key": "D",
        "text": "$m \\neq -1$"
      }
    ],
    "correct": "B",
    "explanation": "* Ma trận $A$ khả nghịch khi và chỉ khi $\\det(A) \\neq 0 \\iff m \\times 1 - 2 \\times -1 \\neq 0 \\iff m \\neq -2$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 279,
    "originalId": 279,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận vuông $A$ khả nghịch cấp 3 thỏa mãn $\\det(A) = 4$. Định thức của ma trận nghịch đảo $\\det(A^{-1})$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$\\dfrac{-1}{4}$"
      },
      {
        "key": "B",
        "text": "$-4$"
      },
      {
        "key": "C",
        "text": "$4$"
      },
      {
        "key": "D",
        "text": "$\\dfrac{1}{4}$"
      }
    ],
    "correct": "D",
    "explanation": "* Ta có $A \\cdot A^{-1} = I \\implies \\det(A) \\cdot \\det(A^{-1}) = 1 \\implies \\det(A^{-1}) = \\dfrac{1}{\\det(A)} = \\dfrac{1}{4}$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 280,
    "originalId": 280,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Ma trận nghịch đảo của ma trận $A = \\begin{bmatrix} 1 & 4 \\\\ 0 & 1 \\end{bmatrix}$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 1 & -4 \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 1 & 0 \\\\ 4 & 1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} -1 & -4 \\\\ 0 & -1 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 1 & 4 \\\\ 0 & 1 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* Áp dụng công thức nghịch đảo cấp 2: $A^{-1} = \\dfrac{1}{ad - bc} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix} = \\begin{bmatrix} 1 & -4 \\\\ 0 & 1 \\end{bmatrix}$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 281,
    "originalId": 281,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 3,
    "typeId": "3.3",
    "typeName": "Ma trận nghịch đảo & Phần phụ đại số",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm điều kiện của tham số $m$ để ma trận $A = \\begin{bmatrix} m & 3 \\\\ -3 & 1 \\end{bmatrix}$ **khả nghịch** (có nghịch đảo):",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq -3$"
      },
      {
        "key": "B",
        "text": "$m = 0$"
      },
      {
        "key": "C",
        "text": "$m = -9$"
      },
      {
        "key": "D",
        "text": "$m \\neq -9$"
      }
    ],
    "correct": "D",
    "explanation": "* Ma trận $A$ khả nghịch khi và chỉ khi $\\det(A) \\neq 0 \\iff m \\times 1 - 3 \\times -3 \\neq 0 \\iff m \\neq -9$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 282,
    "originalId": 36,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Ký hiệu $r(A)$ là hạng của ma trận $A = \\begin{bmatrix} 1 & -2 & 0 & 0 \\\\ 3 & 4 & -1 & 2 \\\\ 1 & -1 & 0 & 0 \\\\ 1 & m & m^2 & m^3 \\end{bmatrix}$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$r(A) = \\begin{cases} 3 & \\text{nếu } m = 0 \\text{ hoặc } m = -2 \\\\ 4 & \\text{nếu } m \\neq 0 \\text{ và } m \\neq -2 \\end{cases}$"
      },
      {
        "key": "B",
        "text": "$r(A) = \\begin{cases} 3 & \\text{nếu } m = 0 \\\\ 4 & \\text{nếu } m \\neq 0 \\end{cases}$"
      },
      {
        "key": "C",
        "text": "$r(A) = \\begin{cases} 3 & \\text{nếu } m = 0 \\text{ hoặc } m = 2 \\\\ 4 & \\text{nếu } m \\neq 0 \\text{ và } m \\neq 2 \\end{cases}$"
      },
      {
        "key": "D",
        "text": "$r(A) = \\begin{cases} 2 & \\text{nếu } m = 0 \\text{ hoặc } m = -2 \\\\ 4 & \\text{nếu } m \\neq 0 \\text{ và } m \\neq -2 \\end{cases}$"
      }
    ],
    "correct": "A",
    "explanation": "* Khai triển định thức $\\det A$ theo hàng $1$ và hàng $3$ (hoặc tính định thức của $A$):\n  $$\\det A = 2m^2(m + 2)$$\n* Do đó:\n  * Nếu $m \\neq 0$ và $m \\neq -2$ thì $\\det A \\neq 0 \\implies r(A) = 4$.\n  * Nếu $m = 0$ hoặc $m = -2$ thì $\\det A = 0$. Mặt khác định thức con cấp 3 tạo bởi 3 hàng đầu khác 0:\n    $$\\begin{vmatrix} 1 & -2 & 0 \\\\ 3 & 4 & -1 \\\\ 1 & -1 & 0 \\end{vmatrix} = -(-1) \\begin{vmatrix} 1 & -2 \\\\ 1 & -1 \\end{vmatrix} = -1 + 2 = 1 \\neq 0$$\n    Do đó hạng luôn bằng 3 khi $\\det A = 0$.\n* Kết luận: $r(A) = 3$ nếu $m = 0$ hoặc $m = -2$; $r(A) = 4$ nếu $m \\neq 0$ và $m \\neq -2$.\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 283,
    "originalId": 9,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Với giá trị nào của $k$ thì hạng của ma trận $A$ lớn hơn hoặc bằng 4?\n$$A = \\begin{bmatrix} 1 & 0 & 0 & 0 & k + 5 \\\\ 2 & 3 & 0 & 0 & 4 \\\\ 4 & -2 & 5 & 0 & 6 \\\\ 2 & 1 & 7 & -1 & 8 \\\\ -1 & k + 1 & 4 & 2 & k + 5 \\end{bmatrix}$$",
    "options": [
      {
        "key": "A",
        "text": "Với mọi $k$"
      },
      {
        "key": "B",
        "text": "$k = -1$"
      },
      {
        "key": "C",
        "text": "$k = -5$"
      },
      {
        "key": "D",
        "text": "Đáp số khác"
      }
    ],
    "correct": "A",
    "explanation": "* Xét ma trận con cấp 4 tạo bởi 4 hàng đầu và 4 cột đầu tiên của $A$:\n  $$M_4 = \\begin{bmatrix} 1 & 0 & 0 & 0 \\\\ 2 & 3 & 0 & 0 \\\\ 4 & -2 & 5 & 0 \\\\ 2 & 1 & 7 & -1 \\end{bmatrix}$$\n* Đây là ma trận tam giác dưới, định thức bằng tích các phần tử trên đường chéo chính:\n  $$\\det M_4 = 1 \\cdot 3 \\cdot 5 \\cdot (-1) = -15 \\neq 0$$\n* Vì tồn tại một định thức con cấp 4 khác 0 nên hạng của ma trận luôn thỏa mãn:\n  $$r(A) \\ge 4 \\quad \\text{với mọi } k \\in \\mathbb{R}$$\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 284,
    "originalId": 11,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Tính hạng của ma trận $A = \\begin{bmatrix} 1 & 1 & 2 & -1 \\\\ 2 & 3 & 5 & 3 \\\\ 4 & 7 & 2 & 6 \\\\ 10 & 17 & 9 & 15 \\end{bmatrix}$:",
    "options": [
      {
        "key": "A",
        "text": "$r(A) = 1$"
      },
      {
        "key": "B",
        "text": "$r(A) = 3$"
      },
      {
        "key": "C",
        "text": "$r(A) = 4$"
      },
      {
        "key": "D",
        "text": "$r(A) = 2$"
      }
    ],
    "correct": "B",
    "explanation": "* Khử Gauss ma trận $A$:\n  * $h_2 \\to h_2 - 2h_1: (0, 1, 1, 5)$.\n  * $h_3 \\to h_3 - 4h_1: (0, 3, -6, 10)$.\n  * $h_4 \\to h_4 - 10h_1: (0, 7, -11, 25)$.\n* Khử tiếp cột 2:\n  * $h_3 \\to h_3 - 3h_2: (0, 0, -9, -5)$.\n  * $h_4 \\to h_4 - 7h_2: (0, 0, -18, -10) = 2(0, 0, -9, -5)$.\n* Khử tiếp hàng 4:\n  * $h_4 \\to h_4 - 2h_3: (0, 0, 0, 0)$.\n* Ma trận bậc thang có đúng 3 hàng khác 0, suy ra $r(A) = 3$.\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 285,
    "originalId": 15,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Cho ma trận $A = \\begin{bmatrix} 1 & 0 & 2 \\\\ 2 & 3 & m \\\\ 3 & 4 & 2 \\end{bmatrix}$. Tìm $m$ để hạng của ma trận nghịch đảo $A^{-1}$ bằng 3:",
    "options": [
      {
        "key": "A",
        "text": "Cả 3 câu đều sai"
      },
      {
        "key": "B",
        "text": "$m \\neq 1$"
      },
      {
        "key": "C",
        "text": "$m \\neq 2$"
      },
      {
        "key": "D",
        "text": "$m = 3$"
      }
    ],
    "correct": "B",
    "explanation": "* Ma trận vuông cấp 3 $A$ có ma trận nghịch đảo $A^{-1}$ khi và chỉ khi $A$ khả nghịch, tức là $\\det A \\neq 0$.\n* Khi $A$ khả nghịch thì $A^{-1}$ cũng là ma trận vuông cấp 3 khả nghịch, có hạng $r(A^{-1}) = 3$.\n* Tính định thức $\\det A$:\n  $$\\det A = 1(6 - 4m) - 0 + 2(8 - 9) = 6 - 4m - 2 = 4 - 4m$$\n* Để $A$ khả nghịch:\n  $$\\det A \\neq 0 \\iff 4 - 4m \\neq 0 \\iff m \\neq 1$$\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 286,
    "originalId": 286,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hạng của ma trận $A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ -1 & -2 & -3 \\end{bmatrix}$ là:",
    "options": [
      {
        "key": "A",
        "text": "$2$"
      },
      {
        "key": "B",
        "text": "$1$"
      },
      {
        "key": "C",
        "text": "$0$"
      },
      {
        "key": "D",
        "text": "$3$"
      }
    ],
    "correct": "B",
    "explanation": "Nhận thấy hàng 2 bằng $2$ lần hàng 1, hàng 3 bằng $-1$ lần hàng 1. Cả ba hàng tỉ lệ với nhau và khác hàng không, do đó số hàng độc lập tuyến tính là $1$, tức $r(A) = 1$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 287,
    "originalId": 287,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho $A$ là ma trận cỡ $4 \\times 5$ và $B$ là ma trận cỡ $5 \\times 3$. Bất đẳng thức nào sau đây về hạng của ma trận tích $AB$ là đúng?",
    "options": [
      {
        "key": "A",
        "text": "$r(AB) = 5$"
      },
      {
        "key": "B",
        "text": "$r(AB) > \\min(r(A), r(B))$"
      },
      {
        "key": "C",
        "text": "$r(AB) \\ge 4$"
      },
      {
        "key": "D",
        "text": "$r(AB) \\le 3$"
      }
    ],
    "correct": "D",
    "explanation": "Theo tính chất của hạng ma trận tích: $r(AB) \\le \\min(r(A), r(B))$. Vì $B$ có cỡ $5 \\times 3$ nên $r(B) \\le 3$, do đó $r(AB) \\le 3$.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 288,
    "originalId": 288,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Điều kiện cần và đủ để ma trận vuông $A$ khả nghịch là:",
    "options": [
      {
        "key": "A",
        "text": "Tất cả các phần tử của $A$ đều khác 0"
      },
      {
        "key": "B",
        "text": "$\\det A \\neq 0$"
      },
      {
        "key": "C",
        "text": "$A$ là ma trận đối xứng"
      },
      {
        "key": "D",
        "text": "$\\det A = 0$"
      }
    ],
    "correct": "B",
    "explanation": "Theo định lý cơ bản của đại số tuyến tính: một ma trận vuông $A$ cấp $n$ khả nghịch khi và chỉ khi định thức của nó khác $0$ (tương đương với hạng $r(A) = n$).\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 289,
    "originalId": 289,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hai ma trận $A$ cỡ $3 \\times 4$ và $B$ cỡ $4 \\times 2$. Hạng của tích ma trận $AB$ có thể nhận giá trị lớn nhất là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "$12$"
      },
      {
        "key": "B",
        "text": "$3$"
      },
      {
        "key": "C",
        "text": "$2$"
      },
      {
        "key": "D",
        "text": "$4$"
      }
    ],
    "correct": "C",
    "explanation": "* **Bất đẳng thức về hạng của tích hai ma trận:**\n  * Ta có định lý: $r(AB) \\le \\min(r(A), r(B))$.\n  * Ma trận $B$ có cỡ $4 \\times 2$ nên $r(B) \\le \\min(4, 2) = 2$.\n  * Tích $AB$ có cỡ $3 \\times 2$, do đó $r(AB) \\le \\min(3, 2) = 2$.\n  * Vậy giá trị lớn nhất mà hạng $r(AB)$ có thể đạt được là $2$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 290,
    "originalId": 290,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Khẳng định nào dưới đây là **sai** đối với phép biến đổi sơ cấp trên ma trận?",
    "options": [
      {
        "key": "A",
        "text": "Nhân một hàng với số $k \neq 0$ không làm thay đổi hạng của ma trận"
      },
      {
        "key": "B",
        "text": "Cộng vào một hàng một bội số của hàng khác không làm thay đổi hạng của ma trận"
      },
      {
        "key": "C",
        "text": "Nhân một hàng với số $k = 0$ không làm thay đổi hạng của ma trận"
      },
      {
        "key": "D",
        "text": "Đổi chỗ hai hàng không làm thay đổi hạng của ma trận"
      }
    ],
    "correct": "C",
    "explanation": "* **Định nghĩa các phép biến đổi sơ cấp trên hàng:**\n  1. Đổi chỗ hai hàng: $h_i \\leftrightarrow h_j$.\n  2. Nhân một hàng với số **khác không** $k \\neq 0$: $h_i \\to k h_i$.\n  3. Cộng vào một hàng một bội số của hàng khác: $h_i \\to h_i + c h_j$.\n* Nếu nhân một hàng với $k = 0$, hàng đó biến thành hàng toàn số 0, có thể làm giảm hạng của ma trận. Do đó phương án A là khẳng định sai.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 291,
    "originalId": 291,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm hạng của ma trận $A = \\begin{bmatrix} 1 & -1 & 2 \\\\ 2 & -2 & 4 \\\\ -1 & 1 & -2 \\end{bmatrix}$:",
    "options": [
      {
        "key": "A",
        "text": "$0$"
      },
      {
        "key": "B",
        "text": "$2$"
      },
      {
        "key": "C",
        "text": "$3$"
      },
      {
        "key": "D",
        "text": "$1$"
      }
    ],
    "correct": "D",
    "explanation": "* **Kỹ thuật quan sát sự tỉ lệ của các hàng:**\n  * Hàng 2: $h_2 = 2 \\cdot h_1$.\n  * Hàng 3: $h_3 = -1 \\cdot h_1$.\n  * Do đó, sau khi dùng phép biến đổi sơ cấp $h_2 \\to h_2 - 2h_1$ và $h_3 \\to h_3 + h_1$, ma trận đưa về:\n    $$\\begin{bmatrix} 1 & -1 & 2 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$$\n  * Ma trận chỉ có $1$ hàng khác 0, suy ra hạng $r(A) = 1$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 292,
    "originalId": 292,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hạng lớn nhất có thể có của một ma trận kích thước $3 \\times 3$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$6$"
      },
      {
        "key": "B",
        "text": "$9$"
      },
      {
        "key": "C",
        "text": "$3$"
      },
      {
        "key": "D",
        "text": "$4$"
      }
    ],
    "correct": "C",
    "explanation": "* Hạng của ma trận $A_{m \\times n}$ luôn thỏa mãn $0 \\le r(A) \\le \\min(m, n)$. Với ma trận $3 \\times 3$, hạng lớn nhất là $\\min(3, 3) = 3$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 293,
    "originalId": 293,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của $m$ để ma trận $A = \\begin{bmatrix} 1 & 4 \\\\ 1 & m \\end{bmatrix}$ có hạng $r(A) = 1$:",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq 4$"
      },
      {
        "key": "B",
        "text": "$m = 0$"
      },
      {
        "key": "C",
        "text": "$m = 4$"
      },
      {
        "key": "D",
        "text": "$m = 1$"
      }
    ],
    "correct": "C",
    "explanation": "* Ma trận cấp $2 \\times 2$ có hạng bằng 1 khi và chỉ khi định thức bằng 0: $\\det(A) = 1 \\cdot m - 4 \\cdot 1 = 0 \\iff m = 4$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 294,
    "originalId": 294,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Khẳng định nào dưới đây về mối quan hệ giữa hạng của ma trận tích $AB$ và hạng của $A, B$ là **ĐÚNG**?",
    "options": [
      {
        "key": "A",
        "text": "$r(AB) = r(A) \\cdot r(B)$"
      },
      {
        "key": "B",
        "text": "$r(AB) \\ge \\max(r(A), r(B))$"
      },
      {
        "key": "C",
        "text": "$r(AB) \\le \\min(r(A), r(B))$"
      },
      {
        "key": "D",
        "text": "$r(AB) = r(A) + r(B)$"
      }
    ],
    "correct": "C",
    "explanation": "* Bất đẳng thức Sylvester về hạng ma trận tích: hạng của ma trận tích luôn không vượt quá hạng của từng ma trận thừa số: $r(AB) \\le \\min(r(A), r(B))$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 295,
    "originalId": 295,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hạng lớn nhất có thể có của một ma trận kích thước $4 \\times 5$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$5$"
      },
      {
        "key": "B",
        "text": "$20$"
      },
      {
        "key": "C",
        "text": "$4$"
      },
      {
        "key": "D",
        "text": "$9$"
      }
    ],
    "correct": "C",
    "explanation": "* Hạng của ma trận $A_{m \\times n}$ luôn thỏa mãn $0 \\le r(A) \\le \\min(m, n)$. Với ma trận $4 \\times 5$, hạng lớn nhất là $\\min(4, 5) = 4$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 296,
    "originalId": 296,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của $m$ để ma trận $A = \\begin{bmatrix} 1 & 3 \\\\ 3 & m \\end{bmatrix}$ có hạng $r(A) = 1$:",
    "options": [
      {
        "key": "A",
        "text": "$m = 0$"
      },
      {
        "key": "B",
        "text": "$m = 9$"
      },
      {
        "key": "C",
        "text": "$m = 3$"
      },
      {
        "key": "D",
        "text": "$m \\neq 9$"
      }
    ],
    "correct": "B",
    "explanation": "* Ma trận cấp $2 \\times 2$ có hạng bằng 1 khi và chỉ khi định thức bằng 0: $\\det(A) = 1 \\cdot m - 3 \\cdot 3 = 0 \\iff m = 9$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 297,
    "originalId": 297,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hạng lớn nhất có thể có của một ma trận kích thước $2 \\times 3$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$3$"
      },
      {
        "key": "B",
        "text": "$5$"
      },
      {
        "key": "C",
        "text": "$2$"
      },
      {
        "key": "D",
        "text": "$6$"
      }
    ],
    "correct": "C",
    "explanation": "* Hạng của ma trận $A_{m \\times n}$ luôn thỏa mãn $0 \\le r(A) \\le \\min(m, n)$. Với ma trận $2 \\times 3$, hạng lớn nhất là $\\min(2, 3) = 2$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 298,
    "originalId": 298,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của $m$ để ma trận $A = \\begin{bmatrix} 1 & 6 \\\\ 1 & m \\end{bmatrix}$ có hạng $r(A) = 1$:",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq 6$"
      },
      {
        "key": "B",
        "text": "$m = 1$"
      },
      {
        "key": "C",
        "text": "$m = 0$"
      },
      {
        "key": "D",
        "text": "$m = 6$"
      }
    ],
    "correct": "D",
    "explanation": "* Ma trận cấp $2 \\times 2$ có hạng bằng 1 khi và chỉ khi định thức bằng 0: $\\det(A) = 1 \\cdot m - 6 \\cdot 1 = 0 \\iff m = 6$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 299,
    "originalId": 299,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hạng lớn nhất có thể có của một ma trận kích thước $3 \\times 4$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$7$"
      },
      {
        "key": "B",
        "text": "$12$"
      },
      {
        "key": "C",
        "text": "$4$"
      },
      {
        "key": "D",
        "text": "$3$"
      }
    ],
    "correct": "D",
    "explanation": "* Hạng của ma trận $A_{m \\times n}$ luôn thỏa mãn $0 \\le r(A) \\le \\min(m, n)$. Với ma trận $3 \\times 4$, hạng lớn nhất là $\\min(3, 4) = 3$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 300,
    "originalId": 300,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của $m$ để ma trận $A = \\begin{bmatrix} 1 & 4 \\\\ 5 & m \\end{bmatrix}$ có hạng $r(A) = 1$:",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq 20$"
      },
      {
        "key": "B",
        "text": "$m = 0$"
      },
      {
        "key": "C",
        "text": "$m = 5$"
      },
      {
        "key": "D",
        "text": "$m = 20$"
      }
    ],
    "correct": "D",
    "explanation": "* Ma trận cấp $2 \\times 2$ có hạng bằng 1 khi và chỉ khi định thức bằng 0: $\\det(A) = 1 \\cdot m - 4 \\cdot 5 = 0 \\iff m = 20$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 301,
    "originalId": 301,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hạng lớn nhất có thể có của một ma trận kích thước $2 \\times 4$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$4$"
      },
      {
        "key": "B",
        "text": "$8$"
      },
      {
        "key": "C",
        "text": "$2$"
      },
      {
        "key": "D",
        "text": "$6$"
      }
    ],
    "correct": "C",
    "explanation": "* Hạng của ma trận $A_{m \\times n}$ luôn thỏa mãn $0 \\le r(A) \\le \\min(m, n)$. Với ma trận $2 \\times 4$, hạng lớn nhất là $\\min(2, 4) = 2$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 302,
    "originalId": 302,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của $m$ để ma trận $A = \\begin{bmatrix} 1 & 5 \\\\ 5 & m \\end{bmatrix}$ có hạng $r(A) = 1$:",
    "options": [
      {
        "key": "A",
        "text": "$m = 5$"
      },
      {
        "key": "B",
        "text": "$m \\neq 25$"
      },
      {
        "key": "C",
        "text": "$m = 0$"
      },
      {
        "key": "D",
        "text": "$m = 25$"
      }
    ],
    "correct": "D",
    "explanation": "* Ma trận cấp $2 \\times 2$ có hạng bằng 1 khi và chỉ khi định thức bằng 0: $\\det(A) = 1 \\cdot m - 5 \\cdot 5 = 0 \\iff m = 25$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 303,
    "originalId": 303,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hạng lớn nhất có thể có của một ma trận kích thước $4 \\times 4$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$4$"
      },
      {
        "key": "B",
        "text": "$16$"
      },
      {
        "key": "C",
        "text": "$8$"
      },
      {
        "key": "D",
        "text": "$5$"
      }
    ],
    "correct": "A",
    "explanation": "* Hạng của ma trận $A_{m \\times n}$ luôn thỏa mãn $0 \\le r(A) \\le \\min(m, n)$. Với ma trận $4 \\times 4$, hạng lớn nhất là $\\min(4, 4) = 4$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 304,
    "originalId": 304,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của $m$ để ma trận $A = \\begin{bmatrix} 1 & 3 \\\\ 4 & m \\end{bmatrix}$ có hạng $r(A) = 1$:",
    "options": [
      {
        "key": "A",
        "text": "$m = 0$"
      },
      {
        "key": "B",
        "text": "$m = 4$"
      },
      {
        "key": "C",
        "text": "$m \\neq 12$"
      },
      {
        "key": "D",
        "text": "$m = 12$"
      }
    ],
    "correct": "D",
    "explanation": "* Ma trận cấp $2 \\times 2$ có hạng bằng 1 khi và chỉ khi định thức bằng 0: $\\det(A) = 1 \\cdot m - 3 \\cdot 4 = 0 \\iff m = 12$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 305,
    "originalId": 305,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hạng lớn nhất có thể có của một ma trận kích thước $5 \\times 4$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$9$"
      },
      {
        "key": "B",
        "text": "$20$"
      },
      {
        "key": "C",
        "text": "$5$"
      },
      {
        "key": "D",
        "text": "$4$"
      }
    ],
    "correct": "D",
    "explanation": "* Hạng của ma trận $A_{m \\times n}$ luôn thỏa mãn $0 \\le r(A) \\le \\min(m, n)$. Với ma trận $5 \\times 4$, hạng lớn nhất là $\\min(5, 4) = 4$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 306,
    "originalId": 306,
    "chapterId": 3,
    "chapterName": "Ma trận và Định thức",
    "topicId": 3,
    "topicName": "Ma trận và Định thức",
    "subTypeId": 4,
    "typeId": "3.4",
    "typeName": "Hạng của ma trận (Rank)",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của $m$ để ma trận $A = \\begin{bmatrix} 1 & 2 \\\\ 2 & m \\end{bmatrix}$ có hạng $r(A) = 1$:",
    "options": [
      {
        "key": "A",
        "text": "$m = 4$"
      },
      {
        "key": "B",
        "text": "$m \\neq 4$"
      },
      {
        "key": "C",
        "text": "$m = 2$"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "A",
    "explanation": "* Ma trận cấp $2 \\times 2$ có hạng bằng 1 khi và chỉ khi định thức bằng 0: $\\det(A) = 1 \\cdot m - 2 \\cdot 2 = 0 \\iff m = 4$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 307,
    "originalId": 24,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho hệ phương trình:\n$$\\begin{cases} x + y - z + t = 1 \\\\ 2x + y + 2z - 3t = -1 \\\\ z + 3t = 2 \\end{cases}$$\nKhẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Hệ phương trình đã cho có nghiệm duy nhất"
      },
      {
        "key": "B",
        "text": "Hệ phương trình đã cho có vô số nghiệm phụ thuộc 1 tham số"
      },
      {
        "key": "C",
        "text": "Hệ phương trình đã cho có vô số nghiệm phụ thuộc 2 tham số"
      },
      {
        "key": "D",
        "text": "Hệ phương trình đã cho vô nghiệm"
      }
    ],
    "correct": "B",
    "explanation": "* Xét ma trận hệ số $A$ và ma trận mở rộng $\\bar{A}$:\n  $$\\bar{A} = \\begin{bmatrix} 1 & 1 & -1 & 1 & 1 \\\\ 2 & 1 & 2 & -3 & -1 \\\\ 0 & 0 & 1 & 3 & 2 \\end{bmatrix}$$\n* $h_2 \\to h_2 - 2h_1$:\n  $$\\begin{bmatrix} 1 & 1 & -1 & 1 & 1 \\\\ 0 & -1 & 4 & -5 & -3 \\\\ 0 & 0 & 1 & 3 & 2 \\end{bmatrix}$$\n* Cả 3 hàng đều khác 0 và có dạng bậc thang, suy ra $r(A) = r(\\bar{A}) = 3$.\n* Hệ có nghiệm. Số ẩn là $n = 4$, số tham số tự do là $n - r = 4 - 3 = 1$.\n* Vậy hệ có vô số nghiệm phụ thuộc 1 tham số.\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 308,
    "originalId": 37,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho một hệ phương trình tuyến tính có ma trận hệ số và ma trận bổ sung lần lượt là $A, \\bar{A}$. Giả sử $A$ là ma trận cỡ $5 \\times 7$ và $r(A) = r(\\bar{A}) = 4$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Hệ phương trình đã cho có nghiệm duy nhất"
      },
      {
        "key": "B",
        "text": "Hệ phương trình đã cho có vô số nghiệm phụ thuộc 3 tham số"
      },
      {
        "key": "C",
        "text": "Hệ phương trình đã cho có vô số nghiệm phụ thuộc 4 tham số"
      },
      {
        "key": "D",
        "text": "Hệ phương trình đã cho có vô số nghiệm phụ thuộc 1 tham số"
      }
    ],
    "correct": "B",
    "explanation": "* Ma trận hệ số $A$ có cỡ $5 \\times 7$ nên số ẩn số là $n = 7$.\n* Giả thiết $r(A) = r(\\bar{A}) = 4$, theo định lý Kronecker - Capelli:\n  * Vì $r(A) = r(\\bar{A})$ nên hệ có nghiệm.\n  * Vì $r(A) = 4 < 7$ (số ẩn), hệ có vô số nghiệm.\n  * Số tham số tự do của nghiệm là:\n    $$k = n - r(A) = 7 - 4 = 3$$\n* Do đó hệ phương trình có vô số nghiệm phụ thuộc 3 tham số.\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 309,
    "originalId": 3,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Cho hai hệ phương trình $AX = 0$ (1) và $AX = B$ (2) với $A_{m \\times n}$. Phát biểu nào dưới đây là **sai**?",
    "options": [
      {
        "key": "A",
        "text": "Nếu $m = n$ và (1) có duy nhất nghiệm thì (2) có duy nhất nghiệm"
      },
      {
        "key": "B",
        "text": "Nếu (1) có duy nhất nghiệm thì (2) có nghiệm"
      },
      {
        "key": "C",
        "text": "Nếu (1) có vô số nghiệm thì chưa chắc (2) có nghiệm"
      },
      {
        "key": "D",
        "text": "Nếu (2) có vô số nghiệm thì (1) có vô số nghiệm"
      }
    ],
    "correct": "B",
    "explanation": "* Xét khẳng định B: \"Nếu (1) có duy nhất nghiệm thì (2) có nghiệm\".\n  * (1) có duy nhất nghiệm $X = 0$ khi và chỉ khi $r(A) = n$ (các cột của $A$ độc lập tuyến tính).\n  * Nhưng nếu số phương trình $m > n$ (số hàng nhiều hơn số cột), thì ma trận mở rộng $\\bar{A} = [A \\mid B]$ có thể có hạng $r(\\bar{A}) = n + 1 > r(A)$, dẫn đến hệ (2) vô nghiệm!\n  * Do đó phát biểu B là **sai**.\n* Các khẳng định A, C, D đều đúng theo định lý Kronecker - Capelli.\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 310,
    "originalId": 5,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Cho hệ phương trình tuyến tính $A_{m \\times n} X = B$ với $r(A) = m$. Khi đó:",
    "options": [
      {
        "key": "A",
        "text": "Hệ luôn có nghiệm"
      },
      {
        "key": "B",
        "text": "Hệ vô nghiệm"
      },
      {
        "key": "C",
        "text": "Hệ có vô số nghiệm"
      },
      {
        "key": "D",
        "text": "Hệ có nghiệm duy nhất"
      }
    ],
    "correct": "A",
    "explanation": "* Ma trận mở rộng $\\bar{A} = [A \\mid B]$ có cỡ $m \\times (n + 1)$, nên $r(\\bar{A}) \\le m$.\n* Mặt khác ta luôn có $r(\\bar{A}) \\ge r(A) = m$.\n* Do đó $r(\\bar{A}) = r(A) = m$ với **mọi cột vế phải $B$**.\n* Theo định lý Kronecker - Capelli, hệ phương trình luôn luôn có nghiệm.\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 311,
    "originalId": 6,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Hệ phương trình $\\begin{cases} 4x + 3y = -6 \\\\ 5x + 8y = 1 \\\\ a^2 x + 3ay = -9 \\end{cases}$ có đúng 1 nghiệm khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$a = -1$"
      },
      {
        "key": "B",
        "text": "$a = 3$"
      },
      {
        "key": "C",
        "text": "$a = -1$ hoặc $a = 3$"
      },
      {
        "key": "D",
        "text": "$a \\neq -1, \\, a \\neq 3$"
      }
    ],
    "correct": "C",
    "explanation": "* Giải hệ hai phương trình đầu:\n  $$\\begin{cases} 4x + 3y = -6 \\\\ 5x + 8y = 1 \\end{cases} \\iff \\begin{cases} x = -3 \\\\ y = 2 \\end{cases}$$\n* Thay nghiệm duy nhất $(x = -3, y = 2)$ vào phương trình thứ ba:\n  $$a^2(-3) + 3a(2) = -9 \\iff -3a^2 + 6a + 9 = 0 \\iff a^2 - 2a - 3 = 0$$\n* Giải phương trình bậc hai:\n  $$(a + 1)(a - 3) = 0 \\iff a = -1 \\text{ hoặc } a = 3$$\n* **Chọn đáp án: C.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 312,
    "originalId": 27,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Tìm tất cả $m$ để hệ phương trình sau vô nghiệm:\n$$\\begin{cases} x + y + z + t = 1 \\\\ 2x + 3y + 4z - t = 3 \\\\ 3x + y + 2z + 5t = 2 \\\\ 4x + 6y + 3z + mt = 1 \\end{cases}$$",
    "options": [
      {
        "key": "A",
        "text": "$m = 5$"
      },
      {
        "key": "B",
        "text": "$m = \\dfrac{14}{3}$"
      },
      {
        "key": "C",
        "text": "Không tồn tại $m$"
      },
      {
        "key": "D",
        "text": "$m = 3$"
      }
    ],
    "correct": "B",
    "explanation": "* Lập ma trận mở rộng và khử Gauss:\n  $$\\bar{A} = \\begin{bmatrix} 1 & 1 & 1 & 1 & 1 \\\\ 2 & 3 & 4 & -1 & 3 \\\\ 3 & 1 & 2 & 5 & 2 \\\\ 4 & 6 & 3 & m & 1 \\end{bmatrix}$$\n* Lấy $h_2 - 2h_1$, $h_3 - 3h_1$, $h_4 - 4h_1$:\n  $$\\begin{bmatrix} 1 & 1 & 1 & 1 & 1 \\\\ 0 & 1 & 2 & -3 & 1 \\\\ 0 & -2 & -1 & 2 & -1 \\\\ 0 & 2 & -1 & m-4 & -3 \\end{bmatrix}$$\n* Lấy $h_3 + 2h_2$, $h_4 - 2h_2$:\n  $$\\begin{bmatrix} 1 & 1 & 1 & 1 & 1 \\\\ 0 & 1 & 2 & -3 & 1 \\\\ 0 & 0 & 3 & -4 & 1 \\\\ 0 & 0 & -5 & m+2 & -5 \\end{bmatrix}$$\n* Lấy $3h_4 + 5h_3$:\n  Hàng cuối thành: $\\begin{bmatrix} 0 & 0 & 0 & 3(m+2) + 5(-4) & 3(-5) + 5(1) \\end{bmatrix} = \\begin{bmatrix} 0 & 0 & 0 & 3m - 14 & -10 \\end{bmatrix}$.\n* Hệ vô nghiệm khi và chỉ khi $r(A) < r(\\bar{A}) \\iff 3m - 14 = 0 \\iff m = \\dfrac{14}{3}$.\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 313,
    "originalId": 313,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Điều kiện cần và đủ để hệ phương trình tuyến tính $Ax = b$ có nghiệm (tương thích) theo định lý Kronecker - Capelli là:",
    "options": [
      {
        "key": "A",
        "text": "$\\det A \\neq 0$"
      },
      {
        "key": "B",
        "text": "$r(A) < r(\\bar{A})$"
      },
      {
        "key": "C",
        "text": "$r(A) = n$ (với $n$ là số ẩn)"
      },
      {
        "key": "D",
        "text": "$r(A) = r(\\bar{A})$"
      }
    ],
    "correct": "D",
    "explanation": "Định lý Kronecker - Capelli phát biểu rằng: Hệ phương trình tuyến tính $Ax = b$ có nghiệm khi và chỉ khi hạng của ma trận hệ số bằng hạng của ma trận hệ số mở rộng: $r(A) = r(\\bar{A})$.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 314,
    "originalId": 314,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình tuyến tính gồm $m$ phương trình, $n$ ẩn số có ma trận hệ số $A$ và ma trận mở rộng $\\bar{A}$. Hệ có **nghiệm duy nhất** khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$r(A) = r(\\bar{A}) = n$"
      },
      {
        "key": "B",
        "text": "$r(A) = m$"
      },
      {
        "key": "C",
        "text": "$r(A) < r(\\bar{A})$"
      },
      {
        "key": "D",
        "text": "$r(A) = r(\\bar{A}) < n$"
      }
    ],
    "correct": "A",
    "explanation": "Hệ có nghiệm khi $r(A) = r(\\bar{A})$. Để nghiệm duy nhất thì số ẩn tự do bằng $0$, tức là hạng phải đúng bằng số ẩn: $r(A) = r(\\bar{A}) = n$.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 315,
    "originalId": 315,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm $m$ để hệ phương trình sau có vô số nghiệm: $\\begin{cases} x + 2y = 3 \\\\ 2x + 4y = m \\end{cases}$.",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq 6$"
      },
      {
        "key": "B",
        "text": "$m = 3$"
      },
      {
        "key": "C",
        "text": "$m = 6$"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "C",
    "explanation": "Phương trình 2 có vế trái gấp 2 lần vế trái phương trình 1: $2(x + 2y) = 2x + 4y$. Để hệ có nghiệm (và vô số nghiệm) thì vế phải cũng phải gấp đôi: $m = 2 \\times 3 = 6$. (Nếu $m \\neq 6$ thì hệ vô nghiệm).\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 316,
    "originalId": 316,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hệ phương trình $\\begin{cases} x + y + z = 1 \\\\ 2x + 2y + 2z = 3 \\end{cases}$ có tập nghiệm là:",
    "options": [
      {
        "key": "A",
        "text": "Có nghiệm duy nhất"
      },
      {
        "key": "B",
        "text": "Vô số nghiệm phụ thuộc 2 tham số"
      },
      {
        "key": "C",
        "text": "Vô nghiệm"
      },
      {
        "key": "D",
        "text": "Vô số nghiệm phụ thuộc 1 tham số"
      }
    ],
    "correct": "C",
    "explanation": "Nhân phương trình 1 với 2 ta được $2x + 2y + 2z = 2$. Nhưng phương trình 2 lại cho $2x + 2y + 2z = 3$, dẫn đến mâu thuẫn $2 = 3$. Vậy hệ vô nghiệm ($r(A) = 1 < r(\\bar{A}) = 2$).\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 317,
    "originalId": 317,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hệ phương trình $\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$ có nghiệm là:",
    "options": [
      {
        "key": "A",
        "text": "$(3, 2, 1)$"
      },
      {
        "key": "B",
        "text": "$(1, 2, 3)$"
      },
      {
        "key": "C",
        "text": "$(1, 3, 2)$"
      },
      {
        "key": "D",
        "text": "$(2, 1, 3)$"
      }
    ],
    "correct": "B",
    "explanation": "Thử nghiệm $(1, 2, 3)$:\n$1 + 2 + 3 = 6$ (thỏa mãn)\n$2(1) - 2 + 3 = 3$ (thỏa mãn)\n$1 + 2(2) - 3 = 2$ (thỏa mãn)\nVậy $(1, 2, 3)$ là nghiệm duy nhất của hệ.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 318,
    "originalId": 318,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Nếu hệ phương trình $Ax = b$ có hai nghiệm phân biệt $x_1$ và $x_2$, thì nó có bao nhiêu nghiệm?",
    "options": [
      {
        "key": "A",
        "text": "Hữu hạn nghiệm"
      },
      {
        "key": "B",
        "text": "Đúng 2 nghiệm"
      },
      {
        "key": "C",
        "text": "Đúng 3 nghiệm"
      },
      {
        "key": "D",
        "text": "Vô số nghiệm"
      }
    ],
    "correct": "D",
    "explanation": "Trong trường số thực $\\mathbb{R}$, nếu $x_1, x_2$ là hai nghiệm phân biệt thì với mọi $\\alpha \\in \\mathbb{R}$, tổ hợp lồi $\\alpha x_1 + (1 - \\alpha) x_2$ cũng là một nghiệm của hệ. Do đó hệ có vô số nghiệm.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 319,
    "originalId": 319,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình $Ax = b$. Nếu $\\det A \\neq 0$ thì hệ:",
    "options": [
      {
        "key": "A",
        "text": "Chỉ có nghiệm khi $b = 0$"
      },
      {
        "key": "B",
        "text": "Có vô số nghiệm"
      },
      {
        "key": "C",
        "text": "Vô nghiệm"
      },
      {
        "key": "D",
        "text": "Luôn có nghiệm duy nhất $x = A^{-1}b$"
      }
    ],
    "correct": "D",
    "explanation": "Khi $A$ vuông và $\\det A \\neq 0$, $A$ khả nghịch, do đó nhân hai vế với $A^{-1}$ ta được nghiệm duy nhất $x = A^{-1}b$.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 320,
    "originalId": 320,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận mở rộng sau khi đã đưa về dạng bậc thang: $\\left[\\begin{array}{ccc|c} 1 & 2 & 3 & 1 \\\\ 0 & 1 & -1 & 2 \\\\ 0 & 0 & m - 3 & m^2 - 9 \\end{array}\\right]$. Tìm $m$ để hệ có **vô số nghiệm**.",
    "options": [
      {
        "key": "A",
        "text": "$m = 3$"
      },
      {
        "key": "B",
        "text": "$m = -3$"
      },
      {
        "key": "C",
        "text": "$m \\neq 3$"
      },
      {
        "key": "D",
        "text": "Không có giá trị $m$ nào"
      }
    ],
    "correct": "A",
    "explanation": "Hàng thứ 3 có dạng: $(m - 3)z = m^2 - 9 = (m - 3)(m + 3)$. Để hệ có vô số nghiệm thì hàng cuối phải trở thành $0 = 0$, tức là $m - 3 = 0 \\Leftrightarrow m = 3$. (Nếu $m = -3$ thì $m - 3 = -6 \\neq 0$, hệ có nghiệm duy nhất).\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 321,
    "originalId": 321,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong câu hỏi trên, tìm $m$ để hệ **vô nghiệm**:",
    "options": [
      {
        "key": "A",
        "text": "$m = 3$"
      },
      {
        "key": "B",
        "text": "$m = 0$"
      },
      {
        "key": "C",
        "text": "Không có giá trị $m$ nào làm hệ vô nghiệm"
      },
      {
        "key": "D",
        "text": "$m = -3$"
      }
    ],
    "correct": "C",
    "explanation": "Để hệ vô nghiệm thì $m - 3 = 0$ nhưng $m^2 - 9 \\neq 0$. Tuy nhiên khi $m = 3$ thì $m^2 - 9 = 0$. Khi $m \\neq 3$ thì hệ luôn có nghiệm duy nhất. Do đó không có giá trị nào của $m$ để hệ vô nghiệm.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 322,
    "originalId": 322,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Theo định lý Kronecker - Capelli, hệ phương trình tuyến tính $AX = B$ vô nghiệm khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$r(A) = r(\\bar{A}) = n$"
      },
      {
        "key": "B",
        "text": "$r(A) = r(\\bar{A}) < n$"
      },
      {
        "key": "C",
        "text": "$r(A) < r(\\bar{A})$"
      },
      {
        "key": "D",
        "text": "$r(A) > r(\\bar{A})$"
      }
    ],
    "correct": "C",
    "explanation": "* **Định lý Kronecker - Capelli:**\n  * Ký hiệu $A$ là ma trận hệ số và $\\bar{A} = [A \\mid B]$ là ma trận mở rộng.\n  * Hệ có nghiệm $\\iff r(A) = r(\\bar{A})$.\n  * Do đó, hệ **vô nghiệm** khi và chỉ khi $r(A) < r(\\bar{A})$ (thực tế luôn là $r(\\bar{A}) = r(A) + 1$, xuất hiện hàng có dạng $[0 \\, 0 \\dots 0 \\mid c]$ với $c \\neq 0$).\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 323,
    "originalId": 323,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Một hệ gồm $m$ phương trình tuyến tính và $n$ ẩn số có $m < n$ (số phương trình ít hơn số ẩn). Nếu hệ này có nghiệm thì khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "text": "Hệ có đúng $m$ nghiệm"
      },
      {
        "key": "B",
        "text": "Hệ luôn có vô số nghiệm"
      },
      {
        "key": "C",
        "text": "Không thể kết luận được"
      },
      {
        "key": "D",
        "text": "Hệ có nghiệm duy nhất"
      }
    ],
    "correct": "B",
    "explanation": "* **Hệ thiếu phương trình ($m < n$):**\n  * Hạng của ma trận hệ số $r(A) \\le \\min(m, n) = m < n$.\n  * Do đó nếu hệ có nghiệm (tức $r(A) = r(\\bar{A})$), ta luôn có:\n    $$r(A) < n$$\n  * Vì số ẩn tự do $k = n - r(A) \\ge n - m > 0$, nghiệm phụ thuộc vào ít nhất một tham số tự do, do đó hệ luôn có vô số nghiệm.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 324,
    "originalId": 324,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm tất cả các giá trị của $m$ để hệ phương trình $\\begin{cases} x + y + z = 1 \\\\ 2x + 3y + z = 3 \\\\ x + 2y + mz = 2 \\end{cases}$ vô số nghiệm.",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq 0$"
      },
      {
        "key": "B",
        "text": "$m = 1$"
      },
      {
        "key": "C",
        "text": "Không tồn tại $m$"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "D",
    "explanation": "* **Biến đổi ma trận mở rộng $\\bar{A}$:**\n  $$\\bar{A} = \\begin{bmatrix} 1 & 1 & 1 & 1 \\\\ 2 & 3 & 1 & 3 \\\\ 1 & 2 & m & 2 \\end{bmatrix}$$\n  * $h_2 \\to h_2 - 2h_1$, $h_3 \\to h_3 - h_1$:\n    $$\\begin{bmatrix} 1 & 1 & 1 & 1 \\\\ 0 & 1 & -1 & 1 \\\\ 0 & 1 & m - 1 & 1 \\end{bmatrix}$$\n  * $h_3 \\to h_3 - h_2$:\n    $$\\begin{bmatrix} 1 & 1 & 1 & 1 \\\\ 0 & 1 & -1 & 1 \\\\ 0 & 0 & m & 0 \\end{bmatrix}$$\n  * Để hệ có vô số nghiệm, hàng cuối phải là hàng toàn số 0 $\\iff m = 0$.\n  * Khi đó $r(A) = r(\\bar{A}) = 2 < 3$, hệ có vô số nghiệm phụ thuộc $1$ tham số tự do.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 325,
    "originalId": 325,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình $\\begin{cases} x + y = 2 \\\\ 2x + 2y = m \\end{cases}$. Hệ này có nghiệm khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$m = 4$"
      },
      {
        "key": "B",
        "text": "$m = 0$"
      },
      {
        "key": "C",
        "text": "$m \\neq 4$"
      },
      {
        "key": "D",
        "text": "$m = 2$"
      }
    ],
    "correct": "A",
    "explanation": "* **Xét sự tương thích của hai phương trình:**\n  * Nhân phương trình thứ nhất với 2 ta được: $2x + 2y = 4$.\n  * Phương trình thứ hai là: $2x + 2y = m$.\n  * Để hệ có nghiệm, vế phải phải bằng nhau: $m = 4$. Khi đó hai phương trình trùng nhau và hệ có vô số nghiệm. Nếu $m \\neq 4$ hệ vô nghiệm.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 326,
    "originalId": 326,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình $\\begin{cases} mx + y = 1 \\\\ x + my = 1 \\end{cases}$. Tìm $m$ để hệ vô nghiệm.",
    "options": [
      {
        "key": "A",
        "text": "$m = -1$"
      },
      {
        "key": "B",
        "text": "$m = 1$"
      },
      {
        "key": "C",
        "text": "$m = 0$"
      },
      {
        "key": "D",
        "text": "$m = 2$"
      }
    ],
    "correct": "A",
    "explanation": "* **Tính định thức ma trận hệ số:**\n  $$\\det A = \\begin{vmatrix} m & 1 \\\\ 1 & m \\end{vmatrix} = m^2 - 1 = (m - 1)(m + 1)$$\n  * Nếu $m \\neq \\pm 1$: hệ có nghiệm duy nhất.\n  * Nếu $m = 1$: hệ trở thành $\\begin{cases} x + y = 1 \\\\ x + y = 1 \\end{cases} \\implies$ vô số nghiệm.\n  * Nếu $m = -1$: hệ trở thành $\\begin{cases} -x + y = 1 \\\\ x - y = 1 \\end{cases} \\iff \\begin{cases} x - y = -1 \\\\ x - y = 1 \\end{cases} \\implies$ mâu thuẫn, vô nghiệm.\n* Vậy hệ vô nghiệm khi $m = -1$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 327,
    "originalId": 327,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận hệ số $A$ có cỡ $3 \\times 5$ với $r(A) = 3$. Hệ phương trình $AX = B$ sẽ:",
    "options": [
      {
        "key": "A",
        "text": "Có thể vô nghiệm với một số $B$"
      },
      {
        "key": "B",
        "text": "Có nghiệm duy nhất với mọi $B$"
      },
      {
        "key": "C",
        "text": "Luôn có vô số nghiệm với mọi cột $B \\in \\mathbb{R}^3$"
      },
      {
        "key": "D",
        "text": "Vô nghiệm với mọi $B$"
      }
    ],
    "correct": "C",
    "explanation": "* **Phân tích số chiều và hạng:**\n  * Ma trận mở rộng $\\bar{A} = [A \\mid B]$ có cỡ $3 \\times 6$, nên $r(\\bar{A}) \\le 3$.\n  * Vì $r(A) = 3$ và $r(A) \\le r(\\bar{A}) \\le 3 \\implies r(A) = r(\\bar{A}) = 3$ với **mọi** $B \\in \\mathbb{R}^3$.\n  * Do đó hệ luôn luôn có nghiệm. Mặt khác, số ẩn là $n = 5 > 3$, nên số ẩn tự do là $5 - 3 = 2 > 0$.\n  * Vì vậy hệ luôn có vô số nghiệm với mọi $B$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 328,
    "originalId": 328,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận bổ sung của hệ phương trình sau khi khử Gauss có hàng cuối là $[0 \\; 0 \\; (m - -2) \\mid 3]$. Hệ phương trình **vô nghiệm** khi:",
    "options": [
      {
        "key": "A",
        "text": "$m = -2$"
      },
      {
        "key": "B",
        "text": "$m = 3$"
      },
      {
        "key": "C",
        "text": "$m = 0$"
      },
      {
        "key": "D",
        "text": "$m \\neq -2$"
      }
    ],
    "correct": "A",
    "explanation": "* Hệ vô nghiệm khi hàng cuối có dạng $[0 \\; 0 \\; 0 \\mid 3]$ với $3 \\neq 0$, tức là $m - -2 = 0 \\iff m = -2$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 329,
    "originalId": 329,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình tuyến tính gồm 5 ẩn số. Hệ có **nghiệm duy nhất** khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$r(A) = r(\\bar{A}) = 5$"
      },
      {
        "key": "B",
        "text": "$r(A) = r(\\bar{A}) < 5$"
      },
      {
        "key": "C",
        "text": "$r(A) = 5 + 1$"
      },
      {
        "key": "D",
        "text": "$r(A) < r(\\bar{A})$"
      }
    ],
    "correct": "A",
    "explanation": "* Hệ có nghiệm duy nhất khi và chỉ khi hạng của ma trận hệ số bằng hạng ma trận bổ sung và đúng bằng số ẩn: $r(A) = r(\\bar{A}) = n = 5$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 330,
    "originalId": 330,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Theo định lý Kronecker-Capelli, hệ phương trình tuyến tính $AX = B$ **vô nghiệm** khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$r(A) < r(\\bar{A})$"
      },
      {
        "key": "B",
        "text": "$r(A) = r(\\bar{A}) = n$"
      },
      {
        "key": "C",
        "text": "$r(A) = r(\\bar{A}) < n$"
      },
      {
        "key": "D",
        "text": "$r(A) > r(\\bar{A})$"
      }
    ],
    "correct": "A",
    "explanation": "* Hệ phương trình tuyến tính có nghiệm khi $r(A) = r(\\bar{A})$ và vô nghiệm khi hạng ma trận hệ số nhỏ hơn hạng ma trận bổ sung: $r(A) < r(\\bar{A})$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 331,
    "originalId": 331,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận bổ sung của hệ phương trình sau khi khử Gauss có hàng cuối là $[0 \\; 0 \\; (m - -1) \\mid -2]$. Hệ phương trình **vô nghiệm** khi:",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq -1$"
      },
      {
        "key": "B",
        "text": "$m = -1$"
      },
      {
        "key": "C",
        "text": "$m = 0$"
      },
      {
        "key": "D",
        "text": "$m = -2$"
      }
    ],
    "correct": "B",
    "explanation": "* Hệ vô nghiệm khi hàng cuối có dạng $[0 \\; 0 \\; 0 \\mid -2]$ với $-2 \\neq 0$, tức là $m - -1 = 0 \\iff m = -1$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 332,
    "originalId": 332,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 1,
    "typeId": "4.1",
    "typeName": "Định lý Kronecker-Capelli & Biện luận số nghiệm",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình tuyến tính gồm 4 ẩn số. Hệ có **nghiệm duy nhất** khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$r(A) < r(\\bar{A})$"
      },
      {
        "key": "B",
        "text": "$r(A) = 4 + 1$"
      },
      {
        "key": "C",
        "text": "$r(A) = r(\\bar{A}) = 4$"
      },
      {
        "key": "D",
        "text": "$r(A) = r(\\bar{A}) < 4$"
      }
    ],
    "correct": "C",
    "explanation": "* Hệ có nghiệm duy nhất khi và chỉ khi hạng của ma trận hệ số bằng hạng ma trận bổ sung và đúng bằng số ẩn: $r(A) = r(\\bar{A}) = n = 4$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 333,
    "originalId": 27,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho hệ phương trình:\n$$\\begin{cases} x + y - z = 1 \\\\ 2x + 3y + mz = 3 \\\\ x + my + 3z = 2 \\end{cases}$$\nKhẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Nếu $m = 2$ thì hệ phương trình đã cho vô nghiệm"
      },
      {
        "key": "B",
        "text": "Nếu $m \\neq 2$ và $m \\neq -3$ thì hệ phương trình đã cho có nghiệm duy nhất"
      },
      {
        "key": "C",
        "text": "Nếu $m \\neq 2$ và $m \\neq 3$ thì hệ phương trình đã cho có nghiệm duy nhất"
      },
      {
        "key": "D",
        "text": "Nếu $m = 3$ thì hệ phương trình đã cho có vô số nghiệm"
      }
    ],
    "correct": "B",
    "explanation": "* Tính định thức ma trận hệ số $A$:\n  $$\\det A = \\begin{vmatrix} 1 & 1 & -1 \\\\ 2 & 3 & m \\\\ 1 & m & 3 \\end{vmatrix} = 1(9 - m^2) - 1(6 - m) - 1(2m - 3) = -m^2 - m + 6$$\n* Giải $\\det A = 0 \\iff m^2 + m - 6 = 0 \\iff (m - 2)(m + 3) = 0 \\iff m = 2$ hoặc $m = -3$.\n* Theo quy tắc Cramer, hệ có nghiệm duy nhất khi và chỉ khi $\\det A \\neq 0 \\iff m \\neq 2$ và $m \\neq -3$.\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 334,
    "originalId": 334,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hệ phương trình Cramer là hệ phương trình tuyến tính có đặc điểm:",
    "options": [
      {
        "key": "A",
        "text": "Số phương trình bằng số ẩn và định thức ma trận hệ số $\\det A \\neq 0$"
      },
      {
        "key": "B",
        "text": "Hệ phương trình luôn có vô số nghiệm"
      },
      {
        "key": "C",
        "text": "Định thức ma trận hệ số bằng 0"
      },
      {
        "key": "D",
        "text": "Số phương trình nhiều hơn số ẩn"
      }
    ],
    "correct": "A",
    "explanation": "Hệ Cramer là hệ gồm $n$ phương trình, $n$ ẩn số với ma trận hệ số vuông $A$ cấp $n$ thỏa mãn $\\det A \\neq 0$. Hệ Cramer luôn có nghiệm duy nhất tính theo công thức $x_i = \\dfrac{\\det A_i}{\\det A}$.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 335,
    "originalId": 335,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Giải hệ phương trình bằng quy tắc Cramer: $\\begin{cases} 2x + 3y = 7 \\\\ x - 2y = -7 \\end{cases}$. Giá trị của $x$ là:",
    "options": [
      {
        "key": "A",
        "text": "$3$"
      },
      {
        "key": "B",
        "text": "$-3$"
      },
      {
        "key": "C",
        "text": "$-1$"
      },
      {
        "key": "D",
        "text": "$1$"
      }
    ],
    "correct": "C",
    "explanation": "Tính các định thức:\n$D = \\begin{vmatrix} 2 & 3 \\\\ 1 & -2 \\end{vmatrix} = -4 - 3 = -7$.\n$D_x = \\begin{vmatrix} 7 & 3 \\\\ -7 & -2 \\end{vmatrix} = -14 - (-21) = 7$.\nSuy ra $x = \\dfrac{D_x}{D} = \\dfrac{7}{-7} = -1$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 336,
    "originalId": 336,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hệ phương trình tuyến tính $AX = B$ gồm $n$ phương trình và $n$ ẩn có nghiệm duy nhất khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$r(A) < n$"
      },
      {
        "key": "B",
        "text": "$B \\neq 0$"
      },
      {
        "key": "C",
        "text": "$\\det A \\neq 0$"
      },
      {
        "key": "D",
        "text": "$\\det A = 0$"
      }
    ],
    "correct": "C",
    "explanation": "* **Định lý Cramer:**\n  * Đối với hệ phương trình vuông ($n$ phương trình, $n$ ẩn), hệ có nghiệm duy nhất khi và chỉ khi định thức của ma trận hệ số khác không:\n    $$\\det A \\neq 0$$\n  * Khi đó nghiệm được tính theo công thức: $x_j = \\dfrac{\\det A_j}{\\det A}$ với $j = 1, \\dots, n$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 337,
    "originalId": 337,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình: $\\begin{cases} x + 2y - z = 1 \\\\ 2x + 5y + z = 4 \\\\ 3x + 7y + mz = 5 \\end{cases}$. Tìm điều kiện của $m$ để hệ có nghiệm duy nhất.",
    "options": [
      {
        "key": "A",
        "text": "$m = 0$"
      },
      {
        "key": "B",
        "text": "$m \\neq 2$"
      },
      {
        "key": "C",
        "text": "$m \\neq 0$"
      },
      {
        "key": "D",
        "text": "Mọi $m \\in \\mathbb{R}$"
      }
    ],
    "correct": "C",
    "explanation": "* **Hệ vuông 3 phương trình 3 ẩn, áp dụng Cramer:**\n  * Tính $\\det A$:\n    $$\\det A = \\begin{vmatrix} 1 & 2 & -1 \\\\ 2 & 5 & 1 \\\\ 3 & 7 & m \\end{vmatrix}$$\n  * Biến đổi hàng: $h_2 \\to h_2 - 2h_1$, $h_3 \\to h_3 - 3h_1$:\n    $$\\det A = \\begin{vmatrix} 1 & 2 & -1 \\\\ 0 & 1 & 3 \\\\ 0 & 1 & m + 3 \\end{vmatrix} = 1 \\cdot (m + 3 - 3) = m$$\n  * Hệ có nghiệm duy nhất $\\iff \\det A \\neq 0 \\iff m \\neq 0$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 338,
    "originalId": 338,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Dùng quy tắc Cramer tìm ẩn $y$ trong hệ phương trình: $\\begin{cases} 2x + y = 5 \\\\ 3x - 2y = 4 \\end{cases}$. Giá trị của $y$ là:",
    "options": [
      {
        "key": "A",
        "text": "$2$"
      },
      {
        "key": "B",
        "text": "$-1$"
      },
      {
        "key": "C",
        "text": "$3$"
      },
      {
        "key": "D",
        "text": "$1$"
      }
    ],
    "correct": "D",
    "explanation": "* **Áp dụng công thức Cramer:**\n  * Định thức ma trận hệ số: $\\det A = \\begin{vmatrix} 2 & 1 \\\\ 3 & -2 \\end{vmatrix} = 2(-2) - 1(3) = -7 \\neq 0$.\n  * Định thức $\\det A_y$ (thay cột 2 bằng cột vế phải $\\begin{bmatrix} 5 \\\\ 4 \\end{bmatrix}$):\n    $$\\det A_y = \\begin{vmatrix} 2 & 5 \\\\ 3 & 4 \\end{vmatrix} = 2(4) - 5(3) = 8 - 15 = -7$$\n  * Nghiệm $y = \\dfrac{\\det A_y}{\\det A} = \\dfrac{-7}{-7} = 1$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 339,
    "originalId": 339,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Một hệ gồm 3 phương trình, 3 ẩn số có $\\det A = 0$ và $\\det A_1 \\neq 0$. Khẳng định nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Hệ phương trình có nghiệm duy nhất"
      },
      {
        "key": "B",
        "text": "Hệ phương trình có vô số nghiệm"
      },
      {
        "key": "C",
        "text": "Hệ phương trình chắc chắn vô nghiệm"
      },
      {
        "key": "D",
        "text": "Chưa đủ thông tin để kết luận"
      }
    ],
    "correct": "C",
    "explanation": "* **Dấu hiệu nhận biết hệ vuông vô nghiệm qua Cramer:**\n  * Giả sử hệ có nghiệm $(x_1, x_2, x_3)$. Theo tính chất định thức, ta luôn có đẳng thức:\n    $$x_1 \\cdot \\det A = \\det A_1$$\n  * Vì $\\det A = 0$, vế trái bằng $x_1 \\cdot 0 = 0$.\n  * Nhưng giả thiết cho $\\det A_1 \\neq 0$, dẫn đến đẳng thức vô lý: $0 \\neq 0$.\n  * Do đó không thể tồn tại nghiệm, hệ chắc chắn **vô nghiệm**.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 340,
    "originalId": 340,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm nghiệm $x_1$ của hệ: $\\begin{cases} 3x_1 + 2x_2 = 7 \\\\ x_1 + 4x_2 = 9 \\end{cases}$:",
    "options": [
      {
        "key": "A",
        "text": "$x_1 = 2$"
      },
      {
        "key": "B",
        "text": "$x_1 = -1$"
      },
      {
        "key": "C",
        "text": "$x_1 = 3$"
      },
      {
        "key": "D",
        "text": "$x_1 = 1$"
      }
    ],
    "correct": "D",
    "explanation": "* **Dùng Cramer tính $x_1$:**\n  * $\\det A = \\begin{vmatrix} 3 & 2 \\\\ 1 & 4 \\end{vmatrix} = 12 - 2 = 10$.\n  * Thay cột 1 bằng cột vế phải $\\begin{bmatrix} 7 \\\\ 9 \\end{bmatrix}$:\n    $$\\det A_1 = \\begin{vmatrix} 7 & 2 \\\\ 9 & 4 \\end{vmatrix} = 28 - 18 = 10$$\n  * Suy ra $x_1 = \\dfrac{\\det A_1}{\\det A} = \\dfrac{10}{10} = 1$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 341,
    "originalId": 341,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm điều kiện của tham số $m$ để hệ phương trình tuyến tính vuông cấp 3 có định thức $D = m - 2$ giải được bằng **quy tắc Cramer**:",
    "options": [
      {
        "key": "A",
        "text": "$m = 2$"
      },
      {
        "key": "B",
        "text": "$m \\neq 2$"
      },
      {
        "key": "C",
        "text": "$m > 2$"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "B",
    "explanation": "* Hệ giải được bằng quy tắc Cramer khi và chỉ khi định thức chính khác 0: $D \\neq 0 \\iff m - 2 \\neq 0 \\iff m \\neq 2$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 342,
    "originalId": 342,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình Cramer có định thức chính $D = 5$ và định thức phụ theo ẩn $x$ là $D_x = -15$. Nghiệm $x$ của hệ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$x = 5$"
      },
      {
        "key": "B",
        "text": "$x = -3$"
      },
      {
        "key": "C",
        "text": "$x = -15$"
      },
      {
        "key": "D",
        "text": "$x = 3$"
      }
    ],
    "correct": "B",
    "explanation": "* Theo công thức Cramer: $x = \\dfrac{D_x}{D} = \\dfrac{-15}{5} = -3$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 343,
    "originalId": 343,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Nếu hệ phương trình vuông cấp $n$ có $\\det(A) = 0$ và tồn tại một định thức phụ $D_j \\neq 0$, thì hệ phương trình:",
    "options": [
      {
        "key": "A",
        "text": "Chắc chắn có vô số nghiệm"
      },
      {
        "key": "B",
        "text": "Chắc chắn vô nghiệm"
      },
      {
        "key": "C",
        "text": "Có đúng 1 nghiệm bằng 0"
      },
      {
        "key": "D",
        "text": "Có nghiệm duy nhất"
      }
    ],
    "correct": "B",
    "explanation": "* Khi $D = 0$ mà có ít nhất một $D_j \\neq 0$ thì phương trình $0 \\cdot x_j = D_j$ vô nghiệm, do đó toàn hệ vô nghiệm.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 344,
    "originalId": 344,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm điều kiện của tham số $m$ để hệ phương trình tuyến tính vuông cấp 3 có định thức $D = m - -4$ giải được bằng **quy tắc Cramer**:",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq -4$"
      },
      {
        "key": "B",
        "text": "$m > -4$"
      },
      {
        "key": "C",
        "text": "$m = -4$"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "A",
    "explanation": "* Hệ giải được bằng quy tắc Cramer khi và chỉ khi định thức chính khác 0: $D \\neq 0 \\iff m - -4 \\neq 0 \\iff m \\neq -4$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 345,
    "originalId": 345,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình Cramer có định thức chính $D = -3$ và định thức phụ theo ẩn $x$ là $D_x = -12$. Nghiệm $x$ của hệ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$x = -3$"
      },
      {
        "key": "B",
        "text": "$x = 4$"
      },
      {
        "key": "C",
        "text": "$x = -4$"
      },
      {
        "key": "D",
        "text": "$x = -12$"
      }
    ],
    "correct": "B",
    "explanation": "* Theo công thức Cramer: $x = \\dfrac{D_x}{D} = \\dfrac{-12}{-3} = 4$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 346,
    "originalId": 346,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm điều kiện của tham số $m$ để hệ phương trình tuyến tính vuông cấp 3 có định thức $D = m - 5$ giải được bằng **quy tắc Cramer**:",
    "options": [
      {
        "key": "A",
        "text": "$m > 5$"
      },
      {
        "key": "B",
        "text": "$m = 5$"
      },
      {
        "key": "C",
        "text": "$m \\neq 5$"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "C",
    "explanation": "* Hệ giải được bằng quy tắc Cramer khi và chỉ khi định thức chính khác 0: $D \\neq 0 \\iff m - 5 \\neq 0 \\iff m \\neq 5$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 347,
    "originalId": 347,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình Cramer có định thức chính $D = 5$ và định thức phụ theo ẩn $x$ là $D_x = 20$. Nghiệm $x$ của hệ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$x = -4$"
      },
      {
        "key": "B",
        "text": "$x = 20$"
      },
      {
        "key": "C",
        "text": "$x = 4$"
      },
      {
        "key": "D",
        "text": "$x = 5$"
      }
    ],
    "correct": "C",
    "explanation": "* Theo công thức Cramer: $x = \\dfrac{D_x}{D} = \\dfrac{20}{5} = 4$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 348,
    "originalId": 348,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm điều kiện của tham số $m$ để hệ phương trình tuyến tính vuông cấp 3 có định thức $D = m - -1$ giải được bằng **quy tắc Cramer**:",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq -1$"
      },
      {
        "key": "B",
        "text": "$m > -1$"
      },
      {
        "key": "C",
        "text": "$m = -1$"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "A",
    "explanation": "* Hệ giải được bằng quy tắc Cramer khi và chỉ khi định thức chính khác 0: $D \\neq 0 \\iff m - -1 \\neq 0 \\iff m \\neq -1$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 349,
    "originalId": 349,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình Cramer có định thức chính $D = -2$ và định thức phụ theo ẩn $x$ là $D_x = 4$. Nghiệm $x$ của hệ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$x = 2$"
      },
      {
        "key": "B",
        "text": "$x = -2$"
      },
      {
        "key": "C",
        "text": "$x = 4$"
      },
      {
        "key": "D",
        "text": "Phương án 1"
      }
    ],
    "correct": "B",
    "explanation": "* Theo công thức Cramer: $x = \\dfrac{D_x}{D} = \\dfrac{4}{-2} = -2$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 350,
    "originalId": 350,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm điều kiện của tham số $m$ để hệ phương trình tuyến tính vuông cấp 3 có định thức $D = m - 3$ giải được bằng **quy tắc Cramer**:",
    "options": [
      {
        "key": "A",
        "text": "$m = 3$"
      },
      {
        "key": "B",
        "text": "$m \\neq 3$"
      },
      {
        "key": "C",
        "text": "$m = 0$"
      },
      {
        "key": "D",
        "text": "$m > 3$"
      }
    ],
    "correct": "B",
    "explanation": "* Hệ giải được bằng quy tắc Cramer khi và chỉ khi định thức chính khác 0: $D \\neq 0 \\iff m - 3 \\neq 0 \\iff m \\neq 3$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 351,
    "originalId": 351,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình Cramer có định thức chính $D = 4$ và định thức phụ theo ẩn $x$ là $D_x = 16$. Nghiệm $x$ của hệ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$x = -4$"
      },
      {
        "key": "B",
        "text": "Phương án 1"
      },
      {
        "key": "C",
        "text": "$x = 16$"
      },
      {
        "key": "D",
        "text": "$x = 4$"
      }
    ],
    "correct": "D",
    "explanation": "* Theo công thức Cramer: $x = \\dfrac{D_x}{D} = \\dfrac{16}{4} = 4$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 352,
    "originalId": 352,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm điều kiện của tham số $m$ để hệ phương trình tuyến tính vuông cấp 3 có định thức $D = m - 6$ giải được bằng **quy tắc Cramer**:",
    "options": [
      {
        "key": "A",
        "text": "$m = 6$"
      },
      {
        "key": "B",
        "text": "$m \\neq 6$"
      },
      {
        "key": "C",
        "text": "$m > 6$"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "B",
    "explanation": "* Hệ giải được bằng quy tắc Cramer khi và chỉ khi định thức chính khác 0: $D \\neq 0 \\iff m - 6 \\neq 0 \\iff m \\neq 6$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 353,
    "originalId": 353,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình Cramer có định thức chính $D = 4$ và định thức phụ theo ẩn $x$ là $D_x = 12$. Nghiệm $x$ của hệ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$x = 3$"
      },
      {
        "key": "B",
        "text": "$x = -3$"
      },
      {
        "key": "C",
        "text": "$x = 12$"
      },
      {
        "key": "D",
        "text": "$x = 4$"
      }
    ],
    "correct": "A",
    "explanation": "* Theo công thức Cramer: $x = \\dfrac{D_x}{D} = \\dfrac{12}{4} = 3$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 354,
    "originalId": 354,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm điều kiện của tham số $m$ để hệ phương trình tuyến tính vuông cấp 3 có định thức $D = m - 4$ giải được bằng **quy tắc Cramer**:",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq 4$"
      },
      {
        "key": "B",
        "text": "$m = 4$"
      },
      {
        "key": "C",
        "text": "$m > 4$"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "A",
    "explanation": "* Hệ giải được bằng quy tắc Cramer khi và chỉ khi định thức chính khác 0: $D \\neq 0 \\iff m - 4 \\neq 0 \\iff m \\neq 4$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 355,
    "originalId": 355,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình Cramer có định thức chính $D = 3$ và định thức phụ theo ẩn $x$ là $D_x = 3$. Nghiệm $x$ của hệ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$x = -1$"
      },
      {
        "key": "B",
        "text": "Phương án 1"
      },
      {
        "key": "C",
        "text": "$x = 1$"
      },
      {
        "key": "D",
        "text": "$x = 3$"
      }
    ],
    "correct": "C",
    "explanation": "* Theo công thức Cramer: $x = \\dfrac{D_x}{D} = \\dfrac{3}{3} = 1$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 356,
    "originalId": 356,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm điều kiện của tham số $m$ để hệ phương trình tuyến tính vuông cấp 3 có định thức $D = m - 1$ giải được bằng **quy tắc Cramer**:",
    "options": [
      {
        "key": "A",
        "text": "$m = 0$"
      },
      {
        "key": "B",
        "text": "$m = 1$"
      },
      {
        "key": "C",
        "text": "$m > 1$"
      },
      {
        "key": "D",
        "text": "$m \\neq 1$"
      }
    ],
    "correct": "D",
    "explanation": "* Hệ giải được bằng quy tắc Cramer khi và chỉ khi định thức chính khác 0: $D \\neq 0 \\iff m - 1 \\neq 0 \\iff m \\neq 1$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 357,
    "originalId": 357,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 2,
    "typeId": "4.2",
    "typeName": "Phương pháp Cramer & Ma trận nghịch đảo",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình Cramer có định thức chính $D = -2$ và định thức phụ theo ẩn $x$ là $D_x = 2$. Nghiệm $x$ của hệ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$x = 1$"
      },
      {
        "key": "B",
        "text": "$x = 2$"
      },
      {
        "key": "C",
        "text": "$x = -1$"
      },
      {
        "key": "D",
        "text": "$x = -2$"
      }
    ],
    "correct": "C",
    "explanation": "* Theo công thức Cramer: $x = \\dfrac{D_x}{D} = \\dfrac{2}{-2} = -1$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 358,
    "originalId": 6,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho hệ phương trình:\n$$\\begin{cases} x + y - 5z = a \\\\ -2x + 2y + 2z = b \\\\ -x + 3y - 3z = c \\end{cases}$$\nĐiều kiện cần và đủ để hệ phương trình đã cho có nghiệm là:",
    "options": [
      {
        "key": "A",
        "text": "$a + b - c = 0$"
      },
      {
        "key": "B",
        "text": "$3a - b + c \\neq 0$"
      },
      {
        "key": "C",
        "text": "$a + b - c \\neq 0$"
      },
      {
        "key": "D",
        "text": "$3a - b + c = 0$"
      }
    ],
    "correct": "A",
    "explanation": "* Cộng phương trình (1) và phương trình (2) theo từng vế:\n  $$(x - 2x) + (y + 2y) + (-5z + 2z) = -x + 3y - 3z = a + b$$\n* Vế trái chính là vế trái của phương trình (3): $-x + 3y - 3z = c$.\n* Để hệ có nghiệm, vế phải phải tương thích:\n  $$a + b = c \\iff a + b - c = 0$$\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 359,
    "originalId": 39,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Cho hệ phương trình tuyến tính:\n$$\\begin{cases} 2x + 3y = -11 \\\\ 6x - 5y + z = 45 \\end{cases}$$\nMa trận bổ sung của hệ phương trình trên là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 2 & 3 & 0 & 11 \\\\ 6 & 0 & 1 & 45 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 2 & 3 & 0 & -11 \\\\ 6 & -5 & 1 & 45 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 2 & 6 \\\\ 3 & -5 \\\\ 0 & 1 \\\\ -11 & 45 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 2 & 6 \\\\ 3 & 0 \\\\ 0 & 1 \\\\ 11 & 45 \\end{bmatrix}$"
      }
    ],
    "correct": "B",
    "explanation": "* Hệ phương trình có 3 ẩn $x, y, z$:\n  $$\\begin{cases} 2x + 3y + 0z = -11 \\\\ 6x - 5y + 1z = 45 \\end{cases}$$\n* Ma trận hệ số $A = \\begin{bmatrix} 2 & 3 & 0 \\\\ 6 & -5 & 1 \\end{bmatrix}$, cột số hạng tự do $B = \\begin{bmatrix} -11 \\\\ 45 \\end{bmatrix}$.\n* Ma trận bổ sung $\\bar{A} = [A | B]$ là:\n  $$\\bar{A} = \\begin{bmatrix} 2 & 3 & 0 & -11 \\\\ 6 & -5 & 1 & 45 \\end{bmatrix}$$\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 360,
    "originalId": 40,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Phương trình nào dưới đây có thể viết thành một phương trình tuyến tính với các ẩn $x, y$?",
    "options": [
      {
        "key": "A",
        "text": "$(\\sin \\pi) x^2 + y = 2$"
      },
      {
        "key": "B",
        "text": "$(\\sin 0{,}5) xy + x + y = 1$"
      },
      {
        "key": "C",
        "text": "$(\\cos \\pi) x^2 + y = 2$"
      },
      {
        "key": "D",
        "text": "$(\\cos(\\sin \\pi)) x^2 + y = 2$"
      }
    ],
    "correct": "A",
    "explanation": "* Phương trình tuyến tính với các ẩn $x, y$ là phương trình bậc nhất có dạng tổng quát $ax + by = c$, trong đó các ẩn không được nhân với nhau hoặc có số mũ khác $1$.\n* Xét phương án **A**: Ta có $\\sin \\pi = 0$, do đó:\n  $$(\\sin \\pi) x^2 + y = 2 \\iff 0 \\cdot x^2 + y = 2 \\iff y = 2$$\n  Đây là một phương trình bậc nhất đối với $x, y$ (dạng $0x + 1y = 2$).\n* Các phương án còn lại:\n  * B: Chứa tích $xy$ (bậc 2) nên là phi tuyến.\n  * C: $\\cos \\pi = -1 \\ne 0 \\implies -x^2 + y = 2$ (bậc 2 theo $x$).\n  * D: $\\sin \\pi = 0 \\implies \\cos 0 = 1 \\ne 0 \\implies x^2 + y = 2$ (bậc 2 theo $x$).\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 361,
    "originalId": 361,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình gồm $4$ phương trình và $3$ ẩn số. Khẳng định nào sau đây là **luôn đúng**?",
    "options": [
      {
        "key": "A",
        "text": "Hệ luôn có nghiệm duy nhất"
      },
      {
        "key": "B",
        "text": "Hạng ma trận hệ số tối đa là 3"
      },
      {
        "key": "C",
        "text": "Hệ luôn luôn vô nghiệm"
      },
      {
        "key": "D",
        "text": "Hệ không thể có vô số nghiệm phụ thuộc 2 tham số nếu hạng ma trận hệ số bằng 2"
      }
    ],
    "correct": "B",
    "explanation": "Ma trận hệ số $A$ có kích thước $4 \\times 3$, do đó hạng $r(A) \\le \\min(4, 3) = 3$. Vậy hạng tối đa của $A$ là 3.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 362,
    "originalId": 362,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong phương pháp khử Gauss, các phép biến đổi sơ cấp trên các hàng của ma trận mở rộng $\\bar{A}$ gồm:",
    "options": [
      {
        "key": "A",
        "text": "Cộng hai cột với nhau, đổi chỗ hai cột"
      },
      {
        "key": "B",
        "text": "Bình phương các phần tử của một hàng"
      },
      {
        "key": "C",
        "text": "Nhân một hàng với số 0"
      },
      {
        "key": "D",
        "text": "Đổi chỗ hai hàng, nhân một hàng với số khác 0, cộng vào một hàng một bội của hàng khác"
      }
    ],
    "correct": "D",
    "explanation": "Ba phép biến đổi sơ cấp theo hàng bảo toàn tập nghiệm của hệ phương trình tuyến tính là: (1) Hoán vị hai hàng, (2) Nhân một hàng với một số thực khác 0, (3) Cộng vào một hàng bội của một hàng khác.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 363,
    "originalId": 363,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm $m$ để hệ phương trình $\\begin{cases} x + y + z = 1 \\\\ 2x + 3y + z = 2 \\\\ 3x + 4y + 2z = m \\end{cases}$ có nghiệm:",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq 3$"
      },
      {
        "key": "B",
        "text": "Mọi $m \\in \\mathbb{R}$"
      },
      {
        "key": "C",
        "text": "$m = 3$"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "C",
    "explanation": "Nhận thấy hàng 1 + hàng 2 = hàng 3 ở vế trái: $(x+y+z) + (2x+3y+z) = 3x+4y+2z$. Để hệ có nghiệm, vế phải cũng phải thỏa mãn: $1 + 2 = m \\Rightarrow m = 3$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 364,
    "originalId": 364,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Một hệ gồm 3 phương trình bậc nhất 3 ẩn có biểu diễn hình học là:",
    "options": [
      {
        "key": "A",
        "text": "Vị trí tương đối của 3 đường thẳng trong mặt phẳng $\\mathbb{R}^2$"
      },
      {
        "key": "B",
        "text": "Vị trí tương đối của 3 điểm trong không gian"
      },
      {
        "key": "C",
        "text": "3 hình cầu trong $\\mathbb{R}^3$"
      },
      {
        "key": "D",
        "text": "Vị trí tương đối của 3 mặt phẳng trong không gian $\\mathbb{R}^3$"
      }
    ],
    "correct": "D",
    "explanation": "Mỗi phương trình tuyến tính $ax + by + cz = d$ biểu diễn một mặt phẳng trong không gian 3 chiều $\\mathbb{R}^3$. Hệ 3 phương trình biểu diễn giao của 3 mặt phẳng này.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 365,
    "originalId": 365,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình $\\begin{cases} x - y = 2 \\\\ 2x - 2y = 4 \\end{cases}$. Nghiệm tổng quát của hệ là:",
    "options": [
      {
        "key": "A",
        "text": "$(t, \\, 2 + t)$ với $t \\in \\mathbb{R}$"
      },
      {
        "key": "B",
        "text": "$(2 + t, \\, t)$ với $t \\in \\mathbb{R}$"
      },
      {
        "key": "C",
        "text": "Vô nghiệm"
      },
      {
        "key": "D",
        "text": "$(2, 0)$"
      }
    ],
    "correct": "B",
    "explanation": "Hai phương trình tương đương: $x - y = 2 \\Leftrightarrow x = 2 + y$. Đặt $y = t \\in \\mathbb{R}$ làm ẩn tự do, ta được nghiệm tổng quát là $(x, y) = (2 + t, t)$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 366,
    "originalId": 366,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Số ẩn tự do của một hệ phương trình tuyến tính có 5 ẩn và hạng của ma trận hệ số bằng 2 là:",
    "options": [
      {
        "key": "A",
        "text": "$5$"
      },
      {
        "key": "B",
        "text": "$7$"
      },
      {
        "key": "C",
        "text": "$2$"
      },
      {
        "key": "D",
        "text": "$3$"
      }
    ],
    "correct": "D",
    "explanation": "Số ẩn tự do (số tham số trong nghiệm tổng quát) bằng số ẩn trừ đi hạng: $n - r(A) = 5 - 2 = 3$.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 367,
    "originalId": 367,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Khi giải hệ phương trình tuyến tính bằng phương pháp khử Gauss, ta thực hiện các phép biến đổi sơ cấp trên:",
    "options": [
      {
        "key": "A",
        "text": "Chỉ các hàng của ma trận hệ số $A$"
      },
      {
        "key": "B",
        "text": "Cả hàng và cột của $\\bar{A}$ tùy ý"
      },
      {
        "key": "C",
        "text": "Các cột của ma trận mở rộng $\\bar{A}$"
      },
      {
        "key": "D",
        "text": "Các hàng của ma trận mở rộng $\\bar{A} = [A \\mid B]$"
      }
    ],
    "correct": "D",
    "explanation": "* **Nguyên tắc phương pháp khử Gauss:**\n  * Mỗi hàng của ma trận mở rộng $\\bar{A}$ tương ứng với một phương trình trong hệ.\n  * Việc biến đổi sơ cấp theo hàng tương đương với các phép biến đổi tương đương trên các phương trình (đổi chỗ 2 phương trình, nhân 2 vế với hằng số khác 0, cộng trừ các phương trình).\n  * Biến đổi cột sẽ làm thay đổi vai trò các ẩn số hoặc làm sai lệch cột hệ số tự do $B$, do đó **chỉ biến đổi sơ cấp trên hàng** của $\\bar{A}$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 368,
    "originalId": 368,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Một hệ phương trình tuyến tính gồm 3 ẩn số. Sau khi khử Gauss, ma trận hệ số có hạng $r(A) = r(\\bar{A}) = 2$. Số ẩn tự do của hệ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$2$"
      },
      {
        "key": "B",
        "text": "$0$"
      },
      {
        "key": "C",
        "text": "$1$"
      },
      {
        "key": "D",
        "text": "$3$"
      }
    ],
    "correct": "C",
    "explanation": "* Số ẩn tự do trong không gian nghiệm bằng số ẩn trừ đi hạng: $k = n - r = 3 - 2 = 1$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 369,
    "originalId": 369,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình gồm 5 phương trình và 3 ẩn số có ma trận bổ sung bậc thang chứa 1 hàng khác không. Số ẩn phụ (ẩn tự do) bằng:",
    "options": [
      {
        "key": "A",
        "text": "$3$"
      },
      {
        "key": "B",
        "text": "$2$"
      },
      {
        "key": "C",
        "text": "$1$"
      },
      {
        "key": "D",
        "text": "$4$"
      }
    ],
    "correct": "B",
    "explanation": "* Hạng của hệ là $r = 1$. Số ẩn tự do luôn bằng số ẩn trừ đi hạng: $n - r = 3 - 1 = 2$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 370,
    "originalId": 370,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong quá trình khử Gauss đưa ma trận về bậc thang, nếu hàng cuối cùng có dạng $[0 \\; 0 \\; \\dots \\; 0 \\mid 2]$ thì hệ phương trình:",
    "options": [
      {
        "key": "A",
        "text": "Vô nghiệm"
      },
      {
        "key": "B",
        "text": "Có nghiệm duy nhất"
      },
      {
        "key": "C",
        "text": "Có nghiệm tầm thường"
      },
      {
        "key": "D",
        "text": "Có vô số nghiệm"
      }
    ],
    "correct": "A",
    "explanation": "* Hàng $[0 \\dots 0 \\mid 2]$ tương đương $0 = 2 \\neq 0$ (mâu thuẫn), do đó hệ vô nghiệm.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 371,
    "originalId": 371,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Một hệ phương trình tuyến tính gồm 7 ẩn số. Sau khi khử Gauss, ma trận hệ số có hạng $r(A) = r(\\bar{A}) = 3$. Số ẩn tự do của hệ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$5$"
      },
      {
        "key": "B",
        "text": "$3$"
      },
      {
        "key": "C",
        "text": "$7$"
      },
      {
        "key": "D",
        "text": "$4$"
      }
    ],
    "correct": "D",
    "explanation": "* Số ẩn tự do trong không gian nghiệm bằng số ẩn trừ đi hạng: $k = n - r = 7 - 3 = 4$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 372,
    "originalId": 372,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong quá trình khử Gauss đưa ma trận về bậc thang, nếu hàng cuối cùng có dạng $[0 \\; 0 \\; \\dots \\; 0 \\mid 1]$ thì hệ phương trình:",
    "options": [
      {
        "key": "A",
        "text": "Có vô số nghiệm"
      },
      {
        "key": "B",
        "text": "Có nghiệm tầm thường"
      },
      {
        "key": "C",
        "text": "Vô nghiệm"
      },
      {
        "key": "D",
        "text": "Có nghiệm duy nhất"
      }
    ],
    "correct": "C",
    "explanation": "* Hàng $[0 \\dots 0 \\mid 1]$ tương đương $0 = 1 \\neq 0$ (mâu thuẫn), do đó hệ vô nghiệm.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 373,
    "originalId": 373,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Một hệ phương trình tuyến tính gồm 4 ẩn số. Sau khi khử Gauss, ma trận hệ số có hạng $r(A) = r(\\bar{A}) = 3$. Số ẩn tự do của hệ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$2$"
      },
      {
        "key": "B",
        "text": "$3$"
      },
      {
        "key": "C",
        "text": "$4$"
      },
      {
        "key": "D",
        "text": "$1$"
      }
    ],
    "correct": "D",
    "explanation": "* Số ẩn tự do trong không gian nghiệm bằng số ẩn trừ đi hạng: $k = n - r = 4 - 3 = 1$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 374,
    "originalId": 374,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình gồm 8 phương trình và 5 ẩn số có ma trận bổ sung bậc thang chứa 1 hàng khác không. Số ẩn phụ (ẩn tự do) bằng:",
    "options": [
      {
        "key": "A",
        "text": "$4$"
      },
      {
        "key": "B",
        "text": "$1$"
      },
      {
        "key": "C",
        "text": "$7$"
      },
      {
        "key": "D",
        "text": "$5$"
      }
    ],
    "correct": "A",
    "explanation": "* Hạng của hệ là $r = 1$. Số ẩn tự do luôn bằng số ẩn trừ đi hạng: $n - r = 5 - 1 = 4$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 375,
    "originalId": 375,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Một hệ phương trình tuyến tính gồm 5 ẩn số. Sau khi khử Gauss, ma trận hệ số có hạng $r(A) = r(\\bar{A}) = 2$. Số ẩn tự do của hệ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$2$"
      },
      {
        "key": "B",
        "text": "$4$"
      },
      {
        "key": "C",
        "text": "$5$"
      },
      {
        "key": "D",
        "text": "$3$"
      }
    ],
    "correct": "D",
    "explanation": "* Số ẩn tự do trong không gian nghiệm bằng số ẩn trừ đi hạng: $k = n - r = 5 - 2 = 3$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 376,
    "originalId": 376,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình gồm 6 phương trình và 4 ẩn số có ma trận bổ sung bậc thang chứa 3 hàng khác không. Số ẩn phụ (ẩn tự do) bằng:",
    "options": [
      {
        "key": "A",
        "text": "$4$"
      },
      {
        "key": "B",
        "text": "$1$"
      },
      {
        "key": "C",
        "text": "$2$"
      },
      {
        "key": "D",
        "text": "$3$"
      }
    ],
    "correct": "B",
    "explanation": "* Hạng của hệ là $r = 3$. Số ẩn tự do luôn bằng số ẩn trừ đi hạng: $n - r = 4 - 3 = 1$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 377,
    "originalId": 377,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong quá trình khử Gauss đưa ma trận về bậc thang, nếu hàng cuối cùng có dạng $[0 \\; 0 \\; \\dots \\; 0 \\mid 3]$ thì hệ phương trình:",
    "options": [
      {
        "key": "A",
        "text": "Vô nghiệm"
      },
      {
        "key": "B",
        "text": "Có nghiệm tầm thường"
      },
      {
        "key": "C",
        "text": "Có nghiệm duy nhất"
      },
      {
        "key": "D",
        "text": "Có vô số nghiệm"
      }
    ],
    "correct": "A",
    "explanation": "* Hàng $[0 \\dots 0 \\mid 3]$ tương đương $0 = 3 \\neq 0$ (mâu thuẫn), do đó hệ vô nghiệm.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 378,
    "originalId": 378,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Một hệ phương trình tuyến tính gồm 6 ẩn số. Sau khi khử Gauss, ma trận hệ số có hạng $r(A) = r(\\bar{A}) = 1$. Số ẩn tự do của hệ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$1$"
      },
      {
        "key": "B",
        "text": "$6$"
      },
      {
        "key": "C",
        "text": "$4$"
      },
      {
        "key": "D",
        "text": "$5$"
      }
    ],
    "correct": "D",
    "explanation": "* Số ẩn tự do trong không gian nghiệm bằng số ẩn trừ đi hạng: $k = n - r = 6 - 1 = 5$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 379,
    "originalId": 379,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình gồm 8 phương trình và 7 ẩn số có ma trận bổ sung bậc thang chứa 1 hàng khác không. Số ẩn phụ (ẩn tự do) bằng:",
    "options": [
      {
        "key": "A",
        "text": "$6$"
      },
      {
        "key": "B",
        "text": "$5$"
      },
      {
        "key": "C",
        "text": "$7$"
      },
      {
        "key": "D",
        "text": "$1$"
      }
    ],
    "correct": "A",
    "explanation": "* Hạng của hệ là $r = 1$. Số ẩn tự do luôn bằng số ẩn trừ đi hạng: $n - r = 7 - 1 = 6$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 380,
    "originalId": 380,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Một hệ phương trình tuyến tính gồm 4 ẩn số. Sau khi khử Gauss, ma trận hệ số có hạng $r(A) = r(\\bar{A}) = 1$. Số ẩn tự do của hệ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$3$"
      },
      {
        "key": "B",
        "text": "$4$"
      },
      {
        "key": "C",
        "text": "$1$"
      },
      {
        "key": "D",
        "text": "$2$"
      }
    ],
    "correct": "A",
    "explanation": "* Số ẩn tự do trong không gian nghiệm bằng số ẩn trừ đi hạng: $k = n - r = 4 - 1 = 3$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 381,
    "originalId": 381,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình gồm 9 phương trình và 6 ẩn số có ma trận bổ sung bậc thang chứa 2 hàng khác không. Số ẩn phụ (ẩn tự do) bằng:",
    "options": [
      {
        "key": "A",
        "text": "$4$"
      },
      {
        "key": "B",
        "text": "$7$"
      },
      {
        "key": "C",
        "text": "$2$"
      },
      {
        "key": "D",
        "text": "$6$"
      }
    ],
    "correct": "A",
    "explanation": "* Hạng của hệ là $r = 2$. Số ẩn tự do luôn bằng số ẩn trừ đi hạng: $n - r = 6 - 2 = 4$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 382,
    "originalId": 382,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Một hệ phương trình tuyến tính gồm 5 ẩn số. Sau khi khử Gauss, ma trận hệ số có hạng $r(A) = r(\\bar{A}) = 4$. Số ẩn tự do của hệ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$2$"
      },
      {
        "key": "B",
        "text": "$4$"
      },
      {
        "key": "C",
        "text": "$1$"
      },
      {
        "key": "D",
        "text": "$5$"
      }
    ],
    "correct": "C",
    "explanation": "* Số ẩn tự do trong không gian nghiệm bằng số ẩn trừ đi hạng: $k = n - r = 5 - 4 = 1$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 383,
    "originalId": 383,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 3,
    "typeId": "4.3",
    "typeName": "Khử Gauss & Nghiệm tổng quát",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình gồm 8 phương trình và 7 ẩn số có ma trận bổ sung bậc thang chứa 3 hàng khác không. Số ẩn phụ (ẩn tự do) bằng:",
    "options": [
      {
        "key": "A",
        "text": "$3$"
      },
      {
        "key": "B",
        "text": "$7$"
      },
      {
        "key": "C",
        "text": "$4$"
      },
      {
        "key": "D",
        "text": "$5$"
      }
    ],
    "correct": "C",
    "explanation": "* Hạng của hệ là $r = 3$. Số ẩn tự do luôn bằng số ẩn trừ đi hạng: $n - r = 7 - 3 = 4$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 384,
    "originalId": 19,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Với giá trị nào của $a$ thì hệ phương trình dưới đây có nghiệm **không tầm thường**?\n$$\\begin{cases} x + y - z = 0 \\\\ 2x + 4y + az = 0 \\\\ 3x + 11y + z = 0 \\end{cases}$$",
    "options": [
      {
        "key": "A",
        "text": "$a = -1$"
      },
      {
        "key": "B",
        "text": "$a = 1$"
      },
      {
        "key": "C",
        "text": "$a \\neq 1$"
      },
      {
        "key": "D",
        "text": "$a \\neq -1$"
      }
    ],
    "correct": "A",
    "explanation": "* Hệ phương trình thuần nhất vuông có nghiệm không tầm thường khi và chỉ khi định thức của ma trận hệ số bằng 0:\n  $$\\det A = \\begin{vmatrix} 1 & 1 & -1 \\\\ 2 & 4 & a \\\\ 3 & 11 & 1 \\end{vmatrix} = 0$$\n* Khai triển:\n  $$\\det A = 1(4 - 11a) - 1(2 - 3a) - 1(22 - 12) = 4 - 11a - 2 + 3a - 10 = -8a - 8$$\n* $\\det A = 0 \\iff -8a - 8 = 0 \\iff a = -1$.\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 385,
    "originalId": 40,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho một hệ phương trình tuyến tính thuần nhất gồm 3 phương trình, 6 ẩn. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Hệ phương trình đã cho có nghiệm duy nhất"
      },
      {
        "key": "B",
        "text": "Hệ phương trình đã cho có vô số nghiệm"
      },
      {
        "key": "C",
        "text": "Hệ phương trình đã cho vô nghiệm"
      },
      {
        "key": "D",
        "text": "Không có đủ thông tin để kết luận về số nghiệm của hệ phương trình đã cho"
      }
    ],
    "correct": "B",
    "explanation": "* Hệ phương trình thuần nhất luôn luôn có nghiệm tầm thường $X = \\vec{0}$, nên không bao giờ vô nghiệm (loại C).\n* Ma trận hệ số $A$ có cỡ $3 \\times 6$, suy ra hạng $r(A) \\le 3$.\n* Số ẩn là $n = 6$.\n* Vì $r(A) \\le 3 < 6$ nên số chiều không gian nghiệm $\\dim S = n - r(A) \\ge 6 - 3 = 3 > 0$.\n* Do đó hệ luôn có vô số nghiệm phụ thuộc vào ít nhất 3 tham số tự do.\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 386,
    "originalId": 2,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Gọi $V$ là không gian nghiệm của hệ phương trình thuần nhất:\n$$\\begin{cases} x_1 + x_2 + x_3 + x_4 + x_5 = 0 \\\\ 2x_1 + 3x_2 + 4x_3 + 5x_4 + 6x_5 = 0 \\\\ (m + 1)x_1 + 5x_2 + 6x_3 + 7x_4 + 2(m + 1)x_5 = 0 \\end{cases}$$\nTìm $m$ để $\\dim V$ đạt giá trị lớn nhất:",
    "options": [
      {
        "key": "A",
        "text": "$m = 1$"
      },
      {
        "key": "B",
        "text": "$m = 7$"
      },
      {
        "key": "C",
        "text": "$m = 11$"
      },
      {
        "key": "D",
        "text": "$m = 3$"
      }
    ],
    "correct": "D",
    "explanation": "* Không gian nghiệm của hệ thuần nhất 5 ẩn có số chiều: $\\dim V = n - r(A) = 5 - r(A)$.\n* Để $\\dim V$ lớn nhất thì hạng $r(A)$ phải nhỏ nhất.\n* Biến đổi sơ cấp ma trận hệ số $A$:\n  $$h_2 \\to h_2 - 2h_1 \\implies (0, 1, 2, 3, 4)$$\n* Xét hàng 3: để $r(A) = 2$ (nhỏ nhất) thì hàng 3 phải là tổ hợp tuyến tính của hàng 1 và hàng 2.\n  * Cụ thể $h_3 = (m - 3) h_1 + (4 - m) h_2$. Ta thấy hệ số của $x_2$ là $5$ và $x_3$ là $6$:\n    $h_3 - 5h_2 = ((m+1) - 10) x_1 + (7 - 15) x_4 \\implies$ giải ra $m = 3$.\n  * Khi $m = 3$, hàng 3 trở thành: $4x_1 + 5x_2 + 6x_3 + 7x_4 + 8x_5 = 2(2x_1 + 3x_2 + 4x_3 + 5x_4 + 6x_5) - (x_1 + x_2 + x_3 + x_4 + x_5) = 2h_2 - h_1$.\n  * Do đó hàng 3 phụ thuộc tuyến tính vào 2 hàng đầu, suy ra $r(A) = 2$.\n* Khi $r(A) = 2$, $\\dim V = 5 - 2 = 3$ (lớn nhất).\n* **Chọn đáp án: D.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 387,
    "originalId": 31,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Cho hệ $m$ phương trình thuần nhất $n$ ẩn với ma trận hệ số có hạng $r(A) = p$. Khẳng định nào **không đúng**?",
    "options": [
      {
        "key": "A",
        "text": "Hệ phương trình thuần nhất luôn tồn tại nghiệm"
      },
      {
        "key": "B",
        "text": "Tập hợp nghiệm là không gian con của $\\mathbb{R}^n$"
      },
      {
        "key": "C",
        "text": "Khi $p < n$ hệ vô nghiệm"
      },
      {
        "key": "D",
        "text": "Khi $p = n$ hệ có duy nhất nghiệm"
      }
    ],
    "correct": "C",
    "explanation": "* Hệ phương trình đại số tuyến tính thuần nhất $AX = 0$ luôn có nghiệm tầm thường $X = (0, 0, \\dots, 0)^T$, do đó hệ **luôn có nghiệm** (không bao giờ vô nghiệm).\n* Khi $p < n$, hệ có vô số nghiệm phụ thuộc vào $n - p$ ẩn tự do. Khẳng định \"Khi $p < n$ hệ vô nghiệm\" là hoàn toàn sai.\n* Các khẳng định A, B, D đều đúng theo định lý Kronecker-Capelli và tính chất hệ thuần nhất.\n* **Chọn đáp án: C.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 388,
    "originalId": 388,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Một hệ phương trình thuần nhất $Ax = 0$ có $5$ ẩn và hạng của $A$ bằng $3$. Số véc tơ trong một hệ nghiệm cơ bản là:",
    "options": [
      {
        "key": "A",
        "text": "$8$"
      },
      {
        "key": "B",
        "text": "$2$"
      },
      {
        "key": "C",
        "text": "$5$"
      },
      {
        "key": "D",
        "text": "$3$"
      }
    ],
    "correct": "B",
    "explanation": "Không gian nghiệm của hệ thuần nhất $Ax = 0$ có số chiều bằng số ẩn tự do: $\\dim(\\operatorname{Ker} A) = n - r(A) = 5 - 3 = 2$. Do đó một hệ nghiệm cơ bản gồm đúng 2 véc tơ.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 389,
    "originalId": 389,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Điều kiện để hệ phương trình tuyến tính thuần nhất $Ax = 0$ (với $A$ vuông cấp $n$) có **nghiệm không tầm thường** (nghiệm khác 0) là:",
    "options": [
      {
        "key": "A",
        "text": "$r(A) = n$"
      },
      {
        "key": "B",
        "text": "$\\det A \\neq 0$"
      },
      {
        "key": "C",
        "text": "$\\det A = 0$"
      },
      {
        "key": "D",
        "text": "$A$ khả nghịch"
      }
    ],
    "correct": "C",
    "explanation": "Hệ thuần nhất vuông luôn có nghiệm tầm thường $x = 0$. Nó có nghiệm không tầm thường khi và chỉ khi hệ có vô số nghiệm $\\Leftrightarrow r(A) < n \\Leftrightarrow \\det A = 0$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 390,
    "originalId": 390,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình $Ax = b$ có một nghiệm riêng là $x_0$ và $V_0$ là không gian nghiệm của hệ thuần nhất liên kết $Ax = 0$. Nghiệm tổng quát của hệ $Ax = b$ có dạng:",
    "options": [
      {
        "key": "A",
        "text": "$x = c x_0$ với $c \\in \\mathbb{R}$"
      },
      {
        "key": "B",
        "text": "$x = v$ với $v \\in V_0$"
      },
      {
        "key": "C",
        "text": "$x = x_0 - 2v$"
      },
      {
        "key": "D",
        "text": "$x = x_0 + v$ với $v \\in V_0$"
      }
    ],
    "correct": "D",
    "explanation": "Theo cấu trúc nghiệm của hệ phương trình tuyến tính không thuần nhất: Nghiệm tổng quát = Nghiệm riêng + Nghiệm tổng quát của hệ thuần nhất tương ứng ($x = x_0 + v, v \\in V_0$).\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 391,
    "originalId": 391,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm $m$ để hệ thuần nhất $\\begin{cases} mx + y = 0 \\\\ 4x + my = 0 \\end{cases}$ có nghiệm không tầm thường:",
    "options": [
      {
        "key": "A",
        "text": "$m = 4$ hoặc $m = -4$"
      },
      {
        "key": "B",
        "text": "$m \\neq 2$ và $m \\neq -2$"
      },
      {
        "key": "C",
        "text": "Mọi $m \\in \\mathbb{R}$"
      },
      {
        "key": "D",
        "text": "$m = 2$ hoặc $m = -2$"
      }
    ],
    "correct": "D",
    "explanation": "Hệ có nghiệm không tầm thường khi và chỉ khi định thức ma trận hệ số bằng 0:\n$\\det A = \\begin{vmatrix} m & 1 \\\\ 4 & m \\end{vmatrix} = m^2 - 4 = 0 \\Leftrightarrow m = \\pm 2$.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 392,
    "originalId": 392,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận hệ số $A$ của một hệ thuần nhất $Ax = 0$ có $n = 6$ ẩn, hạng $r(A) = 4$. Số chiều của không gian nghiệm là:",
    "options": [
      {
        "key": "A",
        "text": "$10$"
      },
      {
        "key": "B",
        "text": "$6$"
      },
      {
        "key": "C",
        "text": "$2$"
      },
      {
        "key": "D",
        "text": "$4$"
      }
    ],
    "correct": "C",
    "explanation": "Số chiều không gian nghiệm của hệ thuần nhất $Ax = 0$ (tức số khuyết nullity) bằng $n - r(A) = 6 - 4 = 2$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 393,
    "originalId": 393,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Điều kiện để hệ phương trình $\\begin{cases} x + 2y - z = 0 \\\\ 2x - y + z = 0 \\\\ 3x + y = 0 \\end{cases}$ có nghiệm duy nhất là:",
    "options": [
      {
        "key": "A",
        "text": "Có nghiệm duy nhất $(0,0,0)$"
      },
      {
        "key": "B",
        "text": "Hệ không có nghiệm duy nhất vì luôn có vô số nghiệm"
      },
      {
        "key": "C",
        "text": "Hệ vô nghiệm"
      },
      {
        "key": "D",
        "text": "Nghiệm duy nhất $(1,1,1)$"
      }
    ],
    "correct": "B",
    "explanation": "Nhận thấy phương trình 1 + phương trình 2: $(x+2y-z) + (2x-y+z) = 3x+y = 0$, đúng bằng phương trình 3! Do đó 3 phương trình phụ thuộc tuyến tính, hạng $r(A) = 2 < 3$ (số ẩn). Vì vậy hệ thuần nhất có vô số nghiệm phụ thuộc 1 tham số.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 394,
    "originalId": 394,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hệ phương trình $\\begin{cases} x_1 + x_2 = 0 \\\\ x_2 + x_3 = 0 \\\\ x_3 + x_1 = 0 \\end{cases}$ có nghiệm là:",
    "options": [
      {
        "key": "A",
        "text": "$x_1 = x_2 = x_3 = 0$ (nghiệm duy nhất)"
      },
      {
        "key": "B",
        "text": "Vô số nghiệm $(t, t, t)$"
      },
      {
        "key": "C",
        "text": "Vô nghiệm"
      },
      {
        "key": "D",
        "text": "Vô số nghiệm $(t, -t, t)$"
      }
    ],
    "correct": "A",
    "explanation": "Ma trận hệ số $A = \\begin{bmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & 1 \\end{bmatrix}$ có $\\det A = 1(1) - 1(-1) = 2 \\neq 0$. Vì hệ thuần nhất có $\\det A \\neq 0$, hệ có nghiệm duy nhất tầm thường $x_1 = x_2 = x_3 = 0$.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 395,
    "originalId": 395,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Một hệ phương trình tuyến tính không thuần nhất gồm 4 phương trình, 4 ẩn có ma trận hệ số có $\\det A = 0$. Khẳng định nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Hệ chắc chắn có vô số nghiệm"
      },
      {
        "key": "B",
        "text": "Hệ chắc chắn vô nghiệm"
      },
      {
        "key": "C",
        "text": "Hệ có thể vô nghiệm hoặc có vô số nghiệm"
      },
      {
        "key": "D",
        "text": "Hệ có nghiệm duy nhất"
      }
    ],
    "correct": "C",
    "explanation": "Vì $\\det A = 0$ nên $r(A) < 4$. Phụ thuộc vào ma trận hệ số mở rộng $\\bar{A}$: nếu $r(\\bar{A}) > r(A)$ thì hệ vô nghiệm; nếu $r(\\bar{A}) = r(A)$ thì hệ có vô số nghiệm. Do đó hệ có thể vô nghiệm hoặc có vô số nghiệm.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 396,
    "originalId": 396,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình thuần nhất $AX = 0$ gồm $4$ phương trình, $5$ ẩn với $r(A) = 3$. Số chiều của không gian nghiệm của hệ là:",
    "options": [
      {
        "key": "A",
        "text": "$5$"
      },
      {
        "key": "B",
        "text": "$3$"
      },
      {
        "key": "C",
        "text": "$1$"
      },
      {
        "key": "D",
        "text": "$2$"
      }
    ],
    "correct": "D",
    "explanation": "* **Công thức số chiều của không gian nghiệm hệ thuần nhất:**\n  * Cho hệ phương trình tuyến tính thuần nhất $AX = 0$ có $n$ ẩn số và ma trận hệ số có hạng $r(A)$.\n  * Số chiều của không gian nghiệm (số ẩn tự do) bằng:\n    $$\\dim S = n - r(A)$$\n  * Ở đây số ẩn $n = 5$ và hạng $r(A) = 3$, do đó:\n    $$\\dim S = 5 - 3 = 2$$\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 397,
    "originalId": 397,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hệ phương trình thuần nhất $AX = 0$ với ma trận vuông $A$ cấp $n$ có nghiệm **không tầm thường** khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$r(A) = n$"
      },
      {
        "key": "B",
        "text": "$A = 0$"
      },
      {
        "key": "C",
        "text": "$\\det A \\neq 0$"
      },
      {
        "key": "D",
        "text": "$\\det A = 0$"
      }
    ],
    "correct": "D",
    "explanation": "* **Điều kiện có nghiệm không tầm thường:**\n  * Hệ thuần nhất luôn có nghiệm tầm thường $X = \\vec{0}$.\n  * Nếu $\\det A \\neq 0$, hệ có nghiệm duy nhất, và nghiệm đó chính là nghiệm tầm thường $X = \\vec{0}$.\n  * Do đó, để hệ có nghiệm không tầm thường ($X \\neq \\vec{0}$), điều kiện cần và đủ là hệ có vô số nghiệm $\\iff \\det A = 0$ (hoặc $r(A) < n$).\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 398,
    "originalId": 398,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho $X_1, X_2$ là hai nghiệm phân biệt của hệ phương trình không thuần nhất $AX = B$. Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "text": "$2X_1$ là một nghiệm của hệ $AX = B$"
      },
      {
        "key": "B",
        "text": "$X_1 - X_2$ là một nghiệm của hệ thuần nhất liên kết $AX = 0$"
      },
      {
        "key": "C",
        "text": "$X_1 + X_2$ là một nghiệm của hệ thuần nhất liên kết $AX = 0$"
      },
      {
        "key": "D",
        "text": "$X_1 + X_2$ là một nghiệm của hệ $AX = B$"
      }
    ],
    "correct": "B",
    "explanation": "* **Cấu trúc nghiệm của hệ phương trình tuyến tính:**\n  * Ta có $AX_1 = B$ và $AX_2 = B$.\n  * Trừ hai đẳng thức vế theo vế:\n    $$A(X_1 - X_2) = AX_1 - AX_2 = B - B = 0$$\n  * Do đó hiệu của hai nghiệm bất kỳ của hệ không thuần nhất luôn là một nghiệm của hệ thuần nhất liên kết $AX = 0$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 399,
    "originalId": 399,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tập nghiệm của hệ phương trình tuyến tính thuần nhất $AX = 0$ trong $\\mathbb{R}^n$ lập thành:",
    "options": [
      {
        "key": "A",
        "text": "Một tập hợp rỗng nếu $\\det A \\neq 0$"
      },
      {
        "key": "B",
        "text": "Toàn bộ không gian $\\mathbb{R}^n$ với mọi ma trận $A$"
      },
      {
        "key": "C",
        "text": "Một không gian véc tơ con của $\\mathbb{R}^n$"
      },
      {
        "key": "D",
        "text": "Một không gian affine nhưng không phải không gian con"
      }
    ],
    "correct": "C",
    "explanation": "* **Tính chất không gian con của tập nghiệm hệ thuần nhất:**\n  * Nghiệm $\\vec{0}$ luôn thỏa mãn: $A \\\\vec{0} = 0$.\n  * Nếu $u, v$ là nghiệm ($Au=0, Av=0$) thì $A(u+v) = Au + Av = 0$ ($u+v$ là nghiệm).\n  * Với mọi $\\alpha \\in \\mathbb{R}$, $A(\\alpha u) = \\alpha (Au) = 0$ ($\\alpha u$ là nghiệm).\n  * Do đó tập nghiệm đóng kín với phép cộng và phép nhân vô hướng, nên là một không gian véc tơ con của $\\mathbb{R}^n$ (gọi là không gian hạch hay $\\ker A$).\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 400,
    "originalId": 400,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm hệ nghiệm cơ bản của phương trình thuần nhất $x_1 - 2x_2 + 3x_3 = 0$ trong $\\mathbb{R}^3$:",
    "options": [
      {
        "key": "A",
        "text": "$\\{ (2, 1, 0), \\, (-3, 0, 1) \\}$"
      },
      {
        "key": "B",
        "text": "$\\{ (1, 0, 0), \\, (0, 1, 0) \\}$"
      },
      {
        "key": "C",
        "text": "$\\{ (1, -2, 3) \\}$"
      },
      {
        "key": "D",
        "text": "$\\{ (2, 1, 0), \\, (3, 0, -1) \\}$"
      }
    ],
    "correct": "A",
    "explanation": "* **Kỹ thuật tìm hệ nghiệm cơ bản (cơ sở không gian nghiệm):**\n  * Phương trình có 1 phương trình, 3 ẩn $\\implies$ số ẩn tự do là $3 - 1 = 2$.\n  * Rút $x_1$ theo hai ẩn tự do $x_2, x_3$:\n    $$x_1 = 2x_2 - 3x_3$$\n  * Chọn $(x_2 = 1, x_3 = 0) \\implies x_1 = 2 \\implies v_1 = (2, 1, 0)$.\n  * Chọn $(x_2 = 0, x_3 = 1) \\implies x_1 = -3 \\implies v_2 = (-3, 0, 1)$.\n  * Hệ $\\{v_1, v_2\\}$ độc lập tuyến tính và sinh ra toàn bộ không gian nghiệm, do đó là một hệ nghiệm cơ bản.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 401,
    "originalId": 401,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Nghiệm tổng quát của hệ phương trình tuyến tính không thuần nhất $AX = B$ có dạng:",
    "options": [
      {
        "key": "A",
        "text": "$X = X_h - X_0$"
      },
      {
        "key": "B",
        "text": "$X = c X_0$ với $c \\in \\mathbb{R}$"
      },
      {
        "key": "C",
        "text": "$X = X_0 \\cdot X_h$"
      },
      {
        "key": "D",
        "text": "$X = X_0 + X_h$, với $X_0$ là một nghiệm riêng của $AX = B$ và $X_h$ là nghiệm tổng quát của $AX = 0$"
      }
    ],
    "correct": "D",
    "explanation": "* **Định lý cấu trúc nghiệm tổng quát:**\n  * Nghiệm tổng quát của hệ không thuần nhất $AX = B$ bằng tổng của **một nghiệm riêng** $X_0$ của hệ không thuần nhất cộng với **nghiệm tổng quát** $X_h$ của hệ thuần nhất liên kết:\n    $$X = X_0 + X_h$$\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 402,
    "originalId": 402,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hệ phương trình thuần nhất $AX = 0$ có ma trận hệ số $A$ thỏa mãn $r(A) = n$ (với $n$ là số ẩn). Số nghiệm của hệ là:",
    "options": [
      {
        "key": "A",
        "text": "$n$ nghiệm"
      },
      {
        "key": "B",
        "text": "Vô nghiệm"
      },
      {
        "key": "C",
        "text": "Đúng 1 nghiệm (nghiệm tầm thường $\\vec{0}$)"
      },
      {
        "key": "D",
        "text": "Vô số nghiệm"
      }
    ],
    "correct": "C",
    "explanation": "* **Số chiều không gian nghiệm:**\n  * $\\dim S = n - r(A) = n - n = 0$.\n  * Không gian nghiệm có số chiều bằng $0$, tức chỉ chứa duy nhất một véc tơ không:\n    $$S = \\\\{\\\\vec{0}\\\\}$$\n  * Vậy hệ có nghiệm duy nhất là nghiệm tầm thường $X = (0, 0, \\\\dots, 0)^T$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 403,
    "originalId": 403,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình $\\begin{cases} x_1 + x_2 + x_3 = 0 \\\\ 2x_1 + 2x_2 + 2x_3 = 0 \\end{cases}$ trong $\\mathbb{R}^3$. Số phần tử trong một hệ nghiệm cơ bản của hệ là:",
    "options": [
      {
        "key": "A",
        "text": "$3$"
      },
      {
        "key": "B",
        "text": "$0$"
      },
      {
        "key": "C",
        "text": "$2$"
      },
      {
        "key": "D",
        "text": "$1$"
      }
    ],
    "correct": "C",
    "explanation": "* **Tính số chiều của không gian nghiệm:**\n  * Hai phương trình tỉ lệ với nhau $\\implies$ hạng ma trận hệ số $r(A) = 1$.\n  * Số ẩn $n = 3$.\n  * Số véc tơ trong hệ nghiệm cơ bản chính là số chiều của không gian nghiệm:\n    $$\\dim S = n - r(A) = 3 - 1 = 2$$\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 404,
    "originalId": 404,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình tuyến tính thuần nhất gồm 6 ẩn số có hạng của ma trận hệ số bằng 2. Số véc tơ trong một hệ nghiệm cơ bản bằng:",
    "options": [
      {
        "key": "A",
        "text": "$4$"
      },
      {
        "key": "B",
        "text": "$5$"
      },
      {
        "key": "C",
        "text": "$2$"
      },
      {
        "key": "D",
        "text": "$6$"
      }
    ],
    "correct": "A",
    "explanation": "* Số véc tơ trong hệ nghiệm cơ bản chính là số chiều của không gian nghiệm, bằng $n - r = 6 - 2 = 4$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 405,
    "originalId": 405,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của tham số $m$ để hệ phương trình tuyến tính thuần nhất 3 ẩn có định thức $D = m - -2$ có **nghiệm không tầm thường**:",
    "options": [
      {
        "key": "A",
        "text": "$m = 0$"
      },
      {
        "key": "B",
        "text": "$m \\neq -2$"
      },
      {
        "key": "C",
        "text": "$m = -2$"
      },
      {
        "key": "D",
        "text": "$m > -2$"
      }
    ],
    "correct": "C",
    "explanation": "* Hệ thuần nhất có nghiệm không tầm thường khi và chỉ khi định thức chính bằng 0: $D = 0 \\iff m - -2 = 0 \\iff m = -2$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 406,
    "originalId": 406,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hệ phương trình thuần nhất $AX = 0$ có $n = 5$ ẩn số luôn có ít nhất một nghiệm là:",
    "options": [
      {
        "key": "A",
        "text": "Nghiệm duy nhất $(1, 1, \\dots, 1)^T$"
      },
      {
        "key": "B",
        "text": "Nghiệm tầm thường $(0, 0, \\dots, 0)^T$"
      },
      {
        "key": "C",
        "text": "Vô nghiệm"
      },
      {
        "key": "D",
        "text": "Nghiệm không xác định"
      }
    ],
    "correct": "B",
    "explanation": "* Mọi hệ phương trình thuần nhất $AX = 0$ luôn nhận véc tơ không làm nghiệm (gọi là nghiệm tầm thường).\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 407,
    "originalId": 407,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hệ phương trình tuyến tính thuần nhất gồm 4 ẩn số có hạng của ma trận hệ số bằng 3. Số véc tơ trong một hệ nghiệm cơ bản bằng:",
    "options": [
      {
        "key": "A",
        "text": "$1$"
      },
      {
        "key": "B",
        "text": "$2$"
      },
      {
        "key": "C",
        "text": "$4$"
      },
      {
        "key": "D",
        "text": "$3$"
      }
    ],
    "correct": "A",
    "explanation": "* Số véc tơ trong hệ nghiệm cơ bản chính là số chiều của không gian nghiệm, bằng $n - r = 4 - 3 = 1$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 408,
    "originalId": 408,
    "chapterId": 4,
    "chapterName": "Hệ phương trình tuyến tính",
    "topicId": 4,
    "topicName": "Hệ phương trình tuyến tính",
    "subTypeId": 4,
    "typeId": "4.4",
    "typeName": "Hệ thuần nhất & Hệ nghiệm cơ bản",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hệ phương trình thuần nhất $AX = 0$ có $n = 6$ ẩn số luôn có ít nhất một nghiệm là:",
    "options": [
      {
        "key": "A",
        "text": "Vô nghiệm"
      },
      {
        "key": "B",
        "text": "Nghiệm tầm thường $(0, 0, \\dots, 0)^T$"
      },
      {
        "key": "C",
        "text": "Nghiệm duy nhất $(1, 1, \\dots, 1)^T$"
      },
      {
        "key": "D",
        "text": "Nghiệm không xác định"
      }
    ],
    "correct": "B",
    "explanation": "* Mọi hệ phương trình thuần nhất $AX = 0$ luôn nhận véc tơ không làm nghiệm (gọi là nghiệm tầm thường).\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 409,
    "originalId": 409,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ là phép quay một góc $\\theta$ quanh gốc tọa độ. Ma trận chính tắc của $f$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} \\sin\\theta & \\cos\\theta \\\\ \\cos\\theta & -\\sin\\theta \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} \\cos\\theta & 0 \\\\ 0 & \\sin\\theta \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "Phép quay véc tơ đơn vị $e_1 = (1, 0)$ thành $(\\cos\\theta, \\sin\\theta)$ và $e_2 = (0, 1)$ thành $(-\\sin\\theta, \\cos\\theta)$. Lập thành ma trận ta được $\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 410,
    "originalId": 410,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Biết ma trận $A = P D P^{-1}$ với $D = \\begin{bmatrix} 1 & 0 \\\\ 0 & 2 \\end{bmatrix}$. Tính $A^4$ theo $P$ và $P^{-1}$:",
    "options": [
      {
        "key": "A",
        "text": "$P \\begin{bmatrix} 1 & 0 \\\\ 0 & 16 \\end{bmatrix} P^{-1}$"
      },
      {
        "key": "B",
        "text": "$P^4 D^4 (P^{-1})^4$"
      },
      {
        "key": "C",
        "text": "$P \\begin{bmatrix} 4 & 0 \\\\ 0 & 8 \\end{bmatrix} P^{-1}$"
      },
      {
        "key": "D",
        "text": "$P \\begin{bmatrix} 1 & 0 \\\\ 0 & 8 \\end{bmatrix} P^{-1}$"
      }
    ],
    "correct": "A",
    "explanation": "Ta có $A^4 = (P D P^{-1})^4 = P D^4 P^{-1}$. Lũy thừa ma trận đường chéo: $D^4 = \\begin{bmatrix} 1^4 & 0 \\\\ 0 & 2^4 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 0 & 16 \\end{bmatrix}$.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 411,
    "originalId": 411,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Ánh xạ nào dưới đây là một **ánh xạ tuyến tính**?",
    "options": [
      {
        "key": "A",
        "text": "$f: \\mathbb{R}^3 \\to \\mathbb{R}, \\, f(x, y, z) = x^2 + y + z$"
      },
      {
        "key": "B",
        "text": "$f: \\mathbb{R}^2 \\to \\mathbb{R}^2, \\, f(x, y) = (x + 1, \\, y)$"
      },
      {
        "key": "C",
        "text": "$f: \\mathbb{R}^2 \\to \\mathbb{R}^3, \\, f(x, y) = (2x - y, \\, 3x + 4y, \\, x)$"
      },
      {
        "key": "D",
        "text": "$f: \\mathbb{R}^2 \\to \\mathbb{R}, \\, f(x, y) = xy$"
      }
    ],
    "correct": "C",
    "explanation": "* **Dấu hiệu nhận biết ánh xạ tuyến tính:**\n  * Mỗi thành phần của $f(x, y)$ phải là đa thức bậc nhất thuần nhất đối với các biến (không có hằng số tự do, không có tích biến, không có bậc hai hoặc căn thức).\n  * Phương án A thỏa mãn đầy đủ các điều kiện $f(u + v) = f(u) + f(v)$ và $f(ku) = k f(u)$.\n  * B sai vì $f(0, 0) = (1, 0) \\neq (0, 0)$ (có hằng số tự do $+1$).\n  * C sai vì chứa tích hai biến $xy$ (bậc hai).\n  * D sai vì chứa số hạng bậc hai $x^2$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 412,
    "originalId": 412,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ thỏa $f(1, 0) = (2, 2)$ và $f(0, 1) = (0, 1)$. Ảnh $f(2, 3)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$(4, 7)$"
      },
      {
        "key": "B",
        "text": "$(5, 7)$"
      },
      {
        "key": "C",
        "text": "$(4, 3)$"
      },
      {
        "key": "D",
        "text": "$(4, 1)$"
      }
    ],
    "correct": "A",
    "explanation": "* Do $f$ tuyến tính: $f(2, 3) = 2 f(1, 0) + 3 f(0, 1) = 2(2, 2) + 3(0, 1) = (4, 7)$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 413,
    "originalId": 413,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Ánh xạ nào dưới đây là một **ánh xạ tuyến tính**?",
    "options": [
      {
        "key": "A",
        "text": "$f: \\mathbb{R}^2 \\to \\mathbb{R}^2, \\, f(x, y) = (x^2, \\, y)$"
      },
      {
        "key": "B",
        "text": "$f: \\mathbb{R}^2 \\to \\mathbb{R}^2, \\, f(x, y) = (xy, \\, x + y)$"
      },
      {
        "key": "C",
        "text": "$f: \\mathbb{R}^2 \\to \\mathbb{R}^2, \\, f(x, y) = (3x - y + 1, \\, x)$"
      },
      {
        "key": "D",
        "text": "$f: \\mathbb{R}^2 \\to \\mathbb{R}^2, \\, f(x, y) = (3x - y, \\, x + 3y)$"
      }
    ],
    "correct": "D",
    "explanation": "* Ánh xạ tuyến tính yêu cầu các biểu thức tọa độ phải là đa thức thuần nhất bậc 1 theo các biến, không chứa hằng số tự do khác 0 và không chứa bậc 2 hay tích biến.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 414,
    "originalId": 414,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Nếu $f: V \\to W$ là ánh xạ tuyến tính thì ảnh của véc tơ không $\\theta_V$ luôn thỏa mãn:",
    "options": [
      {
        "key": "A",
        "text": "$f(\\theta_V) = \\theta_W$"
      },
      {
        "key": "B",
        "text": "$f(\\theta_V) = 1$"
      },
      {
        "key": "C",
        "text": "$f(\\theta_V) = -\\theta_W$"
      },
      {
        "key": "D",
        "text": "$f(\\theta_V) \\neq \\theta_W$"
      }
    ],
    "correct": "A",
    "explanation": "* Tính chất cơ bản của ánh xạ tuyến tính: $f(\\theta) = f(0 \\cdot v) = 0 \\cdot f(v) = \\theta$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 415,
    "originalId": 415,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ thỏa $f(1, 0) = (1, 1)$ và $f(0, 1) = (0, 4)$. Ảnh $f(2, 3)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$(2, 4)$"
      },
      {
        "key": "B",
        "text": "$(2, 14)$"
      },
      {
        "key": "C",
        "text": "$(2, 12)$"
      },
      {
        "key": "D",
        "text": "$(3, 14)$"
      }
    ],
    "correct": "B",
    "explanation": "* Do $f$ tuyến tính: $f(2, 3) = 2 f(1, 0) + 3 f(0, 1) = 2(1, 1) + 3(0, 4) = (2, 14)$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 416,
    "originalId": 416,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ thỏa $f(1, 0) = (5, 4)$ và $f(0, 1) = (0, 3)$. Ảnh $f(2, 3)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$(11, 17)$"
      },
      {
        "key": "B",
        "text": "$(10, 9)$"
      },
      {
        "key": "C",
        "text": "$(10, 17)$"
      },
      {
        "key": "D",
        "text": "$(9, 3)$"
      }
    ],
    "correct": "C",
    "explanation": "* Do $f$ tuyến tính: $f(2, 3) = 2 f(1, 0) + 3 f(0, 1) = 2(5, 4) + 3(0, 3) = (10, 17)$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 417,
    "originalId": 417,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ thỏa $f(1, 0) = (5, 3)$ và $f(0, 1) = (0, 3)$. Ảnh $f(2, 3)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$(11, 15)$"
      },
      {
        "key": "B",
        "text": "$(10, 15)$"
      },
      {
        "key": "C",
        "text": "$(8, 3)$"
      },
      {
        "key": "D",
        "text": "$(10, 9)$"
      }
    ],
    "correct": "B",
    "explanation": "* Do $f$ tuyến tính: $f(2, 3) = 2 f(1, 0) + 3 f(0, 1) = 2(5, 3) + 3(0, 3) = (10, 15)$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 418,
    "originalId": 418,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ thỏa $f(1, 0) = (4, 4)$ và $f(0, 1) = (0, 4)$. Ảnh $f(2, 3)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$(8, 20)$"
      },
      {
        "key": "B",
        "text": "$(8, 12)$"
      },
      {
        "key": "C",
        "text": "$(9, 20)$"
      },
      {
        "key": "D",
        "text": "$(8, 4)$"
      }
    ],
    "correct": "A",
    "explanation": "* Do $f$ tuyến tính: $f(2, 3) = 2 f(1, 0) + 3 f(0, 1) = 2(4, 4) + 3(0, 4) = (8, 20)$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 419,
    "originalId": 419,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ thỏa $f(1, 0) = (5, 2)$ và $f(0, 1) = (0, 3)$. Ảnh $f(2, 3)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$(10, 13)$"
      },
      {
        "key": "B",
        "text": "$(10, 9)$"
      },
      {
        "key": "C",
        "text": "$(7, 3)$"
      },
      {
        "key": "D",
        "text": "$(11, 13)$"
      }
    ],
    "correct": "A",
    "explanation": "* Do $f$ tuyến tính: $f(2, 3) = 2 f(1, 0) + 3 f(0, 1) = 2(5, 2) + 3(0, 3) = (10, 13)$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 420,
    "originalId": 420,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ thỏa $f(1, 0) = (1, 1)$ và $f(0, 1) = (0, 5)$. Ảnh $f(2, 3)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$(3, 17)$"
      },
      {
        "key": "B",
        "text": "$(2, 17)$"
      },
      {
        "key": "C",
        "text": "$(2, 5)$"
      },
      {
        "key": "D",
        "text": "$(2, 15)$"
      }
    ],
    "correct": "B",
    "explanation": "* Do $f$ tuyến tính: $f(2, 3) = 2 f(1, 0) + 3 f(0, 1) = 2(1, 1) + 3(0, 5) = (2, 17)$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 421,
    "originalId": 421,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ thỏa $f(1, 0) = (5, 5)$ và $f(0, 1) = (0, 4)$. Ảnh $f(2, 3)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$(11, 22)$"
      },
      {
        "key": "B",
        "text": "$(10, 12)$"
      },
      {
        "key": "C",
        "text": "$(10, 4)$"
      },
      {
        "key": "D",
        "text": "$(10, 22)$"
      }
    ],
    "correct": "D",
    "explanation": "* Do $f$ tuyến tính: $f(2, 3) = 2 f(1, 0) + 3 f(0, 1) = 2(5, 5) + 3(0, 4) = (10, 22)$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 422,
    "originalId": 422,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ thỏa $f(1, 0) = (3, 1)$ và $f(0, 1) = (0, 3)$. Ảnh $f(2, 3)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$(6, 11)$"
      },
      {
        "key": "B",
        "text": "$(7, 11)$"
      },
      {
        "key": "C",
        "text": "$(6, 9)$"
      },
      {
        "key": "D",
        "text": "$(4, 3)$"
      }
    ],
    "correct": "A",
    "explanation": "* Do $f$ tuyến tính: $f(2, 3) = 2 f(1, 0) + 3 f(0, 1) = 2(3, 1) + 3(0, 3) = (6, 11)$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 423,
    "originalId": 423,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ thỏa $f(1, 0) = (4, 5)$ và $f(0, 1) = (0, 2)$. Ảnh $f(2, 3)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$(9, 16)$"
      },
      {
        "key": "B",
        "text": "$(8, 6)$"
      },
      {
        "key": "C",
        "text": "$(9, 2)$"
      },
      {
        "key": "D",
        "text": "$(8, 16)$"
      }
    ],
    "correct": "D",
    "explanation": "* Do $f$ tuyến tính: $f(2, 3) = 2 f(1, 0) + 3 f(0, 1) = 2(4, 5) + 3(0, 2) = (8, 16)$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 424,
    "originalId": 424,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ thỏa $f(1, 0) = (3, 3)$ và $f(0, 1) = (0, 2)$. Ảnh $f(2, 3)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$(6, 6)$"
      },
      {
        "key": "B",
        "text": "$(6, 2)$"
      },
      {
        "key": "C",
        "text": "$(7, 12)$"
      },
      {
        "key": "D",
        "text": "$(6, 12)$"
      }
    ],
    "correct": "D",
    "explanation": "* Do $f$ tuyến tính: $f(2, 3) = 2 f(1, 0) + 3 f(0, 1) = 2(3, 3) + 3(0, 2) = (6, 12)$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 425,
    "originalId": 425,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ thỏa $f(1, 0) = (3, 5)$ và $f(0, 1) = (0, 5)$. Ảnh $f(2, 3)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$(7, 25)$"
      },
      {
        "key": "B",
        "text": "$(6, 25)$"
      },
      {
        "key": "C",
        "text": "$(8, 5)$"
      },
      {
        "key": "D",
        "text": "$(6, 15)$"
      }
    ],
    "correct": "B",
    "explanation": "* Do $f$ tuyến tính: $f(2, 3) = 2 f(1, 0) + 3 f(0, 1) = 2(3, 5) + 3(0, 5) = (6, 25)$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 426,
    "originalId": 426,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ thỏa $f(1, 0) = (5, 3)$ và $f(0, 1) = (0, 5)$. Ảnh $f(2, 3)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$(8, 5)$"
      },
      {
        "key": "B",
        "text": "$(10, 21)$"
      },
      {
        "key": "C",
        "text": "$(10, 15)$"
      },
      {
        "key": "D",
        "text": "$(11, 21)$"
      }
    ],
    "correct": "B",
    "explanation": "* Do $f$ tuyến tính: $f(2, 3) = 2 f(1, 0) + 3 f(0, 1) = 2(5, 3) + 3(0, 5) = (10, 21)$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 427,
    "originalId": 427,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ thỏa $f(1, 0) = (5, 5)$ và $f(0, 1) = (0, 3)$. Ảnh $f(2, 3)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$(10, 9)$"
      },
      {
        "key": "B",
        "text": "$(10, 3)$"
      },
      {
        "key": "C",
        "text": "$(11, 19)$"
      },
      {
        "key": "D",
        "text": "$(10, 19)$"
      }
    ],
    "correct": "D",
    "explanation": "* Do $f$ tuyến tính: $f(2, 3) = 2 f(1, 0) + 3 f(0, 1) = 2(5, 5) + 3(0, 3) = (10, 19)$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 428,
    "originalId": 428,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ thỏa $f(1, 0) = (1, 4)$ và $f(0, 1) = (0, 5)$. Ảnh $f(2, 3)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$(2, 23)$"
      },
      {
        "key": "B",
        "text": "$(2, 15)$"
      },
      {
        "key": "C",
        "text": "$(3, 23)$"
      },
      {
        "key": "D",
        "text": "$(5, 5)$"
      }
    ],
    "correct": "A",
    "explanation": "* Do $f$ tuyến tính: $f(2, 3) = 2 f(1, 0) + 3 f(0, 1) = 2(1, 4) + 3(0, 5) = (2, 23)$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 429,
    "originalId": 429,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ thỏa $f(1, 0) = (3, 1)$ và $f(0, 1) = (0, 1)$. Ảnh $f(2, 3)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$(4, 1)$"
      },
      {
        "key": "B",
        "text": "$(6, 3)$"
      },
      {
        "key": "C",
        "text": "$(6, 5)$"
      },
      {
        "key": "D",
        "text": "$(7, 5)$"
      }
    ],
    "correct": "C",
    "explanation": "* Do $f$ tuyến tính: $f(2, 3) = 2 f(1, 0) + 3 f(0, 1) = 2(3, 1) + 3(0, 1) = (6, 5)$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 430,
    "originalId": 430,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ thỏa $f(1, 0) = (1, 5)$ và $f(0, 1) = (0, 4)$. Ảnh $f(2, 3)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$(3, 22)$"
      },
      {
        "key": "B",
        "text": "$(6, 4)$"
      },
      {
        "key": "C",
        "text": "$(2, 22)$"
      },
      {
        "key": "D",
        "text": "$(2, 12)$"
      }
    ],
    "correct": "C",
    "explanation": "* Do $f$ tuyến tính: $f(2, 3) = 2 f(1, 0) + 3 f(0, 1) = 2(1, 5) + 3(0, 4) = (2, 22)$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 431,
    "originalId": 431,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ thỏa $f(1, 0) = (3, 2)$ và $f(0, 1) = (0, 5)$. Ảnh $f(2, 3)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$(7, 19)$"
      },
      {
        "key": "B",
        "text": "$(5, 5)$"
      },
      {
        "key": "C",
        "text": "$(6, 15)$"
      },
      {
        "key": "D",
        "text": "$(6, 19)$"
      }
    ],
    "correct": "D",
    "explanation": "* Do $f$ tuyến tính: $f(2, 3) = 2 f(1, 0) + 3 f(0, 1) = 2(3, 2) + 3(0, 5) = (6, 19)$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 432,
    "originalId": 432,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ thỏa $f(1, 0) = (5, 3)$ và $f(0, 1) = (0, 1)$. Ảnh $f(2, 3)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$(11, 9)$"
      },
      {
        "key": "B",
        "text": "$(8, 1)$"
      },
      {
        "key": "C",
        "text": "$(10, 3)$"
      },
      {
        "key": "D",
        "text": "$(10, 9)$"
      }
    ],
    "correct": "D",
    "explanation": "* Do $f$ tuyến tính: $f(2, 3) = 2 f(1, 0) + 3 f(0, 1) = 2(5, 3) + 3(0, 1) = (10, 9)$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 433,
    "originalId": 433,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ thỏa $f(1, 0) = (4, 2)$ và $f(0, 1) = (0, 4)$. Ảnh $f(2, 3)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$(6, 4)$"
      },
      {
        "key": "B",
        "text": "$(8, 16)$"
      },
      {
        "key": "C",
        "text": "$(8, 12)$"
      },
      {
        "key": "D",
        "text": "$(9, 16)$"
      }
    ],
    "correct": "B",
    "explanation": "* Do $f$ tuyến tính: $f(2, 3) = 2 f(1, 0) + 3 f(0, 1) = 2(4, 2) + 3(0, 4) = (8, 16)$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 434,
    "originalId": 434,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 1,
    "typeId": "5.1",
    "typeName": "Định nghĩa & Tính chất Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ thỏa $f(1, 0) = (2, 2)$ và $f(0, 1) = (0, 3)$. Ảnh $f(2, 3)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$(4, 13)$"
      },
      {
        "key": "B",
        "text": "$(5, 13)$"
      },
      {
        "key": "C",
        "text": "$(4, 3)$"
      },
      {
        "key": "D",
        "text": "$(4, 9)$"
      }
    ],
    "correct": "A",
    "explanation": "* Do $f$ tuyến tính: $f(2, 3) = 2 f(1, 0) + 3 f(0, 1) = 2(2, 2) + 3(0, 3) = (4, 13)$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 435,
    "originalId": 7,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ có ma trận chính tắc $\\begin{bmatrix} 1 & -2 \\\\ -2 & 4 \\end{bmatrix}$. Véc tơ nào dưới đây thuộc $\\operatorname{Im} f$?",
    "options": [
      {
        "key": "A",
        "text": "$(3, -6)$"
      },
      {
        "key": "B",
        "text": "$(4, -2)$"
      },
      {
        "key": "C",
        "text": "$(6, -3)$"
      },
      {
        "key": "D",
        "text": "$(3, 6)$"
      }
    ],
    "correct": "A",
    "explanation": "* Không gian ảnh $\\operatorname{Im} f$ được sinh bởi các véc tơ cột của ma trận chính tắc:\n  $$u_1 = \\begin{bmatrix} 1 \\\\ -2 \\end{bmatrix}, \\quad u_2 = \\begin{bmatrix} -2 \\\\ 4 \\end{bmatrix} = -2 u_1$$\n* Vì $u_2$ tỉ lệ với $u_1$, mọi véc tơ thuộc $\\operatorname{Im} f$ đều có dạng $k(1, -2) = (k, -2k)$ với $k \\in \\mathbb{R}$.\n* Xét các phương án:\n  * Phương án A: $(3, -6) = 3(1, -2)$ (thỏa mãn với $k = 3$).\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 436,
    "originalId": 29,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Ánh xạ nào dưới đây là **ánh xạ tuyến tính**?",
    "options": [
      {
        "key": "A",
        "text": "$f: P_2 \\to P_2, \\, f(a_0 + a_1 x + a_2 x^2) = a_0 + a_1 - (2a_0 + 1)x + (a_1 + a_2)x^2$"
      },
      {
        "key": "B",
        "text": "$f: \\mathbb{R}^3 \\to \\mathbb{R}, \\, f(x, y, z) = 2x + 3y - z^2$"
      },
      {
        "key": "C",
        "text": "$f: P_2 \\to P_2, \\, f(a_0 + a_1 x + a_2 x^2) = a_1 - 2a_0 x + (a_1 + a_2)x^2$"
      },
      {
        "key": "D",
        "text": "$f: \\mathbb{R}^3 \\to \\mathbb{R}^3, \\, f(x, y, z) = (xy, \\, 2y - z, \\, x + y - 3z)$"
      }
    ],
    "correct": "C",
    "explanation": "* Xét phương án C: Các hệ số của đa thức ảnh là $a_1, -2a_0, a_1 + a_2$ đều là biểu thức bậc nhất thuần nhất đối với các tọa độ $(a_0, a_1, a_2)$, và $f(0) = 0$. Do đó $f$ là ánh xạ tuyến tính.\n* Các phương án khác vi phạm:\n  * A sai vì có số hạng tự do $+1$ ở hệ số của $x$ ($f(0) = -x \\neq 0$).\n  * B sai vì có số hạng bậc hai $-z^2$.\n  * D sai vì có tích hai biến $xy$.\n* **Chọn đáp án: C.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 437,
    "originalId": 23,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Cho các ánh xạ $f, g, h, k, l, t: \\mathbb{R}^3 \\to \\mathbb{R}^3$ có công thức xác định như sau:\n$$f(x, y, z) = (z, -y, x); \\quad g(x, y, z) = (x^2, -y, z); \\quad h(x, y, z) = (x, y, 0);$$\n$$k(x, y, z) = (|x|, y, z); \\quad l(x, y, z) = (x + y, y + z, z + x); \\quad t(x, y, z) = (x, y, z)$$\nKhẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$f, h, l, t$ là các ánh xạ tuyến tính"
      },
      {
        "key": "B",
        "text": "$f, h, k, l, t$ là các ánh xạ tuyến tính"
      },
      {
        "key": "C",
        "text": "$f, g, h, k$ là các ánh xạ tuyến tính"
      },
      {
        "key": "D",
        "text": "$f, g, h, k, l, t$ là các ánh xạ tuyến tính"
      }
    ],
    "correct": "A",
    "explanation": "* Xét các ánh xạ phi tuyến:\n  * $g$ chứa $x^2$ (bậc hai) $\\implies$ không tuyến tính.\n  * $k$ chứa $|x|$ (trị tuyệt đối, $k(-u) \\neq -k(u)$) $\\implies$ không tuyến tính.\n* Các ánh xạ $f, h, l, t$ đều có các thành phần là đa thức bậc nhất thuần nhất đối với $(x, y, z)$, thỏa mãn $F(u + v) = F(u) + F(v)$ và $F(cu) = c F(u)$.\n* Vậy $f, h, l, t$ là các ánh xạ tuyến tính.\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 438,
    "originalId": 438,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ xác định bởi $f(x, y) = (2x - y, \\, x + 3y)$. Ma trận chính tắc của $f$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 2 & -1 \\\\ 1 & 3 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} -1 & 2 \\\\ 3 & 1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 2 & 3 \\\\ -1 & 1 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 2 & 1 \\\\ -1 & 3 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "Tính ảnh của các véc tơ cơ sở chính tắc:\n$f(e_1) = f(1, 0) = (2, 1) \\Rightarrow$ cột 1 là $\\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}$.\n$f(e_2) = f(0, 1) = (-1, 3) \\Rightarrow$ cột 2 là $\\begin{bmatrix} -1 \\\\ 3 \\end{bmatrix}$.\nDo đó ma trận chính tắc là $\\begin{bmatrix} 2 & -1 \\\\ 1 & 3 \\end{bmatrix}$.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 439,
    "originalId": 439,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ đạo hàm $D: P_3 \\to P_2, \\, D(p(x)) = p'(x)$. Số chiều của hạt nhân $\\operatorname{Ker} D$ là:",
    "options": [
      {
        "key": "A",
        "text": "$1$"
      },
      {
        "key": "B",
        "text": "$0$"
      },
      {
        "key": "C",
        "text": "$2$"
      },
      {
        "key": "D",
        "text": "$3$"
      }
    ],
    "correct": "A",
    "explanation": "Đa thức $p(x) \\in \\operatorname{Ker} D \\Leftrightarrow p'(x) = 0 \\Leftrightarrow p(x) = c$ (đa thức hằng số). Không gian các đa thức hằng số có số chiều bằng 1, do đó $\\dim(\\operatorname{Ker} D) = 1$.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 440,
    "originalId": 440,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: V \\to W$. Khi đó $f$ là một **đơn ánh** khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$\\operatorname{Ker} f = V$"
      },
      {
        "key": "B",
        "text": "$\\operatorname{Ker} f = \\{\\vec{0}\\}$"
      },
      {
        "key": "C",
        "text": "$\\dim V = \\dim W$"
      },
      {
        "key": "D",
        "text": "$\\operatorname{Im} f = W$"
      }
    ],
    "correct": "B",
    "explanation": "Theo tính chất cơ bản của ánh xạ tuyến tính: $f$ là đơn ánh khi và chỉ khi hạt nhân của nó chỉ chứa duy nhất véc tơ không, tức $\\operatorname{Ker} f = \\{\\vec{0}\\}$ (hay $\\dim(\\operatorname{Ker} f) = 0$).\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 441,
    "originalId": 441,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho $f: \\mathbb{R}^4 \\to \\mathbb{R}^3$ là một ánh xạ tuyến tính. Số chiều của $\\operatorname{Ker} f$ **tối thiểu** là:",
    "options": [
      {
        "key": "A",
        "text": "$1$"
      },
      {
        "key": "B",
        "text": "$0$"
      },
      {
        "key": "C",
        "text": "$3$"
      },
      {
        "key": "D",
        "text": "$2$"
      }
    ],
    "correct": "A",
    "explanation": "Theo định lý hạng - số khuyết: $\\dim(\\operatorname{Ker} f) = \\dim(\\mathbb{R}^4) - \\dim(\\operatorname{Im} f) = 4 - \\dim(\\operatorname{Im} f)$. Vì $\\operatorname{Im} f \\subseteq \\mathbb{R}^3$ nên $\\dim(\\operatorname{Im} f) \\le 3$. Do đó $\\dim(\\operatorname{Ker} f) \\ge 4 - 3 = 1$.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 442,
    "originalId": 442,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Số chiều của hạt nhân $\\operatorname{Ker} f$ của ánh xạ tuyến tính $f$ còn được gọi là:",
    "options": [
      {
        "key": "A",
        "text": "Chỉ số quán tính của $f$"
      },
      {
        "key": "B",
        "text": "Hạng (rank) của $f$"
      },
      {
        "key": "C",
        "text": "Vết (trace) của $f$"
      },
      {
        "key": "D",
        "text": "Số khuyết (nullity) của $f$"
      }
    ],
    "correct": "D",
    "explanation": "Theo thuật ngữ chuẩn: $\\dim(\\operatorname{Ker} f)$ được gọi là số khuyết (nullity), còn $\\dim(\\operatorname{Im} f)$ được gọi là hạng (rank).\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 443,
    "originalId": 443,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^3 \\to \\mathbb{R}^3$ có ma trận chính tắc $A$ với $\\det A = 5$. Khẳng định nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$\\dim(\\operatorname{Im} f) = 2$"
      },
      {
        "key": "B",
        "text": "$\\dim(\\operatorname{Ker} f) = 1$"
      },
      {
        "key": "C",
        "text": "$f$ là một đẳng cấu biến $\\mathbb{R}^3$ thành $\\mathbb{R}^3$"
      },
      {
        "key": "D",
        "text": "$f$ không là đơn ánh"
      }
    ],
    "correct": "C",
    "explanation": "Vì $\\det A = 5 \\neq 0$, ma trận $A$ khả nghịch, tức hạng $r(A) = 3$. Do đó $\\operatorname{Ker} f = \\{0\\}$ (đơn ánh) và $\\operatorname{Im} f = \\mathbb{R}^3$ (toàn ánh). Vậy $f$ là song ánh tuyến tính, tức một đẳng cấu.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 444,
    "originalId": 444,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: V \\to W$. Định lý về số chiều (Rank-Nullity Theorem) khẳng định rằng:",
    "options": [
      {
        "key": "A",
        "text": "$\\dim \\ker f = \\dim \\operatorname{im} f$"
      },
      {
        "key": "B",
        "text": "$\\dim V + \\dim W = \\dim \\ker f + \\dim \\operatorname{im} f$"
      },
      {
        "key": "C",
        "text": "$\\dim V = \\dim \\ker f + \\dim \\operatorname{im} f$"
      },
      {
        "key": "D",
        "text": "$\\dim W = \\dim \\ker f + \\dim \\operatorname{im} f$"
      }
    ],
    "correct": "C",
    "explanation": "* **Định lý số chiều (Rank-Nullity Theorem):**\n  * Với mọi ánh xạ tuyến tính $f: V \\to W$ xuất phát từ không gian hữu hạn chiều $V$, ta luôn có đẳng thức:\n    $$\\dim V = \\dim \\ker f + \\dim \\operatorname{im} f$$\n  * Tức là: Số chiều của không gian nguồn = Số chiều của nhân (hạch) + Hạng của ánh xạ (số chiều của ảnh).\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 445,
    "originalId": 445,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^4 \\to \\mathbb{R}^3$ có hạng $r(f) = 3$. Số chiều của nhân $\\dim \\ker f$ là:",
    "options": [
      {
        "key": "A",
        "text": "$1$"
      },
      {
        "key": "B",
        "text": "$3$"
      },
      {
        "key": "C",
        "text": "$0$"
      },
      {
        "key": "D",
        "text": "$2$"
      }
    ],
    "correct": "A",
    "explanation": "* **Áp dụng định lý số chiều:**\n  * Không gian nguồn là $V = \\mathbb{R}^4 \\implies \\dim V = 4$.\n  * Hạng của ánh xạ tuyến tính chính là số chiều của ảnh: $\\dim \\operatorname{im} f = r(f) = 3$.\n  * Theo định lý số chiều:\n    $$\\dim \\ker f = \\dim V - \\dim \\operatorname{im} f = 4 - 3 = 1$$\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 446,
    "originalId": 446,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Ánh xạ tuyến tính $f: V \\to W$ là **đơn ánh** khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$\\ker f = \\{\\vec{0}\\}$"
      },
      {
        "key": "B",
        "text": "$\\dim \\ker f > 0$"
      },
      {
        "key": "C",
        "text": "$\\dim V = \\dim W$"
      },
      {
        "key": "D",
        "text": "$\\operatorname{im} f = W$"
      }
    ],
    "correct": "A",
    "explanation": "* **Tiêu chuẩn đơn ánh của ánh xạ tuyến tính:**\n  * $f$ là đơn ánh khi và chỉ khi phương trình $f(x) = \\vec{0}$ chỉ có duy nhất nghiệm tầm thường $x = \\vec{0}$.\n  * Điều này tương đương với tập nhân chỉ chứa phần tử không:\n    $$\\ker f = \\{\\vec{0}\\} \\iff \\dim \\ker f = 0$$\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 447,
    "originalId": 447,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm một cơ sở của nhân $\\ker f$ với $f: \\mathbb{R}^3 \\to \\mathbb{R}^2$ xác định bởi $f(x, y, z) = (x - y, \\, y - z)$:",
    "options": [
      {
        "key": "A",
        "text": "$\\{(1, 1, 1)\\}$"
      },
      {
        "key": "B",
        "text": "$\\{(1, 0, 0)\\}$"
      },
      {
        "key": "C",
        "text": "$\\{(1, -1, 0), \\, (0, 1, -1)\\}$"
      },
      {
        "key": "D",
        "text": "$\\{(1, 1, 0)\\}$"
      }
    ],
    "correct": "A",
    "explanation": "* **Tìm $\\ker f$ theo định nghĩa:**\n  * $u = (x, y, z) \\in \\ker f \\iff f(x, y, z) = (0, 0)$:\n    $$\\begin{cases} x - y = 0 \\\\ y - z = 0 \\end{cases} \\iff x = y = z$$\n  * Tọa độ véc tơ thuộc $\\ker f$ có dạng $(x, x, x) = x(1, 1, 1)$ với $x \\in \\mathbb{R}$.\n  * Do đó $\\ker f$ là không gian 1 chiều có cơ sở là $\\{(1, 1, 1)\\}$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 448,
    "originalId": 448,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho $f: P_2 \\to P_1$ là ánh xạ lấy đạo hàm: $f(p(x)) = p'(x)$. Số chiều của nhân $\\dim \\ker f$ là:",
    "options": [
      {
        "key": "A",
        "text": "$3$"
      },
      {
        "key": "B",
        "text": "$2$"
      },
      {
        "key": "C",
        "text": "$0$"
      },
      {
        "key": "D",
        "text": "$1$"
      }
    ],
    "correct": "D",
    "explanation": "* **Nhân của ánh xạ đạo hàm:**\n  * $\\ker f = \\{p(x) \\in P_2 \\mid p'(x) = 0\\}$.\n  * Đa thức có đạo hàm bằng 0 là các đa thức hằng: $p(x) = c$ với $c \\in \\mathbb{R}$.\n  * Không gian các đa thức hằng có số chiều bằng $1$ (cơ sở là $\\{1\\}$).\n  * Do đó $\\dim \\ker f = 1$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 449,
    "originalId": 449,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Toán tử tuyến tính $f: \\mathbb{R}^3 \\to \\mathbb{R}^3$ có $r(f) = 2$. Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "text": "$f$ không là đơn ánh và không là toàn ánh"
      },
      {
        "key": "B",
        "text": "$f$ là toàn ánh nhưng không là đơn ánh"
      },
      {
        "key": "C",
        "text": "$f$ là một song ánh"
      },
      {
        "key": "D",
        "text": "$f$ là đơn ánh nhưng không là toàn ánh"
      }
    ],
    "correct": "A",
    "explanation": "* **Phân tích theo định lý số chiều:**\n  * Không gian nguồn và đích đều là $\\mathbb{R}^3$ (số chiều = 3).\n  * Vì $\\dim \\operatorname{im} f = r(f) = 2 < 3 \\implies \\operatorname{im} f \\neq \\mathbb{R}^3$, do đó $f$ **không là toàn ánh**.\n  * Mặt khác $\\dim \\ker f = \\dim V - r(f) = 3 - 2 = 1 > 0$, do đó $f$ **không là đơn ánh**.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 450,
    "originalId": 450,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: V \\to W$ với $\\dim(V) = 4$. Biết số chiều của nhân $\\dim(\\ker f) = 1$. Số chiều của ảnh $\\dim(\\text{Im} f)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$4$"
      },
      {
        "key": "B",
        "text": "$2$"
      },
      {
        "key": "C",
        "text": "$1$"
      },
      {
        "key": "D",
        "text": "$3$"
      }
    ],
    "correct": "D",
    "explanation": "* Theo định lý số chiều (Rank-Nullity Theorem): $\\dim(\\ker f) + \\dim(\\text{Im} f) = \\dim(V) \\implies \\dim(\\text{Im} f) = 4 - 1 = 3$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 451,
    "originalId": 451,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho toán tử tuyến tính $f: \\mathbb{R}^{6} \\to \\mathbb{R}^{6}$ có hạng $r(f) = \\dim(\\text{Im} f) = 2$. Số chiều của không gian hạt nhân $\\dim(\\ker f)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$4$"
      },
      {
        "key": "B",
        "text": "$5$"
      },
      {
        "key": "C",
        "text": "$6$"
      },
      {
        "key": "D",
        "text": "$2$"
      }
    ],
    "correct": "A",
    "explanation": "* Theo định lý số chiều: $\\dim(\\ker f) = \\dim(V) - \\dim(\\text{Im} f) = 6 - 2 = 4$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 452,
    "originalId": 452,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Ánh xạ tuyến tính $f: V \\to W$ là một **đơn cấu** (đơn ánh) khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$\\ker(f) = V$"
      },
      {
        "key": "B",
        "text": "$\\ker(f) = \\{\\theta\\}$ (tức $\\dim(\\ker f) = 0$)"
      },
      {
        "key": "C",
        "text": "$\\dim(\\text{Im} f) = 0$"
      },
      {
        "key": "D",
        "text": "$\\text{Im}(f) = W$"
      }
    ],
    "correct": "B",
    "explanation": "* Ánh xạ tuyến tính là đơn ánh khi và chỉ khi hạt nhân (nhân) chỉ chứa duy nhất véc tơ không: $\\ker(f) = \\{\\theta\\}$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 453,
    "originalId": 453,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: V \\to W$ với $\\dim(V) = 3$. Biết số chiều của nhân $\\dim(\\ker f) = 1$. Số chiều của ảnh $\\dim(\\text{Im} f)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$4$"
      },
      {
        "key": "B",
        "text": "$3$"
      },
      {
        "key": "C",
        "text": "$1$"
      },
      {
        "key": "D",
        "text": "$2$"
      }
    ],
    "correct": "D",
    "explanation": "* Theo định lý số chiều (Rank-Nullity Theorem): $\\dim(\\ker f) + \\dim(\\text{Im} f) = \\dim(V) \\implies \\dim(\\text{Im} f) = 3 - 1 = 2$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 454,
    "originalId": 454,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho toán tử tuyến tính $f: \\mathbb{R}^{6} \\to \\mathbb{R}^{6}$ có hạng $r(f) = \\dim(\\text{Im} f) = 3$. Số chiều của không gian hạt nhân $\\dim(\\ker f)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$3$"
      },
      {
        "key": "B",
        "text": "$6$"
      },
      {
        "key": "C",
        "text": "$2$"
      },
      {
        "key": "D",
        "text": "$4$"
      }
    ],
    "correct": "A",
    "explanation": "* Theo định lý số chiều: $\\dim(\\ker f) = \\dim(V) - \\dim(\\text{Im} f) = 6 - 3 = 3$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 455,
    "originalId": 455,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: V \\to W$ với $\\dim(V) = 4$. Biết số chiều của nhân $\\dim(\\ker f) = 0$. Số chiều của ảnh $\\dim(\\text{Im} f)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$5$"
      },
      {
        "key": "B",
        "text": "$0$"
      },
      {
        "key": "C",
        "text": "$3$"
      },
      {
        "key": "D",
        "text": "$4$"
      }
    ],
    "correct": "D",
    "explanation": "* Theo định lý số chiều (Rank-Nullity Theorem): $\\dim(\\ker f) + \\dim(\\text{Im} f) = \\dim(V) \\implies \\dim(\\text{Im} f) = 4 - 0 = 4$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 456,
    "originalId": 456,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho toán tử tuyến tính $f: \\mathbb{R}^{3} \\to \\mathbb{R}^{3}$ có hạng $r(f) = \\dim(\\text{Im} f) = 1$. Số chiều của không gian hạt nhân $\\dim(\\ker f)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$2$"
      },
      {
        "key": "B",
        "text": "$3$"
      },
      {
        "key": "C",
        "text": "$4$"
      },
      {
        "key": "D",
        "text": "$1$"
      }
    ],
    "correct": "A",
    "explanation": "* Theo định lý số chiều: $\\dim(\\ker f) = \\dim(V) - \\dim(\\text{Im} f) = 3 - 1 = 2$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 457,
    "originalId": 457,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: V \\to W$ với $\\dim(V) = 7$. Biết số chiều của nhân $\\dim(\\ker f) = 2$. Số chiều của ảnh $\\dim(\\text{Im} f)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$5$"
      },
      {
        "key": "B",
        "text": "$6$"
      },
      {
        "key": "C",
        "text": "$2$"
      },
      {
        "key": "D",
        "text": "$7$"
      }
    ],
    "correct": "A",
    "explanation": "* Theo định lý số chiều (Rank-Nullity Theorem): $\\dim(\\ker f) + \\dim(\\text{Im} f) = \\dim(V) \\implies \\dim(\\text{Im} f) = 7 - 2 = 5$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 458,
    "originalId": 458,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho toán tử tuyến tính $f: \\mathbb{R}^{6} \\to \\mathbb{R}^{6}$ có hạng $r(f) = \\dim(\\text{Im} f) = 4$. Số chiều của không gian hạt nhân $\\dim(\\ker f)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$2$"
      },
      {
        "key": "B",
        "text": "$4$"
      },
      {
        "key": "C",
        "text": "$6$"
      },
      {
        "key": "D",
        "text": "$3$"
      }
    ],
    "correct": "A",
    "explanation": "* Theo định lý số chiều: $\\dim(\\ker f) = \\dim(V) - \\dim(\\text{Im} f) = 6 - 4 = 2$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 459,
    "originalId": 459,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 2,
    "typeId": "5.2",
    "typeName": "Hạt nhân Ker(f), Ảnh Im(f) & Định lý số chiều",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: V \\to W$ với $\\dim(V) = 7$. Biết số chiều của nhân $\\dim(\\ker f) = 1$. Số chiều của ảnh $\\dim(\\text{Im} f)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$6$"
      },
      {
        "key": "B",
        "text": "$5$"
      },
      {
        "key": "C",
        "text": "$1$"
      },
      {
        "key": "D",
        "text": "$7$"
      }
    ],
    "correct": "A",
    "explanation": "* Theo định lý số chiều (Rank-Nullity Theorem): $\\dim(\\ker f) + \\dim(\\text{Im} f) = \\dim(V) \\implies \\dim(\\text{Im} f) = 7 - 1 = 6$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 460,
    "originalId": 9,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^3 \\to \\mathbb{R}^2$ xác định bởi:\n$$f(x, y, z) = (x - y - z, \\, x + y - z)$$\nMa trận của $f$ trong các cơ sở $B_1 = \\{(0, 1, 1), \\, (1, 1, 1), \\, (1, 1, 0)\\}$ của $\\mathbb{R}^3$ và $B_2 = \\{(1, 1), \\, (1, 2)\\}$ của $\\mathbb{R}^2$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} -4 & -3 & -2 \\\\ 2 & 2 & 2 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} -4 & 2 \\\\ 2 & -3 \\\\ -2 & 2 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} -4 & 2 & -2 \\\\ 2 & -3 & 2 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} -4 & 2 \\\\ -3 & 2 \\\\ -2 & 2 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* Ánh xạ từ $\\mathbb{R}^3$ sang $\\mathbb{R}^2$ có ma trận cỡ $2 \\times 3$.\n* Tính ảnh của từng véc tơ trong cơ sở $B_1$:\n  * $f(0, 1, 1) = (-2, 0) = c_1(1, 1) + c_2(1, 2) \\implies \\begin{cases} c_1 + c_2 = -2 \\\\ c_1 + 2c_2 = 0 \\end{cases} \\implies c_2 = 2, c_1 = -4 \\implies \\begin{bmatrix} -4 \\\\ 2 \\end{bmatrix}$.\n  * $f(1, 1, 1) = (-1, 1) = c_1(1, 1) + c_2(1, 2) \\implies \\begin{cases} c_1 + c_2 = -1 \\\\ c_1 + 2c_2 = 1 \\end{cases} \\implies c_2 = 2, c_1 = -3 \\implies \\begin{bmatrix} -3 \\\\ 2 \\end{bmatrix}$.\n  * $f(1, 1, 0) = (0, 2) = c_1(1, 1) + c_2(1, 2) \\implies \\begin{cases} c_1 + c_2 = 0 \\\\ c_1 + 2c_2 = 2 \\end{cases} \\implies c_2 = 2, c_1 = -2 \\implies \\begin{bmatrix} -2 \\\\ 2 \\end{bmatrix}$.\n* Ghép các cột lại ta được:\n  $$[f] = \\begin{bmatrix} -4 & -3 & -2 \\\\ 2 & 2 & 2 \\end{bmatrix}$$\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 461,
    "originalId": 11,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^4 \\to \\mathbb{R}^3$ xác định bởi:\n$$f(x, y, z, t) = (x - 2y - z - t, \\, y + 2z + 3t, \\, x - y + 3z)$$\nSố chiều của $\\operatorname{Ker} f$ là:",
    "options": [
      {
        "key": "A",
        "text": "$4$"
      },
      {
        "key": "B",
        "text": "$2$"
      },
      {
        "key": "C",
        "text": "$1$"
      },
      {
        "key": "D",
        "text": "$3$"
      }
    ],
    "correct": "C",
    "explanation": "* Xét ma trận biểu diễn của $f$:\n  $$A = \\begin{bmatrix} 1 & -2 & -1 & -1 \\\\ 0 & 1 & 2 & 3 \\\\ 1 & -1 & 3 & 0 \\end{bmatrix}$$\n* Khử Gauss: $h_3 \\to h_3 - h_1$:\n  $$\\begin{bmatrix} 0 & 1 & 4 & 1 \\end{bmatrix}$$\n* $h_3 \\to h_3 - h_2$:\n  $$\\begin{bmatrix} 0 & 0 & 2 & -2 \\end{bmatrix}$$\n* Ma trận có 3 hàng khác 0, suy ra hạng $r(A) = 3$.\n* Theo định lý số chiều:\n  $$\\dim \\operatorname{Ker} f = \\dim \\mathbb{R}^4 - r(A) = 4 - 3 = 1$$\n* **Chọn đáp án: C.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 462,
    "originalId": 23,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Ánh xạ $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ nào dưới đây **không là** một đẳng cấu?",
    "options": [
      {
        "key": "A",
        "text": "$f(x, y) = (2x + y, \\, -3x + 2y)$"
      },
      {
        "key": "B",
        "text": "$f(x, y) = (x + y, \\, -3x + y)$"
      },
      {
        "key": "C",
        "text": "$f(x, y) = (x - 2y, \\, -2x + 4y)$"
      },
      {
        "key": "D",
        "text": "$f(x, y) = (x + 4y, \\, -x + 2y)$"
      }
    ],
    "correct": "C",
    "explanation": "* Một toán tử tuyến tính trên $\\mathbb{R}^2$ là đẳng cấu khi và chỉ khi định thức của ma trận biểu diễn khác 0:\n  * Xét phương án C: ma trận biểu diễn là $A = \\begin{bmatrix} 1 & -2 \\\\ -2 & 4 \\end{bmatrix}$.\n  * Định thức $\\det A = 1(4) - (-2)(-2) = 4 - 4 = 0$.\n  * Vì $\\det A = 0$, $f$ không khả nghịch, do đó **không là đẳng cấu**.\n* **Chọn đáp án: C.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 463,
    "originalId": 30,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho ánh xạ tuyến tính $f: P_2 \\to P_2$ xác định bởi:\n$$f(a_0 + a_1 x + a_2 x^2) = (a_0 + a_1 + m a_2) + (a_0 + m a_1 + a_2)x + (m a_0 + a_1 + a_2)x^2$$\nTìm $m$ để $\\dim(\\operatorname{Im} f) = 2$:",
    "options": [
      {
        "key": "A",
        "text": "$m \\neq 1$ và $m \\neq -2$"
      },
      {
        "key": "B",
        "text": "$m = -2$"
      },
      {
        "key": "C",
        "text": "$m = 1$"
      },
      {
        "key": "D",
        "text": "$m = 1$ hoặc $m = -2$"
      }
    ],
    "correct": "B",
    "explanation": "* Ma trận của $f$ trong cơ sở chính tắc $\\{1, x, x^2\\}$:\n  $$A = \\begin{bmatrix} 1 & 1 & m \\\\ 1 & m & 1 \\\\ m & 1 & 1 \\end{bmatrix}$$\n* Ta có $\\dim(\\operatorname{Im} f) = r(A)$. Để $r(A) = 2$, ma trận phải có $\\det A = 0$ và ít nhất một định thức con cấp 2 khác 0.\n* Tính định thức:\n  $$\\det A = -(m - 1)^2 (m + 2)$$\n  * Nếu $m = 1$: ma trận có 3 hàng giống hệt nhau $\\implies r(A) = 1$.\n  * Nếu $m = -2$: $\\det A = 0$ và $\\begin{vmatrix} 1 & 1 \\\\ 1 & -2 \\end{vmatrix} = -3 \\neq 0 \\implies r(A) = 2$.\n* Vậy điều kiện để $\\dim(\\operatorname{Im} f) = 2$ là $m = -2$.\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 464,
    "originalId": 36,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^3 \\to \\mathbb{R}^3$ xác định bởi:\n$$f(x, y, z) = (-5x + 3y + 3z, -3x + y + 3z, -6x + 6y + 4z)$$\nHãy viết ma trận $A$ của ánh xạ $f$ trong cơ sở chính tắc:",
    "options": [
      {
        "key": "A",
        "text": "$A = \\begin{bmatrix} -5 & 3 & 3 \\\\ -3 & 1 & 3 \\\\ -6 & 6 & 4 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$A = \\begin{bmatrix} -5 & -3 & -6 \\\\ 3 & 1 & 6 \\\\ 3 & 3 & 4 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$A = \\begin{bmatrix} -5 & 1 & 6 \\\\ 3 & 3 & 4 \\\\ 3 & -3 & -6 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$A = \\begin{bmatrix} -5 & 1 & 4 \\\\ 3 & 3 & -5 \\\\ -6 & 4 & 3 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* Trong cơ sở chính tắc của $\\mathbb{R}^3$, ảnh của các véctơ cơ sở là:\n  $$f(e_1) = f(1, 0, 0) = (-5, -3, -6)$$\n  $$f(e_2) = f(0, 1, 0) = (3, 1, 6)$$\n  $$f(e_3) = f(0, 0, 1) = (3, 3, 4)$$\n* Theo quy ước biểu diễn dạng tọa độ của giáo trình PTIT:\n  $$\\begin{bmatrix} y_1 \\\\ y_2 \\\\ y_3 \\end{bmatrix} = \\begin{bmatrix} -5 & 3 & 3 \\\\ -3 & 1 & 3 \\\\ -6 & 6 & 4 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix}$$\n* Do đó ma trận của ánh xạ tuyến tính $f$ là $A = \\begin{bmatrix} -5 & 3 & 3 \\\\ -3 & 1 & 3 \\\\ -6 & 6 & 4 \\end{bmatrix}$.\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 465,
    "originalId": 465,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho toán tử tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ xác định bởi $f(x, y) = (2x + y, \\, x - y)$. Ma trận của $f$ trong cơ sở chính tắc của $\\mathbb{R}^2$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 2 & 1 \\\\ 1 & -1 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 2 & -1 \\\\ 1 & 1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 2 & 1 \\\\ -1 & 1 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 1 & -1 \\\\ 2 & 1 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* **Kỹ thuật lập ma trận theo cơ sở chính tắc:**\n  * Cơ sở chính tắc $e_1 = (1, 0), e_2 = (0, 1)$.\n  * Tính ảnh của từng véc tơ cơ sở:\n    * $f(e_1) = f(1, 0) = (2, 1) \\implies$ Cột 1 là $\\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}$.\n    * $f(e_2) = f(0, 1) = (1, -1) \\implies$ Cột 2 là $\\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}$.\n  * Ghép hai cột lại:\n    $$[f] = \\begin{bmatrix} 2 & 1 \\\\ 1 & -1 \\end{bmatrix}$$\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 466,
    "originalId": 466,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Khi đổi cơ sở của không gian $V$ với ma trận chuyển cơ sở là $P$, ma trận của toán tử tuyến tính $f: V \\to V$ thay đổi theo công thức nào?",
    "options": [
      {
        "key": "A",
        "text": "$A' = P A P^{-1}$"
      },
      {
        "key": "B",
        "text": "$A' = P^{-1} A P$"
      },
      {
        "key": "C",
        "text": "$A' = P^T A P$"
      },
      {
        "key": "D",
        "text": "$A' = P A P$"
      }
    ],
    "correct": "B",
    "explanation": "* **Công thức đổi ma trận của toán tử tuyến tính:**\n  * Cho $A = [f]_B$ là ma trận của $f$ trong cơ sở cũ $B$, và $P = P_{B \\to B'}$ là ma trận chuyển từ cơ sở cũ sang cơ sở mới $B'$.\n  * Ma trận của $f$ trong cơ sở mới $B'$ là:\n    $$A' = P^{-1} A P$$\n  * (Hai ma trận $A$ và $A'$ được gọi là đồng dạng - similar matrices).\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 467,
    "originalId": 467,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^3 \\to \\mathbb{R}^2$ có ma trận biểu diễn cỡ:",
    "options": [
      {
        "key": "A",
        "text": "$3 \\times 2$"
      },
      {
        "key": "B",
        "text": "$2 \\times 3$"
      },
      {
        "key": "C",
        "text": "$3 \\times 3$"
      },
      {
        "key": "D",
        "text": "$2 \\times 2$"
      }
    ],
    "correct": "B",
    "explanation": "* **Quy tắc xác định cỡ ma trận của ánh xạ tuyến tính:**\n  * Cho ánh xạ tuyến tính $f: V \\to W$ với $\\dim V = n$ và $\\dim W = m$.\n  * Ma trận $[f]$ luôn có:\n    * Số cột = Số véc tơ cơ sở của không gian nguồn $V = n$.\n    * Số hàng = Số tọa độ trong không gian đích $W = m$.\n  * Do đó cỡ của ma trận là $m \\\\times n$.\n  * Với $f: \\mathbb{R}^3 \\to \\mathbb{R}^2$, ma trận có cỡ $2 \\times 3$ (2 hàng, 3 cột).\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 468,
    "originalId": 468,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho toán tử tuyến tính $f: \\mathbb{R}^3 \\to \\mathbb{R}^3$ xác định bởi $f(x, y, z) = (x + y, \\, y + z, \\, x - z)$. Định thức của ma trận biểu diễn $f$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$0$"
      },
      {
        "key": "B",
        "text": "$1$"
      },
      {
        "key": "C",
        "text": "$2$"
      },
      {
        "key": "D",
        "text": "$-2$"
      }
    ],
    "correct": "A",
    "explanation": "* **Lập ma trận của $f$:**\n  $$A = \\begin{bmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & -1 \\end{bmatrix}$$\n* Tính định thức $\\det A$:\n  $$\\det A = 1(-1 - 0) - 1(0 - 1) + 0 = -1 + 1 = 0$$\n* Vì $\\det A = 0$, $f$ không phải là một đẳng cấu (không là đơn ánh cũng không là toàn ánh).\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 469,
    "originalId": 469,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Toán tử tuyến tính $f: \\mathbb{R}^n \\to \\mathbb{R}^n$ có ma trận $A$ trong cơ sở chính tắc. $f$ là một **đẳng cấu** khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$r(A) < n$"
      },
      {
        "key": "B",
        "text": "$\\det A \\neq 0$"
      },
      {
        "key": "C",
        "text": "$\\det A = 0$"
      },
      {
        "key": "D",
        "text": "$A = I_n$"
      }
    ],
    "correct": "B",
    "explanation": "* **Tiêu chuẩn đẳng cấu của toán tử tuyến tính trên không gian hữu hạn chiều:**\n  * Giữa hai không gian có cùng số chiều hữu hạn $n$, các mệnh đề sau là tương đương:\n    1. $f$ là đơn ánh.\n    2. $f$ là toàn ánh.\n    3. $f$ là song ánh (đẳng cấu).\n    4. Ma trận biểu diễn $A$ khả nghịch ($\\det A \\neq 0$).\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 470,
    "originalId": 470,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hai toán tử tuyến tính $f, g: V \\to V$ có ma trận tương ứng là $A$ và $B$. Ma trận của toán tử tích hợp $f \\circ g$ là:",
    "options": [
      {
        "key": "A",
        "text": "$BA$"
      },
      {
        "key": "B",
        "text": "$AB$"
      },
      {
        "key": "C",
        "text": "$A^{-1} B$"
      },
      {
        "key": "D",
        "text": "$A + B$"
      }
    ],
    "correct": "B",
    "explanation": "* **Ma trận của ánh xạ tích hợp:**\n  * Theo định nghĩa: $(f \\circ g)(x) = f(g(x))$.\n  * Trong biểu diễn tọa độ: $[(f \\circ g)(x)] = [f] \\cdot [g(x)] = A \\cdot (B [x]) = (AB) [x]$.\n  * Do đó ma trận của $f \\circ g$ chính là tích của hai ma trận $AB$ theo đúng thứ tự.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 471,
    "originalId": 471,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho $f: \\mathbb{R}^3 \\to \\mathbb{R}^3$ là phép chiếu vuông góc lên mặt phẳng $Oxy$. Ma trận của $f$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 0 & 1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$"
      }
    ],
    "correct": "C",
    "explanation": "* **Hình học của phép chiếu:**\n  * Phép chiếu lên $Oxy$ biến $(x, y, z) \\mapsto (x, y, 0)$.\n  * Áp dụng lên cơ sở chính tắc:\n    * $f(1, 0, 0) = (1, 0, 0) \\implies$ Cột 1 là $\\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}$.\n    * $f(0, 1, 0) = (0, 1, 0) \\implies$ Cột 2 là $\\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}$.\n    * $f(0, 0, 1) = (0, 0, 0) \\implies$ Cột 3 là $\\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\end{bmatrix}$.\n  * Ghép lại ta được ma trận phương án A.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 472,
    "originalId": 472,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Số chiều của ảnh $\\dim \\operatorname{im} f$ của ánh xạ tuyến tính $f: V \\to W$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "Số chiều của không gian đích $W$"
      },
      {
        "key": "B",
        "text": "Số chiều của không gian nguồn $V$"
      },
      {
        "key": "C",
        "text": "Hạng của ma trận biểu diễn $f$ đối với cặp cơ sở bất kỳ"
      },
      {
        "key": "D",
        "text": "$\\det A$ với $A$ là ma trận của $f$"
      }
    ],
    "correct": "C",
    "explanation": "* **Định lý về hạng của ánh xạ tuyến tính:**\n  * Hạng của ánh xạ tuyến tính $r(f) = \\dim \\operatorname{im} f$ luôn bằng hạng của ma trận biểu diễn $A$ của nó trong bất kỳ cặp cơ sở nào:\n    $$\\dim \\operatorname{im} f = r(A)$$\n  * Hạng này không phụ thuộc vào việc lựa chọn cơ sở.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 473,
    "originalId": 473,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho toán tử tuyến tính $f: V \\to V$ có ma trận trong cơ sở $B$ là $A$. Khi đổi sang cơ sở $B'$ với ma trận chuyển $P$, ma trận $A'$ của $f$ trong cơ sở mới là:",
    "options": [
      {
        "key": "A",
        "text": "$A' = P A P$"
      },
      {
        "key": "B",
        "text": "$A' = P A P^{-1}$"
      },
      {
        "key": "C",
        "text": "$A' = P^T A P$"
      },
      {
        "key": "D",
        "text": "$A' = P^{-1} A P$"
      }
    ],
    "correct": "D",
    "explanation": "* Công thức đổi cơ sở cho ma trận biểu diễn của toán tử tuyến tính: $A' = P^{-1} A P$ (hai ma trận $A$ và $A'$ đồng dạng với nhau).\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 474,
    "originalId": 474,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho toán tử tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ xác định bởi $f(x, y) = (5x + 4y, \\, 1x + 2y)$. Ma trận của $f$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 5 & 1 \\\\ 4 & 2 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 5 & 4 \\\\ 1 & 2 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 4 & 5 \\\\ 2 & 1 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 2 & -4 \\\\ -1 & 5 \\end{bmatrix}$"
      }
    ],
    "correct": "B",
    "explanation": "* Cột 1 là tọa độ của $f(e_1) = f(1, 0) = (5, 1)^T$; Cột 2 là tọa độ của $f(e_2) = f(0, 1) = (4, 2)^T$. Ghép lại ta được ma trận $\\begin{bmatrix} 5 & 4 \\\\ 1 & 2 \\end{bmatrix}$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 475,
    "originalId": 475,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hai ma trận vuông $A$ và $B$ được gọi là **đồng dạng** nếu tồn tại ma trận khả nghịch $P$ sao cho:",
    "options": [
      {
        "key": "A",
        "text": "$B = P^T A P$"
      },
      {
        "key": "B",
        "text": "$B = P^{-1} A P$"
      },
      {
        "key": "C",
        "text": "$B = A P$"
      },
      {
        "key": "D",
        "text": "$B = P A P$"
      }
    ],
    "correct": "B",
    "explanation": "* Định nghĩa đồng dạng ma trận: $B = P^{-1} A P$. Hai ma trận đồng dạng biểu diễn cùng một toán tử tuyến tính trong hai cơ sở khác nhau.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 476,
    "originalId": 476,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho toán tử tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ xác định bởi $f(x, y) = (5x + 1y, \\, 4x + 3y)$. Ma trận của $f$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 1 & 5 \\\\ 3 & 4 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 3 & -1 \\\\ -4 & 5 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 5 & 4 \\\\ 1 & 3 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 5 & 1 \\\\ 4 & 3 \\end{bmatrix}$"
      }
    ],
    "correct": "D",
    "explanation": "* Cột 1 là tọa độ của $f(e_1) = f(1, 0) = (5, 4)^T$; Cột 2 là tọa độ của $f(e_2) = f(0, 1) = (1, 3)^T$. Ghép lại ta được ma trận $\\begin{bmatrix} 5 & 1 \\\\ 4 & 3 \\end{bmatrix}$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 477,
    "originalId": 477,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho toán tử tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ xác định bởi $f(x, y) = (5x + 1y, \\, 2x + 4y)$. Ma trận của $f$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 5 & 1 \\\\ 2 & 4 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 1 & 5 \\\\ 4 & 2 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 4 & -1 \\\\ -2 & 5 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 5 & 2 \\\\ 1 & 4 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* Cột 1 là tọa độ của $f(e_1) = f(1, 0) = (5, 2)^T$; Cột 2 là tọa độ của $f(e_2) = f(0, 1) = (1, 4)^T$. Ghép lại ta được ma trận $\\begin{bmatrix} 5 & 1 \\\\ 2 & 4 \\end{bmatrix}$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 478,
    "originalId": 478,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho toán tử tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ xác định bởi $f(x, y) = (4x + 1y, \\, 2x + 3y)$. Ma trận của $f$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 4 & 1 \\\\ 2 & 3 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 3 & -1 \\\\ -2 & 4 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 1 & 4 \\\\ 3 & 2 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 4 & 2 \\\\ 1 & 3 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* Cột 1 là tọa độ của $f(e_1) = f(1, 0) = (4, 2)^T$; Cột 2 là tọa độ của $f(e_2) = f(0, 1) = (1, 3)^T$. Ghép lại ta được ma trận $\\begin{bmatrix} 4 & 1 \\\\ 2 & 3 \\end{bmatrix}$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 479,
    "originalId": 479,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho toán tử tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ xác định bởi $f(x, y) = (2x + 5y, \\, 4x + 1y)$. Ma trận của $f$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 2 & 5 \\\\ 4 & 1 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 5 & 2 \\\\ 1 & 4 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 1 & -5 \\\\ -4 & 2 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 2 & 4 \\\\ 5 & 1 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* Cột 1 là tọa độ của $f(e_1) = f(1, 0) = (2, 4)^T$; Cột 2 là tọa độ của $f(e_2) = f(0, 1) = (5, 1)^T$. Ghép lại ta được ma trận $\\begin{bmatrix} 2 & 5 \\\\ 4 & 1 \\end{bmatrix}$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 480,
    "originalId": 480,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho toán tử tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ xác định bởi $f(x, y) = (1x + 3y, \\, 4x + 2y)$. Ma trận của $f$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 3 & 1 \\\\ 2 & 4 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 2 & -3 \\\\ -4 & 1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 1 & 3 \\\\ 4 & 2 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 1 & 4 \\\\ 3 & 2 \\end{bmatrix}$"
      }
    ],
    "correct": "C",
    "explanation": "* Cột 1 là tọa độ của $f(e_1) = f(1, 0) = (1, 4)^T$; Cột 2 là tọa độ của $f(e_2) = f(0, 1) = (3, 2)^T$. Ghép lại ta được ma trận $\\begin{bmatrix} 1 & 3 \\\\ 4 & 2 \\end{bmatrix}$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 481,
    "originalId": 481,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho toán tử tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ xác định bởi $f(x, y) = (3x + 4y, \\, 2x + 5y)$. Ma trận của $f$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 4 & 3 \\\\ 5 & 2 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 3 & 2 \\\\ 4 & 5 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 3 & 4 \\\\ 2 & 5 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 5 & -4 \\\\ -2 & 3 \\end{bmatrix}$"
      }
    ],
    "correct": "C",
    "explanation": "* Cột 1 là tọa độ của $f(e_1) = f(1, 0) = (3, 2)^T$; Cột 2 là tọa độ của $f(e_2) = f(0, 1) = (4, 5)^T$. Ghép lại ta được ma trận $\\begin{bmatrix} 3 & 4 \\\\ 2 & 5 \\end{bmatrix}$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 482,
    "originalId": 482,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho toán tử tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ xác định bởi $f(x, y) = (2x + 5y, \\, 3x + 1y)$. Ma trận của $f$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 2 & 3 \\\\ 5 & 1 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 1 & -5 \\\\ -3 & 2 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 5 & 2 \\\\ 1 & 3 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 2 & 5 \\\\ 3 & 1 \\end{bmatrix}$"
      }
    ],
    "correct": "D",
    "explanation": "* Cột 1 là tọa độ của $f(e_1) = f(1, 0) = (2, 3)^T$; Cột 2 là tọa độ của $f(e_2) = f(0, 1) = (5, 1)^T$. Ghép lại ta được ma trận $\\begin{bmatrix} 2 & 5 \\\\ 3 & 1 \\end{bmatrix}$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 483,
    "originalId": 483,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho toán tử tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ xác định bởi $f(x, y) = (4x + 5y, \\, 1x + 3y)$. Ma trận của $f$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 3 & -5 \\\\ -1 & 4 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 4 & 5 \\\\ 1 & 3 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 4 & 1 \\\\ 5 & 3 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 5 & 4 \\\\ 3 & 1 \\end{bmatrix}$"
      }
    ],
    "correct": "B",
    "explanation": "* Cột 1 là tọa độ của $f(e_1) = f(1, 0) = (4, 1)^T$; Cột 2 là tọa độ của $f(e_2) = f(0, 1) = (5, 3)^T$. Ghép lại ta được ma trận $\\begin{bmatrix} 4 & 5 \\\\ 1 & 3 \\end{bmatrix}$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 484,
    "originalId": 484,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho toán tử tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ xác định bởi $f(x, y) = (2x + 4y, \\, 1x + 3y)$. Ma trận của $f$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 2 & 4 \\\\ 1 & 3 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 4 & 2 \\\\ 3 & 1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 2 & 1 \\\\ 4 & 3 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 3 & -4 \\\\ -1 & 2 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* Cột 1 là tọa độ của $f(e_1) = f(1, 0) = (2, 1)^T$; Cột 2 là tọa độ của $f(e_2) = f(0, 1) = (4, 3)^T$. Ghép lại ta được ma trận $\\begin{bmatrix} 2 & 4 \\\\ 1 & 3 \\end{bmatrix}$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 485,
    "originalId": 485,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 3,
    "typeId": "5.3",
    "typeName": "Ma trận của Ánh xạ tuyến tính",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho toán tử tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ xác định bởi $f(x, y) = (5x + 3y, \\, 1x + 2y)$. Ma trận của $f$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 5 & 3 \\\\ 1 & 2 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 3 & 5 \\\\ 2 & 1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 2 & -3 \\\\ -1 & 5 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 5 & 1 \\\\ 3 & 2 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* Cột 1 là tọa độ của $f(e_1) = f(1, 0) = (5, 1)^T$; Cột 2 là tọa độ của $f(e_2) = f(0, 1) = (3, 2)^T$. Ghép lại ta được ma trận $\\begin{bmatrix} 5 & 3 \\\\ 1 & 2 \\end{bmatrix}$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 486,
    "originalId": 22,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho ánh xạ tuyến tính $f: \\mathbb{R}^2 \\to \\mathbb{R}^2, \\, f(x, y) = (3x + 2y, \\, 4x + y)$. Một cơ sở gồm các véc tơ riêng của $f$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\{v_1 = (1, -2), \\, v_2 = (1, -1)\\}$"
      },
      {
        "key": "B",
        "text": "$\\{v_1 = (-2, 1), \\, v_2 = (1, 1)\\}$"
      },
      {
        "key": "C",
        "text": "$\\{v_1 = (1, -2), \\, v_2 = (1, 1)\\}$"
      },
      {
        "key": "D",
        "text": "$\\{v_1 = (-2, 1), \\, v_2 = (1, -1)\\}$"
      }
    ],
    "correct": "C",
    "explanation": "* Ma trận của $f$ trong cơ sở chính tắc: $A = \\begin{bmatrix} 3 & 2 \\\\ 4 & 1 \\end{bmatrix}$.\n* Phương trình đặc trưng:\n  $$\\det(A - \\lambda I) = (3 - \\lambda)(1 - \\lambda) - 8 = \\lambda^2 - 4\\lambda - 5 = 0 \\iff \\lambda_1 = -1, \\, \\lambda_2 = 5$$\n* Với $\\lambda_1 = -1$: giải $(A + I)v = 0 \\iff \\begin{bmatrix} 4 & 2 \\\\ 4 & 2 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = 0 \\iff 2x + y = 0$. Chọn $v_1 = (1, -2)$.\n* Với $\\lambda_2 = 5$: giải $(A - 5I)v = 0 \\iff \\begin{bmatrix} -2 & 2 \\\\ 4 & -4 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = 0 \\iff x - y = 0$. Chọn $v_2 = (1, 1)$.\n* Cơ sở gồm các véc tơ riêng: $\\{v_1 = (1, -2), v_2 = (1, 1)\\}$.\n* **Chọn đáp án: C.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 487,
    "originalId": 34,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho ma trận $A = \\begin{bmatrix} 8 & -2 & 2 \\\\ -2 & 5 & 4 \\\\ 2 & 4 & 5 \\end{bmatrix}$. Biết $\\lambda = 9$ là một giá trị riêng của $A$. Khẳng định nào dưới đây **không đúng**?",
    "options": [
      {
        "key": "A",
        "text": "$(3, 2, 3)$ là một véc tơ riêng ứng với giá trị riêng $\\lambda = 9$"
      },
      {
        "key": "B",
        "text": "$(2, 1, 2)$ là một véc tơ riêng ứng với giá trị riêng $\\lambda = 9$"
      },
      {
        "key": "C",
        "text": "$(-2, 1, 0)$ là một véc tơ riêng ứng với giá trị riêng $\\lambda = 9$"
      },
      {
        "key": "D",
        "text": "Không gian riêng ứng với giá trị riêng $\\lambda = 9$ có số chiều là 2"
      }
    ],
    "correct": "A",
    "explanation": "* Véc tơ $v$ là véc tơ riêng ứng với $\\lambda = 9$ khi và chỉ khi $(A - 9I)v = 0$.\n* Ta có $A - 9I = \\begin{bmatrix} -1 & -2 & 2 \\\\ -2 & -4 & 4 \\\\ 2 & 4 & -4 \\end{bmatrix}$.\n* Cả 3 hàng đều tỉ lệ với $(-1, -2, 2)$, tương đương với phương trình: $-x - 2y + 2z = 0$.\n  * Kiểm tra $(2, 1, 2)$: $-2 - 2(1) + 2(2) = 0$ (thỏa mãn $\\implies$ là véc tơ riêng).\n  * Kiểm tra $(-2, 1, 0)$: $-(-2) - 2(1) + 0 = 0$ (thỏa mãn $\\implies$ là véc tơ riêng).\n  * Kiểm tra $(3, 2, 3)$: $-3 - 2(2) + 2(3) = -1 \\neq 0$ (KHÔNG thỏa mãn).\n* Vậy $(3, 2, 3)$ không phải là véc tơ riêng, khẳng định A là **không đúng**.\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 488,
    "originalId": 34,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Cho ma trận $A = \\begin{bmatrix} 1 & 2 & 2 \\\\ 1 & 2 & -1 \\\\ -1 & 1 & 4 \\end{bmatrix}$, tìm ma trận $P$ sao cho $P^{-1}AP$ có dạng chéo:",
    "options": [
      {
        "key": "A",
        "text": "$P = \\begin{bmatrix} -2 & 1 & 0 \\\\ 1 & 1 & -1 \\\\ -1 & 0 & 1 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$P = \\begin{bmatrix} 0 & 1 & -2 \\\\ -1 & 1 & 1 \\\\ 1 & 0 & -1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$P = \\begin{bmatrix} 1 & 1 & -1 \\\\ 2 & 2 & 1 \\\\ 2 & -1 & 4 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$P = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 3 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* Phương trình đặc trưng của $A$:\n  $$\\det(A - \\lambda I) = \\begin{vmatrix} 1-\\lambda & 2 & 2 \\\\ 1 & 2-\\lambda & -1 \\\\ -1 & 1 & 4-\\lambda \\end{vmatrix} = (1 - \\lambda)(\\lambda - 3)^2 = 0$$\n  Suy ra ma trận có giá trị riêng $\\lambda_1 = 1$ (bội 1) và $\\lambda_2 = 3$ (bội 2).\n* **Với $\\lambda_1 = 1$:** Giải $(A - I)v = 0$:\n  $$\\begin{bmatrix} 0 & 2 & 2 \\\\ 1 & 1 & -1 \\\\ -1 & 1 & 3 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix} = 0 \\implies \\begin{cases} y + z = 0 \\\\ x + y - z = 0 \\end{cases} \\implies v_1 = (-2, 1, -1)^T$$\n* **Với $\\lambda_2 = 3$:** Giải $(A - 3I)v = 0$:\n  $$\\begin{bmatrix} -2 & 2 & 2 \\\\ 1 & -1 & -1 \\\\ -1 & 1 & 1 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix} = 0 \\iff -x + y + z = 0 \\iff x = y + z$$\n  Chọn 2 véctơ riêng độc lập tuyến tính:\n  * Cho $y = 1, z = 0 \\implies v_2 = (1, 1, 0)^T$\n  * Cho $y = -1, z = 1 \\implies v_3 = (0, -1, 1)^T$\n* Ghép 3 véctơ riêng thành các cột của ma trận $P$:\n  $$P = \\begin{bmatrix} -2 & 1 & 0 \\\\ 1 & 1 & -1 \\\\ -1 & 0 & 1 \\end{bmatrix}$$\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 489,
    "originalId": 489,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Phương trình đặc trưng của ma trận $A = \\begin{bmatrix} 4 & 1 \\\\ 2 & 3 \\end{bmatrix}$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\lambda^2 - 5\\lambda + 6 = 0$"
      },
      {
        "key": "B",
        "text": "$\\lambda^2 - 7\\lambda + 12 = 0$"
      },
      {
        "key": "C",
        "text": "$\\lambda^2 + 7\\lambda + 10 = 0$"
      },
      {
        "key": "D",
        "text": "$\\lambda^2 - 7\\lambda + 10 = 0$"
      }
    ],
    "correct": "D",
    "explanation": "Phương trình đặc trưng là $\\det(A - \\lambda I) = 0$:\n$\\begin{vmatrix} 4 - \\lambda & 1 \\\\ 2 & 3 - \\lambda \\end{vmatrix} = (4 - \\lambda)(3 - \\lambda) - 2 = \\lambda^2 - 7\\lambda + 12 - 2 = \\lambda^2 - 7\\lambda + 10 = 0$.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 490,
    "originalId": 490,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Các giá trị riêng của ma trận $A = \\begin{bmatrix} 4 & 1 \\\\ 2 & 3 \\end{bmatrix}$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\lambda_1 = -2, \\, \\lambda_2 = -5$"
      },
      {
        "key": "B",
        "text": "$\\lambda_1 = 2, \\, \\lambda_2 = 5$"
      },
      {
        "key": "C",
        "text": "$\\lambda_1 = 1, \\, \\lambda_2 = 10$"
      },
      {
        "key": "D",
        "text": "$\\lambda_1 = 3, \\, \\lambda_2 = 4$"
      }
    ],
    "correct": "B",
    "explanation": "Giải phương trình đặc trưng $\\lambda^2 - 7\\lambda + 10 = 0 \\Leftrightarrow (\\lambda - 2)(\\lambda - 5) = 0 \\Leftrightarrow \\lambda = 2$ hoặc $\\lambda = 5$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 491,
    "originalId": 491,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận vuông $A$ cấp 3 có các giá trị riêng là $1, -2, 3$. Định thức $\\det A$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$0$"
      },
      {
        "key": "B",
        "text": "$2$"
      },
      {
        "key": "C",
        "text": "$6$"
      },
      {
        "key": "D",
        "text": "$-6$"
      }
    ],
    "correct": "D",
    "explanation": "Định thức của ma trận bằng tích tất cả các giá trị riêng của nó: $\\det A = \\lambda_1 \\cdot \\lambda_2 \\cdot \\lambda_3 = 1 \\cdot (-2) \\cdot 3 = -6$.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 492,
    "originalId": 492,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận vuông $A$ cấp 3 có các giá trị riêng là $1, -2, 3$. Vết $\\operatorname{tr}(A)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$-6$"
      },
      {
        "key": "B",
        "text": "$2$"
      },
      {
        "key": "C",
        "text": "$1$"
      },
      {
        "key": "D",
        "text": "$6$"
      }
    ],
    "correct": "B",
    "explanation": "Vết của ma trận bằng tổng tất cả các giá trị riêng của nó: $\\operatorname{tr}(A) = \\lambda_1 + \\lambda_2 + \\lambda_3 = 1 + (-2) + 3 = 2$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 493,
    "originalId": 493,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Véc tơ riêng ứng với giá trị riêng $\\lambda = 2$ của ma trận $A = \\begin{bmatrix} 4 & 1 \\\\ 2 & 3 \\end{bmatrix}$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(1, 1)$"
      },
      {
        "key": "B",
        "text": "$(1, 2)$"
      },
      {
        "key": "C",
        "text": "$(1, -2)$"
      },
      {
        "key": "D",
        "text": "$(2, 1)$"
      }
    ],
    "correct": "C",
    "explanation": "Giải hệ $(A - 2I)v = 0$:\n$\\begin{bmatrix} 2 & 1 \\\\ 2 & 1 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix} \\Leftrightarrow 2x + y = 0 \\Leftrightarrow y = -2x$.\nChọn $x = 1 \\Rightarrow y = -2$, ta được véc tơ riêng $(1, -2)$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 494,
    "originalId": 494,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Một ma trận vuông $A$ cấp $n$ **chéo hóa được** trên trường số thực $\\mathbb{R}$ khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$\\det A \\neq 0$"
      },
      {
        "key": "B",
        "text": "$A$ là ma trận tam giác"
      },
      {
        "key": "C",
        "text": "$A$ có $n$ véc tơ riêng độc lập tuyến tính trong $\\mathbb{R}^n$"
      },
      {
        "key": "D",
        "text": "$A$ có ít nhất một giá trị riêng bằng 0"
      }
    ],
    "correct": "C",
    "explanation": "Theo định lý chéo hóa ma trận: một ma trận vuông $A$ cấp $n$ chéo hóa được khi và chỉ khi nó có đủ $n$ véc tơ riêng độc lập tuyến tính.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 495,
    "originalId": 495,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Nếu ma trận vuông $A$ cấp $n$ có $n$ giá trị riêng phân biệt thì:",
    "options": [
      {
        "key": "A",
        "text": "$A$ chắc chắn chéo hóa được"
      },
      {
        "key": "B",
        "text": "$A$ suy biến"
      },
      {
        "key": "C",
        "text": "$\\det A = 0$"
      },
      {
        "key": "D",
        "text": "$A$ không chéo hóa được"
      }
    ],
    "correct": "A",
    "explanation": "Các véc tơ riêng ứng với các giá trị riêng đôi một phân biệt luôn độc lập tuyến tính. Do đó nếu có $n$ giá trị riêng phân biệt thì có đủ $n$ véc tơ riêng độc lập tuyến tính, suy ra $A$ luôn chéo hóa được.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 496,
    "originalId": 496,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Nếu $\\lambda$ là giá trị riêng của ma trận khả nghịch $A$ với véc tơ riêng $v$, thì giá trị riêng tương ứng của ma trận nghịch đảo $A^{-1}$ là:",
    "options": [
      {
        "key": "A",
        "text": "$-\\lambda$"
      },
      {
        "key": "B",
        "text": "$\\dfrac{1}{\\lambda}$"
      },
      {
        "key": "C",
        "text": "$\\lambda^2$"
      },
      {
        "key": "D",
        "text": "$\\lambda$"
      }
    ],
    "correct": "B",
    "explanation": "Từ $Av = \\lambda v$, nhân cả hai vế với $A^{-1}$: $v = \\lambda A^{-1}v \\Rightarrow A^{-1}v = \\dfrac{1}{\\lambda} v$. Vậy $\\dfrac{1}{\\lambda}$ là giá trị riêng của $A^{-1}$ với cùng véc tơ riêng $v$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 497,
    "originalId": 497,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Nếu $\\lambda$ là giá trị riêng của ma trận $A$, thì giá trị riêng của ma trận $A^k$ ($k \\in \\mathbb{N}^*$) là:",
    "options": [
      {
        "key": "A",
        "text": "$k^\\lambda$"
      },
      {
        "key": "B",
        "text": "$k \\lambda$"
      },
      {
        "key": "C",
        "text": "$\\lambda^k$"
      },
      {
        "key": "D",
        "text": "$\\lambda + k$"
      }
    ],
    "correct": "C",
    "explanation": "Ta có $Av = \\lambda v \\Rightarrow A^2 v = A(\\lambda v) = \\lambda(Av) = \\lambda^2 v$. Quy nạp lên ta được $A^k v = \\lambda^k v$. Do đó $\\lambda^k$ là giá trị riêng của $A^k$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 498,
    "originalId": 498,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hai ma trận vuông $A$ và $B$ được gọi là **đồng dạng** nếu tồn tại ma trận khả nghịch $P$ sao cho $B = P^{-1} A P$. Hai ma trận đồng dạng có tính chất nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Cùng các phần tử trên đường chéo chính"
      },
      {
        "key": "B",
        "text": "Cùng đa thức đặc trưng, cùng định thức, cùng vết và cùng các giá trị riêng"
      },
      {
        "key": "C",
        "text": "Cùng các véc tơ riêng"
      },
      {
        "key": "D",
        "text": "Chắc chắn là ma trận đường chéo"
      }
    ],
    "correct": "B",
    "explanation": "Hai ma trận đồng dạng luôn có cùng đa thức đặc trưng $\\det(B - \\lambda I) = \\det(P^{-1}(A - \\lambda I)P) = \\det(A - \\lambda I)$, do đó chúng có cùng các giá trị riêng, cùng định thức và cùng vết.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 499,
    "originalId": 499,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Ma trận $A = \\begin{bmatrix} 2 & 1 \\\\ 0 & 2 \\end{bmatrix}$ có chéo hóa được không?",
    "options": [
      {
        "key": "A",
        "text": "Có, vì là ma trận tam giác trên"
      },
      {
        "key": "B",
        "text": "Có, ma trận chéo là $\\begin{bmatrix} 2 & 0 \\\\ 0 & 2 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "Có, vì có giá trị riêng bằng 2"
      },
      {
        "key": "D",
        "text": "Không chéo hóa được vì chỉ có 1 véc tơ riêng độc lập tuyến tính"
      }
    ],
    "correct": "D",
    "explanation": "Phương trình đặc trưng $(\\lambda - 2)^2 = 0 \\Rightarrow \\lambda = 2$ (bội 2). Không gian riêng ứng với $\\lambda = 2$ là nghiệm của $(A - 2I)v = 0 \\Leftrightarrow \\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix} = 0 \\Leftrightarrow y = 0$, chỉ có 1 ẩn tự do $x$, số chiều bằng 1 < 2 (bội đại số). Do đó không đủ 2 véc tơ riêng độc lập tuyến tính nên $A$ không chéo hóa được.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 500,
    "originalId": 500,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Định lý Cayley - Hamilton phát biểu rằng:",
    "options": [
      {
        "key": "A",
        "text": "Mọi ma trận vuông đều chéo hóa được"
      },
      {
        "key": "B",
        "text": "Mọi ma trận vuông đều thỏa mãn phương trình đặc trưng của chính nó: $P_A(A) = 0$"
      },
      {
        "key": "C",
        "text": "Mọi ma trận vuông đều khả nghịch"
      },
      {
        "key": "D",
        "text": "Định thức của ma trận bằng tích các phần tử đường chéo"
      }
    ],
    "correct": "B",
    "explanation": "Định lý Cayley - Hamilton kinh điển khẳng định rằng nếu $P(\\lambda) = \\det(A - \\lambda I)$ là đa thức đặc trưng của ma trận vuông $A$, thì khi thay $\\lambda$ bởi ma trận $A$ ta có $P(A) = 0$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 501,
    "originalId": 501,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Giá trị riêng của ma trận đường chéo $D = \\operatorname{diag}(d_1, d_2, \\dots, d_n)$ là:",
    "options": [
      {
        "key": "A",
        "text": "Nghịch đảo của các phần tử trên đường chéo"
      },
      {
        "key": "B",
        "text": "Chính là các phần tử trên đường chéo $d_1, d_2, \\dots, d_n$"
      },
      {
        "key": "C",
        "text": "Tổng của các phần tử trên đường chéo"
      },
      {
        "key": "D",
        "text": "Tích của các phần tử trên đường chéo"
      }
    ],
    "correct": "B",
    "explanation": "Phương trình đặc trưng là $\\det(D - \\lambda I) = (d_1 - \\lambda)(d_2 - \\lambda)\\dots(d_n - \\lambda) = 0$, có các nghiệm chính là các phần tử trên đường chéo $d_1, d_2, \\dots, d_n$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 502,
    "originalId": 502,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho toán tử tuyến tính $f: V \\to V$. Nếu $f^2 = f$ (toán tử chiếu), thì các giá trị riêng có thể có của $f$ là:",
    "options": [
      {
        "key": "A",
        "text": "Số thực bất kỳ"
      },
      {
        "key": "B",
        "text": "Chỉ có thể là $1$ hoặc $-1$"
      },
      {
        "key": "C",
        "text": "Chỉ có thể là $0$ hoặc $1$"
      },
      {
        "key": "D",
        "text": "Chỉ có thể là $0$"
      }
    ],
    "correct": "C",
    "explanation": "Nếu $v$ là véc tơ riêng ứng với giá trị riêng $\\lambda$ ($v \\neq 0$), ta có $f(v) = \\lambda v \\Rightarrow f^2(v) = f(\\lambda v) = \\lambda^2 v$. Vì $f^2 = f$ nên $\\lambda^2 v = \\lambda v \\Rightarrow (\\lambda^2 - \\lambda)v = 0$. Vì $v \\neq 0$ nên $\\lambda^2 - \\lambda = 0 \\Leftrightarrow \\lambda = 0$ hoặc $\\lambda = 1$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 503,
    "originalId": 503,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận đối xứng thực $A$ ($A^T = A$). Khẳng định nào sau đây là **luôn đúng**?",
    "options": [
      {
        "key": "A",
        "text": "Tất cả các giá trị riêng của $A$ đều là số thực và $A$ luôn chéo hóa trực giao được"
      },
      {
        "key": "B",
        "text": "$\\det A$ luôn lớn hơn 0"
      },
      {
        "key": "C",
        "text": "$A$ có thể không chéo hóa được"
      },
      {
        "key": "D",
        "text": "Tất cả các giá trị riêng của $A$ đều dương"
      }
    ],
    "correct": "A",
    "explanation": "Theo Định lý phổ (Spectral Theorem) cho ma trận đối xứng thực: mọi ma trận đối xứng thực đều có tất cả các giá trị riêng là số thực và luôn chéo hóa trực giao được ($A = Q D Q^T$ với $Q$ trực giao).\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 504,
    "originalId": 504,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận vuông $A$ thỏa mãn $A^2 = I$ (ma trận đối hợp). Các giá trị riêng của $A$ chỉ có thể là:",
    "options": [
      {
        "key": "A",
        "text": "Số phức bất kỳ"
      },
      {
        "key": "B",
        "text": "$1$ hoặc $-1$"
      },
      {
        "key": "C",
        "text": "Chỉ có thể bằng $1$"
      },
      {
        "key": "D",
        "text": "$0$ hoặc $1$"
      }
    ],
    "correct": "B",
    "explanation": "Nếu $\\lambda$ là giá trị riêng thì $A^2 v = \\lambda^2 v = I v = v \\Rightarrow \\lambda^2 = 1 \\Leftrightarrow \\lambda = \\pm 1$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 505,
    "originalId": 505,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Không gian riêng $E_\\lambda$ ứng với giá trị riêng $\\lambda$ của toán tử tuyến tính $f: V \\to V$ là:",
    "options": [
      {
        "key": "A",
        "text": "Toàn bộ không gian $V$"
      },
      {
        "key": "B",
        "text": "Chỉ tập hợp các véc tơ riêng ứng với $\\lambda$ (không chứa $\\vec{0}$)"
      },
      {
        "key": "C",
        "text": "Tập hợp các giá trị riêng"
      },
      {
        "key": "D",
        "text": "Tập hợp tất cả các véc tơ riêng ứng với $\\lambda$ cùng với véc tơ không $\\vec{0}$"
      }
    ],
    "correct": "D",
    "explanation": "Theo định nghĩa, không gian riêng $E_\\lambda = \\operatorname{Ker}(f - \\lambda I)$ là một không gian véc tơ con, bao gồm tất cả các véc tơ riêng ứng với $\\lambda$ cùng với véc tơ không $\\vec{0}$.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 506,
    "originalId": 506,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận vuông $A$ cấp 2 có vết $\\text{tr}(A) = 9$ và định thức $\\det(A) = -6$. Tổng và tích các trị riêng của $A$ lần lượt là:",
    "options": [
      {
        "key": "A",
        "text": "$\\text{Tổng} = -6, \\, \\text{Tích} = 9$"
      },
      {
        "key": "B",
        "text": "$\\text{Tổng} = -9, \\, \\text{Tích} = -6$"
      },
      {
        "key": "C",
        "text": "$\\text{Tổng} = 9, \\, \\text{Tích} = --6$"
      },
      {
        "key": "D",
        "text": "$\\text{Tổng} = 9, \\, \\text{Tích} = -6$"
      }
    ],
    "correct": "D",
    "explanation": "* Theo định lý Viète cho đa thức đặc trưng: Tổng các trị riêng luôn bằng vết ma trận $\\text{tr}(A) = 9$, và tích các trị riêng luôn bằng định thức $\\det(A) = -6$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 507,
    "originalId": 507,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Các trị riêng của ma trận tam giác $A = \\begin{bmatrix} 3 & 3 \\\\ 0 & -3 \\end{bmatrix}$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\lambda_1 = 3, \\, \\lambda_2 = -3$"
      },
      {
        "key": "B",
        "text": "$\\lambda_1 = 3, \\, \\lambda_2 = 0$"
      },
      {
        "key": "C",
        "text": "$\\lambda = 0$"
      },
      {
        "key": "D",
        "text": "$\\lambda_1 = -3, \\, \\lambda_2 = 3$"
      }
    ],
    "correct": "A",
    "explanation": "* Với ma trận tam giác (trên hoặc dưới) và ma trận đường chéo, các trị riêng chính là các phần tử nằm trên đường chéo chính: $\\lambda_1 = 3, \\lambda_2 = -3$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 508,
    "originalId": 508,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Véc tơ $v \\neq \\theta$ là một **véc tơ riêng** ứng với trị riêng $\\lambda$ của ma trận vuông $A$ khi và chỉ khi thỏa mãn phương trình:",
    "options": [
      {
        "key": "A",
        "text": "$A v = \\lambda I$"
      },
      {
        "key": "B",
        "text": "$A v = \\theta$"
      },
      {
        "key": "C",
        "text": "$v A = \\lambda v$"
      },
      {
        "key": "D",
        "text": "$A v = \\lambda v$"
      }
    ],
    "correct": "D",
    "explanation": "* Định nghĩa véc tơ riêng và trị riêng: $A v = \\lambda v$ với $v \\neq \\theta$ (hoặc tương đương $(A - \\lambda I) v = \\theta$).\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 509,
    "originalId": 509,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho ma trận vuông $A$ cấp 2 có vết $\\text{tr}(A) = 2$ và định thức $\\det(A) = 8$. Tổng và tích các trị riêng của $A$ lần lượt là:",
    "options": [
      {
        "key": "A",
        "text": "$\\text{Tổng} = -2, \\, \\text{Tích} = 8$"
      },
      {
        "key": "B",
        "text": "$\\text{Tổng} = 8, \\, \\text{Tích} = 2$"
      },
      {
        "key": "C",
        "text": "$\\text{Tổng} = 2, \\, \\text{Tích} = 8$"
      },
      {
        "key": "D",
        "text": "$\\text{Tổng} = 2, \\, \\text{Tích} = -8$"
      }
    ],
    "correct": "C",
    "explanation": "* Theo định lý Viète cho đa thức đặc trưng: Tổng các trị riêng luôn bằng vết ma trận $\\text{tr}(A) = 2$, và tích các trị riêng luôn bằng định thức $\\det(A) = 8$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 510,
    "originalId": 510,
    "chapterId": 5,
    "chapterName": "Ánh xạ tuyến tính",
    "topicId": 5,
    "topicName": "Ánh xạ tuyến tính",
    "subTypeId": 4,
    "typeId": "5.4",
    "typeName": "Trị riêng, Véc tơ riêng & Chéo hóa ma trận",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Các trị riêng của ma trận tam giác $A = \\begin{bmatrix} 4 & 3 \\\\ 0 & 5 \\end{bmatrix}$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\lambda_1 = 4, \\, \\lambda_2 = 5$"
      },
      {
        "key": "B",
        "text": "$\\lambda_1 = 3, \\, \\lambda_2 = 0$"
      },
      {
        "key": "C",
        "text": "$\\lambda = 9$"
      },
      {
        "key": "D",
        "text": "$\\lambda_1 = -4, \\, \\lambda_2 = -5$"
      }
    ],
    "correct": "A",
    "explanation": "* Với ma trận tam giác (trên hoặc dưới) và ma trận đường chéo, các trị riêng chính là các phần tử nằm trên đường chéo chính: $\\lambda_1 = 4, \\lambda_2 = 5$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 511,
    "originalId": 35,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho tích vô hướng trên không gian véc tơ $\\mathbb{R}^2$ xác định bởi:\n$$\\eta(u, v) = x_1 y_1 - 2x_1 y_2 - 2x_2 y_1 + 5x_2 y_2$$\ntrong đó $u = (x_1, x_2), v = (y_1, y_2) \\in \\mathbb{R}^2$. Xét véc tơ $v = (1, 2)$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$\\|v\\| = \\sqrt{13}$"
      },
      {
        "key": "B",
        "text": "$\\|v\\| = 13$"
      },
      {
        "key": "C",
        "text": "$\\|v\\| = \\sqrt{5}$"
      },
      {
        "key": "D",
        "text": "$\\|v\\| = 1$"
      }
    ],
    "correct": "A",
    "explanation": "* Chuẩn (độ dài) của véc tơ $v$ cảm sinh bởi tích vô hướng $\\eta$ được tính bởi:\n  $$\\|v\\| = \\sqrt{\\eta(v, v)}$$\n* Thay $v = (1, 2)$ vào biểu thức:\n  $$\\eta(v, v) = 1(1) - 2(1)(2) - 2(2)(1) + 5(2)(2) = 1 - 4 - 4 + 20 = 13$$\n* Suy ra $\\|v\\| = \\sqrt{13}$.\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 512,
    "originalId": 512,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Bất đẳng thức Cauchy - Schwarz trong không gian Euclide phát biểu rằng:",
    "options": [
      {
        "key": "A",
        "text": "$|\\langle u, v \\rangle| \\le \\|u\\| \\cdot \\|v\\|$"
      },
      {
        "key": "B",
        "text": "$\\|u + v\\| \\le \\|u\\| - \\|v\\|$"
      },
      {
        "key": "C",
        "text": "$|\\langle u, v \\rangle| \\ge \\|u\\| \\cdot \\|v\\|$"
      },
      {
        "key": "D",
        "text": "$\\langle u, v \\rangle = \\|u\\| \\cdot \\|v\\| \\sin\\theta$"
      }
    ],
    "correct": "A",
    "explanation": "Bất đẳng thức Cauchy - Schwarz cơ bản: Với mọi $u, v$ trong không gian Euclide, ta có $|\\langle u, v \\rangle| \\le \\|u\\| \\cdot \\|v\\|$. Dấu bằng xảy ra khi và chỉ khi $u$ và $v$ phụ thuộc tuyến tính.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 513,
    "originalId": 513,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tính khoảng cách Euclide giữa hai điểm $u = (1, 2, 3)$ và $v = (4, 2, -1)$ trong $\\mathbb{R}^3$:",
    "options": [
      {
        "key": "A",
        "text": "$25$"
      },
      {
        "key": "B",
        "text": "$5$"
      },
      {
        "key": "C",
        "text": "$\\sqrt{7}$"
      },
      {
        "key": "D",
        "text": "$3$"
      }
    ],
    "correct": "B",
    "explanation": "Khoảng cách $d(u, v) = \\|u - v\\| = \\sqrt{(1 - 4)^2 + (2 - 2)^2 + (3 - (-1))^2} = \\sqrt{(-3)^2 + 0 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 514,
    "originalId": 514,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Dạng song tuyến tính $B(u, v)$ được gọi là đối xứng nếu:",
    "options": [
      {
        "key": "A",
        "text": "$B(u, v) = -B(v, u)$ với mọi $u, v$"
      },
      {
        "key": "B",
        "text": "$B(u, v) = 1$ với mọi $u, v$"
      },
      {
        "key": "C",
        "text": "$B(u, v) = B(v, u)$ với mọi $u, v$"
      },
      {
        "key": "D",
        "text": "$B(u, u) = 0$ với mọi $u$"
      }
    ],
    "correct": "C",
    "explanation": "Theo định nghĩa, dạng song tuyến tính đối xứng thỏa mãn tính chất giao hoán: $B(u, v) = B(v, u)$ đối với mọi cặp véc tơ $u, v$ trong không gian.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 515,
    "originalId": 515,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian Euclide $\\mathbb{R}^2$ với tích vô hướng chính tắc, chuẩn (độ dài) của véc tơ $u = (4, 1)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$\\sqrt{17}$"
      },
      {
        "key": "B",
        "text": "$17$"
      },
      {
        "key": "C",
        "text": "$5$"
      },
      {
        "key": "D",
        "text": "$\\sqrt{5}$"
      }
    ],
    "correct": "A",
    "explanation": "* Chuẩn chính tắc trong $\\mathbb{R}^2$: $\\|u\\| = \\sqrt{x_1^2 + x_2^2} = \\sqrt{4^2 + 1^2} = \\sqrt{17} = \\sqrt{17}$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 516,
    "originalId": 516,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tích vô hướng chính tắc của hai véc tơ $u = (4, 3)$ và $v = (-3, 2)$ trong $\\mathbb{R}^2$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$-1$"
      },
      {
        "key": "B",
        "text": "$-6$"
      },
      {
        "key": "C",
        "text": "$-4$"
      },
      {
        "key": "D",
        "text": "$6$"
      }
    ],
    "correct": "B",
    "explanation": "* Tích vô hướng chính tắc: $\\langle u, v \\rangle = u_1 v_1 + u_2 v_2 = (4)(-3) + (3)(2) = -6$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 517,
    "originalId": 517,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Bất đẳng thức Cauchy-Schwarz trong không gian véc tơ Euclide phát biểu rằng với mọi véc tơ $u, v$:",
    "options": [
      {
        "key": "A",
        "text": "$|\\langle u, v \\rangle| \\le \\|u\\| \\cdot \\|v\\|$"
      },
      {
        "key": "B",
        "text": "$\\|u + v\\| = \\|u\\| + \\|v\\|$"
      },
      {
        "key": "C",
        "text": "$\\langle u, v \\rangle \\ge \\|u\\| \\cdot \\|v\\|$"
      },
      {
        "key": "D",
        "text": "$\\langle u, v \\rangle = \\|u\\| + \\|v\\|$"
      }
    ],
    "correct": "A",
    "explanation": "* Bất đẳng thức Cauchy-Schwarz: $|\\langle u, v \\rangle| \\le \\|u\\| \\cdot \\|v\\|$. Dấu đẳng thức xảy ra khi và chỉ khi hai véc tơ phụ thuộc tuyến tính.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 518,
    "originalId": 518,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian Euclide $\\mathbb{R}^2$ với tích vô hướng chính tắc, chuẩn (độ dài) của véc tơ $u = (8, 2)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$68$"
      },
      {
        "key": "B",
        "text": "$\\sqrt{10}$"
      },
      {
        "key": "C",
        "text": "$\\sqrt{68}$"
      },
      {
        "key": "D",
        "text": "$10$"
      }
    ],
    "correct": "C",
    "explanation": "* Chuẩn chính tắc trong $\\mathbb{R}^2$: $\\|u\\| = \\sqrt{x_1^2 + x_2^2} = \\sqrt{8^2 + 2^2} = \\sqrt{68} = \\sqrt{68}$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 519,
    "originalId": 519,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tích vô hướng chính tắc của hai véc tơ $u = (1, 4)$ và $v = (4, 3)$ trong $\\mathbb{R}^2$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$16$"
      },
      {
        "key": "B",
        "text": "$18$"
      },
      {
        "key": "C",
        "text": "$17$"
      },
      {
        "key": "D",
        "text": "$19$"
      }
    ],
    "correct": "A",
    "explanation": "* Tích vô hướng chính tắc: $\\langle u, v \\rangle = u_1 v_1 + u_2 v_2 = (1)(4) + (4)(3) = 16$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 520,
    "originalId": 520,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian Euclide $\\mathbb{R}^2$ với tích vô hướng chính tắc, chuẩn (độ dài) của véc tơ $u = (5, 1)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$\\sqrt{26}$"
      },
      {
        "key": "B",
        "text": "$\\sqrt{6}$"
      },
      {
        "key": "C",
        "text": "$26$"
      },
      {
        "key": "D",
        "text": "$6$"
      }
    ],
    "correct": "A",
    "explanation": "* Chuẩn chính tắc trong $\\mathbb{R}^2$: $\\|u\\| = \\sqrt{x_1^2 + x_2^2} = \\sqrt{5^2 + 1^2} = \\sqrt{26} = \\sqrt{26}$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 521,
    "originalId": 521,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tích vô hướng chính tắc của hai véc tơ $u = (4, 3)$ và $v = (-2, -3)$ trong $\\mathbb{R}^2$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$-18$"
      },
      {
        "key": "B",
        "text": "$17$"
      },
      {
        "key": "C",
        "text": "$-15$"
      },
      {
        "key": "D",
        "text": "$-17$"
      }
    ],
    "correct": "D",
    "explanation": "* Tích vô hướng chính tắc: $\\langle u, v \\rangle = u_1 v_1 + u_2 v_2 = (4)(-2) + (3)(-3) = -17$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 522,
    "originalId": 522,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian Euclide $\\mathbb{R}^2$ với tích vô hướng chính tắc, chuẩn (độ dài) của véc tơ $u = (1, 2)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$\\sqrt{5}$"
      },
      {
        "key": "B",
        "text": "$\\sqrt{3}$"
      },
      {
        "key": "C",
        "text": "$3$"
      },
      {
        "key": "D",
        "text": "$5$"
      }
    ],
    "correct": "A",
    "explanation": "* Chuẩn chính tắc trong $\\mathbb{R}^2$: $\\|u\\| = \\sqrt{x_1^2 + x_2^2} = \\sqrt{1^2 + 2^2} = \\sqrt{5} = \\sqrt{5}$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 523,
    "originalId": 523,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tích vô hướng chính tắc của hai véc tơ $u = (3, 2)$ và $v = (3, 5)$ trong $\\mathbb{R}^2$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$20$"
      },
      {
        "key": "B",
        "text": "$19$"
      },
      {
        "key": "C",
        "text": "$18$"
      },
      {
        "key": "D",
        "text": "$21$"
      }
    ],
    "correct": "B",
    "explanation": "* Tích vô hướng chính tắc: $\\langle u, v \\rangle = u_1 v_1 + u_2 v_2 = (3)(3) + (2)(5) = 19$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 524,
    "originalId": 524,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian Euclide $\\mathbb{R}^2$ với tích vô hướng chính tắc, chuẩn (độ dài) của véc tơ $u = (8, 5)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$\\sqrt{13}$"
      },
      {
        "key": "B",
        "text": "$13$"
      },
      {
        "key": "C",
        "text": "$\\sqrt{89}$"
      },
      {
        "key": "D",
        "text": "$89$"
      }
    ],
    "correct": "C",
    "explanation": "* Chuẩn chính tắc trong $\\mathbb{R}^2$: $\\|u\\| = \\sqrt{x_1^2 + x_2^2} = \\sqrt{8^2 + 5^2} = \\sqrt{89} = \\sqrt{89}$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 525,
    "originalId": 525,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tích vô hướng chính tắc của hai véc tơ $u = (-1, 4)$ và $v = (4, -3)$ trong $\\mathbb{R}^2$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$19$"
      },
      {
        "key": "B",
        "text": "$-14$"
      },
      {
        "key": "C",
        "text": "$-16$"
      },
      {
        "key": "D",
        "text": "$16$"
      }
    ],
    "correct": "C",
    "explanation": "* Tích vô hướng chính tắc: $\\langle u, v \\rangle = u_1 v_1 + u_2 v_2 = (-1)(4) + (4)(-3) = -16$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 526,
    "originalId": 526,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian Euclide $\\mathbb{R}^2$ với tích vô hướng chính tắc, chuẩn (độ dài) của véc tơ $u = (1, 5)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$\\sqrt{26}$"
      },
      {
        "key": "B",
        "text": "$6$"
      },
      {
        "key": "C",
        "text": "$26$"
      },
      {
        "key": "D",
        "text": "$\\sqrt{6}$"
      }
    ],
    "correct": "A",
    "explanation": "* Chuẩn chính tắc trong $\\mathbb{R}^2$: $\\|u\\| = \\sqrt{x_1^2 + x_2^2} = \\sqrt{1^2 + 5^2} = \\sqrt{26} = \\sqrt{26}$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 527,
    "originalId": 527,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tích vô hướng chính tắc của hai véc tơ $u = (1, -1)$ và $v = (2, 4)$ trong $\\mathbb{R}^2$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$-2$"
      },
      {
        "key": "B",
        "text": "$-1$"
      },
      {
        "key": "C",
        "text": "$2$"
      },
      {
        "key": "D",
        "text": "$0$"
      }
    ],
    "correct": "A",
    "explanation": "* Tích vô hướng chính tắc: $\\langle u, v \\rangle = u_1 v_1 + u_2 v_2 = (1)(2) + (-1)(4) = -2$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 528,
    "originalId": 528,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian Euclide $\\mathbb{R}^2$ với tích vô hướng chính tắc, chuẩn (độ dài) của véc tơ $u = (8, 1)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$65$"
      },
      {
        "key": "B",
        "text": "$9$"
      },
      {
        "key": "C",
        "text": "$\\sqrt{65}$"
      },
      {
        "key": "D",
        "text": "$\\sqrt{9}$"
      }
    ],
    "correct": "C",
    "explanation": "* Chuẩn chính tắc trong $\\mathbb{R}^2$: $\\|u\\| = \\sqrt{x_1^2 + x_2^2} = \\sqrt{8^2 + 1^2} = \\sqrt{65} = \\sqrt{65}$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 529,
    "originalId": 529,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tích vô hướng chính tắc của hai véc tơ $u = (2, -1)$ và $v = (5, -2)$ trong $\\mathbb{R}^2$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$13$"
      },
      {
        "key": "B",
        "text": "$-9$"
      },
      {
        "key": "C",
        "text": "$14$"
      },
      {
        "key": "D",
        "text": "$12$"
      }
    ],
    "correct": "D",
    "explanation": "* Tích vô hướng chính tắc: $\\langle u, v \\rangle = u_1 v_1 + u_2 v_2 = (2)(5) + (-1)(-2) = 12$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 530,
    "originalId": 530,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian Euclide $\\mathbb{R}^2$ với tích vô hướng chính tắc, chuẩn (độ dài) của véc tơ $u = (6, 3)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$\\sqrt{45}$"
      },
      {
        "key": "B",
        "text": "$\\sqrt{9}$"
      },
      {
        "key": "C",
        "text": "$45$"
      },
      {
        "key": "D",
        "text": "$9$"
      }
    ],
    "correct": "A",
    "explanation": "* Chuẩn chính tắc trong $\\mathbb{R}^2$: $\\|u\\| = \\sqrt{x_1^2 + x_2^2} = \\sqrt{6^2 + 3^2} = \\sqrt{45} = \\sqrt{45}$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 531,
    "originalId": 531,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tích vô hướng chính tắc của hai véc tơ $u = (2, 4)$ và $v = (2, 5)$ trong $\\mathbb{R}^2$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$18$"
      },
      {
        "key": "B",
        "text": "$26$"
      },
      {
        "key": "C",
        "text": "$24$"
      },
      {
        "key": "D",
        "text": "$25$"
      }
    ],
    "correct": "C",
    "explanation": "* Tích vô hướng chính tắc: $\\langle u, v \\rangle = u_1 v_1 + u_2 v_2 = (2)(2) + (4)(5) = 24$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 532,
    "originalId": 532,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian Euclide $\\mathbb{R}^2$ với tích vô hướng chính tắc, chuẩn (độ dài) của véc tơ $u = (2, 7)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$\\sqrt{9}$"
      },
      {
        "key": "B",
        "text": "$9$"
      },
      {
        "key": "C",
        "text": "$53$"
      },
      {
        "key": "D",
        "text": "$\\sqrt{53}$"
      }
    ],
    "correct": "D",
    "explanation": "* Chuẩn chính tắc trong $\\mathbb{R}^2$: $\\|u\\| = \\sqrt{x_1^2 + x_2^2} = \\sqrt{2^2 + 7^2} = \\sqrt{53} = \\sqrt{53}$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 533,
    "originalId": 533,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tích vô hướng chính tắc của hai véc tơ $u = (4, -2)$ và $v = (3, 2)$ trong $\\mathbb{R}^2$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$10$"
      },
      {
        "key": "B",
        "text": "$2$"
      },
      {
        "key": "C",
        "text": "$8$"
      },
      {
        "key": "D",
        "text": "$9$"
      }
    ],
    "correct": "C",
    "explanation": "* Tích vô hướng chính tắc: $\\langle u, v \\rangle = u_1 v_1 + u_2 v_2 = (4)(3) + (-2)(2) = 8$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 534,
    "originalId": 534,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian Euclide $\\mathbb{R}^2$ với tích vô hướng chính tắc, chuẩn (độ dài) của véc tơ $u = (5, 8)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$13$"
      },
      {
        "key": "B",
        "text": "$\\sqrt{13}$"
      },
      {
        "key": "C",
        "text": "$\\sqrt{89}$"
      },
      {
        "key": "D",
        "text": "$89$"
      }
    ],
    "correct": "C",
    "explanation": "* Chuẩn chính tắc trong $\\mathbb{R}^2$: $\\|u\\| = \\sqrt{x_1^2 + x_2^2} = \\sqrt{5^2 + 8^2} = \\sqrt{89} = \\sqrt{89}$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 535,
    "originalId": 535,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tích vô hướng chính tắc của hai véc tơ $u = (1, 2)$ và $v = (2, 4)$ trong $\\mathbb{R}^2$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$12$"
      },
      {
        "key": "B",
        "text": "$10$"
      },
      {
        "key": "C",
        "text": "$11$"
      },
      {
        "key": "D",
        "text": "$8$"
      }
    ],
    "correct": "B",
    "explanation": "* Tích vô hướng chính tắc: $\\langle u, v \\rangle = u_1 v_1 + u_2 v_2 = (1)(2) + (2)(4) = 10$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 536,
    "originalId": 536,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 1,
    "typeId": "6.1",
    "typeName": "Tích vô hướng, Độ dài (Chuẩn) & Góc",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian Euclide $\\mathbb{R}^2$ với tích vô hướng chính tắc, chuẩn (độ dài) của véc tơ $u = (8, 6)$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$\\sqrt{14}$"
      },
      {
        "key": "B",
        "text": "$100$"
      },
      {
        "key": "C",
        "text": "$14$"
      },
      {
        "key": "D",
        "text": "$10$"
      }
    ],
    "correct": "D",
    "explanation": "* Chuẩn chính tắc trong $\\mathbb{R}^2$: $\\|u\\| = \\sqrt{x_1^2 + x_2^2} = \\sqrt{8^2 + 6^2} = \\sqrt{100} = 10$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 537,
    "originalId": 17,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Trong $\\mathbb{R}^3$, xét cơ sở trực giao:\n$$B = \\{u_1 = (1, 1, 1), \\, u_2 = (1, -1, 0), \\, u_3 = (1, 1, -2)\\}$$\nGiả sử tọa độ của véc tơ $u = (a, b, c)$ trong cơ sở $B$ là $(x, y, z)$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$x = \\dfrac{a + b + c}{3}$"
      },
      {
        "key": "B",
        "text": "$x = a + b + c$"
      },
      {
        "key": "C",
        "text": "$x = \\dfrac{a + b + c}{\\sqrt{3}}$"
      },
      {
        "key": "D",
        "text": "$x = a$"
      }
    ],
    "correct": "A",
    "explanation": "* Vì $B$ là một cơ sở trực giao, tọa độ thứ nhất $x$ được tính trực tiếp bằng công thức hệ số Fourier:\n  $$x = \\frac{\\langle u, u_1 \\rangle}{\\|u_1\\|^2} = \\frac{a(1) + b(1) + c(1)}{1^2 + 1^2 + 1^2} = \\frac{a + b + c}{3}$$\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 538,
    "originalId": 35,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Trong $\\mathbb{R}^3$ xét họ 3 véctơ độc lập tuyến tính $u_1 = (1,1,0), u_2 = (0,1,1), u_3 = (1,1,1)$. Hãy trực chuẩn hoá Gram-Schmidt họ véctơ $S = \\{u_1, u_2, u_3\\}$:",
    "options": [
      {
        "key": "A",
        "text": "$v_1 = \\dfrac{1}{2}(1,1,0), v_2 = \\dfrac{1}{6}(-1,1,2), v_3 = \\dfrac{1}{3}(1,-1,1)$"
      },
      {
        "key": "B",
        "text": "$v_1 = \\dfrac{1}{\\sqrt{2}}(1,1,0), v_2 = \\dfrac{1}{\\sqrt{6}}(-1,1,2), v_3 = \\dfrac{1}{\\sqrt{3}}(1,-1,1)$"
      },
      {
        "key": "C",
        "text": "$v_1 = 2(1,1,0), v_2 = 6(-1,1,2), v_3 = 3(1,-1,1)$"
      },
      {
        "key": "D",
        "text": "$v_1 = \\sqrt{2}(1,1,0), v_2 = \\sqrt{6}(-1,1,2), v_3 = \\sqrt{3}(1,-1,1)$"
      }
    ],
    "correct": "B",
    "explanation": "* Áp dụng thuật toán trực chuẩn hoá Gram-Schmidt:\n  1. $e_1 = u_1 = (1, 1, 0) \\implies \\|e_1\\| = \\sqrt{1^2 + 1^2 + 0} = \\sqrt{2}$.\n     Véctơ đơn vị: $v_1 = \\dfrac{e_1}{\\|e_1\\|} = \\dfrac{1}{\\sqrt{2}}(1, 1, 0)$.\n  2. $e_2 = u_2 - \\dfrac{\\langle u_2, e_1 \\rangle}{\\|e_1\\|^2} e_1 = (0, 1, 1) - \\dfrac{1}{2}(1, 1, 0) = \\left(-\\dfrac{1}{2}, \\dfrac{1}{2}, 1\\right) = \\dfrac{1}{2}(-1, 1, 2)$.\n     Độ dài $\\|e_2\\| = \\dfrac{\\sqrt{6}}{2} \\implies v_2 = \\dfrac{e_2}{\\|e_2\\|} = \\dfrac{1}{\\sqrt{6}}(-1, 1, 2)$.\n  3. $e_3 = u_3 - \\dfrac{\\langle u_3, e_1 \\rangle}{\\|e_1\\|^2} e_1 - \\dfrac{\\langle u_3, e_2 \\rangle}{\\|e_2\\|^2} e_2 = (1, 1, 1) - (1, 1, 0) - \\left(-\\dfrac{1}{3}, \\dfrac{1}{3}, \\dfrac{2}{3}\\right) = \\dfrac{1}{3}(1, -1, 1)$.\n     Độ dài $\\|e_3\\| = \\dfrac{\\sqrt{3}}{3} = \\dfrac{1}{\\sqrt{3}} \\implies v_3 = \\dfrac{e_3}{\\|e_3\\|} = \\dfrac{1}{\\sqrt{3}}(1, -1, 1)$.\n* **Chọn đáp án: B.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 539,
    "originalId": 539,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hai véc tơ $u = (1, m, -2)$ và $v = (2, 3, 4)$ trong $\\mathbb{R}^3$ **trực giao** với nhau khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$m = 0$"
      },
      {
        "key": "B",
        "text": "$m = 2$"
      },
      {
        "key": "C",
        "text": "$m = 6$"
      },
      {
        "key": "D",
        "text": "$m = -2$"
      }
    ],
    "correct": "B",
    "explanation": "Hai véc tơ trực giao khi và chỉ khi tích vô hướng của chúng bằng 0:\n$\\langle u, v \\rangle = 1 \\cdot 2 + m \\cdot 3 + (-2) \\cdot 4 = 2 + 3m - 8 = 3m - 6 = 0 \\Leftrightarrow m = 2$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 540,
    "originalId": 540,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Định lý Pythagore trong không gian Euclide: Nếu hai véc tơ $u, v$ trực giao với nhau ($u \\perp v$) thì:",
    "options": [
      {
        "key": "A",
        "text": "$\\|u + v\\|^2 = \\|u\\|^2 - \\|v\\|^2$"
      },
      {
        "key": "B",
        "text": "$\\|u + v\\|^2 = \\|u\\|^2 + \\|v\\|^2$"
      },
      {
        "key": "C",
        "text": "$\\|u + v\\| = \\sqrt{\\|u\\| \\|v\\|}$"
      },
      {
        "key": "D",
        "text": "$\\|u + v\\| = \\|u\\| + \\|v\\|$"
      }
    ],
    "correct": "B",
    "explanation": "Ta có $\\|u + v\\|^2 = \\langle u+v, u+v \\rangle = \\|u\\|^2 + 2\\langle u, v \\rangle + \\|v\\|^2$. Khi $u \\perp v \\Rightarrow \\langle u, v \\rangle = 0$, suy ra $\\|u + v\\|^2 = \\|u\\|^2 + \\|v\\|^2$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 541,
    "originalId": 541,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Một hệ véc tơ $E = \\{e_1, e_2, \\dots, e_n\\}$ được gọi là **hệ trực chuẩn** (orthonormal) nếu:",
    "options": [
      {
        "key": "A",
        "text": "Các véc tơ chỉ cần đôi một trực giao với nhau"
      },
      {
        "key": "B",
        "text": "Các véc tơ chỉ cần có độ dài bằng 1"
      },
      {
        "key": "C",
        "text": "Các véc tơ đôi một trực giao và đều có độ dài bằng 1: $\\langle e_i, e_j \\rangle = \\delta_{ij}$"
      },
      {
        "key": "D",
        "text": "Tích vô hướng của mọi cặp véc tơ đều bằng 1"
      }
    ],
    "correct": "C",
    "explanation": "Theo định nghĩa, hệ trực chuẩn là hệ véc tơ vừa trực giao (đôi một vuông góc) vừa được chuẩn hóa (độ dài bằng 1): $\\langle e_i, e_j \\rangle = 1$ khi $i=j$ và $= 0$ khi $i \\neq j$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 542,
    "originalId": 542,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hình chiếu trực giao của véc tơ $u$ lên đường thẳng sinh bởi véc tơ khác không $v$ được tính bởi công thức:",
    "options": [
      {
        "key": "A",
        "text": "$\\operatorname{proj}_v(u) = \\langle u, v \\rangle v$"
      },
      {
        "key": "B",
        "text": "$\\operatorname{proj}_v(u) = \\dfrac{\\langle u, v \\rangle}{\\|v\\|} v$"
      },
      {
        "key": "C",
        "text": "$\\operatorname{proj}_v(u) = \\dfrac{\\langle u, v \\rangle}{\\|u\\|^2} u$"
      },
      {
        "key": "D",
        "text": "$\\operatorname{proj}_v(u) = \\dfrac{\\langle u, v \\rangle}{\\|v\\|^2} v$"
      }
    ],
    "correct": "D",
    "explanation": "Công thức hình chiếu trực giao của $u$ lên phương của $v$ là $\\operatorname{proj}_v(u) = \\dfrac{\\langle u, v \\rangle}{\\|v\\|^2} v$.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 543,
    "originalId": 543,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Quá trình trực giao hóa Gram - Schmidt dùng để:",
    "options": [
      {
        "key": "A",
        "text": "Tìm ma trận nghịch đảo"
      },
      {
        "key": "B",
        "text": "Giải hệ phương trình tuyến tính"
      },
      {
        "key": "C",
        "text": "Tính định thức ma trận"
      },
      {
        "key": "D",
        "text": "Biến đổi một cơ sở tùy ý thành một cơ sở trực giao"
      }
    ],
    "correct": "D",
    "explanation": "Thuật toán Gram - Schmidt là phương pháp chuẩn hóa trong không gian Euclide, cho phép biến đổi một cơ sở bất kỳ $\\{u_1, u_2, \\dots, u_n\\}$ thành một cơ sở trực giao $\\{v_1, v_2, \\dots, v_n\\}$ sinh ra cùng không gian.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 544,
    "originalId": 544,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Áp dụng quá trình Gram - Schmidt cho hệ $\\{u_1 = (1, 1), \\, u_2 = (1, 3)\\}$ trong $\\mathbb{R}^2$. Véc tơ trực giao $v_2$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(-1, 1)$"
      },
      {
        "key": "B",
        "text": "$(2, 2)$"
      },
      {
        "key": "C",
        "text": "$(1, -1)$"
      },
      {
        "key": "D",
        "text": "$(0, 2)$"
      }
    ],
    "correct": "A",
    "explanation": "Ta lấy $v_1 = u_1 = (1, 1)$. Khi đó:\n$v_2 = u_2 - \\dfrac{\\langle u_2, v_1 \\rangle}{\\|v_1\\|^2} v_1$.\nTính $\\langle u_2, v_1 \\rangle = 1 \\cdot 1 + 3 \\cdot 1 = 4$, $\\|v_1\\|^2 = 1^2 + 1^2 = 2$.\nSuy ra $v_2 = (1, 3) - \\dfrac{4}{2}(1, 1) = (1, 3) - (2, 2) = (-1, 1)$.\n\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 545,
    "originalId": 545,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho $W$ là không gian con của không gian Euclide $V$ có số chiều $n$. Số chiều của phần bù trực giao $W^\\perp$ thỏa mãn:",
    "options": [
      {
        "key": "A",
        "text": "$\\dim W^\\perp = n + \\dim W$"
      },
      {
        "key": "B",
        "text": "$\\dim W^\\perp = 0$"
      },
      {
        "key": "C",
        "text": "$\\dim W^\\perp = \\dim W$"
      },
      {
        "key": "D",
        "text": "$\\dim W^\\perp = n - \\dim W$"
      }
    ],
    "correct": "D",
    "explanation": "Trong không gian Euclide hữu hạn chiều $V$, ta luôn có $V = W \\oplus W^\\perp$. Do đó $\\dim W + \\dim W^\\perp = \\dim V = n \\Rightarrow \\dim W^\\perp = n - \\dim W$.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 546,
    "originalId": 546,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Phần bù trực giao của đường thẳng $W = \\operatorname{span}\\{(1, 2, 3)\\}$ trong $\\mathbb{R}^3$ là:",
    "options": [
      {
        "key": "A",
        "text": "Gốc tọa độ $\\{(0,0,0)\\}$"
      },
      {
        "key": "B",
        "text": "Mặt phẳng $x + 2y + 3z = 0$"
      },
      {
        "key": "C",
        "text": "Mặt phẳng $x + 2y + 3z = 1$"
      },
      {
        "key": "D",
        "text": "Đường thẳng $x = 2y = 3z$"
      }
    ],
    "correct": "B",
    "explanation": "Tập hợp các véc tơ $(x, y, z)$ trực giao với $(1, 2, 3)$ là các véc tơ thỏa mãn tích vô hướng $\\langle (x, y, z), (1, 2, 3) \\rangle = 0 \\Leftrightarrow x + 2y + 3z = 0$. Đây là một mặt phẳng đi qua gốc tọa độ.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 547,
    "originalId": 547,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho hai véc tơ trực chuẩn $e_1, e_2$ (tức $\\|e_1\\| = \\|e_2\\| = 1$ và $\\langle e_1, e_2 \\rangle = 0$). Khi đó $\\|3e_1 - 4e_2\\|$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "$7$"
      },
      {
        "key": "B",
        "text": "$25$"
      },
      {
        "key": "C",
        "text": "$-1$"
      },
      {
        "key": "D",
        "text": "$5$"
      }
    ],
    "correct": "D",
    "explanation": "Theo định lý Pythagore trong không gian Euclide: $\\|3e_1 - 4e_2\\|^2 = \\|3e_1\\|^2 + \\|-4e_2\\|^2 = 3^2 \\|e_1\\|^2 + (-4)^2 \\|e_2\\|^2 = 9(1) + 16(1) = 25$. Suy ra $\\|3e_1 - 4e_2\\| = 5$.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 548,
    "originalId": 548,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của tham số $m$ để hai véc tơ $u = (5, 4)$ và $v = (m, -5)$ trong $\\mathbb{R}^2$ **trực giao** với nhau:",
    "options": [
      {
        "key": "A",
        "text": "$m = 4$"
      },
      {
        "key": "B",
        "text": "$m = 0$"
      },
      {
        "key": "C",
        "text": "$m = -4$"
      },
      {
        "key": "D",
        "text": "$m = 5$"
      }
    ],
    "correct": "A",
    "explanation": "* Hai véc tơ trực giao khi và chỉ khi tích vô hướng bằng 0: $\\langle u, v \\rangle = 5 \\cdot m + 4 \\cdot (-5) = 0 \\iff 5 m = 20 \\iff m = 4$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 549,
    "originalId": 549,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của $m$ để hai véc tơ trong $\\mathbb{R}^3$: $u = (1, 5, 3)$ và $v = (m, -1, 1)$ **vuông góc** với nhau:",
    "options": [
      {
        "key": "A",
        "text": "$m = 8$"
      },
      {
        "key": "B",
        "text": "$m = -2$"
      },
      {
        "key": "C",
        "text": "$m = 2$"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "C",
    "explanation": "* Hai véc tơ vuông góc khi $\\langle u, v \\rangle = 1 \\cdot m + (5)(-1) + (3)(1) = 0 \\iff m - 5 + 3 = 0 \\iff m = 2$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 550,
    "originalId": 550,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hệ véc tơ $\\{e_1, e_2, \\dots, e_n\\}$ được gọi là một **hệ trực chuẩn** nếu thỏa mãn điều kiện:",
    "options": [
      {
        "key": "A",
        "text": "$\\|e_i\\| = 0$ với mọi $i$"
      },
      {
        "key": "B",
        "text": "$\\langle e_i, e_j \\rangle = 1$ khi $i = j$ và $\\langle e_i, e_j \\rangle = 0$ khi $i \\neq j$"
      },
      {
        "key": "C",
        "text": "$\\langle e_i, e_j \\rangle = 0$ với mọi $i, j$"
      },
      {
        "key": "D",
        "text": "$\\langle e_i, e_j \\rangle = 1$ với mọi $i, j$"
      }
    ],
    "correct": "B",
    "explanation": "* Hệ trực chuẩn là hệ gồm các véc tơ đôi một vuông góc (trực giao) và đều có chuẩn bằng 1 (chuẩn hóa): $\\langle e_i, e_j \\rangle = \\delta_{ij}$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 551,
    "originalId": 551,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của tham số $m$ để hai véc tơ $u = (2, 3)$ và $v = (m, -2)$ trong $\\mathbb{R}^2$ **trực giao** với nhau:",
    "options": [
      {
        "key": "A",
        "text": "$m = 0$"
      },
      {
        "key": "B",
        "text": "$m = 3$"
      },
      {
        "key": "C",
        "text": "$m = -3$"
      },
      {
        "key": "D",
        "text": "$m = 2$"
      }
    ],
    "correct": "B",
    "explanation": "* Hai véc tơ trực giao khi và chỉ khi tích vô hướng bằng 0: $\\langle u, v \\rangle = 2 \\cdot m + 3 \\cdot (-2) = 0 \\iff 2 m = 6 \\iff m = 3$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 552,
    "originalId": 552,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của tham số $m$ để hai véc tơ $u = (3, 5)$ và $v = (m, -3)$ trong $\\mathbb{R}^2$ **trực giao** với nhau:",
    "options": [
      {
        "key": "A",
        "text": "$m = 5$"
      },
      {
        "key": "B",
        "text": "$m = 0$"
      },
      {
        "key": "C",
        "text": "$m = -5$"
      },
      {
        "key": "D",
        "text": "$m = 3$"
      }
    ],
    "correct": "A",
    "explanation": "* Hai véc tơ trực giao khi và chỉ khi tích vô hướng bằng 0: $\\langle u, v \\rangle = 3 \\cdot m + 5 \\cdot (-3) = 0 \\iff 3 m = 15 \\iff m = 5$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 553,
    "originalId": 553,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của $m$ để hai véc tơ trong $\\mathbb{R}^3$: $u = (1, 2, 3)$ và $v = (m, -1, 1)$ **vuông góc** với nhau:",
    "options": [
      {
        "key": "A",
        "text": "$m = -1$"
      },
      {
        "key": "B",
        "text": "$m = 0$"
      },
      {
        "key": "C",
        "text": "$m = 1$"
      },
      {
        "key": "D",
        "text": "$m = 5$"
      }
    ],
    "correct": "A",
    "explanation": "* Hai véc tơ vuông góc khi $\\langle u, v \\rangle = 1 \\cdot m + (2)(-1) + (3)(1) = 0 \\iff m - 2 + 3 = 0 \\iff m = -1$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 554,
    "originalId": 554,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của tham số $m$ để hai véc tơ $u = (5, 2)$ và $v = (m, -5)$ trong $\\mathbb{R}^2$ **trực giao** với nhau:",
    "options": [
      {
        "key": "A",
        "text": "$m = 5$"
      },
      {
        "key": "B",
        "text": "$m = 2$"
      },
      {
        "key": "C",
        "text": "$m = -2$"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "B",
    "explanation": "* Hai véc tơ trực giao khi và chỉ khi tích vô hướng bằng 0: $\\langle u, v \\rangle = 5 \\cdot m + 2 \\cdot (-5) = 0 \\iff 5 m = 10 \\iff m = 2$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 555,
    "originalId": 555,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của $m$ để hai véc tơ trong $\\mathbb{R}^3$: $u = (1, 3, 2)$ và $v = (m, -1, 1)$ **vuông góc** với nhau:",
    "options": [
      {
        "key": "A",
        "text": "$m = 5$"
      },
      {
        "key": "B",
        "text": "$m = 1$"
      },
      {
        "key": "C",
        "text": "$m = 0$"
      },
      {
        "key": "D",
        "text": "$m = -1$"
      }
    ],
    "correct": "B",
    "explanation": "* Hai véc tơ vuông góc khi $\\langle u, v \\rangle = 1 \\cdot m + (3)(-1) + (2)(1) = 0 \\iff m - 3 + 2 = 0 \\iff m = 1$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 556,
    "originalId": 556,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của tham số $m$ để hai véc tơ $u = (4, 4)$ và $v = (m, -4)$ trong $\\mathbb{R}^2$ **trực giao** với nhau:",
    "options": [
      {
        "key": "A",
        "text": "$m = 4$"
      },
      {
        "key": "B",
        "text": "$m = -4$"
      },
      {
        "key": "C",
        "text": "Phương án 1"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "A",
    "explanation": "* Hai véc tơ trực giao khi và chỉ khi tích vô hướng bằng 0: $\\langle u, v \\rangle = 4 \\cdot m + 4 \\cdot (-4) = 0 \\iff 4 m = 16 \\iff m = 4$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 557,
    "originalId": 557,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của $m$ để hai véc tơ trong $\\mathbb{R}^3$: $u = (1, 1, 2)$ và $v = (m, -1, 1)$ **vuông góc** với nhau:",
    "options": [
      {
        "key": "A",
        "text": "$m = 3$"
      },
      {
        "key": "B",
        "text": "$m = 0$"
      },
      {
        "key": "C",
        "text": "$m = 1$"
      },
      {
        "key": "D",
        "text": "$m = -1$"
      }
    ],
    "correct": "D",
    "explanation": "* Hai véc tơ vuông góc khi $\\langle u, v \\rangle = 1 \\cdot m + (1)(-1) + (2)(1) = 0 \\iff m - 1 + 2 = 0 \\iff m = -1$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 558,
    "originalId": 558,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của tham số $m$ để hai véc tơ $u = (5, 5)$ và $v = (m, -5)$ trong $\\mathbb{R}^2$ **trực giao** với nhau:",
    "options": [
      {
        "key": "A",
        "text": "Phương án 1"
      },
      {
        "key": "B",
        "text": "$m = 5$"
      },
      {
        "key": "C",
        "text": "$m = 0$"
      },
      {
        "key": "D",
        "text": "$m = -5$"
      }
    ],
    "correct": "B",
    "explanation": "* Hai véc tơ trực giao khi và chỉ khi tích vô hướng bằng 0: $\\langle u, v \\rangle = 5 \\cdot m + 5 \\cdot (-5) = 0 \\iff 5 m = 25 \\iff m = 5$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 559,
    "originalId": 559,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của $m$ để hai véc tơ trong $\\mathbb{R}^3$: $u = (1, 5, 1)$ và $v = (m, -1, 1)$ **vuông góc** với nhau:",
    "options": [
      {
        "key": "A",
        "text": "$m = 6$"
      },
      {
        "key": "B",
        "text": "$m = -4$"
      },
      {
        "key": "C",
        "text": "$m = 4$"
      },
      {
        "key": "D",
        "text": "$m = 0$"
      }
    ],
    "correct": "C",
    "explanation": "* Hai véc tơ vuông góc khi $\\langle u, v \\rangle = 1 \\cdot m + (5)(-1) + (1)(1) = 0 \\iff m - 5 + 1 = 0 \\iff m = 4$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 560,
    "originalId": 560,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của tham số $m$ để hai véc tơ $u = (1, 1)$ và $v = (m, -1)$ trong $\\mathbb{R}^2$ **trực giao** với nhau:",
    "options": [
      {
        "key": "A",
        "text": "$m = -1$"
      },
      {
        "key": "B",
        "text": "$m = 0$"
      },
      {
        "key": "C",
        "text": "Phương án 1"
      },
      {
        "key": "D",
        "text": "$m = 1$"
      }
    ],
    "correct": "D",
    "explanation": "* Hai véc tơ trực giao khi và chỉ khi tích vô hướng bằng 0: $\\langle u, v \\rangle = 1 \\cdot m + 1 \\cdot (-1) = 0 \\iff 1 m = 1 \\iff m = 1$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 561,
    "originalId": 561,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 2,
    "typeId": "6.2",
    "typeName": "Trực giao, Trực chuẩn & Quá trình Gram-Schmidt",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm giá trị của $m$ để hai véc tơ trong $\\mathbb{R}^3$: $u = (1, 4, 2)$ và $v = (m, -1, 1)$ **vuông góc** với nhau:",
    "options": [
      {
        "key": "A",
        "text": "$m = -2$"
      },
      {
        "key": "B",
        "text": "$m = 0$"
      },
      {
        "key": "C",
        "text": "$m = 6$"
      },
      {
        "key": "D",
        "text": "$m = 2$"
      }
    ],
    "correct": "D",
    "explanation": "* Hai véc tơ vuông góc khi $\\langle u, v \\rangle = 1 \\cdot m + (4)(-1) + (2)(1) = 0 \\iff m - 4 + 2 = 0 \\iff m = 2$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 562,
    "originalId": 5,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho dạng toàn phương $Q: \\mathbb{R}^3 \\to \\mathbb{R}$ xác định bởi:\n$$Q(x, y, z) = x^2 + 2y^2 - z^2 + 2xy + 2yz$$\nMa trận của $Q$ trong cơ sở chính tắc của $\\mathbb{R}^3$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 1 & 1 & 0 \\\\ 0 & 2 & 1 \\\\ 0 & 0 & -1 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 1 & 2 & 0 \\\\ 2 & 2 & 2 \\\\ 0 & 2 & -1 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 1 & 1 & 0 \\\\ 1 & 2 & 1 \\\\ 0 & 1 & -1 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 1 & 2 & 0 \\\\ 0 & 2 & 2 \\\\ 0 & 0 & -1 \\end{bmatrix}$"
      }
    ],
    "correct": "C",
    "explanation": "* **Quy tắc lập ma trận đối xứng của dạng toàn phương:**\n  * Đường chéo chính: hệ số của $x^2, y^2, z^2 \\implies a_{11} = 1, a_{22} = 2, a_{33} = -1$.\n  * Hệ số $xy = 2 \\implies a_{12} = a_{21} = 1$.\n  * Hệ số $yz = 2 \\implies a_{23} = a_{32} = 1$.\n  * Không có $xz \\implies a_{13} = a_{31} = 0$.\n* Ma trận đối xứng thu được:\n  $$A = \\begin{bmatrix} 1 & 1 & 0 \\\\ 1 & 2 & 1 \\\\ 0 & 1 & -1 \\end{bmatrix}$$\n* **Chọn đáp án: C.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 563,
    "originalId": 29,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "de_ontap",
    "examName": "Đề ôn tập PTIT • 80 phút",
    "question": "Cho dạng toàn phương $Q: \\mathbb{R}^3 \\to \\mathbb{R}$ xác định bởi:\n$$Q(x, y, z) = 4x^2 + 3y^2 - 8z^2 - 8xy + 8xz - 4yz$$\nTìm một dạng chính tắc của dạng toàn phương trên. Khẳng định nào đúng?",
    "options": [
      {
        "key": "A",
        "text": "$Q(x,y,z) = 4X^2 - Y^2 - 8Z^2$"
      },
      {
        "key": "B",
        "text": "$Q(x,y,z) = 4X^2 + Y^2 + 8Z^2$"
      },
      {
        "key": "C",
        "text": "$Q(x,y,z) = X^2 + Y^2 - Z^2$"
      },
      {
        "key": "D",
        "text": "$Q(x,y,z) = 4X^2 + Y^2 - 8Z^2$"
      }
    ],
    "correct": "A",
    "explanation": "* Áp dụng phương pháp Lagrange làm xuất hiện bình phương đủ:\n  $$Q(x,y,z) = 4x^2 - 8x(y - z) + 3y^2 - 8z^2 - 4yz$$\n  $$= 4[x^2 - 2x(y - z) + (y - z)^2] - 4(y - z)^2 + 3y^2 - 8z^2 - 4yz$$\n  $$= 4(x - y + z)^2 - 4(y^2 - 2yz + z^2) + 3y^2 - 8z^2 - 4yz$$\n  $$= 4(x - y + z)^2 - y^2 + 4yz - 12z^2$$\n  $$= 4(x - y + z)^2 - (y^2 - 4yz + 4z^2) - 8z^2$$\n  $$= 4(x - y + z)^2 - (y - 2z)^2 - 8z^2$$\n* Đặt phép biến đổi tọa độ không suy biến:\n  $$\\begin{cases} X = x - y + z \\\\ Y = y - 2z \\\\ Z = z \\end{cases}$$\n* Khi đó ta thu được dạng chính tắc:\n  $$Q(x,y,z) = 4X^2 - Y^2 - 8Z^2$$\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 564,
    "originalId": 564,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng chính tắc, độ dài (chuẩn) của véc tơ $u = (2, -1, 2)$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\sqrt{5}$"
      },
      {
        "key": "B",
        "text": "$9$"
      },
      {
        "key": "C",
        "text": "$3$"
      },
      {
        "key": "D",
        "text": "$5$"
      }
    ],
    "correct": "C",
    "explanation": "Độ dài chuẩn của véc tơ $u$ được tính bởi $\\|u\\| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 565,
    "originalId": 565,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Góc $\\theta$ giữa hai véc tơ $u = (1, 1, 0)$ và $v = (0, 1, 1)$ trong $\\mathbb{R}^3$ (với tích vô hướng chính tắc) bằng:",
    "options": [
      {
        "key": "A",
        "text": "$90^\\circ$ (hay $\\pi/2$)"
      },
      {
        "key": "B",
        "text": "$30^\\circ$ (hay $\\pi/6$)"
      },
      {
        "key": "C",
        "text": "$45^\\circ$ (hay $\\pi/4$)"
      },
      {
        "key": "D",
        "text": "$60^\\circ$ (hay $\\pi/3$)"
      }
    ],
    "correct": "D",
    "explanation": "Ta có $\\langle u, v \\rangle = 1 \\cdot 0 + 1 \\cdot 1 + 0 \\cdot 1 = 1$. Độ dài $\\|u\\| = \\sqrt{1^2 + 1^2 + 0} = \\sqrt{2}$ và $\\|v\\| = \\sqrt{0 + 1^2 + 1^2} = \\sqrt{2}$. Do đó $\\cos\\theta = \\dfrac{\\langle u, v \\rangle}{\\|u\\| \\|v\\|} = \\dfrac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\dfrac{1}{2} \\Rightarrow \\theta = 60^\\circ$.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 566,
    "originalId": 566,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Ma trận đối xứng $A$ tương ứng với dạng toàn phương $Q(x, y) = 3x^2 - 4xy + 5y^2$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} -2 & 3 \\\\ 5 & -2 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 3 & -4 \\\\ -4 & 5 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 3 & -2 \\\\ -2 & 5 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 3 & 4 \\\\ 4 & 5 \\end{bmatrix}$"
      }
    ],
    "correct": "C",
    "explanation": "Hệ số của $x^2$ là $a_{11} = 3$, hệ số của $y^2$ là $a_{22} = 5$. Hệ số của $xy$ là $-4$, chia đều cho hai phần tử đối xứng ngoài đường chéo: $a_{12} = a_{21} = -4/2 = -2$. Vậy ma trận là $\\begin{bmatrix} 3 & -2 \\\\ -2 & 5 \\end{bmatrix}$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 567,
    "originalId": 567,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Đưa dạng toàn phương $Q(x_1, x_2) = x_1^2 + 4x_1 x_2 + 3x_2^2$ về dạng chính tắc bằng phương pháp Lagrange:",
    "options": [
      {
        "key": "A",
        "text": "$(x_1 + x_2)^2 + 2x_2^2$"
      },
      {
        "key": "B",
        "text": "$(x_1 + 2x_2)^2 + x_2^2$"
      },
      {
        "key": "C",
        "text": "$(x_1 - 2x_2)^2 - x_2^2$"
      },
      {
        "key": "D",
        "text": "$(x_1 + 2x_2)^2 - x_2^2$"
      }
    ],
    "correct": "D",
    "explanation": "Nhóm chứa $x_1$: $x_1^2 + 4x_1 x_2 = (x_1 + 2x_2)^2 - 4x_2^2$. Thay vào biểu thức ta được: $Q = (x_1 + 2x_2)^2 - 4x_2^2 + 3x_2^2 = (x_1 + 2x_2)^2 - x_2^2$.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 568,
    "originalId": 568,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Dạng toàn phương $Q(x, y, z) = x^2 + 2y^2 + 3z^2$ có ma trận chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 2 & 0 \\\\ 3 & 0 & 3 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 3 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 2 & 0 \\\\ 3 & 0 & 0 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 1 & 1 & 0 \\\\ 1 & 2 & 1 \\\\ 0 & 1 & 3 \\end{bmatrix}$"
      }
    ],
    "correct": "B",
    "explanation": "Dạng này không có các tích chéo ($xy, yz, xz = 0$). Các phần tử đường chéo là hệ số các biến bình phương: $1, 2, 3$. Vậy ma trận là ma trận đường chéo $\\operatorname{diag}(1, 2, 3)$.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 569,
    "originalId": 569,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hạng của dạng toàn phương $Q$ có ma trận $A$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "Số chiều của không gian"
      },
      {
        "key": "B",
        "text": "$p - q$"
      },
      {
        "key": "C",
        "text": "$p + q$ (tổng chỉ số quán tính dương và âm)"
      },
      {
        "key": "D",
        "text": "$p \\cdot q$"
      }
    ],
    "correct": "C",
    "explanation": "Hạng của dạng toàn phương chính là hạng của ma trận $A$ của nó, và trong dạng chính tắc có đúng $p$ hệ số $+1$ và $q$ hệ số $-1$ (các phần tử còn lại bằng $0$). Do đó $r(A) = p + q$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 570,
    "originalId": 570,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Mọi dạng toàn phương $Q(x)$ xác định trên $\\mathbb{R}^n$ đều có thể đưa về dạng chính tắc bằng một:",
    "options": [
      {
        "key": "A",
        "text": "Phép chiếu"
      },
      {
        "key": "B",
        "text": "Phép biến đổi trực giao"
      },
      {
        "key": "C",
        "text": "Phép tịnh tiến tọa độ"
      },
      {
        "key": "D",
        "text": "Phép nhân ma trận suy biến"
      }
    ],
    "correct": "B",
    "explanation": "Theo Định lý phổ, vì ma trận $A$ của dạng toàn phương luôn đối xứng thực, nó luôn chéo hóa trực giao được bởi một ma trận trực giao $P$ ($P^T P = I$). Đổi biến $x = P y$ đưa $Q$ về dạng chính tắc.\n\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 571,
    "originalId": 571,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Ma trận của dạng toàn phương $Q(x_1, x_2) = 2x_1^2 + 6x_1 x_2 - 5x_2^2$ là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 4 & 3 \\\\ 3 & -10 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 2 & 3 \\\\ 3 & -5 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 2 & 6 \\\\ 6 & -5 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 2 & 6 \\\\ 0 & -5 \\end{bmatrix}$"
      }
    ],
    "correct": "B",
    "explanation": "* **Quy tắc lập ma trận đối xứng của dạng toàn phương:**\n  * Phần tử đường chéo $a_{ii}$ là hệ số của $x_i^2$:\n    * $a_{11} = 2$.\n    * $a_{22} = -5$.\n  * Phần tử ngoài đường chéo $a_{12} = a_{21} = \\dfrac{1}{2} \\times$ (hệ số của $x_1 x_2$):\n    * $a_{12} = a_{21} = \\dfrac{6}{2} = 3$.\n  * Ghép lại: $A = \\begin{bmatrix} 2 & 3 \\\\ 3 & -5 \\end{bmatrix}$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 572,
    "originalId": 572,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Dạng toàn phương nào dưới đây là **không xác định dấu (đổi dấu)**?",
    "options": [
      {
        "key": "A",
        "text": "$Q(x_1, x_2) = x_1^2 + 2x_2^2$"
      },
      {
        "key": "B",
        "text": "$Q(x_1, x_2) = (x_1 + x_2)^2$"
      },
      {
        "key": "C",
        "text": "$Q(x_1, x_2) = -x_1^2 - 4x_2^2$"
      },
      {
        "key": "D",
        "text": "$Q(x_1, x_2) = x_1^2 - 3x_2^2$"
      }
    ],
    "correct": "D",
    "explanation": "* **Dấu hiệu nhận biết dạng toàn phương không xác định dấu:**\n  * Dạng toàn phương có thể nhận cả giá trị dương lẫn giá trị âm:\n    * Chọn $(1, 0) \\implies Q(1, 0) = 1 > 0$.\n    * Chọn $(0, 1) \\implies Q(0, 1) = -3 < 0$.\n  * Do $Q$ nhận cả giá trị dương và âm nên $Q$ là dạng toàn phương **không xác định dấu**.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 573,
    "originalId": 573,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Hạng của dạng toàn phương $Q$ bằng:",
    "options": [
      {
        "key": "A",
        "text": "Hạng của ma trận đối xứng biểu diễn $Q$"
      },
      {
        "key": "B",
        "text": "Chỉ số quán tính âm $q$"
      },
      {
        "key": "C",
        "text": "Chỉ số quán tính dương $p$"
      },
      {
        "key": "D",
        "text": "Số biến của dạng toàn phương"
      }
    ],
    "correct": "A",
    "explanation": "* **Hạng của dạng toàn phương:**\n  * Hạng của dạng toàn phương được định nghĩa là hạng của ma trận đối xứng biểu diễn nó trong cơ sở bất kỳ: $r(Q) = r(A)$.\n  * Trong dạng chính tắc $c_1 y_1^2 + \\dots + c_r y_r^2$, hạng $r(Q) = p + q$ (tổng số hệ số khác 0).\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 574,
    "originalId": 574,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm ma trận đối xứng của dạng toàn phương $Q(x_1, x_2, x_3) = x_1^2 + 4x_2^2 - 2x_3^2 - 4x_1 x_2 + 6x_2 x_3$:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 1 & -2 & 0 \\\\ -2 & 4 & 3 \\\\ 0 & 3 & -2 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 1 & 2 & 0 \\\\ 2 & 4 & 3 \\\\ 0 & 3 & -2 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 1 & -4 & 0 \\\\ -4 & 4 & 6 \\\\ 0 & 6 & -2 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 1 & -2 & 0 \\\\ 0 & 4 & 3 \\\\ 0 & 0 & -2 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* **Quy tắc phân bổ hệ số:**\n  * Đường chéo chính: $a_{11} = 1, a_{22} = 4, a_{33} = -2$.\n  * Hệ số $x_1 x_2 = -4 \\implies a_{12} = a_{21} = -2$.\n  * Hệ số $x_2 x_3 = 6 \\implies a_{23} = a_{32} = 3$.\n  * Không có $x_1 x_3 \\implies a_{13} = a_{31} = 0$.\n  * Ma trận thu được là phương án A.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 575,
    "originalId": 575,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Dạng chính tắc của dạng toàn phương $Q$ chỉ chứa tích hai biến mà không có bình phương: $Q(x_1, x_2) = 4x_1 x_2$. Dạng chính tắc của nó là:",
    "options": [
      {
        "key": "A",
        "text": "$4y_1^2$"
      },
      {
        "key": "B",
        "text": "$y_1^2 - y_2^2$ với phép đổi biến thích hợp"
      },
      {
        "key": "C",
        "text": "$y_1^2 + y_2^2$"
      },
      {
        "key": "D",
        "text": "$-y_1^2 - y_2^2$"
      }
    ],
    "correct": "B",
    "explanation": "* **Kỹ thuật đổi biến khi không có số hạng bình phương:**\n  * Đặt $\\begin{cases} x_1 = y_1 + y_2 \\\\ x_2 = y_1 - y_2 \\end{cases}$.\n  * Khi đó:\n    $$Q = 4x_1 x_2 = 4(y_1 + y_2)(y_1 - y_2) = 4(y_1^2 - y_2^2) = (2y_1)^2 - (2y_2)^2$$\n  * Dạng chính tắc có 1 hệ số dương và 1 hệ số âm, do đó có dạng $u_1^2 - u_2^2$.\n  * Dạng toàn phương này không xác định dấu (hạng 2, $p = 1, q = 1$).\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 576,
    "originalId": 576,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho dạng toàn phương $Q(x_1, x_2) = 5x_1^2 + 6x_1 x_2 + 2x_2^2$ trên $\\mathbb{R}^2$. Ma trận đối xứng biểu diễn $Q$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 5 & 3 \\\\ 3 & 2 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 3 & 5 \\\\ 2 & 3 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 5 & 6 \\\\ 6 & 2 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 5 & 6 \\\\ 0 & 2 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* Phần tử trên đường chéo chính là hệ số của các bình phương $a_{11} = 5, a_{22} = 2$. Phần tử ngoài đường chéo là một nửa hệ số của số hạng chéo: $a_{12} = a_{21} = \\frac{6}{2} = 3$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 577,
    "originalId": 577,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Ma trận của dạng toàn phương trong một cơ sở luôn luôn có tính chất nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Luôn là ma trận tam giác"
      },
      {
        "key": "B",
        "text": "Luôn là ma trận phản đối xứng ($A = -A^T$)"
      },
      {
        "key": "C",
        "text": "Luôn là ma trận đối xứng ($A = A^T$)"
      },
      {
        "key": "D",
        "text": "Luôn có định thức dương"
      }
    ],
    "correct": "C",
    "explanation": "* Theo quy ước chuẩn của đại số tuyến tính, ma trận biểu diễn dạng toàn phương luôn được chọn là ma trận đối xứng ($a_{ij} = a_{ji}$).\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 578,
    "originalId": 578,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Khi đổi cơ sở với ma trận chuyển $C$, ma trận $A$ của dạng toàn phương chuyển thành ma trận $A'$ theo công thức nào?",
    "options": [
      {
        "key": "A",
        "text": "$A' = C A C^T$"
      },
      {
        "key": "B",
        "text": "$A' = C^{-1} A C$"
      },
      {
        "key": "C",
        "text": "$A' = C A C^{-1}$"
      },
      {
        "key": "D",
        "text": "$A' = C^T A C$"
      }
    ],
    "correct": "D",
    "explanation": "* Công thức biến đổi ma trận của dạng toàn phương khi đổi cơ sở là quan hệ tương đẳng (congruent): $A' = C^T A C$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 579,
    "originalId": 579,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho dạng toàn phương $Q(x_1, x_2) = 5x_1^2 + 10x_1 x_2 + 4x_2^2$ trên $\\mathbb{R}^2$. Ma trận đối xứng biểu diễn $Q$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 5 & 10 \\\\ 0 & 4 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 5 & 10 \\\\ 10 & 4 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 5 & 5 \\\\ 4 & 5 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 5 & 5 \\\\ 5 & 4 \\end{bmatrix}$"
      }
    ],
    "correct": "D",
    "explanation": "* Phần tử trên đường chéo chính là hệ số của các bình phương $a_{11} = 5, a_{22} = 4$. Phần tử ngoài đường chéo là một nửa hệ số của số hạng chéo: $a_{12} = a_{21} = \\frac{10}{2} = 5$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 580,
    "originalId": 580,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho dạng toàn phương $Q(x_1, x_2) = 4x_1^2 + 6x_1 x_2 + 5x_2^2$ trên $\\mathbb{R}^2$. Ma trận đối xứng biểu diễn $Q$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 4 & 6 \\\\ 0 & 5 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 4 & 6 \\\\ 6 & 5 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 4 & 3 \\\\ 3 & 5 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 3 & 4 \\\\ 5 & 3 \\end{bmatrix}$"
      }
    ],
    "correct": "C",
    "explanation": "* Phần tử trên đường chéo chính là hệ số của các bình phương $a_{11} = 4, a_{22} = 5$. Phần tử ngoài đường chéo là một nửa hệ số của số hạng chéo: $a_{12} = a_{21} = \\frac{6}{2} = 3$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 581,
    "originalId": 581,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho dạng toàn phương $Q(x_1, x_2) = 5x_1^2 + 4x_1 x_2 + 3x_2^2$ trên $\\mathbb{R}^2$. Ma trận đối xứng biểu diễn $Q$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 5 & 4 \\\\ 4 & 3 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 5 & 4 \\\\ 0 & 3 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 5 & 2 \\\\ 2 & 3 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 2 & 5 \\\\ 3 & 2 \\end{bmatrix}$"
      }
    ],
    "correct": "C",
    "explanation": "* Phần tử trên đường chéo chính là hệ số của các bình phương $a_{11} = 5, a_{22} = 3$. Phần tử ngoài đường chéo là một nửa hệ số của số hạng chéo: $a_{12} = a_{21} = \\frac{4}{2} = 2$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 582,
    "originalId": 582,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho dạng toàn phương $Q(x_1, x_2) = 3x_1^2 + 10x_1 x_2 + 6x_2^2$ trên $\\mathbb{R}^2$. Ma trận đối xứng biểu diễn $Q$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 3 & 5 \\\\ 5 & 6 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 5 & 3 \\\\ 6 & 5 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 3 & 10 \\\\ 10 & 6 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 3 & 10 \\\\ 0 & 6 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* Phần tử trên đường chéo chính là hệ số của các bình phương $a_{11} = 3, a_{22} = 6$. Phần tử ngoài đường chéo là một nửa hệ số của số hạng chéo: $a_{12} = a_{21} = \\frac{10}{2} = 5$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 583,
    "originalId": 583,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho dạng toàn phương $Q(x_1, x_2) = 6x_1^2 + 4x_1 x_2 + 1x_2^2$ trên $\\mathbb{R}^2$. Ma trận đối xứng biểu diễn $Q$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 6 & 4 \\\\ 4 & 1 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 2 & 6 \\\\ 1 & 2 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 6 & 2 \\\\ 2 & 1 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 6 & 4 \\\\ 0 & 1 \\end{bmatrix}$"
      }
    ],
    "correct": "C",
    "explanation": "* Phần tử trên đường chéo chính là hệ số của các bình phương $a_{11} = 6, a_{22} = 1$. Phần tử ngoài đường chéo là một nửa hệ số của số hạng chéo: $a_{12} = a_{21} = \\frac{4}{2} = 2$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 584,
    "originalId": 584,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho dạng toàn phương $Q(x_1, x_2) = 5x_1^2 + 6x_1 x_2 + 4x_2^2$ trên $\\mathbb{R}^2$. Ma trận đối xứng biểu diễn $Q$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 3 & 5 \\\\ 4 & 3 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 5 & 3 \\\\ 3 & 4 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 5 & 6 \\\\ 0 & 4 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 5 & 6 \\\\ 6 & 4 \\end{bmatrix}$"
      }
    ],
    "correct": "B",
    "explanation": "* Phần tử trên đường chéo chính là hệ số của các bình phương $a_{11} = 5, a_{22} = 4$. Phần tử ngoài đường chéo là một nửa hệ số của số hạng chéo: $a_{12} = a_{21} = \\frac{6}{2} = 3$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 585,
    "originalId": 585,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho dạng toàn phương $Q(x_1, x_2) = 4x_1^2 + 8x_1 x_2 + 5x_2^2$ trên $\\mathbb{R}^2$. Ma trận đối xứng biểu diễn $Q$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 4 & 8 \\\\ 0 & 5 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 4 & 8 \\\\ 8 & 5 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 4 & 4 \\\\ 4 & 5 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 4 & 4 \\\\ 5 & 4 \\end{bmatrix}$"
      }
    ],
    "correct": "C",
    "explanation": "* Phần tử trên đường chéo chính là hệ số của các bình phương $a_{11} = 4, a_{22} = 5$. Phần tử ngoài đường chéo là một nửa hệ số của số hạng chéo: $a_{12} = a_{21} = \\frac{8}{2} = 4$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 586,
    "originalId": 586,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho dạng toàn phương $Q(x_1, x_2) = 2x_1^2 + 10x_1 x_2 + 3x_2^2$ trên $\\mathbb{R}^2$. Ma trận đối xứng biểu diễn $Q$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 2 & 5 \\\\ 5 & 3 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 5 & 2 \\\\ 3 & 5 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 2 & 10 \\\\ 0 & 3 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 2 & 10 \\\\ 10 & 3 \\end{bmatrix}$"
      }
    ],
    "correct": "A",
    "explanation": "* Phần tử trên đường chéo chính là hệ số của các bình phương $a_{11} = 2, a_{22} = 3$. Phần tử ngoài đường chéo là một nửa hệ số của số hạng chéo: $a_{12} = a_{21} = \\frac{10}{2} = 5$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 587,
    "originalId": 587,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 3,
    "typeId": "6.3",
    "typeName": "Dạng toàn phương & Thuật toán Lagrange",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho dạng toàn phương $Q(x_1, x_2) = 6x_1^2 + 6x_1 x_2 + 1x_2^2$ trên $\\mathbb{R}^2$. Ma trận đối xứng biểu diễn $Q$ trong cơ sở chính tắc là:",
    "options": [
      {
        "key": "A",
        "text": "$\\begin{bmatrix} 6 & 6 \\\\ 6 & 1 \\end{bmatrix}$"
      },
      {
        "key": "B",
        "text": "$\\begin{bmatrix} 3 & 6 \\\\ 1 & 3 \\end{bmatrix}$"
      },
      {
        "key": "C",
        "text": "$\\begin{bmatrix} 6 & 3 \\\\ 3 & 1 \\end{bmatrix}$"
      },
      {
        "key": "D",
        "text": "$\\begin{bmatrix} 6 & 6 \\\\ 0 & 1 \\end{bmatrix}$"
      }
    ],
    "correct": "C",
    "explanation": "* Phần tử trên đường chéo chính là hệ số của các bình phương $a_{11} = 6, a_{22} = 1$. Phần tử ngoài đường chéo là một nửa hệ số của số hạng chéo: $a_{12} = a_{21} = \\frac{6}{2} = 3$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 588,
    "originalId": 4,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho dạng toàn phương $Q: \\mathbb{R}^3 \\to \\mathbb{R}$ xác định bởi:\n$$Q(x, y, z) = x^2 + 2y^2 - z^2 + 2xy + 2yz$$\nKý hiệu $(p, q)$ là cặp chỉ số quán tính dương và âm của $Q$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$p = 1, \\, q = 2$"
      },
      {
        "key": "B",
        "text": "$p = 0, \\, q = 3$"
      },
      {
        "key": "C",
        "text": "$p = 1, \\, q = 1$"
      },
      {
        "key": "D",
        "text": "$p = 2, \\, q = 1$"
      }
    ],
    "correct": "D",
    "explanation": "* **Phương pháp Lagrange đưa về dạng chính tắc:**\n  $$Q = (x^2 + 2xy + y^2) + y^2 + 2yz - z^2 = (x + y)^2 + (y^2 + 2yz + z^2) - 2z^2 = (x + y)^2 + (y + z)^2 - 2z^2$$\n* Đặt $\\begin{cases} X = x + y \\\\ Y = y + z \\\\ Z = z \\end{cases}$, ta thu được dạng chính tắc:\n  $$Q = X^2 + Y^2 - 2Z^2$$\n* Có $2$ hệ số dương ($+1, +1$) và $1$ hệ số âm ($-2$).\n* Do đó chỉ số quán tính dương $p = 2$ và chỉ số quán tính âm $q = 1$.\n* **Chọn đáp án: D.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 589,
    "originalId": 18,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "de101",
    "examName": "Đề minh họa 101 • PTIT",
    "question": "Cho dạng song tuyến tính $\\eta: \\mathbb{R}^2 \\times \\mathbb{R}^2 \\to \\mathbb{R}$ xác định bởi:\n$$\\eta(u, v) = x_1 y_1 - 3x_1 y_2 + x_2 y_1 + 4x_2 y_2$$\ntrong đó $u = (x_1, x_2), v = (y_1, y_2) \\in \\mathbb{R}^2$. Khẳng định nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "$\\eta$ xác định dương nhưng không đối xứng"
      },
      {
        "key": "B",
        "text": "$\\eta$ đối xứng và xác định dương"
      },
      {
        "key": "C",
        "text": "$\\eta$ không đối xứng cũng không xác định dương"
      },
      {
        "key": "D",
        "text": "$\\eta$ đối xứng nhưng không xác định dương"
      }
    ],
    "correct": "A",
    "explanation": "* **Tính đối xứng:** Ma trận biểu diễn của $\\eta$ là $A = \\begin{bmatrix} 1 & -3 \\\\ 1 & 4 \\end{bmatrix}$. Vì $a_{12} = -3 \\neq a_{21} = 1$ nên $\\eta$ **không đối xứng**.\n* **Tính xác định dương:** Với mọi $u = (x_1, x_2) \\neq (0, 0)$:\n  $$\\eta(u, u) = x_1^2 - 3x_1 x_2 + x_2 x_1 + 4x_2^2 = x_1^2 - 2x_1 x_2 + 4x_2^2 = (x_1 - x_2)^2 + 3x_2^2 > 0$$\n  Do đó $\\eta$ là **xác định dương**.\n* Kết luận: $\\eta$ xác định dương nhưng không đối xứng.\n* **Chọn đáp án: A.**",
    "isOriginal": true,
    "origin": "original"
  },
  {
    "id": 590,
    "originalId": 590,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Dạng toàn phương $Q(x_1, x_2) = ax_1^2 + 2bx_1 x_2 + cx_2^2$ là **xác định dương** khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$a < 0$ và $ac - b^2 > 0$"
      },
      {
        "key": "B",
        "text": "$a > 0$ và $c > 0$"
      },
      {
        "key": "C",
        "text": "$a > 0$ và $ac - b^2 > 0$"
      },
      {
        "key": "D",
        "text": "$a > 0$ và $ac - b^2 < 0$"
      }
    ],
    "correct": "C",
    "explanation": "Theo tiêu chuẩn Sylvester: Ma trận $A = \\begin{bmatrix} a & b \\\\ b & c \\end{bmatrix}$ xác định dương khi các định thức con chính dương: $\\Delta_1 = a > 0$ và $\\Delta_2 = \\det A = ac - b^2 > 0$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 591,
    "originalId": 591,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Dạng toàn phương nào sau đây là **xác định âm**?",
    "options": [
      {
        "key": "A",
        "text": "$Q(x, y) = -(x - y)^2$"
      },
      {
        "key": "B",
        "text": "$Q(x, y) = -x^2 + 2y^2$"
      },
      {
        "key": "C",
        "text": "$Q(x, y) = -x^2 - 2y^2$"
      },
      {
        "key": "D",
        "text": "$Q(x, y) = x^2 + 2y^2$"
      }
    ],
    "correct": "C",
    "explanation": "$Q(x, y) = -x^2 - 2y^2 = -(x^2 + 2y^2) < 0$ với mọi $(x, y) \\neq (0, 0)$. Do đó $Q$ xác định âm. Phương án D chỉ nửa xác định âm (bằng 0 khi $x=y$).\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 592,
    "originalId": 592,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Theo tiêu chuẩn Sylvester, dạng toàn phương 3 biến có ma trận $A$ là **xác định âm** khi và chỉ khi các định thức con chính thỏa mãn:",
    "options": [
      {
        "key": "A",
        "text": "$\\Delta_1 < 0, \\, \\Delta_2 < 0, \\, \\Delta_3 < 0$"
      },
      {
        "key": "B",
        "text": "$\\Delta_1 > 0, \\, \\Delta_2 > 0, \\, \\Delta_3 > 0$"
      },
      {
        "key": "C",
        "text": "$\\Delta_1 > 0, \\, \\Delta_2 < 0, \\, \\Delta_3 > 0$"
      },
      {
        "key": "D",
        "text": "$\\Delta_1 < 0, \\, \\Delta_2 > 0, \\, \\Delta_3 < 0$"
      }
    ],
    "correct": "D",
    "explanation": "Tiêu chuẩn Sylvester cho ma trận xác định âm đòi hỏi các định thức con chính đan dấu, bắt đầu bằng dấu âm: $(-1)^k \\Delta_k > 0$, tức là $\\Delta_1 < 0, \\Delta_2 > 0, \\Delta_3 < 0$.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 593,
    "originalId": 593,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm điều kiện của tham số $m$ để dạng toàn phương $Q(x, y) = x^2 + 2mxy + 4y^2$ xác định dương:",
    "options": [
      {
        "key": "A",
        "text": "$-4 < m < 4$"
      },
      {
        "key": "B",
        "text": "$m = 2$"
      },
      {
        "key": "C",
        "text": "$-2 < m < 2$"
      },
      {
        "key": "D",
        "text": "$m > 2$ hoặc $m < -2$"
      }
    ],
    "correct": "C",
    "explanation": "Ma trận $A = \\begin{bmatrix} 1 & m \\\\ m & 4 \\end{bmatrix}$. Ta có $\\Delta_1 = 1 > 0$, $\\Delta_2 = 4 - m^2 > 0 \\Leftrightarrow m^2 < 4 \\Leftrightarrow -2 < m < 2$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 594,
    "originalId": 594,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Trong câu hỏi trên, cặp chỉ số quán tính $(p, q)$ (dương, âm) của dạng toàn phương $Q$ là:",
    "options": [
      {
        "key": "A",
        "text": "$(0, 2)$"
      },
      {
        "key": "B",
        "text": "$(2, 0)$"
      },
      {
        "key": "C",
        "text": "$(1, 1)$"
      },
      {
        "key": "D",
        "text": "$(1, 0)$"
      }
    ],
    "correct": "C",
    "explanation": "Dạng chính tắc là $y_1^2 - y_2^2$ có 1 bình phương mang hệ số dương ($+1$) và 1 bình phương mang hệ số âm ($-1$). Do đó $p = 1, q = 1$.\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 595,
    "originalId": 595,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Dạng toàn phương có dạng chính tắc $y_1^2 - y_2^2$ được xếp vào loại:",
    "options": [
      {
        "key": "A",
        "text": "Xác định âm"
      },
      {
        "key": "B",
        "text": "Nửa xác định dương"
      },
      {
        "key": "C",
        "text": "Không xác định dấu (indefinite)"
      },
      {
        "key": "D",
        "text": "Xác định dương"
      }
    ],
    "correct": "C",
    "explanation": "Khi cả chỉ số quán tính dương $p > 0$ và chỉ số quán tính âm $q > 0$, dạng toàn phương có thể nhận cả giá trị dương lẫn âm tùy thuộc véc tơ đầu vào. Do đó nó là dạng không xác định dấu (indefinite).\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 596,
    "originalId": 596,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Định lý luật quán tính Jacobi - Sylvester khẳng định rằng:",
    "options": [
      {
        "key": "A",
        "text": "Mọi dạng toàn phương đều có $p = q$"
      },
      {
        "key": "B",
        "text": "Chỉ số quán tính bằng định thức của ma trận"
      },
      {
        "key": "C",
        "text": "Mọi dạng toàn phương đều xác định dương"
      },
      {
        "key": "D",
        "text": "Cặp chỉ số quán tính $(p, q)$ không phụ thuộc vào phép biến đổi tọa độ không suy biến đưa về dạng chính tắc"
      }
    ],
    "correct": "D",
    "explanation": "Định lý luật quán tính của Sylvester phát biểu rằng: Số các hệ số dương ($p$) và số các hệ số âm ($q$) trong dạng chính tắc của một dạng toàn phương thực là các bất biến, không phụ thuộc vào phương pháp biến đổi tọa độ không suy biến được chọn.\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 597,
    "originalId": 597,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Một ma trận vuông đối xứng $A$ xác định dương khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "Vết của $A$ dương"
      },
      {
        "key": "B",
        "text": "Định thức của $A$ dương"
      },
      {
        "key": "C",
        "text": "Tất cả các giá trị riêng của $A$ đều âm"
      },
      {
        "key": "D",
        "text": "Tất cả các giá trị riêng của $A$ đều dương"
      }
    ],
    "correct": "D",
    "explanation": "Đối với ma trận đối xứng thực, ma trận xác định dương khi và chỉ khi tất cả các giá trị riêng của nó đều lớn hơn $0$ ($\\lambda_i > 0, \\forall i$).\n\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 598,
    "originalId": 598,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Dạng toàn phương $Q(x_1, x_2, x_3) = x_1^2 + x_2^2$ trong $\\mathbb{R}^3$ là:",
    "options": [
      {
        "key": "A",
        "text": "Xác định dương"
      },
      {
        "key": "B",
        "text": "Không xác định dấu"
      },
      {
        "key": "C",
        "text": "Nửa xác định dương (bán xác định dương)"
      },
      {
        "key": "D",
        "text": "Xác định âm"
      }
    ],
    "correct": "C",
    "explanation": "Ta có $Q \\ge 0$ với mọi $(x_1, x_2, x_3)$, nhưng khi lấy $x_1 = 0, x_2 = 0, x_3 = 1 \\neq 0$ thì $Q = 0$. Vì tồn tại véc tơ khác không có $Q = 0$ nên $Q$ không xác định dương nghiêm ngặt mà là nửa xác định dương (bán xác định dương).\n\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 599,
    "originalId": 599,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Theo tiêu chuẩn Sylvester, dạng toàn phương 3 biến có ma trận đối xứng $A$ là **xác định dương** khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$\\Delta_1 < 0, \\, \\Delta_2 > 0, \\, \\Delta_3 < 0$"
      },
      {
        "key": "B",
        "text": "$\\Delta_1 > 0, \\, \\Delta_2 > 0, \\, \\Delta_3 > 0$"
      },
      {
        "key": "C",
        "text": "$\\Delta_3 = \\det A > 0$"
      },
      {
        "key": "D",
        "text": "$\\Delta_1 > 0, \\, \\Delta_2 < 0, \\, \\Delta_3 > 0$"
      }
    ],
    "correct": "B",
    "explanation": "* **Tiêu chuẩn Sylvester đối với dạng toàn phương xác định dương:**\n  * Dạng toàn phương xác định dương khi và chỉ khi tất cả các định thức con chính góc đều **dương**:\n    $$\\Delta_1 > 0, \\quad \\Delta_2 > 0, \\quad \\Delta_3 > 0$$\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 600,
    "originalId": 600,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Theo tiêu chuẩn Sylvester, dạng toàn phương 3 biến có ma trận đối xứng $A$ là **xác định âm** khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "text": "$\\Delta_1 < 0, \\, \\Delta_2 < 0, \\, \\Delta_3 < 0$"
      },
      {
        "key": "B",
        "text": "$\\Delta_1 < 0, \\, \\Delta_2 > 0, \\, \\Delta_3 < 0$"
      },
      {
        "key": "C",
        "text": "$\\Delta_1 > 0, \\, \\Delta_2 > 0, \\, \\Delta_3 > 0$"
      },
      {
        "key": "D",
        "text": "$\\Delta_3 = \\det A < 0$"
      }
    ],
    "correct": "B",
    "explanation": "* **Tiêu chuẩn Sylvester đối với dạng toàn phương xác định âm:**\n  * Dạng toàn phương xác định âm khi và chỉ khi các định thức con chính góc **đổi dấu xen kẽ**, bắt đầu từ dấu âm:\n    $$(-1)^k \\Delta_k > 0 \\iff \\Delta_1 < 0, \\quad \\Delta_2 > 0, \\quad \\Delta_3 < 0$$\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 601,
    "originalId": 601,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm tất cả các giá trị của $m$ để dạng toàn phương $Q(x_1, x_2) = x_1^2 + 2m x_1 x_2 + 4x_2^2$ xác định dương:",
    "options": [
      {
        "key": "A",
        "text": "$m > 0$"
      },
      {
        "key": "B",
        "text": "$m < 2$"
      },
      {
        "key": "C",
        "text": "$m > 2$ hoặc $m < -2$"
      },
      {
        "key": "D",
        "text": "$-2 < m < 2$"
      }
    ],
    "correct": "D",
    "explanation": "* **Áp dụng tiêu chuẩn Sylvester:**\n  * Ma trận của $Q$: $A = \\begin{bmatrix} 1 & m \\\\ m & 4 \\end{bmatrix}$.\n  * Các định thức con chính góc:\n    * $\\Delta_1 = 1 > 0$ (luôn thỏa mãn).\n    * $\\Delta_2 = \\det A = 1 \\cdot 4 - m^2 = 4 - m^2$.\n  * Để $Q$ xác định dương:\n    $$\\Delta_2 > 0 \\iff 4 - m^2 > 0 \\iff m^2 < 4 \\iff -2 < m < 2$$\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 602,
    "originalId": 602,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Dùng phương pháp Lagrange đưa dạng toàn phương $Q(x_1, x_2) = x_1^2 + 4x_1 x_2 + 5x_2^2$ về dạng chính tắc, ta thu được:",
    "options": [
      {
        "key": "A",
        "text": "$y_1^2 + y_2^2$ với $y_1 = x_1 + 2x_2, \\, y_2 = x_2$"
      },
      {
        "key": "B",
        "text": "$4y_1^2 + y_2^2$"
      },
      {
        "key": "C",
        "text": "$y_1^2 - y_2^2$ với $y_1 = x_1 + 2x_2, \\, y_2 = x_2$"
      },
      {
        "key": "D",
        "text": "$y_1^2 + 5y_2^2$"
      }
    ],
    "correct": "A",
    "explanation": "* **Phương pháp Lagrange (tách bình phương đủ):**\n  $$Q = (x_1^2 + 4x_1 x_2 + 4x_2^2) + x_2^2 = (x_1 + 2x_2)^2 + x_2^2$$\n* Đặt biến mới:\n  $$\\begin{cases} y_1 = x_1 + 2x_2 \\\\ y_2 = x_2 \\end{cases}$$\n* Dạng chính tắc là: $Q = y_1^2 + y_2^2$.\n* Cả hai hệ số đều dương $\\implies Q$ xác định dương.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 603,
    "originalId": 603,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Luật quán tính của Sylvester khẳng định rằng khi đưa dạng toàn phương về dạng chính tắc bằng các phép biến đổi tuyến tính không suy biến thì:",
    "options": [
      {
        "key": "A",
        "text": "Chỉ có hạng của ma trận là không đổi"
      },
      {
        "key": "B",
        "text": "Số hệ số dương và số hệ số âm là các đại lượng bất biến"
      },
      {
        "key": "C",
        "text": "Các hệ số trong dạng chính tắc luôn giữ nguyên không đổi"
      },
      {
        "key": "D",
        "text": "Dạng chính tắc luôn luôn duy nhất"
      }
    ],
    "correct": "B",
    "explanation": "* **Định lý quán tính Sylvester (Law of Inertia):**\n  * Có nhiều cách biến đổi đưa một dạng toàn phương về dạng chính tắc $c_1 y_1^2 + \\dots + c_r y_r^2$.\n  * Mặc dù các giá trị cụ thể của $c_i$ có thể khác nhau tùy cách chọn biến, nhưng **số lượng hệ số dương (chỉ số quán tính dương $p$)** và **số lượng hệ số âm (chỉ số quán tính âm $q$)** luôn luôn không đổi (bất biến).\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 604,
    "originalId": 604,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Dạng toàn phương $Q(x_1, x_2) = (x_1 - 2x_2)^2$ có tính chất nào dưới đây?",
    "options": [
      {
        "key": "A",
        "text": "Nửa xác định dương"
      },
      {
        "key": "B",
        "text": "Xác định dương"
      },
      {
        "key": "C",
        "text": "Xác định âm"
      },
      {
        "key": "D",
        "text": "Không xác định"
      }
    ],
    "correct": "A",
    "explanation": "* **Phân biệt xác định dương và nửa xác định dương:**\n  * Ta thấy $Q(x_1, x_2) = (x_1 - 2x_2)^2 \\ge 0$ với mọi $(x_1, x_2)$.\n  * Tuy nhiên, với điểm khác không $(x_1 = 2, x_2 = 1) \\neq (0, 0)$, ta có:\n    $$Q(2, 1) = (2 - 2)^2 = 0$$\n  * Vì tồn tại điểm khác không mà tại đó $Q = 0$, nên $Q$ không thể là xác định dương ngặt mà là **nửa xác định dương** (positive semidefinite).\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 605,
    "originalId": 605,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho dạng toàn phương $Q(x_1, x_2, x_3) = x_1^2 + 2x_2^2 + mx_3^2 + 2x_1 x_2$. Tìm $m$ để $Q$ xác định dương:",
    "options": [
      {
        "key": "A",
        "text": "$m > 0$"
      },
      {
        "key": "B",
        "text": "Không tồn tại $m$"
      },
      {
        "key": "C",
        "text": "$m > 1$"
      },
      {
        "key": "D",
        "text": "$m < 0$"
      }
    ],
    "correct": "A",
    "explanation": "* **Lập ma trận đối xứng:**\n  $$A = \\begin{bmatrix} 1 & 1 & 0 \\\\ 1 & 2 & 0 \\\\ 0 & 0 & m \\end{bmatrix}$$\n* Tính các định thức con chính góc:\n  * $\\Delta_1 = 1 > 0$.\n  * $\\Delta_2 = \\begin{vmatrix} 1 & 1 \\\\ 1 & 2 \\end{vmatrix} = 2 - 1 = 1 > 0$.\n  * $\\Delta_3 = \\det A = m \\cdot \\Delta_2 = m \\cdot 1 = m$.\n* Để $Q$ xác định dương $\\iff \\Delta_3 > 0 \\iff m > 0$.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 606,
    "originalId": 606,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Nếu dạng toàn phương $Q$ trên $\\mathbb{R}^n$ xác định dương thì định thức ma trận biểu diễn $\\det A$ thỏa mãn:",
    "options": [
      {
        "key": "A",
        "text": "$\\det A > 0$"
      },
      {
        "key": "B",
        "text": "$\\det A < 0$"
      },
      {
        "key": "C",
        "text": "$\\det A \\ge 0$"
      },
      {
        "key": "D",
        "text": "$\\det A = 0$"
      }
    ],
    "correct": "A",
    "explanation": "* **Tính chất định thức của ma trận xác định dương:**\n  * Theo tiêu chuẩn Sylvester, tất cả các định thức con chính góc $\\Delta_k > 0$ với mọi $k = 1, \\dots, n$.\n  * Trong đó $\\Delta_n$ chính là định thức của toàn bộ ma trận: $\\Delta_n = \\det A$.\n  * Do đó $\\det A > 0$ là điều kiện bắt buộc.\n* **Chọn đáp án: A.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 607,
    "originalId": 607,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho dạng toàn phương $Q(x_1, x_2) = -2x_1^2 + 2x_1 x_2 - x_2^2$. Dạng toàn phương này là:",
    "options": [
      {
        "key": "A",
        "text": "Không xác định"
      },
      {
        "key": "B",
        "text": "Nửa xác định âm"
      },
      {
        "key": "C",
        "text": "Xác định dương"
      },
      {
        "key": "D",
        "text": "Xác định âm"
      }
    ],
    "correct": "D",
    "explanation": "* **Áp dụng tiêu chuẩn Sylvester:**\n  * Ma trận $A = \\begin{bmatrix} -2 & 1 \\\\ 1 & -1 \\end{bmatrix}$.\n  * $\\Delta_1 = -2 < 0$.\n  * $\\Delta_2 = (-2)(-1) - 1^2 = 2 - 1 = 1 > 0$.\n  * Vì $\\Delta_1 < 0$ và $\\Delta_2 > 0$ (dấu đan xen bắt đầu từ âm), dạng toàn phương là **xác định âm**.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 608,
    "originalId": 608,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Cho dạng toàn phương $Q$ có dạng chính tắc là $Q = y_1^2 + 2y_2^2 - 3y_3^2$. Chỉ số quán tính dương $p$ và chỉ số quán tính âm $q$ của $Q$ lần lượt là:",
    "options": [
      {
        "key": "A",
        "text": "$p = 3, \\, q = 0$"
      },
      {
        "key": "B",
        "text": "$p = 1, \\, q = 2$"
      },
      {
        "key": "C",
        "text": "$p = 2, \\, q = 1$"
      },
      {
        "key": "D",
        "text": "$p = 2, \\, q = 0$"
      }
    ],
    "correct": "C",
    "explanation": "* **Định nghĩa chỉ số quán tính:**\n  * $p$ là số lượng hệ số dương trong dạng chính tắc: các hệ số là $+1$ và $+2 \\implies p = 2$.\n  * $q$ là số lượng hệ số âm trong dạng chính tắc: hệ số là $-3 \\implies q = 1$.\n  * Hạng của dạng toàn phương là $r = p + q = 2 + 1 = 3$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 609,
    "originalId": 609,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm điều kiện của tham số $m$ để dạng toàn phương $Q(x_1, x_2) = 1x_1^2 + 4x_1 x_2 + m x_2^2$ **xác định dương**:",
    "options": [
      {
        "key": "A",
        "text": "$m > 0$"
      },
      {
        "key": "B",
        "text": "$m > 4$"
      },
      {
        "key": "C",
        "text": "$m = 2$"
      },
      {
        "key": "D",
        "text": "$m < 4$"
      }
    ],
    "correct": "B",
    "explanation": "* Ma trận của $Q$ là $\\begin{bmatrix} 1 & 2 \\\\ 2 & m \\end{bmatrix}$. Theo tiêu chuẩn Sylvester: $\\Delta_1 = 1 > 0$ và $\\Delta_2 = 1m - 4 > 0 \\iff m > 4$.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 610,
    "originalId": 610,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm điều kiện của tham số $m$ để dạng toàn phương $Q(x_1, x_2, x_3) = x_1^2 + 2x_2^2 + (m - 3)x_3^2$ **xác định dương**:",
    "options": [
      {
        "key": "A",
        "text": "$m > 0$"
      },
      {
        "key": "B",
        "text": "$m = 3$"
      },
      {
        "key": "C",
        "text": "$m > 3$"
      },
      {
        "key": "D",
        "text": "$m < 3$"
      }
    ],
    "correct": "C",
    "explanation": "* Dạng toàn phương chính tắc xác định dương khi tất cả các hệ số bình phương đều dương: $1 > 0, 2 > 0$ và $m - 3 > 0 \\iff m > 3$.\n* **Chọn đáp án: C.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 611,
    "originalId": 611,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Dạng toàn phương $Q(x_1, x_2) = x_1^2 + 2x_1 x_2 + 1x_2^2 = (x_1 + 1x_2)^2$ thuộc loại nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Không xác định dấu"
      },
      {
        "key": "B",
        "text": "Nửa xác định dương (bán xác định dương)"
      },
      {
        "key": "C",
        "text": "Xác định âm"
      },
      {
        "key": "D",
        "text": "Xác định dương"
      }
    ],
    "correct": "B",
    "explanation": "* Ta có $Q = (x_1 + 1x_2)^2 \\ge 0$ với mọi $(x_1, x_2)$. Tuy nhiên, với các véc tơ khác không thỏa mãn $x_1 + 1x_2 = 0$ (chẳng hạn $(-1, 1) \\neq (0, 0)$) thì $Q = 0$. Vì tồn tại véc tơ khác không có $Q = 0$ nên $Q$ chỉ là nửa xác định dương.\n* **Chọn đáp án: B.**",
    "isOriginal": false,
    "origin": "extra"
  },
  {
    "id": 612,
    "originalId": 612,
    "chapterId": 6,
    "chapterName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "topicId": 6,
    "topicName": "Không gian véc tơ Euclide, Dạng toàn phương",
    "subTypeId": 4,
    "typeId": "6.4",
    "typeName": "Phân loại dấu Dạng toàn phương & Tiêu chuẩn Sylvester",
    "examId": "extra",
    "examName": "Luyện tập mở rộng PTIT",
    "question": "Tìm điều kiện của tham số $m$ để dạng toàn phương $Q(x_1, x_2) = 2x_1^2 + 2x_1 x_2 + m x_2^2$ **xác định dương**:",
    "options": [
      {
        "key": "A",
        "text": "$m < \\dfrac{1}{2}$"
      },
      {
        "key": "B",
        "text": "$m > 0$"
      },
      {
        "key": "C",
        "text": "$m = 1$"
      },
      {
        "key": "D",
        "text": "$m > \\dfrac{1}{2}$"
      }
    ],
    "correct": "D",
    "explanation": "* Ma trận của $Q$ là $\\begin{bmatrix} 2 & 1 \\\\ 1 & m \\end{bmatrix}$. Theo tiêu chuẩn Sylvester: $\\Delta_1 = 2 > 0$ và $\\Delta_2 = 2m - 1 > 0 \\iff m > \\frac{1}{2}$.\n* **Chọn đáp án: D.**",
    "isOriginal": false,
    "origin": "extra"
  }
];
  if (typeof window !== 'undefined') {
    window.QUESTIONS_BANK = window.QUESTIONS_DATA = questions;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
  }
  global.QUESTIONS_BANK = global.QUESTIONS_DATA = questions;
})(typeof window !== 'undefined' ? window : global);
