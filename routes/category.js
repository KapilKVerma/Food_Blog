const express = require("express");
const router = express.Router();
const Category = require("../models/category.model");
const multer = require("multer");

// == Multer configuration ==
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/category");
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

// Recipe: get all users
router.route("/").get((req, res) => {
  Category.find({}, (err, catagories) => {
    if (err) res.json(err);
    else res.json(catagories);
  });
});
// Recipe: get one
router.route("/:id").get((req, res) => {
  Category.findOne({ _id: req.params.id }, (err, catagories) => {
    if (err) res.json(err);
    else res.json(catagories);
  });
});

// Implement Multer Here

// Category: new category route
router.route("/new").post(upload.single("image"), (req, res) => {
  Category.findOne({ name: req.body.name.trim() }, (err, category) => {
    if (category) res.json({ message: "category already exists" });
    else {
      const category = new Category({
        name: req.body.name,
        image: req.file.fieldname + "-" + req.file.originalname,
      });
      category.save((err, category) => {
        if (err) res.json(err);
        else res.json({ message: "new category has been created" });
      });
    }
  });
});

// Recepie: detele user
router.route("/:id/delete").delete((req, res) => {
  Category.findOneAndDelete({ _id: req.params.id }, (err, category) => {
    if (err) res.json(err);
    else res.json({ message: "category delete successfully" });
  });
});
module.exports = router;
