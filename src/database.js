const mysql = require('promise-mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'plemos',
  password: '090602pL',
  database: 'electrondb'
});

function getConnection() {
  return connection;
}

module.exports = { getConnection };