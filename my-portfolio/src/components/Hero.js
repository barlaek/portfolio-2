import React from 'react';
import styles from './styles/Hero.module.css';
import { dev } from './data';

function Hero() {
  console.log(dev);
  return (
    <div className={styles.background}>
      <div className={styles.mask}>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h1>Hi, my name is Bjørn Arne</h1>
            <h2>And I am a Frontend Developer</h2>
          </div>
          <div className={styles.hero}>
            <img src={dev.image} alt="image of developer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
