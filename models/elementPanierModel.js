const mongoose = require("mongoose")

const elementPanier = mongoose.Schema({
  element: { type: mongoose.Schema.Types.ObjectId, ref: "element" },
  quantity: { type: Number, default: 1 },
  panier: { type: mongoose.Schema.Types.ObjectId, ref: "panier" },
})

module.exports = mongoose.model("elementPanier", elementPanier)
