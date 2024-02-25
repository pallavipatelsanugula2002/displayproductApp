import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./Products.css";

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6); // Number of products per page
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData && userData.token;

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = productsList.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(filtered);
  };

  const handleSortByPrice = () => {
    const sortedProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
    setFilteredProducts(sortedProducts);
  };

  const handleSortByName = () => {
    const sortedProducts = [...filteredProducts].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setFilteredProducts(sortedProducts);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/auth/products",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        setProductsList(response.data.products);
        setFilteredProducts(response.data.products); // Set filtered products initially
      } catch (error) {
        alert("Error Fetching Products: " + error.message);
      }
    };

    fetchProducts(); // Call fetchProducts function
  }, []); 

  // Calculate indexes for displaying current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Products</h1>
        <input
          type="text"
          name="searchTerm"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by title or description"
        ></input>
        <button onClick={handleSortByPrice} style={{ margin: '20px' }}>Sort By Price</button>
        <button onClick={handleSortByName}>Sort By Name</button>
      </div>
      <div className="products-container">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* Pagination */}
      <div className="pagination" style={{textAlign:'center'}}>
        {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)} style={{margin:'7px'}}>
            &nbsp;{i + 1}&nbsp;
          </button>
        ))}
      </div>
    </>
  );
};

export default Products;
