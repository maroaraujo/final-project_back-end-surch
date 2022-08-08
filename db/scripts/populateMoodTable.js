import { moodData } from "../../libs/moodData.js";
import { pool } from "../index.js";

for (let i = 0; i < moodData.length; i++) {
  pool.query(
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
