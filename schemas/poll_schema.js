const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Poll Schema

const Polls = new Schema({
  PollQuestion: {
    type: String,
    required: true,
  },
  Answer1: {
    type: String,
    required: true,
  },
  Answer2: {
    type: String,
    required: true,
  },
  Answer3: {
    type: String,
    required: false,
  },
  Answer4: {
    type: String,
    required: false,
  },
  Answer5: {
    type: String,
    required: false,
  },
  A1: {
    type: Number,
    required: true,
    default: 0,
  },
  A2: {
    type: Number,
    required: true,
    default: 0,
  },
  A3: {
    type: Number,
    required: false,
  },
  A4: {
    type: Number,
    required: false,
  },
  A5: {
    type: Number,
    required: false,
  },
});

module.exports = Poll = mongoose.model("Polls", Polls);
