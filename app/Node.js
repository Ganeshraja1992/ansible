// Load the express module.
var express = require('express');
var app = express();

// Respond to requests for / with 'Hello World'.
app.get('/', function(req, res){
res.send('Hello World!');
});

// Listen on port 80 (like a true web server).
app.listen(80);
console.log('Express server started successfully.');
{
"name": "examplenodeapp",
"description": "Example Express Node.js app.",
"author": "Test"
"dependencies": {
"express": "4.x"
},
"engine": "node >= 0.10.6"
}