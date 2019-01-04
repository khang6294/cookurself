import axios from 'axios'


export const login = (loginInfo) => {
    return dispatch => {
        axios.post('/user/login',loginInfo)
        .then(res => {
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