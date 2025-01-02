const express = require("express");
const {
  saveUserData,
  findMutualFriends,
} = require("../controllers/userController");

const router = express.Router();

//router for user
router.post("/", saveUserData);
router.get('/:username/mutual-friends', findMutualFriends);

module.exports = router;
