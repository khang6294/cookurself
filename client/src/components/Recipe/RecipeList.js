import React from 'react';
import './RecipeList.css'
import Grid from '@material-ui/core/Grid';
import RecipeListItem from './RecipeListItem'

const RecipeList = (props) => {
    let recipeList = null
    if(props.recipeList){
        recipeList = props.recipeList.map(recipe => {
            return (
                <RecipeListItem
                    key={recipe._id}
                    recipe = {recipe}
                    increaseFavAmount = {(recipeId, favAmount) => props.increaseFavAmount(recipeId, favAmount)}
                />
            )
        })
    }
    return (
        <div className="recipe-list-container">
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
            {recipeList}
            </Grid>
        </div>
    )
}

export default RecipeList