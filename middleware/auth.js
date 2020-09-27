const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token)
      return res
        .status(401)
        .json({ message: "No authentication token, authorization denied." });
    const verified = jwt.verify(token, process.env.JWT_SECRET); //it will verify the token against secret. // come again here.
    if (!verified)
      return res
        .status(401)
        .json({ message: "Verification failed. Autherization denied." });
    req.user = verified.id;
    next();
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = auth;
