const router = require("express").Router();
const { Workout } = require("../models/index.js");
const db = require("../models/index.js");

router.get("/api/workouts/range", async (req, res) => {
     const result = await db.Workout.find({}).sort({ day: -1 }).limit(5);
     res.send(result);
});

router.get("/api/workouts", (req, res) => {
     console.log("getting workouts");
     db.Workout.find({})
          .sort({ date: -1 })
          .then(dbWorkout => {
               console.log(dbWorkout[0]);
               res.json(dbWorkout);
          })
          .catch(err => {
               res.json(err);
          });
});
router.post("/api/workouts/", ({ body }, res) => {
     db.Workout.create(body)
          .then(dbWorkout => {
               res.json(dbWorkout);
          })
          .catch(err => {
               res.status(400).json(err);
          });
});
router.put("/api/workouts/:id", async (req, res) => {
     // console.log(req.body);
     // console.log(req.params.id);
     const workout = await db.Workout.findOne({
          _id: req.params.id,
     });
     workout.push(req.body)
          .then(dbWorkout => {
               res.send(update);
          })
          .catch(err => {
               res.status(400).json(err);
          });
     // workout.exercises.push(req.body);
     // const update = await workout.save();
     // console.log(update);
     // res.send(update);
});


module.exports = router;