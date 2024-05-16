const mysql = require('mysql');

const db = {
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'StudentInfo'
};

const connection = mysql.createConnection(db);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    throw err;
  }
  console.log('Connected to the database!');
});

module.exports = connection;
