const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Polls = require("../schemas/poll_schema");

router.post("/create", (req, res) => {
  console.log("Creating Poll..");
  try {
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
    console.log("Poll Created");
  } catch (error) {
    res.send(error);
  }
});
router.get("/", (req, res) => {
  console.log("Yooo");
  res.send("Yo");
});

mongoose.connect(
  "mongodb+srv://Haunt626:Claybub10@calebsexpress-qez3f.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

module.exports = router;
