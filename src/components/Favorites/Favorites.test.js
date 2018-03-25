import React from 'react';
import Favorites from './Favorites';
import {Shallow} from 'enzyme';

describe('Favorites', () => {
	let favorites;

	beforeEach(() => {
		favorites = shallow(<Favorites />);
	});

	it('should match the snapshot', () => {
		expect(favorites).toMatchSnapshot();
	});
	
})