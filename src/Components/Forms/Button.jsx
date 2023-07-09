//import React from 'react'
import styles from './Button.module.css'
import PropTypes from 'prop-types';

const Button = ({ children, operation }) => {

  return (
    <button  className={`${styles.button} ${operation === 'signIn' ? styles.signIn : styles.save}`} >{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  operation: PropTypes.any
};

export default Button