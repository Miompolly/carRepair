const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  serviceRecord: { type: mongoose.Schema.Types.ObjectId, ref: "ServiceRecord" },
  amountPaid: Number,
  paymentDate: { type: Date, default: Date.now },
  receivedBy: String
});

module.exports = mongoose.model("Payment", paymentSchema);