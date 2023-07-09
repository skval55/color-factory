import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ColorsRoute.css";

const ColorsRoute = ({ colors }) => {
  return (
    <div className="ColorsRoute">
      <div className="ColorsRoute-new">
        <h2>Want another color?</h2>
        <Link to={`/colors/new`}>Add new Color</Link>
      </div>
      <div className="ColorsRoute-colors-links">
        <h3>Pick a Color</h3>
        {colors.map((color) => {
          return <Link to={`/colors/${color.name}`}>{color.name}</Link>;
        })}
      </div>
    </div>
  );
};

export default ColorsRoute;
