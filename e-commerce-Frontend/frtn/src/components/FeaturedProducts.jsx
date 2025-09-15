import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const { dispatch } = useCart(); // use dispatch to update cart

  useEffect(()=>{
    const getFeaturedProducts = async ()=>{
      try {
        const res = await axios.get('http://localhost:8080/api/products');
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch products:",error);
      }
    };
    getFeaturedProducts();
  },[]);

  const handleAddToCart = (product) =>{
    dispatch({type:"ADD_TO_CART", payload:product});
  }

  return (
    <div className="featured-section">
      <h2>Featured Products</h2>
      {products.length === 0 ? (<p>No products found.</p>):(
      <div className="featured-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={()=>handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default FeaturedProducts;
