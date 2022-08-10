import { pool } from "../index.js";

export async function dropAchievementTable() {
  return await pool.query(`DROP TABLE IF EXISTS achievement;`);
}

try {
    await dropAchievementTable();
    console.log("Dropped 'Achievement' table");
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }