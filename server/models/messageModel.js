const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.EventEmitter.ObjectId, ref: "Chat" },
  },
  {
    timestamps: true,
  }
);

const messageModel = mongoose.model("messages", messageSchema);
module.exports = messageModel;
