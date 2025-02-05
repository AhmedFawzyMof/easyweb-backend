const express = require("express");
const router = express.Router();
const controller = require("../../controllers/talgtna/Company.controller");
const { VistorMiddleware } = require("../../middleware/Vistor.Middleware");

router.get("/:name", VistorMiddleware, controller.CompanyByName);

module.exports = router;
