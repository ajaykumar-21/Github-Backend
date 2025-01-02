const User = require("../models/User");
const { fetchGitHubUser } = require("../services/githubService");

exports.saveUserData = async (req, res) => {
  const { username } = req.body;
  try {
    let user = await User.findOne({ username });
    if (!user) {
      const userData = await fetchGitHubUser(username);
      user = new User(userData);
      await user.save();
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user data" });
  }
};
