import { pool } from "../index.js";

export async function populateAchievementTable() {
  await pool.query(
    `INSERT INTO achievement (achievement, userId) VALUES ($1, $2) RETURNING *;`,
    [0, 1]
  );
}

try {
  await populateAchievementTable();
  console.log("Populated 'Achievement' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
