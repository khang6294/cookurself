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
        return(
            <>
            <Button color="primary" variant="contained" onClick = {() => this.props.addRecipe()}>Add recipe</Button>
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