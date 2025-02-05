const express = require("express");
const router = express.Router();
const controller = require("../../controllers/talgtna/Products.controller");
const { VistorMiddleware } = require("../../middleware/Vistor.Middleware");

router.get("/:id", VistorMiddleware, controller.ProductById);
router.post("/search", VistorMiddleware, controller.ProductsBySearch);

module.exports = router;
