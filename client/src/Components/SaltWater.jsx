import React from "react";

const SaltWater = ({ fishes }) => {
  const saltWater = fishes.filter((fish) => fish.type === "saltwater");
  return (
    <div>
      <div className="main-wrapper">
        {saltWater.map((fish) => (
          <div key={fish.id} className="card">
            <h4>{fish.name}</h4>
            <img src={fish.image} alt={fish.name + "image"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaltWater;
