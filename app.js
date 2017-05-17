/*
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

//Whenever someone connects this gets executed
io.on('connection', function(socket){
  console.log('A user connected');


  //Whenever someone disconnects this piece of code executed
  socket.on('disconnect', function () {
    console.log('A user disconnected');
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
*/


/*
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile('index.html');
//res.write()
res
});

var clients = 0;

io.on('connection', function(socket){
	 clients++;
socket.emit('newclientconnect',{ description: 'Hey, welcome!'});
socket.broadcast.emit('newclientconnect',{ description: clients + ' clients connected!'})

socket.on('button_click', function(msg) {
console.log("broadcasting "+msg+" click");
	socket.broadcast.emit('newclientconnect',{ description: msg+' button clicked'})
    });


 socket.on('disconnect', function () {
	       clients--;
		socket.broadcast.emit('newclientconnect',{ description: clients + ' clients connected!'})
             });
});


http.listen(5001, function(){
  console.log('listening on *:5001');
});
*/

//server.js
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile('index.html');
});

io.on('connection', function (socket){
  console.log('1 client connected');

  socket.on('bulb_status', function (data) {
    //console.log('bulb state', data);
socket.broadcast.emit('bulb_state',{ status: data})
  });

});
io.on('disconnect', function (socket){
   console.log('1 client disconnected');
});
http.listen(5001, function () {
  console.log('listening on *:5001');
});