import { BoxView } from "./components/BoxView";
import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const [color, setColor] = useState("");
  return (
    <>
      <div className="form">
        <Form getColor={(submittedColor) => setColor(submittedColor)} />
        <div className="boxes">
          <BoxView color={color} />
        </div>
      </div>
    </>
  );
}

export default App;
