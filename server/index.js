// console.log("Hello World");
require('dotenv').config();
const bcrypt = require("bcrypt");
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");
const path = require('path');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Import Routes

const userRoutes = require("./routers/userRoutes");
const productRoutes = require("./routers/productRoutes");

// Serve Static Files (for product image uploads)
app.use("/uploads", express.static("uploads"));

// MongoDB Connection
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/LIO_AUTH");

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB successfully!");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err);
});

// Routes
app.use("/", userRoutes);
app.use("/home", productRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start Server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
