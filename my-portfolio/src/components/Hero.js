import React from 'react';
import styles from './styles/Hero.module.css';

function Hero() {
  return (
    <div className={styles.background}>
      <div className={styles.mask}>
        <div className={styles.container}>
          <h1>Hi, my name is Bjørn Arne</h1>
          <h2>And I am a Frontend Developer</h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
