const mongoose = require("mongoose")

const wishList = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  elements: [{ type: mongoose.Schema.Types.ObjectId, ref: "element" }],
})

module.exports = mongoose.model("wishList", wishList)