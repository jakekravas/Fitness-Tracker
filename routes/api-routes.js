// const mongoose = require("mongoose");
let db = require("../models");

module.exports = function(app){
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (err, data) => {
            if (err) throw err;
            res.json(data);
        })
    });

    app.get("/api/workouts/range", (req, res) => {
        let year = new Date().getFullYear();
        let month = new Date().getMonth();
        let date = new Date().getDate();
        let weekPriorDate = new Date(year, month, date - 7);

        db.Workout.find({day: {$gte: weekPriorDate}}, (err, data) => {
            if (err) throw err;
            res.json(data);
        })

    })

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.updateOne(
            {_id: req.params.id},
            {$push: {exercises: req.body}})
            .then(data => {
                res.json(data);
            });
    });

    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body).then(data => {
            res.json(data);
        });
    });
}