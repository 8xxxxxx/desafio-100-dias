const express = require('express');
const routes = require('./routes/index');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')

app.use('/', routes);
app.use((req, res, next) => {
    console.log("A middleware has been released.");
    req.timestamp = new Date().toString();
    next(); // Allows route flow to continue
})

app.use(bodyParser.urlencoded({ extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');



app.listen(8080);
console.log("Server running on port 8080");

