const express = require("express");
const router = express.Router();
const controller = require("../../controllers/eshopper/Products.controller");
const { VistorMiddleware } = require("../../middleware/Vistor.Middleware");

router.get("/get/:id", VistorMiddleware, controller.ProductById);
router.get(
  "/search/:query/:limit",
  VistorMiddleware,
  controller.ProductBySearch
);
router.get("/:limit", VistorMiddleware, controller.AllProducts);
router.post("/filter", VistorMiddleware, controller.ProductsFilter);
router.post("/search", VistorMiddleware, controller.ProductsBySearch);
router.post("/cart", VistorMiddleware, controller.CartProducts);

module.exports = router;
