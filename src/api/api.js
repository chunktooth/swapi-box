import {cleanFilms, cleanSpecies, cleanPlanets, cleanVehicles} from '../cleanData';

const root = 'https://swapi.co/api/';

const getFilms = async (randomNumber) => {
	try{
		const response = await fetch(`${root}films/${randomNumber}`);
		const filmData = await response.json();
		const cleanedFilm = cleanFilms(filmData);
		return cleanedFilm;
	} catch(error) {
			return "error";
	}
};

const getPeople = async () => {
	try {
		const response = await fetch(`${root}people`);
		const peopleData = await response.json();
		const peopleArray = await getHomeworld(peopleData.results);
		const speciesData = await getSpecies(peopleArray);
		const cleanedSpecies = await cleanSpecies(speciesData);
		return cleanedSpecies;
	} catch(error) {
			return "error";
	}	
};

const getHomeworld = async (peopleData) => {
	try {
		const unresolvedPeople = await peopleData.map(async (person) => {
		const response = await fetch(person.homeworld);
		const homeworldData = await response.json();
		const {name, population} = homeworldData;
		return ({...person, homeworld: name, population});
		}) 	
		return Promise.all(unresolvedPeople);
	} catch(error) {
			return "error";
	}
};

const getSpecies = async (peopleArray) => {
	const unresolvedPeople = await peopleArray.map(async (person) => {
		const response = await fetch(person.species);
		const speciesData = await response.json();
		const {name} = speciesData;
		return ({...person, species: name});
	});
	return Promise.all(unresolvedPeople);
};

const getPlanets = async () => {
	try {
		const response = await fetch(`${root}planets`);
		const planetData = await response.json();
		const cleanedPlanets = await cleanPlanets(planetData.results);
		return cleanedPlanets;
	} catch(error) {
			return "error";
	}	
};

const getResidents = async (planetData) => {
	const unresolvedResidents = await planetData.map(async (planet) => {
		const response = await fetch(planet);
		const residentsData = await response.json();
		return residentsData.name;
	});
	return Promise.all(unresolvedResidents);
}

const getVehicles = async () => {
	try {
		const response = await fetch(`${root}vehicles`);
		const vehiclesData = await response.json();
		const cleanedVehicles = cleanVehicles(vehiclesData.results);
		return cleanedVehicles;	
	} catch (error) {
			return "error";
	}	
};

export {
	getFilms, 
	getPeople,
	getHomeworld,
	getSpecies,
	getPlanets,
	getResidents,
	getVehicles
};