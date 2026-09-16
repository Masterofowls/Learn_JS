curl.exe -sS http://localhost:3050/api/v1/users

curl.exe -sS -X POST http://localhost:3050/api/v1/users `
  -H "Content-Type: application/json" `
  --data-raw '{"name":"Alice","age":28,"favorite":true}'