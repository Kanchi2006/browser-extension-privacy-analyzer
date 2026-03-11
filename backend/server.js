const express = require("express");
<<<<<<< HEAD
HEAD
=======
>>>>>>> 3454c7d13403a035cd402356dd0a1f85d47df7d0
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Browser Extension Privacy Analyzer Backend Running");
});

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
<<<<<<< HEAD
const fs = require("fs");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Browser Extension Privacy Analyzer API Running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
910d20b07843c781f38c2e5a42004c2efdb81b01
=======
>>>>>>> 3454c7d13403a035cd402356dd0a1f85d47df7d0
});