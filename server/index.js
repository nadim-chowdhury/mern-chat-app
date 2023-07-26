const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.listen(8000, () => {
  console.log("Server Started at 8000");
});
