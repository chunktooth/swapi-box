import React from 'react';
import Planets from './Planets';
import {shallow} from 'enzyme';

describe('Planets', () => {
	
	const mockFunction = jest.fn();
	const mockData = [{
		name: 'Earth',
		terrain: 'Water',
		population: '0',
		climate: 'Hot',
		residents: 'Lucy'
	}];

	const wrapper = shallow(<Planets
			data={mockData} 
			setFavorites={mockFunction} />)

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
	
});