



const reducer = (state = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
}, action) => {
    switch (action.type) {
        case "FETCH_USER_PENDING": {
            state = {...state, fetching: true};
            break;    
        }
        case "FETCH_USER_FULFILLED": {
            state = {...state, users: action.payload.data, fetching:false, fetched:true};
            break;
        }
        case "FECTH_USER_REJECTED": {
            state = {...state, error: action.payload, fetching: false};
            break;
        }
        case "SET_USER_NAME": {
            state = {...state.name, name: action.payload};
            break;
        }
        case "SET_USER_AGE": {
            state = {...state.age, age: action.payload};
            break;
        }
    }
    return state;
}

export default reducer;