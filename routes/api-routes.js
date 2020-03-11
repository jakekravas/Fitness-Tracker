const mongoose = require("mongoose");
let db = require("../models");

module.exports = function(app){
    // app.get("/api/workouts/range", (req, res) => {
    //     db.Workout.find({}).then(data => {
    //         res.json(data);
    //     });
    // })
    app.get("/api/workouts", (req, res) => {
        db.Workout.populate({}).then(data => {
            res.json(data);
        });
    })
}