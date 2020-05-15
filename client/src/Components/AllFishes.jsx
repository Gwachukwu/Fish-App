import React from "react";

const AllFishes = ({ fishes }) => {
  return (
    <div>
      <div className="main-wrapper">
        {fishes.map((fish) => (
          <div key={fish.id} className="card">
            <h4>{fish.name}</h4>
            <img src={fish.image} alt={fish.name + "image"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFishes;
