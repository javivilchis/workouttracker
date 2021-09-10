const router = require("express").Router();
const db = require("../models/index.js");


router.get("/api/workouts", (req, res) => {
     db.Workout.find({})
          .then(dbWorkout => {
               res.json(dbWorkout);
          })
          .catch(err => {
               res.json(err);
          });
})
router.post("/api/createWorkout", ({ body }, res) => {
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
router.post("/api/workouts/add", ({ body }, res) => {
     //res.json(body);
     db.insertMany(body)
          .then(dbWorkout => {
               res.json(dbWorkout);
          })
          .catch(err => {
               res.status(400).json(err);
          });
});

module.exports = router;