const model = require("./model");
const services = require(__base + "/services");

module.exports = {
    index(request, response) {
        //show all cursos
        model.Curso.run().then(function (result) {
            return response.json(result);
        });
    },

    async show(request, response) {
        //show selected respuesta
        let user = await services.userLoged();
        let result = "";
        if (
            (await user.curso) == request.params.id ||
            (await user.rol) == "admin"
        ) {
            model.Curso.get(request.params.id)
                .run()
                .then(function (curso) {
                    result = response.json(curso);
                })
                .catch(function () {
                    result = response.status(404).send({
                        message: "Respuesta no encontrada",
                        code: 404,
                    });
                });
        } else {
            result = response.status(301).send({
                message: "No está autorizado para ver estas respustas",
                code: 301,
            });
        }
        return result;
    },

    async store(request, response) {
        //save respuesta
        //used vars
        let result = "";
        let user = await services.userLoged();
        const curso = new model.Curso({
            nombre: request.body.nombre,
            createdAt: model.r.now(),
        });
        //method to save respuesta
        function save() {
            curso
                .saveAll()
                .then(function (res) {
                    result = response.json(res);
                })
                .catch(function (err) {
                    result = response.json({ error: `Schema Error: ${err}` });
                })
                .error(function (err) {
                    result = response.json({ error: `Schema Error: ${err}` });
                });
        }

        //validation
        if (
            (await services.isUnique("cursos", "nombre", curso.nombre)) != true
        ) {
            //isUnique
            result = response.status(400).send({
                message: "No pueden haber dos cursos con el mismo nombre",
                code: 400,
            });
        } else if (user.rol != "admin") {
            result = response.status(400).send({
                message: "No puede registrar un curso si no es administrador",
                code: 400,
            });
        } else {
            save();
        }
        return result;
    },

    async update(request, response) {
        //save respuesta
        //used vars
        let user = await services.userLoged();
        let result = "";
        let curso = "";
        await model.Curso.get(request.params.id)
            .run()
            .then(function (res) {
                curso = res;
            })
            .catch(function () {
                result = response.status(404).send({
                    message: "Curso no encontrado no se puede actualizar",
                    code: 404,
                });
            });
        const newCurso = {
            id: curso.id,
            nombre: request.body.nombre,
            createdAt: model.r.now(),
        };

        //method to save respuesta
        function save() {
            model.Curso.save(newCurso, { conflict: "update" })
                .then(function (res) {
                    result = response.json(res);
                })
                .catch(function (err) {
                    result = response.json({ error: `Schema Error: ${err}` });
                })
                .error(function (err) {
                    result = response.json({ error: `Schema Error: ${err}` });
                });
        }

        //validation

        if (curso == "") {
            result = response.status(404).send({
                message: "El curso que deseas actualizar no fue encontrado",
                code: 404,
            });
        } else if (
            (await services.isUniqueOthers(
                "cursos",
                "nombre",
                newCurso.nombre,
                newCurso.id
            )) != true
        ) {
            //isUnique
            result = response.status(400).send({
                message: "No pueden haber dos cursos con el mismo nombre",
                code: 400,
            });
        } else if (user.rol != "admin") {
            result = response.status(400).send({
                message: "No puede registrar un curso si no es administrador",
                code: 400,
            });
        } else {
            save();
        }

        return result;
    },

    async remove(request, response) {
        let user = await services.userLoged();
        let result = "";
        let curso = "";
        await model.Curso.get(request.params.id)
            .run()
            .then(function (res) {
                curso = res;
            })
            .catch(function () {
                result = response.status(404).send({
                    message: "Curso no encontrado no se puede eliminar",
                    code: 404,
                });
            });
        if (curso == "") {
            result = response.status(404).send({
                message: "El curso que deseas eliminar no fue encontrado",
                code: 404,
            });
        }
        else if (user.rol != "admin") {
            result = response.status(400).send({
                message: "No puede eliminar un curso si no es administrador",
                code: 400,
            });
        } else {
            curso.delete();
            result = response.status(200).send({
                message: "Curso eliminado correctamente",
                code: 200,
            });
        }
        return result;
    },
};
