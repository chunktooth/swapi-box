import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import {mockFilmData,
  mockCleanFilmData,
  mockPeopleData,
  mockCleanPeopleData,
  mockPlanetData,
  mockCleanPlanetData,
  mockVehicleData,
  mockCleanVehicleData} from '../../mockData';

describe.skip('App', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
  	expect(wrapper).toMatchSnapshot();
  });

  it('should be able to set category', () => {
  	expect(wrapper.state('categories')).toEqual([]);
  	wrapper.instance().setCategory('People');
  	expect.setState('categories').toEqual(mockPeopleData);
  });

  it('should be able to add favorites', () => {
    expect(wrapper.state('favorites')).toEqual([]);
    wrapper.instance().setFavorites(mockPeopleData);
    expect.(wrapper.state('favorites')).toEqual(1);
  }

});