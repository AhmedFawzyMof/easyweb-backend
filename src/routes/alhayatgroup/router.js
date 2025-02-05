const express = require("express");
const router = express.Router();
const controller = require("../../controllers/alhayatgroup/index.controller");
const { VistorMiddleware } = require("../../middleware/Vistor.Middleware");

router.get("/", VistorMiddleware, controller.GetHomePage);
router.get("/lang/:lang", VistorMiddleware, controller.SetLang);
router.get("/service/:slug", VistorMiddleware, controller.GetDetailsPage);
router.get("/services", VistorMiddleware, controller.GetServices);
router.get("/contact", VistorMiddleware, controller.ContactPage);
router.get("/about", VistorMiddleware, controller.AboutPage);
router.get("/book", VistorMiddleware, controller.GetBookingPage);
router.post("/service/book", controller.BookFromService);
router.post("/contact", controller.ContactUs);
module.exports = router;
