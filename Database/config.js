const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongoDB_URL = process.env.MONGODB_URL;
const connectDB = async (req, res) => {
  try {
    const connection = await mongoose.connect(mongoDB_URL);
    console.log("MongoDB Connected successfully");
    return connection;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "MongoDB connection Error" });
  }
};
module.exports = connectDB;
