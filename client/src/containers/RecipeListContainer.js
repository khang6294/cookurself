import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actions/index'
import RecipeList from '../components/Recipe/RecipeList'
import NewRecipe from '../components/Recipe/NewRecipe'
import SearchBar from '../components/SearchBar/SearchBar'
class RecipeListContainer extends Component {
    
    componentDidMount(){
        this.props.getRecipeList();
    }


    render(){
        return(
            <>
            <SearchBar onInputSearchChange={(inputSearch) => this.props.onInputSearchChange(inputSearch)}/>
            <NewRecipe createNewRecipe = {(newRecipe) => this.props.addRecipe(newRecipe)}/>
            <br/>
            <br/>
            <RecipeList {...this.props} recipeList = {this.props.recipeList}/>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        recipeList: state.recipeList.recipeList
    }
}



export default connect(
    mapStateToProps,
    {
        getRecipeList :actionCreators.getRecipeList,
        addRecipe: actionCreators.addRecipe,
        onInputSearchChange: actionCreators.onInputSearchChange
    }
)(RecipeListContainer)