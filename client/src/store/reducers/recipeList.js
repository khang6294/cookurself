const initialState = {
    recipeList: [],
    recipeListOriginal: []
}


const manageRecipeList = (state = initialState,action) => {
    switch (action.type){
        case "GET_RECIPE_LIST":
        return {
            ...state,
            recipeList: action.payload,
            recipeListOriginal: action.payload
        }
        case "ADD_RECIPE":
        return {
            ...state,
            recipeList: [...state.recipeList,action.payload]
        }
        case "INPUT_SEARCH_CHANGE":
        let recipeListOriginal = [...state.recipeListOriginal]
        return {
            ...state,
            recipeList: recipeListOriginal.filter(recipe => recipe.name.includes(action.payload))
        }
        default:
        return state
    }
}

export default manageRecipeList