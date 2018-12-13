import axios from 'axios'

export const getRecipeList = () => {
    return dispatch => {
        axios.get('/recipe')
        .then(res => {
            dispatch({type: 'GET_RECIPE_LIST', payload: res.data});
        })
    }
    
    
};

export const addRecipe = (newRecipe) => {
    return dispatch => {
        axios.post('/recipe',newRecipe)
        .then(res => {
            dispatch({type: 'ADD_RECIPE', payload: res.data});
        })
    }
};