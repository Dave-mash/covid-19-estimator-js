const express = require('express');
const app = express();
const path = require('path');
const { port } = require('./config');
const PORT = port || 5000;

app.use(express.static(path.join(__dirname, '../public')));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});
console.log('==> ',process.env.PORT)

app.listen(PORT, console.log(`server listening on port ${PORT}`));