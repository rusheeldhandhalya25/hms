import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import app from "./src/app.js";

dotenv.config();

const PORT = process.env.PORT || 5005;

const startServer = async () => {
    try{
        await connectDB();
        app.listen(PORT, () => {
            console.log(`server is running on this ${PORT} ...`);
        });
    } catch (error) {
        console.error("server is not running .... something went wrong ......");
        console.error(error);
        process.exit(1);
    }
};   

startServer();