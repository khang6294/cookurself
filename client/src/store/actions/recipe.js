import axios from 'axios'

export const getRecipeList = () => {
    return dispatch => {
        axios.get('http://localhost:8080/api/recipe')
        .then(res => {
            dispatch({type: 'GET_RECIPE_LIST', payload: res.data});
        })
    }
    
    
};

export const addRecipe = (newRecipe) => {
    return dispatch => {
        axios.post('http://localhost:8080/api/recipe',newRecipe)
        .then(res => {
            dispatch({type: 'ADD_RECIPE', payload: res.data});
        })
    }
};