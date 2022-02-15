const config = require("./config.js");
const express = require("express");
const cors = require("cors");
const server = express();
server.use(cors());
server.use(express.json());
server.use((request, response, next) => {
    console.log(request.method);
    console.log(request.path);
    console.log(request.body);
    next();
});


server.listen(config.app.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${config.app.PORT}`);
});

module.exports = server;
