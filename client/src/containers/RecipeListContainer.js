import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actions/index'
import {getRecipeList,addRecipe} from '../store/actions/recipe'
import RecipeList from '../components/Recipe/RecipeList'

class RecipeListContainer extends Component {

    componentDidMount(){
        this.props.getRecipeList();
    }


    render(){
        return(
            <>
            <button onClick = {() => this.props.addRecipe()}>Add recipe</button>
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