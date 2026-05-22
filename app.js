const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Secure Notes App Running version2');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});