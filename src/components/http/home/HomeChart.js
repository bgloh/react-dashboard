import React from "react";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {Dropdown} from 'semantic-ui-react';
import {useDispatch, useSelector} from "react-redux";
import {setHomeDateType, setHomeViewType} from "../httpDucks";
import DateSelection from "./HomeDateSelector";

const viewTypes = [
    { key: 'all', value: 'all', text: '모두 보기' },
    { key: 'time', value: 'time', text: '시간 보기' },
    { key: 'count', value: 'count', text: '횟수 보기' },
]

const dateTypes = [
    { key: 'day', value: 'day', text: '1일' },
    { key: 'month', value: 'month', text: '1달' },
    { key: 'year', value: 'year', text: '1년' },
]

const color = [
    "#8884d8",
    "#82ca9d"
]

const SetViewType = () => {//데이터 표시 방식에 따라 다른 데이터를 받아 차트 생성
    console.log("go");
    const viewType = useSelector((state) => state.http.homeViewType)
    const data = useSelector((state) => state.http.userHomeChart)
    const datalist = []
    if(viewType === 'all')
        datalist.push('time','count');
    else datalist.push(viewType);
    console.log(datalist);
    const list = datalist.map((value, index) =>
        <Line
            type="monotone"
            dataKey= {value}
            stroke= {color[index]}
            activeDot={{r: 8}}
        />
    )
    console.log(list)
    return (<ResponsiveContainer width="95%" height={400}>{/*차트의 동적 크기조절을 위한 컴포넌트*/}
        <LineChart
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" padding={{ left: 30, right: 30 }}/>
            <YAxis />
            <Tooltip />
            <Legend />
            {list}
        </LineChart>
    </ResponsiveContainer>);
}

export default function HomeChart() {
    // const viewType = useSelector((state) => state.http.viewType)
    // const dateType = useSelector((state) => state.http.dateType)
    const dispatch = useDispatch();
    return (
        <div>
            <div style={{float : "right"}}>
                <Dropdown//DropDown으로 그래프에 표시 될 데이터 선택
                    placeholder='표시할 데이터 선택'
                    compact
                    selection
                    options={viewTypes}
                    onChange={(e, {value }) => dispatch(setHomeViewType(value))}
                />
                {"   "}
                <Dropdown//DropDown으로 그래프에 표시 될 데이터의 기준 선택
                    placeholder='표시 기준'
                    compact
                    selection
                    options={dateTypes}
                    onChange={(e, {value }) => dispatch(setHomeDateType(value))}
                />
            </div>
            <br/>
            <br/>
            <br/>
            <SetViewType/>
            <DateSelection/>
        </div>
    );
}
