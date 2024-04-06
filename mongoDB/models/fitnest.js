const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const fitnestSchema = new Schema({
    user_id : {
        type: String
    }, 
    challenges: [{
        progress: String,
        completed: Boolean
    }]
});
const Fitnest = mongoose.model("fitnest", fitnestSchema);
module.exports = Fitnest;
