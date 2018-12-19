import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actions/index'
import RecipeList from '../components/Recipe/RecipeList'
import NewRecipe from '../components/Recipe/NewRecipe'
import SearchBar from '../components/SearchBar/SearchBar'
import SideBar from '../components/SideBar/SideBar'
class RecipeListContainer extends Component {
    
    componentDidMount(){
        this.props.getRecipeList();
        this.props.getIngredientList();
    }


    render(){
        return(
            <>
            <SearchBar 
                onInputSearchChange={(inputSearch) => this.props.onInputSearchChange(inputSearch)}
            />
            <SideBar 
                ingredientList = {this.props.ingredientList}
                querySelected = {(checked) => this.props.querySelected(checked)}
            />
            <NewRecipe createNewRecipe = {(newRecipe) => this.props.addRecipe(newRecipe)}/>
            <RecipeList {...this.props} recipeList = {this.props.recipeList}/>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        recipeList: state.recipeList.recipeList,
        ingredientList: state.recipeList.ingredientList
    }
}



export default connect(
    mapStateToProps,
    {
        getRecipeList :actionCreators.getRecipeList,
        addRecipe: actionCreators.addRecipe,
        onInputSearchChange: actionCreators.onInputSearchChange,
        getIngredientList: actionCreators.getIngredientList,
        querySelected: actionCreators.querySelected
    }
)(RecipeListContainer)