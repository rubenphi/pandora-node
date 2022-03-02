const config = require(__base + "config/default.js");
const thinky = require("thinky")(config.rethinkdb);
const type = thinky.type;
const r = thinky.r;
const Errors = thinky.Errors;

var Curso = thinky.createModel("cursos", {
    nombre: type.string().min(1).required().allowNull(false),
    createdAt: type.date().allowNull(false)
});
module.exports = { Curso, r, Errors };
