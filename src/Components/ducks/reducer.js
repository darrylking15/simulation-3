const initialState = {
    userName: '', 
    profilePic: '', 
    userId: 0 

}

const UPDATE_USER = 'UPDATE_USER'; 
const LOGOUT = 'LOGOUT'; 

export default function (state = initialState, action){
    let {type , payload} = action
    switch(type){
        case UPDATE_USER:
            return {...state, userName: payload.username, profilePic: payload.profilePic, userId: payload.userId}
            case LOGOUT:
                return initialState 
                default:
                    return state




    
    }
}


export function updateUser(user){
    return {
        type: UPDATE_USER, 
        payload: user
    }
}

export function logout(){
    return {
        type: LOGOUT
    }
}