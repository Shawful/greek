// // Dependencies
// var express = require('express');
// var app = express();
// var server = require('http').createServer(app);
// var http = require('http');
// var path = require('path');


// // Setup Port to Use for Server Communication
// server.listen(3000);

// // var AWS = require('aws-sdk');
// //AWS.config.loadFromPath('/opt/apps/properties/awscred.json');


// // App is tied to Express.  These are Express settings.

// // Parses RESTful body content to determine XML/JSON/other formats
// app.use(express.bodyParser());

// // Not sure. Research
// app.use(express.methodOverride());

// // Establishes that this app will use a router (Express functionality).
// app.use(app.router);


// app.get('/', function(req, res) {
// //    console.log(__dirname);
// //    res.sendfile(__dirname + '/index.html');
//     return res.send("DATA IS THE NEW BACON")
// });


// // How to respond to $http request
// app.get ('/notify',function(req, res) {

// 	// Break apart body from incoming message to server
// 	var body = req.body;

// 	// Forward/publish  message to Socket.io listener
// 	io.sockets.emit('newmessage',{ deviceName: 'cRIO1234' }); 

//     return res.send("DATA IS THE NEW BACON")
// });

// io.sockets.on('connection', function (socket) {
//   console.log("initialising socketio ..");
//   //socket.emit('news', { hello: 'world' });
//   socket.on('from_client', function (data) {
//     console.log("from client " + data);
//     socket.broadcast.emit('changed' , data);
//   });  

////////////////////////////////////////////////////////////////////////

//var app = require('express')()
//  , server = require('http').createServer(app)
//  , io = require('socket.io').listen(server);


// var express = require('express');
// var app = express();
// var server  = require('http').createServer(app);
// var io = require('socket.io').listen(server);

// server.listen(3000);

// app.use(express.bodyParser());



var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
io.serveClient(true);

// app.get('/', function(req, res){
//   res.sendfile('index.html');
// });

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


// app.get('/', function (req, res) {
//   // res.sendfile(__dirname + '/index.html');
//   console.log("connection established on port 3000");
// });


app.get('/notification',function(req,res){
    
    console.log("message incoming ....");
    
    io.sockets.emit('news',{ body: 'The hackathon is almost over!' }); 

    return res.send("message sent");
});


// app.post('/devices',function(req,res){
    
//     //console.log("New Device "+ req.body.deviceName+" posted ");
    
//     console.log("body : "+req.body.device);
//     io.sockets.emit('newdevice',{"device" : req.body.device}); 

//     return res.send("Device broadcasted");
// });




// io.sockets.on('connection', function (socket) {
//   console.log("initializing socketio ..");
//   //socket.emit('news', { hello: 'world' });
//   socket.on('from_client', function (data) {
//     console.log("from client " + data);
//     socket.broadcast.emit('changed' , data);
//   });   
  
  
// });