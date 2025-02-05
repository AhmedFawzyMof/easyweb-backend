const express = require("express");
const router = express.Router();
const { validateTeacher } = require("../../middleware/Validate.Middleware");
const { VistorMiddleware } = require("../../middleware/Vistor.Middleware");
const {
  Login,
  GetDashboard,
  ChangeMarks,
  PublishResult,
  ContactRequest,
} = require("../../controllers/bahaaedu/Teacher.Controller");

router.post("/login", Login);
router.get("/dashboard", VistorMiddleware, validateTeacher, GetDashboard);
router.put("/marking/:type/:id", validateTeacher, ChangeMarks);
router.post("/publish", validateTeacher, PublishResult);
router.post("/contact", ContactRequest);

module.exports = router;
