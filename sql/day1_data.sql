INSERT INTO users (email, username) VALUES
  ('anna@test.com', 'anna'),
  ('boris@test.com', 'boris'),
  ('vera@test.com', 'vera'),
  ('gleb@test.com', 'gleb'),
  ('dasha@test.com', 'dasha');

INSERT INTO rooms (name, created_by_id) VALUES
  ('General', 1),
  ('Dev talk', 2),
  ('Music', 3);

INSERT INTO room_members (room_id, user_id) VALUES
  (1, 1), (1, 2), (1, 3), (1, 4), (1, 5),
  (2, 2), (2, 3), (2, 4),
  (3, 3), (3, 5);

INSERT INTO messages (room_id, sender_id, content) VALUES
  (1, 1, 'Всем привет!'),
  (1, 2, 'Привет, Анна'),
  (1, 3, 'Как дела?'),
  (1, 4, 'Норм'),
  (1, 5, 'Тоже норм'),
  (2, 2, 'Кто пробовал Drizzle?'),
  (2, 3, 'Я, удобно'),
  (2, 4, 'А миграции как?'),
  (2, 2, 'Через generate и migrate'),
  (3, 3, 'Что слушаете?'),
  (3, 5, 'Джаз'),
  (3, 3, 'Хороший выбор');