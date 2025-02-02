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

const upload = multer({ storage: storage });

router.get("/", validateToken, GetTests);
router.post("/create", validateTeacher, upload.single("cover"), CreateTest);
router.post("/updates", validateTeacher, upload.single("cover"), UpdateTest);
router.get("/results", validateToken, Results);
router.get("/:id", validateToken, GetTestQuestions);
router.get("/all/:limit", validateToken, GetAllTests);
router.get("/techer/:type/:id", validateTeacher, TestDitails);
router.get(
  "/techer/answers/:test_id/:student_id",
  validateTeacher,
  TestAnswers
);
router.get("/student/answers/:test_id", validateToken, TestAnswers);
router.post("/:id", validateToken, SubmitTest);
router.delete("/:id", validateTeacher, DeleteTest);
router.get("/getall/:stage/:limit", validateTeacher, GetAllTestsTeacher);

module.exports = router;
