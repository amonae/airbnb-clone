const User = require("../models/User");

exports.profile = function (req, res) {
  if (req.params.username === req.user.username) {
    res.send(`Welcome to ${req.user.username}'s profile.`);
  } else {
    res.status(401);
    res.send("You are not authorized to view this profile!");
  }
};
