import React from "react";
import "../styles/HeroSection.css";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import assets from "../assets/banner.jpg";

const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <section className={`hero-section ${theme}`}>
      <div className="hero-content">
        <h1>Welcome to Our Store</h1>
        <p>Discover amazing products at the best prices</p>
        <Link to="/products">
          <button className="shop-now-btn">Shop Now</button>
        </Link>
      </div>
      <div className="hero-image">
        <img
          src={assets}
          alt="Shopping banner"
        />
      </div>
    </section>
  );
};

export default HeroSection;
