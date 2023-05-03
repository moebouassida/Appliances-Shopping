const mongoose = require("mongoose")

const elementsOrder = mongoose.Schema({
  element: { type: mongoose.Schema.Types.ObjectId, ref: "element" },
  quantity: Number
})

module.exports = mongoose.model("elementsOrder", elementsOrder)
