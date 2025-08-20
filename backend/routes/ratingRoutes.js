const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const ratingController = require("../controllers/ratingController");

router.post("/", auth, ratingController.submitRating);
router.get("/:userId", auth, ratingController.getRatings);

module.exports = router;


// This code defines routes for handling peer ratings in an Express application.