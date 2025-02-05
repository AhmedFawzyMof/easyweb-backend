const express = require("express");
const router = express.Router();
const controller = require("../../controllers/talgtna/Users.controller");
const { VistorMiddleware } = require("../../middleware/Vistor.Middleware");

router.post("/fav", VistorMiddleware, controller.AddToFav);
router.get("/favorites", VistorMiddleware, controller.GetFavorites);
router.get("/coupons", VistorMiddleware, controller.GetCoupons);

module.exports = router;
