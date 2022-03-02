const express = require("express");
const controller = require("./controller");

const router = express.Router();

router.get("/", controller.index);

router.post("/", controller.store);

router.get("/:id", controller.show);
router.put("/:id", controller.update);


router.delete("/:id", controller.remove);

module.exports = router;