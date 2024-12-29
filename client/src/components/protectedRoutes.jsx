import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("token");
    const isUsername = localStorage.getItem("username");

    if (!isAuthenticated || !isUsername) {
      console.log("Redirecting to /error due to missing authentication.");
      navigate("/error");
    //navigate("/error", { state: { username: isUsername }});
    }
  }, [navigate]);


  return <>{children}</>;
};

export default ProtectedRoute;
