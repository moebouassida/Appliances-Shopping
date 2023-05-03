const mongoose = require("mongoose")


const subCategories = mongoose.Schema({
  elements: [{ type: mongoose.Schema.Types.ObjectId, ref: "element" }],
  name: String
})
module.exports = mongoose.model("subCategories", subCategories)
