import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { DataContext } from './auth/ContextProvider';

const Home = ({ featuredProducts }) => {
  const {userData}=useContext(DataContext)
  return (

    <div className='home-container'>
      <section className='home-body'>
        <div>
          <h1>Welcome to Our Store</h1>
          <p style={{fontWeight:'bold'}}>Discover amazing deals on your favorite products</p>
         { !userData&&<Link to="/login" className="shop-now">Shop Now</Link>}
        </div>
      </section>
    </div>
  );
};

export default Home;
