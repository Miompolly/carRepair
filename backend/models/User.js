const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, default: "mechanic" }
});

module.exports = mongoose.model("User", userSchema);