//import React from 'react'
import styles from "./Congrats.module.css";
import check from "../../Assets/check.svg";
import HeaderCongrats from "../HeaderCongrats";
import Signature from "../../Assets/Signature.svg";

const Congrats = () => {
  return (
    <section className="animeLeft">
      <HeaderCongrats />
      <div className={`sectionform ${styles.sectionFormMobile}`}>
        <h1 className={styles.title}>Congrats</h1>
        <p className={styles.subtitle}>
          You&lsquo;ll be automatically verified for all future orders. Your
          orders will be dispatched without delay.
        </p>
        <div className={styles.checkbox}>
          <img src={check} alt="Check" />
          <p>You&lsquo;ve been successfully verified!</p>
        </div>
      </div>
      <div className={styles.SignatureLinesMobile}>
        <div className={styles.line1Mobile}></div>
        <img
          className={styles.SignatureMobile}
          src={Signature}
          alt="Signature"
        />
      </div>
    </section>
  );
};

export default Congrats;
