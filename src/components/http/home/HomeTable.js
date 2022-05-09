import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {useDispatch, useSelector} from "react-redux";
import {setValue} from "../httpDucks";

const columns = [
    { field: 'PK', headerName: 'PK', width: 90},
    { field: 'SK', headerName: 'SK', width: 160},
    { field: 'date', headerName: 'date', width: 160},
    { field: 'playerID', headerName: 'playerID', width: 160}
]

export default function HomeTable() {
    const dispatch = useDispatch()
    const response = useSelector((state) => state.http.userHome)//플레이어 이름으로 검색한 데이터 불러오기
    console.log(123);
    console.log(response);
    return (
        <div style={{ height: 400}}>
            <DataGrid//표의 형태로 표시
                rows={response}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
}
