function Character({ character }) {
  return (
    <div key={character.id}>
      <div className="text-center p-2 position-relative">
        <img
          className="img-fluid rounded"
          src={character.image}
          alt={character.name}
        />
        <h3>{character.name}</h3>
        <p>{character.origin.name}</p>
        <p className="rounded">{character.species}</p>

        {(() => {
          if (character.status === "Alive") {
            return (
              <div className="badge bg-success position-absolute">
                {character.status}
              </div>
            );
          } else if (character.status === "Dead") {
            return (
              <div className="badge bg-danger position-absolute">
                {character.status}
              </div>
            );
          } else {
            return (
              <div className="badge bg-secondary position-absolute">
                {character.status}
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
}

export default Character;
