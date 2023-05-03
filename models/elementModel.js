const mongoose = require("mongoose")
const mongoosePaginate = require('mongoose-paginate-v2')

const element = mongoose.Schema({
  name: String,
  price: Number,
  picture: [{ type: mongoose.Schema.Types.ObjectId, ref: "picture" }],
  description: { type: mongoose.Schema.Types.ObjectId, ref: "description" },
  quantity: Number,
})

element.plugin(mongoosePaginate)
module.exports = mongoose.model("element", element)
