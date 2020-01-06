// source: https://github.com/socketio/socket.io-client
var socket = require('socket.io-client')('http://localhost:3000');

socket.on('connect', function(){
    console.log("Connected!");
});
// respond to a number of events
socket.on('event', function(data){

});
socket.on('disconnect', function(){
    console.log("Disconnected!");
    clearInterval(intervalId);
    // TODO 
});

console.log("Connecting...");
socket.connect();

var count=0;
var intervalId=setInterval(() => {
    count++;
    // send the 'event' event with count as argument???
    socket.emit('three-second counter',{count:count});   
}, 3000);

setTimeout(function(){
    console.log("Disconnecting...");
    socket.disconnect();
},30000);
