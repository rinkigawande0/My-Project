import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">🛒 ShopZone</Link>
      </div>

      <ul className="navbar-links">
         <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
{/* Search Bar */}
      <div className="navbar-right">
        <input  
           type="text"
           placeholder="Search products..."
           className="navbar-search"
           />
            <span className="search-icon">🔍</span>
      </div>
    </nav>
  );
};

export default Navbar;