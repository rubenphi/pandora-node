const express = require("express");
const cors = require("cors");
const config = require("./config.js");

const thinky = require("thinky")(config.rethinkdb);

const r = thinky.r;

const app = express();
app.use(cors());
app.use(express.json());

app.use((request, response, next) => {
    console.log(request.method);
    console.log(request.path);
    console.log(request.body);
    console.log("------------");
    next();
});

let respuestas = [];
//console.log(JSON.stringify(thinkagain));


var Respuesta = thinky.createModel("cuestionarios", {
    id: String,
    episodes:Number,
    name: String 
});


Respuesta.orderBy(r.asc("name")).run().then(function (result) {
    respuestas = result;
});

/*
const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(JSON.stringify(respuestas))
})*/

app.get("/", (request, response) => {
    response.send("<h1> hola mundo </h2>");
});

app.get("/api/respuestas", (request, response) => {
    response.json(respuestas);
});

app.post("/api/respuestas", (request, response) => {
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
});

app.get("/api/respuestas/:id", (request, response) => {
    const id = Number(request.params.id);
    const respuesta = respuestas.find((respuesta) => respuesta.id == id);
    if (respuesta) {
        response.json(respuesta).status(200).end();
    } else {
        response.status(404).end();
    }
});

app.delete("/api/respuestas/:id", (request, response) => {
    const id = Number(request.params.id);
    respuestas = respuestas.filter((respuesta) => respuesta.id != id);
    response.status(204).end();
});

app.use((request, response) => {
    const ruta = request.path;
    response.status(404).json({
        error: "la ruta " + ruta + " no ha sido encontrada",
    });
});
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
