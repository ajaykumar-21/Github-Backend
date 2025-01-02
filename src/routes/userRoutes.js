const express = require("express");
const {
  saveUserData,
  findMutualFriends,
  searchUsers,
  softDeleteUser,
  updateUserDetails,
} = require("../controllers/userController");

const router = express.Router();

//router for user
router.post("/", saveUserData);
router.get("/:username/mutual-friends", findMutualFriends);
router.get("/search", searchUsers);
router.delete("/:username/soft-delete", softDeleteUser);
router.put("/:username", updateUserDetails);

module.exports = router;
