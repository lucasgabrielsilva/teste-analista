const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
console.log("API starting...");

app.use("/api", require("./src/routes"));

app.listen(parseInt(process.env.PORT), () => {
    console.log("Listen on port:", process.env.SERVER_PORT);
}).on("error", (err) => {
    process.exit(err);
});

process.on("exit", (err) => {
    console.log("ERROR: ", err.toString());
    console.log("API is closing...");
});