const mongoose = require("mongoose")
require("dotenv").config()
const URL = process.env.DB_URL



const mongoDbConnction = mongoose
  .connect(URL, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB connected !")
  })
  .catch((err) => console.log(err))
exports.module = mongoDbConnction;
