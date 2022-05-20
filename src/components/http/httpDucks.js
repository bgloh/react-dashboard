import produce, {current} from 'immer';
import axios from 'axios';
import {gridColumnVisibilityModelSelector} from "@mui/x-data-grid";
import httpEndPoint from "../../httpEndPoint";

export const GET_USER_LIST_START = 'GET_USER_LIST_START'; // getUserList 함수 비동기 처리 시작시의 상태
export const GET_USER_LIST_SUCCESS = 'GET_USER_LIST_SUCCESS'; // getUserList 함수 비동기 처리 성공시의 상태
export const GET_USER_LIST_FAILURE = 'GET_USER_LIST_FAILURE'; // getUserList 함수 비동기 처리 실패시의 상태
export const GET_HOME_USER_START = 'GET_HOME_USER_START'; // getHomeUser 함수 비동기 처리 시작시의 상태
export const GET_HOME_USER_SUCCESS = 'GET_HOME_USER_SUCCESS'; // getHomeUser 함수 비동기 처리 성공시의 상태
export const GET_HOME_USER_FAILURE = 'GET_HOME_USER_FAILURE'; // getHomeUser 함수 비동기 처리 실패시의 상태
export const GET_USER_START = 'GET_USER_START'; // getUser 함수 비동기 처리 시작시의 상태
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'; // getUser 함수 비동기 처리 성공시의 상태
export const GET_USER_FAILURE = 'GET_USER_FAILURE'; // getUser 함수 비동기 처리 실패시의 상태
export const POST_USER_START = 'POST_USER_START'; // postUser 함수 비동기 처리 시작시의 상태
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS'; // postUser 함수 비동기 처리 성공시의 상태
export const POST_USER_FAILURE = 'POST_USER_FAILURE'; // postUser 함수 비동기 처리 실패시의 상태
export const SET_VALUE = 'SET_VALUE'; // SendPlayer 컴포넌트 Value 지정시 호출되는 상태
export const UPDATE_VALUE = 'UPDATE_VALUE'; // SendPlayer 컴포넌트 Value 수정시 호출되는 상태
export const SET_HOME_VIEW_TYPE = 'SET_HOME_VIEW_TYPE'; // Chart 컴포넌트 ViewType 선택시 호출되는 상태
export const SET_HOME_DATE_TYPE = 'SET_HOME_DATE_TYPE'; // Chart 컴포넌트 DateType 선택시 호출되는 상태
export const SET_VIEW_TYPE = 'SET_VIEW_TYPE'; // Chart 컴포넌트 ViewType 선택시 호출되는 상태
export const SET_DATE_TYPE = 'SET_DATE_TYPE'; // Chart 컴포넌트 DateType 선택시 호출되는 상태
export const SET_FRONT_YEAR = 'SET_FRONT_YEAR'; // 검색할 날짜 범위 지정 년 앞
export const SET_BACK_YEAR = 'SET_BACK_YEAR'; // 검색할 날짜 범위 지정 년 뒤
export const SET_FRONT_MONTH = 'SET_FRONT_MONTH'; // 검색할 날짜 범위 지정 월 앞
export const SET_BACK_MONTH = 'SET_BACK_MONTH'; // 검색할 날짜 범위 지정 월 뒤
export const SET_FRONT_DATE = 'SET_FRONT_DATE'; // 검색할 날짜 범위 지정 일 앞
export const SET_BACK_DATE = 'SET_BACK_DATE'; // 검색할 날짜 범위 지정 일 뒤
export const DATA_FILTER = 'DATA_FILTER'; // 차트 데이터 필터링
export const SET_HOME_FRONT_YEAR = 'SET_HOME_FRONT_YEAR'; // 검색할 날짜 범위 지정 년 앞
export const SET_HOME_BACK_YEAR = 'SET_HOME_BACK_YEAR'; // 검색할 날짜 범위 지정 년 뒤
export const SET_HOME_FRONT_MONTH = 'SET_HOME_FRONT_MONTH'; // 검색할 날짜 범위 지정 월 앞
export const SET_HOME_BACK_MONTH = 'SET_HOME_BACK_MONTH'; // 검색할 날짜 범위 지정 월 뒤
export const SET_HOME_FRONT_DATE = 'SET_HOME_FRONT_DATE'; // 검색할 날짜 범위 지정 일 앞
export const SET_HOME_BACK_DATE = 'SET_HOME_BACK_DATE'; // 검색할 날짜 범위 지정 일 뒤
export const HOME_DATA_FILTER = 'HOME_DATA_FILTER'; // 차트 데이터 필터링
export const SET_BACK_GROUND_COLOR = 'SET_BACK_GROUND_COLOR';// 배경 색 변경


export const getHomeUser =()=> {
    return (dispatch, getState) =>{
        dispatch({type: GET_HOME_USER_START})
        let url = httpEndPoint.getHomeUser;
        axios.get(url, {// get 메소드를 통해 전체 유저 데이터를 받아냄
        }).then(
            function (response)
            {
                let userData = response.data;
                dispatch({type: GET_HOME_USER_SUCCESS, payload: userData})// 유저 데이터를 상태와 함께 리듀서로 보냄
                console.log(userData.Items);
            }).catch(function (error){// 실패시 실행
            dispatch({type: GET_HOME_USER_FAILURE, payload: error})
        })
    }
}

export const getUserList =()=> {
    return (dispatch, getState) =>{
        dispatch({type: GET_USER_LIST_START})
        let url = httpEndPoint.getUserList;
        axios.get(url, {// get 메소드를 통해 전체 유저 데이터를 받아냄
        }).then(
            function (response)
            {
                let userData = response.data;
                dispatch({type: GET_USER_LIST_SUCCESS, payload: userData})// 유저 데이터를 상태와 함께 리듀서로 보냄
                console.log(userData.Items);
            }).catch(function (error){// 실패시 실행
            dispatch({type: GET_USER_LIST_FAILURE, payload: error})
        })
    }
}

export function getUser(payload) {
    return (dispatch, getState) =>{

        dispatch({type: GET_USER_START})
        const name = payload; //선택한 유저의 이름
        let url = httpEndPoint.getUser;
        axios.get(url+httpEndPoint.getUserPlayer+name, {// 비동기 방식을 통해 유저이름을 바탕으로 해당 유저의 DB 검색
        }).then(
            function (response)
            {
                let userData = response.data;
                dispatch({type: GET_USER_SUCCESS, payload: userData})// 유저 데이터를 상태와 함께 리듀서로 보냄
                console.log(userData.Items);
            }).catch(function (error){
                dispatch({type: GET_USER_FAILURE, payload: error})
        })
    }
}

export function postUser(payload){

    return (dispatch , getState) =>{

        dispatch({type: POST_USER_START})
        var value = JSON.parse(payload);//Json 문자열을 Json Object로 변경
        let url = httpEndPoint.postUser;
        axios.post(url,value).then//post 메소드로 보냄
        (function (reponse)
        {
            dispatch({type: POST_USER_SUCCESS})
        }).catch(function (error){
            dispatch({type: POST_USER_FAILURE})
        })
    }
}

export function setValue(value){
    return {
        type : SET_VALUE, payload : value
    }
}
export function updateValue(value){
    return {
        type : UPDATE_VALUE, payload : value
    }
}

export function setHomeViewType(value){
    return {
        type : SET_HOME_VIEW_TYPE, payload : value
    }
}

export function setHomeDateType(value){
    return {
        type : SET_HOME_DATE_TYPE, payload : value
    }
}

export function setViewType(value){
    return {
        type : SET_VIEW_TYPE, payload : value
    }
}

export function setDateType(value){
    return {
        type : SET_DATE_TYPE, payload : value
    }
}

const changeDate = (value, year) => {
    const day = []
    switch (value)
    {
        case '01':
            for (let i = 1; i < 32; i++) {
                day.push({ key: i, value: i, text: i })
            }
            break;

        case '02':
            let k = 0;
            console.log(year % 4 === 0)
            if(year % 4 === 0) {
                if (year % 100 === 0) {
                    if (year % 400 === 0)
                        k = 30;
                    else
                        k = 29;
                }
                else
                    k = 30;
            }
            else
                k = 29;
            for (let i = 1; i < k; i++) {
                day.push({ key: i, value: i, text: i })
            }
            break;

        case '03':
            for (let i = 1; i < 32; i++) {
                day.push({ key: i, value: i, text: i })
            }
            break;

        case '04':
            for (let i = 1; i < 31; i++) {
                day.push({ key: i, value: i, text: i })
            }
            break;

        case '05':
            for (let i = 1; i < 32; i++) {
                day.push({ key: i, value: i, text: i })
            }
            break;

        case '06':
            for (let i = 1; i < 31; i++) {
                day.push({ key: i, value: i, text: i })
            }
            break;

        case '07':
            for (let i = 1; i < 32; i++) {
                day.push({ key: i, value: i, text: i })
            }
            break;

        case '08':
            for (let i = 1; i < 32; i++) {
                day.push({ key: i, value: i, text: i })
            }
            break;

        case '09':
            for (let i = 1; i < 31; i++) {
                day.push({ key: i, value: i, text: i })
            }
            break;

        case '10':
            for (let i = 1; i < 32; i++) {
                day.push({ key: i, value: i, text: i })
            }
            break;

        case '11':
            for (let i = 1; i < 31; i++) {
                day.push({ key: i, value: i, text: i })
            }
            break;

        case '12':
            for (let i = 1; i < 32; i++) {
                day.push({ key: i, value: i, text: i })
            }
            break;

        default:
            break;
    }
    console.log(day)
    return day
}
export function changeFrontYear(value){
    return {
        type : SET_FRONT_YEAR, payload : value
    }

}

export function changeBackYear(value){
    return {
        type : SET_BACK_YEAR, payload : value
    }

}export function changeFrontMonth(value){
    return {
        type : SET_FRONT_MONTH, payload : value
    }

}

export function changeBackMonth(value){
    return {
        type : SET_BACK_MONTH, payload : value
    }
}

export function changeFrontDate(value){
    return {
        type : SET_FRONT_DATE, payload : value
    }

}

export function changeBackDate(value){
    return {
        type : SET_BACK_DATE, payload : value
    }
}

export function chartFiltering(){
    return{
        type : DATA_FILTER
    }

}


export function changeHomeFrontYear(value){
    return {
        type : SET_HOME_FRONT_YEAR, payload : value
    }

}

export function changeHomeBackYear(value){
    return {
        type : SET_HOME_BACK_YEAR, payload : value
    }

}export function changeHomeFrontMonth(value){
    return {
        type : SET_HOME_FRONT_MONTH, payload : value
    }

}

export function changeHomeBackMonth(value){
    return {
        type : SET_HOME_BACK_MONTH, payload : value
    }
}

export function changeHomeFrontDate(value){
    return {
        type : SET_HOME_FRONT_DATE, payload : value
    }

}

export function changeHomeBackDate(value){
    return {
        type : SET_HOME_BACK_DATE, payload : value
    }
}

export function homeChartFiltering(){
    return{
        type : HOME_DATA_FILTER
    }

}
export function changeBackGroundColor(value){
    return {
        type : SET_BACK_GROUND_COLOR, payload : value
    }
}

const getMostUser = (userList, type) => {
    let userID = {};
    switch (type) {
        case 'time':
            for(let i = 0; i < userList.length; i ++){
                // console.log(userList[i].playerID);
                if(userID.hasOwnProperty(userList[i].playerID)) {
                    if(userList[i].playerInfo.path == undefined) {
                        userID[userList[i].playerID] += 1;
                    }
                    else
                        userID[userList[i].playerID] += userList[i].playerInfo.path.length;
                }
                else {
                    if(userList[i].playerInfo.path == undefined) {
                        userID[userList[i].playerID] = 1;
                    }
                    else
                    userID[userList[i].playerID] = userList[i].playerInfo.path.length;
                    }
                }
            break;
        case 'count':
            for(let i = 0; i < userList.length; i ++)
                if(userID.hasOwnProperty(userList[i].playerID))
                    userID[userList[i].playerID] += 1;
                else
                    userID[userList[i].playerID] = 1;
            break;
        default:

    }
    // console.log(userID);
    let arr = Object.values(userID);
    let max = Math.max(...arr);
    let index = arr.indexOf(max);
    let user = Object.keys(userID)[index];
    console.log(user);
    return user;

}

const initialState ={
    res: "push the submit button",
    name: "",
    value: "",
    viewType: "",
    dateType: "",
    homeViewType: "",
    homeDateType: "",
    mostOftenUser: "",
    mostLongUser: "",
    backGroundColor: "lightskyblue",
    response: [],
    userHome: [],
    userHomeGraph: [],
    userHomeGraphClone: [],
    userHomeChart:[],
    playerList: [],
    data: [],
    dataClone: [],
    chart: [],
    frontYear: 0,
    frontMonth: 0,
    frontDate: 0,
    backYear: 0,
    backMonth: 0,
    backDate: 0,
    frontDateList: [],
    backDateList: [],
    homeFrontYear: 0,
    homeFrontMonth: 0,
    homeFrontDate: 0,
    homeBackYear: 0,
    homeBackMonth: 0,
    homeBackDate: 0,
    homeFrontDateList: [],
    homeBackDateList: [],
}

const httpReducer =(state=initialState, action)=>{
    switch (action.type)
    {
        case GET_HOME_USER_START:
            return produce(state,draft =>{
                draft.userHome = []
            })

        case GET_HOME_USER_SUCCESS:
            return produce(state,draft => {
                if (action.payload.Items.length == 0) {//리스트가 비어있을 경우
                    draft.userHome = []
                    return;
                }
                draft.res = "";
                draft.userHome = action.payload.Items;
                draft.userHome.sort(function(a, b) {//그래프 표시를 위한 데이터 날짜순 정렬
                    var dateA = a.date;
                    var dateB = b.date;
                    if (dateA < dateB) {
                        return -1;
                    }
                    if (dateA > dateB) {
                        return 1;
                    }
                    return 0;
                });
                for (let i = 0; i < draft.userHome.length; i++) {//data grid(표)를 표시하기 위해 id 행을 추가해준다.
                    draft.userHome[i].id = i+1
                }
                const Userdata = [];
                for(let i = 0; i < draft.userHome.length; i++) // 그래프를 그리기 위한 데이터 파싱
                {
                    const day = draft.userHome[i].date.split('T');
                    const date = day[0].split('-');
                    let time = 0;
                    if(draft.userHome[i].playerInfo.path !== undefined)
                        time = draft.userHome[i].playerInfo.path.length;

                    const data = {
                        "year" : date[0],
                        "month" : date[0] + "." + date[1],
                        "day" : date[0] + "." + date[1] + "." + date[2],
                        "time" : time,
                    };
                    Userdata.push(data);
                }
                draft.userHomeGraph = Userdata;
                draft.userHomeGraphClone = Object.assign({}, draft.userHomeGraph);
                draft.mostLongUser = getMostUser(action.payload.Items, 'time');
                draft.mostOftenUser = getMostUser(action.payload.Items, 'count');
                // console.log(draft.mostLongUser);
                // console.log(draft.mostOftenUser);
                // console.log(draft.userHomeGraphClone);

            })

        case GET_HOME_USER_FAILURE:
            return produce(state,draft =>{
                draft.res = "error";
            })
        case GET_USER_LIST_START:
            return produce(state,draft =>{
                draft.playerList = ["wait"]
            })

        case GET_USER_LIST_SUCCESS:
            return  produce(state,draft => {
                if (action.payload.Items.length == 0) {//리스트가 비어있을 경우
                    draft.playerList = ["error"]
                    return;
                }
                var lastItem = action.payload.Items;
                var playerInfo = lastItem.map(function (val, index) {//Json Array내부의 Json Object에서 playerInfo 부분만 따로 배열로 만듬
                    return val['playerInfo'];
                })
                var players = playerInfo.map(function (val, index) {//Json Array내부의 Json Object에서 playerName 부분만 따로 배열로 만듬
                    return val['playerName'];
                }).filter(function (val, index, arr) {// 중복 값 제거
                    return arr.indexOf(val) === index;
                });
                var playerList = []
                for (var i = 0; i < players.length; i++) {
                    if (players[i])// null 값 제거
                        playerList.push(players[i]);
                }
                draft.playerList = playerList;
            })

        case GET_USER_LIST_FAILURE:
            return produce(state,draft =>{
                draft.res = "error";
            })

        case GET_USER_START:
            return produce(state,draft =>{
                draft.res = "loading"
            })

        case GET_USER_SUCCESS:
            return  produce(state,draft =>{
                if(action.payload.Items.length == 0)//리스트가 비어있을 경우
                {
                    draft.res = "해당 플레이어는 존재하지 않음"
                    draft.response = []
                    return;
                }
                draft.res = "";
                draft.response = action.payload.Items;
                draft.response.sort(function(a, b) {//그래프 표시를 위한 데이터 날짜순 정렬
                    var dateA = a.date;
                    var dateB = b.date;
                    if (dateA < dateB) {
                        return -1;
                    }
                    if (dateA > dateB) {
                        return 1;
                    }

                    return 0;
                });
                // var lastItem = action.payload.Items[action.payload.Items.length-1];
                // lastItem.SK = 'playerName#'+lastItem.playerInfo.playerName+'#date#'+getCurrentTime();
                // lastItem.playerInfo.path = new Array();
                // delete lastItem.date;
                // draft.value = JSON.stringify(lastItem);
                for (let i = 0; i < draft.response.length; i++) {//data grid(표)를 표시하기 위해 id 행을 추가해준다.
                    draft.response[i].id = i+1
                }
                const Userdata = [];
                for(let i = 0; i < draft.response.length; i++) // 그래프를 그리기 위한 데이터 파싱
                {
                    const day = draft.response[i].date.split('T');
                    const date = day[0].split('-');
                    let time = 0;
                    if(draft.response[i].playerInfo.path !== undefined)
                        time = draft.response[i].playerInfo.path.length;

                    const data = {
                        "year" : date[0],
                        "month" : date[0] + "." + date[1],
                        "day" : date[0] + "." + date[1] + "." + date[2],
                        "time" : time,
                    };
                    Userdata.push(data);
                }
                draft.data = Userdata;
                draft.dataClone = Object.assign({}, draft.data);
                console.log(draft.dataClone);
            })

        case GET_USER_FAILURE:
            return produce(state,draft =>{
                draft.res = "error";
            })

        case POST_USER_START:
            return produce(state,draft =>{
                draft.res = "posting user data";
            })

        case POST_USER_SUCCESS:
            return produce(state,draft =>{
                draft.res = "data upload success";
            })

        case POST_USER_FAILURE:
            return produce(state,draft =>{
                draft.res = "data upload failed";
            })

        case SET_VALUE:
            return produce(state, draft =>{
                draft.value = JSON.stringify(action.payload);
            })

        case UPDATE_VALUE:
            return produce(state, draft =>{
                draft.value = action.payload;
            })

        case SET_VIEW_TYPE:
            return produce(state, draft =>{
                console.log(action.payload);
                draft.viewType = action.payload;
            })

        case SET_DATE_TYPE:
            return produce(state, draft =>{
                console.log(action.payload);
                draft.dateType = action.payload;
                if(draft.data.length === 0)
                    return;
                switch(draft.dateType){//선택한 데이터 타입에 따라 그래프에 표시되는 데이터의 종류를 바꾼다.
                    case 'day'://일 단위로 데이터 변형
                        const dayList = []
                        var data = {
                            'date' : draft.data[0].day,
                            'time' : draft.data[0].time,
                            'count' : 1,
                        }
                        dayList.push(data)

                        for(let i = 1, j = 0; i < draft.data.length; i ++)
                        {
                            if(dayList[j].date === draft.data[i].day)
                            {
                                dayList[j].time += draft.data[i].time
                                dayList[j].count += 1;
                            }
                            else
                            {
                                j ++;
                                var data = {
                                    'date' : draft.data[i].day,
                                    'time' : draft.data[i].time,
                                    'count' : 1,
                                }
                                dayList.push(data)

                            }
                        }
                        draft.chart = dayList;
                        console.log(draft.chart)
                        break;

                    case 'month'://월 단위로 데이터 변형
                        const monthList = []
                        var data = {
                            'date' : draft.data[0].month,
                            'time' : draft.data[0].time,
                            'count' : 1,
                        }
                        monthList.push(data)

                        for(let i = 1, j = 0; i < draft.data.length; i ++)
                        {
                            if(monthList[j].date === draft.data[i].month)
                            {
                                monthList[j].time += draft.data[i].time
                                monthList[j].count += 1;
                            }
                            else
                            {
                                j ++;
                                var data = {
                                    'date' : draft.data[i].month,
                                    'time' : draft.data[i].time,
                                    'count' : 1,
                                }
                                monthList.push(data)

                            }
                        }
                        draft.chart = monthList;
                        console.log(draft.chart)
                        break;

                    case 'year'://년 단위로 데이터 변형
                        const yearList = []
                        var data = {
                            'date' : draft.data[0].year,
                            'time' : draft.data[0].time,
                            'count' : 1,
                        }
                        yearList.push(data)

                        for(let i = 1, j = 0; i < draft.data.length; i ++)
                        {
                            if(yearList[j].date === draft.data[i].year)
                            {
                                yearList[j].time += draft.data[i].time
                                yearList[j].count += 1;
                            }
                            else
                            {
                                j ++;
                                var data = {
                                    'date' : draft.data[i].year,
                                    'time' : draft.data[i].time,
                                    'count' : 1,
                                }
                                yearList.push(data)

                            }
                        }
                        draft.chart = yearList;
                        console.log(draft.chart)
                        break;

                    default:
                        return state
                }

            })
        case SET_HOME_VIEW_TYPE:
            return produce(state, draft =>{
                console.log(action.payload);
                draft.homeViewType = action.payload;
            })

        case SET_HOME_DATE_TYPE:
            return produce(state, draft =>{
                console.log(action.payload);
                draft.homeDateType = action.payload;
                if(draft.userHomeGraph.length === 0)
                    return;
                switch(draft.homeDateType){//선택한 데이터 타입에 따라 그래프에 표시되는 데이터의 종류를 바꾼다.
                    case 'day'://일 단위로 데이터 변형
                        const dayList = []
                        var data = {
                            'date' : draft.userHomeGraph[0].day,
                            'time' : draft.userHomeGraph[0].time,
                            'count' : 1,
                        }
                        dayList.push(data)

                        for(let i = 1, j = 0; i < draft.userHomeGraph.length; i ++)
                        {
                            if(dayList[j].date === draft.userHomeGraph[i].day)
                            {
                                dayList[j].time += draft.userHomeGraph[i].time
                                dayList[j].count += 1;
                            }
                            else
                            {
                                j ++;
                                var data = {
                                    'date' : draft.userHomeGraph[i].day,
                                    'time' : draft.userHomeGraph[i].time,
                                    'count' : 1,
                                }
                                dayList.push(data)

                            }
                        }
                        draft.userHomeChart = dayList;
                        console.log(draft.userHomeChart)
                        break;

                    case 'month'://월 단위로 데이터 변형
                        const monthList = []
                        var data = {
                            'date' : draft.userHomeGraph[0].month,
                            'time' : draft.userHomeGraph[0].time,
                            'count' : 1,
                        }
                        monthList.push(data)

                        for(let i = 1, j = 0; i < draft.userHomeGraph.length; i ++)
                        {
                            if(monthList[j].date === draft.userHomeGraph[i].month)
                            {
                                monthList[j].time += draft.userHomeGraph[i].time
                                monthList[j].count += 1;
                            }
                            else
                            {
                                j ++;
                                var data = {
                                    'date' : draft.userHomeGraph[i].month,
                                    'time' : draft.userHomeGraph[i].time,
                                    'count' : 1,
                                }
                                monthList.push(data)

                            }
                        }
                        draft.userHomeChart = monthList;
                        console.log(draft.userHomeChart)
                        break;

                    case 'year'://년 단위로 데이터 변형
                        const yearList = []
                        var data = {
                            'date' : draft.userHomeGraph[0].year,
                            'time' : draft.userHomeGraph[0].time,
                            'count' : 1,
                        }
                        yearList.push(data)

                        for(let i = 1, j = 0; i < draft.userHomeGraph.length; i ++)
                        {
                            if(yearList[j].date === draft.userHomeGraph[i].year)
                            {
                                yearList[j].time += draft.userHomeGraph[i].time
                                yearList[j].count += 1;
                            }
                            else
                            {
                                j ++;
                                var data = {
                                    'date' : draft.userHomeGraph[i].year,
                                    'time' : draft.userHomeGraph[i].time,
                                    'count' : 1,
                                }
                                yearList.push(data)

                            }
                        }
                        draft.userHomeChart = yearList;
                        console.log(draft.userHomeChart)
                        break;

                    default:
                        return state
                }

            })

        case SET_FRONT_YEAR:
            return produce(state,draft =>{
                console.log(action.payload)
                draft.frontYear = action.payload
            })

        case SET_BACK_YEAR:
            return produce(state,draft =>{
                console.log(action.payload)
                draft.backYear = action.payload
            })
        case SET_FRONT_MONTH:
            return produce(state,draft =>{
                console.log(action.payload)
                draft.frontMonth = action.payload
                draft.frontDateList = changeDate(action.payload, draft.frontYear)
            })

        case SET_BACK_MONTH:
            return produce(state,draft =>{
                console.log(action.payload)
                draft.backMonth = action.payload
                draft.backDateList = changeDate(action.payload, draft.backYear)
            })
        case SET_FRONT_DATE:
            return produce(state,draft =>{
                console.log(action.payload)
                draft.frontDate = action.payload
            })

        case SET_BACK_DATE:
            return produce(state,draft =>{
                console.log(action.payload)
                draft.backDate = action.payload
            })

        case DATA_FILTER:
            return produce(state,draft => {
                const frontDate = draft.frontYear + "." + draft.frontMonth + "." + draft.frontDate
                const backDate = draft.backYear + "." + draft.backMonth + "." + draft.backDate
                let data = current(draft.dataClone)
                let chart = []
                for (let i = 0; i < Object.keys(data).length; i++) {
                    console.log(data[i].day >= frontDate)
                    if (data[i].day >= frontDate && data[i].day <= backDate) {
                        console.log(data[i].day)
                        chart.push(data[i])
                    }
                }
                console.log(chart);
                draft.data = chart;
            })

        case SET_HOME_FRONT_YEAR:
            return produce(state,draft =>{
                console.log(action.payload)
                draft.homeFrontYear = action.payload
            })

        case SET_HOME_BACK_YEAR:
            return produce(state,draft =>{
                console.log(action.payload)
                draft.homeBackYear = action.payload
            })
        case SET_HOME_FRONT_MONTH:
            return produce(state,draft =>{
                console.log(action.payload)
                draft.homeFrontMonth = action.payload
                draft.homeFrontDateList = changeDate(action.payload, draft.homeFrontYear)
            })

        case SET_HOME_BACK_MONTH:
            return produce(state,draft =>{
                console.log(action.payload)
                draft.homeBackMonth = action.payload
                draft.homeBackDateList = changeDate(action.payload, draft.homeBackYear)
            })
        case SET_HOME_FRONT_DATE:
            return produce(state,draft =>{
                console.log(action.payload)
                draft.homeFrontDate = action.payload
            })

        case SET_HOME_BACK_DATE:
            return produce(state,draft =>{
                console.log(action.payload)
                draft.homeBackDate = action.payload
            })

        case HOME_DATA_FILTER:
            return produce(state,draft => {
                const frontDate = draft.homeFrontYear + "." + draft.homeFrontMonth + "." + draft.homeFrontDate
                const backDate = draft.homeBackYear + "." + draft.homeBackMonth + "." + draft.homeBackDate
                let data = current(draft.userHomeGraphClone)
                let chart = []
                for (let i = 0; i < Object.keys(data).length; i++) {
                    console.log(data[i].day >= frontDate)
                    if (data[i].day >= frontDate && data[i].day <= backDate) {
                        console.log(data[i].day)
                        chart.push(data[i])
                    }
                }
                console.log(chart);
                draft.userHomeGraph = chart;
            })
        case SET_BACK_GROUND_COLOR:
            return produce(state,draft => {
                draft.backGroundColor = action.payload;
            })

        default:
            return state
    }
}

function getCurrentTime() {
    const now = new Date (Date.now());
    now.setHours(now.getHours()+9);
    console.log(now.toISOString());
    return now.toISOString();
}



export default httpReducer;