import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import saved from '../../images/saved.svg';
import Opening from '../Opening/Opening';
import Navigation from '../Navigation/Navigation';
import CardContainer from '../CardContainer/CardContainer';
import {getFilms, getPeople, getPlanets, getVehicles} from '../../api';
import logo from '../../images/starwars.png';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      film: [],
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      categories: []
    }
  }

  async componentDidMount() {
    const film = await getFilms();
    const people = await getPeople();
    const planets = await getPlanets();
    const vehicles = await getVehicles();
    this.setState({ film, people, planets, vehicles });
  }

  setCategory = (category) => {
    this.setState({ categories: this.state[category] });
  }

  setFavorites = (favoriteData) => {
    let favorites = [...this.state.favorites];

    if (!favorites.find(info => 
      info.name === favoriteData.name)) {
        favorites.push(favoriteData);
    } else {
      favorites = favorites.filter(info => 
        info.name !== favoriteData.name);
    }
    this.setState({favorites});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="favorites">
            <NavLink to='/favorites' className='nav'>
                <img 
                src={saved}
                className="saved" 
                alt="View favorite cards" />
                <p className="save-count">
                  [{this.state.favorites.length}] FAVORITES
                </p>
            </NavLink>
          </div>
          <img 
            src={logo}
            className="Starwars-logo" 
            alt="Starwars title" />
        <Opening film={this.state.film} />
        <Navigation setCategory={this.setCategory} />
        </header>
        <CardContainer 
          people={this.state.people}
          planets={this.state.planets}
          vehicles={this.state.vehicles}
          favorites={this.state.favorites}
          setFavorites={this.setFavorites} />
      </div>
    );
  } 
}

export default App;

App.propTypes = {
  
}