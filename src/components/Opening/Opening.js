import React from 'react';
import PropTypes from 'prop-types';
import './Opening.css'

const Opening = ({film}) => {
	const {title, episode, crawl} = film;

	return (
		<section className="Opening">
			<div className="star-wars">
				<div className="crawl">
					<div className="ep-title">
						<p>EPISODE {episode}</p>
						<h1>{title}</h1>
					</div>
					<p>{crawl}</p>
				</div>
			</div>
		</section>
	)	
}

export default Opening;