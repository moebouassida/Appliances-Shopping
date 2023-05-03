const panierController = require("../controllers/panierController")
const express = require("express")
const router = express.Router()

//Add new panier
router.post("/add", panierController.addNewPanier)

//Get panier by user id
router.get("/getbyuserid", panierController.getPanierByUserId)

//Get panier by panier id
router.get("/getbypanierid", panierController.getPanierByPanierId)

//Add new element to existing panier
router.post("/addelement", panierController.addElementsToExistingPanier)

//Empty existing panier
router.put("/empty", panierController.emptyPanier)

//Delete element from panier
router.put("/deleteelement", panierController.deleteElementFromPanier)


module.exports = router
