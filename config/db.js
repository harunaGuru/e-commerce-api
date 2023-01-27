const mongoose = require("mongoose");
require('dotenv').config();
const MONGO_URL = process.env.MONGO_URI
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        
    } catch (error) {
        console.log(error)
    }
};

module.exports = connectDB;