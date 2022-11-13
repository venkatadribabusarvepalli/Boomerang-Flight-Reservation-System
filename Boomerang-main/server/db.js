const mongoose = require('mongoose');
require("dotenv").config();
const db = process.env.mongoURI

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Chaitanya:kliEVbYvbxeQO887@cluster0.s9paelw.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;