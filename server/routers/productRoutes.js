const express = require("express");
const multer = require("multer");
const { addProduct, getProducts, deleteProduct, updateProduct } = require("../controllers/productController.js");

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Ensure this directory exists
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Product routes
router.post("/addProduct", upload.single("image"), addProduct);
router.get("/yourListings", getProducts);
router.delete('/yourListings/:id', deleteProduct);
router.put('/yourListings/:id', updateProduct);
  
module.exports = router;

