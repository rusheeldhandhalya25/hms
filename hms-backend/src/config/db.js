import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/hms";
        await mongoose.connect(MONGO_URL);
        console.log("mongodb connected ........");
    } catch (error) {
        console.error("mongodb is not connected .........");
        throw error;
    }
};

export default connectDB; 