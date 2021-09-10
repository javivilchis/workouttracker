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
  },
},
  {
    toJSON: {
      virtuals: true,
    }
  }
);

ExerciseSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((accumulated, exercise) => {
    return accumulated + exercise.duration;
  }, 0);
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