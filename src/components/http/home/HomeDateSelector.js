import React from 'react'
import { Dropdown, Button } from 'semantic-ui-react'
import {useDispatch, useSelector} from "react-redux";
import {
    changeHomeBackDate,
    changeHomeBackMonth,
    changeHomeBackYear,
    changeHomeFrontDate,
    changeHomeFrontMonth,
    changeHomeFrontYear, homeChartFiltering
} from "../httpDucks";


const year = [
    { key: '2021', value: 2021, text: '2021' },
    { key: '2022', value: 2022, text: '2022' },
    { key: '2023', value: 2023, text: '2023' },
    { key: '2024', value: 2024, text: '2024' },
    { key: '2025', value: 2025, text: '2025' },
    { key: '2026', value: 2026, text: '2026' },
    { key: '2027', value: 2027, text: '2027' },
    { key: '2028', value: 2028, text: '2028' },
    { key: '2029', value: 2029, text: '2029' },
    { key: '2030', value: 2030, text: '2030' },
]
const month = [
    { key: '1', value: '01', text: '1' },
    { key: '2', value: '02', text: '2' },
    { key: '3', value: '03', text: '3' },
    { key: '4', value: '04', text: '4' },
    { key: '5', value: '05', text: '5' },
    { key: '6', value: '06', text: '6' },
    { key: '7', value: '07', text: '7' },
    { key: '8', value: '08', text: '8' },
    { key: '9', value: '09', text: '9' },
    { key: '10', value: '10', text: '10' },
    { key: '11', value: '11', text: '11' },
    { key: '12', value: '12', text: '12' },
]

const DateSelection = () => {
    const front = useSelector((state) => state.http.homeFrontDateList)
    const back = useSelector((state) => state.http.homeBackDateList)
    const dispatch = useDispatch();

        return(
            <div style={{float: "right"}}>
                    <Dropdown
                        placeholder='Select Year'
                        compact
                        search
                        selection
                        options={year}
                        onChange={(e, {value}) => dispatch(changeHomeFrontYear(value))}
                    />
                {"   "}
                    <Dropdown
                        placeholder='Select month'
                        compact
                        search
                        selection
                        options={month}
                        onChange={(e, {value}) => dispatch(changeHomeFrontMonth(value))}
                    />
                {"   "}
                    <Dropdown
                        placeholder='Select day'
                        compact
                        search
                        selection
                        options={front}
                        onChange={(e, {value}) => dispatch(changeHomeFrontDate(value))}
                    />
                <label> ~ </label>
                {"   "}

                    <Dropdown
                        placeholder='Select Year'
                        compact
                        search
                        selection
                        options={year}
                        onChange={(e, {value}) => dispatch(changeHomeBackYear(value))}
                    />
                {"   "}
                    <Dropdown
                        placeholder='Select month'
                        compact
                        search
                        selection
                        options={month}
                        onChange={(e, {value}) => dispatch(changeHomeBackMonth(value))}
                    />
                {"   "}
                    <Dropdown
                        placeholder='Select day'
                        compact
                        search
                        selection
                        options={back}
                        onChange={(e, {value}) => dispatch(changeHomeBackDate(value))}
                    />
                {"   "}

                <Button content='설정' onClick={(e) => dispatch(homeChartFiltering())}/>
            </div>
        )
}

export default DateSelection;

