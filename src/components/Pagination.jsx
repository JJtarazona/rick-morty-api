import React, { useEffect, useState } from "react";

// ! Trabajo en proceso, aun no funciona como quiero

function Pagination({ setCharacter }) {
  const [pageNumber, setPageNumber] = useState(1);

  function barraInferiorNumerada(props) {
    return (
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a
                className="page-link"
                onClick={() => setPageNumber(pageNumber - 1)}
                tabIndex="-1"
                aria-disabled="true"
              >
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="https://rickandmortyapi.com/api/character?page=2"
              >
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                onClick={() => setPageNumber(pageNumber + 1)}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

  useEffect(() => {
    // Aquí puedes realizar la llamada a la API y actualizar el estado de los personajes
    // de acuerdo a la página actual (pageNumber) que se esté visualizando
  }, [pageNumber, setCharacter]);

  return <>{barraInferiorNumerada()}</>;
}

export default Pagination;
