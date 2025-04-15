import React, { useState, useEffect } from "react";
import "./App.css"; // Ensure styles are applied

const FilterComponent = ({ options, onChange, filterName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleUpClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? options.length - 1 : prevIndex - 1;
      onChange(options[newIndex]);
      return newIndex;
    });
  };

  const handleDownClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === options.length - 1 ? 0 : prevIndex + 1;
      onChange(options[newIndex]);
      return newIndex;
    });
  };

  // Initialize with the first option
  useEffect(() => {
    if (options.length > 0) {
      onChange(options[currentIndex]);
    }
  }, []);

  return (
    <div className="filter-container">
      <button className="filter-button" onClick={handleUpClick}>
        ▲
      </button>
      <div className="filter-field">{options[currentIndex]}</div>
      <button className="filter-button" onClick={handleDownClick}>
        ▼
      </button>
    </div>
  );
};

export default FilterComponent;