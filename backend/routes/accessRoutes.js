const router = require("express").Router();
const ctrl = require("../controllers/accessController");

router.get("/", ctrl.getAll);       // GET /slayer-access
router.put("/:id", ctrl.update);    // PUT /slayer-access/:id

module.exports = router;