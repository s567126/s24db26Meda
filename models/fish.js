const mongoose = require("mongoose")
const fishSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: 7,
        maxlength: 20,
    },
    life_span: {
        type: Number,
        min: 7,
        max: 20,
    },
    
    color: String
})
module.exports = mongoose.model("fish", fishSchema)