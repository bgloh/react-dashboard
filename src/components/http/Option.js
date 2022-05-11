import React from 'react'
import {Dropdown, Segment, Grid} from 'semantic-ui-react'
import { Outlet, Link } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {changeBackGroundColor} from "./httpDucks";
const options = [
    {
    text: 'red',
    value: 'red',
    },
    {
        text: 'black',
        value: 'black',
    },
    {
        text: 'green',
        value: 'green',
    },
    {
        text : "lightskyblue",
        value: "lightskyblue"
    }

]
export function Option(){
    const dispatch = useDispatch()
    return(
        <div style={{minHeight : 700}}>
            <Grid centered={true} padded={'vertically'}>
                <Grid.Row columns={1}>
                    <Grid.Column width={12} textAlign={"center"}>
                        <Segment padded raised>
                            <h1>Select Option</h1>
                            <Segment.Group horizontal>
                                <Segment ><h2>Select Background Color</h2></Segment>
                            <Segment >
                                <Dropdown
                                text='Color'
                                floating
                                options={options}
                                onChange={(e, {value}) => dispatch(changeBackGroundColor(value))}
                            >
                            </Dropdown>
                        </Segment>
                            </Segment.Group>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}