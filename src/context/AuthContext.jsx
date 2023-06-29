import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { encryptToken, decryptToken } from "../utils/tokenUtils";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in (e.g., by checking an encrypted token in localStorage)
    const checkLoginStatus = () => {
      const encryptedToken = localStorage.getItem("token");
      if (encryptedToken) {
        const token = decryptToken(encryptedToken); // Decrypt the token
        if (token) {
          setIsLoggedIn(true);
        }
      }
    };

    checkLoginStatus();
  }, []);

  const login = () => {
    // Perform login logic here
    // Assuming successful login, set the isLoggedIn state, encrypt the token, and store it in localStorage
    setIsLoggedIn(true);
    const token = "njsahiuy3786278y"; // Replace with the actual token
    const encryptedToken = encryptToken(token); // Encrypt the token
    localStorage.setItem("token", encryptedToken);
  };

  const logout = () => {
    // Perform logout logic here
    // Assuming successful logout, reset the isLoggedIn state and remove the token from localStorage
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
