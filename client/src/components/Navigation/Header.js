import React from 'react';
import Logo from '../Logo/Logo'
import AppBar from '@material-ui/core/AppBar';
import './Header.css'

const header = (props) => {
    return (
        <div className={props.match.params.recipeId ? "rootRecipe" : "rootRecipes"}>
            <AppBar 
                position="static"
                className="appBar"
            >
            <div className="grow">
                <Logo/>
            </div>
            </AppBar>
        </div>
    )
}

export default header;
