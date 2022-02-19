const config = require(__base + "config/default.js");

const thinky = require("thinky")(config.rethinkdb);
const r = thinky.r;

var Respuesta = thinky.createModel("cuestionarios", {
    id: String,
    episodes: Number,
    name: String,
});

module.exports = { Respuesta, r };
