const initialState = {
    recipeList: [],
    recipeListOriginal: [],
    ingredientList: []
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
        case "GET_INGREDIENT_LIST":
        return {
            ...state,
            ingredientList: action.payload,
        }
        case "QUERY_SELECTED":
        let filterRecipeList = [];
        if(action.payload.length === 0){
            filterRecipeList = [...state.recipeListOriginal]
        }
        for(let i = 0; i < state.recipeListOriginal.length; i++){
            let filterIndicator = 0;
            const ingredientsId = state.recipeListOriginal[i].ingredients
            const filterIngredientsId = action.payload.map(ingredient => ingredient._id)
            for(let j=0; j< ingredientsId.length; j++){
                if(filterIngredientsId.indexOf(ingredientsId[j]) > -1){
                    filterIndicator += 1
                    if(filterIndicator === 1){
                        filterRecipeList.push(state.recipeListOriginal[i])
                    }
                } 
            }
            
        }
        // for(let i = 0; i< action.payload.length; i++){
        //     for(let j = 0; j < state.recipeList.length; j++){
        //         const ingredientsId = state.recipeList[j].ingredients
        //         if(ingredientsId.indexOf(action.payload[i]._id) > -1){
        //             filterRecipeList.push(state.recipeList[j])
        //         } 
        //     }
        // }
        return{
            ...state,
            recipeList: filterRecipeList
        }
        default:
        return state
    }
}

export default manageRecipeList