const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const roleCheck = require("../middleware/roleCheck");
const terminationController = require("../controllers/terminationController");

router.post("/", auth, roleCheck(["Manager", "CEO"]), terminationController.requestTermination);
router.put("/:id", auth, roleCheck(["CEO"]), terminationController.updateTerminationStatus);

module.exports = router;
