import mongoose from "mongoose";

const environment = process.env.NODE_ENV;

export const MongoDbConnect = async () => {
  if (mongoose.connection.readyState === 1) return;

  const dbUri =
    environment === "production"
      ? process.env.MONGODB_URI
      : process.env.MONGODB_DEVELOPMENT_URI;

  try {
    await mongoose.connect(dbUri);
    console.log(`=> Connected to MongoDB ${environment} URI <=`);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    console.log("Continuing with degraded functionality...");
  }
};

export default MongoDbConnect;
