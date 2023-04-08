import { useEffect, useState } from "react";
import Character from "./Character";

function CharacterList() {
  const [characters, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setLoading(false);
      setCharacter(data.results);
    }

    fetchData();
  }, []);

  return (
    <div className="container bg-danger">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4">
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CharacterList;
