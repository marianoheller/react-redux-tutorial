import axios from "axios";


export function fetchTweets() {
    return function(dispatch) {
        axios.get("https://rest.learncode.academy/api/test123/tweets")
            .then( (response) => {
                dispatch( {
                    type: "FETCH_TWEETS_FULFILLED",
                    payload: response.data,
                })
            })
            .catch( (err) => {
                dispatch( {
                    type: "FETCH_TWEETS_REJECTED",
                    payload: err,
                })
            })
    }
}

export function addTweets( id, text) {
    return {
        type:"ADD_TWEET",
        payload: {
            id,
            text,
        }
    }
}
export function updateTweets( id, text) {
    return {
        type:"ADD_TWEET",
        payload: {
            id,
            text,
        }
    }
}
