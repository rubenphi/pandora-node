const config = require(__base + "config/default.js");
const thinky = require("thinky")(config.rethinkdb);
const type = thinky.type
const r = thinky.r
const Errors = thinky.Errors;


module.exports = {
    async isUnique(fieldName, content) {
        var query = await r.table("respuestas").filter({ [fieldName] :  content}).count().run();
        if (query === 0) {
            return true
        } else {
            return false
        }
    },

}