import axios from 'axios';

const GET_USERS = "GET_USERS";




// ACTION CREATORS

export function getUsers(){
    return {
        type: GET_USERS,
        payload: axios
        .get('/api/getusers')
        .then(response => {
            return response.data;
        })
        .catch(err => console.log(err))
    }
}


// INITIAL STATE 

const initialState = {
    users:[],
    isLoading:false,
    didError:false,
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case `${GET_USERS}_PENDING`:
            return Object.assign({},state,{ isLoading:true});

        case `${GET_USERS}_FULFILLED`:
            return Object.assign({},state,{
                isLoading:false,
                users: action.payload
            });
        case `${ GET_USERS }_REJECTED`:
            return Object.assign({},state,{
                isLoading:false,
                didError: true
            });
        default:
            return state;
    }
}