import axios from 'axios'

export const getIngredientList = () => {
    return dispatch => {
        axios.get('/ingredient')
        .then(res => {
            dispatch({type: 'GET_INGREDIENT_LIST', payload: res.data});
        })
    }
        
};