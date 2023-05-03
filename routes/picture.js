const express=require("express");
const router = express.Router();
const pictureControllers = require("../controllers/picture");
const pictureMiddleware=require("../middleware/image-config");

router.post('/createPicture',pictureMiddleware,pictureControllers.createPicture);
router.get('',pictureMiddleware,pictureControllers.getPicture);
router.put('',pictureMiddleware,pictureControllers.updatePicture);
router.delete('',pictureMiddleware,pictureControllers.deletePicture);

module.exports = router;