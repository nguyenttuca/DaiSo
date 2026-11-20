import re
import json

with open("original_text.md", "r", encoding="utf-8") as f:
    text = f.read()

# Topics
topic_splits = re.split(r'## CHUYÊN ĐỀ (\d+):\s*(.+)', text)
topics = []
# topic_splits[0] is header
for i in range(1, len(topic_splits), 3):
    t_id = int(topic_splits[i])
    t_name = topic_splits[i+1].strip()
    t_content = topic_splits[i+2]
    topics.append((t_id, t_name, t_content))

print(f"Found {len(topics)} topics")

parsed_questions = []

for t_id, t_name, content in topics:
    # Split by ### Câu \d+
    raw_qs = re.split(r'### Câu (\d+)', content)
    for j in range(1, len(raw_qs), 2):
        q_num = int(raw_qs[j])
        q_body = raw_qs[j+1].strip()
        
        # separate question + options from Lời giải
        sol_match = re.search(r'\*\*Lời giải:\*\*(.*)', q_body, re.DOTALL)
        if sol_match:
            q_and_opts = q_body[:sol_match.start()].strip()
            explanation = sol_match.group(1).strip()
        else:
            q_and_opts = q_body
            explanation = ""
            
        # extract correct answer from explanation or q_body
        ans_match = re.search(r'\*?\*?Chọn đáp án:\s*([A-D])', explanation)
        if not ans_match:
            ans_match = re.search(r'phương án \*\*([A-D])\*\*', explanation)
        correct_ans = ans_match.group(1) if ans_match else ""
        
        # extract options A, B, C, D
        # Options usually start with * **A.** or * **A.**
        options = []
        opt_pattern = r'\*\s*\*\*([A-D])\.\*\*\s*(.*?)(?=\n\*\s*\*\*|$)'
        opt_matches = list(re.finditer(opt_pattern, q_and_opts, re.DOTALL))
        
        if opt_matches:
            q_text = q_and_opts[:opt_matches[0].start()].strip()
            for m in opt_matches:
                k = m.group(1)
                v = m.group(2).strip()
                # remove trailing period if any
                options.append({'key': k, 'text': v})
        else:
            q_text = q_and_opts
            
        parsed_questions.append({
            'id': q_num,
            'topicId': t_id,
            'topicName': t_name,
            'question': q_text,
            'options': options,
            'correct': correct_ans,
            'explanation': explanation,
            'original': True
        })

print(f"Parsed {len(parsed_questions)} questions")
for q in parsed_questions:
    if not q['correct'] or len(q['options']) != 4:
        print(f"Warning on Q{q['id']}: correct={q['correct']}, opts={len(q['options'])}")
    else:
        pass
print("Done parsing check.")
