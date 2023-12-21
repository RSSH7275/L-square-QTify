import React from 'react';
import  QLogo from "../assets/QtifyLogo.svg";
import styles from "./Logo.module.css";
  
const Logo = () => {
  return (
   <div className={styles.logoDiv}><img src={QLogo}   alt='logo' width={67}/></div>
  )
}

export default Logo;