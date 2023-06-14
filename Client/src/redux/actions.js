import axios from "axios";

export const addFavorite = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);

      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    } catch (error) {}
  };
};

export const removeFavorite = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);

      // if (!data.length) throw Error("No hay personajes favoritos");

      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    } catch (error) {}
  };
};

export const filterCards = (gender) => {
  return {
    type: "FILTER",
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: "ORDER",
    payload: order,
  };
};
