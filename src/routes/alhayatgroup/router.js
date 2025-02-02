const express = require("express");
const router = express.Router();
const controller = require("../../controllers/alhayatgroup/index.controller");

router.get("/", controller.GetHomePage);
router.get("/lang/:lang", controller.SetLang);
router.get("/service/:slug", controller.GetDetailsPage);
router.get("/services", controller.GetServices);
router.get("/contact", controller.ContactPage);
router.get("/about", controller.AboutPage);
router.get("/book", controller.GetBookingPage);
router.post("/service/book", controller.BookFromService);
router.post("/contact", controller.ContactUs);
module.exports = router;
