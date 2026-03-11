const express = require("express");
const router = express.Router();
const multer = require("multer");

const analyzeController = require("../controllers/analyzerController");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("manifest"), analyzeController.analyzeManifest);

module.exports = router;