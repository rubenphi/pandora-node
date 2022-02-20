const express = require("express");
const respuestas = require("../components/respuestas/routes");
const router = express.Router();
router.use("/api/respuestas", respuestas);
module.exports = router;
