const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
