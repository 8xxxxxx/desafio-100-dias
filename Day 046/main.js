const express = require('express');
const routes = require('./routes/index');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false}))
app.use('/', routes);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.use(express.static(path.join(__dirname, 'public')))


app.listen(8080);
console.log("Server running on port 8080");

