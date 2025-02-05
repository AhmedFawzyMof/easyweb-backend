const express = require("express");
const router = express.Router();
const {
  DeleteGrade,
  GetAllGrades,
  CreateGrade,
  UpdateGrade,
} = require("../../controllers/bahaaedu/Grades.Controller");

const { validateTeacher } = require("../../middleware/Validate.Middleware");
const { VistorMiddleware } = require("../../middleware/Vistor.Middleware");

router.delete("/:id", validateTeacher, DeleteGrade);
router.get("/all", VistorMiddleware, validateTeacher, GetAllGrades);
router.post("/create", validateTeacher, CreateGrade);
router.post("/updates", validateTeacher, UpdateGrade);

module.exports = router;
