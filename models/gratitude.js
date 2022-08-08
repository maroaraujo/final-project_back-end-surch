//For testing on localhost we were importing sometodos
//import { someToDos } from "../db/index.js";
import { pool } from "../db/index.js";

export async function getAllGratitude() {
  let response = await pool.query(`SELECT * FROM gratitudetable;`);
  return response.rows;
}

export async function addGratitude(gratitude) {
    console.log("New gratitude add is "+ gratitudetable.gratitude)
  let response = await pool.query(`INSERT INTO gratitudetable (gratitude) VALUES ($1) RETURNING *;`, [gratitudetable.gratitude]);
  return response.rows;
}