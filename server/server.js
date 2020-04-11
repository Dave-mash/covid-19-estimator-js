const express = require('express');
const app = express();
const path = require('path');
const { port, file } = require('./config');
const PORT = port || 5000;

app.use(express.static('../public'))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(PORT, console.log(`server listening on port ${PORT}`));