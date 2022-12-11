import React, { useState } from "react";
import Display from "./components/Display";

function App() {
  const [items, setItems] = useState([
    {
      title: "Tab1",
      desc: "this is desctiption for tab1",
    },
    {
      title: "Tab2",
      desc: "hello there",
    },
    {
      title:"Tab3",
      desc: "this is tab3",
    }
  ]);
  return (
    <div >
      <Display items={items} />
    </div>
  );
}

export default App;
