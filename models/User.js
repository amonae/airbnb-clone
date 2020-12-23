const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: [true, "Please enter your email"],
  },
  username: {
    type: String,
    trim: true,
    required: [true, "Please provide a username"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },
});

module.exports = mongoose.model("User", UserSchema);
