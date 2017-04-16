



const reducer = (state = {
    fetching: false,
    fetched: false,
    tweets: [],
    error: null
}, action) => {
    switch (action.type) {
        case "FETCH_TWEETS_PENDING": {
            state = {...state, fetching: true};
            break;    
        }
        case "FETCH_TWEETS_FULFILLED": {
            state = {...state, users: action.payload.data, fetching:false, fetched:true};
            break;
        }
        case "FECTH_TWEETS_REJECTED": {
            state = {...state, error: action.payload, fetching: false};
            break;
        }

    }
    return state;
}

export default reducer;