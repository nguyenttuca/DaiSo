#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
sanitize_katex.py
Scans data/questions.json for any unescaped LaTeX math formulas or bash-stripped variables.
"""
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JSON_PATH = os.path.join(ROOT, "data", "questions.json")
JS_PATH = os.path.join(ROOT, "data", "questions.js")

with open(JSON_PATH, "r", encoding="utf-8") as f:
    questions = json.load(f)

fixed_count = 0

for q in questions:
    for opt in q.get("options", []):
        txt = opt.get("text", "")
        # Fix missing $O for Big-O notation
        if "(E \\log V)$" in txt and not txt.startswith("$O"):
            opt["text"] = "$O" + txt
            fixed_count += 1
        elif "(V^3)$" in txt and not txt.startswith("$O"):
            opt["text"] = "$O" + txt
            fixed_count += 1
        elif "(V^2)$" in txt and not txt.startswith("$O"):
            opt["text"] = "$O" + txt
            fixed_count += 1
        elif "(E^2)$" in txt and not txt.startswith("$O"):
            opt["text"] = "$O" + txt
            fixed_count += 1
        elif "(V + E)" in txt and not txt.startswith("$O"):
            opt["text"] = "$O" + txt
            fixed_count += 1

    expl = q.get("explanation", "")
    if "(V \\log V)$" in expl:
        expl = expl.replace("(V \\log V)$", "$O(V \\log V)$")
        fixed_count += 1
    if "(E \\log V)" in expl and not "$O(E \\log V)" in expl:
        expl = expl.replace("(E \\log V)", "$O(E \\log V)$")
        fixed_count += 1
    q["explanation"] = expl

print(f"Sanitized {fixed_count} LaTeX tokens in questions bank.")

with open(JSON_PATH, "w", encoding="utf-8") as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)

with open(JS_PATH, "w", encoding="utf-8") as f:
    f.write("// NGÂN HÀNG ĐỀ TOÁN PTIT (GIẢI TÍCH 1, GIẢI TÍCH 2, ĐẠI SỐ TUYẾN TÍNH, TOÁN RỜI RẠC)\n")
    f.write("// Chuẩn hóa CLO1, CLO2, CLO3 theo Quyết định 292/QĐ-HV\n")
    f.write("(function (global) {\n")
    f.write("  const questions = ")
    f.write(json.dumps(questions, ensure_ascii=False, indent=2))
    f.write(";\n")
    f.write("  if (typeof window !== 'undefined') {\n")
    f.write("    window.QUESTIONS_BANK = window.QUESTIONS_DATA = questions;\n")
    f.write("  }\n")
    f.write("  if (typeof module !== 'undefined' && module.exports) {\n")
    f.write("    module.exports = questions;\n")
    f.write("  }\n")
    f.write("  global.QUESTIONS_BANK = global.QUESTIONS_DATA = questions;\n")
    f.write("})(typeof window !== 'undefined' ? window : global);\n")

print("Updated questions.json and questions.js cleanly.")
