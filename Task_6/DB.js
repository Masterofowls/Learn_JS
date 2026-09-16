import Database from 'better-sqlite3';
import { v4 as uuid } from 'uuid';

const db = new Database('database.db');
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    favorite INTEGER NOT NULL DEFAULT 0
  )
`);

const toUser = (row) => row && { ...row, favorite: !!row.favorite };
if (db.prepare('SELECT COUNT(*) AS c FROM users').get().c === 0) {
  const insert = db.prepare('INSERT INTO users (id, name, age, favorite) VALUES (?,?,?,?)');
  const seed = [
    { name: 'John', age: 25, favorite: false },
    { name: 'David', age: 34, favorite: true },
    { name: 'Ivan', age: 23, favorite: false },
  ];
  const seedMany = db.transaction((rows) => {
    for (const u of rows) insert.run(uuid(), u.name, u.age, u.favorite ? 1 : 0);
  });
  seedMany(seed);
}

export const UsersDB = {
  getAll() {
    return db.prepare('SELECT * FROM users ORDER BY rowid DESC').all().map(toUser);
  },
  getById(id) {
    return toUser(db.prepare('SELECT * FROM users WHERE id = ?').get(id));
  },
  create({ name, age, favorite = false }) {
    const newUser = { id: uuid(), name, age, favorite: !!favorite };
    db.prepare('INSERT INTO users (id, name, age, favorite) VALUES (?,?,?,?)')
      .run(newUser.id, newUser.name, newUser.age, newUser.favorite ? 1 : 0);
    return newUser;
  },
  update(id, patch) {
    const current = this.getById(id);
    if (!current) return null;
    const updated = { ...current, ...patch, id: current.id };
    db.prepare('UPDATE users SET name = ?, age = ?, favorite = ? WHERE id = ?')
      .run(updated.name, updated.age, updated.favorite ? 1 : 0, id);
    return { ...updated, favorite: !!updated.favorite };
  },
  remove(id) {
    const current = this.getById(id);
    if (!current) return null;
    db.prepare('DELETE FROM users WHERE id = ?').run(id);
    return current;
  }
};