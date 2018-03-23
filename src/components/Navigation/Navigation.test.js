import React from 'react';
import Navigation from './Navigation.js';
import {shallow} from 'enzyme';

describe('Navigation', () => {
	let navigation;

	beforeEach(() => {
		navigation = shallow(<Navigation />);	
	});

	it('should match the snapshot', () => {
		expect(navigation).toMatchSnapshot();
	});

});