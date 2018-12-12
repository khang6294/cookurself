import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import RecipeList from './containers/RecipeListContainer'
import Header from './components/Navigation/Header'

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header/>
        <br/>
        <RecipeList/>
      </div>
    );
  }
}

export default App;
