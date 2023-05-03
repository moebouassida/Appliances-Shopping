const mongoose = require("mongoose")

const order = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  elements: [{ type: mongoose.Schema.Types.ObjectId, ref: "elementPanier" }],
  Date: { type: Date, default: Date.now },
  address :  { type: mongoose.Schema.Types.ObjectId, ref: "address" }
})

module.exports = mongoose.model("order", order)
