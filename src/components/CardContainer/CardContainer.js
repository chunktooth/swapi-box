import React from 'react';
import {Switch, Route} from 'react-router-dom';
import People from '../People/People';
import Planets from '../Planets/Planets';
import Vehicles from '../Vehicles/Vehicles';
import Favorites from '../Favorites/Favorites';
import './CardContainer.css';

const CardContainer = ({people, planets, vehicles, favorites, setFavorites}) => {
	return (
		<Switch>
			<Route exact path='/people' component={() => 
				<People 
					data={people} 
					setFavorites={setFavorites} />}
			/>

			<Route exact path='/planets' component={() => 
				<Planets 
					data={planets} 
					setFavorites={setFavorites} />}
			/>

			<Route exact path='/vehicles' component={() => 
				<Vehicles 
					data={vehicles} 
					setFavorites={setFavorites} />}
			/>

			<Route exact path='/favorites' component={() => 
				<Favorites
					data={favorites} 
					setFavorites={setFavorites} />}
			/>
		</Switch>
	)
}

export default CardContainer;