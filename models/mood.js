import { pool } from "../db/index.js";

export async function getAllMood() {
  let response = await pool.query(`SELECT * FROM mood;`);
  return response.rows;
}

export async function addMood(mood) {
    console.log("New mood add is "+ mood.mood)
  let response = await pool.query(`INSERT INTO mood (date, mood, whatmakesfeel, notes, userId) VALUES ($1, $2, $3, $4, $5) RETURNING *;`, [mood.date, mood.mood, mood.whatmakesfeel, mood.notes, mood.userId]);
  return response.rows;
}

export async function deleteMoodById(id) {
    const result = await pool.query(
      `DELETE FROM mood WHERE id = ${id} RETURNING * ;`
    );
    return result;
  }