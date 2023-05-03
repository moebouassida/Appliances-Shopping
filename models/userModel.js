const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

const user = mongoose.Schema({
  email: { type: String, unique: true },
  name: { type: String },
  lastName: { type: String },
  phone: Number,
  password: String,
  address: String,
  pin_code: Number,
  panier: { type: mongoose.Schema.Types.ObjectId, ref: "panier" },
  wishList: { type: mongoose.Schema.Types.ObjectId, ref: "wishList" },
  picture: String,
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "order" }],
  isBlocked: { type: Boolean, default: false },
})
user.plugin(uniqueValidator);

module.exports = mongoose.model("User", user)
