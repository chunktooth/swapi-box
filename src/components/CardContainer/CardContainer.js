import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({categoryData}) => {
	const displayCards = categoryData.map(data => {

		return <Card 
			key={data.name}
			categoryData={data} 
		/>
	});

	return (
		<section className="Card-container">
			{displayCards}
		</section>
	)
}

export default CardContainer;



