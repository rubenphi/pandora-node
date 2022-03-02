const config = require(__base + "config/default.js");
const thinky = require("thinky")(config.rethinkdb);
const r = thinky.r;

module.exports = {
    /*    async verCurso(id, tipo){
        switch (tipo) {
        case "cuestionario":
            return Cuestionario.get(id);
            //Cuestionario::findOrFail($id)->curso_id;
            break;
        case "pregunta":
        //return Pregunta::with('cuestionario')->with('opciones')->findOrFail($id)->cuestionario->curso_id;
            break;
        case "opcion":
        //return Pregunta::with('cuestionario')->with('opciones')->findOrFail(Opcion::findOrFail($id)->pregunta_id)->cuestionario->curso_id;

            break;
        default:
            return 0;
            break;

        }

    }
    */

    async userLoged() {
        const usuario = {
            name: "rubén",
            rol: "admin",
            curso: "1",
        };
        return usuario;
    },
    async isUnique(table, fieldName, content) {
        var query = await r
            .table(table)
            .filter({ [fieldName]: content })
            .count()
            .run();
        if (query === 0) {
            return true;
        } else {
            return false;
        }
    },

    async isUniqueOthers(table, fieldName, content, id) {
        var query = await r
            .table(table)
            .filter(r.row(fieldName).eq(content).and(r.row("id").ne(id)))
            .count()
            .run();
        if (query === 0) {
            return true;
        } else {
            return false;
        }
    }

};
