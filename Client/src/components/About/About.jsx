import React from "react";
import styles from "./About.module.css";
import fotoPerfil from "../../images/profile-pic.png";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";

const About = () => {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <h1 className={styles.aboutName}>Jorge Tarazona</h1>
          <p className={styles.p}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className={styles.icon}>
            <h1 className={styles.iconig}>
              {" "}
              <SlSocialInstagram />{" "}
            </h1>
            <h1 className={styles.iconlk}>
              {" "}
              <SlSocialLinkedin />{" "}
            </h1>
          </div>
        </div>
        <img
          className={styles.imgProfile}
          src={fotoPerfil}
          alt="Foto de Perfil"
        />
      </div>
    </div>
  );
};

export default About;
