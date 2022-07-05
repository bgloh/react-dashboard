import {useDispatch, useSelector} from "react-redux";
import {Button, Form, Grid, Header, Image, Message, Segment, Input, Divider, Modal} from "semantic-ui-react";
import React from "react";
import {closeModal, goFindPW, goSignUp, inputID, inputPassword, signIn} from "./authRouterDucks";


//Router
export function Login(){
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.auth.loadingState);
    const isModalOpen = useSelector((state) => state.auth.modalState);
    const errorMessage = useSelector((state) => state.auth.errorMessage);

    return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image src="../../logo.svg" /> Log-in to your account
            </Header>
            <Form size='large'>
                <Segment stacked>
                    <Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={(e, {value}) => dispatch(inputID(value))}/>
                    <Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' onChange={(e, {value}) => dispatch(inputPassword(value))}/>
                    <br/>
                    <Button color='teal' fluid size='large' onClick={() => dispatch(signIn())} loading={isLoading}>
                        Login
                    </Button>
                </Segment>
            </Form>
            <Message>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column>
                        <Button color='teal' fluid onClick={() => dispatch(goSignUp())}>
                            Sign Up
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