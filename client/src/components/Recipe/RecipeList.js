import React from 'react';

const RecipeList = (props) => {
    const recipeList = props.recipeList.map(recipe => <li key = {recipe.name}>{recipe.name}</li>)
    return (
        <ul>
            {recipeList}
        </ul>
    )
}

export default RecipeList