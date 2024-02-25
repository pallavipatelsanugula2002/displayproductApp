import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: "250px", height: "250px", margin: "auto" }}
      />
      <div className="product-details">
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}/5</p>
        <Link to={`/product/${product.id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
