const express = require("express");
const router = express.Router();
const {
  getExample,
  addExample,
  deleteExample,
} = require("../controllers/exampleController");

router.route("/").get(getExample).post(addExample);

router.route("/:id").delete(deleteExample);

module.exports = router;
