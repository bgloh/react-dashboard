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

export default function ShowPlayer() {
    const dispatch = useDispatch()
    const response = useSelector((state) => state.http.response)//플레이어 이름으로 검색한 데이터 불러오기
    return (
        <div style={{ height: 450}}>
            <DataGrid//표의 형태로 표시
                rows={response}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                onCellClick={(newSelection) => {
                    console.log(newSelection.row);
                    dispatch(setValue(newSelection.row));// cell 선택시 해당 셀의 정보가 SendPlayer 영역에 표시됨
                }
            }
            />
        </div>
    );
}
