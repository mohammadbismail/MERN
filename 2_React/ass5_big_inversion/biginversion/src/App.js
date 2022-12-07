import "./App.css";
import BigInversion from "./components/BigInversion";

function App() {
  return (
    <div className="App">
    <BigInversion fname="Mohammad" lname="Ismail" age={28} hairColor="Brown"></BigInversion>
    <BigInversion fname="Mohammad" lname="Ismail" age={28} hairColor="Brown"></BigInversion>
    </div>
    );
}

export default App;
