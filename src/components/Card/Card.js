import React from 'react';
import './Card.css';

const Card = ({ categories }) => {
  const cardsInfo = Object.keys(categories).map((element, index) => {
    return <p className='Card-categories' key={index}>
    	{element}: {categories[element]}</p>;
  });

  return (
    <article className='Card'>
      <h3 className="Card-header">{categories.name}</h3>
      <div>{cardsInfo}</div>
      <button className='favorite-btn'>
      	Favorites
      </button>
    </article>
  );
};


export default Card;