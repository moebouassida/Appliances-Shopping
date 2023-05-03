const mongoose = require("mongoose")

const picture = mongoose.Schema({
  picture:String,
  color: String,
  cloudinary_id:String
});

module.exports = mongoose.model("picture", picture)
