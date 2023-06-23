import { createContext, useState, useEffect } from "react";

import PropTypes from "prop-types";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in (e.g., by checking a token in localStorage)
    const checkLoginStatus = () => {
      const token = localStorage.getItem("token"); // Assuming you store the authentication token in localStorage
      if (token) {
        setIsLoggedIn(true);
      }
    };

    checkLoginStatus();
  }, []);

  const login = () => {
    // Perform login logic here
    // Assuming successful login, set the isLoggedIn state and store token in localStorage
    setIsLoggedIn(true);
    localStorage.setItem("token", "njsahiuy3786278y");
  };

  const logout = () => {
    // Perform logout logic here
    // Assuming successful logout, reset the isLoggedIn state and remove token from localStorage
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
