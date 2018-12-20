import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import RecipeList from './containers/RecipeListContainer'
import Recipe from './containers/RecipeContainer'
import Header from './components/Navigation/Header'

class App extends Component {
  render() {

    return (
      <BrowserRouter>
      <div className="App">
        <Route path="/recipes" exact component={Header}/>
        <Route path="/recipes" exact component={RecipeList}/>
        <Route path ="/recipes/:recipeId" exact component={Header}/>
        <Route path ="/recipes/:recipeId" exact component={Recipe}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
