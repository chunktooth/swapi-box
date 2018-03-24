import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import saved from '../../images/red-disk.svg';
import Opening from '../Opening/Opening';
import Navigation from '../Navigation/Navigation';
import CardContainer from '../CardContainer/CardContainer';
import {getFilms, getPeople, getPlanets, getResidents, getVehicles} from '../../api';
import logo from '../../images/starwars.png';
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img 
            src={logo}
            className="Starwars-logo" 
            alt="Starwars title" />
        <Opening film={this.state.film} />
        </header>
        <Navigation setCategory={this.setCategory} />
        <CardContainer categoryData={this.state.categories} />
      </div>
    );
  } 
}

export default App;