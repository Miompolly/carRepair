const Service = require("../models/Service");

// CREATE
exports.createService = async (req, res) => {
  const service = await Service.create(req.body);
  res.json(service);
};

// READ
exports.getServices = async (req, res) => {
  const services = await Service.find();
  res.json(services);
};

// UPDATE
exports.updateService = async (req, res) => {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(service);
};

// DELETE
exports.deleteService = async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ message: "Service deleted" });
};