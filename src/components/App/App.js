import React, {Component} from 'react';
import Opening from '../Opening/Opening';
import Navigation from '../Navigation/Navigation';
import CardContainer from '../CardContainer/CardContainer';
import {getFilms, getPeople, getPlanets, getVehicles} from '../../api';
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
            className="Starwars-logo" 
            src={logo}
            alt="Starwars title" />
        </header>
        <Opening film={this.state.film} />
        <Navigation 
          setCategory={this.setCategory} />
        <CardContainer 
          categories={this.state.categories} />
      </div>
    );
  } 
}

export default App;