const express = require("express");
const morgan = require("morgan");

const port = process.env.PORT || 1028;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(port, () => {
    console.log(`Server up at http://localhost:${port}`);
})