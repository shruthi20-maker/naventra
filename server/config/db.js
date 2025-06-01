import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/contactsdb";
        const conn = await mongoose.connect(mongoUrl);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1); // Exit with failure
    }
}
