import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navigation.css';

const Navigation = ({setCategory}) => {
	return (
		<section className="Navigation">
			
			<NavLink to='/people' className='nav'>
				<button 
					className='nav-btn'
					onClick={() => setCategory('people')}>
					PEOPLE
				</button>
			</NavLink>

			<NavLink to='/planets' className='nav'>
				<button 
					className='nav-btn'
					onClick={() => setCategory('planets')}>
					PLANETS
				</button>
			</NavLink>

			<NavLink to='/vehicles' className='nav'>
				<button 
					className='nav-btn'
					onClick={() => setCategory('vehicles')}>
					VEHICLES
				</button>
			</NavLink>
			
		</section>
	)
}

export default Navigation;




