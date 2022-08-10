import { pool } from "../index.js";
import { achievementData } from "../../libs/achievementData.js";

export async function populateAchievementTable() {
  for (let i = 0; i < achievementData.length; i++) {
    await pool.query(
      `INSERT INTO achievement (achievement, completion, userId) VALUES ($1, $2, $3) RETURNING *;`,
      [
        achievementData[i].achievement,
        achievementData[i].completion,
        achievementData[i].userId,
      ]
    );
  }
}

try {
  await populateAchievementTable();
  console.log("Populated 'Achievement' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
