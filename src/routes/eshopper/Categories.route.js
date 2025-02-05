const express = require("express");
const router = express.Router();
const controller = require("../../controllers/eshopper/Categories.controller");
const { VistorMiddleware } = require("../../middleware/Vistor.Middleware");

router.get("/:id/:limit", VistorMiddleware, controller.ProductByCategory);
router.get("/", VistorMiddleware, controller.AllCategory);

module.exports = router;
