import React from 'react';
import styles from "./Hero.module.css";
import VibratingHeadPhone from "../assets/vibrating-headphone.svg";

const HeroSection = () => {
  return (
    <div>
        <div className={styles.heroBox}>
        <div className={styles.textBox}> 
          <p className={styles.textStyle}>100 Thousand Songs, ad-free</p>
          <p className={styles.textStyle}>Over thousands podcast episodes</p>
        </div>
        <div><img src={VibratingHeadPhone} alt='headPhone' width={212}/></div>
        </div>
    </div>
  )
}

export default HeroSection