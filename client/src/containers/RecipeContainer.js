import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actions/index'
import Recipe from '../components/Recipe/Recipe'


class RecipeContainer extends Component {

    componentWillUnmount(){
        this.props.resetRecipe();
    }

    componentDidMount(){
        this.props.getRecipe(this.props.match.params.recipeId)
    }

    render(){
        return (
            <Recipe recipe = {this.props.recipe}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipe: state.recipe.recipe
    }
}


export default connect(mapStateToProps,
    {
        getRecipe :actionCreators.getRecipe,
        resetRecipe: actionCreators.resetRecipe
    }
)(RecipeContainer)
