const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const roleCheck = require("../middleware/roleCheck");
const badgeController = require("../controllers/badgeController");

router.post("/", auth, roleCheck(["HR", "Manager", "CEO"]), badgeController.awardBadge);
router.get("/:userId", auth, badgeController.getBadges);

module.exports = router;
