import React from "react";
import Input from "../Forms/Input";
import InputMobile from "../Forms/InputMobile";
import useForm from "../../Hooks/useForm";
import styles from "./LoginForm.module.css";
import Head from "../../Helper/Head";
import Header from "../../Components/Header";
import { ReactComponent as Lock } from "../../Assets/lock.svg";
import Back from "../../Assets/Back.png";
import { Link, useNavigate } from "react-router-dom";
import stylesBtn from "../Forms/Button.module.css";
import Button from "../Forms/Button";
import Signature from "../../Assets/Signature.svg";

const LoginForm = () => {
  const username = useForm();
  const email = useForm();
  const mobile = useForm();
  const password = useForm();
  const [termos, setTermos] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    setIsChecked(termos);
  }, [termos]);

  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
    email.value
  ); // Verifica se o campo de e-mail possui um formato válido
  const isAllFieldsFilled = username.value && mobile.value && password.value;

  async function handleSubmit(event) {
    event.preventDefault();
    if (
      username.validate() &&
      password.validate() &&
      email.validate() &&
      mobile.validate()
    ) {
      navigate("/login/congrats");
    } else {
      alert("preencha todoso os campos corretamente");
    }
  }

  return (
    <section className= "animeLeft">
      <Head title="Login" />
      <div className={styles.headerMobile}>
        <Header page="login" />
        <div className="sectionForm">
          <div className={styles.sectionFormMobile}>
            <Link to="/" aria-label="VerifyMyAge - Home">
              <img className={styles.backMobile} src={Back} alt="Back" />
            </Link>
            <div>
              <h1 className={styles.title}>Join VerifyMyAge</h1>
              <p className={styles.subtitle}>
                Let&apos;s start by setting up your login details.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.formWidth}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Full Name" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <InputMobile label="Mobile" type="text" name="mobile" {...mobile} />
        <Input label="Password" type="password" name="password" {...password} />
        <div className={styles.checkbox}>
          <input
            className={styles.checkboxInput}
            type="checkbox"
            value="Termos"
            checked={termos}
            onChange={({ target }) => setTermos(target.checked)}
          />
          <p>
            Tick this box to confirm you&apos;ve read and agreed to our{" "}
            <a href="#" className={styles.link}>
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className={styles.link}>
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className={styles.SignatureLinesMobile}>
          <div className={styles.line1Mobile}></div>
          <img
            className={styles.SignatureMobile}
            src={Signature}
            alt="Signature"
          />
        </div>
        <div className={styles.buttons}>
          {isChecked && isEmailValid && isAllFieldsFilled ? (
            <Button
              className={`${stylesBtn.button} ${stylesBtn.save}`}
              onClick={() => navigate("/login/congrats")}
            >
              <Lock /> save
            </Button>
          ) : (
            <button
              className={`${stylesBtn.button} ${stylesBtn.save} ${stylesBtn.disabled}`}
              style={{ cursor: "not-allowed", backgroundColor: "#ACA99F" }}
            >
              <Lock /> save
            </button>
          )}
          <Link className={`${stylesBtn.button} ${stylesBtn.signIn}`} to="/">
            Got a VerifyMyAge account? Sign in
          </Link>
        </div>
      </form>
      </div>
    </section>
  );
};

export default LoginForm;
