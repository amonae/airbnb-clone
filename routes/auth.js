const express = require("express");
const router = express.Router();
const { signIn, signUp } = require("../controllers/authController.js");

router.route("/login").post(signIn);

// put the "req.body" into an object or something when REFACTORING
router.route("/signup").post(signUp);

module.exports = router;
