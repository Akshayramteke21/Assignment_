const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/adminlogin', (req, res) => {
  console.log('Request Body:', req.body); // Add this line to log the request body

  const { username, password } = req.body;
  const query = 'SELECT * FROM loginadmin WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error('Database Error:', err); // Log the database error
      res.status(500).json({ error: 'An error occurred while authenticating the admin.' });
    } else if (result.length === 0) {
      res.status(401).json({ error: 'Invalid username or password.' });
    } else {
      res.status(200).json({ message: 'Login successful.' });
    }
  });
});

app.post('/studentlogin', (req, res) => {

  console.log('Request Body:', req.body);
  const { email, phone_number } = req.body;
  const query = 'SELECT * FROM students WHERE email = ? AND phone_number = ?';
  db.query(query, [email, phone_number], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while authenticating the student.' });
    } else if (result.length === 0) {
      res.status(401).json({ error: 'Invalid email or contact.' });
    } else {
      res.status(200).json({ message: 'Login successful.' });
    }
  });
});

app.post('/studsave', (req, res) => {
  console.log('Request Body:', req.body); // Add this line to log the request body

  const { firstName, lastName, email, phone_number, year, stream_id } = req.body;
  const query = 'INSERT INTO student (first_name, last_name, email, phone_number, year, stream_id) VALUES (?,?,?,?,?,?)';
  db.query(query, [firstName, lastName, email, phone_number, year, stream_id], (err, result) => {
    if (err) {
      console.error(err); // Add this line to log the error
      res.status(500).json({ error: 'An error occurred while saving the student.' });
    } else {
      res.status(201).json(result);
    }
  });
});

app.get('/studview', (req, res) => {
  const query = 'SELECT * FROM students';
  db.query(query, [], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while retrieving students.' });
    } else {
      res.status(200).json(result);
    }
  });
});

app.get('/getStudentProfile/:studentId', (req, res) => {
  const query = 'SELECT * FROM students WHERE id =?';
  db.query(query, [req.params.studentId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while retrieving the student profile.' });
    } else if (result.length === 0) {
      res.status(404).json({ error: 'Student not found.' });
    } else {
      res.status(200).json(result[0]);
    }
  });
});

app.post('/savesub', (req, res) => {
  const { subject_name, field_stream_id } = req.body;
  const query = 'INSERT INTO subjects (subject_name, stream_id) VALUES (?,?)';
  db.query(query, [subject_name, field_stream_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while adding the subject.' });
    } else {
      res.status(201).json(result);
    }
  });
});

app.get('/viewSubjects', (req, res) => {
  const query = 'SELECT * FROM subjects';
  db.query(query, [], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while retrieving subjects.' });
    } else {
      res.status(200).json(result);
    }
  });
});

// Route for adding marks
app.post('/addMarks', (req, res) => {
  const { student_id, subject_id, mark } = req.body;
  const query = 'INSERT INTO marks (student_id, subject_id, mark) VALUES (?,?,?)';
  db.query(query, [student_id, subject_id, mark], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while adding marks.' });
    } else {
      res.status(201).json(result);
    }
  });
});

// Route for retrieving marks of a student
app.get('/getMarks/:studentId', (req, res) => {
  const query = 'SELECT * FROM marks WHERE student_id = ?';
  db.query(query, [req.params.studentId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while retrieving marks.' });
    } else {
      res.status(200).json(result);
    }
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
