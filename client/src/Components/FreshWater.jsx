import React from "react";

const FreshWater = ({ fishes }) => {
  const freshWater = fishes.filter((fish) => fish.type === "freshwater");
  return (
    <div>
      <div className="main-wrapper">
        {freshWater.map((fish) => (
          <div key={fish.id} className="card">
            <h4>{fish.name}</h4>
            <img src={fish.image} alt={fish.name + "image"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreshWater;
