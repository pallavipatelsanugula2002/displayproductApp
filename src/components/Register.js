import React, { useState } from "react";
import axios from "axios";
import './Login.css'
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [registerValidation, setRegisterValidation] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
    setRegisterValidation({ ...registerValidation, [name]: "" });
  };

  const handleSubmit = async () => {
    const { email, username, password } = registerData;
    let valid = true;
    // Simple validations
    if (!email) {
      setRegisterValidation(prevState => ({
        ...prevState,
        email: "Email field is required",
      }));
      valid = false;
    }
    if (!username) {
      setRegisterValidation(prevState => ({
        ...prevState,
        username: "Username field is required",
      }));
      valid = false;
    }else{
      if(username.length<6){
        // alert("Username Should be atleast 6 characters long")
        setRegisterValidation(prevState => ({
          ...prevState,
          username: "Username Should be atleast 6 characters long",
        }));
        valid = false;
      }
    }    
    if (!password) {
      setRegisterValidation(prevState => ({
        ...prevState,
        password: "Password field is required",
      }));
      valid = false;
    } else {
      // Password validation using regex
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      if (!passwordRegex.test(password)) {
        setRegisterValidation({
          ...registerValidation,
          password:
            "Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
        });
        valid=false;
      }
    }

    if (valid) {
      // Making POST request using Axios
      try {
        localStorage.setItem("user", registerData);
        const response = await axios.post("https://dummyjson.com/users/add", registerData);
        console.log("Registration successful:", response.data);
        alert("Registration successful");
        navigate("/login");
        setRegisterData({})
        // Handle successful registration, e.g., redirect user to login page
      } catch (error) {
        console.error("Registration error:", error);
        // Handle registration error
      }
    }
  };

  return (
      <div id="registrationSection" className="form-container">
        <h2>Registration</h2>
        <form id="registrationForm">
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={registerData.username}
            onChange={handleChange}
            required
          />
          <span id="usernameError" className="error">
            {registerValidation.username}
          </span>
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={registerData.email}
            onChange={handleChange}
            required
          />
          <span id="emailError" className="error">
            {registerValidation.email}
          </span>
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={registerData.password}
            onChange={handleChange}
            required
          />
          <span id="passwordError" className="error">
            {registerValidation.password}
          </span>
          <button type="button" id="registerButton" onClick={handleSubmit}>
            Register
          </button>
          <span id="registrationError" className="error" />
          <p>
            Already have an account?{" "}
            <a href="/login" >
              Login here
            </a>
          </p>
        </form>
      </div>
  );
};

export default Register;
