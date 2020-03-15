const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const port = process.env.PORT || 1028;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(port, () => {
    console.log(`Server up at http://localhost:${port}`);
})