const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Bugs = require("../schemas/bugs_schema");

router.get("/:id", (req, res) => {
  console.log(req.params.id);

  Bugs.find({ GroupID: req.params.id }, (err, items) => {
    console.log("Bug Find");
    console.log(items);
    if (err) res.send(err);
    else res.json(items);
  });

  console.log("Bugs loaded");
});

mongoose.connect(
  "mongodb+srv://Haunt626:Claybub10@calebsexpress-qez3f.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

module.exports = router;
