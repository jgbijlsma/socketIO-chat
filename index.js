const express = require("express");
const socketIO = require("socket.io");

const app = express();

app.use(express.static("client"));

const server = app.listen(process.env.PORT || 5000, () =>
  console.log("Server started!")
);

const io = socketIO(server);

io.on("connection", (socket) => {
  io.sockets.emit("chat-message", messages);
  socket.on("chat-message", (data) => {
    messages.unshift(data);
    io.sockets.emit("chat-message", messages);
    console.log(messages);
  });
});

const messages = [];
