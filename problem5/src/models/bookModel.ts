import sqlite3 from 'sqlite3';
import { Database } from 'sqlite3';

interface Book {
  id: number;
  title: string;
  author: string;
  pages: number;
}

const dbPromise: Promise<Database> = new Promise((resolve, reject) => {
  const db = new sqlite3.Database('books.db'); 
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY,
        title TEXT,
        author TEXT,
        pages INTEGER
      )
    `, (err: Error | null) => {
      if (err) reject(err);
      else resolve(db);
    });
  });
});

export const getAllBooks = async (): Promise<Book[]> => {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM books', (err: Error | null, rows: Book[]) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

export const addBook = async (title: string, author: string, pages: number): Promise<void> => {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO books (title, author, pages) VALUES (?, ?, ?)', [title, author, pages], (err: Error | null) => {
      if (err) reject(err);
      else resolve();
    });
  });
};

export const updateBook = async (id: number, title: string, author: string, pages: number): Promise<void> => {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    db.run('UPDATE books SET title = ?, author = ?, pages = ? WHERE id = ?', [title, author, pages, id], (err: Error | null) => {
      if (err) reject(err);
      else resolve();
    });
  });
};

export const deleteBook = async (id: number): Promise<void> => {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    db.run('DELETE FROM books WHERE id = ?', [id], (err: Error | null) => {
      if (err) reject(err);
      else resolve();
    });
  });
};
