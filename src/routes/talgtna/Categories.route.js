const express = require("express");
const router = express.Router();
const controller = require("../../controllers/talgtna/Categories.controller");

router.get("/:name", controller.ProductByCategory);

module.exports = router;
