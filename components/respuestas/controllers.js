const config = "./config/default.js";
const thinky = require("thinky")(config.rethinkdb);
const Respuesta = "models.js";
const r = thinky.r;

let respuestas = [];
//console.log(JSON.stringify(thinkagain));



function index(request, response){
    Respuesta.orderBy(r.asc("id")).run().then(function (result) {
        respuestas = result;
    });
    response.json(respuestas);
}

function show(request, response){
    const id = Number(request.params.id);
    const respuesta = respuestas.find((respuesta) => respuesta.id == id);
    if (respuesta) {
        response.json(respuesta).status(200).end();
    } else {
        response.status(404).end();
    }

}

function store(request, response){
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
    response.json(newRespuesta);

}

function update(request, response){

}

function remove(request, response){

}

module.exports = respuestas, index, show, store, update, remove;
