import React, { useState } from "react";
import axios from "axios";

const DeleteFish = ({ parentState }) => {
  const [name, setName] = useState("");
  const handleInput = (e) => {
    setName({ name: e.target.value });
  };
  const handleClick = (e) => {
    const fishName = name.name.toLowerCase();
    const fish = parentState.fishes.filter((fish) => fish.name === fishName);
    const fishData = fish[0];
    axios
      .delete(`http://localhost:3000/fishes/${fishData.id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <form action="" className={parentState.form==='delete'?'form delete':'hide'}>
      <input
        type="text"
        name="name"
        placeholder="Enter fish name"
        onChange={handleInput}
      />
      <input type="submit" value="Delete" onClick={handleClick} />
    </form>
  );
};

export default DeleteFish;
