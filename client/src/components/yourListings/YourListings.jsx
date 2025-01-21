import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import "./YourListings.css";

const YourListings = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const username = localStorage.getItem("username"); // Fetch the username from localStorage

  useEffect(() => {
    const fetchProducts = async () => {
      if (!username) {
        console.error("Username not found in localStorage");
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/home/yourListings", {
          params: { username },
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [username]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    

    setSelectedProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    if (selectedProduct) {
      const { name, price, description, pincode, phone } = selectedProduct;

      // Validation of all fields
      if (
        !name.trim() ||
        !price ||
        !description.trim() ||
       
        !pincode.trim() ||
        !phone.trim()
      ) {
        alert("All fields are required. Please fill out every field.");
        return;
      }

      try {
        const response = await axios.put(
          `http://localhost:5000/home/yourListings/${selectedProduct._id}`,
          selectedProduct
        );

        // Update the product in the list
        setProducts(
          products.map((product) =>
            product._id === selectedProduct._id ? { ...product, ...response.data } : product
          )
        );

        setShowModal(false); // Close the modal
      } catch (error) {
        console.error("Error updating product:", error);
      }
    }
  };

  const handleEdit = (product) => {
    setSelectedProduct(product); // Set the selected product for editing
    setShowModal(true); // Open the modal
  };

  const handleDelete = async (productId) => {
    if (window.confirm("Are you sure you want to delete this listing?")) {
      try {
        await axios.delete(`http://localhost:5000/home/yourListings/${productId}`);
        setProducts(products.filter((product) => product._id !== productId));
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  const isFormValid = () => {
    const { name, price, description, pincode, phone } = selectedProduct || {};
    return (
      name?.trim() &&
      price &&
      description?.trim() &&
      
      pincode?.trim() &&
      phone?.trim()
    );
  };

  return (
    <div className="your-listings-container">
      <h1 className="your-listings-title">Your Listings</h1>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="product-card">
              <img
                src={`http://localhost:5000${product.imageUrl}`}
                alt={product.name}
                className="product-image"
              />
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">₹{product.price}</p>
              <p className="product-category">Category: {product.category}</p>
              
              <div className="product-actions">
                <Button className="edit-button" variant="primary" onClick={() => handleEdit(product)}>
                  Edit
                </Button>
                <Button className="delete-button" variant="danger" onClick={() => handleDelete(product._id)}>
                  Delete
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-products-message">You have no listings yet.</p>
        )}
      </div>

      {/* Modal for Editing Product */}
      {showModal && selectedProduct && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Listing</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formProductName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={selectedProduct.name || ""}
                  onChange={handleInputChange}
                  placeholder="Enter product name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formProductPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={selectedProduct.price || ""}
                  onChange={handleInputChange}
                  placeholder="Enter price"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formProductDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={selectedProduct.description || ""}
                  onChange={handleInputChange}
                  placeholder="Enter product description"
                  required
                />
              </Form.Group>

              

              <Form.Group controlId="formProductPin">
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  type="text"
                  name="pincode"
                  value={selectedProduct.pincode || ""}
                  onChange={handleInputChange}
                  placeholder="Enter pincode"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formProductPhoneNo">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={selectedProduct.phone || ""}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                  required
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={handleSaveChanges}
              disabled={!isFormValid()} 
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default YourListings;
