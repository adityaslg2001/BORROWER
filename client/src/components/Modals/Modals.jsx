import React, { useState, useEffect } from "react";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => setIsVisible(true), 300); 
    }, 2000); 
      clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300); // Match animation duration
  };

  if (!isVisible && !isAnimating) return null;

  return (
    <div style={overlayStyle}>
      <div
        style={{
          ...popupStyle,
          opacity: isAnimating ? 1 : 0,
          transform: isAnimating ? "scale(1)" : "scale(0.8)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        <h2>Popup Title</h2>
        <p>This is a centered popup with an animation effect.</p>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const popupStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  maxWidth: "400px",
  width: "100%",
};

export default Popup;
