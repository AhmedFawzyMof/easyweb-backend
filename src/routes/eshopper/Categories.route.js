const express = require("express");
const router = express.Router();
const controller = require("../../controllers/eshopper/Categories.controller");

router.get("/:id/:limit", controller.ProductByCategory);
router.get("/", controller.AllCategory);

module.exports = router;
