const ServiceRecord = require("../models/ServiceRecord");

// CREATE
exports.createServiceRecord = async (req, res) => {
  const serviceRecord = await ServiceRecord.create(req.body);
  res.json(serviceRecord);
};

// READ
exports.getServiceRecords = async (req, res) => {
  const serviceRecords = await ServiceRecord.find().populate("car").populate("service");
  res.json(serviceRecords);
};

// UPDATE
exports.updateServiceRecord = async (req, res) => {
  const serviceRecord = await ServiceRecord.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(serviceRecord);
};

// DELETE
exports.deleteServiceRecord = async (req, res) => {
  await ServiceRecord.findByIdAndDelete(req.params.id);
  res.json({ message: "Service record deleted" });
};