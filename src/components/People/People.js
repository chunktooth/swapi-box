import React from 'react';
import Card from '../Card/Card';
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
		<article>
			{displayPeople}
		</article>
	)
};

export default People;	