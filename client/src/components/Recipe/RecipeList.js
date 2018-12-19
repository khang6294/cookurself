import React from 'react';
import Card from '@material-ui/core/Card';
import './RecipeList.css'
import {NavLink} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const RecipeList = (props) => {
    const recipeList = props.recipeList.map(recipe => {
        return (
            <div key={recipe._id} className="recipe-card-wrapper">
                <Card className="recipe-card">
                <NavLink style={{ textDecoration: 'none' }} to={`/recipes/${recipe._id}`}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="200"
                            image= 'http://localhost:8080/api/food.jpg'
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {recipe.name}
                        </Typography>
                        <Typography component="p">
                            {recipe.introduction}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </NavLink>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
            
        )
    })
    return (
        <div className="recipe-list-container">
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
        >
        {recipeList}
        </Grid>
        </div>
    )
}

export default RecipeList