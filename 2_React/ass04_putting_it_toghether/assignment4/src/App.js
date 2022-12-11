import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter
        fname="Mohammad"
        lname="Isamil"
        age={28}
        hairColor="Black"
      ></Counter>
      <Counter
        fname="FirstName"
        lname="Family"
        age={20}
        hairColor="Brown"
      ></Counter>
    </div>
  );
}

export default App;
