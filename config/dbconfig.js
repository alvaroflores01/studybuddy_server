// const oracledb = require('oracledb');
const dotenv = require('dotenv');
dotenv.config();
// Oracle Database connection pool configuration
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectString: process.env.DB_CONNECT_STRING
};

module.exports = dbConfig;