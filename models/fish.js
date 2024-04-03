const mongoose = require("mongoose")
const fishSchema = mongoose.Schema({
name: String,
life_span: Number,
color: String
})
module.exports = mongoose.model("fish",fishSchema)