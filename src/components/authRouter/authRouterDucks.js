import produce from "immer";
import Auth from "@aws-amplify/auth";

export const INPUT_ID = 'INPUT_ID'; // ID 타이핑시 호출
export const INPUT_PASSWORD = 'INPUT_PASSWORD'; // Password 타이핑시 호출
export const INPUT_VERIFICATION_CODE = 'INPUT_VERIFICATION_CODE'; // Password 타이핑시 호출
export const GO_LOG_IN = 'GO_LOG_IN'; // Password 타이핑시 호출
export const GO_SIGN_UP = 'GO_SIGN_UP'; // Password 타이핑시 호출
export const GO_FIND_PW = 'GO_FIND_PW'; // Password 타이핑시 호출
export const SIGN_IN_USER_START = 'SIGN_IN_USER_START'; // signin 함수 비동기 처리 시작시의 상태
export const SIGN_IN_USER_SUCCESS = 'SIGN_IN_USER_SUCCESS'; // signin 함수 비동기 처리 성공시의 상태
export const SIGN_IN_USER_FAILURE = 'SIGN_IN_USER_FAILURE'; // signin 함수 비동기 처리 실패시의 상태
export const SIGN_OUT_USER_START = 'SIGN_OUT_USER_START'; // signin 함수 비동기 처리 시작시의 상태
export const SIGN_OUT_USER_SUCCESS = 'SIGN_OUT_USER_SUCCESS'; // signin 함수 비동기 처리 성공시의 상태
export const SIGN_OUT_USER_FAILURE = 'SIGN_OUT_USER_FAILURE'; // signin 함수 비동기 처리 실패시의 상태
export const SIGN_UP_USER_START = 'SIGN_UP_USER_START';
export const SIGN_UP_USER_SUCCESS = 'SIGN_UP_USER_SUCCESS';
export const SIGN_UP_USER_FAILURE = 'SIGN_UP_USER_FAILURE';
export const SIGN_UP_CONFIRM_START = 'SIGN_UP_CONFIRM_START';
export const SIGN_UP_CONFIRM_SUCCESS = 'SIGN_UP_CONFIRM_SUCCESS';
export const SIGN_UP_CONFIRM_FAILURE = 'SIGN_UP_CONFIRM_FAILURE';
export const FORGOT_PASSWORD_START = 'FORGOT_PASSWORD_START';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';
export const SUBMIT_PASSWORD_START = 'SUBMIT_PASSWORD_START';
export const SUBMIT_PASSWORD_SUCCESS = 'SUBMIT_PASSWORD_SUCCESS';
export const SUBMIT_PASSWORD_FAILURE = 'SUBMIT_PASSWORD_FAILURE';
export function inputID(value){
    return {
        type : INPUT_ID, payload : value
    }
}

export function inputPassword(value){
    return {
        type : INPUT_PASSWORD, payload : value
    }
}

export function inputVerificationCode(value){
    return {
        type : INPUT_VERIFICATION_CODE, payload : value
    }
}
export function goLogin(){
    return {
        type : GO_LOG_IN
    }
}

export function goSignUp(){
    return {
        type : GO_SIGN_UP
    }
}

export function goFindPW(){
    return {
        type : GO_FIND_PW
    }
}

export const signIn =()=> {
    return async (dispatch, getState) => {
        let state = getState()
        dispatch({type: SIGN_IN_USER_START})
        Auth.signIn(state.auth.loginUserID, state.auth.loginUserPassword)
            .then(user => {
                dispatch({type : SIGN_IN_USER_SUCCESS, payload : user})
            })
            .catch(err => {
                dispatch({type : SIGN_IN_USER_FAILURE, payload : err})
            })
    }
}

export const signOut =()=> {
    return async (dispatch, getState) => {
        let state = getState()
        dispatch({type: SIGN_OUT_USER_START})
        Auth.signOut()
            .then(user => {
                dispatch({type : SIGN_OUT_USER_SUCCESS})
            })
            .catch(err => {
                dispatch({type : SIGN_OUT_USER_FAILURE, payload : err})
            })
    }
}

export const signUp =()=>{
    return async (dispatch, getState)=>{
        let state = getState();
        if (state.auth.loginUserID !== '' && state.auth.loginUserPassword !== '')
        {
            console.log("signup is requested .... ");
            dispatch({type: SIGN_UP_USER_START})
            Auth.signUp(
                state.auth.loginUserID,
                state.auth.loginUserPassword,
                state.auth.loginUserID,
            )
                .then(user => {
                    dispatch({type: SIGN_UP_USER_SUCCESS, payload : user});
                })
                .catch(err => {
                    dispatch({type : SIGN_UP_USER_FAILURE, payload : err});
                });
        }

    }
}
export const confirmSignUp =()=>{
    return (dispatch, getState)=>{
        let state = getState();  // state
        if (state.auth.loginUserID !== '' && state.auth.loginUserPassword !== '')
        {
            console.log("signup-confirm is requested .... ");
            dispatch({type : SIGN_UP_CONFIRM_START});
            Auth.confirmSignUp(state.auth.loginUserID, state.auth.verificationCode,
                {
                    // Optional. Force user confirmation irrespective of existing alias. By default set to True.
                    forceAliasCreation: true
                }).then(data =>  {
                dispatch({type: SIGN_UP_CONFIRM_SUCCESS, payload : data});
            })
                .catch(err => {
                    dispatch({type: SIGN_UP_CONFIRM_FAILURE, payload : err});
                });
        }
    }
} // end of signup-confirm action

export const forgotPassword =()=>{
    return (dispatch, getState)=>{
        let state = getState();  // state
        if (state.auth.loginUserID !== '')
        {
            console.log("forget Password request .... ");
            dispatch({type : FORGOT_PASSWORD_START});
            Auth.forgotPassword(state.auth.loginUserID)
                .then(data =>  {
                    dispatch({type: FORGOT_PASSWORD_SUCCESS, payload : data});
                })
                .catch(err => {
                    dispatch({type: FORGOT_PASSWORD_FAILURE, payload : err});
                });
        }
    }
}

export const sendNewPassword =()=>{
    return (dispatch, getState)=>{
        let state = getState();  // state
        if (state.auth.loginUserID !== '' && state.auth.loginUserPassword !== '' && state.auth.verificationCode !== '')
        {
            console.log("signup-confirm is requested .... ");
            dispatch({type : SUBMIT_PASSWORD_START});
            Auth.forgotPasswordSubmit(state.auth.loginUserID, state.auth.verificationCode, state.auth.loginUserPassword)
                .then(data =>  {
                    dispatch({type: SUBMIT_PASSWORD_SUCCESS, payload : data});
                })
                .catch(err => {
                    dispatch({type: SUBMIT_PASSWORD_FAILURE, payload : err});
                });
        }
    }
} // end of signup-confirm action

// function checkIdANDPw(){
//
//     return ()
// }


const initialState = {
    loginState: false,
    curState : 'login',
    signupState : false,
    passwordChangeState : false,
    loginUserID : "",
    loginUserPassword : "",
    verificationCode : "",
}

const controllerReducer =(state=initialState, action)=> {
    switch (action.type) {
        case INPUT_ID:
            return produce(state,draft => {
                draft.loginUserID = action.payload;
                // console.log(draft.loginUserID)
            })
        case INPUT_PASSWORD:
            return produce(state, draft => {
                draft.loginUserPassword = action.payload;
                // console.log(draft.loginUserPassword)
            })

        case INPUT_VERIFICATION_CODE:
            return produce(state, draft => {
                draft.verificationCode = action.payload;
            })

        case GO_LOG_IN:
            return produce(state, draft => {
                draft.loginUserID = ''
                draft.loginUserPassword = ''
                draft.verificationCode = ''
                draft.curState = 'login'
            })

        case GO_SIGN_UP:
            return produce(state, draft => {
                draft.loginUserID = ''
                draft.loginUserPassword = ''
                draft.verificationCode = ''
                draft.signupState = false
                draft.curState = 'signup'
            })

        case GO_FIND_PW:
            return produce(state, draft => {
                draft.loginUserID = ''
                draft.loginUserPassword = ''
                draft.verificationCode = ''
                draft.passwordChangeState = false;
                draft.curState = 'find'
            })

        case SIGN_IN_USER_START:
            return produce(state, draft => {
                console.log("loginAttempt");
            });

        case SIGN_IN_USER_SUCCESS:
            return produce(state, draft => {
                draft.loginState = true;
                console.log(action.payload);
            });

        case SIGN_IN_USER_FAILURE:
            return produce(state, draft => {
                console.log(action.payload);
            });

        case SIGN_OUT_USER_START:
            return produce(state, draft => {
                console.log("logoutAttempt");
            });

        case SIGN_OUT_USER_SUCCESS:
            return produce(state, draft => {
                draft.loginState = false;
                draft.loginUserID = "";
                draft.loginUserPassword = "";
                console.log("logout");
            });

        case SIGN_OUT_USER_FAILURE:
            return produce(state, draft => {
                console.log(action.payload);
            });

        case SIGN_UP_USER_START:
            return produce(state, draft => {
                console.log("signupAttempt");
            });

        case SIGN_UP_USER_SUCCESS:
            return produce(state, draft => {
                draft.signupState = true;
                console.log(action.payload);
            });

        case SIGN_UP_USER_FAILURE:
            return produce(state, draft => {
                console.log(action.payload);
            });

        case SIGN_UP_CONFIRM_START:
            return produce(state, draft => {
                console.log("confirm signupAttempt");
            });

        case SIGN_UP_CONFIRM_SUCCESS:
            return produce(state, draft => {
                draft.signupState = false;
                draft.loginUserID = "";
                draft.loginUserPassword = "";
                draft.curState = 'login'
                console.log(action.payload);
            });

        case SIGN_UP_CONFIRM_FAILURE:
            return produce(state, draft => {
                console.log(action.payload);
            });

        case FORGOT_PASSWORD_START:
            return produce(state, draft => {
                console.log("forgot password attempt");
            });

        case FORGOT_PASSWORD_SUCCESS:
            return produce(state, draft => {
                draft.passwordChangeState = true;
                console.log(action.payload);
            });

        case FORGOT_PASSWORD_FAILURE:
            return produce(state, draft => {
                console.log(action.payload);
            });

        case SUBMIT_PASSWORD_START:
            return produce(state, draft => {
                console.log("confirm signupAttempt");
            });

        case SUBMIT_PASSWORD_SUCCESS:
            return produce(state, draft => {
                draft.passwordChangeState = false;
                draft.loginUserID = "";
                draft.loginUserPassword = "";
                draft.curState = 'login'
                console.log(action.payload);
            });

        case SUBMIT_PASSWORD_FAILURE:
            return produce(state, draft => {
                console.log(action.payload);
            });

        default:
            return state;
    }
}

export default controllerReducer;