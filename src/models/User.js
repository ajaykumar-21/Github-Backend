const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: string, required: true, unique: true },
    avatar_url: String,
    bio: String,
    location: String,
    public_repos: Number,
    public_gists: Number,
    followers: Number,
    following: Number,
    friends: [String],
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
