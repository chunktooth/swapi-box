import React from 'react';
import Favorites from './Favorites';
import {shallow} from 'enzyme';

describe('Favorites', () => {
	const mockFunction = jest.fn()
	const mockData = [{
		name: 'R2-D2',
		homeworld: 'Naboo',
		population: '300'
	}];
	const wrapper = shallow(<Favorites 
		data={mockData}
		setCategory={mockFunction}
		/>);	

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

});