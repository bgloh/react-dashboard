// quoteDucks.js
// ActionType + Action + Reducer

import produce from 'immer';
import axios from 'axios';


// Actions
export const LOAD_QUOTE_START = 'LOAD_QUOTE_START';
export const LOAD_QUOTE_SUCCESS = 'LOAD_QUOTE_SUCCESS';
export const LOAD_QUOTE_FAILURE = 'LOAD_QUOTE_FAILURE';

// Action Creators
// http async call example using axios
export const loadQuote =() => {

    return (dispatch, getState) =>{

        dispatch({type: LOAD_QUOTE_START})
        //console.log(getState());
        let url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';
        axios.get(url).then
             (function(response)
              {
                let quote = response.data[0].quote;
                dispatch({type: LOAD_QUOTE_SUCCESS, payload: quote})
                console.log(quote);
              }).catch(function(error){
                dispatch({type: LOAD_QUOTE_FAILURE, payload: error})
            })
    }
    
}

const initialState ={
    quote : "*************",
    error : null,
    isloading : 0,
}


const quoteReducer =(state=initialState, action)=>{
    switch(action.type)
    {
        case LOAD_QUOTE_START:
            return produce(state,draft =>{
                draft.isloading = 1
            })

        case LOAD_QUOTE_SUCCESS:
            return produce(state,draft =>{
                draft.text = action.payload;
                draft.isloading = 0
            })

        case LOAD_QUOTE_FAILURE:
            return produce(state,draft =>{
                draft.error = action.payload;
                draft.isloading = 0
            })
        
        default:
            return state
    }
}

export default quoteReducer;