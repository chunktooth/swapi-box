import React from 'react';
import Card from '../Card/Card';

const Favorites = ({data, setFavorites}) => {
	const displayFavorites = data.map((favorite, index) => {
		return <Card 
			key={index}
			data={favorite}
			setFavorites={setFavorites} 
		/>
	})

	return (
		<article>
			{displayFavorites}
		</article>
	)
}

export default Favorites;