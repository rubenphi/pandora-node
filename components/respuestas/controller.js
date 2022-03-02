const model = require("./model");
const services = require(__base + "/services");

//console.log(JSON.stringify(thinkagain));

module.exports = {
    index(request, response) {
        //show all respuestas
        model.Respuesta.run().then(function (result) {
            return response.json(result);
        });
    },

    show(request, response) {
        //show selected respuesta
        let respuesta = "";

        if (
            services.usuario.curso == respuesta.curso ||
            services.usuario.rol == "admin"
        ) {
            model.Respuesta.get(request.params.id)
                .run()
                .then(function (result) {
                    respuesta = response.json(result);
                })
                .catch(function (result) {
                    respuesta = response
                        .status(404)
                        .send({ error: result, code: 404 });
                });
        } else {
            respuesta = response.status(301).send({
                error: "No está autorizado para ver estas respustas",
                code: 301,
            });
        }
    },

    async store(request, response) {
        //save respuesta
        //used vars
        const respuesta = request.body;
        const newRespuesta = new model.Respuesta({
            pregunta_id: respuesta.pregunta_id,
            grupo_id: respuesta.grupo_id,
            opcion_id: respuesta.opcion_id,
            cuestionario_id: respuesta.cuestionario_id,
            puntaje: respuesta.puntaje,
            existe: respuesta.existe || true,
            grupoPregunta: respuesta.grupo_id + "-" + respuesta.pregunta_id,
        });
        //method to save respuesta
        function save() {
            newRespuesta
                .saveAll()
                .then(function (result) {
                    return response.json(result);
                })
                .catch(function (err) {
                    return response.json({ error: `Schema Error: ${err}` });
                })
                .error(function (err) {
                    return response.json({ error: `Schema Error: ${err}` });
                });
        }

        //validation
        if (
            (await services.isUnique(
                "grupoPregunta",
                newRespuesta.grupoPregunta
            )) != true
        ) {
            //isUnique
            return response
                .status(400)
                .send({ error: "El grupo ya respondió", code: 400 });
        } else {
            save();
        }
    },

    update(request, response) {},

    remove(request, response) {},
};
