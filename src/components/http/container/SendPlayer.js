import {postUser, updateValue} from "../httpDucks";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { Button, TextArea } from 'semantic-ui-react'

export function SendPlayer() {
    const dispatch = useDispatch()
    const value = useSelector((state) => state.http.value)
    return (
        <div>
            <TextArea style={{width: '100%', height : '400px' ,resize : 'none'}}
                                  placeholder={"전송될 데이터가 표시될 영역"} value={value}
                                  onChange={e => dispatch(updateValue(e.target.value))}/>
            <br/>
            <br/>
            <Button onClick={() => dispatch(postUser(value))}>{/*데이터를 POST 메소드로 전송*/}
                전송
            </Button>
        </div>
    )
}