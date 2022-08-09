import { dummyGratitude } from "../../libs/gratitudeData.js";
import { pool } from "../index.js";

export async function populateGratitudeTable() {
  for (let i = 0; i < dummyGratitude.length; i++) {
     await pool.query(
      `INSERT INTO gratitude (gratitude, date, userId) VALUES ($1, $2, $3) RETURNING *;`,
      [
        dummyGratitude[i].gratitude,
        dummyGratitude[i].date,
        dummyGratitude[i].userId,
      ]
    );
  }
}

try {
  await populateGratitudeTable();
  console.log("Populated 'Gratitude' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
