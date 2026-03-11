<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const multer = require("multer");

const analyzeController = require("../controllers/analyzerController");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("manifest"), analyzeController.analyzeManifest);

module.exports = router;
=======
const fs = require("fs");
const analyzePermissions = require("./riskEngine");

function analyzeExtension(manifestPath) {

    try {

        // Read manifest.json
        const manifestData = fs.readFileSync(manifestPath, "utf8");
        const manifest = JSON.parse(manifestData);

        // Extract permissions
        const permissions = manifest.permissions || [];

        // Send permissions to risk engine
        const result = analyzePermissions(permissions);

        return {
            extensionName: manifest.name || "Unknown Extension",
            permissions: permissions,
            analysis: result
        };

    } catch (error) {

        return {
            error: "Failed to analyze extension",
            details: error.message
        };

    }

}

module.exports = analyzeExtension;
>>>>>>> 910d20b07843c781f38c2e5a42004c2efdb81b01
