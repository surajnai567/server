const express = require("express");
const app = express();
const port = 8080;
const http = require("http").createServer();
const io = require("socket.io")(http);
//Listen for a client connection
//Listen the HTTP Server
http.listen(port, () => {
    console.log("Server Is Running Port: " + port);
});

io.on("connection", (socket) => {
    //Socket is a Link to the Client
    console.log("New Client is Connected!", socket.id);
    //Here the client is connected and we can exchanged
    //Send Message
    //We need to use the Socket (the link between the server and the connected user(s)).
    socket.emit("welcome", "Hello and Welcome to the Server");
    socket.on('w', (msg) => {
    console.log('message: ' + msg);
  });
});