import React from 'react';
import { data } from './data';
import Cards from './Cards';
import styles from './styles/Portfolio.module.css';

function Portfolio() {
  console.log(data);
  return (
    <div className={styles.content}>
      <Cards data={data} />;
    </div>
  );
}

export default Portfolio;
