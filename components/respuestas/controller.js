const config = "./config/default.js";
const thinky = require("thinky")(config.rethinkdb);
const Respuesta = "./model";
const r = thinky.r;


//console.log(JSON.stringify(thinkagain));

module.exports = {

 index(request, response) {
    Respuesta.orderBy(r.asc("id")).run().then(function (result) {
        respuestas = result;
    });
    return response.json(respuestas);
},

 show(request, response) {
    const id = Number(request.params.id);
    const respuesta = respuestas.find((respuesta) => respuesta.id == id);
    if (respuesta) {
        return response.json(respuesta).status(200).end();
    } else {
        return response.status(404).end();
    }

},

 store(request, response) {
    const respuesta = request.body;
    const ids = respuestas.map((respuesta) => respuesta.id);
    const maxId = Math.max(...ids);

    const newRespuesta = {
        id: maxId + 1,
        pregunta_id: respuesta.pregunta_id,
        grupo_id: respuesta.grupo_id,
        opcion_id: respuesta.opcion_id,
        cuestionario_id: respuesta.cuestionario_id,
        puntaje: respuesta.puntaje,
        existe: respuesta.existe || 1,
        grupoPregunta: respuesta.grupo_id + "-" + respuesta.pregunta_id,
    };

    respuestas = [...respuestas, newRespuesta];
    return response.json(newRespuesta);

},

 update(request, response) {

},

 remove(request, response) {

},

};

