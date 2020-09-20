const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipe.model");
const multer = require("multer");
const User = require("../models/user.model");
const Subscribed = require("../models/subscription.model");
const Category = require("../models/category.model");
const nodemailer = require("nodemailer");

// == Email Configuration ==
const sendMail = (email) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kapilkumaarverma@gmail.com",
      pass: "OmNamahShivaya!!!",
    },
  });

  let mailOptions = {
    from: "kapilkumaarverma@gmail.com", // TODO: email sender
    to: email, // TODO: email receiver
    subject: "New Message from Food_Blog",
    html: `<p>Hi,
      <h4>Checkout our new recipe.</h4>
      <h4>Link to the video</h4>
      <h4>Link to the website</p>`,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return console.log("Error occurs");
    }
    return console.log("Email sent!!!");
  });
};

// == Multer configuration ==
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/recipes");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Wrong file format!"), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

// ====Routes====

// recipe: get all users
router.route("/").get((req, res) => {
  Recipe.find({}, (err, recipes) => {
    if (err) res.json({ message: { msgbdy: err } });
    else res.json(recipes);
  });
});

router.route("/:id").get((req, res) => {
  Recipe.findById({ _id: req.params.id }, (err, recipe) => {
    if (err) res.json({ message: { msgbdy: err } });
    else res.json(recipe);
  });
});

// Implement Multer Here

// recipe: add recipes
router.route("/new").post(upload.single("image"), (req, res) => {
  Recipe.findOne({ name: req.body.name.trim() }, (err, recipe) => {
    if (recipe) res.json({ message: { msgbdy: "this recipe already exists" } });
    else {
      Category.findOne({ name: req.body.categories }, (err, category) => {
        if (err) res.json({ message: { msgbdy: err.message } });
        else {
          const recipe = new Recipe({
            name: req.body.name,
            image: req.file.fieldname + "-" + req.file.originalname,
            description: req.body.description,
            ingredients: req.body.ingredients,
            preparation: req.body.preparation,
            preparationtime: req.body.preparationtime,
            category: category._id,
            views: 0,
            youtubeLink: req.body.youtubeLink,
          });
          recipe.save((err, recipe) => {
            if (err) res.json({ message: { msgbdy: err.message } });
            else {
              res.json({ message: { msgbdy: "new recipe created" } });
              User.find({}, (err, users) => {
                if (err)
                  res.status(401).json({ message: { msgbdy: err.message } });
                else {
                  let emails = [];
                  users.map((user) => {
                    emails.push(user.email);
                  });
                  emails.map((email) => {
                    sendMail(email);
                  });
                }
              });
            }
            Subscribed.find({}, (err, subUsers) => {
              if (err)
                res.status(401).json({ message: { msgbdy: err.message } });
              else {
                let emails = [];
                subUsers.map((user) => {
                  emails.push(user.email);
                });
                emails.map((email) => {
                  sendMail(email);
                });
              }
            });
          });
        }
      });
    }
  });
});

// Implement Multer Here

// Recipe: update recipe views
router.route("/:id/updateviews").put((req, res) => {
  console.log(req.body.views);
  Recipe.findByIdAndUpdate(
    { _id: req.params.id },
    { views: req.body.views },
    (err, Recipe) => {
      if (err) res.json({ message: { msgbdy: err } });
      else
        res.json({
          message: { msgbdy: "Recipe has been updated successfully." },
        });
    }
  );
});

// Recipe: detele user
router.route("/:id/delete").delete((req, res) => {
  Recipe.findOneAndDelete({ _id: req.params.id }, (err, Recipe) => {
    if (err) res.json({ message: { msgbdy: err } });
    else
      res.json({
        message: { msgbdy: "Recipe has been deleted successfully." },
      });
  });
});
module.exports = router;
