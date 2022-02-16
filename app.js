const express = require("express");
const cors = require("cors");
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use((request, response, next) => {
    console.log(request.method);
    console.log(request.path);
    console.log(request.body);
    next();
});


app.get("/", (request, response) => {
    response.send("<h1> hola mundo </h2>");
});





module.exports = app;
