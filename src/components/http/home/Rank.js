import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Statistic} from "semantic-ui-react";

export default function Rank() {
    const dispatch = useDispatch()
    const longUser = useSelector((state) => state.http.mostLongUser)//가장 오래 접속한 유저
    const oftenUser = useSelector((state) => state.http.mostOftenUser)//가장 자주 접속한 유저
    // console.log(oftenUser);
    return (
            <Statistic size={"mini"}>
                <br/>
                <br/>
                <br/>
                <Statistic.Value>{oftenUser}</Statistic.Value>
                <br/>
                <Statistic.Label>가장 자주 접속한 유저</Statistic.Label>
                <br/>
                <br/>
                <br/>
                <Statistic.Value>{longUser}</Statistic.Value>
                <br/>
                <Statistic.Label>가장 오래 접속한 유저</Statistic.Label>
            </Statistic>
    );
}
