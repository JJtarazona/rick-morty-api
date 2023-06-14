import styles from "./Cards.module.css";
import Card from "../card/Card";
import React from "react";

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div className={styles.mainDiv}>
      {characters.map((char) => (
        <Card
          id={char.id}
          name={char.name}
          status={char.status}
          species={char.species}
          gender={char.gender}
          origin={char.origin.name}
          image={char.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
