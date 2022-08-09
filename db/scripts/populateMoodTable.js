import { moodData } from "../../libs/moodData.js";
import { pool } from "../index.js";

export async function populateMoodTable() {
  for (let i = 0; i < moodData.length; i++) {
    await pool.query(
      `INSERT INTO mood (date, mood, whatmakesfeel, notes, userId) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
      [
        moodData[i].date,
        moodData[i].mood,
        moodData[i].whatmakesfeel,
        moodData[i].notes,
        moodData[i].userId,
      ]
    );
  }
}

try {
  await populateMoodTable();
  console.log("Populated 'Mood' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}