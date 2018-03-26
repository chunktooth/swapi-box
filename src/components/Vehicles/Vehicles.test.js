import React from 'react';
import Vehicles from './Vehicles';
import {shallow} from 'enzyme';

describe('Planets', () => {
	
	const mockFunction = jest.fn();
	const mockData = [{
		name: 'El Toro Loco',
		model: 'Tank',
		class: 'Demolition',
		passengers: '1'
	}];

	const wrapper = shallow(<Vehicles
			data={mockData} 
			setFavorites={mockFunction} />)

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
	
});