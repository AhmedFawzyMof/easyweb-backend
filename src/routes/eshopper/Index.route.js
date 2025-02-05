const express = require("express");
const router = express.Router();
const controller = require("../../controllers/eshopper/Index.controller");
const { VistorMiddleware } = require("../../middleware/Vistor.Middleware");

router.get("/", VistorMiddleware, controller.Home);
router.post("/contact", VistorMiddleware, controller.AddContact);

module.exports = router;
