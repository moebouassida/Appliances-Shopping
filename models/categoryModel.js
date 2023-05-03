const mongoose = require("mongoose")

const category = mongoose.Schema({
  subCategories: [
    { type: mongoose.Schema.Types.ObjectId, ref: "subCategories" },
  ],
  name: String,
})

module.exports = mongoose.model("category", category)
