import styles from "./Card.module.css";
import React from "react";
import { Link } from "react-router-dom";
import PathRoutes from "../../helpers/Routes.helper";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, removeFavorite } from "../../redux/actions";

// ICONOS
import { FaRunning, FaBookDead, FaQuestion } from "react-icons/fa";
import { BiMaleSign, BiFemaleSign } from "react-icons/bi";

function Card(props) {
  const {
    name,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    id,
    removeFavorite,
    addFavorite,
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav ? removeFavorite(id) : addFavorite(props);
    setIsFav(!isFav);
  };

  useEffect(() => {
    if (myFavorites && Array.isArray(myFavorites)) {
      myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
    }
  }, [myFavorites]);

  return (
    <div key={id}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      <div className={styles.wrapperCard}>
        <button
          className={styles.btn}
          onClick={() => {
            onClose(id);
          }}
        >
          X
        </button>
        <img className={styles.imgper} src={image} alt="Es una Foto" />
        <Link to={PathRoutes.DETAIL.replace(":id", id)}>
          <h2 className={styles.name}>{name}</h2>
        </Link>
        <div className={styles.info}>
          <h3>
            Status |{" "}
            {status === "Alive" ? (
              <>
                Alive <FaRunning />
              </>
            ) : status === "Dead" ? (
              <>
                Dead <FaBookDead />
              </>
            ) : (
              <>
                Unknown <FaQuestion />
              </>
            )}
          </h3>
          <h3>Especie | {species}</h3>
          <h3>
            Género |{" "}
            {gender === "Male" ? (
              <>
                Male <BiMaleSign />
              </>
            ) : (
              <>
                Female <BiFemaleSign />
              </>
            )}
          </h3>
          <h3>{origin?.name}</h3>
          {/* <h3> ID | {id}</h3> */}
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
