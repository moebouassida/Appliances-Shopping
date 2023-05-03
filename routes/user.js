const express = require("express")
const router = express.Router()
const userCtrl = require("../controllers/user")

router.post("/signUpUser", userCtrl.signUpUser)
router.post("/login", userCtrl.login)
router.get("/getAllUser", userCtrl.getAllUser)
router.get("/getOneUser", userCtrl.getOneUser)
router.put("/modifyUser", userCtrl.modifyUser)
router.put("/addOrder", userCtrl.addOrder)
router.delete("/deleteOrder", userCtrl.deleteOrder)
router.get("/consultAllOrders", userCtrl.consultAllOrders)
router.get("/consultAllUsersOrdersData", userCtrl.consultAllUsersOrdersData)
router.get("/consultUserOrders", userCtrl.consultUserOrders)

module.exports = router
