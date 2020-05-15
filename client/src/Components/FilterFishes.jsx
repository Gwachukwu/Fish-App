import React from "react";
import { Link } from "react-router-dom";

const FilterFishes = () => {
  return (
    <div className="filters">
      <p>
        Filter fishes by type:
        <Link to="/" className="filter-links">
          All
        </Link>
        <Link to="/freshwater" className="filter-links">
          Fresh water
        </Link>
        <Link to="/saltwater" className="filter-links">
          Salt water
        </Link>
      </p>
    </div>
  );
};

export default FilterFishes;
