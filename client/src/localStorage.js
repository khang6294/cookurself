export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return {
            recipeList: {
                recipeList: [],
                recipeListOriginal: [],
                ingredientList: [],
            },
            recipe: {
                recipe: {}
            },
            auth: {
                err:{},
                userRegister: {},
                ...JSON.parse(serializedState)
            }
        };
    } catch (err) {
        return undefined;
    }
}; 

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
      // ignore write errors
    }
};