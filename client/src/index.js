import React from 'react';
import ReactDOM from 'react-dom';
import {createStore ,combineReducers} from 'redux';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import manageRecipeListReducer from './store/reducers/recipeList'


const store = createStore(manageRecipeListReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
