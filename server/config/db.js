const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB Connected: ${connection.connection.host}`.cyan.underline
    );
  } catch (err) {
    console.log(`Error: ${err.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
