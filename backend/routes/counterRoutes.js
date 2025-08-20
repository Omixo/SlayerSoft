const router = require("express").Router();
const ctrl = require("../controllers/counterController");

router.get("/", ctrl.getAll);           // GET /counters
router.get("/:role", ctrl.getOne);      // GET /counters/HR
router.put("/:role", ctrl.update);      // PUT /counters/HR

module.exports = router;