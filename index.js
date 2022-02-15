
/*
const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(JSON.stringify(respuestas))
})*/

app.get("/", (request, response) => {
    response.send("<h1> hola mundo </h2>");
});


