import React from 'react';
import People from './People';
import {Shallow} from 'enzyme';

describe('People', () => {
	let people;

	beforeEach(() => {
		people = shallow(<People />);
	});

	it('should match the snapshot', () => {
		expect(people).toMatchSnapshot();
	});
	
})