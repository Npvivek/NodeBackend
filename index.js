// app.js

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/usersRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello this the home page.');
});

app.use(userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
