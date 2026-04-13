const mongoose = require("mongoose");

const serviceRecordSchema = new mongoose.Schema({
  car: { type: mongoose.Schema.Types.ObjectId, ref: "Car" },
  service: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
  serviceDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ServiceRecord", serviceRecordSchema);