import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import {getFilms} from '../../api/api';
import {mockFilmData, mockVehicleData} from '../../mockData';

describe('App', () => {
	let wrapper, mockObject, mockFunction;

	beforeEach(() => {
		mockObject = {
			name: "C-3PO", 
			species: "Droid", 
			homeworld: "Tatooine", 
			population: "200000" };
		mockFunction = jest.fn();
		wrapper = (<App />, 
			{ disableLifeCycleMethods: true });
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	// it('should call getFilms, getPeople, getPlanets and getVehicles in component did mount', async () => {
	// 	await expect(getFilms()).toHaveBeenCalled();
	// 	expect(wrapper.find('films').length).toEqual(mockFilmData);
	// });

	// it('should be able to set category', () => {
	// 	expect(wrapper.state('categories')).toEqual([]);
	// 	wrapper.instance().setCategory('vehicles');
	// 	wrapper.setState();
	// 	expect(wrapper.state('categories')).toEqual(mockVehicleData.results);
	// });

	// it('should add new favorite object to the array', () => {
	// 	expect(wrapper.state('favorites')).toEqual([]);
	// 	wrapper.instance().setFavorites(mockObject);
	// 	expect(wrapper.state('favorites')).length.toEqual(1);
	// });

});