const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: [true, "Please enter your username"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },
});

module.exports = mongoose.model("User", UserSchema);
