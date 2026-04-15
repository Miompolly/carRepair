const express = require("express");
const cors = require("cors");
const authRoutes=require('./routes/authRoutes')
const carRoutes = require("./routes/carRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const serviceRecordRoutes = require("./routes/serviceRecordRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/service-records", serviceRecordRoutes);
app.use("/api/payments", paymentRoutes);

module.exports = app;