import {useDispatch, useSelector} from "react-redux";
import {Button, Divider, Dropdown, Grid, Input, Segment} from "semantic-ui-react";
import React from "react";
import {
        confirmSignUp,
        forgotPassword, goFindPW,
        goLogin,
        goSignUp,
        inputID,
        inputPassword,
        inputVerificationCode, sendNewPassword,
        signUp,
} from "../../pages/controllerDucks";


//Router
export function FindPassWord(){
        const passwordChangeState = useSelector((state) => state.controller.passwordChangeState)
        if(passwordChangeState)
                return(
                   <NewPassword/>
                )
        else
                return (
                    <Check_email/>
                )
}

function Check_email(){
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
                    <h1> FindPassWord </h1>
                    <Input placeholder='email' onChange={(e, {value}) => dispatch(inputID(value))}/>
                    <br/>
                    <br/>
                    <Button onClick={() => dispatch(goLogin())}>
                            GoLogin
                    </Button>
                    {" "}
                    <Button onClick={() => dispatch(goSignUp())}>
                            GoSignup
                    </Button>
                    {" "}
                    <Button onClick={() => dispatch(forgotPassword())}>
                            FindPW
                    </Button>
            </div>
        )
}

function NewPassword(){
        const dispatch = useDispatch();
        const email = useSelector((state) => state.controller.loginUserID)
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
                    <h3> Check your email</h3>
                    <br/>
                    <br/>
                    <Input placeholder='PW' onChange={(e, {value}) => dispatch(inputPassword(value))}type='password'/>
                    <br/>
                    <br/>
                    <Input placeholder='VerificationCode' onChange={(e, {value}) => dispatch(inputVerificationCode(value))}/>
                    {" "}
                    <Button onClick={() => dispatch(sendNewPassword())}>
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