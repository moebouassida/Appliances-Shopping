const elementPanierController = require("../controllers/elementPanierController")
const express = require("express")
const router = express.Router()

//Add new element panier
router.post("/add", elementPanierController.addNewElementPanier)
router.put("/update",elementPanierController.updateElementPanier)

module.exports = router
