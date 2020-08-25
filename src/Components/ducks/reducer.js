import axios from 'axios'; 




const initialState = {
    username: {}, 
    isLoggedIn: false, 
    id: 0, 
    profile_pic: ''


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
            return {...state, username: action.payload, isLoggedIn: true}
        case LOGOUT_USER:
            return {...state, ...action.payload}
        case GET_USER + '_PENDING':
            return state
        case GET_USER + '_FULFILLED':
            return {...state,  username: action.payload.data,  isLoggedIn: true ,id: action.payload.data, profile_pic: action.payload.data}
        case GET_USER + '_REJECTED':
            return initialState
        default:
            return initialState
    }
}