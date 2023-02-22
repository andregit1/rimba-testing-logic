const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();

// Connect to MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'rimba_test'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if user exists in the database
  connection.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      const user = results[0];

      // Check if password is correct
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;

        if (isMatch) {
          res.send('Login successful');
        } else {
          res.status(401).send('Invalid password');
        }
      });
    } else {
      res.status(401).send('Invalid username');
    }
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
