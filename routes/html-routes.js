const path = require("path");

module.exports = function(app){
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index"));
    });

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats"));
    });

    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise"));
    });
}