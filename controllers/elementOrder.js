const e = require("express")
const elementOrderModel = require("../models/elementsOrder")
const orderModel = require("../models/orderModel")


exports.createElementOrder = (req, res) => {

    const elementOrder = new elementOrderModel({
        element: req.body.elementId,
        quantity: req.body.quantity
    }
    )
    elementOrder.save()
        .then(() => res.status(201).json({ id: elementOrder.id }))
        .catch(error => res.status(400).json({ message: error.message }))
}

exports.getElementOrder = (req, res) => {
    elementOrderModel.findOne({ _id: req.body.id })
        .then(elementOrdre => res.status(200).json(elementOrdre))
        .catch(error => res.status(404).json({ msg: error.message }));
};

exports.getAllElementOrder = (req, res) => {
    elementOrderModel.find()
        .then(elementOrdre => res.status(200).json(elementOrdre))
        .catch(error => res.status(404).json({ msg: error.message }));
};

exports.updateElementOrder = (req, res) => {
    elementOrderModel.updateOne({ _id: req.body.id }, { ...req.body })
        .then(() => res.status(200).json({ message: 'ElementOrdre modifié !' }))
        .catch(error => res.status(400).json({ msg: error.message }));
}

exports.deleteElementOrder = (req, res) => {
    elementOrderModel.deleteOne({ _id: req.query._id })
        .then(() => res.status(200).json({ message: 'ElementOrdre supprimé !' }))
        .catch(error => res.status(400).json({ message: error.message }))
}