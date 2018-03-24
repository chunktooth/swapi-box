import React from 'react';
import diskette from '../../images/diskette.svg';
import './Card.css';

const Card = ({ categories }) => {
  const cardsInfo = Object.keys(categories).map((element, index) => {
    console.log

    return <p className='Card-categories' key={index}>
      {element}: {categories[element]}</p>;
  });

  return (
    <article className='Card'>
      <h3 className="Card-header">{categories.name}</h3>
      <div>{cardsInfo}</div>
      <button className='favorite'>
        <img 
          src={diskette}
          className='diskette'
          alt='Save as favorites'/>
      </button>
    </article>
  );
};


export default Card;