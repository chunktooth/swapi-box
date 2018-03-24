import getResidents from './api';

const cleanFilms = (film) => {
	return {
		title: film.title,
		episode: romanize(film.episode_id),
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

const cleanPlanets = (planets) => {
	const planetData = planets.map(async (planet) => {
		const residents = await getResidents(planet.residents)
		return {
			name: planet.name,
			terrain: planet.terrain,
			population: planet.population,
			climate: planet.climate,
			residents: residents
		}
	})
	return Promise.all(planetData);
}

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

const romanize = (num) => {
	let romanNumerals = '';
	switch(num) {
	case 1:
		romanNumerals = "I";
		break;
	case 2:
		romanNumerals = "II";
		break;
	case 3:
		romanNumerals = "III";
		break;
	case 4:
		romanNumerals = "IV";
		break;
	case 5:
		romanNumerals = "V";
		break;
	case 6:
		romanNumerals = "VI";
		break;
	case 7:
		romanNumerals = "VII";
		break;
	default:
		return "X";
	}
	return romanNumerals;
}

export {
	cleanFilms, 
	cleanSpecies,
	cleanPlanets,
	cleanVehicles,
	romanize
};