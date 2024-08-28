var express = require('express');
var cors = require('cors');
var app = express();
var http = require('http').Server(app);

app.use(cors());  // enable CORS
app.use(express.json());  // parse the body of the request
app.use(express.urlencoded({ extended: true }));  // parse the body of the request
app.use(express.static(__dirname + '/www'));  // serve static files from the www folder

require('../routes/mainRoute').route(app);  // load routes

let server = http.listen(3000, function () {        //start server on port 3000
    console.log("Week5 Nodejs Server!");                    
    console.log("Server listening on port 3000");
});

app.get('/test', function (req, res) {              //get request for test
    res.sendFile(__dirname + "/www/test5.html");
});
