const express = require("express")
const router = express.Router()
const addressCtrl = require('../controllers/addressController')

//router.post("/createAddress", addressCtrl.createAddress)
router.put("/updateAddress", addressCtrl.updateAddress)
router.delete("/deleteAddress", addressCtrl.deleteAddress)

module.exports = router