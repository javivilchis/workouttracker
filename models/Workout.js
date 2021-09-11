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
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises:
    [ExerciseSchema]
},
  {
    toJSON: {
      virtuals: true,
    }
  }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  if (this.exercises) {
    return this.exercises.reduce((accumulated, exercise) => {
      return accumulated + exercise.duration;
    }, 0);
  }

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
/*
WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((acc, exercise) => {
    return acc + exercise.duration;
  }, 0);
});
*/