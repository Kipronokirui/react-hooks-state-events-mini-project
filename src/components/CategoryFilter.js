import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  function handleClick(category) {
    onSelectCategory(category);
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button 
        className={selectedCategory === "All" ? "selected" : ""}
        onClick={() => handleClick("All")}
      >
        All
      </button>
      {categories.map(category => (
        <button 
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
