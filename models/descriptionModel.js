const mongoose = require("mongoose")

const description = mongoose.Schema({
  height: String,
  weight: String,
  evaluation: [],
})

module.exports = mongoose.model("description", description)
