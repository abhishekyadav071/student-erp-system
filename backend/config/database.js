const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // 🔍 Debug: check env variable
    console.log("🔍 MONGODB_URI:", process.env.MONGODB_URI);

    // ❌ If missing → stop immediately
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is NOT defined in .env");
    }

    // ✅ Connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);

  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1); // Stop app if DB fails
  }
};

module.exports = connectDB;