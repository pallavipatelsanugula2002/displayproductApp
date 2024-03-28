import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { DataContext } from "./auth/ContextProvider";
import logo from '../images/logo.png'

const Header = () => {
  const { userData, handleLogout } = useContext(DataContext);
  const navigate = useNavigate();
  
  const isLoggedIn = userData && Object.keys(userData).length > 0;

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/"); // Redirect to home page after logout
  };
  return (
    <header>
      <nav>
        <ul style={{display:'flex'}}>
          <li>
            <Link to="/" ><img src={logo} height={45} width={45}></img></Link>
          </li>
          <li >
            <Link to="/" style={{color:'skyblue', fontStyle:'italic'}}>Easy Shop</Link>
          </li>
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
              <li style={{marginLeft:'auto'}}>
                <button onClick={handleLogoutClick} style={{marginTop:'3px'}}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
