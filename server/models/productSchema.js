const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String, required: true },
  pincode: { type: String, required: true },
  phone: { type: String, required: true },
  username: {type: String},
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);
