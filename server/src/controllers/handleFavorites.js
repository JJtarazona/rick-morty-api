// let myFavorites = [];

// const postFav = (req, res) => {
//   myFavorites.push(req.body);

//   return res.status(200).json(myFavorites);
// };

// const deleteFav = (req, res) => {
//   const { id } = req.params;

//   myFavorites = myFavorites.filter((favorite) => favorite.id !== +id);

//   return res.status(200).json(characterFilter);
// };

// module.exports = { postFav, deleteFav };

let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);

  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  myFavorites = myFavorites.filter((favorite) => favorite.id !== id);

  return res.status(200).json(myFavorites);
};

module.exports = { postFav, deleteFav };
