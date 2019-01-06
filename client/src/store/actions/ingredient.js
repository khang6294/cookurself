import axios from 'axios'

export const getIngredientList = () => {
    return dispatch => {
        axios.get('/ingredient')
        .then(res => {
            dispatch({type: 'GET_INGREDIENT_LIST', payload: res.data});
        })
    }
        
};

export const createNewIngredients = (newIngredients,recipeId) => {
    return dispatch => {
        axios.get(`/recipe/${recipeId}`)
            .then(resp => {
                let ingredientsIds = resp.data.ingredients.map(ingredient => ingredient._id)
                let ingredientsIdsClone = [...ingredientsIds]
                axios.post('/ingredient',{ingredients: newIngredients})
                    .then(res => {
                        ingredientsIdsClone = [...ingredientsIdsClone,...res.data]
                        return axios.patch(`recipe/${recipeId}`,{ingredients:ingredientsIdsClone})
                                .then(response => {
                                    dispatch({type:'CREATE_INGREDIENT_AND_UPDATE_RECIPE', payload: response.data})
                                })
                                .catch(err => console.log(err))
                    })
            })
    }
}