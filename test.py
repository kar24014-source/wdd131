import json

log_line = '{"username": "alice", "result": "failed"}'
event = json.loads(log_line)

print(event["username"])