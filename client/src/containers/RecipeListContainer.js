import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actions/index'
import RecipeList from '../components/Recipe/RecipeList'
import NewRecipe from '../components/Recipe/NewRecipe'
import SearchBar from '../components/SearchBar/SearchBar'
import SideBar from '../components/SideBar/SideBar'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import Loading from '../components/Loading/Loading'

class RecipeListContainer extends Component {
    state = {
        newRecipePage: false,
        loginPage: false,
        registerPage:false,
        newIngredients:null
    }

    componentDidUpdate(prevProps){
        if(this.props.user.isAuth !== prevProps.user.isAuth){
            this.setState({
                loginPage:false
            })
        }
        
        if(this.props.userRegister._id !== prevProps.userRegister._id){
            this.setState({
                loginPage: true,
                registerPage: false
            })
        }      
    
        if(this.state.newIngredients && this.props.newRecipe){
            if(this.state.newIngredients.length > 0){
                this.props.createNewIngredients(this.state.newIngredients,this.props.newRecipe._id)
            }
        }
    }

    componentDidMount(){
        this.props.getRecipeList();
        this.props.getIngredientList();
    }

    createNewRecipe = (newRecipe) => {
        this.props.addRecipe(newRecipe)
        this.setState({
            newRecipePage: false,
        })
    }

    onLogin = () => {
        this.setState({
            loginPage: true
        })
    }

    onCloseLogin = () => {
        this.setState({
            loginPage: false
        })
        this.props.resetError();
    }

    onRegister = () => {
        this.setState({
            registerPage: true
        })
    }
    onCloseRegister = () => {
        this.setState({
            registerPage: false
        })
        this.props.resetError();
    }

    onLogout = () => {
        this.props.logout();
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
                login = {() => this.onLogin()}
                register = {() => this.onRegister()}
                isAuth = {this.props.user.isAuth}
                logout = {() => this.onLogout()}
            />
            {
                this.state.newRecipePage ? 
                <NewRecipe 
                    ingredientList = {this.props.ingredientList}
                    createNewRecipe = {(newRecipe) => this.createNewRecipe(newRecipe)}
                    createNewIngredients = {(newIngredients) => this.setState({newIngredients:newIngredients})}
                    backToRecipeList = {() => this.setState({newRecipePage:false})}
                    user = {this.props.user.user}
                /> : 
                this.props.recipeListOriginal.length > 0 ?
                <>                
                <SearchBar 
                    onInputSearchChange={(inputSearch) => this.props.onInputSearchChange(inputSearch)}
                /> 
                <RecipeList 
                    {...this.props} 
                    recipeList = {this.props.recipeList}
                    increaseFavAmount = {(recipeId,favAmount) => this.props.increaseFavAmount(recipeId,favAmount)}
                />
                </> : 
                <Loading/>
            }
            {
                this.state.loginPage ? 
                <Login
                    open = {this.state.loginPage}
                    closeLogin = {() => this.onCloseLogin()}
                    getLoginInfo = {(loginInfo) => this.props.login(loginInfo)} 
                    isAuth = {this.props.user.isAuth}
                    error = {this.props.error}               
                /> : 
                null
            }
            {
                this.state.registerPage ? 
                <Register
                    open = {this.state.registerPage}
                    closeRegister = {() => this.onCloseRegister()}
                    getRegisterInfo = {(registerInfo) => this.props.register(registerInfo)}
                    error = {this.props.error}               
                /> : 
                null
            }

            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        recipeList: state.recipeList.recipeList,
        recipeListOriginal: state.recipeList.recipeListOriginal,
        ingredientList: state.recipeList.ingredientList,
        newRecipe: state.recipeList.newRecipe,
        user: state.auth.user,
        userRegister: state.auth.userRegister,
        error: state.auth.error
        
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
        increaseFavAmount: actionCreators.increaseFavAmount,
        register: actionCreators.register,
        login : actionCreators.login,
        logout: actionCreators.logout,
        createNewIngredients: actionCreators.createNewIngredients,
        resetError: actionCreators.resetError,
    }
)(RecipeListContainer)