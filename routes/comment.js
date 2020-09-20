const express = require("express");
const router = express.Router();
const Comment = require("../models/comment.model");
const Recipe = require("../models/recipe.model");
const User = require("../models/user.model");
const auth = require("../middleware/auth");

// Comments: find comments of a recepie
router.route("/").get((req, res) => {
  Comment.find({}, (err, comments) => {
    if (err) res.json({ message: err });
    else res.json(comments);
  });
});

// Comments: find comments of a recepie
router.route("/:id").get((req, res) => {
  Comment.findOne({ _id: req.params.id }, (err, comment) => {
    if (err) res.json({ message: err });
    else res.json(comment);
  });
});

// Comments: new comment route
router.route("/new").post((req, res) => {
  User.findOne({ _id: req.body.user }, (err, user) => {
    if (err) res.json({ message: err });
    else {
      const comment = new Comment({
        comment: req.body.comment,
        author: user.name, //name of the user create this comment
      });

      comment.save((err, comment) => {
        if (err) res.json({ messsage: err });
        else {
          Recipe.findOne({ _id: req.body.recipeId }, (err, recipe) => {
            if (err) res.json({ messsage: err });
            else {
              recipe.comments.push(comment);
              recipe.save((err, recepie) => {
                if (err) res.json({ messsage: err });
                else
                  res.json({
                    message: "added comment to recipe successfully",
                  });
              });
            }
          });
        }
      });
    }
  });
});

// Recepie: detele user
router.route("/:id/delete").delete((req, res) => {
  Comment.findOneAndDelete({ _id: req.params.id }, (err, comment) => {
    if (err) res.json({ message: err });
    else res.json({ message: "comment deleted!" });
  });
});
module.exports = router;
