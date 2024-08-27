var express = require('express');
var cors = require('cors');
var app = express();
var http = require('http').Server(app);

app.use(cors());  // Enable CORS
app.use(express.json());  // Parse the body of the request
app.use(express.urlencoded({ extended: true }));  // Parse the body of the request
app.use(express.static(__dirname + '/www'));  // Serve static files from the www folder

require('../routes/mainRoute').route(app);  // Load routes

let server = http.listen(3000, function () {
    console.log("Week5 Nodejs Server!");
    console.log("Server listening on port 3000");
});

app.get('/test', function (req, res) {
    res.sendFile(__dirname + "/www/test5.html");
});
