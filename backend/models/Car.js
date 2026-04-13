const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  plateNumber: { type: String, required: true },
  type: String,
  model: String,
  manufacturingYear: Number,
  driverPhone: String,
  mechanicName: String
});

module.exports = mongoose.model("Car", carSchema);