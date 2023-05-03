const express = require("express")
const router = express.Router()
const categoryCtrl = require("../controllers/categoryCtrl")

router.post("/createCategory", categoryCtrl.createCategory)
router.put("/addSub", categoryCtrl.addSub)
router.post("/readSub", categoryCtrl.readSub)
router.delete("/deleteSub", categoryCtrl.deleteSub)
router.delete("/deleteCategory", categoryCtrl.deleteCategory)
router.get("/readCategories", categoryCtrl.readCategories)
router.get("/getAllCategories", categoryCtrl.getAllCategories)

module.exports = router
