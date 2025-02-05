const express = require("express");
const router = express.Router();
const {
  GetTestQuestions,
  SubmitTest,
  Results,
  GetAllTestsTeacher,
  CreateTest,
  UpdateTest,
  DeleteTest,
  CheckUser,
  TestDitails,
  TestAnswers,
} = require("../../controllers/bahaaedu/PublicTests.Controller");
const {
  validateToken,
  validateTeacher,
} = require("../../middleware/Validate.Middleware");
const { VistorMiddleware } = require("../../middleware/Vistor.Middleware");

router.post("/create", validateTeacher, CreateTest);
router.post("/updates", validateTeacher, UpdateTest);
router.get("/results", VistorMiddleware, validateToken, Results);
router.get("/:id", VistorMiddleware, validateToken, GetTestQuestions);
router.get("/techer/:type/:id", VistorMiddleware, validateTeacher, TestDitails);
router.get(
  "/techer/answers/:test_id/:student_id",
  VistorMiddleware,
  validateTeacher,
  TestAnswers
);
router.post("/:id/user", CheckUser);
router.post("/:id", SubmitTest);
router.delete("/:id", validateTeacher, DeleteTest);
router.get(
  "/getall/:stage/:limit",
  VistorMiddleware,
  validateTeacher,
  GetAllTestsTeacher
);

module.exports = router;
