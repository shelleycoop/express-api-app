const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve a basic HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const username = req.body.username;
    res.send(`Hello, ${username}! Your form is submitted.`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
