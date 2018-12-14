import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AccessTime from '@material-ui/icons/AccessTime';


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        
    },
    recipeName:{
        textAlign: 'center'
    },
    recipeImg:{
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '70%',
        height:'70%'
    },
    recipeBody: {
        marginLeft: '16px',
        marginRight: '16px'
    }
});
const recipe = (props) => {
    const { classes,recipe } = props;
    if(recipe.name){
        const ingredients = recipe.ingredients.map(ingredient => <li key={ingredient._id}>{ingredient.name}</li>)
        return (
        <div>
            <Typography variant="h3" component="h1" className={classes.recipeName}>
                {recipe.name}
            </Typography>
            <br/>
            <br/>
            <Typography component="p" className={classes.recipeName}>
                <AccessTime/> <span style={{fontSize:'1.5em'}}>{recipe.duration} minutes</span>
            </Typography>
            <br/>
            <br/>
            <img src = 'http://localhost:8080/api/food.jpg' className={classes.recipeImg} alt="Recipe"/>
            <div className={classes.recipeBody}>
                <Typography variant="h5" component="h1">
                    Ingredients:
                </Typography>
                <Divider variant="middle" />
                <Typography component="ul">
                    {ingredients}
                </Typography>
                <Typography variant="h5" component="h1">
                    Instructions
                </Typography>
                <Divider variant="middle" />
                <Typography component="p">
                    {recipe.instructions}
                </Typography>
            </div>
        </div>
        )} else return null
    
}

export default withStyles(styles)(recipe)