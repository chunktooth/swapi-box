// import {cleanFilms, cleanSpecies, cleanPlanets, cleanVehicles} from './cleanData.js';
import {cleanFilms, cleanSpecies, cleanVehicles} from './cleanData.js';

const root = 'https://swapi.co/api/';

const getFilms = async () => {
	const randomNumber = Math.floor(Math.random() * 8);
	const response = await fetch(`${root}films/${randomNumber}`);
	const filmData = await response.json();
	const cleanedFilm = cleanFilms(filmData);
	return cleanedFilm;
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

const getSpecies = async (allPeople) => {
	const unresolvedPeople = await allPeople.map(async (person) => {
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
		// const residentData = await getResidents(planetData.results)
		// console.log("residentData ", residentData);

		// const cleanedPlanets = await cleanPlanets(residentData);
		// console.log(cleanedPlanets);

		// return cleanedPlanets;
		console.log(planetData);
	} catch(error) {
			return "error";
	}	
};

// const getResidents = async (residentData) => {
// 	const unresolvedResidents = await residentData.map(async (resident) => {
// 		const residentURL = await fetch(resident.residents);
// 		const residents = await residentURL.json();
// 		const {name} = residents;
// 		return ({...resident, residents: name});
// 	});
// 	return Promise.all(unresolvedResidents);
// }

const getVehicles = async (allVehicles) => {
	try {
		const response = await fetch(`${root}vehicles`);
		const vehiclesData = await response.json();
		const cleanedVehicles = cleanVehicles(vehiclesData.results);
		return cleanedVehicles;	
	} catch (error) {
		return "error";
	}	
}

export {
	getFilms, 
	getPeople,
	getHomeworld,
	getSpecies,
	getPlanets,
	// getResidents,
	getVehicles
};