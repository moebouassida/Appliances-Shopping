const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoDbConnction = require("./Config/db")
const pictureRoutes = require("./routes/picture")
const ordreRoutes = require("./routes/ordre")
const elementOrdreRoutes = require("./routes/elementOrder")
const path = require("path")
const userRoutes = require("./routes/user")
const elementRoutes = require("./routes/elementRoutes")
// const descriptionRoutes = require("./routes/descriptionRoutes")
const SubCategoryRoutes = require("./routes/SubCategoryRoutes")
const addressRoutes = require('./routes/address')

mongoDbConnction
app.use(express.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: false,
    parameterLimit: 50000,
  })
)
app.use(bodyParser.json({ limit: "50mb" }))
app.use("/api/user",userRoutes);
app.use("/api/picture",pictureRoutes);
app.use("/api/ordre",ordreRoutes);
// app.use("/api/elementordre",elementOrdreRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use("/api/address", addressRoutes)

app.use('/api/Element', elementRoutes)
// app.use('/api/Description', descriptionRoutes)
app.use('/api/Subcategory', SubCategoryRoutes)
// Set EJS as templating engine
app.set("view engine", "ejs")

app.listen(3020, () => console.log("Server started"));
