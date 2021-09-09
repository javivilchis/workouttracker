const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
  },
  name: {
    Type: String
  },
  weight: {
    Type: Number
  },
  sets: {
    Type: Number
  },
  reps: {
    Type: Number
  },
  duration: {
    Type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = exercise;