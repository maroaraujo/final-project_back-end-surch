import { pool } from "../index.js";

export async function dropGratitudeTable() {
  return await pool.query(`DROP TABLE IF EXISTS gratitude;`);
}

try {
    await dropGratitudeTable();
    console.log("Dropped 'Gratitude' table");
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }