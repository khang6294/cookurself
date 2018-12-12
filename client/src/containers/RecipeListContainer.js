import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actions/index'
import RecipeList from '../components/Recipe/RecipeList'
import Button from '@material-ui/core/Button';

class RecipeListContainer extends Component {
    
    componentDidMount(){
        this.props.getRecipeList();
    }


    render(){
        const newRecipe = {
            name:'Fried Noodles',
            duration:30,
            instructions:'abc',
            ingredients: 'cde'
        }
        return(
            <>
            <Button color="primary" variant="contained" onClick = {() => this.props.addRecipe(newRecipe)}>Add recipe</Button>
            <br/>
            <br/>
            <RecipeList recipeList = {this.props.recipeList}/>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        recipeList: state.recipeList
    }
}



export default connect(
    mapStateToProps,
    {
        getRecipeList :actionCreators.getRecipeList,
        addRecipe: actionCreators.addRecipe
    }
)(RecipeListContainer)