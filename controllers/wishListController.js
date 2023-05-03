const wishList = require("../models/wishListModel")
const element = require("../models/elementModel")

// add new wishlist
exports.addNewWishList = function (req, res) {
  const newWishList = new wishList({
    user: req.body.user_id,
    elements: req.body.element,
  })
  newWishList
    .save()
    .then(() => {
      res.json("done")
    })
    .catch((err) => {
      res.json({ message: err.message })
    })
}

// add new element to an existing wish list
exports.addElementToExistingWishList = function (req, res) {
  wishList
    .findOne({ user: req.body.user_id })
    .then((data) => {
      data.elements.push(req.body.element)
      data
        .save()
        .then(() => {
          res.json("done")
        })
        .catch((err) => {
          res.json({ message: err.message })
        })
    })
    .catch((err) => {
      res.json({ message: err.message })
    })
}

// get wish list by user id
exports.getWishListByUserId = function (req, res) {
  wishList
    .findOne({ user: req.body.user_id })
    .populate({
      path: "elements",
    })
    .then((data) => {
      res.json({ data })
    })
    .catch((err) => {
      res.json({ message: err.message })
    })
}

//delete an element from an existing wish list
exports.deleteElementFromExistingWishList = function (req, res) {
  wishList
    .findOne({ user: req.body.user_id })
    .then((data) => {
      var index = data.elements.indexOf(req.body.element)
      data.elements.splice(index, 1)
      data
        .save()
        .then(() => {
          res.json("done")
        })
        .catch((err) => {
          res.json({ message: err.message })
        })
    })
    .catch((err) => {
      res.json({ message: err.message })
    })
}

// empty an existing wish list
exports.emptyExistingWishList = function (req, res) {
  wishList
    .findOne({ user: req.body.user_id })
    .then((data) => {
      data.elements = []
      data
        .save()
        .then(() => {
          res.json("done")
        })
        .catch((err) => {
          res.json({ message: err.message })
        })
    })
    .catch((err) => {
      res.json({ message: err.message })
    })
}
