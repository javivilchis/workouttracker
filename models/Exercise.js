const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
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
  distance: {
    Type: Number
  },
  date: {
    type: Date,
    default: Date.now
  },
  day: {
    type: Date
  }

});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;

/*
 exercises: [
      {
        type: 'cardio',
        name: 'Running',
        duration: 25,
        distance: 4,
      },
    ],
    */