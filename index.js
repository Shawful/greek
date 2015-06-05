// Dependencies
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var http = require('http');
var path = require('path');


// Setup Port to Use for Server Communication
server.listen(3000);

// var AWS = require('aws-sdk');
//AWS.config.loadFromPath('/opt/apps/properties/awscred.json');


// App is tied to Express.  These are Express settings.

// Parses RESTful body content to determine XML/JSON/other formats
app.use(express.bodyParser());

// Not sure. Research
app.use(express.methodOverride());

// Establishes that this app will use a router (Express functionality).
app.use(app.router);


app.get('/', function(req, res) {
//    console.log(__dirname);
//    res.sendfile(__dirname + '/index.html');
    return res.send("DATA IS THE NEW BACON")
});


// How to respond to $http request
app.get ('/notify',function(req, res) {

	// Break apart body from incoming message to server
	var body = req.body;

	// Forward/publish  message to Socket.io listener
	io.sockets.emit('newmessage',{ deviceName: 'cRIO1234' }); 
	
    return res.send("DATA IS THE NEW BACON")
});

io.sockets.on('connection', function (socket) {
  console.log("initialising socketio ..");
  //socket.emit('news', { hello: 'world' });
  socket.on('from_client', function (data) {
    console.log("from client " + data);
    socket.broadcast.emit('changed' , data);
  });  