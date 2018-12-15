import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AccessTime from '@material-ui/icons/AccessTime';
import './Recipe.css'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        
    },
    recipeName:{
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 'bold',
    },
    recipeDuration:{
        textAlign: 'center',
        fontSize: '1.5rem',
        paddingTop:'2rem',
        paddingBottom:'2rem',
    },
    recipeImg:{
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '70%',
        height:'70%'
    },
    recipeBody: {
        paddingTop:'2rem',
        paddingBottom:'2rem',
        marginLeft: '15%',
        marginRight: '15%'
    },
    divider: {
        marginLeft:0,
        marginRight:0
    },
});
const recipe = (props) => {
    const { classes,recipe } = props;
    if(recipe.name){
        const ingredients = recipe.ingredients.map(ingredient => <li key={ingredient._id}>{ingredient.name}</li>)
        return (
        <div className={classes.root}>
            <Typography variant="h2" component="h2" className={classes.recipeName}>
                {recipe.name}
            </Typography>
            <Typography component="p" className={classes.recipeDuration}>
                <AccessTime/> {recipe.duration} minutes
            </Typography>
            <img src = 'http://localhost:8080/api/food.jpg' className={classes.recipeImg} alt="Recipe"/>
            <div className={classes.recipeBody}>
                <Typography variant="h5" component="h1">
                    Ingredients
                </Typography>
                <Divider variant="middle" className={classes.divider}/>
                <Typography component="ul" className='ingredient-list'>
                    {ingredients}
                </Typography>
                <Typography variant="h5" component="h1">
                    Instructions
                </Typography>
                <Divider variant="middle" className={classes.divider}/>
                <Typography component="ol" className='instructions'>
                    <li>{recipe.instructions}</li>
                </Typography>
            </div>
        </div>
        )} else return null
    
}

export default withStyles(styles)(recipe)