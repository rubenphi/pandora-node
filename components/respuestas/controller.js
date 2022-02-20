const model = require("./model");
const services = require(__base + "/services");

//console.log(JSON.stringify(thinkagain));

module.exports = {
    index(request, response) { //show all respuestas
        model.Respuesta.orderBy(model.r.asc("id"))
            .run()
            .then(function (result) {
                return response.json(result);
            });
    },

    show(request, response) { //show selected respuesta
        model.Respuesta.get(request.params.id).run()
            .then(function (result) {
                return response.json(result);
            }).catch(function (result) {
                return response.status(404).send({ error: result, code: 404 })
            });
    },

    async store(request, response) { //save respuesta
        //used vars
        const respuesta = request.body;
        const newRespuesta = new model.Respuesta({
            pregunta_id: respuesta.pregunta_id,
            grupo_id: respuesta.grupo_id,
            opcion_id: respuesta.opcion_id,
            cuestionario_id: respuesta.cuestionario_id,
            puntaje: respuesta.puntaje,
            existe: respuesta.existe || true,
            grupoPregunta: respuesta.grupo_id + "-" + respuesta.pregunta_id
        });
        //method to save respuesta
        function save() {
            newRespuesta.saveAll().then(function (result) {
                return response.json(result)
            }).catch(function (err) {
                return response.json({ error: `Schema Error: ${err}` })
            }).error(function (err) {
                return response.json({ error: `Schema Error: ${err}` })
            });
        }

        //validation
        if (await services.isUnique('grupoPregunta', newRespuesta.grupoPregunta) != true) //isUnique
        {
            return response.status(400).send({ error: 'El grupo ya respondió', code: 400 })
        } else {
            save()
        }
    },

    update(request, response) {
    },

    remove(request, response) { },
}
