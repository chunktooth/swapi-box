import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const Favorites = ({data, setFavorites}) => {
	const displayFavorites = data.map((favorite, index) => {
		return <Card 
			key={index}
			data={favorite}
			setFavorites={setFavorites} 
		/>
	})

	return (
		<article className="Container">
			{displayFavorites}
		</article>
	)
}

Favorites.propTypes = {
  data: PropTypes.array,
  setFavorites: PropTypes.func
}

export default Favorites;