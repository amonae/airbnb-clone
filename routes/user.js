const express = require("express");
const router = express.Router();
const { profile } = require("../controllers/userController.js");
const { ensureAuth } = require("../middleware/auth");

router.route("/:username").get(ensureAuth, profile);

module.exports = router;
