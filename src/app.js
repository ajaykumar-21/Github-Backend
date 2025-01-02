const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(express.json());

// coonnection for mongoDb
mongoose
  .connect("mongodb://127.0.0.1:27017/github_user")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection error:", error));

// Routes
app.use("/api/users", userRoutes);

module.exports = app;
