const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: "31.220.110.101",
  user: "u350327849_copydb",
  password: "!Bacoom555!",
  database: "u350327849_co_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// const pool = mysql.createPool({
//   host: "31.220.110.101",
//   user: "u350327849_admin",
//   password: "!Bacoom555!",
//   database: "u350327849_webpro_project",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// }/

module.exports = pool;