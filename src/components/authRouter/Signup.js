import {useDispatch, useSelector} from "react-redux";
import {Button, Form, Grid, Header, Image, Message, Segment, Input, Divider, Popup, Modal} from "semantic-ui-react";
import React from "react";
import {
    closeModal,
    confirmSignUp,
    goFindPW, goLogin, inputConfirmPassword,
    inputID,
    inputPassword,
    inputVerificationCode,
    signUp
} from "./authRouterDucks";


//Router
export function Signup(){
    const signupState = useSelector((state) => state.auth.signupState)
    if(signupState)
        return <VerificationCode/>
    else
        return <SignupEmail/>
}

function SignupEmail() {
    const dispatch = useDispatch();

    const passwordSize = useSelector((state) => state.auth.passWordSizeState);
    const passWordCorrectState = useSelector((state) => state.auth.passWordCorrectState);
    const password = useSelector((state) => state.auth.loginUserPassword)
    const passwordConfirm = useSelector((state) => state.auth.loginConfirmPassword)
    const isLoading = useSelector((state) => state.auth.loadingState);
    const isModalOpen = useSelector((state) => state.auth.modalState);
    const errorMessage = useSelector((state) => state.auth.errorMessage);

    return(
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src="../../logo.svg" /> Sign up to your account
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={(e, {value}) => dispatch(inputID(value))}/>
                        <br/>
                        <Popup
                            content='Password must be at least 8 characters long'
                            open={passwordSize}
                            position='right center'
                            wide
                            trigger={<Input fluid icon='lock' iconPosition='left' placeholder='Password' defaultValue={password} onChange={(e, {value}) => dispatch(inputPassword(value))}/>}/>
                        <Popup
                            content='The passwords do not match.'
                            open={passWordCorrectState}
                            position='right center'
                            wide
                            trigger={<Input fluid icon='lock' iconPosition='left' placeholder='Password Confirm' onReload defaultValue={passwordConfirm} onChange={(e, {value}) => dispatch(inputConfirmPassword(value))}/>}
                        />
                        <br/>
                        <Button color='teal' fluid size='large' disabled={passwordSize || passWordCorrectState} loading={isLoading} onClick={() => dispatch(signUp())}>
                            Sign up
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    <Grid columns={2} relaxed='very'>
                        <Grid.Column>
                            <Button color='teal' fluid onClick={() => dispatch(goLogin())}>
                                Login
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button color='teal' fluid onClick={() => dispatch(goFindPW())}>
                                Find PassWord
                            </Button>
                        </Grid.Column>
                    </Grid>
                    <Divider vertical>Or</Divider>
                </Message>
            </Grid.Column>

            <Modal
                open={isModalOpen} size={"mini"}
            >
                <Modal.Header>Sign up error</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <p>
                            {errorMessage}
                        </p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='teal' onClick={() => dispatch(closeModal())}>
                        Close
                    </Button>
                </Modal.Actions>
            </Modal>
        </Grid>
    )
}

function VerificationCode(){
    const dispatch = useDispatch();
    const email = useSelector((state) => state.auth.loginUserID)
    const password = useSelector((state) => state.auth.loginUserPassword)
    const passwordConfirm = useSelector((state) => state.auth.loginConfirmPassword)
    const isLoading = useSelector((state) => state.auth.loadingState);
    const isModalOpen = useSelector((state) => state.auth.modalState);
    const errorMessage = useSelector((state) => state.auth.errorMessage);

    return(
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src="../../logo.svg" /> Sign up to your account
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Input fluid icon='user' iconPosition='left' placeholder='E-mail address' defaultValue={email} disabled/>
                        <br/>
                        <Input fluid icon='lock' iconPosition='left' placeholder='Password' defaultValue={password} disabled/>
                        <Input fluid icon='lock' iconPosition='left' placeholder='Password Confirm' defaultValue={passwordConfirm} disabled/>
                        <br/>
                        <Button color='teal' fluid size='large' disabled>
                            Sign up
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    <h3> Check your email</h3>
                    <Input fluid icon='mail' iconPosition='left' placeholder='VerificationCode' onChange={(e, {value}) => dispatch(inputVerificationCode(value))}/>
                    <Button color='teal' fluid size='large' loading={isLoading} onClick={() => dispatch(confirmSignUp())}>
                    Send Verification Code
                    </Button>
                </Message>
            </Grid.Column>

            <Modal
                open={isModalOpen} size={"mini"}
            >
                <Modal.Header>Login Error</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <p>
                            {errorMessage}
                        </p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='teal' onClick={() => dispatch(closeModal())}>
                        Close
                    </Button>
                </Modal.Actions>
            </Modal>
        </Grid>


    )
}