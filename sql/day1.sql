DROP TABLE IF EXISTS messages, room_members, rooms, users CASCADE;

CREATE TABLE users (
  id serial PRIMARY KEY,
  email varchar(255) NOT NULL UNIQUE,
  username varchar(100) NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE rooms (
  id serial PRIMARY KEY,
  name varchar(150) NOT NULL,
  created_by_id integer NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE room_members (
  id serial PRIMARY KEY,
  room_id integer NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,
  user_id integer NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  joined_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX room_members_users_idx ON room_members (room_id, user_id);

CREATE TABLE messages (
  id serial PRIMARY KEY,
  room_id integer NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,
  sender_id integer NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  content text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);