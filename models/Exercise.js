const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
  },
  name: {
    type: String
  },
  weight: {
    type: Number
  },
  sets: {
    type: Number
  },
  reps: {
    type: Number
  },
  duration: {
    type: Number
  },
  distance: {
    type: Number
  },

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