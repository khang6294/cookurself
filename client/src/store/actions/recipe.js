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
        // fetch('http://localhost:8080/api/recipe', {
        //     method: 'POST',
        //     body: newRecipe
        // })
        // .then(res => {
        //     return res.json();
        // })
        // .then(resData => {
        //     dispatch({type: 'ADD_RECIPE', payload: resData});
        // })
        // .catch(err => console.log(err))
        axios.post('/recipe',newRecipe)
            .then(res => {
                dispatch({type: 'ADD_RECIPE', payload: res.data});
            })
            .catch(err => console.log(err))
    }
};

export const getRecipe = (recipeId) => {
    return dispatch => {
        axios.get(`recipe/${recipeId}`)
            .then(res => {
                dispatch({type:'GET_RECIPE', payload: res.data})
            })
    }
}

export const resetRecipe = () => {
    return {
        type: 'RESET_RECIPE',
        payload: 'reset'
    }
}

export const onInputSearchChange =(inputSearch) => {
    return {
        type:'INPUT_SEARCH_CHANGE',
        payload: inputSearch
    }
}

export const querySelected = (checked) => {
    return {
        type: 'QUERY_SELECTED',
        payload: checked
    }
}

export const increaseFavAmount = (recipeId,favAmount) => {
    return dispatch => {
        axios.patch(`recipe/${recipeId}`,{favoriteAmount: favAmount})
            .then(res => {
                dispatch({type:'INCREASE_FAV_AMOUNT', payload: res.data})
            })
    }
}