import React from 'react';
import Vehicles from './Vehicles';
import {Shallow} from 'enzyme';

describe('Vehicles', () => {
	let vehicles;

	beforeEach(() => {
		vehicles = shallow(<Vehicles />);
	});

	it('should match the snapshot', () => {
		expect(vehicles).toMatchSnapshot();
	});
	
})