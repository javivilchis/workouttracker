const router = require("express").Router();
//const { Workout } = require("../models/index.js");
const db = require("../models/index.js");

router.get("/api/workouts/range", async (req, res) => {
     const result = await db.Workout.find({}).sort({ day: -1 }).limit(10);
     res.send(result);
});

router.get("/api/workouts", async (req, res) => {
     // let remove = await db.Workout.remove({ _id: "613cde0919325f3c20c4f710" });
     // res.send(remove);

     let response = await db.Workout.find({});
     res.send(response);

});

router.post("/api/workouts/", (req, res) => {
     console.log("add workout");
     console.log(req.body);
     db.Workout.create(req.body)
          .then(dbWorkout => {
               res.json(dbWorkout);
          })
          .catch(err => {
               res.status(400).json(err);
          });
});
router.put("/api/workouts/:id", async (req, res) => {
     console.log("PUT api");

     let workout = await db.Workout.findOne({
          _id: req.params.id,
     });

     console.log("Workout ID: ", workout);
     console.log("Workout Exercise: ", req.body);
     console.log("*****************************");

     // if (workout.exercises) {
     workout.exercises.push(req.body);
     // } else {
     //      workout.exercises = [];
     //      console.log(workout.exercises)
     //      workout.exercises.push(req.body);
     // }

     console.log(workout);

     let result = await workout.save();
     console.log(result);
     res.send(result);


});
router.delete("/api/workouts/delete/:id", async (req, res) => {
     // hardcode an ID or pass in an ID to remove
     let id = req.params.id;

     let remove = await db.Workout.deleteOne({ _id: id });
     res.send(remove);
})

module.exports = router;