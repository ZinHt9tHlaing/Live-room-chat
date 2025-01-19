const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const formatMsg = require("./utils/formatMsg");

const app = express();

// middleware
app.use(cors());

const PORT = 8000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});

const io = socketIO(server, {
  cors: "*",
});

// Run when client to server connected
io.on("connection", (socket) => {
  console.log("client connected.");

  const BOT = "ROOM MANAGER BOT";
  // send welcome message to joined room
  socket.emit("message", formatMsg(BOT, "Welcome to the room."));

  // send joined message to all users excepted of joined room
  socket.broadcast.emit(
    "message",
    formatMsg(BOT, "Anonymous user joined the room.")
  );

  socket.on("disconnect", (_) => {
    io.emit("message", formatMsg(BOT, "Anonymous user leave the room."));
  });
});
