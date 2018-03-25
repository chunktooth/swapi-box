import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const Planets = ({data, setFavorites}) => {
	const displayPlanets = data.map((planet, index) => {
		return <Card
			key={index} 
			data={planet} 
			setFavorites={setFavorites}
		/>
	});

	return (
		<article>
			{displayPlanets}
		</article>
	)
}

Planets.propTypes = {
  data: PropTypes.array,
  setFavorites: PropTypes.func
}

export default Planets;