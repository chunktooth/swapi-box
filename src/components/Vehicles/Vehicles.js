import React from 'react';
import Card from '../Card/Card';

const Vehicles = ({data, setFavorites}) => {
	const displayVehicles = data.map((vehicle, index) => {
		return <Card
			key={index} 
			data={vehicle} 
			setFavorites={setFavorites}
		/>
	});

	return (
		<article>
			{displayVehicles}
		</article>
	)
}

export default Vehicles;