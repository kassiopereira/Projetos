const express = require("express");
const path = require("path");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

let messages = [];

app.use("/", (req, res) => {
  res.render("index.html");
});

io.on("connection", (socket) => {
  console.log(`Usuario Conect ${socket.id}`);

  socket.emit('previusMessages', messages);

  socket.on("Send Message", data => {
    messages.push(data);
    socket.broadcast.emit("receivedMessage", data);
  });
});

server.listen(3000);
