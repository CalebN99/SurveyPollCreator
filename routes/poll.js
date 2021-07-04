const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Polls = require("../schemas/poll_schema");

router.post("/create", (req, res) => {
  console.log("Creating Poll..");
  try {
    const newPoll = new Polls({
      PollQuestion: req.body.PollQuestion,
      Answer1: req.body.Answer1,
      Answer2: req.body.Answer2,
      Answer3: req.body.Answer3,
      Answer4: req.body.Answer4,
      Answer5: req.body.Answer5,
      A3: req.body.A3,
      A4: req.body.A4,
      A5: req.body.A5,
    });

    newPoll.save().then((item) => {
      console.log(item);
      res.json(item);
    });
  } catch (error) {
    console.log("Creating Poll Failed..");
    res.send(error);
  }

  console.log("Poll Created");
});
router.get("/:id", (req, res) => {
  console.log(req.params.id);
  Polls.findById(req.params.id, (err, items) => {
    if (err) res.send(err);
    else res.json(items);
  });
});

mongoose.connect(
  "mongodb+srv://Haunt626:Claybub10@calebsexpress-qez3f.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

module.exports = router;
