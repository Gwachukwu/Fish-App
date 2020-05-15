import React, { useState } from "react";
import axios from "axios";

const AddFish = ({ form }) => {
  const [state, setState] = useState({
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
    if (state.name === "") {
      alert("Please enter fish details");
    } else {
      axios
        .post("http://localhost:3000/fishes", state)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <form action="" className={form === "add" ? "form" : "hide"}>
        <input
          type="text"
          name="name"
          id=""
          onChange={handleChange}
          placeholder="Name"
        />
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

        <input
          type="text"
          name="image"
          onChange={handleChange}
          placeholder="Image link"
        />
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default AddFish;
