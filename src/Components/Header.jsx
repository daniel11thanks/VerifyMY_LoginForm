//import React from 'react';
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../Assets/Logo.svg";
import Steps from "../Assets/Steps.svg";

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="VerifyMyAge - Home">
          <img src={Logo} alt="Logo" />
        </Link>
        {location.pathname !== "/login/congrats" && (
          <img src={Steps} alt="Steps" />
        )}
      </nav>
    </header>
  );
};

export default Header;
