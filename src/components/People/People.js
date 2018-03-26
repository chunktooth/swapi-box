import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './People.css';

const People = ({data, setFavorites}) => {

	const displayPeople = data.map((people, index) => {
		return <Card 
			key={index}
			data={people}
			setFavorites={setFavorites} 
		/>
	})

	return (
		<article className="Container">
			{displayPeople}
		</article>
	)
};

People.propTypes = {
  data: PropTypes.array,
  setFavorites: PropTypes.func
}

export default People;	