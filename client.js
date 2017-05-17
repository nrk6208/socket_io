//client.js
var io = require('socket.io-client');
var socket = io.connect('http://35.154.174.246:5001', {reconnect: true});

// Add a connect listener
socket.on('newclientconnect', function (data) {
    console.log(data.description);
});