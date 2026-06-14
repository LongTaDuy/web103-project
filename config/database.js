const pg = require("pg");
require("dotenv").config();

const config = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  database: process.env.PGDATABASE,
  ssl: {
    rejectUnauthorized: false
  },
  connectionTimeoutMillis: 10000
};

const pool = new pg.Pool(config);

module.exports = pool;