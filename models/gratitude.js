//For testing on localhost we were importing sometodos
//import { someToDos } from "../db/index.js";
import { pool } from "../db/index.js";

export async function getAllGratitude() {
  let response = await pool.query(`SELECT * FROM gratitude;`);
  return response.rows;
}

export async function addGratitude(gratitude) {
    console.log("New gratitude add is "+ gratitude.gratitude)
  let response = await pool.query(`INSERT INTO gratitude (gratitude, date, userId) VALUES ($1, $2, $3) RETURNING *;`, [gratitude.gratitude, gratitude.date, gratitude.userId]);
  return response.rows;
}
export async function deleteGratitudeById(id) {
  const result = await pool.query(
    `DELETE FROM gratitude WHERE id = ${id} RETURNING * ;`
  );
  return result;
}