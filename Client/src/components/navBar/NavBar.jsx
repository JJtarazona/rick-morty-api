import React from "react";
import SearchBar from "../searchBar/SearchBar";
import styles from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";
import PathRoutes from "../../helpers/Routes.helper";
import logo from "../../images/logo.png";

const NavBar = (props) => {
  const { onSearch } = props;
  return (
    <div className={styles.navBar}>
      <Link to={PathRoutes.HOME}>
        <img src={logo} alt="Logo de mi sitio web" className={styles.logo} />
      </Link>
      <Link className={styles.link} to={PathRoutes.HOME}>
        Home
      </Link>
      <Link className={styles.link} to={PathRoutes.ABOUT}>
        About
      </Link>
      <Link className={styles.link} to={PathRoutes.FAVORITE}>
        Favorite
      </Link>
      <NavLink></NavLink>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default NavBar;
