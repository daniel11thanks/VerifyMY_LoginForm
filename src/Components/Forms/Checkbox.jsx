//import React from 'react'
import styles from "./checkbox.module.css";

const Checkbox = () => {
  return (
    <div className={styles.checkbox}>
    <input type="checkbox"/>
    Tick this box to confirm you’ve read and agreed to our Terms and Privacy Policy. 
    </div>
  )
}

export default Checkbox