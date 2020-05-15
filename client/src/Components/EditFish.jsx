import React, { useState } from "react";
import axios from "axios";

const EditFish = ({parentState}) => {
  const [state, setState] = useState({
    currentName: "",
    name: "",
    type: "freshwater",
    image: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value.toLowerCase(),
    });
  };
  const handleSubmit = (e) => {
    const fish = parentState.fishes.filter(
      (fish) => fish.name === state.currentName.toLowerCase()
    );
    const fishData = fish[0];
    const data = { name: state.name, type: state.type, image: state.image };
    axios
      .patch(`http://localhost:3000/fishes/${fishData.id}`, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form action="" className={parentState.form==='edit'?'form edit':'hide'}>
        <input type="text" name="currentName" id="" onChange={handleChange} placeholder="Current name"/>
        <input type="text" name="name" id="" onChange={handleChange} placeholder="New name"/>
        <select
          type="text"
          name="type"
          value={state.type}
          id=""
          onChange={handleChange}
        >
          <option value="freshwater">fresh water</option>
          <option value="saltwater">salt water</option>
        </select>
        <input type="text" name="image" id="" onChange={handleChange} placeholder="New image link"/>
        <input type="submit" value="Update" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default EditFish;
