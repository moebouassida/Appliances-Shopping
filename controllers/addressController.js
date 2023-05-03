const addressModel = require('../models/addressModel')

exports.createAddress = (country, state, city, addressTxt) => {
        const add = new addressModel({
            country: country,
            state: state,
            city: city,
            address: addressTxt
        })

        add.save()
        .catch(error => ({ message: error.message }))
        return(add._id)
    
}


exports.updateAddress = (req, res) => {
    addressModel.updateOne({ _id: req.query._id }, { ...req.body })
        .then(() => res.status(200).json({ message: 'Address modifié !' }))
        .catch(error => res.status(400).json({ msg: error.message }));
}

exports.deleteAddress = (req, res) => {
    addressModel.deleteOne({ _id: req.query._id })
        .then(() => res.status(200).json({ message: 'Address Deleted' }))
        .then(error => res.status(400).json({ message: error.message }))
}