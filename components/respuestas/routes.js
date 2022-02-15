const server = "./bin/server.js";
const controller = "controllers.js";
server.get("/api/respuestas", (request, response) => {
    controller.index(request, response);
});

server.post("/api/respuestas", (request, response) => {
    controller.store(request, response);
});

server.get("/api/respuestas/:id", (request, response) => {
    controller.show(request, response);
});

server.remove("/api/respuestas/:id", (request, response) => {
    controller.remove(request, response);
});
