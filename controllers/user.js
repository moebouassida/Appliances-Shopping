const userModel = require("../models/userModel")
const order = require("../models/orderModel")
const elements = require("../models/elementsOrder")
const element = require("../models/elementModel")
const panierModel = require("../models/panierModel")
const wishListModel = require("../models/wishListModel")

exports.signUpUser = (req, res) => {
  const user = new userModel({
    ...req.body,
  })
  console.log(user._id) //defined
  const userPanier = new panierModel({
    user: user.id, //user.id
  })
  console.log(user.id) // not defined
  const userWishList = new wishListModel({
    user: user.id,
  })
  user.panier = userPanier.id
  user.wishList = userWishList.id
  user
    .save()
    .then(() =>
      userPanier
        .save()
        .then(() => userWishList.save().then(() => res.json(user)))
    )

    .catch((error) => res.json({ message: error.message }))
}

exports.login = (req, res) => {
  userModel
    .findOne({
      email: req.body.email,
    })
    .then((user) => {
      if (!user.isBlocked) {
        if (user.password === req.body.password) {
          res.status(200).json(user)
        } else {
          res.json({ message: "Password incorrect" })
        }
      } else {
        res.json({ message: "user is blocked" })
      }
    })
    .catch((error) => {
      res.json({ message: "id incorrect" })
    })
}

// un utilisateur peut modifier ses données
exports.modifyUser = (req, res, next) => {
  userModel
    .updateOne({ _id: req.body.id }, { ...req.body }) //J'ai pas besoin de verifier l email car c'est unique
    .then(() => res.status(200).json({ message: "user updated" }))
    .catch((error) => res.status(400).json({ message: error.message }))
}

// un utilisateur peut voir ses données sauf le blocage(le front s'en occupera)
exports.getOneUser = (req, res, next) => {
  userModel
    .findById(req.query.id)
    .then((user) => {
      res.status(200).json({ user })
    })
    .catch((error) => res.status(404).json({ message: error.message }))
}

// l'admin peut accéeder aux données de tous les utilisateurs
exports.getAllUser = (req, res, next) => {
  userModel
    .find()
    .then((users) => {
      res.status(200).json({ users })
    })
    .catch((error) => res.status(404).json({ message: error.message }))
}

//add order to the user
exports.addOrder = (req, res) => {
  userModel
    .findOne({ _id: req.body.id })
    .then((user) => {
      console.log("user trouvé")
      user.orders.push(req.body.order_id)
      console.log(user.orders)
      userModel
        .updateOne({ _id: req.body.id }, user)

        .then(() => res.status(200).json({ message: "order updated" }))

        .catch((error) => res.status(404).json({ message: error.message }))
    })
    .catch((error) => res.status(404).json({ message: error.message }))
}

//consulter orders USER
exports.consultUserOrders = (req, res, next) => {
  //USE POPULATEEE!
  userModel
    .findById(req.body.id)
    .then((user) => {
      user
        .populate({
          path: "orders",
          populate: {
            path: "elements",
            populate: { path: "element", select: "name" },
          },
        })
        .then((userElements) => res.status(200).json({ userElements }))
        .catch(() => res.status(400).json({ message: "populate doesnt work" }))
    })
    .catch((error) => res.status(400).json({ error: error.message }))
}

//consulter orders ADMIN
exports.consultAllOrders = (req, res) => {
  order
    .find()
    .populate({
      path: "elements",
      populate: { path: "element" },
    })

    .then((userElements) => {
      res.status(200).json({ userElements })
    })
}

exports.consultAllUsersOrdersData = (req, res) => {

  let userInfo = []

  order
    .distinct('user')
    .then((user) => {

      userModel.find({ _id: { $in: user } })
        .then(data => {
          userInfo.push([data.name, data.orders.length])
        }
        )
        .catch(error => res.status(404).json({ message: error.message }))
    })
  .catch(error => res.status(400).json({ message: error.message }))
}

//delete order from user = update orders
exports.deleteOrder = (req, res) => {
  userModel
    .findOne({ _id: req.body.id })
    .then((user) => {
      user.orders = user.orders.filter(
        (
          elt //SPLICE
        ) => elt != req.body.order_id
      )
      user
        .save()
        .then(() => res.status(200).json({ message: "order is deleted" }))
        .catch((error) => {
          res.status(400).json({
            error: error.message,
          })
        })
    })

    .catch((error) => {
      res.status(400).json({
        error: error.message,
      })
    })
}


