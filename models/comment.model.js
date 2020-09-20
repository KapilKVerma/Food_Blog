const mongoose = require("mongoose");

const newComment = new mongoose.Schema({
  comment: { type: String, required: true },
  author: { type: String, required: true },
});

const comment = mongoose.model("comment", newComment);
module.exports = comment;
