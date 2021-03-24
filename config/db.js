const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Mongodb Connected...");
  } catch (error) {
    console.log(error);
    // Exit process with faliure
    process.exit(1);
  }
};

module.exports = connectDB;
