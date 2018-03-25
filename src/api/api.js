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
		const homeworldData = await getHomeworld(peopleData.results);
		const speciesData = await getSpecies(homeworldData);
		const cleanedSpecies = await cleanSpecies(speciesData);
		return cleanedSpecies;
	} catch(error) {
			return "error";
	}	
};

const getHomeworld = async (homeworldData) => {
	const unresolvedPeople = await homeworldData.map(async (person) => {
		const homeworldURL = await fetch(person.homeworld);
		const homeworld = await homeworldURL.json();
		const {name, population} = homeworld;
		return ({...person, homeworld: name, population});
	}) 	
	return Promise.all(unresolvedPeople);
};

const getSpecies = async (peopleData) => {
	const unresolvedPeople = await peopleData.map(async (person) => {
		const speciesURL = await fetch(person.species);
		const species = await speciesURL.json();
		const {name} = species;
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
		const residentsURL = await fetch(planet);
		const residents = await residentsURL.json();
		return residents.name;
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