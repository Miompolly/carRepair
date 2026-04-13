const express = require("express");
const cors = require("cors");
const authRoutes=require('./routes/authRoutes')

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);




const carRoutes = require("./routes/carRoutes");
app.use("/api/cars", carRoutes);

module.exports = app;