import CharacterList from "./components/CharacterList";
import "./App.css";

function App() {
  return (
    <div className="bg-dark text-white">
      <p className="text-center display-1 py-4 bg-black fs-1 text">
        Api de Rick And Morty, Primera etapa
      </p>
      <CharacterList />
    </div>
  );
}

export default App;
