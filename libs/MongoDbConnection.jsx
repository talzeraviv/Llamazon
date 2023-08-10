import mongoose from "mongoose";

const environment = process.env.NODE_ENV;

export const MongoDbConnect = async () => {
  if (environment === "production") {
    try {
      if (mongoose.connection.readyState === 1)
        return mongoose.connection.asPromise();

      await mongoose.connect(process.env.MONGODB_URI);
      console.log("=> Connected to MongoDB Production URI <=");
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      if (mongoose.connection.readyState === 1)
        return mongoose.connection.asPromise();

      await mongoose.connect(process.env.MONGODB_DEVELOPMENT_URI);
      console.log("=> Connected to MongoDB Development URI <=");
    } catch (error) {
      console.log(error);
    }
  }
};

export default MongoDbConnect;
