const Payment = require("../models/Payment");

// CREATE
exports.createPayment = async (req, res) => {
  const payment = await Payment.create(req.body);
  res.json(payment);
};

// READ
exports.getPayments = async (req, res) => {
  const payments = await Payment.find().populate({
    path: "serviceRecord",
    populate: ["car", "service"],
  });
  res.json(payments);
};

// UPDATE
exports.updatePayment = async (req, res) => {
  const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(payment);
};

// DELETE
exports.deletePayment = async (req, res) => {
  await Payment.findByIdAndDelete(req.params.id);
  res.json({ message: "Payment deleted" });
};