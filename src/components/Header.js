import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { DataContext } from "./auth/ContextProvider";

const Header = () => {
  const { userData, handleLogout } = useContext(DataContext);
  const navigate = useNavigate();
  
  const isLoggedIn = userData&&Object.keys(userData).length > 0;

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/"); // Redirect to home page after logout
  };
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!isLoggedIn && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
          {isLoggedIn && (
            <>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <button onClick={handleLogoutClick}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;