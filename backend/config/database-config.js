import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(process.env.mongodb || "mongodb://localhost:27017/interviewprep");
  console.log("MongoDB connected");
};


