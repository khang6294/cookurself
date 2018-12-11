export const getRecipeList = () => {
    return {type: 'GET_RECIPE_LIST', payload: [{
        name: 'Recipe1'
    }]};
};

export const addRecipe = () => {
    return {type: 'ADD_RECIPE', payload: {
        name: 'Recipe 2'
    }}
};