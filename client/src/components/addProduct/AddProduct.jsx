import React, { useState } from "react";
import "./AddProduct.css";
import Footer from "../Header&Footer/Footer";
import HomeHeader from "../home/HomeHeader";


const AddProduct = () => {
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);

    // Cleanup object URLs when component unmounts
    return () => previews.forEach((url) => URL.revokeObjectURL(url));
  };

  return (
    <div>
    <HomeHeader></HomeHeader>
    <div className="add-product-container">
      <h2 className="add-product-title">Add a New Product</h2>
      <form className="add-product-form">
        <div className="form-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" placeholder="Enter product name" />
        </div>
        <div className="form-group">
          <label htmlFor="product-description">Product Description</label>
          <textarea id="product-description" placeholder="Enter product description"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="product-category">Category</label>
          <select id="product-category">
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Books">Books</option>
            <option value="Appliances">Appliances</option>
            <option value="Sports Gear">Sports Gear</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
            <option value="Decor">Decor</option>
            <option value="Outdoor Equipment">Outdoor Equipment</option>
            <option value="Kitchen Tools">Kitchen Tools</option>
            <option value="Bikes">Bikes</option>
            <option value="Tools & Hardware">Tools & Hardware</option>
            <option value="Gaming">Gaming</option>
            <option value="Gardening">Gardening</option>
            <option value="Art Supplies">Art Supplies</option>
            <option value="Pet Supplies">Pet Supplies</option>
            <option value="Fitness">Fitness</option>
            <option value="Tech Accessories">Tech Accessories</option>
            <option value="Photography">Photography</option>
            <option value="Travel Gear">Travel Gear</option>
          </select>
        </div>
        <div className="form-group image-upload-container">
          <label htmlFor="product-images" className="image-upload-label">
            Upload Images
          </label>
          <input
            type="file"
            id="product-images"
            className="image-upload-input"
            multiple
            onChange={handleImageChange}
          />
          <div className="image-preview">
            {imagePreviews.map((src, index) => (
              <img key={index} src={src} alt={`Preview ${index + 1}`} />
            ))}
          </div>
        </div>
        <button type="submit" className="add-product-button">
          Add Product
        </button>
      </form>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default AddProduct;
