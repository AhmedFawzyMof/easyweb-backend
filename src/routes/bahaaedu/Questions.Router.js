const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  validateToken,
  validateTeacher,
} = require("../../middleware/Validate.Middleware");
const { VistorMiddleware } = require("../../middleware/Vistor.Middleware");

const {
  GetQuestionsBank,
  SubmitAnswers,
  AllQuestions,
  CreateQuestion,
  DeleteQuestion,
  UpdateQuestion,
  GetTypeData,
  ConnectQuestion,
  StudentQuestionsBank,
  StudentAnswers,
} = require("../../controllers/bahaaedu/Questions.Controller");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/img");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/bank", VistorMiddleware, validateToken, GetQuestionsBank);
router.get(
  "/all/:stage/:term",
  VistorMiddleware,
  validateTeacher,
  AllQuestions
);
router.get(
  "/students/:stage/:term",
  VistorMiddleware,
  validateTeacher,
  StudentQuestionsBank
);
router.get(
  "/teacher/answers/:stage/:term/:student_id",
  VistorMiddleware,
  validateTeacher,
  StudentAnswers
);
router.get(
  "/connect/:type/:stage/:term",
  VistorMiddleware,
  validateTeacher,
  GetTypeData
);
router.post("/", validateToken, SubmitAnswers);
router.post("/create", validateTeacher, upload.single("image"), CreateQuestion);
router.post(
  "/updates",
  validateTeacher,
  upload.single("image"),
  UpdateQuestion
);
router.post("/connect", validateTeacher, ConnectQuestion);
router.delete("/:id", validateTeacher, DeleteQuestion);

module.exports = router;
