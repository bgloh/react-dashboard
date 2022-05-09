// couterDucks.js


import produce from 'immer';

// actions
export const INCREASE_COUNTER = "doctorr/counter/increased";
export const DECREASE_COUNTER = "doctorr/counter/decreased";

const initialState ={
    count : 0
}

// actionCreators
export const increaseCounter = ()=>{
    return {
      type : INCREASE_COUNTER
    }
  }
  export const decreaseCounter = () => {
    return {
      type : DECREASE_COUNTER
    }
  }

// reducer
const counterReducer = (state = initialState , action) => {
  

    switch(action.type) {
      case INCREASE_COUNTER:
        return produce(state, draft =>{
            draft.count +=1
        })
      case DECREASE_COUNTER:
        return produce(state, draft =>{
          draft.count -=1
      })
      default:
         return state;
    }
  }
  
  export default counterReducer;