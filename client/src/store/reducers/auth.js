const initialState = {
    user:{},
    userRegister: {},
    error:{}
}


const manageAuth = (state = initialState, action) => {
    switch (action.type){
        case "LOGIN_SUCCESS":
        return {
            ...state,
            user: action.payload,
            error: {}
        }
        case "LOGIN_FAIL":
        return {
            ...state,
            error: {
                message: action.payload.message,
                statusCode: action.payload.statusCode
            }
        }
        case "LOGOUT":
        return {
            ...initialState
        }
        case "REGISTER_SUCCESS":
        return{
            ...state,
            userRegister: action.payload,
            error: {}
        }
        case "REGISTER_FAIL":
        return {
            ...state,
            error: {
                message: action.payload.message,
                statusCode: action.payload.statusCode
            }
        }
        case 'RESET_ERROR':
        return {
            ...state,
            error: {}
        }
        default:
        return state
    }
}

export default manageAuth