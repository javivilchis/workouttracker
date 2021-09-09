const router = require("express").Router();
const db = require("../models/index.js");
// const Transaction = require("../models/transaction.js");
// const Exercise = require("../models/exercise.js");
router.get("/api/workouts/exercise", ({ body }, res) => {
     res.json(body);
})
router.post("/api/createWorkout", ({ body }, res) => {
     res.json(body);
     // db.create(body)
     //      .then(dbWorkout => {
     //           res.json(dbWorkout);
     //      })
     //      .catch(err => {
     //           res.status(400).json(err);
     //      });
});
router.put("/api/addExercise", ({ body }, res) => {
     res.json(body);
     // db.insertMany(body)
     //      .then(dbExercise => {
     //           res.json(dbExercise);
     //      })
     //      .catch(err => {
     //           res.status(400).json(err);
     //      });
});
router.post("/api/workouts/add", ({ body }, res) => {
     res.json(body);
     // db.insertMany(body)
     //      .then(dbWorkout => {
     //           res.json(dbWorkout);
     //      })
     //      .catch(err => {
     //           res.status(400).json(err);
     //      });
});

module.exports = router;