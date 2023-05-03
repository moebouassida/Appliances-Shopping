const pictureModel = require("../models/pictureModel");
const cloudinary = require("../Config/cloudinary");


exports.createPicture =(file, color) => {
    cloudinary.uploader.upload(file.path)
        .then((result) => {
            // Create new Picture
            const picture = new pictureModel({
                picture: result.secure_url,
                color: color,
                cloudinary_id: result.public_id,
            });
            // Save user
            picture.save()
            .then((pic)=>res.status(201).json({id:pic._id}))
            .catch((error) => res.status(400).json({ msg: error.message }))
            })
            .catch((error) => res.status(400).json({ msg: error.message }));}


exports.getPicture = (req, res) => {
    pictureModel.find({ _id: req.body.id })
        .then((picture) => res.status(200).json({ picture: picture }))
        .catch((error) => res.status(400).json({ msg: error.message }))
}
exports.updatePicture = (req, res) => {
    pictureModel.findById(req.body.id)
        .then((picture) => {
            if (req.file) {
                cloudinary.uploader.destroy(picture.cloudinary_id)
                    .catch((error) => res.status(400).json({ msg: error.message }))
                cloudinary.uploader.upload(req.file.path)
                    .then((result) => {
                        pictureModel.updateOne({ _id: req.body.id }, { picture: result.secure_url, cloudinary_id: result.public_id })
                            .catch((error) => res.status(400).json({ msg: error.message }))
                    })
                    .catch((error) => res.status(400).json({ msg: error.message }))
            }
            if (req.body.color) {
                pictureModel.updateOne({ _id: req.body.id }, { color: req.body.color })
                    .catch((error) => res.status(400).json({ msg: error.message }))
            }
        })
        .catch((error) => res.status(400).json({ msg: error.message }))
    res.status(200).json({ msg: "Updated" })
}

exports.deletePicture = (req, res) => {
    pictureModel.findById(req.body.id)
        .then((picture) => {
            cloudinary.uploader.destroy(picture.cloudinary_id)
            picture.remove()
                .then(() => res.status(200).json({ msg: "Image supprimée" }))
                .catch((error) => res.status(400).json({ msg: error.message }))
        })
        .catch((error) => res.status(400).json({ msg: error.message }))
}
