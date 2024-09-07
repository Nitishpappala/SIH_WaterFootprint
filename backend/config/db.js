const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.MONGO;
mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    if (!db) {
      throw new Error("MongoDB URI is not defined");
    }
    await mongoose.connect(db);
    console.log("Mongoose connected");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
