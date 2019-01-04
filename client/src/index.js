import React from 'react';
import ReactDOM from 'react-dom';
import {createStore ,combineReducers,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RecipeListReducer from './store/reducers/recipeList'
import RecipeReducer from './store/reducers/recipe'
import AuthReducer from './store/reducers/auth'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api'

const rootReducer = combineReducers({
    recipeList: RecipeListReducer,
    recipe: RecipeReducer,
    auth: AuthReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
