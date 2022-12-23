import Main from "./views/Main";
import { Routes, Route, Link } from "react-router-dom";
import SingleProduct from "./views/SingleProduct";
import Update from "./views/Update";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/product/:id/edit" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
