import React from 'react';
import styles from './styles/Cards.module.css';

function Cards(prop) {
  const content = prop.data.map((card) => {
    return (
      <div key={card.title} className={styles.container}>
        <img src={card.image} alt="image of website" className={styles.image} />
        <div className={styles.textBox}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <div className={styles.build}>
            <p>{card.build.JS}</p>
            <p>{card.build.CSS}</p>
          </div>
          <div className={styles.links}>
            <a href={card.url}>Live site</a>
            <a href={card.github}>Repository</a>
          </div>
        </div>
      </div>
    );
  });

  console.log(content);

  return <div>{content}</div>;
}

export default Cards;
