const express = require("express");
const router = express.Router();
const {
  validateToken,
  validateTeacher,
} = require("../../middleware/Validate.Middleware");
const { VistorMiddleware } = require("../../middleware/Vistor.Middleware");

const {
  Login,
  GetAchivments,
  GetAllStudents,
  CreateStudent,
  UpdateStudent,
  DeleteStudent,
  StudentData,
  GenratePlan,
  SavePlan,
  ShowStudentPlans,
  DeletePlan,
  GetPlan,
  EditPlan,
} = require("../../controllers/bahaaedu/Students.Controller");

router.post("/login", Login);
router.get("/achivments", VistorMiddleware, validateToken, GetAchivments);
router.get("/:id", VistorMiddleware, validateTeacher, StudentData);
router.post("/create", validateTeacher, CreateStudent);
router.post("/update", validateTeacher, UpdateStudent);
router.post("/plans/generate", validateTeacher, GenratePlan);
router.post("/plans/save", validateTeacher, SavePlan);
router.get(
  "/all/:stage/:limit",
  VistorMiddleware,
  validateTeacher,
  GetAllStudents
);
router.get(
  "/teacher/plans/:id",
  VistorMiddleware,
  validateTeacher,
  ShowStudentPlans
);
router.get("/teacher/plan/:id", VistorMiddleware, validateTeacher, GetPlan);
router.get("/get/all/plans", VistorMiddleware, validateToken, ShowStudentPlans);
router.get("/get/plan/:id", VistorMiddleware, validateToken, GetPlan);
router.post("/teacher/plan/:id", validateTeacher, EditPlan);
router.delete("/:id", validateTeacher, DeleteStudent);
router.delete("/teacher/plan/:id", validateTeacher, DeletePlan);

module.exports = router;
