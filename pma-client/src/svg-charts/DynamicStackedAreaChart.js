import React from 'react'
import { StackedAreaChart, YAxis, Grid } from 'react-native-svg-charts';
import { View } from 'react-native';
import * as d3 from 'd3'


const DynamicStackedAreaChart = ({ data }) => {
  const axesSvg = { fontSize: 11, fill: '#007bff' };
  const verticalContentInset = { top: 10, bottom: 10 }
  const xAxisHeight = 20


  const chartData = data.map((data, index) => data);


  const colors = [ 'rgb(138, 0, 230, 0.8)', 'rgb(173, 51, 255, 0.8)', 'rgb(194, 102, 255, 0.8)', 'rgb(214, 153, 255, 0.8)' ]
  const keys   = [ 'Branch1', 'Branch2', 'Branch3', 'Branch4' ]

  return (
    <>
 <View style={ { flexDirection: 'row', height: 200 } }>
                <StackedAreaChart
                    style={ { flex: 1 } }
                    contentInset={ { top: 10, bottom: 10 } }
                    data={ chartData }
                    keys={ keys }
                    colors={ colors }
                    curve={ d3.curveNatural }
                >
                    <Grid/>
                </StackedAreaChart>
                <YAxis
                    style={ { position: 'absolute', top: 0, bottom: 0 }}
                    data={ StackedAreaChart.extractDataPoints(data, keys) }
                    contentInset={ { top: 10, bottom: 10 } }
                    svg={ {
                        fontSize: 8,
                        fill: 'white',
                        stroke: 'black',
                        strokeWidth: 0.1,
                        alignmentBaseline: 'baseline',
                        baselineShift: '3',
                    } }
                />
            </View>
    </>
  )
}


export  {DynamicStackedAreaChart};
