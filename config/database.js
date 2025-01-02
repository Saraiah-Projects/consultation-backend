const mongoose = require("mongoose");
require("dotenv").config(); // For loading environment variables

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // These options are no longer needed:
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
