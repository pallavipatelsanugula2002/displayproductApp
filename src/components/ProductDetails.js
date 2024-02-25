import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [productId]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Product Details</h1>
      <div style={{ marginLeft: "25%" }}>
        {product ? (
          <div className="product-card" style={{ height: "100%",width:'60%' }}>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "100%", height: "100%", margin: "auto" }}
            />
            <div className="product-details">
              <h2 style={{ color: "blue" }}>{product.title}</h2>
              <p>Brand: {product.brand}</p>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Discount: ${product.discountPercentage}</p>
              <p style={{ color: "violet" }}>
                Description: {product.description}
              </p>
              <p>Rating: {product.rating}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
