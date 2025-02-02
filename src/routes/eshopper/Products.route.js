const express = require("express");
const router = express.Router();
const controller = require("../../controllers/eshopper/Products.controller");

router.get("/get/:id", controller.ProductById);
router.get("/search/:query/:limit", controller.ProductBySearch);
router.get("/:limit", controller.AllProducts);
router.post("/filter", controller.ProductsFilter);
router.post("/search", controller.ProductsBySearch);
router.post("/cart", controller.CartProducts);

module.exports = router;
