import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import RecipeList from './containers/RecipeListContainer'

class App extends Component {
  render() {

    return (
      <div className="App">
        <RecipeList/>
      </div>
    );
  }
}

export default App;
