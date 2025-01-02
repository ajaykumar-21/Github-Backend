const axios = require("axios");

exports.fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/mralexgray`);
    console.log(response);
  } catch (error) {
    throw new error("Github Api error");
  }
};
