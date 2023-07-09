import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import ColorRoute from "./ColorRoute";
import ColorsRoute from "./ColorsRoute";
import NewColorRoute from "./NewColorRoute";

function App() {
  const [colors, setColors] = useState([
    { name: "red", rgbVal: "#ff0000" },
    { name: "green", rgbVal: "#00ff00" },
    { name: "blue", rgbVal: "#0000ff" },
  ]);
  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  // const { color } = useParams();
  // let selectedColor = colors.find((c) => c.name === color);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/colors" element={<ColorsRoute colors={colors} />} />
          <Route
            path="/colors/new"
            element={<NewColorRoute addColor={addColor} />}
          />
          <Route
            path="/colors/:color"
            element={<ColorRoute colors={colors} />}
          />
          <Route path="*" element={<Navigate to="/colors" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
