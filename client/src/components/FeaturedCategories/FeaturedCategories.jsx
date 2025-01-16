import React, { useState } from "react";
import "./FeaturedCategories.css";

export default function FeaturedCategories() {
  const [search, setSearch] = useState("");
  const categories = [
    { name: "Electronics", count: 986 },
    { name: "Furniture", count: 1760 },
    { name: "Books", count: 625 },
    { name: "Appliances", count: 1759 },
    { name: "Sports Gear", count: 901 },
    { name: "Clothing", count: 722 },
    { name: "Toys", count: 422 },
    { name: "Decor", count: 1043 },
    { name: "Outdoor Equipment", count: 148 },
    { name: "Kitchen Tools", count: 215 },
    { name: "Bikes", count: 283 },
    { name: "Tools & Hardware", count: 183 },
    { name: "Gaming", count: 100 },
    { name: "Gardening", count: 124 },
    { name: "Art Supplies", count: 77 },
    { name: "Pet Supplies", count: 713 },
    { name: "Fitness", count: 63 },
    { name: "Tech Accessories", count: 122 },
    { name: "Photography", count: 157 },
    { name: "Travel Gear", count: 112 },
  ];

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="featured-categories-landing">
      <div className="featured-categories-container sexy-shadow">
        <header className="categories-header">
          <h2 className="header-title">Discover Trending Categories</h2>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for a category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </header>
        <div className="categories-list">
          {filteredCategories.map((category, index) => (
            <div className="category-item pulse-hover" key={index}>
              <span className="category-name">{category.name}</span>
              <span className="category-count">{category.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
