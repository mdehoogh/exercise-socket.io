// server-side socket.io
// source: https://github.com/socketio/socket.io

const app    = require('express')();
const server = require('http').createServer(app);
const io     = require('socket.io')(server);

// define what to do when clients connect
io.on('connection', client => {
    console.log("Client: ",client);
    console.log("\tConnected!");
    // any client can disconnect!
    client.on('disconnect', () => { 
        console.log("Client: "+client);
        console.log("\tDisconnecting...");
    });
    // responding to any number of client events
    client.on('three-second counter', data => { 
        // TODO respond to event 'event'
        console.log("Client: "+client);
        console.log("\tReceived three-second counter data: ",data);
    });
});

app.use(require('express').static('public'));

server.listen(3000,()=>{
    console.log("Express server listening on port 3000.");
});

