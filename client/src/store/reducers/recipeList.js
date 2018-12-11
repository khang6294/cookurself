const initialState = {
    recipeList: []
}


const manageRecipeList = (state = initialState,action) => {
    switch (action.type){
        case "GET_RECIPE_LIST":
        return {
            ...state,
            recipeList: action.payload
        }
        case "ADD_RECIPE":
        return {
            ...state,
            recipeList: [...state.recipeList,action.payload]
        }
        default:
        return state
    }
}

export default manageRecipeList