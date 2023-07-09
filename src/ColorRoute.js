import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ColorRoute.css";

const ColorRoute = ({ colors }) => {
  console.log(colors);
  const { color } = useParams();

  const selectedColor = colors.find((c) => c.name === color);

  return (
    <>
      <div
        className="ColorRoute"
        style={{ backgroundColor: `${selectedColor.rgbVal}` }}
      >
        <h1>{selectedColor.name}</h1>
        <p>In all its glory!</p>

        <Link className="ColorRoute-link" to={`/colors`}>
          Go Back
        </Link>
      </div>
    </>
  );
};

export default ColorRoute;
