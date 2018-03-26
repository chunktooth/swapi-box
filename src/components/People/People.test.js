import React from 'react';
import People from './People';
import {shallow} from 'enzyme';

describe('People', () => {
	
	const mockFunction = jest.fn();
	const mockData = [{
		name: 'R2-D2',
		homeworld: 'Naboo',
		population: '300'
	}];

	const wrapper = shallow(<People 
			data={mockData} 
			setFavorites={mockFunction} />)

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
	
});