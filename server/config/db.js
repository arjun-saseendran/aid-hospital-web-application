import mongoose from "mongoose";

// Configure database
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error ", error);
  }
};
