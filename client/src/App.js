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
        <Header/>
        <br/>
        <Route path="/" exact component={RecipeList}/>
        <Route path ="/:recipeId" exact component={Recipe}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
