const express = require("express");
const app = express();
app.use(express.json());

// const http = require('http')
let respuestas = [
    {
        id: 69,
        pregunta_id: 45,
        grupo_id: 21,
        opcion_id: 81,
        cuestionario_id: 3,
        puntaje: 8,
        existe: 1,
        grupoPregunta: "21-45",
        created_at: "2022-01-28T13:22:40.794682Z",
        updated_at: "2022-01-28T22:19:42.835416Z",
        opcion: {
            id: 81,
            enunciado: "Un Verbo",
            correcto: 1,
            letra: "A",
            existe: 1,
            letraPregunta: "A-45",
            correctoPregunta: "1-45",
            pregunta_id: 45,
            created_at: "2022-01-27T21:37:19.000000Z",
            updated_at: "2022-01-27T21:37:19.000000Z",
        },
        grupo: {
            id: 21,
            nombre: "grupo 3",
            existe: 1,
            curso_id: 1,
            created_at: "2022-01-27T21:49:59.000000Z",
            updated_at: "2022-01-27T21:49:59.000000Z",
        },
    }
];
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

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
