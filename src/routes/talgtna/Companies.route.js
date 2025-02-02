const express = require("express");
const router = express.Router();
const controller = require("../../controllers/talgtna/Company.controller");

router.get("/:name", controller.CompanyByName);

module.exports = router;
