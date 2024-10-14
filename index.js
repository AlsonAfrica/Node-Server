const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();

// Use CORS middleware
app.use(cors());

// Port Defined
const port = process.env.PORT || 3000;

// Root response, with a Hello response
app.get("/", (req, res) => {
    res.send('Hello World');
});

// Another response route
app.get('/greet', (req, res) => {
    res.json({ "message": 'Hello from the API!' });
});

// Server listening on port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
