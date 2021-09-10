const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    Default: Date.now
  },
  exercises:
  {
    type: Schema.Types.ObjectId,
    ref: "Exercise"
  }

}
);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
/*
WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((acc, exercise) => {
    return acc + exercise.duration;
  }, 0);
});
*/