const panier = require("../models/panierModel")
const elementPanier = require("../models/elementPanierModel")
const element = require("../models/elementModel")

//add new panier
exports.addNewPanier = function (req, res) {
  panier
    .find({ user: req.body.user_id })
    .then((data) => {
      if (data.length == 0) {
        const newPanier = new panier({
          user: req.body.user_id,
          elements: req.body.elements,
        })
        newPanier
          .save()
          .then(() => {
            res.json("success")
          })
          .catch((err) => {
            res.json({ message: err.message })
          })
      } else {
        res.json("user has already a panier")
      }
    })
    .catch((err) => {
      res.json({ message: err.message })
    })
}

//get panier by user id
exports.getPanierByUserId = function (req, res) {
  panier
    .findOne({ user: req.body.id })
    .populate({
      path: "elements",
      populate: {
        path: "element",
        populate: {
          path: "picture",
        },
      },
    })
    .populate({
      path: "elements",
      populate: {
        path: "element",
        populate: {
          path: "description",
        },
      },
    })
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.json({ message: err.message })
    })
}

//get panier by panier id
exports.getPanierByPanierId = function (req, res) {
  panier
    .findById(req.body.panier_id)
    .then((data) => {
      res.json({ data })
    })
    .catch((err) => {
      res.json({ message: err.message })
    })
}

//add new elements to an existing panier
exports.addElementsToExistingPanier = function (req, res) {
  const newElement = req.body.element
  panier
    .findOne({ user: req.body.user_id })
    .then((data) => {
      console.log(data)
      data.elements.push(newElement)
      data
        .save()
        .then(() => {
          res.json("success")
        })
        .catch((err) => {
          res.json({ message: err.message })
        })
    })
    .catch((err) => {
      res.json({ message: err.message })
    })
}

//empty existing panier
exports.emptyPanier = function (req, res) {
  panier
    .findOne({ user: req.body.user_id })
    .then((data) => {
      elementPanier
        .deleteMany({ panier: data._id })
        .then(() => {
          data.elements = []
          data
            .save()
            .then(() => {
              res.json("Done")
            })
            .catch((err) => {
              res.json({ message: err.message })
            })
        })
        .catch((err) => {
          res.json({ message: err.message })
        })
    })
    .catch((err) => {
      res.json({ message: err.message })
    })
}

// delete element from panier by element id
exports.deleteElementFromPanier = (req, res) =>{
  const element = req.body.element
  panier
    .findOne({ user: req.body.user_id })
    .then((data) => {
      var index = data.elements.indexOf(element)
      data.elements.splice(index, 1)
      data
        .save()
        .then(() => {
          elementPanier.deleteOne({_id:element})
          res.status(200).json("Done")
        })
        .catch((err) => {
          res.json({ message: err.message })
        })
    })
    .catch((err) => {
      res.json({ message: err.message })
    })
}
