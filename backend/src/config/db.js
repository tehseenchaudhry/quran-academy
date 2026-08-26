import mongoose from "mongoose";

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Database is connected");
    } catch (error) {
        console.log("Error in database:", error);
    }
};

export default db;