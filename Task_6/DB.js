import pg from 'pg';
import { v4 as uuid } from 'uuid';

const { Pool } = pg;

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'learn_js',
  user: 'postgres',
  password: '2015',   
});

await pool.query(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    lastname TEXT NOT NULL DEFAULT '',
    age INTEGER NOT NULL,
    favorite BOOLEAN NOT NULL DEFAULT false,
    nickname TEXT NOT NULL DEFAULT '',
    description TEXT NOT NULL DEFAULT '',
    phone TEXT NOT NULL DEFAULT '',
    image_link TEXT NOT NULL DEFAULT '',
    email TEXT NOT NULL DEFAULT ''
  )
`);

const seed = [
  { name: 'John', lastname: 'Doe', age: 25, favorite: false, nickname: 'jed', description: 'first user', phone: '79333333', image_link: 'https://example.com/john.png', email: 'john@mail.ru' },
  { name: 'David', lastname: 'Smith', age: 34, favorite: true, nickname: 'dav', description: 'second user', phone: '79222222', image_link: 'https://example.com/david.png', email: 'david@mail.ru' },
  { name: 'Ivan', lastname: 'Ivanov', age: 23, favorite: false, nickname: 'van', description: 'third user', phone: '79111111', image_link: 'https://example.com/ivan.png', email: 'ivan@mail.ru' },
];

const { rows: countRows } = await pool.query('SELECT COUNT(*)::int AS c FROM users');
if (countRows[0].c === 0) {
  for (const u of seed) {
    await pool.query(
      `INSERT INTO users (id, name, lastname, age, favorite, nickname, description, phone, image_link, email)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
      [uuid(), u.name, u.lastname, u.age, u.favorite, u.nickname, u.description, u.phone, u.image_link, u.email]
    );
  }
}

export const UsersDB = {
  async getAll() {
    const { rows } = await pool.query('SELECT * FROM users ORDER BY id DESC');
    return rows;
  },

  async getById(id) {
    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return rows[0] || null;
  },

  async create(data) {
    const id = uuid();
    const {
      name, lastname = '', age, favorite = false,
      nickname = '', description = '', phone = '',
      image_link = '', email = '',
    } = data;

    const { rows } = await pool.query(
      `INSERT INTO users (id, name, lastname, age, favorite, nickname, description, phone, image_link, email)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`,
      [id, name, lastname, age, favorite, nickname, description, phone, image_link, email]
    );
    return rows[0];
  },

  async update(id, patch) {
    const current = await this.getById(id);
    if (!current) return null;

    const updated = { ...current, ...patch, id: current.id };

    const { rows } = await pool.query(
      `UPDATE users SET
        name = $1, lastname = $2, age = $3, favorite = $4, nickname = $5,
        description = $6, phone = $7, image_link = $8, email = $9
       WHERE id = $10 RETURNING *`,
      [updated.name, updated.lastname, updated.age, updated.favorite, updated.nickname,
       updated.description, updated.phone, updated.image_link, updated.email, id]
    );
    return rows[0];
  },

  async remove(id) {
    const current = await this.getById(id);
    if (!current) return null;

    await pool.query('DELETE FROM users WHERE id = $1', [id]);
    return current;
  },
};