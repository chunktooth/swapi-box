import React from 'react';
import Opening from './Opening';
import {shallow} from 'enzyme';

describe('Opening', () => {

	it('should match the snapshot', () => {
		let wrapper = shallow(<Opening />);
		expect(wrapper).toMatchSnapshot();
	});
	
});