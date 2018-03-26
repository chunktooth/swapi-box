import React from 'react';
import diskette from '../../images/diskette.svg';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({data, setFavorites}) => {

  const cardKeys = Object.keys(data);
  const filteredKeys = cardKeys.filter(key => key !== 'name');
  const selectedData = filteredKeys.map((selectedKey, index) => {
    const capitalizedKey = selectedKey.charAt(0).toUpperCase() + selectedKey.substr(1);

   return <p key={index}>
      <span className="keyName">{capitalizedKey}: </span>
      {data[selectedKey]}
      </p>
  });

  return (
    <article className="Card">
      <h3 className="Card-header">{data.name}</h3>
      <div>{selectedData}</div>
      <button 
        className="favorite"
        onClick={() => setFavorites(data)}>
        <img 
          src={diskette}
          className="diskette"
          alt='Save as favorites'/>
      </button>
    </article>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
  setFavorites: PropTypes.func
}

export default Card;