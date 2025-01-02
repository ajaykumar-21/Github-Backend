const User = require("../models/User");
const { fetchGitHubUser } = require("../services/githubService");

// Save user data from GitHub API
exports.saveUserData = async (req, res) => {
  const { username } = req.body;
  try {
    let user = await User.findOne({ username }); //check username present inDB or Not
    if (!user) {
      const userData = await fetchGitHubUser(username);
      user = new User(userData); // creating new user data
      await user.save(); // save the user data
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "Error fetching user data" });
  }
};

exports.findMutualFriends = async (req, res) => {
  try {
    const { username } = req.params;

    //fetch user from database
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ error: "User not found" });

    // Fallback for undefined followers and following
    const followers = user.followers || [];
    const following = user.following || [];

    // Calculate mutual friends
    const mutualFriends = followers.filter((follower) =>
      following.includes(follower)
    );

    // Update the friends field in the user document
    user.friends = mutualFriends;
    await user.save();

    res.json({
      username: user.username,
      friends: user.friends,
    });
  } catch (error) {
    console.error("Error finding mutual friend", error);
    res.status(400).json({ error: "Internal server error" });
  }
};

exports.searchUsers = async (req, res) => {
  try {
    const { query } = req.query;

    // Perform case-insensitive search on username and location
    const users = await User.find({
      $or: [
        { username: { $regex: query, $options: "i" } },
        { location: { $regex: query, $options: "i" } },
      ],
    });

    res.json(users);
  } catch (error) {
    console.error("Error searching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

