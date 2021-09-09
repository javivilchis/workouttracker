const router = require("express").Router();
const Transaction = require("../models/transaction.js");
const Exercise = require("../models/exercise.js");

router.post("/api/createWorkout", ({ body }, res) => {
     Transaction.create(body)
          .then(dbTransaction => {
               res.json(dbTransaction);
          })
          .catch(err => {
               res.status(400).json(err);
          });
});
router.put("/api/addExercise", ({ body }, res) => {
     Exercise.insertMany(body)
          .then(dbExercise => {
               res.json(dbExercise);
          })
          .catch(err => {
               res.status(400).json(err);
          })
});
router.post("/api/transaction/bulk", ({ body }, res) => {
     Transaction.insertMany(body)
          .then(dbTransaction => {
               res.json(dbTransaction);
          })
          .catch(err => {
               res.status(400).json(err);
          });
});

router.get("/api/getWorkoutsInRange", (req, res) => {
     Exercise.find({})
          .sort({ date: -1 })
          .then(dbExercise => {
               res.json(dbExercise);
          })
          .catch(err => {
               res.status(400).json(err);
          });
});

module.exports = router;

/* for example */
/*
db.User.create({ name: "Ernest Hemingway" })
          .then(dbUser => {
               console.log(dbUser);
          })
          .catch(({ message }) => {
               console.log(message);
          });

app.get("/notes", (req, res) => {
     db.Note.find({})
          .then(dbNote => {
               res.json(dbNote);
          })
          .catch(err => {
               res.json(err);
          });
});

app.get("/user", (req, res) => {
     db.User.find({})
          .then(dbUser => {
               res.json(dbUser);
          })
          .catch(err => {
               res.json(err);
          });
});

app.post("/submit", ({ body }, res) => {
     db.Note.create(body)
          .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
          .then(dbUser => {
               res.json(dbUser);
          })
          .catch(err => {
               res.json(err);
          });
});

app.get("/populateduser", (req, res) => {
     db.User.find({})
          .populate("notes")
          .then(dbUser => {
               res.json(dbUser);
          })
          .catch(err => {
               res.json(err);
          });
});
*/