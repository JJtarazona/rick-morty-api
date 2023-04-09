import { useEffect, useState } from "react";
import Character from "./Character";
import Pagination from "./Pagination";

function CharacterList() {
  const [characters, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPages] = useState(1);

  function NavPage(props) {
    return (
      <div className="d-flex justify-content-between align-items-center">
        <p>Page {props.page}</p>
        <div>
          <button
            className="btn btn-primary sm"
            onClick={() => props.setPages(props.page - 1)}
          >
            Previos
          </button>
          <button
            className="btn btn-primary sm"
            onClick={() => props.setPages(props.page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character?page=" + page
      );
      const data = await response.json();
      setLoading(false);
      setCharacter(data.results);
    }

    fetchData();
  }, [page]);

  return (
    <div className="container bg-black">
      <NavPage page={page} setPages={setPages} />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
      <NavPage page={page} setPages={setPages} />
      <Pagination page={page} setPages={setPages} />
    </div>
  );
}

export default CharacterList;

// ! Código de prueba, no se puede visualizar los personajes

// import { useState } from "react";
// import Character from "./Character";
// import Pagination from "./Pagination";

// function CharacterList() {
//   const [characters, setCharacter] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [pageNumber, setPageNumber] = useState(1);

//   return (
//     <div className="container bg-black">
//       <Pagination
//         setLoading={setLoading}
//         setCharacter={setCharacter}
//         setPageNumber={setPageNumber}
//       />

//       {loading ? (
//         <h1>Loading...</h1>
//       ) : (
//         <div className="row">
//           {characters.map((character) => {
//             return (
//               <div className="col-md-4" key={character.id}>
//                 <Character character={character} />
//               </div>
//             );
//           })}
//         </div>
//       )}
//       <Pagination
//         setLoading={setLoading}
//         setCharacter={setCharacter}
//         setPageNumber={setPageNumber}
//       />
//     </div>
//   );
// }

// export default CharacterList;
