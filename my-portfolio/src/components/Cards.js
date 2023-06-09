import React from 'react';
import styles from './styles/Cards.module.css';

function Cards(prop) {
  const content = prop.data.map((card) => {
    return (
      <div key={card.title} className={styles.container}>
        <img src={card.image} alt="image of website" className={styles.image} />
        <div className={styles.textBox}>
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </div>
      </div>
    );
  });

  console.log(content);

  return <div>{content}</div>;
}

export default Cards;
