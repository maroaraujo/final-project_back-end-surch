import { pool } from "../index.js";

pool.query(`DROP TABLE IF EXISTS gratitude;`);
