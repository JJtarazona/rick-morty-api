function Character({ character }) {
  return (
    <div className="text-center p-2" key={character.id}>
      <img className="rounded" src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
    </div>
  );
}

export default Character;
