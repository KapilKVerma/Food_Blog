const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/user.model");
const Subscription = require("../models/subscription.model");

// User: get authenticated user
router.route("/").get(auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    name: user.name,
    id: user._id,
  });
});
//user: get all users
router.route("/all").get(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});
// User: register users
router.route("/register").post(async (req, res) => {
  try {
    let { name, email, password, passwordCheck } = req.body;
    // validation
    if (!email || !password || !passwordCheck || !name)
      return res.status(400).json({ msg: "Not all fields have been entered" }); //bad request
    //  Password field is of 6 character long atleast.
    if (password.length < 6)
      return res
        .status(400)
        .json({ msg: "Password must be 6 characters long." });
    if (password !== passwordCheck)
      return res.status(400).json({ msg: "Password doesn't match" });

    const existingUser = await User.findOne({ email: email });

    if (existingUser)
      return res
        .status(400)
        .json({ msg: "Account already exists with this email" });

    if (!name) name = email;

    // Hashed the password before storing it.
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      name: name.trim(),
      email: email.trim(),
      password: passwordHash,
      subscribed: true,
    });

    const savedUser = await newUser.save((err, user) => {
      if (err) res.status(500).json(err.message);
      else res.json({ message: { msgbdy: "New User Registered" } });
    });
  } catch (err) {
    res.status(500).json(err.message); //internal server error
  }
});

// User: Login
router.route("/login").post(async (req, res) => {
  try {
    const { email, password } = req.body;

    //  validate
    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with this email has been registered" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    // Signin JWT token
    const token = jwt.sign({ id: user._id }, "C%*J]w9pyq5DEv4]rQD"); //jwt token stores the user ID to verify the current logined in user

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
      },
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
});
// User: update user
router.route("/:id/update").put((req, res) => {
  User.findByIdAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
    (err, user) => {
      if (err) res.json({ message: { msgbdy: err } });
      else
        res.json({
          message: { msgbdy: "user details has been updated successfully." },
        });
    }
  );
});

// User: detele user
router.route("/delete").delete(auth, async (req, res) => {
  User.findByIdAndDelete({ _id: req.user }, (err, user) => {
    if (err) res.json({ message: { msgbdy: err } });
    else
      res.json({
        message: { msgbdy: "user account has been deleted successfully." },
      });
  });
});

router.route("/tokenisvalid").post(async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, "C%*J]w9pyq5DEv4]rQD");
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json(err.message);
  }
});
module.exports = router;
