const elementPanier = require("../models/elementPanierModel")
const panier = require("../models/panierModel")

// add new element panier
exports.addNewElementPanier = function (req, res) {
  const element = new elementPanier({
    element: req.body.element,
    quantity: req.body.quantity,
    panier: req.body.panier,
  })
  element
    .save()
    .then((data) => {
      panier
        .findById(req.body.panier)
        .then((panier) => {
          panier.elements.push(data._id)
          panier
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
    })
    .catch((err) => {
      res.json({ message: err.message })
    })
}

exports.updateElementPanier=(req,res)=>{
  elementPanier.findById({_id:req.body._id})
  .then((elem)=>{elem.quantity=req.body.quantity
    elem.save()
    .then(req.status(201).json("done"))
    .catch((err)=>res.status(400).jso({msg:err.message}));
  })
  .catch((err)=>res.status(400).jso({msg:err.message}));
}