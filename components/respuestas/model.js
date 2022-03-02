const config = require(__base + "config/default.js");
const thinky = require("thinky")(config.rethinkdb);
const type = thinky.type;
const r = thinky.r;
const Errors = thinky.Errors;

var Respuesta = thinky.createModel("respuestas", {
    pregunta_id: type.string().min(1).required().allowNull(false),
    grupo_id: type.string().min(1).required().allowNull(false),
    opcion_id: type.string().min(1).required().allowNull(false),
    cuestionario_id: type.string().min(1).required().allowNull(false),
    puntaje: type.number().min(0).required().allowNull(false),
    existe: type.boolean().required().allowNull(false),
    grupoPregunta: type.string().min(1).required().allowNull(false),
    createdAt: type.date().allowNull(false)
});
module.exports = { Respuesta, r, Errors };
