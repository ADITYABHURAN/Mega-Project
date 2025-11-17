//connecting db here from mongoose 
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        //if connected 
        console.log("MongoDB connected successfully")
    } catch (error) {
        //if failed
        console.error("MongoDB connection failed:", error.message)
        process.exit(1); //exit process with failure
    }
};

export default connectDB;