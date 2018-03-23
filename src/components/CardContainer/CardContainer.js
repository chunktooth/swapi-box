import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({categories}) => {
	const displayCards = categories.map(data => {

		return <Card 
			key={data.name}
			categories={data} 
		/>
	});

	return (
		<section className="Card-container">
			{displayCards}
		</section>
	)
}

export default CardContainer;



