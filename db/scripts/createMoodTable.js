import { pool } from "../index.js";

export async function createMoodTable() {
  return await pool.query(`CREATE TABLE IF NOT EXISTS mood (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    date DATE NOT NULL,
    mood TEXT,
    whatmakesfeel TEXT,
    notes TEXT,
    userId INT
 );`);
}

try {
    await createMoodTable();
    console.log("Created 'Mood' table");
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }