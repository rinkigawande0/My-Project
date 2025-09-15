// src/components/Categories.jsx
import React from "react";
import "../styles/categories.css";
import "../App.css";

const categories = [
  { name: "Men", image: "/assets/categories/men.jpg" },
  { name: "Women", image: "/assets/categories/women.jpg" },
  { name: "Electronics", image: "/assets/categories/electronics.jpg" },
  { name: "Shoes", image: "/assets/categories/shoes.jpg" },
];

const Categories = () => {
  return (
    <section className="categories-section">
      <h2 className="section-title">Shop by Category</h2>
      <div className="category-grid">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <img src={cat.image} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
