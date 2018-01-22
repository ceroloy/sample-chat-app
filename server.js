const express = require("express");
const socket = require("socket.io");

//App setup
const app = express();
//Serving static files
app.use(express.static("public"));
const server = app.listen(3000);

//Server side socket setup
let io = socket(server);
io.on("connection", (socket) => {
  console.log("Socket", socket.id);
  socket.on("chat", (data) => {
    //Send the message to everyone
    //Refering to all sockets in chat room
    console.log("Message is received", data);
    io.sockets.emit("chat", data);
  });
});

//Broadcasting messages
