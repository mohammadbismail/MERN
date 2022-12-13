import Hello from "./components/Hello";
import Hello2 from "./components/Hello2";
import Home from "./components/Home";
import Number from "./components/Number";
import { Router } from "@reach/router";

function App() {
  return (
    <div>
      <Router>
        <Home path="/" />
        <Hello path="/:str" />
        <Hello2 path="/:str/:tc/:bc" />
        <Number path="/:num" />
      </Router>
    </div>
  );
}

export default App;
