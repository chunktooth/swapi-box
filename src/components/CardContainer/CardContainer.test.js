import React from 'react';
import CardContainer from './CardContainer/CardContainer';
import {Shallow} from 'enzyme';

describe('CardContainer', () => {
	let container;

	beforeEach(() => {
		container = shallow(<CardContainer />);
	});

	it('should match the snapshot', () => {
		expect(container).toMatchSnapshot();
	});
	
})