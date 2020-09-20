const mongoose = require("mongoose");

const newCategory = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});
const category = mongoose.model("category", newCategory);
module.exports = category;
