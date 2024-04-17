import mongoose from "mongoose";

export async function dbConnect() {
  try {
    console.log(process.env.MONGODB_URI);
    mongoose.connect(process.env.MONGODB_URI!!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDb connected!");
    });
    connection.on("error", (error) => {
      console.log("Error connecting with Mongodb!", error);
      process.exit();
    });
  } catch (error) {
    console.log(error);
  }
}
