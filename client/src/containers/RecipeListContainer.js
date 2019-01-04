import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actions/index'
import RecipeList from '../components/Recipe/RecipeList'
import NewRecipe from '../components/Recipe/NewRecipe'
import SearchBar from '../components/SearchBar/SearchBar'
import SideBar from '../components/SideBar/SideBar'
class RecipeListContainer extends Component {
    state = {
        newRecipePage: false
    }
    componentDidMount(){
        this.props.getRecipeList();
        this.props.getIngredientList();
    }

    createNewRecipe = (newRecipe) => {
        this.props.addRecipe(newRecipe)
        this.setState({
            newRecipePage: false
        })
    }


    render(){
        return(
            <>
            <SideBar 
                    {...this.props}
                    newRecipePage ={() => this.setState({newRecipePage:true})}
                    ingredientList = {this.props.ingredientList}
                    querySelected = {(checked) => this.props.querySelected(checked)}
            />
            {
                this.state.newRecipePage ? 
                <NewRecipe 
                    ingredientList = {this.props.ingredientList}
                    createNewRecipe = {(newRecipe) => this.createNewRecipe(newRecipe)}
                    backToRecipeList = {() => this.setState({newRecipePage:false})}
                /> :
                <>
                
                <SearchBar 
                    onInputSearchChange={(inputSearch) => this.props.onInputSearchChange(inputSearch)}
                />
                <RecipeList 
                    {...this.props} 
                    recipeList = {this.props.recipeList}
                    increaseFavAmount = {(recipeId,favAmount) => this.props.increaseFavAmount(recipeId,favAmount)}
                />
                </>

            }
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
        querySelected: actionCreators.querySelected,
        increaseFavAmount: actionCreators.increaseFavAmount
    }
)(RecipeListContainer)