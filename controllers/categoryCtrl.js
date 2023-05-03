const { json } = require("express")
const { picture } = require("../Config/cloudinary")
const categoryModel = require("../models/categoryModel")
const subCategoryModel = require("../models/subCategoriesModel")

//create category
exports.createCategory = (req, res) => {
  const category = new categoryModel({
    ...req.body,
  })
  category
    .save()
    .then(() => res.status(200).json({ message: "category is created" }))
    .catch((error) => res.status(400).json({ message: error.message }))
}

//Add a subcategory to the category
exports.addSub = (req, res) => {
  categoryModel
    .findById(req.body.id)
    .then((category) => {
      category.subCategories.push(req.body.sub_id)
      category
        .save()
        .then(() => res.status(200).json({ message: "subcategory is added" }))
        .catch((error) => res.status(400).json({ message: error.message }))
    })
    .catch((error) => res.status(400).json({ message: error.message }))
}

//list the categories
exports.readCategories = (req, res) => {
  categoryModel
    .find()
    .then((category) => {
      res.status(200).json({ category })
    })
    .catch((error) => res.status(400).json({ message: error.message }))
}

//get all the categories ???????????????????????????????
exports.getAllCategories = (req, res) => {
  categoryModel
    .find()
    .then((category) => {
      console.log(category)
      category
        .populate({
          path: "subCategories",
          populate: {
            path: "elements",
            populate: {
              path: "picture",
              path: "description",
            },
          },
        })
        .then((names) => res.status(200).json(names))
        .catch((error) => res.status.json({ message: error.message }))
    })
    .catch((error) => res.status.json({ message: error.message }))
}

//list the subcategories of a specific category
exports.readSub = (req, res) => {
  categoryModel
    .findById(req.body.id)
    .populate({
      path: "subCategories",
      populate: {
        path: "elements",
        populate: { path: "description" },
      },
    })
    .populate({
      path: "subCategories",
      populate: {
        path: "elements",
        populate: { path: "picture" },
      },
    })
    .then((category) => res.status(200).json(category))
    .catch((error) => res.json({ message: error.message }))
}

//delete a subcategory
exports.deleteSub = (req, res) => {
  categoryModel
    .findById(req.body.id)
    .then((category) => {
      category.subCategories = category.subCategories.filter(
        (elt) => elt != req.body.sub_id
      )
      category
        .save()
        .then(() => res.status(200).json({ message: "sub deleted" }))
        .catch((error) => res.status(400).json({ message: error.message }))
    })
    .catch((error) => res.status(400).json({ message: error.message }))
}

//delete a category
exports.deleteCategory = (req, res) => {
  categoryModel
    .findByIdAndDelete(req.body.id)
    .then(() => res.status(200).json({ message: "category deleted" }))
    .catch((error) => res.status(400).json({ message: error.message }))
}
