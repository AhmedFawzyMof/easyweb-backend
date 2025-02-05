const express = require("express");
const multer = require("multer");
const router = express.Router();
const {
  GetTests,
  GetAllTests,
  GetTestQuestions,
  SubmitTest,
  Results,
  GetAllTestsTeacher,
  CreateTest,
  UpdateTest,
  DeleteTest,
  TestDitails,
  TestAnswers,
} = require("../../controllers/bahaaedu/Tests.Controller");
const {
  validateToken,
  validateTeacher,
} = require("../../middleware/Validate.Middleware");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/test");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const { VistorMiddleware } = require("../../middleware/Vistor.Middleware");
const upload = multer({ storage: storage });

router.get("/", VistorMiddleware, validateToken, GetTests);
router.post("/create", validateTeacher, upload.single("cover"), CreateTest);
router.post("/updates", validateTeacher, upload.single("cover"), UpdateTest);
router.get("/results", VistorMiddleware, validateToken, Results);
router.get("/:id", VistorMiddleware, validateToken, GetTestQuestions);
router.get("/all/:limit", VistorMiddleware, validateToken, GetAllTests);
router.get("/techer/:type/:id", VistorMiddleware, validateTeacher, TestDitails);
router.get(
  "/techer/answers/:test_id/:student_id",
  VistorMiddleware,
  validateTeacher,
  TestAnswers
);
router.get(
  "/student/answers/:test_id",
  VistorMiddleware,
  validateToken,
  TestAnswers
);
router.post("/:id", validateToken, SubmitTest);
router.delete("/:id", validateTeacher, DeleteTest);
router.get(
  "/getall/:stage/:limit",
  VistorMiddleware,
  validateTeacher,
  GetAllTestsTeacher
);

module.exports = router;
