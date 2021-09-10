const router = require("express").Router();
const { Workout } = require("../models/index.js");
const db = require("../models/index.js");

router.get("/api/workouts/range", async (req, res) => {
     const result = await db.Workout.find({}).sort({ day: -1 }).limit(5);
     res.send(result);
});

router.get("/api/workouts", async (req, res) => {
     // let response = await db.Workout.find({})
     //      .then(dbWorkout => {
     //           console.log("Workout One: ", JSON.stringify(dbWorkout));
     //           res.json(dbWorkout);
     //      })
     //      .catch(err => {
     //           res.json(err);
     //      });

     let response = await Workout.find({});
     console.log(response[0]);
     console.log(response);
     res.send(response);
     // console.log("getting workouts");
     // db.Workout.find({})
     //      .then(dbWorkout => {
     //           console.log("Workout One: ", JSON.stringify(dbWorkout));
     //           res.json(dbWorkout);
     //      })
     //      .catch(err => {
     //           res.json(err);
     //      });
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
     }).select("_id").lean();
     console.log(workout);

     db.Workout.updateOne(req.body)
          .then(dbWorkout => {
               console.log("HEY", dbWorkout);
               res.send(dbWorkout);
          })
          .catch(err => {
               res.status(400).json(err);
          });

});
router.post("/api/workouts/:id", async (req, res) => {
     // hardcode an ID or pass in an ID to remove
     let id = req.id;
     let remove = await Workout.remove({ _id: id });
     res.send(remove);
})

module.exports = router;