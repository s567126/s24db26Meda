const mongoose = require("mongoose")
const fishSchema = mongoose.Schema({
    name: String,
    life_span: {
        type: Number,
        min: 7,
        max: 20,
    },
    color: String
})
module.exports = mongoose.model("fish", fishSchema)