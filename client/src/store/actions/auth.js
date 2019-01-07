import axios from 'axios'


export const login = (loginInfo) => {
    return dispatch => {
        axios.post('/user/login',loginInfo)
        .then(res => {
            console.log(res.data)
            dispatch({type: 'LOGIN', payload: res.data});
        })
    }
}

export const logout = () => {
    return {
        type:'LOGOUT', 
        payload: ''
    }
}

export const register = (registerInfo) => {
    return dispatch => {
        axios.post('/user/signup',registerInfo)
            .then(res => {
                dispatch({type: 'REGISTER', payload: res.data})
            })
    }
}