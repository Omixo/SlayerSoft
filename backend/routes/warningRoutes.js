const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const roleCheck = require("../middleware/roleCheck");
const warningController = require("../controllers/warningController");

router.post("/", auth, roleCheck(["HR"]), warningController.issueWarning);
router.get("/:userId", auth, warningController.getWarnings);

module.exports = router;


// This code defines routes for handling employee warnings in an Express application.