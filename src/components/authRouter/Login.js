import {useDispatch} from "react-redux";
import {Button, Divider, Dropdown, Grid, Input, Segment} from "semantic-ui-react";
import React from "react";
import {goFindPW, goSignUp, inputID, inputPassword, signIn} from "./authRouterDucks";


//Router
export function Login(){
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
            <h1> Login </h1>
                <Input placeholder='email' onChange={(e, {value}) => dispatch(inputID(value))}/>
                <br/>
                <br/>
                <Input placeholder='PW' type='password' onChange={(e, {value}) => dispatch(inputPassword(value))}/>
                    <br/>
                <br/>
            <Button onClick={() => dispatch(signIn())}>
                    Login
            </Button>
                {" "}
            <Button onClick={() => dispatch(goSignUp())}>
                GoSignup
            </Button>
                {" "}
            <Button onClick={() => dispatch(goFindPW())}>
                GoFindPW
            </Button>
        </div>
    )
}