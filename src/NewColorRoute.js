import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewColorRoute.css";

const NewColorRoute = ({ addColor }) => {
  const INITIAL_STATE = {
    name: "",
    rgbVal: "",
  };

  const history = useNavigate();

  const [formData, setFormData] = useState(INITIAL_STATE);

  //   const validateForm = (formData) => {
  //     for (let key in formData) {
  //       if (formData[key] === "") {
  //         return false;
  //       }
  //     }
  //     return true;
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (validateForm(formData)) {
    addColor(formData);
    setFormData(INITIAL_STATE);
    history("/color");
    // }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  return (
    <div className="NewColorRoute">
      <h2>Add a color!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" for>
          Color name:
        </label>
        <input id="name" name="name" onChange={handleChange} />
        <label htmlFor="rgbVal" for>
          Color value:
        </label>
        <input id="rgbVal" name="rgbVal" type="color" onChange={handleChange} />
        <br />
        <button>Add</button>
      </form>
    </div>
  );
};

export default NewColorRoute;
