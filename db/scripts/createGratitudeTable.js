import { pool } from "../index.js";

pool.query(`CREATE TABLE IF NOT EXISTS gratitude (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    gratitude TEXT,
    date DATE NOT NULL,
    userId INT
 );`);
