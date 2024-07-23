import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      // Store the token in local storage
      localStorage.setItem("authToken", token);

      // Set the Authorization header for Axios
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // Redirect to the desired route
      navigate("/onebox");
    } else {
      console.error("Token not found in URL");
    }
  }, [navigate]);

  return <div>Redirecting...</div>;
};

export default RedirectHandler;
