import React from 'react'
import styles from "./Input.module.css";
import PropTypes from "prop-types";

const Input = ({ type, name, value, onChange, label, error }) => {
  const isEmailField = type === 'email';
  const isValidEmail = (email) => {
    // Expressão regular para verificar o formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se o email corresponde ao formato esperado
    return emailRegex.test(email);
  };

  const [hasBlurred, setHasBlurred] = React.useState(false);

  const handleBlur = () => {
    setHasBlurred(true);
  };

  const showError = hasBlurred && (error || (isEmailField && (value.trim() !== '' && !isValidEmail(value))));

  const fieldsetClassName = showError ? styles.errorFieldset : styles.fieldset;
  const legendClassName = showError ? styles.errorLegend : styles.legend;

  return (
    <fieldset className={fieldsetClassName}>
      <legend className={legendClassName}>{label}</legend>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
      />
    </fieldset>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.any,
  onBlur: PropTypes.any,
  error: PropTypes.string,
};

export default Input;
