const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Polls = require("../schemas/poll_schema");

router.post("/create", (req, res) => {
  console.log("Creating Poll..");
  const newPoll = new Polls({
    PollQuestion: req.body.PollQuestion,
    PollAnswers: {
      Answer1: {
        Answer: req.body.Answer1,
      },
      Answer2: {
        Answer: req.body.Answer2,
      },
      Answer3: {
        Answer: req.body.Answer3,
      },
      Answer4: {
        Answer: req.body.Answer4,
      },
      Answer5: {
        Answer: req.body.Answer5,
      },
    },
  });

  newPoll.save().then((item) => res.json(item));
});
router.get("/:id", (req, res) => {
  console.log(req.params.id);

  Polls.add({ GroupID: req.params.id }, (err, items) => {
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
