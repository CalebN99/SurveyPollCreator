const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Poll Schema
const Polls = new Schema({
  PollQuestion: {
    type: String,
    required: true,
  },
  PollAnswers: [
    {
      Answer1: [
        {
          Answer: {
            type: String,
            required: true,
          },
          Selected: {
            type: Number,
            required: true,
            default: 0,
          },
        },
      ],
      Answer2: [
        {
          Answer: {
            type: String,
            required: true,
          },
          Selected: {
            type: Number,
            required: true,
            default: 0,
          },
        },
      ],
      Answer3: [
        {
          Answer: {
            type: String,
            required: false,
          },
          Selected: {
            type: Number,
            required: true,
            default: 0,
          },
        },
      ],
      Answer4: [
        {
          Answer: {
            type: String,
            required: false,
          },
          Selected: {
            type: Number,
            required: true,
            default: 0,
          },
        },
      ],
      Answer5: [
        {
          Answer: {
            type: String,
            required: false,
          },
          Selected: {
            type: Number,
            required: true,
            default: 0,
          },
        },
      ],
    },
  ],
});

module.exports = Polls = mongoose.model("Polls", Polls);
