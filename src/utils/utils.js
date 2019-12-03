const mysql = require("mysql");
const util = require("util");
require("dotenv").config();

const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

const pool = mysql.createPool(config);
pool.query = util.promisify(pool.query);

module.exports = { logger, pool };
