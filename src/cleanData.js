const cleanFilms = (film) => {
	return {
		title: film.title,
		episode: film.episode_id,
		crawl: film.opening_crawl
	}
}

const cleanSpecies = (species) => {
	const speciesData = species.map(data => {
		return {
			name: data.name,
			homeworld: data.homeworld,
			species: data.species,
			population: data.population
		}
	})
	return speciesData;
}

// const cleanPlanets = (planets) => {
// 	const planetData = planets.map(planet => {
// 		return {
// 			name: planet.name,
// 			terrain: planet.terrain,
// 			population: planet.population,
// 			climate: planet.climate
// 			// residents: planet.residents
// 		}
// 	})
// 	return planetData;
// }

const cleanVehicles = (vehicles) => {
	const vehiclesData = vehicles.map(vehicle => {
		return {
			name: vehicle.name,
			model: vehicle.model,
			class: vehicle.vehicle_class,
			passengers: vehicle.passengers
		}
	})
	return vehiclesData;
}

export {
	cleanFilms, 
	cleanSpecies,
	// cleanPlanets,
	cleanVehicles
};