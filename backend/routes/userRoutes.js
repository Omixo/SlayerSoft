const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const roleCheck = require("../middleware/roleCheck");
const userController = require("../controllers/userController");

router.get("/me", auth, userController.getMe);
router.post("/", auth, roleCheck(["HR", "Manager", "CEO"]), userController.createUser);

module.exports = router;


// This code defines routes for handling user-related operations in an Express application.