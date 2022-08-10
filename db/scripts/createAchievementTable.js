import { pool } from "../index.js";

export async function createAchievementTable() {
  return await pool.query(`CREATE TABLE IF NOT EXISTS achievement (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    achievement TEXT,
    completion BOOLEAN,
    userId INT
 );`);
}

try {
  await createAchievementTable();
  console.log("Created 'Achievement' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
