// userDucks.js
// ActionType + Action + Reducer

import produce from 'immer';


// Actions
export const LOAD_USER_START   = "doctorr/user/loading-started";
export const LOAD_USER_SUCCESS = "doctorr/user/loading-succeeded";
export const LOAD_USER_FAILURE = "doctorr/user/loading-failed";
export const UPDATE_SELECTED_USER_OPTION = "doctorr/user/update-selected-user-option";
export const GET_SLEEPTIME_START ="doctorr/user/get-sleep-time-started";
export const GET_SLEEPTIME_SUCCESS ="doctorr/user/get-sleep-time-succeeded";
export const GET_SLEEPTIME_FAILURE="doctorr/user/get-sleep-time-failed";

// Action Creators
// http async call example using axios
export const loadUsers =() => {
    let  userNameAndId = []; // empty array for userName and Id
    return (dispatch, getState) =>{

        dispatch({type: LOAD_USER_START})
        //console.log(getState());
        fetch('/api/allUsers')
        .then(res => res.json())
        .then( users => {
            console.log(users);
            users.map((u,index) => userNameAndId[index]={value:u.userId, label:u.uName + '  :  ' + u.userId});
            dispatch({type: LOAD_USER_SUCCESS, payload: userNameAndId})
        })
        .catch(error => {
            dispatch({type: LOAD_USER_FAILURE, payload: error})
            console.log(error)
        })
    }
    
}

// get sleep time
export const getSleepTime = () =>{
    
    return (dispatch,getState)=>{
        let state = getState();
        let user = state.user;
        let userId = user.selectedOption.value;
        let queryStr = '/api/getSleepTime/'  +   String(userId);
        const MSEC_DAILY = 86400000;
        dispatch({type: GET_SLEEPTIME_START})
        fetch(queryStr)
        .then(res => res.json())
        .then(time => {
          //  console.log(time);
            let plotData = [];
            time.map((t,index) =>{
          //  plotData[index] = {x:new Date(t.sStart.substring(19,0)).getTime() , y: parseInt(t.sTotal)}; })
            plotData[index] = {x:new Date(t.sStart).toISOString() , y: parseInt(t.sTotal)/60}; })
            dispatch({type: GET_SLEEPTIME_SUCCESS, payload: plotData})
           })
        .catch(error => dispatch({type: GET_SLEEPTIME_FAILURE, payload: error}))

    }
}



// update selected user option
export const updateSelectedUser =(selection) => {
    return (dispatch, getState) =>{
        dispatch({type: UPDATE_SELECTED_USER_OPTION,
                  payload : selection})
    }
}

//

const initialState ={
    options :[
        { value: 'chocolate', label: 'Chocolate1' },
        { value: 'strawberry', label: 'Strawberry1' },
        { value: 'vanilla', label: 'Vanilla1' },

       ],
    allUsers: [],
    selectedOption : null,
    plotData : [{x: new Date('2009-06-10T13:45:30').toISOString(), y: 3}, 
                {x: new Date('2009-06-15T13:45:30').toISOString(), y: 5}
                 ],//{x : [], y : [] },
    error : null,
    isloading : false,
}


const userReducer =(state=initialState, action)=>{
    switch(action.type)
    {
        case LOAD_USER_START:
            return produce(state,draft =>{
                draft.isloading = true;
            })

        case LOAD_USER_SUCCESS:
            return produce(state,draft =>{
                draft.allUsers = action.payload;
                draft.isloading = false;
            })

        case LOAD_USER_FAILURE:
            return produce(state,draft =>{
                draft.error = action.payload;
                draft.isloading = false;
            })
        
        case UPDATE_SELECTED_USER_OPTION:
                return produce(state,draft =>{
                    draft.selectedOption = action.payload;
                })

        case GET_SLEEPTIME_SUCCESS:
            return produce(state,draft =>{
                draft.plotData = action.payload;
                draft.isloading = false;
            })
        
        case GET_SLEEPTIME_START:
            return produce(state,draft =>{
                draft.isloading = true;
            })
        
        case GET_SLEEPTIME_FAILURE:
            return produce(state,draft =>{
                draft.error = action.payload;
                draft.isloading = false
            })
        
        default:
            return state
    }
}

export default userReducer;