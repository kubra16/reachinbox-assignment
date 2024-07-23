import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  const loginWithGoogle = async () => {
    try {
      const popup = window.open(
        "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/redirect-handler",
        "google-login"
      );

      if (!popup) {
        throw new Error("Popup blocked or failed to open");
      }
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
    delete axios.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loginWithGoogle, logout, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};
