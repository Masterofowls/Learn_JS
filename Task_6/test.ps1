# 1. Получить всех
Invoke-RestMethod -Uri "http://localhost:3050/api/v1/users" -Method Get | ConvertTo-Json -Depth 5

# 2. Создать пользователя
$body = '{"name":"Alice","age":28,"favorite":true,"lastname":"Doe","nickname":"al","description":"blabla","phone":"79333333","image_link":"somelink","email":"blabla@mail.ru"}'
Invoke-RestMethod -Uri "http://localhost:3050/api/v1/users" -Method Post -ContentType "application/json" -Body $body | ConvertTo-Json -Depth 5

#3. psql
#psql -U postgres -d learn_js -c "SELECT id, name, age, favorite FROM users;"