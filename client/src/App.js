import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import RecipeList from './containers/RecipeListContainer'
import Recipe from './containers/RecipeContainer'
import Header from './components/Navigation/Header'

class App extends Component {
  state = {
    openSD: false
  }

  onOpenSD = () => {
    this.setState({openSD: true})
  }

  onCloseSD =() => {
    this.setState({openSD: false})
  }

  render() {
    const {openSD} = this.state
    return (
      <BrowserRouter>
      <div className="App">
          <div className={openSD ? "backdrop-open" : "backdrop"} onClick={() => this.onCloseSD()}/>
          <Route path="/" exact render={(props) => {return <Header {...props} onDrawerToggle={() => this.onOpenSD()}/>}}/>
          <Route path ="/:recipeId" exact component={Header}/>
          <Switch>
          <Route path="/" exact render={(props) => {
            return <RecipeList {...props} onCloseSD={() => this.onCloseSD()} openSD = {this.state.openSD}/>}}/>
          <Route path ="/:recipeId" exact component={Recipe}/> 
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
