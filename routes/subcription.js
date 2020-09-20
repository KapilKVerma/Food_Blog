const express = require("express");
const router = express.Router();
const Subscription = require("../models/subscription.model");

// Recepie: get all users
router.route("/").get((req, res) => {
  Subscription.find({}, (err, subscriptions) => {
    if (err) res.json({ message: { msgbdy: err } });
    else res.json(subscriptions);
  });
});

// Recepie: register users
router.route("/subscribe").post((req, res) => {
  Subscription.findOne({ email: req.body.email }, (err, subscription) => {
    if (subscription) res.json({ message: { msgbdy: "Already Subscribed!" } });
    else {
      const subscription = new Subscription({
        name: req.body.name.trim(),
        email: req.body.email.trim(),
      });
      subscription.save((err, subscription) => {
        if (err) res.json({ message: { msgbdy: err } });
        else res.json({ message: { msgbdy: "Subscribed Successfull!" } });
      });
    }
  });
});

// Recepie: detele user
router.route("/:id/delete").delete((req, res) => {
  Subscription.findByIdAndDelete(
    { _id: req.params.id },
    (err, subscription) => {
      if (err) res.json({ message: { msgbdy: err } });
      else
        res.json({
          message: { msgbdy: "user unsubscribed." },
        });
    }
  );
});
module.exports = router;
