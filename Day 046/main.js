const express = require('express');
const routes = require('./routes/index');
const app = express();

app.use('/', routes);

app.listen(8080);
console.log("Server running on port 8080");

