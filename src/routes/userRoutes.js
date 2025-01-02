const express = require("express");
const {
  saveUserData,
  findMutualFriends,
  searchUsers,
} = require("../controllers/userController");

const router = express.Router();

//router for user
router.post("/", saveUserData);
router.get("/:username/mutual-friends", findMutualFriends);
router.get("/search", searchUsers);

module.exports = router;
