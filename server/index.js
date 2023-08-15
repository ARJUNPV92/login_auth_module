const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 5000;

app.use(cors()); // Use the cors middleware
app.use(bodyParser.json());

// Load users data from the JSON file
let users = JSON.parse(fs.readFileSync('users.json'));

// Generate a random secret key for JWT
const secretKey = crypto.randomBytes(32).toString('hex');

// Authenticate user and generate JWT
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = users.users.find(user => user.username === username);

  if (!user || user.password !== password) {
    return res.json({ success: false, message: 'Authentication problem' });
  }

  // Generate JWT
  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

  res.json({ success: true, token });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
