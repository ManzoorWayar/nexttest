import mongoose from "mongoose";

const connection = {};

const connectDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log(db.connections[0].readyState);
  } catch (error) {
    console.log("MOngo err:  ", error)
    throw new Error(error);
  }
};

export default connectDB