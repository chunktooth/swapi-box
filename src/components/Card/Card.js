import React from 'react';
import diskette from '../../images/diskette.svg';
import './Card.css';

const Card = ({ categoryData }) => {
  const cardKeys = Object.keys(categoryData);
  const filteredKeys = cardKeys.filter(key => key !== 'name');
  const selectedData = filteredKeys.map((selectedKey, index) => {
    const capitalizedKey = selectedKey.charAt(0).toUpperCase() + selectedKey.substr(1);
    return <p key={index}>
      <span className="keyName">{capitalizedKey}: </span> 
      {categoryData[selectedKey]}
      </p>
  })

  return (
    <article className='Card'>
      <h3 className="Card-header">{categoryData.name}</h3>
      <div>{selectedData}</div>
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