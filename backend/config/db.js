const mongoose = require("mongoose");
require("dotenv").config();


const connectDB = async () => {
    const MONGO_URI = "mongodb+srv://david:ecommercescratchproject@cluster0.k7fwyhh.mongodb.net/EcomStore";
    try {
      await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected...');
    } catch (err) {
      console.error(err.message);
    }
  };

  module.exports = connectDB;