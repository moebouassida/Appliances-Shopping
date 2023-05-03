const description = require('../models/descriptionModel')

exports.createDescription = (height,weight) => {
  return new Promise((resolve,reject)=>{
  const newDescription = new description({
    height:height,weight:weight
  });
  newDescription.save()
    .catch(error => { res.status(400).json({message:error.message}) }) 
    resolve(newDescription._id)})
};

exports.updateDescription = (req, res, next) => {
  const newDescription = new description({
    ...req.body,
    _id: req.body.id
  })
  description.findOneAndUpdate({ _id: req.body.id }, newDescription)
    .then((description) => { res.status(201).json({ description }) })
    .catch(error => { res.status(400).json({ message: error.message }) })
};

exports.getAllDescriptions = (req, res, next) => {
  description.find()
    .then(description => res.status(200).json({ description }))
    .catch(error => res.status(400).json({ message: error.message }));
};

exports.getDescription = (req, res, next) => {
  description.findOne({ _id: req.body.id })
    .populate({ path: "evaluation" })
    .then(description => res.status(200).json({ description }))
    .catch(error => res.status(404).json({ message: error.message }));
};

exports.deleteDescription = (req, res, next) => {
  description.deleteOne({ _id: req.body.id })
    .then(() => res.status(200).json({ message: 'Description Deleted!' }))
    .catch(error => res.status(400).json({ message: error.message }));
};

exports.addEvaluation = (req, res) => {
  description.findById(req.body.id)
    .then((desc) => {
      desc.evaluation.push(parseInt(req.body.eval))
      desc.save().then(() => res.status(201).json({ message: 'Evaluation Saved!' }))
        .catch((error) => res.status(400).json({ message: error.message }))
    })
    .catch((error) => res.status(400).json({ message: error.message }))
};

exports.averageEvaluation = (req, res) => {
  description.findById(req.body.id)
    .then((desc) => {
      desc.evaluation = [desc.evaluation.reduce((a, b) => a + b) / desc.evaluation.length]
      desc.save().then(() => res.status(201).json({ message: 'Average Evaluation Saved!' }))
        .catch((error) => res.status(400).json({ message: error.message }))
    })
        .catch(() => res.status(400).json({ message: error.message }))
    }

