import { pool } from "../index.js";

export async function dropMoodTable() {
  return await pool.query(`DROP TABLE IF EXISTS mood;`);
}

try {
    await dropMoodTable();
    console.log("Dropped 'Mood' table");
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }