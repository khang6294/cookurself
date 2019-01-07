const initialState = {
    user:{},
    userRegister: {}
}


const manageAuth = (state = initialState, action) => {
    switch (action.type){
        case "LOGIN":
        return {
            ...state,
            user: action.payload,
        }
        case "LOGOUT":
        return {
            ...initialState
        }
        case "REGISTER":
        return{
            ...state,
            userRegister: action.payload
        }

        default:
        return state
    }
}

export default manageAuth