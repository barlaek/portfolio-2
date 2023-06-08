function Cards(prop) {
    const content = prop.data.map((card) => {
        <div key={card.title}>
            <img src={card.image} alt="image of website" />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
        </div>
    })

  return (
    <div>
      {content}
    </div>
  );
}

export default Cards;
