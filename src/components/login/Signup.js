import {useDispatch, useSelector} from "react-redux";
import {Button, Divider, Dropdown, Grid, Input, Segment} from "semantic-ui-react";
import React from "react";
import {
    confirmSignUp,
    goFindPW, goLogin,
    goSignUp,
    inputID,
    inputPassword,
    inputVerificationCode,
    signIn,
    signUp
} from "../../pages/controllerDucks";


//Router
export function Signup(){
    const signupState = useSelector((state) => state.controller.signupState)
    if(signupState)
        return <VerificationCode/>
    else
        return <Block/>
}

function Block() {
    const dispatch = useDispatch();
    return(
        <div style={{textAlign : 'center' }}>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1> Signup </h1>
            <Input placeholder='email' onChange={(e, {value}) => dispatch(inputID(value))}/>
            <br/>
            <br/>
            <Input placeholder='PW' type='password' onChange={(e, {value}) => dispatch(inputPassword(value))}/>
            <br/>
            <br/>
            <Button onClick={() => dispatch(goLogin())}>
                GoLogin
            </Button>
            {" "}
            <Button onClick={() => dispatch(signUp())}>
                Signup
            </Button>
            {" "}
            <Button onClick={() => dispatch(goFindPW())}>
                GoFindPW
            </Button>
        </div>
    )
}

function VerificationCode(){
    const dispatch = useDispatch();
    const email = useSelector((state) => state.controller.loginUserID)
    const password = useSelector((state) => state.controller.loginUserPassword)
    return(
        <div style={{textAlign : 'center' }}>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1> Signup </h1>
            <Input placeholder='email' defaultValue={email} disabled/>
            <br/>
            <br/>
            <Input placeholder='PW' type='password' defaultValue={password} disabled/>
            <br/>
            <br/>
            <h3> Check your email</h3>
            <Input placeholder='VerificationCode' onChange={(e, {value}) => dispatch(inputVerificationCode(value))}/>
            {" "}
            <Button onClick={() => dispatch(confirmSignUp())}>
                Send Verification Code
            </Button>
            <br/>
            <br/>
            <Button onClick={() => dispatch(goLogin())}>
                GoLogin
            </Button>
            {" "}
            <Button onClick={() => dispatch(goFindPW())}>
                GoFindPW
            </Button>
        </div>
    )
}
