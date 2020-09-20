const mongoose = require("mongoose");

const newUser = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true, minlength: 6 },
  subscribed: { type: Boolean },
});
const user = mongoose.model("user", newUser);
module.exports = user;
