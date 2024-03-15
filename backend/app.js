const express = require("express");
const dotenv = require("dotenv");


const app = express();
dotenv.config({
    path: "./config/.env"
});


// All Api's

app.get("/", (req, res) => {
    res.send("Welcome...");
})


module.exports = { app };