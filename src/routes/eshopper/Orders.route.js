const express = require("express");
const router = express.Router();
const controller = require("../../controllers/eshopper/Orders.controller");
const { VistorMiddleware } = require("../../middleware/Vistor.Middleware");

router.post("/", VistorMiddleware, controller.AddOrder);
router.get("/history", VistorMiddleware, controller.GetOrders);

module.exports = router;
