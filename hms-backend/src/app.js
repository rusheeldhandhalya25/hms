import express from "express";
import cors from "cors";
import patientRoutes from "./routes/patient.routes.js";

const app = express();

// CORS Middleware - Allow requests from other origins
app.use(cors());

app.use(express.json());

app.use("/patients",patientRoutes);

app.get("/",(req,res) => {
    res.send("server is running very well .... relax ....");
});

export default app;