const initialState = {
    user:{},
}


const manageAuth = (state = initialState, action) => {
    switch (action.type){
        case "LOGIN":
        return {
            user: action.payload,
        }
        case "LOGOUT":
        return {
            ...initialState
        }
        default:
        return state
    }
}

export default manageAuth