import React from 'react'
import { Grid, Image, Segment, Card, Icon } from 'semantic-ui-react'
import HomeChart from "./home/HomeChart";
import HomeTable from "./home/HomeTable";
import Rank from "./home/Rank";
import {getHomeUser} from "./httpDucks";
import {useDispatch} from "react-redux";

export function Home(){
    const dispatch = useDispatch();
    dispatch(getHomeUser());// 유저 정보 불러오기
    return(
        <Grid centered={true} padded={'vertically'}>
            <Grid.Row columns={2} stretched>
                <Grid.Column width={8}>
                    <Segment padded raised>
                        <HomeChart/>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={4} textAlign={"center"}>
                    <Segment raised>
                        <Rank/>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
                <Grid.Column width={12}>
                    <Segment padded={"very"} raised>
                        <HomeTable/>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}