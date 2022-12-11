import { BoxView } from "./components/BoxView";
import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const boxes = {
    margin: "5px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent:"space-evenly",
    minHeight: "auto",
    outline: "2px black solid",
    borderRadius: "5px",
  };
  const form = {
    margin: "2% 40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "10vh",
    outline: "2px black solid",
    borderRadius: "5px",
  };
  const [colorArr, setColorArr] = useState([]);
  console.log(colorArr)
  return (
    <>
      <div style={form}>
        <Form updateParentArr={setColorArr} colorArray={colorArr}/>
      </div>
      <div style={boxes}>
        {colorArr.map((color, id) => (
          <BoxView key={id} color={color} />
        ))}
      </div>
    </>
  );
}

export default App;
