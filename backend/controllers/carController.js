const Car = require("../models/Car");

// CREATE
exports.createCar = async (req, res) => {
  const car = await Car.create(req.body);
  res.json(car);
};

// READ
exports.getCars = async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
};

// UPDATE
exports.updateCar = async (req, res) => {
  const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(car);
};

// DELETE
exports.deleteCar = async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.json({ message: "Car deleted" });
};