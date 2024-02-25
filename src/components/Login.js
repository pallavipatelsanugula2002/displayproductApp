import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./auth/ContextProvider";
import './Login.css'

const Login = () => {
  const { userData, handleLogin, handleLogout } = useContext(DataContext);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [loginValidation, setLoginValidation] = useState({
    username: "",
    password: "",
  });

  // const { handleData } = useContext(DataContext); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    setLoginValidation({ ...loginValidation, [name]: "" });
  };

  const handleSubmit = async () => {
    const { username, password } = loginData;
    let valid = true;

    // Simple validations
    if (!username) {
      setLoginValidation(prevState => ({
        ...prevState,
        username: "Username field is required",
      }));
      valid = false;
    }
    if (!password) {
      setLoginValidation(prevState => ({
        ...prevState,
        password: "Password field is required",
      }));
      valid = false;
    }

    if (valid) {
      // Making POST request using Axios
      try {
        const response = await axios.post("https://dummyjson.com/auth/login", loginData);
        console.log("Login successful:", response.data);
        handleLogin(response.data);
        alert("Login successful");
        navigate("/products");
      } catch (error) {
        console.error("Login error:", error);
        alert("Invalid credentials");
        // Handle login error, e.g., display error message
      }
    }
  };

  return (
      <div id="loginSection" className="form-container">
        <h2>Login</h2>
        <form id="loginForm">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            required
          />
          <span id="usernameError" className="error">
            {loginValidation.username}
          </span>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
          <span id="passwordError" className="error">
            {loginValidation.password}
          </span>
          <button type="button" id="loginButton" onClick={handleSubmit}>
            Login
          </button>
          <span id="loginError" className="error" />
          <p>
            Don't have an account?{" "}
            <a href="/register">Register here</a>
          </p>
        </form>
      </div>
  );
};

export default Login;