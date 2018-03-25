import React from 'react';
import Card from './Card';
import {Shallow} from 'enzyme';

describe('Card', () => {
	let card;

	beforeEach(() => {
		card = shallow(<Card />);
	});

	it('should match the snapshot', () => {
		expect(card).toMatchSnapshot();
	});
	
})