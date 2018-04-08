import React from 'react';
import Navigation from './Navigation';
import {shallow} from 'enzyme';

describe('Navigation', () => {

	it('should match the snapshot', () => {
		const wrapper = shallow(<Navigation />);	
		expect(wrapper).toMatchSnapshot();
	});

	it('should set the right category after clicking a category button', () => {
		const mockDataType = "people";
		const mockFunction = jest.fn();
		const wrapper = shallow(<Navigation
			data={mockDataType} 
			setCategory={mockFunction}
		/>);	
		wrapper.find('button').first().simulate('click');
		expect(mockFunction).toHaveBeenCalledWith(mockDataType);
	});

});