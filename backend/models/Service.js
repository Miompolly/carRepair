const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  serviceCode: String,
  serviceName: String,
  servicePrice: Number
});

module.exports = mongoose.model("Service", serviceSchema);