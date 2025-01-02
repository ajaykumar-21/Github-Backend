const express = require("express");
const { saveUserData } = require("../controllers/userController");

const router = express.Router();

router.post("/", saveUserData);

module.exports = router;
