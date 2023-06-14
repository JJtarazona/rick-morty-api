import React, { useState } from "react";
import styles from "../searchBar/SearchBar.module.css";

export default function SearchBar(props) {
  const { onSearch } = props;

  const [id, setId] = useState();
  const [newCard, setNewCard] = useState([]);
  const [newCardIds, setNewCardIds] = useState([]);

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleSearch = () => {
    id >= 827
      ? alert("El id no existe")
      : newCard.includes(id)
      ? alert("La carta ya fue creada")
      : (() => {
          setNewCard([...newCard, id]);
          onSearch(id);
          setId("");
        })();
  };

  const searchRandom = () => {
    let randomId;

    do {
      randomId = Math.floor(Math.random() * 826) + 1;
    } while (newCardIds.includes(randomId));

    setNewCardIds([...newCardIds, randomId]);
    onSearch(randomId);
  };

  return (
    <div className={styles.container}>
      <button className={styles.btnRandom} onClick={searchRandom}>
        Random
      </button>
      <input
        className={styles.inp}
        type="search"
        onChange={handleChange}
        value={id}
      />
      <button className={styles.btnSearch} onClick={handleSearch}>
        Agregar
      </button>
    </div>
  );
}
