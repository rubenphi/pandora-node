const express = require("express");
const cors = require("cors");
global.__base = __dirname + "/" ;
const routes = require("./routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use((request, response, next) => {
    console.log(request.method);
    console.log(request.path);
    console.log(request.body);
    next();
});

app.use("/", routes);
app.use((request, response) => {
    const ruta = request.path;
    response.status(404).json({
        error: "la ruta " + ruta + " no ha sido encontrada",
        code: 404
    });
});

module.exports = app;
