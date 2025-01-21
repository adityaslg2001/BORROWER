import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";

const categories = [
  "Electronics",
  "Furniture",
  "Books",
  "Appliances",
  "Sports Gear",
  "Clothing",
  "Toys",
  "Decor",
  "Outdoor Equipment",
  "Kitchen Tools",
  "Bikes",
  "Tools & Hardware",
  "Gaming",
  "Gardening",
  "Art Supplies",
  "Pet Supplies",
  "Fitness",
  "Tech Accessories",
  "Photography",
  "Travel Gear",
];

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: null,
    pincode: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setFormData({ ...formData, image: file, imagePreview: previewURL });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare FormData to send to backend
    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("pincode", formData.pincode);
    data.append("phone", formData.phone);
    data.append("username", username);
    data.append("image", formData.image); // Add the image file

    try {
      const response = await axios.post("http://localhost:5000/home/addProduct", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      

      console.log(response.data);
      alert("Product added successfully!");
      // Clear the form fields
      setFormData({
        name: "",
        price: "",
        description: "",
        category: "",
        image: null,
        imagePreview: "",
        pincode: "",
        phone: "",
      });

      // Navigate to /yourListings
      navigate("/home/yourListings");
      
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("Failed to upload product. Please try again.");
    }
  };

  return (
    <div className="add-product-container">
      <h1 className="add-product-title">Add Your Product</h1>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="form-group">
          <label>Price (in ₹)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter product price"
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter product description"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Product Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          {formData.imagePreview && (
            <div className="image-preview">
              <img src={formData.imagePreview} alt="Product Preview" />
            </div>
          )}
        </div>

        <div className="form-group">
          <label>Pincode of Publishing</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="Enter pincode"
            required
          />
        </div>

        <div className="form-group">
          <label>Your Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;