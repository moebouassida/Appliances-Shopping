const element = require('../models/elementModel')
const picture = require("./picture")
const description = require("./descriptionController")

exports.createElement = async (req, res) => {
    const newElement = new element({
        name: req.body.name, price: req.body.price, quantity: req.body.quantity
    })
    await picture.createPicture(req.file, req.body.color)
        .then((pic) => {
            newElement.picture.push(pic);
        })
        .catch(error => { res.status(400).json({ msg: error.message }) })
    await description.createDescription(req.body.height, req.body.weight)
        .then((desc) => {
            newElement.description = desc;
            newElement.save()
                .then(res.status(201).json({ message: "Element Created successfully!" }))
                .catch(error => { res.status(400).json({ msg: error.message }) })
        })
        .catch(error => { res.status(400).json({ msg: error.message }) })
}

exports.addPicture = async (req, res) => {
    await picture.createPicture(req.file, req.body.color)
        .then((pic_id) => {
            element.findById(req.body.id)
                .then((elem) => {
                    console.log(elem)
                    elem.picture.push(pic_id);
                    console.log("majda")
                    elem.save()
                        .then(res.status(201).json({ msg: "Succés" }))
                        .catch(error => { res.status(400).json({ msg: error.message }) });
                })
                .catch(error => { res.status(400).json({ msg: error.message }) })
        })
        .catch(error => { res.status(400).json({ msg: error.message }) })
}

exports.updateElement = (req, res, next) => {
    const newElement = new element({
        ...req.body,
        _id: req.body.id
    })
    element.findOneAndUpdate({ _id: req.body.id }, newElement)
        .then(() => { res.status(201).json({ message: 'Element Updated !' }) })
        .catch(error => { res.status(400).json({ message: error.message }) })
};

// exports.getAllElement = (req, res) => {
//     const page = parseInt(req.query.page)
//     const limit = 9
//     const start = (page - 1) * limit
//     const end = limit * page
//     const pages = {}
//     let count=0;
//     element.count()
//     .then((max)=>{ count=max/9
//     const trunc=Math.trunc(count);
//     if (trunc!==count)
//         count=trunc+1;
//     console.log(count)})

//     element.find()
//         .populate({ path: "picture", select: ["picture", "color"] })
//         .populate({ path: "description" })
//         .limit(limit).skip((page - 1) * limit)
//         .then((elem) => {
//             if (start > 0)
//                 pages.prev = { page: page - 1 }
//             else
//                 pages.prev = { page: null }

//             if (end < elem.length)
//                 pages.next = { page: page + 1 }
//             else
//                 pages.next = { page: null }

//             res.status(200).json(
//                 {
//                     lastPage: count,
//                     page:page,
//                     elem 
//                 })
//         })
//         .catch((error) => res.status(400).json({ msg: error.message }))
// }

exports.getAllElementSearch = (req, res) => {
    element.find()
        .populate({ path: "picture", select: ["picture", "color"] })
        .populate({ path: "description" })
        .then((elem) => {      
            res.status(200).json(elem)
        })
        .catch((error) => res.status(400).json({ msg: error.message }))
}

exports.getElement = (req, res) => {
    element.findOne({ _id: req.query.id })
        .populate({ path: "picture" })
        .populate({ path: "description" })
        .then(element => res.status(200).json({ element }))
        .catch(error => res.status(404).json({ error }));
};

exports.deleteElement = (req, res, next) => {
    element.deleteOne({ _id: req.body.id })
        .then(() => res.status(200).json({ message: 'Element Deleted!' }))
        .catch(error => res.status(400).json({ error }));
};

// search element
exports.search = function (req, res) {
    element
        .find({ name: { $regex: req.body.content } })
        .then((data) => {
            data.splice(req.body.number, data.length - req.body.number)
            res.json({ data })
        })
        .catch((err) => {
            res.json({ message: err.message })
        })
}
