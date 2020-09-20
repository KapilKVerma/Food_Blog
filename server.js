const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.use("/public", express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/BLOG_app", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// ===Routes===
const userRoutes = require("./routes/user");
const recipeRoutes = require("./routes/recipe");
const commentRoutes = require("./routes/comment");
const subscriptionRoutes = require("./routes/subcription");
const categoryRoutes = require("./routes/category");

app.use("/user", userRoutes);
app.use("/recipe", recipeRoutes);
app.use("/comment", commentRoutes);
app.use("/category", categoryRoutes);
app.use("/subscription", subscriptionRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, (req, res) => {
  console.log("Server is running " + PORT);
});
