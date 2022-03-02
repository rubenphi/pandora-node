const express = require("express");
const respuestas = require("../components/respuestas/routes");
const cursos = require("../components/cursos/routes");

const router = express.Router();
router.use("/api/respuestas", respuestas);
router.use("/api/cursos", cursos);
module.exports = router;
