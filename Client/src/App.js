//Commons imports
import { useState, useEffect } from "react";
import axios from "axios";
// Styles
import "./App.css";
// Components
import Cards from "./components/cards/Cards";
import NavBar from "../src/components/navBar/NavBar";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
// Routers-DOM
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import PathRoutes from "./helpers/Routes.helper";
import Favorites from "./components/Favorite/Favorites";

const URL = "http://localhost:3001/rickandmorty/login/";
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios.get(URL, {
        params: {
          email: email,
          password: password,
        },
      });

      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      alert("¡No hay personajes con este ID!");
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };

  return (
    <div className="App">
      {location.pathname !== "/" ? <NavBar onSearch={onSearch} /> : null}

      <Routes>
        <Route path={PathRoutes.FORM} element={<Form login={login} />} />
        <Route
          path={PathRoutes.HOME}
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path={PathRoutes.ABOUT} element={<About />} />
        <Route path={PathRoutes.DETAIL} element={<Detail />}></Route>
        <Route path={PathRoutes.FAVORITE} element={<Favorites />}></Route>
      </Routes>
    </div>
  );
}

export default App;
