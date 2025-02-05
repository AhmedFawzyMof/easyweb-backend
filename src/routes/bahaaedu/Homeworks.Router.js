const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  GetHomeworks,
  GetAllHomeworks,
  GetHomeworkQuestions,
  SubmitHomework,
  Results,
  GetAllHomeworksTeacher,
  CreateHomework,
  DeleteHomework,
  UpdateHomework,
  HomeworkDitails,
  HomeworkAnswers,
} = require("../../controllers/bahaaedu/Homeworks.Controller");
const {
  validateToken,
  validateTeacher,
} = require("../../middleware/Validate.Middleware");

const { VistorMiddleware } = require("../../middleware/Vistor.Middleware");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/homework");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", VistorMiddleware, validateToken, GetHomeworks);
router.post("/create", validateTeacher, upload.single("cover"), CreateHomework);
router.post(
  "/updates",
  validateTeacher,
  upload.single("cover"),
  UpdateHomework
);
router.get("/results", VistorMiddleware, validateToken, Results);
router.get("/:id", VistorMiddleware, validateToken, GetHomeworkQuestions);
router.get("/all/:limit", VistorMiddleware, validateToken, GetAllHomeworks);
router.get(
  "/techer/:type/:id",
  VistorMiddleware,
  validateTeacher,
  HomeworkDitails
);
router.get(
  "/techer/answers/:homework_id/:student_id",
  VistorMiddleware,
  validateTeacher,
  HomeworkAnswers
);
router.get(
  "/student/answers/:homework_id",
  VistorMiddleware,
  validateToken,
  HomeworkAnswers
);
router.post("/:id", validateToken, SubmitHomework);
router.delete("/:id", validateTeacher, DeleteHomework);
router.get(
  "/getall/:stage/:limit",
  VistorMiddleware,
  validateTeacher,
  GetAllHomeworksTeacher
);

module.exports = router;
