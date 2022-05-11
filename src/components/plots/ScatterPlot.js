import Plot from 'react-plotly.js';

const ScatterPlot = ({xData, yData}) => (

    <Plot
            data={[
                {
                    x: xData,
                    y: yData,
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'orange', size: 7},
                    line: {color : 'darkgray'},
                    
                    }
                ]}
                layout={ {width: 800, height: 600, 
                        title: 'Sleep Time',
                        xaxis : {title : 'x-axis'},
                        yaxis : {title : 'y-axis'},
                        plot_bgcolor : '#eee',
                    }
                }
    />

)








export default ScatterPlot;