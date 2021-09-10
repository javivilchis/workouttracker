const router = require("express").Router();
const db = require("../models/index.js");

router.get("/api/workouts/range", async (req, res) => {
     const result = await db.Workout.find({}).sort({ day: -1 }).limit(5);
     res.send(result);
});

router.get("/api/workouts", (req, res) => {
     db.Workout.find({})
          .sort({ date: -1 })
          .then(dbWorkout => {
               res.json(dbWorkout);
          })
          .catch(err => {
               res.json(err);
          });
})
router.post("/api/workouts/", ({ body }, res) => {
     db.create(body)
          .then(dbWorkout => {
               res.json(dbWorkout);
          })
          .catch(err => {
               res.status(400).json(err);
          });
});
router.put("/api/addExercise", ({ body }, res) => {
     db.insertMany(body)
          .then(dbExercise => {
               res.json(dbExercise);
          })
          .catch(err => {
               res.status(400).json(err);
          });
});


module.exports = router;