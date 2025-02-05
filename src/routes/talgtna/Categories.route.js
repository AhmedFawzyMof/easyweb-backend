const express = require("express");
const router = express.Router();
const controller = require("../../controllers/talgtna/Categories.controller");
const { VistorMiddleware } = require("../../middleware/Vistor.Middleware");

router.get("/:name", VistorMiddleware, controller.ProductByCategory);

module.exports = router;
