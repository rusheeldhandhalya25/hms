import express from "express";
import { createpatients ,getAllPatients , getPatientById } from "../controllers/patients.controller.js";

const router = express.Router();

router.post("/",createpatients);
router.get("/",getAllPatients);
router.get("/:id",getPatientById);

export default router;