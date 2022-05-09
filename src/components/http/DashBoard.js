import React from 'react'
import ShowPlayer from "./container/ShowPlayer";
import {SendPlayer} from "./container/SendPlayer";
import {Grid, Segment,} from 'semantic-ui-react'
import PlayerList from "./container/PlayerList";
import Chart from "./container/Chart";
import {getUserList} from "./httpDucks";
import {useDispatch} from "react-redux";



export function DashBoard() {
    const dispatch = useDispatch();
    dispatch(getUserList());// 유저 정보 불러오기
    return (

        <Grid centered={true} padded={'vertically'} columns={2} >
            <Grid.Row centered stretched>{/*2칸 그리드 생성*/}
                <Grid.Column width={4}>
                    <Segment raised>
                        <PlayerList/>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={9}>
                    <Grid>
                        <Grid.Row centered columns={2} stretched>{/*2칸 그리드 생성*/}
                            <Grid.Column>
                                <Segment padded raised>
                                    <ShowPlayer/>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment padded raised>
                                    <SendPlayer/>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row centered>{/*2칸 그리드 생성*/}
                            <Grid.Column>
                                <Segment raised>
                                    <Chart/>
                                    <br/>
                                    <br/>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>

            </Grid.Row>
        </Grid>
    )
}
