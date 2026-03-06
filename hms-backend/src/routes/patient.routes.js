import express from "express";
import { createpatients ,getAllPatients , getPatientById } from "../controllers/patients.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/",protect,createpatients);
router.get("/",getAllPatients);
router.get("/:id",getPatientById);

export default router;