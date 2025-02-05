const express = require("express");
const router = express.Router();

const {
  validateToken,
  validateTeacher,
} = require("../../middleware/Validate.Middleware");

const { VistorMiddleware } = require("../../middleware/Vistor.Middleware");

const {
  GetAllVideosTeacher,
  CreateVideo,
  UpdateVideo,
  DeleteVideos,
  VideoDitails,
  GetAllVideos,
  GetVideoQuestions,
  Results,
  SubmitAnswers,
  VideoAnswers,
} = require("../../controllers/bahaaedu/Videos.Controller");

router.post("/create", validateTeacher, CreateVideo);
router.post("/updates", validateTeacher, UpdateVideo);
router.get("/results", VistorMiddleware, validateToken, Results);
router.get("/:id", VistorMiddleware, validateToken, GetVideoQuestions);
router.get("/all/:limit", VistorMiddleware, validateToken, GetAllVideos);
router.get(
  "/techer/:type/:id",
  VistorMiddleware,
  validateTeacher,
  VideoDitails
);
router.get(
  "/techer/answers/:video_id/:student_id",
  VistorMiddleware,
  validateTeacher,
  VideoAnswers
);
router.get(
  "/student/answers/:video_id",
  VistorMiddleware,
  validateToken,
  VideoAnswers
);
router.post("/:id", validateToken, SubmitAnswers);
router.delete("/:id", validateTeacher, DeleteVideos);
router.get(
  "/getall/:stage/:term/:limit",
  VistorMiddleware,
  validateTeacher,
  GetAllVideosTeacher
);

module.exports = router;
