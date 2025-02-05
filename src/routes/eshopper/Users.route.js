const express = require("express");
const router = express.Router();
const controller = require("../../controllers/eshopper/Users.controller");
const { VistorMiddleware } = require("../../middleware/Vistor.Middleware");

router.post("/register", VistorMiddleware, controller.Register);
router.post("/login", VistorMiddleware, controller.Login);

module.exports = router;
