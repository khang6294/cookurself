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
import {loadState,saveState} from './localStorage'
axios.defaults.baseURL = 'http://localhost:8080/api'

const rootReducer = combineReducers({
    recipeList: RecipeListReducer,
    recipe: RecipeReducer,
    auth: AuthReducer
})

const persistedState = loadState();

const store = createStore(rootReducer,persistedState,applyMiddleware(thunk));
store.subscribe(() => {
    saveState({
        user: store.getState().auth.user
    });
});
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
