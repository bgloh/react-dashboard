// Lineplot recharts
import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    Line,
    CartesianGrid,
    Tooltip,
    Text,
} from 'recharts';

import {format, parseISO, subDays} from "date-fns";



export default function LinePlot({data : d}) {
    //console.log(d);
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={d}>

                <Line dataKey="y" stroke="#245187"/>
                <Tooltip/>
                <XAxis
                dataKey="x"
                axisLine={false}
                tickLine={false}
                tickCount={4}
                label={ <Text x={500} y={0} dx={0} dy={390} offset={0} angle={0}>
                                   Date[month.day.hour]</Text>    }
                
                tickFormatter={(str) => {
                    const date = parseISO(str);
                    const tickInterval = 7 ; // 7 days interval
                    if (date.getDate() % tickInterval != 0) 
                        return format(date, "MMM,d,h");
                    else return "";
                    }} 
            
        />


                <YAxis dataKey="y"
                       axisLine = {false}
                       tickLine = {false}
                       tickCount ={6}      
                       label={ <Text x={0} y={0} dx={30} dy={250} offset={0} angle={-90}>
                                   Sleep Time [min]</Text>            }          
                />

                <CartesianGrid stroke="gray" opacity={0.5}/>

            </LineChart>
        </ResponsiveContainer>
    ) 
}
