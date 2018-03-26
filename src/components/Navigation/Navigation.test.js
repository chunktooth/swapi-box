import React from 'react';
import Navigation from './Navigation';
import {shallow} from 'enzyme';

describe('Navigation', () => {
	const mockFunction = jest.fn();
	const wrapper = shallow(<Navigation 
		setCategory={mockFunction}
		/>);	

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

});