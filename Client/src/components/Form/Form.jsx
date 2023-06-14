import React from "react";
import styles from "./Form.module.css";
import { useState } from "react";
import validation from "../Validation/Validation";

function Form({ login }) {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="email">
          Email:
        </label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
        />
        {errors.email && <p className={styles.p}>{errors.email}</p>}
        <label className={styles.label} htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}

        <button className={styles.button}>Ingresar</button>
      </form>
    </div>
  );
}

export default Form;
