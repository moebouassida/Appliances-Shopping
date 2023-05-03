const mongoose = require("mongoose")

const panier = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  elements: [{ type: mongoose.Schema.Types.ObjectId, ref: "elementPanier" }],
})

module.exports = mongoose.model("panier", panier)
