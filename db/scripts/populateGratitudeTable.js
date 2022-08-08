import { dummyGratitude } from "../../libs/gratitudeData.js";
import { pool } from "../index.js";

for (let i = 0; i < dummyGratitude.length; i++) {
  pool.query(
    `INSERT INTO gratitude (gratitude, date, userId) VALUES ($1, $2, $3) RETURNING *;`,
    [
      dummyGratitude[i].gratitude,
      dummyGratitude[i].date,
      dummyGratitude[i].userId,
    ]
  );
}
