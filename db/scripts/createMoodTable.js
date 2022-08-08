import { pool } from "../index.js";

pool.query(`CREATE TABLE IF NOT EXISTS mood (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    date DATE NOT NULL,
    mood TEXT,
    whatmakesfeel TEXT,
    notes TEXT,
    userId INT
 );`);