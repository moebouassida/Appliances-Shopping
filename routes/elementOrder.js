const express = require('express');
const router = express.Router();
const elementOrderControllers = require("../controllers/elementOrder");

router.post("/createElementOrder",elementOrderControllers.createElementOrder);
router.get("/getElementOrder",elementOrderControllers.getElementOrder);
router.get("/getAllElementOrder",elementOrderControllers.getAllElementOrder);
router.put("/updateElementOrder",elementOrderControllers.updateElementOrder);
router.delete("/deleteElementOrder",elementOrderControllers.deleteElementOrder);

module.exports = router;