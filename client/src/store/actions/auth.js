import axios from 'axios'


export const login = (loginInfo) => {
    return dispatch => {
        axios.post('/user/login',loginInfo)
        .then(res => {
            dispatch({type: 'LOGIN_SUCCESS', payload: res.data});
        })
        .catch(err => {
            dispatch({
                type:'LOGIN_FAIL',
                payload: {
                    message: err.response.data.message,
                    statusCode: err.response.status
                }
            })
        })
    }
}

export const register = (registerInfo) => {
    return dispatch => {
        axios.post('/user/signup',registerInfo)
            .then(res => {
                dispatch({type: 'REGISTER_SUCCESS', payload: res.data})
            })
            .catch(err => {
                dispatch({
                    type:'REGISTER_FAIL',
                    payload: {
                        message: err.response.data.message,
                        statusCode: err.response.status
                    }
                })
            })
    }
}

export const logout = () => {
    return {
        type:'LOGOUT', 
        payload: ''
    }
}

export const resetError = () => {
    return {
        type: 'RESET_ERROR',
        payload: ''
    }
}
