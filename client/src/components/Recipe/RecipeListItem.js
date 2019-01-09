import React,{Component} from 'react'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {NavLink} from 'react-router-dom'
import Card from '@material-ui/core/Card';


class RecipeListItem extends Component{

    state = {
        favAmount : this.props.recipe.favoriteAmount
    }

    onIncreaseFavAmount = () => {
        this.setState(prevState => {
            return {
                favAmount: prevState.favAmount + 1
            }
        },() => {
            this.props.increaseFavAmount(this.props.recipe._id,this.state.favAmount)
        })
    }

    render(){
        return(
            <div key={this.props.recipe._id} className="recipe-card-wrapper">
                <Card className="recipe-card">
                <NavLink style={{ textDecoration: 'none' }} to={`/${this.props.recipe._id}`}>
                    <CardActionArea>
                        <CardMedia
                            style={{height:'150px',width:'100%',maxHeight:'150px'}}
                            component="img"
                            alt="Recipe image"
                            image= {`https://cookurself-server.herokuapp.com/api/${this.props.recipe.imageUrl ? this.props.recipe.imageUrl.split("/")[1] : 'food.jpg'}`}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5">
                            {this.props.recipe.name}
                        </Typography>
                        <Typography component="p">
                            {this.state.favAmount} people loves this recipe
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </NavLink>
                    <CardActions>
                        <Button 
                            size="small" 
                            color="primary" 
                            onClick = {() => {
                                this.onIncreaseFavAmount()
                            }}
                        >
                            <FavoriteIcon style={{color:'#ef0909'}}/>Favorite
                        </Button>
                    </CardActions>
                </Card>
            </div> 
        )
    }
}

export default RecipeListItem