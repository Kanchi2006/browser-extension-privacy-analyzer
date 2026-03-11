const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("manifest"), (req, res) => {
    try {

        let permissions = [];

        if (req.body.permissions) {
            permissions = req.body.permissions;
        }

        if (typeof permissions === "string") {
            permissions = [permissions];
        }

        const warnings = permissions.map(p => {
            return p + " permission may access sensitive data";
        });

        res.json({
            permissions: permissions,
            risk_score: permissions.length,
            warnings: warnings
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Analysis failed"
        });
    }
});

module.exports = router;