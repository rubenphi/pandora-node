const  app =  "../app.js";
module.exports.error404 = app.use((request, response) => {
    const ruta = request.path;
    response.status(404).json({
        error: "la ruta " + ruta + " no ha sido encontrada",
    });
});
