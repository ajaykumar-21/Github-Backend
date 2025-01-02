const axios = require("axios");

// search username from github using Api and return data;
exports.fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    // console.log(response);
    return {
      username: response.data.login,
      avatar_url: response.data.avatar_url,
      bio: response.data.bio,
      location: response.data.location,
      public_repos: response.data.public_repos,
      public_gists: response.data.public_gists,
      followers: response.data.followers,
      following: response.data.following,
    };
  } catch (error) {
    throw new Error("GitHub API error");
  }
};
