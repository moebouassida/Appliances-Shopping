const express = require('express')
const router = express.Router()

const subCategoryCtrl = require('../controllers/subCategoryController')

router.post('/createSubCategory', subCategoryCtrl.createSubCategory)
router.get('/getAllSubCategory', subCategoryCtrl.getAllSubCategory)
router.get('/getSubCategory', subCategoryCtrl.getSubCategory)
router.get('/getSubCategorybyNAMEASC', subCategoryCtrl.getSubCategorybyNAMEASC)
router.get('/getSubCategorybyNAMEDESC', subCategoryCtrl.getSubCategorybyNAMEDESC)
router.get('/getSubCategorybyPRICEASC', subCategoryCtrl.getSubCategorybyPRICEASC)
router.get('/getSubCategorybyPRICEDESC', subCategoryCtrl.getSubCategorybyPRICEDESC)
router.put('/updateSubCategory', subCategoryCtrl.updateSubCategory)
router.put('/addElement', subCategoryCtrl.addElement)
router.delete('/deleteSubCategory', subCategoryCtrl.deleteSubCategory)
router.get('/getSubcategoryAllElement', subCategoryCtrl.getSubcategoryAllElement)

module.exports = router

