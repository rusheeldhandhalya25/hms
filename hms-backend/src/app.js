import express from "express";
import cors from "cors";
import patientRoutes from "./routes/patient.routes.js";
import authregister from "./routes/auth.route.js";
import { protect } from "./middlewares/auth.middleware.js";

const app = express();

// CORS Middleware - Allow requests from other origins
app.use(cors());

app.use(express.json());

app.use("/patients",protect,patientRoutes);
app.use("/auth",authregister);

app.get("/",(req,res) => {
    res.send("server is running very well .... relax ....");
});

export default app;