import React from 'react';
import Card from '../Card/Card';

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

export default Planets;