const mongoose = require("mongoose");

const newSubscription = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const subscription = mongoose.model("subscription", newSubscription);
module.exports = subscription;
