import axios from 'axios'; 




const initialState = {
    user: {}, 
    isLoggedIn: false

}

const LOGIN_USER = 'LOGIN_USER'; 
const LOGOUT_USER = 'LOGOUT_USER' ;
const GET_USER = 'GET_USER'


export function loginUser(user){
    return {
        type: LOGIN_USER, 
        payload: user
    }
}

export function logOutUser(){
    return {
        type: LOGOUT_USER, 
        payload: initialState
    }
}


export function getUser(){
  const user = axios.get('/auth/user')
  return{
       type: GET_USER, 
       payload: user
  }
}


export default function reducer(state = initialState , action){
    switch(action.type){
        case LOGIN_USER:
            return {...state, user: action.payload, isLoggedIn: true}
        case LOGOUT_USER:
            return {...state, ...action.payload}
        case GET_USER + '_PENDING':
            return {}
        default:
            return initialState
    }
}