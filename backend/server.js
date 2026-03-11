const express = require("express"); <<
<< << < HEAD
const cors = require("cors");

const analyzeRoute = require("./routes/analyze");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/analyze", analyzeRoute);

const PORT = 5000;

app.listen(PORT, () => {
            console.log("Server running on port", PORT); ===
            === =
            const fs = require("fs");
            const app = express();

            app.use(express.json());

            app.get("/", (req, res) => {
                res.send("Browser Extension Privacy Analyzer API Running");
            });

            app.listen(3000, () => {
                console.log("Server running on port 3000"); >>>
                >>> > 910 d20b07843c781f38c2e5a42004c2efdb81b01
            });