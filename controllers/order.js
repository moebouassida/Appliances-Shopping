const orderModel = require("../models/orderModel");
const userModel = require("../models/userModel");
const address = require('./addressController')


exports.createOrder = async (req, res) => {

    const order = new orderModel({ ...req.body })

    order.address = await address.createAddress(req.body.country, req.body.state, req.body.city, req.body.addressTxt)

    order.save()
        .then((orderElem) => {
            userModel.updateOne({ _id: orderElem.user }, {
                $push: {
                    orders: orderElem._id
                }
            })
                .catch(error => res.status(400).json({ message: error.message }))
            res.status(200).json({ message: 'order Created' })
        })

        .catch(error => res.status(400).json({ msg: error.message }))
}

exports.getOrder = (req, res) => {
    orderModel.findOne({ _id: req.body.id })
        .then(ordre => res.status(200).json(ordre))
        .catch(error => res.status(404).json({ msg: error.message }));
};

exports.updateOrder = (req, res) => {
    orderModel.updateOne({ _id: req.body.id }, { ...req.body })
        .then(() => res.status(200).json({ message: 'Ordre modifié !' }))
        .catch(error => res.status(400).json({ msg: error.message }));
}

exports.deleteOrder = (req, res) => {
    orderModel.deleteOne({ _id: req.body.id })
        .then(() => res.status(200).json({ message: 'Ordre supprimé !' }))
        .catch(error => res.status(400).json({ msg: error.message }));
}

