import React from 'react';
import Opening from './Opening';
import {shallow} from 'enzyme';

describe('Card', () => {
	let opening;

	beforeEach(() => {
		opening = shallow(<Opening />);
	});

	it('should match the snapshot', () => {
		expect(opening).toMatchSnapshot();
	});
	
})