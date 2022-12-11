import PokemonAPI from "./components/PokemonAPI";

function App() {
  const app = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin : "5%",
  };
  return (
    <div style={app}>
      <PokemonAPI />
    </div>
  );
}

export default App;
