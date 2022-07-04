import {useDispatch, useSelector} from "react-redux";
import {Button, Divider, Form, Grid, Header, Image, Input, Message, Modal, Popup, Segment} from "semantic-ui-react";
import React from "react";
import {
    closeModal,
    forgotPassword,
    goLogin,
    goSignUp, inputConfirmPassword,
    inputID,
    inputPassword,
    inputVerificationCode, sendNewPassword
} from "./authRouterDucks";


//Router
export function FindPassWord(){
        const passwordChangeState = useSelector((state) => state.auth.passwordChangeState)
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
    const isLoading = useSelector((state) => state.auth.loadingState);
    const isModalOpen = useSelector((state) => state.auth.modalState);
        return(
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src="../../logo.svg" /> Find Pass Word
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={(e, {value}) => dispatch(inputID(value))}/>
                            <br/>
                            <Button color='teal' fluid size='large' loading={isLoading} onClick={() => dispatch(forgotPassword())} >
                                Find Your Pass Word
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
                                <Button color='teal' fluid onClick={() => dispatch(goSignUp())}>
                                    Sign Up
                                </Button>
                            </Grid.Column>
                        </Grid>
                        <Divider vertical>Or</Divider>
                    </Message>
                </Grid.Column>

                <Modal
                    open={isModalOpen} size={"mini"}
                >
                    <Modal.Header>Login Error</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <p>
                                ID or Password Error
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

function NewPassword(){
    const dispatch = useDispatch();
    const email = useSelector((state) => state.auth.loginUserID)
    const passwordSize = useSelector((state) => state.auth.passWordSizeState);
    const passWordCorrectState = useSelector((state) => state.auth.passWordCorrectState);
    const password = useSelector((state) => state.auth.loginUserPassword)
    const passwordConfirm = useSelector((state) => state.auth.loginConfirmPassword)
    const isLoading = useSelector((state) => state.auth.loadingState);
    const isModalOpen = useSelector((state) => state.auth.modalState);

        return(
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src="../../logo.svg" /> Find Pass Word
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Input fluid icon='user' iconPosition='left' placeholder='E-mail address' defaultValue={email} disabled/>
                            <br/>
                            <Button color='teal' fluid size='large' disabled>
                                Find Your Pass Word
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
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
                        <Input fluid icon='mail' iconPosition='left' placeholder='VerificationCode' onChange={(e, {value}) => dispatch(inputVerificationCode(value))}/>
                        <br/>
                        <Button color='teal' fluid size='large' disabled={passwordSize || passWordCorrectState} loading={isLoading} onClick={() => dispatch(sendNewPassword())}>
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
                                ID or Password Error
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