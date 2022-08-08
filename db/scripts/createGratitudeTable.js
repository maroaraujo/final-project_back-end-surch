import { query } from "../index.js";
//not being used
//this is to create a gratitudetable with user and password on the registration feature
//WILL NEED EDITING AS REQUIRED
const sqlQuery = `CREATE TABLE IF NOT EXISTS gratitudetable(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username TEXT,
    password TEXT)`;
async function createGratitudeTable() {
  console.log("Hello");
  const res = await query(sqlQuery);
  console.log("Table was created");
}
createTable();