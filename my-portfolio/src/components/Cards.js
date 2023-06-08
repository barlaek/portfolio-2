function Cards(prop) {
  const content = prop.data.map((card) => {
    return (
      <div key={card.title}>
        <img src={card.image} alt="image of website" />
        <h2>{card.title}</h2>
        <p>{card.description}</p>
      </div>
    );
  });

  console.log(content);

  return <div>{content}</div>;
}

export default Cards;
