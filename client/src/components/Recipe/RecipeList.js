import React from 'react';
import Card from '@material-ui/core/Card';
import './RecipeList.css'
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
            <div className="recipe-card-wrapper">
                <Card className="recipe-card">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="200"
                            image= 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg'
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
        <div style={{ padding: 60 }}>
            <Grid container>
                {recipeList}
            </Grid>
        </div>
        
    )
}

export default RecipeList