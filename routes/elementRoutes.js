const express = require("express")
const router = express.Router()
const pictureMiddleware=require("../middleware/image-config")
const elementCtrl = require("../controllers/elementController")

router.post("/createElement",pictureMiddleware, elementCtrl.createElement)
// router.get("/getAllElement", elementCtrl.getAllElement)
router.get("/getElement", elementCtrl.getElement)
router.put("/updateElement", elementCtrl.updateElement)
router.put("/addPicture",pictureMiddleware, elementCtrl.addPicture)
router.delete("/deleteElement", elementCtrl.deleteElement)
//Delete element from panier
router.get("/search", elementCtrl.search)
module.exports = router
