const express = require("express");
const router = express.Router();
const { VistorMiddleware } = require("../middleware/Vistor.Middleware");
const {
  HomePage,
  AddContact,
  ChangeLang,
} = require("../controllers/default/index.controller");

router.get("/", VistorMiddleware, HomePage);
router.get("/ar", ChangeLang);
router.get("/en", ChangeLang);
router.post("/contact", VistorMiddleware, AddContact);

module.exports = router;
