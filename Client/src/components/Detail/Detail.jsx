import React, { useState, useEffect } from "react";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.detalles}>
        <div className={styles.info}>
          <h1 className={styles.name}>{character.name}</h1>
          <h3>{character.status}</h3>
          <h3>{character.species}</h3>
          <h3>{character.gender}</h3>
          {/* {character.origin && <h1>{character.origin.name}</h1>} */}
          <h3>{character.origin?.name}</h3>
        </div>
        <div>
          <img className={styles.image} src={character.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Detail;
