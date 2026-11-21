import json

with open("data/questions.json") as f:
    qs = json.load(f)

orig_42 = [q for q in qs if q.get("isOriginal")]
print("Original 42 questions in bank:")
for q in orig_42:
    print(f"ID {q['id']}: {q['question'][:40]}...")
