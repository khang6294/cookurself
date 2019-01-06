const initialState = {
    recipeList: [],
    recipeListOriginal: [],
    ingredientList: [],
    newRecipe: null
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
            recipeList: [...state.recipeList,action.payload],
            recipeListOriginal: [...state.recipeListOriginal,action.payload],
            newRecipe: action.payload
        }
        case "INPUT_SEARCH_CHANGE":
        let recipeListOriginal = [...state.recipeListOriginal]
        return {
            ...state,
            recipeList: recipeListOriginal.filter(recipe => recipe.name.toLowerCase().includes(action.payload.toLowerCase()))
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
        return{
            ...state,
            recipeList: filterRecipeList
        }
        case "INCREASE_FAV_AMOUNT":
        let recipeListClone = [...state.recipeList]
        let recipeListOriClone = [...state.recipeListOriginal]

        for(let i = 0; i < recipeListClone.length ; i ++) {
            if(recipeListClone[i]._id === action.payload._id){
                recipeListClone[i] = {...action.payload}
            }
        }

        for(let i = 0; i < recipeListOriClone.length ; i ++) {
            if(recipeListOriClone[i]._id === action.payload._id){
                recipeListOriClone[i] = {...action.payload}
            }
        }
        return {
            ...state,
            recipeList: recipeListClone,
            recipeListOriginal: recipeListOriClone
        }
        case "CREATE_INGREDIENT_AND_UPDATE_RECIPE":
        let recipeListClone1 = [...state.recipeList]
        let recipeListOriClone1 = [...state.recipeListOriginal]

        for(let i = 0; i < recipeListClone1.length ; i ++) {
            if(recipeListClone1[i]._id === action.payload._id){
                recipeListClone1[i] = {...action.payload}
            }
        }

        for(let i = 0; i < recipeListOriClone1.length ; i ++) {
            if(recipeListOriClone1[i]._id === action.payload._id){
                recipeListOriClone1[i] = {...action.payload}
            }
        }
        return {
            ...state,
            newRecipe:null,
            recipeList: recipeListClone1,
            recipeListOriginal: recipeListOriClone1
        }

        default:
        return state
    }
}

export default manageRecipeList