import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
//import example from './omdbExample.json'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      id: "",
      title: ""
      //movieObject: {
      //title: '',

    }
  }

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  searchByTitle = (event) => {
    event.preventDefault()
    axios.get(`http://www.omdbapi.com/?apikey=d31f1a94&t=${this.state.title}`)
      .then((movie) => {
        this.setState({
          movie: movie.data
        })
        console.log(movie);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  searchById = (event) => {
    event.preventDefault()
    axios.get(`http://www.omdbapi.com/?apikey=d31f1a94&i=${this.state.id}`)
      .then((movie) => {
        this.setState({
          movie: movie.data
        })
        console.log(movie.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleChange = (event) => {
    const newState = { ...this.state };
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  //Pass searchByTitle, searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search
          searchByTitle={this.searchByTitle}
          searchById={this.searchById}
          handleChange={this.handleChange}
        />
        <Movie
          movie={this.state.movie} />
      </div>
    );
  }
}

export default App;
