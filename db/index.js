import pg from "pg";
import { db } from "../config/index.js";

export const pool = new pg.Pool({
  connectionString: db.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// export const pool = new pg.Pool({
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   port: process.env.PGPORT,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });
