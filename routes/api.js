const router = require("express").Router();
const db = require("../models/index.js");

router.get("/api/workouts/range", async (req, res) => {
     const result = await db.Workout.find({}).sort({ day: -1 }).limit(10);
     res.send(result.reverse());
});

router.get("/api/workouts", async (req, res) => {
     let response = await db.Workout.find({});
     res.send(response);
});

router.post("/api/workouts/", (req, res) => {
     db.Workout.create(req.body)
          .then(dbWorkout => {
               res.json(dbWorkout);
          })
          .catch(err => {
               res.status(400).json(err);
          });
});
router.put("/api/workouts/:id", async (req, res) => {

     let workout = await db.Workout.findOne({
          _id: req.params.id,
     });
     workout.exercises.push(req.body);

     let result = await workout.save();
     res.send(result);


});
router.delete("/api/workouts/delete/:id", async (req, res) => {
     // hardcode an ID or pass in an ID to remove
     let id = req.params.id;
     let remove = await db.Workout.deleteOne({ _id: id });
     res.send(remove);
})

module.exports = router;