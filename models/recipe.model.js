const mongoose = require("mongoose");

const newRecipe = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
  ingredients: { type: String },
  preparation: { type: String, required: true },
  preparationtime: { type: String, required: true },
  views: { type: Number },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
  youtubeLink: { type: String },
});

const recipe = mongoose.model("recipe", newRecipe);
module.exports = recipe;
