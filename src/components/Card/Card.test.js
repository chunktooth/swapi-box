import React from 'react';
import Card from './Card';
import {shallow} from 'enzyme';

describe('Card', () => {
	let wrapper, mockData, mockFunction;

	beforeEach(() => {
		mockData = {
			name: 'Jar-jar',
			ears: 'long',
			status: 'questionable'
		};
		mockFunction = jest.fn();
		wrapper = shallow(<Card 
			data={mockData} 
			setFavorites={mockFunction}/>);
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should fire a setFavorite function when clicking on a save button', () => {
		wrapper.find('button').simulate('click');
		expect(mockFunction).toHaveBeenCalledWith(mockData);
	});

});