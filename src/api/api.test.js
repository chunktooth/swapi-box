import React from 'react';
import { shallow, mount } from 'enzyme';
import { mockFilmData,
  mockCleanFilmData,
  mockPeopleData,
  mockCleanPeopleData,
  mockPlanetData,
  mockCleanPlanetData,
  mockVehicleData,
  mockCleanVehicleData } from '../mockData';
import { getFilms,
	getPeople,
	getHomeworld,
	getSpecies } from './api';
import { cleanFilms,
	cleanSpecies } from '../cleanData';

describe('API', () => {

	describe('GET FILMS', () => {
		it('should fetch film data after calling getFilms', () => {
			window.fetch = jest.fn().mockImplementation(() => ({
				status: 200,
				json: () => new Promise((resolve) => {
					resolve(mockFilmData)
				})
			}))
			getFilms();	
			expect(window.fetch).toHaveBeenCalled();
		});

		it('should return cleaned movie data', async () => {
			window.fetch = jest.fn().mockImplementation(() => ({
				status: 200,
				json: () => new Promise((resolve) => {
					resolve(mockFilmData)
				})
			}))
			const result = await getFilms();
			expect(result).toEqual(mockCleanFilmData);
		});

		it('should throw an error if getFilms cannot fetch', async () => {
			window.fetch = jest.fn().mockImplementation(() => Promise.reject({
				status: 500
			}))
			const result = await getFilms();
			expect(result).toEqual('error');
		});		
	});

	describe('GET PEOPLE', () => {
		it('should fetch people data after calling getPeople', () => {
			window.fetch = jest.fn().mockImplementation(() => ({
				status: 200,
				json: () => new Promise((resolve) => {
					resolved(mockPeopleData)
				})
			}))
			getPeople();
			expect(window.fetch).toHaveBeenCalled();
		});

		it('should return cleaned people data', async () => {
			window.fetch = jest.fn().mockImplementation(() => ({
				status: 200,
				json: () => new Promise((resolve) => {
					resolve(mockPeopleData)
				})
			}))
			const result = await getPeople();
			expect(result).toEqual(mockCleanPeopleData);
		});

		it('should throw an error if getPeople cannot fetch', async () => {
			window.fetch = jest.fn().mockImplementation(() => Promise.reject({
				status: 500
			}))
			const result = await getPeople();
			expect(result).toEqual('error');
		});			
	});

	

});

