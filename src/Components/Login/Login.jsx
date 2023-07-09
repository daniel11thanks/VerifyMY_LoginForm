//import React from "react";
import {  Route, Routes } from "react-router-dom";
import styles from "./Login.module.css";
import LoginForm from "./LoginForm";
import Congrats from "./Congrats";


const Login = () => {
 

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="login/congrats" element={<Congrats />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
