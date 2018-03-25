import React from 'react';
import Planets from './Planets';
import {Shallow} from 'enzyme';

describe('Planets', () => {
	let planets;

	beforeEach(() => {
		planets = shallow(<Planets />);
	});

	it('should match the snapshot', () => {
		expect(planets).toMatchSnapshot();
	});
	
})