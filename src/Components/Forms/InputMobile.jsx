import React from 'react';
import styles from "./Input.module.css";
import PropTypes from "prop-types"; 
import UK from "../../Assets/UK.svg";
import BR from "../../Assets/BR.svg";

const InputMobile = ({ type, name, value, onChange, onBlur, label }) => {
  const [select, setSelect] = React.useState('England');

  const handleOptionChange = (event) => {
    setSelect(event.target.value);
  };

  const formatValue = (value) => {
    let digits = value.replace(/\D/g, ''); // Remove non-digit characters

    if (digits.length > 1) {
      const firstOneDigit = digits.slice(0, 1);
      const remainingDigits = digits.slice(1);
      digits = `(${firstOneDigit}) ${remainingDigits}`;
    }

    return digits;
  };

  const handleChange = (event) => {
    let { value } = event.target;
    if (select === 'England') {
      value = +44 + formatValue(value);
    } else {
      value = +55 + formatValue(value);
    }

    onChange({ target: { name, value } });
  };

  const formattedValue = formatValue(select+value);
  return (
    <fieldset>
      <legend>{label}</legend>
      {select === 'England' ? (
        <img src={UK} alt="UK" />
      ) : (
        <img src={BR} alt="BR" />
      )}
      <select value={select} onChange={handleOptionChange} id="ddd">
        <option value="England">+44</option>
        <option value="Brazil">+55</option>
      </select>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        value={formattedValue}
        onChange={handleChange}
        onBlur={onBlur}
      />
    </fieldset>
  );
};

InputMobile.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
};

export default InputMobile;
