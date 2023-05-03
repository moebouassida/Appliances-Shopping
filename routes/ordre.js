const express = require('express');
const router = express.Router();
const ordreControllers = require("../controllers/order");

router.post("/createOrder",ordreControllers.createOrder);
router.get("/getOrder",ordreControllers.getOrder);
router.put("/updateOrder",ordreControllers.updateOrder);
router.delete("/deleteOrder",ordreControllers.deleteOrder);


module.exports = router;