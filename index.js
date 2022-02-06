const http = require('http')
const respuestas = [
    {
        "id": 69,
        "pregunta_id": 45,
        "grupo_id": 21,
        "opcion_id": 81,
        "cuestionario_id": 3,
        "puntaje": 8,
        "existe": 1,
        "grupoPregunta": "21-45",
        "created_at": "2022-01-28T13:22:40.794682Z",
        "updated_at": "2022-01-28T22:19:42.835416Z",
        "opcion": {
            "id": 81,
            "enunciado": "Un Verbo",
            "correcto": 1,
            "letra": "A",
            "existe": 1,
            "letraPregunta": "A-45",
            "correctoPregunta": "1-45",
            "pregunta_id": 45,
            "created_at": "2022-01-27T21:37:19.000000Z",
            "updated_at": "2022-01-27T21:37:19.000000Z"
        },
        "grupo": {
            "id": 21,
            "nombre": "grupo 3",
            "existe": 1,
            "curso_id": 1,
            "created_at": "2022-01-27T21:49:59.000000Z",
            "updated_at": "2022-01-27T21:49:59.000000Z"
        }
    },
    {
        "id": 70,
        "pregunta_id": 45,
        "grupo_id": 23,
        "opcion_id": 81,
        "cuestionario_id": 3,
        "puntaje": 5,
        "existe": 1,
        "grupoPregunta": "23-45",
        "created_at": "2022-01-28T13:22:42.480039Z",
        "updated_at": "2022-01-28T13:22:42.480039Z",
        "opcion": {
            "id": 81,
            "enunciado": "Un Verbo",
            "correcto": 1,
            "letra": "A",
            "existe": 1,
            "letraPregunta": "A-45",
            "correctoPregunta": "1-45",
            "pregunta_id": 45,
            "created_at": "2022-01-27T21:37:19.000000Z",
            "updated_at": "2022-01-27T21:37:19.000000Z"
        },
        "grupo": {
            "id": 23,
            "nombre": "grupo 5",
            "existe": 1,
            "curso_id": 1,
            "created_at": "2022-01-27T21:50:14.000000Z",
            "updated_at": "2022-01-27T21:50:14.000000Z"
        }
    },
    {
        "id": 71,
        "pregunta_id": 45,
        "grupo_id": 24,
        "opcion_id": 81,
        "cuestionario_id": 3,
        "puntaje": 5,
        "existe": 1,
        "grupoPregunta": "24-45",
        "created_at": "2022-01-28T13:22:42.685701Z",
        "updated_at": "2022-01-28T13:22:42.685701Z",
        "opcion": {
            "id": 81,
            "enunciado": "Un Verbo",
            "correcto": 1,
            "letra": "A",
            "existe": 1,
            "letraPregunta": "A-45",
            "correctoPregunta": "1-45",
            "pregunta_id": 45,
            "created_at": "2022-01-27T21:37:19.000000Z",
            "updated_at": "2022-01-27T21:37:19.000000Z"
        },
        "grupo": {
            "id": 24,
            "nombre": "grupo 6",
            "existe": 1,
            "curso_id": 1,
            "created_at": "2022-01-27T21:50:20.000000Z",
            "updated_at": "2022-01-27T21:50:20.000000Z"
        }
    },
    {
        "id": 72,
        "pregunta_id": 45,
        "grupo_id": 19,
        "opcion_id": 81,
        "cuestionario_id": 3,
        "puntaje": 5,
        "existe": 1,
        "grupoPregunta": "19-45",
        "created_at": "2022-01-28T13:22:53.853523Z",
        "updated_at": "2022-01-28T13:22:53.853523Z",
        "opcion": {
            "id": 81,
            "enunciado": "Un Verbo",
            "correcto": 1,
            "letra": "A",
            "existe": 1,
            "letraPregunta": "A-45",
            "correctoPregunta": "1-45",
            "pregunta_id": 45,
            "created_at": "2022-01-27T21:37:19.000000Z",
            "updated_at": "2022-01-27T21:37:19.000000Z"
        },
        "grupo": {
            "id": 19,
            "nombre": "grupo 1",
            "existe": 1,
            "curso_id": 1,
            "created_at": "2022-01-27T21:49:35.000000Z",
            "updated_at": "2022-01-27T21:49:35.000000Z"
        }
    },
    {
        "id": 73,
        "pregunta_id": 45,
        "grupo_id": 20,
        "opcion_id": 81,
        "cuestionario_id": 3,
        "puntaje": 5,
        "existe": 1,
        "grupoPregunta": "20-45",
        "created_at": "2022-01-28T13:22:57.033290Z",
        "updated_at": "2022-01-28T13:22:57.033290Z",
        "opcion": {
            "id": 81,
            "enunciado": "Un Verbo",
            "correcto": 1,
            "letra": "A",
            "existe": 1,
            "letraPregunta": "A-45",
            "correctoPregunta": "1-45",
            "pregunta_id": 45,
            "created_at": "2022-01-27T21:37:19.000000Z",
            "updated_at": "2022-01-27T21:37:19.000000Z"
        },
        "grupo": {
            "id": 20,
            "nombre": "grupo 2",
            "existe": 1,
            "curso_id": 1,
            "created_at": "2022-01-27T21:49:49.000000Z",
            "updated_at": "2022-01-27T21:49:49.000000Z"
        }
    },
    {
        "id": 74,
        "pregunta_id": 45,
        "grupo_id": 22,
        "opcion_id": 81,
        "cuestionario_id": 3,
        "puntaje": 5,
        "existe": 1,
        "grupoPregunta": "22-45",
        "created_at": "2022-01-28T13:23:07.049831Z",
        "updated_at": "2022-01-28T13:23:07.049831Z",
        "opcion": {
            "id": 81,
            "enunciado": "Un Verbo",
            "correcto": 1,
            "letra": "A",
            "existe": 1,
            "letraPregunta": "A-45",
            "correctoPregunta": "1-45",
            "pregunta_id": 45,
            "created_at": "2022-01-27T21:37:19.000000Z",
            "updated_at": "2022-01-27T21:37:19.000000Z"
        },
        "grupo": {
            "id": 22,
            "nombre": "grupo 4",
            "existe": 1,
            "curso_id": 1,
            "created_at": "2022-01-27T21:50:06.000000Z",
            "updated_at": "2022-01-27T21:50:06.000000Z"
        }
    },
    {
        "id": 75,
        "pregunta_id": 45,
        "grupo_id": 25,
        "opcion_id": 81,
        "cuestionario_id": 3,
        "puntaje": 5,
        "existe": 1,
        "grupoPregunta": "25-45",
        "created_at": "2022-01-28T13:23:10.596648Z",
        "updated_at": "2022-01-28T13:23:10.596648Z",
        "opcion": {
            "id": 81,
            "enunciado": "Un Verbo",
            "correcto": 1,
            "letra": "A",
            "existe": 1,
            "letraPregunta": "A-45",
            "correctoPregunta": "1-45",
            "pregunta_id": 45,
            "created_at": "2022-01-27T21:37:19.000000Z",
            "updated_at": "2022-01-27T21:37:19.000000Z"
        },
        "grupo": {
            "id": 25,
            "nombre": "grupo 7",
            "existe": 1,
            "curso_id": 1,
            "created_at": "2022-01-27T21:50:28.000000Z",
            "updated_at": "2022-01-27T21:50:28.000000Z"
        }
    }
]

const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(JSON.stringify(respuestas))
})

const PORT = 3001
app.listen(PORT)
console.log(`Servidor corriendo en el puerto ${PORT}`)