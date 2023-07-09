//import React from 'react';
import { Link } from "react-router-dom";
import styles from "./HeaderCongrats.module.css";
import Logo from "../Assets/Logo.svg";


const HeaderCongrats = () => {
 

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="VerifyMyAge - Home">
          <img src={Logo} alt="Logo" />
        </Link>
      </nav> 
    </header>
  );
};

export default HeaderCongrats;
