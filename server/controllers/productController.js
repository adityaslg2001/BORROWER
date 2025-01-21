
const Product = require("../models/productSchema"); 

// Add Product (POST)
const addProduct = async (req, res) => {
  try {
    const { name, price, description, category, pincode, phone, username } = req.body;
    const imageFile = req.file;

    if (!imageFile) {
      return res.status(400).json({ message: "Image is required" });
    }

    const newProduct = new Product({
      name,
      price,
      description,
      category,
      imageUrl: `/uploads/${imageFile.filename}`, // Save the image path
      pincode,
      phone,
      username,
    });

    const savedProduct = await newProduct.save();

    res.status(201).json({
      message: "Product added successfully",
      product: savedProduct,
    });
    
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get All Products (GET)
const getProducts = async (req, res) => {
    const { username } = req.query;
    console.log("Received username:", username);
  
    if (!username) {
      return res.status(400).json({ message: "Username is required." });
    }
  
    try {
      const userProducts = await Product.find({ username });
  
      if (userProducts.length === 0) {
        return res.status(404).json({ message: "No listings found for this user." });
      }
  
      res.status(200).json(userProducts);
    } catch (err) {
      console.error("Error fetching products:", err);
      res.status(500).json({ message: "Server error." });
    }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
};


const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, category, pincode, phone } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, description, category, pincode, phone },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error updating product.", error });
  }
};


module.exports = {
    addProduct,
    getProducts,
    deleteProduct,
    updateProduct,
  };
  