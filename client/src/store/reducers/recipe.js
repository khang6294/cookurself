const initialState = {
    recipe: {}
}

const manageRecipe = (state = initialState, action) => {
    switch (action.type){
        case "GET_RECIPE":
        return {
            ...state,
            recipe: action.payload
        }
        case 'RESET_RECIPE':
        return {
            recipe:{}
        }
        default:
        return state
    }
}

export default manageRecipe