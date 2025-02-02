const express = require("express");
const router = express.Router();
const controller = require("../../controllers/eshopper/Index.controller");

router.get("/", controller.Home);
router.post("/contact", controller.AddContact);

module.exports = router;
