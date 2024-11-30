import mongoose from "mongoose";
let connected = false;

const connectDB = async () => {
  if (connected) {
    console.log("Mongo DB is already conneacted");
    return;
  } else {
    try {
      connected = await mongoose.connect(process.env.MONGODB_URI);
      connected = true;
      console.log("Mongo DB connected successfully");
    } catch (error) {
      console.log("Mongo DB could not be connected" + error);
    }
  }
};

export default connectDB;
