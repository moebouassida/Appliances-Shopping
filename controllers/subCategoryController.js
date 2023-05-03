const subCategory = require('../models/subCategoriesModel');
const elements = require('../models/elementModel')
const elementsController = require('../controllers/elementController');


exports.createSubCategory = (req, res, next) => {
    const newsubCategory = new subCategory({
        ...req.body
    });
    newsubCategory.save()
        .then(res.status(201).json({ message: "SubCategory Created successfully!" }))
        .catch(error => { res.status(400).json({ error }) })
};

exports.updateSubCategory = (req, res, next) => {
    const newsubCategory = new subCategory({
        ...req.body,
        _id: req.body.id
    })
    subCategory.findOneAndUpdate({ _id: req.body.id }, newsubCategory)
        .then(() => { res.status(201).json({ message: 'Subcategory Updated !' }) })
        .catch(error => { res.status(400).json({ message: error.message }) })
};

exports.getAllSubCategory = (req, res, next) => {
    subCategory.find()
        .populate({
            path: "elements",
            populate: { path: "picture" },
            populate: { path: "description" }
        })
        .then(subCategory => res.status(200).json({ subCategory }))
        .catch(error => res.status(400).json({ message: error.message }));
};
getAllElement = (req, res) => {
    const page = parseInt(req.query.page)
    const limit = 9
    const start = (page - 1) * limit
    const end = limit * page
    const pages = {}
    let count = 0;
    elements.count()
        .then((max) => {
            count = max / 9
            const trunc = Math.trunc(count);
            if (trunc !== count)
                count = trunc + 1;
        })

    elements.find()
        .populate({ path: "picture", select: ["picture", "color"] })
        .populate({ path: "description" })
        .limit(limit).skip((page - 1) * limit)
        .then((elem) => {
            if (start > 0)
                pages.prev = { page: page - 1 }
            else
                pages.prev = { page: null }

            if (end < elem.length)
                pages.next = { page: page + 1 }
            else
                pages.next = { page: null }

            res.status(200).json(
                {
                    lastPage: count,
                    page: page,
                    elem
                })
        })
        .catch((error) => res.status(400).json({ msg: error.message }))
}

exports.getSubcategoryAllElement = (req, res) => {

    subCategory.findOne({name:req.query.name})
    .populate({
        path: "elements",
        populate: { path: "picture" },
        populate: { path: "description" },
        populate : {path: "picture"}
    })
    .then(subCategory => res.status(200).json({ subCategory }))
    .catch(error => res.status(400).json({ message: error.message }));
}


exports.getSubCategorybyNAMEASC = (req, res, next) => {
    if (req.query.subcategory === 'All')
        getAllElement(req, res);
    else {
        const page = parseInt(req.query.page)
        const limit = 9
        const start = (page - 1) * limit
        const end = limit * page
        const pages = {}
        let count=0;
        subCategory.findOne({ name: req.query.subcategory })
            .then((sub) => {
                const max = sub.elements.length
                count = max / 9;
                const trunc = Math.trunc(count);
                if (trunc !== count)
                    count = trunc + 1;
                elements.find({ "_id": { $in: sub.elements } })
                    .populate({ path: "description" })
                    .limit(limit).skip((page - 1) * limit)
                    .sort({ name: 1 })
                    .then((elem) => {
                        if (start > 0)
                            pages.prev = { page: page - 1 }
                        else
                            pages.prev = { page: null }

                        if (end < sub.elements.length)
                            pages.next = { page: page + 1 }
                        else
                            pages.next = { page: null }

                        res.status(200).json(
                            {
                                elementsCount: count,
                                page: page,
                                elem
                            })
                    })
                    .catch((error) => res.status(400).json({ message: error.message }))
            })
            .catch(error => res.status(404).json({ message: error.message }));
    }
};

exports.getSubCategorybyNAMEDESC = (req, res, next) => {
    const page = parseInt(req.query.page)
    const limit = 3
    const start = (page - 1) * limit
    const end = limit * page
    const pages = {}

    subCategory.findById(req.body.id)
        .then((sub) => {
            elements.find({ "_id": { $in: sub.elements } })
                .populate({ path: "description" })
                .limit(limit).skip((page - 1) * limit)
                .sort({ name: -1 })
                .then((elem) => {
                    if (start > 0)
                        pages.prev = { page: page - 1 }
                    else
                        pages.prev = { page: null }

                    if (end < sub.elements.length)
                        pages.next = { page: page + 1 }
                    else
                        pages.next = { page: null }

                    res.status(200).json(
                        {
                            elementsCount: sub.elements.length,
                            pages,
                            elem
                        })
                })
                .catch((error) => res.status(400).json({ message: error.message }))
        })
        .catch(error => res.status(404).json({ message: error.message }));
};

exports.getSubCategory = (req, res, next) => {
    const page = parseInt(req.query.page)
    const limit = 9
    const start = (page - 1) * limit
    const end = limit * page
    const pages = {}


    subCategory.findOne({ name: req.query.name })

    subCategory.findOne({name: req.query.name})

        .then((sub) => {
            elements.find({ "_id": { $in: sub.elements } })
                .populate({ path: "description" })
                .limit(limit).skip((page - 1) * limit)
                .then((elem) => {
                    if (start > 0)
                        pages.prev = { page: page - 1 }
                    else
                        pages.prev = { page: null }

                    if (end < sub.elements.length)
                        pages.next = { page: page + 1 }
                    else
                        pages.next = { page: null }

                    res.status(200).json(
                        {
                            elementsCount: sub.elements.length,
                            pages,
                            elem
                        })
                })
                .catch((error) => res.status(400).json({ message: error.message }))
        })
        .catch(error => res.status(404).json({ message: error.message }));
};


exports.getSubCategorybyPRICEASC = (req, res, next) => {
    const page = parseInt(req.query.page)
    const limit = 3
    const start = (page - 1) * limit
    const end = limit * page
    const pages = {}

    subCategory.findById(req.body.id)
        .then((sub) => {
            elements.find({ "_id": { $in: sub.elements } })
                .populate({ path: "description" })
                .limit(limit).skip((page - 1) * limit)
                .sort({ price: 1 })
                .then((elem) => {
                    if (start > 0)
                        pages.prev = { page: page - 1 }
                    else
                        pages.prev = { page: null }

                    if (end < sub.elements.length)
                        pages.next = { page: page + 1 }
                    else
                        pages.next = { page: null }

                    res.status(200).json(
                        {
                            elementsCount: sub.elements.length,
                            pages,
                            elem
                        })
                })
                .catch((error) => res.status(400).json({ message: error.message }))
        })
        .catch(error => res.status(404).json({ message: error.message }));
};

exports.getSubCategorybyPRICEDESC = (req, res, next) => {
    const page = parseInt(req.query.page)
    const limit = 3
    const start = (page - 1) * limit
    const end = limit * page
    const pages = {}

    subCategory.findById(req.body.id)
        .then((sub) => {
            elements.find({ "_id": { $in: sub.elements } })
                .populate({ path: "description" })
                .limit(limit).skip((page - 1) * limit)
                .sort({ price: -1 })
                .then((elem) => {
                    if (start > 0)
                        pages.prev = { page: page - 1 }
                    else
                        pages.prev = { page: null }

                    if (end < sub.elements.length)
                        pages.next = { page: page + 1 }
                    else
                        pages.next = { page: null }

                    res.status(200).json(
                        {
                            elementsCount: sub.elements.length,
                            pages,
                            elem
                        })
                })
                .catch((error) => res.status(400).json({ message: error.message }))
        })
        .catch(error => res.status(404).json({ message: error.message }));
};

exports.deleteSubCategory = (req, res,) => {
    subCategory.deleteOne({ _id: req.body.id })
        .then(() => res.status(200).json({ message: 'subCategory Deleted !' }))
        .catch(error => res.status(400).json({ message: error.message }));
};

exports.addElement = (req, res) => {
    subCategory.findById(req.body.id)
        .then((sub) => {
            sub.elements.push(req.body.elements_id)
            sub.save().then(() => res.status(201).json({ message: 'Element Saved !' }))
                .catch((error) => res.status(400).json({ message: error.message }))
        })
        .catch((error) => res.status(400).json({ message: error.message })
        )
};

