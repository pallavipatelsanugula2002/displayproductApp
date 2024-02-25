import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { ContextProvider } from "./components/auth/ContextProvider";

function App() {
  return (
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </ContextProvider>
  );
}

export default App;
