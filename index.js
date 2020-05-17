const express = require("express");
const socketIO = require("socket.io");

const app = express();

const server = app.listen(process.env.PORT || 5000, () =>
  console.log("Server started!")
);

const io = socketIO(server);

io.on("connection", (socket) => {
  socket.on("chat-message", (data) => {
    io.sockets.emit("chat-message", data);
  });
});
