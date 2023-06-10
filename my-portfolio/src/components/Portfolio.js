import React from 'react';
import { data } from './data';
import Cards from './Cards';
import styles from './styles/Portfolio.module.css';

function Portfolio() {
  console.log(data);
  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>My projects</h2>
        <Cards data={data} />
      </div>
    </div>
  );
}

export default Portfolio;
