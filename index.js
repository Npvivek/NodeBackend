const express = require('express');
const http = require('http');

const app = express();
const port = 3000;



const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader({ 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
