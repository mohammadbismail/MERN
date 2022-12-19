import Main from "./views/Main";
import { Routes, Route, Link } from "react-router-dom";
import SingleProduct from "./views/SingleProduct";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
