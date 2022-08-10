//For testing on localhost we were importing sometodos
//import { someToDos } from "../db/index.js";
import { pool } from "../db/index.js";

export async function getAllAchievement() {
  let response = await pool.query(`SELECT * FROM achievement;`);
  return response.rows;
}

export async function updateAchievement(id, achievement) {
  console.log("New Achievement add is " + achievement.achievement);
  let response = await pool.query(
    `UPDATE achievement SET achievement = $1, completion = $2, userId = $3 WHERE id = $4;`,
    [achievement.achievement, achievement.completion, achievement.userId, id]
  );
  return response.rows;
}
// export async function deleteAchievementById(id) {
//   const result = await pool.query(
//     `DELETE FROM Achievement WHERE id = ${id} RETURNING * ;`
//   );
//   return result;
// }
