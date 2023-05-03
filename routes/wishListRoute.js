const wishListController = require("../controllers/wishListController")
const express = require("express")
const router = express.Router()

//Get wish list by user id
router.get("/getbyuserid", wishListController.getWishListByUserId)

//Add new wish list
router.post("/add", wishListController.addNewWishList)

//Add new element to an existing wish list
router.post("/addElement", wishListController.addElementToExistingWishList)

//Delete an element from an existing wish list
router.delete(
  "/deleteElement",
  wishListController.deleteElementFromExistingWishList
)

//Empty an existing wish list
router.put("/empty", wishListController.emptyExistingWishList)

module.exports = router
