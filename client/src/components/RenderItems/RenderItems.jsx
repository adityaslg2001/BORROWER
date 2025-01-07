import React, { useEffect, useState } from "react";

export default function RenderItems() {
  const [items, setItems] = useState([]); // State to store fetched items
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.products); // Update state with fetched data
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => console.error("Error fetching data:", error)); // Handle errors
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  return (
    <div>
      <h1>Render Items</h1>
      <div style={containerStyle}>
        {items.map((item) => (
          <div key={item.id} style={cardStyle}>
            <img src={item.thumbnail} alt={item.title} style={imageStyle} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>
              <strong>Price:</strong> ${item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "center",
};

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "16px",
  maxWidth: "300px",
  textAlign: "center",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
};
