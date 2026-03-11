const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Browser Extension Privacy Analyzer API Running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});