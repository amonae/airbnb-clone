const mongoose = require("mongoose");

const ExampleSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Hey! Tell us your name!"],
  },
  randomnumber: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("Example", ExampleSchema);
