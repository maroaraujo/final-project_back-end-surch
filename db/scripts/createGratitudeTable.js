import { pool } from "../index.js";

export async function createGratitudeTable() {
  return await pool.query(`CREATE TABLE IF NOT EXISTS gratitude (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    gratitude TEXT,
    date DATE NOT NULL,
    userId INT
 );`);
}

try {
    await createGratitudeTable();
    console.log("Created 'Gratitude' table");
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }